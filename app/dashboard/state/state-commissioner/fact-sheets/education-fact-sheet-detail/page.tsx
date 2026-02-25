// app/dashboard/scpd/fact-sheets/education/page.tsx
"use client";
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
    School, GraduationCap, Users, ShieldCheck,
    MapPin, Landmark, UserCircle2, Phone,
    Mail, Calendar, Globe, Accessibility,
    Activity, Clock, AlertTriangle, CheckCircle2,
    Printer, Download, History, ArrowUpRight,
    Sparkles, BookOpenCheck, MousePointer2,
    MessageSquare,
    ShieldAlert
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

export default function EducationalFactSheet() {
    return (
        <div className="space-y-10 animate-in fade-in duration-1000 pb-20 font-sans selection:bg-indigo-100">

            {/* INSTITUTION PRIMARY IDENTITY HUB */}
            <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-8 bg-white p-10 rounded-[48px] border border-slate-200 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.05)] relative overflow-hidden">
                {/* Pattern Overlay */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/topography.png')]" />

                <div className="flex flex-col md:flex-row gap-8 relative z-10">
                    <div className="h-24 w-24 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-[32px] flex items-center justify-center text-white shadow-2xl shadow-indigo-200 group hover:rotate-6 transition-transform duration-500">
                        <School size={42} />
                    </div>
                    <div className="space-y-3">
                        <div className="flex items-center gap-3">
                            <h1 className="text-4xl font-black text-slate-900 tracking-tighter uppercase leading-none">City Central University</h1>
                            <Badge className="bg-emerald-100 text-emerald-700 border-none font-black text-[9px] px-3 py-1 uppercase tracking-widest">Active Node</Badge>
                        </div>
                        <div className="flex flex-wrap gap-4 text-[10px] font-black uppercase tracking-widest text-slate-400">
                            <span className="flex items-center gap-1.5"><ShieldCheck size={12} className="text-indigo-600" /> ID: EDU-WB-KOL-992</span>
                            <span className="flex items-center gap-1.5"><Landmark size={12} className="text-indigo-600" /> Type: Govt Aided</span>
                            <span className="flex items-center gap-1.5"><GraduationCap size={12} className="text-indigo-600" /> Category: Higher Education</span>
                            <span className="flex items-center gap-1.5"><MapPin size={12} className="text-indigo-600" /> District: Kolkata</span>
                        </div>
                    </div>
                </div>

                {/* NODAL CONTACT CARD */}
                <div className="flex flex-col gap-3 min-w-[300px] relative z-10 bg-indigo-50/50 p-6 rounded-[32px] border border-indigo-100 shadow-inner group transition-all hover:bg-white">
                    <p className="text-[9px] font-black uppercase text-indigo-400 tracking-widest leading-none">Designated Nodal Officer</p>
                    <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center border border-indigo-100 shadow-sm">
                            <UserCircle2 className="text-indigo-600" size={20} />
                        </div>
                        <p className="text-sm font-black text-slate-800 uppercase tracking-tight">Prof. Anirban Das</p>
                    </div>
                    <div className="flex gap-4 pt-1 border-t border-indigo-100/50 mt-1">
                        <span className="text-[9px] font-bold text-slate-500 uppercase flex items-center gap-1"><Phone size={10} /> +91 33 2289 XXXX</span>
                        <span className="text-[9px] font-bold text-slate-500 uppercase flex items-center gap-1"><Mail size={10} /> nodal@university.edu</span>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">

                {/* STUDENT ENROLLMENT & DIVERSITY */}
                <Card className="rounded-[44px] border-slate-200 bg-white shadow-sm overflow-hidden group hover:shadow-xl transition-all duration-500">
                    <CardHeader className="p-8 bg-gradient-to-r from-blue-500 to-indigo-600 text-white relative">
                        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
                        <CardTitle className="text-[10px] font-black uppercase tracking-[0.3em] flex items-center gap-3 relative z-10">
                            <Users size={16} /> Enrollment Dynamics
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="p-10 space-y-8 relative overflow-hidden">
                        <div className="grid grid-cols-2 gap-8 relative z-10">
                            <MetricBlock label="Total Students" val="12,450" />
                            <MetricBlock label="PwD Students" val="420" />
                            <div className="col-span-2 p-8 bg-indigo-50 rounded-[32px] border border-indigo-100 flex items-center justify-between shadow-inner">
                                <div className="space-y-1">
                                    <p className="text-[10px] font-black text-indigo-400 uppercase tracking-widest">Inclusion Score</p>
                                    <p className="text-5xl font-black text-indigo-700 tracking-tighter">92.4%</p>
                                </div>
                                <div className="text-right space-y-3">
                                    <Badge className="bg-green-600 text-white font-black text-[8px] uppercase px-3 py-1">Benchmark Met</Badge>
                                    <div className="flex flex-wrap justify-end gap-2 max-w-[120px]">
                                        <span className="text-[8px] font-bold text-slate-400 uppercase tracking-tighter">Visual (42)</span>
                                        <span className="text-[8px] font-bold text-slate-400 uppercase tracking-tighter">Hearing (18)</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* SUPPORT PROVISIONS (REASONABLE ACCOMMODATION) */}
                <Card className="rounded-[44px] border-slate-200 bg-white shadow-sm overflow-hidden group hover:shadow-xl transition-all duration-500">
                    <CardHeader className="p-8 bg-gradient-to-r from-emerald-500 to-teal-600 text-white relative">
                        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
                        <CardTitle className="text-[10px] font-black uppercase tracking-[0.3em] flex items-center gap-3 relative z-10">
                            <Accessibility size={16} /> Support Provisions
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="p-10 space-y-8 relative z-10">
                        <div className="space-y-6">
                            <ProgressBarItem label="Total Requests Received" val="84" max={100} color="bg-indigo-400" />
                            <ProgressBarItem label="Accommodations Provided" val="80" max={84} color="bg-green-500" />
                            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-50">
                                <MetricBlock label="Pending Requests" val="04" />
                                <MetricBlock label="Beyond Timeline" val="01" alert />
                            </div>
                        </div>
                        <Button className="w-full h-14 bg-slate-900 text-white hover:bg-black rounded-2xl font-black uppercase tracking-widest text-[9px] shadow-xl group transition-all">
                            View Provision Audit <ArrowUpRight size={14} className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </Button>
                    </CardContent>
                </Card>

                {/* BARRIER REGISTRY (ACCESSIBILITY) */}
                <Card className="rounded-[44px] border-slate-200 bg-white shadow-sm overflow-hidden group hover:shadow-xl transition-all duration-500">
                    <CardHeader className="p-8 bg-gradient-to-r from-purple-500 to-indigo-700 text-white relative">
                        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
                        <CardTitle className="text-[10px] font-black uppercase tracking-[0.3em] flex items-center gap-3 relative z-10">
                            <Globe size={16} /> Barrier Registry
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="p-10 space-y-8 relative z-10">
                        <div className="space-y-6">
                            <StatusLabel label="Structural Accessibility" status="Fully Compliant" success />
                            <StatusLabel label="Learning Management (LMS)" status="Partial Access" warning />
                        </div>
                        <div className="grid grid-cols-2 gap-8 pt-8 border-t border-slate-50">
                            <MetricBlock label="Last Assessment" val="12 Oct 24" />
                            <MetricBlock label="Compliance Due" val="15 Dec 24" warning />
                        </div>
                        <div className="p-6 bg-slate-50 rounded-[32px] border border-slate-100 text-center">
                            <Sparkles className="text-indigo-400 mx-auto mb-2" size={24} />
                            <p className="text-[9px] font-black uppercase text-slate-400 tracking-widest leading-relaxed">
                                Institution flagged for <br /> <b>Digital Remediation Cycle</b>
                            </p>
                        </div>
                    </CardContent>
                </Card>

            </div>

            {/* OVERSIGHT REGISTRY (GRIEVANCES & DIRECTIONS) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card className="rounded-[48px] border-slate-200 bg-white p-10 shadow-sm relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:rotate-12 transition-transform duration-700">
                        <MessageSquare size={120} className="text-purple-600" />
                    </div>
                    <h4 className="text-[11px] font-black text-slate-400 uppercase tracking-[0.3em] mb-10 flex items-center gap-3">
                        <ShieldAlert size={16} className="text-purple-600" /> Active Grievance Monitor
                    </h4>
                    <div className="grid grid-cols-3 gap-6 relative z-10">
                        <CountMetric label="Total Filings" val="08" color="text-slate-900" />
                        <CountMetric label="Under Review" val="01" color="text-orange-500" />
                        <CountMetric label="Overdue SLA" val="00" color="text-green-500" />
                    </div>
                </Card>

                <Card className="rounded-[48px] border-slate-200 bg-white p-10 shadow-sm relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:-rotate-12 transition-transform duration-700">
                        <CheckCircle2 size={120} className="text-emerald-600" />
                    </div>
                    <h4 className="text-[11px] font-black text-slate-400 uppercase tracking-[0.3em] mb-10 flex items-center gap-3">
                        <BookOpenCheck size={16} className="text-emerald-600" /> Binding Statutory Orders
                    </h4>
                    <div className="grid grid-cols-3 gap-6 relative z-10">
                        <CountMetric label="Total Directions" val="04" color="text-slate-900" />
                        <CountMetric label="Compliance Pending" val="01" color="text-indigo-600" />
                        <CountMetric label="Verified Closed" val="03" color="text-green-600" />
                    </div>
                </Card>
            </div>

            {/* FOOTER ACTIONS */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-10 border-t border-slate-200">
                <div className="flex items-center gap-3 text-slate-400">
                    <Activity size={20} className="text-indigo-600 animate-pulse" />
                    <span className="text-[10px] font-black uppercase tracking-[0.2em]">Institutional Sync Active: Q4 FY 2024-25</span>
                </div>
                <div className="flex gap-4">
                    <Button variant="outline" className="h-14 px-8 rounded-2xl border-slate-200 font-bold bg-white gap-2 text-[10px] uppercase tracking-widest"><History size={18} /> View Audit Timeline</Button>
                    <Button className="h-14 px-10 rounded-2xl bg-slate-900 text-white font-black uppercase tracking-widest text-[10px] shadow-2xl gap-2 hover:bg-black transition-all"><Printer size={18} /> Generate PDF Fact Sheet</Button>
                </div>
            </div>

        </div>
    );
}

/* UI SUB-COMPONENTS */

function MetricBlock({ label, val, alert, warning }: any) {
    return (
        <div className="space-y-1">
            <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">{label}</p>
            <p className={`text-3xl font-black tracking-tighter leading-none ${alert ? 'text-red-600 underline decoration-red-100' : warning ? 'text-orange-500' : 'text-slate-900'}`}>{val}</p>
        </div>
    )
}

function StatusLabel({ label, status, success, warning }: any) {
    const color = success ? 'text-green-600' : warning ? 'text-orange-500' : 'text-red-600';
    const bg = success ? 'bg-green-50' : warning ? 'bg-orange-50' : 'bg-red-50';
    return (
        <div className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 border border-slate-100 group transition-all hover:bg-white">
            <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{label}</p>
            <Badge className={`${bg} ${color} border-none font-black text-[9px] uppercase`}>{status}</Badge>
        </div>
    )
}

function ProgressBarItem({ label, val, max, color }: any) {
    const percentage = (val / max) * 100;
    return (
        <div className="space-y-2">
            <div className="flex justify-between items-end">
                <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest leading-none">{label}</p>
                <p className="text-xs font-black text-slate-900">{val} <span className="text-[10px] text-slate-300">/ {max}</span></p>
            </div>
            <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                <div className={`h-full ${color} transition-all duration-1000 shadow-sm`} style={{ width: `${percentage}%` }} />
            </div>
        </div>
    )
}

function CountMetric({ label, val, color }: any) {
    return (
        <div className="text-center space-y-1 group cursor-default">
            <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest group-hover:text-indigo-600 transition-colors">{label}</p>
            <p className={`text-3xl font-black ${color} tracking-tighter`}>{val}</p>
        </div>
    )
}