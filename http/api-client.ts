import ky from "ky";

export const sunoApi = ky.create({
  prefixUrl: process.env.DEEP_AI_PUBLIC_API_URL,
  hooks: {
    beforeRequest: [
      async (request) => {
        request.headers.set("api-key", `${process.env.DEEP_AI_API_KEY}`);
      },
    ],
  },
});
