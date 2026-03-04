// app/dashboard/nabd/fact-sheets/advisory-board/page.tsx
"use client";
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
    FileText, Printer, DownloadCloud, ShieldCheck,
    Users, UserMinus, CalendarCheck, CalendarClock,
    History, Forward, Lightbulb, Timer, Building2,
    CheckCircle2, Sparkles, Activity
} from "lucide-react";

export default function NABDFactSheetPage() {
    return (
        <div className="space-y-8 animate-in fade-in duration-1000 pb-20 font-sans selection:bg-indigo-100">

            {/* PAGE HEADER */}
            <div className="flex flex-col xl:flex-row justify-between items-start xl:items-end gap-6 relative">
                <div className="space-y-2">
                    <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border-2 border-indigo-100">
                        <FileText size={14} /> Official Fact Sheet
                    </div>
                    <h1 className="text-5xl font-black text-slate-900 tracking-tighter uppercase leading-none">National Advisory Board</h1>
                    <p className="text-slate-500 font-medium text-lg italic underline underline-offset-8 decoration-indigo-100">
                        Single-page governance and operational snapshot.
                    </p>
                </div>
                <div className="flex gap-4">
                    <Button variant="outline" className="h-14 px-8 rounded-full border-2 border-slate-200 font-black uppercase tracking-widest text-[10px] bg-white shadow-xl hover:bg-slate-50 transition-all">
                        <DownloadCloud size={16} className="mr-2" /> Export PDF
                    </Button>
                    <Button className="h-14 px-8 rounded-full bg-slate-900 text-white font-black uppercase tracking-widest text-[10px] shadow-xl hover:bg-black transition-all gap-2 group">
                        <Printer size={16} /> Print Fact Sheet
                    </Button>
                </div>
            </div>

            {/* MAIN FACT SHEET DOCUMENT CONTAINER */}
            <Card className="rounded-[48px] border-2 border-slate-100 bg-white shadow-2xl overflow-hidden relative max-w-6xl mx-auto">
                
                {/* FACT SHEET HEADER */}
                <div className="p-12 bg-gradient-to-br from-indigo-950 via-slate-900 to-black text-white relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 border-b-4 border-indigo-500">
                    <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] bg-fixed" />
                    <div className="absolute -right-20 -top-20 opacity-5 pointer-events-none">
                        <ShieldCheck size={400} />
                    </div>
                    
                    <div className="relative z-10 flex items-center gap-6">
                        <div className="h-20 w-20 rounded-3xl bg-white/10 backdrop-blur-md border-2 border-white/20 flex items-center justify-center shadow-2xl shrink-0">
                            <Building2 size={36} className="text-indigo-400" />
                        </div>
                        <div className="space-y-2">
                            <h2 className="text-3xl font-black uppercase tracking-tighter text-white drop-shadow-md leading-none">
                                National Advisory Board on Disability
                            </h2>
                            <p className="text-xs font-bold text-indigo-300 uppercase tracking-[0.2em]">
                                Ministry of Social Justice & Empowerment, Govt. of India
                            </p>
                            <div className="flex items-center gap-3 pt-2">
                                <Badge className="bg-indigo-600 hover:bg-indigo-600 text-white border-none text-[8px] font-black uppercase tracking-widest px-3 py-1">
                                    Current Fiscal Year Snapshot
                                </Badge>
                                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                                    Generated: {new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="p-10 space-y-10 relative bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-fixed">
                    <div className="absolute inset-0 opacity-[0.02] pointer-events-none" />
                    
                    {/* SECTION 1: BOARD COMPOSITION (2 Columns) */}
                    <div className="space-y-4 relative z-10">
                        <div className="flex items-center gap-3">
                            <Users className="text-indigo-600" size={20} />
                            <h3 className="text-sm font-black text-slate-900 uppercase tracking-[0.2em] border-b-2 border-slate-100 pb-2 flex-1">
                                Board Composition Status
                            </h3>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <FactMetric 
                                title="Total Members" 
                                value="32" 
                                icon={<Users />} 
                                color="from-blue-600 to-indigo-800"
                                desc="Sanctioned statutory strength"
                            />
                            <FactMetric 
                                title="Vacant Positions" 
                                value="04" 
                                icon={<UserMinus />} 
                                color="from-rose-500 to-red-800"
                                desc="Pending nominations/renewals"
                                alert
                            />
                        </div>
                    </div>

                    {/* SECTION 2: MEETING GOVERNANCE (4 Columns) */}
                    <div className="space-y-4 relative z-10">
                        <div className="flex items-center gap-3">
                            <CalendarCheck className="text-emerald-600" size={20} />
                            <h3 className="text-sm font-black text-slate-900 uppercase tracking-[0.2em] border-b-2 border-slate-100 pb-2 flex-1">
                                Meeting & Schedule Governance
                            </h3>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                            <FactMetric 
                                title="Meetings Held" 
                                value="03" 
                                icon={<History />} 
                                color="from-emerald-500 to-teal-700"
                                desc="Current Year"
                            />
                            <FactMetric 
                                title="Meetings Scheduled" 
                                value="01" 
                                icon={<CalendarClock />} 
                                color="from-cyan-500 to-blue-700"
                                desc="Upcoming notices issued"
                            />
                            <DateFactMetric 
                                title="Last Meeting Date" 
                                date="14 Nov 2024" 
                                refNo="NABD/MTG/2024-47"
                                icon={<CheckCircle2 />} 
                                theme="bg-slate-50 border-slate-200 text-slate-700"
                            />
                            <DateFactMetric 
                                title="Next Meeting Date" 
                                date="12 Feb 2025" 
                                refNo="NABD/MTG/2025-48"
                                icon={<Forward />} 
                                theme="bg-indigo-50 border-indigo-200 text-indigo-700"
                            />
                        </div>
                    </div>

                    {/* SECTION 3: ADVISORY & OUTCOMES (2 Columns) */}
                    <div className="space-y-4 relative z-10">
                        <div className="flex items-center gap-3">
                            <Activity className="text-purple-600" size={20} />
                            <h3 className="text-sm font-black text-slate-900 uppercase tracking-[0.2em] border-b-2 border-slate-100 pb-2 flex-1">
                                Advisory Outputs & Follow-ups
                            </h3>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <FactMetric 
                                title="Recommendations Issued" 
                                value="45" 
                                icon={<Lightbulb />} 
                                color="from-purple-500 to-violet-800"
                                desc="Formal policy advisories dispatched"
                            />
                            <FactMetric 
                                title="Action Points Pending" 
                                value="18" 
                                icon={<Timer />} 
                                color="from-amber-500 to-orange-700"
                                desc="Awaiting compliance or closure"
                                alert
                            />
                        </div>
                    </div>

                </div>

                {/* FACT SHEET FOOTER */}
                <div className="bg-slate-50 border-t-2 border-slate-100 p-6 flex justify-between items-center z-10 relative">
                    <div className="flex items-center gap-3">
                        <Sparkles size={16} className="text-indigo-400" />
                        <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">
                            Apex Governance Layer • Official Record
                        </span>
                    </div>
                    <span className="font-mono text-[10px] font-black text-slate-300">
                        DOC-REF: NABD-FS-{new Date().getFullYear()}-001
                    </span>
                </div>

            </Card>

        </div>
    );
}

/* UI SUB-COMPONENTS */

function FactMetric({ title, value, icon, color, desc, alert }: any) {
    return (
        <div className={`relative overflow-hidden rounded-3xl p-6 text-white shadow-lg bg-gradient-to-br ${color} border-t-2 border-white/20 group hover:-translate-y-1 transition-transform duration-300`}>
            <div className="absolute inset-0 opacity-[0.08] pointer-events-none" style={{ backgroundImage: `radial-gradient(white 2px, transparent 0)`, backgroundSize: '12px 12px' }} />
            <div className="relative z-10 flex flex-col justify-between h-full space-y-4">
                <div className="flex justify-between items-start">
                    <div className="h-12 w-12 rounded-2xl bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform">
                        {React.cloneElement(icon, { size: 24, className: "text-white drop-shadow-md" })}
                    </div>
                    {alert && <div className="h-3 w-3 rounded-full bg-white animate-pulse shadow-[0_0_15px_white]" />}
                </div>
                <div>
                    <p className="text-4xl font-black tracking-tighter drop-shadow-sm leading-none">{value}</p>
                    <p className="text-[10px] font-black uppercase tracking-widest opacity-90 mt-2 leading-tight">{title}</p>
                    {desc && <p className="text-[9px] font-bold text-white/60 uppercase tracking-widest mt-1">{desc}</p>}
                </div>
            </div>
        </div>
    );
}

function DateFactMetric({ title, date, refNo, icon, theme }: any) {
    return (
        <div className={`relative overflow-hidden rounded-3xl p-6 border-2 transition-all duration-300 hover:shadow-lg ${theme} flex flex-col justify-between h-full space-y-4`}>
            <div className="flex justify-between items-start">
                <div className="h-10 w-10 rounded-xl bg-white shadow-sm border border-current/10 flex items-center justify-center opacity-80">
                    {React.cloneElement(icon, { size: 20 })}
                </div>
            </div>
            <div>
                <p className="text-xl font-black font-mono tracking-tight leading-none">{date}</p>
                <p className="text-[10px] font-black uppercase tracking-widest opacity-70 mt-2 leading-tight">{title}</p>
                <p className="text-[9px] font-bold uppercase tracking-widest mt-1 opacity-50 font-mono">{refNo}</p>
            </div>
        </div>
    );
}