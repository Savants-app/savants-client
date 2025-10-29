// src/components/AuthButton.tsx
"use client";
import { API_URL } from "@/lib/config";

export function AuthButton() {
  return (
    <div className="flex flex-col gap-3">
      <a href={`${API_URL}/auth/oauth/start?provider=github`} className="px-6 py-2 bg-gray-900 text-white rounded">
        Sign in with GitHub
      </a>
      <a href={`${API_URL}/auth/oauth/start?provider=gitlab`} className="px-6 py-2 bg-orange-600 text-white rounded">
        Sign in with GitLab
      </a>
    </div>
  );
}
