// app/dashboard/sdma/reports/risk-summary/page.tsx
"use client";
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
    Table, TableBody, TableCell, TableHead, TableHeader, TableRow
} from "@/components/ui/table";
import {
    ShieldAlert, Siren, FileBarChart, Printer,
    FileSpreadsheet, Download, Search, Filter,
    Globe, Map, Activity, BadgeCheck,
    ChevronRight, ArrowUpRight, CheckCircle2,
    AlertTriangle, Navigation, Landmark,
    Scale, Zap, Timer,
    Users,
    Home,
    Gavel
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
    Select, SelectContent, SelectItem, SelectTrigger, SelectValue
} from "@/components/ui/select";

export default function StateRiskSummaryReport() {
    return (
        <div className="space-y-10 animate-in fade-in duration-1000 pb-20 font-sans selection:bg-orange-100 bg-white">

            {/* HUB PRIMARY HEADER - VIBRANT GRADIENT */}
            <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-8 bg-white p-12 rounded-[48px] border-2 border-slate-100 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 p-10 opacity-[0.03] pointer-events-none text-orange-600">
                    <ShieldAlert size={240} />
                </div>

                <div className="space-y-4 relative z-10">
                    <div className="flex items-center gap-3">
                        <div className="h-14 w-14 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center text-white shadow-xl shadow-orange-500/20">
                            <Siren size={32} />
                        </div>
                        <div>
                            <h1 className="text-4xl font-black text-slate-900 tracking-tighter uppercase leading-none">Disaster Risk Summary</h1>
                            <p className="text-[10px] font-black text-orange-600 uppercase tracking-[0.3em] mt-2 flex items-center gap-2">
                                <BadgeCheck size={12} /> State statutory Registry Hub
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex gap-4 relative z-10">
                    <Button variant="outline" className="h-16 px-10 rounded-3xl border-2 border-slate-200 font-black uppercase tracking-widest text-[10px] bg-white gap-2 shadow-sm hover:bg-slate-50 transition-all">
                        <FileSpreadsheet size={18} className="text-green-600" /> Export State XLS
                    </Button>
                    <Button className="h-16 px-10 rounded-3xl bg-slate-950 text-white font-black uppercase tracking-widest text-[10px] shadow-2xl hover:bg-black transition-all gap-2 group">
                        <Printer size={18} /> Print Certified Hub <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </Button>
                </div>
            </div>

            {/* STATUTORY KPI TILES (High-Contrast Patterned) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatTile label="PwDs in Risk Zones" value="124,840" icon={<Users />} color="from-orange-500 to-orange-700" />
                <StatTile label="High-Risk Category" value="18,210" icon={<AlertTriangle />} color="from-red-600 to-red-800" alert />
                <StatTile label="Accessible Shelters" value="3,450" icon={<Home />} color="from-emerald-500 to-green-700" />
                <div className="bg-white border-2 border-indigo-100 rounded-[32px] p-8 shadow-sm flex flex-col justify-center relative overflow-hidden group">
                    <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/topography.png')]" />
                    <p className="text-[9px] font-black uppercase text-indigo-400 tracking-widest mb-1 relative z-10">State Readiness</p>
                    <p className="text-4xl font-black text-indigo-700 tracking-tighter group-hover:scale-105 transition-transform relative z-10">88.4%</p>
                    <div className="w-full h-1.5 bg-slate-100 rounded-full mt-4 overflow-hidden relative z-10">
                        <div className="h-full bg-indigo-600 shadow-[0_0_10px_rgba(79,70,229,0.4)]" style={{ width: '88%' }} />
                    </div>
                </div>
            </div>

            {/* DYNAMIC REGISTRY PARAMETERS */}
            <Card className="rounded-[40px] border-2 border-slate-100 bg-white p-8 shadow-sm">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="space-y-2">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Disaster Parameter</label>
                        <Select defaultValue="flood">
                            <SelectTrigger className="w-full h-16 py-6 border-2 border-slate-200 bg-slate-50 rounded-2xl font-black text-slate-900 uppercase text-[10px] shadow-sm">
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent className="rounded-2xl border-2 border-slate-200 shadow-2xl">
                                <SelectItem value="flood">Flood / Monsoon Inundation</SelectItem>
                                <SelectItem value="cyclone">Cyclone / Storm Surge</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="space-y-2">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Reporting District Hub</label>
                        <Select defaultValue="all">
                            <SelectTrigger className="w-full h-16 py-6 border-2 border-slate-200 bg-slate-50 rounded-2xl font-black text-slate-900 uppercase text-[10px] shadow-sm">
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent className="rounded-2xl border-2 border-slate-200 shadow-2xl">
                                <SelectItem value="all">All 75 Districts</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="flex items-end">
                        <Button className="w-full h-16 bg-slate-950 text-white rounded-2xl font-black uppercase tracking-widest text-[10px] shadow-xl hover:bg-black transition-all gap-2">
                            <Filter size={16} /> Filter Summary Ledger
                        </Button>
                    </div>
                </div>
            </Card>

            {/* MASTER DATA TABLE - CARBON FIBER TEXTURE HEADER */}
            <Card className="rounded-[48px] border-2 border-slate-200 shadow-sm overflow-hidden bg-white">
                <CardHeader className="p-0">
                    <div className="p-10 bg-gradient-to-r from-orange-600 via-amber-600 to-orange-700 text-white relative overflow-hidden">
                        {/* CARBON FIBER TEXTURE OVERLAY */}
                        <div className="absolute inset-0 opacity-5 pointer-events-none"
                            style={{ backgroundImage: `radial-gradient(black 2px, transparent 0)`, backgroundSize: '4px 64x' }} />

                        <div className="flex flex-col md:flex-row justify-between items-center gap-6 relative z-10">
                            <div className="flex items-center gap-4">
                                <div className="h-12 w-12 rounded-2xl bg-white/20 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-xl">
                                    <Landmark size={24} />
                                </div>
                                <CardTitle className="text-sm font-black uppercase tracking-[0.3em] text-white">STATE PWD DISASTER RISK SUMMARY REGISTRY</CardTitle>
                            </div>
                            <Badge className="bg-white/20 text-white border-none font-black text-[10px] px-5 py-2 uppercase tracking-widest">Aggregation Node v5.2</Badge>
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="p-0">
                    <Table>
                        <TableHeader className="bg-slate-50/80 font-sans">
                            <TableRow className="border-b-2 border-slate-100">
                                <TableHead className="px-10 py-6 text-[10px] font-black uppercase tracking-widest text-slate-400">Disaster Type</TableHead>
                                <TableHead className="text-[10px] font-black uppercase tracking-widest text-slate-400 text-center">Districts Covered</TableHead>
                                <TableHead className="text-[10px] font-black uppercase tracking-widest text-slate-400 text-center">PwDs in Risk Zones</TableHead>
                                <TableHead className="text-[10px] font-black uppercase tracking-widest text-slate-400 text-center">High-Risk PwDs</TableHead>
                                <TableHead className="text-[10px] font-black uppercase tracking-widest text-slate-400 text-center">Accessible Shelters</TableHead>
                                <TableHead className="text-right px-10 text-[10px] font-black uppercase tracking-widest text-slate-400">Statutory Priority Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody className="divide-y divide-slate-100 font-sans">
                            <RiskSummaryRow
                                type="Flood / Inundation"
                                districts="75 / 75"
                                total="124,000"
                                highRisk="18,210"
                                shelters="2,840"
                                totalShelters="3,450"
                                gap="District Meerut: -12 Accessible Hubs"
                                direction="Issue statewide Evac Notice"
                                alert
                            />
                            <RiskSummaryRow
                                type="Cyclone / High Wind"
                                districts="14 / 14 (Coastal)"
                                total="42,000"
                                highRisk="5,420"
                                shelters="810"
                                totalShelters="940"
                                gap="South 24 Parganas: 450 unmapped PwDs"
                                direction="Direct DDMA for Scribe Sync"
                                warning
                            />
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>

            {/* FOOTER AUDIT STRIP */}
            <footer className="pt-12 border-t-2 border-slate-100 flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="flex items-center gap-4">
                    <BadgeCheck className="text-emerald-600 shadow-xl" size={24} />
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 leading-none">Consolidated Statewide Risk Sync Active • Aggregated from DDMA operational data</span>
                </div>
                <div className="flex gap-4">
                    <button className="text-[10px] font-black uppercase text-orange-600 hover:underline">Download Master Data ZIP</button>
                    <button className="text-[10px] font-black uppercase text-slate-400 hover:text-slate-900">Enforcement History</button>
                </div>
            </footer>
        </div>
    );
}

/* UI SUB-COMPONENTS */

function StatTile({ label, value, icon, color, alert }: any) {
    return (
        <div className={`group relative text-left p-8 rounded-[40px] overflow-hidden transition-all duration-500 h-44 flex flex-col justify-between shadow-md hover:shadow-xl hover:-translate-y-1 bg-gradient-to-br ${color} text-white border-t border-white/20`}>
            <div className="absolute inset-0 opacity-[0.08] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
            <div className="relative z-10 flex flex-col justify-between h-full">
                <div className="h-10 w-10 rounded-xl bg-white/20 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform">
                    {React.cloneElement(icon, { size: 22, className: "text-white" })}
                </div>
                <div>
                    <p className="text-3xl font-black tracking-tighter drop-shadow-sm">{value}</p>
                    <p className="text-[10px] font-black uppercase tracking-[0.1em] opacity-80 leading-tight mt-1">{label}</p>
                </div>
            </div>
            {alert && <div className="absolute top-6 right-6 h-2 w-2 rounded-full bg-white animate-ping" />}
        </div>
    )
}

function RiskSummaryRow({ type, districts, total, highRisk, shelters, totalShelters, gap, direction, alert, warning }: any) {
    const statusColor = alert ? 'bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.3)]' : warning ? 'bg-orange-500' : 'bg-green-500';
    return (
        <TableRow className="border-none hover:bg-slate-50 transition-all group cursor-pointer">
            <TableCell className="px-10 py-8">
                <div className="flex items-center gap-3">
                    <div className={`h-1.5 w-1.5 rounded-full shrink-0 ${statusColor}`} />
                    <span className="text-xs font-black text-slate-900 uppercase tracking-tight leading-none">{type}</span>
                </div>
            </TableCell>
            <TableCell className="text-center font-bold text-slate-400 text-[11px] uppercase tracking-widest">{districts}</TableCell>
            <TableCell className="text-center font-mono font-black text-blue-600 text-[12px]">{total}</TableCell>
            <TableCell className="text-center">
                <div className="flex flex-col items-center">
                    <span className={`text-[12px] font-mono font-black ${alert ? 'text-red-600 underline' : 'text-slate-900'}`}>{highRisk}</span>
                    <p className="text-[7px] font-black text-slate-300 uppercase tracking-widest mt-1">Severe / Multiple</p>
                </div>
            </TableCell>
            <TableCell className="text-center">
                <p className="text-[11px] font-black text-emerald-600">{shelters} <span className="text-slate-300 text-[9px] font-bold">/ {totalShelters}</span></p>
                <p className="text-[7px] font-black text-slate-300 uppercase mt-1 tracking-widest">Accessible Nodes</p>
            </TableCell>
            <TableCell className="text-right px-10">
                <div className="space-y-2">
                    <p className={`text-[10px] font-black uppercase leading-tight ${alert ? 'text-red-500' : 'text-slate-900'}`}>Gap: {gap}</p>
                    <div className="flex items-center justify-end gap-2 text-indigo-600">
                        <Gavel size={12} />
                        <p className="text-[9px] font-bold uppercase tracking-tighter italic">{direction}</p>
                    </div>
                </div>
            </TableCell>
        </TableRow>
    )
}