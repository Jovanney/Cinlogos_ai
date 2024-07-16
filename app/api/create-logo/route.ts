import { createLogo } from "@/modules/generate-logo/http/create-logo";
import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";
interface RequestData {
  brandAttributes: string[];
  companyName: string;
  companySegment: string;
}

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function POST(request: NextRequest) {
  try {
    const requestBody: RequestData = await request.json();

    if (
      !requestBody.brandAttributes ||
      !requestBody.companyName ||
      !requestBody.companySegment
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

    const { brandAttributes, companyName, companySegment } = requestBody;

    const prompt = `Generate a logo for a ${brandAttributes.join(
      ", "
    )} company named ${companyName} in the ${companySegment} segment.`;

    const completion = await openai.chat.completions.create({
      messages: [
        {
          role: "system",
          content: `Improve this prompt it will be used to generate a logo with AI, the prompt: ${prompt}`,
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

    const sunoAiResponse = await createLogo({ prompt: resultPrompt });

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
