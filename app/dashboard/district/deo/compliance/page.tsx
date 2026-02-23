// app/dashboard/district/compliance-verification/new/page.tsx
"use client";
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
    ClipboardCheck, Building2, FileText, CheckCircle2,
    XCircle, Calendar, ShieldCheck, ArrowLeft,
    Search, Link as LinkIcon, AlertCircle, Sparkles
} from "lucide-react";
import {
    Select, SelectContent, SelectItem, SelectTrigger, SelectValue
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";

export default function ComplianceVerificationPage() {
    const [status, setStatus] = useState<string>('');

    return (
        <div className="max-w-6xl mx-auto pb-20 animate-in fade-in slide-in-from-bottom-4 duration-700 font-sans">

            {/* 1. ADMINISTRATIVE HEADER */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10">
                <div className="space-y-1">
                    <div className="flex items-center gap-2 text-blue-600 font-black uppercase text-[10px] tracking-[0.2em]">
                        <ArrowLeft size={14} /> Enforcement / Verification Cycle
                    </div>
                    <h1 className="text-4xl font-black text-slate-900 tracking-tighter uppercase">COMPLIANCE VERIFICATION</h1>
                    <p className="text-slate-500 font-medium">Formally assess and verify the action taken reports submitted by establishments.</p>
                </div>
                <div className="flex gap-3">
                    <Button variant="outline" className="h-14 px-8 rounded-2xl border-slate-200 font-bold">Hold for Review</Button>
                    <Button className="h-14 px-10 rounded-2xl bg-slate-900 text-white font-black uppercase tracking-widest text-[10px] shadow-2xl hover:bg-black transition-all">
                        Finalize Verification
                    </Button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                {/* MAIN VERIFICATION FORM (Section 4.2) */}
                <div className="lg:col-span-2 space-y-8">

                    <Card className="rounded-[40px] border-slate-200 shadow-sm overflow-hidden bg-white">
                        <CardHeader className="p-8 border-b border-slate-50 bg-slate-50/30">
                            <CardTitle className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Official Verification Record</CardTitle>
                        </CardHeader>
                        <CardContent className="p-10 space-y-10">

                            {/* ESTABLISHMENT & DIRECTION LINK */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-4">
                                    <label className="text-[11px] font-black uppercase text-slate-500 ml-1">1. Establishment Name</label>
                                    <div className="relative group">
                                        <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-300" />
                                        <Input
                                            placeholder="e.g. Regional Transport Office"
                                            className="h-14 pl-12 rounded-2xl bg-slate-50 border-2 font-bold text-slate-800"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <label className="text-[11px] font-black uppercase text-slate-500 ml-1">2. Direction Reference No.</label>
                                    <div className="relative">
                                        <LinkIcon className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-blue-500" />
                                        <Input
                                            placeholder="DIR/LKO/2024/041"
                                            className="h-14 pl-12 rounded-2xl bg-slate-50 border-2 font-mono font-black text-blue-600 text-xs"
                                        />
                                        <Badge className="absolute right-3 top-1/2 -translate-y-1/2 bg-blue-100 text-blue-700 font-black text-[8px]">ACTIVE ORDER</Badge>
                                    </div>
                                </div>
                            </div>

                            {/* SUBMISSION STATUS (Section 4.2 Mandate) */}
                            <div className="p-6 bg-slate-50 rounded-[32px] border border-slate-100 flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <div className="h-12 w-12 bg-white rounded-2xl flex items-center justify-center text-green-600 shadow-sm border border-slate-100">
                                        <FileText size={24} />
                                    </div>
                                    <div>
                                        <p className="text-sm font-black text-slate-900 uppercase tracking-tight">Compliance Submitted?</p>
                                        <p className="text-xs text-slate-400 font-medium italic">Establishment uploaded ATR on 18 Oct 2024</p>
                                    </div>
                                </div>
                                <Badge className="h-8 px-5 bg-green-100 text-green-700 border-2 font-black text-[10px] uppercase">YES - RECEIVED</Badge>
                            </div>

                            {/* VERIFICATION DECISION (Binary Select) */}
                            <div className="space-y-4">
                                <label className="text-[11px] font-black uppercase text-slate-500 ml-1">3. Verification Status (Official Decision)</label>
                                <div className="grid grid-cols-2 gap-6">
                                    <button
                                        onClick={() => setStatus('accepted')}
                                        className={`h-24 rounded-[32px] border-2 flex flex-col items-center justify-center gap-2 transition-all ${status === 'accepted' ? 'bg-green-50 border-green-500 shadow-lg shadow-green-100' : 'bg-white border-slate-100 grayscale hover:grayscale-0 hover:border-green-200'
                                            }`}
                                    >
                                        <CheckCircle2 size={24} className="text-green-600" />
                                        <span className="text-[10px] font-black uppercase tracking-widest text-green-900">ACCEPTED / CLOSED</span>
                                    </button>
                                    <button
                                        onClick={() => setStatus('rejected')}
                                        className={`h-24 rounded-[32px] border-2 flex flex-col items-center justify-center gap-2 transition-all ${status === 'rejected' ? 'bg-red-50 border-red-500 shadow-lg shadow-red-100' : 'bg-white border-slate-100 grayscale hover:grayscale-0 hover:border-red-200'
                                            }`}
                                    >
                                        <XCircle size={24} className="text-red-600" />
                                        <span className="text-[10px] font-black uppercase tracking-widest text-red-900">REJECTED / ESCALATED</span>
                                    </button>
                                </div>
                            </div>

                            {/* VERIFICATION DATE & REMARKS */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                                <div className="space-y-4 md:col-span-2">
                                    <div className="flex justify-between items-center">
                                        <label className="text-[11px] font-black uppercase text-slate-500 ml-1">4. Verification Remarks / Findings</label>
                                        <button className="flex items-center gap-1.5 text-purple-600 font-bold text-[10px] uppercase tracking-wider bg-purple-50 px-3 py-1.5 rounded-full border border-purple-100 transition-all hover:bg-purple-100">
                                            <Sparkles size={12} /> AI Policy Check
                                        </button>
                                    </div>
                                    <Textarea
                                        className="min-h-[160px] rounded-[32px] bg-slate-50 border-2 p-6 text-sm font-medium leading-relaxed resize-none focus:ring-2 focus:ring-blue-600"
                                        placeholder="Provide reasoning for acceptance or rejection. If rejected, specify which Section 44/45 clauses remain unfulfilled..."
                                    />
                                </div>
                                <div className="space-y-4">
                                    <label className="text-[11px] font-black uppercase text-slate-500 ml-1">5. Verification Date</label>
                                    <div className="relative">
                                        <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-300" />
                                        <Input type="date" defaultValue="2024-10-20" className="h-14 pl-12 rounded-2xl bg-slate-50 border-2 font-bold text-slate-800" />
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* SIDEBAR: AUDIT TRAIL & ESTABLISHMENT HEALTH */}
                <div className="space-y-8 sticky top-28 h-fit">
                    <Card className="rounded-[40px] border-2 bg-slate-900 text-white p-8 shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-6 opacity-10"><ClipboardCheck size={100} /></div>
                        <div className="relative z-10 space-y-6">
                            <div className="flex items-center gap-3">
                                <ShieldCheck className="text-green-400" />
                                <h3 className="text-sm font-black uppercase tracking-widest">Compliance Health</h3>
                            </div>
                            <div className="space-y-2">
                                <p className="text-[9px] font-black uppercase text-slate-500 tracking-[0.2em]">Establishment ID</p>
                                <p className="text-lg font-black text-white">EST-UP-7721-LKO</p>
                            </div>
                            <div className="space-y-4 pt-4 border-t border-white/10">
                                <HealthItem label="Overall Score" val="72%" />
                                <HealthItem label="Past Rejections" val="02" color="text-red-400" />
                                <HealthItem label="SLA Performance" val="94%" />
                            </div>
                        </div>
                    </Card>

                    <Card className="rounded-[40px] border-slate-200 p-8 bg-white shadow-sm">
                        <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-6">Verification Protocol</h4>
                        <div className="space-y-5">
                            <ProtocolItem text="Review uploaded photos against inspection report." />
                            <ProtocolItem text="Confirm date of actual remediation." />
                            <ProtocolItem text="Cross-verify Digital Accessibility standards (WCAG 2.1)." />
                            <ProtocolItem text="Finalize before 30-day statutory limit." />
                        </div>
                    </Card>

                    <div className="p-5 bg-blue-50/50 rounded-3xl border border-blue-100 flex gap-4">
                        <AlertCircle className="text-blue-600 shrink-0" size={20} />
                        <p className="text-[10px] font-bold text-blue-800 leading-normal">
                            Accepted verifications will automatically close the grievance/order in the <b>Citizen Dashboard</b>.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
}

/* UI HELPER COMPONENTS */

function HealthItem({ label, val, color }: any) {
    return (
        <div className="flex justify-between items-center">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{label}</span>
            <span className={`text-xl font-black ${color || 'text-blue-400'}`}>{val}</span>
        </div>
    )
}

function ProtocolItem({ text }: { text: string }) {
    return (
        <div className="flex gap-3">
            <div className="h-5 w-5 rounded-full bg-slate-50 flex items-center justify-center border border-slate-100 shrink-0">
                <div className="h-1.5 w-1.5 rounded-full bg-blue-400" />
            </div>
            <span className="text-xs font-bold text-slate-600 tracking-tight leading-tight">{text}</span>
        </div>
    )
}