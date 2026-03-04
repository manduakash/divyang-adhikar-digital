// app/dashboard/nabd/data-entry/minutes-of-meeting/page.tsx
"use client";
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
    Table, TableBody, TableCell, TableHead, TableHeader, TableRow
} from "@/components/ui/table";
import {
    FileSignature, BookOpen, Users, List, Lightbulb,
    UploadCloud, Save, History, Search, FileText,
    CheckCircle2, XCircle, Briefcase, CalendarClock
} from "lucide-react";

export default function MoMDataEntryPage() {
    return (
        <div className="space-y-8 animate-in fade-in duration-1000 pb-20 font-sans selection:bg-indigo-100">

            {/* PAGE HEADER */}
            <div className="flex flex-col xl:flex-row justify-between items-start xl:items-end gap-6 relative">
                <div className="space-y-2">
                    <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border-2 border-indigo-100">
                        <FileSignature size={14} /> Official Records
                    </div>
                    <h1 className="text-5xl font-black text-slate-900 tracking-tighter uppercase leading-none">Minutes of Meeting (MoM)</h1>
                    <p className="text-slate-500 font-medium text-lg italic underline underline-offset-8 decoration-indigo-100">
                        Record discussions, decisions, and formal advisory outcomes.
                    </p>
                </div>
                <div className="flex gap-4">
                    <Button variant="outline" className="h-14 px-8 rounded-full border-2 border-slate-200 font-black uppercase tracking-widest text-[10px] bg-white shadow-xl hover:bg-slate-50 transition-all">
                        <History size={16} className="mr-2" /> MoM Archives
                    </Button>
                    <Button className="h-14 px-8 rounded-full bg-indigo-600 text-white font-black uppercase tracking-widest text-[10px] shadow-xl hover:bg-indigo-700 transition-all gap-2 group">
                        <Save size={16} /> Save & Finalise MoM
                    </Button>
                </div>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
                
                {/* LEFT: DATA ENTRY FORM (Spans 2 columns) */}
                <div className="xl:col-span-2 space-y-8">
                    
                    {/* SECTION 1: MEETING CONTEXT & ATTENDANCE */}
                    <SectionCard title="Meeting Context & Attendance" icon={<BookOpen />} color="text-blue-600">
                        <div className="space-y-6">
                            
                            <FormField label="Meeting Reference" required>
                                <select className="form-input-apex appearance-none cursor-pointer">
                                    <option value="" disabled selected>Select Concluded Meeting...</option>
                                    <option value="MTG-47">NABD/MTG/2024-47 (14 Nov 2024 - Ordinary)</option>
                                    <option value="MTG-46">NABD/MTG/2024-46 (22 Aug 2024 - Special)</option>
                                    <option value="MTG-45">NABD/MTG/2024-45 (10 May 2024 - Ordinary)</option>
                                </select>
                            </FormField>

                            <FormField label="Attendance Logging (Member-wise)" required>
                                <div className="border-2 border-slate-100 bg-slate-50 rounded-2xl overflow-hidden">
                                    <div className="p-4 border-b-2 border-slate-100 bg-white flex justify-between items-center">
                                        <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">Record Presence / Absence</p>
                                        <div className="text-[10px] font-bold text-slate-400 bg-slate-100 px-3 py-1 rounded-lg">Auto-syncs with Profile Data</div>
                                    </div>
                                    <div className="max-h-60 overflow-y-auto custom-scrollbar p-2 space-y-1">
                                        <AttendanceRow name="Dr. Virendra Kumar" role="Chairperson" />
                                        <AttendanceRow name="Smt. Anjali Bhawra" role="Member Secretary" />
                                        <AttendanceRow name="Shri R.K. Singh" role="State Rep" />
                                        <AttendanceRow name="Ms. Sunita Rao" role="Expert Member" />
                                    </div>
                                </div>
                            </FormField>
                            
                        </div>
                    </SectionCard>

                    {/* SECTION 2: DISCUSSIONS & DECISIONS */}
                    <SectionCard title="Deliberations & Decisions" icon={<List />} color="text-emerald-600">
                        <div className="space-y-6">
                            
                            <FormField label="Agenda-wise Discussion Summary" required>
                                <textarea 
                                    rows={5} 
                                    placeholder="Enter summary mapped to agenda items...&#10;Agenda 1: Board discussed the gaps in rural accessibility. Members noted that..." 
                                    className="form-input-apex resize-none text-sm leading-relaxed" 
                                />
                            </FormField>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <FormField label="Decisions Taken" required>
                                    <textarea 
                                        rows={4} 
                                        placeholder="1. Constitute sub-committee for rural survey.&#10;2. Request DEPwD for special fund allocation." 
                                        className="form-input-apex resize-none text-sm leading-relaxed" 
                                    />
                                </FormField>

                                <FormField label="Recommendations Approved">
                                    <textarea 
                                        rows={4} 
                                        placeholder="Reference specific recommendations agreed upon for formal issuance..." 
                                        className="form-input-apex resize-none text-sm leading-relaxed bg-indigo-50/30 border-indigo-100 focus:border-indigo-400" 
                                    />
                                </FormField>
                            </div>

                        </div>
                    </SectionCard>

                </div>

                {/* RIGHT: DOCUMENT UPLOAD */}
                <div className="space-y-8">
                    <SectionCard title="Signed Minutes Upload" icon={<UploadCloud />} color="text-purple-600">
                        <div className="space-y-4">
                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-relaxed mb-4">
                                Upload the final, digitally signed Minutes of Meeting (MoM) approved by the Chairperson.
                            </p>

                            {/* Upload Dropzone */}
                            <div className="border-2 border-dashed border-purple-200 bg-purple-50/50 rounded-3xl p-8 flex flex-col items-center justify-center text-center hover:bg-purple-50 hover:border-purple-400 transition-all cursor-pointer group h-[340px]">
                                <div className="h-20 w-20 rounded-2xl bg-white shadow-sm border border-purple-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <FileText size={32} className="text-purple-600" />
                                </div>
                                <p className="text-xs font-black text-slate-700 uppercase tracking-widest mb-2">Upload Final MoM</p>
                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-4 leading-relaxed">PDF or DOCX required for archival and circulation. Max 15MB.</p>
                                <Button variant="outline" className="mt-8 bg-white border-2 border-purple-100 text-purple-700 text-[10px] font-black uppercase tracking-widest h-12 px-8 rounded-xl hover:bg-purple-600 hover:text-white transition-all shadow-sm">
                                    Select File
                                </Button>
                            </div>
                        </div>
                    </SectionCard>
                </div>
            </div>

            {/* RECENT MoM REGISTRY TABLE */}
            <Card className="rounded-[44px] border-2 border-slate-100 shadow-sm overflow-hidden bg-white mt-8">
                <CardHeader className="p-0 border-b-2 border-slate-100">
                    <div className="p-8 bg-gradient-to-r from-slate-900 via-slate-800 to-black text-white relative overflow-hidden flex flex-col md:flex-row justify-between items-center gap-6">
                        <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] bg-fixed" />
                        
                        <div className="relative z-10 flex items-center gap-4">
                            <div className="h-12 w-12 rounded-2xl bg-white/10 backdrop-blur-md border-2 border-white/20 flex items-center justify-center shadow-xl">
                                <BookOpen size={20} className="text-white" />
                            </div>
                            <div>
                                <CardTitle className="text-lg font-black uppercase tracking-tight">MoM Finalisation Ledger</CardTitle>
                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Recently drafted and approved minutes</p>
                            </div>
                        </div>

                        <div className="relative z-10 flex gap-4 w-full md:w-auto">
                            <div className="relative group flex-1 md:w-64">
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-white/50" />
                                <input className="w-full pl-11 pr-6 py-3 border-2 border-white/20 bg-white/5 rounded-xl text-[10px] font-black uppercase outline-none text-white focus:bg-white/10 transition-all" placeholder="Search Meeting Ref..." />
                            </div>
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="p-0 overflow-x-auto">
                    <Table>
                        <TableHeader className="bg-slate-50">
                            <TableRow className="border-b-2 border-slate-100">
                                <TableHead className="px-8 py-5 text-[9px] font-black uppercase tracking-[0.2em] text-slate-400">Meeting Ref</TableHead>
                                <TableHead className="py-5 text-[9px] font-black uppercase tracking-[0.2em] text-slate-400">Date Convened</TableHead>
                                <TableHead className="py-5 text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 text-center">Attendance</TableHead>
                                <TableHead className="py-5 text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 text-center">Status</TableHead>
                                <TableHead className="px-8 py-5 text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 text-right">Document</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody className="divide-y divide-slate-100">
                            
                            <MoMRow 
                                refNo="NABD/MTG/2024-46" 
                                date="22 Aug 2024" 
                                attendance="94%" 
                                status="FINALIZED" 
                                docStatus="UPLOADED"
                            />
                            <MoMRow 
                                refNo="NABD/MTG/2024-45" 
                                date="10 May 2024" 
                                attendance="88%" 
                                status="FINALIZED" 
                                docStatus="UPLOADED"
                            />
                            <MoMRow 
                                refNo="NABD/MTG/2024-44" 
                                date="12 Feb 2024" 
                                attendance="82%" 
                                status="DRAFT" 
                                docStatus="PENDING" alert
                            />

                        </TableBody>
                    </Table>
                </CardContent>
            </Card>

        </div>
    );
}

/* UI SUB-COMPONENTS */

function SectionCard({ title, icon, color, children }: any) {
    return (
        <Card className="rounded-[32px] border-2 border-slate-100 bg-white shadow-sm overflow-hidden group hover:shadow-xl transition-all duration-500 h-full">
            <CardHeader className="p-8 border-b-2 border-slate-50 bg-slate-50/50 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
                <div className="flex items-center gap-4 relative z-10">
                    <div className={`h-10 w-10 rounded-xl bg-white shadow-sm border border-slate-100 flex items-center justify-center ${color}`}>
                        {icon}
                    </div>
                    <CardTitle className="text-sm font-black uppercase tracking-[0.2em] text-slate-900">{title}</CardTitle>
                </div>
            </CardHeader>
            <CardContent className="p-8 relative overflow-hidden">
                <div className="absolute inset-0 opacity-[0.01] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/topography.png')]" />
                <div className="relative z-10">{children}</div>
            </CardContent>
        </Card>
    );
}

function FormField({ label, required, children, className }: any) {
    return (
        <div className={`space-y-2 ${className}`}>
            <label className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">
                {label} {required && <span className="text-red-500">*</span>}
            </label>
            {children}
        </div>
    );
}

function AttendanceRow({ name, role }: any) {
    const [isPresent, setIsPresent] = useState(true);

    return (
        <div className="flex items-center justify-between p-3 rounded-xl bg-white border-2 border-transparent hover:border-slate-100 transition-colors">
            <div className="flex flex-col">
                <span className="text-xs font-black text-slate-900">{name}</span>
                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">{role}</span>
            </div>
            <div className="flex gap-2">
                <button 
                    onClick={() => setIsPresent(true)}
                    className={`h-8 px-4 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all ${isPresent ? 'bg-emerald-100 text-emerald-700 border-2 border-emerald-200' : 'bg-slate-50 text-slate-400 border-2 border-transparent hover:bg-slate-100'}`}
                >
                    Present
                </button>
                <button 
                    onClick={() => setIsPresent(false)}
                    className={`h-8 px-4 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all ${!isPresent ? 'bg-red-100 text-red-700 border-2 border-red-200' : 'bg-slate-50 text-slate-400 border-2 border-transparent hover:bg-slate-100'}`}
                >
                    Absent
                </button>
            </div>
        </div>
    );
}

function MoMRow({ refNo, date, attendance, status, docStatus, alert }: any) {
    const isFinal = status === 'FINALIZED';

    return (
        <TableRow className="border-none hover:bg-slate-50 transition-all group">
            <TableCell className="px-8 py-5">
                <div className="flex flex-col">
                    <span className="text-xs font-black text-slate-900 uppercase tracking-tight">{refNo}</span>
                    <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">Reference ID</span>
                </div>
            </TableCell>
            <TableCell className="py-5">
                <span className="font-mono font-black text-[11px] text-indigo-700">{date}</span>
            </TableCell>
            <TableCell className="py-5 text-center">
                <span className="font-mono font-bold text-slate-700">{attendance}</span>
            </TableCell>
            <TableCell className="py-5 text-center">
                <Badge className={`border-none text-[9px] font-black uppercase tracking-widest px-3 py-1 ${isFinal ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'}`}>
                    {status}
                </Badge>
            </TableCell>
            <TableCell className="px-8 py-5 text-right">
                <Badge variant="outline" className={`border-2 text-[9px] font-black uppercase tracking-widest px-3 py-1 bg-white ${alert ? 'border-red-200 text-red-600 animate-pulse' : 'border-slate-200 text-slate-600'}`}>
                    {docStatus}
                </Badge>
            </TableCell>
        </TableRow>
    );
}