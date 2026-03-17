// app/dashboard/ndma/reports/advisories-compliance/page.tsx
"use client";
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
    Table, TableBody, TableCell, TableHead, TableHeader, TableRow
} from "@/components/ui/table";
import {
    Search, Filter, DownloadCloud, Printer, FileBarChart, 
    ShieldAlert, FileSignature, Map, Tag, Calendar, MessageSquare,
    CheckCircle2, CircleDashed, AlertTriangle, Zap, Building2,
    Wind, Waves, ThermometerSun
} from "lucide-react";

export default function AdvisoriesComplianceReportPage() {
    const [searchTerm, setSearchTerm] = useState("");
    const [statusFilter, setStatusFilter] = useState("ALL");

    return (
        <div className="space-y-8 animate-in fade-in duration-1000 pb-20 font-sans selection:bg-purple-100">

            {/* PAGE HEADER */}
            <div className="flex flex-col xl:flex-row justify-between items-start xl:items-end gap-6 relative">
                <div className="space-y-2">
                    <div className="inline-flex items-center gap-2 bg-purple-50 text-purple-700 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border-2 border-purple-200 shadow-sm">
                        <FileBarChart size={14} /> Statutory Reports
                    </div>
                    <h1 className="text-5xl font-black text-slate-800 tracking-tighter uppercase leading-none">Directions & Compliance</h1>
                    <p className="text-slate-500 font-medium text-lg italic underline underline-offset-8 decoration-purple-200">
                        Audit of national directives issued and subsequent state-level execution timelines.
                    </p>
                </div>
                <div className="flex gap-4">
                    <Button variant="outline" className="h-14 px-8 rounded-full border-2 border-purple-200 text-purple-700 font-black uppercase tracking-widest text-[10px] bg-white shadow-xl hover:bg-purple-50 transition-all">
                        <Printer size={16} className="mr-2" /> Print Register
                    </Button>
                    <Button className="h-14 px-8 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-black uppercase tracking-widest text-[10px] shadow-xl hover:shadow-[0_0_20px_theme(colors.indigo.400)] transition-all gap-2 group border-none">
                        <DownloadCloud size={16} /> Export CSV
                    </Button>
                </div>
            </div>

            {/* FILTER & SEARCH TOOLBAR */}
            <Card className="rounded-[32px] border-2 border-purple-50 shadow-md bg-white overflow-hidden max-w-full">
                <div className="p-4 flex flex-col md:flex-row justify-between items-center gap-4 bg-purple-50/50">
                    <div className="relative w-full md:w-96 group">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-purple-500 group-focus-within:text-purple-600 transition-colors" />
                        <input 
                            type="text" 
                            placeholder="Search by Ref No, State, or Subject..." 
                            className="w-full pl-12 pr-4 py-3 border-2 border-purple-100 bg-white rounded-2xl text-xs font-bold text-slate-800 focus:outline-none focus:border-purple-400 focus:ring-4 focus:ring-purple-50 transition-all shadow-sm"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    
                    <div className="flex items-center gap-4 w-full md:w-auto">
                        <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-purple-700">
                            <Filter size={14} /> Status Filter:
                        </div>
                        <select 
                            className="border-2 border-purple-100 bg-white rounded-2xl px-4 py-3 text-xs font-bold text-slate-800 focus:outline-none focus:border-purple-400 shadow-sm appearance-none cursor-pointer"
                            value={statusFilter}
                            onChange={(e) => setStatusFilter(e.target.value)}
                        >
                            <option value="ALL">All Statuses</option>
                            <option value="COMPLIANT">Compliant / Adopted</option>
                            <option value="PENDING">Pending (Within Timeline)</option>
                            <option value="OVERDUE">Overdue / Non-Compliant</option>
                        </select>
                    </div>
                </div>
            </Card>

            {/* MAIN REPORT TABLE CARD */}
            <Card className="rounded-[40px] border-none shadow-xl overflow-hidden bg-white">
                
                {/* VIBRANT GRADIENT HEADER */}
                <CardHeader className="p-0 border-b-4 border-indigo-200">
                    <div className="p-8 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white relative overflow-hidden flex flex-col md:flex-row justify-between items-center gap-6">
                        <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] bg-fixed" />
                        
                        <div className="relative z-10 flex items-center gap-4">
                            <div className="h-12 w-12 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center shadow-lg">
                                <ShieldAlert size={20} className="text-white drop-shadow-md" />
                            </div>
                            <div>
                                <CardTitle className="text-xl font-black uppercase tracking-tight text-white drop-shadow-sm">National Compliance Ledger</CardTitle>
                                <p className="text-[10px] font-bold text-indigo-100 uppercase tracking-widest mt-1">Tracking execution of PwD guidelines by SDMAs</p>
                            </div>
                        </div>

                        <div className="relative z-10 flex gap-3 flex-wrap justify-end">
                            <Badge className="bg-white/20 text-white border-none text-[10px] font-black uppercase tracking-widest px-4 py-2 backdrop-blur-md shadow-sm">
                                Compliance Rate: 84%
                            </Badge>
                            <Badge className="bg-white/20 text-white border-none text-[10px] font-black uppercase tracking-widest px-4 py-2 backdrop-blur-md shadow-sm flex items-center gap-2">
                                <AlertTriangle size={12} /> Overdue: 24
                            </Badge>
                        </div>
                    </div>
                </CardHeader>
                
                <CardContent className="p-0 overflow-x-auto relative min-h-[400px]">
                    <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/topography.png')]" />
                    
                    <Table className="relative z-10">
                        <TableHeader className="bg-slate-50/80 backdrop-blur-md">
                            <TableRow className="border-b-2 border-slate-200">
                                <TableHead className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-600 w-1/4">Advisory / Direction Ref</TableHead>
                                <TableHead className="py-5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-600">Issued To (State)</TableHead>
                                <TableHead className="py-5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-600 text-center">Threat Profile</TableHead>
                                <TableHead className="py-5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-600 text-center">Timelines</TableHead>
                                <TableHead className="py-5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-600 text-center">Status</TableHead>
                                <TableHead className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-600 w-1/4">Latest Remarks</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody className="divide-y divide-slate-100">
                            
                            <ReportRow 
                                refNo="NDMA/PWD/ADV/2024-041" 
                                subject="Mandatory Wheelchair Access in Coastal Cyclone Shelters"
                                state="Odisha SDMA"
                                disaster="CYCLONE" icon={<Wind />} iconColor="text-cyan-600"
                                issued="15 Aug 2024"
                                due="30 Nov 2024"
                                status="PENDING"
                                remarks="Implementation ongoing in 4 coastal districts. Interim status report submitted."
                            />
                            <ReportRow 
                                refNo="NDMA/PWD/ADV/2024-040" 
                                subject="Inclusive Early Warning Protocol Integration"
                                state="Assam SDMA"
                                disaster="FLOOD" icon={<Waves />} iconColor="text-blue-600"
                                issued="10 May 2024"
                                due="15 Oct 2024"
                                status="OVERDUE"
                                remarks="Hearing-impaired visual alerts not yet integrated with state network. Escalation sent."
                                alert
                            />
                            <ReportRow 
                                refNo="NDMA/PWD/ADV/2024-039" 
                                subject="Heatwave Action Plan: PwD Sensitization"
                                state="Bihar SDMA"
                                disaster="HEATWAVE" icon={<ThermometerSun />} iconColor="text-orange-600"
                                issued="01 Mar 2024"
                                due="01 May 2024"
                                status="COMPLIANT"
                                remarks="Guidelines successfully integrated into district level SOPs. Verified via May mock drill."
                            />
                            <ReportRow 
                                refNo="NDMA/PWD/ADV/2024-041" 
                                subject="Mandatory Wheelchair Access in Coastal Cyclone Shelters"
                                state="Gujarat SDMA"
                                disaster="CYCLONE" icon={<Wind />} iconColor="text-cyan-600"
                                issued="15 Aug 2024"
                                due="30 Nov 2024"
                                status="COMPLIANT"
                                remarks="All 120 identified shelters retrofitted with standard 1:12 ramps ahead of deadline."
                            />

                        </TableBody>
                    </Table>
                </CardContent>
            </Card>

        </div>
    );
}

/* UI SUB-COMPONENTS */

function ReportRow({ refNo, subject, state, disaster, icon, iconColor, issued, due, status, remarks, alert }: any) {
    
    const isCompliant = status === 'COMPLIANT';
    const isPending = status === 'PENDING';

    const statusBadge = isCompliant ? 'bg-emerald-100 text-emerald-700' :
                        isPending ? 'bg-amber-100 text-amber-700' :
                        'bg-red-500 text-white animate-pulse shadow-md';

    const StatusIcon = isCompliant ? CheckCircle2 :
                       isPending ? CircleDashed : AlertTriangle;

    return (
        <TableRow className="border-none hover:bg-slate-50 transition-all group">
            
            {/* Advisory Ref & Subject */}
            <TableCell className="px-8 py-5">
                <div className="flex flex-col gap-2">
                    <span className="font-mono text-[11px] font-black text-indigo-700 flex items-center gap-2">
                        <Tag size={12} className="text-indigo-400" />
                        {refNo}
                    </span>
                    <span className="text-xs font-bold text-slate-700 line-clamp-2 leading-relaxed">
                        {subject}
                    </span>
                </div>
            </TableCell>

            {/* Issued To */}
            <TableCell className="py-5">
                <span className="text-[10px] font-black text-slate-600 uppercase tracking-widest flex items-center gap-2">
                    <Building2 size={14} className="text-slate-400" />
                    {state}
                </span>
            </TableCell>

            {/* Threat Profile */}
            <TableCell className="py-5 text-center">
                <div className="flex items-center justify-center gap-1.5 bg-slate-50 px-2 py-1 rounded w-max mx-auto border border-slate-100 shadow-sm">
                    {React.cloneElement(icon, { size: 12, className: iconColor })}
                    <span className="text-[9px] font-black uppercase tracking-widest text-slate-600">{disaster}</span>
                </div>
            </TableCell>

            {/* Timelines */}
            <TableCell className="py-5">
                <div className="flex flex-col items-center gap-1.5 border border-slate-200 bg-slate-50 rounded-xl px-3 py-2 w-max mx-auto shadow-inner">
                    <div className="flex justify-between w-full gap-4">
                        <span className="text-[8px] font-black uppercase tracking-widest text-slate-400">Issued</span>
                        <span className="font-mono text-[10px] font-bold text-slate-600">{issued}</span>
                    </div>
                    <div className="w-full border-t border-slate-200" />
                    <div className="flex justify-between w-full gap-4">
                        <span className="text-[8px] font-black uppercase tracking-widest text-slate-400">Due</span>
                        <span className={`font-mono text-[10px] font-bold ${alert ? 'text-red-600' : 'text-slate-800'}`}>{due}</span>
                    </div>
                </div>
            </TableCell>

            {/* Status */}
            <TableCell className="py-5 text-center">
                <Badge className={`border-none text-[9px] font-black uppercase tracking-widest px-3 py-1.5 flex items-center justify-center gap-1.5 w-max mx-auto ${statusBadge}`}>
                    <StatusIcon size={12} className={isPending ? 'animate-spin-slow' : ''} />
                    {status}
                </Badge>
            </TableCell>

            {/* Remarks */}
            <TableCell className="px-8 py-5">
                <div className={`text-xs font-bold leading-relaxed p-3 rounded-xl border relative ${alert ? 'bg-red-50 border-red-200 text-red-800 shadow-inner' : 'bg-white border-slate-200 text-slate-600 shadow-sm'}`}>
                    {remarks}
                </div>
            </TableCell>

        </TableRow>
    );
}