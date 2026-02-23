// app/dashboard/deo/accessibility/page.tsx
"use client";
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
    Table, TableBody, TableCell, TableHead, TableHeader, TableRow
} from "@/components/ui/table";
import {
    Building2, Globe, Accessibility, ShieldCheck,
    Search, Filter, Plus, FileWarning, Gavel,
    Calendar, ArrowUpRight, History, Sparkles,
    CheckCircle2, XCircle
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
    Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function EducationalAccessibilityPage() {
    return (
        <div className="space-y-8 animate-in fade-in duration-700 pb-20">

            {/* 1. STATUTORY HEADER */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 bg-white p-8 rounded-[40px] border border-slate-200 shadow-sm">
                <div className="flex items-center gap-6">
                    <div className="h-16 w-16 bg-indigo-600 rounded-2xl flex items-center justify-center text-white shadow-xl shadow-indigo-100">
                        <Building2 size={32} />
                    </div>
                    <div>
                        <h1 className="text-3xl font-black text-slate-900 tracking-tight uppercase">School Accessibility Registry</h1>
                        <p className="text-slate-500 font-medium italic uppercase text-[10px] tracking-widest mt-1">Audit & Enforcement of Sections 16 & 44 (Inclusive Infrastructure)</p>
                    </div>
                </div>
                <div className="flex gap-3">
                    <Button variant="outline" className="h-12 px-6 rounded-2xl border-slate-200 font-bold gap-2">
                        <ShieldCheck size={16} /> View Compliance Maps
                    </Button>
                    <NewAuditDialog />
                </div>
            </div>

            {/* 2. COMPLIANCE SUMMARY (Section 7.3 Data Source) */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <SummaryCard label="Institutions Audited" value="240" icon={<Building2 />} color="text-slate-900" />
                <SummaryCard label="Physically Accessible" value="180" icon={<Accessibility />} color="text-green-600" />
                <SummaryCard label="Digitally Accessible" value="112" icon={<Globe />} color="text-blue-600" />
                <SummaryCard label="Critical Defaults" value="28" icon={<FileWarning />} color="text-red-600" alert />
            </div>

            {/* 3. REGISTRY TABLE (Section 4.3 Mandatory Format) */}
            <Card className="rounded-[40px] border-slate-200 shadow-sm overflow-hidden bg-white">
                <CardHeader className="p-8 border-b border-slate-50 bg-slate-50/30 flex flex-row justify-between items-center">
                    <CardTitle className="text-xs font-black uppercase tracking-widest text-slate-400">Section 4.3: Accessibility Performance Log</CardTitle>
                    <div className="flex gap-3">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-300" />
                            <input className="pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-xs font-bold outline-none w-64 focus:ring-1 focus:ring-indigo-500" placeholder="Search School Name..." />
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="p-0">
                    <Table>
                        <TableHeader className="bg-white">
                            <TableRow className="border-slate-100">
                                <TableHead className="px-8 py-5 text-[9px] font-black uppercase tracking-widest text-slate-400">Institution Name</TableHead>
                                <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400">Physical Status</TableHead>
                                <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400">Digital Status</TableHead>
                                <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400">Compliance Deadline</TableHead>
                                <TableHead className="text-right px-8 text-[9px] font-black uppercase tracking-widest text-slate-400">Statutory Action</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody className="divide-y divide-slate-50">

                            <AuditRow
                                name="City Central High School"
                                physical="Compliant"
                                digital="Partial"
                                deadline="15 Nov 2024"
                            />

                            <AuditRow
                                name="Secondary School Block-B"
                                physical="Non-Compliant"
                                digital="Non-Compliant"
                                deadline="30 Oct 2024"
                                alert
                            />

                            <AuditRow
                                name="Modern Aided Academy"
                                physical="Compliant"
                                digital="Compliant"
                                deadline="Completed"
                                success
                            />

                            <AuditRow
                                name="Govt Primary School-A"
                                physical="Partial"
                                digital="Compliant"
                                deadline="05 Nov 2024"
                            />

                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    );
}

/* 4. DATA ENTRY MODAL (Section 4.3 Data Fields) */

function NewAuditDialog() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className="h-12 px-8 rounded-2xl bg-indigo-600 text-white font-black uppercase tracking-widest text-[10px] shadow-xl shadow-indigo-100 gap-2 hover:bg-indigo-700 transition-all">
                    <Plus size={16} /> New Accessibility Entry
                </Button>
            </DialogTrigger>
            <DialogContent className="max-w-3xl rounded-[40px] p-0 border-2 overflow-hidden font-sans">
                <DialogHeader className="p-8 bg-slate-900 text-white">
                    <DialogTitle className="text-xl font-black uppercase tracking-tight">Institution Accessibility Audit (4.3)</DialogTitle>
                </DialogHeader>
                <div className="p-10 space-y-8 bg-white max-h-[80vh] overflow-y-auto custom-scrollbar">

                    <div className="space-y-4">
                        <label className="text-[10px] font-black uppercase text-slate-400 ml-1">1. Institution Name</label>
                        <Input className="h-14 bg-slate-50 border-2 rounded-2xl font-bold" placeholder="Enter Registered School Name..." />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-4">
                            <label className="text-[10px] font-black uppercase text-slate-400 ml-1">2. Physical Access Status</label>
                            <div className="flex gap-2">
                                {['Compliant', 'Partial', 'Non'].map((s) => (
                                    <button key={s} className="flex-1 py-3 bg-slate-50 rounded-xl text-[10px] font-black uppercase border border-transparent hover:border-indigo-400 transition-all">{s}</button>
                                ))}
                            </div>
                        </div>
                        <div className="space-y-4">
                            <label className="text-[10px] font-black uppercase text-slate-400 ml-1">3. Digital Access Status</label>
                            <div className="flex gap-2">
                                {['Compliant', 'Partial', 'Non'].map((s) => (
                                    <button key={s} className="flex-1 py-3 bg-slate-50 rounded-xl text-[10px] font-black uppercase border border-transparent hover:border-indigo-400 transition-all">{s}</button>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <div className="flex justify-between items-center">
                            <label className="text-[10px] font-black uppercase text-slate-400 ml-1">4. Deficiencies Identified</label>
                            <button className="flex items-center gap-1.5 text-purple-600 font-bold text-[9px] uppercase tracking-wider bg-purple-50 px-2 py-1 rounded-full border border-purple-100"><Sparkles size={10} /> AI Tagging</button>
                        </div>
                        <Textarea className="min-h-[100px] rounded-2xl bg-slate-50 border-2 p-5 text-sm font-medium resize-none" placeholder="Detail identifying gaps (e.g. Ramp slope, Inaccessible UI, No alt text)..." />
                    </div>

                    <div className="space-y-4">
                        <label className="text-[10px] font-black uppercase text-slate-400 ml-1">5. Corrective Action Directed</label>
                        <Textarea className="min-h-[100px] rounded-2xl bg-slate-50 border-2 p-5 text-sm font-medium resize-none" placeholder="Binding directives issued to the Head of Institution..." />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-4">
                            <label className="text-[10px] font-black uppercase text-slate-400 ml-1">6. Compliance Deadline</label>
                            <div className="relative">
                                <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-300 pointer-events-none" />
                                <Input type="date" className="h-14 pl-12 bg-slate-50 border-2 rounded-2xl font-bold" />
                            </div>
                        </div>
                        <div className="flex flex-col justify-end">
                            <Button className="h-14 bg-indigo-600 text-white rounded-2xl font-black uppercase tracking-widest text-xs shadow-xl shadow-indigo-100">Finalize & Record Audit</Button>
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}

/* UI HELPER COMPONENTS */

function AuditRow({ name, physical, digital, deadline, alert, success }: any) {
    const getStatusIcon = (status: string) => {
        if (status === 'Compliant') return <CheckCircle2 size={14} className="text-green-600" />;
        if (status === 'Partial') return <History size={14} className="text-orange-500" />;
        return <XCircle size={14} className="text-red-500" />;
    };

    return (
        <TableRow className="border-2 hover:bg-slate-50 transition-colors group">
            <TableCell className="px-8 py-6">
                <div className="flex items-center gap-3">
                    <Building2 className="text-slate-300" size={18} />
                    <span className="text-sm font-black text-slate-800 uppercase tracking-tighter leading-none">{name}</span>
                </div>
            </TableCell>
            <TableCell>
                <div className="flex items-center gap-2">
                    {getStatusIcon(physical)}
                    <span className="text-[10px] font-bold text-slate-500 uppercase">{physical}</span>
                </div>
            </TableCell>
            <TableCell>
                <div className="flex items-center gap-2">
                    {getStatusIcon(digital)}
                    <span className="text-[10px] font-bold text-slate-500 uppercase">{digital}</span>
                </div>
            </TableCell>
            <TableCell>
                <div className="flex items-center gap-2">
                    <Calendar size={14} className={alert ? 'text-red-500' : 'text-slate-300'} />
                    <span className={`text-xs font-bold ${alert ? 'text-red-600 underline underline-offset-4 decoration-red-200' : success ? 'text-green-600' : 'text-slate-600'}`}>
                        {deadline}
                    </span>
                </div>
            </TableCell>
            <TableCell className="text-right px-8">
                <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-all">
                    <button title="Issue Statutory Direction" className="p-2.5 bg-slate-900 text-white rounded-xl hover:bg-black shadow-lg">
                        <Gavel size={16} />
                    </button>
                    <button title="View Full Audit details" className="p-2.5 bg-indigo-50 text-indigo-600 rounded-xl hover:bg-indigo-600 hover:text-white border border-indigo-100">
                        <ArrowUpRight size={16} />
                    </button>
                </div>
            </TableCell>
        </TableRow>
    )
}

function SummaryCard({ label, value, icon, color, alert }: any) {
    return (
        <Card className={`rounded-[32px] border-slate-100 shadow-sm transition-all hover:shadow-md bg-white overflow-hidden group ${alert ? 'ring-1 ring-red-100' : ''}`}>
            <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-2xl bg-slate-50 ${alert ? 'text-red-500' : 'text-slate-400 group-hover:text-indigo-600'} transition-colors`}>
                        {React.cloneElement(icon, { size: 24 })}
                    </div>
                </div>
                <p className={`text-3xl font-black ${color}`}>{value}</p>
                <p className="text-[9px] font-black uppercase text-slate-400 tracking-widest mt-1">{label}</p>
            </CardContent>
        </Card>
    )
}