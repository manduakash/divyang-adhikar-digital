// app/dashboard/state/reports/returns/page.tsx
"use client";
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
    Table, TableBody, TableCell, TableHead, TableHeader, TableRow
} from "@/components/ui/table";
import {
    FileCheck, Building2, AlertCircle, History,
    Search, Filter, Printer, FileSpreadsheet,
    ArrowUpRight, ChevronRight, Globe, Map,
    Sparkles, ShieldAlert, CheckCircle2, Landmark,
    BarChart3
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function StateReturnStatusReport() {

    // Section 6.3 Mandated State-Wide KPI Summary
    const stateReturnTotals = {
        totalRequired: "45,210",
        totalSubmitted: "38,400",
        totalOverdue: "6,810",
        submissionRate: "84.9%",
    };

    return (
        <div className="space-y-10 animate-in fade-in duration-700 pb-20 font-sans">

            {/* 1. STATE ADMINISTRATIVE HEADER */}
            <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-6 bg-white p-10 rounded-[40px] border border-slate-200 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 p-10 opacity-[0.03] pointer-events-none">
                    <FileCheck size={180} className="text-purple-600" />
                </div>
                <div className="space-y-2 relative z-10">
                    <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border border-purple-200">
                        <Globe size={14} className="animate-pulse" /> Statutory Return Monitor / Section 6.3
                    </div>
                    <h1 className="text-4xl font-black text-slate-900 tracking-tighter uppercase leading-none">Employment Exchange Returns</h1>
                    <p className="text-slate-500 font-medium italic">Statutory Return Compliance Tracking for all 75 Districts • Q3 FY 2024-25</p>
                </div>
                <div className="flex gap-4 relative z-10">
                    <Button variant="outline" className="h-14 px-8 rounded-2xl border-slate-200 font-bold bg-white hover:bg-slate-50 gap-2">
                        <FileSpreadsheet size={18} className="text-green-600" /> Export Overdue List
                    </Button>
                    <Button className="h-14 px-10 rounded-2xl bg-purple-700 text-white font-black uppercase tracking-widest text-[10px] shadow-2xl shadow-purple-200 hover:bg-purple-900 transition-all gap-2">
                        <Printer size={18} /> Print State Summary
                    </Button>
                </div>
            </div>

            {/* 2. PATTERNED KPI TILES (High Contrast + Texture) */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <StatTile
                    label="Total Establishments Required"
                    value={stateReturnTotals.totalRequired}
                    icon={<Building2 />}
                    color="from-slate-700 via-slate-800 to-slate-950"
                />
                <StatTile
                    label="Returns Submitted (Q3)"
                    value={stateReturnTotals.totalSubmitted}
                    icon={<CheckCircle2 />}
                    color="from-emerald-500 via-teal-600 to-green-800"
                />
                <StatTile
                    label="Returns Overdue / Default"
                    value={stateReturnTotals.totalOverdue}
                    icon={<AlertCircle />}
                    color="from-red-600 via-rose-700 to-red-900"
                    alert
                />
                <StatTile
                    label="State Submission Rate"
                    value={stateReturnTotals.submissionRate}
                    icon={<BarChart3 />}
                    color="from-blue-600 via-indigo-700 to-purple-900"
                    trend="+1.2%"
                />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                {/* 3. DISTRICT COMPLIANCE RANKING SIDEBAR */}
                <div className="lg:col-span-1 space-y-6">
                    <Card className="rounded-[40px] border-2 bg-slate-900 text-white p-10 shadow-2xl relative overflow-hidden group">
                        <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/circuit-board.png')]" />
                        <div className="relative z-10 space-y-6">
                            <div className="flex items-center gap-3">
                                <Sparkles className="text-purple-400" />
                                <h3 className="text-sm font-black uppercase tracking-widest text-purple-400">AI Performance Note</h3>
                            </div>
                            <p className="text-lg font-black leading-tight uppercase">Districts with High Default Risk</p>
                            <p className="text-sm font-medium text-slate-400 leading-relaxed italic">
                                "05 Districts have fallen below the 60% submission threshold. Agra and Varanasi show repeated delays in collecting returns from Private Sector establishments."
                            </p>
                            <div className="pt-4 border-t border-white/10 space-y-4">
                                <DefaultDistrict name="Agra" rate="42%" />
                                <DefaultDistrict name="Varanasi" rate="51%" />
                                <DefaultDistrict name="Meerut" rate="55%" />
                            </div>
                            <Button className="w-full h-14 bg-white text-slate-900 hover:bg-purple-50 rounded-2xl font-black uppercase tracking-widest text-[10px]">
                                Issue Show-Cause to DMs
                            </Button>
                        </div>
                    </Card>

                    <Card className="rounded-[40px] border-slate-200 p-8 bg-white shadow-sm">
                        <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-6 flex items-center gap-2">
                            <History size={14} className="text-purple-600" /> Return Lifecycle
                        </h4>
                        <div className="space-y-4">
                            <p className="text-xs font-bold text-slate-600 leading-relaxed">
                                Establishments are mandated under Section 19 to submit:
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-3 text-[10px] font-black uppercase text-slate-400">
                                    <div className="h-1.5 w-1.5 rounded-full bg-blue-600" /> Form ER-I (Six-Monthly)
                                </li>
                                <li className="flex items-center gap-3 text-[10px] font-black uppercase text-slate-400">
                                    <div className="h-1.5 w-1.5 rounded-full bg-purple-600" /> Form ER-II (Annual)
                                </li>
                            </ul>
                        </div>
                    </Card>
                </div>

                {/* 4. DISTRICT-WISE RETURN LEDGER (Section 6.3 Detailed Format) */}
                <Card className="lg:col-span-2 rounded-[40px] border-slate-200 shadow-sm overflow-hidden bg-white">
                    <CardHeader className="p-8 border-b border-slate-50 bg-slate-50/30 flex flex-row justify-between items-center">
                        <div className="flex items-center gap-3">
                            <Map className="text-purple-600" size={20} />
                            <CardTitle className="text-sm font-black uppercase tracking-widest text-slate-400">District-wise Submission Ledger</CardTitle>
                        </div>
                        <div className="relative group">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-400 group-focus-within:text-purple-600" />
                            <input className="pl-9 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-[10px] font-bold outline-none w-64 shadow-inner" placeholder="Filter District..." />
                        </div>
                    </CardHeader>
                    <CardContent className="p-0">
                        <Table>
                            <TableHeader className="bg-white">
                                <TableRow className="border-slate-100">
                                    <TableHead className="px-8 py-5 text-[9px] font-black uppercase tracking-widest text-slate-400">District Name</TableHead>
                                    <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400 text-center">Required Units</TableHead>
                                    <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400 text-center">Submitted</TableHead>
                                    <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400 text-center">Overdue</TableHead>
                                    <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400 text-center">Sub. Rate %</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody className="divide-y divide-slate-50">
                                <ReturnRow name="Lucknow" req="482" sub="460" over="22" rate="95.4%" />
                                <ReturnRow name="Gautam Buddha Ngr" req="1,240" sub="1,180" over="60" rate="95.1%" />
                                <ReturnRow name="Agra" req="290" sub="122" over="168" rate="42.0%" alert />
                                <ReturnRow name="Varanasi" req="320" sub="164" over="156" rate="51.2%" alert />
                                <ReturnRow name="Kanpur Nagar" req="610" sub="540" over="70" rate="88.5%" />
                                <ReturnRow name="Meerut" req="440" sub="242" over="198" rate="55.0%" alert />
                                <ReturnRow name="Ghaziabad" req="980" sub="910" over="70" rate="92.8%" />
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}

/* UI SUB-COMPONENTS */

function StatTile({ label, value, icon, color, trend, alert }: any) {
    return (
        <div className={`group relative text-left p-6 rounded-[32px] overflow-hidden transition-all duration-500 h-44 flex flex-col justify-between shadow-md hover:shadow-xl hover:-translate-y-1 bg-gradient-to-br ${color} text-white border-t border-white/20`}>
            <div className="absolute inset-0 opacity-[0.08] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/topography.png')]" />
            <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />

            <div className="relative z-10 flex flex-col justify-between h-full">
                <div className="h-10 w-10 rounded-xl bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform">
                    {React.cloneElement(icon, { size: 22, className: "text-white" })}
                </div>
                <div>
                    <div className="flex items-baseline gap-1">
                        <p className="text-3xl font-black tracking-tighter drop-shadow-sm">{value}</p>
                        {trend && <span className="text-[9px] font-black opacity-60 flex items-center gap-0.5 tracking-tighter"> {trend}</span>}
                    </div>
                    <p className="text-[9px] font-black uppercase tracking-[0.1em] opacity-80 leading-tight mt-1">{label}</p>
                </div>
            </div>
            {alert && (
                <div className="absolute top-6 right-6 h-2 w-2 rounded-full bg-white animate-ping" />
            )}
        </div>
    )
}

function ReturnRow({ name, req, sub, over, rate, alert }: any) {
    return (
        <TableRow className="border-2 hover:bg-slate-50 transition-all group cursor-pointer">
            <TableCell className="px-8 py-6">
                <div className="flex items-center gap-3">
                    <div className={`h-1.5 w-1.5 rounded-full ${alert ? 'bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.5)]' : 'bg-green-500'}`} />
                    <span className="text-xs font-black text-slate-800 uppercase tracking-tight">{name}</span>
                </div>
            </TableCell>
            <TableCell className="text-center font-bold text-slate-400 text-[11px]">{req}</TableCell>
            <TableCell className="text-center font-bold text-slate-700 text-[11px]">{sub}</TableCell>
            <TableCell className="text-center">
                <span className={`text-[11px] font-black ${alert ? 'text-red-600 underline decoration-red-100 decoration-2' : 'text-slate-400'}`}>{over}</span>
            </TableCell>
            <TableCell className="text-center">
                <div className="flex flex-col items-center">
                    <span className={`text-[11px] font-mono font-black ${alert ? 'text-red-600' : 'text-purple-600'}`}>{rate}</span>
                    <div className="w-12 h-1 bg-slate-100 rounded-full mt-1 overflow-hidden">
                        <div className={`h-full ${alert ? 'bg-red-500' : 'bg-purple-600'}`} style={{ width: rate }} />
                    </div>
                </div>
            </TableCell>
        </TableRow>
    )
}

function DefaultDistrict({ name, rate }: any) {
    return (
        <div className="flex justify-between items-center bg-white/5 p-3 rounded-xl border border-white/5">
            <span className="text-[10px] font-bold uppercase text-slate-300">{name}</span>
            <span className="text-[10px] font-black text-red-400">{rate} SUBMISSION</span>
        </div>
    )
}