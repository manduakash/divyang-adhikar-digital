// app/dashboard/ccpd/reports/national-pwd-status/page.tsx
"use client";
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
    Table, TableBody, TableCell, TableHead, TableHeader, TableRow
} from "@/components/ui/table";
import {
    Users, Globe, Map, Search, Filter, Printer,
    FileSpreadsheet, ArrowUpRight, BadgeCheck,
    Activity, Landmark, MapPin, TrendingUp,
    Download, PieChart, LayoutGrid, History,
    UserCircle2, ShieldCheck, CheckCircle2,
    TrendingDown
} from "lucide-react";
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
    ResponsiveContainer, Cell, Legend, LineChart, Line
} from 'recharts';
import { Badge } from "@/components/ui/badge";
import {
    Select, SelectContent, SelectItem, SelectTrigger, SelectValue
} from "@/components/ui/select";

export default function NationalPwDStatusReport() {

    // STATUTORY AGGREGATES FOR STAT TILES
    const nationalTotals = {
        totalIndia: "26.8M",
        certified: "18.2M",
        ruralReach: "19.1M",
        urbanReach: "7.7M"
    };

    return (
        <div className="space-y-12 animate-in fade-in duration-1000 pb-20 font-sans selection:bg-indigo-100 bg-[#fbfcfd]">

            {/* HUB ADMINISTRATIVE HEADER - CARBON FIBER TEXTURE */}
            <Card className="rounded-[48px] border-none bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 p-1 relative overflow-hidden shadow-2xl shadow-indigo-200">
                <div className="absolute inset-0 opacity-15 pointer-events-none"
                    style={{ backgroundImage: `radial-gradient(black 2px, transparent 0)`, backgroundSize: '4px 4px' }} />
                <div className="bg-white rounded-[44px] p-12 relative z-10 flex flex-col xl:flex-row justify-between items-center gap-10">
                    <div className="space-y-4 flex-1 text-center xl:text-left">
                        <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.3em] border-2 border-indigo-100 shadow-sm">
                            <BadgeCheck size={16} /> National Census Node
                        </div>
                        <h1 className="text-5xl font-black text-slate-900 tracking-tighter uppercase leading-none">National PwD Status Report</h1>
                        <p className="text-slate-500 font-medium italic text-lg max-w-2xl">India-wide overview of disability demographics, certification coverage, and regional trends.</p>
                    </div>

                    <div className="flex flex-col gap-4 min-w-[320px]">
                        <Button className="h-16 px-10 rounded-3xl bg-slate-950 text-white font-black uppercase tracking-widest text-[10px] shadow-xl hover:bg-black transition-all gap-2 group border-t-2 border-white/10">
                            <Printer size={18} /> Print Certified Hub Hub <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </Button>
                        <div className="flex gap-3">
                            <Button variant="outline" className="flex-1 h-12 rounded-xl border-2 border-slate-200 font-black text-[9px] uppercase bg-white gap-2 shadow-sm hover:bg-slate-50"><FileSpreadsheet size={16} className="text-green-600" /> State XLS</Button>
                            <Button variant="outline" className="flex-1 h-12 rounded-xl border-2 border-slate-200 font-black text-[9px] uppercase bg-white gap-2 shadow-sm hover:bg-slate-50"><Download size={16} className="text-blue-600" /> Export All</Button>
                        </div>
                    </div>
                </div>
            </Card>

            {/* STATUTORY PARAMETERS - HIGH CONTRAST SELECTORS */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase text-slate-400 ml-1 tracking-widest leading-none">Primary State Node</label>
                    <Select defaultValue="all">
                        <SelectTrigger className="w-full h-16 py-6 border-2 border-slate-200 bg-white rounded-2xl px-6 font-black text-slate-900 uppercase text-[10px] focus:ring-2 focus:ring-indigo-500">
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="rounded-2xl border-2 border-slate-200 shadow-2xl">
                            <SelectItem value="all" className="font-black uppercase py-4">All States & Union Territories</SelectItem>
                            <SelectItem value="up" className="font-black uppercase py-4">Uttar Pradesh Hub</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase text-slate-400 ml-1 tracking-widest leading-none">Demographic Period</label>
                    <Select defaultValue="fy24">
                        <SelectTrigger className="w-full h-16 py-6 border-2 border-slate-200 bg-white rounded-2xl px-6 font-black text-slate-900 uppercase text-[10px] focus:ring-2 focus:ring-indigo-500">
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="rounded-2xl border-2 border-slate-200 shadow-2xl">
                            <SelectItem value="fy24" className="font-black uppercase py-4">Current Cycle: 2024-25</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div className="flex items-end">
                    <Button className="w-full h-16 bg-blue-600 text-white rounded-2xl font-black uppercase tracking-widest text-[11px] shadow-xl hover:bg-blue-700 transition-all gap-3">
                        <Filter size={18} /> Apply Hub Parameters
                    </Button>
                </div>
            </div>

            {/* KPI TILE STRIP - PATTERNED GRADIENTS */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatTile label="Total PwDs (National)" value={nationalTotals.totalIndia} icon={<Users />} color="from-blue-600 to-indigo-700" />
                <StatTile label="Certified with UDID" value={nationalTotals.certified} icon={<BadgeCheck />} color="from-emerald-500 to-teal-700" success />
                <StatTile label="Rural Demographic" value={nationalTotals.ruralReach} icon={<Landmark />} color="from-orange-500 to-amber-700" />
                <div className="bg-white border-2 border-indigo-100 rounded-[32px] p-8 shadow-sm flex flex-col justify-center relative overflow-hidden group">
                    {/* <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/topography.png')]" /> */}
                    <p className="text-[9px] font-black uppercase text-indigo-400 tracking-widest mb-1 relative z-10">Urban Concentration</p>
                    <p className="text-4xl font-black text-indigo-700 tracking-tighter group-hover:scale-105 transition-transform relative z-10">{nationalTotals.urbanReach}</p>
                </div>
            </div>

            {/* TREND ANALYTICS CHAPTER */}
            <Card className="rounded-[48px] border-2 border-slate-200 shadow-sm overflow-hidden group">
                <CardHeader className="p-8 border-b-2 border-slate-50 bg-indigo-700 flex flex-row justify-between items-center relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10 pointer-events-none"
                        style={{ backgroundImage: `radial-gradient(black 2px, transparent 0)`, backgroundSize: '4px 4px' }} />
                    <div className="flex items-center gap-4 relative z-10">
                        <div className="h-10 w-10 rounded-xl bg-white border-2 border-slate-100 flex items-center justify-center text-blue-600 shadow-md transition-transform group-hover:scale-110">
                            <TrendingUp size={20} />
                        </div>
                        <CardTitle className="text-[11px] font-black uppercase tracking-[0.3em] text-slate-500">Trend (Previous Period)</CardTitle>
                    </div>
                    <Badge className="bg-blue-600 text-white border-none font-black text-[9px] px-4 py-1.5 uppercase tracking-widest">Growth Node Active</Badge>
                </CardHeader>
                <CardContent className="p-10">
                    <ResponsiveContainer width="100%" height={350}>
                        <LineChart data={trendData}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                            <XAxis dataKey="period" axisLine={false} tickLine={false} tick={{ fontSize: 10, fontWeight: 'bold' }} />
                            <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 11, fontWeight: 'bold' }} />
                            <Tooltip contentStyle={{ borderRadius: '24px', border: 'none', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.15)' }} />
                            <Line type="monotone" dataKey="current" stroke="#4f46e5" strokeWidth={5} dot={{ r: 6 }} />
                            <Line type="monotone" dataKey="previous" stroke="#e2e8f0" strokeWidth={3} strokeDasharray="10 10" />
                        </LineChart>
                    </ResponsiveContainer>
                </CardContent>
            </Card>

            {/* MASTER DATA REGISTRY TABLE */}
            <Card className="rounded-[52px] border-2 border-slate-200 shadow-2xl overflow-hidden bg-white min-h-[800px]">
                <CardHeader className="p-0">
                    <div className="p-10 bg-gradient-to-r from-indigo-800 via-indigo-900 to-indigo-900 text-white relative overflow-hidden">
                        {/* 4PX CARBON FIBER HEADER OVERLAY */}
                        <div className="absolute inset-0 opacity-20 pointer-events-none"
                            style={{ backgroundImage: `radial-gradient(black 2px, transparent 0)`, backgroundSize: '4px 4px' }} />

                        <div className="flex flex-col md:flex-row justify-between items-center gap-10 relative z-10">
                            <div className="flex items-center gap-5">
                                <div className="h-12 w-12 rounded-2xl bg-white/10 backdrop-blur-md border-2 border-white/20 flex items-center justify-center shadow-xl">
                                    <Landmark size={24} className="text-blue-400" />
                                </div>
                                <div className="space-y-1">
                                    <CardTitle className="text-sm font-black uppercase tracking-[0.3em] leading-none uppercase">NATIONAL PWD STATUS REGISTRY</CardTitle>
                                    <p className="text-[10px] font-bold text-indigo-300 uppercase tracking-widest leading-none">Consolidated Statewide Demographic Audit</p>
                                </div>
                            </div>
                            <div className="relative group flex-1 max-w-md">
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-white/40" />
                                <input className="w-full pl-11 pr-6 py-4 bg-white/5 border-2 border-white/10 rounded-2xl text-[10px] font-black uppercase outline-none text-white placeholder:text-white/20 focus:bg-white/10 transition-all shadow-inner" placeholder="Registry lookup..." />
                            </div>
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="p-0">
                    <Table>
                        <TableHeader className="bg-slate-50/80 font-sans border-b-2 border-slate-100">
                            <TableRow className="border-none">
                                <TableHead className="px-10 py-8 text-[9px] font-black uppercase tracking-widest text-slate-400">State / UT Hub</TableHead>
                                <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400 text-center">Total PwDs</TableHead>
                                <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400">Disability-wise Breakup</TableHead>
                                <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400 text-center">Rural / Urban Breakup</TableHead>
                                <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400 text-center">PwDs with Certificates</TableHead>
                                <TableHead className="text-right px-10 text-[9px] font-black uppercase tracking-widest text-slate-400">Trend %</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody className="divide-y divide-slate-100 font-sans">
                            <StatRow name="Uttar Pradesh Hub" total="1.24M" breakup="Locomotor (424K) • Visual (182K)" rural="Urban: 30K • Rural: 12K" certs="94.2%" trend="+4.1%" success />
                            <StatRow name="Maharashtra Hub" total="980K" breakup="Hearing (110K) • Multiple (84K)" rural="Urban: 22K • Rural: 14K" certs="82.4%" trend="+2.8%" warning />
                            <StatRow name="West Bengal Node" total="920K" breakup="Intellectual (92K) • SLD (44K)" rural="Urban: 28K • Rural: 10K" certs="91.5%" trend="+3.4%" success />
                            <StatRow name="Karnataka Node" total="450K" breakup="Locomotor (112K) • Visual (38K)" rural="Urban: 18K • Rural: 08K" certs="45.0%" trend="-1.2%" alert />
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>

            {/* FOOTER AUDIT STATUS */}
            <footer className="pt-12 border-t-2 border-slate-100 flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="flex items-center gap-4">
                    <BadgeCheck className="text-indigo-600 shadow-xl" size={24} />
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 leading-none uppercase">Statutory National Node v5.2 • Consolidated Sync Verified</span>
                </div>
            </footer>
        </div>
    );
}

/* UI SUB-COMPONENTS */

function StatTile({ label, value, icon, color, alert, success }: any) {
    return (
        <div className={`group relative text-left p-8 rounded-[44px] overflow-hidden transition-all duration-500 h-52 flex flex-col justify-between shadow-lg hover:shadow-2xl hover:-translate-y-2 bg-gradient-to-br ${color} text-white border-t-2 border-white/20`}>
            {/* <div className="absolute inset-0 opacity-[0.16] pointer-events-none"
                style={{ backgroundImage: `radial-gradient(black 2px, transparent 0)`, backgroundSize: '4px 4px' }} /> */}

            <div className="relative z-10 flex flex-col justify-between h-full">
                <div className="h-12 w-12 rounded-2xl bg-white/20 backdrop-blur-md border-2 border-white/20 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    {React.cloneElement(icon, { size: 24, strokeWidth: 3, className: "text-white" })}
                </div>
                <div>
                    <p className="text-3xl font-black tracking-tighter drop-shadow-md leading-none">{value}</p>
                    <p className="text-[10px] font-black uppercase tracking-widest opacity-80 mt-3">{label}</p>
                </div>
            </div>
            {alert && <div className="absolute top-8 right-8 h-2 w-2 rounded-full bg-white animate-ping" />}
        </div>
    )
}

function StatRow({ name, total, breakup, rural, certs, trend, success, warning, alert }: any) {
    const statusColor = success ? 'bg-green-500 shadow-green-200' : alert ? 'bg-red-500 animate-pulse shadow-red-200' : 'bg-orange-500 shadow-orange-200';
    return (
        <TableRow className="border-none hover:bg-slate-50 transition-all group cursor-default">
            <TableCell className="px-10 py-8 text-left">
                <div className="flex items-center gap-4">
                    <div className={`h-1.5 w-1.5 rounded-full shrink-0 ${statusColor}`} />
                    <span className="text-sm font-black text-slate-950 uppercase tracking-tight leading-none">{name}</span>
                </div>
            </TableCell>
            <TableCell className="text-center font-mono font-black text-indigo-700 text-xs uppercase">{total}</TableCell>
            <TableCell>
                <p className="text-[10px] font-bold text-slate-500 uppercase leading-relaxed tracking-tighter max-w-[200px]">{breakup}</p>
            </TableCell>
            <TableCell className="text-center">
                <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">{rural}</p>
            </TableCell>
            <TableCell className="text-center">
                <div className="flex flex-col items-center gap-1.5">
                    <span className={`text-[11px] font-mono font-black ${alert ? 'text-red-600' : 'text-slate-900'}`}>{certs}</span>
                    <div className="h-1 w-12 bg-slate-100 rounded-full overflow-hidden">
                        <div className={`h-full ${alert ? 'bg-red-500' : 'bg-blue-600'}`} style={{ width: certs }} />
                    </div>
                </div>
            </TableCell>
            <TableCell className="text-right px-10">
                <div className="flex items-center justify-end gap-2">
                    {trend.startsWith('+') ? <TrendingUp size={14} className="text-green-500" /> : <TrendingDown size={14} className="text-red-500" />}
                    <span className={`text-[11px] font-mono font-black ${trend.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>{trend}</span>
                </div>
            </TableCell>
        </TableRow>
    )
}

const trendData = [
    { period: 'FY21', current: 22.4, previous: 20.1 },
    { period: 'FY22', current: 24.8, previous: 22.4 },
    { period: 'FY23', current: 25.1, previous: 24.8 },
    { period: 'FY24', current: 26.8, previous: 25.1 },
];