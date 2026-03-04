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
    Download, Database, Search, Filter,
    BadgeCheck, History, Clock, AlertCircle,
    ShieldAlert, Landmark, FileText, CheckCircle2
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function DirectionsComplianceReport() {
    return (
        <div className="space-y-12 animate-in fade-in duration-1000 pb-20 font-sans selection:bg-blue-100 bg-[#fbfcfd]">

            {/* APEX HUB HEADER - STATUTORY AUTHORITY LEVEL */}
            <Card className="rounded-[48px] border-2 border-slate-100 bg-white shadow-2xl relative overflow-hidden">
                <CardContent className="p-12 relative z-10 flex flex-col xl:flex-row justify-between items-center gap-12">
                    <div className="space-y-6 flex-1 text-center xl:text-left">
                        <div className="inline-flex items-center gap-3 bg-blue-50 text-blue-700 px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.3em] border-2 border-blue-100">
                            <ShieldAlert size={16} className="animate-pulse" /> Statutory Direction Node
                        </div>
                        <h1 className="text-6xl font-black text-slate-900 tracking-tighter uppercase leading-[0.9]">
                            Directions Issued <br /> <span className="text-blue-600 italic">& Compliance Report</span>
                        </h1>
                        <p className="text-xl font-bold text-slate-500 italic uppercase tracking-tighter">
                            National Audit Hub • Benchmarking Institutional Adherence to Statutory Orders
                        </p>
                    </div>

                    <div className="flex flex-col gap-4 min-w-[320px]">
                        <Button className="h-16 px-10 rounded-[24px] bg-slate-950 text-white font-black uppercase tracking-widest text-[11px] shadow-2xl hover:bg-black transition-all group">
                            <Printer size={18} /> Print Executive Summary <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </Button>
                        <div className="flex gap-3">
                            <Button variant="outline" className="flex-1 h-12 rounded-xl border-2 border-slate-200 font-black text-[10px] uppercase bg-white gap-2 shadow-sm hover:bg-slate-50 transition-all text-slate-600 tracking-widest">
                                <FileSpreadsheet size={16} className="text-green-600" /> Export XLS
                            </Button>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* COMPLIANCE KPI GRID */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <KPICard label="Total Directions" value="1,842" icon={<FileText className="text-blue-600" />} />
                <KPICard label="Fully Complied" value="1,210" icon={<CheckCircle2 className="text-emerald-600" />} />
                <KPICard label="Pending / In-Review" value="482" icon={<Clock className="text-orange-600" />} />
                <KPICard label="Statutory Overdue" value="150" icon={<AlertCircle className="text-red-600" />} isCritical />
            </div>

            {/* DIRECTIONS REGISTRY - INDIGO CARBON FIBER */}
            <Card className="rounded-[52px] border-2 border-slate-200 shadow-2xl overflow-hidden bg-white min-h-[800px]">
                <CardHeader className="p-0">
                    <div className="p-10 bg-gradient-to-r from-slate-900 via-indigo-950 to-indigo-900 text-white relative overflow-hidden">
                        {/* CARBON FIBER TEXTURE OVERLAY */}
                        <div className="absolute inset-0 opacity-20 pointer-events-none"
                            style={{ backgroundImage: `radial-gradient(black 2px, transparent 0)`, backgroundSize: '4px 4px' }} />

                        <div className="flex flex-col md:flex-row justify-between items-center gap-10 relative z-10">
                            <div className="flex items-center gap-5">
                                <div className="h-12 w-12 rounded-2xl bg-white/10 backdrop-blur-md border-2 border-white/20 flex items-center justify-center shadow-xl">
                                    <Landmark size={24} className="text-blue-400" />
                                </div>
                                <div className="space-y-1">
                                    <CardTitle className="text-sm font-black uppercase tracking-[0.3em] leading-none">National Direction Ledger</CardTitle>
                                    <p className="text-[10px] font-bold text-indigo-300 uppercase tracking-widest leading-none">Interstate Statutory Compliance Monitoring Registry</p>
                                </div>
                            </div>
                            <div className="relative group flex-1 max-w-md">
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-white/40" />
                                <input className="w-full pl-11 pr-6 py-4 bg-white/5 border-2 border-white/10 rounded-2xl text-[10px] font-black uppercase outline-none text-white placeholder:text-white/20 focus:bg-white/10 transition-all shadow-inner" placeholder="Search Ref No, State or Subject..." />
                            </div>
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="p-0">
                    <Table>
                        <TableHeader className="bg-slate-50/80 font-sans border-b-2 border-slate-100">
                            <TableRow className="border-none">
                                <TableHead className="px-10 py-8 text-[9px] font-black uppercase tracking-widest text-slate-400">Direction Ref No.</TableHead>
                                <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400">Issued To (State/Authority)</TableHead>
                                <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400">Subject</TableHead>
                                <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400 text-center">Date Issued</TableHead>
                                <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400 text-center">Due Date</TableHead>
                                <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400 text-center">Status</TableHead>
                                <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400 text-center">Compliance Date</TableHead>
                                <TableHead className="text-right px-10 text-[9px] font-black uppercase tracking-widest text-slate-400">Remarks</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody className="divide-y divide-slate-100 font-sans">
                            <DirectionRow
                                refNo="DAE/DIR-2024/012"
                                issuedTo="Uttar Pradesh (PWD Dept)"
                                subject="Accessibility Audit Implementation"
                                dateIssued="10 OCT 2024"
                                dueDate="10 NOV 2024"
                                status="COMPLIED"
                                complianceDate="05 NOV 2024"
                                remarks="Verification audit successful"
                                success
                            />
                            <DirectionRow
                                refNo="DAE/DIR-2024/045"
                                issuedTo="Maharashtra (Social Welfare)"
                                subject="Identified Post Recruitment"
                                dateIssued="15 OCT 2024"
                                dueDate="15 NOV 2024"
                                status="PENDING"
                                complianceDate="---"
                                remarks="Response awaited from Directorate"
                                warning
                            />
                            <DirectionRow
                                refNo="DAE/DIR-2024/008"
                                issuedTo="Karnataka (Edu Board)"
                                subject="Inclusion in Primary Schools"
                                dateIssued="01 SEP 2024"
                                dueDate="30 SEP 2024"
                                status="OVERDUE"
                                complianceDate="---"
                                remarks="Urgent Notice Issued for Breach"
                                alert
                            />
                            <DirectionRow
                                refNo="DAE/DIR-2024/102"
                                issuedTo="Delhi (Transport Corp)"
                                subject="Bus Fleet Accessibility Retrofit"
                                dateIssued="20 OCT 2024"
                                dueDate="20 DEC 2024"
                                status="IN-REVIEW"
                                complianceDate="---"
                                remarks="Self-compliance report submitted"
                            />
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>

            {/* HUB FOOTER */}
            <footer className="pt-12 border-t-2 border-slate-100 flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="flex items-center gap-4">
                    <BadgeCheck className="text-indigo-600 shadow-xl" size={24} />
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 leading-none">DAEGS Statutory Framework v2.1 • Verification Synchronized Across Command States</span>
                </div>
                <div className="flex gap-4">
                    <Button variant="outline" className="h-14 px-8 rounded-2xl border-2 border-slate-200 font-bold bg-white gap-2 text-[10px] uppercase tracking-widest hover:bg-slate-50 transition-all"><History size={18} /> Review History</Button>
                    <Button className="h-14 px-10 rounded-2xl bg-slate-950 text-white font-black uppercase tracking-widest text-[10px] shadow-2xl gap-2 hover:bg-black transition-all tracking-widest">
                        <Printer size={18} /> Export Index
                    </Button>
                </div>
            </footer>
        </div>
    );
}

/* UI SUB-COMPONENTS */

function KPICard({ label, value, icon, isCritical }: any) {
    return (
        <Card className={`rounded-[32px] border-2 border-slate-100 p-8 flex flex-col gap-4 shadow-xl shadow-slate-200/50 bg-white group hover:border-blue-200 transition-all relative overflow-hidden`}>
            <div className="h-10 w-10 rounded-xl bg-slate-50 flex items-center justify-center border border-slate-100 group-hover:scale-110 transition-transform">
                {icon}
            </div>
            <div className="space-y-1">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{label}</p>
                <p className={`text-4xl font-black tracking-tight ${isCritical ? 'text-red-600 underline decoration-red-100' : 'text-slate-900'}`}>{value}</p>
            </div>
            {isCritical && <div className="absolute top-4 right-4 h-2 w-2 rounded-full bg-red-500 animate-ping" />}
        </Card>
    );
}

function DirectionRow({ refNo, issuedTo, subject, dateIssued, dueDate, status, complianceDate, remarks, success, warning, alert }: any) {
    const statusColor = success ? 'bg-green-500' : alert ? 'bg-red-500 animate-pulse shadow-red-200 shadow-lg' : warning ? 'bg-orange-500' : 'bg-blue-500';

    return (
        <TableRow className="border-none hover:bg-slate-50/50 transition-all group cursor-default">
            {/* Direction Reference No */}
            <TableCell className="px-10 py-8 font-mono font-black text-indigo-700 text-xs uppercase tracking-tighter">{refNo}</TableCell>

            {/* Issued To */}
            <TableCell>
                <div className="flex items-center gap-4">
                    <div className={`h-1.5 w-1.5 rounded-full shrink-0 ${statusColor}`} />
                    <span className="text-sm font-black text-slate-950 uppercase tracking-tight leading-none italic">{issuedTo}</span>
                </div>
            </TableCell>

            {/* Subject */}
            <TableCell>
                <div className="max-w-[200px]">
                    <span className="text-[11px] font-bold text-slate-600 uppercase leading-snug">{subject}</span>
                </div>
            </TableCell>

            {/* Date Issued */}
            <TableCell className="text-center font-mono font-bold text-slate-500 text-xs uppercase tracking-tighter">{dateIssued}</TableCell>

            {/* Compliance Due Date */}
            <TableCell className="text-center">
                <div className="flex flex-col items-center">
                    <span className={`text-xs font-mono font-black ${alert ? 'text-red-600 underline' : 'text-slate-900'}`}>{dueDate}</span>
                    <p className="text-[7px] font-black uppercase text-slate-400 tracking-widest mt-1">SLA Limit</p>
                </div>
            </TableCell>

            {/* Compliance Status */}
            <TableCell className="text-center">
                <Badge className={`border-2 font-black text-[8px] uppercase px-3 py-1 tracking-[0.2em] ${success ? 'bg-emerald-50 text-green-700 border-green-200' :
                    alert ? 'bg-red-50 text-red-700 border-red-200 shadow-sm animate-bounce' :
                        'bg-slate-50 text-slate-700 border-slate-200'
                    }`}>
                    {status}
                </Badge>
            </TableCell>

            {/* Date of Compliance */}
            <TableCell className="text-center font-mono font-black text-xs text-indigo-600">{complianceDate}</TableCell>

            {/* Remarks */}
            <TableCell className="text-right px-10">
                <div className="flex flex-col items-end gap-1">
                    <span className="text-[10px] font-bold text-slate-500 uppercase leading-none">{remarks}</span>
                    <div className={`h-0.5 w-8 mt-1 ${success ? 'bg-green-100' : alert ? 'bg-red-100' : 'bg-slate-100'}`} />
                </div>
            </TableCell>
        </TableRow>
    )
}