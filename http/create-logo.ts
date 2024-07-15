import { api } from "./api-client";

interface GenerateRequestData {
  brandAttributes: string[];
  companyName: string;
  companySegment: string;
}

export async function createLogo({
  brandAttributes,
  companyName,
  companySegment,
}: GenerateRequestData) {
  const response = await api.post("create-logo", {
    json: {
      brandAttributes,
      companyName,
      companySegment,
    },
  });

  if (!response) {
    throw new Error("Failed to generate logo");
  }

  return response.json();
}
