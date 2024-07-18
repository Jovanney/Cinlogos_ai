import { sunoAiApi } from "./api-client";

interface GenerateSoundTrackRequest {
  id: string;
}

export async function getAudioSoundtrack({ id }: GenerateSoundTrackRequest) {
  const response = await sunoAiApi.get("get", {
    json: {
      ids: id,
    },
  });

  if (!response) {
    throw new Error("Failed to generate soundtrack");
  }

  return response.json();
}
