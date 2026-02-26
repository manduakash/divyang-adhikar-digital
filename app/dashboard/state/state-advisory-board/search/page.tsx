// app/dashboard/sab/search/page.tsx
"use client";
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
    Search, Filter, Calendar, Users,
    FileText, ClipboardList, ArrowUpRight,
    Globe, Sparkles, CheckCircle2, History,
    Download, Printer, Landmark, Command,
    Timer, MapPin, BadgeCheck, Activity,
    Database
} from "lucide-react";
import {
    Table, TableBody, TableCell, TableHead, TableHeader, TableRow
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
    Select, SelectContent, SelectItem, SelectTrigger, SelectValue
} from "@/components/ui/select";

type SearchScope = 'Members' | 'Meetings' | 'Minutes of Meeting' | 'Action Points';

export default function BoardSearchHub() {
    const [scope, setScope] = useState<SearchScope>('Meetings');

    return (
        <div className="space-y-10 animate-in fade-in duration-1000 pb-20 font-sans selection:bg-emerald-100">

            {/* SEARCH HUB HEADER - CARBON FIBER THEME */}
            <Card className="rounded-[40px] border-none bg-gradient-to-r from-emerald-600 via-teal-600 to-blue-600 p-1 relative overflow-hidden shadow-2xl shadow-emerald-200">
                <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
                <div className="bg-white rounded-[38px] p-10 relative z-10 flex flex-col xl:flex-row justify-between items-center gap-10">

                    <div className="space-y-4 flex-1">
                        <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] border border-emerald-100">
                            <BadgeCheck size={14} /> Statutory Discovery Hub
                        </div>
                        <h1 className="text-5xl font-black text-slate-900 tracking-tighter uppercase leading-none">Fast Retrieval Hub</h1>
                        <p className="text-slate-500 font-medium italic text-lg max-w-xl uppercase tracking-tighter">Unified search system for statutory Board-related records.</p>
                    </div>

                    <div className="w-full xl:w-[450px] space-y-3">
                        <label className="text-[10px] font-black uppercase text-slate-400 ml-1 tracking-widest">Global Board Search</label>
                        <div className="relative group">
                            <Command className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-300 group-focus-within:text-emerald-600 transition-colors" />
                            <Input className="h-16 pl-12 pr-6 rounded-[24px] bg-slate-50 border font-bold text-slate-800 shadow-inner focus:ring-2 focus:ring-emerald-500" placeholder="Search across all board nodes..." />
                        </div>
                    </div>
                </div>
            </Card>

            <div className="grid grid-cols-1 xl:grid-cols-12 gap-10 items-start">

                {/* FILTERS & SCOPE SIDEBAR (4 COLS) */}
                <div className="xl:col-span-4 space-y-8 sticky top-28 h-fit">

                    {/* SEARCH SCOPE SELECTOR */}
                    <div className="space-y-4">
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] ml-4">Search Scope</p>
                        <div className="grid grid-cols-1 gap-2">
                            <ScopeBtn active={scope === 'Members'} onClick={() => setScope('Members')} label="Members" icon={<Users size={16} />} />
                            <ScopeBtn active={scope === 'Meetings'} onClick={() => setScope('Meetings')} label="Meetings" icon={<Calendar size={16} />} />
                            <ScopeBtn active={scope === 'Minutes of Meeting'} onClick={() => setScope('Minutes of Meeting')} label="Minutes of Meeting" icon={<FileText size={16} />} />
                            <ScopeBtn active={scope === 'Action Points'} onClick={() => setScope('Action Points')} label="Action Points" icon={<ClipboardList size={16} />} />
                        </div>
                    </div>

                    {/* PARAMETRIC FILTERS */}
                    <Card className="rounded-[40px] border-slate-200 bg-white shadow-xl overflow-hidden group">
                        <CardHeader className="p-8 border-b border-slate-50 bg-indigo-500">
                            <CardTitle className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-100">Registry Filters</CardTitle>
                        </CardHeader>
                        <CardContent className="p-8 space-y-6">
                            <FilterGroup label="Date range">
                                <Input type="date" className="h-12 bg-slate-50 border rounded-xl font-bold px-4" />
                            </FilterGroup>
                            <FilterGroup label="Meeting type">
                                <Select><SelectTrigger className="h-12 bg-slate-50 w-full border py-6 rounded-xl font-bold"><SelectValue placeholder="All Types" /></SelectTrigger></Select>
                            </FilterGroup>
                            <FilterGroup label="Member name">
                                <Input placeholder="Enter name" className="h-12 bg-slate-50 border rounded-xl font-bold px-4" />
                            </FilterGroup>
                            <FilterGroup label="Action point status">
                                <Select><SelectTrigger className="h-12 bg-slate-50 w-full border py-6 rounded-xl font-bold"><SelectValue placeholder="All Status" /></SelectTrigger></Select>
                            </FilterGroup>
                            <Button className="w-full h-14 bg-slate-900 text-white rounded-2xl font-black uppercase tracking-widest text-[9px] shadow-xl hover:bg-black transition-all">Search</Button>
                        </CardContent>
                    </Card>

                    <div className="p-6 bg-emerald-50 rounded-[32px] border border-emerald-100 flex gap-4">
                        <Sparkles className="text-emerald-600 shrink-0" size={24} />
                        <p className="text-[9px] font-bold text-emerald-800 leading-normal uppercase tracking-tighter">
                            Advanced search logic supports cross-referencing between <b>Members</b> and <b>Decision History</b>.
                        </p>
                    </div>
                </div>

                {/* RESULTS LEDGER (8 COLS) */}
                <div className="xl:col-span-8 space-y-8">
                    <Card className="rounded-[48px] border-slate-200 shadow-sm overflow-hidden bg-white min-h-[700px]">
                        <CardHeader className="p-8 border-b border-slate-50 bg-slate-50/30 flex flex-row justify-between items-center">
                            <div className="flex gap-4 items-center">
                                <div className="h-10 w-10 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-600 shadow-sm border border-emerald-200">
                                    <Database size={18} />
                                </div>
                                <CardTitle className="text-sm font-black uppercase tracking-widest text-slate-400">{scope} Registry Hub</CardTitle>
                            </div>
                            <div className="flex items-center gap-3">
                                <Button variant="ghost" size="icon" className="h-10 w-10 rounded-xl bg-slate-50 text-slate-400 hover:bg-slate-100"><Printer size={18} /></Button>
                                <Button variant="ghost" size="icon" className="h-10 w-10 rounded-xl bg-slate-50 text-slate-400 hover:bg-slate-100"><Download size={18} /></Button>
                            </div>
                        </CardHeader>
                        <CardContent className="p-0">
                            <Table>
                                <TableHeader className="bg-slate-50">
                                    <TableRow className="border-slate-100">
                                        <TableHead className="px-10 py-6 text-[9px] font-black uppercase tracking-widest text-slate-400">Statutory identifier</TableHead>
                                        <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400">Primary Subject / name</TableHead>
                                        <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400 text-center">Node Category</TableHead>
                                        <TableHead className="text-right px-10 text-[9px] font-black uppercase tracking-widest text-slate-400">Status</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody className="divide-y divide-slate-50 font-sans">
                                    <ResultRow id="SAB-MOM-2024-001" subject="Statewide Accessibility Policy Review" cat="Ordinary Meeting" status="VERIFIED" success />
                                    <ResultRow id="ACT-SAB-UP-042" subject="Recruitment Gap Correction Notice" cat="Action Point" status="IN PROGRESS" warning />
                                    <ResultRow id="MEM-EXPERT-091" subject="Dr. Suman Chatterjee" cat="Board Member" status="ACTIVE" success />
                                    <ResultRow id="SAB-MOM-2024-005" subject="Special Hearing: Education Defaults" cat="Special Meeting" status="PENDING" />
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>
                </div>

            </div>

            {/* FOOTER AUDIT NOTICE */}
            <footer className="flex justify-between items-center pt-8 border-t border-slate-200">
                <div className="flex items-center gap-3 text-slate-400">
                    <Activity size={18} className="text-emerald-600 animate-pulse" />
                    <span className="text-[10px] font-black uppercase tracking-widest leading-none">Fast Retrieval Engine: Active • Consolidated State Advisory Board Sync</span>
                </div>
                <div className="flex gap-4">
                    <button className="text-[10px] font-black uppercase text-emerald-600 hover:underline">Download Master Zip</button>
                    <button className="text-[10px] font-black uppercase text-slate-400 hover:text-slate-900">Registry Manual</button>
                </div>
            </footer>
        </div>
    );
}

/* UI SUB-COMPONENTS */

function ScopeBtn({ active, onClick, label, icon }: any) {
    return (
        <button
            onClick={onClick}
            className={`w-full flex items-center justify-between p-5 rounded-[22px] transition-all group border-2 ${active
                ? 'bg-emerald-600 text-white border-transparent shadow-xl translate-x-1'
                : 'bg-white text-slate-500 border-slate-200 hover:border-slate-100 hover:bg-slate-50'
                }`}
        >
            <div className="flex items-center gap-4">
                <div className={`h-10 w-10 rounded-xl flex items-center justify-center transition-all ${active ? 'bg-white/20 backdrop-blur-md' : 'bg-slate-50 text-slate-300 group-hover:text-emerald-600'}`}>
                    {icon}
                </div>
                <span className="text-[11px] font-black uppercase tracking-widest">{label}</span>
            </div>
            {active && <ArrowUpRight size={16} className="text-white/40" />}
        </button>
    )
}

function FilterGroup({ label, children }: any) {
    return (
        <div className="space-y-2">
            <label className="text-[9px] font-black uppercase text-slate-400 ml-1 tracking-widest">{label}</label>
            {children}
        </div>
    )
}

function ResultRow({ id, subject, cat, status, success, warning, alert }: any) {
    const statusColor = success ? 'bg-green-100 text-green-700' : warning ? 'bg-orange-100 text-orange-700' : alert ? 'bg-red-100 text-red-700' : 'bg-blue-100 text-blue-700';
    return (
        <TableRow className="border-none hover:bg-slate-50 transition-all group cursor-pointer">
            <TableCell className="px-10 py-6">
                <span className="text-[11px] font-mono font-black text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md uppercase tracking-tighter">{id}</span>
                <p className="text-[7px] font-black text-slate-300 uppercase mt-2 tracking-widest">Authorized Entry</p>
            </TableCell>
            <TableCell>
                <p className="text-sm font-black text-slate-800 uppercase tracking-tight leading-none">{subject}</p>
                <p className="text-[8px] font-bold text-slate-400 uppercase tracking-widest mt-1.5 flex items-center gap-1"><History size={10} /> View Historical Record</p>
            </TableCell>
            <TableCell className="text-center">
                <Badge className="bg-slate-100 text-slate-500 border-none font-black text-[8px] uppercase px-2.5 py-0.5 tracking-tighter">{cat}</Badge>
            </TableCell>
            <TableCell className="text-right px-10">
                <Badge className={`rounded-full px-4 py-1 text-[8px] font-black uppercase border-none shadow-sm ${statusColor}`}>
                    {status}
                </Badge>
            </TableCell>
        </TableRow>
    )
}