import { ReactNode } from "react";
import DashboardHeader from "@/components/Dashboard/DashboardHeader/DashboardHeader";



export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <DashboardHeader /> 
      {children}
    </>
  );
}