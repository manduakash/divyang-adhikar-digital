// app/dashboard/scpd/reports/grievances-summary/page.tsx
"use client";
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
    Table, TableBody, TableCell, TableHead, TableHeader, TableRow
} from "@/components/ui/table";
import {
    MessageSquare, Search, Filter, Printer, FileSpreadsheet,
    ArrowUpRight, Globe, ShieldCheck, BadgeCheck, Activity,
    Landmark, MapPin, CheckCircle2, AlertTriangle, Clock,
    History, Download, Gavel, Timer, FileText
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function GrievancesSummaryReport() {
    return (
        <div className="space-y-10 animate-in fade-in duration-1000 pb-20 font-sans selection:bg-purple-100">

            {/* APEX ADMINISTRATIVE HEADER */}
            <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-6 bg-white p-10 rounded-[48px] border border-slate-200 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 p-10 opacity-[0.03] pointer-events-none text-purple-600">
                    <MessageSquare size={200} />
                </div>
                <div className="space-y-2 relative z-10">
                    <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border border-purple-200 shadow-sm">
                        <Gavel size={14} /> Redressal Monitoring Hub
                    </div>
                    <h1 className="text-5xl font-black text-slate-900 tracking-tighter uppercase leading-none">Grievance Summary Ledger</h1>
                    <p className="text-slate-500 font-medium italic text-lg tracking-tight">Consolidated statutory audit of citizen complaints and institutional response performance.</p>
                </div>
                <div className="flex gap-4 relative z-10">
                    <Button variant="outline" className="h-14 px-8 rounded-2xl border-slate-200 font-black uppercase tracking-widest text-[10px] bg-white gap-2 shadow-sm hover:bg-slate-50">
                        <FileSpreadsheet size={18} className="text-green-600" /> Export XLS
                    </Button>
                    <Button className="h-14 px-10 rounded-2xl bg-purple-700 text-white font-black uppercase tracking-widest text-[10px] shadow-2xl hover:bg-black transition-all gap-2 border-t border-white/10">
                        <Printer size={18} /> Print Certified Summary
                    </Button>
                </div>
            </div>

            {/* REGISTRY KPI STRIP */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <RegistryStat label="Total Filings (State)" val="124,502" color="text-purple-600" />
                <RegistryStat label="Resolved & Verified" val="112,400" color="text-emerald-600" />
                <RegistryStat label="Pending Beyond SLA" val="1,240" color="text-red-600" alert />
                <div className="bg-white border-2 border-purple-100 rounded-[32px] p-6 shadow-sm flex flex-col justify-center relative overflow-hidden group">
                    <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/topography.png')]" />
                    <p className="text-[9px] font-black uppercase text-purple-400 tracking-widest mb-1 relative z-10">Redressal Efficiency</p>
                    <p className="text-3xl font-black text-purple-700 tracking-tighter group-hover:scale-105 transition-transform">94.2%</p>
                </div>
            </div>

            {/* MASTER DATA TABLE */}
            <Card className="rounded-[48px] border-slate-200 shadow-sm overflow-hidden bg-white">
                <CardHeader className="p-0">
                    <div className="p-8 bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-700 text-white relative overflow-hidden">
                        {/* CARBON FIBER TEXTURE OVERLAY */}
                        <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
                        <div className="flex flex-col md:flex-row justify-between items-center gap-6 relative z-10">
                            <div className="flex items-center gap-4">
                                <div className="h-12 w-12 rounded-2xl bg-white/20 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-xl group-hover:rotate-6 transition-transform">
                                    <BadgeCheck size={24} />
                                </div>
                                <CardTitle className="text-sm font-black uppercase tracking-[0.3em]">Statewide Grievance registry</CardTitle>
                            </div>
                            <div className="flex gap-4 w-full md:w-auto">
                                <div className="relative flex-1 md:w-80">
                                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-white/50" />
                                    <input className="w-full pl-11 pr-4 py-3 bg-white/10 border border-white/20 rounded-2xl text-[10px] font-black uppercase outline-none text-white placeholder:text-white/40 focus:bg-white/20 transition-all shadow-inner" placeholder="Search ID, District or Accused..." />
                                </div>
                                <Button variant="outline" size="icon" className="h-12 w-12 rounded-2xl border-white/20 bg-white/10 text-white hover:bg-white/20"><Filter size={18} /></Button>
                            </div>
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="p-0">
                    <Table>
                        <TableHeader className="bg-slate-50/80">
                            <TableRow className="border-slate-100">
                                <TableHead className="px-8 py-6 text-[9px] font-black uppercase tracking-widest text-slate-400">Grievance ID</TableHead>
                                <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400">Category / Nature</TableHead>
                                <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400">District Hub</TableHead>
                                <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400">Respondent (Type / Name)</TableHead>
                                <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400 text-center">Receipt & SLA</TableHead>
                                <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400 text-center">Resolution Status</TableHead>
                                <TableHead className="text-right px-8 text-[9px] font-black uppercase tracking-widest text-slate-400">Outcome / Remarks</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody className="divide-y divide-slate-50">
                            <GrievanceRow
                                id="GRV-UP-2024-910"
                                cat="Discrimination"
                                district="Lucknow"
                                respType="Govt Dept"
                                respName="Transport HQ"
                                rec="12 Oct 24"
                                sla="11 Nov 24"
                                status="PENDING"
                                resDate="--"
                                remarks="Hearing scheduled for Oct 25"
                            />
                            <GrievanceRow
                                id="GRV-UP-2024-442"
                                cat="Accessibility"
                                district="Meerut"
                                respType="Private"
                                respName="City Mall Ltd"
                                rec="02 Sep 24"
                                sla="02 Oct 24"
                                status="SLA BREACH"
                                resDate="--"
                                remarks="Summons issued to Manager"
                                alert
                            />
                            <GrievanceRow
                                id="GRV-UP-2024-118"
                                cat="Admission"
                                district="Varanasi"
                                respType="Institution"
                                respName="Secondary B"
                                rec="10 Sep 24"
                                sla="10 Oct 24"
                                status="RESOLVED"
                                resDate="14 Oct 24"
                                remarks="Admission granted with Scribe"
                                success
                            />
                            <GrievanceRow
                                id="GRV-UP-2024-001"
                                cat="Employment"
                                district="GB Nagar"
                                respType="Govt Hub"
                                respName="Panchayat Sec"
                                rec="15 Oct 24"
                                sla="14 Nov 24"
                                status="UNDER REVIEW"
                                resDate="--"
                                remarks="Verification of ID initiated"
                            />
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>

            {/* FOOTER SYNC STATUS */}
            <footer className="flex justify-between items-center pt-8 border-t border-slate-200">
                <div className="flex items-center gap-3 text-slate-400">
                    <Activity size={18} className="text-purple-600 animate-pulse" />
                    <span className="text-[10px] font-black uppercase tracking-widest leading-none">Statutory Redressal Sync: Active • Consolidated Statewide Watchlist</span>
                </div>
                <div className="flex gap-6">
                    <button className="text-[10px] font-black uppercase text-purple-600 hover:underline">Download Master Zip</button>
                    <button className="text-[10px] font-black uppercase text-slate-400 hover:text-slate-900">System Logs</button>
                </div>
            </footer>
        </div>
    );
}

/* UI SUB-COMPONENTS */

function RegistryStat({ label, val, color, alert }: any) {
    return (
        <Card className="rounded-3xl border-slate-100 bg-white p-6 shadow-sm group hover:shadow-xl transition-all duration-500 overflow-hidden relative">
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/topography.png')]" />
            <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1 relative z-10">{label}</p>
            <p className={`text-2xl font-black tracking-tighter relative z-10 ${color}`}>{val}</p>
            {alert && <div className="absolute top-4 right-4 h-1.5 w-1.5 rounded-full bg-red-500 animate-ping" />}
        </Card>
    )
}

function GrievanceRow({ id, cat, district, respType, respName, rec, sla, status, resDate, remarks, alert, success }: any) {
    const statusColor = alert ? 'bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.3)]' : success ? 'bg-green-500' : 'bg-purple-500';

    return (
        <TableRow className="border-none hover:bg-slate-50 transition-all group cursor-pointer font-sans">
            <TableCell className="px-8 py-6">
                <span className="text-[10px] font-mono font-black text-purple-700 bg-purple-50 px-2 py-0.5 rounded-md uppercase tracking-tighter">{id}</span>
                <p className="text-[8px] font-black text-slate-400 uppercase mt-2">Registered Hub</p>
            </TableCell>
            <TableCell>
                <div className="space-y-1">
                    <p className="text-sm font-black text-slate-800 uppercase tracking-tight leading-none">{cat}</p>
                    <p className="text-[8px] font-bold text-slate-400 uppercase tracking-widest leading-none mt-1">Section 21 violation</p>
                </div>
            </TableCell>
            <TableCell>
                <div className="flex items-center gap-2">
                    <MapPin size={12} className="text-slate-300" />
                    <span className="text-[10px] font-bold text-slate-800 uppercase tracking-tighter">{district}</span>
                </div>
            </TableCell>
            <TableCell>
                <div className="space-y-1">
                    <p className="text-[10px] font-black text-indigo-600 uppercase tracking-widest leading-none">{respName}</p>
                    <p className="text-[8px] font-bold text-slate-400 uppercase tracking-tighter">{respType}</p>
                </div>
            </TableCell>
            <TableCell className="text-center">
                <div className="space-y-1">
                    <p className="text-[11px] font-bold text-slate-700">{rec}</p>
                    <p className={`text-[10px] font-black ${alert ? 'text-red-600 underline' : 'text-slate-400'}`}>Due: {sla}</p>
                </div>
            </TableCell>
            <TableCell className="text-center">
                <div className="flex flex-col items-center gap-2">
                    <Badge className={`rounded-full px-3 py-0.5 text-[8px] font-black uppercase border-none shadow-none ${alert ? 'bg-red-100 text-red-700' : success ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'}`}>
                        {status}
                    </Badge>
                    {success && <p className="text-[7px] font-black text-green-600 uppercase">Resolved: {resDate}</p>}
                </div>
            </TableCell>
            <TableCell className="text-right px-8">
                <div className="space-y-1">
                    <p className={`text-[10px] font-medium leading-relaxed italic ${alert ? 'text-red-600' : 'text-slate-500'}`}>{remarks}</p>
                    <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-all mt-2">
                        <button title="View Record" className="p-1.5 bg-slate-100 text-slate-400 rounded-lg hover:bg-slate-900 hover:text-white transition-all"><FileText size={12} /></button>
                        <button title="Drill-down" className="p-1.5 bg-slate-100 text-slate-400 rounded-lg hover:bg-indigo-600 hover:text-white transition-all"><ArrowUpRight size={12} /></button>
                    </div>
                </div>
            </TableCell>
        </TableRow>
    )
}