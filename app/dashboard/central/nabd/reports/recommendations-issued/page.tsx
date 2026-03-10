// app/dashboard/nabd/reports/recommendations-issued/page.tsx
"use client";
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
    Table, TableBody, TableCell, TableHead, TableHeader, TableRow
} from "@/components/ui/table";
import {
    Lightbulb, Search, Filter, DownloadCloud, Printer,
    FileBarChart, Building2, Calendar, Tag, AlertTriangle, Zap, Info
} from "lucide-react";

export default function RecommendationsIssuedReportPage() {
    const [searchTerm, setSearchTerm] = useState("");
    const [priorityFilter, setPriorityFilter] = useState("ALL");

    return (
        <div className="space-y-8 animate-in fade-in duration-1000 pb-20 font-sans selection:bg-purple-100">

            {/* PAGE HEADER */}
            <div className="flex flex-col xl:flex-row justify-between items-start xl:items-end gap-6 relative">
                <div className="space-y-2">
                    <div className="inline-flex items-center gap-2 bg-purple-50 text-purple-700 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border-2 border-purple-100">
                        <FileBarChart size={14} /> Statutory Reports
                    </div>
                    <h1 className="text-5xl font-black text-slate-800 tracking-tighter uppercase leading-none">Recommendations Issued</h1>
                    <p className="text-slate-500 font-medium text-lg italic underline underline-offset-8 decoration-purple-100">
                        Formal registry of policy-level advisories dispatched to Central and State Authorities.
                    </p>
                </div>
                <div className="flex gap-4">
                    <Button variant="outline" className="h-14 px-8 rounded-full border-2 border-purple-200 text-purple-700 font-black uppercase tracking-widest text-[10px] bg-white shadow-xl hover:bg-purple-50 transition-all">
                        <Printer size={16} className="mr-2" /> Print
                    </Button>
                    <Button className="h-14 px-8 rounded-full bg-gradient-to-r from-purple-500 via-fuchsia-500 to-pink-500 text-white font-black uppercase tracking-widest text-[10px] shadow-xl hover:shadow-2xl hover:scale-105 transition-all gap-2 group border-none">
                        <DownloadCloud size={16} /> Export CSV
                    </Button>
                </div>
            </div>

            {/* FILTER & SEARCH TOOLBAR */}
            <Card className="rounded-[32px] border-2 border-purple-50 shadow-md bg-white overflow-hidden">
                <div className="p-4 flex flex-col md:flex-row justify-between items-center gap-4 bg-purple-50/50">
                    <div className="relative w-full md:w-96 group">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-purple-500 group-focus-within:text-purple-600 transition-colors" />
                        <input 
                            type="text" 
                            placeholder="Search by Subject, Authority, or Ref No..." 
                            className="w-full pl-12 pr-4 py-3 border-2 border-purple-100 bg-white rounded-2xl text-xs font-bold text-slate-800 focus:outline-none focus:border-purple-400 focus:ring-4 focus:ring-purple-50 transition-all shadow-sm"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    
                    <div className="flex items-center gap-4 w-full md:w-auto">
                        <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-purple-600">
                            <Filter size={14} /> Filter Priority:
                        </div>
                        <select 
                            className="border-2 border-purple-100 bg-white rounded-2xl px-4 py-3 text-xs font-bold text-slate-800 focus:outline-none focus:border-purple-400 shadow-sm appearance-none cursor-pointer"
                            value={priorityFilter}
                            onChange={(e) => setPriorityFilter(e.target.value)}
                        >
                            <option value="ALL">All Priorities</option>
                            <option value="HIGH">High / Urgent</option>
                            <option value="MEDIUM">Medium / Standard</option>
                            <option value="ROUTINE">Routine / Long-term</option>
                        </select>
                    </div>
                </div>
            </Card>

            {/* MAIN REPORT TABLE CARD */}
            <Card className="rounded-[40px] border-2 border-purple-100 shadow-xl overflow-hidden bg-white">
                
                {/* VIBRANT GRADIENT HEADER */}
                <CardHeader className="p-0 border-b-4 border-purple-200">
                    <div className="p-8 bg-gradient-to-r from-purple-500 via-fuchsia-500 to-pink-500 text-white relative overflow-hidden flex flex-col md:flex-row justify-between items-center gap-6">
                        <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] bg-fixed" />
                        
                        <div className="relative z-10 flex items-center gap-4">
                            <div className="h-12 w-12 rounded-2xl bg-white/20 backdrop-blur-md border-2 border-white/30 flex items-center justify-center shadow-lg">
                                <Lightbulb size={20} className="text-white" />
                            </div>
                            <div>
                                <CardTitle className="text-xl font-black uppercase tracking-tight text-white drop-shadow-sm">Advisory Dispatch Ledger</CardTitle>
                                <p className="text-[10px] font-bold text-purple-50 uppercase tracking-widest mt-1">Official Secretariat Registry</p>
                            </div>
                        </div>

                        <div className="relative z-10 flex gap-3">
                            <Badge className="bg-white/20 text-white border-none text-[10px] font-black uppercase tracking-widest px-4 py-2 backdrop-blur-md shadow-sm">
                                High Priority: 01
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
                        <TableHeader className="bg-purple-50/50">
                            <TableRow className="border-b-2 border-purple-100">
                                <TableHead className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-purple-800">Recommendation Ref</TableHead>
                                <TableHead className="py-5 text-[10px] font-black uppercase tracking-[0.2em] text-purple-800">Source Meeting</TableHead>
                                <TableHead className="py-5 text-[10px] font-black uppercase tracking-[0.2em] text-purple-800 w-1/3">Subject / Theme</TableHead>
                                <TableHead className="py-5 text-[10px] font-black uppercase tracking-[0.2em] text-purple-800">Recipient Authority</TableHead>
                                <TableHead className="py-5 text-[10px] font-black uppercase tracking-[0.2em] text-purple-800 text-center">Priority Status</TableHead>
                                <TableHead className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-purple-800 text-right">Date Issued</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody className="divide-y divide-purple-50">
                            
                            <ReportRow 
                                refNo="NABD/REC/2024-110" 
                                mtgDate="14 Nov 2024"
                                mtgRef="NABD/MTG/2024-47"
                                subject="Mandatory Ramps and Tactile Paths in all Tier-2 & Tier-3 Railway Stations" 
                                recipient="Ministry of Railways"
                                priority="HIGH"
                                issueDate="28 Aug 2024"
                            />
                            <ReportRow 
                                refNo="NABD/REC/2024-109" 
                                mtgDate="22 Aug 2024"
                                mtgRef="NABD/MTG/2024-46"
                                subject="Fulfillment of Special Educator Vacancies in Central Schools" 
                                recipient="Ministry of Education"
                                priority="MEDIUM"
                                issueDate="15 Jun 2024"
                            />
                            <ReportRow 
                                refNo="NABD/REC/2024-108" 
                                mtgDate="10 May 2024"
                                mtgRef="NABD/MTG/2024-45"
                                subject="Annual Digital Accessibility Audit Compliance for Portals" 
                                recipient="All Central Ministries"
                                priority="ROUTINE"
                                issueDate="20 May 2024"
                            />
                            <ReportRow 
                                refNo="NABD/REC/2024-107" 
                                mtgDate="12 Feb 2024"
                                mtgRef="NABD/MTG/2024-44"
                                subject="Revision of Subsidy Norms for Assistive Devices" 
                                recipient="DEPwD, MSJE"
                                priority="MEDIUM"
                                issueDate="05 Mar 2024"
                            />

                        </TableBody>
                    </Table>
                </CardContent>
            </Card>

        </div>
    );
}

/* UI SUB-COMPONENTS */

function ReportRow({ refNo, mtgDate, mtgRef, subject, recipient, priority, issueDate }: any) {
    const isHigh = priority === 'HIGH';
    const isMedium = priority === 'MEDIUM';

    const priorityBadge = isHigh 
        ? "bg-red-50 text-red-700 border-red-200"
        : isMedium 
            ? "bg-amber-50 text-amber-700 border-amber-200"
            : "bg-indigo-50 text-indigo-700 border-indigo-200";

    const PriorityIcon = isHigh ? AlertTriangle : isMedium ? Zap : Info;

    return (
        <TableRow className="border-none hover:bg-purple-50/50 transition-all group">
            
            {/* Recommendation Ref */}
            <TableCell className="px-8 py-5">
                <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center shrink-0">
                        <Tag size={12} className="text-purple-600" />
                    </div>
                    <span className="font-mono text-[11px] font-black text-purple-700">{refNo}</span>
                </div>
            </TableCell>

            {/* Source Meeting */}
            <TableCell className="py-5">
                <div className="flex flex-col gap-1.5">
                    <span className="text-xs font-black text-slate-800 flex items-center gap-2">
                        <Calendar size={12} className="text-indigo-400" />
                        {mtgDate}
                    </span>
                    <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest bg-slate-100 px-2 py-0.5 rounded w-fit">
                        {mtgRef}
                    </span>
                </div>
            </TableCell>

            {/* Subject / Theme */}
            <TableCell className="py-5">
                <span className="text-xs font-bold text-slate-700 line-clamp-2 leading-relaxed bg-white border border-slate-100 p-3 rounded-xl shadow-sm block">
                    {subject}
                </span>
            </TableCell>

            {/* Recipient Authority */}
            <TableCell className="py-5">
                <span className="text-[10px] font-black text-slate-600 uppercase tracking-widest flex items-start gap-2 max-w-[180px]">
                    <Building2 size={12} className="text-purple-400 shrink-0 mt-0.5" />
                    <span className="leading-tight">{recipient}</span>
                </span>
            </TableCell>

            {/* Priority Status */}
            <TableCell className="py-5 text-center">
                <Badge className={`border-2 text-[9px] font-black uppercase tracking-widest px-3 py-1 flex items-center justify-center gap-1.5 w-max mx-auto shadow-sm ${priorityBadge}`}>
                    <PriorityIcon size={10} />
                    {priority}
                </Badge>
            </TableCell>

            {/* Date Issued */}
            <TableCell className="px-8 py-5 text-right">
                <span className="font-mono text-[11px] font-bold text-slate-500 bg-slate-50 border border-slate-100 px-3 py-1.5 rounded-lg shadow-inner">
                    {issueDate}
                </span>
            </TableCell>

        </TableRow>
    );
}