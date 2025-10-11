"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase";

export default function Signup() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setBusy(true);
    try {
      const cred = await createUserWithEmailAndPassword(auth, email, password);
      if (name && cred.user) {
        await updateProfile(cred.user, { displayName: name });
      }
      router.push("/dashboard");
    } catch (err) {
      setError(err.message || "Signup failed");
    } finally {
      setBusy(false);
    }
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-white via-gray-50 to-purple-100 px-4 py-10">
      <form onSubmit={handleSubmit} className="max-w-sm w-full p-6 bg-white rounded-2xl shadow-lg">
        <h2 className="text-2xl font-semibold text-center text-purple-700 mb-6">Create an Account</h2>
        <input
          type="text"
          placeholder="Name (optional)"
          className="w-full p-3 border border-gray-300 rounded-lg mb-3"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 border border-gray-300 rounded-lg mb-3"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 border border-gray-300 rounded-lg mb-3"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white py-2 rounded-lg hover:bg-purple-700 font-semibold"
          disabled={busy}
        >
          {busy ? "Signing Up..." : "Sign Up"}
        </button>
        {error && <p className="text-red-500 text-sm text-center mt-4">{error}</p>}
        <div className="text-center mt-4">
          <span className="text-gray-500 text-sm">Already have an account?</span>{" "}
          <Link href="/login" className="text-purple-600 hover:underline text-sm font-semibold">Login</Link>
        </div>
      </form>
    </main>
  );
}
