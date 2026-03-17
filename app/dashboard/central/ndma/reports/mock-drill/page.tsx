// app/dashboard/ndma/reports/mock-drill/page.tsx
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
    Activity, MapPin, Wind, Waves, ThermometerSun, AlertTriangle, 
    Users, ShieldAlert, Calendar, CheckCircle2, CircleDashed
} from "lucide-react";

export default function MockDrillReportPage() {
    const [searchTerm, setSearchTerm] = useState("");
    const [statusFilter, setStatusFilter] = useState("ALL");

    return (
        <div className="space-y-8 animate-in fade-in duration-1000 pb-20 font-sans selection:bg-emerald-100">

            {/* PAGE HEADER */}
            <div className="flex flex-col xl:flex-row justify-between items-start xl:items-end gap-6 relative">
                <div className="space-y-2">
                    <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border-2 border-emerald-200 shadow-sm">
                        <FileBarChart size={14} /> Statutory Reports
                    </div>
                    <h1 className="text-5xl font-black text-slate-800 tracking-tighter uppercase leading-none">Mock Drill & Capacity Building</h1>
                    <p className="text-slate-500 font-medium text-lg italic underline underline-offset-8 decoration-emerald-200">
                        National oversight of ground-level simulations and PwD participation metrics.
                    </p>
                </div>
                <div className="flex gap-4">
                    <Button variant="outline" className="h-14 px-8 rounded-full border-2 border-emerald-200 text-emerald-700 font-black uppercase tracking-widest text-[10px] bg-white shadow-xl hover:bg-emerald-50 transition-all">
                        <Printer size={16} className="mr-2" /> Print Register
                    </Button>
                    <Button className="h-14 px-8 rounded-full bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 text-white font-black uppercase tracking-widest text-[10px] shadow-xl hover:shadow-[0_0_20px_theme(colors.teal.400)] transition-all gap-2 group border-none">
                        <DownloadCloud size={16} /> Export CSV
                    </Button>
                </div>
            </div>

            {/* FILTER & SEARCH TOOLBAR */}
            <Card className="rounded-[32px] border-2 border-emerald-50 shadow-md bg-white overflow-hidden max-w-full">
                <div className="p-4 flex flex-col md:flex-row justify-between items-center gap-4 bg-emerald-50/50">
                    <div className="relative w-full md:w-96 group">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-emerald-500 group-focus-within:text-emerald-600 transition-colors" />
                        <input 
                            type="text" 
                            placeholder="Search by State, District or Disaster..." 
                            className="w-full pl-12 pr-4 py-3 border-2 border-emerald-100 bg-white rounded-2xl text-xs font-bold text-slate-800 focus:outline-none focus:border-emerald-400 focus:ring-4 focus:ring-emerald-50 transition-all shadow-sm"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    
                    <div className="flex items-center gap-4 w-full md:w-auto">
                        <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-emerald-700">
                            <Filter size={14} /> Drill Status:
                        </div>
                        <select 
                            className="border-2 border-emerald-100 bg-white rounded-2xl px-4 py-3 text-xs font-bold text-slate-800 focus:outline-none focus:border-emerald-400 shadow-sm appearance-none cursor-pointer"
                            value={statusFilter}
                            onChange={(e) => setStatusFilter(e.target.value)}
                        >
                            <option value="ALL">All Statuses</option>
                            <option value="YES">Conducted</option>
                            <option value="NO">Pending / Overdue</option>
                        </select>
                    </div>
                </div>
            </Card>

            {/* MAIN REPORT TABLE CARD */}
            <Card className="rounded-[40px] border-none shadow-xl overflow-hidden bg-white">
                
                {/* VIBRANT GRADIENT HEADER */}
                <CardHeader className="p-0 border-b-4 border-emerald-200">
                    <div className="p-8 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-700 text-white relative overflow-hidden flex flex-col md:flex-row justify-between items-center gap-6">
                        <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] bg-fixed" />
                        
                        <div className="relative z-10 flex items-center gap-4">
                            <div className="h-12 w-12 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center shadow-lg">
                                <Activity size={20} className="text-white drop-shadow-md" />
                            </div>
                            <div>
                                <CardTitle className="text-xl font-black uppercase tracking-tight text-white drop-shadow-sm">National Drill Compliance Ledger</CardTitle>
                                <p className="text-[10px] font-bold text-emerald-100 uppercase tracking-widest mt-1">Aggregated from District Level Reports (DDMAs)</p>
                            </div>
                        </div>

                        <div className="relative z-10 flex gap-3 flex-wrap justify-end">
                            <Badge className="bg-white/20 text-white border-none text-[10px] font-black uppercase tracking-widest px-4 py-2 backdrop-blur-md shadow-sm">
                                Compliance Rate: 72%
                            </Badge>
                            <Badge className="bg-white/20 text-white border-none text-[10px] font-black uppercase tracking-widest px-4 py-2 backdrop-blur-md shadow-sm">
                                Defaulter Districts: 14
                            </Badge>
                        </div>
                    </div>
                </CardHeader>
                
                <CardContent className="p-0 overflow-x-auto relative min-h-[400px]">
                    <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/topography.png')]" />
                    
                    <Table className="relative z-10">
                        <TableHeader className="bg-slate-50/80 backdrop-blur-md">
                            <TableRow className="border-b-2 border-slate-200">
                                <TableHead className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-600">Location (State / Dist)</TableHead>
                                <TableHead className="py-5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-600 text-center">Threat Profile</TableHead>
                                <TableHead className="py-5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-600 text-center">Drill Status</TableHead>
                                <TableHead className="py-5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-600 text-center">Execution Date</TableHead>
                                <TableHead className="py-5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-600 text-center">PwD Participants</TableHead>
                                <TableHead className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-600 w-1/3">Observations / Gaps</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody className="divide-y divide-slate-100">
                            
                            <ReportRow 
                                state="Odisha" dist="Puri"
                                disaster="CYCLONE" icon={<Wind />} iconColor="text-cyan-600"
                                conducted="YES"
                                date="12 Oct 2024"
                                participants="145"
                                gaps="Smooth evacuation noted. Minor delays in mobilizing specialized hydraulic transport for bed-ridden patients."
                            />
                            <ReportRow 
                                state="Gujarat" dist="Kutch"
                                disaster="CYCLONE" icon={<Wind />} iconColor="text-cyan-600"
                                conducted="YES"
                                date="28 Sep 2024"
                                participants="85"
                                gaps="Sign language interpreters were unavailable at 2 out of 5 simulation sites. Alert raised to SDMA."
                            />
                            <ReportRow 
                                state="Assam" dist="Majuli"
                                disaster="FLOOD" icon={<Waves />} iconColor="text-blue-600"
                                conducted="NO"
                                date="OVERDUE"
                                participants="-"
                                gaps="Pre-monsoon drill cancelled due to administrative delays. NDMA critical warning issued."
                                alert
                            />
                            <ReportRow 
                                state="Bihar" dist="Patna"
                                disaster="HEATWAVE" icon={<ThermometerSun />} iconColor="text-orange-600"
                                conducted="YES"
                                date="15 May 2024"
                                participants="210"
                                gaps="Simulation successful, but cooling center generator backup failed during stress test."
                            />

                        </TableBody>
                    </Table>
                </CardContent>
            </Card>

        </div>
    );
}

/* UI SUB-COMPONENTS */

function ReportRow({ state, dist, disaster, icon, iconColor, conducted, date, participants, gaps, alert }: any) {
    
    const isConducted = conducted === 'YES';
    const StatusIcon = isConducted ? CheckCircle2 : CircleDashed;

    return (
        <TableRow className="border-none hover:bg-slate-50 transition-all group">
            
            {/* Location */}
            <TableCell className="px-8 py-5">
                <div className="flex flex-col gap-1 pr-4">
                    <span className="text-xs font-black text-slate-800 tracking-tight flex items-center gap-1.5">
                        <MapPin size={12} className="text-emerald-500" />
                        {dist}
                    </span>
                    <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest pl-4">
                        {state}
                    </span>
                </div>
            </TableCell>

            {/* Threat Profile */}
            <TableCell className="py-5 text-center">
                <div className="flex items-center justify-center gap-1.5 bg-slate-50 px-2 py-1 rounded-md w-max mx-auto border border-slate-100 shadow-sm">
                    {React.cloneElement(icon, { size: 12, className: iconColor })}
                    <span className="text-[9px] font-black uppercase tracking-widest text-slate-600">{disaster}</span>
                </div>
            </TableCell>

            {/* Drill Status */}
            <TableCell className="py-5 text-center">
                <Badge className={`border-none text-[9px] font-black uppercase tracking-widest px-3 py-1.5 flex items-center justify-center gap-1.5 w-max mx-auto shadow-sm ${isConducted ? 'bg-emerald-100 text-emerald-700' : 'bg-red-500 text-white animate-pulse'}`}>
                    <StatusIcon size={12} />
                    {isConducted ? 'COMPLETED' : 'PENDING'}
                </Badge>
            </TableCell>

            {/* Date */}
            <TableCell className="py-5 text-center">
                <span className={`font-mono text-[10px] font-bold px-3 py-1.5 rounded-lg border ${!isConducted ? 'text-red-600 bg-red-50 border-red-100 shadow-inner' : 'text-slate-600 bg-slate-50 border-slate-100'}`}>
                    {date}
                </span>
            </TableCell>

            {/* Participants */}
            <TableCell className="py-5 text-center">
                <span className="font-mono text-sm font-black text-slate-800 flex items-center justify-center gap-1.5">
                    <Users size={12} className="text-slate-400" />
                    {participants}
                </span>
            </TableCell>

            {/* Gaps */}
            <TableCell className="px-8 py-5">
                <div className={`text-xs font-bold leading-relaxed p-3 rounded-xl border relative ${alert ? 'bg-red-50 border-red-200 text-red-800 shadow-inner pl-8' : 'bg-white border-slate-200 text-slate-600 shadow-sm'}`}>
                    {alert && <ShieldAlert size={14} className="absolute left-3 top-3.5 text-red-500" />}
                    {gaps}
                </div>
            </TableCell>

        </TableRow>
    );
}