"use client";

import { useEffect, useState } from "react";
import { useAuthStore } from "@/store/user";
import { getCurrentUser } from "@/lib/auth";

export default function Dashboard() {
  const { user, setUser } = useAuthStore();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const me = await getCurrentUser();
        setUser(me);
      } catch {
        window.location.href = "/auth/signin";
      } finally {
        setLoading(false);
      }
    })();
  }, [setUser]);

  if (loading) return <p>Loading...</p>;

  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-semibold mb-4">Welcome, {user?.name}</h1>
      <img src={user?.avatarUrl} className="w-20 h-20 rounded-full" alt="avatar" />
      <p className="mt-4">Role: {user?.role}</p>
    </main>
  );
}
