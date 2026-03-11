// app/dashboard/ndma/data-entry/state-preparedness/page.tsx
"use client";
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
    Table, TableBody, TableCell, TableHead, TableHeader, TableRow
} from "@/components/ui/table";
import {
    Activity, History, Save, Map, Search, Tag, 
    Calendar, AlertTriangle, ShieldAlert, BookOpen,
    MessageSquare, CheckCircle2, FileText, Zap, Focus
} from "lucide-react";

export default function ReviewStatePreparednessPage() {
    const [priority, setPriority] = useState("HIGH");

    return (
        <div className="space-y-8 animate-in fade-in duration-1000 pb-20 font-sans selection:bg-purple-100">

            {/* PAGE HEADER */}
            <div className="flex flex-col xl:flex-row justify-between items-start xl:items-end gap-6 relative">
                <div className="space-y-2">
                    <div className="inline-flex items-center gap-2 bg-purple-50 text-purple-700 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border-2 border-purple-200 shadow-sm">
                        <Activity size={14} /> National Oversight Layer
                    </div>
                    <h1 className="text-5xl font-black text-slate-800 tracking-tighter uppercase leading-none">Review State Preparedness</h1>
                    <p className="text-slate-500 font-medium text-lg italic underline underline-offset-8 decoration-purple-200">
                        Record formal NDMA observations based on SDMA/DDMA reports and mock drills.
                    </p>
                </div>
                <div className="flex gap-4">
                    <Button variant="outline" className="h-14 px-8 rounded-full border-2 border-purple-200 text-purple-700 font-black uppercase tracking-widest text-[10px] bg-white shadow-xl hover:bg-purple-50 transition-all">
                        <History size={16} className="mr-2" /> View Review Logs
                    </Button>
                    <Button className="h-14 px-8 rounded-full bg-gradient-to-r from-indigo-600 via-purple-600 to-fuchsia-600 text-white font-black uppercase tracking-widest text-[10px] shadow-xl hover:shadow-[0_0_20px_theme(colors.purple.500)] transition-all gap-2 group border-none">
                        <Save size={16} /> Save Observation Note
                    </Button>
                </div>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
                
                {/* LEFT: REVIEW DEFINITION (Spans 2 columns) */}
                <div className="xl:col-span-2 space-y-8">
                    
                    <SectionCard title="Assessment Context" icon={<Focus />} color="text-indigo-600" border="border-indigo-200">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            
                            <FormField label="Target State / UT" required>
                                <div className="relative">
                                    <Map className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-indigo-300 pointer-events-none" />
                                    <select className="form-input-apex pl-12 appearance-none cursor-pointer">
                                        <option value="" disabled selected>Select State / UT...</option>
                                        <option value="OD">Odisha</option>
                                        <option value="MH">Maharashtra</option>
                                        <option value="AS">Assam</option>
                                        <option value="TN">Tamil Nadu</option>
                                    </select>
                                </div>
                            </FormField>

                            <FormField label="Disaster Type Focus" required>
                                <select className="form-input-apex appearance-none cursor-pointer">
                                    <option value="" disabled selected>Select Disaster Scope...</option>
                                    <option value="ALL">All Disasters (General Preparedness)</option>
                                    <option value="CYCLONE">Cyclone & High Winds</option>
                                    <option value="FLOOD">Floods & Flash Floods</option>
                                    <option value="EARTHQUAKE">Earthquake</option>
                                </select>
                            </FormField>

                            <FormField label="Review Period" required className="md:col-span-2">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="relative">
                                        <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-indigo-300 pointer-events-none" />
                                        <input type="month" className="form-input-apex pl-12 text-sm text-slate-500" />
                                    </div>
                                    <div className="relative">
                                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xs font-black uppercase tracking-widest text-indigo-300">TO</span>
                                        <input type="month" className="form-input-apex pl-12 text-sm text-slate-500" />
                                    </div>
                                </div>
                            </FormField>

                            <FormField label="Reference Reports / Sources" required className="md:col-span-2">
                                <div className="relative">
                                    <BookOpen className="absolute left-4 top-4 h-5 w-5 text-indigo-300 pointer-events-none" />
                                    <textarea 
                                        rows={3} 
                                        placeholder="Cite SDMA submission IDs, Mock Drill Reports, or Post-Disaster Audit refs..." 
                                        className="form-input-apex pl-12 pt-3.5 resize-none text-sm leading-relaxed bg-indigo-50/30" 
                                    />
                                </div>
                            </FormField>

                        </div>
                    </SectionCard>

                    <SectionCard title="Observations & Gaps" icon={<Search />} color="text-fuchsia-600" border="border-fuchsia-200">
                        <div className="space-y-6">
                            
                            <FormField label="Key Preparedness Gaps Identified" required>
                                <div className="relative">
                                    <AlertTriangle className="absolute left-4 top-4 h-5 w-5 text-fuchsia-400 pointer-events-none" />
                                    <textarea 
                                        rows={5} 
                                        placeholder="Detail the specific shortfalls observed. E.g., Lack of tactile paths in newly designated shelters, delayed early warning SMS dissemination during Q2 mock drills..." 
                                        className="form-input-apex pl-12 pt-3.5 resize-none text-sm leading-relaxed border-fuchsia-100 focus:border-fuchsia-400 focus:ring-fuchsia-50" 
                                    />
                                </div>
                            </FormField>

                            <FormField label="Official Remarks / Recommendations">
                                <div className="relative">
                                    <MessageSquare className="absolute left-4 top-4 h-5 w-5 text-fuchsia-400 pointer-events-none" />
                                    <textarea 
                                        rows={4} 
                                        placeholder="Add concluding remarks. This text will be utilised for future advisories and the Annual NDMA Preparedness Report..." 
                                        className="form-input-apex pl-12 pt-3.5 resize-none text-sm leading-relaxed bg-slate-50 border-slate-200 focus:border-fuchsia-400 focus:ring-fuchsia-50" 
                                    />
                                </div>
                            </FormField>

                        </div>
                    </SectionCard>

                </div>

                {/* RIGHT: METADATA & PRIORITY */}
                <div className="space-y-8">
                    
                    <SectionCard title="Classification & Priority" icon={<ShieldAlert />} color="text-purple-600" border="border-purple-200">
                        <div className="space-y-6">
                            
                            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest leading-relaxed">
                                Set the urgency level for these gaps to be addressed. High priority notes will flag the State in the National Dashboard.
                            </p>

                            <FormField label="Priority Level" required>
                                <div className="flex flex-col gap-3 p-3 bg-slate-50 border-2 border-slate-100 rounded-2xl shadow-inner">
                                    
                                    <button 
                                        type="button"
                                        onClick={() => setPriority('CRITICAL')}
                                        className={`px-6 py-4 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all flex items-center justify-between ${priority === 'CRITICAL' ? 'bg-red-500 text-white shadow-lg shadow-red-200' : 'text-slate-500 bg-white hover:bg-slate-100 border border-slate-200 shadow-sm'}`}
                                    >
                                        <span className="flex items-center gap-2"><AlertTriangle size={16} /> CRITICAL (Immediate Action)</span>
                                        {priority === 'CRITICAL' && <CheckCircle2 size={16} />}
                                    </button>

                                    <button 
                                        type="button"
                                        onClick={() => setPriority('HIGH')}
                                        className={`px-6 py-4 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all flex items-center justify-between ${priority === 'HIGH' ? 'bg-orange-500 text-white shadow-lg shadow-orange-200' : 'text-slate-500 bg-white hover:bg-slate-100 border border-slate-200 shadow-sm'}`}
                                    >
                                        <span className="flex items-center gap-2"><Zap size={16} /> HIGH (Near-term Focus)</span>
                                        {priority === 'HIGH' && <CheckCircle2 size={16} />}
                                    </button>

                                    <button 
                                        type="button"
                                        onClick={() => setPriority('MODERATE')}
                                        className={`px-6 py-4 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all flex items-center justify-between ${priority === 'MODERATE' ? 'bg-indigo-500 text-white shadow-lg shadow-indigo-200' : 'text-slate-500 bg-white hover:bg-slate-100 border border-slate-200 shadow-sm'}`}
                                    >
                                        <span className="flex items-center gap-2"><Activity size={16} /> MODERATE (Routine Monitor)</span>
                                        {priority === 'MODERATE' && <CheckCircle2 size={16} />}
                                    </button>
                                </div>
                            </FormField>

                            <div className="pt-4 border-t-2 border-purple-50">
                                <Badge className="bg-purple-100 hover:bg-purple-100 text-purple-700 border-none text-[9px] font-black uppercase tracking-widest px-4 py-2 w-full justify-center flex items-center gap-2">
                                    <FileText size={14} /> Auto-syncs to Annual Report
                                </Badge>
                            </div>

                        </div>
                    </SectionCard>

                </div>
            </div>

            {/* RECENT REVIEW NOTES REGISTRY TABLE */}
            <Card className="rounded-[40px] border-none shadow-xl overflow-hidden bg-white mt-8">
                <CardHeader className="p-0 border-b-4 border-purple-200">
                    <div className="p-8 bg-gradient-to-r from-indigo-600 via-purple-600 to-fuchsia-600 text-white relative overflow-hidden flex flex-col md:flex-row justify-between items-center gap-6">
                        <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] bg-fixed" />
                        
                        <div className="relative z-10 flex items-center gap-4">
                            <div className="h-12 w-12 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center shadow-lg">
                                <FileText size={20} className="text-white drop-shadow-md" />
                            </div>
                            <div>
                                <CardTitle className="text-xl font-black uppercase tracking-tight drop-shadow-sm">Review & Observation Ledger</CardTitle>
                                <p className="text-[10px] font-bold text-purple-100 uppercase tracking-widest mt-1">Recently logged State preparedness assessments</p>
                            </div>
                        </div>

                        <div className="relative z-10 flex gap-4 w-full md:w-auto">
                            <div className="relative group flex-1 md:w-64">
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-white/50" />
                                <input className="w-full pl-11 pr-6 py-3 border border-white/30 bg-white/10 rounded-2xl text-[10px] font-black uppercase outline-none text-white focus:bg-white/20 transition-all shadow-inner backdrop-blur-sm placeholder:text-white/60" placeholder="Search State or Report..." />
                            </div>
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="p-0 overflow-x-auto relative min-h-[300px]">
                    <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/topography.png')]" />
                    
                    <Table className="relative z-10">
                        <TableHeader className="bg-purple-50/50">
                            <TableRow className="border-b-2 border-purple-100">
                                <TableHead className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-purple-800">State / Region</TableHead>
                                <TableHead className="py-5 text-[10px] font-black uppercase tracking-[0.2em] text-purple-800">Review Period & Scope</TableHead>
                                <TableHead className="py-5 text-[10px] font-black uppercase tracking-[0.2em] text-purple-800 w-1/3">Key Gaps Logged</TableHead>
                                <TableHead className="py-5 text-[10px] font-black uppercase tracking-[0.2em] text-purple-800 text-center">Priority</TableHead>
                                <TableHead className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-purple-800 text-right">Date Logged</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody className="divide-y divide-purple-50">
                            
                            <ReviewRow 
                                state="Odisha"
                                period="Q3 2024"
                                scope="CYCLONE"
                                gap="Evacuation transport lacking wheelchair ramps; buddy system mapping incomplete in 4 coastal districts."
                                priority="HIGH"
                                date="15 Nov 2024"
                                alert
                            />
                            <ReviewRow 
                                state="Assam"
                                period="Q2 2024"
                                scope="FLOOD"
                                gap="Hearing-impaired population not receiving targeted SMS alerts due to database sync failures."
                                priority="CRITICAL"
                                date="22 Aug 2024"
                                alert
                            />
                            <ReviewRow 
                                state="Maharashtra"
                                period="H1 2024"
                                scope="ALL"
                                gap="General shelter accessibility compliance improving, but WASH facilities remain inadequate."
                                priority="MODERATE"
                                date="10 Jul 2024"
                            />

                        </TableBody>
                    </Table>
                </CardContent>
            </Card>

        </div>
    );
}

/* UI SUB-COMPONENTS */

function SectionCard({ title, icon, color, border, children }: any) {
    return (
        <Card className={`rounded-[32px] border-2 shadow-lg bg-white overflow-hidden group hover:shadow-xl transition-all duration-500 border-slate-100 hover:${border}`}>
            <CardHeader className="p-8 border-b-2 border-slate-50 relative overflow-hidden bg-slate-50/30">
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
                <div className="flex items-center gap-4 relative z-10">
                    <div className={`h-12 w-12 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center ${color} group-hover:scale-110 transition-transform`}>
                        {React.cloneElement(icon, { size: 24 })}
                    </div>
                    <CardTitle className={`text-sm font-black uppercase tracking-[0.2em] text-slate-800`}>{title}</CardTitle>
                </div>
            </CardHeader>
            <CardContent className="p-8 relative overflow-hidden">
                <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/topography.png')]" />
                <div className="relative z-10">{children}</div>
            </CardContent>
        </Card>
    );
}

function FormField({ label, required, children, className }: any) {
    return (
        <div className={`space-y-2 ${className}`}>
            <label className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-600 ml-1">
                {label} {required && <span className="text-red-500">*</span>}
            </label>
            {children}
        </div>
    );
}

function ReviewRow({ state, period, scope, gap, priority, date, alert }: any) {
    
    const isCritical = priority === 'CRITICAL';
    const isHigh = priority === 'HIGH';

    const priorityBadge = isCritical ? 'bg-red-50 text-red-700 border-red-200' :
                          isHigh ? 'bg-orange-50 text-orange-700 border-orange-200' :
                          'bg-indigo-50 text-indigo-700 border-indigo-200';

    return (
        <TableRow className="border-none hover:bg-purple-50/50 transition-all group">
            
            <TableCell className="px-8 py-5">
                <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center shrink-0 shadow-inner border border-purple-200">
                        <Map size={14} className="text-purple-600" />
                    </div>
                    <span className="text-xs font-black text-slate-800 uppercase tracking-tight">{state}</span>
                </div>
            </TableCell>

            <TableCell className="py-5">
                <div className="flex flex-col gap-1.5 pr-4">
                    <span className="font-mono text-[11px] font-black text-slate-600 border border-slate-200 px-2 py-1 rounded bg-white w-fit shadow-sm">
                        {period}
                    </span>
                    <Badge variant="outline" className={`border-2 text-[8px] font-black uppercase tracking-widest px-2 py-0.5 w-fit ${scope === 'ALL' ? 'border-purple-200 text-purple-700' : 'border-blue-200 text-blue-700'}`}>
                        {scope}
                    </Badge>
                </div>
            </TableCell>

            <TableCell className="py-5">
                <div className="text-xs font-bold text-slate-600 line-clamp-3 leading-relaxed bg-white border border-slate-100 p-3 rounded-xl shadow-sm relative pl-8">
                    <AlertTriangle size={14} className={`absolute left-3 top-3.5 ${alert ? 'text-red-400' : 'text-slate-300'}`} />
                    {gap}
                </div>
            </TableCell>

            <TableCell className="py-5 text-center">
                <Badge className={`border-2 text-[9px] font-black uppercase tracking-widest px-3 py-1 flex items-center justify-center gap-1.5 w-max mx-auto shadow-sm ${priorityBadge}`}>
                    {isCritical && <AlertTriangle size={10} />}
                    {isHigh && <Zap size={10} />}
                    {priority}
                </Badge>
            </TableCell>

            <TableCell className="px-8 py-5 text-right">
                <span className="font-mono text-[10px] font-bold text-slate-500 bg-slate-50 px-3 py-1.5 rounded-md border border-slate-100 shadow-inner">
                    {date}
                </span>
            </TableCell>

        </TableRow>
    );
}