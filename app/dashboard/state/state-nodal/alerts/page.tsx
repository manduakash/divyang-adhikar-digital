// app/dashboard/state/alerts/page.tsx
"use client";
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
    Bell, ShieldAlert, Globe, Map,
    FileWarning, Timer, Scale, Building2,
    AlertTriangle, Sparkles, Send, Trash2,
    History, ArrowRight, CheckCircle2, Landmark,
    Gavel, Radio, MailWarning,
    Accessibility
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

type StateAlertCategory = 'ALL' | 'REPORTING' | 'PERFORMANCE' | 'RETURNS' | 'ACCESS' | 'PROSECUTION';

export default function StateAlertsPage() {
    const [filter, setFilter] = useState<StateAlertCategory>('ALL');

    return (
        <div className="space-y-10 animate-in fade-in duration-700 pb-20 font-sans">

            {/* 1. APEX URGENCY HEADER */}
            <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-6 bg-white p-10 rounded-[40px] border border-slate-200 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 p-10 opacity-[0.03] pointer-events-none">
                    <Bell size={180} className="text-purple-600" />
                </div>
                <div className="space-y-2 relative z-10">
                    <div className="inline-flex items-center gap-2 bg-red-50 text-red-700 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border border-red-100">
                        <Radio size={14} className="animate-pulse" /> Statewide Risk Monitor Active
                    </div>
                    <h1 className="text-4xl font-black text-slate-900 tracking-tighter uppercase leading-none">Alerts & Reminders</h1>
                    <p className="text-slate-500 font-medium italic">Consolidated defaults and statutory breaches requiring State-level intervention.</p>
                </div>
                <div className="flex gap-4 relative z-10">
                    <Button variant="outline" className="h-16 px-8 rounded-2xl border-slate-200 font-bold bg-white hover:bg-slate-50 gap-2">
                        <History size={20} className="text-slate-400" /> Resolution Log
                    </Button>
                    <Button className="h-16 px-10 rounded-2xl bg-purple-700 text-white font-black uppercase tracking-widest text-xs shadow-2xl shadow-purple-200 gap-2 hover:bg-purple-900 transition-all">
                        <ShieldAlert size={20} /> Statewide Show-Cause
                    </Button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

                {/* 2. STATUTORY CATEGORY FILTERS (Based on State Requirements) */}
                <div className="lg:col-span-1 space-y-3 sticky top-8 h-fit">
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-4 mb-4">Urgency Tiers</p>
                    <AlertTab active={filter === 'ALL'} onClick={() => setFilter('ALL')} label="All State Alerts" count="42" icon={<Bell size={16} />} />
                    <AlertTab active={filter === 'REPORTING'} onClick={() => setFilter('REPORTING')} label="District Reporting Defaults" count="08" icon={<Map size={16} />} color="border-red-600" />
                    <AlertTab active={filter === 'PERFORMANCE'} onClick={() => setFilter('PERFORMANCE')} label="Low-Performing Clusters" count="05" icon={<Landmark size={16} />} color="border-orange-500" />
                    <AlertTab active={filter === 'RETURNS'} onClick={() => setFilter('RETURNS')} label="Returns Hub Overdue" count="12" icon={<Building2 size={16} />} color="border-blue-600" />
                    <AlertTab active={filter === 'ACCESS'} onClick={() => setFilter('ACCESS')} label="Access Compliance SLA" count="10" icon={<Accessibility size={16} />} color="border-purple-600" />
                    <AlertTab active={filter === 'PROSECUTION'} onClick={() => setFilter('PROSECUTION')} label="Stagnant Prosecution" count="07" icon={<Scale size={16} />} color="border-slate-900" />

                    {/* AI RISK PANEL */}
                    <Card className="mt-8 rounded-[32px] border-2 bg-slate-900 text-white p-8 shadow-2xl relative overflow-hidden group">
                        <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/circuit-board.png')]" />
                        <div className="relative z-10 space-y-6">
                            <div className="flex items-center gap-3">
                                <Sparkles size={20} className="text-purple-400" />
                                <h3 className="text-[10px] font-black uppercase tracking-widest text-purple-400">Policy Intelligence</h3>
                            </div>
                            <p className="text-sm font-bold leading-tight uppercase">Aggregation Threshold Breach</p>
                            <p className="text-[10px] font-medium text-slate-400 leading-relaxed italic">
                                "Districts <b>Agra</b> and <b>Varanasi</b> have failed report submission for two consecutive cycles. Policy correction recommended."
                            </p>
                        </div>
                    </Card>
                </div>

                {/* 3. DYNAMIC ALERTS FEED (Statewide Aggregation) */}
                <div className="lg:col-span-3 space-y-6">

                    {/* ALERT: DISTRICTS NOT SUBMITTING REPORTS */}
                    <StateAlertCard
                        category="Reporting Default"
                        title="Statutory Report Submission Failure"
                        target="District Agra • District Varanasi"
                        time="Deadline Crossed: 12 Days"
                        severity="red"
                        desc="Mandated monthly consolidated reports for Q3 have not been uploaded by the District Magistrates' offices. Directives pending."
                        icon={<Map />}
                        action="Summon DMs"
                    />

                    {/* ALERT: PERSISTENT LOW PERFORMANCE */}
                    <StateAlertCard
                        category="Performance Threshold"
                        title="Persistent Low-Performing District Cluster"
                        target="Sunderbans West Region"
                        time="3rd Consecutive Fail"
                        severity="orange"
                        desc="District composite compliance score remains below 45% despite statewide directives. Identifying systemic resource gaps."
                        icon={<Landmark />}
                        action="Review Performance"
                    />

                    {/* ALERT: RETURNS OVERDUE (Hub Level) */}
                    <StateAlertCard
                        category="Returns Hub"
                        title="Employment Exchange Returns Overdue cluster"
                        target="Ghaziabad Industrial Hub"
                        time="840 Units Defaulting"
                        severity="blue"
                        desc="Major industrial zone in Ghaziabad shows a 40% shortfall in statutory ER-I/II returns. Local Exchange enforcement needed."
                        icon={<Building2 />}
                        action="Direct Employment Hub"
                    />

                    {/* ALERT: ACCESS NON-COMPLIANCE BEYOND TIMELINE */}
                    <StateAlertCard
                        category="Accessibility SLA"
                        title="Accessibility Non-Compliance Beyond Timeline"
                        target="Medical Education Dept • Lucknow Hub"
                        time="SLA Breach: 45 Days"
                        severity="purple"
                        desc="14 Government Establishments have failed to comply with Section 44 physical access directives issued by the State Secretary."
                        icon={<Accessibility />}
                        action="Enforce Directive"
                    />

                    {/* ALERT: LONG-PENDING PROSECUTION */}
                    <StateAlertCard
                        category="Judicial Stagnation"
                        title="Long-Pending Prosecution Case Cluster"
                        target="Meerut District Courts"
                        time="Stagnant: 180+ Days"
                        severity="slate"
                        desc="08 prosecution files under Section 92 have seen no stage movement in 6 months. Briefing required with District Special PP."
                        icon={<Scale />}
                        action="Audit Legal Files"
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
            className={`w-full flex items-center justify-between p-5 rounded-[24px] transition-all group border-l-4 ${active
                ? 'bg-purple-700 text-white shadow-xl translate-x-1'
                : `bg-white text-slate-500 hover:bg-slate-50 ${color || 'border-transparent'}`
                }`}
        >
            <div className="flex items-center gap-3">
                <div className={`${active ? 'text-purple-300' : 'text-slate-300 group-hover:text-purple-600'}`}>{icon}</div>
                <span className="text-[10px] font-black uppercase tracking-widest">{label}</span>
            </div>
            <span className={`text-[10px] font-black px-2.5 py-0.5 rounded-lg ${active ? 'bg-white/10 text-white' : 'bg-slate-100 text-slate-600'}`}>{count}</span>
        </button>
    )
}

function StateAlertCard({ category, title, target, time, desc, severity, icon, action }: any) {
    const variants: any = {
        red: { border: 'border-l-red-600', bg: 'bg-red-50/50', accent: 'text-red-600' },
        orange: { border: 'border-l-orange-500', bg: 'bg-orange-50/30', accent: 'text-orange-600' },
        blue: { border: 'border-l-blue-600', bg: 'bg-blue-50/30', accent: 'text-blue-600' },
        purple: { border: 'border-l-purple-600', bg: 'bg-purple-50/30', accent: 'text-purple-600' },
        slate: { border: 'border-l-slate-900', bg: 'bg-slate-50/50', accent: 'text-slate-900' }
    };

    return (
        <Card className={`rounded-[40px] border border-slate-200 border-l-[14px] ${variants[severity].border} ${variants[severity].bg} shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden group`}>
            <CardContent className="p-10">
                <div className="flex flex-col xl:flex-row justify-between items-start gap-8">
                    <div className="flex-1 space-y-5">
                        <div className="flex items-center gap-3">
                            <div className="p-2.5 rounded-2xl bg-white shadow-sm border border-slate-100 text-slate-400 group-hover:text-slate-900 transition-colors">
                                {React.cloneElement(icon, { size: 20 })}
                            </div>
                            <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.25em]">{category} ALERT</span>
                        </div>
                        <div className="space-y-1">
                            <h3 className="text-2xl font-black text-slate-900 tracking-tight uppercase leading-tight">{title}</h3>
                            <p className={`text-xs font-black uppercase tracking-widest flex items-center gap-2 mt-3 ${variants[severity].accent}`}>
                                <Map size={14} /> {target}
                            </p>
                        </div>
                        <p className="text-sm font-medium text-slate-600 leading-relaxed max-w-4xl">{desc}</p>
                    </div>

                    <div className="flex flex-col items-end gap-8 h-full justify-between min-w-[240px]">
                        <div className="text-right">
                            <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Statutory Window</p>
                            <p className="text-xl font-black uppercase mt-1 text-slate-900">{time}</p>
                        </div>
                        <div className="flex gap-2">
                            <Button variant="ghost" size="icon" className="h-12 w-12 rounded-2xl bg-white border border-slate-100 text-slate-400 hover:text-red-500 transition-all shadow-sm"><Trash2 size={20} /></Button>
                            <Button className="h-12 px-8 rounded-2xl bg-slate-950 text-white font-black uppercase tracking-widest text-[10px] shadow-lg flex gap-2 hover:bg-black transition-all">
                                {action} <ArrowRight size={14} className="text-purple-400" />
                            </Button>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}