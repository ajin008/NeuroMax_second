import React from "react";
import { Calendar, Clock, Gift, Video, Info } from "lucide-react";

const SessionBlueprint = () => {
  const roadmap = [
    {
      label: "Date",
      title: "10th February 2026",
      subtitle: "Tuesday Evening Session",
      icon: <Calendar className="w-5 h-5 text-blue-500" />,
    },
    {
      label: "Time",
      title: "7:00 PM – 9:00 PM IST",
      subtitle: "2 Hours Intensive Prep",
      icon: <Clock className="w-5 h-5 text-blue-500" />,
    },
    {
      label: "Bonuses",
      title: "Study Package",
      subtitle: "100-Question PDF included",
      icon: <Gift className="w-5 h-5 text-blue-500" />,
    },
    {
      label: "Platform",
      title: "Zoom Webinar",
      subtitle: "Live & Interactive",
      icon: <Video className="w-5 h-5 text-blue-500" />,
    },
  ];

  return (
    <section className="relative bg-black text-white py-24 px-6 overflow-hidden">
      {/* Precision Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-blue-600/5 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="flex flex-col items-center mb-16 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-950 px-3 py-1 mb-6">
            <span className="text-blue-500 text-[10px]">✦</span>
            <span className="text-[10px] font-bold tracking-[0.2em] text-zinc-500 uppercase">
              The Session Blueprint
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Lock your <span className="text-blue-500">calendar.</span>
          </h2>
          <p className="text-zinc-500 text-sm md:text-lg max-w-2xl leading-relaxed">
            This is the only 120 minutes you need to transform your board exam
            preparation.
          </p>
        </div>

        {/* Blueprint Grid - Synced with Hero Grid UI */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {roadmap.map((item, index) => (
            <div
              key={index}
              className="group bg-zinc-900/40 border border-zinc-800 backdrop-blur-sm p-8 rounded-[2rem] transition-all duration-300 hover:border-blue-500/40"
            >
              <div className="bg-zinc-950 w-12 h-12 rounded-2xl flex items-center justify-center border border-zinc-800 mb-6 group-hover:border-blue-500/50 transition-colors">
                {item.icon}
              </div>
              <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-[0.2em] mb-3">
                {item.label}
              </p>
              <h3 className="text-white font-bold text-lg mb-1 leading-tight">
                {item.title}
              </h3>
              <p className="text-zinc-500 text-xs font-medium">
                {item.subtitle}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Info Bar */}
        <div className="mt-12 flex flex-col items-center">
          <div className="inline-flex items-center gap-3 bg-zinc-900/20 border border-zinc-900 px-5 py-3 rounded-2xl">
            <Info className="w-4 h-4 text-zinc-600" />
            <p className="text-zinc-500 text-[11px] md:text-xs font-medium tracking-wide">
              Recording available for{" "}
              <span className="text-white font-bold">7 days</span> post-session
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SessionBlueprint;
