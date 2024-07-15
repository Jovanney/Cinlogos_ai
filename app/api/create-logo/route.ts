import { createLogo } from "@/modules/generate-logo/http/create-logo";
import { NextRequest, NextResponse } from "next/server";

interface RequestData {
  brandAttributes: string[];
  companyName: string;
  companySegment: string;
}

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

    const sunoAiResponse = await createLogo({ prompt });

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
