// app/dashboard/scpd/directions/page.tsx
"use client";
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
    Gavel, FileText, Landmark, ShieldCheck,
    Search, Filter, Printer, Download,
    ArrowUpRight, Globe, Activity, CheckCircle2,
    AlertTriangle, History, Timer, Building2,
    MapPin, GraduationCap, Sparkles, Send,
    Briefcase, Plus, Scale, BadgeCheck, FileCheck,
    ShieldAlert
} from "lucide-react";
import {
    Table, TableBody, TableCell, TableHead, TableHeader, TableRow
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

type DirectionStatus = 'PENDING' | 'COMPLIED' | 'OVERDUE';

export default function SCPDDirectionsHub() {

    // Section  Statutory Aggregates
    const stats = {
        totalIssued: "142",
        pending: "28",
        overdue: "09",
        complianceRate: "82.4%"
    };

    return (
        <div className="space-y-10 animate-in fade-in duration-700 pb-20 font-sans">

            {/* 1. APEX LEGAL HEADER */}
            <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-6 mb-10 bg-white p-10 rounded-[40px] border border-slate-200 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 p-10 opacity-[0.03] pointer-events-none">
                    <Gavel size={180} className="text-indigo-600" />
                </div>
                <div className="space-y-2 relative z-10">
                    <div className="flex items-center gap-2 text-indigo-600 font-black uppercase text-[10px] tracking-[0.2em]">
                        <Scale size={14} /> Statutory Authority /  Directions
                    </div>
                    <h1 className="text-4xl font-black text-slate-900 tracking-tighter uppercase leading-none">Directions & Orders Hub</h1>
                    <p className="text-slate-500 font-medium italic text-lg">Issuance and lifecycle monitoring of Commissioner's directives under the PwD Act.</p>
                </div>
                <div className="flex gap-4 relative z-10">
                    <Button variant="outline" className="h-16 px-8 rounded-3xl border-slate-200 font-black uppercase tracking-widest text-[10px] bg-white hover:bg-slate-50 shadow-xl">
                        <History size={18} className="mr-2" /> Directive Archive
                    </Button>
                    <Button className="h-16 px-10 rounded-3xl bg-indigo-900 text-white font-black uppercase tracking-widest text-[10px] shadow-2xl hover:bg-black transition-all gap-2 group">
                        <Plus size={18} /> Issue New Direction <Send size={14} className="group-hover:translate-x-1 transition-transform" />
                    </Button>
                </div>
            </div>

            {/* 2. STATUTORY KPI TILES (Patterned & Gradient) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatTile label="Total Directions Issued" value={stats.totalIssued} icon={<Gavel />} color="from-slate-800 to-slate-950" />
                <StatTile label="Pending Fulfillment" value={stats.pending} icon={<Activity />} color="from-blue-600 via-blue-700 to-indigo-900" />
                <StatTile label="Statutory Overdue" value={stats.overdue} icon={<AlertTriangle />} color="from-red-600 via-rose-700 to-red-800" alert />
                <div className="bg-white border-2 border-indigo-100 rounded-[32px] p-6 shadow-sm flex flex-col justify-center relative overflow-hidden group">
                    <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/topography.png')]" />
                    <p className="text-[9px] font-black uppercase tracking-widest text-indigo-400 mb-1">State Compliance Pulse</p>
                    <p className="text-4xl font-black text-indigo-700 tracking-tighter group-hover:scale-105 transition-transform">{stats.complianceRate}</p>
                    <div className="w-full h-1.5 bg-slate-100 rounded-full mt-4 overflow-hidden">
                        <div className="h-full bg-indigo-600 shadow-[0_0_12px_rgba(79,70,229,0.4)]" style={{ width: stats.complianceRate }} />
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-start">

                {/* 3. DIRECTIONS REGISTER (Section  Mandated Output) */}
                <div className="xl:col-span-8">
                    <Card className="rounded-[40px] border-slate-200 shadow-sm overflow-hidden bg-white min-h-[700px]">
                        <CardHeader className="p-8 border-b border-slate-50 bg-slate-50/30 flex flex-row justify-between items-center">
                            <div className="flex items-center gap-3">
                                <BadgeCheck className="text-indigo-600" />
                                <CardTitle className="text-sm font-black uppercase tracking-widest text-slate-400"> Statutory Directions Register</CardTitle>
                            </div>
                            <div className="flex gap-3">
                                <div className="relative group">
                                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-300 group-focus-within:text-indigo-600" />
                                    <input className="pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-2xl text-[10px] font-bold outline-none w-64 shadow-inner" placeholder="Search Ref Number..." />
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent className="p-0">
                            <Table>
                                <TableHeader className="bg-white">
                                    <TableRow className="border-slate-100">
                                        <TableHead className="px-8 py-6 text-[9px] font-black uppercase tracking-widest text-slate-400 w-[180px]">Ref. Number</TableHead>
                                        <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400">Issued To (Node)</TableHead>
                                        <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400">Compliance Due</TableHead>
                                        <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400 text-center">Status</TableHead>
                                        <TableHead className="text-right px-8 text-[9px] font-black uppercase tracking-widest text-slate-400">Proof</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody className="divide-y divide-slate-50">
                                    <DirectionRow
                                        id="DIR-SCPD-UP-001"
                                        target="DM Lucknow"
                                        subject="Accessibility Audit of RTO Office"
                                        date="12 Oct 2024"
                                        due="25 Oct 2024"
                                        status="PENDING"
                                    />
                                    <DirectionRow
                                        id="DIR-SCPD-UP-042"
                                        target="Health Dept"
                                        subject="Medical Board Decentralization"
                                        date="05 Oct 2024"
                                        due="14 Oct 2024"
                                        status="OVERDUE"
                                        alert
                                    />
                                    <DirectionRow
                                        id="DIR-SCPD-UP-091"
                                        target="Primary School B"
                                        subject="Scribe Provision Verification"
                                        date="10 Oct 2024"
                                        due="20 Oct 2024"
                                        status="COMPLIED"
                                        success
                                    />
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>
                </div>

                {/* 4. ENFORCEMENT & AI SIDEBAR */}
                <div className="xl:col-span-4 space-y-8 sticky top-28 h-fit">

                    {/* AI DRAFTING ASSISTANT (Section A6 Mandated) */}
                    <Card className="rounded-[40px] border-none bg-slate-900 text-white p-8 shadow-2xl relative overflow-hidden group">
                        <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/circuit-board.png')]" />
                        <div className="relative z-10 space-y-8">
                            <div className="flex items-center gap-3">
                                <Sparkles className="text-purple-400 animate-pulse" />
                                <h3 className="text-sm font-black uppercase tracking-widest text-purple-400">AI Drafting Engine</h3>
                            </div>
                            <p className="text-lg font-black leading-tight uppercase tracking-tight">Draft Statutory Direction</p>
                            <p className="text-xs font-medium text-slate-400 leading-relaxed uppercase tracking-tighter italic">
                                "Automatically generate legally robust direction text based on PwD Act sections and specific district defaults."
                            </p>
                            <Button className="w-full h-14 bg-white text-slate-900 hover:bg-indigo-50 rounded-2xl font-black uppercase tracking-widest text-[10px] shadow-lg">
                                Open AI Draft Builder
                            </Button>
                        </div>
                    </Card>

                    {/* PENDING & OVERDUE TRACKING (Section  Output) */}
                    <Card className="rounded-[40px] border-slate-200 p-8 bg-white shadow-sm relative overflow-hidden">
                        <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/graphy.png')]" />
                        <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-8 border-b pb-4">Statutory Follow-up</h4>
                        <div className="space-y-8">
                            <CompliancePoint label="DIR-SCPD-042" status="Default" days="06 Days Overdue" alert />
                            <CompliancePoint label="DIR-SCPD-001" status="impending" days="02 Days Left" />
                            <CompliancePoint label="DIR-SCPD-091" status="Success" days="Proof Verified" success />
                        </div>
                    </Card>

                    <div className="p-6 bg-red-50 rounded-[32px] border border-red-100 flex gap-4">
                        <ShieldAlert className="text-red-600 shrink-0" size={24} />
                        <p className="text-[10px] font-bold text-red-800 leading-normal uppercase">
                            Persistent non-compliance with Commissioner directions flags the establishment for <b>Section 89 Legal Prosecution</b>.
                        </p>
                    </div>
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
                    {React.cloneElement(icon, { size: 20, className: "text-white" })}
                </div>
                <div>
                    <p className="text-3xl font-black tracking-tighter drop-shadow-sm">{value}</p>
                    <p className="text-[9px] font-black uppercase tracking-[0.1em] opacity-80 leading-tight mt-1">{label}</p>
                </div>
            </div>
            {alert && <div className="absolute top-6 right-6 h-2 w-2 rounded-full bg-white animate-ping" />}
        </div>
    )
}

function DirectionRow({ id, target, subject, date, due, status, alert, success }: any) {
    return (
        <TableRow className="border-none hover:bg-slate-50 transition-all group cursor-pointer font-sans">
            <TableCell className="px-8 py-6">
                <span className="text-[11px] font-mono font-black text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded-md">{id}</span>
                <p className="text-[8px] font-black text-slate-400 uppercase mt-2">Issued: {date}</p>
            </TableCell>
            <TableCell>
                <div className="flex items-center gap-3">
                    <Landmark size={14} className="text-slate-300" />
                    <div>
                        <p className="text-xs font-black text-slate-800 uppercase tracking-tight leading-none">{target}</p>
                        <p className="text-[9px] font-bold text-slate-400 mt-1 uppercase leading-none truncate max-w-[140px]">{subject}</p>
                    </div>
                </div>
            </TableCell>
            <TableCell className="text-center">
                <div className="flex flex-col items-center">
                    <span className={`text-[11px] font-black ${alert ? 'text-red-600 underline decoration-red-200' : 'text-slate-600'}`}>{due}</span>
                    {alert && <span className="text-[7px] font-black text-red-400 mt-1 uppercase">SLA Breached</span>}
                </div>
            </TableCell>
            <TableCell className="text-center">
                <Badge className={`rounded-full px-3 py-0.5 text-[8px] font-black uppercase border-none shadow-none ${success ? 'bg-green-100 text-green-700' : alert ? 'bg-red-100 text-red-700' : 'bg-blue-100 text-blue-700'
                    }`}>
                    {status}
                </Badge>
            </TableCell>
            <TableCell className="text-right px-8">
                <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-all">
                    <button title="View Proof of Compliance" className={`p-2 rounded-xl border transition-all ${success ? 'bg-green-50 text-green-600 border-green-100 hover:bg-green-600 hover:text-white' : 'bg-slate-50 text-slate-300 border-slate-100 grayscale hover:grayscale-0'}`}>
                        <FileCheck size={16} />
                    </button>
                    <button title="Drill-down to Scrutiny" className="p-2 bg-slate-50 text-slate-400 rounded-xl hover:bg-indigo-600 hover:text-white transition-all"><ArrowUpRight size={16} /></button>
                </div>
            </TableCell>
        </TableRow>
    )
}

function CompliancePoint({ label, status, days, alert, success }: any) {
    return (
        <div className="flex justify-between items-center group">
            <div className="space-y-1">
                <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{label}</p>
                <div className="flex items-center gap-2">
                    <span className={`text-[9px] font-black uppercase ${success ? 'text-green-600' : alert ? 'text-red-600' : 'text-slate-900'}`}>{status}</span>
                    <span className="text-[8px] font-bold text-slate-300 uppercase tracking-tighter">• {days}</span>
                </div>
            </div>
            <div className={`h-2 w-2 rounded-full ${success ? 'bg-green-500' : alert ? 'bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.4)] animate-pulse' : 'bg-orange-400'}`} />
        </div>
    );
}