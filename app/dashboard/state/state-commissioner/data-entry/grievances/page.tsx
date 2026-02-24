// app/dashboard/scpd/grievances/page.tsx
"use client";
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
    MessageSquare, ShieldAlert, Clock, AlertCircle,
    CheckCircle2, Gavel, ArrowUpRight, Search,
    Filter, Printer, FileText, Download,
    MapPin, Building2, Timer, History,
    Sparkles, Scale, Landmark, Zap,
    Info
} from "lucide-react";
import {
    Table, TableBody, TableCell, TableHead, TableHeader, TableRow
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

export default function SCPDGrievanceHub() {

    // Section  Mandated Aggregates for Reporting
    const scpdStats = {
        totalEscalated: "424",
        pendingReview: "82",
        slaBreached: "14",
        resolvedBySC: "328"
    };

    return (
        <div className="space-y-10 animate-in fade-in duration-700 pb-20 font-sans">

            {/* 1. APEX SUPERVISORY HEADER */}
            <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-6 mb-10 bg-white p-10 rounded-[40px] border border-slate-200 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 p-10 opacity-[0.03] pointer-events-none">
                    <MessageSquare size={180} className="text-indigo-600" />
                </div>
                <div className="space-y-2 relative z-10">
                    <div className="flex items-center gap-2 text-indigo-600 font-black uppercase text-[10px] tracking-[0.2em]">
                        <Gavel size={14} /> Commissioner Oversight /  Grievances
                    </div>
                    <h1 className="text-4xl font-black text-slate-900 tracking-tighter uppercase leading-none">Supervisory Grievance Hub</h1>
                    <p className="text-slate-500 font-medium italic">High-level monitoring of escalated cases and statutory resolution tracking.</p>
                </div>
                <div className="flex gap-4 relative z-10">
                    <Button variant="outline" className="h-14 px-8 rounded-2xl border-slate-200 font-black uppercase tracking-widest text-[10px] bg-white hover:bg-slate-50">
                        <History size={18} className="mr-2" /> Review Archive
                    </Button>
                    <Button className="h-14 px-10 rounded-2xl bg-indigo-900 text-white font-black uppercase tracking-widest text-[10px] shadow-2xl hover:bg-black transition-all gap-2">
                        <Scale size={18} /> New Direct Action
                    </Button>
                </div>
            </div>

            {/* 2. STATUTORY INDICATOR TILES (Patterned Gradients) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatTile label="Escalated to SCPD" value={scpdStats.totalEscalated} icon={<Gavel />} color="from-slate-800 to-slate-950" />
                <StatTile label="Under Commission Review" value={scpdStats.pendingReview} icon={<Clock />} color="from-blue-600 via-blue-700 to-indigo-900" />
                <StatTile label="SLA Breach Alerts" value={scpdStats.slaBreached} icon={<ShieldAlert />} color="from-red-600 via-rose-700 to-red-800" alert />
                <div className="bg-white border-2 border-indigo-100 rounded-[32px] p-6 shadow-sm flex flex-col justify-center relative overflow-hidden group">
                    <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/topography.png')]" />
                    <p className="text-[9px] font-black uppercase tracking-widest text-indigo-400 mb-1">State Resolution Rate</p>
                    <p className="text-4xl font-black text-indigo-700 tracking-tighter group-hover:scale-105 transition-transform">77.3%</p>
                    <div className="w-full h-1 bg-slate-100 rounded-full mt-4 overflow-hidden shadow-inner">
                        <div className="h-full bg-indigo-600" style={{ width: '77%' }} />
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 items-start">

                {/* 3. THE GRIEVANCE WATCHLIST (Section  Mandated Output) */}
                <div className="xl:col-span-2">
                    <Card className="rounded-[40px] border-slate-200 shadow-sm overflow-hidden bg-white min-h-[700px]">
                        <CardHeader className="p-8 border-b border-slate-50 bg-slate-50/30 flex flex-row justify-between items-center">
                            <CardTitle className="text-sm font-black uppercase tracking-widest text-slate-400"> Statutory Grievance Watchlist</CardTitle>
                            <div className="flex gap-3">
                                <div className="relative group">
                                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-300 group-focus-within:text-indigo-600" />
                                    <input className="pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-2xl text-[10px] font-bold outline-none w-64 shadow-inner" placeholder="Search Grievance ID..." />
                                </div>
                                <Button variant="outline" size="icon" className="h-12 w-12 rounded-2xl border-slate-200 hover:bg-slate-50 shadow-sm"><Filter size={18} /></Button>
                            </div>
                        </CardHeader>
                        <CardContent className="p-0">
                            <Table>
                                <TableHeader className="bg-white">
                                    <TableRow className="border-slate-100">
                                        <TableHead className="px-8 py-6 text-[9px] font-black uppercase tracking-widest text-slate-400">Grievance ID</TableHead>
                                        <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400">District / Authority</TableHead>
                                        <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400 text-center">Receipt Date</TableHead>
                                        <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400 text-center">Compliance Due</TableHead>
                                        <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400 text-center">Status</TableHead>
                                        <TableHead className="text-right px-8"></TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody className="divide-y divide-slate-50">
                                    <WatchlistRow
                                        id="GRV-2024-LKO-910"
                                        category="Discrimination"
                                        district="Lucknow Urban"
                                        authority="Transport Dept"
                                        received="12 Oct 2024"
                                        due="12 Nov 2024"
                                        status="Review Pending"
                                    />
                                    <WatchlistRow
                                        id="GRV-2024-VNS-442"
                                        category="Admission"
                                        district="Varanasi Hub"
                                        authority="City High School"
                                        received="05 Oct 2024"
                                        due="14 Oct 2024"
                                        status="SLA Breach"
                                        alert
                                    />
                                    <WatchlistRow
                                        id="GRV-2024-AGR-004"
                                        category="Accessibility"
                                        district="Agra Sector"
                                        authority="Municipal Corp"
                                        received="10 Oct 2024"
                                        due="10 Nov 2024"
                                        status="Hearing Fixed"
                                    />
                                    <WatchlistRow
                                        id="GRV-2024-KNP-118"
                                        category="Employment"
                                        district="Kanpur Nagar"
                                        authority="Pvt Tech Park"
                                        received="14 Oct 2024"
                                        due="14 Nov 2024"
                                        status="Notice Issued"
                                    />
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>
                </div>

                {/* 4. SLA BREACH ALERTS & AI ANALYSIS SIDEBAR */}
                <div className="xl:col-span-1 space-y-8 sticky top-28">

                    {/* SLA BREACH WATCH (Mandated Output) */}
                    <Card className="rounded-[40px] border-none bg-slate-900 text-white p-8 shadow-2xl relative overflow-hidden group">
                        <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/circuit-board.png')]" />
                        <div className="relative z-10 space-y-8">
                            <div className="flex items-center gap-3">
                                <Timer className="text-red-400 animate-pulse" />
                                <h3 className="text-sm font-black uppercase tracking-widest text-red-400">SLA Breach Alerts</h3>
                            </div>
                            <div className="space-y-4">
                                <BreachItem id="GRV-VNS-442" days="06 Days Overdue" district="Varanasi" />
                                <BreachItem id="GRV-MRT-012" days="02 Days Overdue" district="Meerut" />
                            </div>
                            <p className="text-[10px] font-medium text-slate-400 leading-relaxed uppercase tracking-tighter italic">
                                Breaches are automatically flagged to the <b>Secretary (Admin)</b> for district-level summons.
                            </p>
                            <Button className="w-full h-14 bg-white text-slate-900 hover:bg-indigo-50 rounded-2xl font-black uppercase tracking-widest text-[10px] shadow-lg">
                                Issue Summons (14)
                            </Button>
                        </div>
                    </Card>

                    <Card className="rounded-[40px] border-slate-200 p-8 bg-white shadow-sm relative overflow-hidden">
                        <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/graphy.png')]" />
                        <div className="flex items-center gap-3 mb-8">
                            <Sparkles className="text-purple-600" size={20} />
                            <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest border-b pb-2 flex-1">AI Oversight Brief</h4>
                        </div>
                        <div className="space-y-6">
                            <p className="text-xs font-bold text-slate-700 leading-relaxed uppercase tracking-tighter">
                                District <b>Agra</b> has a 40% increase in Admission denial grievances this quarter.
                            </p>
                            <div className="pt-4 border-t border-slate-50">
                                <Button variant="ghost" className="w-full text-indigo-600 font-black uppercase text-[9px] tracking-widest gap-2">
                                    <Download size={14} /> Prep Special Report Hub
                                </Button>
                            </div>
                        </div>
                    </Card>

                    <div className="p-6 bg-blue-50 rounded-[32px] border border-blue-100 flex gap-4">
                        <Info className="text-blue-600 shrink-0" size={20} />
                        <p className="text-[9px] font-bold text-blue-800 leading-normal uppercase">
                            Direct observations and proposed actions entered here are mirrored to the <b>National CCPD Portal</b>.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
}

/* UI SUB-COMPONENTS */

function StatTile({ label, value, icon, color, alert }: any) {
    return (
        <div className={`group relative text-left p-7 rounded-[32px] overflow-hidden transition-all duration-500 h-44 flex flex-col justify-between shadow-md hover:shadow-xl hover:-translate-y-1 bg-gradient-to-br ${color} text-white border-t border-white/20`}>
            <div className="absolute inset-0 opacity-[0.08] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/topography.png')]" />
            <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />

            <div className="relative z-10 flex flex-col justify-between h-full">
                <div className="h-10 w-10 rounded-xl bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform">
                    {React.cloneElement(icon, { size: 20, className: "text-white" })}
                </div>
                <div>
                    <p className="text-2xl font-black tracking-tighter drop-shadow-sm">{value}</p>
                    <p className="text-[9px] font-black uppercase tracking-[0.1em] opacity-80 leading-tight mt-1">{label}</p>
                </div>
            </div>
            {alert && <div className="absolute top-6 right-6 h-2 w-2 rounded-full bg-white animate-ping" />}
        </div>
    )
}

function WatchlistRow({ id, category, district, authority, received, due, status, alert }: any) {
    return (
        <TableRow className="border-none hover:bg-slate-50 transition-all group cursor-pointer font-sans">
            <TableCell className="px-8 py-6">
                <span className="text-[11px] font-mono font-black text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded-md">{id}</span>
                <p className="text-[8px] font-black text-slate-400 uppercase mt-2">{category}</p>
            </TableCell>
            <TableCell>
                <div className="flex items-center gap-3">
                    <MapPin size={14} className="text-slate-300" />
                    <div>
                        <p className="text-xs font-black text-slate-800 uppercase tracking-tight leading-none">{district}</p>
                        <p className="text-[9px] font-bold text-slate-400 mt-1 uppercase leading-none">{authority}</p>
                    </div>
                </div>
            </TableCell>
            <TableCell className="text-center font-bold text-slate-500 text-[10px]">{received}</TableCell>
            <TableCell className="text-center">
                <span className={`text-[11px] font-black ${alert ? 'text-red-600 underline decoration-red-100 decoration-2' : 'text-slate-400'}`}>
                    {due}
                </span>
            </TableCell>
            <TableCell className="text-center">
                <Badge className={`rounded-full px-3 py-0.5 text-[8px] font-black uppercase border-none shadow-none ${alert ? 'bg-red-100 text-red-700' : 'bg-blue-100 text-blue-700'
                    }`}>
                    {status}
                </Badge>
            </TableCell>
            <TableCell className="text-right px-8 opacity-0 group-hover:opacity-100 transition-all">
                <div className="flex justify-end gap-2">
                    <button className="p-2 bg-slate-50 text-slate-400 rounded-xl hover:bg-slate-900 hover:text-white transition-all"><FileText size={14} /></button>
                    <button className="p-2 bg-slate-50 text-slate-400 rounded-xl hover:bg-indigo-600 hover:text-white transition-all"><ArrowUpRight size={14} /></button>
                </div>
            </TableCell>
        </TableRow>
    )
}

function BreachItem({ id, days, district }: any) {
    return (
        <div className="p-4 bg-white/5 rounded-2xl border border-white/5 group hover:bg-white/10 transition-all">
            <div className="flex justify-between items-start mb-1">
                <span className="text-[10px] font-mono font-black text-blue-400">{id}</span>
                <span className="text-[8px] font-black text-red-400 uppercase tracking-widest">{days}</span>
            </div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">{district} Jurisdiction</p>
        </div>
    )
}