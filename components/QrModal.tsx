"use client";
import { useState } from "react";
import Image from "next/image";
import { Loader2, MessageCircle, ShieldCheck, Copy, Check } from "lucide-react";

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
  const [copied, setCopied] = useState(false);
  const upiId = "ajinnathsurendran@oksbi";

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(upiId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const isTimeUp = timer === 0;

  return (
    <div className="fixed inset-0 z-100 bg-black/10 backdrop-blur-xl flex items-center justify-center p-4">
      <div className="bg-zinc-900 border border-white/10 p-6 md:p-8 rounded-[2.5rem] max-w-sm w-full text-center shadow-2xl relative overflow-hidden">
        <div className="absolute top-4 right-4 bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-full">
          <span className="text-amber-500 text-[10px] font-bold">
            CLASS {grade}
          </span>
        </div>

        <div className="mb-4">
          <h2 className="text-2xl font-black text-white mb-1">Pay ₹{price}</h2>
          <p className="text-zinc-400 text-xs">Scan or use UPI ID to pay</p>
        </div>

        {/* QR CODE SECTION */}
        <div className="bg-white p-3 rounded-3xl mb-4 inline-block shadow-[0_0_30px_rgba(255,255,255,0.1)]">
          <Image
            src="/qr.jpeg"
            alt="Payment QR"
            width={200}
            height={200}
            className="rounded-xl"
          />
        </div>

        {/* UPI ID COPY SECTION */}
        <div className="mb-6">
          <p className="text-[10px] text-zinc-500 uppercase tracking-widest mb-2">
            Or copy UPI ID
          </p>
          <button
            onClick={handleCopy}
            className="w-full flex items-center justify-between bg-zinc-950 border border-white/5 rounded-xl px-4 py-3 group hover:border-amber-500/30 transition-all"
          >
            <span className="text-sm font-mono text-zinc-300 truncate mr-2">
              {upiId}
            </span>
            {copied ? (
              <Check className="w-4 h-4 text-green-500 shrink-0" />
            ) : (
              <Copy className="w-4 h-4 text-zinc-600 group-hover:text-amber-500 shrink-0 transition-colors" />
            )}
          </button>
        </div>

        {/* BUTTON SECTION */}
        <div className="space-y-4">
          <div className="flex items-center justify-center gap-2 text-[10px] text-zinc-500 uppercase tracking-widest">
            <ShieldCheck className="w-3 h-3 text-emerald-500" /> Secure Payment
          </div>

          <button
            onClick={onComplete}
            disabled={!isTimeUp}
            className={`w-full flex items-center justify-center gap-2 py-4 rounded-2xl font-bold transition-all ${
              isTimeUp
                ? "bg-linear-to-r from-green-600 to-emerald-600 text-white shadow-lg active:scale-95"
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
