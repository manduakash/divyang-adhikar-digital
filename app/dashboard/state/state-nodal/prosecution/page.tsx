// app/dashboard/state/reports/prosecution/page.tsx
"use client";
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
    Table, TableBody, TableCell, TableHead, TableHeader, TableRow
} from "@/components/ui/table";
import {
    Scale, Gavel, History,
    Search, Filter, Printer, FileSpreadsheet,
    ArrowUpRight, Globe, ShieldAlert, Sparkles,
    CheckCircle2, AlertTriangle, Timer,
    FileText, Download, Landmark, BadgeCheck
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function StateProsecutionReport() {

    // Section 6.7 Mandated State-Wide Aggregates
    const stateJudicialTotals = {
        totalCases: "2,840",
        pending: "1,920",
        disposed: "920",
        beyondThreshold: "342",
        disposalRate: "32.4%"
    };

    return (
        <div className="space-y-10 animate-in fade-in duration-700 pb-20 font-sans">

            {/* 1. STATE ADMINISTRATIVE HEADER */}
            <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-6 bg-white p-10 rounded-[40px] border border-slate-200 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 p-10 opacity-[0.03] pointer-events-none">
                    <Scale size={180} className="text-purple-600" />
                </div>
                <div className="space-y-2 relative z-10">
                    <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border border-purple-200">
                        <Globe size={14} className="animate-pulse" /> Judicial Oversight Node / Section 6.7
                    </div>
                    <h1 className="text-4xl font-black text-slate-900 tracking-tighter uppercase leading-none">State Prosecution Ledger</h1>
                    <p className="text-slate-500 font-medium italic">Consolidated Judicial Status of PwD Act Offences across all Districts.</p>
                </div>
                <div className="flex gap-4 relative z-10">
                    <Button variant="outline" className="h-14 px-8 rounded-2xl border-slate-200 font-bold bg-white hover:bg-slate-50 gap-2 shadow-sm">
                        <FileSpreadsheet size={18} className="text-green-600" /> Export State XLS
                    </Button>
                    <Button className="h-14 px-10 rounded-2xl bg-purple-700 text-white font-black uppercase tracking-widest text-[10px] shadow-2xl shadow-purple-200 hover:bg-purple-900 transition-all gap-2">
                        <Printer size={18} /> Print Certified Copy
                    </Button>
                </div>
            </div>

            {/* 2. PATTERNED KPI TILES (Section 6.7 Aggregation) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                <StatTile label="Total State Cases" value={stateJudicialTotals.totalCases} icon={<Scale />} color="from-slate-700 via-slate-800 to-slate-950" />
                <StatTile label="Trials Pending" value={stateJudicialTotals.pending} icon={<Gavel />} color="from-blue-600 via-blue-700 to-indigo-900" />
                <StatTile label="Trials Disposed" value={stateJudicialTotals.disposed} icon={<CheckCircle2 />} color="from-emerald-500 via-teal-600 to-green-800" />
                <StatTile label="Beyond Threshold" value={stateJudicialTotals.beyondThreshold} icon={<Timer />} color="from-red-600 via-rose-700 to-red-900" alert />
                <div className="bg-white border-2 border-purple-100 rounded-[32px] p-6 shadow-sm flex flex-col justify-center relative overflow-hidden group">
                    <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/topography.png')]" />
                    <p className="text-[9px] font-black uppercase tracking-widest text-purple-400 mb-1">Judicial Disposal Rate</p>
                    <p className="text-4xl font-black text-purple-700 tracking-tighter group-hover:scale-105 transition-transform">{stateJudicialTotals.disposalRate}</p>
                    <div className="w-full h-1 bg-slate-100 rounded-full mt-4 overflow-hidden shadow-inner">
                        <div className="h-full bg-purple-600" style={{ width: stateJudicialTotals.disposalRate }} />
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                {/* 3. JUDICIAL POLICY SIDEBAR */}
                <div className="lg:col-span-1 space-y-6">
                    <Card className="rounded-[40px] border-2 bg-slate-900 text-white p-10 shadow-2xl relative overflow-hidden group">
                        <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/circuit-board.png')]" />
                        <div className="relative z-10 space-y-6">
                            <div className="flex items-center gap-3">
                                <Sparkles className="text-purple-400" />
                                <h3 className="text-sm font-black uppercase tracking-widest text-purple-400">AI Legal Brief</h3>
                            </div>
                            <p className="text-lg font-black leading-tight uppercase tracking-tight text-red-400">Judicial Stagnation Alert</p>
                            <p className="text-sm font-medium text-slate-400 leading-relaxed italic">
                                "03 Special Courts show a significant increase in cases stagnant at the 'Evidence' stage for {">"}180 days. Review of District PP performance suggested."
                            </p>
                            <Button className="w-full h-14 bg-white text-slate-900 hover:bg-purple-50 rounded-2xl font-black uppercase tracking-widest text-[10px] shadow-lg">
                                Brief State PP Hub
                            </Button>
                        </div>
                    </Card>

                    <Card className="rounded-[40px] border-slate-200 p-8 bg-white shadow-sm relative overflow-hidden">
                        <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/graphy.png')]" />
                        <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-6 border-b pb-4">Judicial Benchmarks</h4>
                        <div className="space-y-6">
                            <BenchmarkItem label="Avg Trial Duration" target="180 Days" current="242 Days" color="text-red-500" />
                            <BenchmarkItem label="Conviction Rate" target="75%" current="68%" color="text-orange-500" />
                            <BenchmarkItem label="SLA Compliance" target="100%" current="92%" color="text-green-500" />
                        </div>
                    </Card>
                </div>

                {/* 4. DISTRICT PROSECUTION REGISTRY (Section 6.7 Mandated Format) */}
                <Card className="lg:col-span-2 rounded-[40px] border-slate-200 shadow-sm overflow-hidden bg-white">
                    <CardHeader className="p-8 border-b border-slate-50 bg-slate-50/30 flex flex-row justify-between items-center">
                        <div className="flex items-center gap-3">
                            <Scale className="text-purple-600" size={20} />
                            <CardTitle className="text-sm font-black uppercase tracking-widest text-slate-400">District-wise Case aggregation</CardTitle>
                        </div>
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-400 group-focus-within:text-purple-600" />
                            <input className="pl-9 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-[10px] font-bold outline-none w-64 shadow-inner" placeholder="Search District ID..." />
                        </div>
                    </CardHeader>
                    <CardContent className="p-0">
                        <Table>
                            <TableHeader className="bg-white">
                                <TableRow className="border-slate-100">
                                    <TableHead className="px-8 py-5 text-[9px] font-black uppercase tracking-widest text-slate-400">District Name</TableHead>
                                    <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400 text-center">Total Cases</TableHead>
                                    <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400 text-center">Pending</TableHead>
                                    <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400 text-center">Disposed</TableHead>
                                    <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400 text-center">Beyond Threshold</TableHead>
                                    <TableHead className="text-right px-8 text-[9px] font-black uppercase tracking-widest text-slate-400">Action</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody className="divide-y divide-slate-50">
                                <ProsecutionRow name="Lucknow" total="142" pending="84" disposed="58" threshold="12" />
                                <ProsecutionRow name="Ghaziabad" total="210" pending="168" disposed="42" threshold="84" alert />
                                <ProsecutionRow name="Varanasi" total="98" pending="50" disposed="48" threshold="04" />
                                <ProsecutionRow name="Kanpur Nagar" total="184" pending="120" disposed="64" threshold="42" warning />
                                <ProsecutionRow name="Agra" total="112" pending="90" disposed="22" threshold="38" alert />
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}

/* UI SUB-COMPONENTS */

function StatTile({ label, value, icon, color, alert }: any) {
    return (
        <div className={`group relative text-left p-6 rounded-[32px] overflow-hidden transition-all duration-500 h-44 flex flex-col justify-between shadow-md hover:shadow-xl hover:-translate-y-1 bg-gradient-to-br ${color} text-white border-t border-white/20`}>
            {/* Texture Layers */}
            <div className="absolute inset-0 opacity-[0.08] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/topography.png')]" />
            <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />

            <div className="relative z-10 flex flex-col justify-between h-full">
                <div className="h-10 w-10 rounded-xl bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform">
                    {React.cloneElement(icon, { size: 22, className: "text-white" })}
                </div>
                <div>
                    <p className="text-3xl font-black tracking-tighter drop-shadow-sm">{value}</p>
                    <p className="text-[9px] font-black uppercase tracking-[0.15em] opacity-80 leading-tight mt-1">{label}</p>
                </div>
            </div>
            {alert && <div className="absolute top-6 right-6 h-1.5 w-1.5 rounded-full bg-white animate-ping" />}
        </div>
    )
}

function ProsecutionRow({ name, total, pending, disposed, threshold, alert, warning }: any) {
    const statusColor = alert ? 'bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.5)]' : warning ? 'bg-orange-500' : 'bg-green-500';
    return (
        <TableRow className="border-2 hover:bg-slate-50 transition-all group cursor-pointer font-sans">
            <TableCell className="px-8 py-6">
                <div className="flex items-center gap-3">
                    <div className={`h-1.5 w-1.5 rounded-full ${statusColor}`} />
                    <span className="text-xs font-black text-slate-800 uppercase tracking-tight">{name}</span>
                </div>
            </TableCell>
            <TableCell className="text-center font-bold text-slate-700 text-[11px]">{total}</TableCell>
            <TableCell className="text-center font-bold text-blue-600 text-[11px]">{pending}</TableCell>
            <TableCell className="text-center font-bold text-green-600 text-[11px]">{disposed}</TableCell>
            <TableCell className="text-center">
                <span className={`text-[11px] font-black ${alert ? 'text-red-600 underline decoration-red-200 decoration-2' : warning ? 'text-orange-600' : 'text-slate-400'}`}>
                    {threshold}
                </span>
            </TableCell>
            <TableCell className="text-right px-8 opacity-0 group-hover:opacity-100 transition-all">
                <button className="text-purple-600 font-black uppercase text-[9px] tracking-widest hover:underline flex items-center gap-1 ml-auto">
                    Judicial Node <ArrowUpRight size={12} />
                </button>
            </TableCell>
        </TableRow>
    )
}

function BenchmarkItem({ label, target, current, color }: any) {
    return (
        <div className="flex justify-between items-end">
            <div className="space-y-1">
                <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest">{label}</p>
                <p className={`text-sm font-black ${color}`}>{current}</p>
            </div>
            <p className="text-[8px] font-bold text-slate-300 uppercase">Target: {target}</p>
        </div>
    )
}