import { AuthButton } from "@/components/AuthButton";

export default function SignInPage() {
  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-semibold mb-6">Sign in to Savants</h1>
      <AuthButton />
    </main>
  );
}
