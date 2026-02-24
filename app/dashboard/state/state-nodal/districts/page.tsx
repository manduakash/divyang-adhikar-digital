// app/dashboard/state/districts/page.tsx
"use client";
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
    Table, TableBody, TableCell, TableHead, TableHeader, TableRow
} from "@/components/ui/table";
import {
    BarChart3, Trophy, AlertTriangle, Search,
    Filter, Printer, FileSpreadsheet, ArrowUpRight,
    Globe, Map, Sparkles, CheckCircle2, TrendingUp,
    Activity, Landmark, ShieldCheck, ChevronRight,
    Zap, Briefcase
} from "lucide-react";
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
    ResponsiveContainer, Cell, Legend
} from 'recharts';
import { Badge } from "@/components/ui/badge";

export default function DistrictPerformancePage() {

    // Statewide Performance Aggregates
    const stateAverages = {
        avgScore: "78.4%",
        bestDistrict: "Lucknow",
        mostImproved: "Varanasi",
        auditsCompleted: "92%"
    };

    return (
        <div className="space-y-10 animate-in fade-in duration-700 pb-20 font-sans">

            {/* 1. PERFORMANCE HUB HEADER */}
            <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-6 bg-white p-10 rounded-[40px] border border-slate-200 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 p-10 opacity-[0.03] pointer-events-none">
                    <BarChart3 size={200} className="text-purple-600" />
                </div>
                <div className="space-y-2 relative z-10">
                    <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border border-purple-200">
                        <TrendingUp size={14} /> Performance Monitoring
                    </div>
                    <h1 className="text-5xl font-black text-slate-900 tracking-tighter uppercase leading-none">District Performance</h1>
                    <p className="text-slate-500 font-medium italic">Comparative Analysis of PwD Act Implementation across all 75 Districts.</p>
                </div>
                <div className="flex gap-4 relative z-10">
                    <Button variant="outline" className="h-14 px-8 rounded-2xl border-slate-200 font-bold bg-white gap-2 shadow-sm">
                        <FileSpreadsheet size={18} className="text-green-600" /> Export Rankings
                    </Button>
                    <Button className="h-14 px-10 rounded-2xl bg-purple-700 text-white font-black uppercase tracking-widest text-[10px] shadow-2xl hover:bg-purple-900 transition-all gap-2">
                        <Sparkles size={18} className="text-purple-300" /> AI Performance Brief
                    </Button>
                </div>
            </div>

            {/* 2. APEX PERFORMANCE TILES (3-Stop Patterned Gradients) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatTile label="State Avg. Compliance" value={stateAverages.avgScore} icon={<ShieldCheck />} color="from-purple-600 via-indigo-700 to-purple-900" trend="+1.2%" />
                <StatTile label="Top Ranked District" value={stateAverages.bestDistrict} icon={<Trophy />} color="from-emerald-500 via-teal-600 to-green-800" />
                <StatTile label="Most Improved District" value={stateAverages.mostImproved} icon={<TrendingUp />} color="from-blue-600 via-blue-700 to-indigo-900" trend="+8.4%" />
                <StatTile label="District Audits Done" value={stateAverages.auditsCompleted} icon={<Activity />} color="from-slate-700 via-slate-800 to-slate-950" />
            </div>

            {/* 3. SECTION: DISTRICT COMPLIANCE COMPARISON (Expanded Chart) */}
            <Card className="rounded-[40px] border-slate-200 bg-white shadow-sm overflow-hidden">
                <CardHeader className="p-8 border-b border-slate-50 bg-slate-50/30 flex flex-row justify-between items-center">
                    <div className="space-y-1">
                        <CardTitle className="text-[11px] font-black uppercase tracking-[0.25em] text-purple-600">District Compliance Score Comparison</CardTitle>
                        <p className="text-lg font-black text-slate-900">Statewide Benchmark Analysis (All 75 Districts)</p>
                    </div>
                    <div className="flex gap-2">
                        <Button variant="ghost" size="icon" className="h-10 w-10 rounded-xl text-slate-300 hover:text-slate-900 transition-colors"><Filter size={18} /></Button>
                        <Button variant="ghost" size="icon" className="h-10 w-10 rounded-xl text-slate-300 hover:text-slate-900 transition-colors"><ArrowUpRight size={18} /></Button>
                    </div>
                </CardHeader>
                <CardContent className="p-10">
                    <ResponsiveContainer width="100%" height={400}>
                        <BarChart data={comparisonData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                            <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 10, fontWeight: 'black' }} />
                            <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 11, fontWeight: 'bold' }} domain={[0, 100]} />
                            <Tooltip cursor={{ fill: '#f8fafc' }} contentStyle={{ borderRadius: '24px', border: 'none', boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1)' }} />
                            <Bar dataKey="score" radius={[12, 12, 0, 0]} barSize={60}>
                                {comparisonData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.score > 80 ? '#7e22ce' : entry.score > 50 ? '#6366f1' : '#ef4444'} />
                                ))}
                            </Bar>
                        </BarChart>
                    </ResponsiveContainer>
                </CardContent>
            </Card>

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">

                {/* 4. PERFORMANCE SNAPSHOTS (Section 9) */}
                <div className="xl:col-span-1 space-y-8">
                    {/* 9.1 TOP 5 PERFORMING */}
                    <Card className="rounded-[40px] border-2 bg-slate-900 text-white shadow-2xl overflow-hidden relative group">
                        <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/blueprint.png')]" />
                        <CardHeader className="p-8 border-b border-white/5 flex flex-row justify-between items-center relative z-10">
                            <div>
                                <CardTitle className="text-xs font-black uppercase tracking-[0.2em] text-purple-400">High Performers</CardTitle>
                                <p className="text-[10px] text-slate-400 font-bold uppercase mt-1">Leading districts by composite score</p>
                            </div>
                            <Trophy size={20} className="text-purple-400 opacity-50" />
                        </CardHeader>
                        <CardContent className="p-0 relative z-10">
                            <div className="divide-y divide-white/5">
                                <RankingRow name="Lucknow" score="98.2%" sub="Grievance Efficiency" rank={1} isTop />
                                <RankingRow name="Gautam Buddha Ngr" score="96.5%" sub="Digital Access" rank={2} isTop />
                                <RankingRow name="Varanasi" score="94.0%" sub="Employment %" rank={3} isTop />
                                <RankingRow name="Agra" score="92.8%" sub="Resource Mapping" rank={4} isTop />
                                <RankingRow name="Kanpur Nagar" score="91.5%" sub="Edu Inclusion" rank={5} isTop />
                            </div>
                        </CardContent>
                    </Card>

                    {/* 9.2 BOTTOM 5 LAGGING */}
                    <Card className="rounded-[40px] border-slate-200 bg-white shadow-sm overflow-hidden flex flex-col">
                        <CardHeader className="p-8 border-b border-slate-50 bg-red-50/50 flex flex-row justify-between items-center">
                            <div>
                                <CardTitle className="text-xs font-black uppercase tracking-[0.2em] text-red-600">Lagging Districts</CardTitle>
                                <p className="text-[10px] text-slate-400 font-bold uppercase mt-1">Requires immediate intervention</p>
                            </div>
                            <AlertTriangle size={20} className="text-red-500 opacity-50" />
                        </CardHeader>
                        <CardContent className="p-0">
                            <div className="divide-y divide-slate-50">
                                <RankingRow name="Sunderbans West" score="42.0%" deficiency="Access Deficit" isBottom />
                                <RankingRow name="Outer Zone 4" score="48.5%" deficiency="High Pendency" isBottom />
                                <RankingRow name="Rural Sector B" score="51.2%" deficiency="Returns Default" isBottom />
                                <RankingRow name="Valley Hub" score="55.0%" deficiency="Employment Gap" isBottom />
                                <RankingRow name="North Hub" score="58.2%" deficiency="Education Deficit" isBottom />
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* 5. DETAILED DISTRICT PERFORMANCE REGISTRY */}
                <Card className="xl:col-span-2 rounded-[40px] border-slate-200 shadow-sm overflow-hidden bg-white">
                    <CardHeader className="p-8 border-b border-slate-50 bg-slate-50/30 flex flex-row justify-between items-center">
                        <CardTitle className="text-sm font-black uppercase tracking-widest text-slate-400">Aggregated District Registry</CardTitle>
                        <div className="relative group">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-400 group-focus-within:text-purple-600" />
                            <input className="pl-9 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-[10px] font-bold outline-none w-64 shadow-inner" placeholder="Search District ID..." />
                        </div>
                    </CardHeader>
                    <CardContent className="p-0">
                        <Table>
                            <TableHeader className="bg-white">
                                <TableRow className="border-slate-100">
                                    <TableHead className="px-8 py-5 text-[9px] font-black uppercase tracking-widest text-slate-400">District Name</TableHead>
                                    <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400 text-center">Grievance SLA</TableHead>
                                    <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400 text-center">Access Score</TableHead>
                                    <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400 text-center">Employment %</TableHead>
                                    <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400 text-center">Composite Score</TableHead>
                                    <TableHead className="text-right px-8 text-[9px] font-black uppercase tracking-widest text-slate-400">Action</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody className="divide-y divide-slate-50">
                                <PerformanceRow name="Lucknow" sla="98%" access="94%" emp="4.2%" total="98.2%" />
                                <PerformanceRow name="Ghaziabad" sla="92%" access="88%" emp="4.0%" total="91.5%" />
                                <PerformanceRow name="Agra" sla="64%" access="42%" emp="2.9%" total="55.0%" alert />
                                <PerformanceRow name="Varanasi" sla="78%" access="65%" emp="3.2%" total="72.4%" warning />
                                <PerformanceRow name="Prayagraj" sla="84%" access="82%" emp="3.8%" total="85.5%" />
                                <PerformanceRow name="Kanpur Nagar" sla="81%" access="74%" emp="3.5%" total="78.2%" />
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}

/* UI SUB-COMPONENTS */

function StatTile({ label, value, icon, color, trend }: any) {
    return (
        <div className={`group relative text-left p-7 rounded-[40px] overflow-hidden transition-all duration-700 h-48 flex flex-col justify-between shadow-lg hover:shadow-xl hover:-translate-y-1 bg-gradient-to-br ${color} text-white border-t border-white/20`}>
            <div className="absolute inset-0 opacity-[0.08] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/topography.png')] group-hover:scale-110 transition-transform duration-[2000ms]" />
            <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />

            <div className="relative z-10 flex flex-col justify-between h-full">
                <div className="h-12 w-12 rounded-2xl bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform">
                    {React.cloneElement(icon, { size: 24, className: "text-white" })}
                </div>
                <div>
                    <div className="flex items-baseline gap-1">
                        <p className="text-3xl font-black tracking-tighter drop-shadow-sm">{value}</p>
                        {trend && <span className="text-[10px] font-black opacity-60 flex items-center gap-0.5 tracking-tighter"> {trend}</span>}
                    </div>
                    <p className="text-[10px] font-black uppercase tracking-[0.15em] opacity-80 leading-tight mt-1">{label}</p>
                </div>
            </div>
        </div>
    )
}

function RankingRow({ name, score, sub, deficiency, rank, isTop, isBottom }: any) {
    return (
        <div className="p-6 flex items-center justify-between group cursor-pointer transition-all hover:bg-slate-50 lg:hover:bg-white/5">
            <div className="flex items-center gap-5">
                {rank && (
                    <div className="h-8 w-8 rounded-lg bg-purple-600/20 flex items-center justify-center text-purple-400 font-black text-xs">
                        {rank}
                    </div>
                )}
                <div className="space-y-1">
                    <h4 className={`text-sm font-black uppercase tracking-tight ${isTop ? 'text-white' : 'text-slate-800'}`}>{name}</h4>
                    <p className={`text-[9px] font-bold uppercase tracking-[0.2em] ${isBottom ? 'text-red-500' : 'text-slate-500'}`}>
                        {sub || deficiency}
                    </p>
                </div>
            </div>
            <div className="text-right flex items-center gap-4">
                <div>
                    <p className={`text-xl font-black ${isBottom ? 'text-red-600' : 'text-purple-400'}`}>{score}</p>
                </div>
                <ArrowUpRight size={18} className={isTop ? 'text-white/20' : 'text-slate-300'} />
            </div>
        </div>
    )
}

function PerformanceRow({ name, sla, access, emp, total, alert, warning }: any) {
    const statusColor = alert ? 'bg-red-500' : warning ? 'bg-orange-500' : 'bg-purple-500';
    return (
        <TableRow className="border-2 hover:bg-slate-50 transition-all group cursor-pointer font-sans">
            <TableCell className="px-8 py-6">
                <div className="flex items-center gap-3">
                    <div className={`h-1.5 w-1.5 rounded-full ${statusColor}`} />
                    <span className="text-xs font-black text-slate-800 uppercase tracking-tight">{name}</span>
                </div>
            </TableCell>
            <TableCell className="text-center font-bold text-slate-400 text-[11px]">{sla}</TableCell>
            <TableCell className="text-center font-bold text-slate-700 text-[11px]">{access}</TableCell>
            <TableCell className="text-center font-bold text-slate-400 text-[11px]">{emp}</TableCell>
            <TableCell className="text-center">
                <span className={`text-[11px] font-mono font-black ${alert ? 'text-red-600 underline' : 'text-purple-600'}`}>
                    {total}
                </span>
            </TableCell>
            <TableCell className="text-right px-8 opacity-0 group-hover:opacity-100 transition-all">
                <button className="text-purple-600 font-black uppercase text-[10px] tracking-widest hover:underline flex items-center gap-1 ml-auto">
                    District <ArrowUpRight size={12} />
                </button>
            </TableCell>
        </TableRow>
    )
}

const comparisonData = [
    { name: 'Lucknow', score: 98 }, { name: 'GB Ngr', score: 96 }, { name: 'Varanasi', score: 72 },
    { name: 'Agra', score: 55 }, { name: 'Kanpur', score: 78 }, { name: 'Meerut', score: 48 },
    { name: 'Jhansi', score: 82 }, { name: 'Prayagraj', score: 85 },
];