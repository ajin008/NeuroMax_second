import React from "react";
import { Calendar, Clock, Gift, Video, Info } from "lucide-react";

const SessionBlueprint = () => {
  const roadmap = [
    {
      label: "Date",
      title: "15th February 2026",
      subtitle: "Tuesday Morning Session",
      // Changed icon color to amber-500
      icon: <Calendar className="w-5 h-5 text-amber-500" />,
    },
    {
      label: "Time",
      title: "10:00 AM – 1:30 PM IST",
      subtitle: "2 Hours Intensive Prep",
      icon: <Clock className="w-5 h-5 text-amber-500" />,
    },
    {
      label: "Bonuses",
      title: "Study Package",
      subtitle: "100-Question PDF included",
      icon: <Gift className="w-5 h-5 text-amber-500" />,
    },
    {
      label: "Platform",
      title: "Zoom Webinar",
      subtitle: "Live & Interactive",
      icon: <Video className="w-5 h-5 text-amber-500" />,
    },
  ];

  return (
    <section className="relative bg-black text-white py-24 px-6 overflow-hidden">
      {/* Subtle Amber Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-amber-600/[0.03] blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="flex flex-col items-center mb-16 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/5 px-4 py-1.5 mb-8">
            <span className="text-amber-500 text-[10px] animate-pulse">✦</span>
            <span className="text-[10px] font-bold tracking-[0.2em] text-amber-500/80 uppercase">
              The Session Blueprint
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Lock your{" "}
            <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
              calendar.
            </span>
          </h2>
          <p className="text-zinc-500 text-sm md:text-lg max-w-2xl leading-relaxed">
            This is the only 120 minutes you need to transform your board exam
            preparation.
          </p>
        </div>

        {/* Blueprint Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {roadmap.map((item, index) => (
            <div
              key={index}
              className="group bg-zinc-900/30 border border-white/[0.03] backdrop-blur-sm p-8 rounded-[2.5rem] transition-all duration-500 hover:border-amber-500/30 hover:bg-amber-500/[0.02]"
            >
              {/* Icon Container with Amber shadow on hover */}
              <div className="bg-zinc-950 w-12 h-12 rounded-2xl flex items-center justify-center border border-zinc-800 mb-6 group-hover:border-amber-500/50 group-hover:shadow-[0_0_20px_rgba(245,158,11,0.2)] transition-all duration-500">
                {item.icon}
              </div>

              <p className="text-zinc-600 text-[10px] font-bold uppercase tracking-[0.2em] mb-3 group-hover:text-amber-500/60 transition-colors">
                {item.label}
              </p>

              <h3 className="text-white font-bold text-lg mb-1 leading-tight tracking-tight">
                {item.title}
              </h3>

              <p className="text-zinc-500 text-xs font-medium">
                {item.subtitle}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Info Bar - Minimalist Dark Style */}
        <div className="mt-12 flex flex-col items-center">
          <div className="inline-flex items-center gap-3 bg-zinc-950 border border-white/[0.05] px-6 py-4 rounded-3xl shadow-xl">
            <div className="bg-amber-500/10 p-1.5 rounded-lg">
              <Info className="w-4 h-4 text-amber-500" />
            </div>
            <p className="text-zinc-400 text-[11px] md:text-xs font-medium tracking-wide">
              Recording available for{" "}
              <span className="text-amber-500 font-bold italic">7 days</span>{" "}
              post-session
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SessionBlueprint;
