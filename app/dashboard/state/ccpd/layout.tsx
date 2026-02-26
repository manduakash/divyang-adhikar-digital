// app/dashboard/scpd/layout.tsx

import { CommissionerSidebar } from "@/components/layout/state/CommissionerSidebar";
import { CommissionerHeader } from "@/components/layout/state/CommissionerHeader";


export default function CommissionerLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex h-screen bg-[#F8FAFC] overflow-hidden font-sans selection:bg-indigo-100">

            {/* LHS: APEX COMMISSIONER NAVIGATION */}
            <CommissionerSidebar />

            <div className="flex-1 flex flex-col overflow-hidden relative">

                {/* TOP: AUTHORITY COMMAND HEADER */}
                <CommissionerHeader />

                {/* CENTER: COMMISSIONER WORKSPACE CANVAS */}
                <main className="flex-1 overflow-y-auto p-8 custom-scrollbar relative bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-fixed">

                    {/* Professional Power Watermark */}
                    <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.04] flex items-center justify-center overflow-hidden">
                        <div className="border-[20px] border-indigo-900 rounded-full h-[1200px] w-[1200px] flex items-center justify-center">
                            <div className="border-[1px] border-indigo-950 h-full w-[1px] left-1/2 absolute" />
                            <div className="border-[1px] border-indigo-950 w-full h-[1px] top-1/2 absolute" />
                        </div>
                    </div>

                    <div className="max-w-[1700px] mx-auto relative z-10 space-y-8">
                        {children}
                    </div>
                </main>

                {/* BOTTOM: STATUTORY ACCOUNTABILITY STRIP */}
                <footer className="h-10 bg-indigo-950 border-t border-white/5 flex items-center justify-between px-8 z-20 text-white">
                    <div className="flex items-center gap-6">
                        <span className="text-[9px] font-black text-indigo-400 uppercase tracking-widest">
                            Commissioner ID: <span className="text-white font-mono">SCPD-UP-001-APEX</span>
                        </span>
                        <div className="h-3 w-[1px] bg-white/10" />
                        <div className="flex items-center gap-2">
                            <div className="h-1.5 w-1.5 rounded-full bg-blue-500 animate-pulse" />
                            <span className="text-[9px] font-black text-blue-400 uppercase tracking-widest">
                                National CCPD Sync: ACTIVE
                            </span>
                        </div>
                    </div>

                    <div className="flex gap-8 text-[9px] font-black text-indigo-400 uppercase tracking-widest">
                        <button className="hover:text-white transition-colors">PwD Act 2016 (Legal)</button>
                        <button className="hover:text-white transition-colors">Delegation of Power</button>
                        <span className="opacity-30">v4.1.0-Commissioner-Core</span>
                    </div>
                </footer>

            </div>
        </div>
    );
}