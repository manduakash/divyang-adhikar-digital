// app/dashboard/ccpd/fact-sheets/state/page.tsx
"use client";
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
    Table, TableBody, TableCell, TableHead, TableHeader, TableRow
} from "@/components/ui/table";
import {
    Globe, ShieldCheck, BadgeCheck, Landmark,
    Map, Activity, CheckCircle2, AlertTriangle,
    Download, Printer, FileText, Share2,
    Search, Filter, Sparkles, TrendingUp,
    History, Clock, Timer, Users,
    Navigation, Radio, Zap, Building2,
    GraduationCap, Gavel, Scale,
    Accessibility,
    Briefcase,
    MessageSquare,
    ArrowUpRight
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
    Select, SelectContent, SelectItem, SelectTrigger, SelectValue
} from "@/components/ui/select";

export default function StateFactSheet() {
    return (
        <div className="space-y-12 animate-in fade-in duration-1000 pb-20 font-sans selection:bg-indigo-100 bg-[#fbfcfd]">

            {/* PRIMARY HUB HEADER - CARBON FIBER TEXTURE */}
            <Card className="rounded-[48px] border-none bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 p-1 relative overflow-hidden shadow-2xl shadow-indigo-100">
                <div className="absolute inset-0 opacity-15 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
                <div className="bg-white rounded-[38px] p-10 relative z-10">

                    <div className="flex flex-col xl:flex-row justify-between items-start gap-12">

                        {/* SELECTABLE STATE HUB NODE */}
                        <div className="flex-1 space-y-8">
                            <div className="flex items-center gap-6">
                                <div className="h-20 w-20 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 rounded-3xl flex items-center justify-center text-white shadow-xl shadow-blue-500/20 transition-transform hover:rotate-6 duration-500">
                                    <Landmark size={38} />
                                </div>
                                <div className="space-y-3 flex-1">
                                    <p className="text-[10px] font-black uppercase text-indigo-600 tracking-[0.3em] ml-1 leading-none">State Statutory Node</p>
                                    <Select defaultValue="up">
                                        <SelectTrigger className="w-full h-16 py-6 border-2 border-slate-200 bg-slate-50 rounded-2xl px-6 text-2xl font-black text-slate-900 uppercase tracking-tighter shadow-inner focus:ring-2 focus:ring-indigo-500 transition-all">
                                            <SelectValue />
                                        </SelectTrigger>
                                        <SelectContent className="rounded-2xl border-2 border-slate-100 font-bold shadow-2xl">
                                            <SelectItem value="up">Uttar Pradesh Hub [SCPD-UP-001]</SelectItem>
                                            <SelectItem value="mh">Maharashtra Hub [SCPD-MH-002]</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <HeaderParam label="Aggregation Period" defaultValue="90" options={['Last 90 Days', 'Last 180 Days']} />
                                <HeaderParam label="Sector Focus" defaultValue="all" options={['All Statutory Sectors', 'Government', 'Private']} />
                                <HeaderParam label="Data Depth" defaultValue="dist" options={['District-wise Snapshot', 'Department-wise Snapshot']} />
                            </div>
                        </div>

                        {/* HUB METADATA CARD */}
                        <div className="bg-[#f8fafc] border-2 border-slate-200 rounded-[40px] p-8 min-w-[380px] shadow-xl relative overflow-hidden group hover:border-indigo-200 transition-all">
                            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/topography.png')]" />
                            <div className="relative z-10 flex flex-col justify-between h-full space-y-6">
                                <div className="flex justify-between items-start">
                                    <div className="space-y-1">
                                        <p className="text-[9px] font-black uppercase text-slate-400 tracking-widest">Last Data Sync Time</p>
                                        <p className="text-xl font-black text-slate-900 uppercase tracking-tighter">14 Oct 2024, 10:42 AM</p>
                                    </div>
                                    <Activity size={24} className="text-emerald-500 animate-pulse" />
                                </div>
                                <div className="flex gap-4">
                                    <Button variant="outline" className="flex-1 h-12 rounded-xl border-2 border-slate-200 font-black uppercase tracking-widest text-[9px] bg-white hover:bg-slate-50 shadow-sm"><Download size={16} className="text-green-600" /> Export XLS</Button>
                                    <Button className="flex-1 h-12 rounded-xl bg-slate-950 text-white font-black uppercase tracking-widest text-[9px] shadow-xl hover:bg-black transition-all group">
                                        <Printer size={16} /> Print Brief <ArrowUpRight size={14} className="ml-1 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Card>

            {/* STATE SNAPSHOT METRIC GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
                <MetricCard title="Demographic Reach" label="Total PwDs (State Total)" val="1.24M" icon={<Users />} gradient="from-blue-600 via-blue-700 to-indigo-800" />
                <MetricCard title="Inclusion Performance" label="State Compliance Rate" val="82.4%" icon={<ShieldCheck />} gradient="from-emerald-500 via-teal-600 to-green-700" success />
                <MetricCard title="Redressal Load" label="Total Grievances" val="124K" icon={<MessageSquare />} gradient="from-purple-600 via-indigo-700 to-purple-800" />
                <MetricCard title="Administrative Risk" label="Overdue Directions" val="09" icon={<AlertTriangle />} gradient="from-red-600 via-rose-700 to-red-800" alert />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                {/* EMPLOYMENT & VACANCY SNAPSHOT */}
                <StatTableCard title="State Employment snapshot" gradient="from-blue-600 via-indigo-600 to-blue-800" icon={<Briefcase />}>
                    <StatRow label="Total Employees (Returns)" val="8.4M" />
                    <StatRow label="PwD Employees" val="342K" />
                    <div className="h-[1px] w-full bg-slate-100 my-4" />
                    <StatRow label="Identified Vacancies" val="12,450" mono />
                    <StatRow label="Vacancies Pending" val="4,240" alert />
                    <div className="mt-8 p-6 bg-blue-50 rounded-[32px] border-2 border-blue-100 flex items-center justify-between shadow-inner">
                        <div className="space-y-1">
                            <p className="text-[10px] font-black text-blue-500 uppercase tracking-widest leading-none">Mandate Compliance</p>
                            <p className="text-3xl font-black text-blue-700 tracking-tighter">4.07%</p>
                        </div>
                        <BadgeCheck size={32} className="text-blue-300" />
                    </div>
                </StatTableCard>

                {/* BARRIER & INFRASTRUCTURE SNAPSHOT */}
                <StatTableCard title="Accessibility Compliance hub" gradient="from-emerald-600 via-teal-700 to-blue-700" icon={<Accessibility />}>
                    <div className="space-y-6">
                        <StatusNode label="Physical Accessibility Status" status="88% COMPLIANT" success />
                        <StatusNode label="Digital Accessibility Status" status="42% ACTION REQUIRED" alert />
                    </div>
                    <div className="h-[1px] w-full bg-slate-100 my-4" />
                    <div className="grid grid-cols-2 gap-8">
                        <StatRow label="Assessed Entities" val="45,210" />
                        <StatRow label="Overdue Remediation" val="1,840" alert />
                    </div>
                    <div className="p-6 bg-slate-50 rounded-[32px] border-2 border-slate-100 text-center mt-6">
                        <Sparkles className="text-indigo-400 mx-auto mb-2" size={24} />
                        <p className="text-[9px] font-black uppercase text-slate-400 tracking-widest leading-relaxed">
                            AI Analysis identified systemic <br /> <b>Digital barriers</b> in 14 Districts.
                        </p>
                    </div>
                </StatTableCard>

            </div>

            {/* STATEWIDE DISTRICT REGISTRY TABLE */}
            <Card className="rounded-[48px] border-2 border-slate-200 shadow-sm overflow-hidden bg-white min-h-[500px]">
                <CardHeader className="p-0">
                    <div className="p-10 bg-blue-500 text-white relative overflow-hidden">
                        {/* 4PX CARBON FIBER OVERLAY */}
                        <div className="absolute inset-0 opacity-20 pointer-events-none"
                            style={{ backgroundImage: `radial-gradient(white 2px, transparent 0)`, backgroundSize: '4px 4px' }} />

                        <div className="flex flex-col md:flex-row justify-between items-center gap-10 relative z-10">
                            <div className="flex items-center gap-5">
                                <div className="h-12 w-12 rounded-2xl bg-white/10 backdrop-blur-md border-2 border-white/20 flex items-center justify-center shadow-xl">
                                    <Map size={24} className="text-white" />
                                </div>
                                <div className="space-y-1">
                                    <CardTitle className="text-sm font-black uppercase tracking-[0.3em]">District Preparedness Snapshot</CardTitle>
                                    <p className="text-[10px] font-bold text-slate-200 uppercase tracking-widest leading-none">Regional readiness comparison for the selected State Node</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="p-0">
                    <Table>
                        <TableHeader className="bg-slate-50/80 font-sans border-b-2 border-slate-100">
                            <TableRow className="border-none">
                                <TableHead className="px-10 py-6 text-[9px] font-black uppercase tracking-widest text-slate-400">District ID & Name</TableHead>
                                <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400 text-center">Grievance SLA</TableHead>
                                <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400 text-center">Readiness Index</TableHead>
                                <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400 text-center">Shelters Mapped</TableHead>
                                <TableHead className="text-right px-10 text-[9px] font-black uppercase tracking-widest text-slate-400">Statutory Status</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody className="divide-y divide-slate-100 font-sans">
                            <DistrictRow id="LKO-UP-01" name="Lucknow Urban Hub" sla="98.2%" index="94.4%" shelters="48" success />
                            <DistrictRow id="VNS-UP-04" name="Varanasi Region" sla="84.0%" index="88.5%" shelters="32" warning />
                            <DistrictRow id="MRT-UP-12" name="Meerut Cluster" sla="62.5%" index="45.0%" shelters="12" alert />
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>

            {/* FOOTER SYNC STATUS */}
            <footer className="pt-12 border-t-2 border-slate-200 flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="flex items-center gap-4">
                    <BadgeCheck className="text-indigo-600 shadow-xl" size={24} />
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 leading-none uppercase">State Fact Sheet Node v5.2 • Aggregated Statewide Sync Verified</span>
                </div>
            </footer>
        </div>
    );
}

/* UI SUB-COMPONENTS */

function HeaderParam({ label, options, defaultValue }: any) {
    return (
        <div className="space-y-2">
            <label className="text-[9px] font-black uppercase text-slate-400 ml-1 tracking-widest leading-none">{label}</label>
            <Select defaultValue={defaultValue}>
                <SelectTrigger className="w-full h-12 py-6 border-2 border-slate-200 bg-slate-50 rounded-2xl px-6 font-bold text-slate-800 text-[10px] uppercase shadow-sm">
                    <SelectValue />
                </SelectTrigger>
                <SelectContent className="rounded-2xl border-2 border-slate-200 shadow-2xl">
                    {options.map((opt: string) => (
                        <SelectItem key={opt} value={opt.toLowerCase()} className="font-bold text-[10px] uppercase py-3">{opt}</SelectItem>
                    ))}
                </SelectContent>
            </Select>
        </div>
    )
}

function StatTableCard({ title, icon, gradient, children }: any) {
    return (
        <Card className="rounded-[44px] border-2 border-slate-200 bg-white shadow-sm overflow-hidden group hover:shadow-2xl transition-all duration-500 h-full flex flex-col">
            <CardHeader className={`p-8 bg-gradient-to-r ${gradient} text-white relative overflow-hidden`}>
                <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
                <div className="flex items-center gap-4 relative z-10">
                    <div className="h-10 w-10 rounded-2xl bg-white/20 backdrop-blur-md border-2 border-white/20 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500">
                        {icon}
                    </div>
                    <CardTitle className="text-[11px] font-black uppercase tracking-[0.3em] leading-none text-white">{title}</CardTitle>
                </div>
            </CardHeader>
            <CardContent className="p-10 flex-1 space-y-6 relative overflow-hidden">
                <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/topography.png')]" />
                <div className="relative z-10 space-y-5">
                    {children}
                </div>
            </CardContent>
        </Card>
    )
}

function MetricCard({ title, label, val, icon, gradient, alert, success }: any) {
    const statusColor = alert ? 'bg-red-600 text-white animate-pulse' : success ? 'bg-emerald-600 text-white shadow-emerald-200 shadow-lg' : 'bg-indigo-600 text-white';
    return (
        <div className={`group relative p-8 rounded-[44px] overflow-hidden transition-all duration-500 h-52 flex flex-col justify-between shadow-lg hover:shadow-2xl hover:-translate-y-2 bg-gradient-to-br ${gradient} text-white border-t-2 border-white/20`}>
            <div className="absolute inset-0 opacity-10 pointer-events-none"
                style={{ backgroundImage: `radial-gradient(black 2px, transparent 0)`, backgroundSize: '4px 4px' }} />

            <div className="relative z-10 flex flex-col justify-between h-full">
                <div className="h-12 w-12 rounded-2xl bg-white/20 backdrop-blur-md border-2 border-white/20 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500">
                    {React.cloneElement(icon, { size: 24, strokeWidth: 3 })}
                </div>
                <div className='mt-2'>
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] opacity-60 leading-none mb-2">{title}</p>
                    <p className="text-4xl font-black tracking-tighter drop-shadow-md leading-none">{val}</p>
                    <p className="text-[10px] font-black uppercase tracking-widest opacity-80 mt-3">{label}</p>
                </div>
            </div>
        </div>
    )
}

function StatRow({ label, val, alert, success, mono }: any) {
    const colorClass = alert ? 'text-red-600 underline decoration-red-200 decoration-2' : success ? 'text-emerald-600' : 'text-slate-900';
    return (
        <div className="flex justify-between items-end group/row cursor-default">
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest group-hover/row:text-orange-600 transition-colors">{label}</p>
            <p className={`text-2xl font-black tracking-tighter leading-none ${colorClass} ${mono ? 'font-mono text-sm' : ''}`}>{val}</p>
        </div>
    )
}

function StatusNode({ label, status, success, alert }: any) {
    const color = success ? 'bg-green-50 text-green-700' : alert ? 'bg-red-50 text-red-700' : 'bg-slate-200 text-slate-600';
    return (
        <div className="flex items-center justify-between p-5 rounded-[28px] bg-slate-50 border-2 border-slate-100 group transition-all hover:bg-white hover:border-indigo-200">
            <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest leading-none">{label}</p>
            <Badge className={`border-none font-black text-[9px] uppercase px-4 py-1.5 tracking-widest shadow-sm ${color}`}>
                {status}
            </Badge>
        </div>
    )
}

function DistrictRow({ id, name, sla, index, shelters, alert, success, warning }: any) {
    const statusColor = success ? 'bg-green-600 text-white shadow-green-200 shadow-lg' : alert ? 'bg-red-600 text-white animate-pulse shadow-red-200 shadow-lg' : 'bg-orange-500 text-white';
    return (
        <TableRow className="border-none hover:bg-slate-50 transition-all group cursor-default">
            <TableCell className="px-10 py-8">
                <div className="flex items-center gap-4">
                    <span className="text-[11px] font-mono font-black text-indigo-700 bg-indigo-50 px-2.5 py-0.5 rounded-md uppercase tracking-tighter">{id}</span>
                    <span className="text-sm font-black text-slate-900 uppercase tracking-tight leading-none">{name}</span>
                </div>
            </TableCell>
            <TableCell className="text-center font-mono font-black text-indigo-600 text-xs">{sla}</TableCell>
            <TableCell className="text-center font-mono font-black text-slate-900 text-xs">{index}</TableCell>
            <TableCell className="text-center font-bold text-slate-500 text-xs">{shelters}</TableCell>
            <TableCell className="text-right px-10">
                <Badge className={`rounded-full px-5 py-2 text-[8px] font-black uppercase border-none tracking-widest ${statusColor}`}>
                    {alert ? 'Critical Default' : success ? 'Adequate' : 'Attention Req.'}
                </Badge>
            </TableCell>
        </TableRow>
    )
}