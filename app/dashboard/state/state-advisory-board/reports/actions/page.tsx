// app/dashboard/sab/reports/action-points/page.tsx
"use client";
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
    Table, TableBody, TableCell, TableHead, TableHeader, TableRow
} from "@/components/ui/table";
import {
    ListChecks, ClipboardList, Timer, AlertCircle,
    CheckCircle2, Gavel, Search, Filter, Printer,
    FileSpreadsheet, ArrowUpRight, Globe, BadgeCheck,
    History, Clock, Download, Landmark, Activity,
    ShieldCheck, Sparkles, PenTool, TrendingUp
} from "lucide-react";
import {
    PieChart, Pie, Cell, ResponsiveContainer,
    Tooltip, Legend, BarChart, Bar, XAxis, YAxis, CartesianGrid
} from 'recharts';
import { Badge } from "@/components/ui/badge";

export default function ActionPointsReport() {

    // MOCK DATA FOR ACTION POINTS STATUS (PIE CHART)
    const statusData = [
        { name: 'Open', value: 18, color: '#10b981' },
        { name: 'In Progress', value: 34, color: '#3b82f6' },
        { name: 'Closed', value: 62, color: '#e2e8f0' },
    ];

    return (
        <div className="space-y-10 animate-in fade-in duration-1000 pb-20 font-sans selection:bg-emerald-100">

            {/* 1. APEX HUB HEADER - CARBON FIBER TEXTURE */}
            <Card className="rounded-[48px] border-none bg-white p-1 relative overflow-hidden shadow-2xl shadow-slate-200">
                <div className="p-12 relative z-10 flex flex-col xl:flex-row justify-between items-start xl:items-center gap-10">
                    <div className="flex items-center gap-8">
                        <div className="h-24 w-24 bg-gradient-to-br from-emerald-600 via-teal-600 to-indigo-700 rounded-[32px] flex items-center justify-center text-white shadow-2xl shadow-emerald-500/20 group hover:rotate-6 transition-transform">
                            <ListChecks size={42} />
                        </div>
                        <div className="space-y-2">
                            <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.2em] border border-emerald-100">
                                <BadgeCheck size={14} /> Statutory Execution Node
                            </div>
                            <h1 className="text-5xl font-black text-slate-900 tracking-tighter uppercase leading-none text-wrap">Action Points Status Report</h1>
                            <p className="text-slate-500 font-medium italic text-lg tracking-tight uppercase tracking-widest text-xs">Tracking follow-up actions emerging from Advisory Board meetings.</p>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <Button variant="outline" className="h-16 px-10 rounded-3xl border-slate-200 font-black uppercase tracking-widest text-[10px] bg-white gap-2 shadow-sm hover:bg-slate-50 transition-all">
                            <History size={20} className="text-blue-600" /> Action point tracker
                        </Button>
                        <Button className="h-16 px-12 rounded-3xl bg-slate-950 text-white font-black uppercase tracking-widest text-[10px] shadow-2xl hover:bg-black transition-all group">
                            <Printer size={20} /> Print Certified Copy
                        </Button>
                    </div>
                </div>
            </Card>

            {/* 2. ANALYTICS GRID */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                {/* ACTION POINTS STATUS (PIE CHART) */}
                <ChartContainer title="Action Points Status" desc="Fulfillment distribution across Open / In Progress / Closed items." cols="lg:col-span-5">
                    <div className="h-[300px] w-full relative flex items-center justify-center">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie data={statusData} innerRadius={80} outerRadius={110} paddingAngle={8} dataKey="value">
                                    {statusData.map((entry, index) => <Cell key={index} fill={entry.color} stroke="none" />)}
                                </Pie>
                                <Tooltip />
                            </PieChart>
                        </ResponsiveContainer>
                        <div className="absolute text-center space-y-1">
                            <p className="text-5xl font-black text-slate-900 tracking-tighter leading-none">114</p>
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Total Points</p>
                        </div>
                    </div>
                    <div className="flex justify-center gap-6 mt-6 pt-6 border-t border-slate-50">
                        <LegendNode label="Open" color="bg-emerald-500" />
                        <LegendNode label="In Progress" color="bg-blue-500" />
                        <LegendNode label="Closed" color="bg-slate-200" />
                    </div>
                </ChartContainer>

                {/* TASK VELOCITY BARS */}
                <ChartContainer title="District Task Load" desc="Active action points distributed by regional node." cols="lg:col-span-7">
                    <ResponsiveContainer width="100%" height={350}>
                        <BarChart data={taskLoadData}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                            <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 10, fontWeight: 'black' }} />
                            <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10, fontWeight: 'bold' }} />
                            <Tooltip cursor={{ fill: '#f8fafc' }} contentStyle={{ borderRadius: '24px', border: 'none', boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1)' }} />
                            <Bar dataKey="tasks" fill="#10b981" radius={[10, 10, 0, 0]} barSize={50} />
                        </BarChart>
                    </ResponsiveContainer>
                </ChartContainer>
            </div>

            {/* 3. STATUTORY LEDGER - CARBON FIBER OVERLAY */}
            <Card className="rounded-[48px] border-slate-200 shadow-sm overflow-hidden bg-white">
                <CardHeader className="p-0">
                    <div className="p-10 bg-gradient-to-r from-emerald-600 via-indigo-600 to-purple-700 text-white relative overflow-hidden">
                        {/* CARBON FIBER TEXTURE */}
                        <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />

                        <div className="flex flex-col md:flex-row justify-between items-center gap-10 relative z-10">
                            <div className="flex items-center gap-5">
                                <div className="h-14 w-14 rounded-2xl bg-white/20 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-xl">
                                    <ClipboardList size={28} />
                                </div>
                                <div className="space-y-1">
                                    <CardTitle className="text-xl font-black uppercase tracking-tight leading-none uppercase">Action Point Registry</CardTitle>
                                    <p className="text-[10px] font-bold text-emerald-100 uppercase tracking-widest leading-none">Administrative follow-up tracker for board decisions</p>
                                </div>
                            </div>
                            <div className="relative group flex-1 max-w-md">
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-white/50" />
                                <input className="w-full pl-12 pr-6 py-4 bg-white/10 border border-white/20 rounded-2xl text-[10px] font-black uppercase outline-none text-white placeholder:text-white/30 focus:bg-white/20 transition-all shadow-inner" placeholder="Search by Authority or Point ID..." />
                            </div>
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="p-0">
                    <Table>
                        <TableHeader className="bg-slate-50/80 font-sans">
                            <TableRow className="border-slate-100">
                                <TableHead className="px-10 py-6 text-[9px] font-black uppercase tracking-widest text-slate-400">Point ID</TableHead>
                                <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400">Meeting Reference</TableHead>
                                <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400">Action Point Description</TableHead>
                                <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400">Responsible Authority</TableHead>
                                <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400 text-center">Target Date</TableHead>
                                <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400 text-center">Status</TableHead>
                                <TableHead className="text-right px-10 text-[9px] font-black uppercase tracking-widest text-slate-400">Remarks</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody className="divide-y divide-slate-50 font-sans">
                            <ActionRow
                                id="ACT-SAB-012"
                                refNo="SAB/2024/091"
                                desc="Conduct District-wise e-Audit of Portals"
                                auth="Secretariat"
                                date="15 Nov 2024"
                                status="IN PROGRESS"
                                warning
                            />
                            <ActionRow
                                id="ACT-SAB-088"
                                refNo="SAB/2024/044"
                                desc="Audit of Ramp Slope in Lucknow RTO"
                                auth="DM Lucknow"
                                date="10 Oct 2024"
                                status="OVERDUE"
                                alert
                            />
                            <ActionRow
                                id="ACT-SAB-112"
                                refNo="SAB/2023/118"
                                desc="Publication of Scribe Policy V2"
                                auth="Education Dept"
                                date="05 Oct 2024"
                                status="CLOSED"
                                success
                            />
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>

            {/* FOOTER - PENDING ALERTS */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-10 border-t border-slate-200">
                <div className="flex items-start gap-5">
                    <div className="h-12 w-12 rounded-2xl bg-orange-50 flex items-center justify-center text-orange-600 shadow-sm border border-orange-100">
                        <Timer size={24} className="animate-pulse" />
                    </div>
                    <div className="space-y-2">
                        <p className="text-[11px] font-black text-orange-600 uppercase tracking-widest">Pending action alerts</p>
                        <p className="text-sm font-medium text-slate-500 italic uppercase tracking-tighter leading-relaxed">
                            "09 Action items have breached the target date. Automated follow-up reminders dispatched to Department nodes."
                        </p>
                    </div>
                </div>
                <div className="flex items-center justify-end gap-6">
                    <div className="flex items-center gap-3 text-slate-400">
                        <Globe size={18} className="text-emerald-600" />
                        <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 leading-none">Statutory Board Sync Node Active</span>
                    </div>
                    <Button className="h-14 px-10 rounded-2xl bg-emerald-600 text-white font-black uppercase tracking-widest text-[9px] shadow-lg shadow-emerald-900/20 group transition-all hover:scale-105">
                        Issue Summons <ArrowUpRight size={14} className="ml-2" />
                    </Button>
                </div>
            </div>

        </div>
    );
}

/* UI SUB-COMPONENTS */

function ActionRow({ id, refNo, desc, auth, date, status, alert, success, warning }: any) {
    const statusColor = success ? 'bg-green-100 text-green-700' : alert ? 'bg-red-100 text-red-700 animate-pulse' : warning ? 'bg-blue-100 text-blue-700' : 'bg-slate-100 text-slate-600';
    return (
        <TableRow className="border-none hover:bg-slate-50 transition-all group cursor-default">
            <TableCell className="px-10 py-6">
                <span className="text-[11px] font-mono font-black text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded-md uppercase tracking-tighter">{id}</span>
            </TableCell>
            <TableCell>
                <p className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest leading-none">{refNo}</p>
            </TableCell>
            <TableCell>
                <p className="text-xs font-black text-slate-800 uppercase tracking-tight leading-relaxed max-w-[240px]">{desc}</p>
            </TableCell>
            <TableCell>
                <div className="flex items-center gap-2">
                    <Landmark size={12} className="text-slate-300" />
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{auth}</span>
                </div>
            </TableCell>
            <TableCell className="text-center font-mono font-black text-slate-900 text-[11px] uppercase tracking-tighter">{date}</TableCell>
            <TableCell className="text-center">
                <Badge className={`rounded-full px-4 py-1 text-[8px] font-black uppercase border-none shadow-sm ${statusColor}`}>
                    {status}
                </Badge>
            </TableCell>
            <TableCell className="text-right px-10">
                <p className={`text-[10px] font-medium italic ${alert ? 'text-red-500' : 'text-slate-400'}`}>Node Acknowledged</p>
            </TableCell>
        </TableRow>
    )
}

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

function LegendNode({ label, color }: any) {
    return (
        <div className="flex items-center gap-2">
            <div className={`h-1.5 w-1.5 rounded-full ${color}`} />
            <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest">{label}</span>
        </div>
    )
}

const taskLoadData = [{ name: 'LKO Hub', tasks: 24 }, { name: 'VNS Node', tasks: 18 }, { name: 'AGR Sector', tasks: 32 }, { name: 'MRT Hub', tasks: 14 }, { name: 'GBN Node', tasks: 26 }];