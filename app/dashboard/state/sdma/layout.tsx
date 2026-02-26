// app/dashboard/sdma/layout.tsx
import { SDMASidebar } from "@/components/layout/state/DisasterManagementAuthoritySidebar";
import { SDMAHeader } from "@/components/layout/state/DisasterManagementAuthorityHeader";

export default function SDMALayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex h-screen bg-[#F8FAFC] overflow-hidden font-sans selection:bg-orange-100">

            {/* LHS: APEX DISASTER AUTHORITY NAVIGATION */}
            <SDMASidebar />

            <div className="flex-1 flex flex-col overflow-hidden relative">

                {/* TOP: EMERGENCY COMMAND HEADER */}
                <SDMAHeader />

                {/* CENTER: DISASTER OVERSIGHT CANVAS */}
                <main className="flex-1 overflow-y-auto p-8 custom-scrollbar relative bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-fixed">


                    <div className="max-w-[1700px] mx-auto relative z-10 space-y-8">
                        {children}
                    </div>
                </main>

                {/* BOTTOM: SYSTEM ACCOUNTABILITY STRIP */}
                <footer className="h-10 bg-slate-950 border-t border-white/5 flex items-center justify-between px-8 z-20 text-white">
                    <div className="flex items-center gap-6">
                        <span className="text-[9px] font-black text-orange-400 uppercase tracking-widest leading-none">
                            Authority Node: <span className="text-white font-mono">SDMA-STATE-APEX-001</span>
                        </span>
                        <div className="h-3 w-[1px] bg-white/10" />
                        <div className="flex items-center gap-2">
                            <div className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
                            <span className="text-[9px] font-black text-green-400 uppercase tracking-widest leading-none uppercase">
                                Statewide DDMA Node Sync: Verified
                            </span>
                        </div>
                    </div>

                    <div className="flex gap-8 text-[9px] font-black text-slate-500 uppercase tracking-widest">
                        <button className="hover:text-white transition-colors">Emergency Protocol v5.0</button>
                        <button className="hover:text-white transition-colors">PwD Disaster Mandates</button>
                        <span className="opacity-30">v5.1.0-Apex-Disaster</span>
                    </div>
                </footer>

            </div>
        </div>
    );
}