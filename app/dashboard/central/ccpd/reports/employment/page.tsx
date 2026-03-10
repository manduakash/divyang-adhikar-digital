// app/dashboard/daegs/reports/national-employment/page.tsx
"use client";
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
    Table, TableBody, TableCell, TableHead, TableHeader, TableRow
} from "@/components/ui/table";
import {
    Globe, Printer, FileSpreadsheet, ArrowUpRight, 
    Download, Database, Search, Filter, 
    BadgeCheck, History, Briefcase, Users, 
    Target, ShieldCheck, Activity, Landmark,
    ArrowRightLeft, Percent
} from "lucide-react";

export default function NationalEmploymentRegistry() {
    // UI Aesthetic Constants
    const gridPattern = "linear-gradient(#e2e8f0 1px, transparent 1px), linear-gradient(90deg, #e2e8f0 1px, transparent 1px)";
    const dotPattern = "radial-gradient(rgba(0,0,0,0.08) 1.5px, transparent 0)";

    return (
        <div className="min-h-screen font-sans selection:bg-indigo-100 relative overflow-hidden pb-20">
            
            {/* BACKGROUND INFRASTRUCTURE (Blueprint Grid) */}
            <div className="absolute inset-0 z-0 opacity-[0.3] pointer-events-none" 
                 style={{ backgroundImage: gridPattern, backgroundSize: '48px 48px' }} />

            <div className="relative z-10 p-8 space-y-10 max-w-[1600px] mx-auto">

                {/* 1. APEX HUB HEADER: COMMAND & CONTROL */}
                <Card className="rounded-[40px] border-none bg-white/70 backdrop-blur-xl shadow-2xl shadow-slate-200/60 relative overflow-hidden ring-1 ring-white">
                    <CardContent className="p-12 flex flex-col lg:flex-row justify-between items-center gap-12">
                        <div className="space-y-6 flex-1 text-center lg:text-left">
                            <div className="inline-flex items-center gap-3 bg-indigo-950 text-indigo-100 px-5 py-2 rounded-full text-[9px] font-black uppercase tracking-[0.4em] shadow-lg">
                                <Globe size={14} className="animate-spin-slow text-blue-400" /> National Statutory Node
                            </div>
                            <h1 className="text-6xl font-[1000] text-slate-900 tracking-tighter uppercase leading-[0.9]">
                                PwD Employment <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-indigo-600 to-indigo-900 italic">Statutory Ledger</span>
                            </h1>
                            <p className="text-slate-400 font-bold uppercase tracking-widest text-[11px] flex items-center justify-center lg:justify-start gap-3">
                                <Database size={14} className="text-indigo-600" /> Benchmarking National Quota Compliance (RPwD ACT 2016)
                            </p>
                        </div>

                        <div className="flex flex-col gap-4 min-w-[320px]">
                            <Button className="h-16 px-10 rounded-2xl bg-slate-950 text-white font-black uppercase tracking-widest text-[11px] shadow-2xl hover:bg-black transition-all group overflow-hidden relative">
                                <span className="relative z-10 flex items-center gap-3">
                                    <Printer size={18} /> Print Audit Summary <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            </Button>
                            <div className="flex gap-3">
                                <Button variant="outline" className="flex-1 h-12 rounded-xl border-2 border-slate-200 font-black text-[10px] uppercase bg-white/50 backdrop-blur-md gap-2 shadow-sm hover:bg-white transition-all text-slate-600">
                                    <FileSpreadsheet size={16} className="text-green-600" /> XLS Export
                                </Button>
                                <Button variant="outline" className="flex-1 h-12 rounded-xl border-2 border-slate-200 font-black text-[10px] uppercase bg-white/50 backdrop-blur-md gap-2 shadow-sm hover:bg-white transition-all text-slate-600">
                                    <History size={16} className="text-blue-600" /> Log File
                                </Button>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* 2. KPI ANALYTICS GRID: MESH GRADIENT CARDS */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <KPIMetric label="Total National Workforce" value="6.42M" icon={<Users />} color="from-blue-600 to-indigo-800" />
                    <KPIMetric label="PwD Employees" value="264.8K" icon={<BadgeCheck />} color="from-emerald-500 to-teal-700" />
                    <KPIMetric label="Compliance Index" value="4.12%" icon={<Activity />} color="from-indigo-600 to-blue-600" isPercent />
                    <KPIMetric label="National Vacancies" value="14,240" icon={<Target />} color="from-orange-500 to-red-600" isAlert />
                </div>

                {/* 3. MAIN DATA REGISTRY: CARBON FIBER LEDGER */}
                <Card className="rounded-[48px] border-none shadow-3xl overflow-hidden bg-white ring-1 ring-slate-200">
                    <CardHeader className="p-0">
                        <div className="p-10 bg-gradient-to-br from-[#0f172a] via-[#1e1e3f] to-[#0f172a] text-white relative overflow-hidden">
                            {/* CARBON FIBER DOT OVERLAY */}
                            <div className="absolute inset-0 opacity-20 pointer-events-none"
                                style={{ backgroundImage: dotPattern, backgroundSize: '12px 12px' }} />
                            
                            <div className="flex flex-col md:flex-row justify-between items-center gap-10 relative z-10">
                                <div className="flex items-center gap-6">
                                    <div className="h-14 w-14 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-inner">
                                        <Landmark size={28} className="text-blue-400" />
                                    </div>
                                    <div className="space-y-1">
                                        <CardTitle className="text-sm font-black uppercase tracking-[0.4em] leading-none italic">Interstate Employment Ledger</CardTitle>
                                        <p className="text-[10px] font-bold text-blue-300 uppercase tracking-widest leading-none opacity-80">Consolidated Registry of State-Wise Recruitment Sync</p>
                                    </div>
                                </div>
                                <div className="relative group flex-1 max-w-lg">
                                    <Search className="absolute left-5 top-1/2 -translate-y-1/2 h-4 w-4 text-white/40" />
                                    <input className="w-full pl-14 pr-8 py-5 bg-white/5 border border-white/10 rounded-3xl text-[11px] font-bold uppercase outline-none text-white placeholder:text-white/20 focus:bg-white/10 focus:ring-2 focus:ring-blue-500/50 transition-all shadow-2xl" placeholder="Filter by State Hub, UT Node, or Statutory ID..." />
                                </div>
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent className="p-0">
                        <Table>
                            <TableHeader className="bg-slate-50/80 border-b border-slate-100">
                                <TableRow className="border-none">
                                    <TableHead className="px-12 py-8 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">State / Union Territory</TableHead>
                                    <TableHead className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 text-center">Total Employees</TableHead>
                                    <TableHead className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 text-center">PwD Count</TableHead>
                                    <TableHead className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 text-center">Compliance Gauge</TableHead>
                                    <TableHead className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 text-center">Identified</TableHead>
                                    <TableHead className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 text-center">Filled</TableHead>
                                    <TableHead className="text-right px-12 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Pending Actions</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody className="divide-y divide-slate-100">
                                <RegistryRow state="Uttar Pradesh" total="1.24M" pwd="51.2K" percent={4.12} identified="12,400" filled="11,200" pending="1,200" success />
                                <RegistryRow state="Maharashtra" total="980K" pwd="38.5K" percent={3.92} identified="14,100" filled="12,800" pending="1,300" warning />
                                <RegistryRow state="West Bengal" total="920K" pwd="37.4K" percent={4.08} identified="9,800" filled="9,100" pending="700" success />
                                <RegistryRow state="Karnataka" total="850K" pwd="21.2K" percent={2.49} identified="15,400" filled="4,200" pending="11,200" alert />
                                <RegistryRow state="Tamil Nadu" total="790K" pwd="32.8K" percent={4.15} identified="6,400" filled="6,100" pending="300" success />
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>

                {/* 4. FOOTER SYNC STATUS */}
                <footer className="pt-10 flex flex-col md:flex-row justify-between items-center gap-8 border-t border-slate-200/60">
                    <div className="flex items-center gap-4">
                        <div className="h-10 w-10 rounded-xl bg-white shadow-lg border border-slate-100 flex items-center justify-center">
                            <BadgeCheck className="text-indigo-600" size={22} />
                        </div>
                        <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 leading-none">
                            National Database Sync: <span className="text-emerald-600 font-black">Active</span> • 
                            Framework v2.4 Verified Across 36 States
                        </p>
                    </div>
                    <div className="flex gap-6">
                        <button className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-indigo-600 transition-colors">Audit Integrity</button>
                        <button className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-indigo-600 transition-colors">Privacy Node</button>
                    </div>
                </footer>
            </div>
        </div>
    );
}

/* UI SUB-COMPONENTS */

function KPIMetric({ label, value, icon, color, isAlert, isPercent }: any) {
    return (
        <Card className="rounded-[36px] border-none bg-white p-1 shadow-xl shadow-slate-200/50 group hover:-translate-y-1 transition-all overflow-hidden relative ring-1 ring-slate-100">
            <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-[0.03]`} />
            <div className="relative z-10 p-8 space-y-4">
                <div className="h-12 w-12 rounded-2xl bg-slate-50 shadow-inner flex items-center justify-center border border-slate-100 group-hover:scale-110 transition-transform">
                    {React.cloneElement(icon, { size: 20, className: isAlert ? 'text-red-600' : 'text-indigo-600' })}
                </div>
                <div className="space-y-1">
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">{label}</p>
                    <p className={`text-4xl font-[1000] tracking-tighter ${isAlert ? 'text-red-600' : 'text-slate-900'}`}>{value}</p>
                </div>
            </div>
            {isAlert && <div className="absolute top-6 right-6 h-2 w-2 rounded-full bg-red-500 animate-ping" />}
        </Card>
    );
}

function RegistryRow({ state, total, pwd, percent, identified, filled, pending, success, warning, alert }: any) {
    const isUnderThreshold = percent < 4.0;
    const statusColor = success ? 'bg-emerald-500' : alert ? 'bg-red-500 animate-pulse' : 'bg-orange-500';

    return (
        <TableRow className="border-none hover:bg-slate-50/50 transition-all group cursor-default">
            <TableCell className="px-12 py-8">
                <div className="flex items-center gap-5">
                    <div className={`h-2.5 w-2.5 rounded-full ${statusColor} shadow-lg shadow-current/20`} />
                    <span className="text-sm font-black text-slate-950 uppercase tracking-tight italic group-hover:translate-x-1 transition-transform">{state}</span>
                </div>
            </TableCell>
            <TableCell className="text-center font-mono font-bold text-slate-400 text-xs uppercase tracking-tighter">{total}</TableCell>
            <TableCell className="text-center font-mono font-black text-indigo-700 text-sm tracking-tighter">{pwd}</TableCell>
            <TableCell>
                <div className="flex flex-col items-center gap-2">
                    <div className="w-32 h-1.5 bg-slate-100 rounded-full overflow-hidden border border-slate-200">
                        <div 
                            className={`h-full transition-all duration-1000 ${isUnderThreshold ? 'bg-gradient-to-r from-red-500 to-orange-400' : 'bg-gradient-to-r from-emerald-500 to-blue-500'}`} 
                            style={{ width: `${Math.min((percent / 5) * 100, 100)}%` }} 
                        />
                    </div>
                    <span className={`text-[10px] font-mono font-black ${isUnderThreshold ? 'text-red-600 underline underline-offset-4 decoration-2' : 'text-emerald-600'}`}>{percent}%</span>
                </div>
            </TableCell>
            <TableCell className="text-center font-mono font-bold text-slate-500 text-xs">{identified}</TableCell>
            <TableCell className="text-center font-mono font-black text-slate-900 text-xs">{filled}</TableCell>
            <TableCell className="text-right px-12">
                <div className="flex flex-col items-end">
                    <span className={`text-sm font-mono font-black ${alert ? 'text-red-600' : 'text-slate-950'}`}>{pending}</span>
                    <p className={`text-[7px] font-black uppercase tracking-widest mt-1 ${alert ? 'text-red-400' : 'text-slate-300'}`}>
                        {alert ? 'CRITICAL DEFICIT' : 'SLA VALID'}
                    </p>
                </div>
            </TableCell>
        </TableRow>
    );
}