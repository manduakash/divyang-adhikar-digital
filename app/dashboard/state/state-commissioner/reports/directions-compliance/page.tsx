// app/dashboard/scpd/reports/directions-compliance/page.tsx
"use client";
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
    Table, TableBody, TableCell, TableHead, TableHeader, TableRow
} from "@/components/ui/table";
import {
    Gavel, Search, Filter, Printer, FileSpreadsheet,
    ArrowUpRight, Globe, ShieldCheck, BadgeCheck,
    Activity, Landmark, MapPin, CheckCircle2,
    AlertTriangle, Clock, History, Download,
    Timer, FileText, FileBadge, Zap
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function DirectionsComplianceReport() {

    // Section A7.7 Aggregated State Totals
    const directionStats = {
        totalIssued: "142",
        verifiedComplied: "118",
        pendingFulfillment: "15",
        statutoryOverdue: "09",
        complianceRate: "83.1%"
    };

    return (
        <div className="space-y-10 animate-in fade-in duration-1000 pb-20 font-sans selection:bg-indigo-50">

            {/* APEX ADMINISTRATIVE HEADER */}
            <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-6 bg-white p-10 rounded-[48px] border border-slate-200 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 p-10 opacity-[0.03] pointer-events-none text-indigo-600">
                    <Gavel size={200} />
                </div>
                <div className="space-y-2 relative z-10">
                    <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border border-indigo-100 shadow-sm">
                        <BadgeCheck size={14} /> Statutory Enforcement Node
                    </div>
                    <h1 className="text-5xl font-black text-slate-900 tracking-tighter uppercase leading-none">Directions & Compliance</h1>
                    <p className="text-slate-500 font-medium italic text-lg tracking-tight">Consolidated audit of binding orders and institutional execution performance.</p>
                </div>
                <div className="flex gap-4 relative z-10">
                    <Button variant="outline" className="h-14 px-8 rounded-2xl border-slate-200 font-black uppercase tracking-widest text-[10px] bg-white gap-2 shadow-sm hover:bg-slate-50">
                        <FileSpreadsheet size={18} className="text-green-600" /> Export XLS
                    </Button>
                    <Button className="h-14 px-10 rounded-2xl bg-indigo-600 text-white font-black uppercase tracking-widest text-[10px] shadow-2xl hover:bg-indigo-700 transition-all gap-2 border-t border-white/10">
                        <Printer size={18} /> Print Certified copy
                    </Button>
                </div>
            </div>

            {/* COMPLIANCE KPI STRIP */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatTile label="Total Orders Dispatched" value={directionStats.totalIssued} icon={<Gavel />} color="from-slate-700 via-slate-800 to-slate-900" />
                <StatTile label="Verified Complied" value={directionStats.verifiedComplied} icon={<CheckCircle2 />} color="from-emerald-500 via-teal-600 to-green-700" />
                <StatTile label="Overdue Beyond Deadline" value={directionStats.statutoryOverdue} icon={<AlertTriangle />} color="from-red-600 via-rose-700 to-red-800" alert />
                <div className="bg-white border-2 border-indigo-100 rounded-[32px] p-6 shadow-sm flex flex-col justify-center relative overflow-hidden group">
                    <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/topography.png')]" />
                    <p className="text-[9px] font-black uppercase text-indigo-400 tracking-widest mb-1 relative z-10">Compliance Index</p>
                    <p className="text-4xl font-black text-indigo-700 tracking-tighter group-hover:scale-105 transition-transform">{directionStats.complianceRate}</p>
                </div>
            </div>

            {/* MASTER DATA LEDGER */}
            <Card className="rounded-[48px] border-slate-200 shadow-sm overflow-hidden bg-white">
                <CardHeader className="p-0">
                    <div className="p-8 bg-gradient-to-r from-indigo-600 via-indigo-700 to-blue-700 text-white relative overflow-hidden">
                        {/* CARBON FIBER TEXTURE OVERLAY */}
                        <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
                        <div className="flex flex-col md:flex-row justify-between items-center gap-6 relative z-10">
                            <div className="flex items-center gap-4">
                                <div className="h-12 w-12 rounded-2xl bg-white/20 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-xl">
                                    <FileBadge size={24} />
                                </div>
                                <CardTitle className="text-sm font-black uppercase tracking-[0.3em]">Statewide Directive Registry</CardTitle>
                            </div>
                            <div className="flex gap-4 w-full md:w-auto">
                                <div className="relative flex-1 md:w-80">
                                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-white/50" />
                                    <input className="w-full pl-11 pr-4 py-3 bg-white/10 border border-white/20 rounded-2xl text-[10px] font-black uppercase outline-none text-white placeholder:text-white/40 focus:bg-white/20 transition-all shadow-inner" placeholder="Search Ref, District or Node..." />
                                </div>
                            </div>
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="p-0">
                    <Table>
                        <TableHeader className="bg-slate-50/80 font-sans">
                            <TableRow className="border-slate-100">
                                <TableHead className="px-8 py-6 text-[9px] font-black uppercase tracking-widest text-slate-400 w-[180px]">Reference Number</TableHead>
                                <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400">Issued To / District</TableHead>
                                <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400">Statutory Subject</TableHead>
                                <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400 text-center">Dates (Issued / Due)</TableHead>
                                <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400 text-center">Status</TableHead>
                                <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400 text-center">Date Complied</TableHead>
                                <TableHead className="text-right px-8 text-[9px] font-black uppercase tracking-widest text-slate-400">Remarks</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody className="divide-y divide-slate-50">
                            <ComplianceRow
                                refNo="DIR-SCPD-2024-001"
                                node="DM Lucknow Office"
                                district="Lucknow"
                                subject="Metro Tactile Sync"
                                issued="12 Oct"
                                due="25 Oct"
                                status="COMPLIED"
                                compDate="22 Oct 2024"
                                remarks="Infrastructure verified by Nodal"
                                success
                            />
                            <ComplianceRow
                                refNo="DIR-SCPD-2024-042"
                                node="Regional Health Hub"
                                district="Meerut"
                                subject="Medical Board Audit"
                                issued="05 Oct"
                                due="15 Oct"
                                status="OVERDUE"
                                compDate="--"
                                remarks="Notice dispatched to CMO"
                                alert
                            />
                            <ComplianceRow
                                refNo="DIR-SCPD-2024-088"
                                node="Pvt Retail Hub-B"
                                district="Varanasi"
                                subject="Ramp Adaptations"
                                issued="10 Oct"
                                due="10 Nov"
                                status="PENDING"
                                compDate="--"
                                remarks="Awaiting ATR from Establishment"
                            />
                            <ComplianceRow
                                refNo="DIR-SCPD-2023-912"
                                node="Secondary Edu Board"
                                district="Ghaziabad"
                                subject="Scribe Provision Policy"
                                issued="15 Sep"
                                due="30 Sep"
                                status="COMPLIED"
                                compDate="28 Sep 2024"
                                remarks="Policy updated & publically live"
                                success
                            />
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>

            {/* FOOTER SYNC STATUS */}
            <footer className="flex justify-between items-center pt-8 border-t border-slate-200">
                <div className="flex items-center gap-3 text-slate-400">
                    <Activity size={18} className="text-indigo-600 animate-pulse" />
                    <span className="text-[10px] font-black uppercase tracking-widest leading-none">Statutory Enforcement Sync: Active • Consolidated State Directive Registry</span>
                </div>
                <div className="flex gap-6">
                    <button className="text-[10px] font-black uppercase text-indigo-600 hover:underline">Download Master Zip</button>
                    <button className="text-[10px] font-black uppercase text-slate-400 hover:text-slate-900">Enforcement Logs</button>
                </div>
            </footer>
        </div>
    );
}

/* UI SUB-COMPONENTS */

function StatTile({ label, value, icon, color, alert }: any) {
    return (
        <Card className="rounded-[32px] border-slate-100 bg-white p-7 shadow-sm group hover:shadow-xl transition-all duration-500 overflow-hidden relative h-44 flex flex-col justify-between">
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/topography.png')]" />
            <div className={`h-10 w-10 rounded-xl bg-slate-50 flex items-center justify-center transition-all group-hover:scale-110 group-hover:bg-slate-900 group-hover:text-white`}>
                {icon}
            </div>
            <div>
                <p className="text-[9px] font-black uppercase text-slate-400 tracking-widest mb-1">{label}</p>
                <p className={`text-3xl font-black tracking-tighter ${alert ? 'text-red-600' : 'text-slate-900'}`}>{value}</p>
            </div>
            {alert && <div className="absolute top-6 right-6 h-1.5 w-1.5 rounded-full bg-red-500 animate-ping" />}
        </Card>
    )
}

function ComplianceRow({ refNo, node, district, subject, issued, due, status, compDate, remarks, alert, success }: any) {
    const statusColor = alert ? 'bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.3)]' : success ? 'bg-green-500' : 'bg-blue-500';

    return (
        <TableRow className="border-none hover:bg-slate-50 transition-all group cursor-pointer font-sans">
            <TableCell className="px-8 py-6">
                <span className="text-[10px] font-mono font-black text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded-md uppercase tracking-tighter">{refNo}</span>
                <p className="text-[8px] font-black text-slate-400 uppercase mt-2 italic leading-none">Statutory Ref</p>
            </TableCell>
            <TableCell>
                <div className="space-y-1">
                    <p className="text-sm font-black text-slate-800 uppercase tracking-tight leading-none">{node}</p>
                    <div className="flex items-center gap-1.5 opacity-60">
                        <MapPin size={10} />
                        <span className="text-[9px] font-bold uppercase tracking-widest">{district}</span>
                    </div>
                </div>
            </TableCell>
            <TableCell>
                <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest leading-tight max-w-[140px]">{subject}</p>
            </TableCell>
            <TableCell className="text-center">
                <div className="space-y-1">
                    <p className="text-[11px] font-bold text-slate-400 uppercase">{issued}</p>
                    <p className={`text-[10px] font-black ${alert ? 'text-red-600 underline' : 'text-slate-900'}`}>Due: {due}</p>
                </div>
            </TableCell>
            <TableCell className="text-center">
                <Badge className={`rounded-full px-3 py-0.5 text-[8px] font-black uppercase border-none shadow-none ${alert ? 'bg-red-100 text-red-700' : success ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'}`}>
                    {status}
                </Badge>
            </TableCell>
            <TableCell className="text-center">
                <span className={`text-[11px] font-mono font-black ${success ? 'text-green-600' : 'text-slate-200'}`}>{compDate}</span>
            </TableCell>
            <TableCell className="text-right px-8">
                <div className="space-y-1">
                    <p className={`text-[10px] font-medium leading-relaxed italic ${alert ? 'text-red-600' : 'text-slate-500'}`}>{remarks}</p>
                    <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-all mt-2">
                        <button title="View Proof" className="p-1.5 bg-slate-100 text-slate-400 rounded-lg hover:bg-slate-900 hover:text-white transition-all"><FileText size={12} /></button>
                        <button title="Issue Follow-up" className="p-1.5 bg-slate-100 text-slate-400 rounded-lg hover:bg-indigo-600 hover:text-white transition-all"><Zap size={12} /></button>
                    </div>
                </div>
            </TableCell>
        </TableRow>
    )
}