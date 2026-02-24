// app/dashboard/scpd/court-proceedings/page.tsx
"use client";
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
    Scale, Gavel, Calendar, Clock, AlertCircle,
    CheckCircle2, FileWarning, History, ArrowUpRight,
    Filter, Search, ShieldAlert, Timer,
    Download, Printer, FileText, Landmark,
    MapPin, Building2, BadgeCheck, FileCheck,
    ChevronRight, Sparkles, Plus, Eye
} from "lucide-react";
import {
    Table, TableBody, TableCell, TableHead, TableHeader, TableRow
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

export default function CourtProceedingsHub() {

    // Section A3.6 Mandated Aggregates for Case Calendar & Alerts
    const judicialStats = {
        totalStateMatters: "114",
        hearingsThisWeek: "08",
        compliancePending: "24",
        thresholdBreached: "06"
    };

    return (
        <div className="space-y-10 animate-in fade-in duration-700 pb-20 font-sans">

            {/* 1. APEX JUDICIAL HEADER */}
            <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-6 mb-10 bg-white p-10 rounded-[40px] border border-slate-200 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 p-10 opacity-[0.03] pointer-events-none">
                    <Scale size={180} className="text-indigo-600" />
                </div>
                <div className="space-y-2 relative z-10">
                    <div className="flex items-center gap-2 text-indigo-600 font-black uppercase text-[10px] tracking-[0.2em]">
                        <Gavel size={14} /> Statutory Oversight / A3.6 Court Proceedings
                    </div>
                    <h1 className="text-4xl font-black text-slate-900 tracking-tighter uppercase leading-none">Judicial Oversight Hub</h1>
                    <p className="text-slate-500 font-medium italic">Monitoring Statewide PwD Litigation, Stage Movement & Court Compliance.</p>
                </div>
                <div className="flex gap-4 relative z-10">
                    <Button variant="outline" className="h-16 px-8 rounded-3xl border-slate-200 font-black uppercase tracking-widest text-[10px] bg-white hover:bg-slate-50 shadow-xl gap-2">
                        <Calendar size={18} /> Case Calendar
                    </Button>
                    <Button className="h-16 px-10 rounded-3xl bg-indigo-900 text-white font-black uppercase tracking-widest text-[10px] shadow-2xl hover:bg-black transition-all gap-2">
                        <Plus size={18} /> Record New Proceeding
                    </Button>
                </div>
            </div>

            {/* 2. STATUTORY KPI TILES (Case & Compliance Monitoring) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatTile label="Active State Matters" value={judicialStats.totalStateMatters} icon={<Scale />} color="from-slate-800 to-slate-950" />
                <StatTile label="Hearings Scheduled (7d)" value={judicialStats.hearingsThisWeek} icon={<Calendar />} color="from-blue-600 via-blue-700 to-indigo-900" />
                <StatTile label="Compliance Overdue" value={judicialStats.thresholdBreached} icon={<AlertCircle />} color="from-red-600 via-rose-700 to-red-800" alert />
                <div className="bg-white border-2 border-indigo-100 rounded-[32px] p-6 shadow-sm flex flex-col justify-center relative overflow-hidden group">
                    <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/topography.png')]" />
                    <p className="text-[9px] font-black uppercase tracking-widest text-indigo-400 mb-1">State Disposal Efficiency</p>
                    <p className="text-4xl font-black text-indigo-700 tracking-tighter group-hover:scale-105 transition-transform">68.4%</p>
                    <div className="w-full h-1.5 bg-slate-100 rounded-full mt-4 overflow-hidden">
                        <div className="h-full bg-indigo-600" style={{ width: '68%' }} />
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-start">

                {/* 3. CASE REGISTRY (Section A3.6 Mandated Data Capture) */}
                <div className="xl:col-span-8">
                    <Card className="rounded-[40px] border-slate-200 shadow-sm overflow-hidden bg-white min-h-[700px]">
                        <CardHeader className="p-8 border-b border-slate-50 bg-slate-50/30 flex flex-row justify-between items-center">
                            <CardTitle className="text-sm font-black uppercase tracking-widest text-slate-400">A3.6 Statutory Case Registry</CardTitle>
                            <div className="flex gap-3">
                                <div className="relative group">
                                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-300 group-focus-within:text-indigo-600" />
                                    <input className="pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-2xl text-[10px] font-bold outline-none w-64 shadow-inner" placeholder="Search Reference Number..." />
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent className="p-0">
                            <Table>
                                <TableHeader className="bg-white">
                                    <TableRow className="border-slate-100">
                                        <TableHead className="px-8 py-6 text-[9px] font-black uppercase tracking-widest text-slate-400 w-[180px]">Case Reference</TableHead>
                                        <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400">Respondent / District</TableHead>
                                        <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400 text-center">Last Hearing</TableHead>
                                        <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400 text-center">Next Hearing</TableHead>
                                        <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400 text-center">Stage</TableHead>
                                        <TableHead className="text-right px-8 text-[9px] font-black uppercase tracking-widest text-slate-400">Compliance</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody className="divide-y divide-slate-50">
                                    <CaseRow
                                        id="CP/STATE/2024/09"
                                        target="DM Lucknow"
                                        district="Lucknow"
                                        last="12 Oct 2024"
                                        next="24 Oct 2024"
                                        stage="Trial / Evidence"
                                        status="PENDING"
                                    />
                                    <CaseRow
                                        id="CP/STATE/2024/42"
                                        target="Secondary Edu Dept"
                                        district="Meerut"
                                        last="05 Oct 2024"
                                        next="18 Oct 2024"
                                        stage="Argument on Charge"
                                        status="OVERDUE"
                                        alert
                                    />
                                    <CaseRow
                                        id="CP/STATE/2024/81"
                                        target="Regional Health Hub"
                                        district="Varanasi"
                                        last="10 Oct 2024"
                                        next="30 Oct 2024"
                                        stage="Filing / Notice"
                                        status="COMPLIED"
                                        success
                                    />
                                    <CaseRow
                                        id="CP/STATE/2023/12"
                                        target="Pvt IT Park Ltd"
                                        district="Ghaziabad"
                                        last="14 Sep 2024"
                                        next="15 Nov 2024"
                                        stage="Final Judgement"
                                        status="PENDING"
                                    />
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>
                </div>

                {/* 4. ALERTS FOR HEARINGS & COMPLIANCE SIDEBAR (Mandated Output) */}
                <div className="xl:col-span-4 space-y-8 sticky top-28 h-fit">

                    {/* HEARING CALENDAR ALERTS */}
                    <Card className="rounded-[40px] border-none bg-slate-900 text-white p-8 shadow-2xl relative overflow-hidden group">
                        <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/circuit-board.png')]" />
                        <div className="relative z-10 space-y-8">
                            <div className="flex items-center gap-3 text-blue-400">
                                <Timer className="animate-pulse" />
                                <h3 className="text-sm font-black uppercase tracking-widest">Judicial Watchlist</h3>
                            </div>
                            <div className="space-y-4">
                                <AlertItem id="CP/STATE/42" type="HEARING" msg="Next Hearing Tomorrow" time="10:30 AM" alert />
                                <AlertItem id="CP/STATE/09" type="COMPLIANCE" msg="SLA Expiry in 48h" time="24 Oct" warning />
                            </div>
                            <Button className="w-full h-14 bg-white text-slate-900 hover:bg-indigo-50 rounded-2xl font-black uppercase tracking-widest text-[9px] shadow-lg">
                                Dispatch Hearing Briefs
                            </Button>
                        </div>
                    </Card>

                    <Card className="rounded-[40px] border-slate-200 p-8 bg-white shadow-sm relative overflow-hidden">
                        <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/blueprint.png')]" />
                        <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-6 border-b pb-4 flex justify-between items-center">
                            <span>Oversight Protocol</span>
                            <Sparkles size={14} className="text-indigo-600" />
                        </h4>
                        <div className="space-y-6">
                            <ProtocolStep text="Verify Order document integrity (Digital Sign)." />
                            <ProtocolStep text="Cross-reference with Section 91 Penalties." />
                            <ProtocolStep text="Confirm Respondent Authority Node sync." />
                            <ProtocolStep text="Flag stagnant cases (>180 days) for CCPD." />
                        </div>
                    </Card>

                    <div className="p-6 bg-indigo-50 rounded-[32px] border border-indigo-100 flex gap-4">
                        <ShieldAlert className="text-indigo-600 shrink-0" size={24} />
                        <p className="text-[9px] font-bold text-indigo-800 leading-normal uppercase">
                            All court orders issued here are automatically populated into the <b>State Special PP</b> and <b>District Magistrate</b> Dashboards.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
}

/* UI SUB-COMPONENTS */

function StatTile({ label, value, icon, color, trend, alert }: any) {
    return (
        <div className={`group relative text-left p-7 rounded-[32px] overflow-hidden transition-all duration-500 h-44 flex flex-col justify-between shadow-md hover:shadow-xl hover:-translate-y-1 bg-gradient-to-br ${color} text-white border-t border-white/20`}>
            <div className="absolute inset-0 opacity-[0.08] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/topography.png')]" />
            <div className="relative z-10 flex flex-col justify-between h-full">
                <div className="h-10 w-10 rounded-xl bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform">
                    {React.cloneElement(icon, { size: 20, className: "text-white" })}
                </div>
                <div>
                    <p className="text-2xl font-black tracking-tighter drop-shadow-sm">{value}</p>
                    <p className="text-[9px] font-black uppercase tracking-[0.1em] opacity-80 leading-tight mt-1">{label}</p>
                </div>
            </div>
            {alert && <div className="absolute top-6 right-6 h-1.5 w-1.5 rounded-full bg-white animate-ping" />}
        </div>
    )
}

function CaseRow({ id, target, district, last, next, stage, status, alert, success }: any) {
    return (
        <TableRow className="border-none hover:bg-slate-50 transition-all group cursor-pointer font-sans">
            <TableCell className="px-8 py-6">
                <span className="text-[11px] font-mono font-black text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded-md">{id}</span>
                <p className="text-[8px] font-black text-slate-400 uppercase mt-2">Case Reference</p>
            </TableCell>
            <TableCell>
                <div className="flex items-center gap-3">
                    <Building2 size={14} className="text-slate-300" />
                    <div>
                        <p className="text-xs font-black text-slate-800 uppercase tracking-tight leading-none">{target}</p>
                        <p className="text-[9px] font-bold text-slate-400 mt-1 uppercase leading-none tracking-tighter italic">District: {district}</p>
                    </div>
                </div>
            </TableCell>
            <TableCell className="text-center font-bold text-slate-400 text-[10px]">{last}</TableCell>
            <TableCell className="text-center">
                <span className={`text-[11px] font-black ${alert ? 'text-red-600 underline decoration-red-200 decoration-2' : 'text-slate-900'}`}>
                    {next}
                </span>
            </TableCell>
            <TableCell className="text-center">
                <Badge className="bg-slate-100 text-slate-600 border-none text-[8px] font-black uppercase px-2">{stage}</Badge>
            </TableCell>
            <TableCell className="text-right px-8">
                <div className="flex flex-col items-end">
                    <Badge className={`rounded-full px-3 py-0.5 text-[8px] font-black uppercase border-none shadow-none ${success ? 'bg-green-100 text-green-700' : alert ? 'bg-red-100 text-red-700' : 'bg-blue-100 text-blue-700'
                        }`}>
                        {status}
                    </Badge>
                    <div className="flex gap-2 mt-3 opacity-0 group-hover:opacity-100 transition-all">
                        <button title="View Court Order" className="p-1.5 bg-slate-50 text-slate-400 rounded-lg hover:bg-slate-900 hover:text-white transition-all"><FileText size={12} /></button>
                        <button title="Drill-down" className="p-1.5 bg-slate-50 text-slate-400 rounded-lg hover:bg-indigo-600 hover:text-white transition-all"><Eye size={12} /></button>
                    </div>
                </div>
            </TableCell>
        </TableRow>
    )
}

function AlertItem({ id, type, msg, time, alert, warning }: any) {
    return (
        <div className="p-4 bg-white/5 rounded-2xl border border-white/5 group hover:bg-white/10 transition-all flex justify-between items-center">
            <div className="space-y-1">
                <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono font-black text-blue-400">{id}</span>
                    <span className={`text-[8px] font-black uppercase px-2 py-0.5 rounded-md ${alert ? 'bg-red-500/20 text-red-400' : 'bg-orange-500/20 text-orange-400'}`}>{type}</span>
                </div>
                <p className="text-[10px] font-bold text-white uppercase tracking-tight">{msg}</p>
            </div>
            <p className={`text-xs font-black uppercase ${alert ? 'text-red-400' : 'text-slate-400'}`}>{time}</p>
        </div>
    )
}

function ProtocolStep({ text }: { text: string }) {
    return (
        <div className="flex items-start gap-3 group">
            <div className="h-5 w-5 rounded-full bg-slate-50 flex items-center justify-center border border-slate-100 shrink-0 mt-0.5 shadow-inner">
                <div className="h-1 w-1 rounded-full bg-slate-300 group-hover:bg-indigo-600 transition-colors" />
            </div>
            <span className="text-xs font-bold text-slate-600 tracking-tight leading-snug group-hover:text-slate-900 transition-colors">{text}</span>
        </div>
    )
}