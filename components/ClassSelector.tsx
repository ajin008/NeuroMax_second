import React from "react";

interface Props {
  selected: string;
  onSelect: (grade: string) => void;
}

const ClassSelector = ({ selected, onSelect }: Props) => {
  const grades = [
    { id: "8", price: "90" },
    { id: "9", price: "95" },
    { id: "10", price: "99" },
  ];

  return (
    <section className="bg-black pb-24 px-6 relative">
      {/* Subtle background glow to separate the section */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-linear-to-r from-transparent via-amber-500/20 to-transparent" />

      <div className="max-w-5xl mx-auto flex flex-col items-center">
        {/* Amber Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/5 px-4 py-1.5 mb-10">
          <span className="text-amber-500 text-[10px] animate-pulse">✦</span>
          <span className="text-[10px] font-bold tracking-[0.2em] text-amber-500/80 uppercase">
            Exclusive Batch Selection
          </span>
        </div>

        {/* Dynamic Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
          {grades.map((grade) => (
            <button
              key={grade.id}
              onClick={() => onSelect(grade.id)}
              className={`relative flex flex-col items-center justify-center p-10 rounded-[2.5rem] transition-all duration-500 border backdrop-blur-sm group ${
                selected === grade.id
                  ? "bg-amber-500/[0.07] border-amber-500/40 shadow-[0_0_50px_rgba(245,158,11,0.05)]"
                  : "bg-zinc-900/20 border-white/3 opacity-60 hover:opacity-100 hover:border-white/10"
              }`}
            >
              {/* Top Accent Line for Selected Card */}
              {selected === grade.id && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-0.5 bg-linear-to-r from-transparent via-amber-500 to-transparent shadow-[0_0_15px_rgba(245,158,11,0.8)]" />
              )}

              <span
                className={`text-[10px] font-bold uppercase tracking-[0.2em] mb-2 transition-colors ${
                  selected === grade.id ? "text-amber-500/60" : "text-zinc-600"
                }`}
              >
                Grade
              </span>

              <h3
                className={`text-6xl font-black mb-6 flex items-baseline transition-colors ${
                  selected === grade.id ? "text-white" : "text-zinc-400"
                }`}
              >
                {grade.id}
                <span className="text-lg font-medium opacity-40 ml-1">th</span>
              </h3>

              <div className="flex items-center gap-3">
                <div
                  className={`h-5 w-5 rounded-full border flex items-center justify-center transition-all duration-300 ${
                    selected === grade.id
                      ? "bg-amber-500 border-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.5)]"
                      : "border-zinc-800"
                  }`}
                >
                  {selected === grade.id && (
                    <span className="text-black text-[10px] font-bold">✓</span>
                  )}
                </div>
                <span
                  className={`text-2xl font-bold transition-colors ${
                    selected === grade.id ? "text-white" : "text-zinc-500"
                  }`}
                >
                  ₹{grade.price}
                </span>
              </div>
            </button>
          ))}
        </div>

        {/* Bottom Progress/Indicator */}
        <div className="mt-12 flex flex-col items-center gap-6">
          <p className="text-zinc-600 text-[10px] font-bold tracking-[0.3em] uppercase flex items-center gap-2">
            <span className="h-px w-8 bg-zinc-800" />
            Targeted for 2026 Board Exams
            <span className="h-px w-8 bg-zinc-800" />
          </p>
          <div className="flex gap-3">
            {grades.map((g) => (
              <div
                key={g.id}
                className={`h-1 rounded-full transition-all duration-700 ${
                  selected === g.id ? "w-16 bg-amber-500" : "w-4 bg-zinc-900"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClassSelector;
