// app/dashboard/ccpd/data/directions/page.tsx
"use client";
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
    Gavel, Scale, ShieldCheck, BadgeCheck,
    Send, Zap, FileText, Landmark,
    Globe, Sparkles, Calendar, History,
    Download, Upload, FileCheck, Info,
    AlertCircle, ArrowLeft, BadgeInfo, UserCheck,
    Activity
} from "lucide-react";
import {
    Select, SelectContent, SelectItem, SelectTrigger, SelectValue, SelectGroup, SelectLabel
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";

export default function StatutoryDirectionsEntry() {
    return (
        <div className="space-y-12 animate-in fade-in duration-1000 pb-20 font-sans selection:bg-indigo-100 bg-[#fbfcfd]">

            {/* APEX COMMAND HEADER */}
            <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-6 mb-10 bg-white p-12 rounded-[48px] border-2 border-slate-100 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.05)] relative overflow-hidden">
                <div className="relative z-10 space-y-4">
                    <div className="flex items-center gap-5">
                        <div className="h-16 w-16 bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-700 rounded-3xl flex items-center justify-center text-white shadow-2xl shadow-indigo-500/20 transition-transform hover:scale-105">
                            <Gavel size={32} />
                        </div>
                        <div>
                            <h1 className="text-5xl font-black text-slate-900 tracking-tighter uppercase leading-none">Directions & Orders</h1>
                            <p className="text-[11px] font-black text-indigo-600 uppercase tracking-[0.3em] mt-3 flex items-center gap-2">
                                <BadgeCheck size={14} /> National Authority Node / Statutory Entry
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex gap-4 relative z-10">
                    <Button variant="outline" className="h-16 px-10 rounded-3xl border-2 border-slate-200 font-black uppercase tracking-widest text-[10px] bg-white gap-2 shadow-sm hover:bg-slate-50 transition-all">
                        <History size={18} /> Order Registry
                    </Button>
                    <Button className="h-16 px-12 rounded-[28px] bg-slate-950 text-white font-black uppercase tracking-widest text-[11px] shadow-2xl hover:bg-black transition-all gap-3 group">
                        <Send size={18} className="text-blue-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /> Dispatch Statutory Order
                    </Button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

                {/* MAIN DRAFTING WORKSPACE (8 COLS) */}
                <div className="lg:col-span-8 space-y-12">

                    <Card className="rounded-[48px] border-2 border-slate-200 bg-white shadow-xl overflow-hidden group">
                        <CardHeader className="p-0">
                            <div className="p-10 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white relative overflow-hidden">
                                {/* SUBTLE CARBON FIBER OVERLAY */}
                                <div className="absolute inset-0 opacity-20 pointer-events-none"
                                    style={{ backgroundImage: `radial-gradient(black 2px, transparent 0)`, backgroundSize: '4px 4px' }} />
                                <div className="flex items-center gap-5 relative z-10">
                                    <div className="h-12 w-12 rounded-2xl bg-white/20 backdrop-blur-md border-2 border-white/20 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                                        <FileText size={24} />
                                    </div>
                                    <CardTitle className="text-sm font-black uppercase tracking-[0.3em] leading-none">Order Metadata & Formal Text</CardTitle>
                                </div>
                            </div>
                        </CardHeader>

                        <CardContent className="p-12 space-y-12">

                            {/* REFERENCE & RECIPIENT */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                <div className="space-y-4">
                                    <label className="text-[11px] font-black uppercase text-slate-400 ml-1 tracking-widest leading-none">Direction / Order Reference No. (auto)</label>
                                    <Input
                                        defaultValue="CCPD-ORDER-2024-NAT-9102"
                                        readOnly
                                        className="h-16 px-8 rounded-2xl bg-slate-50 border-2 border-slate-200 font-mono font-black text-blue-700 text-lg uppercase shadow-inner"
                                    />
                                </div>
                                <div className="space-y-4">
                                    <label className="text-[11px] font-black uppercase text-slate-400 ml-1 tracking-widest leading-none">Issued To (State Commissioner / State Nodal / Authority)</label>
                                    <Select>
                                        <SelectTrigger className="w-full h-16 py-6 border-2 border-slate-200 bg-slate-50 rounded-2xl px-6 font-black text-slate-800 uppercase text-[10px] focus:ring-2 focus:ring-indigo-500">
                                            <SelectValue placeholder="Select Target Authority" />
                                        </SelectTrigger>
                                        <SelectContent className="rounded-2xl border-2 border-slate-200 shadow-2xl">
                                            <SelectGroup>
                                                <SelectLabel className="text-[9px] font-black uppercase text-indigo-600 px-3 py-2">State Authorities</SelectLabel>
                                                <SelectItem value="sc-all" className="font-black py-4 uppercase">All State Commissioners</SelectItem>
                                                <SelectItem value="sc-up" className="font-black py-4 uppercase">State Commissioner - Uttar Pradesh</SelectItem>
                                                <SelectItem value="sn-mh" className="font-black py-4 uppercase">State Nodal - Maharashtra</SelectItem>
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>

                            {/* SUBJECT LINE */}
                            <div className="space-y-4">
                                <label className="text-[11px] font-black uppercase text-slate-400 ml-1 tracking-widest leading-none">Subject</label>
                                <Input
                                    placeholder="Enter authoritative headline of the statutory order..."
                                    className="h-16 px-8 rounded-2xl bg-white border-2 border-slate-200 font-black text-slate-900 text-sm uppercase tracking-tight shadow-sm focus:ring-2 focus:ring-indigo-500 transition-all"
                                />
                            </div>

                            {/* CORE ORDER TEXT */}
                            <div className="space-y-4">
                                <div className="flex justify-between items-center px-1">
                                    <label className="text-[11px] font-black uppercase text-slate-400 ml-1 tracking-widest leading-none">Direction / Order Text</label>
                                    <button className="flex items-center gap-2 text-blue-600 font-black text-[10px] uppercase tracking-widest bg-blue-50 px-4 py-2 rounded-full border-2 border-blue-100 hover:bg-white transition-all shadow-sm">
                                        <Sparkles size={12} /> AI Legal Drafter
                                    </button>
                                </div>
                                <Textarea
                                    className="min-h-[300px] bg-slate-50 border-2 border-slate-200 rounded-[40px] p-10 text-base font-medium leading-relaxed italic text-slate-700 shadow-inner resize-none focus:ring-2 focus:ring-indigo-600"
                                    placeholder="Draft the primary statutory function details..."
                                />
                            </div>

                            {/* LEGAL PROVISION & DATES */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 border-t-2 border-slate-50 pt-10">
                                <div className="space-y-4">
                                    <label className="text-[11px] font-black uppercase text-slate-400 ml-1 tracking-widest leading-none">Legal Provision / Section of Act / Rule</label>
                                    <div className="relative group">
                                        <Landmark className="absolute left-5 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-300 group-focus-within:text-indigo-600 transition-colors" />
                                        <Input placeholder="e.g. PwD Act 2016 Section 75" className="h-16 pl-14 rounded-2xl bg-white border-2 border-slate-200 font-black text-slate-900 text-sm shadow-sm" />
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-6">
                                    <div className="space-y-4">
                                        <label className="text-[11px] font-black uppercase text-slate-400 ml-1 tracking-widest leading-none">Date of Issue</label>
                                        <Input type="date" className="h-16 px-6 rounded-2xl bg-white border-2 border-slate-200 font-black text-slate-900 text-xs" />
                                    </div>
                                    <div className="space-y-4">
                                        <label className="text-[11px] font-black uppercase text-slate-400 ml-1 tracking-widest leading-none">Compliance Due Date</label>
                                        <Input type="date" className="h-16 px-6 rounded-2xl bg-white border-2 border-slate-200 font-black text-red-600 text-xs shadow-sm" />
                                    </div>
                                </div>
                            </div>

                            {/* ATTACHMENTS */}
                            <div className="space-y-4 pt-4">
                                <label className="text-[11px] font-black uppercase text-slate-400 ml-1 tracking-widest leading-none">Attachments (Order / Annexures)</label>
                                <div className="border-2 border-dashed border-indigo-200 rounded-[40px] p-12 flex flex-col items-center justify-center bg-slate-50 group hover:bg-white hover:border-indigo-500 transition-all cursor-pointer">
                                    <Upload className="text-slate-300 group-hover:text-indigo-600 mb-4 transition-colors" size={42} />
                                    <span className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em]">Select Certified PDF Documents</span>
                                    <Badge className="bg-slate-200 text-slate-500 border-none text-[8px] font-black mt-3 uppercase px-3 py-1">Secure Multi-Upload Node</Badge>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* SIDEBAR: SYSTEM BEHAVIOUR & GUARDRAILS (4 COLS) */}
                <div className="lg:col-span-4 space-y-8 sticky top-28 h-fit">

                    {/* BEHAVIOUR CARD - VIBRANT EMERALD GRADIENT */}
                    <Card className="rounded-[44px] border-none bg-gradient-to-br from-emerald-600 via-teal-700 to-blue-700 text-white p-10 shadow-2xl relative overflow-hidden group">
                        {/* SUBTLE CARBON FIBER */}
                        <div className="absolute inset-0 opacity-10 pointer-events-none"
                            style={{ backgroundImage: `radial-gradient(black 2px, transparent 0)`, backgroundSize: '4px 4px' }} />

                        <div className="relative z-10 space-y-8">
                            <div className="flex items-center gap-3">
                                <div className="h-12 w-12 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center border-2 border-white/20">
                                    <ShieldCheck size={24} />
                                </div>
                                <h3 className="text-[11px] font-black uppercase tracking-[0.3em] text-emerald-100 leading-none">System Behaviour</h3>
                            </div>
                            <div className="space-y-6">
                                <BehaviourNode text="Auto-dispatch to concerned stakeholders upon final commit." />
                                <BehaviourNode text="Appears in State dashboards as a binding mandatory order." />
                                <BehaviourNode text="Compliance tracked via reports (no manual tracking here)." />
                            </div>
                            <div className="pt-6 border-t border-white/10 flex items-center gap-4">
                                <div className="h-1.5 w-1.5 rounded-full bg-blue-400 animate-pulse" />
                                <span className="text-[9px] font-black uppercase tracking-widest text-emerald-100">National Sync active</span>
                            </div>
                        </div>
                    </Card>

                    {/* ADVISORY ALERT HUB */}
                    <Card className="rounded-[44px] border-2 border-slate-200 bg-white p-10 shadow-sm relative overflow-hidden">
                        <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/topography.png')]" />
                        <h4 className="text-[11px] font-black text-slate-400 uppercase tracking-widest mb-10 border-b-2 border-slate-50 pb-6 flex items-center gap-3">
                            <Activity size={18} className="text-indigo-600" /> Active Oversight Metrics
                        </h4>
                        <div className="space-y-8">
                            <MetricItem label="Pending State Responses" val="112" color="text-orange-600" />
                            <MetricItem label="Overdue Directions" val="09" color="text-red-600" alert />
                            <MetricItem label="Verified Complied" val="842" color="text-emerald-600" />
                        </div>
                    </Card>

                    <div className="p-8 bg-blue-50 rounded-[40px] border-2 border-blue-100 flex gap-6 shadow-sm">
                        <Info className="text-blue-600 shrink-0" size={28} />
                        <p className="text-[10px] font-bold text-blue-900 leading-relaxed uppercase tracking-widest">
                            Directions issued here are considered <b>Primary statutory functions</b> and carry binding legal weight across state nodes.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
}

/* UI SUB-COMPONENTS */

function BehaviourNode({ text }: { text: string }) {
    return (
        <div className="flex items-start gap-4 group">
            <div className="h-6 w-6 rounded-lg bg-white/10 flex items-center justify-center shrink-0 mt-0.5 border-2 border-white/10 transition-all group-hover:bg-white/20">
                <div className="h-1 w-1 rounded-full bg-emerald-300" />
            </div>
            <p className="text-xs font-black text-white uppercase tracking-tight leading-relaxed">{text}</p>
        </div>
    )
}

function MetricItem({ label, val, color, alert }: any) {
    return (
        <div className="flex justify-between items-center group cursor-default">
            <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest group-hover:text-indigo-600 transition-colors">{label}</span>
            <span className={`text-xl font-black ${color} ${alert ? 'animate-pulse' : ''}`}>{val}</span>
        </div>
    )
}