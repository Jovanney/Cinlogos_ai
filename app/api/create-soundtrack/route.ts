import { createLogo } from "@/modules/generate-logo/http/create-logo";
import { createSoundtrack } from "@/modules/generate-soundtrack/http/create-soundtrack";
import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";
interface RequestData {
  brandAttributes: string[];
  companyName: string;
  companyIndustry: string;
  tags: string;
}

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  timeout: 120000,
});

export const maxDuration = 60;

export async function POST(request: NextRequest) {
  try {
    const requestBody: RequestData = await request.json();

    if (
      !requestBody.brandAttributes ||
      !requestBody.companyName ||
      !requestBody.companyIndustry ||
      !requestBody.tags
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

    const { brandAttributes, companyName, companyIndustry, tags } = requestBody;
    const prompt = `Escreva uma pequena letra de no máximo 20 segudos sobre uma empresa chamada ${companyName}, do ramo de ${companyIndustry}, e tem como caracteristicas da empresa: ${brandAttributes.join(
      ", "
    )}`;

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
      model: "gpt-3.5-turbo",
    });

    const resultPrompt = completion.choices[0].message.content;

    console.log("resultPrompt:", resultPrompt);

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

    const sunoAiResponse = await createSoundtrack({
      lyrics: resultPrompt,
      tags,
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
