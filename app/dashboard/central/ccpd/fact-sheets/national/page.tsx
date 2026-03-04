// app/dashboard/ccpd/fact-sheets/national/page.tsx
"use client";
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
    Table, TableBody, TableCell, TableHead, TableHeader, TableRow
} from "@/components/ui/table";
import {
    Globe, ShieldCheck, BadgeCheck, Landmark,
    Map, Activity, CheckCircle2, AlertTriangle,
    Download, Printer, FileText, Share2,
    Search, Filter, Sparkles, TrendingUp,
    History, Clock, Timer, Users,
    Navigation, Radio, Zap,
    ArrowUpRight,
    FileSpreadsheet
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
    Select, SelectContent, SelectItem, SelectTrigger, SelectValue
} from "@/components/ui/select";

export default function NationalFactSheet() {
    return (
        <div className="space-y-12 animate-in fade-in duration-1000 pb-20 font-sans selection:bg-indigo-100 bg-[#fbfcfd]">

            {/* APEX IDENTITY HUB - GRADIENT HEADER WITH CARBON FIBER */}
            <Card className="rounded-[48px] border-2 border-slate-200 bg-white shadow-2xl relative overflow-hidden">

                <div className="bg-white rounded-[44px] p-12 relative z-10 flex flex-col xl:flex-row justify-between items-end gap-12">
                    <div className="flex-1 space-y-8">
                        <div className="flex items-center gap-6 text-center xl:text-left">
                            <div className="h-20 w-20 bg-gradient-to-br from-indigo-600 via-blue-600 to-purple-600 rounded-3xl flex items-center justify-center text-white shadow-xl shadow-indigo-500/20 transition-transform hover:scale-110">
                                <Globe size={38} />
                            </div>
                            <div className="space-y-3 flex-1">
                                <p className="text-[10px] font-black uppercase text-indigo-600 tracking-[0.3em] ml-1 leading-none uppercase">Statutory National Node</p>
                                <h1 className="text-5xl font-black text-slate-900 tracking-tighter uppercase leading-none">National Fact Sheet</h1>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-[9px] font-black uppercase text-slate-400 ml-1 tracking-widest leading-none">Reporting Period Selection</label>
                                <Select defaultValue="fy24">
                                    <SelectTrigger className="w-full h-16 py-6 border-2 border-slate-200 bg-slate-50 rounded-2xl px-6 font-black text-slate-900 uppercase text-[10px] shadow-inner focus:ring-2 focus:ring-indigo-500">
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent className="rounded-2xl border-2 border-slate-200 shadow-2xl">
                                        <SelectItem value="fy24" className="font-black py-4 uppercase">Last 180 Days Aggregate</SelectItem>
                                        <SelectItem value="fy23" className="font-black py-4 uppercase">Last 360 Days Aggregate</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="space-y-2">
                                <label className="text-[9px] font-black uppercase text-slate-400 ml-1 tracking-widest leading-none">Administrative Context</label>
                                <Select defaultValue="india">
                                    <SelectTrigger className="w-full h-16 py-6 border-2 border-slate-200 bg-slate-50 rounded-2xl px-6 font-black text-slate-900 uppercase text-[10px] shadow-inner focus:ring-2 focus:ring-indigo-500">
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent className="rounded-2xl border-2 border-slate-200 shadow-2xl">
                                        <SelectItem value="india" className="font-black py-4 uppercase">Republic of India (Pan-State)</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4 min-w-[350px] relative z-10">
                        <div className="bg-slate-950 border-t-2 border-white/10 p-8 rounded-[40px] shadow-2xl flex flex-col items-center text-center group">

                            <div className="flex items-center justify-center gap-3 mb-2 relative z-10">
                                <Radio size={16} className="text-emerald-500 animate-pulse" />
                                <p className="text-[9px] font-black uppercase text-indigo-400 tracking-widest leading-none">Last National Data Sync</p>
                            </div>
                            <p className="text-2xl font-black text-white uppercase tracking-tighter relative z-10">14 OCT 2024, 10:42 AM</p>
                        </div>
                        <div className="flex gap-3">
                            <Button variant="outline" className="flex-1 h-14 rounded-2xl border-2 border-slate-200 font-black text-[10px] uppercase bg-white gap-2 shadow-sm hover:bg-slate-50"><FileSpreadsheet size={18} className="text-green-600" /> State XLS</Button>
                            <Button className="flex-1 h-14 rounded-2xl bg-slate-950 text-white font-black uppercase tracking-widest text-[10px] shadow-xl hover:bg-black transition-all gap-2 group border-t border-white/10">
                                <Printer size={18} /> Print Brief <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </Button>
                        </div>
                    </div>
                </div>
            </Card>

            {/* QUICK REFERENCE METRIC GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <SnapshotStat title="India-wide Overview" label="Total PwD Registry" val="26.8M" icon={<Users />} gradient="from-blue-600 to-indigo-700" />
                <SnapshotStat title="National Onboarding" label="States & UTs Linked" val="36 / 36" icon={<Globe />} gradient="from-emerald-600 to-teal-700" />
                <SnapshotStat title="Compliance Health" label="Avg State Score" val="82.4%" icon={<ShieldCheck />} gradient="from-purple-600 to-indigo-800" />
                <SnapshotStat title="Statutory Urgency" label="Pending Grievances" val="1.2K" icon={<AlertTriangle />} gradient="from-red-600 to-rose-700" alert />
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-12 gap-10">

                {/* PRIMARY STATUTORY LEDGER (8 COLS) */}
                <div className="xl:col-span-8">
                    <Card className="rounded-[52px] border-2 border-slate-100 shadow-sm overflow-hidden bg-white min-h-[800px]">
                        <CardHeader className="p-0">
                            <div className="p-10 bg-gradient-to-r from-slate-800 via-indigo-950 to-slate-900 text-white relative overflow-hidden">
                                {/* CARBON FIBER HEADER TEXTURE */}
                                <div className="absolute inset-0 opacity-20 pointer-events-none"
                                    style={{ backgroundImage: `radial-gradient(black 2px, transparent 0)`, backgroundSize: '4px 4px' }} />
                                <div className="flex flex-col md:flex-row justify-between items-center gap-10 relative z-10">
                                    <div className="flex items-center gap-5">
                                        <div className="h-12 w-12 rounded-2xl bg-white/10 backdrop-blur-md border-2 border-white/10 flex items-center justify-center shadow-xl">
                                            <Landmark size={24} className="text-blue-400" />
                                        </div>
                                        <div className="space-y-1">
                                            <CardTitle className="text-xl font-black uppercase tracking-tight leading-none uppercase">State-wise PwD Comparative Ledger</CardTitle>
                                            <p className="text-[10px] font-bold text-indigo-300 uppercase tracking-widest leading-none">Auto-generated from State and District data nodes</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent className="p-0">
                            <Table>
                                <TableHeader className="bg-slate-50/80 font-sans">
                                    <TableRow className="border-b-2 border-slate-100">
                                        <TableHead className="px-10 py-8 text-[10px] font-black uppercase tracking-widest text-slate-400">State / Union Territory</TableHead>
                                        <TableHead className="text-[10px] font-black uppercase tracking-widest text-slate-400 text-center">Inclusion Score</TableHead>
                                        <TableHead className="text-[10px] font-black uppercase tracking-widest text-slate-400 text-center">Grievance Rate</TableHead>
                                        <TableHead className="text-[10px] font-black uppercase tracking-widest text-slate-400 text-center">Employment %</TableHead>
                                        <TableHead className="text-right px-10 text-[10px] font-black uppercase tracking-widest text-slate-400">Statutory Status</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody className="divide-y divide-slate-100 font-sans">
                                    <NationalRegistryRow name="Uttar Pradesh Hub" score="88.2%" grv="94%" emp="4.2%" status="COMPLIANT" success />
                                    <NationalRegistryRow name="Maharashtra Hub" score="81.5%" grv="82%" emp="3.9%" status="PENDING AUDIT" warning />
                                    <NationalRegistryRow name="West Bengal Node" score="92.4%" grv="98%" emp="4.1%" status="COMPLIANT" success />
                                    <NationalRegistryRow name="Karnataka Node" score="45.0%" grv="52%" emp="2.8%" status="CRITICAL DEFAULT" alert />
                                    <NationalRegistryRow name="Tamil Nadu Hub" score="89.1%" grv="91%" emp="4.0%" status="COMPLIANT" success />
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>
                </div>

                {/* DECISION SIDEBAR (4 COLS) */}
                <div className="xl:col-span-4 space-y-8 sticky top-28 h-fit">

                    {/* QUICK REFERENCE NOTE - AMBER GRADIENT */}
                    <Card className="rounded-[44px] border-none bg-gradient-to-br from-orange-500 via-amber-600 to-orange-700 text-white p-10 shadow-2xl relative overflow-hidden group">
                        <div className="absolute inset-0 opacity-15 pointer-events-none"
                            style={{ backgroundImage: `radial-gradient(black 2px, transparent 0)`, backgroundSize: '4px 4px' }} />

                        <div className="relative z-10 space-y-8">
                            <div className="flex items-center gap-3">
                                <Sparkles className="text-orange-100 animate-pulse" />
                                <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-orange-200 leading-none">Decision-Ready Insight</h3>
                            </div>
                            <p className="text-lg font-bold leading-relaxed uppercase tracking-tighter italic">
                                Provides one-page national snapshots for quick reference and decision-making.
                            </p>
                            <div className="pt-6 border-t border-white/10 space-y-6">
                                <SidebarMetric label="State Default Rate" val="14.2%" />
                                <SidebarMetric label="National Appeal Load" val="42 Files" />
                            </div>
                            <Button className="w-full h-14 bg-slate-950 text-white rounded-2xl font-black uppercase tracking-widest text-[9px] shadow-xl hover:bg-black transition-all">Issue National Directive</Button>
                        </div>
                    </Card>

                    <div className="p-8 bg-blue-50 rounded-[40px] border-2 border-blue-100 flex gap-6 shadow-sm">
                        <BadgeCheck className="text-blue-600 shrink-0" size={28} />
                        <p className="text-[10px] font-bold text-blue-900 leading-relaxed uppercase tracking-widest">
                            All fact sheet data is auto-generated from State and District data nodes via the Unified DAEGS Backbone.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
}

/* UI SUB-COMPONENTS */

function SnapshotStat({ title, label, val, icon, gradient, alert }: any) {
    return (
        <div className={`group relative p-8 rounded-[44px] overflow-hidden transition-all duration-700 h-52 flex flex-col justify-between shadow-lg hover:shadow-2xl hover:-translate-y-2 bg-gradient-to-br ${gradient} text-white border-t-2 border-white/20`}>
            <div className="absolute inset-0 opacity-10 pointer-events-none"
                style={{ backgroundImage: `radial-gradient(black 2px, transparent 0)`, backgroundSize: '4px 4px' }} />

            <div className="relative z-10 flex flex-col justify-between h-full">
                <div className="h-12 w-12 rounded-2xl bg-white/20 backdrop-blur-md border-2 border-white/20 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    {React.cloneElement(icon, { size: 24, strokeWidth: 3, className: "text-white" })}
                </div>
                <div className='mt-2'>
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] opacity-60 leading-none mb-2">{title}</p>
                    <p className="text-4xl font-black tracking-tighter drop-shadow-md leading-none">{val}</p>
                    <p className="text-[10px] font-black uppercase tracking-widest opacity-80 mt-3">{label}</p>
                </div>
            </div>
            {alert && <div className="absolute top-8 right-8 h-2 w-2 rounded-full bg-white animate-ping shadow-[0_0_15px_white]" />}
        </div>
    )
}

function NationalRegistryRow({ name, score, grv, emp, status, success, warning, alert }: any) {
    const statusColor = success ? 'bg-green-600 text-white' : alert ? 'bg-red-600 text-white animate-pulse' : 'bg-orange-500 text-white';
    return (
        <TableRow className="border-none hover:bg-slate-50 transition-all group cursor-default font-sans">
            <TableCell className="px-10 py-8">
                <div className="flex items-center gap-4">
                    <div className={`h-2 w-2 rounded-full shrink-0 ${success ? 'bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.4)]' : 'bg-red-500 animate-pulse'}`} />
                    <span className="text-sm font-black text-slate-950 uppercase tracking-tight leading-none">{name}</span>
                </div>
            </TableCell>
            <TableCell className="text-center font-mono font-black text-indigo-700 text-xs">{score}</TableCell>
            <TableCell className="text-center font-mono font-bold text-slate-600 text-xs">{grv}</TableCell>
            <TableCell className="text-center font-mono font-bold text-slate-600 text-xs">{emp}</TableCell>
            <TableCell className="text-right px-10">
                <Badge className={`rounded-full px-5 py-2 text-[8px] font-black uppercase border-none shadow-lg tracking-widest ${statusColor}`}>
                    {status}
                </Badge>
            </TableCell>
        </TableRow>
    )
}

function SidebarMetric({ label, val }: any) {
    return (
        <div className="flex justify-between items-end group cursor-default">
            <span className="text-[10px] font-black text-orange-200 uppercase tracking-widest group-hover:text-white transition-colors">{label}</span>
            <span className="text-2xl font-black text-white tracking-tighter">{val}</span>
        </div>
    )
}