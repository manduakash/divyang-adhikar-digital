// app/dashboard/daegs/reports/directions-compliance/page.tsx
"use client";
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
    Table, TableBody, TableCell, TableHead, TableHeader, TableRow
} from "@/components/ui/table";
import {
    Globe, Printer, FileSpreadsheet, ArrowUpRight, 
    Download, Search, Filter, BadgeCheck, 
    History, Clock, AlertCircle, ShieldCheck, 
    Scale, Gavel, Landmark, FileText
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
    Select, SelectContent, SelectItem, SelectTrigger, SelectValue
} from "@/components/ui/select";

export default function DirectionsComplianceReport() {
    // Shared pattern constants
    const radialPattern = "radial-gradient(rgba(0,0,0,0.05) 1.5px, transparent 0)";
    const blueprintGrid = "linear-gradient(#e2e8f0 1px, transparent 1px), linear-gradient(90deg, #e2e8f0 1px, transparent 1px)";

    return (
        <div className="space-y-12 animate-in fade-in duration-1000 pb-20 font-sans selection:bg-indigo-100 bg-[#f8fafc] relative min-h-screen overflow-hidden">
            
            {/* BACKGROUND BLUEPRINT PATTERN */}
            <div className="absolute inset-0 z-0 opacity-[0.4] pointer-events-none" 
                 style={{ backgroundImage: blueprintGrid, backgroundSize: '40px 40px' }} />

            <div className="relative z-10 space-y-12 px-8 pt-8">

                {/* --- APEX HUB HEADER: MESH GRADIENT & RADIAL DOTS --- */}
                <Card className="rounded-[48px] border-none bg-gradient-to-br from-white via-indigo-50/50 to-slate-100 shadow-2xl relative overflow-hidden ring-1 ring-slate-200">
                    <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none" 
                         style={{ backgroundImage: radialPattern, backgroundSize: '16px 16px' }} />
                    
                    <CardContent className="p-12 relative z-10 flex flex-col xl:flex-row justify-between items-center gap-12">
                        <div className="space-y-6 flex-1 text-center xl:text-left">
                            <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-md text-indigo-700 px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.3em] border border-indigo-100 shadow-sm">
                                <Gavel size={16} className="text-indigo-500" /> Statutory Command Node
                            </div>
                            <h1 className="text-6xl font-black text-slate-900 tracking-tighter uppercase leading-[0.9]">
                                Directions Issued <br /> <span className="text-indigo-600 italic">& Compliance Report</span>
                            </h1>
                            <p className="text-xl font-bold text-slate-400 italic uppercase tracking-tighter">
                                National Audit Hub • Benchmarking Statutory Enforcement & State Accountability
                            </p>
                        </div>

                        <div className="flex flex-col gap-4 min-w-[320px]">
                            <Button className="h-16 px-10 rounded-[24px] bg-slate-950 text-white font-black uppercase tracking-widest text-[11px] shadow-2xl hover:bg-black transition-all group overflow-hidden relative">
                                <span className="relative z-10 flex items-center gap-3">
                                    <Printer size={18} /> Print Executive Summary <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            </Button>
                            <div className="flex gap-3">
                                <Button variant="outline" className="flex-1 h-12 rounded-xl border-2 border-slate-200 font-black text-[10px] uppercase bg-white/60 backdrop-blur-md gap-2 shadow-sm hover:bg-white transition-all">
                                    <FileSpreadsheet size={16} className="text-green-600" /> Export XLS
                                </Button>
                                <Button variant="outline" className="flex-1 h-12 rounded-xl border-2 border-slate-200 font-black text-[10px] uppercase bg-white/60 backdrop-blur-md gap-2 shadow-sm hover:bg-white transition-all">
                                    <Download size={16} className="text-blue-600" /> Export PDF
                                </Button>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* --- KPI OVERVIEW GRID: GRADIENT ACCENTS --- */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <KPICard label="Total Directions" value="1,240" icon={<FileText />} gradient="from-blue-500/10 to-transparent" />
                    <KPICard label="Verified Complied" value="982" icon={<ShieldCheck className="text-emerald-600" />} gradient="from-emerald-500/10 to-transparent" />
                    <KPICard label="Pending Resolution" value="142" icon={<Clock className="text-orange-600" />} gradient="from-orange-500/10 to-transparent" />
                    <KPICard label="Overdue Threshold" value="116" icon={<AlertCircle className="text-red-600" />} gradient="from-red-500/10 to-transparent" isCritical />
                </div>

                {/* --- DIRECTIONS REGISTRY: CARBON FIBER REGISTRY LAYOUT --- */}
                <Card className="rounded-[52px] border-none shadow-2xl overflow-hidden bg-white ring-1 ring-slate-200 min-h-[800px]">
                    <CardHeader className="p-0">
                        <div className="p-10 bg-gradient-to-br from-indigo-950 via-slate-900 to-indigo-900 text-white relative overflow-hidden">
                            {/* CARBON FIBER OVERLAY */}
                            <div className="absolute inset-0 opacity-30 pointer-events-none"
                                style={{ backgroundImage: `radial-gradient(black 2px, transparent 0)`, backgroundSize: '4px 4px' }} />

                            <div className="flex flex-col md:flex-row justify-between items-center gap-10 relative z-10">
                                <div className="flex items-center gap-5">
                                    <div className="h-12 w-12 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-xl">
                                        <Landmark size={24} className="text-blue-400" />
                                    </div>
                                    <div className="space-y-1">
                                        <CardTitle className="text-sm font-black uppercase tracking-[0.3em] leading-none italic uppercase">National Directions Ledger</CardTitle>
                                        <p className="text-[10px] font-bold text-indigo-300 uppercase tracking-widest leading-none">Quasi-Judicial Mandate Tracking & Statutory Oversight</p>
                                    </div>
                                </div>
                                <div className="relative group flex-1 max-w-md">
                                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-white/40" />
                                    <input className="w-full pl-11 pr-6 py-4 bg-white/5 border-2 border-white/10 rounded-2xl text-[10px] font-black uppercase outline-none text-white placeholder:text-white/20 focus:bg-white/10 transition-all shadow-inner" placeholder="Search Reference or State Authority..." />
                                </div>
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent className="p-0">
                        <Table>
                            <TableHeader className="bg-slate-50/80 font-sans border-b-2 border-slate-100">
                                <TableRow className="border-none">
                                    <TableHead className="px-10 py-8 text-[9px] font-black uppercase tracking-widest text-slate-400">Direction Ref No.</TableHead>
                                    <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400">Issued To (State / Authority)</TableHead>
                                    <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400">Subject</TableHead>
                                    <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400 text-center">Date Issued</TableHead>
                                    <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400 text-center">SLA Due Date</TableHead>
                                    <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400 text-center">Status</TableHead>
                                    <TableHead className="text-[9px] font-black uppercase tracking-widest text-center">Date of Comp.</TableHead>
                                    <TableHead className="text-right px-10 text-[9px] font-black uppercase tracking-widest text-slate-400">Remarks</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody className="divide-y divide-slate-100 font-sans">
                                <DirectionRow 
                                    refNo="#DIR-2024-9182" state="Uttar Pradesh" authority="PWD Secretariat" 
                                    subject="Accessibility Audit of District Hubs" issued="12 OCT 2024" 
                                    due="27 OCT 2024" status="COMPLIED" compDate="25 OCT 2024" 
                                    remarks="Fully Validated" success 
                                />
                                <DirectionRow 
                                    refNo="#DIR-2024-7742" state="Maharashtra" authority="Social Welfare Dept" 
                                    subject="Reservation Quota Backlog Clearance" issued="14 OCT 2024" 
                                    due="29 OCT 2024" status="PENDING" compDate="---" 
                                    remarks="Under Admin Review" warning 
                                />
                                <DirectionRow 
                                    refNo="#DIR-2024-4410" state="West Bengal" authority="Labour Commissioner" 
                                    subject="Special Court Infrastructure Sync" issued="02 OCT 2024" 
                                    due="16 OCT 2024" status="OVERDUE" compDate="---" 
                                    remarks="Show Cause Issued" alert 
                                />
                                <DirectionRow 
                                    refNo="#DIR-2024-2109" state="Karnataka" authority="District Magistrate" 
                                    subject="Legal Aid Outreach Mandate" issued="20 SEP 2024" 
                                    due="05 OCT 2024" status="PARTIAL" compDate="---" 
                                    remarks="Extension Requested" warning 
                                />
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>

                {/* --- FOOTER SYNC STATUS --- */}
                <footer className="pt-12 border-t-2 border-slate-200 flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex items-center gap-4">
                        <div className="h-12 w-12 rounded-full bg-white shadow-lg border border-slate-100 flex items-center justify-center">
                            <BadgeCheck className="text-indigo-600" size={24} />
                        </div>
                        <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 leading-none">Statutory National Node v5.2 • LIVE COMPLIANCE SYNC ACTIVE</span>
                    </div>
                    <div className="flex gap-4">
                        <Button variant="outline" className="h-14 px-8 rounded-2xl border-2 border-slate-200 font-bold bg-white gap-2 text-[10px] uppercase tracking-widest hover:bg-slate-50 shadow-sm"><History size={18} /> Audit History</Button>
                        <Button className="h-14 px-10 rounded-2xl bg-indigo-600 text-white font-black uppercase tracking-widest text-[10px] shadow-2xl gap-2 hover:bg-indigo-700 transition-all">
                            <Printer size={18} /> Export Index
                        </Button>
                    </div>
                </footer>
            </div>
        </div>
    );
}

/* UI SUB-COMPONENTS */

function KPICard({ label, value, icon, gradient, isCritical }: any) {
    return (
        <Card className="rounded-[36px] border-none bg-white p-1 shadow-xl shadow-slate-200/50 overflow-hidden group hover:-translate-y-1 transition-all relative ring-1 ring-slate-100">
            <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-50`} />
            <div className="relative z-10 p-8 space-y-4">
                <div className="h-12 w-12 rounded-2xl bg-white shadow-sm flex items-center justify-center border border-slate-50 group-hover:scale-110 transition-transform">
                    {icon}
                </div>
                <div className="space-y-1">
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{label}</p>
                    <p className={`text-4xl font-[1000] tracking-tighter ${isCritical ? 'text-red-600' : 'text-slate-900'}`}>{value}</p>
                </div>
            </div>
            {isCritical && <div className="absolute top-6 right-6 h-2 w-2 rounded-full bg-red-500 animate-ping" />}
        </Card>
    );
}

function DirectionRow({ refNo, state, authority, subject, issued, due, status, compDate, remarks, success, warning, alert }: any) {
    const statusDot = success ? 'bg-green-500' : alert ? 'bg-red-500 animate-pulse' : warning ? 'bg-orange-500' : 'bg-blue-500';
    
    return (
        <TableRow className="border-none hover:bg-slate-50/50 transition-all group cursor-default">
            <TableCell className="px-10 py-8 font-mono font-black text-indigo-700 text-xs tracking-tighter uppercase">{refNo}</TableCell>
            <TableCell>
                <div className="flex items-center gap-4">
                    <div className={`h-1.5 w-1.5 rounded-sm shrink-0 ${statusDot}`} />
                    <div className="flex flex-col">
                        <span className="text-sm font-black text-slate-950 uppercase tracking-tight">{state}</span>
                        <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">{authority}</span>
                    </div>
                </div>
            </TableCell>
            <TableCell className="max-w-[200px]">
                <span className="text-[10px] font-bold text-slate-500 uppercase leading-snug">{subject}</span>
            </TableCell>
            <TableCell className="text-center font-mono font-bold text-slate-400 text-xs uppercase">{issued}</TableCell>
            <TableCell className="text-center">
                <div className="flex flex-col items-center">
                    <span className={`text-xs font-mono font-black ${alert ? 'text-red-600 underline underline-offset-4 decoration-2' : 'text-slate-900'}`}>{due}</span>
                    {alert && <p className="text-[7px] font-black text-red-400 mt-1 uppercase tracking-widest animate-pulse">SLA Breach</p>}
                </div>
            </TableCell>
            <TableCell className="text-center">
                <Badge className={`border-2 font-black text-[8px] uppercase px-3 py-1 tracking-[0.2em] ${
                    success ? 'bg-emerald-50 text-green-700 border-green-200' : 
                    alert ? 'bg-red-50 text-red-700 border-red-200' : 
                    'bg-indigo-50 text-indigo-700 border-indigo-200'
                }`}>
                    {status}
                </Badge>
            </TableCell>
            <TableCell className="text-center font-mono font-black text-xs text-indigo-600">{compDate}</TableCell>
            <TableCell className="text-right px-10">
                <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest italic">{remarks}</span>
            </TableCell>
        </TableRow>
    );
}