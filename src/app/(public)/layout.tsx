import { ReactNode } from "react";
import Header from "@/components/Header/Header";

export default function PublicLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}