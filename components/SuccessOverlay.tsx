import { CheckCircle2, Loader2 } from "lucide-react";

export const SuccessOverlay = () => {
  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black/90 backdrop-blur-md">
      <div className="flex flex-col items-center animate-in zoom-in duration-300">
        <div className="relative mb-6">
          <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-xl animate-pulse" />
          <CheckCircle2 className="h-20 w-20 text-blue-500 relative" />
        </div>
        <h2 className="text-2xl font-bold text-white mb-2">
          Payment Successful!
        </h2>
        <p className="text-zinc-400 text-sm flex items-center gap-2">
          <Loader2 className="h-4 w-4 animate-spin" />
          Redirecting to your WhatsApp Group...
        </p>
      </div>
    </div>
  );
};
