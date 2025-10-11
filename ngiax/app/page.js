
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-white via-gray-50 to-purple-100 px-4 py-10">
      <div className="max-w-2xl w-full text-center bg-white/80 rounded-2xl shadow-xl p-10 border border-purple-100">
        <h1 className="text-5xl font-extrabold text-purple-700 mb-4">Welcome to FinTech AI Agent</h1>
        <p className="text-lg text-gray-700 mb-8">
          Smarter financial decisions for gig workers, exporters, students, and more. Explore export advice, market insights, and personal money management—all in one place.
        </p>
        <Link
          href="/login"
          className="inline-block bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:scale-105 transition-transform text-lg"
        >
          Get Started
        </Link>
      </div>
      <footer className="mt-16 text-gray-400 text-xs">&copy; {new Date().getFullYear()} FinTech AI Agent</footer>
    </main>
  );
}
