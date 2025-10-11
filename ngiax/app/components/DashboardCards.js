import Link from "next/link";

const modules = [
  {
    title: "Export Advisor",
    description: "Find the best countries to export your goods.",
    href: "/export-advisor",
    color: "from-purple-500 to-indigo-500"
  },
  {
    title: "Market Insights",
    description: "Get live trading charts and AI market analysis.",
    href: "/market-insights",
    color: "from-indigo-500 to-blue-500"
  },
  {
    title: "Money Management",
    description: "Analyze your expenses and optimize savings.",
    href: "/money-management",
    color: "from-blue-500 to-purple-500"
  }
];

export default function DashboardCards() {
  return (
    <div className="grid gap-8 md:grid-cols-3 mt-10">
      {modules.map((mod) => (
        <Link key={mod.title} href={mod.href} className={`rounded-xl shadow-lg bg-gradient-to-br ${mod.color} p-6 text-white hover:scale-105 transition-transform duration-200`}>
          <h2 className="text-2xl font-bold mb-2">{mod.title}</h2>
          <p className="mb-4 text-sm opacity-90">{mod.description}</p>
          <span className="inline-block mt-2 text-xs bg-white/20 px-3 py-1 rounded-full">Open</span>
        </Link>
      ))}
    </div>
  );
}
