// app/dashboard/scpd/oversight/accessibility/page.tsx
"use client";
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
    Accessibility, Globe, ShieldCheck, Search,
    Filter, Printer, FileSpreadsheet, ArrowUpRight,
    Camera, Link as LinkIcon, FileText, CheckCircle2,
    AlertTriangle, History, Landmark, Timer,
    MapPin, BadgeCheck, Download, Sparkles,
    Eye, Zap, Activity
} from "lucide-react";
import {
    Table, TableBody, TableCell, TableHead, TableHeader, TableRow
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

export default function AccessibilityOversightHub() {

    // Section A3.14 statewide Aggregation Data
    const stateAuditStats = {
        totalEntities: "45,210",
        physicallyCompliant: "32,100",
        digitallyCompliant: "12,450",
        overdueRemediation: "1,840"
    };

    return (
        <div className="space-y-10 animate-in fade-in duration-700 pb-20 font-sans">

            {/* 1. APEX ADMINISTRATIVE HEADER */}
            <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-6 mb-10 bg-white p-10 rounded-[40px] border border-slate-200 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 p-10 opacity-[0.03] pointer-events-none">
                    <Accessibility size={180} className="text-indigo-600" />
                </div>
                <div className="space-y-2 relative z-10">
                    <div className="flex items-center gap-2 text-indigo-600 font-black uppercase text-[10px] tracking-[0.2em]">
                        <BadgeCheck size={14} /> Commission Hub / A3.14 Accessibility Oversight
                    </div>
                    <h1 className="text-4xl font-black text-slate-900 tracking-tighter uppercase leading-none">Accessibility Master Ledger</h1>
                    <p className="text-slate-500 font-medium italic">Statewide monitor of Sections 44, 45 & 46: Physical and Digital Infrastructure.</p>
                </div>
                <div className="flex gap-4 relative z-10">
                    <Button variant="outline" className="h-16 px-8 rounded-3xl border-slate-200 font-black uppercase tracking-widest text-[10px] bg-white hover:bg-slate-50 shadow-xl">
                        <FileSpreadsheet size={18} className="mr-2 text-green-600" /> State XLS Export
                    </Button>
                    <Button className="h-16 px-10 rounded-3xl bg-indigo-900 text-white font-black uppercase tracking-widest text-[10px] shadow-2xl hover:bg-black transition-all gap-2 group">
                        <ShieldCheck size={18} /> Statewide Access Audit
                    </Button>
                </div>
            </div>

            {/* 2. STATUTORY KPI TILES (Patterned Gradients) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatTile label="Total Entities Monitored" value={stateAuditStats.totalEntities} icon={<Landmark />} color="from-slate-700 via-slate-800 to-slate-900" />
                <StatTile label="Physically Accessible" value={stateAuditStats.physicallyCompliant} icon={<Accessibility />} color="from-emerald-500 via-teal-600 to-green-700" />
                <StatTile label="Digitally Accessible" value={stateAuditStats.digitallyCompliant} icon={<Globe />} color="from-blue-600 via-blue-700 to-indigo-900" />
                <StatTile label="SLA Deadline Breached" value={stateAuditStats.overdueRemediation} icon={<AlertTriangle />} color="from-red-600 via-rose-700 to-red-800" alert />
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-start">

                {/* 3. ACCESSIBILITY REGISTRY (Section A3.14 Data Captured) */}
                <div className="xl:col-span-12">
                    <Card className="rounded-[40px] border-slate-200 shadow-sm overflow-hidden bg-white min-h-[700px]">
                        <CardHeader className="p-8 border-b border-slate-50 bg-slate-50/30 flex flex-row justify-between items-center">
                            <div className="flex gap-4 items-center">
                                <CardTitle className="text-sm font-black uppercase tracking-widest text-slate-400 leading-none">A3.14 Statewide Accessibility Registry</CardTitle>
                                <Badge className="bg-indigo-50 text-indigo-700 border-none text-[8px] font-black uppercase tracking-widest px-3">Rule 15 Compliance</Badge>
                            </div>
                            <div className="flex gap-4">
                                <div className="relative group">
                                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-300 group-focus-within:text-indigo-600" />
                                    <input className="pl-11 pr-4 py-3 bg-white border border-slate-200 rounded-2xl text-[10px] font-bold outline-none w-80 shadow-inner focus:ring-2 focus:ring-indigo-100" placeholder="Search Entity, URL or District..." />
                                </div>
                                <Button variant="outline" className="rounded-2xl border-slate-200 font-black uppercase text-[10px] tracking-widest px-6 h-12 bg-white"><Filter size={16} className="mr-2" /> Audit Type</Button>
                            </div>
                        </CardHeader>
                        <CardContent className="p-0">
                            <Table>
                                <TableHeader className="bg-white">
                                    <TableRow className="border-slate-100">
                                        <TableHead className="px-8 py-6 text-[9px] font-black uppercase tracking-widest text-slate-400">Entity & District</TableHead>
                                        <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400 text-center">Physical Status</TableHead>
                                        <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400 text-center">Digital Status</TableHead>
                                        <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400 text-center">Audit Timeline</TableHead>
                                        <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400 text-center">Evidence Vault</TableHead>
                                        <TableHead className="text-right px-8 text-[9px] font-black uppercase tracking-widest text-slate-400">Compliance Due</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody className="divide-y divide-slate-50">
                                    <AccessOversightRow
                                        name="Regional Transport Office"
                                        district="Lucknow"
                                        phys="COMPLIANT"
                                        digi="PARTIAL"
                                        lastAudit="12 Oct 2024"
                                        evidence={['photo', 'report']}
                                        due="Verified"
                                        success
                                    />
                                    <AccessOversightRow
                                        name="Nagar Nigam Head Office"
                                        district="Meerut"
                                        phys="NON-COMP"
                                        digi="NON-COMP"
                                        lastAudit="02 Sep 2024"
                                        evidence={['report']}
                                        due="30 Oct 2024"
                                        alert
                                    />
                                    <AccessOversightRow
                                        name="District Public Library"
                                        district="Varanasi"
                                        phys="PARTIAL"
                                        digi="COMPLIANT"
                                        lastAudit="20 Sep 2024"
                                        evidence={['photo', 'url']}
                                        due="15 Nov 2024"
                                        warning
                                    />
                                    <AccessOversightRow
                                        name="State Power Corp Hub"
                                        district="Ghaziabad"
                                        phys="COMPLIANT"
                                        digi="NON-COMP"
                                        lastAudit="10 Oct 2024"
                                        evidence={['photo', 'url', 'report']}
                                        due="05 Nov 2024"
                                        warning
                                    />
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>
                </div>

            </div>
        </div>
    );
}

/* UI SUB-COMPONENTS */

function StatTile({ label, value, icon, color, trend, alert }: any) {
    return (
        <div className={`group relative text-left p-7 rounded-[32px] overflow-hidden transition-all duration-500 h-44 flex flex-col justify-between shadow-md hover:shadow-xl hover:-translate-y-1 bg-gradient-to-br ${color} text-white border-t border-white/20`}>
            {/* Pattern Overlays */}
            <div className="absolute inset-0 opacity-[0.08] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/topography.png')]" />
            <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />

            <div className="relative z-10 flex flex-col justify-between h-full">
                <div className="h-10 w-10 rounded-xl bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform">
                    {React.cloneElement(icon, { size: 18, className: "text-white drop-shadow-md" })}
                </div>
                <div>
                    <p className="text-2xl font-black tracking-tighter drop-shadow-sm">{value}</p>
                    <p className="text-[9px] font-black uppercase tracking-[0.1em] opacity-80 leading-tight mt-1">{label}</p>
                </div>
            </div>
            {alert && <div className="absolute top-4 right-4 h-1.5 w-1.5 rounded-full bg-white animate-ping" />}
        </div>
    )
}

function AccessOversightRow({ name, district, phys, digi, lastAudit, evidence, due, alert, warning, success }: any) {
    const statusColor = alert ? 'bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.4)]' : warning ? 'bg-orange-500' : 'bg-green-500';

    return (
        <TableRow className="border-none hover:bg-slate-50 transition-all group cursor-pointer font-sans">
            <TableCell className="px-8 py-6">
                <div className="flex items-center gap-3">
                    <div className={`h-1.5 w-1.5 rounded-full ${statusColor}`} />
                    <div>
                        <p className="text-sm font-black text-slate-800 uppercase tracking-tight leading-none">{name}</p>
                        <p className="text-[9px] font-bold text-slate-400 mt-1.5 uppercase tracking-tighter italic">District: {district}</p>
                    </div>
                </div>
            </TableCell>
            <TableCell className="text-center">
                <AccessBadge label={phys} variant={phys === 'COMPLIANT' ? 'success' : phys === 'PARTIAL' ? 'warning' : 'danger'} />
            </TableCell>
            <TableCell className="text-center">
                <AccessBadge label={digi} variant={digi === 'COMPLIANT' ? 'success' : digi === 'PARTIAL' ? 'warning' : 'danger'} />
            </TableCell>
            <TableCell className="text-center">
                <p className="text-[10px] font-bold text-slate-500 uppercase">{lastAudit}</p>
                <p className="text-[7px] font-black text-slate-300 mt-1 uppercase tracking-widest">Last Assessment</p>
            </TableCell>
            <TableCell>
                <div className="flex justify-center gap-2">
                    {evidence.map((type: string) => (
                        <div key={type} className="h-8 w-8 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 hover:bg-indigo-900 hover:text-white hover:shadow-lg transition-all">
                            {type === 'photo' && <Camera size={14} />}
                            {type === 'url' && <Globe size={14} />}
                            {type === 'report' && <FileText size={14} />}
                        </div>
                    ))}
                </div>
            </TableCell>
            <TableCell className="text-right px-8">
                <div className="flex flex-col items-end">
                    <span className={`text-[11px] font-black ${alert ? 'text-red-600 underline decoration-red-200 decoration-2' : success ? 'text-green-600' : 'text-slate-900'}`}>
                        {due}
                    </span>
                    <div className="flex gap-2 mt-3 opacity-0 group-hover:opacity-100 transition-all">
                        <button title="Audit Evidence" className="p-1.5 bg-slate-100 text-slate-400 rounded-lg hover:bg-indigo-900 hover:text-white transition-all"><Eye size={14} /></button>
                        <button title="Issue Directive" className="p-1.5 bg-slate-100 text-slate-400 rounded-lg hover:bg-indigo-900 hover:text-white transition-all"><Zap size={14} /></button>
                    </div>
                </div>
            </TableCell>
        </TableRow>
    )
}

function AccessBadge({ label, variant }: { label: string, variant: 'success' | 'warning' | 'danger' }) {
    const styles = {
        success: 'bg-green-50 text-green-700 border-green-100',
        warning: 'bg-orange-50 text-orange-700 border-orange-100',
        danger: 'bg-red-50 text-red-700 border-red-100'
    };
    return (
        <Badge className={`rounded-full px-2.5 py-0.5 text-[8px] font-black uppercase border shadow-none ${styles[variant]}`}>
            {label}
        </Badge>
    );
}