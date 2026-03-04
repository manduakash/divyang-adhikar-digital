// app/dashboard/nabd/data-entry/recommendations/page.tsx
"use client";
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
    Table, TableBody, TableCell, TableHead, TableHeader, TableRow
} from "@/components/ui/table";
import {
    Lightbulb, Send, History, Building2, Calendar,
    Tag, FileText, AlertTriangle, CheckCircle2,
    Search, Briefcase, Zap, Info
} from "lucide-react";

export default function RecommendationsAdvisoryPage() {
    const [priority, setPriority] = useState("HIGH");

    return (
        <div className="space-y-8 animate-in fade-in duration-1000 pb-20 font-sans selection:bg-indigo-100">

            {/* PAGE HEADER */}
            <div className="flex flex-col xl:flex-row justify-between items-start xl:items-end gap-6 relative">
                <div className="space-y-2">
                    <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border-2 border-indigo-100">
                        <Lightbulb size={14} /> Advisory Output
                    </div>
                    <h1 className="text-5xl font-black text-slate-900 tracking-tighter uppercase leading-none">Recommendations & Advisory</h1>
                    <p className="text-slate-500 font-medium text-lg italic underline underline-offset-8 decoration-indigo-100">
                        Capture and officially issue policy-level advisories from the Board.
                    </p>
                </div>
                <div className="flex gap-4">
                    <Button variant="outline" className="h-14 px-8 rounded-full border-2 border-slate-200 font-black uppercase tracking-widest text-[10px] bg-white shadow-xl hover:bg-slate-50 transition-all">
                        <History size={16} className="mr-2" /> View Registry
                    </Button>
                    <Button className="h-14 px-8 rounded-full bg-indigo-600 text-white font-black uppercase tracking-widest text-[10px] shadow-xl hover:bg-indigo-700 transition-all gap-2 group">
                        <Send size={16} /> Issue Advisory Note
                    </Button>
                </div>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
                
                {/* LEFT: CORE ADVISORY DETAILS (Spans 2 columns) */}
                <div className="xl:col-span-2 space-y-8">
                    
                    <SectionCard title="Advisory Drafting Details" icon={<FileText />} color="text-blue-600">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            
                            <FormField label="Recommendation Ref No." required>
                                <div className="relative">
                                    <Tag className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 pointer-events-none" />
                                    <input type="text" defaultValue="NABD/REC/2024-112" className="form-input-apex pl-12 font-mono text-indigo-700" />
                                </div>
                            </FormField>

                            <FormField label="Originating Meeting Ref" required>
                                <select className="form-input-apex appearance-none cursor-pointer">
                                    <option value="" disabled selected>Select Source Meeting...</option>
                                    <option value="MTG-47">NABD/MTG/2024-47 (14 Nov 2024)</option>
                                    <option value="MTG-46">NABD/MTG/2024-46 (22 Aug 2024)</option>
                                    <option value="MTG-45">NABD/MTG/2024-45 (10 May 2024)</option>
                                </select>
                            </FormField>

                            <FormField label="Subject / Theme" required className="md:col-span-2">
                                <input type="text" placeholder="e.g., Implementation of Universal Design in Public Transport" className="form-input-apex" />
                            </FormField>

                            <FormField label="Intended Recipient (Ministry / Authority)" required className="md:col-span-2">
                                <div className="relative">
                                    <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 pointer-events-none" />
                                    <input type="text" placeholder="e.g., Ministry of Road Transport & Highways (MoRTH)" className="form-input-apex pl-12" />
                                </div>
                            </FormField>

                            <FormField label="Recommendation Text" required className="md:col-span-2">
                                <textarea 
                                    rows={6} 
                                    placeholder="Draft the formal recommendation text here. Clearly state the policy gap, the Board's observation, and the actionable directive for the recipient authority..." 
                                    className="form-input-apex resize-none text-sm leading-relaxed" 
                                />
                            </FormField>

                        </div>
                    </SectionCard>

                </div>

                {/* RIGHT: METADATA & PRIORITY */}
                <div className="space-y-8">
                    <SectionCard title="Classification & Issuance" icon={<Zap />} color="text-amber-600">
                        <div className="space-y-8">
                            
                            <FormField label="Priority Level" required>
                                <div className="flex flex-col gap-3 p-3 bg-slate-50 border-2 border-slate-100 rounded-2xl">
                                    <button 
                                        type="button"
                                        onClick={() => setPriority('HIGH')}
                                        className={`px-6 py-4 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all flex items-center justify-between ${priority === 'HIGH' ? 'bg-red-500 text-white shadow-lg shadow-red-200' : 'text-slate-500 bg-white hover:bg-slate-100 border border-slate-200'}`}
                                    >
                                        <span className="flex items-center gap-2"><AlertTriangle size={16} /> HIGH / URGENT</span>
                                        {priority === 'HIGH' && <CheckCircle2 size={16} />}
                                    </button>

                                    <button 
                                        type="button"
                                        onClick={() => setPriority('MEDIUM')}
                                        className={`px-6 py-4 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all flex items-center justify-between ${priority === 'MEDIUM' ? 'bg-amber-500 text-white shadow-lg shadow-amber-200' : 'text-slate-500 bg-white hover:bg-slate-100 border border-slate-200'}`}
                                    >
                                        <span className="flex items-center gap-2"><Zap size={16} /> MEDIUM / STANDARD</span>
                                        {priority === 'MEDIUM' && <CheckCircle2 size={16} />}
                                    </button>

                                    <button 
                                        type="button"
                                        onClick={() => setPriority('ROUTINE')}
                                        className={`px-6 py-4 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all flex items-center justify-between ${priority === 'ROUTINE' ? 'bg-indigo-500 text-white shadow-lg shadow-indigo-200' : 'text-slate-500 bg-white hover:bg-slate-100 border border-slate-200'}`}
                                    >
                                        <span className="flex items-center gap-2"><Info size={16} /> ROUTINE / LONG-TERM</span>
                                        {priority === 'ROUTINE' && <CheckCircle2 size={16} />}
                                    </button>
                                </div>
                            </FormField>

                            <FormField label="Date Issued" required>
                                <div className="relative">
                                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 pointer-events-none" />
                                    <input type="date" className="form-input-apex pl-12" />
                                </div>
                            </FormField>

                        </div>
                    </SectionCard>
                </div>
            </div>

            {/* RECENT RECOMMENDATIONS REGISTRY TABLE */}
            <Card className="rounded-[44px] border-2 border-slate-100 shadow-sm overflow-hidden bg-white mt-8">
                <CardHeader className="p-0 border-b-2 border-slate-100">
                    <div className="p-8 bg-gradient-to-r from-slate-900 via-slate-800 to-black text-white relative overflow-hidden flex flex-col md:flex-row justify-between items-center gap-6">
                        <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] bg-fixed" />
                        
                        <div className="relative z-10 flex items-center gap-4">
                            <div className="h-12 w-12 rounded-2xl bg-white/10 backdrop-blur-md border-2 border-white/20 flex items-center justify-center shadow-xl">
                                <Briefcase size={20} className="text-white" />
                            </div>
                            <div>
                                <CardTitle className="text-lg font-black uppercase tracking-tight">Advisory Note Registry</CardTitle>
                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Recently dispatched policy recommendations</p>
                            </div>
                        </div>

                        <div className="relative z-10 flex gap-4 w-full md:w-auto">
                            <div className="relative group flex-1 md:w-64">
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-white/50" />
                                <input className="w-full pl-11 pr-6 py-3 border-2 border-white/20 bg-white/5 rounded-xl text-[10px] font-black uppercase outline-none text-white focus:bg-white/10 transition-all" placeholder="Search Advisory Ref..." />
                            </div>
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="p-0 overflow-x-auto">
                    <Table>
                        <TableHeader className="bg-slate-50">
                            <TableRow className="border-b-2 border-slate-100">
                                <TableHead className="px-8 py-5 text-[9px] font-black uppercase tracking-[0.2em] text-slate-400">Reference No.</TableHead>
                                <TableHead className="py-5 text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 w-1/3">Subject / Theme</TableHead>
                                <TableHead className="py-5 text-[9px] font-black uppercase tracking-[0.2em] text-slate-400">Recipient Authority</TableHead>
                                <TableHead className="py-5 text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 text-center">Priority</TableHead>
                                <TableHead className="px-8 py-5 text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 text-right">Date Issued</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody className="divide-y divide-slate-100">
                            
                            <AdvisoryRow 
                                refNo="NABD/REC/2024-110" 
                                subject="Mandatory Ramps in Tier-2 Railway Stations" 
                                recipient="Ministry of Railways"
                                priority="HIGH" 
                                date="28 Aug 2024"
                            />
                            <AdvisoryRow 
                                refNo="NABD/REC/2024-109" 
                                subject="Special Educator Vacancy Fulfillment" 
                                recipient="Ministry of Education"
                                priority="MEDIUM" 
                                date="15 Jun 2024"
                            />
                            <AdvisoryRow 
                                refNo="NABD/REC/2024-108" 
                                subject="Annual Accessibility Audit Compliance" 
                                recipient="All Central Ministries"
                                priority="ROUTINE" 
                                date="20 May 2024"
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

function AdvisoryRow({ refNo, subject, recipient, priority, date }: any) {
    const isHigh = priority === 'HIGH';
    const isMedium = priority === 'MEDIUM';
    const isRoutine = priority === 'ROUTINE';

    const priorityBadge = isHigh 
        ? "bg-red-50 text-red-700 border-red-200"
        : isMedium 
            ? "bg-amber-50 text-amber-700 border-amber-200"
            : "bg-indigo-50 text-indigo-700 border-indigo-200";

    return (
        <TableRow className="border-none hover:bg-slate-50 transition-all group">
            <TableCell className="px-8 py-5">
                <span className="font-mono text-[11px] font-black text-slate-900">{refNo}</span>
            </TableCell>
            <TableCell className="py-5">
                <span className="text-xs font-bold text-slate-700 line-clamp-2">{subject}</span>
            </TableCell>
            <TableCell className="py-5">
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{recipient}</span>
            </TableCell>
            <TableCell className="py-5 text-center">
                <Badge className={`border-2 text-[8px] font-black uppercase tracking-widest px-3 py-1 ${priorityBadge}`}>
                    {priority}
                </Badge>
            </TableCell>
            <TableCell className="px-8 py-5 text-right">
                <span className="font-mono text-[11px] font-black text-slate-500">{date}</span>
            </TableCell>
        </TableRow>
    );
}