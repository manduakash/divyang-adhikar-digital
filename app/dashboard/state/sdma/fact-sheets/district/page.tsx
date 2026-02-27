// app/dashboard/sdma/fact-sheets/district/page.tsx
"use client";
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
    Table, TableBody, TableCell, TableHead, TableHeader, TableRow
} from "@/components/ui/table";
import {
    Map, Globe, Download, FileText,
    Printer, ShieldCheck, Search, Filter,
    Users, Building2, Gavel, Briefcase,
    GraduationCap, Accessibility, Scale,
    History, Clock, AlertTriangle, TrendingUp,
    MapPin, CheckCircle2, Siren, LayoutGrid,
    ChevronDown, Activity, BadgeCheck, Zap,
    Navigation, MousePointer2, Landmark,
    ArrowUpRight,
    Sparkles,
    ShieldAlert,
    Home
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function SDMAFactSheet() {
    return (
        <div className="space-y-10 animate-in fade-in duration-1000 pb-20 font-sans selection:bg-orange-100">

            {/* 1. APEX IDENTITY HUB - CARBON FIBER TEXTURE */}
            <Card className="rounded-[40px] border-none bg-gradient-to-r from-orange-600 via-orange-700 to-red-700 p-1 relative overflow-hidden shadow-2xl shadow-orange-200">
                <div className="absolute inset-0 opacity-15 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
                <div className="bg-white rounded-[38px] p-10 relative z-10 flex flex-col xl:flex-row justify-between items-end gap-6">

                    <div className="flex flex-col md:flex-row gap-8 items-center w-full xl:w-auto">
                        <div className="h-20 w-20 bg-orange-50 rounded-3xl flex items-center justify-center text-orange-600 shadow-inner border border-orange-100">
                            <Navigation size={32} />
                        </div>
                        <div className="space-y-4 w-full md:w-auto">
                            <div className="space-y-1">
                                <h1 className="text-3xl font-black text-slate-900 tracking-tighter uppercase leading-none">District Disaster–PwD Fact Sheet</h1>
                                <p className="text-[10px] font-black text-orange-600 uppercase tracking-[0.3em]">State Statutory Snapshot Hub</p>
                            </div>
                            <div className="flex flex-wrap gap-4">
                                <HeaderSelect label="District Node" defaultValue="lko" options={['All Districts', 'Lucknow', 'Varanasi', 'Agra']} />
                                <HeaderSelect label="Reporting Window" defaultValue="90" options={['Last 30 Days', 'Last 90 Days', 'Last 180 Days']} />
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col items-end gap-4 min-w-[280px]">
                        <div className="flex items-center gap-2 bg-slate-900 text-white px-4 py-2 rounded-2xl shadow-xl border border-white/10">
                            <Clock size={14} className="text-orange-400" />
                            <span className="text-[9px] font-black uppercase tracking-widest leading-none text-nowrap">Auto-Compiled from DDMA Inputs: 14 Oct, 10:42 AM</span>
                        </div>
                        <div className="flex gap-3">
                            <Button variant="outline" className="h-12 px-6 rounded-xl border-slate-200 font-bold bg-white gap-2 shadow-sm text-[10px] uppercase tracking-widest hover:bg-slate-50 transition-all"><FileText size={16} className="text-orange-600" /> Statutory XLS</Button>
                            <Button className="h-12 px-8 rounded-xl bg-slate-950 text-white font-black uppercase tracking-widest text-[10px] shadow-lg hover:bg-black transition-all gap-2 group"><Printer size={16} /> Print Briefing Note</Button>
                        </div>
                    </div>
                </div>
            </Card>

            {/* 2. DECISION-READY METRICS GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">

                {/* RISK ZONES HUB */}
                <StatModule title="District-wise PwDs in risk zones" gradient="from-orange-600 to-red-700" icon={<ShieldAlert />}>
                    <MetricBlock label="Total State At-Risk" val="124K" mono />
                    <MetricBlock label="High Vulnerability" val="18.2K" alert />
                    <div className="h-[1px] w-full bg-slate-100 my-2" />
                    <MetricBlock label="Evacuation Ready" val="102K" success />
                </StatModule>

                {/* SHELTER HUB */}
                <StatModule title="Accessible Shelter Status" gradient="from-blue-600 to-indigo-800" icon={<Home />}>
                    <MetricBlock label="Total Mapped Shelters" val="3,450" />
                    <MetricBlock label="Fully Accessible Node" val="2,840" success />
                    <div className="h-[1px] w-full bg-slate-100 my-2" />
                    <MetricBlock label="Structural Gaps" val="610" warning />
                </StatModule>

                {/* PREPAREDNESS HUB */}
                <StatModule title="Readiness Monitoring" gradient="from-emerald-600 to-teal-800" icon={<BadgeCheck />}>
                    <MetricBlock label="Overall State Score" val="88.4%" success />
                    <MetricBlock label="SLA Compliance" val="94.2%" />
                    <div className="h-[1px] w-full bg-slate-100 my-2" />
                    <MetricBlock label="Drill Participation" val="45K" />
                </StatModule>

                {/* AI INTELLIGENCE SIDEBAR */}
                <Card className="rounded-[44px] border-none bg-slate-900 text-white p-8 shadow-2xl relative overflow-hidden group">
                    <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/circuit-board.png')]" />
                    <div className="relative z-10 space-y-6">
                        <div className="flex items-center gap-3">
                            <Sparkles className="text-orange-400 animate-pulse" />
                            <h3 className="text-[10px] font-black uppercase tracking-widest text-orange-400">Decision-ready Insight</h3>
                        </div>
                        <p className="text-sm font-bold leading-relaxed uppercase tracking-tighter italic">
                            "Aggregation of DDMA inputs identifies District Meerut as a high-priority zone for specialized transport resources."
                        </p>
                        <div className="pt-6 border-t border-white/10">
                            <Button variant="ghost" className="w-full text-orange-400 font-black uppercase text-[9px] tracking-widest gap-2 group-hover:bg-white/5 transition-all">
                                Execute State Directive <Zap size={14} />
                            </Button>
                        </div>
                    </div>
                </Card>
            </div>

            {/* 3. STATEWIDE STATUTORY LEDGER */}
            <Card className="rounded-[48px] border-slate-200 shadow-sm overflow-hidden bg-white">
                <CardHeader className="p-8 border-b border-slate-50 bg-slate-50/30 flex flex-row justify-between items-center relative overflow-hidden">
                    <div className="absolute inset-0 opacity-[0.02] bg-[url('https://www.transparenttextures.com/patterns/topography.png')]" />
                    <div className="flex items-center gap-4 relative z-10">
                        <div className="h-10 w-10 rounded-xl bg-white border border-slate-100 flex items-center justify-center shadow-sm"><Globe size={18} className="text-orange-600" /></div>
                        <CardTitle className="text-sm font-black uppercase tracking-widest">Consolidated District Readiness Registry</CardTitle>
                    </div>
                    <div className="flex gap-4 relative z-10">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-400" />
                            <input className="pl-9 pr-6 py-2.5 bg-white border border-slate-200 rounded-2xl text-[10px] font-black uppercase outline-none w-64 shadow-sm" placeholder="Registry Lookup..." />
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="p-0">
                    <Table>
                        <TableHeader className="bg-slate-50">
                            <TableRow className="border-slate-100 font-sans">
                                <TableHead className="px-10 py-6 text-[9px] font-black uppercase tracking-[0.2em] text-slate-400">District Node</TableHead>
                                <TableHead className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 text-center">PwDs in Risk Zones</TableHead>
                                <TableHead className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 text-center">Accessible Shelters</TableHead>
                                <TableHead className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 text-center">Readiness Index</TableHead>
                                <TableHead className="text-right px-10 text-[9px] font-black uppercase tracking-[0.2em] text-slate-400">Drill-down</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody className="divide-y divide-slate-50 font-sans">
                            <DistrictListRow name="Lucknow Urban Hub" risk="12,400" shelters="48" rate="98.2%" success />
                            <DistrictListRow name="Varanasi East Node" risk="8,210" shelters="32" rate="91.5%" success />
                            <DistrictListRow name="Agra Sector Hub" risk="5,420" shelters="14" rate="42.8%" alert />
                            <DistrictListRow name="Meerut Cluster Node" risk="11,100" shelters="12" rate="55.0%" warning />
                            <DistrictListRow name="Howrah Central" risk="22,450" shelters="84" rate="88.4%" />
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>

            {/* FOOTER SYNC STATUS */}
            <footer className="pt-12 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="flex items-center gap-4">
                    <ShieldCheck className="text-emerald-600 shadow-xl" size={24} />
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 leading-none">Decision-Ready Snapshot Node v5.2 • Aggregated Statewide Data Sync Active</span>
                </div>
                <div className="flex gap-4">
                    <Button variant="outline" className="h-14 px-8 rounded-2xl border-slate-200 font-bold bg-white gap-2 text-[10px] uppercase tracking-widest hover:bg-slate-50 hover:shadow-lg"><History size={18} /> View Multi-Node Timeline</Button>
                    <Button className="h-14 px-10 rounded-2xl bg-slate-900 text-white font-black uppercase tracking-widest text-[10px] shadow-2xl gap-2 hover:bg-black transition-all">
                        <Globe size={18} /> National NDMA Mirror
                    </Button>
                </div>
            </footer>
        </div>
    );
}

/* UI SUB-COMPONENTS */

function StatModule({ title, gradient, icon, children }: any) {
    return (
        <Card className="rounded-[44px] border-slate-200 bg-white shadow-sm overflow-hidden group hover:shadow-xl transition-all duration-500 h-full flex flex-col">
            <CardHeader className={`p-8 bg-gradient-to-r ${gradient} text-white relative overflow-hidden`}>
                <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
                <div className="flex items-center gap-4 relative z-10">
                    <div className="h-10 w-10 rounded-2xl bg-white/20 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        {icon}
                    </div>
                    <CardTitle className="text-[10px] font-black uppercase tracking-[0.3em] leading-none">{title}</CardTitle>
                </div>
            </CardHeader>
            <CardContent className="p-10 flex-1 space-y-6 relative overflow-hidden">
                <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/topography.png')]" />
                <div className="relative z-10 space-y-5">
                    {children}
                </div>
            </CardContent>
        </Card>
    )
}

function MetricBlock({ label, val, alert, success, warning, mono }: any) {
    const colorClass = alert ? 'text-red-600 underline decoration-red-100 decoration-2' : success ? 'text-emerald-600' : warning ? 'text-orange-500' : 'text-slate-900';
    return (
        <div className="flex justify-between items-end group/row cursor-default">
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest group-hover/row:text-orange-600 transition-colors">{label}</p>
            <p className={`text-2xl font-black tracking-tighter leading-none ${colorClass} ${mono ? 'font-mono' : ''}`}>{val}</p>
        </div>
    )
}

function HeaderSelect({ label, options, defaultValue }: any) {
    return (
        <div className="flex flex-col gap-1.5 min-w-[150px]">
            <span className="text-[9px] font-black uppercase text-slate-400 ml-1 tracking-widest leading-none">{label}</span>
            <Select defaultValue={defaultValue}>
                <SelectTrigger className="h-11 rounded-2xl bg-slate-50 border font-bold text-slate-800 text-xs uppercase shadow-inner transition-all hover:bg-slate-100">
                    <SelectValue />
                </SelectTrigger>
                <SelectContent className="rounded-2xl border-slate-100 shadow-2xl">
                    {options.map((opt: string) => (
                        <SelectItem key={opt} value={opt.toLowerCase()} className="font-bold text-[10px] uppercase py-2.5">{opt}</SelectItem>
                    ))}
                </SelectContent>
            </Select>
        </div>
    )
}

function DistrictListRow({ name, risk, shelters, rate, alert, success, warning }: any) {
    const statusColor = alert ? 'bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.3)]' : warning ? 'bg-orange-500' : 'bg-green-500';
    return (
        <TableRow className="border-none hover:bg-slate-50 transition-all group cursor-pointer">
            <TableCell className="px-10 py-6">
                <div className="flex items-center gap-3">
                    <div className={`h-1.5 w-1.5 rounded-full ${statusColor} ${alert ? 'animate-pulse' : ''}`} />
                    <span className="text-xs font-black text-slate-800 uppercase tracking-tight">{name}</span>
                </div>
            </TableCell>
            <TableCell className="text-center font-black text-slate-900 text-[11px]">{risk}</TableCell>
            <TableCell className="text-center font-black text-slate-900 text-[11px]">{shelters}</TableCell>
            <TableCell className="text-center">
                <span className={`text-[11px] font-mono font-black ${alert ? 'text-red-600 underline' : 'text-purple-600'}`}>{rate}</span>
            </TableCell>
            <TableCell className="text-right px-10 opacity-0 group-hover:opacity-100 transition-all">
                <ArrowUpRight size={18} className="text-orange-600 ml-auto" />
            </TableCell>
        </TableRow>
    )
}