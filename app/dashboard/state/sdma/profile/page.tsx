// app/dashboard/sdma/profile/page.tsx
"use client";
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
    ShieldAlert, UserCircle2, ShieldCheck, PenTool,
    Mail, Phone, Users, Bell, ArrowLeft,
    CheckCircle2, AlertTriangle, Camera,
    Briefcase, MapPin, BadgeCheck, Save,
    Fingerprint, Sparkles, Building2, Clock,
    Smartphone, Globe, Siren, Navigation,
    Landmark
} from "lucide-react";
import {
    Select, SelectContent, SelectItem, SelectTrigger, SelectValue
} from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";

export default function SDMAMasterProfile() {
    const [completion, setCompletion] = useState(88);

    return (
        <div className="max-w-6xl mx-auto pb-20 animate-in fade-in duration-1000 font-sans selection:bg-orange-100">

            {/* HUB IDENTITY HEADER - CARBON FIBER TEXTURE */}
            <div className="flex flex-col md:flex-row justify-between  bg-gradient-to-br from-indigo-800 via-indigo-400 to-blue-600 items-start md:items-center gap-6 mb-10 bg-white p-10 rounded-[48px] border border-slate-200 shadow-sm relative overflow-hidden">
                <div className="absolute inset-0 opacity-[0.06] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] bg-fixed" />

                <div className="relative z-10 space-y-4">
                    <div className="flex items-center gap-3">
                        <div className="h-14 w-14 bg-gradient-to-br from-orange-500 via-orange-600 to-red-700 rounded-2xl flex items-center justify-center text-white shadow-xl shadow-orange-500/20 transition-transform hover:scale-105">
                            <Siren size={32} />
                        </div>
                        <div>
                            <h1 className="text-4xl font-black text-white tracking-tighter uppercase leading-none">PROFILE</h1>
                            <p className="text-[10px] font-black text-slate-100 uppercase tracking-[0.3em] mt-2 flex items-center gap-2">
                                <ShieldCheck size={12} /> Statutory Identity Node • Apex Level
                            </p>
                        </div>
                    </div>
                </div>

                {/* PROFILE COMPLETION PERCENTAGE (AUTO) */}
                <div className="relative z-10 min-w-[320px] space-y-3 bg-white/10 backdrop-blur-md p-6 rounded-[32px] border border-white/20 shadow-2xl">
                    <div className="flex justify-between items-end mb-1">
                        <span className="text-[10px] font-black text-orange-200 uppercase tracking-widest leading-none text-nowrap">Profile (Completion %)</span>
                        <span className="text-2xl font-black text-white leading-none">{completion}%</span>
                    </div>
                    <Progress value={completion} className="h-1.5 bg-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.5)]" />
                    <div className="flex items-center gap-2 pt-1">
                        <div className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
                        <span className="text-[8px] font-black text-orange-200 uppercase tracking-widest leading-none">Mandatory fields enforced</span>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 items-start">

                {/* PURPOSE & BEHAVIOR SIDEBAR */}
                <div className="lg:col-span-1 space-y-6 sticky top-28 h-fit">

                    <Card className="rounded-[40px] border-none bg-orange-600 text-white p-8 shadow-2xl relative overflow-hidden group">
                        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
                        <div className="relative z-10 space-y-4">
                            <h3 className="text-[11px] font-black uppercase tracking-widest text-orange-100 leading-none">Purpose</h3>
                            <p className="text-xs font-bold leading-relaxed uppercase tracking-tighter italic">
                                Acts as the authoritative identity and mandate layer for SDMA in PwD-related disaster preparedness, response coordination, and post-disaster review.
                            </p>
                            <p className="text-[9px] font-medium text-orange-100/70 leading-relaxed uppercase tracking-widest">
                                All advisories, directions, reports, and communications draw from this profile.
                            </p>
                        </div>
                    </Card>

                    <Card className="rounded-[40px] border-slate-900 bg-slate-900 text-white p-8 shadow-2xl relative overflow-hidden">
                        <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/circuit-board.png')]" />
                        <div className="relative z-10 space-y-6">
                            <div className="flex items-center gap-3 text-orange-400">
                                <Sparkles size={20} />
                                <h3 className="text-[10px] font-black uppercase tracking-widest leading-none">System Behaviour</h3>
                            </div>
                            <div className="space-y-4">
                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-relaxed">
                                    Profile auto-populates: SDMA advisories and directions, Review notes, State-level disaster reports.
                                </p>
                                <div className="pt-4 border-t border-white/10 flex items-start gap-3">
                                    <AlertTriangle size={16} className="text-red-400 shrink-0 mt-0.5" />
                                    <p className="text-[9px] font-black text-red-400 uppercase tracking-tighter leading-none">
                                        Incomplete profile triggers reminders.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>

                {/* DATA ARCHITECTURE CANVAS */}
                <div className="lg:col-span-3 space-y-8">

                    {/* AUTHORITY & SECRETARIAT MODULE */}
                    <StatSection title="Authority / Secretariat Details">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <DataField label="Authority Name (SDMA)" defaultValue="State Disaster Management Authority Hub" />
                            <DataField label="Secretariat Department / Office" defaultValue="Department of Disaster Management" />
                            <DataField label="Official Email ID(s)" icon={<Mail />} defaultValue="sdma-apex@state.gov.in" />
                            <DataField label="Official Phone Numbers" icon={<Phone />} defaultValue="033-2210XXXX" />
                            <div className="md:col-span-2 space-y-3">
                                <label className="text-[10px] font-black uppercase text-slate-400 ml-1">Office Address</label>
                                <Textarea className="min-h-[100px] rounded-[32px] bg-slate-50 border p-6 font-bold text-slate-800 shadow-inner resize-none uppercase text-xs tracking-tighter" defaultValue="Nabanna, 9th Floor, 325, Sarat Chatterjee Road, Shibpur, Howrah - 711102" />
                            </div>
                        </div>
                    </StatSection>

                    {/* APEX PERSONNEL HUB */}
                    <StatSection title="Personnel Master Hub">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <DataField label="Vice Chair / Chairperson Details" icon={<UserCircle2 />} defaultValue="Hon'ble Minister in Charge" />
                            <DataField label="CEO / Member Secretary Details" icon={<Landmark />} defaultValue="Principal Secretary, DM Node" />
                            <div className="md:col-span-2 p-8 bg-orange-50/50 rounded-[40px] border border-orange-100 space-y-6">
                                <label className="text-[10px] font-black uppercase text-orange-600 tracking-widest">PwD Focal Point / State Nodal Officer (Disaster)</label>
                                <div className="flex items-center gap-5">
                                    <div className="h-14 w-14 rounded-2xl bg-white border border-orange-200 flex items-center justify-center text-orange-600 shadow-sm transition-transform hover:scale-110"><BadgeCheck size={28} /></div>
                                    <div className="flex-1">
                                        <Input defaultValue="Amitabh Roy" className="h-14 bg-white border rounded-2xl font-black text-slate-800 shadow-inner uppercase text-sm tracking-tight" />
                                    </div>
                                </div>
                            </div>
                            <div className="md:col-span-2 space-y-3">
                                <label className="text-[10px] font-black uppercase text-slate-400 ml-1">Supporting Officers / Staff</label>
                                <Input placeholder="Enter designated secretariat member names" className="h-14 bg-slate-50 border rounded-2xl font-bold px-6" />
                            </div>
                        </div>
                    </StatSection>

                    {/* ROLE & SECURITY MODULE */}
                    <StatSection title="Role Mapping & Digital Setup">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-4">
                                <label className="text-[11px] font-black uppercase text-slate-400 ml-1">Role Mapping (Chairperson / Member / CEO / Nodal Officer / Staff / View-only)</label>
                                <Select defaultValue="ceo">
                                    <SelectTrigger className="h-14 rounded-2xl bg-slate-50 border font-black text-slate-800 shadow-inner px-6 uppercase text-[10px] tracking-widest"><SelectValue /></SelectTrigger>
                                    <SelectContent className="rounded-2xl border-slate-100">
                                        <SelectItem value="ceo" className="font-bold py-3 uppercase text-[10px]">CEO Node</SelectItem>
                                        <SelectItem value="nodal" className="font-bold py-3 uppercase text-[10px]">Nodal Officer</SelectItem>
                                        <SelectItem value="staff" className="font-bold py-3 uppercase text-[10px]">Staff Entry</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="space-y-4">
                                <label className="text-[11px] font-black uppercase text-slate-400 ml-1">Digital Signature / eSign Configuration</label>
                                <div className="h-14 bg-orange-600 rounded-2xl flex items-center justify-between px-6 text-white shadow-xl relative overflow-hidden group">
                                    <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
                                    <span className="text-[10px] font-black uppercase tracking-widest relative z-10 flex items-center gap-2"><Fingerprint size={16} /> Identity Verified</span>
                                    <Badge className="bg-white/20 border-none text-white text-[8px] font-black relative z-10">Active Gateway</Badge>
                                </div>
                            </div>
                        </div>
                    </StatSection>

                    {/* COMMUNICATION MODULE */}
                    <StatSection title="Notification Preferences (Email / SMS / In-app)">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <PreferenceNode icon={<Mail className="text-blue-600" />} label="Email Notification" active />
                            <PreferenceNode icon={<Smartphone className="text-green-600" />} label="Mobile SMS Link" active />
                            <PreferenceNode icon={<Globe className="text-purple-600" />} label="In-App Control" active />
                        </div>
                    </StatSection>

                    {/* FINAL COMMIT FOOTER */}
                    <div className="flex justify-end pt-10 border-t border-slate-100 mt-12">
                        <Button className="h-16 px-12 rounded-[28px] bg-slate-950 text-white font-black uppercase tracking-[0.2em] text-[11px] shadow-2xl hover:bg-black transition-all gap-3 group">
                            Update Authority Profile <Save size={18} className="text-orange-400 group-hover:scale-110 transition-transform" />
                        </Button>
                    </div>

                </div>
            </div>
        </div>
    );
}

/* UI UTILITIES */

function StatSection({ title, children }: any) {
    return (
        <Card className="rounded-[44px] border-slate-200 bg-white shadow-sm overflow-hidden group hover:border-orange-100 transition-all duration-500">
            <CardHeader className="p-8 border-b border-slate-50 bg-slate-50/30">
                <CardTitle className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 flex items-center gap-3">
                    <div className="h-1.5 w-1.5 rounded-full bg-orange-600" /> {title}
                </CardTitle>
            </CardHeader>
            <CardContent className="p-10">{children}</CardContent>
        </Card>
    )
}

function DataField({ label, icon, defaultValue }: any) {
    return (
        <div className="space-y-3 group">
            <label className="text-[10px] font-black uppercase text-slate-400 ml-1 tracking-widest leading-none">{label}</label>
            <div className="relative">
                {icon && <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-orange-600 transition-colors">{React.cloneElement(icon as React.ReactElement, {})}</div>}
                <Input defaultValue={defaultValue} className={`h-16 rounded-2xl bg-slate-50 border font-bold text-slate-800 shadow-inner px-6 ${icon ? 'pl-12' : ''} focus-visible:ring-2 focus-visible:ring-orange-600 transition-all`} />
            </div>
        </div>
    )
}

function PreferenceNode({ icon, label, active }: any) {
    return (
        <div className={`p-6 rounded-[32px] border-2 transition-all cursor-pointer flex flex-col justify-between h-36 ${active ? 'bg-orange-50/30 border-orange-200' : 'bg-slate-50 border-transparent grayscale'}`}>
            <div className="flex justify-between items-start">
                <div className="h-10 w-10 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-slate-100">{icon}</div>
                <Switch defaultChecked={active} className="data-[state=checked]:bg-orange-600 scale-110 shadow-sm" />
            </div>
            <p className="text-[10px] font-black text-orange-950 uppercase tracking-widest leading-none">{label}</p>
        </div>
    )
}