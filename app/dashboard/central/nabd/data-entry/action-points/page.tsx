// app/dashboard/nabd/data-entry/action-points/page.tsx
"use client";
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
    Table, TableBody, TableCell, TableHead, TableHeader, TableRow
} from "@/components/ui/table";
import {
    Timer, Save, History, Target, Building2,
    Calendar, AlignLeft, CheckCircle2, CircleDashed,
    Search, Briefcase, MessageSquare, ListTodo
} from "lucide-react";

export default function ActionPointsTrackingPage() {
    const [status, setStatus] = useState("OPEN");

    return (
        <div className="space-y-8 animate-in fade-in duration-1000 pb-20 font-sans selection:bg-indigo-100">

            {/* PAGE HEADER */}
            <div className="flex flex-col xl:flex-row justify-between items-start xl:items-end gap-6 relative">
                <div className="space-y-2">
                    <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border-2 border-indigo-100">
                        <Timer size={14} /> Follow-Up Governance
                    </div>
                    <h1 className="text-5xl font-black text-slate-900 tracking-tighter uppercase leading-none">Action Points Tracking</h1>
                    <p className="text-slate-500 font-medium text-lg italic underline underline-offset-8 decoration-indigo-100">
                        Monitor and track non-binding follow-up actions arising from Board recommendations.
                    </p>
                </div>
                <div className="flex gap-4">
                    <Button variant="outline" className="h-14 px-8 rounded-full border-2 border-slate-200 font-black uppercase tracking-widest text-[10px] bg-white shadow-xl hover:bg-slate-50 transition-all">
                        <History size={16} className="mr-2" /> View All Actions
                    </Button>
                    <Button className="h-14 px-8 rounded-full bg-indigo-600 text-white font-black uppercase tracking-widest text-[10px] shadow-xl hover:bg-indigo-700 transition-all gap-2 group">
                        <Save size={16} /> Save Action Point
                    </Button>
                </div>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
                
                {/* LEFT: ACTION POINT DETAILS (Spans 2 columns) */}
                <div className="xl:col-span-2 space-y-8">
                    
                    <SectionCard title="Action Point Definition" icon={<ListTodo />} color="text-blue-600">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            
                            <FormField label="Source Recommendation Reference" required className="md:col-span-2">
                                <select className="form-input-apex appearance-none cursor-pointer">
                                    <option value="" disabled selected>Select Parent Recommendation...</option>
                                    <option value="REC-112">NABD/REC/2024-112: Universal Design in Public Transport</option>
                                    <option value="REC-111">NABD/REC/2024-111: Digital Accessibility Standards</option>
                                    <option value="REC-110">NABD/REC/2024-110: Mandatory Ramps in Tier-2 Railways</option>
                                </select>
                            </FormField>

                            <FormField label="Responsible Ministry / Authority" required className="md:col-span-2">
                                <div className="relative">
                                    <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 pointer-events-none" />
                                    <input type="text" placeholder="e.g., Ministry of Road Transport & Highways (MoRTH)" className="form-input-apex pl-12" />
                                </div>
                            </FormField>

                            <FormField label="Action Point Description" required className="md:col-span-2">
                                <div className="relative">
                                    <AlignLeft className="absolute left-4 top-4 h-4 w-4 text-slate-400 pointer-events-none" />
                                    <textarea 
                                        rows={4} 
                                        placeholder="Define the specific actionable task expected from the responsible authority..." 
                                        className="form-input-apex resize-none pl-12 pt-3.5 text-sm leading-relaxed" 
                                    />
                                </div>
                            </FormField>

                            <FormField label="Target Date" required>
                                <div className="relative">
                                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 pointer-events-none" />
                                    <input type="date" className="form-input-apex pl-12" />
                                </div>
                            </FormField>

                        </div>
                    </SectionCard>

                </div>

                {/* RIGHT: STATUS & REMARKS */}
                <div className="space-y-8">
                    <SectionCard title="Tracking Status & Remarks" icon={<Target />} color="text-amber-600">
                        <div className="space-y-6">
                            
                            <FormField label="Current Status" required>
                                <div className="flex flex-col gap-3 p-3 bg-slate-50 border-2 border-slate-100 rounded-2xl">
                                    <button 
                                        type="button"
                                        onClick={() => setStatus('OPEN')}
                                        className={`px-6 py-4 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all flex items-center justify-between ${status === 'OPEN' ? 'bg-amber-500 text-white shadow-lg shadow-amber-200' : 'text-slate-500 bg-white hover:bg-slate-100 border border-slate-200'}`}
                                    >
                                        <span className="flex items-center gap-2"><CircleDashed size={16} /> OPEN / PENDING</span>
                                        {status === 'OPEN' && <CheckCircle2 size={16} />}
                                    </button>

                                    <button 
                                        type="button"
                                        onClick={() => setStatus('CLOSED')}
                                        className={`px-6 py-4 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all flex items-center justify-between ${status === 'CLOSED' ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-200' : 'text-slate-500 bg-white hover:bg-slate-100 border border-slate-200'}`}
                                    >
                                        <span className="flex items-center gap-2"><CheckCircle2 size={16} /> CLOSED / RESOLVED</span>
                                        {status === 'CLOSED' && <CheckCircle2 size={16} />}
                                    </button>
                                </div>
                            </FormField>

                            <FormField label="Follow-up Remarks">
                                <div className="relative">
                                    <MessageSquare className="absolute left-4 top-4 h-4 w-4 text-slate-400 pointer-events-none" />
                                    <textarea 
                                        rows={5} 
                                        placeholder="Log ongoing updates, responses received from the Ministry, or reasons for closure..." 
                                        className="form-input-apex resize-none pl-12 pt-3.5 text-sm leading-relaxed bg-indigo-50/30" 
                                    />
                                </div>
                            </FormField>

                        </div>
                    </SectionCard>
                </div>
            </div>

            {/* RECENT ACTION POINTS TABLE */}
            <Card className="rounded-[44px] border-2 border-slate-100 shadow-sm overflow-hidden bg-white mt-8">
                <CardHeader className="p-0 border-b-2 border-slate-100">
                    <div className="p-8 bg-gradient-to-r from-slate-900 via-slate-800 to-black text-white relative overflow-hidden flex flex-col md:flex-row justify-between items-center gap-6">
                        <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] bg-fixed" />
                        
                        <div className="relative z-10 flex items-center gap-4">
                            <div className="h-12 w-12 rounded-2xl bg-white/10 backdrop-blur-md border-2 border-white/20 flex items-center justify-center shadow-xl">
                                <Briefcase size={20} className="text-white" />
                            </div>
                            <div>
                                <CardTitle className="text-lg font-black uppercase tracking-tight">Active Follow-up Ledger</CardTitle>
                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Recently logged and ongoing action points</p>
                            </div>
                        </div>

                        <div className="relative z-10 flex gap-4 w-full md:w-auto">
                            <div className="relative group flex-1 md:w-64">
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-white/50" />
                                <input className="w-full pl-11 pr-6 py-3 border-2 border-white/20 bg-white/5 rounded-xl text-[10px] font-black uppercase outline-none text-white focus:bg-white/10 transition-all" placeholder="Search Actions..." />
                            </div>
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="p-0 overflow-x-auto">
                    <Table>
                        <TableHeader className="bg-slate-50">
                            <TableRow className="border-b-2 border-slate-100">
                                <TableHead className="px-8 py-5 text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 w-1/4">Parent Recommendation</TableHead>
                                <TableHead className="py-5 text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 w-1/3">Action Point</TableHead>
                                <TableHead className="py-5 text-[9px] font-black uppercase tracking-[0.2em] text-slate-400">Responsible Authority</TableHead>
                                <TableHead className="py-5 text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 text-center">Target Date</TableHead>
                                <TableHead className="px-8 py-5 text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 text-right">Status</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody className="divide-y divide-slate-100">
                            
                            <ActionRow 
                                refNo="NABD/REC/2024-110" 
                                action="Issue circular for mandatory ramps in all newly renovated Tier-2 railway stations." 
                                authority="Ministry of Railways"
                                date="30 Nov 2024"
                                status="OPEN"
                            />
                            <ActionRow 
                                refNo="NABD/REC/2024-109" 
                                action="Submit report on vacant special educator posts across central schools." 
                                authority="Ministry of Education"
                                date="15 Oct 2024"
                                status="OPEN" alert
                            />
                            <ActionRow 
                                refNo="NABD/REC/2024-108" 
                                action="Nominate Nodal Accessibility Officers in all departments." 
                                authority="All Central Ministries"
                                date="01 Sep 2024"
                                status="CLOSED"
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

function ActionRow({ refNo, action, authority, date, status, alert }: any) {
    const isOpen = status === 'OPEN';

    return (
        <TableRow className="border-none hover:bg-slate-50 transition-all group">
            <TableCell className="px-8 py-5">
                <span className="font-mono text-[10px] font-black text-indigo-700">{refNo}</span>
            </TableCell>
            <TableCell className="py-5">
                <span className="text-xs font-bold text-slate-700 line-clamp-2 leading-relaxed">{action}</span>
            </TableCell>
            <TableCell className="py-5">
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{authority}</span>
            </TableCell>
            <TableCell className="py-5 text-center">
                <span className={`font-mono text-[11px] font-black ${alert ? 'text-red-600' : 'text-slate-500'}`}>{date}</span>
            </TableCell>
            <TableCell className="px-8 py-5 text-right">
                <Badge className={`border-none text-[9px] font-black uppercase tracking-widest px-3 py-1 ${isOpen ? 'bg-amber-100 text-amber-700' : 'bg-emerald-100 text-emerald-700'}`}>
                    {status}
                </Badge>
            </TableCell>
        </TableRow>
    );
}