// app/dashboard/state/reports/establishments/page.tsx
"use client";
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
    Table, TableBody, TableCell, TableHead, TableHeader, TableRow
} from "@/components/ui/table";
import {
    Building2, ShieldCheck, Search, Filter, Printer,
    FileSpreadsheet, ArrowUpRight, Globe, Map, Sparkles,
    CheckCircle2, AlertTriangle, Landmark, TrendingUp,
    Download, Briefcase, Activity
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function StateEstablishmentReport() {

    // Statewide Aggregate Data
    const stateTotals = {
        totalUnits: "45,210",
        govtUnits: "12,400",
        privateUnits: "32,810",
        avgCompliance: "78.4%",
        criticalUnits: "1,240"
    };

    return (
        <div className="space-y-10 animate-in fade-in duration-700 pb-20 font-sans">

            {/* 1. APEX ADMINISTRATIVE HEADER */}
            <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-6 bg-white p-10 rounded-[40px] border border-slate-200 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 p-10 opacity-[0.03] pointer-events-none">
                    <Building2 size={180} className="text-purple-600" />
                </div>
                <div className="space-y-2 relative z-10">
                    <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border border-purple-200">
                        <Globe size={14} className="animate-spin-slow" /> Institutional Oversight Node
                    </div>
                    <h1 className="text-4xl font-black text-slate-900 tracking-tighter uppercase leading-none">Establishment Compliance Ledger</h1>
                    <p className="text-slate-500 font-medium italic">Consolidated Statutory Compliance Audit for all 45K+ registered units.</p>
                </div>
                <div className="flex gap-4 relative z-10">
                    <Button variant="outline" className="h-14 px-8 rounded-2xl border-slate-200 font-bold bg-white hover:bg-slate-50 gap-2">
                        <FileSpreadsheet size={18} className="text-green-600" /> Export XLS
                    </Button>
                    <Button className="h-14 px-10 rounded-2xl bg-purple-700 text-white font-black uppercase tracking-widest text-[10px] shadow-2xl shadow-purple-200 hover:bg-purple-900 transition-all gap-2">
                        <Printer size={18} /> Print Certified Summary
                    </Button>
                </div>
            </div>

            {/* 2. PATTERNED KPI TILES (State Aggregation) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                <StatTile label="Total Registered Units" value={stateTotals.totalUnits} icon={<Building2 />} color="from-slate-700 via-slate-800 to-slate-950" />
                <StatTile label="Government Sector" value={stateTotals.govtUnits} icon={<Landmark />} color="from-blue-600 via-blue-700 to-indigo-900" />
                <StatTile label="Private Sector" value={stateTotals.privateUnits} icon={<Briefcase />} color="from-indigo-600 via-indigo-700 to-purple-900" />
                <StatTile label="Critical Non-Compliance" value={stateTotals.criticalUnits} icon={<AlertTriangle />} color="from-red-600 via-rose-700 to-red-900" alert />
                <div className="bg-white border-2 border-purple-100 rounded-[32px] p-6 shadow-sm flex flex-col justify-center relative overflow-hidden group">
                    <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/topography.png')]" />
                    <p className="text-[9px] font-black uppercase tracking-widest text-purple-400 mb-1">State Avg Compliance</p>
                    <p className="text-4xl font-black text-purple-700 tracking-tighter group-hover:scale-105 transition-transform">{stateTotals.avgCompliance}</p>
                    <div className="w-full h-1 bg-slate-100 rounded-full mt-4 overflow-hidden">
                        <div className="h-full bg-purple-600" style={{ width: stateTotals.avgCompliance }} />
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                {/* 3. POLICY ACTION SIDEBAR */}
                <div className="lg:col-span-1 space-y-6">
                    <Card className="rounded-[40px] border-2 bg-slate-900 text-white p-10 shadow-2xl relative overflow-hidden group">
                        <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/circuit-board.png')]" />
                        <div className="relative z-10 space-y-6">
                            <div className="flex items-center gap-3">
                                <Sparkles className="text-purple-400" />
                                <h3 className="text-sm font-black uppercase tracking-widest text-purple-400">Secretary's Brief</h3>
                            </div>
                            <p className="text-lg font-black leading-tight uppercase tracking-tight">Systemic Compliance Failure detected</p>
                            <p className="text-sm font-medium text-slate-400 leading-relaxed italic">
                                "Aggregation of Q3 returns suggests a 15% drop in 'Digital Accessibility' compliance in the Banking Sector. Statewide directive recommended."
                            </p>
                            <Button className="w-full h-14 bg-white text-slate-900 hover:bg-purple-50 rounded-2xl font-black uppercase tracking-widest text-[10px] shadow-lg">
                                Issue Sectoral Directive
                            </Button>
                        </div>
                    </Card>

                    <Card className="rounded-[40px] border-slate-200 p-8 bg-white shadow-sm relative overflow-hidden">
                        <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/graphy.png')]" />
                        <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-6 border-b pb-4">Compliance Area Health</h4>
                        <div className="space-y-6">
                            <AreaHealthItem label="Physical (Ramps/Lifts)" score="88%" color="text-green-500" />
                            <AreaHealthItem label="Digital (Portal Access)" score="42%" color="text-red-500" />
                            <AreaHealthItem label="Employment (4% Mandate)" score="91%" color="text-blue-500" />
                        </div>
                    </Card>
                </div>

                {/* 4. DISTRICT-WISE ESTABLISHMENT LEDGER */}
                <Card className="lg:col-span-2 rounded-[40px] border-slate-200 shadow-sm overflow-hidden bg-white">
                    <CardHeader className="p-8 border-b border-slate-50 bg-slate-50/30 flex flex-row justify-between items-center">
                        <div className="flex items-center gap-3">
                            <Map className="text-purple-600" size={20} />
                            <CardTitle className="text-sm font-black uppercase tracking-widest text-slate-400">District-wise Aggregation</CardTitle>
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
                                    <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400 text-center">Total Units</TableHead>
                                    <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400 text-center">Avg Score</TableHead>
                                    <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400 text-center">Physical Access</TableHead>
                                    <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400 text-center">Digital Access</TableHead>
                                    <TableHead className="text-right px-8 text-[9px] font-black uppercase tracking-widest text-slate-400">Drill-down</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody className="divide-y divide-slate-50">
                                <DistrictRow name="Lucknow" units="482" score="82%" phys="Compliant" digi="Partial" />
                                <DistrictRow name="Varanasi" units="320" score="48%" phys="Non-Compliant" digi="Non-Compliant" alert />
                                <DistrictRow name="Gautam Buddha Ngr" units="1,240" score="91%" phys="Compliant" digi="Compliant" />
                                <DistrictRow name="Agra" units="290" score="55%" phys="Partial" digi="Non-Compliant" warning />
                                <DistrictRow name="Kanpur Nagar" units="610" score="78%" phys="Compliant" digi="Partial" />
                                <DistrictRow name="Ghaziabad" units="980" score="88%" phys="Compliant" digi="Compliant" />
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
            {/* Pattern Overlays */}
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

function DistrictRow({ name, units, score, phys, digi, alert, warning }: any) {
    const statusColor = alert ? 'bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.5)]' : warning ? 'bg-orange-500' : 'bg-green-500';
    return (
        <TableRow className="border-2 hover:bg-slate-50 transition-all group cursor-pointer font-sans">
            <TableCell className="px-8 py-6">
                <div className="flex items-center gap-3">
                    <div className={`h-1.5 w-1.5 rounded-full ${statusColor}`} />
                    <span className="text-xs font-black text-slate-800 uppercase tracking-tight">{name}</span>
                </div>
            </TableCell>
            <TableCell className="text-center font-bold text-slate-400 text-[11px]">{units}</TableCell>
            <TableCell className="text-center">
                <span className={`text-[11px] font-mono font-black ${alert ? 'text-red-600 underline decoration-red-200' : 'text-purple-600'}`}>
                    {score}
                </span>
            </TableCell>
            <TableCell className="text-center text-[10px] font-bold text-slate-500 uppercase">{phys}</TableCell>
            <TableCell className="text-center text-[10px] font-bold text-slate-500 uppercase">{digi}</TableCell>
            <TableCell className="text-right px-8 opacity-0 group-hover:opacity-100 transition-all">
                <button className="text-purple-600 font-black uppercase text-[9px] tracking-widest hover:underline flex items-center gap-1 ml-auto">
                    Registry Hub <ArrowUpRight size={12} />
                </button>
            </TableCell>
        </TableRow>
    )
}

function AreaHealthItem({ label, score, color }: any) {
    return (
        <div className="flex justify-between items-center group">
            <div className="space-y-1">
                <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{label}</p>
                <div className="flex items-center gap-2">
                    <p className={`text-sm font-black ${color}`}>{score}</p>
                    <TrendingUp size={10} className={color} />
                </div>
            </div>
            <Activity size={16} className="text-slate-100 group-hover:text-purple-600 transition-colors" />
        </div>
    )
}