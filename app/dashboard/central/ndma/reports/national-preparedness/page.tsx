// app/dashboard/ndma/reports/national-preparedness/page.tsx
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
    ShieldAlert, Globe, Users, Flame, Activity, Map, Wind, 
    Waves, Activity as Quake, ThermometerSun
} from "lucide-react";

export default function NationalPreparednessReportPage() {
    const [searchTerm, setSearchTerm] = useState("");
    const [disasterFilter, setDisasterFilter] = useState("ALL");

    return (
        <div className="space-y-8 animate-in fade-in duration-1000 pb-20 font-sans selection:bg-orange-100">

            {/* PAGE HEADER */}
            <div className="flex flex-col xl:flex-row justify-between items-start xl:items-end gap-6 relative">
                <div className="space-y-2">
                    <div className="inline-flex items-center gap-2 bg-orange-50 text-orange-700 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border-2 border-orange-200 shadow-sm">
                        <FileBarChart size={14} /> Statutory Reports
                    </div>
                    <h1 className="text-5xl font-black text-slate-800 tracking-tighter uppercase leading-none">National PwD Disaster Risk</h1>
                    <p className="text-slate-500 font-medium text-lg italic underline underline-offset-8 decoration-orange-200">
                        Apex compilation of disaster-specific vulnerabilities and preparedness gaps across India.
                    </p>
                </div>
                <div className="flex gap-4">
                    <Button variant="outline" className="h-14 px-8 rounded-full border-2 border-orange-200 text-orange-700 font-black uppercase tracking-widest text-[10px] bg-white shadow-xl hover:bg-orange-50 transition-all">
                        <Printer size={16} className="mr-2" /> Print Report
                    </Button>
                    <Button className="h-14 px-8 rounded-full bg-gradient-to-r from-orange-500 via-amber-500 to-red-500 text-white font-black uppercase tracking-widest text-[10px] shadow-xl hover:shadow-[0_0_20px_theme(colors.orange.400)] transition-all gap-2 group border-none">
                        <DownloadCloud size={16} /> Export CSV
                    </Button>
                </div>
            </div>

            {/* FILTER & SEARCH TOOLBAR */}
            <Card className="rounded-[32px] border-2 border-orange-50 shadow-md bg-white overflow-hidden max-w-full">
                <div className="p-4 flex flex-col md:flex-row justify-between items-center gap-4 bg-orange-50/50">
                    <div className="relative w-full md:w-96 group">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-orange-500 group-focus-within:text-orange-600 transition-colors" />
                        <input 
                            type="text" 
                            placeholder="Search by State or Disaster Type..." 
                            className="w-full pl-12 pr-4 py-3 border-2 border-orange-100 bg-white rounded-2xl text-xs font-bold text-slate-800 focus:outline-none focus:border-orange-400 focus:ring-4 focus:ring-orange-50 transition-all shadow-sm"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    
                    <div className="flex items-center gap-4 w-full md:w-auto">
                        <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-orange-700">
                            <Filter size={14} /> Filter Hazard:
                        </div>
                        <select 
                            className="border-2 border-orange-100 bg-white rounded-2xl px-4 py-3 text-xs font-bold text-slate-800 focus:outline-none focus:border-orange-400 shadow-sm appearance-none cursor-pointer"
                            value={disasterFilter}
                            onChange={(e) => setDisasterFilter(e.target.value)}
                        >
                            <option value="ALL">All Disasters</option>
                            <option value="CYCLONE">Cyclone</option>
                            <option value="FLOOD">Floods</option>
                            <option value="EARTHQUAKE">Earthquake</option>
                            <option value="HEATWAVE">Heatwave</option>
                        </select>
                    </div>
                </div>
            </Card>

            {/* MAIN REPORT TABLE CARD */}
            <Card className="rounded-[40px] border-none shadow-xl overflow-hidden bg-white">
                
                {/* VIBRANT GRADIENT HEADER */}
                <CardHeader className="p-0 border-b-4 border-orange-200">
                    <div className="p-8 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white relative overflow-hidden flex flex-col md:flex-row justify-between items-center gap-6">
                        <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] bg-fixed" />
                        
                        <div className="relative z-10 flex items-center gap-4">
                            <div className="h-12 w-12 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center shadow-lg">
                                <Globe size={20} className="text-white drop-shadow-md" />
                            </div>
                            <div>
                                <CardTitle className="text-xl font-black uppercase tracking-tight text-white drop-shadow-sm">National Risk & Preparedness</CardTitle>
                                <p className="text-[10px] font-bold text-indigo-100 uppercase tracking-widest mt-1">Aggregated from State SDMA Inputs</p>
                            </div>
                        </div>

                        <div className="relative z-10 flex gap-3 flex-wrap justify-end">
                            <Badge className="bg-white/20 text-white border-none text-[10px] font-black uppercase tracking-widest px-4 py-2 backdrop-blur-md shadow-sm flex gap-2 items-center">
                                <Users size={12} /> Total PwDs at Risk: 4.2M
                            </Badge>
                            <Badge className="bg-white/20 text-white border-none text-[10px] font-black uppercase tracking-widest px-4 py-2 backdrop-blur-md shadow-sm flex gap-2 items-center">
                                <Flame size={12} /> Critical Gaps: 02
                            </Badge>
                        </div>
                    </div>
                </CardHeader>
                
                <CardContent className="p-0 overflow-x-auto relative min-h-[400px]">
                    <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/topography.png')]" />
                    
                    <Table className="relative z-10">
                        <TableHeader className="bg-slate-50/80 backdrop-blur-md">
                            <TableRow className="border-b-2 border-slate-200">
                                <TableHead className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-600">Disaster Type</TableHead>
                                <TableHead className="py-5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-600">States Covered</TableHead>
                                <TableHead className="py-5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-600 text-center">PwDs in Risk Zones</TableHead>
                                <TableHead className="py-5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-600 text-center">High-Dependency PwDs</TableHead>
                                <TableHead className="py-5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-600 text-center">Preparedness Status</TableHead>
                                <TableHead className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-600 w-1/3">Major Gaps Identified</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody className="divide-y divide-slate-100">
                            
                            <ReportRow 
                                type="CYCLONE"
                                icon={<Wind />}
                                states="OD, WB, AP, TN, GJ"
                                pwds="1.2M"
                                highDep="340K"
                                status="ADEQUATE"
                                gaps="Accessible transport fleets in AP & WB fall below the 60% requirement. Wheelchair ramps missing in 15% of older cyclone shelters."
                                typeColor="text-cyan-700 bg-cyan-50 border-cyan-200"
                            />
                            <ReportRow 
                                type="FLOOD"
                                icon={<Waves />}
                                states="AS, BR, UP, KL"
                                pwds="1.8M"
                                highDep="420K"
                                status="CRITICAL"
                                gaps="Early warning SMS not reaching hearing-impaired populations in Assam. Relief camps in Bihar lack accessible WASH facilities."
                                typeColor="text-blue-700 bg-blue-50 border-blue-200"
                                alert
                            />
                            <ReportRow 
                                type="HEATWAVE"
                                icon={<ThermometerSun />}
                                states="RJ, DL, UP, MP"
                                pwds="800K"
                                highDep="250K"
                                status="PARTIAL"
                                gaps="Interrupted power supply to care homes for intellectual disabilities. Lack of specialized cooling centers."
                                typeColor="text-orange-700 bg-orange-50 border-orange-200"
                            />
                            <ReportRow 
                                type="EARTHQUAKE"
                                icon={<Quake />}
                                states="DL, UK, HP, NE"
                                pwds="400K"
                                highDep="120K"
                                status="ADEQUATE"
                                gaps="Mock drills exclude bed-ridden PwD scenarios. Evacuation routes in high-rise buildings lack tactile marking."
                                typeColor="text-amber-700 bg-amber-50 border-amber-200"
                            />

                        </TableBody>
                    </Table>
                </CardContent>
            </Card>

        </div>
    );
}

/* UI SUB-COMPONENTS */

function ReportRow({ type, icon, states, pwds, highDep, status, gaps, typeColor, alert }: any) {
    
    const statusStyle = status === 'ADEQUATE' ? 'bg-emerald-100 text-emerald-700' :
                        status === 'PARTIAL' ? 'bg-amber-100 text-amber-700' :
                        'bg-red-500 text-white shadow-md animate-pulse';

    return (
        <TableRow className="border-none hover:bg-slate-50 transition-all group">
            
            <TableCell className="px-8 py-5">
                <Badge variant="outline" className={`border-2 text-[10px] font-black uppercase tracking-widest px-3 py-1.5 flex items-center gap-2 w-max ${typeColor}`}>
                    {React.cloneElement(icon, { size: 14 })}
                    {type}
                </Badge>
            </TableCell>

            <TableCell className="py-5">
                <div className="flex items-center gap-2">
                    <Map size={14} className="text-slate-400" />
                    <span className="text-xs font-black text-slate-800 tracking-widest uppercase">{states}</span>
                </div>
            </TableCell>

            <TableCell className="py-5 text-center">
                <span className="font-mono text-sm font-black text-slate-700">{pwds}</span>
            </TableCell>

            <TableCell className="py-5 text-center">
                <span className={`font-mono text-sm font-black px-3 py-1 rounded-lg ${alert ? 'text-red-600 bg-red-50' : 'text-slate-600 bg-slate-50'}`}>
                    {highDep}
                </span>
            </TableCell>

            <TableCell className="py-5 text-center">
                <Badge className={`border-none text-[9px] font-black uppercase tracking-widest px-4 py-1.5 ${statusStyle}`}>
                    {status}
                </Badge>
            </TableCell>

            <TableCell className="px-8 py-5">
                <div className={`text-xs font-bold leading-relaxed p-3 rounded-xl border ${alert ? 'bg-red-50 border-red-100 text-red-800' : 'bg-white border-slate-200 text-slate-600'}`}>
                    {gaps}
                </div>
            </TableCell>

        </TableRow>
    );
}