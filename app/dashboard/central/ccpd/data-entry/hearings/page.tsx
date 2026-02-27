// app/dashboard/ccpd/data/proceedings/page.tsx
"use client";
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
    Gavel, Scale, History, Calendar,
    Video, MapPin, Users, BookOpen,
    PenTool, ShieldCheck, BadgeCheck, Activity,
    Zap, Download, Search, Filter,
    CheckCircle2, Clock, Sparkles, UserCheck,
    FileCheck, Landmark, MoreHorizontal, ArrowLeft
} from "lucide-react";
import {
    Select, SelectContent, SelectItem, SelectTrigger, SelectValue
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";

export default function HearingsProceedingsHub() {
    return (
        <div className="space-y-12 animate-in fade-in duration-1000 pb-20 font-sans selection:bg-indigo-100 bg-[#fbfcfd]">

            {/* ADMINISTRATIVE COMMAND HEADER */}
            <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-8 mb-10 bg-white p-12 rounded-[48px] border-2 border-slate-100 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.05)] relative overflow-hidden">
                <div className="absolute top-0 right-0 p-10 opacity-[0.03] pointer-events-none text-indigo-600">
                    <Gavel size={240} />
                </div>

                <div className="space-y-4 relative z-10">
                    <div className="flex items-center gap-5">
                        <div className="h-16 w-16 bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-700 rounded-3xl flex items-center justify-center text-white shadow-2xl shadow-indigo-500/20 transition-transform hover:scale-105">
                            <Scale size={32} />
                        </div>
                        <div>
                            <h1 className="text-5xl font-black text-slate-900 tracking-tighter uppercase leading-none">Hearings & Proceedings</h1>
                            <p className="text-[11px] font-black text-indigo-600 uppercase tracking-[0.3em] mt-3 flex items-center gap-2">
                                <BadgeCheck size={14} /> National Statutory Hub / Management Node
                            </p>
                        </div>
                    </div>
                    <p className="text-slate-500 font-medium italic text-lg max-w-2xl uppercase tracking-tighter leading-relaxed">
                        Record and manage quasi-judicial hearings and official meeting deliberations.
                    </p>
                </div>

                <div className="flex gap-4 relative z-10">
                    <Button variant="outline" className="h-16 px-10 rounded-3xl border-2 border-slate-200 font-black uppercase tracking-widest text-[10px] bg-white gap-2 shadow-sm hover:bg-slate-50 transition-all">
                        <History size={18} /> Proceedings Archive
                    </Button>
                    <Button className="h-16 px-12 rounded-[28px] bg-slate-950 text-white font-black uppercase tracking-widest text-[11px] shadow-2xl hover:bg-black transition-all">
                        Finalize Registry Entry
                    </Button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

                {/* PROCEEDINGS ENTRY WORKSPACE (8 COLS) */}
                <div className="lg:col-span-8 space-y-12">

                    <Card className="rounded-[48px] border-2 border-slate-200 bg-white shadow-xl overflow-hidden group">
                        <CardHeader className="p-0">
                            <div className="p-10 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white relative overflow-hidden">
                                {/* 4PX CARBON FIBER TEXTURE OVERLAY */}
                                <div className="absolute inset-0 opacity-20 pointer-events-none"
                                    style={{ backgroundImage: `radial-gradient(black 2px, transparent 0)`, backgroundSize: '4px 4px' }} />
                                <div className="flex items-center gap-5 relative z-10">
                                    <div className="h-12 w-12 rounded-2xl bg-white/20 backdrop-blur-md border-2 border-white/20 flex items-center justify-center shadow-lg group-hover:rotate-6 transition-transform">
                                        <PenTool size={24} />
                                    </div>
                                    <CardTitle className="text-sm font-black uppercase tracking-[0.3em] leading-none text-white uppercase">Data Captured Registry Hub</CardTitle>
                                </div>
                            </div>
                        </CardHeader>

                        <CardContent className="p-12 space-y-12">

                            {/* CORE CLASSIFICATION */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                <div className="space-y-4">
                                    <label className="text-[11px] font-black uppercase text-slate-400 ml-1 tracking-widest leading-none">Type (Hearing / Review Meeting)</label>
                                    <Select defaultValue="hearing">
                                        <SelectTrigger className="w-full h-16 py-6 border-2 border-slate-200 bg-slate-50 rounded-2xl px-6 font-black text-slate-900 uppercase text-[10px] focus:ring-2 focus:ring-indigo-500">
                                            <SelectValue />
                                        </SelectTrigger>
                                        <SelectContent className="rounded-2xl border-2 border-slate-200 shadow-2xl">
                                            <SelectItem value="hearing" className="font-black py-4 uppercase">Quasi-Judicial Hearing</SelectItem>
                                            <SelectItem value="meeting" className="font-black py-4 uppercase">Statutory Review Meeting</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="space-y-4">
                                    <label className="text-[11px] font-black uppercase text-slate-400 ml-1 tracking-widest leading-none">Date & Time</label>
                                    <Input type="datetime-local" className="h-16 px-8 rounded-2xl bg-white border-2 border-slate-200 font-black text-slate-900 text-xs shadow-sm" />
                                </div>
                                <div className="space-y-4">
                                    <label className="text-[11px] font-black uppercase text-slate-400 ml-1 tracking-widest leading-none">Mode (Physical / VC)</label>
                                    <Select defaultValue="vc">
                                        <SelectTrigger className="w-full h-16 py-6 border-2 border-slate-200 bg-slate-50 rounded-2xl px-6 font-black text-slate-900 uppercase text-[10px] focus:ring-2 focus:ring-indigo-500">
                                            <SelectValue />
                                        </SelectTrigger>
                                        <SelectContent className="rounded-2xl border-2 border-slate-200 shadow-2xl">
                                            <SelectItem value="physical" className="font-black py-4 uppercase">Physical Chamber</SelectItem>
                                            <SelectItem value="vc" className="font-black py-4 uppercase">Video Conference Hub</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>

                            {/* AGENDA & PARTIES */}
                            <div className="space-y-10">
                                <div className="space-y-4">
                                    <label className="text-[11px] font-black uppercase text-slate-400 ml-1 tracking-widest leading-none">Agenda</label>
                                    <Input placeholder="Enter primary statutory objective of the session..." className="h-16 px-8 rounded-2xl bg-white border-2 border-slate-200 font-black text-slate-900 text-sm uppercase tracking-tight shadow-sm" />
                                </div>
                                <div className="space-y-4">
                                    <label className="text-[11px] font-black uppercase text-slate-400 ml-1 tracking-widest leading-none">Parties / Participants</label>
                                    <Textarea className="min-h-[100px] bg-slate-50 border-2 border-slate-200 rounded-[32px] p-8 font-black text-slate-900 shadow-inner uppercase text-sm tracking-tighter" placeholder="List all participating authorities and respondents..." />
                                </div>
                            </div>

                            {/* ATTENDANCE & SUMMARY */}
                            <div className="space-y-10 pt-10 border-t-2 border-slate-50">
                                <div className="space-y-4">
                                    <label className="text-[11px] font-black uppercase text-slate-400 ml-1 tracking-widest leading-none">Attendance</label>
                                    <Input placeholder="Record final participant quorum..." className="h-16 px-8 rounded-2xl bg-white border-2 border-slate-200 font-black text-slate-900 text-sm shadow-sm" />
                                </div>
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center px-1">
                                        <label className="text-[11px] font-black uppercase text-slate-400 ml-1 tracking-widest leading-none">Proceedings Summary</label>
                                        <button className="flex items-center gap-2 text-blue-600 font-black text-[10px] uppercase tracking-widest bg-blue-50 px-4 py-2 rounded-full border-2 border-blue-100">
                                            <Sparkles size={12} /> AI Transcription
                                        </button>
                                    </div>
                                    <Textarea className="min-h-[220px] bg-slate-50 border-2 border-slate-200 rounded-[40px] p-10 text-base font-medium leading-relaxed italic text-slate-700 shadow-inner resize-none focus:ring-2 focus:ring-indigo-600" placeholder="Author a detailed summary of arguments and deliberations..." />
                                </div>
                            </div>

                            {/* DECISIONS & UPLOAD */}
                            <div className="space-y-10">
                                <div className="space-y-4">
                                    <label className="text-[11px] font-black uppercase text-slate-400 ml-1 tracking-widest leading-none">Decisions / Directions Issued</label>
                                    <Textarea className="min-h-[140px] bg-white border-2 border-indigo-100 rounded-[32px] p-8 text-sm font-black text-slate-950 uppercase tracking-tight shadow-sm" placeholder="Record binding statutory directives issued during the hub session..." />
                                </div>
                                <div className="space-y-4">
                                    <label className="text-[11px] font-black uppercase text-slate-400 ml-1 tracking-widest leading-none">Minutes / Order Upload (PDF)</label>
                                    <div className="border-2 border-dashed border-slate-200 rounded-[40px] p-12 flex flex-col items-center justify-center bg-slate-50 group hover:bg-white hover:border-indigo-500 transition-all cursor-pointer shadow-sm">
                                        <UploadCloudIcon className="text-slate-300 group-hover:text-indigo-600 mb-4 transition-colors" size={42} />
                                        <span className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em]">Select Statutory Order Document</span>
                                        <p className="text-[8px] font-bold text-slate-300 uppercase mt-3 italic">Certified Copies Required • Max 25MB</p>
                                    </div>
                                </div>
                            </div>

                        </CardContent>
                    </Card>
                </div>

                {/* SIDEBAR: STATUTORY OVERWATCH (4 COLS) */}
                <div className="lg:col-span-4 space-y-8 sticky top-28 h-fit">

                    {/* SESSION LOAD CARD - EMERALD THEME */}
                    <Card className="rounded-[44px] border-none bg-gradient-to-br from-emerald-500 via-teal-600 to-indigo-700 text-white p-10 shadow-2xl relative overflow-hidden group">
                        <div className="absolute inset-0 opacity-15 pointer-events-none"
                            style={{ backgroundImage: `radial-gradient(black 2px, transparent 0)`, backgroundSize: '4px 4px' }} />

                        <div className="relative z-10 space-y-8">
                            <div className="flex items-center gap-3">
                                <div className="h-10 w-10 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center border-2 border-white/20 shadow-lg">
                                    <Activity size={20} />
                                </div>
                                <h3 className="text-[11px] font-black uppercase tracking-[0.3em] text-emerald-100">National Load</h3>
                            </div>
                            <div className="space-y-6">
                                <StatRow label="Active Hearings" val="18" />
                                <StatRow label="Review Meetings" val="06" />
                                <StatRow label="Outcome Sync" val="92%" color="text-green-300" />
                            </div>
                            <div className="pt-6 border-t border-white/10 flex items-center gap-4">
                                <div className="h-2 w-2 rounded-full bg-blue-400 animate-pulse shadow-[0_0_10px_blue]" />
                                <span className="text-[9px] font-black uppercase tracking-widest text-emerald-100">State Node Connected</span>
                            </div>
                        </div>
                    </Card>

                    {/* HEARING WATCHLIST */}
                    <Card className="rounded-[44px] border-2 border-slate-200 bg-white p-10 shadow-sm relative overflow-hidden group hover:border-orange-200 transition-all">
                        <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/topography.png')]" />
                        <h4 className="text-[11px] font-black text-slate-400 uppercase tracking-widest mb-10 border-b-2 border-slate-50 pb-6 flex items-center gap-3 leading-none">
                            <Clock size={18} className="text-orange-500" /> Statutory Watchlist
                        </h4>
                        <div className="space-y-8 relative z-10">
                            <HearingAlert label="UP State Hearing" time="Today, 02:30 PM" status="READY" color="bg-green-100 text-green-700" />
                            <HearingAlert label="National Board" time="24 Oct, 11:00 AM" status="UPCOMING" color="bg-blue-100 text-blue-700" />
                        </div>
                        <Button className="w-full mt-10 h-14 bg-slate-900 text-white rounded-2xl font-black uppercase tracking-widest text-[9px] shadow-xl hover:bg-black transition-all">Launch Virtual Hub</Button>
                    </Card>

                    <div className="p-8 bg-blue-50 rounded-[40px] border-2 border-blue-100 flex gap-6 shadow-sm">
                        <Landmark size={28} className="text-blue-600 shrink-0" />
                        <p className="text-[9px] font-bold text-blue-900 leading-relaxed uppercase tracking-widest">
                            Proceedings recorded in this hub are mirror-auditable by the <b>Ministry Executive Node</b> for statewide accountability.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
}

/* UI SUB-COMPONENTS */

function StatRow({ label, val, color }: any) {
    return (
        <div className="flex justify-between items-center group cursor-default">
            <span className="text-[10px] font-black text-emerald-100/60 uppercase tracking-widest group-hover:text-white transition-colors">{label}</span>
            <span className={`text-2xl font-black ${color || 'text-white'}`}>{val}</span>
        </div>
    )
}

function HearingAlert({ label, time, status, color }: any) {
    return (
        <div className="space-y-1 group cursor-pointer">
            <div className="flex justify-between items-center">
                <p className="text-sm font-black text-slate-900 uppercase tracking-tight leading-none group-hover:text-indigo-600 transition-colors">{label}</p>
                <Badge className={`${color} border-none font-black text-[8px] uppercase tracking-widest`}>{status}</Badge>
            </div>
            <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mt-1">{time}</p>
        </div>
    )
}

function UploadCloudIcon(props: any) {
    return <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.5 19a5.5 5.5 0 0 0 5.5-5.5c0-3.3-2.1-5.5-5-5.5-.5-3.3-2.8-6-6-6a6.2 6.2 0 0 0-6 4.5 5.5 5.5 0 0 0-4.5 5 5.5 5.5 0 0 0 5.5 5.5" /><path d="M12 13v8" /><path d="m9 16 3-3 3 3" /></svg>
}