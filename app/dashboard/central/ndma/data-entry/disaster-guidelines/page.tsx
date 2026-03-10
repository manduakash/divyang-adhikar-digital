// app/dashboard/ndma/data-entry/disaster-guidelines/page.tsx
"use client";
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
    Table, TableBody, TableCell, TableHead, TableHeader, TableRow
} from "@/components/ui/table";
import {
    BookOpen, FileSignature, UploadCloud, Save,
    History, AlertTriangle, Building2, Map, Tag,
    Scale, Calendar, FileText, CheckSquare, Search,
    Briefcase, Zap, Navigation, Tent, ThermometerSun, 
    Wind, Waves, Accessibility,
    Target,
    Activity
} from "lucide-react";

export default function DisasterGuidelinesDataEntryPage() {
    // Multi-select state
    const [selectedPwDCategories, setSelectedPwDCategories] = useState({
        locomotor: true,
        visual: true,
        hearing: true,
        intellectual: false,
        multiple: false
    });

    const toggleCategory = (key: keyof typeof selectedPwDCategories) => {
        setSelectedPwDCategories(prev => ({ ...prev, [key]: !prev[key] }));
    };

    return (
        <div className="space-y-8 animate-in fade-in duration-1000 pb-20 font-sans selection:bg-emerald-100">

            {/* PAGE HEADER */}
            <div className="flex flex-col xl:flex-row justify-between items-start xl:items-end gap-6 relative">
                <div className="space-y-2">
                    <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border-2 border-emerald-200 shadow-sm">
                        <BookOpen size={14} /> National Framework Data Entry
                    </div>
                    <h1 className="text-5xl font-black text-slate-800 tracking-tighter uppercase leading-none">Disaster-wise PwD Guidelines & SOPs</h1>
                    <p className="text-slate-500 font-medium text-lg italic underline underline-offset-8 decoration-emerald-200">
                        Maintain standardised national SOPs for different disasters with PwD considerations.
                    </p>
                </div>
                <div className="flex gap-4">
                    <Button variant="outline" className="h-14 px-8 rounded-full border-2 border-emerald-200 text-emerald-700 font-black uppercase tracking-widest text-[10px] bg-white shadow-xl hover:bg-emerald-50 transition-all">
                        <History size={16} className="mr-2" /> View SOP Registry
                    </Button>
                    <Button className="h-14 px-8 rounded-full bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 text-white font-black uppercase tracking-widest text-[10px] shadow-xl hover:shadow-[0_0_20px_theme(colors.teal.400)] transition-all gap-2 group border-none">
                        <Save size={16} /> Publish SOP
                    </Button>
                </div>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
                
                {/* LEFT: SOP DEFINITION (Spans 2 columns) */}
                <div className="xl:col-span-2 space-y-8">
                    
                    <SectionCard title="SOP Definition & Scope" icon={<FileText />} color="text-teal-600" border="border-teal-200">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            
                            <FormField label="Disaster Type" required className="md:col-span-2">
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 border-2 border-slate-100 bg-slate-50 rounded-2xl shadow-inner">
                                    <TypeButton icon={<Wind />} label="Cyclone" active={true} />
                                    <TypeButton icon={<Waves />} label="Flood" active={false} />
                                    <TypeButton icon={<Activity />} label="Earthquake" active={false} />
                                    <TypeButton icon={<ThermometerSun />} label="Heatwave" active={false} />
                                </div>
                            </FormField>

                            <FormField label="Guideline / SOP Title" required className="md:col-span-2">
                                <input type="text" placeholder="e.g., National Cyclone Evacuation Protocol for PwDs (2024)" className="form-input-apex" />
                            </FormField>

                            <FormField label="PwD Categories Covered" required className="md:col-span-2">
                                <div className="p-5 border-2 border-slate-100 bg-white rounded-2xl space-y-4 shadow-sm">
                                    <div className="flex items-center gap-3 border-b-2 border-slate-50 pb-3">
                                        <Accessibility size={18} className="text-teal-500" />
                                        <span className="text-xs font-black text-slate-800 uppercase tracking-widest">Select Target Disabilities</span>
                                    </div>
                                    <div className="flex flex-wrap gap-3">
                                        <CategoryBadge label="Locomotor Disability" active={selectedPwDCategories.locomotor} onClick={() => toggleCategory('locomotor')} />
                                        <CategoryBadge label="Visual Impairment" active={selectedPwDCategories.visual} onClick={() => toggleCategory('visual')} />
                                        <CategoryBadge label="Hearing Impairment" active={selectedPwDCategories.hearing} onClick={() => toggleCategory('hearing')} />
                                        <CategoryBadge label="Intellectual Disability" active={selectedPwDCategories.intellectual} onClick={() => toggleCategory('intellectual')} />
                                        <CategoryBadge label="Multiple Disabilities" active={selectedPwDCategories.multiple} onClick={() => toggleCategory('multiple')} />
                                    </div>
                                </div>
                            </FormField>

                        </div>
                    </SectionCard>

                    <SectionCard title="Operational Protocols" icon={<Target />} color="text-emerald-600" border="border-emerald-200">
                        <div className="space-y-6">
                            
                            <FormField label="Key Preparedness Measures" required>
                                <textarea 
                                    rows={4} 
                                    placeholder="List pre-disaster actions required from State/District authorities. E.g., Mapping of vulnerable PwDs, accessible early warning dissemination..." 
                                    className="form-input-apex resize-none text-sm leading-relaxed" 
                                />
                            </FormField>

                            <FormField label="Evacuation Protocol" required>
                                <div className="relative">
                                    <Navigation className="absolute left-4 top-4 h-5 w-5 text-emerald-400 pointer-events-none" />
                                    <textarea 
                                        rows={4} 
                                        placeholder="Detail specialized transport needs, buddy systems, and priority rescue procedures..." 
                                        className="form-input-apex pl-12 pt-3.5 resize-none text-sm leading-relaxed" 
                                    />
                                </div>
                            </FormField>

                            <FormField label="Shelter & Care Protocol" required>
                                <div className="relative">
                                    <Tent className="absolute left-4 top-4 h-5 w-5 text-emerald-400 pointer-events-none" />
                                    <textarea 
                                        rows={4} 
                                        placeholder="Specify ramp specifications, accessible WASH facilities, and medical supply chain needs at relief camps..." 
                                        className="form-input-apex pl-12 pt-3.5 resize-none text-sm leading-relaxed" 
                                    />
                                </div>
                            </FormField>

                        </div>
                    </SectionCard>

                </div>

                {/* RIGHT: METADATA & UPLOAD */}
                <div className="space-y-8">
                    
                    <SectionCard title="Formal Upload & Rollout" icon={<UploadCloud />} color="text-blue-600" border="border-blue-200">
                        <div className="space-y-6">
                            
                            <FormField label="Effective Date" required>
                                <div className="relative">
                                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-blue-400 pointer-events-none" />
                                    <input type="date" className="form-input-apex pl-12 border-blue-100 focus:border-blue-400 focus:ring-blue-50" />
                                </div>
                            </FormField>

                            <div className="space-y-4 pt-2">
                                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest leading-relaxed mb-2 border-t-2 border-slate-50 pt-4">
                                    Attach the comprehensive, digitally signed SOP manual including engineering annexures (if any).
                                </p>

                                {/* Upload Dropzone */}
                                <div className="border-2 border-dashed border-blue-200 bg-blue-50/50 rounded-3xl p-8 flex flex-col items-center justify-center text-center hover:bg-blue-50 hover:border-blue-400 transition-all cursor-pointer group min-h-[14rem]">
                                    <div className="h-16 w-16 rounded-2xl bg-white shadow-sm border border-blue-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                        <BookOpen size={24} className="text-blue-600" />
                                    </div>
                                    <p className="text-xs font-black text-slate-800 uppercase tracking-widest mb-1">Upload National SOP</p>
                                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">PDF format, Max 25MB</p>
                                    <Button variant="outline" className="mt-6 bg-white border-2 border-blue-200 text-blue-700 font-black uppercase tracking-widest text-[9px] hover:bg-blue-600 hover:text-white transition-all shadow-sm">
                                        Browse Files
                                    </Button>
                                </div>
                            </div>

                        </div>
                    </SectionCard>

                </div>
            </div>

            {/* RECENT SOP REGISTRY TABLE */}
            <Card className="rounded-[40px] border-none shadow-xl overflow-hidden bg-white mt-8">
                <CardHeader className="p-0 border-b-4 border-emerald-200">
                    <div className="p-8 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 text-white relative overflow-hidden flex flex-col md:flex-row justify-between items-center gap-6">
                        <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] bg-fixed" />
                        
                        <div className="relative z-10 flex items-center gap-4">
                            <div className="h-12 w-12 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center shadow-lg">
                                <BookOpen size={20} className="text-white drop-shadow-md" />
                            </div>
                            <div>
                                <CardTitle className="text-xl font-black uppercase tracking-tight drop-shadow-sm">National SOP Registry</CardTitle>
                                <p className="text-[10px] font-bold text-emerald-100 uppercase tracking-widest mt-1">Recently published guidelines for SDMAs</p>
                            </div>
                        </div>

                        <div className="relative z-10 flex gap-4 w-full md:w-auto">
                            <div className="relative group flex-1 md:w-64">
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-white/50" />
                                <input className="w-full pl-11 pr-6 py-3 border border-white/30 bg-white/10 rounded-2xl text-[10px] font-black uppercase outline-none text-white focus:bg-white/20 transition-all shadow-inner backdrop-blur-sm placeholder:text-white/60" placeholder="Search Title or Type..." />
                            </div>
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="p-0 overflow-x-auto relative min-h-[300px]">
                    <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/topography.png')]" />
                    
                    <Table className="relative z-10">
                        <TableHeader className="bg-emerald-50/50">
                            <TableRow className="border-b-2 border-emerald-100">
                                <TableHead className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-emerald-800">Disaster Type</TableHead>
                                <TableHead className="py-5 text-[10px] font-black uppercase tracking-[0.2em] text-emerald-800 w-1/3">Guideline / SOP Title</TableHead>
                                <TableHead className="py-5 text-[10px] font-black uppercase tracking-[0.2em] text-emerald-800">Target PwD Categories</TableHead>
                                <TableHead className="py-5 text-[10px] font-black uppercase tracking-[0.2em] text-emerald-800 text-center">Effective Date</TableHead>
                                <TableHead className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-emerald-800 text-right">Document</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody className="divide-y divide-emerald-50">
                            
                            <RegistryRow 
                                type="CYCLONE"
                                icon={<Wind />}
                                title="National Cyclone Evacuation Protocol for PwDs (2024)" 
                                categories="Locomotor, Visual, Hearing"
                                date="01 Nov 2024"
                                docStatus="ACTIVE"
                            />
                            <RegistryRow 
                                type="FLOOD"
                                icon={<Waves />}
                                title="Comprehensive Flood Response & Shelter Setup Guidelines" 
                                categories="All Categories"
                                date="15 Jul 2024"
                                docStatus="ACTIVE"
                            />
                            <RegistryRow 
                                type="HEATWAVE"
                                icon={<ThermometerSun />}
                                title="Heatwave Preparedness & Vulnerable Group Protection" 
                                categories="Intellectual, Multiple"
                                date="01 Mar 2024"
                                docStatus="ACTIVE"
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

function TypeButton({ icon, label, active }: any) {
    return (
        <button 
            type="button"
            className={`flex flex-col items-center justify-center gap-2 p-4 rounded-xl border-2 transition-all ${active ? 'bg-teal-50 border-teal-200 text-teal-700 shadow-sm' : 'bg-white border-transparent hover:border-slate-200 text-slate-500 shadow-sm'}`}
        >
            {React.cloneElement(icon, { size: 24 })}
            <span className="text-[10px] font-black uppercase tracking-widest">{label}</span>
        </button>
    );
}

function CategoryBadge({ label, active, onClick }: any) {
    return (
        <button
            type="button"
            onClick={onClick}
            className={`px-4 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all border-2 ${active ? 'bg-teal-500 border-teal-600 text-white shadow-sm' : 'bg-slate-50 border-slate-200 text-slate-500 hover:bg-slate-100'}`}
        >
            {label}
        </button>
    );
}

function RegistryRow({ type, icon, title, categories, date, docStatus }: any) {
    
    const badgeStyle = type === 'CYCLONE' ? 'bg-cyan-50 border-cyan-200 text-cyan-700' :
                       type === 'FLOOD' ? 'bg-blue-50 border-blue-200 text-blue-700' :
                       type === 'HEATWAVE' ? 'bg-orange-50 border-orange-200 text-orange-700' :
                       'bg-emerald-50 border-emerald-200 text-emerald-700';

    return (
        <TableRow className="border-none hover:bg-emerald-50/50 transition-all group">
            
            <TableCell className="px-8 py-5">
                <Badge variant="outline" className={`border-2 text-[9px] font-black uppercase tracking-widest px-3 py-1 flex items-center gap-2 w-max ${badgeStyle}`}>
                    {React.cloneElement(icon, { size: 12 })}
                    {type}
                </Badge>
            </TableCell>

            <TableCell className="py-5">
                <span className="text-xs font-bold text-slate-700 line-clamp-2 leading-relaxed bg-white border border-slate-100 p-3 rounded-xl shadow-sm block relative">
                    {title}
                </span>
            </TableCell>

            <TableCell className="py-5">
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest flex items-start gap-2 max-w-[200px]">
                    <Accessibility size={12} className="text-teal-400 shrink-0 mt-0.5" />
                    <span className="leading-tight">{categories}</span>
                </span>
            </TableCell>

            <TableCell className="py-5 text-center">
                <span className={`font-mono text-[11px] font-bold border px-3 py-1.5 rounded-lg shadow-inner text-slate-600 bg-slate-50 border-slate-100`}>
                    {date}
                </span>
            </TableCell>

            <TableCell className="px-8 py-5 text-right">
                <Badge className="border-none text-[9px] font-black uppercase tracking-widest px-4 py-1.5 shadow-sm bg-emerald-100 text-emerald-700 hover:bg-emerald-200 cursor-pointer flex items-center gap-2 w-max ml-auto">
                    <FileText size={12} /> {docStatus}
                </Badge>
            </TableCell>

        </TableRow>
    );
}