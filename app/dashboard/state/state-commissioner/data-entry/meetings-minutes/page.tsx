// app/dashboard/scpd/meetings/page.tsx
"use client";
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
    Users, Calendar, Clock, BookOpen,
    CheckCircle2, AlertCircle, History, Plus,
    Search, Filter, Printer, Download,
    ArrowUpRight, Sparkles, UserCheck, ShieldCheck,
    ListChecks, FileText, Upload, Landmark,
    Timer, ArrowLeft, MoreHorizontal, PenTool
} from "lucide-react";
import {
    Table, TableBody, TableCell, TableHead, TableHeader, TableRow
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function MeetingsMinutesHub() {
    const [viewMode, setViewMode] = useState('registry');

    return (
        <div className="space-y-10 animate-in fade-in duration-700 pb-20 font-sans">

            {/* 1. APEX ADMINISTRATIVE HEADER */}
            <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-6 mb-10 bg-white p-10 rounded-[40px] border border-slate-200 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 p-10 opacity-[0.03] pointer-events-none">
                    <Users size={200} className="text-indigo-600" />
                </div>
                <div className="space-y-2 relative z-10">
                    <div className="flex items-center gap-2 text-indigo-600 font-black uppercase text-[10px] tracking-[0.2em]">
                        <ArrowLeft size={14} /> Commission Hub / Meetings
                    </div>
                    <h1 className="text-4xl font-black text-slate-900 tracking-tighter uppercase leading-none">Meetings & Minutes</h1>
                    <p className="text-slate-500 font-medium italic">Statutory record of meetings chaired or attended by the Commissioner.</p>
                </div>
                <div className="flex gap-4 relative z-10">
                    <Button variant="outline" className="h-16 px-8 rounded-3xl border-slate-200 font-black uppercase tracking-widest text-[10px] bg-white hover:bg-slate-50 shadow-xl gap-2">
                        <History size={18} /> Past Minutes
                    </Button>
                    <Button className="h-16 px-10 rounded-3xl bg-indigo-900 text-white font-black uppercase tracking-widest text-[10px] shadow-2xl hover:bg-black transition-all gap-2">
                        <Plus size={18} /> Schedule Meeting
                    </Button>
                </div>
            </div>

            {/* 2. STATUTORY SUMMARY TILES (Performance Inputs) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatTile label="Total Meetings (FY)" value="42" icon={<Landmark />} color="from-slate-700 via-slate-800 to-slate-900" />
                <StatTile label="Action Points Open" value="118" icon={<ListChecks />} color="from-orange-500 via-amber-600 to-orange-700" alert />
                <StatTile label="Total Participants" value="2.4K" icon={<Users />} color="from-blue-600 via-blue-700 to-indigo-900" />
                <div className="bg-white border-2 border-indigo-100 rounded-[32px] p-6 shadow-sm flex flex-col justify-center relative overflow-hidden group">
                    <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/topography.png')]" />
                    <p className="text-[9px] font-black uppercase tracking-widest text-indigo-400 mb-1">Execution Efficiency</p>
                    <p className="text-4xl font-black text-indigo-700 tracking-tighter group-hover:scale-105 transition-transform">89.4%</p>
                    <div className="w-full h-1.5 bg-slate-100 rounded-full mt-4 overflow-hidden">
                        <div className="h-full bg-indigo-600 shadow-[0_0_12px_rgba(79,70,229,0.4)]" style={{ width: '89%' }} />
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-start">

                {/* 3. MINUTES ENTRY & ACTION POINTS (8 COLS) */}
                <div className="xl:col-span-8 space-y-8">
                    <Card className="rounded-[40px] border-slate-200 shadow-sm overflow-hidden bg-white">
                        <CardHeader className="p-8 border-b border-slate-50 bg-slate-50/30 flex flex-row justify-between items-center">
                            <CardTitle className="text-xs font-black uppercase tracking-widest text-slate-400">A3.8 Meeting Data Capture</CardTitle>
                            <Badge className="bg-indigo-50 text-indigo-700 border-none font-black text-[8px] uppercase tracking-widest px-3">Entry Session: Active</Badge>
                        </CardHeader>
                        <CardContent className="p-10 space-y-10">

                            {/* CORE METADATA */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-3">
                                    <label className="text-[11px] font-black uppercase text-slate-500 ml-1">1. Meeting Type</label>
                                    <Select defaultValue="review">
                                        <SelectTrigger className="h-14 rounded-2xl bg-slate-50 border-none font-bold text-slate-800"><SelectValue /></SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="review">Quarterly District Review</SelectItem>
                                            <SelectItem value="advisory">State Advisory Board</SelectItem>
                                            <SelectItem value="grievance">Grievance Hearing</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="space-y-3">
                                    <label className="text-[11px] font-black uppercase text-slate-500 ml-1">2. Date and Time</label>
                                    <Input type="datetime-local" className="h-14 bg-slate-50 border-none rounded-2xl font-bold px-6" />
                                </div>
                            </div>

                            {/* AGENDA & PARTICIPANTS */}
                            <div className="space-y-4">
                                <label className="text-[11px] font-black uppercase text-slate-500 ml-1">3. Meeting Agenda</label>
                                <Input placeholder="Enter primary objective of the meeting..." className="h-16 bg-slate-50 border-none rounded-2xl font-bold px-6 shadow-inner" />
                            </div>

                            <div className="space-y-4">
                                <div className="flex justify-between items-center px-1">
                                    <label className="text-[11px] font-black uppercase text-slate-500 ml-1">4. Minutes of Meeting</label>
                                    <button className="flex items-center gap-1.5 text-blue-600 font-bold text-[10px] uppercase tracking-wider bg-blue-50 px-3 py-1.5 rounded-full border border-blue-100 hover:bg-blue-100 transition-colors shadow-sm">
                                        <Sparkles size={12} /> AI Meeting Summarizer
                                    </button>
                                </div>
                                <Textarea
                                    className="min-h-[240px] bg-slate-50/50 border-none rounded-[32px] p-8 text-sm font-medium leading-relaxed resize-none focus:ring-2 focus:ring-indigo-600 shadow-inner"
                                    placeholder="Detailed record of discussion and deliberations..."
                                />
                            </div>

                            {/* DYNAMIC ACTION POINTS (Output Tracker) */}
                            <div className="space-y-6 pt-6 border-t border-slate-50">
                                <div className="flex justify-between items-center">
                                    <label className="text-[11px] font-black uppercase text-slate-500 ml-1 tracking-widest">5. Action-Point Registry</label>
                                    <Button variant="ghost" className="text-indigo-600 font-black uppercase text-[10px] tracking-widest">+ Add Task</Button>
                                </div>
                                <div className="space-y-4">
                                    <ActionPointRow task="Audit Ramp Slope in Lucknow RTO" officer="DM Lucknow" due="12 Nov 2024" />
                                    <ActionPointRow task="Notify Special Scribe Policy" officer="DEO Meerut" due="24 Oct 2024" alert />
                                </div>
                            </div>

                            {/* UPLOAD MINUTES */}
                            <div className="pt-6 border-t border-slate-50">
                                <label className="text-[11px] font-black uppercase text-slate-500 ml-1 tracking-widest mb-4 block">6. Upload Signed Minutes (PDF)</label>
                                <div className="border-2 border-dashed border-indigo-100 rounded-[32px] p-10 flex flex-col items-center justify-center bg-slate-50 group hover:bg-white hover:border-indigo-400 transition-all cursor-pointer">
                                    <Upload className="text-slate-300 group-hover:text-indigo-600 mb-2" size={32} />
                                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Drag & Drop Formal Document</span>
                                    <span className="text-[8px] text-slate-300 mt-2 uppercase italic tracking-tighter">Certified Signed Copies Only (Max 20MB)</span>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* 4. SIDEBAR: FOLLOW-UP TRACKER & PROTOCOLS (4 COLS) */}
                <div className="xl:col-span-4 space-y-8 sticky top-28 h-fit">

                    {/* ACTION POINT TRACKER (Mandated Output) */}
                    <Card className="rounded-[40px] border-none bg-slate-900 text-white p-8 shadow-2xl relative overflow-hidden group">
                        <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/circuit-board.png')]" />
                        <div className="relative z-10 space-y-8">
                            <div className="flex items-center gap-3 text-indigo-400">
                                <Timer className="animate-pulse" />
                                <h3 className="text-sm font-black uppercase tracking-widest">Follow-up Radar</h3>
                            </div>
                            <div className="space-y-6">
                                <FollowUpItem label="DM Lucknow" count="12 Tasks" status="Standard" />
                                <FollowUpItem label="DEO Meerut" count="04 Tasks" status="Critical" alert />
                                <FollowUpItem label="Health Hub" count="08 Tasks" status="High" warning />
                            </div>
                            <Button className="w-full h-14 bg-white text-slate-900 hover:bg-indigo-50 rounded-2xl font-black uppercase tracking-widest text-[10px] shadow-lg">
                                Dispatch Reminders (24)
                            </Button>
                        </div>
                    </Card>

                    <Card className="rounded-[40px] border-slate-200 p-8 bg-white shadow-sm relative overflow-hidden">
                        <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/blueprint.png')]" />
                        <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-6 border-b pb-4">Statutory Protocols</h4>
                        <div className="space-y-6">
                            <ProtocolStep text="Confirm quorum before recording final decisions." />
                            <ProtocolStep text="Action points must have an assigned Officer Node." />
                            <ProtocolStep text="Timeline breaches flag the Commissioner's dashboard." />
                            <ProtocolStep text="Cross-verify agenda with PwD Act Sections." />
                        </div>
                    </Card>

                    <div className="p-6 bg-blue-50 rounded-[32px] border border-blue-100 flex gap-4">
                        <ShieldCheck className="text-blue-600 shrink-0" size={24} />
                        <p className="text-[9px] font-bold text-blue-800 leading-normal uppercase">
                            Minutes recorded here are automatically mirrored to the <b>Chief Commissioner (National Node)</b> for statutory compliance.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
}

/* UI SUB-COMPONENTS */

function StatTile({ label, value, icon, color, alert }: any) {
    return (
        <div className={`group relative text-left p-7 rounded-[32px] overflow-hidden transition-all duration-500 h-44 flex flex-col justify-between shadow-md hover:shadow-xl hover:-translate-y-1 bg-gradient-to-br ${color} text-white border-t border-white/20`}>
            <div className="absolute inset-0 opacity-[0.08] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
            <div className="relative z-10 flex flex-col justify-between h-full">
                <div className="h-10 w-10 rounded-xl bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform">
                    {React.cloneElement(icon, { size: 18, className: "text-white" })}
                </div>
                <div>
                    <p className="text-2xl font-black tracking-tighter drop-shadow-sm">{value}</p>
                    <p className="text-[9px] font-black uppercase tracking-[0.1em] opacity-80 mt-1">{label}</p>
                </div>
            </div>
            {alert && <div className="absolute top-6 right-6 h-1.5 w-1.5 rounded-full bg-white animate-ping" />}
        </div>
    )
}

function ActionPointRow({ task, officer, due, alert }: any) {
    return (
        <div className="p-5 bg-slate-50 rounded-2xl border border-transparent hover:border-indigo-100 hover:bg-white hover:shadow-lg transition-all group flex items-center justify-between cursor-pointer">
            <div className="flex items-center gap-4">
                <div className={`h-10 w-10 rounded-xl flex items-center justify-center transition-all ${alert ? 'bg-red-50 text-red-600' : 'bg-white text-slate-300 group-hover:text-indigo-600'}`}>
                    <PenTool size={18} />
                </div>
                <div>
                    <p className="text-sm font-black text-slate-800 tracking-tight leading-none uppercase">{task}</p>
                    <p className="text-[9px] font-bold text-slate-400 mt-2 uppercase tracking-widest">Responsibility: {officer}</p>
                </div>
            </div>
            <div className="text-right">
                <p className={`text-xs font-black uppercase ${alert ? 'text-red-600' : 'text-slate-900'}`}>{due}</p>
                <p className="text-[8px] font-bold text-slate-400 uppercase mt-1">Timeline</p>
            </div>
        </div>
    )
}

function FollowUpItem({ label, count, status, alert, warning }: any) {
    return (
        <div className="flex justify-between items-center group">
            <div className="space-y-1">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{label}</p>
                <div className="flex items-center gap-2">
                    <span className="text-[9px] font-bold text-white uppercase">{count}</span>
                    <span className={`text-[8px] font-black px-1.5 py-0.5 rounded-md ${alert ? 'bg-red-500' : warning ? 'bg-orange-500' : 'bg-blue-600'}`}>{status}</span>
                </div>
            </div>
            <div className={`h-1.5 w-1.5 rounded-full ${alert ? 'bg-red-500 animate-pulse shadow-[0_0_8px_rgba(239,68,68,0.5)]' : 'bg-indigo-400'}`} />
        </div>
    );
}

function ProtocolStep({ text }: { text: string }) {
    return (
        <div className="flex items-start gap-3 group">
            <div className="h-5 w-5 rounded-full bg-slate-50 flex items-center justify-center border border-slate-100 shrink-0 mt-0.5 shadow-inner">
                <div className="h-1 w-1 rounded-full bg-slate-300 group-hover:bg-indigo-600 transition-colors" />
            </div>
            <span className="text-xs font-bold text-slate-600 tracking-tight leading-snug group-hover:text-slate-900 transition-colors">{text}</span>
        </div>
    )
}