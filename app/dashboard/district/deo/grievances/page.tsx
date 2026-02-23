// app/dashboard/deo/grievances/action/page.tsx
"use client";
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
    MessageSquare, GraduationCap, School, Gavel,
    Calendar, Upload, Sparkles, CheckCircle2,
    ShieldAlert, ArrowLeft, Search, FileText,
    Info, AlertTriangle
} from "lucide-react";
import {
    Select, SelectContent, SelectItem, SelectTrigger, SelectValue
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";

export default function EducationGrievanceAction() {
    const [directionIssued, setDirectionIssued] = useState(false);

    return (
        <div className="max-w-6xl mx-auto pb-20 animate-in fade-in slide-in-from-bottom-4 duration-700">

            {/* 1. ADMINISTRATIVE HEADER */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10">
                <div className="space-y-1">
                    <div className="flex items-center gap-2 text-indigo-600 font-black uppercase text-[10px] tracking-[0.2em]">
                        <ArrowLeft size={14} /> Grievance Registry / Action Entry
                    </div>
                    <h1 className="text-4xl font-black text-slate-900 tracking-tighter uppercase">Grievance Investigation</h1>
                    <p className="text-slate-500 font-medium">Record DEO findings and issue directives for inclusive education compliance.</p>
                </div>
                <div className="flex gap-3">
                    <Button variant="outline" className="h-14 px-8 rounded-2xl border-slate-200 font-bold">Save as Draft</Button>
                    <Button className="h-14 px-10 rounded-2xl bg-indigo-600 text-white font-black uppercase tracking-widest text-[10px] shadow-2xl shadow-indigo-100 transition-all hover:bg-indigo-700">
                        Submit Statutory Action
                    </Button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                {/* MAIN DATA ENTRY COLUMN (Section 4.1) */}
                <div className="lg:col-span-2 space-y-8">

                    <Card className="rounded-[40px] border-slate-200 shadow-sm overflow-hidden bg-white">
                        <CardHeader className="p-8 border-b border-slate-50 bg-slate-50/30">
                            <CardTitle className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Section 4.1: Grievance Action Parameters</CardTitle>
                        </CardHeader>
                        <CardContent className="p-10 space-y-10">

                            {/* CORE IDENTIFIERS */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-3">
                                    <label className="text-[11px] font-black uppercase text-slate-500 ml-1">1. Grievance ID</label>
                                    <div className="relative group">
                                        <MessageSquare className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-300 group-focus-within:text-indigo-600 transition-colors" />
                                        <Input
                                            placeholder="e.g. GRV-EDU-2024-910"
                                            className="h-14 pl-12 rounded-2xl bg-slate-50 border-2 font-mono font-black text-indigo-600 uppercase"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <label className="text-[11px] font-black uppercase text-slate-500 ml-1">2. Student Name / PwD ID</label>
                                    <div className="relative group">
                                        <GraduationCap className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-300 group-focus-within:text-indigo-600 transition-colors" />
                                        <Input
                                            placeholder="Enter Student ID or Full Name"
                                            className="h-14 pl-12 rounded-2xl bg-slate-50 border-2 font-bold text-slate-800"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* INSTITUTION & NATURE OF ISSUE */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-3">
                                    <label className="text-[11px] font-black uppercase text-slate-500 ml-1">3. Institution Name</label>
                                    <div className="relative group">
                                        <School className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-300" />
                                        <Input
                                            placeholder="Search Registered School..."
                                            className="h-14 pl-12 rounded-2xl bg-slate-50 border-2 font-bold text-slate-800"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <label className="text-[11px] font-black uppercase text-slate-500 ml-1">4. Nature of Issue</label>
                                    <Select>
                                        <SelectTrigger className="h-14 rounded-2xl bg-slate-50 border-2 px-5 font-bold text-slate-700">
                                            <SelectValue placeholder="Select Issue Category" />
                                        </SelectTrigger>
                                        <SelectContent className="rounded-2xl">
                                            <SelectItem value="admission" className="font-bold py-3">Denial of Admission</SelectItem>
                                            <SelectItem value="facility" className="font-bold py-3">Inaccessible Facility</SelectItem>
                                            <SelectItem value="accommodation" className="font-bold py-3">Lack of Accommodation</SelectItem>
                                            <SelectItem value="discrimination" className="font-bold py-3">Discrimination / Harassment</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>

                            {/* INVESTIGATION FINDINGS */}
                            <div className="space-y-4">
                                <div className="flex justify-between items-center px-1">
                                    <label className="text-[11px] font-black uppercase text-slate-500">5. DEO Investigation Findings</label>
                                    <button className="flex items-center gap-1.5 text-indigo-600 font-bold text-[10px] uppercase tracking-wider bg-indigo-50 px-3 py-1.5 rounded-full border border-indigo-100 hover:bg-indigo-100 transition-colors shadow-sm">
                                        <Sparkles size={12} /> AI Summary Assist
                                    </button>
                                </div>
                                <Textarea
                                    className="min-h-[200px] rounded-[32px] bg-slate-50 border-2 p-8 text-sm font-medium leading-relaxed resize-none focus:ring-2 focus:ring-indigo-600"
                                    placeholder="Provide detailed findings of the hearing or site inspection. Cross-reference with Section 16 of the PwD Act..."
                                />
                            </div>

                            {/* STATUTORY DIRECTION BOX */}
                            <div className="p-10 bg-indigo-50/50 rounded-[48px] border border-indigo-100 space-y-8">
                                <div className="flex items-center justify-between">
                                    <div className="space-y-1">
                                        <p className="text-md font-black text-indigo-900 uppercase tracking-tight">Issue Official Direction?</p>
                                        <p className="text-xs text-indigo-600 font-medium tracking-tight">This will generate a formal order to the Head of Institution.</p>
                                    </div>
                                    <Switch checked={directionIssued} onCheckedChange={setDirectionIssued} className="data-[state=checked]:bg-indigo-600" />
                                </div>

                                {directionIssued && (
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 animate-in slide-in-from-top-4 duration-500">
                                        <div className="space-y-4">
                                            <label className="text-[10px] font-black uppercase text-indigo-500 ml-1">Compliance Deadline</label>
                                            <div className="relative group">
                                                <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-indigo-400" />
                                                <Input type="date" className="h-14 pl-12 rounded-2xl bg-white border-indigo-100 font-bold text-slate-800" />
                                            </div>
                                        </div>
                                        <div className="flex flex-col justify-end pb-1">
                                            <p className="text-[10px] font-bold text-indigo-400 italic leading-relaxed">
                                                *Under Rule 15, institutions must report compliance within the specified window or face administrative penalty.
                                            </p>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* DOCUMENT UPLOAD */}
                            <div className="space-y-4 pt-4 border-t border-slate-50">
                                <label className="text-[11px] font-black uppercase text-slate-500 ml-1">6. Supporting Evidence / hearing minutes</label>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="border-2 border-dashed border-indigo-100 rounded-[32px] p-10 flex flex-col items-center justify-center bg-slate-50 group hover:bg-white hover:border-indigo-400 transition-all cursor-pointer">
                                        <Upload className="text-slate-300 group-hover:text-indigo-600 mb-3" size={32} />
                                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Upload Signed Action Report</span>
                                        <span className="text-[8px] text-slate-300 mt-2 italic uppercase">Secure PDF/JPG (Max 10MB)</span>
                                    </div>
                                    {/* File Active State */}
                                    <div className="bg-white border border-indigo-50 rounded-[32px] p-8 flex flex-col justify-center shadow-sm relative overflow-hidden group">
                                        <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity"><FileText size={80} /></div>
                                        <div className="flex items-center gap-4 relative z-10">
                                            <div className="h-12 w-12 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600"><FileText size={24} /></div>
                                            <div>
                                                <p className="text-sm font-black text-slate-800">hearing_transcript_04.pdf</p>
                                                <p className="text-[9px] font-bold text-green-600 uppercase tracking-widest">Verified Digital Entry</p>
                                            </div>
                                        </div>
                                        <Button variant="ghost" className="text-red-500 font-black uppercase text-[10px] tracking-widest w-fit mt-4 hover:bg-red-50 rounded-xl px-4">Remove Document</Button>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* SIDEBAR: STATUTORY CONTEXT (DEO Specific) */}
                <div className="space-y-8 sticky top-28 h-fit">
                    <Card className="rounded-[40px] border-2 bg-slate-900 text-white p-8 shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-6 opacity-10"><ShieldAlert size={100} /></div>
                        <div className="relative z-10 space-y-6">
                            <div className="flex items-center gap-3">
                                <Gavel className="text-indigo-400" />
                                <h3 className="text-sm font-black uppercase tracking-widest">DEO Mandate</h3>
                            </div>
                            <div className="space-y-4">
                                <p className="text-xs font-bold text-slate-400 leading-relaxed italic">
                                    "Every educational institution shall provide reasonable accommodation and ensure that the education imparted to PwDs is as effective as that provided to others."
                                </p>
                                <div className="pt-4 border-t border-white/10 space-y-3">
                                    <div className="flex justify-between text-[10px] font-black uppercase text-slate-500">
                                        <span>Active School Grievances</span>
                                        <span className="text-indigo-400">18</span>
                                    </div>
                                    <div className="flex justify-between text-[10px] font-black uppercase text-slate-500">
                                        <span>Avg Resolution Time</span>
                                        <span className="text-indigo-400">14 Days</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Card>

                    <Card className="rounded-[40px] border-slate-200 p-8 bg-white shadow-sm">
                        <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-6 border-b border-slate-50 pb-4">Investigation Checklist</h4>
                        <div className="space-y-5">
                            <CheckItem text="Verify Student PwD Certificate validity." />
                            <CheckItem text="Inspect physical site for facility claims." />
                            <CheckItem text="Consult District Education Inspector." />
                            <CheckItem text="Cross-verify School Enrollment Registry." />
                        </div>
                    </Card>

                    <div className="p-6 bg-amber-50 rounded-[32px] border border-amber-100 flex gap-4">
                        <AlertTriangle className="text-amber-600 shrink-0" size={24} />
                        <p className="text-[11px] font-bold text-amber-800 leading-relaxed">
                            <b>Statutory Warning:</b> Discrimination in admission (Section 16) is a high-priority default. Redressal must be immediate.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
}

/* UI HELPER COMPONENTS */

function CheckItem({ text }: { text: string }) {
    return (
        <div className="flex items-start gap-3">
            <div className="h-5 w-5 rounded-full bg-slate-50 flex items-center justify-center border border-slate-100 shrink-0 mt-0.5 shadow-inner">
                <CheckCircle2 size={12} className="text-slate-300" />
            </div>
            <span className="text-xs font-bold text-slate-600 tracking-tight leading-snug">{text}</span>
        </div>
    )
}