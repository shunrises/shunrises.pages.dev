import { generateOGImage } from "@/lib/og";
import type { APIRoute } from "astro";

export const GET: APIRoute = async () => {
  const png = await generateOGImage({
    title: "shunrises.dev",
    description:
      "공부한 내용, 개발 과정에서의 고민, 프로젝트 경험을 기록하며 기술과 좋아하는 문화를 연결하는 공간입니다.",
  });
  return new Response(png, {
    headers: { "Content-Type": "image/png" },
  });
};
