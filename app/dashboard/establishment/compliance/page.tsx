// app/dashboard/establishment/compliance/page.tsx
"use client";
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
    CheckCircle2, AlertTriangle, Upload, Globe, Building2,
    Users, ShieldCheck, Zap, Activity, Info, FileText,
    Sparkles, Landmark, Monitor, ShieldAlert,
    ClipboardCheck, ArrowUpRight, CalendarDays, MapPin
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function ComplianceModule() {
    return (
        <div className="space-y-10 animate-in fade-in duration-700 pb-20 font-sans selection:bg-blue-100">

            {/* 1. TOP SCORECARD - VIBRANT GRADIENT & TOPOGRAPHY */}
            <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
                <Card className="xl:col-span-3 bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 text-white rounded-[48px] p-10 border shadow-[0_25px_50px_-12px_rgba(79,70,229,0.5)] flex flex-col md:flex-row items-center justify-between overflow-hidden relative">
                    <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/topography.png')]" />

                    <div className="relative z-10 space-y-6">
                        <div>
                            <div className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border border-white/30 mb-4 backdrop-blur-md">
                                <Activity size={12} className="animate-pulse" /> Real-time Compliance Engine
                            </div>
                            <h2 className="text-sm font-black text-blue-100 uppercase tracking-[0.4em]">District Rank: #02</h2>
                            <p className="text-5xl font-black tracking-tighter mt-1 uppercase leading-none text-white">Overall Stats</p>
                        </div>
                        <div className="flex flex-wrap gap-10">
                            <ScoreStat label="Structure" val="88%" />
                            <ScoreStat label="Digital" val="42%" color="text-red-300" />
                            <ScoreStat label="Workforce" val="100%" />
                            <ScoreStat label="Policy" val="95%" />
                        </div>
                    </div>

                    <div className="mt-8 md:mt-0 text-center relative z-10 bg-white p-12 rounded-[52px] shadow-2xl group transition-all hover:scale-105 border-4 border-blue-50">
                        <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-2">Overall Score</p>
                        <div className="relative inline-block">
                            <span className="text-5xl font-black text-indigo-600 tracking-tighter">79.2</span>
                            <span className="text-2xl font-black text-indigo-400">%</span>
                        </div>
                        <p className="text-[9px] font-bold text-slate-400 uppercase tracking-tighter mt-4 flex items-center justify-center gap-1">
                            <ShieldCheck size={12} className="text-green-500" /> Verified Node Hub
                        </p>
                    </div>
                </Card>

                <Card className="rounded-[48px] border-slate-200 p-8 flex flex-col justify-center text-center space-y-4 shadow-sm bg-white relative overflow-hidden group hover:border-orange-200 transition-all">
                    <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
                    <AlertTriangle className="mx-auto text-red-500 group-hover:scale-110 transition-transform" size={42} />
                    <h3 className="text-sm font-black uppercase text-slate-900 tracking-widest">Urgent Warning</h3>
                    <p className="text-[11px] font-bold text-slate-500 uppercase tracking-tighter leading-relaxed">
                        Digital Standard default detected. High risk of <b>Administrative Penalty</b> in next inspection.
                    </p>
                    <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-3xl font-black text-[9px] uppercase tracking-[0.2em] h-12 shadow-lg shadow-orange-200">Initiate Remediation</Button>
                </Card>
            </div>

            {/* 2. TABS NAVIGATION */}
            <Tabs defaultValue="physical" className="space-y-8">
                <TabsList className="bg-white px-2 py-1 rounded-[32px] h-auto border border-slate-200 flex flex-wrap gap-2 shadow-sm">
                    <TabTrigger value="physical" icon={<Building2 size={16} />} label="Physical Access" />
                    <TabTrigger value="digital" icon={<Monitor size={16} />} label="Digital Standards" />
                    <TabTrigger value="employment" icon={<Users size={16} />} label="Employment Mandate" />
                    <TabTrigger value="policy" icon={<ShieldAlert size={16} />} label="Equal Opportunity Policy" />
                </TabsList>

                {/* PHYSICAL TAB CONTENT */}
                <TabsContent value="physical" className="animate-in fade-in zoom-in-95 duration-500">
                    <Card className="rounded-[48px] border-slate-200 shadow-sm overflow-hidden bg-white">
                        <CardHeader className="p-10 border-b border-slate-50 bg-blue-50/30 flex flex-row justify-between items-center">
                            <div className="flex items-center gap-4">
                                <div className="h-12 w-12 bg-blue-500 rounded-2xl flex items-center justify-center text-white shadow-lg"><Building2 size={24} /></div>
                                <div className="space-y-1">
                                    <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-500">Infrastructure Audit</h3>
                                    <p className="text-2xl font-black text-slate-900 tracking-tight uppercase">Physical Environment Compliance</p>
                                </div>
                            </div>
                            <Badge className="bg-green-100 text-green-700 border font-black text-[10px] px-5 py-1.5 uppercase tracking-widest">Compliant Node</Badge>
                        </CardHeader>
                        <CardContent className="p-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
                            <div className="space-y-8">
                                <div className="grid grid-cols-2 gap-8">
                                    <BinaryOption label="Accessibility Audit Conducted?" active="Yes" />
                                    <DataField label="Date of Last Audit" defaultValue="12-Oct-2024" icon={<CalendarDays />} />
                                    <BinaryOption label="Deficiencies Identified?" active="No" />
                                    <DataField label="Compliance Date" defaultValue="14-Oct-2024" icon={<ShieldCheck />} />
                                </div>
                                <div className="p-8 bg-slate-50 rounded-[40px] border border-slate-100">
                                    <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Mandated Structural Standards</h4>
                                    <div className="grid grid-cols-2 gap-4">
                                        <StaticCheck label="Main Entry Ramps" checked />
                                        <StaticCheck label="Elevator Braille" checked />
                                        <StaticCheck label="Accessible Toilets" checked />
                                        <StaticCheck label="Tactile Pathways" checked />
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-8">
                                <DataField label="Block / Unit Audited" defaultValue="Main Corporate Tower - Salt Lake" icon={<MapPin />} />
                                <div className="space-y-3">
                                    <label className="text-[11px] font-black uppercase text-slate-400 ml-1 tracking-widest">Corrective Measures Taken</label>
                                    <textarea className="w-full h-32 bg-slate-50 border rounded-[32px] p-8 text-sm font-medium italic text-slate-500 shadow-inner resize-none" defaultValue="All ramps widened to 1200mm. Automatic sliding doors installed at entry Point B. Toilets redesigned per statutory dimensions." />
                                </div>
                                <div className="p-10 border-2 border-dashed border-blue-200 rounded-[40px] flex flex-col items-center justify-center bg-blue-50/30 group hover:bg-white transition-all cursor-pointer">
                                    <Upload className="text-blue-400 mb-3" size={32} />
                                    <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest">Upload Inspection Photo Hub</span>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>

                {/* DIGITAL TAB CONTENT */}
                <TabsContent value="digital" className="animate-in fade-in zoom-in-95 duration-500">
                    <Card className="rounded-[48px] border-slate-200 shadow-sm overflow-hidden bg-white">
                        <CardHeader className="p-10 border-b border-slate-50 bg-indigo-50/40 flex flex-row justify-between items-center">
                            <div className="flex items-center gap-4">
                                <div className="h-12 w-12 bg-indigo-500 rounded-2xl flex items-center justify-center text-white shadow-lg"><Globe size={24} /></div>
                                <div className="space-y-1">
                                    <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-indigo-500">Virtual Environment</h3>
                                    <p className="text-2xl font-black text-slate-900 tracking-tight uppercase">Website & Digital Systems</p>
                                </div>
                            </div>
                            <Badge className="bg-red-100 text-red-600 border font-black text-[10px] px-5 py-1.5 uppercase tracking-widest">Action Required</Badge>
                        </CardHeader>
                        <CardContent className="p-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
                            <div className="space-y-8">
                                <DataField label="Official Website URL" defaultValue="https://digital.hdfcbank.com" icon={<Globe />} />
                                <DataField label="Standard Followed" defaultValue="WCAG 2.1 (LEVEL AA)" icon={<ShieldCheck />} />
                                <div className="grid grid-cols-2 gap-8">
                                    <BinaryOption label="Audit Conducted?" active="Yes" />
                                    <BinaryOption label="Non-Compliance Detected?" active="Yes" alert />
                                </div>
                            </div>
                            <div className="space-y-8">
                                <DataField label="Rectification Target Date" defaultValue="25-Dec-2024" icon={<CalendarDays />} />
                                <div className="space-y-3">
                                    <label className="text-[11px] font-black uppercase text-slate-400 ml-1 tracking-widest">Compliance Declaration</label>
                                    <textarea className="w-full h-32 bg-slate-50 border rounded-[32px] p-8 text-sm font-medium italic text-slate-500 shadow-inner resize-none" defaultValue="Web portal fails on screen-reader compatibility for the 'Loan Application' module. Alt-text missing for 142 UI elements. Rectification project initiated under IT wing." />
                                </div>
                                <Button className="w-full h-14 bg-slate-900 text-white rounded-3xl font-black uppercase text-[10px] tracking-[0.2em] shadow-xl hover:bg-blue-600 transition-all">Submit Final Scrutiny</Button>
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>

                {/* EMPLOYMENT TAB CONTENT */}
                <TabsContent value="employment" className="animate-in fade-in zoom-in-95 duration-500">
                    <Card className="rounded-[48px] border-slate-200 shadow-sm overflow-hidden bg-white">
                        <CardHeader className="p-10 border-b border-slate-50 bg-emerald-50/50 flex flex-row justify-between items-center">
                            <div className="flex items-center gap-4">
                                <div className="h-12 w-12 bg-emerald-500 rounded-2xl flex items-center justify-center text-white shadow-lg"><Users size={24} /></div>
                                <div className="space-y-1">
                                    <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-500">Workforce Dynamics</h3>
                                    <p className="text-2xl font-black text-slate-900 tracking-tight uppercase">PwD Employment Mandate</p>
                                </div>
                            </div>
                            <Badge className="bg-emerald-100 text-emerald-700 border font-black text-[10px] px-5 py-1.5 uppercase tracking-widest">4% Mandate Met</Badge>
                        </CardHeader>
                        <CardContent className="p-12 space-y-10">
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                                <DataField label="Total Workforce" defaultValue="1,500" icon={<Users />} />
                                <DataField label="PwD Employees" defaultValue="65" icon={<UserCheck2 />} />
                                <div className="p-8 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-[40px] text-white shadow-xl relative overflow-hidden group flex flex-col justify-between h-40">
                                    <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
                                    <p className="text-[9px] font-black uppercase text-emerald-100 tracking-widest">Auto-Percentage</p>
                                    <p className="text-4xl font-black tracking-tighter">4.33<span className="text-xl text-emerald-200">%</span></p>
                                    <Badge className="bg-white/20 text-white w-fit text-[8px] font-black uppercase border">Above threshold</Badge>
                                </div>
                                <DataField label="Vacant PwD Posts" defaultValue="05" icon={<Info />} />
                            </div>
                            <div className="p-10 bg-slate-50 rounded-[44px] flex items-center justify-between border border-slate-100">
                                <div className="flex items-center gap-6">
                                    <div className="h-16 w-16 bg-white rounded-3xl border border-slate-200 flex items-center justify-center text-emerald-600 shadow-sm"><Landmark size={32} /></div>
                                    <div className="space-y-1">
                                        <p className="text-xl font-black text-slate-900 uppercase tracking-tight leading-none">Recruitment Lifecycle</p>
                                        <p className="text-xs font-medium text-slate-400 uppercase tracking-widest mt-1">Recruitment undertaken during this statutory period: <b>YES</b></p>
                                    </div>
                                </div>
                                <Button className="h-14 px-12 bg-slate-900 text-white rounded-2xl font-black uppercase tracking-widest text-[10px] shadow-lg">Submit Vacancy Return</Button>
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>

                {/* POLICY TAB CONTENT */}
                <TabsContent value="policy" className="animate-in fade-in zoom-in-95 duration-500">
                    <Card className="rounded-[48px] border-slate-200 shadow-sm overflow-hidden bg-white">
                        <CardHeader className="p-10 border-b border-slate-50 bg-purple-50/50 flex flex-row justify-between items-center">
                            <div className="flex items-center gap-4">
                                <div className="h-12 w-12 bg-purple-500 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-purple-200"><ShieldAlert size={24} /></div>
                                <div className="space-y-1">
                                    <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-purple-500">Notified Protocols</h3>
                                    <p className="text-2xl font-black text-slate-900 tracking-tight uppercase">Equal Opportunity Policy</p>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent className="p-12 space-y-12">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                                <div className="p-10 bg-purple-50 rounded-[40px] border border-purple-100 space-y-4">
                                    <p className="text-[10px] font-black uppercase text-purple-400 tracking-widest">Policy Publication</p>
                                    <div className="flex items-center gap-4">
                                        <div className="h-14 w-14 bg-white rounded-2xl flex items-center justify-center text-green-500 shadow-sm"><FileText size={28} /></div>
                                        <div>
                                            <p className="text-sm font-black text-slate-800">EO_POLICY_V3.PDF</p>
                                            <Badge className="bg-green-500 text-white font-black text-[8px] mt-1">LIVE & PUBLIC</Badge>
                                        </div>
                                    </div>
                                </div>
                                <DataField label="Date of Adoption" defaultValue="01-Mar-2024" icon={<CalendarDays />} />
                                <DataField label="Designated PwD Officer" defaultValue="Dr. Ananya Sharma, VP" icon={<Users />} />
                            </div>
                            <div className="p-12 border-2 border-dashed border-purple-200 rounded-[44px] flex flex-col md:flex-row items-center justify-between bg-slate-50 group hover:bg-white transition-all cursor-pointer">
                                <div className="flex items-center gap-8">
                                    <div className="h-20 w-20 bg-white rounded-[32px] flex items-center justify-center text-purple-600 shadow-lg group-hover:scale-110 transition-transform"><Upload size={40} /></div>
                                    <div className="space-y-1">
                                        <p className="text-2xl font-black text-slate-900 uppercase tracking-tight">Upload Revised Policy</p>
                                        <p className="text-sm font-medium text-slate-400 uppercase tracking-widest">Notified under Rule 15 for the upcoming statutory cycle.</p>
                                    </div>
                                </div>
                                <div className="mt-8 md:mt-0 p-4 bg-purple-600 rounded-full text-white shadow-xl group-hover:rotate-12 transition-transform">
                                    <ArrowUpRight size={40} />
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    );
}

/* UI UTILS */

function TabTrigger({ value, icon, label }: any) {
    return (
        <TabsTrigger value={value} className="flex-1 py-2 rounded-[26px] data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-indigo-600 data-[state=active]:text-white data-[state=active]:shadow-2xl text-[10px] font-black uppercase tracking-widest transition-all">
            <span className="mr-3">{icon}</span> {label}
        </TabsTrigger>
    );
}

function ScoreStat({ label, val, color }: any) {
    return (
        <div className="space-y-1 text-center">
            <p className="text-[10px] font-black uppercase text-blue-100 tracking-widest">{label}</p>
            <p className={`text-2xl font-black ${color || 'text-white'} drop-shadow-md`}>{val}</p>
        </div>
    )
}

function DataField({ label, defaultValue, icon }: any) {
    return (
        <div className="space-y-3">
            <label className="text-[11px] font-black uppercase text-slate-400 ml-1 tracking-widest">{label}</label>
            <div className="relative group">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-blue-600 transition-colors">
                    {icon && React.cloneElement(icon as React.ReactElement, {})}
                </div>
                <Input defaultValue={defaultValue} className="h-16 pl-12 rounded-[22px] bg-slate-50 border font-black text-slate-800 shadow-inner focus-visible:ring-2 focus-visible:ring-blue-500 transition-all" />
            </div>
        </div>
    )
}

function BinaryOption({ label, active, alert }: any) {
    return (
        <div className="space-y-3">
            <label className="text-[11px] font-black uppercase text-slate-400 ml-1 tracking-widest">{label}</label>
            <div className="flex bg-slate-100 p-1.5 rounded-2xl gap-1">
                <button className={`flex-1 py-3 rounded-xl text-[10px] font-black uppercase transition-all ${active === 'Yes' ? 'bg-white text-blue-600 shadow-lg' : 'text-slate-400'}`}>Yes</button>
                <button className={`flex-1 py-3 rounded-xl text-[10px] font-black uppercase transition-all ${active === 'No' ? 'bg-white text-red-600 shadow-lg' : 'text-slate-400'}`}>No</button>
            </div>
        </div>
    )
}

function StaticCheck({ label, checked }: { label: string, checked?: boolean }) {
    return (
        <div className="flex items-center gap-3 p-3 bg-white rounded-xl shadow-sm border border-slate-100">
            <div className={`h-6 w-6 rounded-lg flex items-center justify-center transition-all ${checked ? 'bg-green-500 text-white' : 'bg-slate-100 text-transparent'}`}>
                <CheckCircle2 size={14} strokeWidth={4} />
            </div>
            <span className="text-[10px] font-black uppercase text-slate-600 tracking-tighter">{label}</span>
        </div>
    )
}

function UserCheck2(props: any) {
    return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><polyline points="16 11 18 13 22 9" /></svg>
}