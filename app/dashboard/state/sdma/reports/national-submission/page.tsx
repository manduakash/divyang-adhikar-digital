// app/dashboard/sdma/outputs/national-submission/page.tsx
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
    Server, Database, Zap, Navigation,
    Home, Users, Gavel, Timer,
    Briefcase, GraduationCap,
    Paperclip,
    Save
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
    Select, SelectContent, SelectItem, SelectTrigger, SelectValue
} from "@/components/ui/select";

export default function NationalSubmissionHub() {
    return (
        <div className="space-y-12 animate-in fade-in duration-1000 pb-20 font-sans selection:bg-blue-100 bg-[#fbfcfd]">

            {/* 1. APEX NATIONAL SUBMISSION HEADER - GRADIENT + CARBON FIBER */}
            <Card className="rounded-[48px] border-2 border-slate-200 bg-white shadow-2xl relative overflow-hidden">

                <CardContent className="p-12 relative z-10 flex flex-col xl:flex-row justify-between items-center gap-12">
                    <div className="space-y-6 flex-1 text-center xl:text-left">
                        <div className="inline-flex items-center gap-3 bg-indigo-50 text-indigo-700 px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.3em] border-2 border-indigo-100 shadow-sm">
                            <Globe size={16} className="animate-spin-slow" /> National Bridge Node Active
                        </div>
                        <h1 className="text-6xl font-black text-slate-900 tracking-tighter uppercase leading-[0.9]">
                            NDMA / GoI <br /> <span className="text-indigo-600">Submission Hub</span>
                        </h1>
                        <p className="text-xl font-bold text-slate-500 italic uppercase tracking-tighter">Auto-generated subset of Annual Report • Data Sync Node v5.2</p>
                    </div>

                    <div className="flex flex-col gap-4 min-w-[320px]">
                        <Button className="h-20 px-10 rounded-[28px] bg-slate-950 text-white font-black uppercase tracking-[0.2em] text-xs shadow-2xl hover:bg-black transition-all gap-4 border-t border-white/10">
                            <Save size={24} className="text-orange-400" /> Forward to National Level
                        </Button>
                        <div className="flex gap-3">
                            <Button variant="outline" className="flex-1 h-14 rounded-2xl border-2 border-slate-200 font-black text-[10px] uppercase bg-white gap-2 shadow-sm hover:bg-slate-50"><Download size={18} className="text-green-600" /> Statutory XLS</Button>
                            <Button variant="outline" className="flex-1 h-14 rounded-2xl border-2 border-slate-200 font-black text-[10px] uppercase bg-white gap-2 shadow-sm hover:bg-slate-50"><Printer size={18} className="text-blue-600" /> Print Brief</Button>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* PARAMETRIC SELECTORS - VISIBLE 2PX BORDERS */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase text-slate-400 ml-1 tracking-widest leading-none">Statutory Submission Type</label>
                    <Select defaultValue="goi-v5">
                        <SelectTrigger className="w-full h-16 py-6 border-2 border-slate-200 bg-white rounded-2xl px-6 font-black text-slate-900 uppercase text-[10px] focus:ring-2 focus:ring-indigo-500">
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="rounded-2xl border-2 border-slate-200">
                            <SelectItem value="goi-v5" className="font-black uppercase py-4">NDMA / GoI Standard v5.2</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase text-slate-400 ml-1 tracking-widest leading-none">Aggregation Cycle</label>
                    <Select defaultValue="fy24">
                        <SelectTrigger className="w-full h-16 py-6 border-2 border-slate-200 bg-white rounded-2xl px-6 font-black text-slate-900 uppercase text-[10px] focus:ring-2 focus:ring-indigo-500">
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="rounded-2xl border-2 border-slate-200">
                            <SelectItem value="fy24" className="font-black uppercase py-4">Annual Preparedness Cycle 2024-25</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>

            <div className="space-y-20 flex flex-col gap-12">

                {/* STATE SUMMARY TABLES */}
                <ReportModule title="State Summary Tables" gradient="from-indigo-600 to-blue-700" icon={<Landmark />}>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
                        <StatTile label="PwDs Statewide" val="1.24M" color="text-indigo-600" />
                        <StatTile label="Risk Zones" val="112" color="text-blue-600" />
                        <StatTile label="Accessible Shelters" val="3,450" color="text-emerald-600" />
                        <StatTile label="Readiness Score" val="88.4%" color="text-purple-600" />
                    </div>
                    <div className="border-2 border-slate-100 rounded-[40px] overflow-hidden bg-white shadow-inner">
                        <Table>
                            <TableHeader className="bg-slate-50/80">
                                <TableRow className="border-b-2 border-slate-100">
                                    <TableHead className="px-10 py-6 text-[9px] font-black uppercase tracking-widest text-slate-400">Parameter Node</TableHead>
                                    <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400 text-center">Baseline (FY23)</TableHead>
                                    <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400 text-center">Current (FY24)</TableHead>
                                    <TableHead className="text-right px-10 text-[9px] font-black uppercase tracking-widest text-slate-400">Sync Status</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody className="divide-y divide-slate-100 font-sans">
                                <PlainRow label="Statewide Mapping Coverage" base="72%" curr="94%" success />
                                <PlainRow label="Early Warning Penetration" base="65%" curr="98%" success />
                                <PlainRow label="Shelter PwD Capacity" base="12K" curr="45K" success />
                            </TableBody>
                        </Table>
                    </div>
                </ReportModule>

                {/* DISTRICT PREPAREDNESS SNAPSHOT */}
                <ReportModule title="District Preparedness Snapshot" gradient="from-purple-600 to-indigo-700" icon={<Map />}>
                    <div className="border-2 border-slate-100 rounded-[40px] overflow-hidden bg-white">
                        <Table>
                            <TableHeader className="bg-slate-50/80 font-sans">
                                <TableRow className="border-b-2 border-slate-100">
                                    <TableHead className="px-10 py-6 text-[9px] font-black uppercase tracking-widest text-slate-400">District ID</TableHead>
                                    <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400">Name</TableHead>
                                    <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400 text-center">Readiness Index</TableHead>
                                    <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400 text-center">SOS Response</TableHead>
                                    <TableHead className="text-right px-10 text-[9px] font-black uppercase tracking-widest text-slate-400">Enforcement</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody className="divide-y divide-slate-100 font-sans">
                                <DistrictRow id="LKO-UP-01" name="Lucknow Urban Hub" index="98.2%" sos="99.4%" success />
                                <DistrictRow id="VNS-UP-04" name="Varanasi Region" index="91.5%" sos="92.0%" success />
                                <DistrictRow id="MRT-UP-12" name="Meerut Cluster Node" index="42.8%" sos="55.0%" alert />
                            </TableBody>
                        </Table>
                    </div>
                </ReportModule>

                {/* SHELTER ACCESSIBILITY SUMMARY */}
                <ReportModule title="Shelter Accessibility Summary" gradient="from-emerald-500 to-teal-700" icon={<Home />}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <ProgressNode label="Physical Structural Access" val={88} color="bg-emerald-500" />
                        <ProgressNode label="Power Backup (10kVA+) Readiness" val={92} color="bg-blue-500" />
                        <ProgressNode label="Sanitation & PwD Toilet Compliance" val={74} color="bg-indigo-500" />
                        <ProgressNode label="Digital Early Warning Linkage" val={42} color="bg-red-500" />
                    </div>
                </ReportModule>

                {/* KEY GAPS & ACTION PLAN */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <ActionCard title="Key Gaps" gradient="from-orange-400 to-red-600" icon={<AlertTriangle />}>
                        <div className="space-y-6">
                            <GapItem label="Transport Hubs" text="Shortfall of 124 specialized evacuation vans in semi-urban sectors." />
                            <GapItem label="Volunteer Pool" text="Low ratio of sign-language trained personnel at shelter nodes." />
                        </div>
                    </ActionCard>

                    <ActionCard title="Action Plan" gradient="from-emerald-600 to-blue-500" icon={<CheckCircle2 />}>
                        <div className="space-y-6">
                            <GapItem label="Remediation" text="Allocation of Section 44 budget for universal design retrofitting by Q1." />
                            <GapItem label="Technology" text="Migration of all warning nodes to monospaced high-contrast alerts." />
                        </div>
                    </ActionCard>
                </div>

            </div>

            {/* FOOTER STATUTORY STRIP */}
            <footer className="pt-12 border-t-2 border-slate-200 flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="flex items-center gap-4">
                    <BadgeCheck className="text-indigo-600" size={24} />
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 leading-none">National Submission Node v5.2 • Consolidated NDMA / GoI format</span>
                </div>
            </footer>
        </div>
    );
}

/* UI SUB-COMPONENTS */

function ReportModule({ title, gradient, icon, children }: any) {
    return (
        <Card className="rounded-[44px] border-2 border-slate-200 bg-white shadow-xl overflow-hidden group">
            <CardHeader className={`p-8 bg-gradient-to-r ${gradient} text-white relative overflow-hidden`}>
                <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
                <div className="flex items-center gap-4 relative z-10">
                    <div className="h-10 w-10 rounded-2xl bg-white/20 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        {icon}
                    </div>
                    <CardTitle className="text-[11px] font-black uppercase tracking-[0.3em] leading-none">{title}</CardTitle>
                </div>
            </CardHeader>
            <CardContent className="p-10 relative">
                <div className="absolute inset-0 opacity-[0.01] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/topography.png')]" />
                <div className="relative z-10">{children}</div>
            </CardContent>
        </Card>
    )
}

function StatTile({ label, val, color }: any) {
    return (
        <div className="p-8 bg-[#f8fafc] rounded-[32px] border-2 border-slate-100 text-center relative overflow-hidden group hover:bg-white transition-all shadow-sm">
            <div className="absolute inset-0 opacity-[0.06] pointer-events-none"
                style={{ backgroundImage: `radial-gradient(black 2px, transparent 0)`, backgroundSize: '4px 4px' }} />
            <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest relative z-10">{label}</p>
            <p className={`text-4xl font-black ${color} tracking-tighter relative z-10`}>{val}</p>
        </div>
    )
}

function PlainRow({ label, base, curr, success }: any) {
    return (
        <TableRow className="border-none hover:bg-slate-50 transition-all cursor-default group">
            <TableCell className="px-10 py-6">
                <p className="text-xs font-black text-slate-800 uppercase tracking-tight">{label}</p>
            </TableCell>
            <TableCell className="text-center font-mono font-bold text-slate-400 text-xs">{base}</TableCell>
            <TableCell className="text-center font-mono font-black text-slate-900 text-xs">{curr}</TableCell>
            <TableCell className="text-right px-10">
                <div className="flex items-center justify-end gap-2">
                    <CheckCircle2 size={14} className={success ? 'text-green-500' : 'text-slate-200'} />
                    <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">State Synced</span>
                </div>
            </TableCell>
        </TableRow>
    )
}

function DistrictRow({ id, name, index, sos, success, alert }: any) {
    const statusColor = success ? 'bg-green-600 text-white' : alert ? 'bg-red-600 text-white animate-pulse' : 'bg-orange-500 text-white';
    return (
        <TableRow className="border-none hover:bg-slate-50 transition-all cursor-default">
            <TableCell className="px-10 py-6 font-mono font-black text-blue-600 text-[10px] uppercase">{id}</TableCell>
            <TableCell className="text-xs font-black text-slate-900 uppercase tracking-tight">{name}</TableCell>
            <TableCell className="text-center font-mono font-bold text-slate-600 text-xs">{index}</TableCell>
            <TableCell className="text-center font-mono font-bold text-slate-600 text-xs">{sos}</TableCell>
            <TableCell className="text-right px-10">
                <Badge className={`rounded-full px-4 py-1.5 text-[8px] font-black uppercase border-none shadow-lg ${statusColor}`}>
                    {success ? 'Adequate' : alert ? 'Critical' : 'Pending'}
                </Badge>
            </TableCell>
        </TableRow>
    )
}

function ProgressNode({ label, val, color }: any) {
    return (
        <div className="p-6 bg-[#f8fafc] rounded-[32px] border-2 border-slate-100 space-y-4 shadow-sm group hover:bg-white transition-all">
            <div className="flex justify-between items-center relative">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{label}</p>
                <span className="text-xs font-black text-slate-900">{val}%</span>
            </div>
            <div className="h-1.5 w-full bg-slate-200 rounded-full overflow-hidden">
                <div className={`h-full ${color} shadow-[0_0_8px_rgba(0,0,0,0.1)] transition-all duration-1000`} style={{ width: `${val}%` }} />
            </div>
        </div>
    )
}

function ActionCard({ title, gradient, icon, children }: any) {
    return (
        <Card className="rounded-[40px] border-2 border-slate-200 bg-white shadow-xl overflow-hidden group h-full">
            <div className={`p-8 border-b-2 border-slate-100 bg-gradient-to-r ${gradient} text-white flex items-center gap-4 relative overflow-hidden`}>
                <div className="absolute inset-0 opacity-20 pointer-events-none"
                    style={{ backgroundImage: `radial-gradient(black 2px, transparent 0)`, backgroundSize: '4px 4px' }} />
                <div className="h-10 w-10 rounded-2xl bg-white/20 flex items-center justify-center shadow-lg relative z-10">{icon}</div>
                <h3 className="text-[11px] font-black uppercase tracking-[0.3em] relative z-10 leading-none">{title}</h3>
            </div>
            <div className="p-10 flex-1 relative">{children}</div>
        </Card>
    )
}

function GapItem({ label, text }: any) {
    return (
        <div className="space-y-1">
            <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">{label}</p>
            <p className="text-sm font-black text-slate-900 uppercase tracking-tight leading-relaxed italic border-l-2 border-slate-100 pl-4">{text}</p>
        </div>
    )
}