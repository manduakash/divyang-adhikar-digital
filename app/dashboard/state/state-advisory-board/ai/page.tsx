// app/dashboard/sab/ai/page.tsx
"use client";
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  FileText, PenTool, Landmark, Cpu, 
  BadgeCheck, Sparkles, Send, Zap, ChevronRight, 
  ArrowUpRight, Bot, Database, History, Terminal
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function GenerativeAIHub() {
    const [active, setActive] = useState('MOM');

    return (
        <div className="space-y-12 p-4 animate-in fade-in duration-1000 font-sans selection:bg-emerald-100 max-w-[1600px] mx-auto">
            
            {/* 1. APEX NEURAL HEADER - MINIMALIST DOT PATTERN */}
            <div className="relative p-16 rounded-[60px] border border-slate-200 bg-[#f1f5f9] overflow-hidden shadow-sm group">
                {/* RELIABLE INLINE DOT PATTERN */}
                <div 
                    className="absolute inset-0 opacity-[0.2] pointer-events-none" 
                    style={{ 
                        backgroundImage: `radial-gradient(#64748b 1.5px, transparent 0)`,
                        backgroundSize: '24px 24px' 
                    }} 
                />
                
                <div className="relative z-10 flex flex-col xl:flex-row justify-between items-center gap-12">
                    <div className="space-y-8 flex-1">
                        <div className="inline-flex items-center gap-3 bg-white px-5 py-2 rounded-2xl border border-slate-200 shadow-sm transition-transform group-hover:scale-105">
                            <Cpu size={16} className="text-emerald-500 animate-pulse" />
                            <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em]">NEURAL PROCESSING NODE</span>
                        </div>
                        
                        <h1 className="text-8xl font-black text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.1)] tracking-tighter uppercase leading-none">
                            GENERATIVE AI
                        </h1>
                        
                        <p className="text-2xl font-black text-slate-800 leading-tight tracking-tight uppercase max-w-4xl border-l-4 border-emerald-500 pl-6">
                            SUPPORTS DRAFTING AND SUMMARISATION, WITHOUT ALTERING OFFICIAL RECORDS.
                        </p>
                    </div>

                    {/* STATE SYNC BADGE - GLASSMORPHIC */}
                    <div className="bg-white/80 backdrop-blur-xl border border-white p-12 rounded-[52px] text-center min-w-[280px] shadow-2xl relative group/badge transition-all hover:translate-y-[-4px]">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-1 w-16 bg-emerald-500 rounded-b-full shadow-[0_0_15px_rgba(16,185,129,0.5)]" />
                        <p className="text-[11px] font-black text-emerald-600 uppercase tracking-[0.2em] mb-2">STATE SYNC</p>
                        <p className="text-4xl font-black text-slate-900 uppercase tracking-tighter">VERIFIED</p>
                        <div className="mt-6 flex justify-center gap-1">
                            <div className="h-1 w-8 bg-emerald-500 rounded-full" />
                            <div className="h-1 w-2 bg-slate-200 rounded-full" />
                            <div className="h-1 w-2 bg-slate-200 rounded-full" />
                        </div>
                    </div>
                </div>
            </div>

            {/* 2. TACTICAL TILE SELECTOR - HIGH CONTRAST */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                
                <FunctionTile 
                    active={active === 'MOM'} 
                    onClick={() => setActive('MOM')}
                    label="AUTO-SUMMARISE MINUTES OF MEETING" 
                    icon={<FileText/>} 
                    activeColor="bg-[#064e3b]" // Statutory Deep Green
                />

                <FunctionTile 
                    active={active === 'RECOMMENDATION'} 
                    onClick={() => setActive('RECOMMENDATION')}
                    label="DRAFT RECOMMENDATION NOTES" 
                    icon={<PenTool/>} 
                    activeColor="bg-[#064e3b]" 
                />

                <FunctionTile 
                    active={active === 'REPORT'} 
                    onClick={() => setActive('REPORT')}
                    label="GENERATE MEETING SUMMARIES FOR REPORTS" 
                    icon={<Landmark/>} 
                    activeColor="bg-[#064e3b]" 
                />
                
            </div>

            {/* 3. DRAFTING WORKSPACE - BOTTOM SECTION (A6 REQUIREMENT) */}
            <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">
                <Card className="xl:col-span-3 rounded-[48px] border-slate-200 bg-white shadow-xl overflow-hidden min-h-[600px] flex flex-col">
                    <CardHeader className="p-8 border-b border-slate-50 bg-slate-50/50 flex flex-row justify-between items-center">
                        <div className="flex items-center gap-4">
                            <Terminal className="text-emerald-600" size={20} />
                            <CardTitle className="text-xs font-black uppercase tracking-[0.2em] text-slate-400">INTELLIGENT DRAFTING CANVAS</CardTitle>
                        </div>
                        <Badge className="bg-emerald-100 text-emerald-700 font-black text-[9px] uppercase px-4 py-1.5 border-none tracking-widest shadow-sm">AI OUTPUT READY</Badge>
                    </CardHeader>
                    <div className="p-10 flex-1 relative">
                        {/* Subliminal Pattern */}
                        <div className="absolute inset-0 opacity-[0.01] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/grid-me.png')]" />
                        <div className="h-full w-full rounded-[32px] bg-slate-50 border border-slate-100 p-10 font-medium text-slate-600 leading-relaxed italic">
                            (AI drafted content will appear here for human verification. All outputs remain editable drafts as per Section A6.)
                        </div>
                    </div>
                </Card>

                <div className="space-y-8">
                    <Card className="rounded-[40px] border-none bg-slate-900 text-white p-10 shadow-2xl relative overflow-hidden group">
                        <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
                        <h4 className="text-[10px] font-black text-emerald-400 uppercase tracking-widest mb-6 border-b border-white/10 pb-4">System Behaviour</h4>
                        <p className="text-xs font-bold leading-relaxed uppercase tracking-tighter opacity-80">
                            A6: APPROVED DRAFTS ARE AUTOMATICALLY FORMATTED INTO THE STATUTORY LAYOUT FOR OFFICIAL REGISTRY.
                        </p>
                        <Button className="w-full mt-10 h-14 bg-white text-slate-900 rounded-2xl font-black uppercase tracking-widest text-[10px] shadow-xl hover:bg-emerald-50 transition-all">
                           Review Past Drafts
                        </Button>
                    </Card>
                </div>
            </div>

        </div>
    );
}

/* UI SUB-COMPONENTS */

function FunctionTile({ active, onClick, label, icon, activeColor }: any) {
    return (
        <button 
            onClick={onClick}
            className={`group relative text-left p-10 rounded-[48px] overflow-hidden transition-all duration-700 h-48 shadow-lg flex items-center gap-8 border-2 ${
                active ? `${activeColor} border-emerald-500 scale-[1.03] shadow-emerald-900/20` : 'bg-[#94a3b8] border-transparent hover:bg-[#64748b] hover:translate-y-[-4px]'
            }`}
        >
            {/* MICRO-DOT OVERLAY FOR TEXTURE */}
            <div 
                className="absolute inset-0 opacity-[0.25] pointer-events-none mix-blend-overlay" 
                style={{ 
                    backgroundImage: `radial-gradient(black 1.5px, transparent 0)`,
                    backgroundSize: '10px 10px' 
                }} 
            />

            {/* ICON CONTAINER */}
            <div className="relative z-10 h-16 w-16 rounded-[24px] bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center text-white shadow-2xl group-hover:scale-110 transition-transform duration-500">
                {React.cloneElement(icon, { size: 28, strokeWidth: 3 })}
            </div>

            {/* LABEL CONTENT */}
            <div className="relative z-10 flex-1 flex flex-col justify-center">
                <span className="text-[14px] font-black uppercase tracking-[0.05em] text-white leading-[1.2] max-w-[180px]">
                    {label}
                </span>
                <div className={`h-1 bg-white/30 rounded-full mt-4 transition-all duration-700 ${active ? 'w-24' : 'w-0'}`} />
            </div>
            
            <div className={`absolute bottom-8 right-8 transition-opacity duration-500 ${active ? 'opacity-40' : 'opacity-0'}`}>
                <ArrowUpRight size={24} className="text-white" />
            </div>
        </button>
    );
}