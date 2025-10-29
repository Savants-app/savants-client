// src/app/page.tsx
import Link from "next/link";

export const metadata = {
  title: "Savants — Auth Test",
  description: "Next.js frontend to test GitHub/GitLab authentication against the Savants API",
};

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 py-16">
      <div className="max-w-xl w-full text-center">
        <h1 className="text-4xl font-bold tracking-tight">Savants Auth Test</h1>
        <p className="mt-3 text-muted-foreground">
          Backend: <code className="px-2 py-1 text-black rounded bg-gray-100">{process.env.NEXT_PUBLIC_API_URL}</code>
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          <Link
            href="/auth/signin"
            className="inline-flex items-center justify-center rounded-md border px-4 py-2 font-medium hover:bg-gray-50"
          >
            Sign in (GitHub / GitLab)
          </Link>
          <Link
            href="/dashboard"
            className="inline-flex items-center justify-center rounded-md bg-black text-white px-4 py-2 font-medium hover:opacity-90"
          >
            Go to Dashboard
          </Link>
        </div>

        <p className="mt-6 text-sm text-gray-500">
          After OAuth completes, you’ll be redirected to <code>/auth/callback/[provider]</code> and then to{" "}
          <code>/dashboard</code>.
        </p>
      </div>
    </main>
  );
}
