// app/dashboard/district/inspections/new/page.tsx
"use client";
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
    Gavel, Calendar, Building2, AlertTriangle,
    Upload, CheckCircle2, Sparkles, ShieldAlert,
    Search, FileText, MapPin, Info, ArrowLeft
} from "lucide-react";
import {
    Select, SelectContent, SelectItem, SelectTrigger, SelectValue
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";

export default function NewInspectionPage() {
    const [directionIssued, setDirectionIssued] = useState(true);

    return (
        <div className="max-w-6xl mx-auto pb-20 animate-in fade-in slide-in-from-bottom-4 duration-700">

            {/* 1. HEADER SECTION */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10">
                <div className="space-y-1">
                    <div className="flex items-center gap-2 text-blue-600 font-black uppercase text-[10px] tracking-[0.2em]">
                        <ArrowLeft size={14} /> Enforcement Hub / New Entry
                    </div>
                    <h1 className="text-4xl font-black text-slate-900 tracking-tighter">INSPECTION & ENFORCEMENT</h1>
                    <p className="text-slate-500 font-medium">Record site findings and issue directions under PwD Act Sections 44 & 45.</p>
                </div>
                <div className="flex gap-3">
                    <Button variant="outline" className="h-14 px-8 rounded-2xl border-slate-200 font-bold">Discard Draft</Button>
                    <Button className="h-14 px-10 rounded-2xl bg-slate-900 text-white font-black uppercase tracking-widest text-[10px] shadow-2xl">
                        Save & Notify Establishment
                    </Button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                {/* MAIN DATA ENTRY COLUMN */}
                <div className="lg:col-span-2 space-y-8">

                    <Card className="rounded-[40px] border-slate-200 shadow-sm overflow-hidden bg-white">
                        <CardHeader className="p-8 border-b border-slate-50 bg-slate-50/30 flex flex-row justify-between items-center">
                            <CardTitle className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Inspection Parameters</CardTitle>
                            <div className="h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
                        </CardHeader>
                        <CardContent className="p-10 space-y-10">

                            {/* ESTABLISHMENT SELECTION */}
                            <div className="space-y-4">
                                <label className="text-[11px] font-black uppercase text-slate-500 ml-1">1. TARGET ESTABLISHMENT</label>
                                <div className="relative group">
                                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-300 group-focus-within:text-blue-600 transition-colors" />
                                    <Input
                                        placeholder="Search by Establishment Name or ID..."
                                        className="h-16 pl-12 rounded-2xl bg-slate-50 border-2 font-bold text-slate-800 placeholder:text-slate-400"
                                    />
                                    <div className="absolute right-4 top-1/2 -translate-y-1/2">
                                        <Badge className="bg-slate-200 text-slate-600 border-2 font-black text-[9px]">REGISTRY LINKED</Badge>
                                    </div>
                                </div>
                            </div>

                            {/* TRIGGER & DATE */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-4">
                                    <label className="text-[11px] font-black uppercase text-slate-500 ml-1">2. INSPECTION TRIGGER</label>
                                    <Select>
                                        <SelectTrigger className="h-14 rounded-2xl bg-slate-50 border-2 px-5 font-bold text-slate-700">
                                            <SelectValue placeholder="Select Trigger Type" />
                                        </SelectTrigger>
                                        <SelectContent className="rounded-2xl border-slate-200">
                                            <SelectItem value="routine" className="font-bold py-3">Routine Audit (Annual)</SelectItem>
                                            <SelectItem value="complaint" className="font-bold py-3 text-orange-600">Complaint-Based (Grievance ID)</SelectItem>
                                            <SelectItem value="special" className="font-bold py-3 text-red-600">Special Suo Moto Drive</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="space-y-4">
                                    <label className="text-[11px] font-black uppercase text-slate-500 ml-1">3. DATE OF INSPECTION</label>
                                    <div className="relative">
                                        <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-300 pointer-events-none" />
                                        <Input type="date" className="h-14 pl-12 rounded-2xl bg-slate-50 border-2 font-bold text-slate-700" />
                                    </div>
                                </div>
                            </div>

                            {/* FINDINGS */}
                            <div className="space-y-4">
                                <div className="flex justify-between items-center px-1">
                                    <label className="text-[11px] font-black uppercase text-slate-500">4. INSPECTION FINDINGS</label>
                                    <button className="flex items-center gap-1.5 text-purple-600 font-bold text-[10px] uppercase tracking-wider bg-purple-50 px-3 py-1.5 rounded-full border border-purple-100 hover:bg-purple-100 transition-colors">
                                        <Sparkles size={12} /> AI Narrative Assist
                                    </button>
                                </div>
                                <Textarea
                                    className="min-h-[180px] rounded-[32px] bg-slate-50 border-2 p-6 text-sm font-medium leading-relaxed resize-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Detail the physical or digital deficiencies observed during the site visit..."
                                />
                            </div>

                            {/* DIRECTION TOGGLE & DEADLINE */}
                            <div className="p-8 bg-blue-50/50 rounded-[40px] border border-blue-100 space-y-8">
                                <div className="flex items-center justify-between">
                                    <div className="space-y-1">
                                        <p className="text-sm font-black text-blue-900 uppercase tracking-tight">Issue Statutory Direction?</p>
                                        <p className="text-xs text-blue-600 font-medium">Automatically triggers a legal order to the establishment.</p>
                                    </div>
                                    <Switch checked={directionIssued} onCheckedChange={setDirectionIssued} className="data-[state=checked]:bg-blue-600" />
                                </div>

                                {directionIssued && (
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-in slide-in-from-top-4 duration-500">
                                        <div className="space-y-4">
                                            <label className="text-[10px] font-black uppercase text-blue-500 ml-1">Compliance Deadline</label>
                                            <Input type="date" className="h-14 rounded-2xl bg-white border-blue-100 font-bold text-slate-700" />
                                        </div>
                                        <div className="flex flex-col justify-end pb-1">
                                            <p className="text-[10px] font-bold text-slate-400 italic leading-snug">
                                                *Note: Establishments failing to comply by this date will be flagged for prosecution.
                                            </p>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* FILE UPLOAD */}
                            <div className="space-y-4 pt-6 border-t border-slate-50">
                                <label className="text-[11px] font-black uppercase text-slate-500 ml-1">5. STATUTORY ORDER (PDF)</label>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="border-2 border-dashed border-slate-200 rounded-[32px] p-10 flex flex-col items-center justify-center bg-slate-50 group hover:bg-white hover:border-blue-400 transition-all cursor-pointer">
                                        <Upload className="text-slate-300 group-hover:text-blue-500 mb-3" size={32} />
                                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Drag & Drop Signed Order</span>
                                        <span className="text-[8px] text-slate-300 mt-2">SECURE PDF ONLY (MAX 10MB)</span>
                                    </div>
                                    {/* Placeholder for uploaded file status */}
                                    <div className="bg-white border border-slate-100 rounded-[32px] p-6 flex flex-col justify-center space-y-4 shadow-sm">
                                        <div className="flex items-center gap-4">
                                            <div className="h-12 w-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600"><FileText size={24} /></div>
                                            <div>
                                                <p className="text-sm font-black text-slate-800">inspection_order_2024.pdf</p>
                                                <p className="text-[9px] font-bold text-green-600 uppercase">Ready for submission</p>
                                            </div>
                                        </div>
                                        <Button variant="ghost" className="text-red-500 font-black uppercase text-[10px] tracking-widest w-fit">Remove File</Button>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* SIDEBAR: STATUTORY CONTEXT & ALERTS */}
                <div className="space-y-8 sticky top-28 h-fit">
                    <Card className="rounded-[40px] border-2 bg-slate-900 text-white p-8 shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-6 opacity-10"><Gavel size={100} /></div>
                        <div className="relative z-10 space-y-6">
                            <div className="flex items-center gap-3">
                                <ShieldAlert className="text-blue-400" />
                                <h3 className="text-sm font-black uppercase tracking-widest">Enforcement Power</h3>
                            </div>
                            <p className="text-sm font-bold leading-relaxed opacity-80 italic">
                                "The District Magistrate may, by order, direct any establishment to take such measures as may be specified for ensuring accessibility or equal opportunity."
                            </p>
                            <div className="pt-6 border-t border-white/10 space-y-4">
                                <StatItem label="District Orders Active" val="45" />
                                <StatItem label="Pending Compliance" val="12" />
                            </div>
                        </div>
                    </Card>

                    <Card className="rounded-[40px] border-slate-200 p-8 bg-white shadow-sm">
                        <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-6">Filing Checklist</h4>
                        <div className="space-y-5">
                            <CheckItem text="Verify Establishment ID from Registry" />
                            <CheckItem text="Upload Photographs of Deficiencies" />
                            <CheckItem text="Attach Digital Sign of Inspector" />
                            <CheckItem text="Cross-reference Section 44 Compliance" />
                        </div>
                    </Card>

                    <div className="p-4 bg-orange-50 rounded-3xl border border-orange-100 flex gap-4">
                        <AlertTriangle className="text-orange-600 shrink-0" size={20} />
                        <p className="text-[10px] font-bold text-orange-800 leading-normal">
                            Filing a special inspection report will notify the <b>State Commissioner for PwDs</b> immediately via the National Bridge.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
}

/* UI SUB-COMPONENTS */

function StatItem({ label, val }: any) {
    return (
        <div className="flex justify-between items-center">
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{label}</span>
            <span className="text-xl font-black text-blue-400">{val}</span>
        </div>
    )
}

function CheckItem({ text }: { text: string }) {
    return (
        <div className="flex items-center gap-3">
            <div className="h-5 w-5 rounded-full bg-slate-50 flex items-center justify-center border border-slate-100 shadow-inner">
                <CheckCircle2 size={12} className="text-slate-300" />
            </div>
            <span className="text-xs font-bold text-slate-600 tracking-tight">{text}</span>
        </div>
    )
}