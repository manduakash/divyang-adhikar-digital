// app/dashboard/sab/layout.tsx
import { SABSidebar } from "@/components/layout/state/AdvisoryBoardSidebar";
import { SABHeader } from "@/components/layout/state/AdvisoryBoardHeader";

export default function SABLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex h-screen bg-[#F8FAFC] overflow-hidden font-sans selection:bg-emerald-100">

            {/* LHS: ADVISORY BOARD NAVIGATION */}
            <SABSidebar />

            <div className="flex-1 flex flex-col overflow-hidden relative">

                {/* TOP: SECRETARIAT HUB HEADER */}
                <SABHeader />

                {/* CENTER: ADVISORY WORKSPACE CANVAS */}
                <main className="flex-1 overflow-y-auto p-8 custom-scrollbar relative bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-fixed">

                    {/* Subtle Decision Pattern Watermark */}
                    <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03] flex items-center justify-center overflow-hidden">
                        <div className="border-[2px] border-emerald-900 rounded-[80px] rotate-45 h-[1200px] w-[1200px] flex items-center justify-center">
                            <div className="border-[2px] border-emerald-900 rounded-[60px] h-[900px] w-[900px] flex items-center justify-center">
                                <div className="border-[2px] border-emerald-900 rounded-[40px] h-[600px] w-[600px]" />
                            </div>
                        </div>
                    </div>

                    <div className="max-w-[1600px] mx-auto relative z-10 space-y-8">
                        {children}
                    </div>
                </main>

                {/* BOTTOM: STATUTORY ACCOUNTABILITY STRIP */}
                <footer className="h-10 bg-slate-900 border-t border-white/5 flex items-center justify-between px-8 z-20 text-white">
                    <div className="flex items-center gap-6">
                        <span className="text-[9px] font-black text-emerald-400 uppercase tracking-widest">
                            Node ID: <span className="text-white font-mono">SAB-NODE-01-SEC</span>
                        </span>
                        <div className="h-3 w-[1px] bg-white/10" />
                        <div className="flex items-center gap-2">
                            <div className="h-1.5 w-1.5 rounded-full bg-blue-500 animate-pulse" />
                            <span className="text-[9px] font-black text-blue-400 uppercase tracking-widest">
                                National Advisory Sync: VERIFIED
                            </span>
                        </div>
                    </div>

                    <div className="flex gap-8 text-[9px] font-black text-slate-500 uppercase tracking-widest">
                        <button className="hover:text-white transition-colors">Board Bye-laws</button>
                        <button className="hover:text-white transition-colors">Nomination Protocols</button>
                        <span className="opacity-30">v4.2.0-SAB-Core</span>
                    </div>
                </footer>

            </div>
        </div>
    );
}