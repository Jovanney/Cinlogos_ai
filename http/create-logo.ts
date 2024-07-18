import { api } from "./api-client";

interface GenerateRequestData {
  brandAttributes: string[];
  companyName: string;
  companyIndustry: string;
}

export async function createLogo({
  brandAttributes,
  companyName,
  companyIndustry,
}: GenerateRequestData) {
  const response = await api.post("create-logo", {
    json: {
      brandAttributes,
      companyName,
      companyIndustry,
    },
  });

  if (!response) {
    throw new Error("Failed to generate logo");
  }

  return response.json();
}
