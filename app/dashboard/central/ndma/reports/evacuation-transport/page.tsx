// app/dashboard/ndma/reports/evacuation-transport/page.tsx
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
    Navigation, Map, Wind, Waves, ThermometerSun, AlertTriangle, 
    Users, Car, Accessibility, Activity
} from "lucide-react";

export default function EvacuationTransportReportPage() {
    const [searchTerm, setSearchTerm] = useState("");
    const [statusFilter, setStatusFilter] = useState("ALL");

    return (
        <div className="space-y-8 animate-in fade-in duration-1000 pb-20 font-sans selection:bg-blue-100">

            {/* PAGE HEADER */}
            <div className="flex flex-col xl:flex-row justify-between items-start xl:items-end gap-6 relative">
                <div className="space-y-2">
                    <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border-2 border-blue-200 shadow-sm">
                        <FileBarChart size={14} /> Statutory Reports
                    </div>
                    <h1 className="text-5xl font-black text-slate-800 tracking-tighter uppercase leading-none">Evacuation & Transport</h1>
                    <p className="text-slate-500 font-medium text-lg italic underline underline-offset-8 decoration-blue-200">
                        National logistics tracking for PwD-accessible disaster evacuation fleets.
                    </p>
                </div>
                <div className="flex gap-4">
                    <Button variant="outline" className="h-14 px-8 rounded-full border-2 border-blue-200 text-blue-700 font-black uppercase tracking-widest text-[10px] bg-white shadow-xl hover:bg-blue-50 transition-all">
                        <Printer size={16} className="mr-2" /> Print Logistics
                    </Button>
                    <Button className="h-14 px-8 rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 text-white font-black uppercase tracking-widest text-[10px] shadow-xl hover:shadow-[0_0_20px_theme(colors.blue.400)] transition-all gap-2 group border-none">
                        <DownloadCloud size={16} /> Export CSV
                    </Button>
                </div>
            </div>

            {/* FILTER & SEARCH TOOLBAR */}
            <Card className="rounded-[32px] border-2 border-blue-50 shadow-md bg-white overflow-hidden max-w-full">
                <div className="p-4 flex flex-col md:flex-row justify-between items-center gap-4 bg-blue-50/50">
                    <div className="relative w-full md:w-96 group">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-blue-500 group-focus-within:text-blue-600 transition-colors" />
                        <input 
                            type="text" 
                            placeholder="Search by State or Disaster Type..." 
                            className="w-full pl-12 pr-4 py-3 border-2 border-blue-100 bg-white rounded-2xl text-xs font-bold text-slate-800 focus:outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-50 transition-all shadow-sm"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    
                    <div className="flex items-center gap-4 w-full md:w-auto">
                        <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-blue-700">
                            <Filter size={14} /> Readiness Status:
                        </div>
                        <select 
                            className="border-2 border-blue-100 bg-white rounded-2xl px-4 py-3 text-xs font-bold text-slate-800 focus:outline-none focus:border-blue-400 shadow-sm appearance-none cursor-pointer"
                            value={statusFilter}
                            onChange={(e) => setStatusFilter(e.target.value)}
                        >
                            <option value="ALL">All Statuses</option>
                            <option value="ADEQUATE">Adequate / Ready</option>
                            <option value="PARTIAL">Partial Fleet</option>
                            <option value="CRITICAL">Critical Shortage</option>
                        </select>
                    </div>
                </div>
            </Card>

            {/* MAIN REPORT TABLE CARD */}
            <Card className="rounded-[40px] border-none shadow-xl overflow-hidden bg-white">
                
                {/* VIBRANT GRADIENT HEADER */}
                <CardHeader className="p-0 border-b-4 border-blue-200">
                    <div className="p-8 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white relative overflow-hidden flex flex-col md:flex-row justify-between items-center gap-6">
                        <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] bg-fixed" />
                        
                        <div className="relative z-10 flex items-center gap-4">
                            <div className="h-12 w-12 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center shadow-lg">
                                <Navigation size={20} className="text-white drop-shadow-md" />
                            </div>
                            <div>
                                <CardTitle className="text-xl font-black uppercase tracking-tight text-white drop-shadow-sm">National Evacuation Fleet Readiness</CardTitle>
                                <p className="text-[10px] font-bold text-blue-100 uppercase tracking-widest mt-1">Aggregated from SDMA transport logs</p>
                            </div>
                        </div>

                        <div className="relative z-10 flex gap-3 flex-wrap justify-end">
                            <Badge className="bg-white/20 text-white border-none text-[10px] font-black uppercase tracking-widest px-4 py-2 backdrop-blur-md shadow-sm">
                                Avg Readiness: 84%
                            </Badge>
                            <Badge className="bg-white/20 text-white border-none text-[10px] font-black uppercase tracking-widest px-4 py-2 backdrop-blur-md shadow-sm">
                                Critical Deficits: 01
                            </Badge>
                        </div>
                    </div>
                </CardHeader>
                
                <CardContent className="p-0 overflow-x-auto relative min-h-[400px]">
                    <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/topography.png')]" />
                    
                    <Table className="relative z-10">
                        <TableHeader className="bg-slate-50/80 backdrop-blur-md">
                            <TableRow className="border-b-2 border-slate-200">
                                <TableHead className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-600">State / UT</TableHead>
                                <TableHead className="py-5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-600 text-center">Threat Profile</TableHead>
                                <TableHead className="py-5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-600 text-center">Evacuation Load (PwDs)</TableHead>
                                <TableHead className="py-5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-600 text-center">Total Fleet Identified</TableHead>
                                <TableHead className="py-5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-600 text-center">Accessible Units</TableHead>
                                <TableHead className="py-5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-600 text-center">Status</TableHead>
                                <TableHead className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-600 w-1/4">Reported Gaps</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody className="divide-y divide-slate-100">
                            
                            <ReportRow 
                                state="Odisha"
                                disaster="CYCLONE" icon={<Wind />} iconColor="text-cyan-600"
                                load="12,450"
                                fleet="450"
                                accessible="380"
                                status="ADEQUATE"
                                gaps="Slight shortage of hydraulic lift ambulances in southern coastal blocks."
                            />
                            <ReportRow 
                                state="Gujarat"
                                disaster="CYCLONE" icon={<Wind />} iconColor="text-cyan-600"
                                load="8,200"
                                fleet="320"
                                accessible="250"
                                status="PARTIAL"
                                gaps="Inter-district fleet sharing protocol not formalized for Kutch region."
                            />
                            <ReportRow 
                                state="Assam"
                                disaster="FLOOD" icon={<Waves />} iconColor="text-blue-600"
                                load="15,600"
                                fleet="210"
                                accessible="45"
                                status="CRITICAL"
                                gaps="Severe lack of wheelchair-accessible boats. Reliance on manual lifting poses extreme risk."
                                alert
                            />
                            <ReportRow 
                                state="Bihar"
                                disaster="HEATWAVE" icon={<ThermometerSun />} iconColor="text-orange-600"
                                load="4,800"
                                fleet="180"
                                accessible="60"
                                status="PARTIAL"
                                gaps="AC-equipped transport for intellectually disabled persons is highly deficient."
                            />

                        </TableBody>
                    </Table>
                </CardContent>
            </Card>

        </div>
    );
}

/* UI SUB-COMPONENTS */

function ReportRow({ state, disaster, icon, iconColor, load, fleet, accessible, status, gaps, alert }: any) {
    
    const statusStyle = status === 'ADEQUATE' ? 'bg-emerald-100 text-emerald-700' :
                        status === 'PARTIAL' ? 'bg-amber-100 text-amber-700' :
                        'bg-red-500 text-white shadow-md animate-pulse';

    return (
        <TableRow className="border-none hover:bg-slate-50 transition-all group">
            
            {/* State */}
            <TableCell className="px-8 py-5">
                <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-slate-100 flex items-center justify-center shrink-0 border border-slate-200">
                        <Map size={14} className="text-slate-600" />
                    </div>
                    <span className="text-xs font-black text-slate-800 uppercase tracking-widest">{state}</span>
                </div>
            </TableCell>

            {/* Threat Profile */}
            <TableCell className="py-5 text-center">
                <div className="flex items-center justify-center gap-1.5 bg-slate-50 px-2 py-1 rounded w-max mx-auto border border-slate-100 shadow-sm">
                    {React.cloneElement(icon, { size: 12, className: iconColor })}
                    <span className="text-[9px] font-black uppercase tracking-widest text-slate-600">{disaster}</span>
                </div>
            </TableCell>

            {/* Evacuation Load */}
            <TableCell className="py-5 text-center">
                <span className="font-mono text-sm font-black text-slate-800 flex items-center justify-center gap-1.5">
                    <Users size={12} className="text-slate-400" />
                    {load}
                </span>
            </TableCell>

            {/* Total Fleet */}
            <TableCell className="py-5 text-center">
                <span className="font-mono text-sm font-bold text-slate-500 flex items-center justify-center gap-1.5">
                    <Car size={12} className="text-slate-400" />
                    {fleet}
                </span>
            </TableCell>

            {/* Accessible Units */}
            <TableCell className="py-5 text-center">
                <span className={`font-mono text-sm font-black px-3 py-1 rounded-lg flex items-center justify-center gap-1.5 w-max mx-auto ${alert ? 'text-red-600 bg-red-50 border border-red-100' : 'text-blue-700 bg-blue-50 border border-blue-100'}`}>
                    <Accessibility size={12} className={alert ? 'text-red-400' : 'text-blue-400'} />
                    {accessible}
                </span>
            </TableCell>

            {/* Status */}
            <TableCell className="py-5 text-center">
                <Badge className={`border-none text-[9px] font-black uppercase tracking-widest px-4 py-1.5 ${statusStyle}`}>
                    {status}
                </Badge>
            </TableCell>

            {/* Gaps */}
            <TableCell className="px-8 py-5">
                <div className={`text-xs font-bold leading-relaxed p-3 rounded-xl border ${alert ? 'bg-red-50 border-red-100 text-red-800 shadow-inner' : 'bg-white border-slate-200 text-slate-600'}`}>
                    {gaps}
                </div>
            </TableCell>

        </TableRow>
    );
}