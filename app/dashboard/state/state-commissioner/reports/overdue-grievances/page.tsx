// app/dashboard/scpd/reports/overdue-grievances/page.tsx
"use client";
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
    Table, TableBody, TableCell, TableHead, TableHeader, TableRow
} from "@/components/ui/table";
import {
    AlertCircle, Timer, ShieldAlert, Search,
    Filter, Printer, FileSpreadsheet, History,
    ArrowUpRight, Globe, Map, Sparkles,
    CheckCircle2, Landmark, Clock,
    BadgeCheck, Download, Gavel, Radio,
    Navigation, MousePointer2,
    MapPin
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function OverdueGrievanceReport() {

    // Section A7.6 Aggregated Overdue Totals
    const overdueStats = {
        totalPending: "842",
        slaBreached: "124",
        escalatedToState: "42",
        avgWaitTime: "45 Days"
    };

    return (
        <div className="space-y-10 animate-in fade-in duration-1000 pb-20 font-sans selection:bg-red-50">

            {/* APEX URGENCY HEADER */}
            <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-6 bg-white p-10 rounded-[48px] border border-slate-200 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 p-10 opacity-[0.03] pointer-events-none">
                    <AlertCircle size={200} className="text-red-600" />
                </div>
                <div className="space-y-2 relative z-10">
                    <div className="inline-flex items-center gap-2 bg-red-50 text-red-700 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border border-red-100">
                        <Radio size={14} className="animate-pulse" /> Statutory Risk monitor Active
                    </div>
                    <h1 className="text-4xl font-black text-slate-900 tracking-tighter uppercase leading-none text-wrap">Overdue Grievance Ledger</h1>
                    <p className="text-slate-500 font-medium italic text-lg tracking-tight">Oversight of cases exceeding the 30-day statutory response limit.</p>
                </div>
                <div className="flex gap-4 relative z-10">
                    <Button variant="outline" className="h-14 px-8 rounded-2xl border-slate-200 font-black uppercase tracking-widest text-[10px] bg-white gap-2 shadow-sm hover:bg-slate-50">
                        <FileSpreadsheet size={18} className="text-green-600" /> Export Overdue XLS
                    </Button>
                    <Button className="h-14 px-10 rounded-2xl bg-red-600 text-white font-black uppercase tracking-widest text-[10px] shadow-2xl hover:bg-red-700 transition-all gap-2 border-t border-white/20">
                        <ShieldAlert size={18} /> Issue Bulk Notices
                    </Button>
                </div>
            </div>

            {/* RISK KPI STRIP */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <RegistryStat label="Total Pending Cases" val={overdueStats.totalPending} icon={<Clock />} color="text-slate-900" />
                <RegistryStat label="SLA Breach (Critical)" val={overdueStats.slaBreached} icon={<Timer />} color="text-red-600" alert />
                <RegistryStat label="Escalation Flags" val={overdueStats.escalatedToState} icon={<ShieldAlert />} color="from-orange-500 to-orange-700" alert />
                <div className="bg-white border-2 border-red-100 rounded-[32px] p-6 shadow-sm flex flex-col justify-center relative overflow-hidden group">
                    <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/topography.png')]" />
                    <p className="text-[9px] font-black uppercase tracking-widest text-red-400 mb-1 relative z-10">Avg Pending Duration</p>
                    <p className="text-3xl font-black text-red-600 tracking-tighter group-hover:scale-105 transition-transform">{overdueStats.avgWaitTime}</p>
                </div>
            </div>

            {/* MASTER OVERDUE TABLE */}
            <Card className="rounded-[48px] border-slate-200 shadow-sm overflow-hidden bg-white">
                <CardHeader className="p-0">
                    <div className="p-8 bg-gradient-to-r from-slate-800 via-slate-900 to-black text-white relative overflow-hidden">
                        {/* CARBON FIBER TEXTURE OVERLAY */}
                        <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
                        <div className="flex flex-col md:flex-row justify-between items-center gap-6 relative z-10">
                            <div className="flex items-center gap-4">
                                <div className="h-12 w-12 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center shadow-xl group-hover:rotate-6 transition-transform">
                                    <Gavel size={24} className="text-blue-400" />
                                </div>
                                <CardTitle className="text-sm font-black uppercase tracking-[0.3em]">Critical Pendency Registry</CardTitle>
                            </div>
                            <div className="flex gap-4 w-full md:w-auto">
                                <div className="relative flex-1 md:w-80">
                                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-white/50" />
                                    <input className="w-full pl-11 pr-4 py-3 bg-white/5 border border-white/10 rounded-2xl text-[10px] font-black uppercase outline-none text-white placeholder:text-white/40 focus:bg-white/10 transition-all shadow-inner" placeholder="Filter District or ID..." />
                                </div>
                            </div>
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="p-0">
                    <Table>
                        <TableHeader className="bg-slate-50/80 font-sans">
                            <TableRow className="border-slate-100">
                                <TableHead className="px-8 py-6 text-[9px] font-black uppercase tracking-widest text-slate-400 w-[180px]">Grievance ID</TableHead>
                                <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400">Category / District</TableHead>
                                <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400">Respondent Name</TableHead>
                                <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400 text-center">Receipt Date</TableHead>
                                <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400 text-center">Pending Status</TableHead>
                                <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400 text-center">Current Stage</TableHead>
                                <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400 text-center">Escalation</TableHead>
                                <TableHead className="text-right px-8 text-[9px] font-black uppercase tracking-widest text-slate-400">Next Action</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody className="divide-y divide-slate-50">
                            <OverdueRow
                                id="GRV-UP-2024-442"
                                cat="Admission"
                                district="Varanasi"
                                name="Green Valley Academy"
                                received="05 Sep 2024"
                                days="45 Days"
                                breach={true}
                                stage="Inquiry Pending"
                                action="Summon Principal"
                                flag={true}
                            />
                            <OverdueRow
                                id="GRV-UP-2024-910"
                                cat="Discrimination"
                                district="Lucknow"
                                name="Transport Dept Hub"
                                received="12 Oct 2024"
                                days="08 Days"
                                breach={false}
                                stage="Verification"
                                action="Wait for ATR"
                                flag={false}
                            />
                            <OverdueRow
                                id="GRV-UP-2024-001"
                                cat="Accessibility"
                                district="Agra"
                                name="Nagar Nigam Agra"
                                received="15 Aug 2024"
                                days="66 Days"
                                breach={true}
                                stage="Legal Scrutiny"
                                action="Issue Fine Order"
                                flag={true}
                            />
                            <OverdueRow
                                id="GRV-UP-2024-118"
                                cat="Employment"
                                district="Meerut"
                                name="Pvt Retail Corp"
                                received="20 Sep 2024"
                                days="30 Days"
                                breach={true}
                                stage="Grievance Hearing"
                                action="Conduct Hearing"
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
                    <span className="text-[10px] font-black uppercase tracking-widest leading-none">Critical Breach Sync: 124 Records Identified for Immediate Commissioner Directives</span>
                </div>
                <div className="flex gap-6">
                    <button className="text-[10px] font-black uppercase text-red-600 hover:underline">Download Default List</button>
                    <button className="text-[10px] font-black uppercase text-slate-400 hover:text-slate-900">System Activity History</button>
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

function OverdueRow({ id, cat, district, name, received, days, breach, stage, action, flag }: any) {
    return (
        <TableRow className="border-none hover:bg-slate-50 transition-all group cursor-pointer font-sans">
            <TableCell className="px-8 py-6">
                <span className="text-[10px] font-mono font-black text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded-md uppercase tracking-tighter">{id}</span>
                <p className="text-[8px] font-black text-slate-400 uppercase mt-2 italic">Registry Node</p>
            </TableCell>
            <TableCell>
                <div className="space-y-1">
                    <p className="text-sm font-black text-slate-800 uppercase tracking-tight leading-none">{cat}</p>
                    <div className="flex items-center gap-1.5 opacity-60">
                        <MapPin size={10} />
                        <span className="text-[9px] font-bold uppercase tracking-widest">{district}</span>
                    </div>
                </div>
            </TableCell>
            <TableCell>
                <div className="space-y-1">
                    <p className="text-[10px] font-black text-indigo-600 uppercase tracking-widest leading-none">{name}</p>
                    <p className="text-[8px] font-bold text-slate-400 uppercase tracking-tighter">Accused Entity</p>
                </div>
            </TableCell>
            <TableCell className="text-center font-bold text-slate-400 text-[10px]">{received}</TableCell>
            <TableCell className="text-center">
                <div className="flex flex-col items-center">
                    <span className={`text-[12px] font-mono font-black ${breach ? 'text-red-600 underline decoration-red-200 decoration-2' : 'text-slate-700'}`}>{days}</span>
                    {breach && <Badge className="bg-red-50 text-red-600 border-none text-[7px] font-black uppercase mt-1 px-1.5">SLA BREACH</Badge>}
                </div>
            </TableCell>
            <TableCell className="text-center">
                <Badge className="bg-slate-100 text-slate-600 border-none text-[8px] font-black uppercase px-2 py-0.5 tracking-tighter">{stage}</Badge>
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
            <TableCell className="text-right px-8">
                <div className="space-y-1">
                    <p className="text-[9px] font-black text-slate-900 uppercase tracking-widest">{action}</p>
                    <button className="text-blue-600 font-black uppercase text-[8px] tracking-widest hover:underline flex items-center gap-1 ml-auto opacity-0 group-hover:opacity-100 transition-all">
                        Execute <ArrowUpRight size={10} />
                    </button>
                </div>
            </TableCell>
        </TableRow>
    )
}