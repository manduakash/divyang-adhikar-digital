// app/dashboard/ndma/reports/early-warning-coverage/page.tsx
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
    RadioTower, Map, Wind, Waves, ThermometerSun, AlertTriangle, 
    Users, Activity, Smartphone, PhoneCall
} from "lucide-react";

export default function EarlyWarningCoverageReportPage() {
    const [searchTerm, setSearchTerm] = useState("");
    const [disasterFilter, setDisasterFilter] = useState("ALL");

    return (
        <div className="space-y-8 animate-in fade-in duration-1000 pb-20 font-sans selection:bg-purple-100">

            {/* PAGE HEADER */}
            <div className="flex flex-col xl:flex-row justify-between items-start xl:items-end gap-6 relative">
                <div className="space-y-2">
                    <div className="inline-flex items-center gap-2 bg-purple-50 text-purple-700 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border-2 border-purple-200 shadow-sm">
                        <FileBarChart size={14} /> Statutory Reports
                    </div>
                    <h1 className="text-5xl font-black text-slate-800 tracking-tighter uppercase leading-none">Early Warning Coverage</h1>
                    <p className="text-slate-500 font-medium text-lg italic underline underline-offset-8 decoration-purple-200">
                        Analyzing last-mile dissemination of PwD-specific alerts and actionable warnings.
                    </p>
                </div>
                <div className="flex gap-4">
                    <Button variant="outline" className="h-14 px-8 rounded-full border-2 border-purple-200 text-purple-700 font-black uppercase tracking-widest text-[10px] bg-white shadow-xl hover:bg-purple-50 transition-all">
                        <Printer size={16} className="mr-2" /> Print Matrix
                    </Button>
                    <Button className="h-14 px-8 rounded-full bg-gradient-to-r from-purple-500 via-fuchsia-500 to-pink-500 text-white font-black uppercase tracking-widest text-[10px] shadow-xl hover:shadow-[0_0_20px_theme(colors.purple.400)] transition-all gap-2 group border-none">
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
                            placeholder="Search by State or Disaster Profile..." 
                            className="w-full pl-12 pr-4 py-3 border-2 border-purple-100 bg-white rounded-2xl text-xs font-bold text-slate-800 focus:outline-none focus:border-purple-400 focus:ring-4 focus:ring-purple-50 transition-all shadow-sm"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    
                    <div className="flex items-center gap-4 w-full md:w-auto">
                        <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-purple-700">
                            <Filter size={14} /> Threat Scope:
                        </div>
                        <select 
                            className="border-2 border-purple-100 bg-white rounded-2xl px-4 py-3 text-xs font-bold text-slate-800 focus:outline-none focus:border-purple-400 shadow-sm appearance-none cursor-pointer"
                            value={disasterFilter}
                            onChange={(e) => setDisasterFilter(e.target.value)}
                        >
                            <option value="ALL">All Disasters</option>
                            <option value="CYCLONE">Cyclone Systems</option>
                            <option value="FLOOD">Flood Basins</option>
                            <option value="HEATWAVE">Heatwave Zones</option>
                        </select>
                    </div>
                </div>
            </Card>

            {/* MAIN REPORT TABLE CARD */}
            <Card className="rounded-[40px] border-none shadow-xl overflow-hidden bg-white">
                
                {/* VIBRANT GRADIENT HEADER */}
                <CardHeader className="p-0 border-b-4 border-purple-200">
                    <div className="p-8 bg-gradient-to-r from-purple-600 via-fuchsia-600 to-pink-600 text-white relative overflow-hidden flex flex-col md:flex-row justify-between items-center gap-6">
                        <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] bg-fixed" />
                        
                        <div className="relative z-10 flex items-center gap-4">
                            <div className="h-12 w-12 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center shadow-lg">
                                <RadioTower size={20} className="text-white drop-shadow-md" />
                            </div>
                            <div>
                                <CardTitle className="text-xl font-black uppercase tracking-tight text-white drop-shadow-sm">National Alert Penetration Metrics</CardTitle>
                                <p className="text-[10px] font-bold text-purple-100 uppercase tracking-widest mt-1">Aggregated from SDMA network logs</p>
                            </div>
                        </div>

                        <div className="relative z-10 flex gap-3 flex-wrap justify-end">
                            <Badge className="bg-white/20 text-white border-none text-[10px] font-black uppercase tracking-widest px-4 py-2 backdrop-blur-md shadow-sm">
                                National Coverage: 88%
                            </Badge>
                            <Badge className="bg-white/20 text-white border-none text-[10px] font-black uppercase tracking-widest px-4 py-2 backdrop-blur-md shadow-sm">
                                Critical Disconnects: 02
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
                                <TableHead className="py-5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-600 text-center">Disaster Type</TableHead>
                                <TableHead className="py-5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-600 text-center">PwDs Mapped</TableHead>
                                <TableHead className="py-5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-600 text-center">Successfully Reached</TableHead>
                                <TableHead className="py-5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-600 text-center">Unreached</TableHead>
                                <TableHead className="py-5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-600 text-center w-32">Coverage %</TableHead>
                                <TableHead className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-600 w-1/4">Corrective Measures</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody className="divide-y divide-slate-100">
                            
                            <ReportRow 
                                state="Odisha"
                                disaster="CYCLONE" icon={<Wind />} iconColor="text-cyan-600"
                                mapped="185,000"
                                reached="177,600"
                                unreached="7,400"
                                coverage={96}
                                measures="Expanding IVR language options for deep tribal blocks."
                            />
                            <ReportRow 
                                state="Gujarat"
                                disaster="CYCLONE" icon={<Wind />} iconColor="text-cyan-600"
                                mapped="120,000"
                                reached="106,800"
                                unreached="13,200"
                                coverage={89}
                                measures="Updating mobile number database; initiating ASHA worker proxy alerts."
                            />
                            <ReportRow 
                                state="Assam"
                                disaster="FLOOD" icon={<Waves />} iconColor="text-blue-600"
                                mapped="95,000"
                                reached="52,250"
                                unreached="42,750"
                                coverage={55}
                                measures="Major database sync failure. NDMA directed immediate ground-level census via Gram Panchayats."
                                alert
                            />
                            <ReportRow 
                                state="Bihar"
                                disaster="HEATWAVE" icon={<ThermometerSun />} iconColor="text-orange-600"
                                mapped="210,000"
                                reached="147,000"
                                unreached="63,000"
                                coverage={70}
                                measures="Increasing dependency on local radio over SMS due to network dead zones."
                            />

                        </TableBody>
                    </Table>
                </CardContent>
            </Card>

        </div>
    );
}

/* UI SUB-COMPONENTS */

function ReportRow({ state, disaster, icon, iconColor, mapped, reached, unreached, coverage, measures, alert }: any) {
    
    // Determine color based on threshold
    const progressColor = coverage >= 90 ? 'bg-emerald-500' : 
                          coverage >= 75 ? 'bg-blue-500' : 
                          'bg-red-500';

    return (
        <TableRow className="border-none hover:bg-slate-50 transition-all group">
            
            {/* State */}
            <TableCell className="px-8 py-5">
                <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center shrink-0 border border-purple-200 shadow-inner">
                        <Map size={14} className="text-purple-600" />
                    </div>
                    <span className="text-xs font-black text-slate-800 uppercase tracking-widest">{state}</span>
                </div>
            </TableCell>

            {/* Disaster Type */}
            <TableCell className="py-5 text-center">
                <div className="flex items-center justify-center gap-1.5 bg-slate-50 px-2 py-1 rounded w-max mx-auto border border-slate-100 shadow-sm">
                    {React.cloneElement(icon, { size: 12, className: iconColor })}
                    <span className="text-[9px] font-black uppercase tracking-widest text-slate-600">{disaster}</span>
                </div>
            </TableCell>

            {/* Mapped */}
            <TableCell className="py-5 text-center">
                <span className="font-mono text-sm font-bold text-slate-500 flex items-center justify-center gap-1.5">
                    <Users size={12} className="text-slate-400" />
                    {mapped}
                </span>
            </TableCell>

            {/* Reached */}
            <TableCell className="py-5 text-center">
                <span className="font-mono text-sm font-black text-emerald-600 flex items-center justify-center gap-1.5">
                    <Smartphone size={12} className="text-emerald-400" />
                    {reached}
                </span>
            </TableCell>

            {/* Unreached */}
            <TableCell className="py-5 text-center">
                <span className={`font-mono text-xs font-black px-2 py-1 rounded-md ${alert ? 'bg-red-50 text-red-600 border border-red-100' : 'bg-slate-50 text-slate-600 border border-slate-100'}`}>
                    {unreached}
                </span>
            </TableCell>

            {/* Coverage % */}
            <TableCell className="py-5">
                <div className="flex flex-col items-center gap-1.5 w-full max-w-[100px] mx-auto">
                    <span className={`font-mono text-xs font-black ${coverage < 75 ? 'text-red-600' : 'text-slate-800'}`}>
                        {coverage}%
                    </span>
                    <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden shadow-inner">
                        <div 
                            className={`h-full ${progressColor} rounded-full transition-all duration-1000`} 
                            style={{ width: `${coverage}%` }} 
                        />
                    </div>
                </div>
            </TableCell>

            {/* Measures */}
            <TableCell className="px-8 py-5">
                <div className={`text-xs font-bold leading-relaxed p-3 rounded-xl border ${alert ? 'bg-red-50 border-red-200 text-red-800 shadow-inner' : 'bg-white border-slate-200 text-slate-600 shadow-sm'}`}>
                    {measures}
                </div>
            </TableCell>

        </TableRow>
    );
}