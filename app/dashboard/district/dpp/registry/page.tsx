// app/dashboard/pp/registry/new/page.tsx
"use client";
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Scale, Gavel, FileText, Landmark,
    UserCircle, Calendar, ShieldCheck, Building2,
    Search, Fingerprint, Info, AlertCircle,
    ArrowLeft, CheckCircle2, Sparkles, Database,
    Briefcase,
    History
} from "lucide-react";
import {
    Select, SelectContent, SelectItem, SelectTrigger, SelectValue
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";

export default function CaseRegistryEntry() {
    return (
        <div className="max-w-6xl mx-auto pb-20 animate-in fade-in slide-in-from-bottom-6 duration-700">

            {/* 1. JUDICIAL HEADER SECTION */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10">
                <div className="space-y-1">
                    <div className="flex items-center gap-2 text-blue-600 font-black uppercase text-[10px] tracking-[0.2em]">
                        <ArrowLeft size={14} /> Prosecution Hub
                    </div>
                    <h1 className="text-4xl font-black text-slate-900 tracking-tighter uppercase">Statutory Case Registry</h1>
                    <p className="text-slate-500 font-medium italic">Formal registration of offences under the Rights of Persons with Disabilities Act, 2016.</p>
                </div>
                <div className="flex gap-3">
                    <Button variant="outline" className="h-14 px-8 rounded-2xl border-slate-200 font-bold bg-white shadow-sm hover:bg-slate-50">
                        Discard Draft
                    </Button>
                    <Button className="h-14 px-10 rounded-2xl bg-slate-950 text-white font-black uppercase tracking-widest text-[10px] shadow-2xl hover:bg-black transition-all">
                        Commit to District Court Node
                    </Button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                {/* MAIN DATA ENTRY COLUMN (Section 5.1) */}
                <div className="lg:col-span-2 space-y-8">

                    <Card className="rounded-[40px] border-slate-200 shadow-xl overflow-hidden bg-white relative">
                        {/* Professional Blueprint Pattern Overlay */}
                        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/blueprint.png')]" />

                        <CardHeader className="p-8 border-b border-slate-50 bg-slate-50/50 flex flex-row justify-between items-center relative z-10">
                            <CardTitle className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Primary Case Details</CardTitle>
                            <div className="flex items-center gap-2 text-blue-600">
                                <ShieldCheck size={14} />
                                <span className="text-[10px] font-black uppercase tracking-tighter">Authorized Judicial Entry</span>
                            </div>
                        </CardHeader>

                        <CardContent className="p-10 space-y-10 relative z-10">

                            {/* CASE IDENTIFIERS */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-3">
                                    <label className="text-[11px] font-black uppercase text-slate-500 ml-1">1. Case ID / FIR Number</label>
                                    <div className="relative group">
                                        <FileText className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-300 group-focus-within:text-slate-950 transition-colors" />
                                        <Input
                                            placeholder="e.g. FIR-2024-LKO-001"
                                            className="h-16 pl-12 rounded-2xl bg-slate-50 border-2 font-mono font-black text-slate-900 text-lg uppercase shadow-inner"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <label className="text-[11px] font-black uppercase text-slate-500 ml-1">2. Police Station</label>
                                    <div className="relative group">
                                        <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-300 group-focus-within:text-slate-950 transition-colors" />
                                        <Input
                                            placeholder="Name of PS Jurisdiction"
                                            className="h-16 pl-12 rounded-2xl bg-slate-50 border-2 font-bold text-slate-800"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* COURT & FILING DATE */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-3">
                                    <label className="text-[11px] font-black uppercase text-slate-500 ml-1">3. Court Name</label>
                                    <Select>
                                        <SelectTrigger className="h-16 rounded-2xl bg-slate-50 border-2 px-5 font-bold text-slate-700">
                                            <SelectValue placeholder="Select Competent Court" />
                                        </SelectTrigger>
                                        <SelectContent className="rounded-2xl border-slate-200">
                                            <SelectItem value="special" className="font-bold py-3 uppercase text-[10px]">Special Court PwD Lucknow</SelectItem>
                                            <SelectItem value="sessions" className="font-bold py-3 uppercase text-[10px]">District & Sessions Court</SelectItem>
                                            <SelectItem value="magistrate" className="font-bold py-3 uppercase text-[10px]">Chief Judicial Magistrate</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="space-y-3">
                                    <label className="text-[11px] font-black uppercase text-slate-500 ml-1">4. Date of Filing</label>
                                    <div className="relative">
                                        <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-300 pointer-events-none" />
                                        <Input type="date" className="h-16 pl-12 rounded-2xl bg-slate-50 border-2 font-bold text-slate-700" />
                                    </div>
                                </div>
                            </div>

                            {/* STATUTORY SECTIONS INVOKED (Multi-select) */}
                            <div className="space-y-4">
                                <div className="flex justify-between items-center px-1">
                                    <label className="text-[11px] font-black uppercase text-slate-500 ml-1">5. Section(s) of PwD Act Invoked</label>
                                    <button className="flex items-center gap-1.5 text-blue-600 font-bold text-[10px] uppercase tracking-wider bg-blue-50 px-3 py-1.5 rounded-full border border-blue-100 hover:bg-blue-100 transition-colors">
                                        <Sparkles size={12} /> AI Section Finder
                                    </button>
                                </div>
                                <div className="p-6 bg-slate-50 rounded-[32px] border border-slate-100 grid grid-cols-2 md:grid-cols-4 gap-4">
                                    <LegalBadge label="Section 89" desc="General Penalty" active />
                                    <LegalBadge label="Section 91" desc="Fraudulent Benefits" />
                                    <LegalBadge label="Section 92" desc="Atrocities" active />
                                    <LegalBadge label="Section 93" desc="Failure of Info" />
                                </div>
                            </div>

                            {/* PARTY DETAILS ( Item 6 & 7) */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 border-t border-slate-50">
                                <div className="space-y-3">
                                    <label className="text-[11px] font-black uppercase text-slate-500 ml-1 tracking-widest">6. Accused Name (Establishment/Individual)</label>
                                    <div className="relative group">
                                        <Gavel className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-300" />
                                        <Input
                                            placeholder="e.g. City Global Retail Ltd"
                                            className="h-16 pl-12 rounded-2xl bg-slate-50 border-2 font-black text-slate-900 shadow-inner"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <label className="text-[11px] font-black uppercase text-slate-500 ml-1 tracking-widest">7. PwD ID (Linked Victim Profile)</label>
                                    <div className="relative group">
                                        <Fingerprint className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-blue-600" />
                                        <Input
                                            placeholder="UP/LKO/XXXXX"
                                            className="h-16 pl-12 rounded-2xl bg-blue-50/50 border-2 border-blue-100 font-mono font-black text-blue-700"
                                        />
                                        <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2">
                                            <Badge className="bg-blue-600 text-white border-2 font-black text-[8px] uppercase">Linked</Badge>
                                            <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full bg-white shadow-sm border border-slate-100"><Search size={14} /></Button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </CardContent>
                    </Card>
                </div>

                {/* SIDEBAR: STATUTORY REFERENCE & ALERTS */}
                <div className="space-y-8 sticky top-28 h-fit">

                    {/* PP PERFORMANCE CARD */}
                    <Card className="rounded-[40px] border-2 bg-slate-950 text-white p-8 shadow-2xl relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform duration-700">
                            <Scale size={120} />
                        </div>
                        <div className="relative z-10 space-y-6">
                            <div className="flex items-center gap-3">
                                <Scale className="text-blue-400" />
                                <h3 className="text-sm font-black uppercase tracking-widest text-blue-400">Judicial Sync</h3>
                            </div>
                            <div className="space-y-4 pt-4 border-t border-white/10">
                                <HealthItem label="Active Prosecutions" val="24" />
                                <HealthItem label="Avg Trial Speed" val="180 Days" color="text-orange-400" />
                                <HealthItem label="Conviction Rate" val="82%" color="text-green-400" />
                            </div>
                            <Button className="w-full mt-4 h-14 bg-white/10 hover:bg-white/20 text-white border border-white/10 rounded-2xl font-black uppercase tracking-widest text-[9px] gap-2">
                                <History size={16} /> Past Case Precedents
                            </Button>
                        </div>
                    </Card>

                    {/* FILING PROTOCOL */}
                    <Card className="rounded-[40px] border-slate-200 p-8 bg-white shadow-sm">
                        <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-6 border-b pb-4">Registry Protocol</h4>
                        <div className="space-y-5">
                            <ProtocolStep text="Ensure Section 92 atrocities are flagged as high-priority." />
                            <ProtocolStep text="Cross-verify Accused ID with District Establishment Hub." />
                            <ProtocolStep text="Attach Preliminary Investigation Report (PIR) if required." />
                            <ProtocolStep text="Verify Victim PwD Certificate validity (National Sync)." />
                        </div>
                    </Card>

                    <div className="p-6 bg-blue-50 rounded-[32px] border border-blue-100 flex gap-4">
                        <Info className="text-blue-600 shrink-0" size={20} />
                        <p className="text-[10px] font-bold text-blue-800 leading-normal uppercase">
                            Registration will notify the <b>District Magistrate</b> and the <b>Special Court Registry</b> immediately.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
}

/* UI SUB-COMPONENTS */

function LegalBadge({ label, desc, active }: any) {
    return (
        <div className={`p-4 rounded-2xl border-2 transition-all cursor-pointer ${active
                ? 'bg-slate-900 text-white border-transparent shadow-xl'
                : 'bg-white text-slate-500 border-slate-100 hover:border-blue-200'
            }`}>
            <p className="text-xs font-black uppercase tracking-tighter leading-none mb-1">{label}</p>
            <p className={`text-[8px] font-bold uppercase tracking-widest ${active ? 'text-blue-400' : 'text-slate-400'}`}>{desc}</p>
        </div>
    )
}

function HealthItem({ label, val, color }: any) {
    return (
        <div className="flex justify-between items-center">
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{label}</span>
            <span className={`text-xl font-black ${color || 'text-blue-400'}`}>{val}</span>
        </div>
    )
}

function ProtocolStep({ text }: { text: string }) {
    return (
        <div className="flex items-start gap-3">
            <div className="h-5 w-5 rounded-full bg-slate-50 flex items-center justify-center border border-slate-100 shrink-0 mt-0.5 shadow-inner">
                <div className="h-1.5 w-1.5 rounded-full bg-blue-600" />
            </div>
            <span className="text-xs font-bold text-slate-600 tracking-tight leading-snug">{text}</span>
        </div>
    )
}