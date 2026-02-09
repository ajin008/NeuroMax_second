import { CheckCircle2, Loader2 } from "lucide-react";

export const SuccessOverlay = () => {
  return (
    <div className="fixed inset-0 z-100 flex flex-col items-center justify-center bg-black/95 backdrop-blur-xl">
      <div className="flex flex-col items-center animate-in zoom-in fade-in duration-500">
        {/* Animated Icon Container */}
        <div className="relative mb-8">
          {/* Layered Glow Effects */}
          <div className="absolute inset-0 rounded-full bg-amber-500/20 blur-2xl animate-pulse" />
          <div className="absolute inset-0 rounded-full bg-orange-600/10 blur-3xl animate-pulse delay-75" />

          <div className="relative bg-zinc-950 p-4 rounded-full border border-amber-500/30 shadow-[0_0_30px_rgba(245,158,11,0.2)]">
            <CheckCircle2 className="h-16 w-16 text-amber-500" />
          </div>
        </div>

        {/* Text Content */}
        <div className="text-center space-y-3">
          <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">
            Payment{" "}
            <span className="text-amber-500 text-shadow-glow">Verified</span>
          </h2>

          <div className="flex flex-col items-center gap-4">
            <p className="text-zinc-400 text-sm md:text-base font-medium max-w-62.5 leading-relaxed">
              Welcome to the inner circle. We&apos;re preparing your
              dashboard...
            </p>

            {/* Redirection Status */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/5 border border-amber-500/10">
              <Loader2 className="h-3 w-3 text-amber-500 animate-spin" />
              <span className="text-[10px] font-bold text-amber-500 uppercase tracking-[0.2em]">
                Auto-Redirecting to WhatsApp
              </span>
            </div>
          </div>
        </div>

        {/* Subtle background mesh to make it feel premium */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.05)_0%,transparent_70%)] pointer-events-none -z-10" />
      </div>
    </div>
  );
};
