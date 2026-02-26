// app/dashboard/scpd/search/page.tsx
"use client";
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
    Search, Filter, Globe, MapPin, Building2,
    MessageSquare, Gavel, Scale, Briefcase,
    GraduationCap, Activity, ShieldCheck,
    ChevronRight, ArrowUpRight, Sparkles,
    History, Bookmark, Download, FileText,
    BadgeCheck, Landmark, MousePointer2, Command,
    Database, CalendarDays, Timer
} from "lucide-react";
import {
    Table, TableBody, TableCell, TableHead, TableHeader, TableRow
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
    Select, SelectContent, SelectItem, SelectTrigger, SelectValue
} from "@/components/ui/select";

export default function StatutorySearchHub() {
    const [activeTab, setActiveTab] = useState('quick');

    return (
        <div className="space-y-10 animate-in fade-in duration-1000 pb-20 font-sans selection:bg-indigo-100">

            {/* 1. APEX SEARCH HEADER - CARBON FIBER TEXTURE */}
            <Card className="rounded-[40px] border-none bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 p-1 relative overflow-hidden shadow-2xl shadow-indigo-200">
                <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
                <div className="bg-white rounded-[38px] p-10 relative z-10">
                    <div className="flex flex-col xl:flex-row justify-between items-center gap-10">
                        <div className="space-y-4 flex-1">
                            <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] border border-indigo-100">
                                <BadgeCheck size={14} /> State Discovery Node
                            </div>
                            <h1 className="text-5xl font-black text-slate-900 tracking-tighter uppercase leading-none">Statutory Search</h1>
                            <p className="text-slate-500 font-medium italic text-lg max-w-xl">Centralized lookup for Districts, Establishments, Grievances, and Legal Cases.</p>
                        </div>

                        <div className="flex bg-slate-100 p-1.5 rounded-[28px] border border-slate-200 shadow-inner">
                            <button onClick={() => setActiveTab('quick')} className={`px-10 py-4 rounded-[22px] text-[10px] font-black uppercase tracking-widest transition-all ${activeTab === 'quick' ? 'bg-white text-indigo-600 shadow-xl' : 'text-slate-400 hover:text-slate-600'}`}>Quick Search</button>
                            <button onClick={() => setActiveTab('advanced')} className={`px-10 py-4 rounded-[22px] text-[10px] font-black uppercase tracking-widest transition-all ${activeTab === 'advanced' ? 'bg-white text-indigo-600 shadow-xl' : 'text-slate-400 hover:text-slate-600'}`}>Advanced Search</button>
                        </div>
                    </div>
                </div>
            </Card>

            <div className="grid grid-cols-1 xl:grid-cols-12 gap-10 items-start">

                {/* 2. SEARCH INPUT PANEL (4 COLS) */}
                <div className="xl:col-span-4 space-y-6 sticky top-28 h-fit">

                    {activeTab === 'quick' ? (
                        <Card className="rounded-[40px] border-slate-200 bg-white shadow-xl p-8 space-y-8 animate-in slide-in-from-left-4 duration-500">
                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase text-slate-400 ml-1 tracking-widest">Global Identifier</label>
                                <div className="relative group">
                                    <Command className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-300 group-focus-within:text-indigo-600 transition-colors" />
                                    <Input className="h-16 pl-12 rounded-[22px] bg-slate-50 border-none font-black text-slate-800 shadow-inner" placeholder="Enter Case ID, PwD No, or Entity..." />
                                </div>
                                <p className="text-[8px] font-bold text-slate-400 uppercase ml-2 italic">Format Example: CP/STATE/2024/09</p>
                            </div>
                            <Button className="w-full h-16 bg-slate-950 text-white rounded-3xl font-black uppercase tracking-[0.2em] text-[10px] shadow-2xl hover:bg-black transition-all group">
                                Search <Search size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </Card>
                    ) : (
                        <Card className="rounded-[40px] border-slate-200 bg-white shadow-xl overflow-hidden animate-in slide-in-from-left-4 duration-500">
                            <CardHeader className="p-8 text-white relative bg-gradient-to-r from-indigo-800 via-indigo-500 to-indigo-600 border-b border-slate-100">
                                <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
                                <CardTitle className="text-[10px] font-black uppercase tracking-widest">Advanced Filters</CardTitle>
                            </CardHeader>
                            <CardContent className="p-8 space-y-6">
                                <FilterSelect label="Entity Category" options={['Grievances', 'Establishments', 'Education', 'Prosecution']} />
                                <FilterSelect label="District Hub" options={['Lucknow', 'Varanasi', 'Agra', 'All Districts']} />
                                <FilterSelect label="Current Status" options={['Active', 'Pending', 'Overdue', 'Closed']} />
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase text-slate-400 ml-1">Statutory Period</label>
                                    <Input type="date" className="h-12 bg-slate-50 border-none rounded-xl font-bold" />
                                </div>
                                <Button className="w-full h-14 bg-indigo-600 text-white rounded-2xl font-black uppercase tracking-widest text-[9px] shadow-lg mt-4">Generate Filtered Results</Button>
                            </CardContent>
                        </Card>
                    )}

                    {/* AI SEARCH ASSISTANT (Section A6 Mandated) */}
                    <Card className="rounded-[40px] border-none bg-slate-900 text-white p-8 shadow-2xl relative overflow-hidden group">
                        <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/circuit-board.png')]" />
                        <div className="relative z-10 space-y-6">
                            <div className="flex items-center gap-3 text-purple-400">
                                <Sparkles className="animate-pulse" />
                                <h3 className="text-[10px] font-black uppercase tracking-widest">AI Intelligence</h3>
                            </div>
                            <p className="text-sm font-bold leading-relaxed uppercase tracking-tighter italic">
                                "Unable to find a specific record? Use natural language search to discover cross-module implementation patterns."
                            </p>
                            <Button variant="ghost" className="w-full h-11 bg-white/10 text-white hover:bg-white/20 rounded-xl font-black uppercase text-[8px] tracking-widest">Launch Semantic Search</Button>
                        </div>
                    </Card>
                </div>

                {/* 3. UNIFIED RESULTS LEDGER (8 COLS) */}
                <div className="xl:col-span-8 space-y-8">
                    <Card className="rounded-[48px] border-slate-200 shadow-sm overflow-hidden bg-white min-h-[800px]">
                        <CardHeader className="p-8 border-b border-slate-50 bg-slate-50/30 flex flex-row justify-between items-center">
                            <div className="flex gap-4 items-center">
                                <Database className="text-indigo-600" />
                                <CardTitle className="text-sm font-black uppercase tracking-widest text-slate-400">Cross-Module Discovery Registry</CardTitle>
                            </div>
                            <Badge className="bg-indigo-900 text-white font-black text-[9px] uppercase px-4 py-1 tracking-widest border-none">142 Matches Found</Badge>
                        </CardHeader>
                        <CardContent className="p-0">
                            <Table>
                                <TableHeader className="bg-white">
                                    <TableRow className="border-slate-100">
                                        <TableHead className="px-10 py-6 text-[9px] font-black uppercase tracking-widest text-slate-400">Statutory ID</TableHead>
                                        <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400">Module / District</TableHead>
                                        <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400">Entity / Subject</TableHead>
                                        <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400 text-center">Status</TableHead>
                                        <TableHead className="text-right px-10 text-[9px] font-black uppercase tracking-widest text-slate-400">Action</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody className="divide-y divide-slate-50 font-sans">
                                    <ResultRow id="GRV-2024-LKO-910" module="GRIEVANCES" district="Lucknow" entity="Transport Dept" status="PENDING" />
                                    <ResultRow id="CP-STATE-2024-42" module="PROSECUTION" district="Meerut" entity="Pvt Retail Hub" status="ACTIVE" alert />
                                    <ResultRow id="EST-UP-7721-VNS" module="ESTABLISHMENT" district="Varanasi" entity="HDFC Regional" status="COMPLIANT" success />
                                    <ResultRow id="EDU-UP-0012-GBN" module="EDUCATION" district="GB Nagar" entity="Model Academy" status="AUDIT REQ" warning />
                                    <ResultRow id="DIR-SCPD-2024-001" module="DIRECTIONS" district="Lucknow" entity="Nagar Nigam" status="COMPLIED" success />
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>
                </div>

            </div>

            {/* FOOTER AUDIT STRIP */}
            <footer className="flex flex-col md:flex-row justify-between items-center gap-8 pt-10 border-t border-slate-200">
                <div className="flex items-center gap-3 text-slate-400">
                    <Activity size={18} className="text-indigo-600 animate-pulse" />
                    <span className="text-[10px] font-black uppercase tracking-widest leading-none">Discovery Sync Active: Statewide Master Node Connected</span>
                </div>
                <div className="flex gap-6">
                    <button className="text-[10px] font-black uppercase text-indigo-600 hover:underline">Download Results XLS</button>
                    <button className="text-[10px] font-black uppercase text-slate-400 hover:text-slate-900">Registry Manual</button>
                </div>
            </footer>
        </div>
    );
}

/* UI SUB-COMPONENTS */

function FilterSelect({ label, options }: any) {
    return (
        <div className="space-y-2">
            <label className="text-[9px] font-black uppercase text-slate-400 ml-1 tracking-widest leading-none">{label}</label>
            <Select>
                <SelectTrigger className="h-12 rounded-xl bg-slate-50 border-none font-bold text-slate-800 text-[10px] uppercase shadow-inner transition-all hover:bg-slate-100">
                    <SelectValue placeholder={`All ${label}s`} />
                </SelectTrigger>
                <SelectContent className="rounded-2xl border-slate-100 shadow-2xl">
                    {options.map((opt: string) => (
                        <SelectItem key={opt} value={opt.toLowerCase()} className="font-bold text-[10px] uppercase py-2.5">{opt}</SelectItem>
                    ))}
                </SelectContent>
            </Select>
        </div>
    )
}

function ResultRow({ id, module, district, entity, status, alert, success, warning }: any) {
    const statusColor = alert ? 'bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.3)]' : success ? 'bg-green-500' : warning ? 'bg-orange-500' : 'bg-blue-600';

    return (
        <TableRow className="border-none hover:bg-slate-50 transition-all group cursor-pointer">
            <TableCell className="px-10 py-6">
                <span className="text-[11px] font-mono font-black text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded-md uppercase tracking-tighter">{id}</span>
                <p className="text-[7px] font-black text-slate-300 uppercase mt-2 tracking-widest">Authorized Entry</p>
            </TableCell>
            <TableCell>
                <div className="space-y-1">
                    <p className="text-[9px] font-black text-indigo-600 uppercase tracking-widest leading-none">{module}</p>
                    <div className="flex items-center gap-1.5">
                        <MapPin size={10} className="text-slate-300" />
                        <span className="text-[9px] font-bold text-slate-400 uppercase tracking-tighter">{district}</span>
                    </div>
                </div>
            </TableCell>
            <TableCell>
                <p className="text-sm font-black text-slate-800 uppercase tracking-tight leading-none">{entity}</p>
                <p className="text-[8px] font-bold text-slate-400 uppercase tracking-widest mt-1.5 italic">Consolidated Subject</p>
            </TableCell>
            <TableCell className="text-center">
                <Badge className={`rounded-full px-3 py-0.5 text-[8px] font-black uppercase border-none shadow-none ${alert ? 'bg-red-100 text-red-700' : success ? 'bg-green-100 text-green-700' : warning ? 'bg-orange-100 text-orange-700' : 'bg-blue-100 text-blue-700'
                    }`}>
                    {status}
                </Badge>
            </TableCell>
            <TableCell className="text-right px-10 opacity-0 group-hover:opacity-100 transition-all">
                <button className="p-2.5 bg-white border border-slate-200 text-indigo-600 rounded-xl hover:bg-indigo-900 hover:text-white transition-all shadow-sm">
                    <ArrowUpRight size={18} />
                </button>
            </TableCell>
        </TableRow>
    )
}