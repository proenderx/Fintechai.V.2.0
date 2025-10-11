"use client";
import { useState } from "react";

const roles = ["Student", "Employee", "Freelancer", "Exporter", "Other"];

export default function MoneyManagementForm() {
  const [role, setRole] = useState(roles[0]);
  const [expenses, setExpenses] = useState([
    { name: "Room rent", amount: "" },
    { name: "Electricity bill", amount: "" },
    { name: "EMI/Loan", amount: "" },
    { name: "Groceries", amount: "" }
  ]);
  const [suggestion, setSuggestion] = useState(null);

  function handleExpenseChange(idx, field, value) {
    setExpenses(expenses =>
      expenses.map((e, i) => (i === idx ? { ...e, [field]: value } : e))
    );
  }

  function addExpense() {
    setExpenses([...expenses, { name: "", amount: "" }]);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const total = expenses.reduce((sum, e) => sum + Number(e.amount || 0), 0);
    const income = 30000; // Simulated monthly income
    const savings = Math.max(0, income - total);
    setSuggestion({
      savings,
      allocation: `Save at least $${(savings * 0.5).toFixed(0)} and allocate $${(savings * 0.5).toFixed(0)} for EMI/loans.`
    });
  }

  return (
    <div className="max-w-xl mx-auto mt-10 bg-white rounded-xl shadow-lg p-8">
      <h2 className="text-2xl font-bold mb-4 text-purple-700">Personal Money Management</h2>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <label className="font-semibold">Your Role</label>
        <select
          className="border rounded px-3 py-2"
          value={role}
          onChange={e => setRole(e.target.value)}
        >
          {roles.map(r => (
            <option key={r}>{r}</option>
          ))}
        </select>
        <label className="font-semibold">Recurring Expenses</label>
        {expenses.map((exp, idx) => (
          <div key={idx} className="flex gap-2 mb-1">
            <input
              className="border rounded px-2 py-1 flex-1"
              placeholder="Expense name"
              value={exp.name}
              onChange={e => handleExpenseChange(idx, "name", e.target.value)}
              required
            />
            <input
              className="border rounded px-2 py-1 w-32"
              placeholder="Amount (USD)"
              type="number"
              value={exp.amount}
              onChange={e => handleExpenseChange(idx, "amount", e.target.value)}
              required
            />
          </div>
        ))}
        <button type="button" className="text-xs text-purple-600 hover:underline self-start" onClick={addExpense}>
          + Add another expense
        </button>
        <button className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white py-2 rounded font-semibold hover:shadow-lg transition" type="submit">
          Analyze Spending
        </button>
      </form>
      {suggestion && (
        <div className="mt-8 bg-purple-50 rounded p-4">
          <div className="font-bold text-lg text-purple-700 mb-2">AI Suggestion</div>
          <div className="mb-1">Estimated Monthly Savings: <span className="font-semibold">${suggestion.savings}</span></div>
          <div>{suggestion.allocation}</div>
        </div>
      )}
    </div>
  );
}
