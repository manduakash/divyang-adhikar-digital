// app/dashboard/ndma/reports/state-comparative/page.tsx
"use client";
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
    Table, TableBody, TableCell, TableHead, TableHeader, TableRow
} from "@/components/ui/table";
import {
    Search, Filter, DownloadCloud, Printer, FileBarChart, 
    ShieldAlert, Map, Users, Tent, Navigation, RadioTower, 
    Activity, Wind, Waves, ThermometerSun, ArrowUpDown
} from "lucide-react";

export default function StateComparativeReportPage() {
    const [searchTerm, setSearchTerm] = useState("");
    const [disasterFilter, setDisasterFilter] = useState("ALL");

    return (
        <div className="space-y-8 animate-in fade-in duration-1000 pb-20 font-sans selection:bg-blue-100">

            {/* PAGE HEADER */}
            <div className="flex flex-col xl:flex-row justify-between items-start xl:items-end gap-6 relative">
                <div className="space-y-2">
                    <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border-2 border-blue-200 shadow-sm">
                        <Activity size={14} /> Comparative Intelligence
                    </div>
                    <h1 className="text-5xl font-black text-slate-800 tracking-tighter uppercase leading-none">State Preparedness Index</h1>
                    <p className="text-slate-500 font-medium text-lg italic underline underline-offset-8 decoration-blue-200">
                        Benchmarking State and UT readiness against national PwD integration standards.
                    </p>
                </div>
                <div className="flex gap-4">
                    <Button variant="outline" className="h-14 px-8 rounded-full border-2 border-blue-200 text-blue-700 font-black uppercase tracking-widest text-[10px] bg-white shadow-xl hover:bg-blue-50 transition-all">
                        <Printer size={16} className="mr-2" /> Print Matrix
                    </Button>
                    <Button className="h-14 px-8 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-black uppercase tracking-widest text-[10px] shadow-xl hover:shadow-[0_0_20px_theme(colors.blue.400)] transition-all gap-2 group border-none">
                        <DownloadCloud size={16} /> Export Comparative Data
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
                            placeholder="Search by State or UT..." 
                            className="w-full pl-12 pr-4 py-3 border-2 border-blue-100 bg-white rounded-2xl text-xs font-bold text-slate-800 focus:outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-50 transition-all shadow-sm"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    
                    <div className="flex items-center gap-4 w-full md:w-auto">
                        <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-blue-700">
                            <Filter size={14} /> Baseline Disaster:
                        </div>
                        <select 
                            className="border-2 border-blue-100 bg-white rounded-2xl px-4 py-3 text-xs font-bold text-slate-800 focus:outline-none focus:border-blue-400 shadow-sm appearance-none cursor-pointer"
                            value={disasterFilter}
                            onChange={(e) => setDisasterFilter(e.target.value)}
                        >
                            <option value="ALL">All (Composite Index)</option>
                            <option value="CYCLONE">Cyclone Profiling</option>
                            <option value="FLOOD">Flood Profiling</option>
                            <option value="HEATWAVE">Heatwave Profiling</option>
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
                                <Activity size={20} className="text-white drop-shadow-md" />
                            </div>
                            <div>
                                <CardTitle className="text-xl font-black uppercase tracking-tight text-white drop-shadow-sm">State Comparative Readiness</CardTitle>
                                <p className="text-[10px] font-bold text-blue-100 uppercase tracking-widest mt-1">Cross-evaluating infrastructure and evacuation coverage</p>
                            </div>
                        </div>

                        <div className="relative z-10 flex gap-3 flex-wrap justify-end">
                            <Badge className="bg-white/20 text-white border-none text-[10px] font-black uppercase tracking-widest px-4 py-2 backdrop-blur-md shadow-sm">
                                National Avg: 78%
                            </Badge>
                            <Badge className="bg-white/20 text-white border-none text-[10px] font-black uppercase tracking-widest px-4 py-2 backdrop-blur-md shadow-sm">
                                Deficient States: 04
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
                                <TableHead className="py-5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-600 text-center">Primary Risk</TableHead>
                                <TableHead className="py-5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-600 text-center">PwDs Identified</TableHead>
                                <TableHead className="py-5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-600 text-center">Accessible Shelters</TableHead>
                                <TableHead className="py-5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-600 text-center">Transport Readiness</TableHead>
                                <TableHead className="py-5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-600 text-center">Early Warning</TableHead>
                                <TableHead className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-600 text-right">Overall Rating</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody className="divide-y divide-slate-100">
                            
                            <ReportRow 
                                state="Odisha"
                                disaster="CYCLONE" icon={<Wind />} iconColor="text-cyan-600"
                                pwds="4.5L"
                                shelters={94}
                                transport={88}
                                warning={96}
                                rating="A+"
                            />
                            <ReportRow 
                                state="Gujarat"
                                disaster="ALL" icon={<ShieldAlert />} iconColor="text-indigo-600"
                                pwds="3.8L"
                                shelters={91}
                                transport={85}
                                warning={92}
                                rating="A"
                            />
                            <ReportRow 
                                state="Tamil Nadu"
                                disaster="FLOOD" icon={<Waves />} iconColor="text-blue-600"
                                pwds="3.2L"
                                shelters={85}
                                transport={78}
                                warning={89}
                                rating="B+"
                            />
                            <ReportRow 
                                state="Assam"
                                disaster="FLOOD" icon={<Waves />} iconColor="text-blue-600"
                                pwds="2.1L"
                                shelters={42}
                                transport={35}
                                warning={60}
                                rating="D"
                                alert
                            />
                            <ReportRow 
                                state="Bihar"
                                disaster="HEATWAVE" icon={<ThermometerSun />} iconColor="text-orange-600"
                                pwds="2.8L"
                                shelters={45}
                                transport={40}
                                warning={55}
                                rating="D"
                                alert
                            />

                        </TableBody>
                    </Table>
                </CardContent>
            </Card>

        </div>
    );
}

/* UI SUB-COMPONENTS */

function ReportRow({ state, disaster, icon, iconColor, pwds, shelters, transport, warning, rating, alert }: any) {
    
    // Rating Badge Styling
    const getRatingStyle = (r: string) => {
        if(r.includes('A')) return 'bg-emerald-500 text-white shadow-emerald-200';
        if(r.includes('B')) return 'bg-blue-500 text-white shadow-blue-200';
        if(r.includes('C')) return 'bg-amber-500 text-white shadow-amber-200';
        return 'bg-red-500 text-white shadow-red-200 animate-pulse';
    };

    return (
        <TableRow className="border-none hover:bg-indigo-50/50 transition-all group">
            
            {/* State */}
            <TableCell className="px-8 py-5">
                <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-slate-100 flex items-center justify-center shrink-0 border border-slate-200">
                        <Map size={14} className="text-slate-600" />
                    </div>
                    <span className="text-xs font-black text-slate-800 uppercase tracking-widest">{state}</span>
                </div>
            </TableCell>

            {/* Disaster Type */}
            <TableCell className="py-5 text-center">
                <div className="flex items-center justify-center gap-1.5 bg-slate-50 px-2 py-1 rounded w-max mx-auto border border-slate-100">
                    {React.cloneElement(icon, { size: 12, className: iconColor })}
                    <span className="text-[9px] font-black uppercase tracking-widest text-slate-600">{disaster}</span>
                </div>
            </TableCell>

            {/* PwDs Identified */}
            <TableCell className="py-5 text-center">
                <span className="font-mono text-sm font-black text-slate-700">{pwds}</span>
            </TableCell>

            {/* Shelters */}
            <TableCell className="py-5">
                <MetricProgress value={shelters} type="shelter" />
            </TableCell>

            {/* Transport */}
            <TableCell className="py-5">
                <MetricProgress value={transport} type="transport" />
            </TableCell>

            {/* Early Warning */}
            <TableCell className="py-5">
                <MetricProgress value={warning} type="warning" />
            </TableCell>

            {/* Overall Rating */}
            <TableCell className="px-8 py-5 text-right">
                <Badge className={`border-none text-xs font-black px-4 py-1.5 shadow-lg ${getRatingStyle(rating)}`}>
                    Grade: {rating}
                </Badge>
            </TableCell>

        </TableRow>
    );
}

function MetricProgress({ value, type }: { value: number, type: string }) {
    
    // Determine color based on threshold
    const progressColor = value >= 80 ? 'bg-emerald-500' : 
                          value >= 60 ? 'bg-amber-400' : 
                          'bg-red-500';

    return (
        <div className="flex flex-col items-center gap-1.5 w-24 mx-auto">
            <span className={`font-mono text-xs font-black ${value < 60 ? 'text-red-600' : 'text-slate-700'}`}>
                {value}%
            </span>
            <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                <div 
                    className={`h-full ${progressColor} rounded-full transition-all duration-1000`} 
                    style={{ width: `${value}%` }} 
                />
            </div>
        </div>
    );
}