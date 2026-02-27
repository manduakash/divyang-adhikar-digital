// app/dashboard/ccpd/profile/page.tsx
"use client";
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
    Landmark, UserCircle2, ShieldCheck, PenTool,
    Mail, Phone, Users, Bell, ArrowLeft,
    CheckCircle2, AlertTriangle, Camera,
    Briefcase, MapPin, BadgeCheck, Save,
    Fingerprint, Sparkles, Building2, Clock,
    Smartphone, Globe, ChevronRight, Database,
    Monitor
} from "lucide-react";
import {
    Select, SelectContent, SelectItem, SelectTrigger, SelectValue
} from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Switch } from '@/components/ui/switch';

export default function CCPDMasterProfile() {
    const [completion, setCompletion] = useState(82);

    return (
        <div className="max-w-[1400px] mx-auto pb-20 animate-in fade-in duration-1000 font-sans selection:bg-indigo-100">

            {/* PROFILE HEADER - TOP NAVIGATION & COMPLETION */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12 bg-white p-10 rounded-[40px] border-2 border-slate-100 shadow-sm relative overflow-hidden">
                <div className="space-y-2 relative z-10">
                    <div className="flex items-center gap-2 text-indigo-600 font-black uppercase text-[9px] tracking-[0.3em]">
                        <ArrowLeft size={14} /> Office of the Chief Commissioner / Profile
                    </div>
                    <h1 className="text-5xl font-black text-slate-900 tracking-tighter uppercase leading-none">PROFILE</h1>
                    <p className="text-slate-500 font-medium italic text-sm tracking-tight">Single authoritative data source for all downstream statutory modules.</p>
                </div>

                <div className="relative z-10 min-w-[320px] bg-slate-50 p-8 rounded-[32px] border-2 border-slate-100 shadow-inner">
                    <div className="flex justify-between items-end mb-2">
                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">COMPLETION</span>
                        <span className="text-2xl font-black text-indigo-600 leading-none">{completion}%</span>
                    </div>
                    <Progress value={completion} className="h-2 bg-slate-200" />
                    <div className="flex items-center gap-2 pt-2 text-emerald-600">
                        <CheckCircle2 size={12} strokeWidth={3} />
                        <span className="text-[8px] font-black uppercase tracking-widest">STATUTORY IDENTITY VERIFIED</span>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-12 gap-12 items-start">

                {/* LEFT NAVIGATION COLUMN */}
                <div className="xl:col-span-3 space-y-3 sticky top-28 h-fit">
                    <NavPill icon={<Building2 size={18} />} label="OFFICE IDENTITY" active />
                    <NavPill icon={<UserCircle2 size={18} />} label="PRIMARY OFFICER" />
                    <NavPill icon={<Users size={18} />} label="SECRETARIAT STAFF" />
                    <NavPill icon={<Fingerprint size={18} />} label="E-SIGN & AUTHORITY" />
                    <NavPill icon={<Bell size={18} />} label="SYSTEM PREFS" />

                    <div className="mt-10 p-8 bg-blue-50/50 rounded-[32px] border-2 border-blue-100 relative group overflow-hidden">
                        <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/topography.png')]" />
                        <p className="text-[9px] font-black text-blue-800 leading-relaxed uppercase tracking-widest">
                            Data from this section auto-populates 14 reports and legal notices.
                        </p>
                    </div>
                </div>

                {/* MAIN DATA MODULES */}
                <div className="xl:col-span-8 space-y-10">

                    {/* OFFICE DETAILS */}
                    <SectionContainer title="OFFICE / COMMISSION DETAILS" gradient="from-blue-600 via-blue-700 to-indigo-700">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            <InputField label="OFFICE NAME (OFFICE OF THE CHIEF COMMISSIONER FOR PWDs)" defaultValue="Office of the Chief Commissioner for Persons with Disabilities" />
                            <div className="space-y-3">
                                <label className="text-[10px] font-black uppercase text-slate-400 ml-1 tracking-widest leading-none">STATE JURISDICTION</label>
                                <Select defaultValue="india">
                                    <SelectTrigger className="w-full h-16 py-6 border-2 border-slate-200 bg-white rounded-2xl px-6 font-black text-slate-800 uppercase text-xs shadow-sm focus:ring-2 focus:ring-indigo-500">
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent className="rounded-2xl border-2 border-slate-200 shadow-2xl">
                                        <SelectItem value="india" className="font-black py-4 uppercase">National / India</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <InputField label="OFFICIAL EMAIL ID(s)" icon={<Mail className="text-slate-300" />} defaultValue="ccpd@nic.in" />
                            <InputField label="OFFICIAL PHONE NUMBER(s)" icon={<Phone className="text-slate-300" />} defaultValue="011-261XXXX" />
                            <div className="md:col-span-2 space-y-3">
                                <label className="text-[10px] font-black uppercase text-slate-400 ml-1 tracking-widest leading-none">ADDRESS</label>
                                <Textarea className="min-h-[120px] rounded-[32px] bg-white border-2 border-slate-200 p-8 font-black text-slate-900 shadow-sm resize-none uppercase text-sm tracking-tighter leading-relaxed" defaultValue="5th Floor, NISD Building, Plot No. G-2, Sector-10, Dwarka, New Delhi-110075" />
                            </div>
                        </div>
                    </SectionContainer>

                    {/* PRIMARY OFFICER */}
                    <SectionContainer title="OFFICER OF THE COMMISSION" gradient="from-purple-600 via-indigo-600 to-blue-700">
                        <div className="flex flex-col md:flex-row gap-12">
                            <div className="relative shrink-0">
                                <div className="h-40 w-40 rounded-[48px] bg-slate-50 flex items-center justify-center border-2 border-slate-100 shadow-inner group hover:border-indigo-200 transition-all">
                                    <UserCircle2 size={64} className="text-slate-200" />
                                </div>
                                <button className="absolute -bottom-2 -right-2 p-3 bg-blue-600 text-white rounded-2xl shadow-xl hover:scale-110 transition-transform">
                                    <Camera size={18} strokeWidth={3} />
                                </button>
                            </div>
                            <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-10">
                                <InputField label="CHIEF COMMISSIONER DETAILS" defaultValue="Sh. Rajesh Mehra, Central Commissioner" />
                                <InputField label="DESIGNATION" defaultValue="Chief Commissioner" />
                                <InputField label="OFFICIAL MOBILE NUMBER" defaultValue="+91 98110 XXXXX" />
                                <div className="space-y-3">
                                    <label className="text-[11px] font-black uppercase text-slate-400 ml-1 tracking-widest leading-none">ROLE MAPPING (CHIEF COMMISSIONER / REGISTRY / SECRETARIAT / STAFF / VIEW-ONLY)</label>
                                    <Select defaultValue="cc">
                                        <SelectTrigger className="w-full h-16 py-6 border-2 border-slate-200 bg-white rounded-2xl px-6 font-black text-slate-800 uppercase text-xs shadow-sm">
                                            <SelectValue />
                                        </SelectTrigger>
                                        <SelectContent className="rounded-2xl border-2 border-slate-200 shadow-2xl">
                                            <SelectItem value="cc" className="font-black py-4 uppercase">Chief Commissioner (Apex)</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                        </div>
                    </SectionContainer>

                    {/* SECRETARIAT STAFF */}
                    <SectionContainer title="SECRETARIAT & SUPPORT STAFF" gradient="from-emerald-600 via-teal-600 to-blue-600">
                        <div className="space-y-6">
                            <div className="p-8 bg-slate-50/50 rounded-[40px] border-2 border-slate-100 grid grid-cols-1 md:grid-cols-3 gap-8 relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-4">
                                    <Badge className="bg-slate-950 text-white border-none font-black text-[8px] uppercase tracking-[0.2em] px-3 py-1">Primary Staff Node</Badge>
                                </div>
                                <InputField label="PA NAME" defaultValue="Sh. Amitabh Roy" />
                                <InputField label="DESIGNATION" defaultValue="Private Secretary" />
                                <InputField label="CONTACT" defaultValue="011-261XXXX" />
                            </div>
                            <Button variant="outline" className="w-full h-16 border-2 border-dashed border-slate-200 rounded-[28px] font-black uppercase tracking-widest text-[10px] text-slate-400 hover:bg-white hover:border-emerald-600 transition-all">
                                + ADD SUPPORT STAFF MEMBER
                            </Button>
                        </div>
                    </SectionContainer>

                    {/* ESIGN ENABLEMENT */}
                    <SectionContainer title="DIGITAL SIGNATURE & eSIGN SETUP" gradient="from-indigo-600 via-purple-600 to-rose-600">
                        <Card className="rounded-[40px] border-none bg-gradient-to-br from-indigo-700 via-blue-700 to-indigo-900 text-white p-12 shadow-2xl relative overflow-hidden group">
                            <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
                            <div className="relative z-10 flex flex-col xl:flex-row justify-between items-center gap-10">
                                <div className="space-y-6 flex-1">
                                    <div className="flex items-center gap-4">
                                        <div className="h-14 w-14 rounded-2xl bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center">
                                            <PenTool size={28} />
                                        </div>
                                        <h3 className="text-3xl font-black tracking-tight leading-none">e-Sign</h3>
                                    </div>
                                    <p className="text-sm font-medium leading-relaxed uppercase tracking-tighter opacity-80 max-w-xl">
                                        REQUIRED FOR SIGNING STATUTORY DIRECTIONS, ORDERS, AND ANNUAL REPORTS DIGITALLY UNDER THE PWD RULES.
                                    </p>
                                    {/* <div className="flex items-center gap-3">
                                        <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_10px_emerald]" />
                                        <Badge className="text-[10px] bg-slate-50 font-black tracking-widest text-slate-500">Aadhaar eSign Gateway : Connected</Badge>
                                    </div> */}
                                </div>
                                <div className="flex gap-4 w-full xl:w-auto">
                                    <Button className="flex-1 xl:flex-none h-14 px-10 rounded-2xl bg-white/10 hover:bg-white/20 text-white border border-white/10 font-black uppercase tracking-widest text-[10px] shadow-lg backdrop-blur-md">Update Certificate</Button>
                                    <Button className="flex-1 xl:flex-none h-14 px-10 rounded-2xl bg-white text-indigo-900 hover:bg-indigo-50 font-black uppercase tracking-widest text-[10px] shadow-2xl">Test Digital Sign</Button>
                                </div>
                            </div>
                        </Card>
                    </SectionContainer>

                    {/* NOTIFICATIONS */}
                    <SectionContainer title="STATUTORY NOTIFICATION PREFERENCES" gradient="from-orange-500 via-amber-600 to-orange-700">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <NotifCard label="Email ID(s)" desc="Statutory Directions & Notices" active icon={<Mail size={20} />} />
                            <NotifCard label="Mobile SMS" desc="SLA Breach & Urgency Alerts" active icon={<Smartphone size={20} />} />
                            <NotifCard label="In-app Console" desc="State Compliance Feeds" active icon={<Monitor size={20} />} />
                        </div>
                    </SectionContainer>

                    {/* COMMIT ACTIONS */}
                    <div className="pt-12 border-t-2 border-slate-100 flex justify-between items-center gap-8">
                        <div className="flex items-center gap-4 text-slate-400">
                            <BadgeCheck size={24} className="text-indigo-600" />
                            <p className="text-[10px] font-black uppercase tracking-[0.2em] leading-none">Authority Profile Sync Node Active</p>
                        </div>
                        <div className="flex gap-4">
                            <Button variant="outline" className="h-16 px-10 rounded-3xl border-2 border-slate-200 font-black uppercase tracking-widest text-[11px] bg-white hover:bg-slate-50">Discard Session</Button>
                            <Button className="h-16 px-12 rounded-[32px] bg-slate-950 text-white font-black uppercase tracking-[0.2em] text-[11px] shadow-2xl hover:bg-black transition-all gap-4">
                                Save Profile Record <Save size={20} className="text-blue-400" />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

/* UI SUB-COMPONENTS */

function SectionContainer({ title, gradient, children }: any) {
    return (
        <Card className="rounded-[48px] border-2 border-slate-200 bg-white shadow-sm overflow-hidden transition-all duration-500 hover:border-indigo-100">
            <CardHeader className="p-0 border-b-2 border-slate-50">
                <div className="flex items-center gap-4 p-8 relative overflow-hidden">
                    <div className={`absolute top-0 left-0 w-2 h-full bg-gradient-to-b ${gradient}`} />
                    <div className={`h-2 w-2 rounded-full bg-gradient-to-r ${gradient}`} />
                    <CardTitle className={`text-[11px] font-black uppercase tracking-[0.3em] bg-gradient-to-r ${gradient} text-white p-4 w-full rounded-md`}>
                        {title}
                    </CardTitle>
                </div>
            </CardHeader>
            <CardContent className="p-10 relative overflow-hidden">
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
                <div className="relative z-10">{children}</div>
            </CardContent>
        </Card>
    )
}

function InputField({ label, icon, defaultValue }: any) {
    return (
        <div className="space-y-4 group">
            <label className="text-[11px] font-black uppercase text-slate-400 ml-2 tracking-widest leading-none transition-colors group-focus-within:text-indigo-600">{label}</label>
            <div className="relative">
                {icon && <div className="absolute left-5 top-1/2 -translate-y-1/2 transition-transform group-focus-within:scale-110">{icon}</div>}
                <Input defaultValue={defaultValue} className={`h-16 rounded-2xl bg-slate-50 border-2 border-slate-200 font-black text-slate-900 shadow-inner focus:ring-2 focus:ring-indigo-500 transition-all ${icon ? 'pl-14' : 'px-8'}`} />
            </div>
        </div>
    )
}

function NavPill({ label, icon, active }: any) {
    return (
        <div className={`flex items-center justify-between p-5 rounded-[22px] transition-all cursor-pointer border-2 ${active ? 'bg-indigo-900 text-white border-transparent shadow-2xl scale-[1.03]' : 'bg-white text-slate-500 border-slate-100 hover:bg-slate-50 hover:border-slate-200'}`}>
            <div className="flex items-center gap-4">
                <span className={active ? 'text-blue-400' : 'text-slate-300'}>{icon}</span>
                <span className="text-[10px] font-black uppercase tracking-[0.15em]">{label}</span>
            </div>
            {active && <ChevronRight size={14} className="text-white/40" />}
        </div>
    )
}

function NotifCard({ label, desc, active, icon }: any) {
    return (
        <div className={`p-8 rounded-[32px] border-2 transition-all flex flex-col justify-between h-44 ${active ? 'bg-orange-50 border-orange-200 shadow-sm' : 'bg-slate-50 border-slate-100 opacity-60'}`}>
            <div className="flex justify-between items-start">
                <div className={`h-12 w-12 rounded-2xl bg-white border-2 border-slate-100 flex items-center justify-center text-slate-400 ${active ? 'text-orange-600 border-orange-100 shadow-inner' : ''}`}>{icon}</div>
                <Switch defaultChecked={active} className="data-[state=checked]:bg-orange-600" />
            </div>
            <div>
                <p className="text-[11px] font-black text-slate-900 uppercase tracking-widest leading-none">{label}</p>
                <p className="text-[9px] font-bold text-slate-400 uppercase tracking-tighter mt-2">{desc}</p>
            </div>
        </div>
    )
}