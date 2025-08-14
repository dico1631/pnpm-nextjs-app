import localFont from "next/font/local";

export const pretendard = localFont({
  src: [
    {
      path: "../../public/fonts/PretendardVariable.woff2",
      weight: "45 920", // 가변 폰트 범위
      style: "normal",
    },
  ],
  variable: "--font-pretendard", // CSS 변수명
  display: "swap",
});
