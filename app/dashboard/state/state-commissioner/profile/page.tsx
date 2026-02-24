// app/dashboard/scpd/profile/page.tsx
"use client";
import React, { Activity, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    User, Landmark, ShieldCheck, PenTool,
    Mail, Phone, Users, Bell, ArrowLeft,
    CheckCircle2, AlertCircle, Camera,
    Briefcase, MapPin, BadgeCheck, Save,
    Fingerprint, Sparkles,
    ActivityIcon
} from "lucide-react";
import {
    Select, SelectContent, SelectItem, SelectTrigger, SelectValue
} from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Textarea } from '@/components/ui/textarea';

export default function SCPDMasterProfile() {
    const [completion, setCompletion] = useState(82);

    return (
        <div className="max-w-6xl mx-auto pb-20 animate-in fade-in duration-700 font-sans">

            {/* 1. APEX HEADER & COMPLETION METER (Mandated System Behaviour) */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10 bg-white p-10 rounded-[40px] border border-slate-200 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-[0.03] pointer-events-none">
                    <Landmark size={140} className="text-indigo-600" />
                </div>
                <div className="relative z-10 space-y-1">
                    <div className="flex items-center gap-2 text-indigo-600 font-black uppercase text-[10px] tracking-[0.2em]">
                        <ArrowLeft size={14} /> State Commissioner for PwDs / Profile
                    </div>
                    <h1 className="text-4xl font-black text-slate-900 tracking-tighter uppercase leading-none">Profile</h1>
                    <p className="text-slate-500 font-medium italic">Single authoritative data source for all downstream statutory modules.</p>
                </div>

                <div className="relative z-10 min-w-[280px] space-y-3 bg-slate-50 p-6 rounded-3xl border border-slate-100">
                    <div className="flex justify-between items-end">
                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none"> Completion</span>
                        <span className="text-xl font-black text-indigo-600 leading-none">{completion}%</span>
                    </div>
                    <Progress value={completion} className="h-2 bg-indigo-600" />
                    <div className="flex items-center gap-2 text-emerald-600 pt-1">
                        <BadgeCheck size={12} />
                        <span className="text-[8px] font-black uppercase tracking-widest">Statutory Identity Verified</span>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

                {/* 2. SECTION NAVIGATOR */}
                <div className="lg:col-span-1 space-y-2 sticky top-28 h-fit">
                    <NavAnchor icon={<Landmark size={18} />} label="Office Identity" active />
                    <NavAnchor icon={<User size={18} />} label="Primary Officer" />
                    <NavAnchor icon={<Users size={18} />} label="Secretariat Staff" />
                    <NavAnchor icon={<PenTool size={18} />} label="eSign & Authority" />
                    <NavAnchor icon={<Bell size={18} />} label="System Prefs" />

                    <div className="mt-8 p-6 bg-indigo-50/50 rounded-[32px] border border-indigo-100">
                        <p className="text-[10px] font-bold text-indigo-900 leading-relaxed uppercase tracking-tighter">
                            Data from this section auto-populates <b>14 Reports</b> and <b>Legal Notices</b>.
                        </p>
                    </div>
                </div>

                {/* 3. MAIN DATA ENTRY AREA */}
                <div className="lg:col-span-3 space-y-8">

                    {/*  OFFICE IDENTITY */}
                    <SectionWrapper title=" Office / Commission Details">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <Field label="Office Name" defaultValue="State Commissioner for PwDs" />
                            <div className="space-y-2">
                                <label className="text-[11px] font-black uppercase text-slate-400 ml-1">State Jurisdiction</label>
                                <Select defaultValue="up"><SelectTrigger className="h-14 rounded-2xl bg-slate-50 border-2 font-bold"><SelectValue /></SelectTrigger>
                                    <SelectContent><SelectItem value="up">Uttar Pradesh</SelectItem></SelectContent></Select>
                            </div>
                            <Field label="Official Email ID" icon={<Mail />} defaultValue="scpd-up@nic.in" />
                            <Field label="Office Phone" icon={<Phone />} defaultValue="0522-228XXXX" />
                            <div className="md:col-span-2 space-y-2">
                                <label className="text-[11px] font-black uppercase text-slate-400 ml-1">Office Address (Statutory Head)</label>
                                <Textarea className="min-h-[100px] rounded-3xl bg-slate-50 border-2 p-6 font-bold text-slate-800" defaultValue="Directorate of Divyangjan, Nabibullah Road, Lucknow - 226001" />
                            </div>
                        </div>
                    </SectionWrapper>

                    {/*  PRIMARY OFFICER DETAILS */}
                    <SectionWrapper title=" Officer of the Commission">
                        <div className="flex flex-col md:flex-row gap-10">
                            <div className="relative group">
                                <div className="h-32 w-32 rounded-[32px] bg-slate-100 flex items-center justify-center border-2 border-dashed border-slate-200 overflow-hidden">
                                    <User size={40} className="text-slate-300" />
                                </div>
                                <button className="absolute -bottom-2 -right-2 p-2.5 bg-indigo-600 text-white rounded-xl shadow-lg hover:scale-110 transition-transform">
                                    <Camera size={16} />
                                </button>
                            </div>
                            <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Field label="Name of Officer" defaultValue="Dr. S.K. Srivastava" />
                                <Field label="Designation" defaultValue="State Commissioner" />
                                <Field label="Official Mobile" defaultValue="+91 94150 XXXXX" />
                                <div className="space-y-2">
                                    <label className="text-[11px] font-black uppercase text-slate-400 ml-1">Role Mapping</label>
                                    <Select defaultValue="comm"><SelectTrigger className="h-14 rounded-2xl bg-slate-50 border-2 font-bold"><SelectValue /></SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="comm">Commissioner (Apex)</SelectItem>
                                            <SelectItem value="sec">Secretary (Admin)</SelectItem>
                                        </SelectContent></Select>
                                </div>
                            </div>
                        </div>
                    </SectionWrapper>

                    {/*  PA / SUPPORT STAFF DETAILS */}
                    <SectionWrapper title=" Secretariat & Support Staff">
                        <div className="space-y-6">
                            <div className="p-6 bg-slate-50 rounded-[32px] border border-slate-100 grid grid-cols-1 md:grid-cols-3 gap-6 relative">
                                <Field label="PA Name" defaultValue="Amit Rai" />
                                <Field label="Designation" defaultValue="Private Secretary" />
                                <Field label="Contact" defaultValue="0522-228991" />
                                <Badge className="absolute -top-2 left-6 bg-slate-900 text-white border-2 font-black text-[8px] uppercase tracking-widest px-3">Primary Staff Node</Badge>
                            </div>
                            <Button variant="outline" className="w-full h-14 rounded-2xl border-slate-200 border-dashed border-2 font-bold text-slate-400 hover:bg-slate-50">
                                + Add Support Staff Member
                            </Button>
                        </div>
                    </SectionWrapper>

                    {/*  DIGITAL SIGNATURE / ESIGN SETUP */}
                    <SectionWrapper title=" Digital Signature & eSign Setup">
                        <div className="p-8 bg-indigo-900 rounded-[40px] text-white shadow-2xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:rotate-12 transition-transform duration-700">
                                <Fingerprint size={120} />
                            </div>
                            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                                <div className="space-y-4 max-w-md">
                                    <div className="flex items-center gap-3">
                                        <ShieldCheck className="text-blue-400" />
                                        <h3 className="text-lg font-black uppercase tracking-widest">eSign Enablement</h3>
                                    </div>
                                    <p className="text-sm font-medium text-indigo-200 leading-relaxed uppercase tracking-tighter">
                                        Required for signing statutory directions, orders, and annual reports digitally under the PwD Rules.
                                    </p>
                                    <div className="flex items-center gap-2">
                                        <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />

                                        <span className="text-[10px] font-black text-green-400 tracking-widest">Aadhaar eSign Gateway: Connected</span>
                                    </div>
                                </div>
                                <div className="relative z-10 flex gap-4">
                                    <Button variant="outline" className="h-14 px-8 rounded-2xl border-white/20 text-white font-black uppercase text-[10px] tracking-widest bg-white/10 transition-all">
                                        Update Certificate
                                    </Button>
                                    <Button className="h-14 px-8 rounded-2xl bg-white text-indigo-900 font-black uppercase text-[10px] tracking-widest shadow-xl hover:bg-indigo-50 transition-all">
                                        Test Digital Sign
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </SectionWrapper>

                    {/*  NOTIFICATION PREFERENCES */}
                    <SectionWrapper title=" Statutory Notification Preferences">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <PreferenceCard
                                icon={<Mail className="text-blue-600" />}
                                label="Official Email"
                                desc="Directions & Case Notices"
                                active
                            />
                            <PreferenceCard
                                icon={<Phone className="text-green-600" />}
                                label="Mobile SMS"
                                desc="SLA Breaches & Alerts"
                                active
                            />
                            <PreferenceCard
                                icon={<ActivityIcon className="text-purple-600" />}
                                label="System / In-App"
                                desc="District Submissions"
                                active
                            />
                        </div>
                    </SectionWrapper>

                    {/* FINAL ACTION FOOTER */}
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-10 border-t border-slate-200 mt-12">
                        <div className="flex items-center gap-4 text-slate-400">
                            <div className="h-10 w-10 bg-slate-100 rounded-full flex items-center justify-center border border-slate-200 shadow-inner">
                                <ShieldCheck size={20} className="text-indigo-600" />
                            </div>
                            <div className="space-y-0.5">
                                <p className="text-[10px] font-black text-slate-900 uppercase tracking-widest leading-none">Security Protocol Active</p>
                                <p className="text-[9px] font-bold text-slate-400 uppercase leading-none">Last Profile Update: 14 Oct 2024, 09:42 AM</p>
                            </div>
                        </div>
                        <div className="flex gap-4 w-full md:w-auto">
                            <Button variant="ghost" className="h-16 px-10 rounded-2xl font-black uppercase text-[11px] tracking-widest text-slate-400 hover:text-slate-900">
                                Discard Changes
                            </Button>
                            <Button className="h-16 px-12 rounded-[28px] bg-slate-950 text-white font-black uppercase tracking-[0.2em] text-[11px] shadow-2xl hover:bg-black transition-all hover:scale-[1.02] flex gap-3 group">
                                Update Profile <Save size={18} className="text-blue-400 group-hover:scale-110 transition-transform" />
                            </Button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

/* -------------------------------------------------------------------------- */
/* SHARED UI SUB-COMPONENTS (SCPD DESIGN SYSTEM)                             */
/* -------------------------------------------------------------------------- */

function NavAnchor({ icon, label, active = false }: { icon: React.ReactNode, label: string, active?: boolean }) {
    return (
        <div className={`flex items-center gap-3 px-6 py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest cursor-pointer transition-all ${active
            ? 'bg-indigo-900 text-white shadow-xl shadow-indigo-900/30'
            : 'text-slate-400 hover:bg-slate-100 hover:text-indigo-900'
            }`}>
            {icon} {label}
        </div>
    );
}

function SectionWrapper({ title, children }: { title: string, children: React.ReactNode }) {
    return (
        <div className="bg-white rounded-[40px] border border-slate-200 p-10 shadow-sm relative group hover:border-indigo-100 transition-all">
            <h3 className="text-[11px] font-black text-slate-400 uppercase tracking-[0.3em] mb-10 flex items-center gap-4">
                <div className="h-2 w-2 rounded-full bg-indigo-600" /> {title}
            </h3>
            <div className="relative z-10">
                {children}
            </div>
        </div>
    );
}

function Field({ label, icon, defaultValue, ...props }: any) {
    return (
        <div className="space-y-3">
            <label className="text-[10px] font-black uppercase text-slate-400 ml-1 tracking-[0.1em]">{label}</label>
            <div className="relative group">
                {icon && (
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-indigo-600 transition-colors">
                        {React.cloneElement(icon as React.ReactElement, {})}
                    </div>
                )}
                <Input
                    defaultValue={defaultValue}
                    className={`h-14 rounded-2xl bg-slate-50 border-2 font-bold text-slate-800 placeholder:text-slate-300 focus-visible:ring-2 focus-visible:ring-indigo-600 ${icon ? 'pl-12' : 'px-6'}`}
                    {...props}
                />
            </div>
        </div>
    );
}

function PreferenceCard({ icon, label, desc, active }: any) {
    return (
        <div className={`p-6 rounded-[32px] border-2 transition-all cursor-pointer ${active ? 'bg-indigo-50/30 border-indigo-200' : 'bg-slate-50 border-transparent grayscale'
            }`}>
            <div className="flex items-center gap-4 mb-4">
                <div className="h-10 w-10 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-slate-100">
                    {icon}
                </div>
                <div className="h-4 w-4 bg-indigo-600 rounded-full flex items-center justify-center shadow-indigo-200 shadow-lg">
                    <CheckCircle2 size={10} className="text-white" />
                </div>
            </div>
            <p className="text-[10px] font-black text-indigo-900 uppercase tracking-widest">{label}</p>
            <p className="text-[9px] font-bold text-slate-400 uppercase mt-1">{desc}</p>
        </div>
    );
}

function HealthItem({ label, val, color }: any) {
    return (
        <div className="flex justify-between items-center group">
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest group-hover:text-white transition-colors">{label}</span>
            <span className={`text-xl font-black ${color || 'text-indigo-400'}`}>{val}</span>
        </div>
    );
}

function ProtocolStep({ text }: { text: string }) {
    return (
        <div className="flex items-start gap-3 group">
            <div className="h-5 w-5 rounded-full bg-slate-100 flex items-center justify-center border border-slate-200 shrink-0 mt-0.5 shadow-inner transition-all group-hover:bg-indigo-600 group-hover:border-indigo-600">
                <div className="h-1 w-1 rounded-full bg-slate-400 group-hover:bg-white" />
            </div>
            <span className="text-xs font-bold text-slate-600 tracking-tight leading-snug group-hover:text-slate-900 transition-colors">{text}</span>
        </div>
    );
}