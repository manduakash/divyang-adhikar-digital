// app/dashboard/deo/inspections/new/page.tsx
"use client";
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
    Gavel, Calendar, School, AlertTriangle,
    Upload, CheckCircle2, Sparkles, ShieldAlert,
    Search, FileText, GraduationCap, Info, ArrowLeft
} from "lucide-react";
import {
    Select, SelectContent, SelectItem, SelectTrigger, SelectValue
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";

export default function NewEducationalInspectionPage() {
    const [directionIssued, setDirectionIssued] = useState(true);

    return (
        <div className="max-w-6xl mx-auto pb-20 animate-in fade-in slide-in-from-bottom-4 duration-700">

            {/* 1. HEADER SECTION (Educational Identity) */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10">
                <div className="space-y-1">
                    <div className="flex items-center gap-2 text-indigo-600 font-black uppercase text-[10px] tracking-[0.2em]">
                        <ArrowLeft size={14} /> Education Authority / Section 4.4
                    </div>
                    <h1 className="text-4xl font-black text-slate-900 tracking-tighter uppercase">Institutional Inspection</h1>
                    <p className="text-slate-500 font-medium">Statutory audit of inclusive education standards in schools and colleges.</p>
                </div>
                <div className="flex gap-3">
                    <Button variant="outline" className="h-14 px-8 rounded-2xl border-slate-200 font-bold">Discard</Button>
                    <Button className="h-14 px-10 rounded-2xl bg-indigo-600 text-white font-black uppercase tracking-widest text-[10px] shadow-2xl shadow-indigo-100 transition-all hover:bg-indigo-700">
                        Record & Issue Order
                    </Button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                {/* MAIN DATA ENTRY COLUMN (Section 4.4) */}
                <div className="lg:col-span-2 space-y-8">

                    <Card className="rounded-[40px] border-slate-200 shadow-sm overflow-hidden bg-white">
                        <CardHeader className="p-8 border-b border-slate-50 bg-slate-50/30 flex flex-row justify-between items-center">
                            <CardTitle className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Institutional Audit Parameters</CardTitle>
                            <div className="h-2 w-2 rounded-full bg-indigo-600 animate-pulse" />
                        </CardHeader>
                        <CardContent className="p-10 space-y-10">

                            {/* INSTITUTION NAME (Section 4.4 - Item 1) */}
                            <div className="space-y-4">
                                <label className="text-[11px] font-black uppercase text-slate-500 ml-1 tracking-widest">1. Institution Name</label>
                                <div className="relative group">
                                    <School className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-300 group-focus-within:text-indigo-600 transition-colors" />
                                    <Input
                                        placeholder="Search by Registered School Name or School-ID..."
                                        className="h-16 pl-12 rounded-2xl bg-slate-50 border-2 font-bold text-slate-800"
                                    />
                                    <div className="absolute right-4 top-1/2 -translate-y-1/2">
                                        <Badge className="bg-indigo-50 text-indigo-700 border-2 font-black text-[9px] uppercase tracking-tighter">Verified School Registry</Badge>
                                    </div>
                                </div>
                            </div>

                            {/* INSPECTION TYPE & DATE (Section 4.4 - Item 2 & 3) */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-4">
                                    <label className="text-[11px] font-black uppercase text-slate-500 ml-1 tracking-widest">2. Inspection Type</label>
                                    <Select>
                                        <SelectTrigger className="h-14 rounded-2xl bg-slate-50 border-2 px-5 font-bold text-slate-700">
                                            <SelectValue placeholder="Routine / Complaint" />
                                        </SelectTrigger>
                                        <SelectContent className="rounded-2xl border-slate-200">
                                            <SelectItem value="routine" className="font-bold py-3">Routine Audit (Annual)</SelectItem>
                                            <SelectItem value="complaint" className="font-bold py-3 text-orange-600">Complaint-Based (Case Linked)</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="space-y-4">
                                    <label className="text-[11px] font-black uppercase text-slate-500 ml-1 tracking-widest">3. Inspection Date</label>
                                    <div className="relative">
                                        <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-300 pointer-events-none" />
                                        <Input type="date" className="h-14 pl-12 rounded-2xl bg-slate-50 border-2 font-bold text-slate-700" />
                                    </div>
                                </div>
                            </div>

                            {/* FINDINGS (Section 4.4 - Item 4) */}
                            <div className="space-y-4">
                                <div className="flex justify-between items-center px-1">
                                    <label className="text-[11px] font-black uppercase text-slate-500 tracking-widest">4. Findings</label>
                                    <button className="flex items-center gap-1.5 text-indigo-600 font-bold text-[10px] uppercase tracking-wider bg-indigo-50 px-3 py-1.5 rounded-full border border-indigo-100 hover:bg-indigo-100 transition-colors">
                                        <Sparkles size={12} /> AI Narrative Assist
                                    </button>
                                </div>
                                <Textarea
                                    className="min-h-[180px] rounded-[32px] bg-slate-50 border-2 p-8 text-sm font-medium leading-relaxed resize-none focus:ring-2 focus:ring-indigo-600"
                                    placeholder="Record structural, academic, or accommodation deficiencies. Mention specific violations of Sections 16, 17, or 18..."
                                />
                            </div>

                            {/* DIRECTION ISSUED & COMPLIANCE DUE DATE (Section 4.4 - Item 5 & 6) */}
                            <div className="p-8 bg-indigo-50/50 rounded-[40px] border border-indigo-100 space-y-8">
                                <div className="flex items-center justify-between">
                                    <div className="space-y-1">
                                        <p className="text-sm font-black text-indigo-900 uppercase tracking-tight">Issue Official Direction?</p>
                                        <p className="text-xs text-indigo-600 font-medium">Triggers a binding statutory order to the Head of Institution.</p>
                                    </div>
                                    <Switch checked={directionIssued} onCheckedChange={setDirectionIssued} className="data-[state=checked]:bg-indigo-600" />
                                </div>

                                {directionIssued && (
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-in slide-in-from-top-4 duration-500">
                                        <div className="space-y-4">
                                            <label className="text-[10px] font-black uppercase text-indigo-500 ml-1">Compliance Due Date</label>
                                            <Input type="date" className="h-14 rounded-2xl bg-white border-indigo-100 font-bold text-slate-700 shadow-sm" />
                                        </div>
                                        <div className="flex flex-col justify-end pb-1">
                                            <p className="text-[10px] font-bold text-indigo-400 italic leading-snug">
                                                *Institutions must respond within this window to avoid Section 89 penalties.
                                            </p>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* INSPECTION REPORT UPLOAD (Section 4.4 - Item 7) */}
                            <div className="space-y-4 pt-6 border-t border-slate-50">
                                <label className="text-[11px] font-black uppercase text-slate-500 ml-1 tracking-widest">5. Inspection Report Upload (PDF)</label>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="border-2 border-dashed border-indigo-100 rounded-[32px] p-10 flex flex-col items-center justify-center bg-slate-50 group hover:bg-white hover:border-indigo-400 transition-all cursor-pointer">
                                        <Upload className="text-slate-300 group-hover:text-indigo-600 mb-3" size={32} />
                                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest text-center">Drag & Drop Signed Report</span>
                                        <span className="text-[8px] text-slate-300 mt-2 font-bold italic uppercase tracking-tighter">SECURE PDF ONLY (MAX 15MB)</span>
                                    </div>

                                    <div className="bg-white border border-indigo-50 rounded-[32px] p-6 flex flex-col justify-center space-y-4 shadow-sm relative overflow-hidden group">
                                        <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:rotate-6 transition-transform"><FileText size={80} /></div>
                                        <div className="flex items-center gap-4 relative z-10">
                                            <div className="h-12 w-12 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600"><FileText size={24} /></div>
                                            <div>
                                                <p className="text-sm font-black text-slate-800">primary_school_audit.pdf</p>
                                                <p className="text-[9px] font-bold text-green-600 uppercase tracking-widest">File Ready</p>
                                            </div>
                                        </div>
                                        <Button variant="ghost" className="text-red-500 font-black uppercase text-[10px] tracking-widest w-fit hover:bg-red-50 rounded-xl px-4 relative z-10">Delete File</Button>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* SIDEBAR: DEO ENFORCEMENT POWER */}
                <div className="space-y-8 sticky top-28 h-fit">
                    <Card className="rounded-[40px] border-2 bg-slate-900 text-white p-8 shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-6 opacity-10"><Gavel size={100} /></div>
                        <div className="relative z-10 space-y-6">
                            <div className="flex items-center gap-3">
                                <ShieldAlert className="text-indigo-400" />
                                <h3 className="text-sm font-black uppercase tracking-widest">Education Mandate</h3>
                            </div>
                            <p className="text-sm font-bold leading-relaxed opacity-80 italic">
                                "The DEO oversees Rule 15, ensuring all schools maintain a minimum inclusion score and remove barriers within the directed timeline."
                            </p>
                            <div className="pt-6 border-t border-white/10 space-y-4">
                                <StatItem label="Institutional Audits Done" val="84" />
                                <StatItem label="Pending Remediation" val="12" />
                            </div>
                        </div>
                    </Card>

                    <Card className="rounded-[40px] border-slate-200 p-8 bg-white shadow-sm">
                        <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-6 border-b border-slate-50 pb-4">Inspection Checklist</h4>
                        <div className="space-y-5">
                            <CheckItem text="Inspect Ramp and Braille signage." />
                            <CheckItem text="Verify presence of Special Educators." />
                            <CheckItem text="Audit Accessible Digital Portals." />
                            <CheckItem text="Check Scribe recruitment records." />
                        </div>
                    </Card>

                    <div className="p-4 bg-indigo-50 rounded-3xl border border-indigo-100 flex gap-4">
                        <Info className="text-indigo-600 shrink-0" size={20} />
                        <p className="text-[10px] font-bold text-indigo-800 leading-normal">
                            Completed inspection reports are synced to the <b>State Education Secretary</b> and <b>District Magistrate</b> dashboards instantly.
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
            <span className="text-xl font-black text-indigo-400">{val}</span>
        </div>
    )
}

function CheckItem({ text }: { text: string }) {
    return (
        <div className="flex items-start gap-3">
            <div className="h-5 w-5 rounded-full bg-slate-50 flex items-center justify-center border border-slate-100 shrink-0 mt-0.5">
                <CheckCircle2 size={12} className="text-slate-300" />
            </div>
            <span className="text-xs font-bold text-slate-600 tracking-tight leading-tight">{text}</span>
        </div>
    )
}