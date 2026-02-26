// app/dashboard/sab/reports/recommendations/page.tsx
"use client";
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
    Table, TableBody, TableCell, TableHead, TableHeader, TableRow
} from "@/components/ui/table";
import {
    ShieldCheck, BadgeCheck, FileText, Landmark,
    Search, Filter, Printer, FileSpreadsheet,
    ArrowUpRight, Globe, Activity, CheckCircle2,
    AlertTriangle, History, Download, Sparkles,
    Zap, TrendingUp, Gavel, MousePointer2,
    Layers, MessageSquare
} from "lucide-react";
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
    ResponsiveContainer, Cell, Legend, AreaChart, Area
} from 'recharts';
import { Badge } from "@/components/ui/badge";

export default function RecommendationsReport() {

    // MOCK DATA FOR STATUTORY ANALYTICS
    const themeDistribution = [
        { theme: 'Accessibility', count: 18 },
        { theme: 'Employment', count: 12 },
        { theme: 'Education', count: 10 },
        { theme: 'Disaster', count: 5 },
    ];

    const acceptanceTrend = [
        { month: 'Jul', rate: 65 },
        { month: 'Aug', rate: 68 },
        { month: 'Sep', rate: 72 },
        { month: 'Oct', rate: 71 },
    ];

    return (
        <div className="space-y-10 animate-in fade-in duration-1000 pb-20 font-sans selection:bg-emerald-100">

            {/* 1. APEX HUB HEADER - CARBON FIBER TEXTURE */}
            <Card className="rounded-[48px] border-none bg-white p-1 relative overflow-hidden shadow-2xl shadow-slate-200">
                <div className="p-12 relative z-10 flex flex-col xl:flex-row justify-between items-start xl:items-center gap-10">
                    <div className="flex items-center gap-8">
                        <div className="h-24 w-24 bg-gradient-to-br from-emerald-600 via-teal-600 to-blue-700 rounded-[32px] flex items-center justify-center text-white shadow-2xl shadow-emerald-500/20 group hover:rotate-6 transition-transform">
                            <ShieldCheck size={42} />
                        </div>
                        <div className="space-y-2">
                            <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.2em] border border-emerald-100">
                                <BadgeCheck size={14} /> Board Recommendation Node
                            </div>
                            <h1 className="text-5xl font-black text-slate-900 tracking-tighter uppercase leading-none text-wrap">Recommendations Summary Report</h1>
                            <p className="text-slate-500 font-medium italic text-lg tracking-tight uppercase tracking-widest text-xs">Statutory monitor of policy-level recommendations and departmental acceptance.</p>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <Button variant="outline" className="h-16 px-10 rounded-3xl border-slate-200 font-black uppercase tracking-widest text-[10px] bg-white gap-2 shadow-sm hover:bg-slate-50 transition-all">
                            <FileSpreadsheet size={20} className="text-green-600" /> Export XLS
                        </Button>
                        <Button className="h-16 px-12 rounded-3xl bg-slate-950 text-white font-black uppercase tracking-widest text-[10px] shadow-2xl hover:bg-black transition-all group">
                            <Printer size={20} /> Print Certified Hub
                        </Button>
                    </div>
                </div>
            </Card>

            {/* 2. ANALYTICS GRID */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                {/* THEME DISTRIBUTION (Bar Chart) */}
                <ChartContainer title="Theme-wise Recommendation Distribution" desc="Distribution of statutory advice across board domains." cols="lg:col-span-7">
                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={themeDistribution} margin={{ top: 20, right: 30, left: 0, bottom: 20 }}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                            <XAxis dataKey="theme" axisLine={false} tickLine={false} tick={{ fontSize: 10, fontWeight: 'black' }} />
                            <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10, fontWeight: 'bold' }} />
                            <Tooltip cursor={{ fill: '#f8fafc' }} contentStyle={{ borderRadius: '24px', border: 'none', boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1)' }} />
                            <Bar dataKey="count" fill="#10b981" radius={[12, 12, 0, 0]} barSize={60}>
                                {themeDistribution.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={index % 2 === 0 ? '#059669' : '#34d399'} />
                                ))}
                            </Bar>
                        </BarChart>
                    </ResponsiveContainer>
                </ChartContainer>

                {/* ACCEPTANCE TREND (Area Chart) */}
                <ChartContainer title="Policy Acceptance rate" desc="State-level compliance sync trajectory." cols="lg:col-span-5">
                    <ResponsiveContainer width="100%" height={300}>
                        <AreaChart data={acceptanceTrend}>
                            <defs>
                                <linearGradient id="colorAcc" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#4f46e5" stopOpacity={0.2} />
                                    <stop offset="95%" stopColor="#4f46e5" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                            <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 10, fontWeight: 'black' }} />
                            <Tooltip />
                            <Area type="monotone" dataKey="rate" stroke="#4f46e5" strokeWidth={4} fillOpacity={1} fill="url(#colorAcc)" />
                        </AreaChart>
                    </ResponsiveContainer>
                    <div className="mt-4 pt-4 border-t border-slate-50 flex justify-between items-center">
                        <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest leading-none">Policy Alignment Rate</p>
                        <span className="text-xl font-black text-indigo-600">71.4%</span>
                    </div>
                </ChartContainer>
            </div>

            {/* 3. STATUTORY LEDGER - CARBON FIBER OVERLAY */}
            <Card className="rounded-[48px] border-slate-200 shadow-sm overflow-hidden bg-white">
                <CardHeader className="p-0">
                    <div className="p-10 bg-gradient-to-r from-emerald-600 via-teal-600 to-indigo-700 text-white relative overflow-hidden">
                        {/* CARBON FIBER TEXTURE */}
                        <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />

                        <div className="flex flex-col md:flex-row justify-between items-center gap-10 relative z-10">
                            <div className="flex items-center gap-5">
                                <div className="h-14 w-14 rounded-2xl bg-white/20 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-xl">
                                    <BadgeCheck size={28} />
                                </div>
                                <div className="space-y-1">
                                    <CardTitle className="text-xl font-black uppercase tracking-tight leading-none uppercase">Statewide Statutory Ledger</CardTitle>
                                    <p className="text-[10px] font-bold text-emerald-100 uppercase tracking-widest leading-none">Recommendations & Advisory Notes Monitoring</p>
                                </div>
                            </div>
                            <div className="relative group flex-1 max-w-md">
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-white/50" />
                                <input className="w-full pl-12 pr-6 py-4 bg-white/10 border border-white/20 rounded-2xl text-[10px] font-black uppercase outline-none text-white placeholder:text-white/30 focus:bg-white/20 transition-all shadow-inner" placeholder="Search by Recommendation ID..." />
                            </div>
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="p-0">
                    <Table>
                        <TableHeader className="bg-slate-50/80">
                            <TableRow className="border-slate-100">
                                <TableHead className="px-10 py-6 text-[9px] font-black uppercase tracking-widest text-slate-400 w-[180px]">Recommendation Reference</TableHead>
                                <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400">Subject / Theme</TableHead>
                                <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400">Recipient Authority</TableHead>
                                <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400 text-center">Date Issued</TableHead>
                                <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400 text-center">Priority Level</TableHead>
                                <TableHead className="text-right px-10 text-[9px] font-black uppercase tracking-widest text-slate-400">Compliance Status</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody className="divide-y divide-slate-50 font-sans">
                            <RegistryRow
                                id="REC-2024-001"
                                subject="Universal Design Adoption"
                                auth="Cabinet Secretary Node"
                                date="12 Oct 2024"
                                priority="CRITICAL"
                                status="ACCEPTED"
                                success
                            />
                            <RegistryRow
                                id="REC-2024-008"
                                subject="Disability Court Expansion"
                                auth="Judiciary Dept"
                                date="14 Oct 2024"
                                priority="HIGH"
                                status="UNDER REVIEW"
                                warning
                            />
                            <RegistryRow
                                id="REC-2024-012"
                                subject="Inclusive Exam Protocol"
                                auth="Education Board"
                                date="20 Sep 2024"
                                priority="STANDARD"
                                status="POLICY SYNC"
                                success
                            />
                            <RegistryRow
                                id="REC-2023-992"
                                subject="Scribe Recruitment Guidelines"
                                auth="Social Welfare Dept"
                                date="05 Jan 2024"
                                priority="CRITICAL"
                                status="UNDER REVIEW"
                                alert
                            />
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>

            {/* FOOTER - SYSTEM SYNC */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-10 border-t border-slate-200">
                <div className="flex items-center gap-4 text-slate-400">
                    <Globe size={20} className="text-emerald-600 animate-spin-slow" />
                    <span className="text-[10px] font-black uppercase tracking-widest leading-none text-nowrap">State Advisory Sync Hub: 45 Statutory Recommendations Active</span>
                </div>
                <div className="flex gap-4">
                    <button className="text-[10px] font-black uppercase text-emerald-600 hover:underline">Download Recommendation ZIP</button>
                    <button className="text-[10px] font-black uppercase text-slate-400 hover:text-slate-900">Protocols</button>
                </div>
            </div>

        </div>
    );
}

/* UI SUB-COMPONENTS */

function ChartContainer({ title, desc, children, cols }: any) {
    return (
        <Card className={`rounded-[44px] border-slate-200 bg-white shadow-sm overflow-hidden flex flex-col ${cols}`}>
            <CardHeader className="p-8 border-b border-slate-50 mb-6 bg-slate-50/30 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
                <div className="space-y-1 relative z-10">
                    <CardTitle className="text-[11px] font-black uppercase tracking-[0.25em] text-emerald-600">{title}</CardTitle>
                    <p className="text-lg font-black text-slate-900 tracking-tight leading-none">{desc}</p>
                </div>
            </CardHeader>
            <CardContent className="px-8 pb-10 flex-1 relative z-10">{children}</CardContent>
        </Card>
    );
}

function RegistryRow({ id, subject, auth, date, priority, status, success, warning, alert }: any) {
    const statusColor = success ? 'bg-green-100 text-green-700' : warning ? 'bg-blue-100 text-blue-700' : alert ? 'bg-red-100 text-red-700 animate-pulse' : 'bg-slate-100 text-slate-600';
    const priorityColor = priority === 'CRITICAL' ? 'text-red-600' : priority === 'HIGH' ? 'text-orange-600' : 'text-slate-900';

    return (
        <TableRow className="border-none hover:bg-slate-50 transition-all group cursor-default">
            <TableCell className="px-10 py-6">
                <span className="text-[11px] font-mono font-black text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded-md uppercase tracking-tighter">{id}</span>
                <p className="text-[8px] font-black text-slate-400 uppercase mt-2 italic leading-none">Statutory Ref</p>
            </TableCell>
            <TableCell>
                <p className="text-sm font-black text-slate-800 uppercase tracking-tight leading-relaxed max-w-[200px]">{subject}</p>
            </TableCell>
            <TableCell>
                <div className="flex items-center gap-2">
                    <Landmark size={12} className="text-slate-300" />
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{auth}</span>
                </div>
            </TableCell>
            <TableCell className="text-center font-mono font-black text-slate-900 text-[11px] uppercase tracking-tighter">{date}</TableCell>
            <TableCell className="text-center">
                <p className={`text-[9px] font-black uppercase tracking-widest ${priorityColor}`}>{priority}</p>
            </TableCell>
            <TableCell className="text-right px-10">
                <Badge className={`rounded-full px-4 py-1 text-[8px] font-black uppercase border-none shadow-sm ${statusColor}`}>
                    {status}
                </Badge>
            </TableCell>
        </TableRow>
    )
}

function LegendNode({ label, color }: any) {
    return (
        <div className="flex items-center gap-2">
            <div className={`h-1.5 w-1.5 rounded-full ${color}`} />
            <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest">{label}</span>
        </div>
    )
}