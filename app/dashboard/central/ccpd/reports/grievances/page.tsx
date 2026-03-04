// app/dashboard/ccpd/reports/national-grievance/page.tsx
"use client";
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
    Table, TableBody, TableCell, TableHead, TableHeader, TableRow
} from "@/components/ui/table";
import {
    ShieldCheck, BadgeCheck, Search, Filter,
    Printer, FileSpreadsheet, ArrowUpRight,
    Download, Activity, Clock, AlertTriangle,
    Zap, Map
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function NationalGrievanceDisposalReport() {
    return (
        <div className="space-y-10 animate-in fade-in duration-1000 pb-20 font-sans selection:bg-purple-100 bg-[#fbfcfd]">

            {/* APEX HEADER SECTION */}
            <Card className="rounded-[40px] border-none bg-white shadow-2xl relative overflow-hidden">
                <CardContent className="p-10 flex flex-col xl:flex-row justify-between items-center gap-8">
                    <div className="space-y-4 flex-1 text-center xl:text-left">
                        <div className="inline-flex items-center gap-2 bg-purple-50 text-purple-600 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border border-purple-100">
                            <Activity size={14} /> National Redressal Node
                        </div>
                        <h1 className="text-5xl font-black text-slate-900 tracking-tighter uppercase leading-none">
                            National Grievance <br /> <span className="text-purple-600">Status & Disposal Report</span>
                        </h1>
                        <p className="text-lg font-bold text-slate-400 italic uppercase tracking-tight">Audit of citizen complaints and institutional response performance across India.</p>
                    </div>

                    <div className="flex flex-col gap-3 min-w-[280px]">
                        <Button className="h-14 px-8 rounded-2xl bg-slate-900 text-white font-black uppercase tracking-widest text-[10px] shadow-2xl hover:bg-black group">
                            <Printer size={18} /> Print Certified Summary <ArrowUpRight size={14} className="ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </Button>
                        <Button variant="outline" className="h-12 rounded-xl border-2 border-slate-100 font-black text-[10px] uppercase bg-white gap-2 shadow-sm hover:bg-slate-50 transition-all">
                            <FileSpreadsheet size={16} className="text-green-600" /> Export XLS
                        </Button>
                    </div>
                </CardContent>
            </Card>

            {/* KPI OVERVIEW GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-2">
                <KPICard label="Total Filings (National)" value="482,910" color="text-slate-900" />
                <KPICard label="Resolved & Verified" value="441,020" color="text-emerald-600" />
                <KPICard label="Pending Beyond SLA" value="4,821" color="text-red-600" isCritical />
                <KPICard label="Redressal Efficiency" value="91.4%" color="text-purple-600" />
            </div>

            {/* DATA REGISTRY LEDGER */}
            <Card className="rounded-[48px] border-none shadow-2xl overflow-hidden bg-white min-h-[700px]">
                <CardHeader className="p-0">
                    <div className="p-8 bg-gradient-to-r from-purple-700 via-indigo-700 to-indigo-800 text-white">
                        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                            <div className="flex items-center gap-4">
                                <div className="h-10 w-10 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-lg">
                                    <BadgeCheck size={20} className="text-purple-200" />
                                </div>
                                <div>
                                    <CardTitle className="text-xs font-black uppercase tracking-[0.2em] opacity-90">National Grievance Tracking Ledger</CardTitle>
                                    <p className="text-[10px] font-bold text-purple-200 uppercase tracking-widest">Consolidated Interstate Transaction Log</p>
                                </div>
                            </div>
                            <div className="relative group flex-1 max-w-md">
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-white/40" />
                                <input className="w-full pl-11 pr-6 py-3.5 bg-white/5 border border-white/10 rounded-2xl text-[10px] font-black uppercase outline-none text-white placeholder:text-white/30 focus:bg-white/10 transition-all shadow-inner" placeholder="Search ID, State or Accused Authority..." />
                            </div>
                            <Button variant="ghost" className="h-12 w-12 p-0 rounded-2xl bg-white/10 text-white hover:bg-white/20 border border-white/10 shadow-lg">
                                <Filter size={18} />
                            </Button>
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="p-0">
                    <Table>
                        <TableHeader className="bg-slate-50/50 font-sans border-b border-slate-100">
                            <TableRow className="border-none">
                                <TableHead className="px-10 py-7 text-[9px] font-black uppercase tracking-widest text-slate-400">Grievance ID</TableHead>
                                <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400">State / UT</TableHead>
                                <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400">Category</TableHead>
                                <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400 text-center">Date Received</TableHead>
                                <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400">Forwarded To</TableHead>
                                <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400 text-center">Status</TableHead>
                                <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400 text-center">SLA Due Date</TableHead>
                                <TableHead className="text-right px-10 text-[9px] font-black uppercase tracking-widest text-slate-400">Overdue</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody className="divide-y divide-slate-50 font-sans">
                            <GrievanceRow
                                id="GRV-UP-2024-910" state="Uttar Pradesh" category="Discrimination" received="12 Oct 24"
                                forward="Transport HQ" status="PENDING" sla="11 Nov 24" overdue={false}
                            />
                            <GrievanceRow
                                id="GRV-MH-2024-442" state="Maharashtra" category="Accessibility" received="02 Sep 24"
                                forward="Public Works Dept" status="SLA BREACH" sla="02 Oct 24" overdue={true}
                            />
                            <GrievanceRow
                                id="GRV-KA-2024-118" state="Karnataka" category="Admission" received="10 Sep 24"
                                forward="Education Board" status="RESOLVED" sla="10 Oct 24" overdue={false}
                            />
                            <GrievanceRow
                                id="GRV-DL-2024-001" state="New Delhi" category="Employment" received="15 Oct 24"
                                forward="Labour Dept" status="UNDER REVIEW" sla="14 Nov 24" overdue={false}
                            />
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>

            {/* FOOTER SYNC STATUS */}
            <footer className="px-4 flex justify-between items-center text-slate-400">
                <div className="flex items-center gap-3">
                    <Zap size={14} className="text-yellow-500 fill-yellow-500" />
                    <span className="text-[10px] font-black uppercase tracking-widest">Statutory Redressal Sync: Active • Consolidated National Watchlist</span>
                </div>
                <div className="flex items-center gap-8">
                    <button className="text-[10px] font-black uppercase tracking-widest hover:text-purple-600 transition-colors">Download Master ZIP</button>
                    <button className="text-[10px] font-black uppercase tracking-widest hover:text-purple-600 transition-colors">System Logs</button>
                </div>
            </footer>
        </div>
    );
}

/* UI SUB-COMPONENTS */

function KPICard({ label, value, color, isCritical }: { label: string, value: string, color: string, isCritical?: boolean }) {
    return (
        <Card className="rounded-3xl border-none bg-white shadow-xl shadow-slate-200/50 p-7 relative">
            {isCritical && (
                <div className="absolute top-4 right-4 h-2 w-2 rounded-full bg-red-500 animate-ping" />
            )}
            <div className="space-y-2">
                <p className="text-[9px] font-black uppercase text-slate-400 tracking-[0.15em]">{label}</p>
                <p className={`text-4xl font-black tracking-tight ${color}`}>{value}</p>
            </div>
        </Card>
    )
}

function GrievanceRow({ id, state, category, received, forward, status, sla, overdue }: any) {
    return (
        <TableRow className="border-none hover:bg-slate-50/80 transition-colors group cursor-default">
            <TableCell className="px-10 py-7">
                <div className="space-y-1">
                    <span className="text-xs font-black text-purple-700 font-mono tracking-tight uppercase group-hover:text-purple-900 transition-colors">{id}</span>
                    <p className="text-[8px] font-black text-slate-300 uppercase tracking-widest">Registered Hub</p>
                </div>
            </TableCell>
            <TableCell>
                <div className="flex items-center gap-2">
                    <Map size={12} className="text-slate-300" />
                    <span className="text-xs font-black text-slate-700 uppercase tracking-tight">{state}</span>
                </div>
            </TableCell>
            <TableCell>
                <div className="space-y-0.5">
                    <span className="text-xs font-black text-slate-800 uppercase tracking-tight">{category}</span>
                    <p className="text-[8px] font-bold text-slate-400 tracking-tighter uppercase">Section 21 Violation</p>
                </div>
            </TableCell>
            <TableCell className="text-center">
                <span className="text-xs font-bold text-slate-600 font-mono tracking-tight uppercase">{received}</span>
            </TableCell>
            <TableCell>
                <div className="space-y-0.5">
                    <span className="text-xs font-black text-indigo-700 uppercase tracking-tight">{forward}</span>
                    <p className="text-[8px] font-bold text-slate-400 uppercase tracking-widest">Authorized Dept</p>
                </div>
            </TableCell>
            <TableCell className="text-center">
                <Badge className={`border-2 font-black text-[8px] tracking-[0.15em] px-3 py-1 rounded-full ${status === 'RESOLVED' ? 'bg-emerald-50 text-green-700 border-green-100' :
                    status === 'SLA BREACH' ? 'bg-red-50 text-red-700 border-red-100 animate-pulse' :
                        'bg-slate-50 text-slate-700 border-slate-100'
                    }`}>
                    {status}
                </Badge>
            </TableCell>
            <TableCell className="text-center">
                <div className="flex flex-col items-center">
                    <span className={`text-xs font-bold font-mono tracking-tight ${overdue ? 'text-red-600' : 'text-slate-400'}`}>{sla}</span>
                    <div className={`h-0.5 w-10 mt-1 ${overdue ? 'bg-red-200' : 'bg-slate-100'}`} />
                </div>
            </TableCell>
            <TableCell className="text-right px-10">
                <div className="flex items-center justify-end gap-2">
                    {overdue && <AlertTriangle size={14} className="text-red-500 animate-bounce" />}
                    <span className={`text-[11px] font-black uppercase tracking-tighter ${overdue ? 'text-red-600 underline decoration-red-200 decoration-2 underline-offset-4' : 'text-emerald-500'}`}>
                        {overdue ? 'YES' : 'NO'}
                    </span>
                </div>
            </TableCell>
        </TableRow>
    )
}