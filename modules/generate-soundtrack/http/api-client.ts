import ky from "ky";

export const sunoAiApi = ky.create({
  prefixUrl:
    "https://sun0api-criacomp-2024-2931223755393-eta-woad.vercel.app/api/",
  timeout: 120000,
});
