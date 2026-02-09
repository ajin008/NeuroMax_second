import React from "react";

const AnnouncementBanner = () => {
  return (
    <div className="relative isolate flex items-center bg-black px-4 py-2 border-b border-white/3">
      <div className="flex items-center justify-between w-full max-w-7xl mx-auto md:justify-center md:gap-x-6">
        {/* Left Side: Status & Message */}
        <div className="flex items-center gap-2.5 overflow-hidden">
          {/* Cyber Amber Live Indicator */}
          <span className="relative shrink-0 flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-500 opacity-30"></span>
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.8)]"></span>
          </span>

          <p className="text-[10px] md:text-[11px] leading-tight text-zinc-400 tracking-tight truncate font-medium">
            <span className="text-amber-500/90 font-bold uppercase tracking-tighter mr-2 italic">
              Limited Access
            </span>
            <strong className="text-zinc-100 hidden xs:inline">
              Board 2026:
            </strong>
            <span className="hidden md:inline mx-2 text-zinc-700">|</span>
            <span className="inline md:hidden text-zinc-300">
              100 Questions{" "}
            </span>
            <span className="hidden md:inline text-zinc-300">
              The &apos;100 Most-Repeated Questions&apos; Series{" "}
            </span>
            is&nbsp;
            <span className="text-amber-500 font-bold uppercase tracking-[0.15em] text-[9px] md:text-[10px]">
              Live
            </span>
          </p>
        </div>

        {/* Right Side: Action Button */}
        <a
          href="#"
          className="shrink-0 flex items-center gap-1.5 rounded-full bg-amber-500/3 border border-amber-500/20 px-3.5 py-1 text-[10px] md:text-[11px] font-bold text-amber-500 transition-all hover:bg-amber-500/10 hover:border-amber-500/40 active:scale-95 shadow-[0_0_15px_rgba(245,158,11,0.05)]"
        >
          <span className="xs:inline">Watch </span> Online
          <span
            className="text-amber-600 group-hover:translate-x-0.5 transition-transform"
            aria-hidden="true"
          >
            →
          </span>
        </a>
      </div>

      {/* Subtle bottom glow effect */}
      <div className="absolute -bottom-px left-1/2 -translate-x-1/2 w-1/3 h-px bg-linear-to-r from-transparent via-amber-500/40 to-transparent" />
    </div>
  );
};

export default AnnouncementBanner;
