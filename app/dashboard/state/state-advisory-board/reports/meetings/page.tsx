// app/dashboard/sab/reports/meetings/page.tsx
"use client";
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
    Table, TableBody, TableCell, TableHead, TableHeader, TableRow
} from "@/components/ui/table";
import {
    Calendar, Landmark, Video, Clock, MessageSquare,
    ShieldCheck, Search, Filter, Printer, FileSpreadsheet,
    ArrowUpRight, Globe, BadgeCheck, Activity,
    Timer, History, Download, Sparkles, FileText,
    CheckCircle2, Plus, MousePointer2,
    MapPin
} from "lucide-react";
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip,
    ResponsiveContainer, BarChart, Bar, Legend, Cell,
    AreaChart, Area
} from 'recharts';
import { Badge } from "@/components/ui/badge";

export default function MeetingsHeldReport() {

    // MOCK DATA FOR ANALYTICS (Based on statutory meeting types)
    const attendanceTrend = [
        { name: 'M1', rate: 88 }, { name: 'M2', rate: 92 },
        { name: 'M3', rate: 84 }, { name: 'M4', rate: 95 },
        { name: 'M5', rate: 98 }, { name: 'M6', rate: 91 },
    ];

    const meetingVolData = [
        { quarter: 'Q1', ordinary: 3, special: 1 },
        { quarter: 'Q2', ordinary: 2, special: 0 },
        { quarter: 'Q3', ordinary: 4, special: 1 },
        { quarter: 'Q4', ordinary: 1, special: 0 },
    ];

    return (
        <div className="space-y-10 animate-in fade-in duration-1000 pb-20 font-sans selection:bg-emerald-100">

            {/* 1. APEX HUB HEADER - CARBON FIBER TEXTURE */}
            <Card className="rounded-[48px] border-none bg-white p-1 relative overflow-hidden shadow-2xl shadow-slate-200">
                <div className="p-12 relative z-10 flex flex-col xl:flex-row justify-between items-start xl:items-center gap-10">
                    <div className="flex items-center gap-8">
                        <div className="h-24 w-24 bg-gradient-to-br from-blue-600 via-indigo-600 to-blue-700 rounded-[32px] flex items-center justify-center text-white shadow-2xl shadow-blue-500/20 group hover:rotate-6 transition-transform">
                            <Landmark size={42} />
                        </div>
                        <div className="space-y-2">
                            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.2em] border border-blue-100">
                                <BadgeCheck size={14} /> Secretariat Meeting Node
                            </div>
                            <h1 className="text-5xl font-black text-slate-900 tracking-tighter uppercase leading-none text-wrap">Meetings Held Report</h1>
                            <p className="text-slate-500 font-medium italic text-lg tracking-tight uppercase tracking-widest text-xs">Statutory record of ordinary and special board deliberations.</p>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <Button variant="outline" className="h-16 px-10 rounded-3xl border-slate-200 font-black uppercase tracking-widest text-[10px] bg-white gap-2 shadow-sm hover:bg-slate-50 transition-all">
                            <Calendar size={20} className="text-blue-600" /> Meeting calendar
                        </Button>
                        <Button className="h-16 px-12 rounded-3xl bg-slate-950 text-white font-black uppercase tracking-widest text-[10px] shadow-2xl hover:bg-black transition-all">
                            <Printer size={20} /> Print Certified Hub
                        </Button>
                    </div>
                </div>
            </Card>

            {/* 2. ANALYTICS GRID */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                {/* ATTENDANCE RATE TREND (Area Chart) */}
                <ChartContainer title="Board Attendance Performance" desc="Tracking member participation rate across recent sessions." cols="lg:col-span-7">
                    <ResponsiveContainer width="100%" height={300}>
                        <AreaChart data={attendanceTrend}>
                            <defs>
                                <linearGradient id="colorRate" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.2} />
                                    <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                            <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 10, fontWeight: 'bold' }} />
                            <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10, fontWeight: 'bold' }} domain={[0, 100]} />
                            <Tooltip contentStyle={{ borderRadius: '20px', border: 'none', boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1)' }} />
                            <Area type="monotone" dataKey="rate" stroke="#10b981" strokeWidth={4} fillOpacity={1} fill="url(#colorRate)" />
                        </AreaChart>
                    </ResponsiveContainer>
                </ChartContainer>

                {/* VOLUME SUMMARY */}
                <Card className="lg:col-span-5 rounded-[44px] border-slate-200 bg-white shadow-xl overflow-hidden relative">
                    <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/topography.png')]" />
                    <CardHeader className="p-8 border-b border-slate-50 bg-slate-50/30">
                        <CardTitle className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Statutory Meeting Volume</CardTitle>
                    </CardHeader>
                    <div className="p-8 space-y-6">
                        <div className="grid grid-cols-2 gap-4">
                            <StatBox label="Total Meetings" val="12" color="text-slate-900" />
                            <StatBox label="Ordinary" val="10" color="text-emerald-600" />
                            <StatBox label="Special" val="02" color="text-orange-500" />
                            <StatBox label="Upcoming" val="01" color="text-blue-600" />
                        </div>
                        <div className="pt-6 border-t border-slate-100 flex justify-between items-center">
                            <p className="text-[9px] font-black uppercase text-slate-400 tracking-widest leading-tight">Average Quorum Status</p>
                            <Badge className="bg-green-100 text-green-700 border-none font-black text-[9px] uppercase">94.2% Fulfilled</Badge>
                        </div>
                    </div>
                </Card>
            </div>

            {/* 3. STATUTORY LEDGER - CARBON FIBER OVERLAY */}
            <Card className="rounded-[48px] border-slate-200 shadow-sm overflow-hidden bg-white">
                <CardHeader className="p-0">
                    <div className="p-10 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 text-white relative overflow-hidden">
                        {/* CARBON FIBER TEXTURE */}
                        <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />

                        <div className="flex flex-col md:flex-row justify-between items-center gap-10 relative z-10">
                            <div className="flex items-center gap-5">
                                <div className="h-14 w-14 rounded-2xl bg-white/20 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-xl">
                                    <FileText size={28} />
                                </div>
                                <div className="space-y-1">
                                    <CardTitle className="text-xl font-black uppercase tracking-tight leading-none uppercase">Statewide Statutory Ledger</CardTitle>
                                    <p className="text-[10px] font-bold text-blue-100 uppercase tracking-widest leading-none">Automated meeting notices & record registry</p>
                                </div>
                            </div>
                            <div className="relative group flex-1 max-w-md">
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-white/50" />
                                <input className="w-full pl-12 pr-6 py-4 bg-white/10 border border-white/20 rounded-2xl text-[10px] font-black uppercase outline-none text-white placeholder:text-white/30 focus:bg-white/20 transition-all shadow-inner" placeholder="Search Meeting Reference..." />
                            </div>
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="p-0">
                    <Table>
                        <TableHeader className="bg-slate-50/80">
                            <TableRow className="border-slate-100">
                                <TableHead className="px-10 py-6 text-[9px] font-black uppercase tracking-widest text-slate-400">Meeting Reference</TableHead>
                                <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400">Date and time</TableHead>
                                <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400">Venue / Video Link</TableHead>
                                <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400">Agenda Summary</TableHead>
                                <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400 text-center">Attendance %</TableHead>
                                <TableHead className="text-right px-10 text-[9px] font-black uppercase tracking-widest text-slate-400">Status</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody className="divide-y divide-slate-50 font-sans">
                            <MeetingRow
                                refNo="SAB/2024/091"
                                dateTime="14 Oct, 10:30 AM"
                                type="Ordinary"
                                venue="Secretariat Block-C"
                                agenda="Accessibility Policy Review"
                                attend="98.5%"
                                status="VERIFIED"
                                success
                            />
                            <MeetingRow
                                refNo="SAB/2024/044"
                                dateTime="05 Sep, 11:00 AM"
                                type="Special"
                                venue="Virtual (Node 4)"
                                agenda="Emergency Flood Mapping"
                                attend="84.0%"
                                status="ARCHIVED"
                            />
                            <MeetingRow
                                refNo="SAB/2024/112"
                                dateTime="12 Nov, 02:00 PM"
                                type="Ordinary"
                                venue="Conference Hall B"
                                agenda="Employment Quota Audit"
                                attend="--"
                                status="SCHEDULED"
                                warning
                            />
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>

            {/* FOOTER - SYSTEM INTEGRITY */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-10 border-t border-slate-200">
                <div className="flex items-center gap-4 text-slate-400">
                    <Globe size={20} className="text-blue-600 animate-pulse" />
                    <span className="text-[10px] font-black uppercase tracking-widest leading-none">Secretariat Sync: 12 Statutory Meeting Records Active</span>
                </div>
                <div className="flex gap-4">
                    <button className="text-[10px] font-black uppercase text-blue-600 hover:underline">Meeting Notice Archive</button>
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
                    <CardTitle className="text-[11px] font-black uppercase tracking-[0.25em] text-blue-600">{title}</CardTitle>
                    <p className="text-lg font-black text-slate-900 tracking-tight">{desc}</p>
                </div>
            </CardHeader>
            <CardContent className="px-8 pb-10 flex-1 relative z-10">{children}</CardContent>
        </Card>
    );
}

function StatBox({ label, val, color }: any) {
    return (
        <div className="p-6 bg-slate-50 rounded-[32px] border border-slate-100 text-center space-y-1 group hover:bg-white hover:shadow-lg transition-all cursor-default">
            <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest">{label}</p>
            <p className={`text-3xl font-black ${color} tracking-tighter`}>{val}</p>
        </div>
    )
}

function MeetingRow({ refNo, dateTime, type, venue, agenda, attend, status, success, warning }: any) {
    const statusColor = success ? 'bg-green-100 text-green-700' : warning ? 'bg-blue-100 text-blue-700' : 'bg-slate-100 text-slate-600';
    return (
        <TableRow className="border-none hover:bg-slate-50 transition-all group cursor-default">
            <TableCell className="px-10 py-6">
                <span className="text-[11px] font-mono font-black text-blue-700 bg-blue-50 px-2 py-0.5 rounded-md uppercase tracking-tighter">{refNo}</span>
                <p className="text-[8px] font-black text-slate-400 uppercase mt-2 italic leading-none">{type} Type</p>
            </TableCell>
            <TableCell>
                <div className="flex items-center gap-3">
                    <Clock size={14} className="text-slate-300" />
                    <span className="text-xs font-black text-slate-900 uppercase tracking-tight">{dateTime}</span>
                </div>
            </TableCell>
            <TableCell>
                <div className="flex items-center gap-3">
                    <MapPin size={14} className="text-slate-300" />
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest truncate max-w-[120px]">{venue}</span>
                </div>
            </TableCell>
            <TableCell>
                <p className="text-[10px] font-black text-slate-600 uppercase tracking-widest leading-relaxed max-w-[180px]">{agenda}</p>
            </TableCell>
            <TableCell className="text-center">
                <span className={`text-[11px] font-mono font-black ${attend === '--' ? 'text-slate-200' : 'text-emerald-600'}`}>{attend}</span>
            </TableCell>
            <TableCell className="text-right px-10">
                <Badge className={`rounded-full px-4 py-1 text-[8px] font-black uppercase border-none shadow-none ${statusColor}`}>
                    {status}
                </Badge>
            </TableCell>
        </TableRow>
    )
}