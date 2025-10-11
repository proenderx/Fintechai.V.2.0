import DashboardCards from "../components/DashboardCards";

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-purple-100 px-4 py-10">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-2">FinTech AI Agent</h1>
        <p className="text-lg text-gray-600 mb-8">Smarter financial decisions for everyone.</p>
        <DashboardCards />
      </div>
    </main>
  );
}