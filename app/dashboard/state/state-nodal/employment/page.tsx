// app/dashboard/state/reports/employment/page.tsx
"use client";
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
    Table, TableBody, TableCell, TableHead, TableHeader, TableRow
} from "@/components/ui/table";
import {
    Briefcase, Users, TrendingUp, AlertCircle,
    Search, Filter, Download, FileSpreadsheet,
    Building2, ArrowUpRight, GraduationCap, ChevronRight,
    ShieldCheck, Landmark, FileWarning, Printer,
    Sparkles, Globe, Map,
    CheckCircle2
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function StateEmploymentReport() {

    // Section 6.2 Mandated State-Wide Totals
    const stateTotals = {
        establishments: "45,210",
        totalEmployees: "8,420,000",
        pwdEmployees: "342,850",
        overallPercentage: "4.07%",
        identifiedVacancies: "12,450",
        filledVacancies: "8,210",
        pendingVacancies: "4,240"
    };

    return (
        <div className="space-y-10 animate-in fade-in duration-700 pb-20 font-sans">

            {/* 1. STATE ADMINISTRATIVE HEADER */}
            <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-6 bg-white p-10 rounded-[40px] border border-slate-200 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 p-10 opacity-[0.03] pointer-events-none">
                    <Briefcase size={180} className="text-purple-600" />
                </div>
                <div className="space-y-2 relative z-10">
                    <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border border-purple-200">
                        <Globe size={14} className="animate-spin-slow" /> State Aggregation Node / Section 6.2
                    </div>
                    <h1 className="text-4xl font-black text-slate-900 tracking-tighter uppercase leading-none">Employment & Vacancy Ledger</h1>
                    <p className="text-slate-500 font-medium italic">Consolidated 4% Reservation Compliance Report for Uttar Pradesh • FY 2024-25</p>
                </div>
                <div className="flex gap-4 relative z-10">
                    <Button variant="outline" className="h-14 px-8 rounded-2xl border-slate-200 font-bold bg-white hover:bg-slate-50 gap-2">
                        <FileSpreadsheet size={18} className="text-green-600" /> Export State XLS
                    </Button>
                    <Button className="h-14 px-10 rounded-2xl bg-purple-700 text-white font-black uppercase tracking-widest text-[10px] shadow-2xl shadow-purple-200 hover:bg-purple-900 transition-all gap-2">
                        <Printer size={18} /> Print Statutory Copy
                    </Button>
                </div>
            </div>

            {/* 2. PATTERNED KPI TILES (Section 6.2 Mandated Format) */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
                <StatTile label="Total Establishments" value={stateTotals.establishments} icon={<Building2 />} color="from-slate-700 via-slate-800 to-slate-950" />
                <StatTile label="Total Employees" value="8.4M" icon={<Users />} color="from-blue-600 via-blue-700 to-indigo-900" />
                <StatTile label="PwD Employees" value="342K" icon={<GraduationCap />} color="from-indigo-600 via-indigo-700 to-purple-900" />
                <StatTile label="Employment %" value={stateTotals.overallPercentage} icon={<TrendingUp />} color="from-emerald-500 via-teal-600 to-green-800" trend="+0.2%" />
                <StatTile label="Identified Vacancies" value={stateTotals.identifiedVacancies} icon={<Briefcase />} color="from-blue-500 via-blue-600 to-blue-800" />
                <StatTile label="Vacancies Filled" value={stateTotals.filledVacancies} icon={<CheckCircle2 />} color="from-indigo-500 via-purple-600 to-purple-800" />
                <StatTile label="Vacancies Pending" value={stateTotals.pendingVacancies} icon={<FileWarning />} color="from-red-600 via-rose-700 to-red-900" alert />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                {/* 3. POLICY CORRECTION CALLOUT */}
                <Card className="lg:col-span-1 rounded-[40px] border-2 bg-slate-900 text-white p-10 shadow-2xl relative overflow-hidden group">
                    <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/circuit-board.png')]" />
                    <div className="relative z-10 space-y-6">
                        <div className="flex items-center gap-3">
                            <Sparkles className="text-purple-400" />
                            <h3 className="text-sm font-black uppercase tracking-widest text-purple-400">AI State Analysis</h3>
                        </div>
                        <p className="text-lg font-black leading-tight uppercase">Reservation Gap Detected in 08 Districts</p>
                        <p className="text-sm font-medium text-slate-400 leading-relaxed italic">
                            "Statewide pending vacancies (4,240) have increased by 4% since last quarter. Sector-wise data suggests critical shortfalls in the Medical Education and Transport departments."
                        </p>
                        <Button className="w-full h-14 bg-white text-slate-900 hover:bg-purple-50 rounded-2xl font-black uppercase tracking-widest text-[10px]">
                            Issue Statewide Correction Order
                        </Button>
                    </div>
                </Card>

                {/* 4. DISTRICT-WISE AGGREGATION TABLE (Section 6.2 Detailed Format) */}
                <Card className="lg:col-span-2 rounded-[40px] border-slate-200 shadow-sm overflow-hidden bg-white">
                    <CardHeader className="p-8 border-b border-slate-50 bg-slate-50/30 flex flex-row justify-between items-center">
                        <div className="flex items-center gap-3">
                            <Map className="text-purple-600" size={20} />
                            <CardTitle className="text-sm font-black uppercase tracking-widest text-slate-400">District-wise Aggregation Ledger</CardTitle>
                        </div>
                        <div className="relative group">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-400 group-focus-within:text-purple-600" />
                            <input className="pl-9 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-[10px] font-bold outline-none w-64 shadow-inner" placeholder="Filter by District Name..." />
                        </div>
                    </CardHeader>
                    <CardContent className="p-0">
                        <Table>
                            <TableHeader className="bg-white">
                                <TableRow className="border-slate-100">
                                    <TableHead className="px-8 py-5 text-[9px] font-black uppercase tracking-widest text-slate-400">District</TableHead>
                                    <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400 text-center">Establishments</TableHead>
                                    <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400 text-center">PwD Emp</TableHead>
                                    <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400 text-center">Identified</TableHead>
                                    <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400 text-center">Filled</TableHead>
                                    <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400 text-center">Pending</TableHead>
                                    <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400 text-center">Status</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody className="divide-y divide-slate-50">
                                <DistrictStatRow name="Lucknow" est="482" pwd="5,210" ident="1,450" filled="1,410" pending="40" perc="4.2%" />
                                <DistrictStatRow name="Gautam Buddha Ngr" est="1,240" pwd="8,420" ident="2,100" filled="2,080" pending="20" perc="4.5%" />
                                <DistrictStatRow name="Varanasi" est="320" pwd="2,100" ident="450" filled="310" pending="140" perc="3.2%" alert />
                                <DistrictStatRow name="Agra" est="290" pwd="1,850" ident="580" filled="420" pending="160" perc="2.9%" alert />
                                <DistrictStatRow name="Kanpur Nagar" est="610" pwd="4,200" ident="900" filled="880" pending="20" perc="4.1%" />
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
        <button className={`group relative text-left p-5 rounded-[28px] overflow-hidden transition-all duration-500 h-40 flex flex-col justify-between shadow-md hover:shadow-xl hover:-translate-y-1 bg-gradient-to-br ${color} text-white border-t border-white/20`}>
            {/* Texture Overlays */}
            <div className="absolute inset-0 opacity-[0.08] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/topography.png')]" />
            <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />

            <div className="relative z-10 flex flex-col justify-between h-full">
                <div className="h-9 w-9 rounded-xl bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform">
                    {React.cloneElement(icon, { size: 18, className: "drop-shadow-md text-white" })}
                </div>
                <div>
                    <div className="flex items-baseline gap-1">
                        <p className="text-2xl font-black tracking-tighter drop-shadow-sm">{value}</p>
                        {trend && <span className="text-[8px] font-black opacity-60 flex items-center gap-0.5"><TrendingUp size={8} /> {trend}</span>}
                    </div>
                    <p className="text-[8px] font-black uppercase tracking-[0.1em] opacity-80 leading-tight mt-1">{label}</p>
                </div>
            </div>
            {alert && (
                <div className="absolute top-4 right-4 h-1.5 w-1.5 rounded-full bg-white animate-ping" />
            )}
        </button>
    )
}

function DistrictStatRow({ name, est, pwd, ident, filled, pending, perc, alert }: any) {
    return (
        <TableRow className="border-2 hover:bg-slate-50 transition-all group cursor-pointer">
            <TableCell className="px-8 py-5">
                <div className="flex items-center gap-3">
                    <div className={`h-1.5 w-1.5 rounded-full ${alert ? 'bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.5)]' : 'bg-green-500'}`} />
                    <span className="text-xs font-black text-slate-800 uppercase tracking-tight">{name}</span>
                </div>
            </TableCell>
            <TableCell className="text-center font-bold text-slate-500 text-[11px]">{est}</TableCell>
            <TableCell className="text-center font-bold text-slate-700 text-[11px]">{pwd}</TableCell>
            <TableCell className="text-center font-bold text-slate-500 text-[11px]">{ident}</TableCell>
            <TableCell className="text-center font-bold text-slate-700 text-[11px]">{filled}</TableCell>
            <TableCell className="text-center">
                <span className={`text-[11px] font-black ${alert ? 'text-red-600' : 'text-slate-400'}`}>{pending}</span>
            </TableCell>
            <TableCell className="text-center">
                <div className="flex flex-col items-center">
                    <span className={`text-[10px] font-mono font-black ${alert ? 'text-red-600' : 'text-purple-600'}`}>{perc}</span>
                    <p className={`text-[7px] font-black uppercase ${alert ? 'text-red-400' : 'text-slate-300'}`}>{alert ? 'Below Mandate' : 'Compliance OK'}</p>
                </div>
            </TableCell>
        </TableRow>
    )
}