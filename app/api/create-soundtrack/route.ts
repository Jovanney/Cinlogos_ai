import { createSoundtrack } from "@/modules/generate-soundtrack/http/create-soundtrack";
import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";
interface RequestData {
  brandAttributes: string[];
  brandAttributesOther: string;
  companyName: string;
  companyIndustry: string;
  companyIndustryOther: string;
  tags: string;
  musicStyle: string[];
  musicStyleOther: string;
}

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  timeout: 120000,
});

export const maxDuration = 60;

export async function POST(request: NextRequest) {
  try {
    const requestBody: RequestData = await request.json();
    console.log("requestBody:", requestBody);
    if (
      !requestBody.brandAttributes ||
      !requestBody.companyName ||
      !requestBody.companyIndustry ||
      !requestBody.tags ||
      !requestBody.musicStyle
    ) {
      return new NextResponse(
        JSON.stringify({ error: "Missing required fields" }),
        {
          status: 400,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    }

    const {
      brandAttributes,
      companyName,
      companyIndustry,
      tags,
      musicStyle,
      companyIndustryOther,
      brandAttributesOther,
      musicStyleOther,
    } = requestBody;
    const prompt = `Take a deep breath and write strictly in pt-br a 20 seconds lyric of the company ${companyName}, field ${
      companyIndustryOther.length > 0 ? companyIndustryOther : companyIndustry
    }, and have caracteristcs like: ${brandAttributes.join(", ")} ${
      brandAttributesOther.length > 0 ? +"," + brandAttributesOther : ""
    }`;

    console.log("prompt:", prompt);

    const completion = await openai.chat.completions.create({
      messages: [
        {
          role: "system",
          content: `You are a lyric writer for company jingles`,
        },
        {
          role: "user",
          content: prompt,
        },
      ],
      model: "gpt-4o-2024-05-13",
    });

    const resultPrompt = completion.choices[0].message.content;

    if (!resultPrompt) {
      return new NextResponse(
        JSON.stringify({ error: "Internal Server Error" }),
        {
          status: 500,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    }

    const extraTags = musicStyleOther.length > 0 ? musicStyleOther : "";
    const concatenatedTags = musicStyle.join(", ") + ", " + tags + extraTags;

    const sunoAiResponse = await createSoundtrack({
      lyrics: resultPrompt,
      tags: concatenatedTags,
      title: companyName,
    });

    return NextResponse.json(sunoAiResponse);
  } catch (error) {
    console.error("Error generating logo:", error);
    return new NextResponse(
      JSON.stringify({ error: "Internal Server Error" }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}
