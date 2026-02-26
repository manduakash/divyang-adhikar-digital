// app/dashboard/scpd/reports/judicial-status/page.tsx
"use client";
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
    Table, TableBody, TableCell, TableHead, TableHeader, TableRow
} from "@/components/ui/table";
import {
    Scale, Gavel, Search, Filter, Printer,
    FileSpreadsheet, ArrowUpRight, Globe, ShieldCheck,
    BadgeCheck, Activity, Landmark, MapPin,
    History, Download, Calendar,
    Timer, AlertCircle, CheckCircle2, FileText,
    ShieldAlert
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function JudicialStatusReport() {

    // Statewide Judicial Aggregate Metrics
    const judicialStats = {
        totalActive: "2,840",
        hearingsScheduled: "142",
        compliancePending: "324",
        disposalEfficiency: "74.8%"
    };

    return (
        <div className="space-y-10 animate-in fade-in duration-1000 pb-20 font-sans selection:bg-blue-50">

            {/* HUB ADMINISTRATIVE HEADER */}
            <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-6 bg-white p-10 rounded-[48px] border border-slate-200 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 p-10 opacity-[0.03] pointer-events-none text-slate-900">
                    <Scale size={200} />
                </div>
                <div className="space-y-2 relative z-10">
                    <div className="inline-flex items-center gap-2 bg-slate-900 text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border border-slate-800 shadow-sm">
                        <Scale size={14} className="text-blue-400" /> Statutory Judicial Node
                    </div>
                    <h1 className="text-5xl font-black text-slate-900 tracking-tighter uppercase leading-none">State Prosecution Ledger</h1>
                    <p className="text-slate-500 font-medium italic text-lg tracking-tight">Statewide monitoring of PwD Act Litigation, Stage Movement & Compliance Status.</p>
                </div>
                <div className="flex gap-4 relative z-10">
                    <Button variant="outline" className="h-14 px-8 rounded-2xl border-slate-200 font-black uppercase tracking-widest text-[10px] bg-white gap-2 shadow-sm hover:bg-slate-50 transition-all">
                        <FileSpreadsheet size={18} className="text-green-600" /> Export XLS
                    </Button>
                    <Button className="h-14 px-10 rounded-2xl bg-slate-950 text-white font-black uppercase tracking-widest text-[10px] shadow-2xl hover:bg-black transition-all gap-2 border-t border-white/20">
                        <Printer size={18} /> Print Certified Brief
                    </Button>
                </div>
            </div>

            {/* JUDICIAL KPI STRIP (Patterned Gradients) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatTile label="Total Active Matters" value={judicialStats.totalActive} icon={<Gavel />} color="from-slate-700 via-slate-800 to-slate-950" />
                <StatTile label="Next 7D Hearings" value={judicialStats.hearingsScheduled} icon={<Calendar />} color="from-blue-600 via-blue-700 to-indigo-900" />
                <StatTile label="Orders Awaiting Compliance" value={judicialStats.compliancePending} icon={<ShieldAlert />} color="from-red-600 via-rose-700 to-red-800" alert />
                <div className="bg-white border-2 border-slate-900 rounded-[32px] p-6 shadow-sm flex flex-col justify-center relative overflow-hidden group">
                    <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/topography.png')]" />
                    <p className="text-[9px] font-black uppercase text-slate-400 tracking-widest mb-1 relative z-10">Trial Disposal Rate</p>
                    <p className="text-4xl font-black text-slate-900 tracking-tighter group-hover:scale-105 transition-transform">{judicialStats.disposalEfficiency}</p>
                    <div className="w-full h-1.5 bg-slate-100 rounded-full mt-4 overflow-hidden shadow-inner">
                        <div className="h-full bg-blue-600 shadow-[0_0_10px_rgba(37,99,235,0.3)]" style={{ width: '74%' }} />
                    </div>
                </div>
            </div>

            {/* MASTER DATA REGISTRY */}
            <Card className="rounded-[48px] border-slate-200 shadow-sm overflow-hidden bg-white">
                <CardHeader className="p-0">
                    <div className="p-8 bg-gradient-to-r from-sky-800 via-emerald-600 to-sky-700 text-white relative overflow-hidden">
                        {/* CARBON FIBER TEXTURE OVERLAY */}
                        <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
                        <div className="flex flex-col md:flex-row justify-between items-center gap-6 relative z-10">
                            <div className="flex items-center gap-4">
                                <div className="h-12 w-12 rounded-2xl bg-white/20 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-xl">
                                    <History size={24} className="text-blue-400" />
                                </div>
                                <CardTitle className="text-sm font-black uppercase tracking-[0.3em]">Statewide Statutory Case registry</CardTitle>
                            </div>
                            <div className="flex gap-4 w-full md:w-auto">
                                <div className="relative flex-1 md:w-80">
                                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-white/50" />
                                    <input className="w-full pl-11 pr-4 py-3 bg-white/10 border border-white/20 rounded-2xl text-[10px] font-black uppercase outline-none text-white placeholder:text-white/40 focus:bg-white/20 transition-all shadow-inner" placeholder="Search Case ID or District..." />
                                </div>
                                <Button variant="outline" size="icon" className="h-12 w-12 rounded-2xl border-white/20 bg-white/10 text-white hover:bg-white/20"><Filter size={18} /></Button>
                            </div>
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="p-0">
                    <Table>
                        <TableHeader className="bg-slate-50/80 font-sans">
                            <TableRow className="border-slate-100">
                                <TableHead className="px-8 py-6 text-[9px] font-black uppercase tracking-widest text-slate-400 w-[180px]">Case Reference</TableHead>
                                <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400">District / Court</TableHead>
                                <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400 text-center">Trial Stage</TableHead>
                                <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400 text-center">Last Hearing</TableHead>
                                <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400 text-center">Next Hearing</TableHead>
                                <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400 text-center">Order Passed</TableHead>
                                <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400 text-center">Compliance Due</TableHead>
                                <TableHead className="text-right px-8 text-[9px] font-black uppercase tracking-widest text-slate-400">Status</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody className="divide-y divide-slate-50">
                            <CaseRegistryRow
                                id="CP/STATE/2024/09"
                                district="Lucknow"
                                court="Special Court A"
                                stage="Trial / Evidence"
                                last="12 Oct 24"
                                next="24 Oct 24"
                                order="No"
                                due="--"
                                status="ACTIVE"
                            />
                            <CaseRegistryRow
                                id="CP/STATE/2024/42"
                                district="Meerut"
                                court="Dist. Sessions Hub"
                                stage="Argument"
                                last="05 Oct 24"
                                next="18 Oct 24"
                                order="Yes"
                                due="05 Nov 24"
                                status="OVERDUE"
                                alert
                            />
                            <CaseRegistryRow
                                id="CP/STATE/2023/118"
                                district="Varanasi"
                                court="Special Court B"
                                stage="Final Judgement"
                                last="10 Sep 24"
                                next="14 Oct 24"
                                order="Yes"
                                due="Verified"
                                status="COMPLIED"
                                success
                            />
                            <CaseRegistryRow
                                id="CP/STATE/2024/001"
                                district="Ghaziabad"
                                court="CJM Office"
                                stage="Charge Framing"
                                last="15 Oct 24"
                                next="02 Nov 24"
                                order="No"
                                due="--"
                                status="PENDING"
                            />
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>

            {/* FOOTER SYNC STATUS */}
            <footer className="flex justify-between items-center pt-8 border-t border-slate-200">
                <div className="flex items-center gap-3 text-slate-400">
                    <Activity size={18} className="text-blue-600 animate-pulse" />
                    <span className="text-[10px] font-black uppercase tracking-widest leading-none">Judicial Node Sync: 2,840 Cases Aggregated from District Court Nodes</span>
                </div>
                <div className="flex gap-6">
                    <button className="text-[10px] font-black uppercase text-blue-600 hover:underline transition-all">Download Stagnant Case List</button>
                    <button className="text-[10px] font-black uppercase text-slate-400 hover:text-slate-900">Judicial Manual v4.0</button>
                </div>
            </footer>
        </div>
    );
}

/* UI SUB-COMPONENTS */

function StatTile({ label, value, icon, color, alert }: any) {
    return (
        <Card className="rounded-[32px] border-slate-100 bg-white p-7 shadow-sm group hover:shadow-xl transition-all duration-500 overflow-hidden relative h-44 flex flex-col justify-between">
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/topography.png')]" />
            <div className={`h-10 w-10 rounded-xl bg-slate-50 flex items-center justify-center transition-all group-hover:scale-110 group-hover:bg-slate-900 group-hover:text-white shadow-inner`}>
                {icon}
            </div>
            <div>
                <p className="text-[9px] font-black uppercase text-slate-400 tracking-widest mb-1">{label}</p>
                <p className={`text-3xl font-black tracking-tighter ${alert ? 'text-red-600' : 'text-slate-900'}`}>{value}</p>
            </div>
            {alert && <div className="absolute top-6 right-6 h-1.5 w-1.5 rounded-full bg-red-500 animate-ping" />}
        </Card>
    )
}

function CaseRegistryRow({ id, district, court, stage, last, next, order, due, status, alert, success }: any) {
    const statusColor = alert ? 'bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.3)]' : success ? 'bg-green-500' : 'bg-blue-400';

    return (
        <TableRow className="border-none hover:bg-slate-50 transition-all group cursor-pointer font-sans">
            <TableCell className="px-8 py-6">
                <span className="text-[10px] font-mono font-black text-blue-700 bg-blue-50 px-2 py-0.5 rounded-md uppercase tracking-tighter">{id}</span>
                <p className="text-[8px] font-black text-slate-400 uppercase mt-2 italic leading-none">Judicial Ref</p>
            </TableCell>
            <TableCell>
                <div className="space-y-1">
                    <p className="text-sm font-black text-slate-800 uppercase tracking-tight leading-none">{court}</p>
                    <div className="flex items-center gap-1.5 opacity-60">
                        <MapPin size={10} />
                        <span className="text-[9px] font-bold uppercase tracking-widest">{district}</span>
                    </div>
                </div>
            </TableCell>
            <TableCell className="text-center">
                <Badge className="bg-slate-100 text-slate-500 border-none font-black text-[8px] uppercase px-2 py-0.5 tracking-tighter">
                    {stage}
                </Badge>
            </TableCell>
            <TableCell className="text-center text-[10px] font-bold text-slate-400 uppercase">
                {last}
            </TableCell>
            <TableCell className="text-center">
                <span className={`text-[11px] font-black ${alert ? 'text-red-600 underline decoration-red-200 decoration-2' : 'text-slate-900'}`}>{next}</span>
            </TableCell>
            <TableCell className="text-center">
                <Badge className={`border-none font-black text-[8px] uppercase px-2 shadow-none ${order === 'Yes' ? 'bg-indigo-50 text-indigo-600' : 'bg-slate-50 text-slate-300'}`}>
                    {order}
                </Badge>
            </TableCell>
            <TableCell className="text-center">
                <span className={`text-[11px] font-mono font-black ${success ? 'text-green-600' : alert ? 'text-red-600 underline' : 'text-slate-200'}`}>{due}</span>
            </TableCell>
            <TableCell className="text-right px-8">
                <div className="flex flex-col items-end">
                    <Badge className={`rounded-full px-3 py-0.5 text-[8px] font-black uppercase border-none shadow-none ${alert ? 'bg-red-100 text-red-700' : success ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
                        }`}>
                        {status}
                    </Badge>
                    <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-all mt-2">
                        <button title="View File" className="p-1.5 bg-slate-100 text-slate-400 rounded-lg hover:bg-slate-900 hover:text-white transition-all"><FileText size={12} /></button>
                        <button title="Drill-down" className="p-1.5 bg-slate-100 text-slate-400 rounded-lg hover:bg-indigo-600 hover:text-white transition-all"><ArrowUpRight size={12} /></button>
                    </div>
                </div>
            </TableCell>
        </TableRow>
    )
}