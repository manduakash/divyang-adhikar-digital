// app/dashboard/ndma/reports/shelter-capacity/page.tsx
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
    Tent, MapPin, Map, Wind, Waves, ThermometerSun, CheckCircle2, AlertTriangle, Building2, Calendar
} from "lucide-react";

export default function ShelterCapacityReportPage() {
    const [searchTerm, setSearchTerm] = useState("");
    const [statusFilter, setStatusFilter] = useState("ALL");

    return (
        <div className="space-y-8 animate-in fade-in duration-1000 pb-20 font-sans selection:bg-teal-100">

            {/* PAGE HEADER */}
            <div className="flex flex-col xl:flex-row justify-between items-start xl:items-end gap-6 relative">
                <div className="space-y-2">
                    <div className="inline-flex items-center gap-2 bg-teal-50 text-teal-700 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border-2 border-teal-200 shadow-sm">
                        <FileBarChart size={14} /> Statutory Reports
                    </div>
                    <h1 className="text-5xl font-black text-slate-800 tracking-tighter uppercase leading-none">Shelter Accessibility & Capacity</h1>
                    <p className="text-slate-500 font-medium text-lg italic underline underline-offset-8 decoration-teal-200">
                        National registry of relief camps tracking PwD capacity and infrastructure readiness.
                    </p>
                </div>
                <div className="flex gap-4">
                    <Button variant="outline" className="h-14 px-8 rounded-full border-2 border-teal-200 text-teal-700 font-black uppercase tracking-widest text-[10px] bg-white shadow-xl hover:bg-teal-50 transition-all">
                        <Printer size={16} className="mr-2" /> Print Register
                    </Button>
                    <Button className="h-14 px-8 rounded-full bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 text-white font-black uppercase tracking-widest text-[10px] shadow-xl hover:shadow-[0_0_20px_theme(colors.teal.400)] transition-all gap-2 group border-none">
                        <DownloadCloud size={16} /> Export CSV
                    </Button>
                </div>
            </div>

            {/* FILTER & SEARCH TOOLBAR */}
            <Card className="rounded-[32px] border-2 border-teal-50 shadow-md bg-white overflow-hidden max-w-full">
                <div className="p-4 flex flex-col md:flex-row justify-between items-center gap-4 bg-teal-50/50">
                    <div className="relative w-full md:w-96 group">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-teal-500 group-focus-within:text-teal-600 transition-colors" />
                        <input 
                            type="text" 
                            placeholder="Search by Shelter, District, or State..." 
                            className="w-full pl-12 pr-4 py-3 border-2 border-teal-100 bg-white rounded-2xl text-xs font-bold text-slate-800 focus:outline-none focus:border-teal-400 focus:ring-4 focus:ring-teal-50 transition-all shadow-sm"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    
                    <div className="flex items-center gap-4 w-full md:w-auto">
                        <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-teal-700">
                            <Filter size={14} /> Audit Status:
                        </div>
                        <select 
                            className="border-2 border-teal-100 bg-white rounded-2xl px-4 py-3 text-xs font-bold text-slate-800 focus:outline-none focus:border-teal-400 shadow-sm appearance-none cursor-pointer"
                            value={statusFilter}
                            onChange={(e) => setStatusFilter(e.target.value)}
                        >
                            <option value="ALL">All Shelters</option>
                            <option value="COMPLIANT">Fully Compliant</option>
                            <option value="PARTIAL">Partially Accessible</option>
                            <option value="NON_COMPLIANT">Non-Compliant / Gaps</option>
                        </select>
                    </div>
                </div>
            </Card>

            {/* MAIN REPORT TABLE CARD */}
            <Card className="rounded-[40px] border-none shadow-xl overflow-hidden bg-white">
                
                {/* VIBRANT GRADIENT HEADER */}
                <CardHeader className="p-0 border-b-4 border-teal-200">
                    <div className="p-8 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-700 text-white relative overflow-hidden flex flex-col md:flex-row justify-between items-center gap-6">
                        <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] bg-fixed" />
                        
                        <div className="relative z-10 flex items-center gap-4">
                            <div className="h-12 w-12 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center shadow-lg">
                                <Tent size={20} className="text-white drop-shadow-md" />
                            </div>
                            <div>
                                <CardTitle className="text-xl font-black uppercase tracking-tight text-white drop-shadow-sm">National Shelter Directory</CardTitle>
                                <p className="text-[10px] font-bold text-teal-100 uppercase tracking-widest mt-1">Aggregated from DDMA infrastructure audits</p>
                            </div>
                        </div>

                        <div className="relative z-10 flex gap-3 flex-wrap justify-end">
                            <Badge className="bg-white/20 text-white border-none text-[10px] font-black uppercase tracking-widest px-4 py-2 backdrop-blur-md shadow-sm">
                                Total Mapped: 12,450
                            </Badge>
                            <Badge className="bg-white/20 text-white border-none text-[10px] font-black uppercase tracking-widest px-4 py-2 backdrop-blur-md shadow-sm">
                                Non-Compliant: 1,840
                            </Badge>
                        </div>
                    </div>
                </CardHeader>
                
                <CardContent className="p-0 overflow-x-auto relative min-h-[400px]">
                    <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/topography.png')]" />
                    
                    <Table className="relative z-10">
                        <TableHeader className="bg-slate-50/80 backdrop-blur-md">
                            <TableRow className="border-b-2 border-slate-200">
                                <TableHead className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-600">Shelter Facility</TableHead>
                                <TableHead className="py-5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-600">Location (Dist / State)</TableHead>
                                <TableHead className="py-5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-600 text-center">Threat Profile</TableHead>
                                <TableHead className="py-5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-600 text-center">Gen. Capacity</TableHead>
                                <TableHead className="py-5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-600 text-center">PwD Capacity</TableHead>
                                <TableHead className="py-5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-600 text-center">Access Status</TableHead>
                                <TableHead className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-600 text-right">Last Audit</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody className="divide-y divide-slate-100">
                            
                            <ReportRow 
                                name="Kakatpur Cyclone Hub"
                                dist="Puri" state="Odisha"
                                disaster="CYCLONE" icon={<Wind />} iconColor="text-cyan-600"
                                totalCap="1,500"
                                pwdCap="50"
                                status="COMPLIANT"
                                date="12 Oct 2024"
                            />
                            <ReportRow 
                                name="Majuli High-Ground Relief Camp"
                                dist="Majuli" state="Assam"
                                disaster="FLOOD" icon={<Waves />} iconColor="text-blue-600"
                                totalCap="800"
                                pwdCap="15"
                                status="NON_COMPLIANT"
                                date="05 Sep 2024"
                                alert
                            />
                            <ReportRow 
                                name="Cuddalore Coastal Shelter"
                                dist="Cuddalore" state="Tamil Nadu"
                                disaster="CYCLONE" icon={<Wind />} iconColor="text-cyan-600"
                                totalCap="1,200"
                                pwdCap="40"
                                status="COMPLIANT"
                                date="28 Aug 2024"
                            />
                            <ReportRow 
                                name="Patna Central Cooling Zone"
                                dist="Patna" state="Bihar"
                                disaster="HEATWAVE" icon={<ThermometerSun />} iconColor="text-orange-600"
                                totalCap="500"
                                pwdCap="20"
                                status="PARTIAL"
                                date="10 Jun 2024"
                            />

                        </TableBody>
                    </Table>
                </CardContent>
            </Card>

        </div>
    );
}

/* UI SUB-COMPONENTS */

function ReportRow({ name, dist, state, disaster, icon, iconColor, totalCap, pwdCap, status, date, alert }: any) {
    
    const statusStyle = status === 'COMPLIANT' ? 'bg-emerald-100 text-emerald-700' :
                        status === 'PARTIAL' ? 'bg-amber-100 text-amber-700' :
                        'bg-red-500 text-white shadow-md animate-pulse';

    const StatusIcon = status === 'COMPLIANT' ? CheckCircle2 : AlertTriangle;

    return (
        <TableRow className="border-none hover:bg-slate-50 transition-all group">
            
            {/* Shelter Name */}
            <TableCell className="px-8 py-5">
                <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-xl bg-slate-100 flex items-center justify-center shrink-0 border border-slate-200">
                        <Building2 size={14} className="text-slate-500" />
                    </div>
                    <span className="text-xs font-black text-slate-800 tracking-tight">{name}</span>
                </div>
            </TableCell>

            {/* Location */}
            <TableCell className="py-5">
                <div className="flex flex-col gap-1 pr-4">
                    <span className="text-[10px] font-black text-slate-800 uppercase tracking-widest flex items-center gap-1.5">
                        <MapPin size={10} className="text-teal-500" />
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
                    {React.cloneElement(icon, { size: 10, className: iconColor })}
                    <span className="text-[8px] font-black uppercase tracking-widest text-slate-600">{disaster}</span>
                </div>
            </TableCell>

            {/* Total Capacity */}
            <TableCell className="py-5 text-center">
                <span className="font-mono text-sm font-bold text-slate-400">{totalCap}</span>
            </TableCell>

            {/* PwD Capacity */}
            <TableCell className="py-5 text-center">
                <span className={`font-mono text-sm font-black px-3 py-1 rounded-lg ${alert ? 'text-red-600 bg-red-50' : 'text-teal-600 bg-teal-50'}`}>
                    {pwdCap}
                </span>
            </TableCell>

            {/* Access Status */}
            <TableCell className="py-5 text-center">
                <Badge className={`border-none text-[8px] font-black uppercase tracking-widest px-3 py-1.5 flex items-center justify-center gap-1.5 w-max mx-auto ${statusStyle}`}>
                    <StatusIcon size={10} />
                    {status.replace('_', ' ')}
                </Badge>
            </TableCell>

            {/* Last Audit */}
            <TableCell className="px-8 py-5 text-right">
                <span className="font-mono text-[10px] font-bold text-slate-500 flex items-center justify-end gap-2">
                    <Calendar size={12} className="text-slate-400" />
                    {date}
                </span>
            </TableCell>

        </TableRow>
    );
}