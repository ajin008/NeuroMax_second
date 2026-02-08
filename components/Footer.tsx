import React from "react";
import { Mail, Clock, ShieldCheck, ExternalLink } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-20 pb-10 px-6 border-t border-zinc-900">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Support Column */}
          <div className="space-y-4">
            <h4 className="text-zinc-500 text-[10px] font-bold uppercase tracking-[0.2em]">
              Support
            </h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 group">
                <Clock className="w-4 h-4 text-blue-500" />
                <span className="text-sm text-zinc-400">10 AM - 7 PM</span>
              </div>
              <a
                href="mailto:neuromaxaccademy@gmail.com"
                className="flex items-center gap-3 group hover:text-blue-400 transition-colors"
              >
                <Mail className="w-4 h-4 text-blue-500" />
                <span className="text-sm text-zinc-400 group-hover:text-zinc-200 transition-colors">
                  neuromaxaccademy@gmail.com
                </span>
              </a>
            </div>
          </div>

          {/* Trust/Payment Column */}
          <div className="flex flex-col items-start md:items-center space-y-4">
            <h4 className="text-zinc-500 text-[10px] font-bold uppercase tracking-[0.2em]">
              Trust
            </h4>
            <div className="bg-zinc-900/40 border border-zinc-800 px-4 py-2 rounded-xl flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-blue-500" />
              <p className="text-xs font-medium text-zinc-300">
                Secure payment via{" "}
                <span className="text-white font-bold">Razorpay</span>
              </p>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="flex flex-col items-start md:items-end space-y-4">
            <h4 className="text-zinc-500 text-[10px] font-bold uppercase tracking-[0.2em]">
              Legal
            </h4>
            <div className="flex flex-wrap gap-x-6 gap-y-2 md:justify-end">
              {["Terms", "Privacy", "Refunds"].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-xs text-zinc-500 hover:text-blue-500 transition-colors flex items-center gap-1"
                >
                  {link} <ExternalLink className="w-2.5 h-2.5 opacity-50" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-linear-to-r from-transparent via-zinc-800 to-transparent mb-8" />

        {/* Copyright Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col items-center md:items-start">
            <p className="text-sm font-bold tracking-tight text-white">
              © 2026 <span className="text-blue-500">CBSE 100</span> Initiative
            </p>
            <p className="text-[10px] text-zinc-600 uppercase tracking-widest mt-1">
              Independent educational initiative.
            </p>
          </div>

          <div className="flex items-center gap-2 grayscale opacity-50 hover:opacity-100 transition-opacity">
            <div className="h-2 w-2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
            <span className="text-[10px] font-medium text-zinc-500 uppercase tracking-tighter">
              Server Status: Operational
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
