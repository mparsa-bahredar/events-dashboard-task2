import type { Metadata } from "next";
import "./globals.css";
import { vazirmatn } from "@/fonts";



export const metadata: Metadata = {
  title: "Events",
  description: "...",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className="bg-[#F5F5F5]   dark:bg-gray-900">
      <body className={`${vazirmatn.className} antialiased min-h-screen`}>
        {children} 
      </body>
    </html>
  );
}