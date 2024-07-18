import { api } from "./api-client";

interface GenerateRequestData {
  id: string;
}

export async function getSoundTrack({ id }: GenerateRequestData) {
  const response = await api.get("get-soundtrack", {
    json: {
      id,
    },
  });

  if (!response) {
    throw new Error("Failed to generate logo");
  }

  return response.json();
}
