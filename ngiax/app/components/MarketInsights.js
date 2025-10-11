"use client";
import { useState } from "react";

const mockIndicators = {
  rsi: 54,
  bollinger: "Normal",
  aiInsight: "Market is stable. Consider holding positions."
};

export default function MarketInsights() {
  const [amount, setAmount] = useState("");
  const [profit, setProfit] = useState(null);

  function handleCalc(e) {
    e.preventDefault();
    // Simulate profit/loss calculation
    setProfit(Number(amount) * 0.12);
  }

  return (
    <div className="max-w-2xl mx-auto mt-10 bg-white rounded-xl shadow-lg p-8">
      <h2 className="text-2xl font-bold mb-4 text-indigo-700">Market Insights</h2>
      <div className="mb-6">
        <div className="mb-2 font-semibold">Live Trading Chart</div>
        <div className="rounded overflow-hidden border shadow-sm mb-4">
          {/* TradingView Widget Embed (placeholder) */}
          <iframe
            src="https://s.tradingview.com/widgetembed/?frameElementId=tradingview_12345&symbol=NASDAQ:AAPL&interval=D&hidesidetoolbar=1&symboledit=1&saveimage=1&toolbarbg=f1f3f6&studies=[]&theme=light&style=1&timezone=Etc/UTC&withdateranges=1&hideideas=1"
            style={{ width: "100%", height: 320, border: 0 }}
            title="TradingView Chart"
            allowFullScreen
          />
        </div>
        <div className="flex gap-6 mb-4">
          <div className="bg-indigo-50 rounded p-3 flex-1">
            <div className="font-bold text-sm">RSI</div>
            <div className="text-lg">{mockIndicators.rsi}</div>
          </div>
          <div className="bg-indigo-50 rounded p-3 flex-1">
            <div className="font-bold text-sm">Bollinger Bands</div>
            <div className="text-lg">{mockIndicators.bollinger}</div>
          </div>
          <div className="bg-indigo-50 rounded p-3 flex-1">
            <div className="font-bold text-sm">AI Insight</div>
            <div className="text-xs">{mockIndicators.aiInsight}</div>
          </div>
        </div>
      </div>
      <form className="flex flex-col gap-3" onSubmit={handleCalc}>
        <label className="font-semibold">Investment Calculator</label>
        <input
          className="border rounded px-3 py-2"
          placeholder="Investment amount (USD)"
          type="number"
          value={amount}
          onChange={e => setAmount(e.target.value)}
          required
        />
        <button className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-2 rounded font-semibold hover:shadow-lg transition" type="submit">
          Calculate Profit/Loss
        </button>
        {profit !== null && (
          <div className="mt-2 text-green-600 font-bold">Simulated Profit: ${profit.toFixed(2)}</div>
        )}
      </form>
    </div>
  );
}
