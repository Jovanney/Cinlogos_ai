import { sunoApi } from "./api-client";

interface GenerateLogoRequest {
  prompt: string;
}

export async function createLogo({ prompt }: GenerateLogoRequest) {
  const response = await sunoApi.post("text2img", {
    json: {
      text: prompt,
      image_generator_version: "Genius",
      style: "AI Logo Generator",
    },
  });

  if (!response) {
    throw new Error("Failed to generate logo");
  }

  return response.json();
}
