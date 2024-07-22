import { createLogo } from "@/modules/generate-logo/http/create-logo";
import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";
interface RequestData {
  brandAttributes: string[];
  companyName: string;
  companyIndustry: string;
}

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function POST(request: NextRequest) {
  try {
    const requestBody: RequestData = await request.json();

    if (
      !requestBody.brandAttributes ||
      !requestBody.companyName ||
      !requestBody.companyIndustry
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

    const { brandAttributes, companyName, companyIndustry } = requestBody;

    const prompt = `Create a logo for "${companyName}" that conveys ${brandAttributes.join(
      ", "
    )} in the ${companyIndustry} industry. The logo should include the following elements:

    Main Icon: A design that reflects the core aspects of the company, drawn with fine and detailed lines.
    Color Palette: Use a sophisticated color scheme that aligns with the company's attributes.
    Typography: Choose a font that embodies elegance and professionalism. Ensure the typography is legible with adequate spacing.
    Style and Layout: The design should be balanced and centered. The icon should complement the company name with harmonious proportions.
    Texture and Finish: Add subtle effects to enhance the overall quality and appeal of the logo. Ensure a clean and polished look.

    The logo should be modern, memorable, and versatile for various applications, including digital and print media.`;

    const completion = await openai.chat.completions.create({
      messages: [
        {
          role: "system",
          content: "You are a prompt engineer for AI logo generation",
        },
        {
          role: "user",
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

    const deepAiResponse = await createLogo({ prompt: resultPrompt });

    return NextResponse.json(deepAiResponse);
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
