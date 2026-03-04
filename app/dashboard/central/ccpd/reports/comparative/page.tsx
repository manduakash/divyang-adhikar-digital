// app/dashboard/ccpd/reports/state-comparative/page.tsx
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
    Search, Filter, Printer, FileSpreadsheet,
    ArrowUpRight, Zap, History, Scale,
    TrendingUp, Users, MessageSquare, Gavel,
    Timer, Briefcase, Download, BarChart3
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
    Select, SelectContent, SelectItem, SelectTrigger, SelectValue
} from "@/components/ui/select";

export default function StateComparativeReport() {
    return (
        <div className="space-y-12 animate-in fade-in duration-1000 pb-20 font-sans selection:bg-indigo-100 bg-[#fbfcfd]">

            {/* APEX HUB HEADER - GRADIENT + CARBON FIBER */}
            <Card className="rounded-[48px] border-2 border-slate-100 bg-white shadow-2xl relative overflow-hidden">
                {/* 4PX CARBON FIBER TEXTURE OVERLAY */}

                <CardContent className="p-12 relative z-10 flex flex-col xl:flex-row justify-between items-center gap-12">
                    <div className="space-y-6 flex-1 text-center xl:text-left">
                        <div className="inline-flex items-center gap-3 bg-indigo-50 text-indigo-700 px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.3em] border-2 border-indigo-100">
                            <Globe size={16} className="animate-spin-slow" /> Interstate Performance Node
                        </div>
                        <h1 className="text-6xl font-black text-slate-900 tracking-tighter uppercase leading-[0.9]">
                            State-wise PwD <br /> <span className="">Comparative Ledger</span>
                        </h1>
                        <p className="text-xl font-bold text-slate-500 italic uppercase tracking-tighter">National Audit Hub • Benchmarking Statutory Enforcement Across India</p>
                    </div>

                    <div className="flex flex-col gap-4 min-w-[320px]">
                        <Button className="h-16 px-10 rounded-[24px] bg-slate-950 text-white font-black uppercase tracking-widest text-[11px] shadow-2xl hover:bg-black transition-all group">
                            <Printer size={18} /> Print Executive Summary <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </Button>
                        <div className="flex gap-3">
                            <Button variant="outline" className="flex-1 h-12 rounded-xl border-2 border-slate-200 font-black text-[10px] uppercase bg-white gap-2 shadow-sm hover:bg-slate-50 transition-all"><FileSpreadsheet size={16} className="text-green-600" /> Export XLS</Button>
                            <Button variant="outline" className="flex-1 h-12 rounded-xl border-2 border-slate-200 font-black text-[10px] uppercase bg-white gap-2 shadow-sm hover:bg-slate-50 transition-all"><Download size={16} className="text-blue-600" /> Download ZIP</Button>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* PARAMETRIC SELECTORS - VISIBLE 2PX BORDERS */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase text-slate-400 ml-1 tracking-widest leading-none">Regional Hub Context</label>
                    <Select defaultValue="all">
                        <SelectTrigger className="w-full h-16 py-6 border-2 border-slate-200 bg-white rounded-2xl px-6 font-black text-slate-900 uppercase text-[10px] focus:ring-2 focus:ring-indigo-500">
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="rounded-2xl border-2 border-slate-200 shadow-2xl">
                            <SelectItem value="all" className="font-black py-4 uppercase">All India States & UTs</SelectItem>
                            <SelectItem value="north" className="font-black py-4 uppercase">Northern Command Node</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase text-slate-400 ml-1 tracking-widest leading-none">Aggregation Period</label>
                    <Select defaultValue="q3">
                        <SelectTrigger className="w-full h-16 py-6 border-2 border-slate-200 bg-white rounded-2xl px-6 font-black text-slate-900 uppercase text-[10px] focus:ring-2 focus:ring-indigo-500">
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="rounded-2xl border-2 border-slate-200 shadow-2xl">
                            <SelectItem value="q3" className="font-black py-4 uppercase">Current Quarter: Oct-Dec 2024</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div className="flex items-end">
                    <Button className="w-full h-16 bg-blue-600 text-white rounded-2xl font-black uppercase tracking-widest text-[11px] shadow-xl hover:bg-blue-700 transition-all gap-3">
                        <Filter size={18} /> Execute Comparative Audit
                    </Button>
                </div>
            </div>

            {/* COMPARATIVE LEDGER - CARBON FIBER TABLE HEADER */}
            <Card className="rounded-[52px] border-2 border-slate-200 shadow-2xl overflow-hidden bg-white min-h-[850px]">
                <CardHeader className="p-0">
                    <div className="p-10 bg-gradient-to-r from-indigo-800 via-indigo-900 to-indigo-900 text-white relative overflow-hidden">
                        {/* CARBON FIBER TEXTURE OVERLAY */}
                        <div className="absolute inset-0 opacity-20 pointer-events-none"
                            style={{ backgroundImage: `radial-gradient(black 2px, transparent 0)`, backgroundSize: '4px 4px' }} />

                        <div className="flex flex-col md:flex-row justify-between items-center gap-10 relative z-10">
                            <div className="flex items-center gap-5">
                                <div className="h-12 w-12 rounded-2xl bg-white/10 backdrop-blur-md border-2 border-white/20 flex items-center justify-center shadow-xl">
                                    <BarChart3 size={24} className="text-blue-400" />
                                </div>
                                <div className="space-y-1">
                                    <CardTitle className="text-sm font-black uppercase tracking-[0.3em] leading-none uppercase">NATIONAL PWD COMPARATIVE REGISTRY</CardTitle>
                                    <p className="text-[10px] font-bold text-indigo-300 uppercase tracking-widest leading-none">Inter-State Multi-Sector Performance Snapshot</p>
                                </div>
                            </div>
                            <div className="relative group flex-1 max-w-md">
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-white/40" />
                                <input className="w-full pl-11 pr-6 py-4 bg-white/5 border-2 border-white/10 rounded-2xl text-[10px] font-black uppercase outline-none text-white placeholder:text-white/20 focus:bg-white/10 transition-all shadow-inner" placeholder="Search State Hub Node..." />
                            </div>
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="p-0">
                    <Table>
                        <TableHeader className="bg-slate-50/80 font-sans border-b-2 border-slate-100">
                            <TableRow className="border-none">
                                <TableHead className="px-10 py-8 text-[9px] font-black uppercase tracking-widest text-slate-400">State / UT</TableHead>
                                <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400 text-center">Total PwDs</TableHead>
                                <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400 text-center">Grievances Received</TableHead>
                                <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400 text-center">Grievances Disposed (%)</TableHead>
                                <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400 text-center">Directions Issued</TableHead>
                                <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400 text-center">Directions Complied (%)</TableHead>
                                <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400 text-center">Accessibility %</TableHead>
                                <TableHead className="text-right px-10 text-[9px] font-black uppercase tracking-widest text-slate-400">Employment %</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody className="divide-y divide-slate-100 font-sans">
                            <ComparativeRow name="Uttar Pradesh" total="1.24M" grievances="14.2K" disposal="92.4%" directions="142" complied="88.2%" access="84%" employment="4.12%" success />
                            <ComparativeRow name="Maharashtra" total="980K" grievances="11.5K" disposal="81.5%" directions="98" complied="74.0%" access="68%" employment="3.92%" warning />
                            <ComparativeRow name="West Bengal" total="920K" grievances="10.8K" disposal="94.1%" directions="112" complied="91.5%" access="92%" employment="4.08%" success />
                            <ComparativeRow name="Karnataka" total="450K" grievances="8.4K" disposal="45.0%" directions="42" complied="32.0%" access="42%" employment="2.84%" alert />
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>

            {/* FOOTER AUDIT STRIP */}
            <footer className="pt-12 border-t-2 border-slate-100 flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="flex items-center gap-4">
                    <BadgeCheck className="text-indigo-600 shadow-xl" size={24} />
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 leading-none uppercase">Statutory National Node v5.2 • Consolidated Sync Verified Across 36 State Hubs</span>
                </div>
                <div className="flex gap-4">
                    <Button variant="outline" className="h-14 px-8 rounded-2xl border-2 border-slate-200 font-bold bg-white gap-2 text-[10px] uppercase tracking-widest hover:bg-slate-50 transition-all"><History size={18} /> Review Audit History</Button>
                    <Button className="h-14 px-10 rounded-2xl bg-slate-950 text-white font-black uppercase tracking-widest text-[10px] shadow-2xl gap-2 hover:bg-black transition-all">
                        <Printer size={18} /> Export Comparative Index
                    </Button>
                </div>
            </footer>
        </div>
    );
}

/* UI SUB-COMPONENTS */

function ComparativeRow({ name, total, grievances, disposal, directions, complied, access, employment, success, warning, alert }: any) {
    const statusColor = success ? 'bg-green-500 shadow-green-200' : alert ? 'bg-red-500 animate-pulse shadow-red-200' : 'bg-orange-500 shadow-orange-200';
    return (
        <TableRow className="border-none hover:bg-slate-50 transition-all group cursor-default">
            <TableCell className="px-10 py-8 text-left">
                <div className="flex items-center gap-4">
                    <div className={`h-1.5 w-1.5 rounded-full shrink-0 ${statusColor}`} />
                    <span className="text-sm font-black text-slate-950 uppercase tracking-tight leading-none">{name}</span>
                </div>
            </TableCell>
            <TableCell className="text-center font-mono font-black text-indigo-700 text-xs uppercase">{total}</TableCell>
            <TableCell className="text-center font-mono font-bold text-slate-600 text-xs">{grievances}</TableCell>
            <TableCell className="text-center">
                <Badge className={`border-2 font-black text-[9px] uppercase px-3 py-1 ${alert ? 'bg-red-50 text-red-700 border-red-200' : 'bg-emerald-50 text-green-700 border-green-200'}`}>
                    {disposal}
                </Badge>
            </TableCell>
            <TableCell className="text-center font-mono font-bold text-slate-600 text-xs">{directions}</TableCell>
            <TableCell className="text-center font-mono font-black text-slate-900 text-xs">{complied}</TableCell>
            <TableCell className="text-center">
                <span className={`text-[11px] font-mono font-black ${alert ? 'text-red-600 underline decoration-red-100 decoration-2' : 'text-slate-900'}`}>{access}</span>
            </TableCell>
            <TableCell className="text-right px-10">
                <div className="flex flex-col items-end gap-1">
                    <span className={`text-[12px] font-mono font-black ${employment.includes('2.') ? 'text-red-600 underline' : 'text-indigo-600'}`}>{employment}</span>
                    <p className={`text-[7px] font-black uppercase tracking-widest ${employment.includes('2.') ? 'text-red-400' : 'text-slate-300'}`}>{employment.includes('2.') ? 'MANDATE FAILURE' : 'COMPLIANT'}</p>
                </div>
            </TableCell>
        </TableRow>
    )
}