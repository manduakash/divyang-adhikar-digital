// app/dashboard/sdma/data/resource-allocation/page.tsx
"use client";
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
    Truck, Box, MapPin, Activity,
    Stethoscope, Users, ShieldCheck, History,
    Plus, Search, Filter, Globe, Sparkles,
    BadgeCheck, Clock, Zap, AlertTriangle,
    HardDrive, FilePlus, ArrowLeft, Download,
    Timer, Landmark, PackageCheck, Siren,
    Navigation,
    ArrowUpRight
} from "lucide-react";
import {
    Select, SelectContent, SelectItem, SelectTrigger, SelectValue
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";

export default function ResourceAllocationHub() {
    const [allocationStatus, setAllocationStatus] = useState('In-Transit');

    return (
        <div className="space-y-10 animate-in fade-in duration-1000 pb-20 font-sans selection:bg-orange-100">

            {/* 1. LOGISTICS HUB HEADER - CARBON FIBER TEXTURE */}
            <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-8 mb-10 bg-white p-10 rounded-[48px] border border-slate-200 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 p-10 opacity-[0.03] pointer-events-none text-orange-600">
                    <Box size={220} />
                </div>

                <div className="space-y-4 relative z-10">
                    <div className="flex items-center gap-3">
                        <div className="h-14 w-14 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center text-white shadow-xl shadow-orange-500/20 transition-transform hover:scale-110">
                            <Truck size={32} />
                        </div>
                        <div>
                            <h1 className="text-4xl font-black text-slate-900 tracking-tighter uppercase leading-none">Resource Allocation / Mobilisation Notes</h1>
                            <p className="text-[10px] font-black text-orange-600 uppercase tracking-[0.3em] mt-2 flex items-center gap-2">
                                <BadgeCheck size={12} /> Statewide Logistics Node / Statutory Deployment
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex gap-4 relative z-10">
                    <Button variant="outline" className="h-16 px-10 rounded-[24px] border-slate-200 font-black uppercase tracking-widest text-[10px] bg-white gap-2 shadow-sm hover:bg-slate-50 transition-all group">
                        <History size={18} className="mr-2" /> Resource mobilisation tracker <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </Button>
                    <Button className="h-16 px-12 rounded-[24px] bg-slate-950 text-white font-black uppercase tracking-widest text-[11px] shadow-2xl hover:bg-black transition-all">
                        Commit Mobilisation Note
                    </Button>
                </div>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-12 gap-10">

                {/* 2. DATA ENTRY MODULE (8 COLS) */}
                <div className="xl:col-span-8 space-y-8">
                    <Card className="rounded-[48px] border-slate-200 shadow-sm overflow-hidden bg-white group hover:border-orange-200 transition-all">
                        <CardHeader className="p-0">
                            <div className="p-10 bg-gradient-to-r from-orange-600 via-orange-700 to-red-700 text-white relative overflow-hidden">
                                {/* CARBON FIBER OVERLAY */}
                                <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
                                <CardTitle className="text-[10px] font-black uppercase tracking-[0.3em] relative z-10 text-white leading-none">Statutory Allocation Registry</CardTitle>
                            </div>
                        </CardHeader>

                        <CardContent className="p-12 space-y-12">

                            {/* RESOURCE TYPE SELECTION */}
                            <div className="space-y-4">
                                <label className="text-[11px] font-black uppercase text-slate-500 ml-1 tracking-widest">Resource Type (Assistive Devices / Transport / Medical / Volunteers)</label>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                    <ResourceTile icon={<Activity size={18} />} label="Assistive Devices" active />
                                    <ResourceTile icon={<Siren size={18} />} label="Transport" active />
                                    <ResourceTile icon={<Stethoscope size={18} />} label="Medical" />
                                    <ResourceTile icon={<Users size={18} />} label="Volunteers" />
                                </div>
                            </div>

                            {/* ALLOCATION BASIS & DISTRICT */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                <div className="space-y-4">
                                    <label className="text-[11px] font-black uppercase text-slate-500 ml-1 tracking-widest">Allocation Basis (DDMA demand / Risk assessment)</label>
                                    <Select>
                                        <SelectTrigger className="h-16 rounded-2xl bg-slate-50 border font-black text-slate-900 shadow-inner px-6">
                                            <SelectValue placeholder="Identify Basis" />
                                        </SelectTrigger>
                                        <SelectContent className="rounded-2xl">
                                            <SelectItem value="demand" className="font-bold py-3 uppercase text-[10px]">DDMA Local Demand</SelectItem>
                                            <SelectItem value="risk" className="font-bold py-3 uppercase text-[10px] text-orange-600">State Risk Assessment</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="space-y-4">
                                    <label className="text-[11px] font-black uppercase text-slate-500 ml-1 tracking-widest">District(s)</label>
                                    <div className="relative group">
                                        <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-300 group-focus-within:text-orange-600 transition-colors" />
                                        <Input placeholder="Select Targeted Districts" className="h-16 pl-12 rounded-2xl bg-slate-50 border font-bold text-slate-800 shadow-inner" />
                                    </div>
                                </div>
                            </div>

                            {/* QUANTITY & TIMELINE */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                <div className="space-y-4">
                                    <label className="text-[11px] font-black uppercase text-slate-500 ml-1 tracking-widest">Quantity / Capacity</label>
                                    <div className="relative group">
                                        <Box className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-300" />
                                        <Input type="number" placeholder="Enter mobilization volume" className="h-16 pl-12 rounded-2xl bg-slate-50 border font-black text-slate-900 shadow-inner text-xl tracking-tighter" />
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <label className="text-[11px] font-black uppercase text-slate-500 ml-1 tracking-widest">Deployment Timeline</label>
                                    <div className="relative">
                                        <Clock className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-300" />
                                        <Input type="datetime-local" className="h-16 pl-12 rounded-2xl bg-slate-50 border font-bold text-slate-800 shadow-inner" />
                                    </div>
                                </div>
                            </div>

                            {/* STATUS SELECTOR */}
                            <div className="space-y-4">
                                <label className="text-[11px] font-black uppercase text-slate-500 ml-1 tracking-widest">Status</label>
                                <div className="flex bg-slate-100 p-1.5 rounded-[24px] border border-slate-200 gap-1 shadow-inner">
                                    {['Dispatched', 'In-Transit', 'Deployed', 'Standby'].map(s => (
                                        <button
                                            key={s}
                                            onClick={() => setAllocationStatus(s)}
                                            className={`flex-1 py-4 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${allocationStatus === s ? 'bg-white text-orange-600 shadow-xl scale-[1.02]' : 'text-slate-400 hover:text-slate-600'
                                                }`}
                                        >
                                            {s}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <Button className="w-full h-20 bg-orange-600 text-white rounded-[32px] font-black uppercase tracking-[0.2em] text-[11px] shadow-2xl shadow-orange-900/20 hover:bg-orange-700 transition-all flex gap-4 group">
                                Execute State Mobilisation <Zap size={20} className="text-orange-400 fill-orange-400 group-hover:animate-pulse" />
                            </Button>
                        </CardContent>
                    </Card>
                </div>

                {/* 3. SIDEBAR: GAP IDENTIFICATION (4 COLS) */}
                <div className="xl:col-span-4 space-y-8 sticky top-28 h-fit">

                    {/* GAP IDENTIFICATION (Mandated Output) */}
                    <Card className="rounded-[40px] border-none bg-slate-900 text-white p-10 shadow-2xl relative overflow-hidden group">
                        <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/circuit-board.png')]" />
                        <div className="relative z-10 space-y-8">
                            <div className="flex items-center gap-3 text-red-400">
                                <AlertTriangle className="animate-pulse" />
                                <h3 className="text-[10px] font-black uppercase tracking-widest">Gap identification</h3>
                            </div>
                            <div className="space-y-6">
                                <ShortfallNode label="Transport Hub (Urban)" short="-12 Vans" />
                                <ShortfallNode label="Mobility Kits (Coastal)" short="-450 Units" />
                                <ShortfallNode label="Specialized Volunteers" short="-24 Personnel" />
                            </div>
                            <p className="text-[9px] font-medium text-slate-500 uppercase tracking-widest leading-relaxed border-t border-white/10 pt-6 italic">
                                State Hub identifies shortfalls based on real-time DDMA operational logs.
                            </p>
                        </div>
                    </Card>

                    {/* RESOURCE MOBILISATION TRACKER (Mandated Output) */}
                    <Card className="rounded-[40px] border-slate-200 p-8 bg-white shadow-sm relative overflow-hidden">
                        <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/topography.png')]" />
                        <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-8 border-b pb-6 flex items-center gap-3">
                            <Navigation size={18} className="text-orange-600" /> Mobilisation tracker
                        </h4>
                        <div className="space-y-6">
                            <TrackerNode id="MOB-LKO-912" dist="Lucknow" qty="45 Kits" status="LIVE" success />
                            <TrackerNode id="MOB-VNS-004" dist="Varanasi" qty="12 Vans" status="TRANSIT" warning />
                            <TrackerNode id="MOB-AGR-442" dist="Agra" qty="08 Kits" status="PENDING" alert />
                        </div>
                    </Card>

                    <div className="p-8 bg-blue-50 rounded-[40px] border border-blue-100 flex gap-6 shadow-sm">
                        <Globe className="text-blue-600 shrink-0" size={28} />
                        <p className="text-[10px] font-bold text-blue-900 leading-relaxed uppercase tracking-widest">
                            Mobilisation data is mirrored to the <b>National NDMA Portal</b> for inter-state emergency orchestration.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
}

/* UI SUB-COMPONENTS */

function ResourceTile({ icon, label, active }: any) {
    return (
        <div className={`p-5 rounded-[28px] border-2 transition-all flex flex-col items-center justify-center gap-3 ${active ? 'bg-orange-50 border-orange-600 text-orange-900 shadow-md' : 'bg-slate-50 border-slate-100 text-slate-300 opacity-60'}`}>
            {icon}
            <span className="text-[9px] font-black uppercase tracking-widest">{label}</span>
        </div>
    )
}

function ShortfallNode({ label, short }: any) {
    return (
        <div className="flex justify-between items-center group cursor-default">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest group-hover:text-red-400 transition-colors">{label}</span>
            <span className="text-sm font-black text-red-500 underline decoration-red-200">{short}</span>
        </div>
    )
}

function TrackerNode({ id, dist, qty, status, success, warning, alert }: any) {
    const statusColor = success ? 'bg-green-500' : warning ? 'bg-orange-500' : 'bg-red-500';
    return (
        <div className="flex items-center justify-between group cursor-pointer hover:bg-slate-50 p-2 rounded-xl transition-all">
            <div className="flex items-center gap-3">
                <div className={`h-1.5 w-1.5 rounded-full ${statusColor} ${alert ? 'animate-pulse' : ''}`} />
                <span className="text-[10px] font-mono font-black text-blue-600 uppercase">{id}</span>
            </div>
            <div className="text-right">
                <p className="text-[9px] font-black text-slate-900 uppercase leading-none">{dist}: {qty}</p>
                <p className="text-[8px] font-bold text-slate-400 uppercase mt-1">{status}</p>
            </div>
        </div>
    )
}