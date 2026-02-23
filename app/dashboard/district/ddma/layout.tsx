// app/dashboard/ddma/layout.tsx

import { DDMAHeader } from "@/components/layout/district/DDMAHeader";
import { DDMASidebar } from "@/components/layout/district/DDMASidebar";


export default function DDMALayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen overflow-hidden font-sans selection:bg-orange-100">

      {/* LHS: DISASTER STATUTORY NAVIGATION (10 ITEMS) */}
      <DDMASidebar />

      <div className="flex-1 flex flex-col overflow-hidden relative">

        {/* TOP: EMERGENCY COMMAND HEADER */}
        <DDMAHeader />

        {/* CENTER: DISASTER MANAGEMENT CANVAS */}
        <main className="flex-1 overflow-y-auto p-8 custom-scrollbar relative">

          {/* Subtle Emergency Pulse Watermark */}
          <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03] flex items-center justify-center overflow-hidden">
            <div className="border-[10px] border-orange-600 rounded-full h-[1200px] w-[1200px] animate-[ping_10s_infinite]" />
          </div>

          <div className="max-w-[1600px] mx-auto relative z-10 space-y-8">
            {children}
          </div>
        </main>

        {/* BOTTOM: SYSTEM READINESS STRIP */}
        <footer className="h-10 border-t border-white/10 flex items-center justify-between px-8 z-20 text-white">
          <div className="flex items-center gap-6">
            <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest">
              Control ID: <span className="text-orange-500">DDMA-LKO-UP-SOS-01</span>
            </span>
            <div className="h-3 w-[1px] bg-white/10" />
            <div className="flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
              <span className="text-[9px] font-black text-green-400 uppercase tracking-widest">
                PwD Data Connection: LIVE
              </span>
            </div>
          </div>

          <div className="flex gap-8 text-[9px] font-black text-slate-500 uppercase tracking-widest">
            <button className="hover:text-orange-500 transition-colors">Emergency SOPs</button>
            <button className="hover:text-orange-500 transition-colors">GIS Protocols</button>
            <span className="opacity-30">v2.5.0-Disaster</span>
          </div>
        </footer>

      </div>
    </div>
  );
}