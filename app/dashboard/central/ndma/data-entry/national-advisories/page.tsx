// app/dashboard/ndma/data-entry/national-advisories/page.tsx
"use client";
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
    Table, TableBody, TableCell, TableHead, TableHeader, TableRow
} from "@/components/ui/table";
import {
    ShieldAlert, FileSignature, UploadCloud, Save,
    History, AlertTriangle, Building2, Map, Tag,
    Scale, Calendar, FileText, CheckSquare, Search,
    Briefcase, Zap
} from "lucide-react";

export default function NationalAdvisoriesDataEntryPage() {
    const [allStates, setAllStates] = useState(true);

    return (
        <div className="space-y-8 animate-in fade-in duration-1000 pb-20 font-sans selection:bg-indigo-100">

            {/* PAGE HEADER */}
            <div className="flex flex-col xl:flex-row justify-between items-start xl:items-end gap-6 relative">
                <div className="space-y-2">
                    <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border-2 border-indigo-200 shadow-sm">
                        <FileSignature size={14} /> National Command Data Entry
                    </div>
                    <h1 className="text-5xl font-black text-slate-800 tracking-tighter uppercase leading-none">National Advisories & Directions</h1>
                    <p className="text-slate-500 font-medium text-lg italic underline underline-offset-8 decoration-indigo-200">
                        Issue binding or guiding directives to States/SDMAs on PwD-inclusive disaster preparedness.
                    </p>
                </div>
                <div className="flex gap-4">
                    <Button variant="outline" className="h-14 px-8 rounded-full border-2 border-indigo-200 text-indigo-700 font-black uppercase tracking-widest text-[10px] bg-white shadow-xl hover:bg-indigo-50 transition-all">
                        <History size={16} className="mr-2" /> View Registry
                    </Button>
                    <Button className="h-14 px-8 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-black uppercase tracking-widest text-[10px] shadow-xl hover:shadow-[0_0_20px_theme(colors.indigo.400)] transition-all gap-2 group border-none">
                        <Save size={16} /> Publish Advisory
                    </Button>
                </div>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
                
                {/* LEFT: ADVISORY DRAFTING (Spans 2 columns) */}
                <div className="xl:col-span-2 space-y-8">
                    
                    <SectionCard title="Advisory Drafting Details" icon={<FileText />} color="text-blue-600" border="border-blue-200">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            
                            <FormField label="Advisory / Direction Ref No." required>
                                <div className="relative">
                                    <Tag className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-indigo-300 pointer-events-none" />
                                    <input type="text" defaultValue="NDMA/PWD/ADV/2024-042" className="form-input-apex pl-12 font-mono text-indigo-700 bg-indigo-50/30" readOnly />
                                </div>
                            </FormField>

                            <FormField label="Disaster Type" required>
                                <select className="form-input-apex appearance-none cursor-pointer">
                                    <option value="" disabled selected>Select Disaster Category...</option>
                                    <option value="ALL">All Disasters (General Preparedness)</option>
                                    <option value="CYCLONE">Cyclone & High Winds</option>
                                    <option value="FLOOD">Floods & Flash Floods</option>
                                    <option value="EARTHQUAKE">Earthquake</option>
                                    <option value="HEATWAVE">Severe Heatwave</option>
                                </select>
                            </FormField>

                            <FormField label="Applicable Region" required className="md:col-span-2">
                                <div className="p-5 border-2 border-slate-100 bg-slate-50 rounded-2xl space-y-4 shadow-inner">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <Map size={18} className="text-indigo-500" />
                                            <span className="text-xs font-black text-slate-800 uppercase tracking-widest">Target SDMAs</span>
                                        </div>
                                        <button 
                                            type="button" 
                                            onClick={() => setAllStates(!allStates)}
                                            className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-indigo-600 hover:text-indigo-800 transition-colors"
                                        >
                                            {allStates ? <CheckSquare size={16} /> : <div className="h-4 w-4 border-2 border-indigo-600 rounded-[4px]" />}
                                            All States & UTs
                                        </button>
                                    </div>
                                    {!allStates && (
                                        <div className="pt-2">
                                            <input type="text" placeholder="Search and select specific States (e.g., Coastal States)..." className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-xs font-bold focus:outline-none focus:border-indigo-400 focus:ring-4 focus:ring-indigo-50 transition-all shadow-sm" />
                                        </div>
                                    )}
                                </div>
                            </FormField>

                            <FormField label="Subject" required className="md:col-span-2">
                                <input type="text" placeholder="e.g., Mandatory tactile paths in cyclone shelters..." className="form-input-apex" />
                            </FormField>

                            <FormField label="Advisory / Direction Text" required className="md:col-span-2">
                                <textarea 
                                    rows={6} 
                                    placeholder="Draft the official directive outlining specific accessibility compliance, evacuation protocols, or preparedness measures required from the State authorities..." 
                                    className="form-input-apex resize-none text-sm leading-relaxed" 
                                />
                            </FormField>

                        </div>
                    </SectionCard>

                </div>

                {/* RIGHT: LEGAL METADATA & COMPLIANCE */}
                <div className="space-y-8">
                    
                    <SectionCard title="Legal & Compliance Framing" icon={<Scale />} color="text-amber-600" border="border-amber-200">
                        <div className="space-y-6">
                            
                            <FormField label="Legal Basis" required>
                                <select className="form-input-apex appearance-none cursor-pointer">
                                    <option value="" disabled selected>Select Legal Backing...</option>
                                    <option value="DM_ACT">Disaster Management Act, 2005 (Sec 6)</option>
                                    <option value="RPWD_ACT">RPwD Act, 2016 (Sec 8)</option>
                                    <option value="NDMA_GUIDELINES">National PwD Guidelines (2019)</option>
                                </select>
                            </FormField>

                            <FormField label="Date of Issue" required>
                                <div className="relative">
                                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 pointer-events-none" />
                                    <input type="date" className="form-input-apex pl-12" />
                                </div>
                            </FormField>

                            <FormField label="Compliance / Adoption Timeline" required>
                                <div className="relative">
                                    <AlertTriangle className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-amber-500 pointer-events-none" />
                                    <input type="date" className="form-input-apex pl-12 bg-amber-50/30 border-amber-200 focus:border-amber-500 focus:ring-amber-100 text-amber-900" />
                                </div>
                            </FormField>

                        </div>
                    </SectionCard>

                    <SectionCard title="Formal Upload" icon={<UploadCloud />} color="text-purple-600" border="border-purple-200">
                        <div className="space-y-4">
                            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest leading-relaxed mb-4">
                                Attach the digitally signed official notification and any supporting annexures.
                            </p>

                            {/* Upload Dropzone */}
                            <div className="border-2 border-dashed border-purple-200 bg-purple-50/50 rounded-3xl p-8 flex flex-col items-center justify-center text-center hover:bg-purple-50 hover:border-purple-400 transition-all cursor-pointer group min-h-[12rem]">
                                <div className="h-16 w-16 rounded-2xl bg-white shadow-sm border border-purple-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                    <FileText size={24} className="text-purple-600" />
                                </div>
                                <p className="text-xs font-black text-slate-700 uppercase tracking-widest mb-1">Upload Signed Document</p>
                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">PDF format, Max 15MB</p>
                            </div>
                        </div>
                    </SectionCard>

                </div>
            </div>

            {/* RECENT ADVISORIES REGISTRY TABLE */}
            <Card className="rounded-[40px] border-none shadow-xl overflow-hidden bg-white mt-8">
                <CardHeader className="p-0 border-b-4 border-indigo-200">
                    <div className="p-8 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white relative overflow-hidden flex flex-col md:flex-row justify-between items-center gap-6">
                        <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] bg-fixed" />
                        
                        <div className="relative z-10 flex items-center gap-4">
                            <div className="h-12 w-12 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center shadow-lg">
                                <Briefcase size={20} className="text-white drop-shadow-md" />
                            </div>
                            <div>
                                <CardTitle className="text-xl font-black uppercase tracking-tight drop-shadow-sm">National Advisory Registry</CardTitle>
                                <p className="text-[10px] font-bold text-indigo-100 uppercase tracking-widest mt-1">Recently issued directives to SDMAs</p>
                            </div>
                        </div>

                        <div className="relative z-10 flex gap-4 w-full md:w-auto">
                            <div className="relative group flex-1 md:w-64">
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-white/50" />
                                <input className="w-full pl-11 pr-6 py-3 border border-white/30 bg-white/10 rounded-2xl text-[10px] font-black uppercase outline-none text-white focus:bg-white/20 transition-all shadow-inner backdrop-blur-sm placeholder:text-white/60" placeholder="Search Reference..." />
                            </div>
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="p-0 overflow-x-auto relative min-h-[300px]">
                    <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/topography.png')]" />
                    
                    <Table className="relative z-10">
                        <TableHeader className="bg-indigo-50/50">
                            <TableRow className="border-b-2 border-indigo-100">
                                <TableHead className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-indigo-800">Advisory Ref</TableHead>
                                <TableHead className="py-5 text-[10px] font-black uppercase tracking-[0.2em] text-indigo-800 w-1/3">Subject</TableHead>
                                <TableHead className="py-5 text-[10px] font-black uppercase tracking-[0.2em] text-indigo-800 text-center">Disaster Type</TableHead>
                                <TableHead className="py-5 text-[10px] font-black uppercase tracking-[0.2em] text-indigo-800 text-center">Compliance Timeline</TableHead>
                                <TableHead className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-indigo-800 text-right">Legal Basis</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody className="divide-y divide-indigo-50">
                            
                            <RegistryRow 
                                refNo="NDMA/PWD/ADV/2024-041" 
                                subject="Mandatory Wheelchair Access in Coastal Cyclone Shelters" 
                                disaster="CYCLONE"
                                timeline="30 Nov 2024"
                                legal="RPwD Act, Sec 8"
                                alert
                            />
                            <RegistryRow 
                                refNo="NDMA/PWD/ADV/2024-040" 
                                subject="Inclusive Early Warning Protocol Integration" 
                                disaster="ALL"
                                timeline="15 Oct 2024"
                                legal="DM Act, Sec 6"
                            />
                            <RegistryRow 
                                refNo="NDMA/PWD/ADV/2024-039" 
                                subject="Heatwave Action Plan: PwD Sensitization" 
                                disaster="HEATWAVE"
                                timeline="01 May 2024"
                                legal="National Guidelines"
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
    // Removed h-full to prevent overlapping and height blowout
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

function RegistryRow({ refNo, subject, disaster, timeline, legal, alert }: any) {
    const isAll = disaster === 'ALL';

    return (
        <TableRow className="border-none hover:bg-indigo-50/50 transition-all group">
            
            <TableCell className="px-8 py-5">
                <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center shrink-0">
                        <Tag size={12} className="text-indigo-600" />
                    </div>
                    <span className="font-mono text-[11px] font-black text-indigo-700">{refNo}</span>
                </div>
            </TableCell>

            <TableCell className="py-5">
                <span className="text-xs font-bold text-slate-700 line-clamp-2 leading-relaxed bg-white border border-slate-100 p-3 rounded-xl shadow-sm block relative">
                    {subject}
                </span>
            </TableCell>

            <TableCell className="py-5 text-center">
                <Badge variant="outline" className={`border-2 text-[9px] font-black uppercase tracking-widest px-3 py-1 bg-white ${isAll ? 'border-purple-200 text-purple-700' : 'border-blue-200 text-blue-700'}`}>
                    {disaster}
                </Badge>
            </TableCell>

            <TableCell className="py-5 text-center">
                <span className={`font-mono text-[11px] font-bold border px-3 py-1.5 rounded-lg shadow-inner ${alert ? 'text-amber-700 bg-amber-50 border-amber-200' : 'text-slate-600 bg-slate-50 border-slate-100'}`}>
                    {timeline}
                </span>
            </TableCell>

            <TableCell className="px-8 py-5 text-right">
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest bg-slate-50 px-3 py-1.5 rounded-md border border-slate-100">
                    {legal}
                </span>
            </TableCell>

        </TableRow>
    );
}