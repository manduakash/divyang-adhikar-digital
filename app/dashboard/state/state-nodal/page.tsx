// app/dashboard/state/page.tsx
"use client";
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
    Users, Map, Building2, MessageSquare, AlertCircle,
    CheckCircle2, Gavel, FileWarning, GraduationCap,
    Scale, ArrowUpRight, Sparkles, TrendingUp,
    Download, Filter, Globe, Activity, Landmark,
    Trophy,
    AlertTriangle
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
    ResponsiveContainer, LineChart, Line, Legend, Cell,
    AreaChart, Area, ComposedChart
} from 'recharts';

export default function StateDashboard() {

    // SECTION 4: 10 INDICATOR / ACTION BUTTONS (State-wide Aggregation)
    const indicators = [
        { label: "Total PwDs in State", value: "1.2M+", icon: Users, color: "from-purple-600 to-purple-600", text: "text-white" },
        { label: "Districts Covered", value: "75/75", icon: Map, color: "from-blue-600 to-blue-600", text: "text-white" },
        { label: "Total Establishments", value: "45K+", icon: Building2, color: "from-slate-600 to-slate-600", text: "text-white" },
        { label: "Total Grievances", value: "124K", icon: MessageSquare, color: "from-indigo-600 to-indigo-600", text: "text-white" },
        { label: "Beyond Timeline", value: "840", icon: Clock, color: "from-rose-600 to-rose-600", text: "text-white", alert: true },
        { label: "Access Non-Compliant", value: "1,240", icon: FileWarning, color: "from-orange-600 to-orange-600", text: "text-white" },
        { label: "Employment (State %)", value: "4.12%", icon: TrendingUp, color: "from-emerald-600 to-emerald-600", text: "text-white" },
        { label: "Vacancies Pending", value: "4,502", icon: GraduationCap, color: "from-amber-600 to-amber-600", text: "text-slate-900", alert: true },
        { label: "Prosecution Pending", value: "142", icon: Scale, color: "from-slate-600 to-slate-600", text: "text-white" },
        { label: "Laggard Districts", value: "05", icon: AlertTriangle, color: "from-red-600 to-red-600", text: "text-white", alert: true },
    ];

    return (
        <div className="space-y-10 animate-in fade-in duration-700 pb-20 font-sans">

            {/* 1. APEX HEADER SECTION */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                <div className="space-y-2">
                    <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border border-purple-200">
                        <Globe size={14} className="animate-spin-slow" /> State Aggregation Node: Kolkata
                    </div>
                    <h1 className="text-5xl font-black text-slate-900 tracking-tighter uppercase leading-none">State Nodal Authority</h1>
                    <p className="text-slate-500 font-medium text-lg italic">Real-time PwD Act Monitoring, Comparison & Direction oversight (Rule 2017).</p>
                </div>
                <div className="flex gap-3">
                    <Button variant="outline" className="h-14 px-8 rounded-2xl border-slate-200 font-bold bg-white shadow-sm gap-2">
                        <Download size={18} /> Central GoI Report
                    </Button>
                    <Button className="h-14 px-10 rounded-2xl bg-purple-700 text-white font-black uppercase tracking-widest text-xs shadow-2xl gap-2 hover:bg-purple-800 transition-all">
                        <Sparkles size={18} /> Generate AI Policy Note
                    </Button>
                </div>
            </div>

            {/* 2. SECTION 4: 10 ACTION INDICATORS (Statutory Aggregation) */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
                {indicators.map((item, i) => (
                    <button
                        key={i}
                        className={`group relative text-left p-7 rounded-[40px] overflow-hidden transition-all duration-700 h-48 shadow-lg hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] hover:-translate-y-2 border-t border-white/20 bg-gradient-to-br ${item.color} ${item.text}`}
                    >

                        {/* 2. SECONDARY TEXTURE LAYER (Noise/Grain for Depth) */}
                        <div className="absolute inset-0 opacity-[0.2] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/p5.png')]" />

                        {/* 3. DYNAMIC GLASS REFLECTION (Glow effect on hover) */}
                        <div className="absolute -inset-full top-0 block transform -skew-x-12 bg-gradient-to-r from-transparent via-white610 to-transparent opac600-0 group-hover:animate-[shine_1.5s_ease-in-out] pointer-events-none" />

                        {/* 4. LARGE BACKGROUND ICON (Patterned) */}
                        <div className="absolute -right-2 -bottom-5 opacity-0 group-hover:opacity-10 group-hover:scale-125 group-hover:-rotate-12 transition-all duration-700">
                            <item.icon size={100} strokeWidth={1} />
                        </div>

                        {/* 5. CONTENT LAYER */}
                        <div className="relative z-10 flex flex-col justify-between h-full">
                            {/* Icon Container with Glassmorphism */}
                            <div className="h-12 w-12 rounded-2xl bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform duration-500">
                                <item.icon size={24} className="drop-shadow-md" />
                            </div>

                            <div>
                                <div className="flex items-baseline gap-1">
                                    <p className="text-4xl font-black tracking-tighter drop-shadow-sm">
                                        {item.value}
                                    </p>
                                </div>
                                <p className="text-[10px] font-black uppercase tracking-[0.2em] opacity-80 leading-tight mt-1 min-h-[20px]">
                                    {item.label}
                                </p>
                            </div>
                        </div>

                        {/* 6. STATUS INDICATOR */}
                        {item.alert ? (
                            <div className="absolute top-8 right-8 flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-white shadow-sm"></span>
                            </div>
                        ) : (
                            <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity">
                                <ArrowUpRight size={20} className="text-white/40" />
                            </div>
                        )}
                    </button>
                ))}
            </div>

            {/* ADD THESE TO YOUR GLOBAL CSS OR TAILWIND CONFIG */}
            <style jsx global>{`
  @keyframes shine {
    0% { left: -100%; }
    100% { left: 100%; }
  }
`}</style>

            {/* ZONE 1: DISTRICT COMPARISON & EMPLOYMENT ( & ) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <ChartCard title="District Compliance Comparison" desc="X-Axis: Districts • Y-Axis: Compliance Score (%)">
                    <ResponsiveContainer width="100%" height={350}>
                        <BarChart data={districtComparisonData}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                            <XAxis dataKey="district" axisLine={false} tickLine={false} tick={{ fontSize: 9, fontWeight: 'black' }} />
                            <YAxis axisLine={false} tickLine={false} domain={[0, 100]} />
                            <Tooltip cursor={{ fill: '#f8fafc' }} />
                            <Bar dataKey="score" fill="#7e22ce" radius={[10, 10, 0, 0]} barSize={40} />
                        </BarChart>
                    </ResponsiveContainer>
                </ChartCard>

                <ChartCard title="State Employment Trend" desc="X-Axis: Quarter/Year • Y-Axis: PwD Employment %">
                    <ResponsiveContainer width="100%" height={350}>
                        <AreaChart data={employmentTrendData}>
                            <defs>
                                <linearGradient id="colorPurple" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#a855f7" stopOpacity={0.2} />
                                    <stop offset="95%" stopColor="#a855f7" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                            <XAxis dataKey="time" axisLine={false} tickLine={false} tick={{ fontSize: 10, fontWeight: 'bold' }} />
                            <YAxis axisLine={false} tickLine={false} />
                            <Tooltip />
                            <Area type="monotone" dataKey="percentage" stroke="#7e22ce" strokeWidth={5} fillOpacity={1} fill="url(#colorPurple)" />
                            <Line type="monotone" dataKey="mandate" stroke="#ef4444" strokeDasharray="5 5" name="4% Mandate" />
                        </AreaChart>
                    </ResponsiveContainer>
                </ChartCard>
            </div>

            {/* ZONE 2: PERFORMANCE SNAPSHOTS (SECTION 9 - Page 66) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* TOP 5 PERFORMING */}
                <Card className="rounded-[40px] border-2 bg-slate-900 text-white shadow-2xl overflow-hidden relative">
                    <div className="absolute inset-0 opacity-[0.03] pointer-events-none" />
                    <CardHeader className="p-8 border-b border-white/5 flex flex-row justify-between items-center relative z-10">
                        <div>
                            <CardTitle className="text-xs font-black uppercase tracking-[0.2em] text-purple-400 flex items-center gap-2">
                                <Trophy size={14} /> Top 5 Performing Districts
                            </CardTitle>
                            <p className="text-[10px] text-slate-400 font-bold uppercase mt-1 italic">Criteria: Compliance + Disposal + Access</p>
                        </div>
                    </CardHeader>
                    <CardContent className="p-0 relative z-10">
                        <div className="divide-y divide-white/5">
                            <RankingRow name="Lucknow" score="9%" strength="Disposal Rate" rank={1} isTop />
                            <RankingRow name="Gautam Buddha Ngr" score="96.5%" strength="Accessibility" rank={2} isTop />
                            <RankingRow name="Varanasi" score="94.0%" strength="Employment %" rank={3} isTop />
                            <RankingRow name="Agra" score="92.8%" strength="Resource Mapping" rank={4} isTop />
                            <RankingRow name="Kanpur Nagar" score="91.5%" strength="Grievance SLA" rank={5} isTop />
                        </div>
                    </CardContent>
                </Card>

                {/* BOTTOM 5 LAGGING */}
                <Card className="rounded-[40px] border-slate-200 bg-white shadow-sm overflow-hidden flex flex-col">
                    <CardHeader className="p-8 border-b border-slate-50 bg-red-50/50 flex flex-row justify-between items-center">
                        <div>
                            <CardTitle className="text-xs font-black uppercase tracking-[0.2em] text-red-600 flex items-center gap-2">
                                <AlertTriangle size={14} /> Bottom 5 Lagging Districts
                            </CardTitle>
                            <p className="text-[10px] text-slate-400 font-bold uppercase mt-1 italic">Immediate Policy Correction Required</p>
                        </div>
                        <Badge variant="destructive" className="font-black text-[8px] uppercase">Threshold Alert</Badge>
                    </CardHeader>
                    <CardContent className="p-0 flex-1">
                        <div className="divide-y divide-slate-50">
                            <RankingRow name="Sunderbans West" score="42.0%" deficiency="High Pendency" isBottom />
                            <RankingRow name="Outer Zone 4" score="4%" deficiency="Access Deficit" isBottom />
                            <RankingRow name="Sector Rural-B" score="51.2%" deficiency="Returns Overdue" isBottom />
                            <RankingRow name="Highlands District" score="55.0%" deficiency="Mapping Gap" isBottom />
                            <RankingRow name="Valley Hub" score="5%" deficiency="Employment Default" isBottom />
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* ZONE 3: VACANCY & ACCESS OVERSIGHT ( & ) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <ChartCard title="District Vacancy Status" desc="Identified vs Filled vs Pending PwD Posts per District.">
                    <ResponsiveContainer width="100%" height={350}>
                        <BarChart data={vacancyData}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                            <XAxis dataKey="district" axisLine={false} tickLine={false} tick={{ fontSize: 9, fontWeight: 'black' }} />
                            <Tooltip />
                            <Legend wrapperStyle={{ fontSize: '10px', fontWeight: 'black', textTransform: 'uppercase', paddingTop: '20px' }} />
                            <Bar dataKey="identified" fill="#6366f1" radius={[4, 4, 0, 0]} name="Identified" />
                            <Bar dataKey="filled" fill="#10b981" radius={[4, 4, 0, 0]} name="Filled" />
                            <Bar dataKey="pending" fill="#ef4444" radius={[4, 4, 0, 0]} name="Pending" />
                        </BarChart>
                    </ResponsiveContainer>
                </ChartCard>

                <ChartCard title="Accessibility Compliance Status" desc="Stacked distribution of physical/digital compliance per district.">
                    <ResponsiveContainer width="100%" height={350}>
                        <BarChart data={accessData}>
                            <XAxis dataKey="district" axisLine={false} tickLine={false} tick={{ fontSize: 9, fontWeight: 'black' }} />
                            <Tooltip cursor={{ fill: '#f8fafc' }} />
                            <Bar dataKey="ok" stackId="a" fill="#10b981" name="Compliant" />
                            <Bar dataKey="part" stackId="a" fill="#f59e0b" name="Partial" />
                            <Bar dataKey="non" stackId="a" fill="#ef4444" radius={[6, 6, 0, 0]} name="Non-Compliant" />
                        </BarChart>
                    </ResponsiveContainer>
                </ChartCard>
            </div>

            {/* ZONE 4: GRIEVANCE PENDENCY */}
            <ChartCard title="Statewide Grievance Pendency Trend" desc="Aggregated monthly performance of all 75 Districts.">
                <ResponsiveContainer width="100%" height={400}>
                    <LineChart data={grievanceTrendData}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                        <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 11, fontWeight: 'bold' }} />
                        <Tooltip contentStyle={{ borderRadius: '24px', border: 'none', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)' }} />
                        <Legend align="right" verticalAlign="top" wrapperStyle={{ paddingBottom: '40px', fontSize: '11px', fontWeight: 'black' }} />
                        <Line type="monotone" name="Grievances Received" dataKey="received" stroke="#6366f1" strokeWidth={5} dot={{ r: 6 }} />
                        <Line type="monotone" name="Grievances Resolved" dataKey="resolved" stroke="#10b981" strokeWidth={5} dot={{ r: 6 }} />
                        <Line type="monotone" name="Grievances Pending" dataKey="pending" stroke="#f43f5e" strokeWidth={5} strokeDasharray="10 10" />
                    </LineChart>
                </ResponsiveContainer>
            </ChartCard>

        </div>
    );
}

/* UI SUB-COMPONENTS */

function ChartCard({ title, desc, children }: any) {
    return (
        <Card className="rounded-[40px] border-slate-200 bg-white shadow-sm overflow-hidden">
            <CardHeader className="p-8 border-b border-slate-50 mb-6 flex flex-row justify-between items-start">
                <div className="space-y-1">
                    <CardTitle className="text-[11px] font-black uppercase tracking-[0.25em] text-purple-600">{title}</CardTitle>
                    <p className="text-lg font-black text-slate-900">{desc}</p>
                </div>
                <div className="flex gap-2">
                    <Button variant="ghost" size="icon" className="h-10 w-10 rounded-xl text-slate-300 hover:text-slate-900 transition-colors"><Filter size={18} /></Button>
                    <Button variant="ghost" size="icon" className="h-10 w-10 rounded-xl text-slate-300 hover:text-slate-900 transition-colors"><ArrowUpRight size={18} /></Button>
                </div>
            </CardHeader>
            <CardContent className="px-8 pb-10">
                {children}
            </CardContent>
        </Card>
    )
}

function RankingRow({ name, score, strength, deficiency, rank, isTop, isBottom }: any) {
    return (
        <div className="p-6 flex items-center justify-between group cursor-pointer transition-all hover:bg-slate-50 lg:hover:bg-white/5">
            <div className="flex items-center gap-5">
                {rank && (
                    <div className="h-8 w-8 rounded-lg bg-purple-600/10 flex items-center justify-center text-purple-400 font-black text-xs">
                        {rank}
                    </div>
                )}
                <div className="space-y-1">
                    <h4 className={`text-sm font-black uppercase tracking-tight ${isTop ? 'text-white' : 'text-slate-800'}`}>{name}</h4>
                    <p className={`text-[9px] font-bold uppercase tracking-[0.2em] ${isBottom ? 'text-red-500' : 'text-slate-500'}`}>
                        {strength ? `Strength: ${strength}` : `Deficiency: ${deficiency}`}
                    </p>
                </div>
            </div>
            <div className="text-right flex items-center gap-4">
                <div>
                    <p className={`text-xl font-black ${isBottom ? 'text-red-600' : 'text-purple-400'}`}>{score}</p>
                    <p className="text-[8px] font-bold text-slate-500 uppercase tracking-widest">Aggregate</p>
                </div>
                <ArrowUpRight size={18} className={isTop ? 'text-white/20' : 'text-slate-300'} />
            </div>
        </div>
    )
}

function Clock(props: any) {
    return (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
    )
}

/* MOCK DATA SETS */
const districtComparisonData = [
    { district: 'LKO', score: 98 }, { district: 'GBN', score: 96 }, { district: 'VNS', score: 94 },
    { district: 'AGR', score: 92 }, { district: 'KNP', score: 91 }, { district: 'GKP', score: 85 },
    { district: 'MRE', score: 82 }, { district: 'JHN', score: 78 },
];

const employmentTrendData = [
    { time: 'Q1 23', percentage: 3.2, mandate: 4 }, { time: 'Q2 23', percentage: 3.5, mandate: 4 },
    { time: 'Q3 23', percentage: 3.4, mandate: 4 }, { time: 'Q4 23', percentage: 3.8, mandate: 4 },
    { time: 'Q1 24', percentage: 4.1, mandate: 4 },
];

const vacancyData = [
    { district: 'LKO', identified: 450, filled: 400, pending: 50 },
    { district: 'VNS', identified: 320, filled: 280, pending: 40 },
    { district: 'AGR', identified: 280, filled: 120, pending: 160 },
    { district: 'KNP', identified: 400, filled: 320, pending: 80 },
];

const accessData = [
    { district: 'LKO', ok: 80, part: 15, non: 5 },
    { district: 'VNS', ok: 70, part: 20, non: 10 },
    { district: 'AGR', ok: 40, part: 30, non: 30 },
    { district: 'KNP', ok: 60, part: 25, non: 15 },
];

const grievanceTrendData = [
    { month: 'Jul', received: 12000, resolved: 9000, pending: 3000 },
    { month: 'Aug', received: 15000, resolved: 11000, pending: 4000 },
    { month: 'Sep', received: 18000, resolved: 14000, pending: 4000 },
    { month: 'Oct', received: 24000, resolved: 18000, pending: 6000 },
];