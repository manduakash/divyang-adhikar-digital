// app/dashboard/nabd/reports/board-composition/page.tsx
"use client";
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
    Table, TableBody, TableCell, TableHead, TableHeader, TableRow
} from "@/components/ui/table";
import {
    Users, Search, Filter, DownloadCloud, Printer,
    FileBarChart, ShieldCheck, Briefcase, Calendar
} from "lucide-react";

export default function BoardCompositionReportPage() {
    const [searchTerm, setSearchTerm] = useState("");
    const [statusFilter, setStatusFilter] = useState("ALL");

    return (
        <div className="space-y-8 animate-in fade-in duration-1000 pb-20 font-sans selection:bg-indigo-100">

            {/* PAGE HEADER */}
            <div className="flex flex-col xl:flex-row justify-between items-start xl:items-end gap-6 relative">
                <div className="space-y-2">
                    <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border-2 border-indigo-100">
                        <FileBarChart size={14} /> Statutory Reports
                    </div>
                    <h1 className="text-5xl font-black text-slate-900 tracking-tighter uppercase leading-none">Board Composition Report</h1>
                    <p className="text-slate-500 font-medium text-lg italic underline underline-offset-8 decoration-indigo-100">
                        Comprehensive registry of member nominations, roles, and tenures.
                    </p>
                </div>
                <div className="flex gap-4">
                    <Button variant="outline" className="h-14 px-8 rounded-full border-2 border-indigo-200 text-indigo-700 font-black uppercase tracking-widest text-[10px] bg-white shadow-xl hover:bg-indigo-50 transition-all">
                        <Printer size={16} className="mr-2" /> Print
                    </Button>
                    <Button className="h-14 px-8 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-black uppercase tracking-widest text-[10px] shadow-xl hover:shadow-2xl hover:scale-105 transition-all gap-2 group border-none">
                        <DownloadCloud size={16} /> Export CSV
                    </Button>
                </div>
            </div>

            {/* FILTER & SEARCH TOOLBAR */}
            <Card className="rounded-[32px] border-2 border-indigo-50 shadow-md bg-white overflow-hidden">
                <div className="p-4 flex flex-col md:flex-row justify-between items-center gap-4 bg-indigo-50/50">
                    <div className="relative w-full md:w-96 group">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-indigo-400 group-focus-within:text-indigo-600 transition-colors" />
                        <input 
                            type="text" 
                            placeholder="Search by Member Name or Category..." 
                            className="w-full pl-12 pr-4 py-3 border-2 border-indigo-100 bg-white rounded-2xl text-xs font-bold text-slate-800 focus:outline-none focus:border-indigo-400 focus:ring-4 focus:ring-indigo-50 transition-all shadow-sm"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    
                    <div className="flex items-center gap-4 w-full md:w-auto">
                        <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-indigo-600">
                            <Filter size={14} /> Filter Status:
                        </div>
                        <select 
                            className="border-2 border-indigo-100 bg-white rounded-2xl px-4 py-3 text-xs font-bold text-slate-800 focus:outline-none focus:border-indigo-400 shadow-sm appearance-none cursor-pointer"
                            value={statusFilter}
                            onChange={(e) => setStatusFilter(e.target.value)}
                        >
                            <option value="ALL">All Statuses</option>
                            <option value="ACTIVE">Active Members</option>
                            <option value="INACTIVE">Inactive / Retired</option>
                        </select>
                    </div>
                </div>
            </Card>

            {/* MAIN REPORT TABLE CARD */}
            <Card className="rounded-[40px] border-2 border-indigo-100 shadow-xl overflow-hidden bg-white">
                
                {/* VIBRANT GRADIENT HEADER (No Dark Colors) */}
                <CardHeader className="p-0 border-b-4 border-indigo-200">
                    <div className="p-8 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 text-white relative overflow-hidden flex flex-col md:flex-row justify-between items-center gap-6">
                        <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] bg-fixed" />
                        
                        <div className="relative z-10 flex items-center gap-4">
                            <div className="h-12 w-12 rounded-2xl bg-white/20 backdrop-blur-md border-2 border-white/30 flex items-center justify-center shadow-lg">
                                <Users size={20} className="text-white" />
                            </div>
                            <div>
                                <CardTitle className="text-xl font-black uppercase tracking-tight text-white drop-shadow-sm">Member Composition Ledger</CardTitle>
                                <p className="text-[10px] font-bold text-indigo-100 uppercase tracking-widest mt-1">Official Secretariat Registry</p>
                            </div>
                        </div>

                        <div className="relative z-10">
                            <Badge className="bg-white/20 text-white border-none text-[10px] font-black uppercase tracking-widest px-4 py-2 backdrop-blur-md shadow-sm hover:bg-white/30">
                                Total Records: 05
                            </Badge>
                        </div>
                    </div>
                </CardHeader>
                
                <CardContent className="p-0 overflow-x-auto relative">
                    <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/topography.png')]" />
                    
                    <Table className="relative z-10">
                        <TableHeader className="bg-indigo-50/50">
                            <TableRow className="border-b-2 border-indigo-100">
                                <TableHead className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-indigo-800">Member Name</TableHead>
                                <TableHead className="py-5 text-[10px] font-black uppercase tracking-[0.2em] text-indigo-800">Role</TableHead>
                                <TableHead className="py-5 text-[10px] font-black uppercase tracking-[0.2em] text-indigo-800">Representing Category</TableHead>
                                <TableHead className="py-5 text-[10px] font-black uppercase tracking-[0.2em] text-indigo-800 text-center">Nomination Date</TableHead>
                                <TableHead className="py-5 text-[10px] font-black uppercase tracking-[0.2em] text-indigo-800 text-center">Tenure Start</TableHead>
                                <TableHead className="py-5 text-[10px] font-black uppercase tracking-[0.2em] text-indigo-800 text-center">Tenure End</TableHead>
                                <TableHead className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-indigo-800 text-right">Status</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody className="divide-y divide-indigo-50">
                            
                            <ReportRow 
                                name="Dr. Virendra Kumar" 
                                role="Chairperson" 
                                category="Ministry / Gov Dept."
                                nomination="10 Jan 2022"
                                start="12 Jan 2022" 
                                end="11 Jan 2025" 
                                status="ACTIVE"
                            />
                            <ReportRow 
                                name="Smt. Anjali Bhawra" 
                                role="Member Secretary" 
                                category="Secretariat"
                                nomination="01 Mar 2023"
                                start="05 Mar 2023" 
                                end="04 Mar 2026" 
                                status="ACTIVE"
                            />
                            <ReportRow 
                                name="Ms. Sunita Rao" 
                                role="Expert Member" 
                                category="NGO / Civil Society"
                                nomination="15 Jun 2021"
                                start="20 Jun 2021" 
                                end="19 Jun 2024" 
                                status="INACTIVE"
                            />
                            <ReportRow 
                                name="Shri R.K. Singh" 
                                role="Member" 
                                category="State Representative"
                                nomination="05 Aug 2021"
                                start="10 Aug 2021" 
                                end="09 Aug 2024" 
                                status="INACTIVE"
                            />
                            <ReportRow 
                                name="Dr. Rajesh Pandey" 
                                role="Member" 
                                category="Subject Expert"
                                nomination="15 Nov 2022"
                                start="20 Nov 2022" 
                                end="19 Nov 2025" 
                                status="ACTIVE"
                            />

                        </TableBody>
                    </Table>
                </CardContent>
            </Card>

        </div>
    );
}

/* UI SUB-COMPONENTS */

function ReportRow({ name, role, category, nomination, start, end, status }: any) {
    const isActive = status === 'ACTIVE';

    return (
        <TableRow className="border-none hover:bg-indigo-50/50 transition-all group">
            
            {/* Member Name */}
            <TableCell className="px-8 py-5">
                <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center shrink-0">
                        <Users size={14} className="text-indigo-600" />
                    </div>
                    <span className="text-xs font-black text-slate-900 uppercase tracking-tight">{name}</span>
                </div>
            </TableCell>

            {/* Role */}
            <TableCell className="py-5">
                <Badge variant="outline" className="border-2 border-purple-200 text-purple-700 bg-purple-50 text-[9px] font-black uppercase tracking-widest px-3 py-1">
                    {role}
                </Badge>
            </TableCell>

            {/* Representing Category */}
            <TableCell className="py-5">
                <span className="text-[10px] font-bold text-slate-600 uppercase tracking-widest flex items-center gap-2">
                    <Briefcase size={12} className="text-indigo-400" />
                    {category}
                </span>
            </TableCell>

            {/* Nomination Date */}
            <TableCell className="py-5 text-center">
                <span className="font-mono text-[11px] font-bold text-slate-500 bg-slate-50 px-2 py-1 rounded-md">{nomination}</span>
            </TableCell>

            {/* Tenure Start */}
            <TableCell className="py-5 text-center">
                <span className="font-mono text-[11px] font-black text-indigo-600">{start}</span>
            </TableCell>

            {/* Tenure End */}
            <TableCell className="py-5 text-center">
                <span className="font-mono text-[11px] font-black text-indigo-600">{end}</span>
            </TableCell>

            {/* Status */}
            <TableCell className="px-8 py-5 text-right">
                <Badge className={`border-none text-[9px] font-black uppercase tracking-widest px-4 py-1.5 shadow-sm ${isActive ? 'bg-emerald-500 text-white' : 'bg-amber-500 text-white'}`}>
                    {status}
                </Badge>
            </TableCell>

        </TableRow>
    );
}