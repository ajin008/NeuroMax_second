import React from "react";
import { Loader2 } from "lucide-react";

interface HeroProps {
  grade: string;
  onPay: (grade: string) => void;
  isPaying: boolean;
}

const Hero = ({ grade, onPay, isPaying }: HeroProps) => {
  const pricing: Record<string, string> = { "8": "90", "9": "95", "10": "99" };

  return (
    <section className="relative bg-black text-white pt-16 pb-20 px-6 overflow-hidden">
      {/* Micro-level Gradient Background: Mesh Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-125 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.08)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-amber-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto flex flex-col items-center relative z-10">
        {/* Badge with Amber Glow */}
        <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/5 px-4 py-1.5 mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-40"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.8)]"></span>
          </span>
          <span className="text-[10px] font-bold tracking-[0.2em] text-amber-500/90 uppercase">
            Class {grade} CBSE Board Prep 2026
          </span>
        </div>

        {/* Heading with Text Gradient */}
        <h1 className="text-4xl md:text-7xl font-bold tracking-tight text-center leading-[1.1] mb-6">
          Master the Top 100 <br />
          <span className="bg-linear-to-r from-amber-400 via-orange-500 to-amber-600 bg-clip-text text-transparent">
            Most-Asked Questions
          </span>
        </h1>

        <p className="text-zinc-500 text-center text-sm md:text-lg max-w-2xl mb-12 leading-relaxed">
          Stop drowning in textbooks. We analyzed 10 years of papers for Grade{" "}
          {grade} to give you the exact questions that appear year after year.
        </p>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-5xl mb-10">
          <div className="group bg-zinc-900/30 border border-white/5 backdrop-blur-sm p-8 rounded-3xl transition-colors hover:border-amber-500/20">
            <h3 className="text-3xl font-bold mb-2 text-white">100+</h3>
            <p className="text-zinc-500 text-sm leading-snug">
              Curated Questions from last 10 years
            </p>
          </div>

          {/* Center Card with subtle Amber Tint */}
          <div className="bg-amber-500/5 border border-amber-500/20 backdrop-blur-sm p-8 rounded-3xl flex flex-col justify-center relative overflow-hidden">
            <h3 className="text-3xl font-bold mb-2 text-amber-500">2 Hours</h3>
            <p className="text-zinc-400 text-sm leading-snug">
              The only revision you need before the exam.
            </p>
          </div>

          <div className="bg-zinc-900/30 border border-white/5 backdrop-blur-sm p-8 rounded-3xl transition-colors hover:border-amber-500/20">
            <div className="flex items-baseline gap-2 mb-1">
              <span className="text-3xl font-bold text-white">
                ₹{pricing[grade]}
              </span>
              <span className="text-zinc-600 line-through text-base">
                ₹1,999
              </span>
            </div>
            <p className="text-zinc-500 text-sm">One-time slot. No replays.</p>
          </div>
        </div>

        <div className="w-full max-w-md flex flex-col items-center gap-6">
          <button
            onClick={() => onPay(grade)}
            disabled={isPaying}
            className={`w-full flex items-center justify-center gap-2 bg-linear-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 transition-all text-white font-bold py-5 rounded-2xl text-base shadow-[0_10px_30px_rgba(245,158,11,0.2)] ${
              isPaying ? "opacity-70 cursor-not-allowed" : "active:scale-[0.98]"
            }`}
          >
            {isPaying ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                SECURELY OPENING...
              </>
            ) : (
              "BUY NOW & JOIN WHATSAPP →"
            )}
          </button>

          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
            </span>
            <p className="text-red-500 text-[11px] font-bold uppercase tracking-widest">
              Almost Full! Only 5 seats left for Grade {grade}.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
