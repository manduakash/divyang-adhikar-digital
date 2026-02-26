// app/dashboard/sab/profile/page.tsx
"use client";
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
    Landmark, ShieldCheck, PenTool, Mail,
    Phone, Users, Bell, ArrowLeft,
    CheckCircle2, AlertCircle, Camera,
    Briefcase, MapPin, BadgeCheck, Save,
    Fingerprint, Sparkles, Building2, Clock,
    Smartphone, Globe
} from "lucide-react";
import {
    Select, SelectContent, SelectItem, SelectTrigger, SelectValue
} from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";

export default function SABProfileHub() {
    const [completion, setCompletion] = useState(75);

    return (
        <div className="max-w-6xl mx-auto pb-20 animate-in fade-in duration-1000 font-sans selection:bg-emerald-100">

            {/* HUB IDENTITY HEADER - CARBON FIBER TEXTURE */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10 bg-indigo-900 p-10 rounded-[48px] border border-slate-200 shadow-sm relative overflow-hidden">

                <div className="relative z-10 space-y-4">
                    <div className="flex items-center gap-3">
                        <div className="h-14 w-14 bg-gradient-to-br from-emerald-500 via-teal-600 to-emerald-700 rounded-2xl flex items-center justify-center text-white shadow-xl shadow-emerald-500/20">
                            <Landmark size={32} />
                        </div>
                        <div>
                            <h1 className="text-4xl font-black text-white tracking-tighter uppercase leading-none">. PROFILE</h1>
                            <p className="text-[10px] font-black text-emerald-400 uppercase tracking-[0.3em] mt-2 flex items-center gap-2">
                                <ShieldCheck size={12} /> Secretariat Nodal Hub
                            </p>
                        </div>
                    </div>
                </div>

                {/* PROFILE COMPLETION PERCENTAGE (AUTO) */}
                <div className="relative z-10 min-w-[300px] space-y-3 bg-white/10 backdrop-blur-md p-6 rounded-[32px] border border-white/20 shadow-2xl">
                    <div className="flex justify-between items-end mb-1">
                        <span className="text-[10px] font-black text-emerald-200 uppercase tracking-widest leading-none">Profile Completion Percentage</span>
                        <span className="text-xl font-black text-white leading-none">{completion}%</span>
                    </div>
                    <Progress value={completion} className="h-1.5 bg-white shadow-[0_0_10px_rgba(52,211,153,0.5)]" />
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 items-start">

                {/* PURPOSE & SYSTEM BEHAVIOUR SIDEBAR */}
                <div className="lg:col-span-1 space-y-6 sticky top-28 h-fit">

                    <Card className="rounded-[40px] border bg-indigo-500 text-white p-8 shadow-2xl relative overflow-hidden group">
                        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
                        <div className="relative z-10 space-y-4">
                            <p className="text-sm font-bold leading-relaxed uppercase tracking-tighter italic">
                                The Profile section captures the basic identity and secretariat details of the State Advisory Board and its members, so that meeting notices, minutes, and reports are generated uniformly.
                            </p>
                        </div>
                    </Card>

                    <Card className="rounded-[40px] border-slate-900 bg-slate-900 text-white p-8 shadow-2xl relative overflow-hidden">
                        <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/circuit-board.png')]" />
                        <div className="relative z-10 space-y-6">
                            <div className="flex items-center gap-3 text-emerald-400">
                                <Sparkles size={20} />
                                <h3 className="text-[10px] font-black uppercase tracking-widest">System Behaviour</h3>
                            </div>
                            <div className="space-y-4">
                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-relaxed">
                                    Profile data auto-populates: Meeting notices, Minutes of Meeting, Board reports.
                                </p>
                                <div className="pt-4 border-t border-white/10 flex items-start gap-3">
                                    <AlertCircle size={16} className="text-red-400 shrink-0 mt-0.5" />
                                    <p className="text-[9px] font-black text-red-400 uppercase tracking-tighter">
                                        Incomplete profile fields trigger reminders to Secretariat.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>

                {/* DATA ARCHITECTURE CANVAS */}
                <div className="lg:col-span-3 space-y-8">

                    {/* CORE IDENTITY MODULE */}
                    <StatSection title="Primary Identity Elements">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <DataField label="Board Name" defaultValue="State Advisory Board on Disability" />
                            <DataField label="Secretariat Department / Office" defaultValue="Directorate of Divyangjan Hub" />
                            <DataField label="Official Email ID" icon={<Mail />} defaultValue="sab-nodal@state.gov.in" />
                            <DataField label="Official Phone Number" icon={<Phone />} defaultValue="0522-228XXXX" />
                            <div className="md:col-span-2 space-y-3">
                                <label className="text-[11px] font-black uppercase text-slate-400 ml-1">Office Address</label>
                                <Textarea className="min-h-[100px] rounded-[32px] bg-slate-50 border p-6 font-bold text-slate-800 shadow-inner resize-none" defaultValue="Secretariat Building, Block-C, 4th Floor, Lucknow - 226001" />
                            </div>
                        </div>
                    </StatSection>

                    {/* APEX PERSONNEL MODULE */}
                    <StatSection title="Board Personnel Details">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="p-8 bg-emerald-50 rounded-[40px] border border-emerald-100 space-y-4 group hover:bg-white transition-all">
                                <label className="text-[10px] font-black uppercase text-emerald-600 tracking-widest">Chairperson Details</label>
                                <Input defaultValue="Dr. Rajesh Mehra" className="h-14 bg-white border rounded-2xl font-black text-slate-800 shadow-sm" />
                            </div>
                            <div className="p-8 bg-blue-50 rounded-[40px] border border-blue-100 space-y-4 group hover:bg-white transition-all">
                                <label className="text-[10px] font-black uppercase text-blue-600 tracking-widest">Member Secretary Details</label>
                                <Input defaultValue="Amitabh Kant, IAS" className="h-14 bg-white border rounded-2xl font-black text-slate-800 shadow-sm" />
                            </div>
                            <div className="md:col-span-2 p-8 bg-slate-50 rounded-[40px] border border-slate-100 space-y-4">
                                <label className="text-[10px] font-black uppercase text-slate-500 tracking-widest">Support Staff Details</label>
                                <Input placeholder="Enter Secretariat Staff Names and Designations" className="h-14 bg-white border rounded-2xl font-bold text-slate-800 shadow-sm" />
                            </div>
                        </div>
                    </StatSection>

                    {/* SYSTEM CONFIG MODULE */}
                    <StatSection title="System Access & Notifications">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-4">
                                <label className="text-[11px] font-black uppercase text-slate-400 ml-1">Role Mapping (Chairperson / Member / Member Secretary / Secretariat Staff)</label>
                                <Select defaultValue="sec">
                                    <SelectTrigger className="h-14 rounded-2xl bg-slate-50 border font-black text-slate-800 shadow-inner px-6"><SelectValue /></SelectTrigger>
                                    <SelectContent className="rounded-2xl border-slate-100">
                                        <SelectItem value="chair" className="font-bold py-3 uppercase text-[10px]">Chairperson</SelectItem>
                                        <SelectItem value="mem" className="font-bold py-3 uppercase text-[10px]">Member</SelectItem>
                                        <SelectItem value="sec" className="font-bold py-3 uppercase text-[10px]">Member Secretary</SelectItem>
                                        <SelectItem value="staff" className="font-bold py-3 uppercase text-[10px]">Secretariat Staff</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="space-y-4">
                                <label className="text-[11px] font-black uppercase text-slate-400 ml-1">Notification Preferences (Email / SMS / In-app)</label>
                                <div className="flex bg-slate-100 p-1.5 rounded-2xl gap-1">
                                    {['Email', 'SMS', 'In-App'].map((pref) => (
                                        <button key={pref} className="flex-1 py-3 bg-white rounded-xl text-[10px] font-black uppercase text-emerald-600 shadow-sm transition-all hover:bg-emerald-50">{pref}</button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </StatSection>

                    {/* FINAL COMMIT FOOTER */}
                    <div className="flex justify-end pt-10 border-t border-slate-100 mt-12">
                        <Button className="h-16 px-12 rounded-[28px] bg-slate-950 text-white font-black uppercase tracking-[0.2em] text-[11px] shadow-2xl hover:bg-black transition-all gap-3 group">
                            Update Profile <Save size={18} className="text-emerald-400 group-hover:scale-110 transition-transform" />
                        </Button>
                    </div>

                </div>
            </div>
        </div>
    );
}

/* UI HELPER COMPONENTS */

function StatSection({ title, children }: any) {
    return (
        <Card className="rounded-[44px] border-slate-200 bg-white shadow-sm overflow-hidden group hover:border-emerald-100 transition-all">
            <CardHeader className="p-8 border-b border-slate-50 bg-slate-50/30">
                <CardTitle className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 flex items-center gap-3">
                    <div className="h-1.5 w-1.5 rounded-full bg-emerald-600" /> {title}
                </CardTitle>
            </CardHeader>
            <CardContent className="p-10">{children}</CardContent>
        </Card>
    )
}

function DataField({ label, icon, defaultValue }: any) {
    return (
        <div className="space-y-3 group">
            <label className="text-[10px] font-black uppercase text-slate-400 ml-1 tracking-widest">{label}</label>
            <div className="relative">
                {icon && <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-emerald-600 transition-colors">{React.cloneElement(icon as React.ReactElement, {})}</div>}
                <Input defaultValue={defaultValue} className={`h-16 rounded-2xl bg-slate-50 border font-black text-slate-800 shadow-inner px-6 ${icon ? 'pl-12' : ''} focus-visible:ring-2 focus-visible:ring-emerald-600`} />
            </div>
        </div>
    )
}