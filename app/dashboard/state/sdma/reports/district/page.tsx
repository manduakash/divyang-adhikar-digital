// app/dashboard/sdma/reports/district-preparedness/page.tsx
"use client";
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
    Table, TableBody, TableCell, TableHead, TableHeader, TableRow
} from "@/components/ui/table";
import {
    Navigation, Map, ShieldAlert, Globe,
    Search, Filter, Printer, FileSpreadsheet,
    ArrowUpRight, BadgeCheck, Activity,
    CheckCircle2, AlertTriangle, Truck,
    Radio, Clock, Landmark, Download
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
    Select, SelectContent, SelectItem, SelectTrigger, SelectValue
} from "@/components/ui/select";

export default function DistrictPreparednessReport() {
    return (
        <div className="space-y-10 animate-in fade-in duration-1000 pb-20 font-sans selection:bg-orange-100 bg-white">

            {/* HUB PRIMARY HEADER - CARBON FIBER GRADIENT */}
            <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-8 mb-10 bg-white p-12 rounded-[48px] border-2 border-slate-100 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 p-10 opacity-[0.03] pointer-events-none text-indigo-600">
                    <Navigation size={240} />
                </div>

                <div className="space-y-4 relative z-10">
                    <div className="flex items-center gap-3">
                        <div className="h-14 w-14 bg-gradient-to-br from-indigo-600 via-blue-600 to-indigo-700 rounded-2xl flex items-center justify-center text-white shadow-xl shadow-indigo-500/20 transition-transform hover:scale-105">
                            <Map size={32} />
                        </div>
                        <div>
                            <h1 className="text-4xl font-black text-slate-900 tracking-tighter uppercase leading-none">District Preparedness Hub</h1>
                            <p className="text-[10px] font-black text-indigo-600 uppercase tracking-[0.3em] mt-2 flex items-center gap-2">
                                <BadgeCheck size={12} /> Regional Readiness Node / A7.2
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex gap-4 relative z-10">
                    <Button variant="outline" className="h-16 px-10 rounded-3xl border-2 border-slate-200 font-black uppercase tracking-widest text-[10px] bg-white gap-2 shadow-sm hover:bg-slate-50 transition-all">
                        <FileSpreadsheet size={18} className="text-green-600" /> Export Regional XLS
                    </Button>
                    <Button className="h-16 px-10 rounded-3xl bg-slate-950 text-white font-black uppercase tracking-widest text-[10px] shadow-2xl hover:bg-black transition-all gap-2 group">
                        <Printer size={18} /> Print Certified Audit <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </Button>
                </div>
            </div>

            {/* PARAMETRIC REGISTRY FILTERS */}
            <Card className="rounded-[40px] border-2 border-slate-100 bg-white p-8 shadow-sm">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="space-y-2">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Filter District Hub</label>
                        <Select defaultValue="all">
                            <SelectTrigger className="w-full h-16 py-6 border-2 border-slate-200 bg-slate-50 rounded-2xl font-black text-slate-900 uppercase text-[10px] shadow-sm">
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent className="rounded-2xl border-2 border-slate-200 shadow-2xl">
                                <SelectItem value="all">All 75 Statewide Districts</SelectItem>
                                <SelectItem value="lko">Lucknow Urban Hub</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="space-y-2">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Preparedness Status</label>
                        <Select defaultValue="any">
                            <SelectTrigger className="w-full h-16 py-6 border-2 border-slate-200 bg-slate-50 rounded-2xl font-black text-slate-900 uppercase text-[10px] shadow-sm">
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent className="rounded-2xl border-2 border-slate-200 shadow-2xl">
                                <SelectItem value="any">Adequate / Needs Attention / Critical</SelectItem>
                                <SelectItem value="crit">Critical Defaults Only</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="flex items-end">
                        <Button className="w-full h-16 bg-indigo-600 text-white rounded-2xl font-black uppercase tracking-widest text-[10px] shadow-xl hover:bg-indigo-700 transition-all gap-2">
                            <Filter size={16} /> Search
                        </Button>
                    </div>
                </div>
            </Card>

            {/* MASTER REGISTRY LEDGER - CARBON FIBER HEADER */}
            <Card className="rounded-[48px] border-2 border-slate-200 shadow-sm overflow-hidden bg-white">
                <CardHeader className="p-0">
                    <div className="p-10 bg-gradient-to-r from-indigo-600 via-blue-600 to-indigo-800 text-white relative overflow-hidden">
                        {/* CARBON FIBER TEXTURE OVERLAY */}
                        <div className="absolute inset-0 opacity-5 pointer-events-none"
                            style={{ backgroundImage: `radial-gradient(black 2px, transparent 0)`, backgroundSize: '5px 5px' }} />

                        <div className="flex flex-col md:flex-row justify-between items-center gap-6 relative z-10">
                            <div className="flex items-center gap-4">
                                <div className="h-12 w-12 rounded-2xl bg-white/20 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-xl">
                                    <Landmark size={24} />
                                </div>
                                <CardTitle className="text-sm font-black uppercase tracking-[0.3em] text-white">DISTRICT-WISE PWD RISK & PREPAREDNESS REGISTRY</CardTitle>
                            </div>
                            <Badge className="bg-white/20 text-white border-none font-black text-[10px] px-5 py-2 uppercase tracking-widest">Aggregation Mode v5.2</Badge>
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="p-0">
                    <Table>
                        <TableHeader className="bg-slate-50/80 font-sans">
                            <TableRow className="border-b-2 border-slate-100">
                                <TableHead className="px-10 py-6 text-[9px] font-black uppercase tracking-widest text-slate-400">District Name</TableHead>
                                <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400">Disaster Type(s)</TableHead>
                                <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400 text-center">PwDs Identified</TableHead>
                                <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400 text-center">High-Dependency</TableHead>
                                <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400 text-center">Shelters (Mapped/Acc)</TableHead>
                                <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400 text-center">Transport Readiness</TableHead>
                                <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400 text-center">Warning Coverage</TableHead>
                                <TableHead className="text-right px-10 text-[9px] font-black uppercase tracking-widest text-slate-400">Preparedness Status</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody className="divide-y divide-slate-100 font-sans">
                            <DistrictRiskRow
                                name="Lucknow Urban Hub"
                                types="Flood / Inundation"
                                identified="12,400"
                                dependency="1,820"
                                mapped="48"
                                accessible="45"
                                transport="Yes"
                                warning="98.2%"
                                status="Adequate"
                                success
                            />
                            <DistrictRiskRow
                                name="Meerut Sector"
                                types="Cyclone / Earthquake"
                                identified="11,100"
                                dependency="2,450"
                                mapped="12"
                                accessible="04"
                                transport="Partial"
                                warning="55.0%"
                                status="Critical"
                                alert
                            />
                            <DistrictRiskRow
                                name="Agra Sector Hub"
                                types="Extreme Heatwave"
                                identified="5,420"
                                dependency="840"
                                mapped="14"
                                accessible="08"
                                transport="No"
                                warning="42.8%"
                                status="Needs Attention"
                                warningNode
                            />
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>

            {/* FOOTER SYNC STATUS */}
            <footer className="pt-12 border-t-2 border-slate-100 flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="flex items-center gap-4 text-slate-400">
                    <Activity size={24} className="text-indigo-600 animate-pulse" />
                    <span className="text-[10px] font-black uppercase tracking-widest leading-none">Consolidated Statewide Preparedness Ledger Active • 75 District Nodes Synced</span>
                </div>
                <div className="flex gap-6">
                    <button className="text-[10px] font-black uppercase text-indigo-600 hover:underline">Download Master Zip</button>
                    <button className="text-[10px] font-black uppercase text-slate-400 hover:text-slate-900">Protocols Hub</button>
                </div>
            </footer>
        </div>
    );
}

/* UI SUB-COMPONENTS */

function StatTile({ label, value, icon, color, alert }: any) {
    return (
        <div className={`group relative text-left p-8 rounded-[40px] overflow-hidden transition-all duration-500 h-44 flex flex-col justify-between shadow-md hover:shadow-xl hover:-translate-y-1 bg-gradient-to-br ${color} text-white border-t border-white/20`}>
            <div className="absolute inset-0 opacity-[0.1] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
            <div className="relative z-10 flex flex-col justify-between h-full">
                <div className="h-10 w-10 rounded-xl bg-white/20 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform">
                    {React.cloneElement(icon, { size: 22, className: "text-white" })}
                </div>
                <div>
                    <p className="text-3xl font-black tracking-tighter drop-shadow-sm">{value}</p>
                    <p className="text-[10px] font-black uppercase tracking-[0.1em] opacity-80 leading-tight mt-1">{label}</p>
                </div>
            </div>
            {alert && <div className="absolute top-6 right-6 h-2 w-2 rounded-full bg-white animate-ping" />}
        </div>
    )
}

function DistrictRiskRow({ name, types, identified, dependency, mapped, accessible, transport, warning, status, alert, warningNode, success }: any) {
    const statusColor = success ? 'bg-green-500 shadow-[0_0_8px_rgba(16,185,129,0.3)]' : alert ? 'bg-red-500 animate-pulse shadow-[0_0_8px_rgba(239,68,68,0.4)]' : 'bg-orange-500';
    return (
        <TableRow className="border-none hover:bg-slate-50 transition-all group cursor-pointer">
            <TableCell className="px-10 py-8">
                <div className="flex items-center gap-3">
                    <div className={`h-1.5 w-1.5 rounded-full shrink-0 ${statusColor}`} />
                    <span className="text-xs font-black text-slate-900 uppercase tracking-tight leading-none">{name}</span>
                </div>
            </TableCell>
            <TableCell>
                <Badge className="bg-slate-100 text-slate-500 border-none font-black text-[8px] uppercase tracking-widest px-3 py-1">{types}</Badge>
            </TableCell>
            <TableCell className="text-center font-mono font-black text-blue-600 text-[12px]">{identified}</TableCell>
            <TableCell className="text-center">
                <div className="flex flex-col items-center">
                    <span className={`text-[12px] font-mono font-black ${alert ? 'text-red-600 underline' : 'text-slate-900'}`}>{dependency}</span>
                    <p className="text-[7px] font-black text-slate-300 uppercase tracking-widest mt-1">High-Dependency</p>
                </div>
            </TableCell>
            <TableCell className="text-center">
                <p className="text-[11px] font-black text-slate-900">{mapped} <span className="text-slate-300 mx-1">/</span> <span className="text-emerald-600">{accessible}</span></p>
                <p className="text-[7px] font-black text-slate-300 uppercase mt-1 tracking-widest">Mapped / Acc.</p>
            </TableCell>
            <TableCell className="text-center">
                <Badge className={`rounded-xl px-3 py-1 text-[8px] font-black uppercase border-none shadow-sm ${transport === 'Yes' ? 'bg-green-100 text-green-700' : transport === 'No' ? 'bg-red-100 text-red-700' : 'bg-orange-100 text-orange-700'
                    }`}>
                    {transport}
                </Badge>
            </TableCell>
            <TableCell className="text-center">
                <div className="flex flex-col items-center">
                    <span className={`text-[11px] font-mono font-black ${alert ? 'text-red-600' : 'text-indigo-600'}`}>{warning}</span>
                    <div className="w-12 h-1 bg-slate-100 rounded-full mt-1.5 overflow-hidden">
                        <div className={`h-full ${alert ? 'bg-red-500' : 'bg-indigo-600'}`} style={{ width: warning }} />
                    </div>
                </div>
            </TableCell>
            <TableCell className="text-right px-10">
                <Badge className={`rounded-full px-4 py-1.5 text-[8px] font-black uppercase border-none shadow-lg ${success ? 'bg-green-600 text-white' : alert ? 'bg-red-600 text-white animate-pulse' : 'bg-orange-500 text-white'
                    }`}>
                    {status}
                </Badge>
            </TableCell>
        </TableRow>
    )
}