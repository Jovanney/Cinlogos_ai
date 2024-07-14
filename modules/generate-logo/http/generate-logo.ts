import { sunoApi } from "./api-client";

interface GenerateLogoRequest {
  prompt: string;
}

export async function generateLogo({ prompt }: GenerateLogoRequest) {
  await sunoApi
    .post("generate-logo", {
      json: {
        text: prompt,
        image_generator_version: "Genius",
        style: "AI Logo Generator",
      },
    })
    .json();
}
