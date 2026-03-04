// app/dashboard/nabd/reports/meetings-attendance/page.tsx
"use client";
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
    Table, TableBody, TableCell, TableHead, TableHeader, TableRow
} from "@/components/ui/table";
import {
    CalendarCheck, Search, Filter, DownloadCloud, Printer,
    FileBarChart, Briefcase, Calendar, ListChecks, Activity
} from "lucide-react";

export default function MeetingsAttendanceReportPage() {
    const [searchTerm, setSearchTerm] = useState("");
    const [typeFilter, setTypeFilter] = useState("ALL");

    return (
        <div className="space-y-8 animate-in fade-in duration-1000 pb-20 font-sans selection:bg-emerald-100">

            {/* PAGE HEADER */}
            <div className="flex flex-col xl:flex-row justify-between items-start xl:items-end gap-6 relative">
                <div className="space-y-2">
                    <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border-2 border-emerald-100">
                        <FileBarChart size={14} /> Statutory Reports
                    </div>
                    <h1 className="text-5xl font-black text-slate-800 tracking-tighter uppercase leading-none">Meetings & Attendance</h1>
                    <p className="text-slate-500 font-medium text-lg italic underline underline-offset-8 decoration-emerald-100">
                        Historical ledger of board meetings, member participation, and core agendas.
                    </p>
                </div>
                <div className="flex gap-4">
                    <Button variant="outline" className="h-14 px-8 rounded-full border-2 border-emerald-200 text-emerald-700 font-black uppercase tracking-widest text-[10px] bg-white shadow-xl hover:bg-emerald-50 transition-all">
                        <Printer size={16} className="mr-2" /> Print
                    </Button>
                    <Button className="h-14 px-8 rounded-full bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 text-white font-black uppercase tracking-widest text-[10px] shadow-xl hover:shadow-2xl hover:scale-105 transition-all gap-2 group border-none">
                        <DownloadCloud size={16} /> Export CSV
                    </Button>
                </div>
            </div>

            {/* FILTER & SEARCH TOOLBAR */}
            <Card className="rounded-[32px] border-2 border-emerald-50 shadow-md bg-white overflow-hidden">
                <div className="p-4 flex flex-col md:flex-row justify-between items-center gap-4 bg-emerald-50/50">
                    <div className="relative w-full md:w-96 group">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-emerald-500 group-focus-within:text-emerald-600 transition-colors" />
                        <input 
                            type="text" 
                            placeholder="Search by Agenda Keywords or Date..." 
                            className="w-full pl-12 pr-4 py-3 border-2 border-emerald-100 bg-white rounded-2xl text-xs font-bold text-slate-800 focus:outline-none focus:border-emerald-400 focus:ring-4 focus:ring-emerald-50 transition-all shadow-sm"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    
                    <div className="flex items-center gap-4 w-full md:w-auto">
                        <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-emerald-600">
                            <Filter size={14} /> Filter Type:
                        </div>
                        <select 
                            className="border-2 border-emerald-100 bg-white rounded-2xl px-4 py-3 text-xs font-bold text-slate-800 focus:outline-none focus:border-emerald-400 shadow-sm appearance-none cursor-pointer"
                            value={typeFilter}
                            onChange={(e) => setTypeFilter(e.target.value)}
                        >
                            <option value="ALL">All Meeting Types</option>
                            <option value="ORDINARY">Ordinary Meetings</option>
                            <option value="SPECIAL">Special Meetings</option>
                        </select>
                    </div>
                </div>
            </Card>

            {/* MAIN REPORT TABLE CARD */}
            <Card className="rounded-[40px] border-2 border-emerald-100 shadow-xl overflow-hidden bg-white">
                
                {/* VIBRANT GRADIENT HEADER */}
                <CardHeader className="p-0 border-b-4 border-emerald-200">
                    <div className="p-8 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 text-white relative overflow-hidden flex flex-col md:flex-row justify-between items-center gap-6">
                        <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] bg-fixed" />
                        
                        <div className="relative z-10 flex items-center gap-4">
                            <div className="h-12 w-12 rounded-2xl bg-white/20 backdrop-blur-md border-2 border-white/30 flex items-center justify-center shadow-lg">
                                <CalendarCheck size={20} className="text-white" />
                            </div>
                            <div>
                                <CardTitle className="text-xl font-black uppercase tracking-tight text-white drop-shadow-sm">Attendance & Participation Ledger</CardTitle>
                                <p className="text-[10px] font-bold text-emerald-50 uppercase tracking-widest mt-1">Official Secretariat Registry</p>
                            </div>
                        </div>

                        <div className="relative z-10 flex gap-3">
                            <Badge className="bg-white/20 text-white border-none text-[10px] font-black uppercase tracking-widest px-4 py-2 backdrop-blur-md shadow-sm">
                                Avg Attendance: 91%
                            </Badge>
                            <Badge className="bg-white/20 text-white border-none text-[10px] font-black uppercase tracking-widest px-4 py-2 backdrop-blur-md shadow-sm">
                                Total Records: 04
                            </Badge>
                        </div>
                    </div>
                </CardHeader>
                
                <CardContent className="p-0 overflow-x-auto relative">
                    <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/topography.png')]" />
                    
                    <Table className="relative z-10">
                        <TableHeader className="bg-emerald-50/50">
                            <TableRow className="border-b-2 border-emerald-100">
                                <TableHead className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-emerald-800">Meeting Date</TableHead>
                                <TableHead className="py-5 text-[10px] font-black uppercase tracking-[0.2em] text-emerald-800 text-center">Meeting Type</TableHead>
                                <TableHead className="py-5 text-[10px] font-black uppercase tracking-[0.2em] text-emerald-800 text-center">Total Members</TableHead>
                                <TableHead className="py-5 text-[10px] font-black uppercase tracking-[0.2em] text-emerald-800 text-center">Members Present</TableHead>
                                <TableHead className="py-5 text-[10px] font-black uppercase tracking-[0.2em] text-emerald-800 w-48">Attendance Rate</TableHead>
                                <TableHead className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-emerald-800 w-1/3">Key Agenda Items</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody className="divide-y divide-emerald-50">
                            
                            <ReportRow 
                                date="14 Nov 2024"
                                refNo="NABD/MTG/2024-47"
                                type="ORDINARY" 
                                total={32}
                                present={30}
                                agenda="Rural accessibility gaps, implementation of universal design in public transport, budget review."
                            />
                            <ReportRow 
                                date="22 Aug 2024"
                                refNo="NABD/MTG/2024-46"
                                type="SPECIAL" 
                                total={32}
                                present={31}
                                agenda="Emergency review of digital accessibility standards across state government portals and apps."
                            />
                            <ReportRow 
                                date="10 May 2024"
                                refNo="NABD/MTG/2024-45"
                                type="ORDINARY" 
                                total={32}
                                present={28}
                                agenda="Annual compliance report assessment, appointment of nodal officers in central ministries."
                            />
                            <ReportRow 
                                date="12 Feb 2024"
                                refNo="NABD/MTG/2024-44"
                                type="ORDINARY" 
                                total={32}
                                present={24}
                                agenda="Special educator vacancies in state schools, review of the inclusive education framework."
                            />

                        </TableBody>
                    </Table>
                </CardContent>
            </Card>

        </div>
    );
}

/* UI SUB-COMPONENTS */

function ReportRow({ date, refNo, type, total, present, agenda }: any) {
    const isSpecial = type === 'SPECIAL';
    const percentage = Math.round((present / total) * 100);
    
    // Determine color based on attendance threshold
    const progressColor = percentage >= 90 
        ? 'bg-emerald-500' 
        : percentage >= 80 
            ? 'bg-blue-500' 
            : 'bg-amber-500';

    return (
        <TableRow className="border-none hover:bg-emerald-50/50 transition-all group">
            
            {/* Meeting Date & Ref */}
            <TableCell className="px-8 py-5">
                <div className="flex flex-col gap-1.5">
                    <span className="font-mono text-sm font-black text-slate-800 flex items-center gap-2">
                        <Calendar size={14} className="text-emerald-500" />
                        {date}
                    </span>
                    <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest bg-slate-100 px-2 py-0.5 rounded w-fit">
                        {refNo}
                    </span>
                </div>
            </TableCell>

            {/* Meeting Type */}
            <TableCell className="py-5 text-center">
                <Badge variant="outline" className={`border-2 text-[9px] font-black uppercase tracking-widest px-3 py-1 ${isSpecial ? 'border-amber-200 text-amber-700 bg-amber-50' : 'border-blue-200 text-blue-700 bg-blue-50'}`}>
                    {type}
                </Badge>
            </TableCell>

            {/* Total Members */}
            <TableCell className="py-5 text-center">
                <span className="font-mono text-base font-bold text-slate-500">{total}</span>
            </TableCell>

            {/* Members Present */}
            <TableCell className="py-5 text-center">
                <span className="font-mono text-base font-black text-emerald-600">{present}</span>
            </TableCell>

            {/* Attendance Percentage */}
            <TableCell className="py-5">
                <div className="space-y-2 pr-4">
                    <div className="flex justify-between items-end">
                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Rate</span>
                        <span className={`font-mono text-sm font-black ${percentage >= 90 ? 'text-emerald-600' : 'text-blue-600'}`}>{percentage}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                        <div 
                            className={`h-full ${progressColor} rounded-full transition-all duration-1000`} 
                            style={{ width: `${percentage}%` }} 
                        />
                    </div>
                </div>
            </TableCell>

            {/* Key Agenda Items */}
            <TableCell className="px-8 py-5">
                <div className="flex items-start gap-2 bg-slate-50 p-3 rounded-xl border border-slate-100">
                    <ListChecks size={14} className="text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-xs font-bold text-slate-600 line-clamp-2 leading-relaxed">
                        {agenda}
                    </span>
                </div>
            </TableCell>

        </TableRow>
    );
}