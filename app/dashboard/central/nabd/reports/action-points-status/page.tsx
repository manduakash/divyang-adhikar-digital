// app/dashboard/nabd/reports/action-points-status/page.tsx
"use client";
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
    Table, TableBody, TableCell, TableHead, TableHeader, TableRow
} from "@/components/ui/table";
import {
    Target, Search, Filter, DownloadCloud, Printer,
    FileBarChart, Building2, Calendar, Tag, AlertTriangle,
    CheckCircle2, CircleDashed, MessageSquare, Clock
} from "lucide-react";

export default function ActionPointsStatusReportPage() {
    const [searchTerm, setSearchTerm] = useState("");
    const [statusFilter, setStatusFilter] = useState("ALL");

    return (
        <div className="space-y-8 animate-in fade-in duration-1000 pb-20 font-sans selection:bg-amber-100">

            {/* PAGE HEADER */}
            <div className="flex flex-col xl:flex-row justify-between items-start xl:items-end gap-6 relative">
                <div className="space-y-2">
                    <div className="inline-flex items-center gap-2 bg-amber-50 text-amber-700 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border-2 border-amber-100">
                        <FileBarChart size={14} /> Statutory Reports
                    </div>
                    <h1 className="text-5xl font-black text-slate-800 tracking-tighter uppercase leading-none">Action Points Status</h1>
                    <p className="text-slate-500 font-medium text-lg italic underline underline-offset-8 decoration-amber-100">
                        Comprehensive follow-up ledger tracking advisory directives and their closure rates.
                    </p>
                </div>
                <div className="flex gap-4">
                    <Button variant="outline" className="h-14 px-8 rounded-full border-2 border-amber-200 text-amber-700 font-black uppercase tracking-widest text-[10px] bg-white shadow-xl hover:bg-amber-50 transition-all">
                        <Printer size={16} className="mr-2" /> Print
                    </Button>
                    <Button className="h-14 px-8 rounded-full bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 text-white font-black uppercase tracking-widest text-[10px] shadow-xl hover:shadow-2xl hover:scale-105 transition-all gap-2 group border-none">
                        <DownloadCloud size={16} /> Export CSV
                    </Button>
                </div>
            </div>

            {/* FILTER & SEARCH TOOLBAR */}
            <Card className="rounded-[32px] border-2 border-amber-50 shadow-md bg-white overflow-hidden">
                <div className="p-4 flex flex-col md:flex-row justify-between items-center gap-4 bg-amber-50/50">
                    <div className="relative w-full md:w-96 group">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-amber-500 group-focus-within:text-amber-600 transition-colors" />
                        <input
                            type="text"
                            placeholder="Search by Action, Authority, or Ref No..."
                            className="w-full pl-12 pr-4 py-3 border-2 border-amber-100 bg-white rounded-2xl text-xs font-bold text-slate-800 focus:outline-none focus:border-amber-400 focus:ring-4 focus:ring-amber-50 transition-all shadow-sm"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>

                    <div className="flex items-center gap-4 w-full md:w-auto">
                        <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-amber-600">
                            <Filter size={14} /> Filter Status:
                        </div>
                        <select
                            className="border-2 border-amber-100 bg-white rounded-2xl px-4 py-3 text-xs font-bold text-slate-800 focus:outline-none focus:border-amber-400 shadow-sm appearance-none cursor-pointer"
                            value={statusFilter}
                            onChange={(e) => setStatusFilter(e.target.value)}
                        >
                            <option value="ALL">All Statuses</option>
                            <option value="OPEN">Open / Pending</option>
                            <option value="CLOSED">Closed / Resolved</option>
                        </select>
                    </div>
                </div>
            </Card>

            {/* MAIN REPORT TABLE CARD */}
            <Card className="rounded-[40px] border-2 border-amber-100 shadow-xl overflow-hidden bg-white">

                {/* VIBRANT GRADIENT HEADER */}
                <CardHeader className="p-0 border-b-4 border-amber-200">
                    <div className="p-8 bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 text-white relative overflow-hidden flex flex-col md:flex-row justify-between items-center gap-6">
                        <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] bg-fixed" />

                        <div className="relative z-10 flex items-center gap-4">
                            <div className="h-12 w-12 rounded-2xl bg-white/20 backdrop-blur-md border-2 border-white/30 flex items-center justify-center shadow-lg">
                                <Target size={20} className="text-white" />
                            </div>
                            <div>
                                <CardTitle className="text-xl font-black uppercase tracking-tight text-white drop-shadow-sm">Tracking & Compliance Ledger</CardTitle>
                                <p className="text-[10px] font-bold text-amber-50 uppercase tracking-widest mt-1">Official Secretariat Registry</p>
                            </div>
                        </div>

                        <div className="relative z-10 flex gap-3">
                            <Badge className="bg-white/20 text-white border-none text-[10px] font-black uppercase tracking-widest px-4 py-2 backdrop-blur-md shadow-sm">
                                Open Actions: 02
                            </Badge>
                            <Badge className="bg-white/20 text-white border-none text-[10px] font-black uppercase tracking-widest px-4 py-2 backdrop-blur-md shadow-sm">
                                Total Records: 04
                            </Badge>
                        </div>
                    </div>
                </CardHeader>

                <CardContent className="p-0 overflow-x-auto relative min-h-[400px]">
                    <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/topography.png')]" />

                    <Table className="relative z-10">
                        <TableHeader className="bg-amber-50/50">
                            <TableRow className="border-b-2 border-amber-100">
                                <TableHead className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-amber-800">Recommendation Ref</TableHead>
                                <TableHead className="py-5 text-[10px] font-black uppercase tracking-[0.2em] text-amber-800 w-1/4">Action Point Summary</TableHead>
                                <TableHead className="py-5 text-[10px] font-black uppercase tracking-[0.2em] text-amber-800">Responsible Authority</TableHead>
                                <TableHead className="py-5 text-[10px] font-black uppercase tracking-[0.2em] text-amber-800 text-center">Target Date</TableHead>
                                <TableHead className="py-5 text-[10px] font-black uppercase tracking-[0.2em] text-amber-800 text-center">Tracking Status</TableHead>
                                <TableHead className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-amber-800 w-1/4">Latest Remarks</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody className="divide-y divide-amber-50">

                            <ReportRow
                                refNo="NABD/REC/2024-110"
                                action="Issue circular for mandatory ramps and tactile paths in all newly renovated Tier-2 and Tier-3 railway stations."
                                authority="Ministry of Railways"
                                targetDate="30 Nov 2024"
                                status="OPEN"
                                remarks="Circular drafting in progress. Interim reply received stating budget allocation under review."
                                isOverdue={false}
                            />
                            <ReportRow
                                refNo="NABD/REC/2024-109"
                                action="Submit comprehensive report on special educator vacancies across all central government schools."
                                authority="Ministry of Education"
                                targetDate="15 Oct 2024"
                                status="OPEN"
                                remarks="Report pending. Reminder notice issued on 20 Oct 2024."
                                isOverdue={true}
                            />
                            <ReportRow
                                refNo="NABD/REC/2024-108"
                                action="Nominate Nodal Accessibility Officers across all departments and publish list on ministry portals."
                                authority="All Central Ministries"
                                targetDate="01 Sep 2024"
                                status="CLOSED"
                                remarks="List of nodal officers submitted to DEPwD. Compliance verified."
                                isOverdue={false}
                            />
                            <ReportRow
                                refNo="NABD/REC/2024-107"
                                action="Constitute committee to revise subsidy norms for modern assistive devices."
                                authority="DEPwD, MSJE"
                                targetDate="15 Apr 2024"
                                status="CLOSED"
                                remarks="Committee formed under chairmanship of JS (DEPwD). Order copy archived."
                                isOverdue={false}
                            />

                        </TableBody>
                    </Table>
                </CardContent>
            </Card>

        </div>
    );
}

/* UI SUB-COMPONENTS */

function ReportRow({ refNo, action, authority, targetDate, status, remarks, isOverdue }: any) {
    const isOpen = status === 'OPEN';

    const statusBadge = isOpen
        ? "bg-amber-100 text-amber-700 hover:bg-amber-100 border-none"
        : "bg-emerald-100 text-emerald-700 hover:bg-emerald-100 border-none";

    const StatusIcon = isOpen ? CircleDashed : CheckCircle2;

    return (
        <TableRow className="border-none hover:bg-amber-50/50 transition-all group">

            {/* Recommendation Ref */}
            <TableCell className="px-8 py-5">
                <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-amber-100 flex items-center justify-center shrink-0">
                        <Tag size={12} className="text-amber-600" />
                    </div>
                    <span className="font-mono text-[11px] font-black text-amber-700">{refNo}</span>
                </div>
            </TableCell>

            {/* Action Point */}
            <TableCell className="py-5">
                <span className="text-xs font-bold text-slate-700 line-clamp-3 leading-relaxed bg-white border border-slate-100 p-3 rounded-xl shadow-sm block relative overflow-visible">
                    {action}
                    {isOverdue && (
                        <div className="absolute top-0 right-0 -mt-2 -mr-2 bg-red-500 text-white text-[8px] font-black uppercase px-2 py-0.5 rounded-full shadow-sm flex items-center gap-1 animate-pulse">
                            <AlertTriangle size={8} /> OVERDUE
                        </div>
                    )}
                </span>
            </TableCell>

            {/* Responsible Authority */}
            <TableCell className="py-5">
                <span className="text-[10px] font-black text-slate-600 uppercase tracking-widest flex items-start gap-2 max-w-[180px]">
                    <Building2 size={12} className="text-amber-400 shrink-0 mt-0.5" />
                    <span className="leading-tight">{authority}</span>
                </span>
            </TableCell>

            {/* Target Date */}
            <TableCell className="py-5 text-center">
                <span className={`font-mono text-[11px] font-bold flex flex-col items-center gap-1 ${isOverdue ? 'text-red-600 bg-red-50' : 'text-slate-500 bg-slate-50'} border border-slate-100 px-3 py-1.5 rounded-lg shadow-inner w-fit mx-auto`}>
                    <Clock size={12} className={isOverdue ? 'text-red-500' : 'text-slate-400'} />
                    {targetDate}
                </span>
            </TableCell>

            {/* Status */}
            <TableCell className="py-5 text-center">
                <Badge className={`text-[9px] font-black uppercase tracking-widest px-3 py-1.5 flex items-center justify-center gap-1.5 w-max mx-auto shadow-sm ${statusBadge}`}>
                    <StatusIcon size={12} className={isOpen ? 'animate-spin-slow' : ''} />
                    {status}
                </Badge>
            </TableCell>

            {/* Remarks */}
            <TableCell className="px-8 py-5">
                <div className="text-[10px] font-bold text-slate-600 leading-relaxed flex items-start gap-2 border-l-2 border-amber-200 pl-3 py-1 bg-white/50">
                    <MessageSquare size={12} className="text-amber-400 shrink-0 mt-0.5" />
                    <span className="line-clamp-3">{remarks}</span>
                </div>
            </TableCell>

        </TableRow>
    );
}