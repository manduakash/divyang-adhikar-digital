// app/dashboard/sdma/reports/transport-readiness/page.tsx
"use client";
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
    Table, TableBody, TableCell, TableHead, TableHeader, TableRow
} from "@/components/ui/table";
import {
    Truck, Users, MapPin, ShieldCheck, BadgeCheck,
    Search, Filter, Printer, FileText,
    ArrowUpRight, Globe, CheckCircle2,
    AlertTriangle, History, Landmark,
    Activity, Zap, Siren, Navigation,
    Timer, Download, FileSpreadsheet,
    Bus, HeartPulse
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
    Select, SelectContent, SelectItem, SelectTrigger, SelectValue
} from "@/components/ui/select";

export default function EvacuationTransportReport() {
    return (
        <div className="space-y-10 animate-in fade-in duration-1000 pb-20 font-sans selection:bg-indigo-100 bg-white">

            {/* HUB PRIMARY HEADER - CARBON FIBER TEXTURE */}
            <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-8 mb-10 bg-white p-12 rounded-[48px] border-2 border-slate-100 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 p-10 opacity-[0.03] pointer-events-none text-blue-600">
                    <Truck size={240} />
                </div>

                <div className="space-y-4 relative z-10">
                    <div className="flex items-center gap-3">
                        <div className="h-14 w-14 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 rounded-2xl flex items-center justify-center text-white shadow-xl shadow-blue-500/20 transition-transform hover:scale-105">
                            <Bus size={32} />
                        </div>
                        <div>
                            <h1 className="text-4xl font-black text-slate-900 tracking-tighter uppercase leading-none">Evacuation & Transport Hub</h1>
                            <p className="text-[10px] font-black text-blue-600 uppercase tracking-[0.3em] mt-2 flex items-center gap-2">
                                <BadgeCheck size={12} /> Logistical Readiness Node
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex gap-4 relative z-10">
                    <Button variant="outline" className="h-16 px-10 rounded-3xl border-2 border-slate-200 font-black uppercase tracking-widest text-[10px] bg-white gap-2 shadow-sm hover:bg-slate-50 transition-all">
                        <FileSpreadsheet size={18} className="text-green-600" /> Export XLS
                    </Button>
                    <Button className="h-16 px-10 rounded-3xl bg-slate-950 text-white font-black uppercase tracking-widest text-[10px] shadow-2xl hover:bg-black transition-all gap-2 group border-t border-white/10">
                        <Printer size={18} /> Print Statutory Audit <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </Button>
                </div>
            </div>

            {/* PARAMETRIC LOGISTICS FILTERS - HIGH CONTRAST */}
            <Card className="rounded-[40px] border-2 border-slate-100 bg-white p-8 shadow-sm">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="space-y-2">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1 leading-none">District Node</label>
                        <Select defaultValue="all">
                            <SelectTrigger className="w-full h-16 py-6 border-2 border-slate-200 bg-slate-50 rounded-2xl font-black text-slate-900 uppercase text-[10px] shadow-sm">
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent className="rounded-2xl border-2 border-slate-200 shadow-2xl">
                                <SelectItem value="all">All 75 Statewide Districts</SelectItem>
                                <SelectItem value="lko">Lucknow Urban Hub</SelectItem>
                                <SelectItem value="vns">Varanasi East Node</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="space-y-2">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1 leading-none">Disaster Type</label>
                        <Select defaultValue="all">
                            <SelectTrigger className="w-full h-16 py-6 border-2 border-slate-200 bg-slate-50 rounded-2xl font-black text-slate-900 uppercase text-[10px] shadow-sm">
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent className="rounded-2xl border-2 border-slate-200 shadow-2xl">
                                <SelectItem value="all">All Disaster Hazards</SelectItem>
                                <SelectItem value="flood">Flood / Inundation</SelectItem>
                                <SelectItem value="cyclone">Cyclone / Storm</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="flex items-end">
                        <Button className="w-full h-16 bg-blue-600 text-white rounded-2xl font-black uppercase tracking-widest text-[10px] shadow-xl hover:bg-blue-700 transition-all gap-2">
                            <Filter size={16} /> Filter Logistics Ledger
                        </Button>
                    </div>
                </div>
            </Card>

            {/* MASTER REGISTRY LEDGER - CARBON FIBER TEXTURE HEADER */}
            <Card className="rounded-[48px] border-2 border-slate-200 shadow-sm overflow-hidden bg-white min-h-[800px]">
                <CardHeader className="p-0">
                    <div className="p-10 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white relative overflow-hidden">
                        {/* CARBON FIBER TEXTURE OVERLAY */}
                        <div className="absolute inset-0 opacity-20 pointer-events-none"
                            style={{ backgroundImage: `radial-gradient(black 2px, transparent 0)`, backgroundSize: '4px 4px' }} />

                        <div className="flex flex-col md:flex-row justify-between items-center gap-6 relative z-10">
                            <div className="flex items-center gap-4">
                                <div className="h-12 w-12 rounded-2xl bg-white/20 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-xl">
                                    <Truck size={24} />
                                </div>
                                <CardTitle className="text-sm font-black uppercase tracking-[0.3em] text-white leading-none">STATEWIDE EVACUATION & TRANSPORT REGISTRY</CardTitle>
                            </div>
                            <Badge className="bg-white/20 text-white border-none font-black text-[10px] px-5 py-2 uppercase tracking-widest leading-none">Mobilization Hub v5.2</Badge>
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="p-0">
                    <Table>
                        <TableHeader className="bg-slate-50/80 font-sans">
                            <TableRow className="border-b-2 border-slate-100">
                                <TableHead className="px-10 py-6 text-[9px] font-black uppercase tracking-widest text-slate-400">District Node</TableHead>
                                <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400">Disaster Type</TableHead>
                                <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400 text-center">PwDs Requiring Evacuation</TableHead>
                                <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400 text-center">Vehicles Identified</TableHead>
                                <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400 text-center">Wheelchair-Accessible</TableHead>
                                <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400 text-center">Drivers / Volunteers</TableHead>
                                <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400 text-center">Transport Gap</TableHead>
                                <TableHead className="text-right px-10 text-[9px] font-black uppercase tracking-widest text-slate-400">Remarks</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody className="divide-y divide-slate-100 font-sans">
                            <LogisticsRow
                                district="Lucknow Urban" type="Flood" requiring="1,240" identified="84" accessible="42"
                                volunteers="110" gap="No" remarks="Fleet fully verified for Q3" success
                            />
                            <LogisticsRow
                                district="Meerut Hub" type="Cyclone" requiring="450" identified="12" accessible="02"
                                volunteers="24" gap="Yes" remarks="Critical Accessible Fleet shortage" alert
                            />
                            <LogisticsRow
                                district="Varanasi East" type="Flood" requiring="880" identified="45" accessible="18"
                                volunteers="62" gap="Yes" remarks="Volunteer mapping incomplete" warning
                            />
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>

            {/* AGGREGATE SUMMARY TILES - VIBRANT */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatTile label="Total Evacuation Load" value="124,500" icon={<Users />} color="from-blue-600 to-indigo-700" />
                <StatTile label="Mapped Accessible Fleet" value="3,420 Units" icon={<Bus />} color="from-emerald-500 to-teal-700" />
                <StatTile label="Active Transport Gaps" value="14 Districts" icon={<AlertTriangle />} color="from-red-600 to-rose-800" alert />
                <div className="bg-white border-2 border-indigo-100 rounded-[32px] p-8 shadow-sm flex flex-col justify-center relative overflow-hidden group">
                    <div className="absolute inset-0 opacity-[0.04] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/topography.png')]" />
                    <p className="text-[9px] font-black text-indigo-400 uppercase tracking-widest mb-1 relative z-10">Fleet Efficiency</p>
                    <p className="text-4xl font-black text-indigo-700 tracking-tighter group-hover:scale-105 transition-transform relative z-10">84.2%</p>
                </div>
            </div>

            {/* FOOTER AUDIT NOTICE */}
            <footer className="pt-12 border-t-2 border-slate-100 flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="flex items-center gap-4 text-slate-400">
                    <Activity size={24} className="text-blue-600 animate-pulse" />
                    <span className="text-[10px] font-black uppercase tracking-widest leading-none">Logistics Hub Sync: Statewide Evacuation Mappings Active • Read-Only Aggregate Hub</span>
                </div>
                <div className="flex gap-6">
                    <button className="text-[10px] font-black uppercase text-blue-600 hover:underline">Download Fleet Inventory</button>
                    <button className="text-[10px] font-black uppercase text-slate-400 hover:text-slate-900">Volunteer Protocol Hub</button>
                </div>
            </footer>
        </div>
    );
}

/* UI SUB-COMPONENTS */

function LogisticsRow({ district, type, requiring, identified, accessible, volunteers, gap, remarks, success, alert, warning }: any) {
    const statusColor = success ? 'bg-green-600 text-white shadow-green-100 shadow-lg' : alert ? 'bg-red-600 text-white animate-pulse shadow-red-100 shadow-lg' : 'bg-orange-500 text-white shadow-orange-100 shadow-lg';
    const isGap = gap === 'Yes';

    return (
        <TableRow className="border-none hover:bg-slate-50 transition-all group cursor-pointer">
            <TableCell className="px-10 py-8">
                <div className="flex items-center gap-3">
                    <div className={`h-1.5 w-1.5 rounded-full shrink-0 ${success ? 'bg-green-500' : alert ? 'bg-red-500' : 'bg-orange-500'}`} />
                    <span className="text-xs font-black text-slate-900 uppercase tracking-tight leading-none">{district}</span>
                </div>
            </TableCell>
            <TableCell>
                <Badge className="bg-slate-100 text-slate-400 border-none font-black text-[8px] uppercase tracking-tighter px-2">{type}</Badge>
            </TableCell>
            <TableCell className="text-center font-mono font-black text-blue-600 text-[12px]">
                {requiring}
            </TableCell>
            <TableCell className="text-center font-bold text-slate-900 text-[11px]">{identified}</TableCell>
            <TableCell className="text-center">
                <span className={`text-[11px] font-black ${accessible === '02' ? 'text-red-600 underline' : 'text-emerald-600'}`}>{accessible}</span>
            </TableCell>
            <TableCell className="text-center font-bold text-slate-500 text-[11px]">{volunteers}</TableCell>
            <TableCell className="text-center">
                <Badge className={`border-none font-black text-[8px] uppercase px-3 py-1 shadow-sm ${gap === 'No' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700 animate-pulse'
                    }`}>
                    {gap}
                </Badge>
            </TableCell>
            <TableCell className="text-right px-10">
                <p className={`text-[10px] font-medium leading-relaxed italic max-w-[200px] ml-auto ${isGap ? 'text-red-600' : 'text-slate-500'}`}>
                    {remarks}
                </p>
            </TableCell>
        </TableRow>
    )
}

function StatTile({ label, value, icon, color, alert }: any) {
    return (
        <div className={`group relative text-left p-8 rounded-[40px] overflow-hidden transition-all duration-500 h-44 flex flex-col justify-between shadow-md hover:shadow-xl hover:-translate-y-1 bg-gradient-to-br ${color} text-white border-t border-white/20`}>
            <div className="absolute inset-0 opacity-[0.08] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
            <div className="relative z-10 flex flex-col justify-between h-full">
                <div className="h-10 w-10 rounded-xl bg-white/20 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform">
                    {React.cloneElement(icon, { size: 22, className: "text-white" })}
                </div>
                <div>
                    <p className="text-3xl font-black tracking-tighter drop-shadow-sm leading-none">{value}</p>
                    <p className="text-[10px] font-black uppercase tracking-[0.1em] opacity-80 leading-tight mt-2">{label}</p>
                </div>
            </div>
            {alert && <div className="absolute top-6 right-6 h-2 w-2 rounded-full bg-white animate-ping" />}
        </div>
    )
}