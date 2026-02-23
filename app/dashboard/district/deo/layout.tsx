// app/dashboard/deo/layout.tsx
import { DEOSidebar } from "@/components/layout/district/DEOSidebar";
import { DEOHeader } from "@/components/layout/district/DEOHeader";

export default function DEOLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen bg-[#F8FAFC] overflow-hidden font-sans selection:bg-indigo-100">

      {/* 1. LEFT HAND SIDE: EDUCATION STATUTORY NAVIGATION (10 ITEMS) */}
      <DEOSidebar />

      {/* 2. MAIN VIEWPORT AREA */}
      <div className="flex-1 flex flex-col overflow-hidden relative">

        {/* TOP: EDUCATION AUTHORITY HEADER */}
        <DEOHeader />

        {/* CENTER: INCLUSIVE EDUCATION CANVAS */}
        <main className="flex-1 overflow-y-auto p-8 custom-scrollbar relative">

          {/* Subtle Institutional Watermark */}
          <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.02] flex items-center justify-center overflow-hidden">
            <div className="border-[2px] border-indigo-900 rounded-full h-[800px] w-[800px] flex items-center justify-center">
              <div className="border-[2px] border-indigo-900 rounded-full h-[600px] w-[600px] flex items-center justify-center">
                <div className="border-[2px] border-indigo-900 rounded-full h-[400px] w-[400px]" />
              </div>
            </div>
          </div>

          <div className="max-w-[1600px] mx-auto relative z-10 space-y-8">
            {children}
          </div>
        </main>

        {/* BOTTOM: STATUTORY EDUCATION STRIP */}
        <footer className="h-10 bg-white border-t border-slate-200 flex items-center justify-between px-8 z-20">
          <div className="flex items-center gap-6">
            <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">
              Administrative ID: <span className="text-indigo-600 font-mono">DAEGS-EDU-UP-LKO-DEO-01</span>
            </span>
            <div className="h-3 w-[1px] bg-slate-200" />
            <div className="flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-500 animate-pulse" />
              <span className="text-[9px] font-black text-indigo-600 uppercase tracking-widest">
                Live Sync: National Education Portal (DEPwD)
              </span>
            </div>
          </div>

          <div className="flex gap-8 text-[9px] font-black text-slate-400 uppercase tracking-widest">
            <button className="hover:text-indigo-600 transition-colors">Admission Protocols</button>
            <button className="hover:text-indigo-600 transition-colors">Accommodation Manual</button>
            <div className="h-3 w-[1px] bg-slate-200" />
            <span className="opacity-40">System Release: v2.4.0-Edu</span>
          </div>
        </footer>

      </div>
    </div>
  );
}