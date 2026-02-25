// app/dashboard/pp/layout.tsx
import { PPSidebar } from "@/components/layout/district/DPPSidebar";
import { PPHeader } from "@/components/layout/district/DPPHeader";

export default function PPLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen bg-[#F8FAFC] overflow-hidden font-sans selection:bg-blue-100">

      {/* LHS: PROSECUTION NAVIGATION (7 ITEMS) */}
      <PPSidebar />

      <div className="flex-1 flex flex-col overflow-hidden relative">

        {/* TOP: JUDICIAL CONTROL HEADER */}
        <PPHeader />

        {/* CENTER: LEGAL WORKSPACE CANVAS */}
        <main className="flex-1 overflow-y-auto p-8 custom-scrollbar relative bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-fixed">

          {/* Professional Power Watermark */}
          <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.04] flex items-center justify-center overflow-hidden">
            <div className="border-[40px] border-slate-900 rounded-full h-[1000px] w-[1000px]" />
            <div className="absolute border-[1px] border-slate-950 h-full w-[1px] left-1/2" />
            <div className="absolute border-[1px] border-slate-950 w-full h-[1px] top-1/2" />
          </div>

          <div className="max-w-[1600px] mx-auto relative z-10 space-y-8">
            {children}
          </div>
        </main>

        {/* BOTTOM: STATUTORY FOLLOW-UP STRIP */}
        <footer className="h-10 bg-slate-950 border-t border-white/5 flex items-center justify-between px-8 z-20 text-white">
          <div className="flex items-center gap-6">
            <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest">
              Counsel ID: <span className="text-blue-400 font-mono">DAEGS-PP-LKO-UP-001</span>
            </span>
            <div className="h-3 w-[1px] bg-white/10" />
            <div className="flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-blue-500 animate-pulse" />
              <span className="text-[9px] font-black text-blue-400 uppercase tracking-widest">
                National Case Registry Link: ACTIVE
              </span>
            </div>
          </div>

          <div className="flex gap-8 text-[9px] font-black text-slate-500 uppercase tracking-widest">
            <button className="hover:text-blue-400 transition-colors">Limitation Periods</button>
            <button className="hover:text-blue-400 transition-colors">PwD Act Sections</button>
            <span className="opacity-30">v2.1.0-Judiciary</span>
          </div>
        </footer>

      </div>
    </div>
  );
}