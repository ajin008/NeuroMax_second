"use client";
import { Loader2 } from "lucide-react";
import React from "react";

// 1. Define the props to match what you're passing from page.tsx
interface StickyProps {
  grade: string;
  onPay: (grade: string) => void;
  isPaying: boolean;
}

const StickyCTA = ({ grade, onPay, isPaying }: StickyProps) => {
  const pricing: Record<string, string> = { "8": "90", "9": "95", "10": "99" };

  // 2. REMOVED the internal hook:
  // const { handlePayment, isLoading } = useRazorpay();

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:hidden">
      <div className="bg-zinc-900/80 backdrop-blur-lg border border-zinc-800 rounded-3xl p-4 shadow-[0_-10px_40px_rgba(0,0,0,0.5)] flex items-center justify-between gap-4">
        <div className="flex flex-col">
          <div className="flex items-baseline gap-1.5">
            <span className="text-2xl font-bold text-white">
              ₹{pricing[grade]}
            </span>
            <span className="text-zinc-500 line-through text-xs italic">
              ₹1,999
            </span>
          </div>
          <p className="text-[9px] text-blue-400 font-bold uppercase tracking-wider">
            Grade {grade} Batch
          </p>
        </div>

        {/* 3. Use onPay and isPaying from props */}
        <button
          onClick={() => onPay(grade)}
          disabled={isPaying}
          className={`flex-1 flex items-center justify-center gap-2 bg-blue-600 transition-all text-white font-bold py-3.5 px-6 rounded-2xl text-sm shadow-[0_0_20px_rgba(37,99,235,0.3)] ${
            isPaying
              ? "opacity-70 cursor-not-allowed"
              : "active:scale-95 hover:bg-blue-500"
          }`}
        >
          {isPaying ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>WAITING...</span>
            </>
          ) : (
            "BUY NOW →"
          )}
        </button>
      </div>
    </div>
  );
};

export default StickyCTA;
