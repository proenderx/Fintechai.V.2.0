
"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { signInWithEmailAndPassword } from "firebase/auth";

import AuthForm from "../components/AuthForm";



import Link from "next/link";

export default function LoginPage() {
  const [error, setError] = useState("");
  const router = useRouter();

  async function handleLogin({ email, password }) {
    setError("");
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/dashboard");
    } catch (err) {
      setError(err.message || "Login failed");
    }
  }

  return (
    <>
      <AuthForm type="login" onSubmit={handleLogin} error={error} />
      <div className="text-center mt-4">
        <span className="text-gray-500 text-sm">Don't have an account?</span>{' '}
        <Link href="/signup" className="text-purple-600 hover:underline text-sm font-semibold">Sign Up</Link>
      </div>
    </>
  );
}