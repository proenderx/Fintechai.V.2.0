"use client";
import { useState } from "react";

const mockCountries = [
  { name: "UAE", tax: 5, relation: "Good", profit: 1200 },
  { name: "Singapore", tax: 7, relation: "Excellent", profit: 1350 },
  { name: "Vietnam", tax: 8, relation: "Good", profit: 1100 },
  { name: "Netherlands", tax: 6, relation: "Very Good", profit: 1250 },
];

export default function ExportAdvisorForm() {
  const [product, setProduct] = useState("");
  const [destination, setDestination] = useState("");
  const [price, setPrice] = useState("");
  const [results, setResults] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    // Simulate AI logic
    setResults(mockCountries.map(c => ({ ...c, estProfit: c.profit + Number(price || 0) })));
  }

  return (
    <div className="max-w-xl mx-auto mt-10 bg-white rounded-xl shadow-lg p-8">
      <h2 className="text-2xl font-bold mb-4 text-purple-700">Export Advisor</h2>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <input
          className="border rounded px-3 py-2"
          placeholder="Product type"
          value={product}
          onChange={e => setProduct(e.target.value)}
          required
        />
        <input
          className="border rounded px-3 py-2"
          placeholder="Current export destination"
          value={destination}
          onChange={e => setDestination(e.target.value)}
          required
        />
        <input
          className="border rounded px-3 py-2"
          placeholder="Product price (USD)"
          type="number"
          value={price}
          onChange={e => setPrice(e.target.value)}
          required
        />
        <button className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white py-2 rounded font-semibold hover:shadow-lg transition" type="submit">
          Get Recommendations
        </button>
      </form>
      {results && (
        <div className="mt-8">
          <h3 className="font-bold mb-2 text-lg">Recommended Countries</h3>
          <table className="w-full text-sm border">
            <thead>
              <tr className="bg-purple-50">
                <th className="p-2">Country</th>
                <th className="p-2">Tax (%)</th>
                <th className="p-2">Relation</th>
                <th className="p-2">Est. Profit (USD)</th>
              </tr>
            </thead>
            <tbody>
              {results.map(c => (
                <tr key={c.name} className="text-center border-t">
                  <td className="p-2">{c.name}</td>
                  <td className="p-2">{c.tax}</td>
                  <td className="p-2">{c.relation}</td>
                  <td className="p-2 font-semibold">{c.estProfit}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
