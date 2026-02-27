// app/dashboard/sdma/reports/annual-preparedness/page.tsx
"use client";
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
    Table, TableBody, TableCell, TableHead, TableHeader, TableRow
} from "@/components/ui/table";
import {
    FileText, ShieldCheck, Landmark, Printer,
    Download, Globe, Activity, CheckCircle2,
    AlertTriangle, History, Navigation, Scale,
    Sparkles, BadgeCheck, Gavel, Users,
    Map, Siren, BookOpen, Search, Filter,
    TrendingUp, FilePlus, Share2,
    Layers,
    ShieldAlert
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
    Select, SelectContent, SelectItem, SelectTrigger, SelectValue
} from "@/components/ui/select";
import { Textarea } from '@/components/ui/textarea';

export default function AnnualPreparednessReport() {
    return (
        <div className="min-h-screen p-8 space-y-12 animate-in fade-in duration-1000 font-sans selection:bg-orange-100">

            {/* APEX DOCUMENT HEADER - GRADIENT + CARBON FIBER */}
            <Card className="rounded-[48px] border-2 border-slate-200 bg-white shadow-2xl relative overflow-hidden">

                <CardContent className="p-12 relative z-10 flex flex-col xl:flex-row justify-between items-center gap-10">
                    <div className="space-y-6 flex-1 text-center xl:text-left">
                        <div className="inline-flex items-center gap-3 bg-blue-50 text-blue-700 px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.3em] border-2 border-blue-100">
                            <BadgeCheck size={16} /> Statutory Annual Release
                        </div>
                        <h1 className="text-6xl font-black text-slate-900 tracking-tighter uppercase leading-[0.9]">
                            Annual Disaster <br /> <span className="">Preparedness Report</span>
                        </h1>
                        <p className="text-xl font-bold text-slate-500 italic uppercase tracking-tighter">Reporting Period: FY 2024-25 • State Level PwD Integration</p>
                    </div>

                    <div className="flex flex-col gap-4 min-w-[300px]">
                        <Button className="h-20 px-10 rounded-[28px] bg-slate-900 text-white font-black uppercase tracking-[0.2em] text-xs shadow-2xl hover:bg-black transition-all gap-4">
                            <Printer size={24} /> Print Certified Hub Hub
                        </Button>
                        <div className="flex gap-3">
                            <Button variant="outline" className="flex-1 h-14 rounded-2xl border-2 border-slate-200 font-black text-[10px] uppercase bg-white gap-2 shadow-sm"><Download size={18} className="text-blue-600" /> Export XLS</Button>
                            <Button variant="outline" className="flex-1 h-14 rounded-2xl border-2 border-slate-200 font-black text-[10px] uppercase bg-white gap-2 shadow-sm"><Share2 size={18} className="text-purple-600" /> State Share</Button>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* PARAMETRIC SELECTORS - VISIBLE BORDERS */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase text-slate-400 ml-1 tracking-widest">Report Subject Node</label>
                    <Select defaultValue="consolidated">
                        <SelectTrigger className="w-full h-16 py-6 border-2 border-slate-200 bg-white rounded-2xl px-6 font-black text-slate-900 uppercase text-[10px]">
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="rounded-2xl border-2 border-slate-200">
                            <SelectItem value="consolidated">Consolidated Statewide Preparedness</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase text-slate-400 ml-1 tracking-widest">Administrative Context</label>
                    <Select defaultValue="all">
                        <SelectTrigger className="w-full h-16 py-6 border-2 border-slate-200 bg-white rounded-2xl px-6 font-black text-slate-900 uppercase text-[10px]">
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="rounded-2xl border-2 border-slate-200">
                            <SelectItem value="all">All Affected District Hubs</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>

            <div className="space-y-20 gap-4 flex flex-col">

                {/* EXECUTIVE SUMMARY CHAPTER */}
                <ReportChapter title="Executive Summary" gradient="from-indigo-600 to-blue-700" icon={<BookOpen />}>
                    <div className="space-y-8">
                        <Textarea
                            readOnly
                            className="w-full min-h-[200px] py-8 px-10 border-2 border-slate-200 rounded-[40px] bg-slate-50 text-lg font-medium italic text-slate-700 leading-relaxed shadow-inner"
                            defaultValue="The state has achieved a significant milestone in PwD-inclusive disaster management for FY 2024-25. Aggregated data from 75 District DDMA nodes indicates an 88.4% preparedness index, with focus areas shifted toward digital outreach and accessible shelter verification. This report documents the implementation lifecycle of statutory emergency protocols."
                        />
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                            <StatMetric label="Districts Synced" val="75/75" color="text-blue-600" />
                            <StatMetric label="State Readiness" val="88.4%" color="text-indigo-600" />
                            <StatMetric label="SOS Resolved" val="94.2%" color="text-emerald-600" />
                            <StatMetric label="Pending Remediation" val="124" color="text-red-600" />
                        </div>
                    </div>
                </ReportChapter>

                {/* LEGAL & POLICY FRAMEWORK */}
                <ReportChapter title="Legal & Policy Framework" gradient="from-purple-600 to-indigo-700" icon={<Scale />}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <PolicyNode label="PwD Act 2016" desc="Section 8 Mandates for State Safety & Protection" />
                        <PolicyNode label="PwD Rules 2017" desc="Rule 15 Protocols for Emergency Accessibility" />
                        <PolicyNode label="NDMA Guidelines" desc="National Framework for PwD-Inclusive Response" />
                        <PolicyNode label="State Disaster Policy" desc="Regional Adaptation for Vulnerable Groups" />
                    </div>
                </ReportChapter>

                {/* STATE RISK PROFILE */}
                <ReportChapter title="State Risk Profile (PwD-focused)" gradient="from-orange-600 to-red-700" icon={<ShieldAlert />}>
                    <div className="space-y-8">
                        <div className="p-8 bg-orange-50 border-2 border-orange-100 rounded-[40px] flex items-center justify-between">
                            <div className="space-y-2">
                                <p className="text-[10px] font-black text-orange-600 uppercase tracking-widest">Highest Vulnerability Zone</p>
                                <p className="text-3xl font-black text-slate-900 uppercase tracking-tighter leading-none">Coastal Delta Region</p>
                            </div>
                            <Badge className="bg-red-600 text-white font-black px-4 py-2 border-none shadow-lg animate-pulse uppercase">Critical Risk</Badge>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <MetricCard label="PwDs in Risk Zones" val="124K" icon={<Users />} />
                            <MetricCard label="Urban Risk Nodes" val="112" icon={<Activity />} />
                            <MetricCard label="Critical Evac Load" val="18.2K" icon={<Siren />} />
                        </div>
                    </div>
                </ReportChapter>

                {/* DISTRICT PREPAREDNESS TABLES */}
                <ReportChapter title="District-wise Preparedness Tables (Auto)" gradient="from-blue-600 to-indigo-600" icon={<Landmark />}>
                    <div className="border-2 border-slate-200 rounded-[40px] overflow-hidden bg-white shadow-inner">
                        <Table>
                            <TableHeader className="bg-slate-50/80">
                                <TableRow className="border-b-2 border-slate-100">
                                    <TableHead className="px-10 py-6 text-[9px] font-black uppercase tracking-widest text-slate-400">District Node</TableHead>
                                    <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400 text-center">Shelter Accessibility</TableHead>
                                    <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400 text-center">Transport Readiness</TableHead>
                                    <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400 text-center">Early Warning Reach</TableHead>
                                    <TableHead className="text-right px-10 text-[9px] font-black uppercase tracking-widest text-slate-400">Overall Status</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody className="divide-y divide-slate-100">
                                <DistrictRow name="Lucknow Urban Hub" shelter="98%" transport="VERIFIED" warning="99%" status="ADEQUATE" success />
                                <DistrictRow name="Varanasi Region" shelter="91%" transport="PARTIAL" warning="94%" status="ADEQUATE" success />
                                <DistrictRow name="Meerut Cluster" shelter="42%" transport="NO" warning="55%" status="CRITICAL" alert />
                            </TableBody>
                        </Table>
                    </div>
                </ReportChapter>

                {/* QUALITATIVE ANALYSIS MODULES */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <QualitativeCard title="Gaps & Challenges" gradient="from-red-600 to-rose-700" icon={<AlertTriangle />}>
                        <p className="text-sm font-black text-slate-800 uppercase leading-relaxed">
                            Systemic shortfall in monospaced braille evacuation maps identified across 08 district hubs. Digital gateway lag detected during high-load periods.
                        </p>
                    </QualitativeCard>
                    <QualitativeCard title="Recommendations" gradient="from-emerald-600 to-teal-700" icon={<CheckCircle2 />}>
                        <p className="text-sm font-black text-slate-800 uppercase leading-relaxed">
                            Mandatory 10kVA solar backup for all Category-A shelters by Q1. Expansion of volunteer training modules to include sensory support protocols.
                        </p>
                    </QualitativeCard>
                </div>

            </div>

            {/* ANNEXURES HUB */}
            <div className="pt-20 border-t-2 border-slate-200">
                <div className="flex items-center gap-3 mb-10">
                    <div className="h-10 w-10 bg-slate-900 rounded-xl flex items-center justify-center text-orange-400 shadow-xl"><Layers size={20} /></div>
                    <h2 className="text-[11px] font-black uppercase tracking-[0.3em] text-slate-500">Annexures (Auto-generated DDMA Tables)</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <AnnexureNode label="District_Readiness_Ledger.xls" type="Logistics" />
                    <AnnexureNode label="Shelter_Audit_Repository.pdf" type="Structural" />
                    <AnnexureNode label="Post_Disaster_Findings_Master.xls" type="Evaluation" />
                </div>
            </div>

        </div>
    );
}

/* UI SUB-COMPONENTS */

function ReportChapter({ title, gradient, icon, children }: any) {
    return (
        <Card className="rounded-[44px] border-2 border-slate-200 bg-white shadow-sm overflow-hidden group">
            <CardHeader className={`p-8 bg-gradient-to-r ${gradient} text-white relative overflow-hidden`}>
                <div className="absolute inset-0 opacity-20 pointer-events-none"
                    style={{ backgroundImage: `radial-gradient(black 2px, transparent 0)`, backgroundSize: '4px 4px' }} />
                <div className="flex items-center gap-4 relative z-10">
                    <div className="h-10 w-10 rounded-2xl bg-white/20 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        {icon}
                    </div>
                    <CardTitle className="text-[11px] font-black uppercase tracking-[0.3em] leading-none">{title}</CardTitle>
                </div>
            </CardHeader>
            <CardContent className="p-10 relative">
                <div className="relative z-10">{children}</div>
            </CardContent>
        </Card>
    )
}

function StatMetric({ label, val, color, success, alert }: any) {
    return (
        <div className="p-6 bg-slate-50 rounded-[32px] border-2 border-slate-100 text-center space-y-2 group hover:bg-white transition-all shadow-sm">

            <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest relative z-10">{label}</p>
            <p className={`text-3xl font-black ${color} tracking-tighter relative z-10`}>{val}</p>
        </div>
    )
}

function PolicyNode({ label, desc }: any) {
    return (
        <div className="p-6 rounded-[32px] border-2 border-slate-100 bg-white group hover:border-purple-200 transition-all flex items-center gap-6 shadow-sm">
            <div className="h-12 w-12 rounded-2xl bg-purple-50 flex items-center justify-center text-purple-600 border-2 border-purple-100 group-hover:bg-purple-600 group-hover:text-white transition-all">
                <ShieldCheck size={24} />
            </div>
            <div className="space-y-1">
                <p className="text-sm font-black text-slate-900 uppercase tracking-tight">{label}</p>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{desc}</p>
            </div>
        </div>
    )
}

function MetricCard({ label, val, icon }: any) {
    return (
        <div className="flex justify-between items-center p-6 bg-slate-50 rounded-[32px] border-2 border-slate-100 group hover:bg-white transition-all">
            <div className="flex items-center gap-4">
                <div className="text-slate-300 group-hover:text-orange-600 transition-colors">{icon}</div>
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{label}</span>
            </div>
            <span className="text-xl font-black text-slate-900">{val}</span>
        </div>
    )
}

function DistrictRow({ name, shelter, transport, warning, status, success, alert }: any) {
    const statusColor = success ? 'bg-green-600 text-white' : alert ? 'bg-red-600 text-white animate-pulse' : 'bg-orange-500 text-white';
    return (
        <TableRow className="border-none hover:bg-slate-50 transition-all cursor-default group">
            <TableCell className="px-10 py-6">
                <div className="flex items-center gap-3">
                    <div className={`h-1.5 w-1.5 rounded-full ${success ? 'bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.4)]' : 'bg-red-500'}`} />
                    <span className="text-xs font-black text-slate-800 uppercase tracking-tight leading-none">{name}</span>
                </div>
            </TableCell>
            <TableCell className="text-center font-mono font-black text-blue-600 text-xs">{shelter}</TableCell>
            <TableCell className="text-center">
                <Badge className="bg-slate-100 text-slate-600 border-2 border-slate-200 font-black text-[8px] px-2">{transport}</Badge>
            </TableCell>
            <TableCell className="text-center font-mono font-black text-indigo-600 text-xs">{warning}</TableCell>
            <TableCell className="text-right px-10">
                <Badge className={`rounded-full px-4 py-1.5 text-[8px] font-black uppercase border-none shadow-lg ${statusColor}`}>
                    {status}
                </Badge>
            </TableCell>
        </TableRow>
    )
}

function QualitativeCard({ title, gradient, icon, children }: any) {
    return (
        <Card className="rounded-[40px] border-2 border-slate-200 bg-white shadow-xl overflow-hidden h-full flex flex-col group">
            <div className={`p-6 border-b-2 border-slate-100 bg-gradient-to-r ${gradient} text-white flex items-center gap-4 relative overflow-hidden`}>
                <div className="absolute inset-0 opacity-20 pointer-events-none"
                    style={{ backgroundImage: `radial-gradient(black 2px, transparent 0)`, backgroundSize: '8px 8px' }} />
                <div className="h-8 w-8 rounded-xl bg-white/20 flex items-center justify-center shadow-lg relative z-10">{icon}</div>
                <h3 className="text-[10px] font-black uppercase tracking-[0.2em] relative z-10">{title}</h3>
            </div>
            <div className="p-8 flex-1 relative">
                <div className="absolute inset-0 opacity-[0.01] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
                <div className="relative z-10 italic">{children}</div>
            </div>
        </Card>
    )
}

function AnnexureNode({ label, type }: any) {
    return (
        <div className="p-5 bg-white border-2 border-slate-200 rounded-3xl hover:shadow-xl hover:border-blue-200 transition-all cursor-pointer group flex items-center justify-between">
            <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-xl bg-slate-50 flex items-center justify-center text-cyan-500 group-hover:text-blue-600 group-hover:bg-blue-50 transition-all shadow-inner border border-slate-100">
                    <FileText size={20} />
                </div>
                <div>
                    <p className="text-[10px] font-black text-slate-900 uppercase tracking-tighter">{label}</p>
                    <p className="text-[8px] font-bold text-slate-400 uppercase tracking-widest">{type}</p>
                </div>
            </div>
            <Download size={14} className="text-slate-300 group-hover:text-blue-600" />
        </div>
    )
}