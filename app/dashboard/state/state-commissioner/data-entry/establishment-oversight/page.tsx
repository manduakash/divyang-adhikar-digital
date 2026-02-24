// app/dashboard/scpd/oversight/establishments/page.tsx
"use client";
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
    Building2, ShieldCheck, Search, Filter, Printer,
    FileSpreadsheet, ArrowUpRight, Globe, Map, Sparkles,
    CheckCircle2, AlertTriangle, Landmark, TrendingUp,
    Download, Briefcase, Activity, Timer, History,
    ChevronRight, BadgeCheck, FileWarning, MoreHorizontal,
    MessageSquare,
    MapPin,
    Gavel
} from "lucide-react";
import {
    Table, TableBody, TableCell, TableHead, TableHeader, TableRow
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

export default function EstablishmentOversightHub() {

    // Section A3.9 statewide Aggregation Data
    const oversightStats = {
        totalUnits: "45,210",
        activeReporting: "42,800",
        stateAvgScore: "78.4%",
        unresolvedGrievances: "1,240"
    };

    return (
        <div className="space-y-10 animate-in fade-in duration-700 pb-20 font-sans">

            {/* 1. APEX ADMINISTRATIVE HEADER */}
            <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-6 mb-10 bg-white p-10 rounded-[40px] border border-slate-200 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 p-10 opacity-[0.03] pointer-events-none">
                    <Building2 size={180} className="text-indigo-600" />
                </div>
                <div className="space-y-2 relative z-10">
                    <div className="flex items-center gap-2 text-indigo-600 font-black uppercase text-[10px] tracking-[0.2em]">
                        <BadgeCheck size={14} /> Commission Hub / A3.9 Establishment Oversight
                    </div>
                    <h1 className="text-4xl font-black text-slate-900 tracking-tighter uppercase leading-none">Institutional Oversight</h1>
                    <p className="text-slate-500 font-medium italic">Consolidated statewide view of institutional compliance, inspections, and pendency.</p>
                </div>
                <div className="flex gap-4 relative z-10">
                    <Button variant="outline" className="h-16 px-8 rounded-3xl border-slate-200 font-black uppercase tracking-widest text-[10px] bg-white hover:bg-slate-50 shadow-xl">
                        <FileSpreadsheet size={18} className="mr-2 text-green-600" /> State XLS Export
                    </Button>
                    <Button className="h-16 px-10 rounded-3xl bg-indigo-900 text-white font-black uppercase tracking-widest text-[10px] shadow-2xl hover:bg-black transition-all gap-2 group">
                        <ShieldCheck size={18} /> Run Statewide Audit
                    </Button>
                </div>
            </div>

            {/* 2. STATUTORY KPI TILES (Patterned Gradients) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatTile label="Total Units Tracked" value={oversightStats.totalUnits} icon={<Building2 />} color="from-slate-700 via-slate-800 to-slate-900" />
                <StatTile label="Active Reporting Nodes" value={oversightStats.activeReporting} icon={<Activity />} color="from-blue-600 via-blue-700 to-indigo-900" />
                <StatTile label="State Avg Compliance" value={oversightStats.stateAvgScore} icon={<ShieldCheck />} color="from-emerald-500 via-teal-600 to-green-700" />
                <StatTile label="Unresolved Grievances" value={oversightStats.unresolvedGrievances} icon={<MessageSquare />} color="from-red-600 via-rose-700 to-red-800" alert />
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-start">

                {/* 3. OVERSIGHT REGISTRY (Section A3.9 Data Captured) */}
                <div className="xl:col-span-12">
                    <Card className="rounded-[40px] border-slate-200 shadow-sm overflow-hidden bg-white min-h-[700px]">
                        <CardHeader className="p-8 border-b border-slate-50 bg-slate-50/30 flex flex-row justify-between items-center">
                            <div className="flex gap-4 items-center">
                                <CardTitle className="text-sm font-black uppercase tracking-widest text-slate-400 leading-none">A3.9 Statewide Establishment Registry</CardTitle>
                                <Badge className="bg-indigo-50 text-indigo-700 border-none text-[8px] font-black uppercase tracking-widest">Aggregation Mode</Badge>
                            </div>
                            <div className="flex gap-4">
                                <div className="relative group">
                                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-300 group-focus-within:text-indigo-600" />
                                    <input className="pl-11 pr-4 py-3 bg-white border border-slate-200 rounded-2xl text-[10px] font-bold outline-none w-80 shadow-inner focus:ring-2 focus:ring-indigo-100" placeholder="Search by ID, Name or District..." />
                                </div>
                                <Button variant="outline" className="rounded-2xl border-slate-200 font-black uppercase text-[10px] tracking-widest px-6 h-12 bg-white"><Filter size={16} className="mr-2" /> District Filter</Button>
                            </div>
                        </CardHeader>
                        <CardContent className="p-0">
                            <Table>
                                <TableHeader className="bg-white">
                                    <TableRow className="border-slate-100">
                                        <TableHead className="px-8 py-6 text-[9px] font-black uppercase tracking-widest text-slate-400">Establishment ID & Name</TableHead>
                                        <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400">Type / District</TableHead>
                                        <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400 text-center">Active Status</TableHead>
                                        <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400 text-center">Compliance Score</TableHead>
                                        <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400 text-center">Last Inspection</TableHead>
                                        <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400 text-center">Pending Items (G/D)</TableHead>
                                        <TableHead className="text-right px-8"></TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody className="divide-y divide-slate-50">
                                    <OversightRow
                                        id="EST-UP-7721"
                                        name="HDFC Bank - Regional Hub"
                                        type="PRIVATE"
                                        district="Lucknow"
                                        active={true}
                                        score={82}
                                        lastInsp="14 Oct 2024"
                                        grievances={0}
                                        directions={1}
                                    />
                                    <OversightRow
                                        id="EST-UP-0012"
                                        name="Nagar Nigam Main Office"
                                        type="GOVERNMENT"
                                        district="Meerut"
                                        active={true}
                                        score={45}
                                        lastInsp="02 Sep 2024"
                                        grievances={12}
                                        directions={4}
                                        alert
                                    />
                                    <OversightRow
                                        id="EST-UP-4491"
                                        name="Global Tech Solutions"
                                        type="PRIVATE"
                                        district="Gautam Buddha Ngr"
                                        active={false}
                                        score={30}
                                        lastInsp="10 Jan 2024"
                                        grievances={0}
                                        directions={0}
                                        warning
                                    />
                                    <OversightRow
                                        id="EST-UP-8811"
                                        name="District Sessions Court"
                                        type="GOVERNMENT"
                                        district="Varanasi"
                                        active={true}
                                        score={94}
                                        lastInsp="20 Oct 2024"
                                        grievances={1}
                                        directions={0}
                                        success
                                    />
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>
                </div>

            </div>
        </div>
    );
}

/* UI SUB-COMPONENTS */

function StatTile({ label, value, icon, color, alert }: any) {
    return (
        <div className={`group relative text-left p-7 rounded-[32px] overflow-hidden transition-all duration-500 h-44 flex flex-col justify-between shadow-md hover:shadow-xl hover:-translate-y-1 bg-gradient-to-br ${color} text-white border-t border-white/20`}>
            <div className="absolute inset-0 opacity-[0.08] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/topography.png')]" />
            <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />

            <div className="relative z-10 flex flex-col justify-between h-full">
                <div className="h-10 w-10 rounded-xl bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform">
                    {React.cloneElement(icon, { size: 18, className: "text-white" })}
                </div>
                <div>
                    <p className="text-2xl font-black tracking-tighter drop-shadow-sm">{value}</p>
                    <p className="text-[9px] font-black uppercase tracking-[0.1em] opacity-80 leading-tight mt-1">{label}</p>
                </div>
            </div>
            {alert && <div className="absolute top-4 right-4 h-1.5 w-1.5 rounded-full bg-white animate-ping" />}
        </div>
    )
}

function OversightRow({ id, name, type, district, active, score, lastInsp, grievances, directions, alert, warning, success }: any) {
    const scoreColor = score > 80 ? 'bg-green-500' : score > 50 ? 'bg-indigo-600' : 'bg-red-500';

    return (
        <TableRow className="border-none hover:bg-slate-50 transition-all group cursor-pointer font-sans">
            <TableCell className="px-8 py-6">
                <span className="text-[11px] font-mono font-black text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded-md">{id}</span>
                <p className="text-sm font-black text-slate-800 uppercase tracking-tight mt-2">{name}</p>
            </TableCell>
            <TableCell>
                <div className="space-y-1">
                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{type}</p>
                    <div className="flex items-center gap-1.5">
                        <MapPin size={10} className="text-slate-300" />
                        <span className="text-[10px] font-bold text-slate-400 uppercase">{district}</span>
                    </div>
                </div>
            </TableCell>
            <TableCell className="text-center">
                <Badge className={`rounded-full px-3 py-0.5 text-[8px] font-black uppercase border-none shadow-none ${active ? 'bg-green-100 text-green-700' : 'bg-slate-100 text-slate-400'}`}>
                    {active ? 'ACTIVE' : 'INACTIVE'}
                </Badge>
            </TableCell>
            <TableCell>
                <div className="flex flex-col items-center gap-2">
                    <span className="text-xs font-black text-slate-900">{score}%</span>
                    <div className="w-24 h-1 bg-slate-100 rounded-full overflow-hidden">
                        <div className={`h-full ${scoreColor}`} style={{ width: `${score}%` }} />
                    </div>
                </div>
            </TableCell>
            <TableCell className="text-center text-[10px] font-bold text-slate-400 uppercase">
                {lastInsp}
            </TableCell>
            <TableCell className="text-center">
                <div className="flex justify-center gap-3">
                    <div title="Pending Grievances" className={`flex flex-col items-center p-1 rounded-lg ${grievances > 0 ? 'bg-red-50 text-red-600' : 'text-slate-300'}`}>
                        <span className="text-[10px] font-black leading-none">{grievances}</span>
                        <MessageSquare size={10} />
                    </div>
                    <div title="Pending Directions" className={`flex flex-col items-center p-1 rounded-lg ${directions > 0 ? 'bg-indigo-50 text-indigo-600' : 'text-slate-300'}`}>
                        <span className="text-[10px] font-black leading-none">{directions}</span>
                        <Gavel size={10} />
                    </div>
                </div>
            </TableCell>
            <TableCell className="text-right px-8 opacity-0 group-hover:opacity-100 transition-all">
                <button className="p-2 bg-slate-50 text-slate-400 rounded-xl hover:bg-indigo-900 hover:text-white transition-all shadow-sm">
                    <ArrowUpRight size={16} />
                </button>
            </TableCell>
        </TableRow>
    )
}