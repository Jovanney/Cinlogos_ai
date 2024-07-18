import { api } from "./api-client";

interface GenerateRequestData {
  brandAttributes: string[];
  companyName: string;
  companyIndustry: string;
  tags: string;
}

export async function createSoundTrack({
  brandAttributes,
  companyName,
  companyIndustry,
  tags,
}: GenerateRequestData) {
  const response = await api.post("create-soundtrack", {
    json: {
      brandAttributes,
      companyName,
      companyIndustry,
      tags,
    },
  });

  if (!response) {
    throw new Error("Failed to generate logo");
  }

  return response.json();
}
