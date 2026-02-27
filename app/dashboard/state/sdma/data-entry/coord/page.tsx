// app/dashboard/sdma/data/coordination/page.tsx
"use client";
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
    Globe, Share2, Users, Landmark,
    Map, ShieldAlert, History, Send,
    Plus, Search, Filter, Sparkles,
    BadgeCheck, Clock, Zap, Activity,
    Truck, Stethoscope, HeartPulse, Shield,
    ArrowLeft, Download, Timer, CheckCircle2,
    Navigation, MousePointer2,
    ArrowUpRight
} from "lucide-react";
import {
    Select, SelectContent, SelectItem, SelectTrigger, SelectValue
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";

export default function AgencyCoordinationNotes() {
    const [status, setStatus] = useState('Active');

    return (
        <div className="space-y-10 animate-in fade-in duration-1000 pb-20 font-sans selection:bg-orange-100">

            {/* 1. COORDINATION HUB HEADER - CARBON FIBER TEXTURE */}
            <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-8 mb-10 bg-white p-10 rounded-[48px] border border-slate-200 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 p-10 opacity-[0.03] pointer-events-none text-orange-600">
                    <Share2 size={200} />
                </div>

                <div className="space-y-4 relative z-10">
                    <div className="flex items-center gap-3">
                        <div className="h-14 w-14 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl flex items-center justify-center text-white shadow-xl shadow-blue-500/20 transition-transform hover:scale-110">
                            <Globe size={32} />
                        </div>
                        <div>
                            <h1 className="text-4xl font-black text-slate-900 tracking-tighter uppercase leading-none">Coordination Notes</h1>
                            <p className="text-[10px] font-black text-blue-600 uppercase tracking-[0.3em] mt-2 flex items-center gap-2">
                                <BadgeCheck size={12} /> State Inter-Agency Hub / A3.4
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex gap-4 relative z-10">
                    <Button variant="outline" className="h-16 px-10 rounded-[24px] border-slate-200 font-black uppercase tracking-widest text-[10px] bg-white gap-2 shadow-sm hover:bg-slate-50 transition-all group">
                        <History size={18} className="mr-2" /> Coordination tracker <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </Button>
                    <Button className="h-16 px-12 rounded-[24px] bg-slate-950 text-white font-black uppercase tracking-widest text-[11px] shadow-2xl hover:bg-black transition-all">
                        Dispatch Agency Note
                    </Button>
                </div>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-12 gap-10">

                {/* 2. DATA CAPTURE MODULE (8 COLS) */}
                <div className="xl:col-span-8 space-y-8">
                    <Card className="rounded-[48px] border-slate-200 shadow-sm overflow-hidden bg-white group hover:border-blue-100 transition-all">
                        <CardHeader className="p-0">
                            <div className="p-10 bg-gradient-to-r from-blue-600 via-indigo-700 to-blue-800 text-white relative overflow-hidden">
                                {/* CARBON FIBER OVERLAY */}
                                <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
                                <CardTitle className="text-[10px] font-black uppercase tracking-[0.3em] relative z-10 text-white leading-none">Inter-Agency Data Entry</CardTitle>
                            </div>
                        </CardHeader>

                        <CardContent className="p-12 space-y-12">

                            {/* AGENCIES INVOLVED */}
                            <div className="space-y-4">
                                <label className="text-[11px] font-black uppercase text-slate-500 ml-1 tracking-widest">Agencies Involved (Transport, Health, Social Welfare, Police, etc.)</label>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                    <AgencyPill icon={<Truck size={14} />} label="Transport" active />
                                    <AgencyPill icon={<HeartPulse size={14} />} label="Health Hub" active />
                                    <AgencyPill icon={<Landmark size={14} />} label="Social Welfare" />
                                    <AgencyPill icon={<Shield size={14} />} label="Police Node" active />
                                </div>
                            </div>

                            {/* ISSUE / REQUIREMENT */}
                            <div className="space-y-4">
                                <div className="flex justify-between items-center px-1">
                                    <label className="text-[11px] font-black uppercase text-slate-500 ml-1 tracking-widest">Issue / Coordination Requirement</label>
                                    <button className="flex items-center gap-2 text-blue-600 font-black text-[9px] uppercase tracking-widest bg-blue-50 px-4 py-2 rounded-full border border-blue-100 hover:bg-white transition-all shadow-sm"><Sparkles size={12} /> AI Requirement Draft</button>
                                </div>
                                <Textarea className="min-h-[140px] bg-slate-50 border rounded-[32px] p-8 text-sm font-medium leading-relaxed italic text-slate-700 shadow-inner resize-none focus:ring-2 focus:ring-blue-500" placeholder="Define the cross-agency dependency or resource requirement..." />
                            </div>

                            {/* ACTIONS AGREED */}
                            <div className="space-y-4">
                                <label className="text-[11px] font-black uppercase text-slate-500 ml-1 tracking-widest">Actions Agreed</label>
                                <Textarea className="min-h-[140px] bg-slate-50 border rounded-[32px] p-8 text-sm font-black text-slate-900 uppercase tracking-tight leading-relaxed shadow-inner resize-none focus:ring-2 focus:ring-emerald-600" placeholder="Author the binding protocols established during coordination..." />
                            </div>

                            {/* RESPONSIBILITY & TIMELINE */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 border-t border-slate-50 pt-10">
                                <div className="space-y-4">
                                    <label className="text-[11px] font-black uppercase text-slate-500 ml-1 tracking-widest">Responsibility Assigned</label>
                                    <div className="relative group">
                                        <Users className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-300 group-focus-within:text-indigo-600 transition-colors" />
                                        <Input placeholder="Enter Nodal Agency or Officer" className="h-16 pl-12 rounded-2xl bg-slate-50 border font-bold text-slate-800 shadow-inner" />
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <label className="text-[11px] font-black uppercase text-slate-500 ml-1 tracking-widest">Timeline</label>
                                    <div className="relative">
                                        <Clock className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-300 pointer-events-none" />
                                        <Input type="datetime-local" className="h-16 pl-12 rounded-2xl bg-slate-50 border font-bold text-slate-800 shadow-inner" />
                                    </div>
                                </div>
                            </div>

                            {/* STATUS SELECTOR */}
                            <div className="space-y-4">
                                <label className="text-[11px] font-black uppercase text-slate-500 ml-1 tracking-widest">Status (Active / Resolved / Flagged)</label>
                                <div className="grid grid-cols-3 gap-3">
                                    <StatusBtn label="Active" active={status === 'Active'} onClick={() => setStatus('Active')} color="bg-orange-500" />
                                    <StatusBtn label="Resolved" active={status === 'Resolved'} onClick={() => setStatus('Resolved')} color="bg-emerald-500" />
                                    <StatusBtn label="Flagged" active={status === 'Flagged'} onClick={() => setStatus('Flagged')} color="bg-red-600" />
                                </div>
                            </div>

                            <Button className="w-full h-20 bg-indigo-600 text-white rounded-[32px] font-black uppercase tracking-[0.2em] text-[11px] shadow-2xl shadow-indigo-900/20 hover:bg-indigo-700 transition-all flex gap-4 group">
                                Commit Coordination Node <Zap size={20} className="text-orange-400 fill-orange-400 group-hover:scale-110 transition-transform" />
                            </Button>
                        </CardContent>
                    </Card>
                </div>

                {/* 3. SIDEBAR: TRACKER & REMINDERS (4 COLS) */}
                <div className="xl:col-span-4 space-y-8 sticky top-28 h-fit">

                    {/* COORDINATION TRACKER (Mandated Output) */}
                    <Card className="rounded-[40px] border-none bg-slate-900 text-white p-10 shadow-2xl relative overflow-hidden group">
                        <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/circuit-board.png')]" />
                        <div className="relative z-10 space-y-8">
                            <div className="flex items-center gap-3 text-blue-400">
                                <Navigation size={24} />
                                <h3 className="text-[10px] font-black uppercase tracking-widest">Coordination tracker</h3>
                            </div>
                            <div className="space-y-6">
                                <TrackerItem label="Evac Support: LKO" sync="94%" />
                                <TrackerItem label="Medical Supply Node" sync="Verified" success />
                                <TrackerItem label="Police Escort Sync" sync="Pending" warning />
                            </div>
                            <Button className="w-full h-12 bg-white text-slate-900 hover:bg-blue-50 rounded-2xl font-black uppercase tracking-widest text-[9px] shadow-lg">
                                Audit Global Sync Status
                            </Button>
                        </div>
                    </Card>

                    {/* FOLLOW-UP REMINDERS (Mandated Output) */}
                    <Card className="rounded-[40px] border-slate-200 p-8 bg-white shadow-sm relative overflow-hidden">
                        <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/topography.png')]" />
                        <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-8 border-b pb-6 flex items-center gap-3">
                            <Timer size={18} className="text-orange-600" /> Follow-up reminders
                        </h4>
                        <div className="space-y-6">
                            <ReminderNode agency="Transport Dept" msg="Confirm 12 wheelchair vans" due="14:00" alert />
                            <ReminderNode agency="Health Hub" msg="Oxygen stock verification" due="16:30" />
                            <ReminderNode agency="District Police" msg="Sector-4 access escort" due="Tomorrow" />
                        </div>
                    </Card>

                    <div className="p-8 bg-blue-50 rounded-[40px] border border-blue-100 flex gap-6 shadow-sm">
                        <ShieldAlert className="text-blue-600 shrink-0" size={28} />
                        <p className="text-[10px] font-bold text-blue-900 leading-relaxed uppercase tracking-widest">
                            A3.4: Coordination notes are mirrored to the <b>National NDMA Hub</b> for inter-state rescue orchestration.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
}

/* UI SUB-COMPONENTS */

function AgencyPill({ icon, label, active }: any) {
    return (
        <div className={`flex items-center gap-3 p-4 rounded-2xl border-2 transition-all ${active ? 'bg-blue-50 border-blue-600 text-blue-900 shadow-md' : 'bg-slate-50 border-slate-100 text-slate-400'}`}>
            <span className={active ? 'text-blue-600' : ''}>{icon}</span>
            <span className="text-[10px] font-black uppercase">{label}</span>
        </div>
    )
}

function StatusBtn({ label, active, onClick, color }: any) {
    return (
        <button
            onClick={onClick}
            className={`py-4 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all border-2 ${active ? `${color} text-white shadow-lg scale-[1.05] border-transparent` : 'bg-slate-50 text-slate-400 border-slate-100 hover:bg-white'
                }`}
        >
            {label}
        </button>
    )
}

function TrackerItem({ label, sync, success, warning }: any) {
    return (
        <div className="flex justify-between items-center group cursor-default">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest group-hover:text-blue-400 transition-colors">{label}</span>
            <div className="flex items-center gap-2">
                <span className={`text-[10px] font-black uppercase ${success ? 'text-green-400' : warning ? 'text-orange-400' : 'text-white'}`}>{sync}</span>
                <div className={`h-1.5 w-1.5 rounded-full ${success ? 'bg-green-500 animate-pulse' : warning ? 'bg-orange-500' : 'bg-slate-700'}`} />
            </div>
        </div>
    )
}

function ReminderNode({ agency, msg, due, alert }: any) {
    return (
        <div className="flex items-center justify-between group cursor-pointer hover:bg-slate-50 p-2 rounded-xl transition-all">
            <div className="flex items-center gap-3">
                <div className={`h-1.5 w-1.5 rounded-full ${alert ? 'bg-red-500 animate-pulse shadow-[0_0_10px_rgba(239,68,68,0.4)]' : 'bg-blue-600'}`} />
                <div>
                    <p className="text-xs font-black text-slate-800 uppercase tracking-tight leading-none">{agency}</p>
                    <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-1">{msg}</p>
                </div>
            </div>
            <span className={`text-[10px] font-mono font-black ${alert ? 'text-red-600 underline' : 'text-slate-500'}`}>{due}</span>
        </div>
    )
}