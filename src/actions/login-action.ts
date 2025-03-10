"use server";

import { cookies } from "next/headers";
import { api } from "@/services/api";

export async function loginAction(email: string, senha: string) {
  try {
    const response = await api.post("/login", { email, senha });

    if (response.status === 200) {
      const { idRecebedor } = response.data;

      const cookieStore = await cookies();

      cookieStore.set("receiverId", idRecebedor, {
        path: "/",
        maxAge: 60 * 60 * 24 * 30,
        httpOnly: true,
      });

      return { success: true };
    }
  } catch (error) {
    console.error("Erro ao fazer login:", error);
    return { success: false, message: "Erro ao fazer login. Verifique suas credenciais." };
  }
}
