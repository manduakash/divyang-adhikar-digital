// app/dashboard/sdma/fact-sheets/shelter/page.tsx
"use client";
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
    Home, MapPin, ShieldCheck, BadgeCheck,
    Search, Filter, Printer, FileText,
    ArrowUpRight, Globe, CheckCircle2,
    AlertTriangle, History, Landmark,
    Activity, Maximize, Zap, Stethoscope,
    Users, Timer, Navigation, Phone,
    Mail, HardDrive, Download,
    Accessibility
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
    Select, SelectContent, SelectItem, SelectTrigger, SelectValue
} from "@/components/ui/select";

export default function ShelterFactSheet() {
    return (
        <div className="space-y-10 animate-in fade-in duration-1000 pb-20 font-sans selection:bg-orange-100">

            {/* 1. INTERACTIVE IDENTITY HUB - CARBON FIBER TEXTURE */}
            <Card className="rounded-[40px] border-none bg-gradient-to-r from-orange-600 via-orange-700 to-red-700 p-1 relative overflow-hidden shadow-2xl shadow-orange-200">
                <div className="absolute inset-0 opacity-15 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
                <div className="bg-white rounded-[38px] p-10 relative z-10 flex flex-col xl:flex-row justify-between items-end gap-12">

                    <div className="flex-1 space-y-8">
                        <div className="flex items-center gap-6">
                            <div className="h-20 w-20 bg-gradient-to-br from-orange-500 to-red-600 rounded-3xl flex items-center justify-center text-white shadow-xl">
                                <Home size={38} />
                            </div>
                            <div className="space-y-3 flex-1">
                                <p className="text-[9px] font-black uppercase text-orange-600 tracking-[0.3em] ml-1 leading-none">Shelter Performance Hub</p>
                                <Select defaultValue="primary-hub">
                                    <SelectTrigger className="h-16 w-full max-w-2xl border-2 border-slate-100 bg-slate-50 rounded-2xl px-6 text-2xl font-black text-slate-900 uppercase tracking-tighter shadow-inner focus:ring-2 focus:ring-orange-500 transition-all">
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent className="rounded-2xl font-bold">
                                        <SelectItem value="primary-hub">Primary Hub Sector-V [SHL-WB-KOL-042]</SelectItem>
                                        <SelectItem value="central-hall">Central Hall Node [SHL-WB-KOL-012]</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <HeaderNode label="Jurisdiction" val="Kolkata Urban" icon={<MapPin size={12} />} />
                            <HeaderNode label="Statutory Type" val="Primary Emergency Hub" icon={<Landmark size={12} />} />
                            <HeaderNode label="Node Status" val="Active / Verified" icon={<BadgeCheck size={12} />} />
                        </div>
                    </div>

                    <div className="flex flex-col gap-4 min-w-[300px]">
                        <div className="bg-slate-900 text-white p-6 rounded-[32px] shadow-xl relative overflow-hidden group hover:border-orange-500 transition-all border border-transparent">
                            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
                            <div className="relative z-10 space-y-1 text-center">
                                <p className="text-[9px] font-black uppercase text-orange-400 tracking-widest">Last Audit Date</p>
                                <p className="text-2xl font-black uppercase tracking-tighter">14 OCT 2024</p>
                                <p className="text-[8px] font-bold text-slate-400 uppercase tracking-widest mt-2 flex items-center justify-center gap-2">
                                    <Activity size={10} className="text-green-500 animate-pulse" /> Read-Only Node (State Level)
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <Button variant="outline" className="flex-1 h-12 rounded-xl border-slate-200 font-bold bg-white gap-2 shadow-sm text-[10px] uppercase tracking-widest"><FileText size={16} /> Audit log</Button>
                            <Button className="flex-1 h-12 rounded-xl bg-slate-900 text-white font-black uppercase tracking-widest text-[10px] shadow-lg gap-2 group"><Printer size={16} /> Export brief</Button>
                        </div>
                    </div>
                </div>
            </Card>

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">

                {/* ACCESSIBILITY MONITOR */}
                <StatTableCard title="Accessibility" gradient="from-emerald-500 to-teal-700" icon={<Accessibility />}>
                    <div className="space-y-6">
                        <StatusNode label="Main Entry Ramps" status="Verified Compliant" success />
                        <StatusNode label="Accessible Toilets" status="Verified Compliant" success />
                        <StatusNode label="Power Backup System" status="Active Support" success />
                        <StatusNode label="Digital Assistive Hub" status="Partial" warning />
                    </div>
                    <div className="h-[1px] w-full bg-slate-100 my-2" />
                    <div className="flex justify-between items-center px-2">
                        <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Compliance Due Date</p>
                        <p className="text-sm font-black text-slate-900 uppercase">15 DEC 2024</p>
                    </div>
                </StatTableCard>

                {/* CAPACITY STATS */}
                <StatTableCard title="Capacity" gradient="from-blue-600 to-indigo-800" icon={<Maximize />}>
                    <div className="grid grid-cols-1 gap-6">
                        <MetricBlock label="Total Shelter Capacity" val="450 Persons" />
                        <MetricBlock label="Capacity for PwDs" val="85 Persons" success />
                        <div className="p-8 bg-indigo-50 rounded-[40px] border border-indigo-100 flex items-center justify-between shadow-inner">
                            <div className="space-y-1">
                                <p className="text-[10px] font-black text-indigo-400 uppercase tracking-widest">Mapped Citizens</p>
                                <p className="text-4xl font-black text-indigo-700 tracking-tighter">72 / 85</p>
                            </div>
                            <Activity size={24} className="text-indigo-200 animate-pulse" />
                        </div>
                    </div>
                </StatTableCard>

                {/* SERVICES HUB */}
                <StatTableCard title="Services" gradient="from-purple-600 to-indigo-700" icon={<Stethoscope />}>
                    <div className="space-y-4">
                        <ServicePill label="Specialized Medical Team" active />
                        <ServicePill label="Scribe / Reader Support" active />
                        <ServicePill label="Wheelchair Transport" active />
                        <ServicePill label="Sensory Relief Zone" />
                        <ServicePill label="Personalized Caregiver Hub" />
                    </div>
                </StatTableCard>

            </div>

            {/* VIEW-ONLY AUDIT LOGS (MANDATED DATA FIELDS) */}
            <Card className="rounded-[48px] border-slate-200 bg-white shadow-sm overflow-hidden group">
                <CardHeader className="p-10 border-b border-slate-50 bg-slate-900 text-white relative overflow-hidden">
                    <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
                    <div className="flex items-center gap-4 relative z-10">
                        <div className="h-12 w-12 rounded-2xl bg-white/10 flex items-center justify-center border border-white/10 shadow-inner">
                            <History size={24} className="text-orange-400" />
                        </div>
                        <div>
                            <CardTitle className="text-sm font-black uppercase tracking-widest leading-none">Statutory Audit Findings</CardTitle>
                            <p className="text-[10px] text-slate-500 font-bold uppercase mt-1 tracking-widest">Official Review Notes (View-Only)</p>
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="p-12 space-y-10 font-sans">

                    <div className="space-y-4">
                        <label className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] ml-2">Deficiencies Identified</label>
                        <Textarea
                            readOnly
                            className="min-h-[140px] rounded-[32px] bg-slate-50 border-2 border-slate-200 p-8 text-sm font-medium leading-relaxed italic text-slate-600 shadow-inner resize-none focus:ring-0"
                            defaultValue="Structural audit identifies minor deterioration of the non-slip coating on the main access ramp. Digital signage for auditory alerts is currently on standby mode pending firmware update."
                        />
                    </div>

                    <div className="space-y-4">
                        <label className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] ml-2">Corrective Action Proposed</label>
                        <Textarea
                            readOnly
                            className="min-h-[140px] rounded-[32px] bg-emerald-50/30 border-2 border-emerald-100 p-8 text-sm font-black uppercase text-emerald-800 leading-relaxed shadow-inner resize-none focus:ring-0"
                            defaultValue="1. RECOAT ACCESS RAMP WITH ISO-CERTIFIED NON-SLIP MATERIAL BY Q4. 2. SYNC AUDITORY SIGNAL GATEWAY WITH STATEWIDE EARLY WARNING NODE. 3. INCREASE MEDICAL KITS TO MANDATED BUFFER (120%)."
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-10 border-t border-slate-50">
                        <div className="space-y-3">
                            <label className="text-[10px] font-black uppercase text-slate-400 ml-1">Statutory Verification ID</label>
                            <Input readOnly defaultValue="AUDIT-LKO-0012-V5" className="h-16 px-8 rounded-2xl bg-slate-50 border-2 border-slate-200 font-mono font-black text-indigo-600 text-lg shadow-sm" />
                        </div>
                        <div className="flex items-center gap-6 justify-end h-full pt-6">
                            <Button variant="outline" className="h-14 px-8 rounded-2xl border-slate-200 font-black uppercase text-[10px] tracking-widest gap-2 bg-white hover:bg-slate-50 shadow-sm"><Download size={16} /> Raw Evidence Log</Button>
                            <Button variant="outline" className="h-14 px-8 rounded-2xl border-slate-200 font-black uppercase text-[10px] tracking-widest gap-2 bg-white hover:bg-slate-50 shadow-sm"><History size={16} /> View Timeline</Button>
                        </div>
                    </div>

                </CardContent>
            </Card>

            {/* FOOTER SYNC STATUS */}
            <footer className="pt-12 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="flex items-center gap-4">
                    <BadgeCheck size={20} className="text-orange-600 animate-pulse" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 leading-none uppercase">Consolidated Shelter Node v5.2 • Aggregated from DDMA operational data</span>
                </div>
            </footer>
        </div>
    );
}

/* UI SUB-COMPONENTS */

function HeaderNode({ label, val, icon }: any) {
    return (
        <div className="p-4 bg-slate-50 border border-slate-100 rounded-2xl space-y-1 group hover:border-orange-200 transition-all">
            <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                {icon} {label}
            </p>
            <p className="text-sm font-black text-slate-900 uppercase tracking-tight">{val}</p>
        </div>
    )
}

function StatTableCard({ title, icon, gradient, children }: any) {
    return (
        <Card className="rounded-[44px] border-slate-200 bg-white shadow-sm overflow-hidden group hover:shadow-2xl transition-all duration-500 h-full flex flex-col">
            <CardHeader className={`p-8 bg-gradient-to-r ${gradient} text-white relative overflow-hidden`}>
                <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
                <div className="flex items-center justify-between relative z-10">
                    <div className="flex items-center gap-4">
                        <div className="h-10 w-10 rounded-2xl bg-white/20 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500">
                            {icon}
                        </div>
                        <CardTitle className="text-[11px] font-black uppercase tracking-[0.3em] leading-none">{title}</CardTitle>
                    </div>
                </div>
            </CardHeader>
            <CardContent className="p-10 flex-1 space-y-5 relative">
                <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/topography.png')]" />
                <div className="relative z-10 space-y-4">
                    {children}
                </div>
            </CardContent>
        </Card>
    )
}

function StatRow({ label, val, alert, success, warning, mono }: any) {
    const colorClass = alert ? 'text-red-600 underline decoration-red-200 decoration-2' : success ? 'text-emerald-600' : warning ? 'text-orange-500' : 'text-slate-900';
    return (
        <div className="flex justify-between items-end group/row cursor-default">
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest group-hover/row:text-orange-600 transition-colors">{label}</p>
            <p className={`text-2xl font-black tracking-tighter leading-none ${colorClass} ${mono ? 'font-mono text-sm' : ''}`}>{val}</p>
        </div>
    )
}

function StatusNode({ label, status, success }: any) {
    return (
        <div className="flex items-center justify-between p-5 rounded-[28px] bg-slate-50 border border-slate-200 group transition-all hover:bg-white hover:border-emerald-200">
            <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest leading-none">{label}</p>
            <Badge className={`border-none font-black text-[9px] uppercase px-4 py-1.5 tracking-widest shadow-sm ${success ? 'bg-green-100 text-green-700' : 'bg-slate-200 text-slate-600'}`}>
                {status}
            </Badge>
        </div>
    )
}

function MetricBlock({ label, val, success, alert }: any) {
    return (
        <div className="space-y-1">
            <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">{label}</p>
            <p className={`text-3xl font-black tracking-tighter leading-none ${success ? 'text-emerald-600' : alert ? 'text-red-600 underline' : 'text-slate-900'}`}>{val}</p>
        </div>
    )
}

function ServicePill({ label, active }: any) {
    return (
        <div className={`p-4 rounded-2xl border-2 transition-all flex items-center justify-between group ${active ? 'bg-purple-50 border-purple-600 text-purple-900 shadow-md' : 'bg-slate-50 border-slate-100 text-slate-300 opacity-60'}`}>
            <span className="text-[10px] font-black uppercase tracking-widest">{label}</span>
            {active ? <CheckCircle2 size={16} className="text-purple-600" /> : <div className="h-4 w-4 rounded-full border-2 border-slate-200" />}
        </div>
    )
}