// app/dashboard/ccpd/layout.tsx
import React from 'react';
import { CCPDSidebar } from "@/components/layout/central/CCPDSidebar";
import { CCPDHeader } from "@/components/layout/central/CCPDHeader";
import { BadgeCheck, Globe, ShieldCheck } from "lucide-react";

export default function CCPDLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex h-screen bg-[#f8fafc] overflow-hidden font-sans selection:bg-indigo-100 relative">

            {/* LHS: APEX COMMISSIONER NAVIGATION */}
            <CCPDSidebar />

            <div className="flex-1 flex flex-col overflow-hidden relative">

                {/* TOP: AUTHORITY COMMAND HEADER */}
                <CCPDHeader />

                {/* CENTER: COMMISSIONER WORKSPACE CANVAS */}
                <main className="flex-1 overflow-y-auto p-8 custom-scrollbar relative bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-fixed">

                    <div className="max-w-[1700px] mx-auto relative z-20 space-y-8">
                        {children}
                    </div>

                    {/* INTERNAL PADDING FOR SCROLLING CLEARANCE */}
                    <div className="h-20" />
                </main>

                {/* BOTTOM: STATUTORY ACCOUNTABILITY STRIP - HIGH AUTHORITY INDIGO */}
                <footer className="h-12 bg-[#0f172a] border-t-2 border-white/5 flex items-center justify-between px-10 z-30 text-white shadow-[0_-10px_30px_rgba(0,0,0,0.2)]">
                    <div className="flex items-center gap-8">
                        <div className="flex items-center gap-3">
                            <span className="text-[9px] font-black text-indigo-400 uppercase tracking-[0.2em]">Commissioner ID:</span>
                            <span className="text-[10px] font-mono font-black text-white bg-white/10 px-2 py-0.5 rounded tracking-tighter">CCPD-NAT-NODE-001</span>
                        </div>

                        <div className="h-4 w-[1px] bg-white/10" />

                        <div className="flex items-center gap-2">
                            <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                            <span className="text-[9px] font-black text-blue-400 uppercase tracking-widest leading-none">
                                National Aggregation Sync: Verified & Active
                            </span>
                        </div>
                    </div>

                    <div className="flex gap-10 text-[9px] font-black text-indigo-400 uppercase tracking-widest">
                        <button className="hover:text-white transition-colors flex items-center gap-2 underline underline-offset-4 decoration-indigo-800">
                            <ShieldCheck size={10} /> PwD Act 2016 (Legal)
                        </button>
                        <button className="hover:text-white transition-colors flex items-center gap-2 underline underline-offset-4 decoration-indigo-800">
                            <BadgeCheck size={10} /> Delegation of Power
                        </button>
                        <div className="h-4 w-[1px] bg-white/10" />
                        <span className="opacity-40">System Release: v4.1.0-NAT-CORE</span>
                    </div>
                </footer>

            </div>

            {/* GLOBAL BACKGROUND ELEMENTS */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.04] flex items-center justify-center overflow-hidden">
                <div className="border-[2px] border-indigo-900 rounded-full h-[1400px] w-[1400px] flex items-center justify-center">
                    <div className="border-[2px] border-indigo-900 rounded-full h-[1100px] w-[1100px] flex items-center justify-center">
                        <div className="border-[2px] border-indigo-900 rounded-full h-[800px] w-[800px] flex items-center justify-center">
                            <div className="border-[2px] border-indigo-900 rounded-full h-[500px] w-[500px]" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}