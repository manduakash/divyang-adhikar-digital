// app/dashboard/establishment/grievances/page.tsx
"use client";
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    Table, TableBody, TableCell, TableHead, TableHeader, TableRow
} from "@/components/ui/table";
import {
    MessageSquare, Clock, AlertCircle, RefreshCw,
    ArrowUpRight, ShieldAlert, Sparkles, Filter,
    Download, Search, Gavel, CheckCircle2, Timer
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function GrievanceResponsiveness() {
    return (
        <div className="space-y-10 animate-in fade-in duration-700 pb-20 font-sans selection:bg-blue-100">

            {/* 1. APEX HEADER - SECTION 6.1E CONTEXT */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                <div className="space-y-2">
                    <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border border-blue-200">
                        <ShieldAlert size={14} /> Section 6.1E statutory Monitoring
                    </div>
                    <h1 className="text-5xl font-black text-slate-900 tracking-tighter uppercase leading-none">Grievance Portal</h1>
                    <p className="text-slate-500 font-medium text-lg italic">Tracking real-time institutional responsiveness and SLA compliance thresholds.</p>
                </div>
                <div className="flex gap-3">
                    <Button variant="outline" className="h-14 px-8 rounded-2xl border-slate-200 font-bold bg-white shadow-sm gap-2">
                        <Download size={18} /> Export Registry
                    </Button>
                    <Button className="h-14 px-8 rounded-2xl bg-slate-950 text-white font-black uppercase tracking-widest text-[10px] shadow-2xl gap-2 hover:bg-black transition-all">
                        <Sparkles size={18} className="text-blue-400 fill-blue-400" /> AI Response Assist
                    </Button>
                </div>
            </div>

            {/* 2. 6.1E SYSTEM GENERATED METRICS (Patterned & Gradient) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <MetricTile
                    label="Avg Resolution Days"
                    value="14.2"
                    icon={<Clock />}
                    color="from-blue-600 via-blue-700 to-indigo-900"
                    trend="Within SLA"
                />
                <MetricTile
                    label="Escalation Count"
                    value="05"
                    icon={<AlertCircle />}
                    color="from-slate-700 via-slate-800 to-slate-950"
                    alert
                />
                <MetricTile
                    label="Repeat Violations"
                    value="01"
                    icon={<RefreshCw />}
                    color="from-red-600 via-rose-700 to-red-900"
                    alert
                />

                {/* 79% OVERALL RESPONSIVENESS SCORE */}
                <div className="group relative p-8 rounded-[40px] overflow-hidden transition-all duration-500 bg-white border-2 border-blue-100 shadow-xl flex flex-col justify-between h-48">
                    <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/topography.png')]" />
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Responsiveness Score</p>
                    <div className="relative z-10 flex items-baseline gap-1">
                        <span className="text-6xl font-black text-blue-600 tracking-tighter animate-in slide-in-from-bottom-2 duration-1000">72</span>
                        <span className="text-2xl font-black text-blue-400">%</span>
                    </div>
                    <div className="w-full h-1.5 bg-slate-100 rounded-full mt-4 overflow-hidden shadow-inner">
                        <div className="h-full bg-blue-600 shadow-[0_0_12px_rgba(37,99,235,0.4)]" style={{ width: '72%' }} />
                    </div>
                </div>
            </div>

            {/* 3. GRIEVANCE REGISTRY (High Density Table) */}
            <Card className="rounded-[48px] border-slate-200 shadow-sm overflow-hidden bg-white">
                <CardHeader className="p-10 border-b border-slate-50 bg-slate-50/30 flex flex-row justify-between items-center">
                    <div className="space-y-1">
                        <CardTitle className="text-sm font-black uppercase tracking-widest text-slate-400">Statutory Grievance Registry</CardTitle>
                        <p className="text-xs font-bold text-slate-900">Total Active Files: 124</p>
                    </div>
                    <div className="flex gap-4">
                        <div className="relative group">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-300 group-focus-within:text-blue-600 transition-colors" />
                            <input className="pl-11 pr-4 py-3 bg-white border border-slate-200 rounded-2xl text-[10px] font-bold outline-none w-80 shadow-inner focus:ring-2 focus:ring-blue-100" placeholder="Search by Grievance ID, PwD Name..." />
                        </div>
                        <Button variant="outline" className="rounded-2xl border-slate-200 font-black uppercase text-[10px] tracking-widest px-6 h-12 bg-white"><Filter size={16} className="mr-2" /> Status Filter</Button>
                    </div>
                </CardHeader>
                <CardContent className="p-0">
                    <Table>
                        <TableHeader className="bg-white">
                            <TableRow className="border-slate-100">
                                <TableHead className="px-10 py-6 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Grievance Identifier</TableHead>
                                <TableHead className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Category / Nature</TableHead>
                                <TableHead className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 text-center">Receipt Date</TableHead>
                                <TableHead className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 text-center">Timeline (SLA)</TableHead>
                                <TableHead className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 text-center">Current Status</TableHead>
                                <TableHead className="text-right px-10"></TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody className="divide-y divide-slate-50">
                            <GrievanceRow
                                id="GRV-2024-9921"
                                cat="Employment"
                                sub="Discrimination in Promotion"
                                rec="12 Oct"
                                dis="14 Oct"
                                status="DISPOSED"
                                success
                            />
                            <GrievanceRow
                                id="GRV-2024-9942"
                                cat="Accessibility"
                                sub="Broken Ramp (Main Hub)"
                                rec="15 Oct"
                                dis="--"
                                status="ESCALATED"
                                alert
                            />
                            <GrievanceRow
                                id="GRV-2024-9950"
                                cat="Education"
                                sub="Admission Denial"
                                rec="16 Oct"
                                dis="--"
                                status="PENDING"
                            />
                            <GrievanceRow
                                id="GRV-2024-8812"
                                cat="Service"
                                sub="Certificate Delay"
                                rec="02 Oct"
                                dis="--"
                                status="SLA BREACH"
                                alert
                            />
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>

            {/* 4. ENFORCEMENT CALLOUT */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="rounded-[48px] border-none bg-slate-900 text-white p-12 shadow-2xl relative overflow-hidden group">
                    <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
                    <div className="relative z-10 space-y-6">
                        <div className="flex items-center gap-3 text-blue-400">
                            <Gavel size={24} />
                            <h3 className="text-sm font-black uppercase tracking-widest">Statutory Mandate</h3>
                        </div>
                        <p className="text-2xl font-black leading-tight uppercase tracking-tighter">Automatic State Escalation</p>
                        <p className="text-sm font-medium text-slate-400 leading-relaxed italic">
                            "Unresolved grievances exceeding the 45-day window are automatically mirrored to the <b>District Magistrate</b> and <b>State Commissioner</b> for direct administrative action."
                        </p>
                        <Button className="h-14 px-10 rounded-2xl bg-white text-slate-900 font-black uppercase tracking-widest text-[10px] hover:bg-blue-50 transition-all">
                            Review Escalation Queue (14)
                        </Button>
                    </div>
                </Card>

                <Card className="rounded-[48px] border-slate-200 bg-white p-12 shadow-sm border-dashed border-2 flex flex-col justify-center text-center">
                    <div className="h-20 w-20 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle2 size={40} className="text-blue-600" />
                    </div>
                    <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tighter leading-none">Compliance Audit</h3>
                    <p className="text-slate-500 font-medium text-sm mt-4 mb-8 max-w-sm mx-auto">
                        Finalize all action taken reports (ATR) to maintain a Tier-1 Responsiveness Score.
                    </p>
                    <div className="flex gap-4 justify-center">
                        <Button variant="outline" className="rounded-2xl font-black uppercase text-[9px] tracking-widest px-8 h-12">Download Log</Button>
                        <Button className="bg-slate-900 text-white rounded-2xl font-black uppercase text-[9px] tracking-widest px-8 h-12">Submit ATRs</Button>
                    </div>
                </Card>
            </div>
        </div>
    );
}

/* UI SUB-COMPONENTS */

function MetricTile({ label, value, icon, color, trend, alert }: any) {
    return (
        <div className={`group relative text-left p-7 rounded-[32px] overflow-hidden transition-all duration-500 h-48 flex flex-col justify-between shadow-lg hover:shadow-2xl hover:-translate-y-1 bg-gradient-to-br ${color} text-white border-t border-white/20`}>
            {/* Texture Layers */}
            <div className="absolute inset-0 opacity-[0.08] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/topography.png')]" />
            <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />

            <div className="relative z-10 flex flex-col justify-between h-full">
                <div className="h-10 w-10 rounded-xl bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform">
                    {React.cloneElement(icon, { size: 20, className: "text-white" })}
                </div>
                <div>
                    <div className="flex items-baseline gap-1">
                        <p className="text-3xl font-black tracking-tighter drop-shadow-md">{value}</p>
                        {trend && <span className="text-[10px] font-black opacity-60 flex items-center gap-0.5 tracking-tighter"> {trend}</span>}
                    </div>
                    <p className="text-[9px] font-black uppercase tracking-[0.15em] opacity-80 leading-tight mt-1">{label}</p>
                </div>
            </div>
            {alert && <div className="absolute top-6 right-6 h-2 w-2 rounded-full bg-white animate-ping" />}
        </div>
    )
}

function GrievanceRow({ id, cat, sub, rec, dis, status, alert, success }: any) {
    const statusColor = success ? 'bg-green-500' : alert ? 'bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.5)]' : 'bg-blue-600';
    return (
        <TableRow className="border-none hover:bg-slate-50 transition-all group cursor-pointer font-sans">
            <TableCell className="px-10 py-6">
                <span className="text-[11px] font-mono font-black text-blue-700 bg-blue-50 px-2 py-0.5 rounded-md">{id}</span>
                <p className="text-[8px] font-black text-slate-400 uppercase mt-2">Verified Registry ID</p>
            </TableCell>
            <TableCell>
                <p className="text-sm font-black text-slate-800 uppercase tracking-tight leading-none">{cat}</p>
                <p className="text-[10px] font-medium text-slate-400 mt-1 uppercase tracking-widest truncate max-w-[180px]">{sub}</p>
            </TableCell>
            <TableCell className="text-center text-[10px] font-bold text-slate-500 uppercase">{rec}</TableCell>
            <TableCell className="text-center text-[10px] font-bold text-slate-500 uppercase">
                <span className={dis === '--' ? 'text-slate-200 italic' : 'text-slate-700'}>{dis}</span>
            </TableCell>
            <TableCell className="text-center">
                <Badge className={`rounded-full px-3 py-0.5 text-[8px] font-black uppercase border-none shadow-none ${success ? 'bg-green-100 text-green-700' : alert ? 'bg-red-100 text-red-700' : 'bg-blue-100 text-blue-700'
                    }`}>
                    {status}
                </Badge>
            </TableCell>
            <TableCell className="text-right px-10 opacity-0 group-hover:opacity-100 transition-all">
                <button className="p-2.5 bg-slate-50 text-slate-400 rounded-xl hover:bg-slate-900 hover:text-white transition-all shadow-sm">
                    <ArrowUpRight size={18} />
                </button>
            </TableCell>
        </TableRow>
    )
}