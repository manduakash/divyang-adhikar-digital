// app/dashboard/ndma/reports/post-disaster/page.tsx
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
    ShieldAlert, Map, Users, Navigation, Activity, HeartPulse,
    Wind, Waves, ThermometerSun, Zap, AlertTriangle, Building2
} from "lucide-react";

export default function PostDisasterResponseReportPage() {
    const [searchTerm, setSearchTerm] = useState("");
    const [disasterFilter, setDisasterFilter] = useState("ALL");

    return (
        <div className="space-y-8 animate-in fade-in duration-1000 pb-20 font-sans selection:bg-rose-100">

            {/* PAGE HEADER */}
            <div className="flex flex-col xl:flex-row justify-between items-start xl:items-end gap-6 relative">
                <div className="space-y-2">
                    <div className="inline-flex items-center gap-2 bg-rose-50 text-rose-700 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border-2 border-rose-200 shadow-sm">
                        <FileBarChart size={14} /> Statutory Reports
                    </div>
                    <h1 className="text-5xl font-black text-slate-800 tracking-tighter uppercase leading-none">Post-Disaster Response</h1>
                    <p className="text-slate-500 font-medium text-lg italic underline underline-offset-8 decoration-rose-200">
                        Audit of actual evacuation, rescue, and relief operations for PwDs following major events.
                    </p>
                </div>
                <div className="flex gap-4">
                    <Button variant="outline" className="h-14 px-8 rounded-full border-2 border-rose-200 text-rose-700 font-black uppercase tracking-widest text-[10px] bg-white shadow-xl hover:bg-rose-50 transition-all">
                        <Printer size={16} className="mr-2" /> Print Audit
                    </Button>
                    <Button className="h-14 px-8 rounded-full bg-gradient-to-r from-red-600 via-rose-600 to-orange-600 text-white font-black uppercase tracking-widest text-[10px] shadow-xl hover:shadow-[0_0_20px_theme(colors.red.500)] transition-all gap-2 group border-none">
                        <DownloadCloud size={16} /> Export CSV
                    </Button>
                </div>
            </div>

            {/* FILTER & SEARCH TOOLBAR */}
            <Card className="rounded-[32px] border-2 border-rose-50 shadow-md bg-white overflow-hidden max-w-full">
                <div className="p-4 flex flex-col md:flex-row justify-between items-center gap-4 bg-rose-50/50">
                    <div className="relative w-full md:w-96 group">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-rose-400 group-focus-within:text-rose-600 transition-colors" />
                        <input 
                            type="text" 
                            placeholder="Search by Event Name, State, or Issues..." 
                            className="w-full pl-12 pr-4 py-3 border-2 border-rose-100 bg-white rounded-2xl text-xs font-bold text-slate-800 focus:outline-none focus:border-rose-400 focus:ring-4 focus:ring-rose-50 transition-all shadow-sm"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    
                    <div className="flex items-center gap-4 w-full md:w-auto">
                        <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-rose-700">
                            <Filter size={14} /> Filter Event:
                        </div>
                        <select 
                            className="border-2 border-rose-100 bg-white rounded-2xl px-4 py-3 text-xs font-bold text-slate-800 focus:outline-none focus:border-rose-400 shadow-sm appearance-none cursor-pointer"
                            value={disasterFilter}
                            onChange={(e) => setDisasterFilter(e.target.value)}
                        >
                            <option value="ALL">All Events</option>
                            <option value="CYCLONE">Cyclones</option>
                            <option value="FLOOD">Floods</option>
                            <option value="HEATWAVE">Heatwaves</option>
                        </select>
                    </div>
                </div>
            </Card>

            {/* MAIN REPORT TABLE CARD */}
            <Card className="rounded-[40px] border-none shadow-xl overflow-hidden bg-white">
                
                {/* VIBRANT GRADIENT HEADER */}
                <CardHeader className="p-0 border-b-4 border-rose-300">
                    <div className="p-8 bg-gradient-to-r from-red-600 via-rose-600 to-orange-600 text-white relative overflow-hidden flex flex-col md:flex-row justify-between items-center gap-6">
                        <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] bg-fixed" />
                        
                        <div className="relative z-10 flex items-center gap-4">
                            <div className="h-12 w-12 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center shadow-lg">
                                <ShieldAlert size={20} className="text-white drop-shadow-md" />
                            </div>
                            <div>
                                <CardTitle className="text-xl font-black uppercase tracking-tight text-white drop-shadow-sm">National Post-Event Audit</CardTitle>
                                <p className="text-[10px] font-bold text-rose-100 uppercase tracking-widest mt-1">Aggregated from State Relief Commissioner reports</p>
                            </div>
                        </div>

                        <div className="relative z-10 flex gap-3 flex-wrap justify-end">
                            <Badge className="bg-white/20 text-white border-none text-[10px] font-black uppercase tracking-widest px-4 py-2 backdrop-blur-md shadow-sm">
                                Avg Rescue Rate: 92%
                            </Badge>
                            <Badge className="bg-white/20 text-white border-none text-[10px] font-black uppercase tracking-widest px-4 py-2 backdrop-blur-md shadow-sm">
                                Critical Audits: 02
                            </Badge>
                        </div>
                    </div>
                </CardHeader>
                
                <CardContent className="p-0 overflow-x-auto relative min-h-[400px]">
                    <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/topography.png')]" />
                    
                    <Table className="relative z-10">
                        <TableHeader className="bg-slate-50/80 backdrop-blur-md">
                            <TableRow className="border-b-2 border-slate-200">
                                <TableHead className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-600">Disaster Event</TableHead>
                                <TableHead className="py-5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-600">Location (State/UT)</TableHead>
                                <TableHead className="py-5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-600 text-center">PwDs Affected</TableHead>
                                <TableHead className="py-5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-600 text-center">PwDs Evacuated</TableHead>
                                <TableHead className="py-5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-600 text-center">Shelters Utilised</TableHead>
                                <TableHead className="py-5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-600 w-48">Assistance Provided</TableHead>
                                <TableHead className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-600 w-1/4">Ground Issues Faced</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody className="divide-y divide-slate-100">
                            
                            <ReportRow 
                                event="Cyclone Remal"
                                type="CYCLONE" icon={<Wind />} iconColor="text-cyan-600"
                                state="Odisha & West Bengal"
                                affected="12,450"
                                evacuated="11,800"
                                shelters="85"
                                assistance="Accessible transport, prioritized medical triage, sign language interpreters at hubs."
                                issues="Power outages affected electric wheelchair charging. Some secondary camps lacked ramps."
                            />
                            <ReportRow 
                                event="Brahmaputra Floods"
                                type="FLOOD" icon={<Waves />} iconColor="text-blue-600"
                                state="Assam"
                                affected="8,200"
                                evacuated="5,400"
                                shelters="42"
                                assistance="Evacuation via specialized boats, distribution of waterproof assistive devices."
                                issues="Severe shortage of accessible rescue boats left many stranded for >24hrs. Critical intervention required."
                                alert
                            />
                            <ReportRow 
                                event="Cyclone Biparjoy"
                                type="CYCLONE" icon={<Wind />} iconColor="text-cyan-600"
                                state="Gujarat"
                                affected="9,100"
                                evacuated="8,950"
                                shelters="65"
                                assistance="Advanced SMS early warning, pre-emptive shifting of high-dependency cases."
                                issues="Inter-district ambulance coordination was slightly delayed due to network failure."
                            />
                            <ReportRow 
                                event="Northern Heatwave"
                                type="HEATWAVE" icon={<ThermometerSun />} iconColor="text-orange-600"
                                state="UP & Bihar"
                                affected="15,000"
                                evacuated="-"
                                shelters="30"
                                assistance="Home-delivered ORS and dedicated cooling centers for intellectually disabled."
                                issues="Inconsistent power backup at cooling centers compromised care quality."
                            />

                        </TableBody>
                    </Table>
                </CardContent>
            </Card>

        </div>
    );
}

/* UI SUB-COMPONENTS */

function ReportRow({ event, type, icon, iconColor, state, affected, evacuated, shelters, assistance, issues, alert }: any) {
    
    // Calculate evacuation rate if applicable
    const evRate = evacuated !== '-' ? Math.round((parseInt(evacuated.replace(/,/g, '')) / parseInt(affected.replace(/,/g, ''))) * 100) : null;
    const isCritical = evRate !== null && evRate < 75;

    return (
        <TableRow className="border-none hover:bg-slate-50 transition-all group">
            
            {/* Disaster Event */}
            <TableCell className="px-8 py-5">
                <div className="flex flex-col gap-2">
                    <span className="text-xs font-black text-slate-800 tracking-tight">{event}</span>
                    <Badge variant="outline" className={`border-2 text-[8px] font-black uppercase tracking-widest px-2 py-0.5 w-fit flex items-center gap-1.5 ${type === 'CYCLONE' ? 'border-cyan-200 text-cyan-700 bg-cyan-50' : type === 'FLOOD' ? 'border-blue-200 text-blue-700 bg-blue-50' : 'border-orange-200 text-orange-700 bg-orange-50'}`}>
                        {React.cloneElement(icon, { size: 10 })}
                        {type}
                    </Badge>
                </div>
            </TableCell>

            {/* Location */}
            <TableCell className="py-5">
                <div className="flex items-center gap-2">
                    <Map size={14} className="text-slate-400" />
                    <span className="text-[10px] font-black text-slate-700 uppercase tracking-widest">{state}</span>
                </div>
            </TableCell>

            {/* Affected */}
            <TableCell className="py-5 text-center">
                <span className="font-mono text-sm font-bold text-slate-500">{affected}</span>
            </TableCell>

            {/* Evacuated */}
            <TableCell className="py-5 text-center">
                <div className="flex flex-col items-center justify-center gap-1">
                    <span className={`font-mono text-sm font-black px-3 py-1 rounded-lg border ${isCritical ? 'bg-red-50 text-red-600 border-red-100 shadow-inner' : 'bg-emerald-50 text-emerald-600 border-emerald-100 shadow-inner'}`}>
                        {evacuated}
                    </span>
                    {evRate && (
                        <span className={`text-[8px] font-black uppercase tracking-widest ${isCritical ? 'text-red-500' : 'text-emerald-600'}`}>
                            {evRate}% Rate
                        </span>
                    )}
                </div>
            </TableCell>

            {/* Shelters */}
            <TableCell className="py-5 text-center">
                <span className="font-mono text-sm font-black text-slate-700 flex items-center justify-center gap-1.5">
                    <Building2 size={12} className="text-slate-400" />
                    {shelters}
                </span>
            </TableCell>

            {/* Assistance Provided */}
            <TableCell className="py-5">
                <div className="text-[10px] font-bold text-slate-600 leading-relaxed bg-white border border-slate-100 p-2.5 rounded-xl shadow-sm flex items-start gap-2">
                    <HeartPulse size={12} className="text-rose-500 shrink-0 mt-0.5" />
                    <span className="line-clamp-3">{assistance}</span>
                </div>
            </TableCell>

            {/* Issues Faced */}
            <TableCell className="px-8 py-5">
                <div className={`text-xs font-bold leading-relaxed p-3 rounded-xl border relative ${alert ? 'bg-red-50 border-red-200 text-red-800 shadow-inner pl-8' : 'bg-white border-slate-200 text-slate-600 shadow-sm'}`}>
                    {alert && <AlertTriangle size={14} className="absolute left-3 top-3.5 text-red-500" />}
                    {issues}
                </div>
            </TableCell>

        </TableRow>
    );
}