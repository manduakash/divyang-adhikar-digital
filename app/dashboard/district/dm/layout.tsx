// app/dashboard/district/layout.tsx
import { DistrictSidebar } from "@/components/layout/district/DMSidebar";
import { DistrictHeader } from "@/components/layout/district/DMHeader";

export default function DistrictLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen bg-[#F8FAFC] overflow-hidden font-sans selection:bg-blue-100">

      {/* 1. LEFT HAND SIDE: STATUTORY NAVIGATION (11 ITEMS) */}
      <DistrictSidebar />

      {/* 2. MAIN VIEWPORT AREA */}
      <div className="flex-1 flex flex-col overflow-hidden relative">

        {/* TOP: DISTRICT COMMAND HEADER */}
        <DistrictHeader />

        {/* CENTER: CONTENT CANVAS */}
        <main className="flex-1 overflow-y-auto p-8 custom-scrollbar relative">
          {/* Subtle Background Watermark for Authority */}
          <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03] flex items-center justify-center">
            <div className="border-[40px] border-slate-900 rounded-full h-[600px] w-[600px]" />
          </div>

          <div className="max-w-[1600px] mx-auto relative z-10">
            {children}
          </div>
        </main>

        {/* BOTTOM: SYSTEM ENFORCEMENT STRIP */}
        <footer className="h-10 bg-white border-t border-slate-200 flex items-center justify-between px-8 z-20">
          <div className="flex items-center gap-4">
            <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">
              Node Identifier: <span className="text-slate-900">DAEGS-DIST-UP-LKO-01</span>
            </span>
            <div className="h-3 w-[1px] bg-slate-200" />
            <div className="flex items-center gap-1.5">
              <div className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
              <span className="text-[9px] font-black text-green-600 uppercase tracking-widest">
                Live Sync: State Nodal Hub
              </span>
            </div>
          </div>

          <div className="flex gap-6 text-[9px] font-black text-slate-400 uppercase tracking-widest">
            <button className="hover:text-blue-600 transition-colors">Emergency Protocols</button>
            <button className="hover:text-blue-600 transition-colors">Statutory Manual</button>
            <span className="opacity-30">v2.0.4-Enforcement</span>
          </div>
        </footer>

      </div>
    </div>
  );
}