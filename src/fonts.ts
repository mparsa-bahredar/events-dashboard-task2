import localFont from "next/font/local";



export const vazirmatn = localFont({
  src: [
    {
      path: "./assets/vazirmatn-font/Vazirmatn[wght].ttf",
      weight: "100 900",  
      style: "normal",
    },
  ],
  variable: "--font-vazirmatn",
});