// app/dashboard/ndma/layout.tsx

import { NDMASidebar } from "@/components/layout/central/NDMASidebar";
import { NDMAHeader } from "@/components/layout/central/NDMAHeader";

export default function NDMALayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex h-screen bg-[#F8FAFC] overflow-hidden font-sans selection:bg-orange-100">

            {/* LHS: NDMA PwD INTEGRATION NAVIGATION */}
            <NDMASidebar />

            <div className="flex-1 flex flex-col overflow-hidden relative">

                {/* TOP: AUTHORITY COMMAND HEADER */}
                <NDMAHeader />

                {/* CENTER: NDMA WORKSPACE CANVAS */}
                <main className="flex-1 overflow-y-auto p-8 custom-scrollbar relative bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-fixed">

                    {/* Light Vibrant Watermark */}
                    <div className="absolute inset-0 z-0 pointer-events-none opacity-30 flex items-center justify-center overflow-hidden">
                        <div className="border-[20px] border-orange-100 rounded-full h-[1200px] w-[1200px] flex items-center justify-center">
                            <div className="border-[1px] border-amber-200 h-full w-[1px] left-1/2 absolute" />
                            <div className="border-[1px] border-amber-200 w-full h-[1px] top-1/2 absolute" />
                        </div>
                    </div>

                    <div className="max-w-[1700px] mx-auto relative z-10 space-y-8">
                        {children}
                    </div>
                </main>

                {/* BOTTOM: NATIONAL ACCOUNTABILITY STRIP - VIBRANT GRADIENT */}
                <footer className="h-10 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 flex items-center justify-between px-8 z-20 text-white shadow-inner">
                    <div className="flex items-center gap-6">
                        <span className="text-[9px] font-black uppercase tracking-widest text-indigo-100">
                            Authority ID: <span className="text-white font-mono">NDMA-PWD-APEX</span>
                        </span>
                        <div className="h-3 w-[1px] bg-white/30" />
                        <div className="flex items-center gap-2">
                            <div className="h-1.5 w-1.5 rounded-full bg-emerald-300 animate-pulse shadow-[0_0_8px_theme(colors.emerald.300)]" />
                            <span className="text-[9px] font-black uppercase tracking-widest text-emerald-100">
                                National Preparedness Sync: ACTIVE
                            </span>
                        </div>
                    </div>

                    <div className="flex gap-8 text-[9px] font-black uppercase tracking-widest text-purple-100">
                        <button className="hover:text-white transition-colors">National Disaster Act (Legal)</button>
                        <button className="hover:text-white transition-colors">PwD Guidelines</button>
                        <span className="opacity-60">v5.0-NDMA-Core</span>
                    </div>
                </footer>

            </div>
        </div>
    );
}