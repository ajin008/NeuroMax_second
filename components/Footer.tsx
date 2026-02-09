import React from "react";
import { Mail, Clock, ShieldCheck, ExternalLink } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-20 pb-10 px-6 border-t border-white/[0.03]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Support Column */}
          <div className="space-y-6">
            <h4 className="text-zinc-600 text-[10px] font-bold uppercase tracking-[0.3em]">
              Support
            </h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3 group">
                <div className="bg-amber-500/10 p-1.5 rounded-lg">
                  <Clock className="w-4 h-4 text-amber-500" />
                </div>
                <span className="text-sm text-zinc-400 font-medium tracking-tight">
                  10 AM - 7 PM IST
                </span>
              </div>
              <a
                href="mailto:neuromaxaccademy@gmail.com"
                className="flex items-center gap-3 group transition-all"
              >
                <div className="bg-amber-500/10 p-1.5 rounded-lg group-hover:bg-amber-500/20 transition-colors">
                  <Mail className="w-4 h-4 text-amber-500" />
                </div>
                <span className="text-sm text-zinc-500 group-hover:text-zinc-200 transition-colors">
                  neuromaxaccademy@gmail.com
                </span>
              </a>
            </div>
          </div>

          {/* Trust/Payment Column */}
          <div className="flex flex-col items-start md:items-center space-y-6">
            <h4 className="text-zinc-600 text-[10px] font-bold uppercase tracking-[0.3em]">
              Trust
            </h4>
            <div className="bg-zinc-950 border border-amber-500/20 px-5 py-3 rounded-2xl flex items-center gap-3 shadow-[0_0_20px_rgba(245,158,11,0.03)]">
              <ShieldCheck className="w-5 h-5 text-amber-500" />
              <p className="text-xs font-medium text-zinc-400">
                Secure payment via{" "}
                <span className="text-white font-bold tracking-tight italic">
                  Razorpay
                </span>
              </p>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="flex flex-col items-start md:items-end space-y-6">
            <h4 className="text-zinc-600 text-[10px] font-bold uppercase tracking-[0.3em]">
              Legal
            </h4>
            <div className="flex flex-wrap gap-x-6 gap-y-2 md:justify-end">
              {["Terms", "Privacy", "Refunds"].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-xs text-zinc-500 hover:text-amber-500 transition-all duration-300 flex items-center gap-1 group"
                >
                  {link}
                  <ExternalLink className="w-2.5 h-2.5 opacity-30 group-hover:opacity-100 transition-opacity" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Premium Amber Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-amber-500/20 to-transparent mb-8" />

        {/* Copyright Section */}
        <div className="flex flex-col md:row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <p className="text-sm font-bold tracking-tight text-zinc-200">
              © 2026{" "}
              <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                CBSE 100
              </span>{" "}
              Initiative
            </p>
            <p className="text-[9px] text-zinc-600 uppercase tracking-[0.2em] mt-1 font-medium">
              Independent educational platform.
            </p>
          </div>

          {/* Status Indicator */}
          <div className="flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-zinc-950 border border-white/[0.03]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-500 opacity-20"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.6)]"></span>
            </span>
            <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-tighter">
              Server Status: <span className="text-zinc-300">Operational</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
