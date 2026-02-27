// app/dashboard/sdma/data/post-disaster/page.tsx
"use client";
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
    History, ShieldAlert, MapPin, Activity,
    Gavel, Calendar, FileCheck, Search,
    Filter, Printer, FileSpreadsheet, Globe,
    Sparkles, BadgeCheck, Clock, Zap,
    AlertTriangle, History as HistoryIcon, Download,
    Timer, Landmark, GraduationCap, Scale,
    BookOpenCheck,
    ArrowUpRight
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function PostDisasterReview() {
    return (
        <div className="space-y-10 animate-in fade-in duration-1000 pb-20 font-sans selection:bg-orange-100">

            {/* HUB PRIMARY HEADER - CARBON FIBER TEXTURE */}
            <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-8 mb-10 bg-white p-12 rounded-[48px] border border-slate-200 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.05)] relative overflow-hidden">
                <div className="absolute top-0 right-0 p-10 opacity-[0.03] pointer-events-none text-orange-600">
                    <HistoryIcon size={240} />
                </div>

                <div className="space-y-4 relative z-10">
                    <div className="flex items-center gap-3">
                        <div className="h-14 w-14 bg-gradient-to-br from-orange-500 via-orange-600 to-red-700 rounded-2xl flex items-center justify-center text-white shadow-xl shadow-orange-500/20 transition-transform hover:scale-110">
                            <ShieldAlert size={32} />
                        </div>
                        <div>
                            <h1 className="text-4xl font-black text-slate-900 tracking-tighter uppercase leading-none">Post-Disaster Review & Corrective Directions</h1>
                            <p className="text-[10px] font-black text-orange-600 uppercase tracking-[0.3em] mt-2 flex items-center gap-2">
                                <BadgeCheck size={12} /> After-Action Review Node
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex gap-4 relative z-10">
                    <Button variant="outline" className="h-16 px-10 rounded-3xl border-slate-200 font-black uppercase tracking-widest text-[10px] bg-white gap-2 shadow-sm hover:bg-slate-50 transition-all group">
                        <History size={18} className="mr-2" /> After-action review register <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </Button>
                    <Button className="h-16 px-12 rounded-3xl bg-slate-950 text-white font-black uppercase tracking-widest text-[10px] shadow-2xl hover:bg-black transition-all">
                        Dispatch Corrective Order
                    </Button>
                </div>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-12 gap-10">

                {/* DATA CAPTURE HUB (8 COLS) */}
                <div className="xl:col-span-8 space-y-8">
                    <Card className="rounded-[48px] border-slate-200 shadow-sm overflow-hidden bg-white group hover:border-orange-100 transition-all">
                        <CardHeader className="p-0">
                            <div className="p-10 bg-gradient-to-r from-orange-600 via-orange-700 to-amber-600 text-white relative overflow-hidden">
                                {/* CARBON FIBER OVERLAY */}
                                <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
                                <CardTitle className="text-[10px] font-black uppercase tracking-[0.3em] relative z-10 text-white leading-none">Statutory Review Registry</CardTitle>
                            </div>
                        </CardHeader>

                        <CardContent className="p-12 space-y-12">

                            {/* EVENT & DISTRICTS */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                <div className="space-y-3">
                                    <label className="text-[11px] font-black uppercase text-slate-500 ml-1 tracking-widest leading-none">Disaster Event</label>
                                    <Input placeholder="e.g. Cyclone Hub-B, Monsoon Flood Q3" className="h-16 px-6 rounded-2xl bg-slate-50 border font-black text-slate-900 shadow-inner uppercase tracking-tighter" />
                                </div>
                                <div className="space-y-3">
                                    <label className="text-[11px] font-black uppercase text-slate-500 ml-1 tracking-widest leading-none">District(s) Affected</label>
                                    <div className="relative group">
                                        <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-300 group-focus-within:text-orange-600 transition-colors" />
                                        <Input placeholder="Select Affected Administrative Nodes" className="h-16 pl-12 rounded-2xl bg-slate-50 border font-bold text-slate-800 shadow-inner" />
                                    </div>
                                </div>
                            </div>

                            {/* ISSUES FACED BY PwDs */}
                            <div className="space-y-4">
                                <div className="flex justify-between items-center px-1">
                                    <label className="text-[11px] font-black uppercase text-slate-500 ml-1 tracking-widest leading-none">Issues Faced by PwDs</label>
                                    <button className="flex items-center gap-2 text-blue-600 font-black text-[9px] uppercase tracking-widest bg-blue-50 px-4 py-2 rounded-full border border-blue-100 hover:bg-white transition-all shadow-sm"><Sparkles size={12} /> AI Analysis Assist</button>
                                </div>
                                <Textarea className="min-h-[140px] bg-slate-50 border rounded-[32px] p-8 text-sm font-medium leading-relaxed italic text-slate-700 shadow-inner resize-none focus:ring-2 focus:ring-red-500" placeholder="Describe the qualitative difficulties experienced by Persons with Disabilities during the event..." />
                            </div>

                            {/* GAPS IDENTIFIED */}
                            <div className="space-y-4">
                                <label className="text-[11px] font-black uppercase text-slate-500 ml-1 tracking-widest leading-none">Gaps Identified</label>
                                <Textarea className="min-h-[140px] bg-slate-50 border rounded-[32px] p-8 text-sm font-black text-red-600 uppercase tracking-tight leading-relaxed shadow-inner resize-none focus:ring-2 focus:ring-red-600" placeholder="Identify technical, structural, or logistical shortfalls observed in the response..." />
                            </div>

                            {/* CORRECTIVE DIRECTIONS & TIMELINE */}
                            <div className="space-y-8 pt-6 border-t border-slate-50">
                                <div className="space-y-4">
                                    <label className="text-[11px] font-black uppercase text-slate-500 ml-1 tracking-widest leading-none">Corrective Directions Issued</label>
                                    <Textarea className="min-h-[140px] bg-slate-50 border rounded-[32px] p-8 text-sm font-black text-slate-900 uppercase tracking-tight leading-relaxed shadow-inner resize-none focus:ring-2 focus:ring-indigo-600" placeholder="Author the binding statutory directives for the responsible districts..." />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                    <div className="space-y-3">
                                        <label className="text-[11px] font-black uppercase text-slate-500 ml-1 tracking-widest leading-none">Timeline for Implementation</label>
                                        <div className="relative">
                                            <Clock className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-red-500 animate-pulse" />
                                            <Input type="date" className="h-16 pl-12 rounded-2xl bg-red-50/50 border font-black text-red-700 shadow-sm" />
                                        </div>
                                    </div>
                                    <div className="flex flex-col justify-end">
                                        <Button className="w-full h-16 bg-orange-600 text-white rounded-[32px] font-black uppercase tracking-[0.2em] text-[11px] shadow-2xl shadow-orange-900/20 hover:bg-orange-700 transition-all flex gap-4 group">
                                            Commit Review & Orders <Zap size={20} className="text-orange-400 fill-orange-400 group-hover:scale-110 transition-transform" />
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* SIDEBAR: OUTPUTS & REPORTING (4 COLS) */}
                <div className="xl:col-span-4 space-y-8 sticky top-28 h-fit">

                    {/* INPUTS FOR ANNUAL PREPAREDNESS REPORT (Mandated Output) */}
                    <Card className="rounded-[40px] border-none bg-slate-900 text-white p-10 shadow-2xl relative overflow-hidden group">
                        <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/circuit-board.png')]" />
                        <div className="relative z-10 space-y-8">
                            <div className="flex items-center gap-3 text-blue-400">
                                <HistoryIcon size={24} />
                                <h3 className="text-[10px] font-black uppercase tracking-widest">Inputs for annual preparedness report</h3>
                            </div>
                            <p className="text-sm font-bold leading-relaxed uppercase tracking-tighter italic border-l-2 border-blue-600 pl-4">
                                Data from this review Hub is automatically indexed for the <b>FY 2024-25</b> state-level statutory submission.
                            </p>
                            <div className="pt-6 border-t border-white/10 space-y-6">
                                <MetricNode label="Critical Lessons Learnt" val="14" />
                                <MetricNode label="District Level Faults" val="08" alert />
                            </div>
                            <Button className="w-full h-12 bg-white text-slate-900 hover:bg-blue-50 rounded-2xl font-black uppercase tracking-widest text-[9px] shadow-lg">
                                Audit Report Draft
                            </Button>
                        </div>
                    </Card>

                    <Card className="rounded-[40px] border-slate-200 p-10 bg-white shadow-sm relative overflow-hidden">
                        <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/topography.png')]" />
                        <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-8 border-b pb-6 flex items-center gap-3">
                            <History size={18} className="text-orange-600" /> Recent Hub Activity
                        </h4>
                        <div className="space-y-8">
                            <ActivityNode id="REV-LKO-442" label="Flood Scrutiny" date="14 Oct" success />
                            <ActivityNode id="REV-VNS-091" label="Heatwave Audit" date="10 Oct" success />
                            <ActivityNode id="REV-MRT-118" label="Rescue Gap Node" date="02 Oct" />
                        </div>
                    </Card>

                    <div className="p-8 bg-orange-50 rounded-[40px] border border-orange-100 flex gap-6 shadow-sm">
                        <AlertTriangle className="text-orange-600 shrink-0" size={28} />
                        <p className="text-[10px] font-bold text-orange-900 leading-relaxed uppercase tracking-widest">
                            Closing this review triggers the <b>After-action review register</b> and notifies the District Nodal Node.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
}

/* UI SUB-COMPONENTS */

function MetricNode({ label, val, alert }: any) {
    return (
        <div className="flex justify-between items-center group cursor-default">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest group-hover:text-blue-400 transition-colors">{label}</span>
            <span className={`text-xl font-black ${alert ? 'text-red-500 underline' : 'text-white'}`}>{val}</span>
        </div>
    )
}

function ActivityNode({ id, label, date, success }: any) {
    return (
        <div className="flex items-center justify-between group cursor-pointer hover:bg-slate-50 p-2 rounded-xl transition-all">
            <div className="flex items-center gap-3">
                <div className={`h-1.5 w-1.5 rounded-full ${success ? 'bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.4)]' : 'bg-slate-300'}`} />
                <span className="text-[10px] font-mono font-black text-blue-600 group-hover:text-orange-600 transition-colors">{id}</span>
            </div>
            <div className="text-right">
                <p className="text-[9px] font-black text-slate-900 uppercase leading-none">{label}</p>
                <p className="text-[8px] font-bold text-slate-300 uppercase mt-1">{date}</p>
            </div>
        </div>
    )
}