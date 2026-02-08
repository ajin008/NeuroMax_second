import React from "react";

const AnnouncementBanner = () => {
  return (
    <div className="relative isolate flex items-center bg-black px-4 py-2.5 border-b border-zinc-900">
      <div className="flex items-center justify-between w-full max-w-7xl mx-auto md:justify-center md:gap-x-6">
        {/* Left Side: Status & Message */}
        <div className="flex items-center gap-2 overflow-hidden">
          {/* Minimalist Live Indicator */}
          <span className="relative flex-shrink-0 flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-40"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>

          <p className="text-[11px] md:text-[12px] leading-tight text-zinc-400 tracking-wide truncate">
            <strong className="font-semibold text-white hidden xs:inline">
              Board 2026:
            </strong>
            <span className="mx-2 text-zinc-800 hidden md:inline">|</span>
            <span className="inline md:hidden">100 Questions </span>
            <span className="hidden md:inline">
              The &apos;100 Most-Repeated Questions&apos; Series{" "}
            </span>
            is&nbsp;
            <span className="text-white font-medium uppercase tracking-widest text-[9px] md:text-[10px]">
              Live
            </span>
          </p>
        </div>

        {/* Right Side: Action Button */}
        <a
          href="#"
          className="flex-shrink-0 flex items-center gap-1 rounded-full bg-zinc-900 border border-zinc-800 px-3 py-1 text-[10px] md:text-[11px] font-medium text-white transition-all hover:bg-zinc-800 active:scale-95"
        >
          <span className="xs:inline">Watch </span> Online
          <span className="text-zinc-500" aria-hidden="true">
            →
          </span>
        </a>
      </div>
    </div>
  );
};

export default AnnouncementBanner;
