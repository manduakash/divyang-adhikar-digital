// app/dashboard/sdma/reports/medical-readiness/page.tsx
"use client";
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
    Table, TableBody, TableCell, TableHead, TableHeader, TableRow
} from "@/components/ui/table";
import {
    Stethoscope, HeartPulse, Activity, ShieldCheck,
    BadgeCheck, Search, Filter, Printer, FileText,
    ArrowUpRight, Globe, CheckCircle2, AlertTriangle,
    History, Landmark, Download, FileSpreadsheet,
    Package, Users, Thermometer, Pill, Syringe
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
    Select, SelectContent, SelectItem, SelectTrigger, SelectValue
} from "@/components/ui/select";

export default function MedicalReadinessReport() {
    return (
        <div className="space-y-10 animate-in fade-in duration-1000 pb-20 font-sans selection:bg-emerald-100 bg-white">

            {/* PRIMARY HUB HEADER - GRADIENT + CARBON FIBER */}
            <Card className="rounded-[40px] border-none bg-gradient-to-r from-emerald-500 via-teal-500 to-indigo-600 p-1 relative overflow-hidden shadow-2xl shadow-emerald-200">
                {/* CARBON FIBER TEXTURE OVERLAY */}
                <div className="absolute inset-0 opacity-10 pointer-events-none"
                    style={{ backgroundImage: `radial-gradient(black 2px, transparent 0)`, backgroundSize: '4px 4px' }} />

                <div className="bg-white rounded-[38px] p-10 relative z-10 flex flex-col xl:flex-row justify-between items-end gap-12">

                    <div className="flex-1 space-y-8">
                        <div className="flex items-center gap-6">
                            <div className="h-20 w-20 bg-gradient-to-br from-emerald-500 to-teal-700 rounded-3xl flex items-center justify-center text-white shadow-xl">
                                <HeartPulse size={38} />
                            </div>
                            <div className="space-y-3 flex-1">
                                <p className="text-[10px] font-black uppercase text-emerald-600 tracking-[0.3em] ml-1 leading-none text-nowrap">Medical & Assistive Node</p>
                                <h1 className="text-4xl font-black text-slate-900 tracking-tighter uppercase leading-none">Assistive Support & Medical Readiness</h1>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-[9px] font-black uppercase text-slate-400 ml-1 tracking-widest leading-none">District Node Filter</label>
                                <Select defaultValue="all">
                                    <SelectTrigger className="w-full h-16 py-6 border-2 border-slate-200 bg-slate-50 rounded-2xl px-6 font-black text-slate-900 uppercase text-[10px] shadow-sm">
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent className="rounded-2xl border-2 border-slate-200 shadow-2xl">
                                        <SelectItem value="all">All Statewide Districts</SelectItem>
                                        <SelectItem value="lko">Lucknow Urban Hub</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="space-y-2">
                                <label className="text-[9px] font-black uppercase text-slate-400 ml-1 tracking-widest leading-none">Hazard Category</label>
                                <Select defaultValue="flood">
                                    <SelectTrigger className="w-full h-16 py-6 border-2 border-slate-200 bg-slate-50 rounded-2xl font-black text-slate-900 uppercase text-[10px] shadow-sm">
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent className="rounded-2xl border-2 border-slate-200 shadow-2xl">
                                        <SelectItem value="flood">Flood / Cyclone Hub</SelectItem>
                                        <SelectItem value="heat">Extreme Heat Node</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4 min-w-[320px] relative z-10">
                        <div className="bg-emerald-50 border-2 border-emerald-100 p-6 rounded-[32px] shadow-sm flex flex-col items-center text-center">
                            <Activity size={24} className="text-emerald-600 mb-2 animate-pulse" />
                            <p className="text-[9px] font-black uppercase text-emerald-700 tracking-widest">State Medical Sync Status</p>
                            <p className="text-2xl font-black text-slate-900 uppercase tracking-tighter">Verified Active</p>
                        </div>
                        <div className="flex gap-3">
                            <Button variant="outline" className="flex-1 h-12 rounded-xl border-2 border-slate-200 font-bold bg-white gap-2 shadow-sm text-[9px] uppercase tracking-widest hover:bg-slate-50 transition-all"><FileSpreadsheet size={16} className="text-emerald-600" /> Export XLS</Button>
                            <Button className="flex-1 h-12 rounded-xl bg-slate-950 text-white font-black uppercase tracking-widest text-[9px] shadow-lg gap-2 group"><Printer size={16} /> Print Hub Report</Button>
                        </div>
                    </div>
                </div>
            </Card>

            {/* STATUTORY DATA LEDGER - CARBON FIBER TABLE HEADER */}
            <Card className="rounded-[48px] border-2 border-slate-200 shadow-sm overflow-hidden bg-white min-h-[700px]">
                <CardHeader className="p-0">
                    <div className="p-10 bg-gradient-to-r from-emerald-600 via-teal-600 to-indigo-600 text-white relative overflow-hidden">
                        {/* CARBON FIBER TEXTURE OVERLAY */}
                        <div className="absolute inset-0 opacity-10 pointer-events-none"
                            style={{ backgroundImage: `radial-gradient(black 2px, transparent 0)`, backgroundSize: '4px 4px' }} />

                        <div className="flex flex-col md:flex-row justify-between items-center gap-6 relative z-10">
                            <div className="flex items-center gap-4">
                                <div className="h-12 w-12 rounded-2xl bg-white/20 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-xl">
                                    <Stethoscope size={24} />
                                </div>
                                <CardTitle className="text-sm font-black uppercase tracking-[0.3em] text-white uppercase leading-none">STATEWIDE MEDICAL READINESS REGISTRY</CardTitle>
                            </div>
                            <Badge className="bg-white/20 text-white border-none font-black text-[10px] px-5 py-2 uppercase tracking-widest">Audit Registry v5.2</Badge>
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="p-0">
                    <Table>
                        <TableHeader className="bg-slate-50/80 font-sans">
                            <TableRow className="border-b-2 border-slate-100">
                                <TableHead className="px-10 py-6 text-[9px] font-black uppercase tracking-widest text-emerald-600">District Hub</TableHead>
                                <TableHead className="text-[9px] font-black uppercase tracking-widest text-indigo-600">Disaster Type</TableHead>
                                <TableHead className="text-[9px] font-black uppercase tracking-widest text-purple-600 text-center">PwDs Requiring Support</TableHead>
                                <TableHead className="text-[9px] font-black uppercase tracking-widest text-emerald-600 text-center">Assistive Devices</TableHead>
                                <TableHead className="text-[9px] font-black uppercase tracking-widest text-blue-600 text-center">Medical Teams</TableHead>
                                <TableHead className="text-[9px] font-black uppercase tracking-widest text-orange-600 text-center">Special Medication</TableHead>
                                <TableHead className="text-[9px] font-black uppercase tracking-widest text-red-600 text-center">Gaps Identified</TableHead>
                                <TableHead className="text-right px-10 text-[9px] font-black uppercase tracking-widest text-indigo-600">Action Required</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody className="divide-y divide-slate-100 font-sans">
                            <MedicalRow
                                district="Lucknow Urban" type="Flood" requiring="1,240" devices="1,190" teams="45 Nodes"
                                meds="Verified" gaps="None" action="Maintain Sync" success
                            />
                            <MedicalRow
                                district="Meerut Hub" type="Cyclone" requiring="850" devices="420" teams="12 Nodes"
                                meds="Critical" gaps="Oxygen Shortfall" action="Dispatch Hub-B Units" alert
                            />
                            <MedicalRow
                                district="Varanasi East" type="Heatwave" requiring="2,100" devices="1,800" teams="32 Nodes"
                                meds="Partial" gaps="Thermoregulation Kits" action="Direct local DDMA" warning
                            />
                            <MedicalRow
                                district="Howrah Central" type="Flood" requiring="3,450" devices="3,200" teams="84 Nodes"
                                meds="Verified" gaps="None" action="Monitor Stock" success
                            />
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>

            {/* AGGREGATE LOGISTICS TILES */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatTile label="Total Assistive Demand" value="124,500" icon={<Package />} color="from-blue-600 to-indigo-700" />
                <StatTile label="Medical Hubs Active" value="3,420 Nodes" icon={<Landmark />} color="from-emerald-500 to-teal-700" />
                <StatTile label="State Medication Buffer" value="98.2%" icon={<Pill />} color="from-purple-600 to-purple-800" />
                <StatTile label="Regional Critical Gaps" value="14 Districts" icon={<AlertTriangle />} color="from-red-500 to-orange-600" alert />
            </div>

        </div>
    );
}

/* UI SUB-COMPONENTS */

function MedicalRow({ district, type, requiring, devices, teams, meds, gaps, action, success, alert, warning }: any) {
    const statusColor = success ? 'bg-green-500' : alert ? 'bg-red-500' : 'bg-orange-500';

    return (
        <TableRow className="border-none hover:bg-slate-50 transition-all group cursor-pointer">
            <TableCell className="px-10 py-8">
                <div className="flex items-center gap-3">
                    <div className={`h-1.5 w-1.5 rounded-full shrink-0 ${statusColor}`} />
                    <span className="text-xs font-black text-slate-800 uppercase tracking-tight leading-none">{district}</span>
                </div>
            </TableCell>
            <TableCell>
                <Badge className="bg-slate-100 text-slate-400 border-2 border-slate-200 font-black text-[8px] uppercase tracking-tighter px-2">{type}</Badge>
            </TableCell>
            <TableCell className="text-center font-mono font-black text-indigo-700 text-[12px]">
                {requiring}
            </TableCell>
            <TableCell className="text-center font-bold text-slate-900 text-[11px]">{devices}</TableCell>
            <TableCell className="text-center font-bold text-slate-500 text-[11px]">{teams}</TableCell>
            <TableCell className="text-center">
                <Badge className={`border-2 font-black text-[8px] uppercase px-3 py-1 shadow-sm ${meds === 'Verified' ? 'bg-green-50 text-green-700 border-green-200' : meds === 'Critical' ? 'bg-red-50 text-red-700 border-red-200 animate-pulse' : 'bg-orange-50 text-orange-700 border-orange-200'
                    }`}>
                    {meds}
                </Badge>
            </TableCell>
            <TableCell className="text-center">
                <span className={`text-[10px] font-black uppercase ${alert ? 'text-red-600 underline' : 'text-slate-400'}`}>{gaps}</span>
            </TableCell>
            <TableCell className="text-right px-10">
                <div className="flex items-center justify-end gap-3 group/btn">
                    <p className={`text-[10px] font-bold uppercase italic ${alert ? 'text-red-700' : 'text-slate-500'}`}>{action}</p>
                    <ArrowUpRight size={14} className="text-slate-200 group-hover/btn:text-emerald-600 transition-colors" />
                </div>
            </TableCell>
        </TableRow>
    )
}

function StatTile({ label, value, icon, color, alert }: any) {
    return (
        <div className={`group relative text-left p-8 rounded-[40px] overflow-hidden transition-all duration-500 h-44 flex flex-col justify-between shadow-md hover:shadow-xl hover:-translate-y-1 bg-gradient-to-br ${color} text-white border-t-2 border-white/20`}>
            <div className="absolute inset-0 opacity-[0.06] pointer-events-none"
                style={{ backgroundImage: `radial-gradient(black 2px, transparent 0)`, backgroundSize: '4px 4px' }} />
            <div className="relative z-10 flex flex-col justify-between h-full">
                <div className="h-10 w-10 rounded-xl bg-white/20 backdrop-blur-md border-2 border-white/20 flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform">
                    {React.cloneElement(icon, { size: 22, className: "text-white" })}
                </div>
                <div>
                    <p className="text-3xl font-black tracking-tighter drop-shadow-sm leading-none">{value}</p>
                    <p className="text-[10px] font-black uppercase tracking-[0.1em] opacity-80 leading-tight mt-2">{label}</p>
                </div>
            </div>
            {alert && <div className="absolute top-6 right-6 h-2 w-2 rounded-full bg-white animate-ping shadow-[0_0_10px_white]" />}
        </div>
    )
}