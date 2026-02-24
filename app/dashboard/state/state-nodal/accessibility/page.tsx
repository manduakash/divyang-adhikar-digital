// app/dashboard/state/reports/accessibility/page.tsx
"use client";
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
    Table, TableBody, TableCell, TableHead, TableHeader, TableRow
} from "@/components/ui/table";
import {
    Accessibility, Building2, ShieldCheck, Search,
    Filter, Printer, FileSpreadsheet, Globe,
    ArrowUpRight, AlertTriangle, CheckCircle2,
    Activity, Landmark, Download, Map
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function StateAccessibilityReport() {

    // Section 6.4 Mandated State-Wide Totals
    const aggregateStats = {
        totalInspected: "45,210",
        compliant: "32,840",
        partial: "9,120",
        nonCompliant: "3,250",
        complianceRate: "72.6%"
    };

    return (
        <div className="space-y-10 animate-in fade-in duration-700 pb-20 font-sans">

            {/* 1. APEX ADMINISTRATIVE HEADER */}
            <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-6 bg-white p-10 rounded-[40px] border border-slate-200 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 p-10 opacity-[0.03] pointer-events-none">
                    <Accessibility size={180} className="text-purple-600" />
                </div>
                <div className="space-y-2 relative z-10">
                    <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border border-purple-200">
                        <Globe size={14} className="animate-spin-slow" /> State Audit Hub / Section 6.4
                    </div>
                    <h1 className="text-4xl font-black text-slate-900 tracking-tighter uppercase leading-none">Accessibility Compliance Ledger</h1>
                    <p className="text-slate-500 font-medium italic">Consolidated Infrastructure & Digital Audit Aggregation • All Districts</p>
                </div>
                <div className="flex gap-4 relative z-10">
                    <Button variant="outline" className="h-14 px-8 rounded-2xl border-slate-200 font-bold bg-white hover:bg-slate-50 gap-2">
                        <FileSpreadsheet size={18} className="text-green-600" /> Export CSV
                    </Button>
                    <Button className="h-14 px-10 rounded-2xl bg-purple-700 text-white font-black uppercase tracking-widest text-[10px] shadow-2xl shadow-purple-200 hover:bg-purple-900 transition-all gap-2">
                        <Printer size={18} /> Print Statutory Ledger
                    </Button>
                </div>
            </div>

            {/* 2. PATTERNED KPI TILES (Section 6.4 Aggregation) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                <StatTile label="Est. Inspected" value={aggregateStats.totalInspected} icon={<Search />} color="from-slate-700 via-slate-800 to-slate-950" />
                <StatTile label="Fully Compliant" value={aggregateStats.compliant} icon={<CheckCircle2 />} color="from-emerald-500 via-teal-600 to-green-800" />
                <StatTile label="Partial Access" value={aggregateStats.partial} icon={<Activity />} color="from-orange-400 via-orange-500 to-orange-700" />
                <StatTile label="Non-Compliant" value={aggregateStats.nonCompliant} icon={<AlertTriangle />} color="from-red-600 via-rose-700 to-red-900" alert />
                <div className="bg-white border-2 border-purple-100 rounded-[32px] p-6 shadow-sm flex flex-col justify-center relative overflow-hidden group">
                    <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/topography.png')]" />
                    <p className="text-[9px] font-black uppercase tracking-widest text-purple-400 mb-1">State Compliance Rate</p>
                    <p className="text-4xl font-black text-purple-700 tracking-tighter group-hover:scale-105 transition-transform">{aggregateStats.complianceRate}</p>
                    <div className="w-full h-1 bg-slate-100 rounded-full mt-4 overflow-hidden">
                        <div className="h-full bg-purple-600" style={{ width: aggregateStats.complianceRate }} />
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                {/* 3. POLICY ACTION CALLOUT */}
                <Card className="lg:col-span-1 rounded-[40px] border-2 bg-slate-900 text-white p-10 shadow-2xl relative overflow-hidden group">
                    <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/circuit-board.png')]" />
                    <div className="relative z-10 space-y-6">
                        <div className="flex items-center gap-3">
                            <CheckCircle2 size={24} className="text-purple-400" />
                            <h3 className="text-sm font-black uppercase tracking-widest text-purple-400">Compliance Directives</h3>
                        </div>
                        <p className="text-xl font-black leading-tight uppercase">05 Districts below 40% threshold</p>
                        <p className="text-sm font-medium text-slate-400 leading-relaxed italic">
                            "Statewide audit identifies Agra and Varanasi as primary zones of digital accessibility default. Issue mandatory correction orders to district collectors."
                        </p>
                        <Button className="w-full h-14 bg-white text-slate-900 hover:bg-purple-50 rounded-2xl font-black uppercase tracking-widest text-[10px] shadow-lg">
                            Issue State Correction Order
                        </Button>
                    </div>
                </Card>

                {/* 4. DISTRICT-WISE ACCESSIBILITY REGISTRY (Section 6.4 Mandated Format) */}
                <Card className="lg:col-span-2 rounded-[40px] border-slate-200 shadow-sm overflow-hidden bg-white">
                    <CardHeader className="p-8 border-b border-slate-50 bg-slate-50/30 flex flex-row justify-between items-center">
                        <div className="flex items-center gap-3">
                            <Map className="text-purple-600" size={20} />
                            <CardTitle className="text-sm font-black uppercase tracking-widest text-slate-400">District Compliance aggregation</CardTitle>
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
                                    <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400 text-center">Est. Inspected</TableHead>
                                    <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400 text-center">Compliant</TableHead>
                                    <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400 text-center">Partial</TableHead>
                                    <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400 text-center">Non-Compliant</TableHead>
                                    <TableHead className="text-right px-8 text-[9px] font-black uppercase tracking-widest text-slate-400">Action</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody className="divide-y divide-slate-50">
                                <AccessibilityRow name="Lucknow" total="4,800" ok="4,410" part="350" non="40" />
                                <AccessibilityRow name="Gautam Buddha Ngr" total="3,200" ok="3,050" part="120" non="30" />
                                <AccessibilityRow name="Agra" total="2,100" ok="1,200" part="600" non="300" alert />
                                <AccessibilityRow name="Varanasi" total="3,450" ok="3,100" part="250" non="100" />
                                <AccessibilityRow name="Kanpur Nagar" total="4,100" ok="3,200" part="750" non="150" warning />
                                <AccessibilityRow name="Prayagraj" total="2,800" ok="2,100" part="500" non="200" warning />
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
            {/* Pattern Layers */}
            <div className="absolute inset-0 opacity-[0.08] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/topography.png')]" />
            <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />

            <div className="relative z-10 flex flex-col justify-between h-full">
                <div className="h-10 w-10 rounded-xl bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform">
                    {React.cloneElement(icon, { size: 22, className: "text-white drop-shadow-md" })}
                </div>
                <div>
                    <p className="text-3xl font-black tracking-tighter drop-shadow-sm">{value}</p>
                    <p className="text-[9px] font-black uppercase tracking-[0.15em] opacity-80 leading-tight mt-1">{label}</p>
                </div>
            </div>
            {alert && <div className="absolute top-6 right-6 h-2 w-2 rounded-full bg-white animate-ping" />}
        </div>
    )
}

function AccessibilityRow({ name, total, ok, part, non, alert, warning }: any) {
    const statusColor = alert ? 'bg-red-500' : warning ? 'bg-orange-500' : 'bg-green-500';
    return (
        <TableRow className="border-2 hover:bg-slate-50 transition-all group cursor-pointer">
            <TableCell className="px-8 py-6">
                <div className="flex items-center gap-3">
                    <div className={`h-1.5 w-1.5 rounded-full ${statusColor} shadow-[0_0_8px_rgba(0,0,0,0.1)]`} />
                    <span className="text-xs font-black text-slate-800 uppercase tracking-tight">{name}</span>
                </div>
            </TableCell>
            <TableCell className="text-center font-bold text-slate-400 text-[11px]">{total}</TableCell>
            <TableCell className="text-center font-bold text-green-600 text-[11px]">{ok}</TableCell>
            <TableCell className="text-center font-bold text-orange-500 text-[11px]">{part}</TableCell>
            <TableCell className="text-center">
                <span className={`text-[11px] font-black ${alert ? 'text-red-600 underline decoration-red-200 decoration-2' : 'text-slate-400'}`}>
                    {non}
                </span>
            </TableCell>
            <TableCell className="text-right px-8 opacity-0 group-hover:opacity-100 transition-all">
                <button className="text-purple-600 font-black uppercase text-[9px] tracking-widest hover:underline flex items-center gap-1 ml-auto">
                    District Node <ArrowUpRight size={12} />
                </button>
            </TableCell>
        </TableRow>
    )
}