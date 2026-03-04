// app/dashboard/nabd/data-entry/board-composition/page.tsx
"use client";
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
    Table, TableBody, TableCell, TableHead, TableHeader, TableRow
} from "@/components/ui/table";
import {
    ShieldCheck, Users, Calendar, UploadCloud,
    Save, FileText, CheckCircle2, History,
    UserCircle, Landmark, Briefcase, FileSignature,
    Plus, Search, Edit2, AlertCircle
} from "lucide-react";

export default function BoardCompositionPage() {
    const [status, setStatus] = useState("ACTIVE");

    return (
        <div className="space-y-8 animate-in fade-in duration-1000 pb-20 font-sans selection:bg-indigo-100">

            {/* PAGE HEADER */}
            <div className="flex flex-col xl:flex-row justify-between items-start xl:items-end gap-6 relative">
                <div className="space-y-2">
                    <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border-2 border-indigo-100">
                        <Users size={14} /> Advisory Data Entry
                    </div>
                    <h1 className="text-5xl font-black text-slate-900 tracking-tighter uppercase leading-none">Board Composition & Tenure</h1>
                    <p className="text-slate-500 font-medium text-lg italic underline underline-offset-8 decoration-indigo-100">
                        Maintain current and historical structure of the National Advisory Board.
                    </p>
                </div>
                <div className="flex gap-4">
                    <Button variant="outline" className="h-14 px-8 rounded-full border-2 border-slate-200 font-black uppercase tracking-widest text-[10px] bg-white shadow-xl hover:bg-slate-50 transition-all">
                        <History size={16} className="mr-2" /> View Archives
                    </Button>
                    <Button className="h-14 px-8 rounded-full bg-indigo-600 text-white font-black uppercase tracking-widest text-[10px] shadow-xl hover:bg-indigo-700 transition-all gap-2 group">
                        <Save size={16} /> Save Member Record
                    </Button>
                </div>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">

                {/* LEFT: DATA ENTRY FORM (Spans 2 columns) */}
                <div className="xl:col-span-2 space-y-8">
                    <SectionCard title="Nomination & Tenure Details" icon={<UserCircle />} color="text-blue-600">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                            {/* Member Identity */}
                            <FormField label="Member Full Name" required className="md:col-span-2">
                                <input type="text" placeholder="e.g., Dr. Virendra Kumar" className="form-input-apex" />
                            </FormField>

                            {/* Classification */}
                            <FormField label="Board Role" required>
                                <select className="form-input-apex appearance-none cursor-pointer">
                                    <option value="" disabled selected>Select Role...</option>
                                    <option value="Chairperson">Chairperson</option>
                                    <option value="Member Secretary">Member Secretary</option>
                                    <option value="Member">Member</option>
                                </select>
                            </FormField>

                            <FormField label="Representing Category" required>
                                <select className="form-input-apex appearance-none cursor-pointer">
                                    <option value="" disabled selected>Select Category...</option>
                                    <option value="Ministry">Ministry / Gov Dept.</option>
                                    <option value="State">State Representative</option>
                                    <option value="NGO">NGO / Civil Society</option>
                                    <option value="Expert">Subject Expert</option>
                                    <option value="PwD">Person with Disability (PwD)</option>
                                    <option value="Other">Other Category</option>
                                </select>
                            </FormField>

                            {/* Timeline */}
                            <FormField label="Nomination Date" required>
                                <div className="relative">
                                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 pointer-events-none" />
                                    <input type="date" className="form-input-apex pl-12" />
                                </div>
                            </FormField>

                            <div className="hidden md:block" /> {/* Spacer */}

                            <FormField label="Tenure Start Date" required>
                                <div className="relative">
                                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 pointer-events-none" />
                                    <input type="date" className="form-input-apex pl-12" />
                                </div>
                            </FormField>

                            <FormField label="Tenure End Date" required>
                                <div className="relative">
                                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 pointer-events-none" />
                                    <input type="date" className="form-input-apex pl-12" />
                                </div>
                            </FormField>

                            {/* Status */}
                            <FormField label="Operational Status" required className="md:col-span-2">
                                <div className="flex gap-4 p-2 bg-slate-50 border-2 border-slate-100 rounded-2xl w-fit">
                                    <button
                                        type="button"
                                        onClick={() => setStatus('ACTIVE')}
                                        className={`px-8 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all flex items-center gap-2 ${status === 'ACTIVE' ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-200' : 'text-slate-500 hover:bg-slate-200'}`}
                                    >
                                        <CheckCircle2 size={16} /> Active Member
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => setStatus('INACTIVE')}
                                        className={`px-8 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all flex items-center gap-2 ${status === 'INACTIVE' ? 'bg-slate-800 text-white shadow-lg shadow-slate-300' : 'text-slate-500 hover:bg-slate-200'}`}
                                    >
                                        <AlertCircle size={16} /> Inactive / Retired
                                    </button>
                                </div>
                            </FormField>

                        </div>
                    </SectionCard>
                </div>

                {/* RIGHT: DOCUMENT UPLOAD */}
                <div className="space-y-8">
                    <SectionCard title="Statutory Notification" icon={<FileSignature />} color="text-purple-600">
                        <div className="space-y-4">
                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-relaxed mb-4">
                                Upload the official gazette notification or appointment order validating this tenure.
                            </p>

                            {/* Upload Dropzone */}
                            <div className="border-2 border-dashed border-indigo-200 bg-indigo-50/50 rounded-3xl p-8 flex flex-col items-center justify-center text-center hover:bg-indigo-50 hover:border-indigo-400 transition-all cursor-pointer group h-64">
                                <div className="h-16 w-16 rounded-2xl bg-white shadow-sm border border-indigo-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                    <UploadCloud size={24} className="text-indigo-600" />
                                </div>
                                <p className="text-xs font-black text-slate-700 uppercase tracking-widest mb-1">Upload Notification</p>
                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">PDF, DOCX up to 10MB</p>
                                <Button variant="outline" className="mt-6 bg-white border-2 border-indigo-100 text-indigo-700 text-[10px] font-black uppercase tracking-widest h-10 px-6 rounded-xl hover:bg-indigo-600 hover:text-white transition-all">
                                    Browse Files
                                </Button>
                            </div>
                        </div>
                    </SectionCard>
                </div>
            </div>

            {/* RECENT RECORDS TABLE */}
            <Card className="rounded-[44px] border-2 border-slate-100 shadow-sm overflow-hidden bg-white mt-8">
                <CardHeader className="p-0 border-b-2 border-slate-100">
                    <div className="p-8 bg-gradient-to-r from-slate-900 via-slate-800 to-black text-white relative overflow-hidden flex flex-col md:flex-row justify-between items-center gap-6">
                        <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] bg-fixed" />

                        <div className="relative z-10 flex items-center gap-4">
                            <div className="h-12 w-12 rounded-2xl bg-white/10 backdrop-blur-md border-2 border-white/20 flex items-center justify-center shadow-xl">
                                <Briefcase size={20} className="text-white" />
                            </div>
                            <div>
                                <CardTitle className="text-lg font-black uppercase tracking-tight">Board Composition Registry</CardTitle>
                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Recently added or updated tenures</p>
                            </div>
                        </div>

                        <div className="relative z-10 flex gap-4 w-full md:w-auto">
                            <div className="relative group flex-1 md:w-64">
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-white/50" />
                                <input className="w-full pl-11 pr-6 py-3 border-2 border-white/20 bg-white/5 rounded-xl text-[10px] font-black uppercase outline-none text-white focus:bg-white/10 transition-all" placeholder="Search Members..." />
                            </div>
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="p-0 overflow-x-auto">
                    <Table>
                        <TableHeader className="bg-slate-50">
                            <TableRow className="border-b-2 border-slate-100">
                                <TableHead className="px-8 py-5 text-[9px] font-black uppercase tracking-[0.2em] text-slate-400">Member Info</TableHead>
                                <TableHead className="py-5 text-[9px] font-black uppercase tracking-[0.2em] text-slate-400">Category</TableHead>
                                <TableHead className="py-5 text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 text-center">Tenure Range</TableHead>
                                <TableHead className="py-5 text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 text-center">Status</TableHead>
                                <TableHead className="px-8 py-5 text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 text-right">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody className="divide-y divide-slate-100">

                            <RegistryRow
                                name="Dr. Virendra Kumar" role="Chairperson"
                                category="Ministry / Gov Dept."
                                start="12 Jan 2022" end="11 Jan 2025"
                                status="ACTIVE"
                            />
                            <RegistryRow
                                name="Smt. Anjali Bhawra" role="Member Secretary"
                                category="Ministry / Gov Dept."
                                start="05 Mar 2023" end="04 Mar 2026"
                                status="ACTIVE"
                            />
                            <RegistryRow
                                name="Shri A.K. Sharma" role="Member"
                                category="State Representative"
                                start="10 Aug 2021" end="09 Aug 2024"
                                status="INACTIVE"
                            />
                            <RegistryRow
                                name="Ms. Meena Gupta" role="Member"
                                category="NGO / Civil Society"
                                start="15 Nov 2022" end="14 Nov 2025"
                                status="ACTIVE"
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

function RegistryRow({ name, role, category, start, end, status }: any) {
    const isActive = status === 'ACTIVE';
    return (
        <TableRow className="border-none hover:bg-slate-50 transition-all group">
            <TableCell className="px-8 py-5">
                <div className="flex flex-col">
                    <span className="text-xs font-black text-slate-900 uppercase tracking-tight">{name}</span>
                    <span className="text-[9px] font-bold text-indigo-600 uppercase tracking-widest mt-0.5">{role}</span>
                </div>
            </TableCell>
            <TableCell className="py-5">
                <Badge variant="outline" className="border-2 border-slate-200 text-slate-600 text-[9px] font-black uppercase tracking-widest px-3 py-1 bg-white">
                    {category}
                </Badge>
            </TableCell>
            <TableCell className="py-5 text-center">
                <div className="flex flex-col items-center">
                    <span className="font-mono font-black text-[10px] text-slate-700">{start}</span>
                    <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest">TO</span>
                    <span className="font-mono font-black text-[10px] text-slate-700">{end}</span>
                </div>
            </TableCell>
            <TableCell className="py-5 text-center">
                <Badge className={`border-none text-[9px] font-black uppercase tracking-widest px-3 py-1 ${isActive ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-200 text-slate-600'}`}>
                    {status}
                </Badge>
            </TableCell>
            <TableCell className="px-8 py-5 text-right">
                <Button variant="ghost" className="h-8 w-8 p-0 rounded-lg text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 transition-colors">
                    <Edit2 size={14} />
                </Button>
            </TableCell>
        </TableRow>
    );
}

/* 
Add to globals.css if not already present:
@layer components {
  .form-input-apex {
    @apply w-full border-2 border-slate-200 bg-slate-50/50 rounded-xl px-4 py-3 text-sm font-bold text-slate-900 focus:outline-none focus:border-indigo-600 focus:bg-white transition-all shadow-inner placeholder:text-slate-400;
  }
}
*/