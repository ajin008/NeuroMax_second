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
    <section className="bg-black pb-24 px-6">
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        {/* Minimalist Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-950 px-4 py-1.5 mb-10">
          <span className="text-blue-500 text-xs">✦</span>
          <span className="text-[10px] font-bold tracking-[0.2em] text-zinc-400 uppercase">
            Exclusive Batch Selection
          </span>
        </div>

        {/* Dynamic Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
          {grades.map((grade) => (
            <button
              key={grade.id}
              onClick={() => onSelect(grade.id)}
              className={`relative flex flex-col items-center justify-center p-10 rounded-[2.5rem] transition-all duration-300 border backdrop-blur-sm ${
                selected === grade.id
                  ? "bg-zinc-900/60 border-blue-500/50 shadow-[0_0_40px_rgba(59,130,246,0.1)]"
                  : "bg-zinc-900/20 border-zinc-800 opacity-60 hover:opacity-100"
              }`}
            >
              {/* Active Glow for Selected Card */}
              {selected === grade.id && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[2px] bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.8)]" />
              )}

              <span className="text-zinc-500 text-[10px] font-bold uppercase tracking-[0.2em] mb-2">
                Grade
              </span>
              <h3 className="text-5xl font-black mb-6 flex items-baseline">
                {grade.id}
                <span className="text-lg font-medium text-zinc-600">th</span>
              </h3>

              <div className="flex items-center gap-3">
                <div
                  className={`h-5 w-5 rounded-full border flex items-center justify-center transition-colors ${
                    selected === grade.id
                      ? "bg-blue-600 border-blue-600"
                      : "border-zinc-700"
                  }`}
                >
                  {selected === grade.id && (
                    <span className="text-white text-[10px]">✓</span>
                  )}
                </div>
                <span
                  className={`text-2xl font-bold ${
                    selected === grade.id ? "text-white" : "text-zinc-500"
                  }`}
                >
                  ₹{grade.price}
                </span>
              </div>
            </button>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center gap-4">
          <p className="text-zinc-500 text-[10px] font-bold tracking-[0.3em] uppercase">
            🚀 Targeted for 2026 Board Exams
          </p>
          <div className="flex gap-2">
            {grades.map((g) => (
              <div
                key={g.id}
                className={`h-1 rounded-full transition-all duration-500 ${
                  selected === g.id ? "w-12 bg-blue-600" : "w-6 bg-zinc-800"
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
