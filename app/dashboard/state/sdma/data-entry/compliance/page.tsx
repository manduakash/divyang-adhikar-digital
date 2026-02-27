// app/dashboard/sdma/data/compliance/page.tsx
"use client";
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
    ShieldCheck, Gavel, FileCheck, CheckCircle2,
    Search, Filter, Printer, FileSpreadsheet,
    ArrowUpRight, Globe, Map, Sparkles,
    AlertTriangle, History, Landmark, Timer,
    MapPin, BadgeCheck, Download, Activity,
    Link as LinkIcon, Calendar, MessageSquare,
    Clock, Zap, Radio,
    ChevronRight,
    Info
} from "lucide-react";
import {
    Table, TableBody, TableCell, TableHead, TableHeader, TableRow
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ResponseComplianceTracking() {
    const [selectedDirection, setSelectedDirection] = useState<string | null>(null);

    return (
        <div className="space-y-10 animate-in fade-in duration-1000 pb-20 font-sans selection:bg-orange-100">

            {/* 1. APEX HUB HEADER - CARBON FIBER TEXTURE */}
            <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-8 mb-10 bg-white p-10 rounded-[48px] border border-slate-200 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 p-10 opacity-[0.03] pointer-events-none text-orange-600">
                    <ShieldCheck size={200} />
                </div>

                <div className="space-y-4 relative z-10">
                    <div className="flex items-center gap-3">
                        <div className="h-14 w-14 bg-gradient-to-br from-emerald-500 to-teal-700 rounded-2xl flex items-center justify-center text-white shadow-xl shadow-emerald-500/20">
                            <FileCheck size={32} />
                        </div>
                        <div>
                            <h1 className="text-4xl font-black text-slate-900 tracking-tighter uppercase leading-none text-wrap">Responses & Compliance Tracking</h1>
                            <p className="text-[10px] font-black text-emerald-600 uppercase tracking-[0.3em] mt-2 flex items-center gap-2 uppercase">
                                <BadgeCheck size={12} /> Statutory verification Hub / A3.2
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex gap-4 relative z-10">
                    <Button variant="outline" className="h-16 px-10 rounded-[24px] border-slate-200 font-black uppercase tracking-widest text-[10px] bg-white gap-2 shadow-sm hover:bg-slate-50 transition-all group">
                        <History size={18} className="mr-2" /> Compliance status dashboard
                    </Button>
                    <Button className="h-16 px-12 rounded-[24px] bg-slate-950 text-white font-black uppercase tracking-widest text-[11px] shadow-2xl hover:bg-black transition-all gap-2 group border-t border-white/20">
                        <Printer size={18} /> Print Certified Audit
                    </Button>
                </div>
            </div>

            {/* 2. STATUTORY KPI STRIP */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatTile label="Total Advisories Issued" value="142" icon={<Gavel />} color="from-slate-700 via-slate-800 to-slate-950" />
                <StatTile label="Verified Complied" value="118" icon={<CheckCircle2 />} color="from-emerald-500 via-teal-600 to-green-700" />
                <StatTile label="Partial Response" value="15" icon={<Activity />} color="from-blue-600 via-blue-700 to-indigo-900" />
                <StatTile label="Overdue response alerts" value="09" icon={<AlertTriangle />} color="from-red-600 via-rose-700 to-red-900" alert />
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-12 gap-10 items-start">

                {/* 3. TRACKING REGISTRY (8 COLS) */}
                <div className="xl:col-span-8 space-y-8">
                    <Card className="rounded-[48px] border-slate-200 shadow-sm overflow-hidden bg-white min-h-[700px]">
                        <CardHeader className="p-0">
                            <div className="p-8 bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 text-white relative overflow-hidden">
                                <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] bg-fixed" />
                                <div className="flex flex-col md:flex-row justify-between items-center gap-6 relative z-10">
                                    <CardTitle className="text-sm font-black uppercase tracking-[0.3em] leading-none">Statewide Compliance Ledger</CardTitle>
                                    <div className="relative group flex-1 max-w-md">
                                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-white/50" />
                                        <input className="w-full pl-11 pr-6 py-3 bg-white/10 border border-white/20 rounded-2xl text-[10px] font-black uppercase outline-none text-white placeholder:text-white/30 focus:bg-white/20 transition-all shadow-inner" placeholder="Search Advisory Ref or Node..." />
                                    </div>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent className="p-0">
                            <Table>
                                <TableHeader className="bg-slate-50/80 font-sans">
                                    <TableRow className="border-slate-100">
                                        <TableHead className="px-8 py-6 text-[9px] font-black uppercase tracking-widest text-slate-400 w-[180px]">Advisory Reference</TableHead>
                                        <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400">Responding Authority</TableHead>
                                        <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400 text-center">Response Date</TableHead>
                                        <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400 text-center">Compliance Status</TableHead>
                                        <TableHead className="text-right px-8 text-[9px] font-black uppercase tracking-widest text-slate-400">Action</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody className="divide-y divide-slate-50 font-sans">
                                    <ComplianceRow
                                        refNo="ADVISORY-SDMA-UP-442"
                                        authority="DDMA Lucknow Hub"
                                        date="14 Oct 2024"
                                        status="Complied"
                                        success
                                        onClick={() => setSelectedDirection('ADVISORY-SDMA-UP-442')}
                                    />
                                    <ComplianceRow
                                        refNo="ADVISORY-SDMA-UP-091"
                                        authority="Health Department Node"
                                        date="--"
                                        status="Pending"
                                        alert
                                        onClick={() => setSelectedDirection('ADVISORY-SDMA-UP-091')}
                                    />
                                    <ComplianceRow
                                        refNo="ADVISORY-SDMA-UP-112"
                                        authority="DDMA Varanasi Node"
                                        date="12 Oct 2024"
                                        status="Partial"
                                        warning
                                        onClick={() => setSelectedDirection('ADVISORY-SDMA-UP-112')}
                                    />
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>
                </div>

                {/* 4. SCRUTINY ACTION SIDEBAR (4 COLS) */}
                <div className="xl:col-span-4 space-y-8 sticky top-28 h-fit">

                    <Card className="rounded-[40px] border-none bg-slate-900 text-white p-10 shadow-2xl relative overflow-hidden group">
                        <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/circuit-board.png')]" />
                        <div className="relative z-10 space-y-8">
                            <div className="flex items-center gap-3">
                                <ShieldCheck className="text-emerald-400" size={24} />
                                <h3 className="text-[10px] font-black uppercase tracking-widest text-emerald-400 uppercase">State Scrutiny Node</h3>
                            </div>

                            {!selectedDirection ? (
                                <div className="py-12 text-center space-y-4">
                                    <Radio size={48} className="mx-auto text-slate-700 animate-pulse" />
                                    <p className="text-[10px] font-black uppercase text-slate-500 tracking-widest leading-relaxed">
                                        Select a Response Entry from the ledger to begin statutory compliance verification.
                                    </p>
                                </div>
                            ) : (
                                <div className="space-y-8 animate-in fade-in zoom-in-95 duration-500">
                                    <div className="space-y-4">
                                        <label className="text-[9px] font-black uppercase text-slate-500 tracking-widest">Compliance Status (Complied / Partial / Pending)</label>
                                        <div className="grid grid-cols-3 gap-2">
                                            <button className="py-2.5 rounded-xl text-[8px] font-black uppercase bg-green-600 text-white shadow-lg shadow-green-900/40">Complied</button>
                                            <button className="py-2.5 rounded-xl text-[8px] font-black uppercase bg-white/5 text-slate-400 hover:text-white transition-colors">Partial</button>
                                            <button className="py-2.5 rounded-xl text-[8px] font-black uppercase bg-white/5 text-slate-400 hover:text-white transition-colors">Pending</button>
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <label className="text-[9px] font-black uppercase text-slate-500 tracking-widest">Supporting Evidence (links to DDMA data)</label>
                                        <div className="p-5 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-between group/file cursor-pointer hover:bg-white/10 transition-all">
                                            <div className="flex items-center gap-3">
                                                <LinkIcon className="text-blue-400" size={16} />
                                                <span className="text-[10px] font-bold text-white uppercase tracking-tighter">View DDMA Submission Vault</span>
                                            </div>
                                            <ArrowUpRight size={14} className="text-slate-500 group-hover/file:text-white transition-all" />
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <label className="text-[9px] font-black uppercase text-slate-500 tracking-widest leading-none">Remarks</label>
                                        <Textarea className="min-h-[120px] bg-white/5 border rounded-[28px] p-6 text-xs font-medium text-slate-300 resize-none focus:ring-1 ring-emerald-500 shadow-inner" placeholder="Provide final administrative assessment of the response..." />
                                    </div>

                                    <Button className="w-full h-16 bg-white text-slate-900 hover:bg-emerald-50 rounded-3xl font-black uppercase tracking-widest text-[10px] shadow-xl">Commit State Scrutiny</Button>
                                </div>
                            )}
                        </div>
                    </Card>

                    <div className="p-8 bg-orange-50 rounded-[40px] border border-orange-100 flex gap-6 shadow-sm">
                        <Info className="text-orange-600 shrink-0" size={28} />
                        <p className="text-[10px] font-bold text-orange-900 leading-relaxed uppercase tracking-widest">
                            Purpose: To monitor responses received from DDMAs and agencies against SDMA advisories.
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

function ComplianceRow({ refNo, authority, date, status, success, warning, alert, onClick }: any) {
    const statusColor = success ? 'bg-green-500 shadow-[0_0_8px_rgba(16,185,129,0.3)]' : alert ? 'bg-red-500 animate-pulse shadow-[0_0_8px_rgba(239,68,68,0.4)]' : warning ? 'bg-orange-500' : 'bg-blue-400';

    return (
        <TableRow onClick={onClick} className="border-none hover:bg-slate-50 transition-all group cursor-pointer font-sans">
            <TableCell className="px-8 py-6">
                <span className="text-[11px] font-mono font-black text-orange-600 bg-orange-50 px-2 py-0.5 rounded-md uppercase tracking-tighter">{refNo}</span>
                <p className="text-[8px] font-black text-slate-400 uppercase mt-2 italic leading-none">Statutory Order</p>
            </TableCell>
            <TableCell>
                <div className="space-y-1">
                    <p className="text-sm font-black text-slate-800 uppercase tracking-tight leading-none">{authority}</p>
                    <p className="text-[8px] font-bold text-slate-400 uppercase tracking-widest">Authorized Responding Node</p>
                </div>
            </TableCell>
            <TableCell className="text-center">
                <span className={`text-[10px] font-bold uppercase ${date === '--' ? 'text-slate-200' : 'text-slate-900'}`}>{date}</span>
            </TableCell>
            <TableCell className="text-center">
                <Badge className={`rounded-full px-3 py-0.5 text-[8px] font-black uppercase border-none shadow-none ${success ? 'bg-green-100 text-green-700' : alert ? 'bg-red-100 text-red-700' : 'bg-orange-100 text-orange-700'
                    }`}>
                    {status}
                </Badge>
            </TableCell>
            <TableCell className="text-right px-8">
                <div className="flex justify-end items-center gap-3">
                    <div className={`h-1.5 w-1.5 rounded-full ${statusColor}`} />
                    <ChevronRight size={18} className="text-slate-200 group-hover:text-orange-600 transition-all" />
                </div>
            </TableCell>
        </TableRow>
    )
}