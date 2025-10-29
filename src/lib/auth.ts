import { API_URL } from "./config";
import { api } from "./api";
import { useAuthStore } from "@/store/user";

export async function getCurrentUser() {
  const { data } = await api.get("/users/me");
  useAuthStore.getState().setUser(data);
  return data;
}

function safeRedirect(to: string) {
  try {
    const url = new URL(to); // throws if not absolute
    window.location.href = url.toString();
  } catch {
    console.error("Invalid OAuth start URL:", to);
    alert("Auth is not configured correctly. Check NEXT_PUBLIC_API_URL.");
  }
}

export async function loginWithGithub() {
  const r = await fetch(`${API_URL}/auth/oauth/start?provider=github`, { credentials: "include" });
  const { url } = await r.json();
  window.location.href = url;
}

export async function loginWithGitlab() {
  const r = await fetch(`${API_URL}/auth/oauth/start?provider=gitlab`, { credentials: "include" });
  const { url } = await r.json();
  window.location.href = url;
}
