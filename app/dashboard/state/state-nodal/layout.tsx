// app/dashboard/state/layout.tsx
import { StateSidebar } from "@/components/layout/state/NodalSidebar";
import { StateHeader } from "@/components/layout/state/NodalHeader";

export default function StateLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex h-screen bg-[#F8FAFC] overflow-hidden font-sans selection:bg-purple-100">

            {/* LHS: STATE SUPERVISORY NAVIGATION (13 ITEMS) */}
            <StateSidebar />

            <div className="flex-1 flex flex-col overflow-hidden relative bg-[url('https://www.transparenttextures.com/patterns/diagonal-striped-brick.png')] bg-fixed">

                {/* TOP: APEX COMMAND HEADER */}
                <StateHeader />

                {/* CENTER: STATE MONITORING CANVAS */}
                <main className="flex-1 overflow-y-auto p-8 custom-scrollbar relative bg-white/60">

                    {/* Subtle Royal Pattern Watermark */}
                    <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03] flex items-center justify-center overflow-hidden">
                        <div className="border-[2px] border-purple-900 rounded-full h-[1400px] w-[1400px] flex items-center justify-center">
                            <div className="border-[2px] border-purple-900 rounded-full h-[1100px] w-[1100px] flex items-center justify-center">
                                <div className="border-[2px] border-purple-900 rounded-full h-[800px] w-[800px] flex items-center justify-center">
                                    <div className="border-[2px] border-purple-900 rounded-full h-[500px] w-[500px]" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="max-w-[1700px] mx-auto relative z-10 space-y-8">
                        {children}
                    </div>
                </main>

                {/* BOTTOM: SYSTEM INTEGRITY STRIP */}
                <footer className="h-10 bg-white border-t border-slate-200 flex items-center justify-between px-8 z-20 shadow-inner">
                    <div className="flex items-center gap-6">
                        <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">
                            Node Authority: <span className="text-purple-700 font-mono tracking-tighter">DAEGS-STATE-NODE-001</span>
                        </span>
                        <div className="h-3 w-[1px] bg-slate-200" />
                        <div className="flex items-center gap-2">
                            <div className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
                            <span className="text-[9px] font-black text-green-600 uppercase tracking-widest">
                                Aggregated District Data Sync: ACTIVE
                            </span>
                        </div>
                    </div>

                    <div className="flex gap-8 text-[9px] font-black text-slate-400 uppercase tracking-widest">
                        <button className="hover:text-purple-700 transition-colors">PwD Rules 2017</button>
                        <button className="hover:text-purple-700 transition-colors">Statutory Mandates</button>
                        <div className="h-3 w-[1px] bg-slate-200" />
                        <span className="opacity-40 tracking-tighter">v3.0.0-Apex-Release</span>
                    </div>
                </footer>

            </div>
        </div>
    );
}