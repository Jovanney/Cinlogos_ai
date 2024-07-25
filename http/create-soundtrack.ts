import { api } from "./api-client";

interface GenerateRequestData {
  brandAttributes: string[];
  companyName: string;
  companyIndustry: string;
  tags: string;
  brandAttributesOther: string;
  musicStyle: string[];
  musicStyleOther: string;
  companyIndustryOther: string;
}

export async function createSoundTrack({
  brandAttributes,
  companyName,
  companyIndustry,
  tags,
  brandAttributesOther,
  companyIndustryOther,
  musicStyle,
  musicStyleOther,
}: GenerateRequestData) {
  const response = await api.post("create-soundtrack", {
    json: {
      brandAttributes,
      companyName,
      companyIndustry,
      tags,
      brandAttributesOther,
      companyIndustryOther,
      musicStyle,
      musicStyleOther,
    },
  });

  if (!response) {
    throw new Error("Failed to generate logo");
  }

  return response.json();
}
