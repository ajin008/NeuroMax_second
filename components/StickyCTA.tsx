"use client";
import { Loader2 } from "lucide-react";
import React from "react";

interface StickyProps {
  grade: string;
  onPay: (grade: string) => void;
  isPaying: boolean;
}

const StickyCTA = ({ grade, onPay, isPaying }: StickyProps) => {
  const pricing: Record<string, string> = { "8": "90", "9": "95", "10": "99" };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:hidden">
      {/* Background with higher blur and amber tint */}
      <div className="bg-zinc-950/90 backdrop-blur-xl border border-white/8 rounded-3xl p-4 shadow-[0_-10px_40px_rgba(0,0,0,0.7)] flex items-center justify-between gap-4">
        <div className="flex flex-col">
          <div className="flex items-baseline gap-1.5">
            <span className="text-2xl font-black text-white tracking-tight">
              ₹{pricing[grade]}
            </span>
            <span className="text-zinc-600 line-through text-[10px] italic">
              ₹1,999
            </span>
          </div>
          {/* Changed text-blue-400 to amber-500 */}
          <p className="text-[9px] text-amber-500 font-bold uppercase tracking-[0.15em]">
            Grade {grade} Batch
          </p>
        </div>

        {/* Updated Button with Amber-Orange Gradient */}
        <button
          onClick={() => onPay(grade)}
          disabled={isPaying}
          className={`flex-1 flex items-center justify-center gap-2 bg-linear-to-r from-amber-600 to-orange-600 transition-all text-white font-bold py-4 px-6 rounded-2xl text-sm shadow-[0_0_20px_rgba(245,158,11,0.2)] ${
            isPaying
              ? "opacity-70 cursor-not-allowed"
              : "active:scale-95 shadow-[0_5px_15px_rgba(245,158,11,0.3)]"
          }`}
        >
          {isPaying ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span className="tracking-widest">OPENING...</span>
            </>
          ) : (
            <span className="tracking-tight">BUY NOW & JOIN →</span>
          )}
        </button>
      </div>
    </div>
  );
};

export default StickyCTA;
