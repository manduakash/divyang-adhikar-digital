// app/dashboard/scpd/fact-sheets/registered-org/page.tsx
"use client";
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
    Landmark, ShieldCheck, MapPin, UserCircle2,
    Phone, Mail, Calendar, Activity, Briefcase,
    FileText, ShieldAlert, History, Printer,
    Download, ArrowUpRight, CheckCircle2, Clock,
    MessageSquare, Gavel, Sparkles, FileBadge,
    BadgeCheck, MousePointer2
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function RegisteredInstitutionFactSheet() {
    return (
        <div className="space-y-10 animate-in fade-in duration-1000 pb-20 font-sans selection:bg-purple-100">

            {/* ORGANIZATION IDENTITY HUB */}
            <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-8 bg-white p-10 rounded-[48px] border border-slate-200 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.05)] relative overflow-hidden">
                {/* Pattern Overlay */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/topography.png')]" />

                <div className="flex flex-col md:flex-row gap-8 relative z-10">
                    <div className="h-24 w-24 bg-gradient-to-br from-purple-600 to-indigo-700 rounded-[32px] flex items-center justify-center text-white shadow-2xl shadow-purple-200 transition-transform hover:scale-105 duration-500">
                        <Landmark size={42} />
                    </div>
                    <div className="space-y-3">
                        <div className="flex items-center gap-3">
                            <h1 className="text-4xl font-black text-slate-900 tracking-tighter uppercase leading-none">Divyang Kalyan Samiti</h1>
                            <Badge className="bg-green-100 text-green-700 border-none font-black text-[9px] px-3 py-1 uppercase tracking-widest">Active Status</Badge>
                        </div>
                        <div className="flex flex-wrap gap-4 text-[10px] font-black uppercase tracking-widest text-slate-400">
                            <span className="flex items-center gap-1.5"><ShieldCheck size={12} className="text-purple-600" /> ID: ORG-WB-KOL-012</span>
                            <span className="flex items-center gap-1.5"><Briefcase size={12} className="text-purple-600" /> Category: NGO (Advocacy & Rehab)</span>
                            <span className="flex items-center gap-1.5"><MapPin size={12} className="text-purple-600" /> District: Kolkata</span>
                        </div>
                    </div>
                </div>

                {/* PRIMARY CONTACT NODE */}
                <div className="flex flex-col gap-3 min-w-[300px] relative z-10 bg-purple-50/50 p-6 rounded-[32px] border border-purple-100 shadow-inner group transition-all hover:bg-white">
                    <p className="text-[9px] font-black uppercase text-purple-400 tracking-widest leading-none">Authorized Representative</p>
                    <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center border border-purple-100 shadow-sm">
                            <UserCircle2 className="text-purple-600" size={20} />
                        </div>
                        <p className="text-sm font-black text-slate-800 uppercase tracking-tight">Dr. Suman Chatterjee</p>
                    </div>
                    <div className="flex gap-4 pt-1 border-t border-purple-100/50 mt-1">
                        <span className="text-[9px] font-bold text-slate-500 uppercase flex items-center gap-1"><Phone size={10} /> +91 33 2210 XXXX</span>
                        <span className="text-[9px] font-bold text-slate-500 uppercase flex items-center gap-1"><Mail size={10} /> contact@samiti.org</span>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">

                {/* REGISTRATION INTELLIGENCE */}
                <Card className="xl:col-span-2 rounded-[44px] border-slate-200 bg-white shadow-sm overflow-hidden group hover:shadow-xl transition-all duration-500">
                    <CardHeader className="p-8 bg-gradient-to-r from-purple-600 to-indigo-700 text-white relative">
                        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/circuit-board.png')]" />
                        <CardTitle className="text-[10px] font-black uppercase tracking-[0.3em] flex items-center gap-3 relative z-10">
                            <FileBadge size={16} /> Statutory Certification
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="p-10 space-y-8 relative overflow-hidden">
                        <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
                        <div className="grid grid-cols-2 gap-10 relative z-10">
                            <DataBlock label="Registration Number" val="RPWD/NGO/2022/441" mono />
                            <DataBlock label="Date of Registration" val="12 Oct 2022" />

                            <div className="col-span-2 p-8 bg-purple-50 rounded-[32px] border border-purple-100 flex items-center justify-between shadow-inner">
                                <div className="space-y-1">
                                    <p className="text-[10px] font-black text-purple-400 uppercase tracking-widest">Validity & Renewal</p>
                                    <p className="text-3xl font-black text-purple-700 tracking-tighter uppercase">11 Oct 2025</p>
                                </div>
                                <div className="text-right space-y-2">
                                    <Badge className="bg-indigo-600 text-white font-black text-[8px] uppercase px-3 py-1">T-360 Days</Badge>
                                    <p className="text-[8px] font-bold text-slate-400 uppercase">Last Sync: Today</p>
                                </div>
                            </div>

                            <DataBlock label="Last Activity Recorded" val="14 Oct 2024" icon={<Activity size={12} />} />
                            <div className="flex flex-col justify-end">
                                <Button variant="ghost" className="h-10 text-blue-600 font-black uppercase text-[9px] tracking-widest gap-2 hover:bg-blue-50 rounded-xl">
                                    <FileText size={14} /> Download Certificate
                                </Button>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* COMPLIANCE AUDIT NOTES */}
                <Card className="rounded-[44px] border-slate-200 bg-white shadow-sm overflow-hidden group hover:shadow-xl transition-all duration-500">
                    <CardHeader className="p-8 bg-gradient-to-r from-emerald-500 to-teal-700 text-white relative">
                        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/topography.png')]" />
                        <CardTitle className="text-[10px] font-black uppercase tracking-[0.3em] flex items-center gap-3 relative z-10">
                            <ShieldCheck size={16} /> Compliance Audit
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="p-8 space-y-6 relative z-10">
                        <div className="space-y-4">
                            <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">State Auditor Findings</p>
                            <div className="p-6 bg-emerald-50/50 rounded-3xl border border-emerald-100 text-sm font-medium italic text-emerald-800 leading-relaxed shadow-inner">
                                "Annual returns for FY 23-24 verified. Facility inspection at Kolkata node conducted on 12-Sep. Barrier-free standards satisfied."
                            </div>
                        </div>
                        <div className="pt-6 border-t border-slate-100 flex flex-col gap-4">
                            <StatusNode label="Digital Reporting" ok />
                            <StatusNode label="Physical Site Audit" ok />
                            <StatusNode label="Annual Return filing" ok />
                        </div>
                    </CardContent>
                </Card>

                {/* ACCOUNTABILITY MONITOR (GRIEVANCES & DIRECTIONS) */}
                <Card className="rounded-[44px] border-slate-200 bg-white shadow-sm overflow-hidden group hover:shadow-xl transition-all duration-500">
                    <CardHeader className="p-8 bg-gradient-to-r from-slate-800 to-slate-950 text-white relative">
                        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
                        <CardTitle className="text-[10px] font-black uppercase tracking-[0.3em] flex items-center gap-3 relative z-10">
                            <ShieldAlert size={16} /> Accountability
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="p-10 space-y-10 relative z-10">
                        <div className="space-y-4">
                            <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Active Filings</p>
                            <div className="grid grid-cols-2 gap-4">
                                <UrgencyTile label="Grievances" total="02" pending="01" alert />
                                <UrgencyTile label="Directions" total="03" pending="01" warning />
                            </div>
                        </div>
                        <div className="pt-8 border-t border-slate-100 flex items-center justify-between">
                            <div className="space-y-1">
                                <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest">SLA Status</p>
                                <p className="text-xs font-black text-green-600 uppercase tracking-tighter">94% Compliant</p>
                            </div>
                            <Sparkles className="text-blue-400" size={24} />
                        </div>
                    </CardContent>
                </Card>

            </div>

            {/* FOOTER ACTIONS */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-10 border-t border-slate-200">
                <div className="flex items-center gap-3 text-slate-400">
                    <BadgeCheck size={20} className="text-purple-600 animate-pulse" />
                    <span className="text-[10px] font-black uppercase tracking-[0.2em]">Master Registry Hub: Sync Active</span>
                </div>
                <div className="flex gap-4">
                    <Button variant="outline" className="h-14 px-8 rounded-2xl border-slate-200 font-bold bg-white gap-2 text-[10px] uppercase tracking-widest hover:bg-slate-50 transition-all"><History size={18} /> View Lifecycle Timeline</Button>
                    <Button className="h-14 px-10 rounded-2xl bg-slate-950 text-white font-black uppercase tracking-widest text-[10px] shadow-2xl gap-2 hover:bg-black transition-all group">
                        <Printer size={18} /> Export Briefing Note <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </Button>
                </div>
            </div>

        </div>
    );
}

/* UI SUB-COMPONENTS */

function DataBlock({ label, val, mono, icon, alert }: any) {
    return (
        <div className="space-y-1 group cursor-default">
            <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest group-hover:text-purple-600 transition-colors">{label}</p>
            <div className="flex items-center gap-2">
                {icon && <span className="text-slate-300">{icon}</span>}
                <p className={`text-sm font-black tracking-tight uppercase ${mono ? 'font-mono text-blue-600' : 'text-slate-900'} ${alert ? 'text-red-600 underline decoration-red-100' : ''}`}>{val}</p>
            </div>
        </div>
    )
}

function StatusNode({ label, ok }: any) {
    return (
        <div className="flex items-center justify-between group">
            <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest group-hover:text-emerald-600 transition-colors">{label}</span>
            <div className="flex items-center gap-2">
                <span className="text-[8px] font-bold text-slate-400 uppercase">Verified</span>
                <CheckCircle2 size={14} className="text-green-500" />
            </div>
        </div>
    )
}

function UrgencyTile({ label, total, pending, alert, warning }: any) {
    const colorClass = alert ? 'text-red-600' : warning ? 'text-orange-500' : 'text-slate-900';
    const bgClass = alert ? 'bg-red-50 border-red-100' : warning ? 'bg-orange-50 border-orange-100' : 'bg-slate-50 border-slate-100';

    return (
        <div className={`p-4 rounded-2xl border ${bgClass} text-center space-y-1 group hover:shadow-lg transition-all cursor-pointer`}>
            <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest">{label}</p>
            <p className={`text-2xl font-black ${colorClass} tracking-tighter leading-none`}>{total}</p>
            <p className="text-[8px] font-bold text-slate-500 uppercase leading-none mt-2">({pending} Pending)</p>
        </div>
    )
}