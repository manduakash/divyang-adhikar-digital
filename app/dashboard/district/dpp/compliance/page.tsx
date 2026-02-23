// app/dashboard/pp/compliance/update/page.tsx
"use client";
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
    CheckCircle2, Clock, AlertCircle, Building2,
    Scale, FileText, ArrowLeft, Search,
    ShieldCheck, Calendar, Gavel, History,
    ArrowUpRight, Sparkles, Landmark, BadgeCheck
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

type ComplianceStatus = 'PENDING' | 'COMPLIED' | 'OVERDUE';

export default function ComplianceFollowUpPage() {
    const [status, setStatus] = useState<ComplianceStatus>('PENDING');

    return (
        <div className="max-w-6xl mx-auto pb-20 animate-in fade-in slide-in-from-bottom-6 duration-700 font-sans">

            {/* 1. ADMINISTRATIVE HEADER */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10">
                <div className="space-y-1">
                    <div className="flex items-center gap-2 text-blue-600 font-black uppercase text-[10px] tracking-[0.2em]">
                        <ArrowLeft size={14} /> Enforcement
                    </div>
                    <h1 className="text-4xl font-black text-slate-900 tracking-tighter uppercase">Compliance Follow-up</h1>
                    <p className="text-slate-500 font-medium italic">Tracking the execution of Court Orders by responsible authorities.</p>
                </div>
                <div className="flex gap-3">
                    <Button variant="outline" className="h-14 px-8 rounded-2xl border-slate-200 font-bold bg-white shadow-sm">Review Timeline</Button>
                    <Button className="h-14 px-10 rounded-2xl bg-slate-950 text-white font-black uppercase tracking-widest text-[10px] shadow-2xl hover:bg-black transition-all">
                        Update Compliance Log
                    </Button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

                {/* MAIN DATA ENTRY COLUMN (8 COLS) */}
                <div className="lg:col-span-8 space-y-8">

                    <Card className="rounded-[40px] border-slate-200 shadow-2xl overflow-hidden bg-white relative">
                        {/* Professional Pattern Overlay */}
                        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/squares.png')]" />

                        <CardHeader className="p-8 border-b border-slate-50 bg-slate-50/50 flex flex-row justify-between items-center relative z-10">
                            <CardTitle className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Compliance Tracking Parameters</CardTitle>
                            <div className="flex items-center gap-2 text-blue-600">
                                <BadgeCheck size={14} />
                                <span className="text-[10px] font-black uppercase tracking-tighter">Statutory Monitor Active</span>
                            </div>
                        </CardHeader>

                        <CardContent className="p-10 space-y-10 relative z-10">

                            {/* CASE & AUTHORITY */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                <div className="space-y-3">
                                    <label className="text-[11px] font-black uppercase text-slate-500 ml-1 tracking-widest">1. Case ID</label>
                                    <div className="relative group">
                                        <Scale className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-300 group-focus-within:text-slate-900 transition-colors" />
                                        <Input
                                            placeholder="e.g. CP-2024-LKO-91"
                                            className="h-16 pl-12 rounded-2xl bg-slate-50 border-2 font-mono font-black text-slate-900 text-lg uppercase shadow-inner"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <label className="text-[11px] font-black uppercase text-slate-500 ml-1 tracking-widest">2. Authority Responsible</label>
                                    <div className="relative group">
                                        <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-300 group-focus-within:text-blue-600 transition-colors" />
                                        <Input
                                            placeholder="Establishment or Department Name"
                                            className="h-16 pl-12 rounded-2xl bg-slate-50 border-2 font-bold text-slate-800"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* COMPLIANCE STATUS (Decision Tiles) */}
                            <div className="space-y-4">
                                <label className="text-[11px] font-black uppercase text-slate-500 ml-1 tracking-widest">3. Compliance Status (Current)</label>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <StatusTile
                                        active={status === 'PENDING'}
                                        onClick={() => setStatus('PENDING')}
                                        icon={<Clock size={20} />}
                                        label="Pending"
                                        color="blue"
                                    />
                                    <StatusTile
                                        active={status === 'COMPLIED'}
                                        onClick={() => setStatus('COMPLIED')}
                                        icon={<CheckCircle2 size={20} />}
                                        label="Complied"
                                        color="green"
                                    />
                                    <StatusTile
                                        active={status === 'OVERDUE'}
                                        onClick={() => setStatus('OVERDUE')}
                                        icon={<AlertCircle size={20} />}
                                        label="Overdue"
                                        color="red"
                                    />
                                </div>
                            </div>

                            {/* DUE DATE & REMARKS */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                <div className="space-y-3">
                                    <label className="text-[11px] font-black uppercase text-slate-500 ml-1 tracking-widest">4. Compliance Due Date</label>
                                    <div className="relative">
                                        <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-300" />
                                        <Input type="date" className="h-16 pl-12 rounded-2xl bg-slate-50 border-2 font-black text-slate-900 shadow-inner" />
                                    </div>
                                    {status === 'OVERDUE' && (
                                        <Badge variant="destructive" className="ml-1 font-black text-[8px] uppercase animate-pulse">Statutory Default Detected</Badge>
                                    )}
                                </div>

                                <div className="space-y-3">
                                    <div className="flex justify-between items-center px-1">
                                        <label className="text-[11px] font-black uppercase text-slate-500 tracking-widest">5. Remarks / Follow-up Notes</label>
                                    </div>
                                    <Textarea
                                        className="min-h-[140px] rounded-[32px] bg-slate-50 border-2 p-6 text-sm font-medium leading-relaxed resize-none focus:ring-2 focus:ring-blue-600"
                                        placeholder="Enter compliance details or reasons for non-fulfillment provided by the establishment..."
                                    />
                                </div>
                            </div>

                        </CardContent>
                    </Card>
                </div>

                {/* SIDEBAR: AUDIT CONTEXT (4 COLS) */}
                <div className="lg:col-span-4 space-y-8 sticky top-28 h-fit">

                    {/* STATUTORY COMPLIANCE KPI */}
                    <Card className="rounded-[40px] border-2 bg-slate-900 text-white p-8 shadow-2xl relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:rotate-12 transition-transform duration-700">
                            <ShieldCheck size={120} />
                        </div>
                        <div className="relative z-10 space-y-6">
                            <div className="flex items-center gap-3">
                                <BadgeCheck className="text-blue-400" />
                                <h3 className="text-sm font-black uppercase tracking-widest text-blue-400">Execution Score</h3>
                            </div>
                            <div className="space-y-4 pt-4 border-t border-white/10">
                                <HealthItem label="Orders Tracked" val="42" />
                                <HealthItem label="Full Compliance" val="30" color="text-green-400" />
                                <HealthItem label="Execution Rate" val="71%" color="text-orange-400" />
                            </div>
                        </div>
                    </Card>

                    {/* FOLLOW-UP PROTOCOL */}
                    <Card className="rounded-[40px] border-slate-200 p-8 bg-white shadow-sm">
                        <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-6 border-b pb-4">Tracking Protocol</h4>
                        <div className="space-y-5">
                            <ProtocolStep text="Verify proof of compliance (Photos/Certificates)." />
                            <ProtocolStep text="Cross-check with District Magistrate's Direction Log." />
                            <ProtocolStep text="Overdue items trigger automatic 'Show Cause' notice." />
                            <ProtocolStep text="Non-compliance beyond 30 days flags the CCPD Hub." />
                        </div>
                    </Card>

                    <div className="p-6 bg-red-50 rounded-[32px] border border-red-100 flex gap-4">
                        <AlertCircle className="text-red-600 shrink-0" size={20} />
                        <p className="text-[10px] font-bold text-red-800 leading-normal uppercase">
                            Updating this status will immediately reflect in the <b>Establishment Dashboard</b> under "Directions & Orders".
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
}

/* UI SUB-COMPONENTS */

function StatusTile({ active, onClick, icon, label, color }: any) {
    const variants: any = {
        blue: active ? 'bg-blue-600 text-white border-transparent shadow-xl' : 'bg-slate-50 text-slate-400 border-transparent hover:border-blue-200',
        green: active ? 'bg-green-600 text-white border-transparent shadow-xl' : 'bg-slate-50 text-slate-400 border-transparent hover:border-green-200',
        red: active ? 'bg-red-600 text-white border-transparent shadow-xl animate-pulse' : 'bg-slate-50 text-slate-400 border-transparent hover:border-red-200',
    };

    return (
        <button
            onClick={onClick}
            className={`flex flex-col items-center justify-center p-6 rounded-[28px] border-2 transition-all group ${variants[color]}`}
        >
            <div className="mb-2 transition-transform group-hover:scale-110">{icon}</div>
            <span className="text-[10px] font-black uppercase tracking-widest">{label}</span>
        </button>
    )
}

function HealthItem({ label, val, color }: any) {
    return (
        <div className="flex justify-between items-center">
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{label}</span>
            <span className={`text-xl font-black ${color || 'text-white'}`}>{val}</span>
        </div>
    )
}

function ProtocolStep({ text }: { text: string }) {
    return (
        <div className="flex items-start gap-3">
            <div className="h-5 w-5 rounded-full bg-slate-50 flex items-center justify-center border border-slate-100 shrink-0 mt-0.5">
                <div className="h-1.5 w-1.5 rounded-full bg-slate-900" />
            </div>
            <span className="text-xs font-bold text-slate-600 tracking-tight leading-snug">{text}</span>
        </div>
    )
}