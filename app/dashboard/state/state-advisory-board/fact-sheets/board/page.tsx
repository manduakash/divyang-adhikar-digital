// app/dashboard/sab/fact-sheets/board/page.tsx
"use client";
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
    Landmark, Users, Calendar, ShieldCheck,
    ListChecks, History, Printer, Download,
    ArrowUpRight, Globe, CheckCircle2,
    Activity, BadgeCheck, FileText, Clock,
    MapPin, Sparkles, UserPlus
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function BoardFactSheet() {
    return (
        <div className="space-y-10 animate-in fade-in duration-1000 pb-20 font-sans selection:bg-emerald-100">

            {/* 1. FACT SHEET HEADER - LIGHT CARBON FIBER THEME */}
            <Card className="rounded-[40px] border-none bg-gradient-to-r from-emerald-500 via-teal-500 to-blue-500 p-1 relative overflow-hidden shadow-2xl shadow-emerald-200">
                <div className="absolute inset-0 opacity-15 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />

                <div className="bg-white rounded-[38px] p-10 relative z-10 flex flex-col xl:flex-row justify-between items-start xl:items-center gap-8">
                    <div className="flex flex-col md:flex-row gap-8 items-center">
                        <div className="h-20 w-20 bg-emerald-50 rounded-3xl flex items-center justify-center text-emerald-600 shadow-inner border border-emerald-100 group hover:scale-105 transition-transform duration-500">
                            <Landmark size={32} />
                        </div>
                        <div className="space-y-3">
                            <div className="space-y-1">
                                <h1 className="text-4xl font-black text-slate-900 tracking-tighter uppercase leading-none">Board Fact Sheet</h1>
                                <p className="text-[10px] font-black text-emerald-600 uppercase tracking-[0.3em]">State Statutory Aggregator</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <Badge className="bg-emerald-100 text-emerald-700 border-none font-black text-[9px] px-3 py-1 uppercase tracking-widest">Formal Snapshot</Badge>
                                <div className="flex items-center gap-1.5 text-slate-400">
                                    <Clock size={12} />
                                    <span className="text-[9px] font-bold uppercase tracking-widest">Last Data Sync: 14 Oct, 09:42 AM</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-4 relative z-10">
                        <Button variant="outline" className="h-14 px-8 rounded-2xl border-slate-200 font-black uppercase tracking-widest text-[10px] bg-white gap-2 shadow-sm hover:bg-slate-50 transition-all">
                            <Download size={18} className="text-emerald-600" /> Export Data
                        </Button>
                        <Button className="h-14 px-10 rounded-2xl bg-slate-900 text-white font-black uppercase tracking-widest text-[10px] shadow-2xl hover:bg-black transition-all gap-2 group">
                            <Printer size={18} /> Print Fact Sheet
                        </Button>
                    </div>
                </div>
            </Card>

            {/* 3. BOARD FUNCTIONING METRICS GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-8">

                {/* MEMBERSHIP HUB */}
                <MetricCard title="Board Composition" gradient="from-blue-500 to-indigo-600" icon={<Users />}>
                    <StatRow label="Total Members" val="28" mono />
                    <StatRow label="Vacant Positions (if any)" val="04" alert />
                </MetricCard>

                {/* MEETING ACTIVITY HUB */}
                <MetricCard title="Meetings & Sessions" gradient="from-emerald-500 to-teal-600" icon={<Calendar />}>
                    <StatRow label="Meetings Held (Current Year)" val="12" success />
                    <StatRow label="Meetings Scheduled" val="02" />
                </MetricCard>

                {/* IMPACT HUB */}
                <MetricCard title="Board Recommendations" gradient="from-purple-500 to-indigo-700" icon={<BadgeCheck />}>
                    <StatRow label="Total Recommendations Issued" val="45" success />
                    <StatRow label="Action Points Pending" val="18" warning />
                </MetricCard>

                {/* TIMELINE HUB */}
                <MetricCard title="Statutory Timeline" gradient="from-orange-400 to-amber-600" icon={<History />}>
                    <StatRow label="Last Meeting Date" val="14 Oct 24" mono />
                    <StatRow label="Next Scheduled Meeting Date" val="12 Nov 24" mono success />
                </MetricCard>

            </div>

            {/* 4. PERFORMANCE ACTIONS FOOTER */}
            <footer className="pt-12 border-t border-slate-200">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex flex-wrap justify-center gap-10">
                        <FooterLink label="View Board Registry" />
                        <FooterLink label="Action Point Tracker" />
                        <FooterLink label="Member Attendance Hub" />
                    </div>
                    <div className="flex items-center gap-3 bg-slate-900 px-8 py-4 rounded-[28px] text-white shadow-2xl relative overflow-hidden group">
                        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
                        <Sparkles size={18} className="text-emerald-400 relative z-10 animate-pulse" />
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] relative z-10">Board Sync Mode: Verified Active</span>
                    </div>
                </div>
            </footer>
        </div>
    );
}

/* UI SUB-COMPONENTS */

function MetricCard({ title, icon, gradient, children }: any) {
    return (
        <Card className="rounded-[44px] border-slate-200 bg-white shadow-sm overflow-hidden group hover:shadow-2xl transition-all duration-500 flex flex-col">
            <CardHeader className={`p-8 bg-gradient-to-r ${gradient} text-white relative overflow-hidden`}>
                {/* CARBON FIBER HEADER TEXTURE */}
                <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
                <div className="flex items-center gap-4 relative z-10">
                    <div className="h-10 w-10 px-2 rounded-2xl bg-white/20 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        {icon}
                    </div>
                    <CardTitle className="text-[11px] font-black uppercase tracking-[0.3em] leading-none">{title}</CardTitle>
                </div>
            </CardHeader>
            <CardContent className="p-10 flex-1 space-y-6 relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
                <div className="relative z-10 space-y-6">
                    {children}
                </div>
            </CardContent>
        </Card>
    )
}

function StatRow({ label, val, alert, success, warning, mono }: any) {
    const colorClass = alert ? 'text-red-600 underline decoration-red-100 decoration-2' : success ? 'text-emerald-600' : warning ? 'text-orange-500' : 'text-slate-900';
    return (
        <div className="flex justify-between items-end group/row cursor-default">
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest group-hover/row:text-emerald-600 transition-colors">{label}</p>
            <p className={`text-2xl font-black tracking-tighter leading-none ${colorClass} ${mono ? 'font-mono' : ''}`}>{val}</p>
        </div>
    )
}

function FooterLink({ label }: any) {
    return (
        <button className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-emerald-600 transition-all flex items-center gap-2 group">
            {label} <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </button>
    )
}