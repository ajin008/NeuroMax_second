import { useRazorpay } from "@/hooks/useRazorpay";
import React from "react";

interface Props {
  grade: string;
}

const StickyCTA = ({ grade }: Props) => {
  const pricing: Record<string, string> = { "8": "90", "9": "95", "10": "99" };
  const { handlePayment } = useRazorpay();
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:hidden">
      {/* Glassmorphism Container */}
      <div className="bg-zinc-900/80 backdrop-blur-lg border border-zinc-800 rounded-3xl p-4 shadow-[0_-10px_40px_rgba(0,0,0,0.5)] flex items-center justify-between gap-4">
        {/* Price Info */}
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

        {/* CTA Button */}
        <button
          onClick={() => handlePayment(grade)}
          className="flex-1 bg-blue-600 active:scale-95 transition-transform text-white font-bold py-3.5 px-6 rounded-2xl text-sm shadow-[0_0_20px_rgba(37,99,235,0.3)]"
        >
          BUY NOW →
        </button>
      </div>
    </div>
  );
};

export default StickyCTA;
