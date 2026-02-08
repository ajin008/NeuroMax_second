import React from "react";
import { Award, BookOpen, Users, Star, CheckCircle2 } from "lucide-react";

const Mentor = () => {
  const stats = [
    {
      label: "Papers Cracked",
      value: "1,000+",
      icon: <BookOpen className="w-5 h-5 text-blue-500" />,
    },
    {
      label: "Lives Impacted",
      value: "5,000+",
      icon: <Users className="w-5 h-5 text-blue-500" />,
    },
    {
      label: "Success Rate",
      value: "95%",
      icon: <Star className="w-5 h-5 text-blue-500" />,
    },
  ];

  return (
    <section className="relative bg-black text-white py-24 px-6 overflow-hidden">
      {/* Precision Background Glow */}
      <div className="absolute top-0 right-0 w-100 h-100 bg-blue-600/5 blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side: Identity & Bio */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-950 px-3 py-1">
                <Award className="w-3.5 h-3.5 text-blue-500" />
                <span className="text-[10px] font-bold tracking-widest text-zinc-400 uppercase">
                  Verified Expert Mentor
                </span>
              </div>

              <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
                Learn from the <br />
                <span className="text-blue-500">Specialist.</span>
              </h2>

              <p className="text-zinc-400 text-sm md:text-lg max-w-lg leading-relaxed">
                <span className="text-white font-semibold">Rahul </span> has
                analyzed 1,000+ board papers to decode the examiner&apos;s
                mindset. He doesn&apos;t just teach subjects; he teaches the{" "}
                <span className="text-blue-400">science of scoring</span>.
              </p>
            </div>

            {/* Achievement Badge */}
            <div className="flex items-center gap-3 bg-zinc-900/40 border border-zinc-800 p-4 rounded-2xl w-fit">
              <div className="bg-blue-600/10 p-2 rounded-xl">
                <CheckCircle2 className="w-6 h-6 text-blue-500" />
              </div>
              <div>
                <p className="text-white font-bold text-sm">10+ Years Exp</p>
                <p className="text-zinc-500 text-[10px] uppercase tracking-wider">
                  Top Tier Educator
                </p>
              </div>
            </div>
          </div>

          {/* Right Side: Stats Grid - Matching UI Pattern */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`bg-zinc-900/30 border border-zinc-800 p-8 rounded-[2.5rem] flex flex-col justify-center transition-all hover:border-blue-500/30 ${
                  index === 2 ? "sm:col-span-2" : ""
                }`}
              >
                <div className="mb-4 bg-black w-10 h-10 rounded-xl flex items-center justify-center border border-zinc-800">
                  {stat.icon}
                </div>
                <h3 className="text-3xl font-bold text-white mb-1">
                  {stat.value}
                </h3>
                <p className="text-zinc-500 text-[11px] font-bold uppercase tracking-widest">
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
