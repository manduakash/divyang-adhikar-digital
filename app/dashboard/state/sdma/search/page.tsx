// app/dashboard/sdma/search/page.tsx
"use client";
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
    Search, Filter, Map, Home,
    Gavel, Activity, History, Globe,
    Sparkles, BadgeCheck, MapPin, Radio,
    Calendar, CheckCircle2, ShieldAlert, Timer,
    Download, Printer, FileText, LayoutGrid,
    ChevronRight, ArrowUpRight
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
    Select, SelectContent, SelectItem, SelectTrigger, SelectValue
} from "@/components/ui/select";
import {
    Table, TableBody, TableCell, TableHead, TableHeader, TableRow
} from "@/components/ui/table";

type SearchScope = 'Districts' | 'Shelters' | 'Advisories / Directions' | 'Preparedness indicators' | 'Post-disaster reviews';

export default function SDMASearchHub() {
    const [activeScope, setActiveScope] = useState<SearchScope>('Districts');

    return (
        <div className="space-y-10 animate-in fade-in duration-1000 pb-20 font-sans selection:bg-orange-100">

            {/* 1. APEX DISCOVERY HEADER - GRADIENT + CARBON FIBER */}
            <div className="relative p-1 rounded-[48px] shadow-2xl shadow-indigo-200">
                {/* CARBON FIBER OVERLAY */}
                <div className="absolute inset-0 opacity-20 pointer-events-none" />

                <div className="rounded-[44px] p-10 relative z-10 flex flex-col xl:flex-row justify-between items-center gap-10">
                    <div className="space-y-4 flex-1">
                        <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.3em] border border-blue-100">
                            <BadgeCheck size={14} /> Statewide Discovery node
                        </div>
                        <h1 className="text-5xl font-black text-slate-900 tracking-tighter uppercase leading-none">Rapid Retrieval Hub</h1>
                        <p className="text-slate-500 font-medium italic text-lg max-w-xl uppercase tracking-tighter">Unified parametric discovery across State disaster-PwD data repositories.</p>
                    </div>

                    <div className="w-full space-y-4">
                        <div className="relative group">
                            <Search className="absolute left-5 top-1/2 -translate-y-1/2 h-6 w-6 text-slate-300 group-focus-within:text-blue-600 transition-colors" />
                            <Input
                                className="h-20 pl-14 pr-6 rounded-[28px] border-2 border-slate-200 bg-slate-50 font-black text-slate-900 text-xl shadow-inner focus:ring-2 focus:ring-blue-500 transition-all"
                                placeholder="Enter PwD ID, Shelter, or Case..."
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-12 gap-10 items-start">

                {/* 2. PARAMETRIC FILTERS (4 COLS) */}
                <div className="xl:col-span-4 space-y-8 sticky top-28 h-fit">

                    <div className="space-y-4">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] ml-4">Search Scope</label>
                        <div className="grid grid-cols-1 gap-2">
                            <ScopeLink active={activeScope === 'Districts'} onClick={() => setActiveScope('Districts')} label="Districts" icon={<Map size={16} />} color="from-blue-600 to-blue-700" />
                            <ScopeLink active={activeScope === 'Shelters'} onClick={() => setActiveScope('Shelters')} label="Shelters" icon={<Home size={16} />} color="from-emerald-600 to-emerald-700" />
                            <ScopeLink active={activeScope === 'Advisories / Directions'} onClick={() => setActiveScope('Advisories / Directions')} label="Advisories / Directions" icon={<Gavel size={16} />} color="from-purple-600 to-indigo-700" />
                            <ScopeLink active={activeScope === 'Preparedness indicators'} onClick={() => setActiveScope('Preparedness indicators')} label="Preparedness indicators" icon={<Activity size={16} />} color="from-orange-600 to-amber-700" />
                            <ScopeLink active={activeScope === 'Post-disaster reviews'} onClick={() => setActiveScope('Post-disaster reviews')} label="Post-disaster reviews" icon={<History size={16} />} color="from-rose-600 to-red-700" />
                        </div>
                    </div>

                    <Card className="rounded-[40px] border-2 border-slate-200 bg-white shadow-xl overflow-hidden">
                        <CardHeader className="bg-gradient-to-r from-slate-100 to-slate-200 p-6 relative overflow-hidden">
                            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `radial-gradient(black 1px, transparent 0)`, backgroundSize: '8px 8px' }} />
                            <CardTitle className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 relative z-10">Parametric Filters</CardTitle>
                        </CardHeader>
                        <CardContent className="p-8 space-y-6">
                            <FilterSelect label="Disaster type" options={['Flood', 'Cyclone', 'Heatwave', 'Earthquake']} />
                            <FilterSelect label="District" options={['Lucknow Urban', 'Varanasi East', 'Meerut Cluster']} />
                            <FilterSelect label="Status" options={['Verified', 'Pending', 'Overdue', 'Archived']} />
                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase text-slate-400 ml-1 tracking-widest leading-none">Time period</label>
                                <Input type="date" className="w-full h-14 py-6 border-2 border-slate-200 bg-slate-50 rounded-2xl px-6 font-bold" />
                            </div>
                            <Button className="w-full h-16 bg-slate-900 text-white rounded-2xl font-black uppercase tracking-widest text-[10px] shadow-xl hover:bg-black transition-all">Apply Filters</Button>
                        </CardContent>
                    </Card>
                </div>

                {/* 3. UNIFIED RESULTS LEDGER (8 COLS) */}
                <div className="xl:col-span-8 space-y-6">
                    <Card className="rounded-[48px] border-2 border-slate-200 shadow-sm overflow-hidden bg-white min-h-[800px]">
                        <CardHeader className="p-0">
                            <div className="p-8 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white relative overflow-hidden">
                                {/* CARBON FIBER TEXTURE OVERLAY */}
                                <div className="absolute inset-0 opacity-20 pointer-events-none"
                                    style={{ backgroundImage: `radial-gradient(black 2px, transparent 0)`, backgroundSize: '8px 8px' }} />

                                <div className="flex flex-col md:flex-row justify-between items-center gap-6 relative z-10">
                                    <div className="flex items-center gap-4">
                                        <div className="h-12 w-12 rounded-2xl bg-white/20 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-xl">
                                            <Globe size={24} />
                                        </div>
                                        <CardTitle className="text-sm font-black uppercase tracking-[0.3em]">STATEWIDE DISCOVERY REGISTRY</CardTitle>
                                    </div>
                                    <Badge className="bg-white/20 text-white border-none font-black text-[10px] px-5 py-2 uppercase tracking-widest">142 STATUTORY NODES MATCHED</Badge>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent className="p-0">
                            <Table>
                                <TableHeader className="bg-slate-50/80">
                                    <TableRow className="border-slate-200">
                                        <TableHead className="px-10 py-6 text-[9px] font-black uppercase tracking-[0.2em] text-slate-400">Node Identifier</TableHead>
                                        <TableHead className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400">Registry Scope</TableHead>
                                        <TableHead className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400">Primary Entity / Subject</TableHead>
                                        <TableHead className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 text-center">Status</TableHead>
                                        <TableHead className="text-right px-10 text-[9px] font-black uppercase tracking-[0.2em] text-slate-400">Action</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody className="divide-y divide-slate-100 font-sans">
                                    <ResultRow id="DIST-LKO-01" scope="Districts" entity="Lucknow Urban Hub" status="VERIFIED" success />
                                    <ResultRow id="SHL-VNS-442" scope="Shelters" entity="East Sector Community Hall" status="PENDING" warning />
                                    <ResultRow id="ORD-EW-901" scope="Advisories / Directions" entity="Early Warning Protocol Q3" status="OVERDUE" alert />
                                    <ResultRow id="IND-PRP-112" scope="Preparedness indicators" entity="Block-level Evac Sync" status="VERIFIED" success />
                                    <ResultRow id="REV-AAR-004" scope="Post-disaster reviews" entity="Monsoon Flood Response" status="ARCHIVED" />
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}

/* UI SUB-COMPONENTS */

function ScopeLink({ active, onClick, label, icon, color }: any) {
    return (
        <button
            onClick={onClick}
            className={`w-full flex items-center justify-between p-5 rounded-[24px] transition-all group border-2 ${active
                ? `bg-gradient-to-r ${color} text-white border-transparent shadow-xl translate-x-1`
                : 'bg-white text-slate-500 border-slate-100 hover:border-blue-200 hover:bg-slate-50'
                }`}
        >
            <div className="flex items-center gap-4">
                <div className={`h-10 w-10 rounded-xl flex items-center justify-center transition-all ${active ? 'bg-white/20 backdrop-blur-md' : 'bg-slate-50 text-slate-300 group-hover:text-blue-600'}`}>
                    {icon}
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest">{label}</span>
            </div>
            {active && <ArrowUpRight size={16} className="text-white opacity-40 animate-in zoom-in duration-300" />}
        </button>
    )
}

function FilterSelect({ label, options }: any) {
    return (
        <div className="space-y-3">
            <label className="text-[9px] font-black uppercase text-slate-400 ml-1 tracking-widest leading-none">{label}</label>
            <Select>
                <SelectTrigger className="w-full h-14 py-6 rounded-2xl border-2 border-slate-200 bg-slate-50 font-bold text-slate-800 text-[10px] uppercase shadow-inner transition-all hover:bg-slate-100">
                    <SelectValue placeholder={`Select ${label}`} />
                </SelectTrigger>
                <SelectContent className="rounded-2xl border-2 border-slate-200 shadow-2xl">
                    {options.map((opt: string) => (
                        <SelectItem key={opt} value={opt.toLowerCase()} className="font-bold text-[10px] uppercase py-3">{opt}</SelectItem>
                    ))}
                </SelectContent>
            </Select>
        </div>
    )
}

function ResultRow({ id, scope, entity, status, alert, success, warning }: any) {
    const statusColor = success ? 'bg-green-100 text-green-700' : warning ? 'bg-orange-100 text-orange-700' : alert ? 'bg-red-100 text-red-700' : 'bg-blue-100 text-blue-700';
    return (
        <TableRow className="border-none hover:bg-slate-50 transition-all group cursor-pointer">
            <TableCell className="px-10 py-6">
                <span className="text-[11px] font-mono font-black text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-md uppercase tracking-tighter">{id}</span>
                <p className="text-[7px] font-black text-slate-400 uppercase mt-2 tracking-widest">Authorized Registry</p>
            </TableCell>
            <TableCell>
                <p className="text-[10px] font-black text-indigo-600 uppercase tracking-widest leading-none">{scope}</p>
            </TableCell>
            <TableCell>
                <p className="text-sm font-black text-slate-800 uppercase tracking-tight leading-none">{entity}</p>
                <p className="text-[8px] font-bold text-slate-400 uppercase tracking-widest mt-1.5 italic">Consolidated Statutory Subject</p>
            </TableCell>
            <TableCell className="text-center">
                <Badge className={`rounded-full px-4 py-1 text-[8px] font-black uppercase border-none shadow-none ${statusColor}`}>
                    {status}
                </Badge>
            </TableCell>
            <TableCell className="text-right px-10 opacity-0 group-hover:opacity-100 transition-all">
                <button className="p-2.5 bg-white border-2 border-slate-200 text-blue-600 rounded-xl hover:bg-slate-900 hover:text-white hover:border-slate-900 shadow-sm transition-all">
                    <ArrowUpRight size={18} />
                </button>
            </TableCell>
        </TableRow>
    )
}