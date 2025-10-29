"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { getCurrentUser } from "@/lib/auth";

export default function OAuthCallback({ params }: { params: { provider: string } }) {
  const router = useRouter();

  useEffect(() => {
    (async () => {
      try {
        await getCurrentUser();
        router.push("/dashboard");
      } catch (e) {
        console.error("Login failed", e);
        router.push("/auth/signin");
      }
    })();
  }, [router]);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <p>Signing you in via {params.provider}...</p>
    </div>
  );
}
