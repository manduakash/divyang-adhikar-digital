// app/dashboard/ndma/profile/page.tsx
"use client";
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
    ShieldAlert, Building2, MapPin, Mail, Phone,
    UserCircle, Users, Bell, Save, CheckCircle2,
    Briefcase, Activity, AlertTriangle, RadioTower
} from "lucide-react";

export default function NDMAProfilePage() {
    // Auto-calculated completion percentage
    const profileCompletion = 100;

    return (
        <div className="space-y-8 animate-in fade-in duration-1000 pb-20 font-sans selection:bg-orange-100">

            {/* PAGE HEADER */}
            <div className="flex flex-col xl:flex-row justify-between items-start xl:items-end gap-6 relative">
                <div className="space-y-2">
                    <div className="inline-flex items-center gap-2 bg-orange-50 text-orange-700 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border-2 border-orange-200">
                        <ShieldAlert size={14} className="animate-pulse" /> Configuration & Identity
                    </div>
                    <h1 className="text-5xl font-black text-slate-800 tracking-tighter uppercase leading-none">Authority Profile</h1>
                    <p className="text-slate-500 font-medium text-lg italic underline underline-offset-8 decoration-orange-200">
                        Defines the national authority context for PwD-inclusive disaster management.
                    </p>
                </div>
                <div className="flex gap-4">
                    <Button className="h-14 px-8 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white font-black uppercase tracking-widest text-[10px] shadow-xl hover:shadow-[0_0_20px_theme(colors.orange.400)] transition-all gap-2 group border-none">
                        <Save size={16} /> Save Configuration
                    </Button>
                </div>
            </div>

            {/* COMPLETION METRICS CARD - VIBRANT GRADIENT */}
            <Card className="rounded-[32px] border-none shadow-xl overflow-hidden bg-white">
                <div className="p-8 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 text-white relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 border-b-4 border-emerald-300">
                    <div className="absolute inset-0 opacity-50 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/diagmonds.png')] bg-fixed" />

                    <div className="relative z-10 flex items-center gap-6 w-full md:w-1/2">
                        <div className="h-16 w-16 rounded-3xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center shadow-lg shrink-0">
                            <Activity size={28} className="text-white drop-shadow-md" />
                        </div>
                        <div className="space-y-2 w-full">
                            <div className="flex justify-between items-end">
                                <span className="text-[10px] font-black text-emerald-50 uppercase tracking-[0.2em]">Profile Readiness</span>
                                <span className="text-3xl font-black text-white leading-none drop-shadow-sm">{profileCompletion}%</span>
                            </div>
                            <Progress value={profileCompletion} className="h-2 bg-black/20 [&>div]:bg-white shadow-inner" />
                        </div>
                    </div>

                    <div className="relative z-10 flex flex-wrap gap-4 text-[10px] font-black uppercase tracking-widest text-emerald-50">
                        <div className="flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-3 rounded-2xl border border-white/30 shadow-sm">
                            <CheckCircle2 size={16} className="text-white" /> Authority Identity
                        </div>
                        <div className="flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-3 rounded-2xl border border-white/30 shadow-sm">
                            <CheckCircle2 size={16} className="text-white" /> Role Mapping
                        </div>
                        <div className="flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-3 rounded-2xl border border-white/30 shadow-sm">
                            <CheckCircle2 size={16} className="text-white" /> Network Alerts
                        </div>
                    </div>
                </div>
            </Card>

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">

                {/* LEFT COLUMN: IDENTITY & FRAMEWORK (Spans 2 columns) */}
                <div className="xl:col-span-2 space-y-8">

                    <SectionCard title="Authority / Division Details" icon={<Building2 />} color="text-blue-600" border="border-blue-200">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <FormField label="Authority Name" required className="md:col-span-2">
                                <input type="text" defaultValue="NDMA – PwD Integration Cell" className="form-input-apex text-indigo-700 font-mono" readOnly />
                            </FormField>
                            <FormField label="Official Email ID(s)" required>
                                <div className="relative">
                                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-indigo-300" />
                                    <input type="email" defaultValue="pwd-cell@ndma.gov.in" className="form-input-apex pl-12" />
                                </div>
                            </FormField>
                            <FormField label="Official Contact Numbers" required>
                                <div className="relative">
                                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-indigo-300" />
                                    <input type="text" defaultValue="+91 11 2670 1700" className="form-input-apex pl-12" />
                                </div>
                            </FormField>
                            <FormField label="National Headquarters Address" required className="md:col-span-2">
                                <div className="relative">
                                    <MapPin className="absolute left-4 top-4 h-4 w-4 text-indigo-300" />
                                    <textarea rows={3} defaultValue="NDMA Bhawan, A-1, Safdarjung Enclave, New Delhi - 110029" className="form-input-apex pl-12 py-3 resize-none" />
                                </div>
                            </FormField>
                        </div>
                    </SectionCard>

                    <SectionCard title="Network Notification Preferences" icon={<RadioTower />} color="text-orange-600" border="border-orange-200">
                        <div className="space-y-4">
                            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest leading-relaxed mb-6">
                                Configure how national directives, early warnings, and SOP updates are broadcasted to SDMAs and DDMAs.
                            </p>
                            <ToggleRow
                                title="System In-App Alerts (Dashboard)"
                                desc="Push critical updates, meeting notices, and document sync alerts directly to connected State dashboards."
                                active={true}
                                color="emerald"
                            />
                            <div className="h-[1px] w-full bg-slate-100" />
                            <ToggleRow
                                title="Official Email Broadcasts"
                                desc="Forward auto-generated advisories, SOPs, and post-disaster guidelines to mapped official State emails."
                                active={true}
                                color="blue"
                            />
                            <div className="h-[1px] w-full bg-slate-100" />
                            <ToggleRow
                                title="SMS / Early Warning Triggers"
                                desc="Send urgent early warning flashes (PwD layer) and emergency evacuation alerts to Nodal Officers via SMS."
                                active={false}
                                color="red"
                            />
                        </div>
                    </SectionCard>

                </div>

                {/* RIGHT COLUMN: LEADERSHIP & ROLE MAPPING */}
                <div className="space-y-8">

                    <SectionCard title="National Command Leadership" icon={<UserCircle />} color="text-purple-600" border="border-purple-200">
                        <div className="space-y-6">
                            <FormField label="Chairperson / Vice Chairperson" required>
                                <div className="p-4 rounded-2xl border-2 border-slate-100 bg-slate-50/50 space-y-3 shadow-inner">
                                    <input type="text" defaultValue="Hon'ble Prime Minister" className="form-input-apex bg-white" placeholder="Full Name" />
                                    <input type="text" defaultValue="Chairperson, NDMA" className="form-input-apex bg-white" placeholder="Designation" readOnly />
                                </div>
                            </FormField>

                            <FormField label="Members / Advisors (PwD-related)" required>
                                <div className="p-4 rounded-2xl border-2 border-slate-100 bg-slate-50/50 space-y-3 shadow-inner">
                                    <input type="text" defaultValue="Shri Kamal Kishore" className="form-input-apex bg-white" placeholder="Full Name" />
                                    <input type="text" defaultValue="Member / Advisor (PwD Integration)" className="form-input-apex bg-white" placeholder="Designation" />
                                </div>
                            </FormField>

                            <FormField label="Secretariat / Division Details">
                                <textarea rows={2} defaultValue="Joint Secretary (Mitigation)&#10;Director (PwD Inclusion Cell)" className="form-input-apex resize-none text-xs leading-relaxed" placeholder="List key secretariat staff" />
                            </FormField>
                        </div>
                    </SectionCard>

                    <SectionCard title="System Role Mapping" icon={<Briefcase />} color="text-teal-600" border="border-teal-200">
                        <div className="space-y-4">
                            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest leading-relaxed mb-4">
                                Map system accounts to statutory roles for access control and authentication logic.
                            </p>

                            <div className="space-y-3">
                                <RoleMappingRow account="USR-NDMA-001" role="Chairperson" />
                                <RoleMappingRow account="USR-NDMA-042" role="Member" />
                                <RoleMappingRow account="USR-PWD-119" role="Advisor" />
                                <RoleMappingRow account="USR-SEC-882" role="Secretariat" />
                                <RoleMappingRow account="SYS-AUD-009" role="View-only" />
                            </div>

                            <Button variant="outline" className="w-full mt-4 border-2 border-dashed border-teal-200 text-teal-600 hover:text-white hover:bg-teal-500 hover:border-teal-500 rounded-2xl h-14 text-[10px] font-black uppercase tracking-widest transition-all shadow-sm">
                                + Map New Account
                            </Button>
                        </div>
                    </SectionCard>

                </div>
            </div>
        </div>
    );
}

/* UI SUB-COMPONENTS */

function SectionCard({ title, icon, color, border, children }: any) {
    return (
        <Card className={`rounded-[32px] border-2 shadow-lg bg-white overflow-hidden group hover:shadow-xl transition-all duration-500 border-slate-100 hover:${border}`}>
            <CardHeader className="p-8 border-b-2 border-slate-50 relative overflow-hidden bg-blue-800/80">
                <div className="absolute inset-0 opacity-[0.8] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/straws.png')]" />
                <div className="flex items-center gap-4 relative z-10">
                    <div className={`h-12 w-12 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center ${color} group-hover:scale-110 transition-transform`}>
                        {React.cloneElement(icon, { size: 24 })}
                    </div>
                    <CardTitle className={`text-sm font-black uppercase tracking-[0.2em] text-slate-100`}>{title}</CardTitle>
                </div>
            </CardHeader>
            <CardContent className="p-8 relative overflow-hidden">
                <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/topography.png')]" />
                <div className="relative z-10">{children}</div>
            </CardContent>
        </Card>
    );
}

function FormField({ label, required, children, className }: any) {
    return (
        <div className={`space-y-2 ${className}`}>
            <label className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-600 ml-1">
                {label} {required && <span className="text-red-500">*</span>}
            </label>
            {children}
        </div>
    );
}

function ToggleRow({ title, desc, active, color }: any) {
    const [isOn, setIsOn] = useState(active);

    // Dynamic color classes based on the prop
    const bgColors = {
        emerald: 'bg-emerald-500',
        blue: 'bg-blue-500',
        red: 'bg-red-500',
        orange: 'bg-orange-500'
    };

    const activeColor = bgColors[color as keyof typeof bgColors] || 'bg-indigo-500';

    return (
        <div className="flex items-center justify-between gap-6 p-4 rounded-2xl border border-transparent hover:border-slate-100 hover:bg-slate-50/50 transition-colors cursor-pointer group" onClick={() => setIsOn(!isOn)}>
            <div className="space-y-1">
                <h4 className="text-xs font-black text-slate-800 uppercase tracking-widest">{title}</h4>
                <p className="text-[10px] font-bold text-slate-500 leading-relaxed pr-8">{desc}</p>
            </div>
            <button
                className={`w-12 h-6 rounded-full transition-colors relative shrink-0 shadow-inner ${isOn ? activeColor : 'bg-slate-200'}`}
            >
                <div className={`h-4 w-4 rounded-full bg-white absolute top-1 transition-transform shadow-sm ${isOn ? 'translate-x-7' : 'translate-x-1'}`} />
            </button>
        </div>
    )
}

function RoleMappingRow({ account, role }: any) {
    return (
        <div className="flex items-center justify-between p-4 rounded-2xl border border-slate-100 bg-white hover:border-teal-200 hover:shadow-md transition-all group">
            <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-xl bg-slate-50 flex items-center justify-center border border-slate-100 group-hover:bg-teal-50 group-hover:border-teal-100 transition-colors">
                    <Users size={16} className="text-slate-400 group-hover:text-teal-600 transition-colors" />
                </div>
                <div>
                    <p className="text-xs font-black text-slate-800 font-mono tracking-tight">{account}</p>
                    <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">System ID</p>
                </div>
            </div>
            <select className="bg-slate-50 border border-slate-200 text-slate-700 text-[10px] font-black uppercase tracking-widest rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-teal-500 cursor-pointer appearance-none text-right shadow-inner hover:bg-white transition-colors">
                <option value={role} selected>{role}</option>
                <option value="Chairperson">Chairperson</option>
                <option value="Member">Member</option>
                <option value="Advisor">Advisor</option>
                <option value="Secretariat">Secretariat</option>
                <option value="View-only">View-only</option>
            </select>
        </div>
    );
}

/* 
Add this to your globals.css to ensure the inputs look exactly as intended:

@layer components {
  .form-input-apex {
    @apply w-full border-2 border-slate-100 bg-white rounded-2xl px-5 py-4 text-sm font-bold text-slate-800 focus:outline-none focus:border-indigo-400 focus:ring-4 focus:ring-indigo-50 transition-all shadow-sm placeholder:text-slate-400 placeholder:font-bold;
  }
}
*/