// app/dashboard/sdma/reports/directions-compliance/page.tsx
"use client";
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
    Table, TableBody, TableCell, TableHead, TableHeader, TableRow
} from "@/components/ui/table";
import {
    Gavel, ShieldCheck, Landmark, Search,
    Filter, Printer, FileSpreadsheet, Globe,
    ArrowUpRight, AlertTriangle, CheckCircle2,
    Activity, Timer, BadgeCheck, Download,
    History, Siren, Navigation, CalendarDays
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
    Select, SelectContent, SelectItem, SelectTrigger, SelectValue
} from "@/components/ui/select";

export default function DirectionsComplianceReport() {
    return (
        <div className="space-y-10 animate-in fade-in duration-1000 pb-20 font-sans selection:bg-orange-100 bg-[#fbfcfd]">

            {/* 1. APEX MONITORING HEADER */}
            <Card className="rounded-[40px] border-2 border-slate-200 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 p-1 relative overflow-hidden shadow-2xl">
                {/* CARBON FIBER TEXTURE OVERLAY */}
                <div className="absolute inset-0 opacity-10 pointer-events-none"
                    style={{ backgroundImage: `radial-gradient(black 2px, transparent 0)`, backgroundSize: '4px 4px' }} />

                <div className="bg-slate-50 rounded-[38px] p-10 relative z-10 flex flex-col xl:flex-row justify-between items-end gap-12">
                    <div className="flex-1 space-y-8">
                        <div className="flex items-center gap-6">
                            <div className="h-20 w-20 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl flex items-center justify-center text-white shadow-xl shadow-blue-200 transition-transform hover:scale-105 duration-500">
                                <Gavel size={38} />
                            </div>
                            <div className="space-y-2 flex-1 text-left">
                                <p className="text-[10px] font-black uppercase text-blue-600 tracking-[0.3em] ml-1 leading-none">Statutory Enforcement Hub</p>
                                <h1 className="text-4xl font-black text-slate-900 tracking-tighter uppercase leading-none">Directions Issued & Compliance Status</h1>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-[9px] font-black uppercase text-slate-400 ml-1 tracking-widest leading-none">District Authority Node</label>
                                <Select defaultValue="all">
                                    <SelectTrigger className="w-full h-16 py-6 border-2 border-slate-200 bg-white rounded-2xl px-6 font-black text-slate-900 uppercase text-[10px] shadow-sm">
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent className="rounded-2xl border-2 border-slate-200 shadow-2xl">
                                        <SelectItem value="all" className="font-bold py-3">All State Districts</SelectItem>
                                        <SelectItem value="lko" className="font-bold py-3">Lucknow Node</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="space-y-2">
                                <label className="text-[9px] font-black uppercase text-slate-400 ml-1 tracking-widest leading-none">Disaster Classification</label>
                                <Select defaultValue="all">
                                    <SelectTrigger className="w-full h-16 py-6 border-2 border-slate-200 bg-white rounded-2xl px-6 font-black text-slate-900 uppercase text-[10px] shadow-sm">
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent className="rounded-2xl border-2 border-slate-200 shadow-2xl">
                                        <SelectItem value="all" className="font-bold py-3">All Hazards</SelectItem>
                                        <SelectItem value="flood" className="font-bold py-3">Flood / Inundation</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4 min-w-[320px] relative z-10">
                        <div className="flex gap-3">
                            <Button variant="outline" className="flex-1 h-12 rounded-xl border-2 border-slate-200 font-bold bg-white gap-2 shadow-sm text-[9px] uppercase tracking-widest hover:bg-slate-50 transition-all"><FileSpreadsheet size={16} className="text-emerald-600" /> Export XLS</Button>
                            <Button className="flex-1 h-12 rounded-xl bg-slate-950 text-white font-black uppercase tracking-widest text-[9px] shadow-lg gap-2 group"><Printer size={16} /> Print Registry</Button>
                        </div>
                    </div>
                </div>
            </Card>

            {/* 2. STATUTORY KPI STRIP */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatTile label="Total Directions Issued" value="142" icon={<BadgeCheck />} color="bg-gradient-to-br from-blue-600 to-blue-700" />
                <StatTile label="Response Received" value="128" icon={<CheckCircle2 />} color="bg-gradient-to-br from-emerald-500 to-emerald-600" />
                <StatTile label="Compliance Pending" value="14" icon={<Activity />} color="bg-gradient-to-br from-orange-500 to-orange-600" />
                <StatTile label="Statutory Overdue" value="09" icon={<AlertTriangle />} color="bg-gradient-to-br from-red-600 to-red-700" alert />
            </div>

            {/* 3. MASTER REGISTRY LEDGER */}
            <Card className="rounded-[48px] border-2 border-slate-200 shadow-sm overflow-hidden bg-[#f8fafc] min-h-[700px]">
                <CardHeader className="p-0">
                    <div className="p-10 bg-gradient-to-r from-slate-700 via-indigo-800 to-slate-900 text-white relative overflow-hidden">
                        {/* CARBON FIBER TEXTURE OVERLAY */}
                        <div className="absolute inset-0 opacity-10 pointer-events-none"
                            style={{ backgroundImage: `radial-gradient(black 2px, transparent 0)`, backgroundSize: '4px 4px' }} />

                        <div className="flex flex-col md:flex-row justify-between items-center gap-6 relative z-10">
                            <div className="flex items-center gap-4">
                                <div className="h-12 w-12 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-xl">
                                    <Landmark size={24} />
                                </div>
                                <CardTitle className="text-sm font-black uppercase tracking-[0.3em] text-white">STATUTORY DIRECTION COMPLIANCE LEDGER</CardTitle>
                            </div>
                            <Badge className="bg-white/20 text-white border-none font-black text-[10px] px-5 py-2 uppercase tracking-widest">State Oversight v5.2</Badge>
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="p-0">
                    <Table>
                        <TableHeader className="bg-slate-100/80 font-sans">
                            <TableRow className="border-b-2 border-slate-200">
                                <TableHead className="px-10 py-6 text-[10px] font-black uppercase tracking-widest text-indigo-600">Direction Ref No</TableHead>
                                <TableHead className="text-[10px] font-black uppercase tracking-widest text-blue-600">Issued To / District</TableHead>
                                <TableHead className="text-[10px] font-black uppercase tracking-widest text-purple-600 text-center">Hazard Type</TableHead>
                                <TableHead className="text-[10px] font-black uppercase tracking-widest text-emerald-600 text-center">Date Issued</TableHead>
                                <TableHead className="text-[10px] font-black uppercase tracking-widest text-orange-600 text-center">Due Date</TableHead>
                                <TableHead className="text-[10px] font-black uppercase tracking-widest text-indigo-600 text-center">Response Recv.</TableHead>
                                <TableHead className="text-[10px] font-black uppercase tracking-widest text-blue-600 text-center">Compliance Status</TableHead>
                                <TableHead className="text-right px-10 text-[10px] font-black uppercase tracking-widest text-red-600">Overdue Status</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody className="divide-y divide-slate-200 font-sans bg-white">
                            <ComplianceRow
                                refNo="DIR-EW-LKO-442" node="DDMA Lucknow" district="Lucknow" type="Flood"
                                issued="12 Oct 24" due="20 Oct 24" received="Yes" status="Complied" overdue="No" success
                            />
                            <ComplianceRow
                                refNo="DIR-EW-MRT-091" node="Health Dept" district="Meerut" type="Cyclone"
                                issued="05 Oct 24" due="12 Oct 24" received="No" status="Pending" overdue="Yes" alert
                            />
                            <ComplianceRow
                                refNo="DIR-EW-VNS-118" node="DDMA Varanasi" district="Varanasi" type="Flood"
                                issued="10 Oct 24" due="18 Oct 24" received="Yes" status="Partial" overdue="Yes" warning
                            />
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>

            {/* FOOTER SYNC STATUS */}
            <footer className="pt-12 border-t-2 border-slate-200 flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="flex items-center gap-4">
                    <ShieldCheck className="text-indigo-600" size={24} />
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 leading-none">State Statutory Registry Sync Active • 142 Active Directions Tracked Statewide</span>
                </div>
            </footer>
        </div>
    );
}

/* UI SUB-COMPONENTS */

function ComplianceRow({ refNo, node, district, type, issued, due, received, status, overdue, success, alert, warning }: any) {
    const statusColor = success ? 'bg-green-600' : alert ? 'bg-red-600' : 'bg-orange-500';
    const isOverdue = overdue === 'Yes';

    return (
        <TableRow className="border-none hover:bg-slate-50 transition-all group cursor-pointer">
            <TableCell className="px-10 py-8">
                <span className="text-[11px] font-mono font-black text-indigo-700 bg-indigo-50 px-2.5 py-0.5 rounded-md uppercase tracking-tighter">{refNo}</span>
            </TableCell>
            <TableCell>
                <div className="space-y-1">
                    <p className="text-xs font-black text-slate-900 uppercase tracking-tight leading-none">{node}</p>
                    <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest italic">{district}</p>
                </div>
            </TableCell>
            <TableCell className="text-center">
                <Badge className="bg-blue-50 text-blue-600 border-2 border-blue-100 font-black text-[8px] uppercase px-2">{type}</Badge>
            </TableCell>
            <TableCell className="text-center font-mono font-bold text-slate-500 text-[10px]">{issued}</TableCell>
            <TableCell className="text-center">
                <span className={`text-[11px] font-mono font-black ${isOverdue ? 'text-red-600 underline' : 'text-slate-900'}`}>{due}</span>
            </TableCell>
            <TableCell className="text-center">
                <Badge className={`border-2 font-black text-[8px] uppercase px-2.5 py-0.5 ${received === 'Yes' ? 'bg-green-50 text-green-700 border-green-200' : 'bg-red-50 text-red-700 border-red-100'}`}>
                    {received}
                </Badge>
            </TableCell>
            <TableCell className="text-center">
                <Badge className={`rounded-full px-4 py-1.5 text-[8px] font-black uppercase border-none text-white shadow-lg ${statusColor}`}>
                    {status}
                </Badge>
            </TableCell>
            <TableCell className="text-right px-10">
                <div className="flex items-center justify-end gap-3 group/btn">
                    <Badge className={`border-none font-black text-[8px] uppercase px-3 py-1 ${isOverdue ? 'bg-red-100 text-red-700 animate-pulse' : 'bg-slate-100 text-slate-400'}`}>
                        {overdue}
                    </Badge>
                    <ArrowUpRight size={14} className="text-slate-200 group-hover/btn:text-indigo-600 transition-colors" />
                </div>
            </TableCell>
        </TableRow>
    )
}

function StatTile({ label, value, icon, color, alert }: any) {
    return (
        <div className={`group relative text-left p-8 rounded-[40px] border-2 border-slate-200 overflow-hidden transition-all duration-500 h-44 flex flex-col justify-between shadow-md hover:shadow-xl hover:-translate-y-1 bg-slate-50/50`}>
            <div className="absolute inset-0 opacity-[0.06] pointer-events-none"
                style={{ backgroundImage: `radial-gradient(black 2px, transparent 0)`, backgroundSize: '4px 4px' }} />
            <div className="relative z-10 flex flex-col justify-between h-full">
                <div className={`h-12 w-12 rounded-2xl ${color} flex items-center justify-center text-white shadow-xl group-hover:scale-110 transition-transform`}>
                    {React.cloneElement(icon as React.ReactElement, {})}
                </div>
                <div>
                    <p className="text-3xl font-black tracking-tighter leading-none text-slate-900">{value}</p>
                    <p className="text-[10px] font-black uppercase tracking-[0.1em] text-slate-400 mt-2">{label}</p>
                </div>
            </div>
            {alert && <div className="absolute top-6 right-6 h-2 w-2 rounded-full bg-red-600 animate-ping shadow-[0_0_10px_red]" />}
        </div>
    )
}