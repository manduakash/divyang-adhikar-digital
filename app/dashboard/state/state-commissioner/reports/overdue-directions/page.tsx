// app/dashboard/scpd/reports/overdue-directions/page.tsx
"use client";
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
    Table, TableBody, TableCell, TableHead, TableHeader, TableRow
} from "@/components/ui/table";
import {
    Gavel, AlertTriangle, Timer, Search,
    Filter, Printer, FileSpreadsheet, History,
    ArrowUpRight, Globe, Map, Sparkles,
    CheckCircle2, Landmark, Clock,
    BadgeCheck, Download, Zap, Radio,
    ShieldAlert, Building2, MousePointer2,
    MapPin
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function OverdueDirectionsReport() {

    // Section A7.8 Aggregated Overdue Totals
    const overdueStats = {
        totalPending: "28",
        totalOverdue: "09",
        criticalEscalations: "04",
        maxDelay: "45 Days"
    };

    return (
        <div className="space-y-10 animate-in fade-in duration-1000 pb-20 font-sans selection:bg-red-50">

            {/* APEX URGENCY HEADER */}
            <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-6 bg-white p-10 rounded-[48px] border border-slate-200 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 p-10 opacity-[0.03] pointer-events-none">
                    <ShieldAlert size={200} className="text-red-600" />
                </div>
                <div className="space-y-2 relative z-10">
                    <div className="inline-flex items-center gap-2 bg-red-50 text-red-700 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border border-red-100">
                        <Radio size={14} className="animate-pulse" /> Statutory Risk Node / Section 7.8
                    </div>
                    <h1 className="text-4xl font-black text-slate-900 tracking-tighter uppercase leading-none text-wrap">Overdue Direction Registry</h1>
                    <p className="text-slate-500 font-medium italic text-lg tracking-tight">Oversight of binding orders exceeding the mandated fulfillment window.</p>
                </div>
                <div className="flex gap-4 relative z-10">
                    <Button variant="outline" className="h-14 px-8 rounded-2xl border-slate-200 font-black uppercase tracking-widest text-[10px] bg-white gap-2 shadow-sm hover:bg-slate-50 transition-all">
                        <FileSpreadsheet size={18} className="text-green-600" /> Export Risk XLS
                    </Button>
                    <Button className="h-14 px-10 rounded-2xl bg-red-600 text-white font-black uppercase tracking-widest text-[10px] shadow-2xl hover:bg-red-700 transition-all gap-2 border-t border-white/10">
                        <Gavel size={18} /> Issue Final Summons
                    </Button>
                </div>
            </div>

            {/* ENFORCEMENT KPI STRIP */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <RegistryStat label="Pending Orders" val={overdueStats.totalPending} icon={<Clock />} color="text-slate-900" />
                <RegistryStat label="Breached Orders" val={overdueStats.totalOverdue} icon={<Timer />} color="text-red-600" alert />
                <RegistryStat label="Critical Escalations" val={overdueStats.criticalEscalations} icon={<ShieldAlert />} color="from-orange-500 to-orange-700" alert />
                <div className="bg-white border-2 border-red-100 rounded-[32px] p-6 shadow-sm flex flex-col justify-center relative overflow-hidden group">
                    <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/topography.png')]" />
                    <p className="text-[9px] font-black uppercase text-red-400 mb-1 relative z-10">Max Delay Logged</p>
                    <p className="text-3xl font-black text-red-600 tracking-tighter group-hover:scale-105 transition-transform">{overdueStats.maxDelay}</p>
                </div>
            </div>

            {/* MASTER OVERDUE LEDGER */}
            <Card className="rounded-[48px] border-slate-200 shadow-sm overflow-hidden bg-white">
                <CardHeader className="p-0">
                    <div className="p-8 bg-gradient-to-r from-slate-800 via-slate-900 to-black text-white relative overflow-hidden">
                        {/* CARBON FIBER TEXTURE OVERLAY */}
                        <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
                        <div className="flex flex-col md:flex-row justify-between items-center gap-6 relative z-10">
                            <div className="flex items-center gap-4">
                                <div className="h-12 w-12 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center shadow-xl group-hover:rotate-6 transition-transform">
                                    <BadgeCheck size={24} className="text-red-400" />
                                </div>
                                <CardTitle className="text-sm font-black uppercase tracking-[0.3em]">Critical Overdue Registry</CardTitle>
                            </div>
                            <div className="flex gap-4 w-full md:w-auto">
                                <div className="relative flex-1 md:w-80">
                                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-white/50" />
                                    <input className="w-full pl-11 pr-4 py-3 bg-white/10 border border-white/20 rounded-2xl text-[10px] font-black uppercase outline-none text-white placeholder:text-white/40 focus:bg-white/20 transition-all shadow-inner" placeholder="Search Ref, Node or District..." />
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
                                <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400">Issued To</TableHead>
                                <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400">District Node</TableHead>
                                <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400 text-center">Due Date</TableHead>
                                <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400 text-center">Delay Duration</TableHead>
                                <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400 text-center">Escalation</TableHead>
                                <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400">Follow-up Status</TableHead>
                                <TableHead className="text-right px-8 text-[9px] font-black uppercase tracking-widest text-slate-400">Delay Reason</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody className="divide-y divide-slate-50">
                            <OverdueDirectionRow
                                refNo="DIR-SCPD-042"
                                target="Regional Health Hub"
                                district="Meerut"
                                due="15 Oct 2024"
                                days="05 Days"
                                reason="Documentation Mismatch at Node"
                                status="Notice Issued"
                                flag={true}
                            />
                            <OverdueDirectionRow
                                refNo="DIR-SCPD-091"
                                target="District Magistrate Office"
                                district="Agra"
                                due="02 Oct 2024"
                                days="18 Days"
                                reason="Pending Cabinet Approval"
                                status="Summons Prepared"
                                flag={true}
                            />
                            <OverdueDirectionRow
                                refNo="DIR-SCPD-112"
                                target="Nagar Nigam Urban Hub"
                                district="Varanasi"
                                due="10 Oct 2024"
                                days="10 Days"
                                reason="Technical Resource Shortfall"
                                status="Reviewing ATR"
                                flag={false}
                            />
                            <OverdueDirectionRow
                                refNo="DIR-SCPD-201"
                                target="Pvt Industrial Hub-B"
                                district="Lucknow"
                                due="18 Oct 2024"
                                days="02 Days"
                                reason="Liaison Officer on Leave"
                                status="Automated Reminder"
                                flag={false}
                            />
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>

            {/* FOOTER STATUTORY STRIP */}
            <footer className="flex justify-between items-center pt-8 border-t border-slate-200">
                <div className="flex items-center gap-3 text-slate-400">
                    <BadgeCheck size={18} className="text-red-600 animate-pulse" />
                    <span className="text-[10px] font-black uppercase tracking-widest leading-none">Critical Enforcement Hub: 09 Breaches Identified for Judicial Escalation</span>
                </div>
                <div className="flex gap-6">
                    <button className="text-[10px] font-black uppercase text-red-600 hover:underline">Download Master Default list</button>
                    <button className="text-[10px] font-black uppercase text-slate-400 hover:text-slate-900">Enforcement History</button>
                </div>
            </footer>
        </div>
    );
}

/* UI SUB-COMPONENTS */

function RegistryStat({ label, val, color, alert }: any) {
    return (
        <Card className="rounded-[32px] border-slate-100 bg-white p-6 shadow-sm group hover:shadow-xl transition-all duration-500 overflow-hidden relative">
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/topography.png')]" />
            <p className="text-[9px] font-black uppercase text-slate-400 tracking-widest mb-1 relative z-10">{label}</p>
            <p className={`text-2xl font-black tracking-tighter relative z-10 ${color}`}>{val}</p>
            {alert && <div className="absolute top-4 right-4 h-1.5 w-1.5 rounded-full bg-red-500 animate-ping" />}
        </Card>
    )
}

function OverdueDirectionRow({ refNo, target, district, due, days, reason, status, flag }: any) {
    return (
        <TableRow className="border-none hover:bg-slate-50 transition-all group cursor-pointer font-sans">
            <TableCell className="px-8 py-6">
                <span className="text-[10px] font-mono font-black text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded-md uppercase tracking-tighter">{refNo}</span>
                <p className="text-[8px] font-black text-slate-400 uppercase mt-2 italic leading-none">Order Registry</p>
            </TableCell>
            <TableCell>
                <div className="space-y-1">
                    <p className="text-sm font-black text-slate-800 uppercase tracking-tight leading-none">{target}</p>
                    <p className="text-[8px] font-bold text-slate-400 uppercase tracking-widest">Authorized Recipient</p>
                </div>
            </TableCell>
            <TableCell className="text-center font-bold text-slate-600 text-[10px] uppercase">
                <div className="flex items-center justify-center gap-2">
                    <MapPin size={12} className="text-slate-300" /> {district}
                </div>
            </TableCell>
            <TableCell className="text-center font-bold text-slate-400 text-[10px]">{due}</TableCell>
            <TableCell className="text-center">
                <div className="flex flex-col items-center">
                    <span className="text-[12px] font-mono font-black text-red-600 underline decoration-red-200 decoration-2">{days}</span>
                    <Badge className="bg-red-50 text-red-600 border-none text-[7px] font-black uppercase mt-1 px-1.5">OVERDUE</Badge>
                </div>
            </TableCell>
            <TableCell className="text-center">
                {flag ? (
                    <div className="h-8 w-8 rounded-full bg-red-50 border border-red-100 flex items-center justify-center mx-auto text-red-600 shadow-sm animate-pulse">
                        <ShieldAlert size={16} />
                    </div>
                ) : (
                    <div className="h-1.5 w-1.5 rounded-full bg-slate-200 mx-auto" />
                )}
            </TableCell>
            <TableCell>
                <Badge className="bg-slate-100 text-slate-600 border-none text-[8px] font-black uppercase px-2 py-0.5 tracking-tighter">{status}</Badge>
            </TableCell>
            <TableCell className="text-right px-8">
                <div className="space-y-1">
                    <p className="text-[10px] font-medium leading-relaxed italic text-red-600">{reason}</p>
                    <button className="text-blue-600 font-black uppercase text-[8px] tracking-widest hover:underline flex items-center gap-1 ml-auto opacity-0 group-hover:opacity-100 transition-all">
                        Execute Action <ArrowUpRight size={10} />
                    </button>
                </div>
            </TableCell>
        </TableRow>
    )
}