import { getAudioSoundtrack } from "@/modules/generate-soundtrack/http/get-audio_url";
import { NextRequest, NextResponse } from "next/server";
interface RequestData {
  id: string;
}

export const maxDuration = 60;

export async function GET(request: NextRequest) {
  try {
    const requestBody: RequestData = await request.json();

    if (!requestBody.id) {
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

    const { id } = requestBody;

    const sunoAiResponse = await getAudioSoundtrack({
      id,
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
