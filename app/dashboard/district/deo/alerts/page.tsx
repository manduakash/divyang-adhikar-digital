// app/dashboard/deo/alerts/page.tsx
"use client";
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
    Bell, AlertCircle, Clock, School, Gavel,
    UserX, Accessibility, FileWarning, ArrowRight,
    Filter, Search, ShieldAlert, Sparkles, Send,
    Trash2, MailWarning, GraduationCap, History
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

type DEOAlertCategory = 'ALL' | 'ADMISSION' | 'ACCOMMODATION' | 'ACCESSIBILITY' | 'DIRECTIONS' | 'REPEATS';

export default function DEOAlertsPage() {
    const [filter, setFilter] = useState<DEOAlertCategory>('ALL');

    return (
        <div className="space-y-8 animate-in fade-in duration-700 pb-20">

            {/* 1. URGENCY HEADER (Inclusive Education Context) */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 bg-white p-8 rounded-[40px] border border-slate-200 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 p-10 opacity-5">
                    <Bell size={120} className="text-indigo-600" />
                </div>
                <div className="relative z-10 space-y-1">
                    <h1 className="text-3xl font-black text-slate-900 tracking-tight uppercase leading-none">Education Statutory Alerts</h1>
                    <p className="text-slate-500 font-medium">Critical defaults requiring DEO intervention in Inclusive Education mandates.</p>
                </div>
                <div className="flex gap-3 relative z-10">
                    <Button variant="outline" className="h-12 px-6 rounded-2xl border-slate-200 font-bold gap-2">
                        <Search size={16} /> Registry Filter
                    </Button>
                    <Button className="h-12 px-8 rounded-2xl bg-indigo-600 text-white font-black uppercase tracking-widest text-[10px] shadow-xl shadow-indigo-100 gap-2 hover:bg-indigo-700">
                        <ShieldAlert size={16} /> Issue Bulk Directives
                    </Button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

                {/* 2. ALERT TYPE FILTER PANEL (Section 6 Mandated List) */}
                <div className="lg:col-span-1 space-y-3 sticky top-8 h-fit">
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-4 mb-4">Default Categories</p>
                    <AlertTab active={filter === 'ALL'} onClick={() => setFilter('ALL')} label="All Edu Alerts" count="18" icon={<Bell size={16} />} />

                    <AlertTab active={filter === 'ADMISSION'} onClick={() => setFilter('ADMISSION')} label="Denial of Admission" count="04" icon={<UserX size={16} />} color="border-red-600" />

                    <AlertTab active={filter === 'ACCOMMODATION'} onClick={() => setFilter('ACCOMMODATION')} label="Accommodation Delays" count="05" icon={<History size={16} />} color="border-orange-500" />

                    <AlertTab active={filter === 'ACCESSIBILITY'} onClick={() => setFilter('ACCESSIBILITY')} label="School Access Defaults" count="03" icon={<Accessibility size={16} />} color="border-indigo-500" />

                    <AlertTab active={filter === 'DIRECTIONS'} onClick={() => setFilter('DIRECTIONS')} label="Pending Compliance" count="04" icon={<Gavel size={16} />} color="border-purple-600" />

                    <AlertTab active={filter === 'REPEATS'} onClick={() => setFilter('REPEATS')} label="Repeat Offenders" count="02" icon={<School size={16} />} color="border-slate-900" />

                    <Card className="mt-8 rounded-3xl border-indigo-100 bg-indigo-50/50 p-6 text-center">
                        <Sparkles size={24} className="text-indigo-600 mx-auto mb-2" />
                        <p className="text-[10px] font-black text-indigo-900 uppercase tracking-widest">Inclusion Insight</p>
                        <p className="text-[10px] text-indigo-700 font-bold mt-2 leading-relaxed italic">
                            "High concentration of admission denials detected in Private Aided schools in Block-B."
                        </p>
                    </Card>
                </div>

                {/* 3. DYNAMIC ALERTS LIST */}
                <div className="lg:col-span-3 space-y-6">

                    {/* ALERT: DENIAL OF ADMISSION (Section 6.1) */}
                    <AlertCard
                        type="Section 16"
                        title="Denial of Admission Complaint Pending"
                        institution="Green Valley International Academy"
                        time="SLA: Overdue 48h"
                        desc="Grievance #GRV-EDU-992 filed by parent regarding refusal of entry based on disability severity. Immediate DEO hearing required."
                        severity="critical"
                        actionLabel="Summon Principal"
                        icon={<UserX />}
                    />

                    {/* ALERT: ACCOMMODATION DELAY (Section 6.2) */}
                    <AlertCard
                        type="Rule 15"
                        title="Reasonable Accommodation Not Provided"
                        institution="Modern Aided High School"
                        time="12 Days Since Request"
                        desc="Scribe and Reader request for board exams not finalized. Matter pending beyond statutory provision window."
                        severity="warning"
                        actionLabel="Enforce Provision"
                        icon={<History />}
                    />

                    {/* ALERT: ACCESS NON-COMPLIANCE (Section 6.3) */}
                    <AlertCard
                        type="Infrastructure"
                        title="Structural Access Non-Compliance"
                        institution="Govt Primary School - Sector 4"
                        time="Inspection: 12-Oct"
                        desc="Site audit confirmed that the newly constructed wing lacks mandated tactile flooring and ramp access."
                        severity="impending"
                        actionLabel="Issue Rectification"
                        icon={<Accessibility />}
                    />

                    {/* ALERT: DIRECTIONS PENDING (Section 6.4) */}
                    <AlertCard
                        type="Statutory Order"
                        title="Direction Compliance Pending (DIR-EDU-041)"
                        institution="City Tech Institute"
                        time="Deadline: Tomorrow"
                        desc="Binding directive to install digital screen-reader software in computer labs has not received a compliance report."
                        severity="impending"
                        actionLabel="Check Status"
                        icon={<Gavel />}
                    />

                    {/* ALERT: REPEAT DEFAULTING (Section 6.5) */}
                    <AlertCard
                        type="Enforcement"
                        title="Repeat Defaulting Institution: Section 89 Risk"
                        institution="Elite Prep Academy"
                        time="3rd Statutory Failure"
                        desc="Institution has failed to respond to three consecutive accessibility audits. Matter ready for referral to Special PP."
                        severity="critical"
                        actionLabel="Refer for Prosecution"
                        icon={<School />}
                    />

                </div>
            </div>
        </div>
    );
}

/* UI SUB-COMPONENTS */

function AlertTab({ active, onClick, label, count, icon, color }: any) {
    return (
        <button
            onClick={onClick}
            className={`w-full flex items-center justify-between p-4 rounded-2xl transition-all group border-l-4 ${active
                    ? 'bg-indigo-600 text-white shadow-xl translate-x-1'
                    : `bg-white text-slate-500 hover:bg-slate-50 ${color || 'border-transparent'}`
                }`}
        >
            <div className="flex items-center gap-3">
                <div className={`${active ? 'text-white' : 'text-slate-300 group-hover:text-indigo-600'}`}>{icon}</div>
                <span className="text-[10px] font-black uppercase tracking-widest">{label}</span>
            </div>
            <span className={`text-[10px] font-black px-2 py-0.5 rounded-md ${active ? 'bg-white/10 text-white' : 'bg-slate-100 text-slate-600'}`}>{count}</span>
        </button>
    )
}

function AlertCard({ type, title, institution, time, desc, severity, actionLabel, icon }: any) {
    const borderColors: any = {
        critical: 'border-l-red-600',
        warning: 'border-l-orange-500',
        impending: 'border-l-indigo-600',
    };

    const bgColors: any = {
        critical: 'bg-red-50/30',
        warning: 'bg-orange-50/30',
        impending: 'bg-indigo-50/30',
    }

    return (
        <Card className={`rounded-[32px] border border-slate-200 border-l-[12px] ${borderColors[severity]} ${bgColors[severity]} shadow-sm hover:shadow-md transition-all overflow-hidden`}>
            <CardContent className="p-8">
                <div className="flex flex-col md:flex-row justify-between items-start gap-6">
                    <div className="flex-1 space-y-4">
                        <div className="flex items-center gap-3">
                            <div className={`p-2 rounded-xl bg-white shadow-sm border border-slate-100 ${severity === 'critical' ? 'text-red-600' : 'text-indigo-600'}`}>
                                {React.cloneElement(icon, { size: 18 })}
                            </div>
                            <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">{type} ALERT</span>
                        </div>
                        <div className="space-y-1">
                            <h3 className="text-xl font-black text-slate-900 tracking-tight uppercase leading-tight">{title}</h3>
                            <p className="text-xs font-bold text-indigo-600 uppercase tracking-tighter flex items-center gap-2">
                                <School size={12} /> {institution}
                            </p>
                        </div>
                        <p className="text-sm font-medium text-slate-600 leading-relaxed max-w-2xl">{desc}</p>
                    </div>

                    <div className="flex flex-col items-end gap-6 h-full justify-between">
                        <div className="text-right">
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Timeline Status</p>
                            <p className={`text-sm font-black uppercase mt-1 ${severity === 'critical' ? 'text-red-600 animate-pulse' : 'text-slate-900'}`}>{time}</p>
                        </div>
                        <div className="flex gap-2">
                            <Button variant="ghost" size="icon" className="h-12 w-12 rounded-2xl bg-white border border-slate-100 text-slate-400 hover:text-red-500"><Trash2 size={18} /></Button>
                            <Button className={`h-12 px-6 rounded-2xl font-black uppercase tracking-widest text-[9px] shadow-lg flex gap-2 ${severity === 'critical' ? 'bg-red-600 hover:bg-red-700 text-white' : 'bg-indigo-900 hover:bg-black text-white'
                                }`}>
                                {actionLabel} <Send size={14} />
                            </Button>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}