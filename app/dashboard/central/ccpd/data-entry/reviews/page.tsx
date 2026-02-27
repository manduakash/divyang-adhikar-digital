// app/dashboard/ccpd/data/state-review/page.tsx
"use client";
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
    Activity, ShieldCheck, Globe, MapPin,
    Sparkles, BadgeCheck, Landmark, Search,
    Filter, History, ClipboardList, Timer,
    BarChart3, FileText, CheckCircle2, AlertTriangle,
    ArrowLeft, Download, Gavel, Save,
    Layers, Database, Zap,
    Calendar,
    Info
} from "lucide-react";
import {
    Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";

export default function StatePerformanceReview() {
    const [priority, setPriority] = useState('High');

    return (
        <div className="space-y-12 animate-in fade-in duration-1000 pb-20 font-sans selection:bg-indigo-100 bg-[#fbfcfd]">

            {/* APEX REVIEW HEADER */}
            <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-8 mb-10 bg-white p-12 rounded-[48px] border-2 border-slate-100 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.05)] relative overflow-hidden">
                <div className="absolute top-0 right-0 p-10 opacity-[0.03] pointer-events-none text-indigo-600">
                    <Activity size={240} />
                </div>

                <div className="space-y-4 relative z-10">
                    <div className="flex items-center gap-3">
                        <div className="h-14 w-14 bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-700 rounded-2xl flex items-center justify-center text-white shadow-xl shadow-indigo-500/20 transition-transform hover:scale-110">
                            <ClipboardList size={32} />
                        </div>
                        <div>
                            <h1 className="text-4xl font-black text-slate-900 tracking-tighter uppercase leading-none">Review Notes on State Performance</h1>
                            <p className="text-[10px] font-black text-indigo-600 uppercase tracking-[0.3em] mt-2 flex items-center gap-2">
                                <BadgeCheck size={12} /> National Scrutiny Node / A3.3
                            </p>
                        </div>
                    </div>
                    <p className="text-slate-500 font-medium italic text-lg max-w-2xl uppercase tracking-tighter">Record formal supervisory observations based on dashboards, reports, hearings, and inspections.</p>
                </div>

                <div className="flex gap-4 relative z-10">
                    <Button variant="outline" className="h-16 px-10 rounded-3xl border-2 border-slate-200 font-black uppercase tracking-widest text-[10px] bg-white gap-2 shadow-sm hover:bg-slate-50 transition-all">
                        <History size={18} /> Review history
                    </Button>
                    <Button className="h-16 px-12 rounded-[24px] bg-slate-950 text-white font-black uppercase tracking-widest text-[11px] shadow-2xl hover:bg-black transition-all gap-3 group">
                        <Save size={18} className="text-blue-400" /> Commit Scrutiny Note
                    </Button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

                {/* DATA CAPTURE WORKSPACE (8 COLS) */}
                <div className="lg:col-span-8 space-y-10">
                    <Card className="rounded-[48px] border-2 border-slate-200 bg-white shadow-xl overflow-hidden group">
                        <CardHeader className="p-0">
                            <div className="p-10 bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 text-white relative overflow-hidden">
                                {/* CARBON FIBER TEXTURE OVERLAY */}
                                <div className="absolute inset-0 opacity-20 pointer-events-none"
                                    style={{ backgroundImage: `radial-gradient(black 2px, transparent 0)`, backgroundSize: '4px 4px' }} />
                                <div className="flex items-center gap-5 relative z-10">
                                    <div className="h-12 w-12 rounded-2xl bg-white/20 backdrop-blur-md border-2 border-white/20 flex items-center justify-center shadow-lg group-hover:rotate-6 transition-transform">
                                        <Landmark size={24} />
                                    </div>
                                    <CardTitle className="text-sm font-black uppercase tracking-[0.3em] leading-none text-white">State / UT Performance Parameters</CardTitle>
                                </div>
                            </div>
                        </CardHeader>

                        <CardContent className="p-12 space-y-12">

                            {/* STATE & PERIOD */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                <div className="space-y-4">
                                    <label className="text-[11px] font-black uppercase text-slate-400 ml-1 tracking-widest leading-none">State / UT</label>
                                    <Select>
                                        <SelectTrigger className="w-full h-16 py-6 border-2 border-slate-200 bg-slate-50 rounded-2xl px-6 font-black text-slate-800 uppercase text-xs focus:ring-2 focus:ring-indigo-500">
                                            <SelectValue placeholder="Identify State Hub" />
                                        </SelectTrigger>
                                        <SelectContent className="rounded-2xl border-2 border-slate-200 shadow-2xl">
                                            <SelectItem value="up" className="font-black py-4 uppercase tracking-widest">Uttar Pradesh Node</SelectItem>
                                            <SelectItem value="mh" className="font-black py-4 uppercase tracking-widest">Maharashtra Node</SelectItem>
                                            <SelectItem value="wb" className="font-black py-4 uppercase tracking-widest">West Bengal Node</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="space-y-4">
                                    <label className="text-[11px] font-black uppercase text-slate-400 ml-1 tracking-widest leading-none">Review Period</label>
                                    <div className="relative">
                                        <Calendar className="absolute left-5 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-300" />
                                        <Input placeholder="e.g. Q3 FY 2024-25" className="h-16 pl-14 rounded-2xl bg-white border-2 border-slate-200 font-black text-slate-900 text-sm shadow-sm" />
                                    </div>
                                </div>
                            </div>

                            {/* AREA REVIEWED */}
                            <div className="space-y-4">
                                <label className="text-[11px] font-black uppercase text-slate-400 ml-1 tracking-widest leading-none">Area Reviewed (Grievances / Accessibility / Employment / Education / Multiple)</label>
                                <div className="p-2 bg-slate-100 rounded-3xl border-2 border-slate-200 flex flex-wrap gap-2 shadow-inner">
                                    {['Grievances', 'Accessibility', 'Employment', 'Education', 'Multiple'].map(area => (
                                        <Badge key={area} className="bg-white border-2 border-slate-200 text-slate-500 font-black text-[10px] px-6 py-2.5 rounded-2xl uppercase tracking-widest hover:border-indigo-500 hover:text-indigo-600 transition-all cursor-pointer shadow-sm">
                                            {area}
                                        </Badge>
                                    ))}
                                </div>
                            </div>

                            {/* OBSERVATIONS */}
                            <div className="space-y-4">
                                <div className="flex justify-between items-center px-1">
                                    <label className="text-[11px] font-black uppercase text-slate-400 ml-1 tracking-widest leading-none">Key Observations</label>
                                    <button className="flex items-center gap-2 text-purple-600 font-black text-[10px] uppercase tracking-widest bg-purple-50 px-4 py-2 rounded-full border-2 border-purple-100 hover:bg-white transition-all shadow-sm">
                                        <Sparkles size={12} /> AI Performance Logic
                                    </button>
                                </div>
                                <Textarea
                                    className="min-h-[180px] bg-slate-50 border-2 border-slate-200 rounded-[32px] p-8 text-base font-medium leading-relaxed italic text-slate-700 shadow-inner resize-none focus:ring-2 focus:ring-indigo-600"
                                    placeholder="Detail formal administrative findings based on statewide performance metrics..."
                                />
                            </div>

                            {/* PRIORITY & REFERENCES */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 border-t-2 border-slate-50 pt-10">
                                <div className="space-y-4">
                                    <label className="text-[11px] font-black uppercase text-slate-400 ml-1 tracking-widest leading-none">Priority Level</label>
                                    <div className="flex bg-slate-100 p-1.5 rounded-2xl border-2 border-slate-200 gap-1 shadow-inner">
                                        {['Low', 'Medium', 'High'].map(p => (
                                            <button
                                                key={p}
                                                onClick={() => setPriority(p)}
                                                className={`flex-1 py-3 rounded-xl text-[10px] font-black uppercase transition-all ${priority === p ? 'bg-white text-indigo-600 shadow-xl scale-[1.02]' : 'text-slate-400 hover:text-slate-600'
                                                    }`}
                                            >
                                                {p}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <label className="text-[11px] font-black uppercase text-slate-400 ml-1 tracking-widest leading-none">Reference Reports / Data</label>
                                    <div className="relative">
                                        <Database className="absolute left-5 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-300" />
                                        <Input placeholder="Link Statutory Report IDs..." className="h-16 pl-14 rounded-2xl bg-white border-2 border-slate-200 font-black text-slate-900 text-sm shadow-sm uppercase tracking-tighter" />
                                    </div>
                                </div>
                            </div>

                            {/* REMARKS */}
                            <div className="space-y-4 pt-4">
                                <label className="text-[11px] font-black uppercase text-slate-400 ml-1 tracking-widest leading-none">Remarks</label>
                                <Textarea
                                    className="min-h-[120px] bg-slate-50 border-2 border-slate-200 rounded-[32px] p-8 text-sm font-bold text-slate-700 shadow-inner"
                                    placeholder="Additional instructions or internal supervisory notes..."
                                />
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* SIDEBAR: USAGE & GUARDRAILS (4 COLS) */}
                <div className="lg:col-span-4 space-y-8 sticky top-28 h-fit">

                    {/* USAGE CARD - VIBRANT EMERALD GRADIENT */}
                    <Card className="rounded-[44px] border-none bg-gradient-to-br from-emerald-600 via-teal-700 to-indigo-700 text-white p-10 shadow-2xl relative overflow-hidden group">
                        <div className="absolute inset-0 opacity-10 pointer-events-none"
                            style={{ backgroundImage: `radial-gradient(black 2px, transparent 0)`, backgroundSize: '4px 4px' }} />

                        <div className="relative z-10 space-y-8">
                            <div className="flex items-center gap-3">
                                <div className="h-10 w-10 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center border-2 border-white/20">
                                    <Activity size={20} />
                                </div>
                                <h3 className="text-[11px] font-black uppercase tracking-[0.3em] text-emerald-100 leading-none">Usage</h3>
                            </div>
                            <div className="space-y-8">
                                <UsageNode label="Directions Node" text="Inputs for directions" />
                                <UsageNode label="Annual Registry" text="Inputs for Annual Report" />
                                <div className="pt-6 border-t border-white/10 flex items-center gap-4">
                                    <ShieldCheck size={20} className="text-emerald-300" />
                                    <span className="text-[10px] font-black uppercase tracking-widest text-emerald-100">No operational data alteration</span>
                                </div>
                            </div>
                        </div>
                    </Card>

                    {/* PERFORMANCE WATCHLIST */}
                    <Card className="rounded-[44px] border-2 border-slate-200 bg-white p-10 shadow-sm relative overflow-hidden group hover:border-red-200 transition-all">
                        <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/topography.png')]" />
                        <h4 className="text-[11px] font-black text-slate-400 uppercase tracking-widest mb-10 border-b-2 border-slate-50 pb-6 flex items-center gap-3 leading-none">
                            <Timer size={18} className="text-red-500" /> Aggregation Risk Radar
                        </h4>
                        <div className="space-y-8 relative z-10">
                            <RiskItem label="Stagnant Complaints" dist="Varanasi Hub" val="42 Days" alert />
                            <RiskItem label="Access Gap Cluster" dist="Meerut Cluster" val="High Risk" alert />
                            <RiskItem label="Reservation Shortfall" dist="Lucknow Urban" val="1.4% Deficit" alert />
                        </div>
                    </Card>

                    <div className="p-8 bg-blue-50 rounded-[40px] border-2 border-blue-100 flex gap-6 shadow-sm">
                        <Info className="text-blue-600 shrink-0" size={28} />
                        <p className="text-[9px] font-bold text-blue-900 leading-relaxed uppercase tracking-widest leading-relaxed">
                            A3.3: Review notes are synchronized across the <b>National Command Hub</b> for cabinet-level monitoring.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
}

/* UI SUB-COMPONENTS */

function UsageNode({ label, text }: { label: string, text: string }) {
    return (
        <div className="space-y-2 group cursor-default">
            <p className="text-[9px] font-black uppercase text-emerald-300 tracking-widest">{label}</p>
            <p className="text-sm font-black text-white uppercase tracking-tighter leading-tight border-l-2 border-emerald-500 pl-4">{text}</p>
        </div>
    )
}

function RiskItem({ label, dist, val, alert }: any) {
    return (
        <div className="flex justify-between items-end group cursor-default">
            <div className="space-y-1">
                <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest group-hover:text-red-600 transition-colors leading-none">{label}</p>
                <p className="text-xs font-black text-slate-800 uppercase tracking-tighter leading-none">{dist}</p>
            </div>
            <span className={`text-[11px] font-mono font-black ${alert ? 'text-red-600 animate-pulse' : 'text-slate-900'}`}>{val}</span>
        </div>
    )
}