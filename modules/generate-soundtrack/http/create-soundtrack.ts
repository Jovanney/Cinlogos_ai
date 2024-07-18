import { sunoAiApi } from "./api-client";

interface GenerateSoundTrackRequest {
  lyrics: string;
  title: string;
  tags: string;
}

export async function createSoundtrack({
  lyrics,
  tags,
  title,
}: GenerateSoundTrackRequest) {
  const response = await sunoAiApi.post("custom_generate", {
    json: {
      prompt: lyrics,
      title,
      tags,
      make_instrumental: true,
      wait_audio: true,
    },
  });

  if (!response) {
    throw new Error("Failed to generate soundtrack");
  }

  return response.json();
}
