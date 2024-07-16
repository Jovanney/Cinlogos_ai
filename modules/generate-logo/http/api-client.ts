import ky from "ky";

export const deepAiApi = ky.create({
  prefixUrl: "https://api.deepai.org/api/",
  hooks: {
    beforeRequest: [
      (request) => {
        request.headers.set("api-key", `${process.env.DEEP_AI_API_KEY}`);
      },
    ],
  },
});
