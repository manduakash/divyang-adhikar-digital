// app/dashboard/ddma/shelters/audit/page.tsx
"use client";
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
    Home, MapPin, CheckCircle2, XCircle,
    Zap, Maximize, AlertTriangle, Gavel,
    ShieldCheck, ArrowLeft, Search, Navigation,
    History, Sparkles, Info, Activity
} from "lucide-react";
import {
    Select, SelectContent, SelectItem, SelectTrigger, SelectValue
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";

export default function ShelterAccessibilityManagement() {
    const [accessStatus, setAccessStatus] = useState<string>('partial');

    return (
        <div className="max-w-6xl mx-auto pb-20 animate-in fade-in slide-in-from-bottom-6 duration-700">

            {/* 1. AUDIT HEADER */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10">
                <div className="space-y-1">
                    <div className="flex items-center gap-2 text-emerald-600 font-black uppercase text-[10px] tracking-[0.2em]">
                        <ShieldCheck size={14} /> Infrastructure Audit / Section 5.4
                    </div>
                    <h1 className="text-4xl font-black text-slate-900 tracking-tighter uppercase leading-none">Shelter Access Audit</h1>
                    <p className="text-slate-500 font-medium italic">Statutory verification of ramp, sanitation, and power backup readiness.</p>
                </div>
                <div className="flex gap-3">
                    <Button variant="outline" className="h-14 px-8 rounded-2xl border-slate-200 font-bold bg-white shadow-sm">
                        View Past Audits
                    </Button>
                    <Button className="h-14 px-10 rounded-2xl bg-slate-900 text-white font-black uppercase tracking-widest text-[10px] shadow-2xl hover:bg-black transition-all">
                        Finalize & Record Audit
                    </Button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                {/* MAIN DATA ENTRY COLUMN (Section 5.4) */}
                <div className="lg:col-span-2 space-y-8">

                    <Card className="rounded-[40px] border-slate-200 shadow-xl overflow-hidden bg-white relative">
                        {/* Visual Wave Pattern Overlay */}
                        <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/graphy.png')]" />

                        <CardHeader className="p-8 border-b border-slate-50 bg-slate-50/50 flex flex-row justify-between items-center relative z-10">
                            <CardTitle className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Shelter Identification & Capacity</CardTitle>
                            <Badge className="bg-emerald-100 text-emerald-700 font-black text-[9px] uppercase tracking-tighter">Physical Audit Mode</Badge>
                        </CardHeader>

                        <CardContent className="p-10 space-y-10 relative z-10">

                            {/* SHELTER NAME & BLOCK */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-3">
                                    <label className="text-[11px] font-black uppercase text-slate-500 ml-1">1. Shelter Name</label>
                                    <div className="relative group">
                                        <Home className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-300 group-focus-within:text-emerald-600 transition-colors" />
                                        <Input
                                            placeholder="e.g. Primary School Hub-A"
                                            className="h-14 pl-12 rounded-2xl bg-slate-50 border-2 font-bold text-slate-800"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <label className="text-[11px] font-black uppercase text-slate-500 ml-1">2. Block / ULB Jurisdiction</label>
                                    <div className="relative">
                                        <Navigation className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-300" />
                                        <Select>
                                            <SelectTrigger className="h-14 pl-12 py-6 w-full rounded-2xl bg-slate-50 border-2 font-bold text-slate-800">
                                                <SelectValue placeholder="Select Area" />
                                            </SelectTrigger>
                                            <SelectContent className="rounded-2xl border-slate-100">
                                                <SelectItem value="urban" className="font-bold py-3 uppercase text-[10px]">Lucknow Urban</SelectItem>
                                                <SelectItem value="chinhat" className="font-bold py-3 uppercase text-[10px]">Chinhat Block</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>
                            </div>

                            {/* ACCESS STATUS & CAPACITY */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-3">
                                    <label className="text-[11px] font-black uppercase text-slate-500 ml-1">3. Physical Accessibility Status</label>
                                    <div className="grid grid-cols-3 gap-2">
                                        <StatusBtn active={accessStatus === 'compliant'} onClick={() => setAccessStatus('compliant')} label="COMPLIANT" color="bg-green-500" />
                                        <StatusBtn active={accessStatus === 'partial'} onClick={() => setAccessStatus('partial')} label="PARTIAL" color="bg-orange-500" />
                                        <StatusBtn active={accessStatus === 'non'} onClick={() => setAccessStatus('non')} label="NON-COMP" color="bg-red-500" />
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <label className="text-[11px] font-black uppercase text-slate-500 ml-1">4. PwD Hosting Capacity</label>
                                    <div className="relative">
                                        <Maximize className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-300" />
                                        <Input
                                            type="number"
                                            placeholder="Max PwD capacity"
                                            className="h-14 pl-12 rounded-2xl bg-slate-50 border-2 font-black text-indigo-600 text-lg shadow-inner"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* MANDATORY AVAILABILITY CHECKLIST (Section 5.4 Item 4) */}
                            <div className="space-y-4">
                                <label className="text-[11px] font-black uppercase text-slate-500 ml-1">5. Statutory Infrastructure Checklist</label>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <CheckItem icon={<Activity size={18} />} label="Ramp Access" />
                                    <CheckItem icon={<CheckCircle2 size={18} />} label="Accessible Toilet" />
                                    <CheckItem icon={<Zap size={18} />} label="Power Backup" />
                                </div>
                            </div>

                            {/* DEFICIENCIES & ACTION (Section 5.4 Item 6 & 7) */}
                            <div className="space-y-8 pt-4 border-t border-slate-50">
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center px-1">
                                        <label className="text-[11px] font-black uppercase text-slate-500">6. Deficiencies Identified</label>
                                        <button className="flex items-center gap-1.5 text-blue-600 font-bold text-[10px] uppercase tracking-wider bg-blue-50 px-3 py-1.5 rounded-full border border-blue-100 hover:bg-blue-100 transition-colors">
                                            <Sparkles size={12} /> AI Deficiency Tagging
                                        </button>
                                    </div>
                                    <Textarea
                                        className="min-h-[120px] rounded-[32px] bg-slate-50 border-2 p-6 text-sm font-medium leading-relaxed resize-none focus:ring-2 focus:ring-emerald-500"
                                        placeholder="Describe gaps (e.g. Ramp slope too steep, no Braille signage, toilet dimensions inadequate)..."
                                    />
                                </div>

                                <div className="space-y-4">
                                    <label className="text-[11px] font-black uppercase text-slate-500 ml-1">7. Corrective Action Proposed</label>
                                    <Textarea
                                        className="min-h-[120px] rounded-[32px] bg-slate-50 border-2 p-6 text-sm font-medium leading-relaxed resize-none focus:ring-2 focus:ring-indigo-500"
                                        placeholder="Statutory directives for the Shelter Manager or PWD Department..."
                                    />
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* SIDEBAR: AUDIT OVERVIEW & ALERTS */}
                <div className="space-y-8 sticky top-28 h-fit">

                    {/* AGGREGATE HEALTH CARD */}
                    <Card className="rounded-[40px] border-2 bg-slate-900 text-white p-8 shadow-2xl relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform duration-700">
                            <ShieldCheck size={120} />
                        </div>
                        <div className="relative z-10 space-y-6">
                            <div className="flex items-center gap-3">
                                <Activity className="text-emerald-400" />
                                <h3 className="text-sm font-black uppercase tracking-widest text-emerald-400">Audit Health</h3>
                            </div>
                            <div className="space-y-4 pt-4 border-t border-white/10">
                                <HealthItem label="Total Shelters" val="60" />
                                <HealthItem label="Fully Compliant" val="48" color="text-emerald-400" />
                                <HealthItem label="Audit Coverage" val="92%" />
                            </div>
                            <Button className="w-full mt-4 h-12 bg-white/10 hover:bg-white/20 text-white border border-white/10 rounded-2xl font-black uppercase tracking-widest text-[9px]">
                                Sync to SDMA Dashboard
                            </Button>
                        </div>
                    </Card>

                    {/* AUDIT PROTOCOL */}
                    <Card className="rounded-[40px] border-slate-200 p-8 bg-white shadow-sm">
                        <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-6 border-b pb-4">Audit Protocol</h4>
                        <div className="space-y-5">
                            <ProtocolStep text="Verify clear entrance width (>900mm)." />
                            <ProtocolStep text="Ensure ramp gradient is 1:12 or less." />
                            <ProtocolStep text="Confirm presence of 10kVA power backup." />
                            <ProtocolStep text="Verify availability of Special Educator." />
                        </div>
                    </Card>

                    <div className="p-6 bg-red-50 rounded-[32px] border border-red-100 flex gap-4">
                        <AlertTriangle className="text-red-600 shrink-0" size={24} />
                        <p className="text-[10px] font-bold text-red-800 leading-normal uppercase">
                            Inaccessible shelters are automatically excluded from the <b>Active Disaster Response</b> mapping until remedial action is verified.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
}

/* UI SUB-COMPONENTS */

function StatusBtn({ label, color, active, onClick }: any) {
    return (
        <button
            onClick={onClick}
            className={`py-3 rounded-xl text-[9px] font-black uppercase tracking-widest transition-all border-2 ${active
                ? `${color} text-white border-transparent shadow-lg shadow-${color}/20 scale-[1.02]`
                : 'bg-slate-50 text-slate-400 border-transparent hover:border-slate-200'
                }`}
        >
            {label}
        </button>
    )
}

function CheckItem({ icon, label }: any) {
    return (
        <div className="p-4 bg-white border border-slate-100 rounded-3xl flex items-center justify-between group hover:border-emerald-200 transition-all shadow-sm">
            <div className="flex items-center gap-3">
                <div className="text-slate-300 group-hover:text-emerald-600 transition-colors">
                    {icon}
                </div>
                <span className="text-[10px] font-black text-slate-600 uppercase tracking-tight">{label}</span>
            </div>
            <Switch className="data-[state=checked]:bg-emerald-600 scale-75" />
        </div>
    )
}

function HealthItem({ label, val, color }: any) {
    return (
        <div className="flex justify-between items-center">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{label}</span>
            <span className={`text-xl font-black ${color || 'text-indigo-400'}`}>{val}</span>
        </div>
    )
}

function ProtocolStep({ text }: { text: string }) {
    return (
        <div className="flex items-start gap-3">
            <div className="h-5 w-5 rounded-full bg-slate-50 flex items-center justify-center border border-slate-100 shrink-0 mt-0.5">
                <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            </div>
            <span className="text-xs font-bold text-slate-600 tracking-tight leading-snug">{text}</span>
        </div>
    )
}