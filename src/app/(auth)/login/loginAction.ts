"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function loginAction(formData: FormData) {
  const username = formData.get("username") as string | null;
  const password = formData.get("password") as string | null;

  if (username === "username" && password === "password") {
    const cookieStore = await cookies();
    cookieStore.set("token", "ok", {
      httpOnly: true,
      maxAge: 86400,
      path: "/",
    });
    redirect("/dashboard");
  }
} 