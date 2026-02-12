"use client";
import Image from "next/image";
import { Loader2, MessageCircle, ShieldCheck } from "lucide-react";

interface QrModalProps {
  isOpen: boolean;
  timer: number;
  price: string;
  grade: string;
  onComplete: () => void;
}

export const QrModal = ({
  isOpen,
  timer,
  price,
  grade,
  onComplete,
}: QrModalProps) => {
  if (!isOpen) return null;

  const isTimeUp = timer === 0;

  return (
    <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4">
      <div className="bg-zinc-900 border border-white/10 p-6 md:p-8 rounded-[2.5rem] max-w-sm w-full text-center shadow-2xl relative overflow-hidden">
        {/* Grade Badge */}
        <div className="absolute top-4 right-4 bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-full">
          <span className="text-amber-500 text-[10px] font-bold">
            CLASS {grade}
          </span>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-black text-white mb-2">Pay ₹{price}</h2>
          <p className="text-zinc-400 text-sm">
            Scan to join the Grade {grade} Batch
          </p>
        </div>

        <div className="bg-white p-3 rounded-3xl mb-6 inline-block shadow-[0_0_30px_rgba(255,255,255,0.1)]">
          <Image
            src="/qr.jpeg"
            alt="Payment QR"
            width={220}
            height={220}
            className="rounded-xl"
          />
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-center gap-2 text-[10px] text-zinc-500 uppercase tracking-widest">
            <ShieldCheck className="w-3 h-3" /> Secure UPI Transaction
          </div>

          <button
            onClick={onComplete}
            disabled={!isTimeUp}
            className={`w-full flex items-center justify-center gap-2 py-4 rounded-2xl font-bold transition-all ${
              isTimeUp
                ? "bg-linear-to-r from-green-600 to-emerald-600 text-white shadow-lg active:scale-95 animate-in fade-in zoom-in duration-300"
                : "bg-zinc-800 text-zinc-500 cursor-not-allowed border border-white/5"
            }`}
          >
            {isTimeUp ? (
              <MessageCircle className="w-5 h-5" />
            ) : (
              <Loader2 className="w-5 h-5 animate-spin" />
            )}
            {isTimeUp ? "JOIN WHATSAPP GROUP" : `UNLOCKING IN ${timer}S`}
          </button>
        </div>
      </div>
    </div>
  );
};
