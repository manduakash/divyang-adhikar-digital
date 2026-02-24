// app/dashboard/scpd/monitoring/page.tsx
"use client";
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
    BarChart3, Activity, Map, ShieldAlert,
    Search, Filter, Plus, FileText, CheckCircle2,
    Clock, AlertTriangle, Sparkles, Gavel,
    History, Download, ArrowUpRight, Landmark,
    LayoutGrid, ListChecks, ArrowLeft, Upload
} from "lucide-react";
import {
    Table, TableBody, TableCell, TableHead, TableHeader, TableRow
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

type ReviewPriority = 'CRITICAL' | 'HIGH' | 'STANDARD';

export default function MonitoringReviewPage() {
    const [activeTab, setActiveTab] = useState('register');

    return (
        <div className="space-y-10 animate-in fade-in duration-700 pb-20 font-sans">

            {/* 1. APEX MONITORING HEADER */}
            <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-6 mb-10 bg-white p-10 rounded-[40px] border border-slate-200 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 p-10 opacity-[0.03] pointer-events-none">
                    <BarChart3 size={180} className="text-indigo-600" />
                </div>
                <div className="space-y-2 relative z-10">
                    <div className="flex items-center gap-2 text-indigo-600 font-black uppercase text-[10px] tracking-[0.2em]">
                        <ArrowLeft size={14} /> Commission Hub / Monitoring
                    </div>
                    <h1 className="text-4xl font-black text-slate-900 tracking-tighter uppercase leading-none">Implementation Review</h1>
                    <p className="text-slate-500 font-medium italic">Periodic statutory review of PwD Act compliance across state districts.</p>
                </div>
                <div className="flex gap-4 relative z-10">
                    <Button variant="outline" className="h-14 px-8 rounded-2xl border-slate-200 font-black uppercase tracking-widest text-[10px] bg-white hover:bg-slate-50">
                        <History size={18} className="mr-2" /> Review Archive
                    </Button>
                    <Button className="h-14 px-10 rounded-2xl bg-indigo-900 text-white font-black uppercase tracking-widest text-[10px] shadow-2xl hover:bg-black transition-all gap-2">
                        <Plus size={18} /> New District Review
                    </Button>
                </div>
            </div>

            {/* 2. STATUTORY SUMMARY TILES (Inputs for Special Reports) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatTile label="Districts Reviewed" value="68/75" icon={<Map />} color="from-slate-700 via-slate-800 to-slate-900" />
                <StatTile label="Critical Gaps" value="14" icon={<AlertTriangle />} color="from-red-600 via-rose-700 to-red-800" alert />
                <StatTile label="Pending Action Points" value="84" icon={<ListChecks />} color="from-orange-500 via-amber-600 to-orange-700" />
                <div className="bg-white border-2 border-indigo-100 rounded-[32px] p-6 shadow-sm flex flex-col justify-center relative overflow-hidden group">
                    <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/topography.png')]" />
                    <p className="text-[9px] font-black uppercase tracking-widest text-indigo-400 mb-1">State Compliance Pulse</p>
                    <p className="text-4xl font-black text-indigo-700 tracking-tighter group-hover:scale-105 transition-transform">82.4%</p>
                    <div className="w-full h-1 bg-slate-100 rounded-full mt-4 overflow-hidden shadow-inner">
                        <div className="h-full bg-indigo-600" style={{ width: '82%' }} />
                    </div>
                </div>
            </div>

            <Tabs defaultValue="register" className="space-y-8">
                {/* 3. SUB-NAVIGATION & SEARCH */}
                <div className="flex justify-between items-center bg-white p-4 rounded-[32px] border border-slate-200 shadow-sm">
                    <TabsList className="bg-slate-100 p-1 rounded-2xl border border-slate-200 h-auto">
                        <TabsTrigger value="register" className="px-8 py-3 rounded-xl font-black text-[10px] uppercase tracking-widest data-[state=active]:bg-white">Monitoring Register</TabsTrigger>
                        <TabsTrigger value="tracker" className="px-8 py-3 rounded-xl font-black text-[10px] uppercase tracking-widest data-[state=active]:bg-indigo-600 data-[state=active]:text-white">Follow-up Tracker</TabsTrigger>
                    </TabsList>

                    <div className="flex gap-3">
                        <div className="relative group">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-300 group-focus-within:text-indigo-600" />
                            <input className="pl-10 pr-4 py-3 bg-slate-50 border-none rounded-2xl text-[10px] font-bold outline-none w-72 shadow-inner" placeholder="Filter district observations..." />
                        </div>
                        <Button variant="outline" size="icon" className="h-12 w-12 rounded-2xl border-slate-200 hover:bg-slate-50"><Filter size={18} /></Button>
                    </div>
                </div>

                {/* 4. DYNAMIC TABLES (Registry vs Tracker) */}
                <TabsContent value="register">
                    <Card className="rounded-[40px] border-slate-200 shadow-sm overflow-hidden bg-white">
                        <CardContent className="p-0">
                            <Table>
                                <TableHeader className="bg-slate-50/50">
                                    <TableRow className="border-slate-100">
                                        <TableHead className="px-8 py-6 text-[9px] font-black uppercase tracking-widest text-slate-400">Review Period</TableHead>
                                        <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400">District / Zone</TableHead>
                                        <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400">Nature of Issues</TableHead>
                                        <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400 text-center">Priority</TableHead>
                                        <TableHead className="text-right px-8"></TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody className="divide-y divide-slate-50">
                                    <ReviewRow
                                        period="Q3 FY 2024-25"
                                        district="Meerut Hub"
                                        issues={['Accessibility', 'Education']}
                                        priority="CRITICAL"
                                        obs="Systemic failure in Rule 15 implementation across Aided schools."
                                    />
                                    <ReviewRow
                                        period="Q3 FY 2024-25"
                                        district="Lucknow Urban"
                                        issues={['Grievances']}
                                        priority="STANDARD"
                                        obs="Response rates high, but digital portal accessibility needs audit."
                                    />
                                    <ReviewRow
                                        period="Q2 FY 2024-25"
                                        district="Varanasi Region"
                                        issues={['Employment', 'Accessibility']}
                                        priority="HIGH"
                                        obs="Reservation targets missed by 12% in Private sector. Directives issued."
                                    />
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="tracker">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* 5. ACTION POINT SIDEBAR (Mandated Action Points Proposed) */}
                        <div className="lg:col-span-1 space-y-6">
                            <Card className="rounded-[40px] border-none bg-slate-900 text-white p-8 shadow-2xl relative overflow-hidden group">
                                <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/circuit-board.png')]" />
                                <div className="relative z-10 space-y-8">
                                    <div className="flex items-center gap-3">
                                        <Sparkles className="text-purple-400" />
                                        <h3 className="text-sm font-black uppercase tracking-widest text-purple-400">AI Follow-up Assist</h3>
                                    </div>
                                    <div className="space-y-2">
                                        <p className="text-xl font-black uppercase tracking-tight">Generate Statutory Special Report</p>
                                        <p className="text-xs font-medium text-slate-400 leading-relaxed uppercase">Auto-compiles stagnant action points into a directive for the Cabinet Secretary.</p>
                                    </div>
                                    <Button className="w-full h-14 bg-white text-slate-900 hover:bg-indigo-50 rounded-2xl font-black uppercase tracking-widest text-[10px]">
                                        <FileText size={16} className="mr-2" /> Compile Special Report
                                    </Button>
                                </div>
                            </Card>

                            <Card className="rounded-[40px] border-slate-200 p-8 bg-white shadow-sm">
                                <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-6 border-b pb-4">State Directives</h4>
                                <div className="space-y-6">
                                    <ActionPoint item="Conduct District-wise e-Audit of Portals" status="Active" />
                                    <ActionPoint item="Mandatory Training for GROs" status="Pending" />
                                    <ActionPoint item="Audit Ramps in Medical Hubs" status="Closed" success />
                                </div>
                            </Card>
                        </div>

                        {/* 6. FOLLOW-UP REGISTER */}
                        <Card className="lg:col-span-2 rounded-[40px] border-slate-200 bg-white shadow-sm overflow-hidden">
                            <CardHeader className="p-8 border-b border-slate-50 flex justify-between items-center">
                                <CardTitle className="text-xs font-black uppercase tracking-widest text-slate-400">Action Point Tracker</CardTitle>
                                <Badge className="bg-indigo-50 text-indigo-700 border-none font-black text-[9px] uppercase px-3">Follow-up Mode</Badge>
                            </CardHeader>
                            <div className="p-0">
                                <Table>
                                    <TableBody>
                                        <TrackerRow point="Establishment of District PwD Help-desks" district="All 75 Districts" due="15 Nov 2024" status="In Progress" />
                                        <TrackerRow point="Appointment of Scribes for Board Exams" district="Meerut Cluster" due="30 Oct 2024" status="High Priority" alert />
                                        <TrackerRow point="Tagging of PwDs in Flood Zones" district="Coastal Hubs" due="12 Oct 2024" status="Overdue" alert />
                                    </TableBody>
                                </Table>
                            </div>
                        </Card>
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    );
}

/* UI SUB-COMPONENTS */

function StatTile({ label, value, icon, color, trend, alert }: any) {
    return (
        <div className={`group relative text-left p-7 rounded-[32px] overflow-hidden transition-all duration-500 h-44 flex flex-col justify-between shadow-md hover:shadow-xl hover:-translate-y-1 bg-gradient-to-br ${color} text-white border-t border-white/20`}>
            <div className="absolute inset-0 opacity-[0.08] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/topography.png')]" />
            <div className="relative z-10 flex flex-col justify-between h-full">
                <div className="h-10 w-10 rounded-xl bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform">
                    {React.cloneElement(icon, { size: 20, className: "text-white" })}
                </div>
                <div>
                    <p className="text-3xl font-black tracking-tighter drop-shadow-sm">{value}</p>
                    <p className="text-[9px] font-black uppercase tracking-[0.15em] opacity-80 mt-1">{label}</p>
                </div>
            </div>
            {alert && <div className="absolute top-6 right-6 h-2 w-2 rounded-full bg-white animate-ping" />}
        </div>
    )
}

function ReviewRow({ period, district, issues, priority, obs }: any) {
    const priorityColors: any = {
        CRITICAL: 'bg-red-100 text-red-700',
        HIGH: 'bg-orange-100 text-orange-700',
        STANDARD: 'bg-green-100 text-green-700'
    };
    return (
        <TableRow className="border-none hover:bg-slate-50 transition-all group cursor-pointer">
            <TableCell className="px-8 py-6">
                <span className="text-[11px] font-black text-slate-400 uppercase tracking-tighter">{period}</span>
            </TableCell>
            <TableCell>
                <div className="flex items-center gap-3">
                    <Map size={14} className="text-indigo-600" />
                    <span className="text-sm font-black text-slate-800 uppercase tracking-tight">{district}</span>
                </div>
            </TableCell>
            <TableCell>
                <div className="flex flex-wrap gap-2">
                    {issues.map((i: string) => (
                        <span key={i} className="text-[8px] font-black uppercase border border-slate-200 px-2 py-0.5 rounded-md text-slate-500">{i}</span>
                    ))}
                </div>
            </TableCell>
            <TableCell className="text-center">
                <Badge className={`rounded-full px-3 py-0.5 text-[8px] font-black uppercase border-none shadow-none ${priorityColors[priority]}`}>
                    {priority}
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

function TrackerRow({ point, district, due, status, alert }: any) {
    return (
        <TableRow className="border-none hover:bg-slate-50 group transition-all">
            <TableCell className="px-8 py-6">
                <p className="text-sm font-black text-slate-800 uppercase tracking-tight leading-snug">{point}</p>
                <p className="text-[9px] font-bold text-slate-400 uppercase mt-1">Due: {due}</p>
            </TableCell>
            <TableCell className="text-center font-bold text-slate-500 text-[10px] uppercase">{district}</TableCell>
            <TableCell className="text-right px-8">
                <Badge className={`rounded-full px-4 py-1 text-[8px] font-black uppercase border-none ${alert ? 'bg-red-600 text-white animate-pulse' : 'bg-slate-100 text-slate-600'}`}>
                    {status}
                </Badge>
            </TableCell>
        </TableRow>
    )
}

function ActionPoint({ item, status, success }: any) {
    return (
        <div className="flex justify-between items-center group">
            <div className="space-y-1">
                <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">{item}</p>
                <p className={`text-[10px] font-bold ${success ? 'text-green-600' : 'text-slate-900'}`}>{status}</p>
            </div>
            <div className={`h-1.5 w-1.5 rounded-full ${success ? 'bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.4)]' : 'bg-orange-500 shadow-[0_0_8px_rgba(245,158,11,0.4)]'}`} />
        </div>
    );
}