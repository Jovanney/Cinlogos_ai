import ky from "ky";

export const sunoAiApi = ky.create({
  prefixUrl: "https://suno-api-new-ten.vercel.app/api/",
  timeout: 120000,
});
