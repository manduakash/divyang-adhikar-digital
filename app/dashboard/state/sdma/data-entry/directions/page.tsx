// app/dashboard/sdma/data/directions/page.tsx
"use client";
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
    ShieldAlert, Gavel, FileText, Send,
    Map, Navigation, Activity, History,
    Plus, Search, Filter, Globe, Landmark,
    Sparkles, BadgeCheck, Clock, Zap,
    AlertTriangle, CloudLightning, FilePlus,
    ArrowLeft, Download, Save,
    CheckCircle2,
    Info,
    Upload,
    ArrowUpRight
} from "lucide-react";
import {
    Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";

export default function StateDirectionsAdvisories() {
    return (
        <div className="max-w-7xl mx-auto pb-20 animate-in fade-in duration-1000 font-sans selection:bg-orange-100">

            {/* 1. ADMINISTRATIVE HUB HEADER */}
            <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-8 mb-10 bg-white p-10 rounded-[48px] border border-slate-200 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 p-10 opacity-[0.03] pointer-events-none text-orange-600">
                    <Gavel size={200} />
                </div>

                <div className="space-y-4 relative z-10">
                    <div className="flex items-center gap-3">
                        <div className="h-14 w-14 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center text-white shadow-xl shadow-orange-500/20">
                            <ShieldAlert size={32} />
                        </div>
                        <div>
                            <h1 className="text-4xl font-black text-slate-900 tracking-tighter uppercase leading-none text-wrap">State-level Directions & Advisories</h1>
                            <p className="text-[10px] font-black text-orange-600 uppercase tracking-[0.3em] mt-2 flex items-center gap-2">
                                <BadgeCheck size={12} /> Statutory Command Node / A3.1
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex gap-4 relative z-10">
                    <Button variant="outline" className="h-16 px-10 rounded-[24px] border-slate-200 font-black uppercase tracking-widest text-[10px] bg-white gap-2 shadow-sm hover:bg-slate-50 transition-all group">
                        <History size={18} className="mr-2" /> Advisory register <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </Button>
                    <Button className="h-16 px-12 rounded-[24px] bg-slate-950 text-white font-black uppercase tracking-widest text-[11px] shadow-2xl hover:bg-black transition-all gap-3 group">
                        <Send size={18} className="text-orange-400 group-hover:translate-x-1 transition-transform" /> Dispatch Statutory Order
                    </Button>
                </div>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-12 gap-10">

                {/* LEFT COLUMN: PURPOSE & OUTPUTS (4 COLS) */}
                <div className="xl:col-span-4 space-y-8 sticky top-28 h-fit">

                    <Card className="rounded-[40px] border-slate-200 p-10 bg-white shadow-sm relative overflow-hidden group">
                        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/topography.png')]" />
                        <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-8 border-b pb-6 flex items-center gap-3">
                            <Zap size={18} className="text-orange-600" /> Automated Outputs
                        </h4>
                        <div className="space-y-6">
                            <OutputItem label="Automated dissemination" desc="Broadcast to all 75 District Nodes" status="SYNC ACTIVE" />
                            <OutputItem label="Compliance tracking linkage" desc="Real-time monitoring of response" status="LINKED" />
                        </div>
                    </Card>

                    <div className="p-8 bg-blue-50 rounded-[40px] border border-blue-100 flex gap-6 shadow-sm">
                        <Info className="text-blue-600 shrink-0" size={28} />
                        <p className="text-[10px] font-bold text-blue-900 leading-relaxed uppercase tracking-widest">
                            Directions issued here are automatically archived in the <b>Advisory register</b> for state-level audit trails.
                        </p>
                    </div>
                </div>

                {/* RIGHT COLUMN: DATA CAPTURE (8 COLS) */}
                <div className="xl:col-span-8 space-y-8">
                    <Card className="rounded-[48px] border-slate-200 shadow-xl overflow-hidden bg-white">
                        <CardHeader className="p-0">
                            <div className="p-10 bg-gradient-to-r from-blue-800 via-blue-900 to-blue-900 text-white relative overflow-hidden">
                                <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
                                <div className="flex items-center gap-5 relative z-10">
                                    <div className="h-12 w-12 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center shadow-inner">
                                        <FilePlus size={24} className="text-orange-400" />
                                    </div>
                                    <CardTitle className="text-sm font-black uppercase tracking-[0.3em] leading-none text-white">Data Captured Registry</CardTitle>
                                </div>
                            </div>
                        </CardHeader>

                        <CardContent className="p-12 space-y-12">

                            {/* REFERENCE & RECIPIENTS */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                <div className="space-y-3">
                                    <label className="text-[11px] font-black uppercase text-slate-400 ml-1 tracking-widest leading-none">Direction / Advisory Reference No. (auto)</label>
                                    <Input defaultValue="ADVISORY-SDMA-UP-2024-442" readOnly className="h-16 px-6 rounded-2xl bg-slate-50 border font-mono font-black text-orange-600 text-lg shadow-inner" />
                                </div>
                                <div className="space-y-3">
                                    <label className="text-[11px] font-black uppercase text-slate-400 ml-1 tracking-widest leading-none">Issued To (DDMAs / Departments / Agencies)</label>
                                    <Select>
                                        <SelectTrigger className="h-16 rounded-2xl bg-slate-50 border font-black text-slate-800 shadow-inner px-6"><SelectValue placeholder="Select Recipient Cluster" /></SelectTrigger>
                                        <SelectContent className="rounded-2xl shadow-2xl border-slate-100">
                                            <SelectGroup>
                                                <SelectLabel className="text-[9px] font-black uppercase text-orange-600 px-3 py-2">Emergency Nodes</SelectLabel>
                                                <SelectItem value="ddma-all" className="font-bold py-3 uppercase text-[10px]">All District Authorities</SelectItem>
                                                <SelectItem value="health-dept" className="font-bold py-3 uppercase text-[10px]">Health & Medical Dept</SelectItem>
                                                <SelectItem value="transport-dept" className="font-bold py-3 uppercase text-[10px]">Transport & Evac Hubs</SelectItem>
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>

                            {/* DISASTER TYPE & SUBJECT */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                <div className="space-y-3">
                                    <label className="text-[11px] font-black uppercase text-slate-400 ml-1 tracking-widest leading-none">Disaster Type (Flood / Cyclone / Heatwave / Earthquake / Multiple)</label>
                                    <Select>
                                        <SelectTrigger className="h-16 rounded-2xl bg-slate-50 border font-black text-slate-800 shadow-inner px-6"><SelectValue placeholder="Identify Hazard" /></SelectTrigger>
                                        <SelectContent className="rounded-2xl">
                                            <SelectItem value="flood" className="font-bold py-3 uppercase text-[10px] text-blue-600">Flood</SelectItem>
                                            <SelectItem value="cyclone" className="font-bold py-3 uppercase text-[10px] text-indigo-600">Cyclone</SelectItem>
                                            <SelectItem value="multiple" className="font-bold py-3 uppercase text-[10px] text-red-600">Multiple / Sequential</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="space-y-3">
                                    <label className="text-[11px] font-black uppercase text-slate-400 ml-1 tracking-widest leading-none">Subject</label>
                                    <Input placeholder="Enter high-level headline of the advisory..." className="h-16 px-6 rounded-2xl bg-slate-50 border font-black text-slate-900 shadow-inner uppercase tracking-tighter" />
                                </div>
                            </div>

                            {/* ADVISORY TEXT */}
                            <div className="space-y-4">
                                <div className="flex justify-between items-center px-1">
                                    <label className="text-[11px] font-black uppercase text-slate-400 ml-1 tracking-widest leading-none">Advisory / Direction Text</label>
                                    <button className="flex items-center gap-2 text-purple-600 font-black text-[10px] uppercase tracking-widest bg-purple-50 px-4 py-2 rounded-full border border-purple-100 hover:bg-white transition-all"><Sparkles size={12} /> AI Legal Drafter</button>
                                </div>
                                <Textarea className="min-h-[220px] bg-slate-50 border rounded-[32px] p-10 text-sm font-medium leading-relaxed italic text-slate-700 shadow-inner resize-none focus:ring-2 focus:ring-orange-500" placeholder="Author the binding statutory directive..." />
                            </div>

                            {/* LEGAL REF & DATES */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                <div className="space-y-3">
                                    <label className="text-[11px] font-black uppercase text-slate-400 ml-1 tracking-widest leading-none">Legal / Policy Reference</label>
                                    <div className="relative group">
                                        <Landmark className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-300 group-focus-within:text-orange-600 transition-colors" />
                                        <Input defaultValue="PwD Act 2016 Section 8" className="h-16 pl-12 rounded-2xl bg-slate-50 border font-bold text-slate-800" />
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <label className="text-[11px] font-black uppercase text-slate-400 ml-1 tracking-widest leading-none">Compliance / Response Due Date</label>
                                    <div className="relative">
                                        <Clock className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-red-500 animate-pulse" />
                                        <Input type="date" className="h-16 pl-12 rounded-2xl bg-red-50/30 border font-black text-red-700 shadow-sm" />
                                    </div>
                                </div>
                            </div>

                            {/* ATTACHMENTS */}
                            <div className="space-y-4 pt-6 border-t border-slate-50">
                                <label className="text-[11px] font-black uppercase text-slate-400 ml-1 tracking-widest leading-none">Attachments (Guidelines / SOPs)</label>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="border-2 border-dashed border-orange-200 rounded-[32px] p-10 flex flex-col items-center justify-center bg-slate-50 group hover:bg-white hover:border-orange-500 transition-all cursor-pointer">
                                        <Upload className="text-slate-300 group-hover:text-orange-600 mb-3" size={32} />
                                        <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Select Supporting Guidelines</span>
                                        <Badge className="bg-slate-200 text-slate-500 border-none text-[8px] font-black mt-2">MAX 25MB</Badge>
                                    </div>
                                    <div className="bg-white border border-slate-100 rounded-[32px] p-8 flex items-center justify-between shadow-sm group hover:shadow-lg transition-all">
                                        <div className="flex items-center gap-4">
                                            <div className="h-12 w-12 bg-orange-50 rounded-2xl flex items-center justify-center text-orange-600"><FileText size={24} /></div>
                                            <div className="space-y-0.5">
                                                <p className="text-sm font-black text-slate-900">flood_sop_v2.pdf</p>
                                                <p className="text-[9px] font-bold text-green-600 uppercase tracking-tighter">Verified Content</p>
                                            </div>
                                        </div>
                                        <Button variant="ghost" className="text-red-500 font-black uppercase text-[10px] hover:bg-red-50 rounded-xl">Remove</Button>
                                    </div>
                                </div>
                            </div>

                            <Button className="w-full h-20 bg-orange-600 text-white rounded-[32px] font-black uppercase tracking-[0.2em] text-[11px] shadow-2xl shadow-orange-900/20 hover:bg-orange-700 transition-all flex gap-4">
                                Submit Statutory Advisory <Zap size={20} className="fill-white" />
                            </Button>
                        </CardContent>
                    </Card>
                </div>

            </div>
        </div>
    );
}

/* UI SUB-COMPONENTS */

function OutputItem({ label, desc, status }: any) {
    return (
        <div className="flex items-start gap-5 group cursor-default">
            <div className="h-10 w-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center transition-all duration-500 shadow-sm shrink-0">
                <CheckCircle2 className='text-blue-300' size={20} />
            </div>
            <div className="space-y-1">
                <p className="text-xs font-black text-slate-900 uppercase tracking-tight">{label}</p>
                <p className="text-[10px] font-medium text-slate-500 uppercase tracking-widest">{desc}</p>
                <Badge className="bg-emerald-50 text-emerald-700 border-none font-black text-[8px] mt-1 px-2">{status}</Badge>
            </div>
        </div>
    )
}