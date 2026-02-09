import React from "react";
import { Award, BookOpen, Users, Star, CheckCircle2 } from "lucide-react";

const Mentor = () => {
  const stats = [
    {
      label: "Papers Cracked",
      value: "1,000+",
      // Updated to Amber
      icon: <BookOpen className="w-5 h-5 text-amber-500" />,
    },
    {
      label: "Lives Impacted",
      value: "5,000+",
      icon: <Users className="w-5 h-5 text-amber-500" />,
    },
    {
      label: "Success Rate",
      value: "95%",
      icon: <Star className="w-5 h-5 text-amber-500" />,
    },
  ];

  return (
    <section className="relative bg-black text-white py-24 px-6 overflow-hidden">
      {/* Precision Background Glow in Amber */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-600/5 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side: Identity & Bio */}
          <div className="space-y-10">
            <div className="space-y-6">
              {/* Premium Badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/5 px-4 py-1.5">
                <Award className="w-3.5 h-3.5 text-amber-500" />
                <span className="text-[10px] font-bold tracking-[0.2em] text-amber-500/80 uppercase">
                  Verified Expert Mentor
                </span>
              </div>

              <h2 className="text-4xl md:text-7xl font-bold tracking-tight leading-[1.1]">
                Learn from the <br />
                <span className="bg-gradient-to-r from-amber-400 to-orange-600 bg-clip-text text-transparent">
                  Specialist.
                </span>
              </h2>

              <p className="text-zinc-400 text-sm md:text-lg max-w-lg leading-relaxed">
                <span className="text-white font-semibold">Rahul </span> has
                analyzed 1,000+ board papers to decode the examiner&apos;s
                mindset. He doesn&apos;t just teach subjects; he teaches the{" "}
                <span className="text-amber-500/90 font-medium">
                  science of scoring
                </span>
                .
              </p>
            </div>

            {/* Achievement Badge - Glassmorphism UI */}
            <div className="flex items-center gap-4 bg-zinc-900/20 border border-white/[0.05] p-5 rounded-[2rem] w-fit backdrop-blur-sm">
              <div className="bg-amber-500/10 p-3 rounded-2xl shadow-[0_0_15px_rgba(245,158,11,0.1)]">
                <CheckCircle2 className="w-7 h-7 text-amber-500" />
              </div>
              <div>
                <p className="text-white font-bold text-base tracking-tight">
                  10+ Years Exp
                </p>
                <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-[0.15em]">
                  Top Tier Educator
                </p>
              </div>
            </div>
          </div>

          {/* Right Side: Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`group bg-zinc-900/30 border border-white/[0.03] p-10 rounded-[2.5rem] flex flex-col justify-center transition-all duration-500 hover:border-amber-500/30 hover:bg-amber-500/[0.02] ${
                  index === 2 ? "sm:col-span-2" : ""
                }`}
              >
                <div className="mb-6 bg-zinc-950 w-12 h-12 rounded-2xl flex items-center justify-center border border-zinc-800 group-hover:border-amber-500/50 group-hover:shadow-[0_0_20px_rgba(245,158,11,0.15)] transition-all duration-500">
                  {stat.icon}
                </div>
                <h3 className="text-4xl font-black text-white mb-2 tracking-tighter">
                  {stat.value}
                </h3>
                <p className="text-zinc-500 text-[11px] font-bold uppercase tracking-[0.2em] group-hover:text-amber-500/60 transition-colors">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mentor;
