"use client";

import { useMemo, useState } from "react";

export default function MortgageCalculator({ price }) {
  const [downPct, setDownPct] = useState(20);
  const [rate, setRate] = useState(6.5);
  const [years, setYears] = useState(30);

  const { monthly, loanAmount, downAmount } = useMemo(() => {
    const downAmount = Math.round(price * (downPct / 100));
    const loanAmount = price - downAmount;
    const monthlyRate = rate / 100 / 12;
    const n = years * 12;
    const monthly =
      monthlyRate === 0
        ? loanAmount / n
        : (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, n)) /
          (Math.pow(1 + monthlyRate, n) - 1);
    return { monthly: Math.round(monthly), loanAmount, downAmount };
  }, [price, downPct, rate, years]);

  return (
    <div className='border border-line/15 p-6'>
      <p className='font-display text-xl text-forest mb-6 italic'>
        Estimated monthly payment
      </p>

      <div className='space-y-5 mb-6'>
        <div>
          <div className='flex justify-between font-body text-sm text-forest/60 mb-2'>
            <span>Down payment</span>
            <span>
              {downPct}% — $
              {Math.round(price * (downPct / 100)).toLocaleString()}
            </span>
          </div>
          <input
            type='range'
            min={5}
            max={50}
            value={downPct}
            onChange={(e) => setDownPct(Number(e.target.value))}
            className='w-full accent-[#556B58]'
          />
        </div>

        <div>
          <div className='flex justify-between font-body text-sm text-forest/60 mb-2'>
            <span>Interest rate</span>
            <span>{rate.toFixed(2)}%</span>
          </div>
          <input
            type='range'
            min={3}
            max={9}
            step={0.05}
            value={rate}
            onChange={(e) => setRate(Number(e.target.value))}
            className='w-full accent-[#556B58]'
          />
        </div>

        <div>
          <p className='font-body text-sm text-forest/60 mb-2'>Loan term</p>
          <div className='flex gap-2'>
            {[15, 20, 30].map((y) => (
              <button
                key={y}
                onClick={() => setYears(y)}
                className={`font-body text-sm px-4 py-1.5 border transition-colors ${
                  years === y
                    ? "border-sage bg-sage/15 text-forest"
                    : "border-line/20 text-forest/60 hover:border-line/40"
                }`}
              >
                {y} yr
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className='border-t border-line/15 pt-5'>
        <p className='font-display text-3xl text-forest'>
          ${monthly.toLocaleString()}
          <span className='font-body text-sm text-forest/50'> / month</span>
        </p>
        <p className='font-body text-xs text-forest/40 mt-2'>
          Loan amount ${loanAmount.toLocaleString()} — estimate only, excludes
          taxes, insurance, and HOA fees.
        </p>
      </div>
    </div>
  );
}
