// app/dashboard/sdma/reports/post-disaster-evaluation/page.tsx
"use client";
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
    Table, TableBody, TableCell, TableHead, TableHeader, TableRow
} from "@/components/ui/table";
import {
    History, ShieldCheck, MapPin, Activity,
    Gavel, Calendar, FileCheck, Search,
    Filter, Printer, FileSpreadsheet, Globe,
    Sparkles, BadgeCheck, Clock, Zap,
    AlertTriangle, History as HistoryIcon, Download,
    Timer, Landmark, GraduationCap, Scale,
    BookOpenCheck, Stethoscope, HeartPulse,
    Navigation
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
    Select, SelectContent, SelectItem, SelectTrigger, SelectValue
} from "@/components/ui/select";

export default function PostDisasterResponseReport() {
    return (
        <div className="space-y-10 animate-in fade-in duration-1000 pb-20 font-sans selection:bg-orange-100 bg-[#fbfcfd]">

            {/* 1. APEX AUDIT HEADER - GRADIENT + CARBON FIBER */}
            <Card className="rounded-[40px] border-2 border-slate-200 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 p-1 relative overflow-hidden shadow-2xl shadow-indigo-100">
                <div className="absolute inset-0 opacity-10 pointer-events-none"
                    style={{ backgroundImage: `radial-gradient(black 2px, transparent 0)`, backgroundSize: '4px 4px' }} />

                <div className="bg-slate-50 rounded-[38px] p-10 relative z-10 flex flex-col xl:flex-row justify-between items-end gap-12">
                    <div className="flex-1 space-y-8">
                        <div className="flex items-center gap-6">
                            <div className="h-20 w-20 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl flex items-center justify-center text-white shadow-xl">
                                <HistoryIcon size={38} />
                            </div>
                            <div className="space-y-3 flex-1 text-left">
                                <p className="text-[10px] font-black uppercase text-blue-600 tracking-[0.3em] ml-1 leading-none">After-Action Analysis Node</p>
                                <h1 className="text-4xl font-black text-slate-900 tracking-tighter uppercase leading-none">Post-Disaster Response (PwD) Report</h1>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-[9px] font-black uppercase text-slate-400 ml-1 tracking-widest leading-none">Disaster Event Selection</label>
                                <Select defaultValue="monsoon">
                                    <SelectTrigger className="w-full h-16 py-6 border-2 border-slate-200 bg-white rounded-2xl px-6 font-black text-slate-900 uppercase text-[10px] shadow-sm">
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent className="rounded-2xl border-2 border-slate-200 shadow-2xl">
                                        <SelectItem value="monsoon">Monsoon Flood Hub 2024</SelectItem>
                                        <SelectItem value="cyclone">Cyclone Sitrang Response</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="space-y-2">
                                <label className="text-[9px] font-black uppercase text-slate-400 ml-1 tracking-widest leading-none">District Aggregator</label>
                                <Select defaultValue="all">
                                    <SelectTrigger className="w-full h-16 py-6 border-2 border-slate-200 bg-white rounded-2xl px-6 font-black text-slate-900 uppercase text-[10px] shadow-sm">
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent className="rounded-2xl border-2 border-slate-200 shadow-2xl">
                                        <SelectItem value="all">All Affected Districts</SelectItem>
                                        <SelectItem value="lko">Lucknow Division</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4 min-w-[320px] relative z-10">
                        <div className="bg-white border-2 border-slate-200 p-6 rounded-[32px] shadow-sm flex flex-col items-center text-center">
                            <BadgeCheck size={24} className="text-emerald-500 mb-2" />
                            <p className="text-[9px] font-black uppercase text-slate-400 tracking-widest">Report Verification Status</p>
                            <p className="text-2xl font-black text-slate-900 uppercase tracking-tighter">Statutory Approved</p>
                        </div>
                        <div className="flex gap-3">
                            <Button variant="outline" className="flex-1 h-12 rounded-xl border-2 border-slate-200 font-bold bg-white gap-2 shadow-sm text-[9px] uppercase tracking-widest hover:bg-slate-50 transition-all"><FileSpreadsheet size={16} className="text-green-600" /> Export XLS</Button>
                            <Button className="flex-1 h-12 rounded-xl bg-slate-950 text-white font-black uppercase tracking-widest text-[9px] shadow-lg gap-2 group"><Printer size={16} /> Print Report</Button>
                        </div>
                    </div>
                </div>
            </Card>

            {/* 2. STATE-WIDE RESPONSE KPI STRIP */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatTile label="PwDs Affected (State Total)" value="14,820" icon={<Activity />} color="from-orange-400 to-orange-800" />
                <StatTile label="PwDs Evacuated Successfully" value="14,105" icon={<Navigation />} color="from-emerald-500 to-emerald-800" />
                <StatTile label="Medical Support Delivered" value="12,400" icon={<HeartPulse />} color="from-blue-500 to-blue-900" />
                <StatTile label="Corrective Directions Issued" value="12" icon={<Gavel />} color="from-purple-500 to-purple-900" alert />
            </div>

            {/* 3. MASTER EVALUATION LEDGER - CARBON FIBER TABLE HEADER */}
            <Card className="rounded-[48px] border-2 border-slate-200 shadow-sm overflow-hidden bg-slate-50/50 min-h-[750px]">
                <CardHeader className="p-0">
                    <div className="p-10 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white relative overflow-hidden">
                        <div className="absolute inset-0 opacity-10 pointer-events-none"
                            style={{ backgroundImage: `radial-gradient(black 2px, transparent 0)`, backgroundSize: '4px 4px' }} />

                        <div className="flex flex-col md:flex-row justify-between items-center gap-6 relative z-10">
                            <div className="flex items-center gap-4">
                                <div className="h-12 w-12 rounded-2xl bg-white/20 backdrop-blur-md border-2 border-white/20 flex items-center justify-center shadow-xl">
                                    <HistoryIcon size={24} />
                                </div>
                                <CardTitle className="text-sm font-black uppercase tracking-[0.3em] text-white uppercase leading-none">STATEWIDE AFTER-ACTION RESPONSE REGISTRY</CardTitle>
                            </div>
                            <Badge className="bg-white/20 text-white border-none font-black text-[10px] px-5 py-2 uppercase tracking-widest">Audit Registry v5.2</Badge>
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="p-0">
                    <Table>
                        <TableHeader className="bg-slate-100/80 font-sans">
                            <TableRow className="border-b-2 border-slate-200">
                                <TableHead className="px-10 py-6 text-[9px] font-black uppercase tracking-widest text-indigo-600">Disaster Event</TableHead>
                                <TableHead className="text-[9px] font-black uppercase tracking-widest text-blue-600">District</TableHead>
                                <TableHead className="text-[9px] font-black uppercase tracking-widest text-purple-600 text-center">Affected / Evacuated</TableHead>
                                <TableHead className="text-[9px] font-black uppercase tracking-widest text-emerald-600 text-center">Sheltered / Medical</TableHead>
                                <TableHead className="text-[9px] font-black uppercase tracking-widest text-orange-600 text-center">Issues Faced</TableHead>
                                <TableHead className="text-[9px] font-black uppercase tracking-widest text-amber-600 text-center">Lessons Learnt</TableHead>
                                <TableHead className="text-right px-10 text-[9px] font-black uppercase tracking-widest text-red-600">Corrective Directions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody className="divide-y divide-slate-200 font-sans bg-white">
                            <ResponseRow
                                event="Monsoon Flood Q3"
                                district="Lucknow Urban"
                                affected="1,240"
                                evacuated="1,210"
                                sheltered="1,190"
                                medical="1,240"
                                issues="Ramp congestion at Shelter-B"
                                lessons="Expand high-traffic transit nodes"
                                direction="Direct PWD for 1:12 slope refit"
                                success
                            />
                            <ResponseRow
                                event="Monsoon Flood Q3"
                                district="Meerut Hub"
                                affected="850"
                                evacuated="420"
                                sheltered="400"
                                medical="310"
                                issues="IVR Alert system downtime"
                                lessons="Redundant satellite alerts required"
                                direction="Deploy localized radio nodes"
                                alert
                            />
                            <ResponseRow
                                event="Cyclone Sitrang"
                                district="Purba Medinipur"
                                affected="2,100"
                                evacuated="1,950"
                                sheltered="1,840"
                                medical="1,840"
                                issues="Battery backup failure (4 hubs)"
                                lessons="10kVA dedicated solar requirement"
                                direction="Statutory mandate for solar backup"
                                warning
                            />
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>

            {/* FOOTER SYNC STATUS */}
            <footer className="pt-12 border-t-2 border-slate-200 flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="flex items-center gap-4">
                    <ShieldCheck className="text-indigo-600" size={24} />
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 leading-none">After-Action Evaluation Sync Active • 75 District Command Nodes verified</span>
                </div>
            </footer>
        </div>
    );
}

/* UI SUB-COMPONENTS */

function ResponseRow({ event, district, affected, evacuated, sheltered, medical, issues, lessons, direction, success, alert, warning }: any) {
    const statusColor = success ? 'bg-green-500' : alert ? 'bg-red-500' : 'bg-orange-500';

    return (
        <TableRow className="border-none hover:bg-slate-50 transition-all group cursor-pointer">
            <TableCell className="px-10 py-8">
                <div className="flex items-center gap-3">
                    <div className={`h-1.5 w-1.5 rounded-full shrink-0 ${statusColor}`} />
                    <span className="text-xs font-black text-slate-900 uppercase tracking-tight leading-none">{event}</span>
                </div>
            </TableCell>
            <TableCell>
                <p className="text-[10px] font-black text-slate-800 uppercase tracking-widest">{district}</p>
            </TableCell>
            <TableCell className="text-center">
                <p className="text-[11px] font-mono font-black text-blue-600">{affected} <span className="text-slate-300 mx-1">/</span> <span className="text-emerald-600">{evacuated}</span></p>
                <p className="text-[7px] font-black text-slate-300 uppercase mt-1 tracking-widest">Aff. / Evac.</p>
            </TableCell>
            <TableCell className="text-center">
                <p className="text-[11px] font-mono font-black text-indigo-600">{sheltered} <span className="text-slate-300 mx-1">/</span> <span className="text-purple-600">{medical}</span></p>
                <p className="text-[7px] font-black text-slate-300 uppercase mt-1 tracking-widest">Shel. / Med.</p>
            </TableCell>
            <TableCell className="text-center">
                <p className="text-[10px] font-bold text-slate-500 uppercase italic leading-tight max-w-[140px] mx-auto">{issues}</p>
            </TableCell>
            <TableCell className="text-center">
                <p className="text-[10px] font-black text-slate-800 uppercase tracking-tight leading-tight max-w-[140px] mx-auto">{lessons}</p>
            </TableCell>
            <TableCell className="text-right px-10">
                <div className="flex flex-col items-end gap-1">
                    <Badge className={`border-2 font-black text-[8px] uppercase px-2 py-0.5 shadow-sm ${alert ? 'bg-red-50 text-red-700 border-red-100 animate-pulse' : 'bg-indigo-50 text-indigo-700 border-indigo-100'}`}>
                        {direction}
                    </Badge>
                    <span className="text-[7px] font-black text-slate-400 uppercase tracking-widest">Statutory Direction Issued</span>
                </div>
            </TableCell>
        </TableRow>
    )
}

function StatTile({ label, value, icon, color, alert }: any) {
    return (
        <div className={`group relative text-left p-8 rounded-[40px] border-2 border-slate-100 overflow-hidden transition-all duration-500 h-44 flex flex-col justify-between shadow-md hover:shadow-xl hover:-translate-y-1 bg-gradient-to-br ${color}`}>
            <div className="absolute inset-0 opacity-[0.06] pointer-events-none"
                style={{ backgroundImage: `radial-gradient(black 2px, transparent 0)`, backgroundSize: '4px 4px' }} />
            <div className="relative z-10 flex flex-col justify-between h-full">
                <div className={`h-12 w-12 rounded-2xl border-2 border-white/20 flex bg-white/20 backdrop-blur-md items-center justify-center text-white shadow-xl group-hover:scale-110 transition-transform`}>
                    {React.cloneElement(icon as React.ReactElement, {})}
                </div>
                <div>
                    <p className="text-3xl font-black tracking-tighter leading-none text-slate-100">{value}</p>
                    <p className="text-[10px] font-black uppercase tracking-[0.1em] text-slate-300 mt-2">{label}</p>
                </div>
            </div>
            {alert && <div className="absolute top-6 right-6 h-2 w-2 rounded-full bg-red-500 animate-ping shadow-[0_0_10px_red]" />}
        </div>
    )
}