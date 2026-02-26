// app/dashboard/sab/reports/composition/page.tsx
"use client";
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
    Table, TableBody, TableCell, TableHead, TableHeader, TableRow
} from "@/components/ui/table";
import {
    Users, UserCheck, Calendar, ShieldCheck,
    Search, Filter, Printer, FileSpreadsheet,
    ArrowUpRight, Globe, BadgeCheck, Activity,
    Landmark, UserPlus, Timer, PieChart as PieIcon,
    TrendingUp, Download, Layers, Sparkles,
    AlertTriangle,
    FileText
} from "lucide-react";
import {
    PieChart, Pie, Cell, ResponsiveContainer,
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend
} from 'recharts';
import { Badge } from "@/components/ui/badge";

export default function BoardCompositionReport() {

    // MOCK DATA FOR CHARTS (Based on statutory categories)
    const roleDistribution = [
        { name: 'Chairperson', value: 1, color: '#059669' },
        { name: 'Member Secretary', value: 1, color: '#0d9488' },
        { name: 'Members', value: 26, color: '#10b981' },
    ];

    const categoryData = [
        { name: 'Govt Dept', count: 12 },
        { name: 'NGO', count: 6 },
        { name: 'Expert', count: 4 },
        { name: 'PwD', count: 4 },
        { name: 'Other', count: 2 },
    ];

    return (
        <div className="space-y-10 animate-in fade-in duration-1000 pb-20 font-sans selection:bg-emerald-100">

            {/* 1. APEX HUB HEADER - CARBON FIBER TEXTURE */}
            <Card className="rounded-[48px] border-none bg-white p-1 relative overflow-hidden shadow-2xl shadow-slate-200">
                <div className="p-12 relative z-10 flex flex-col xl:flex-row justify-between items-start xl:items-center gap-10">
                    <div className="flex items-center gap-8">
                        <div className="h-24 w-24 bg-gradient-to-br from-emerald-600 via-teal-600 to-emerald-700 rounded-[32px] flex items-center justify-center text-white shadow-2xl shadow-emerald-500/20 group hover:rotate-6 transition-transform">
                            <Users size={42} />
                        </div>
                        <div className="space-y-2">
                            <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.2em] border border-emerald-100">
                                <BadgeCheck size={14} /> Board Composition Registry
                            </div>
                            <h1 className="text-5xl font-black text-slate-900 tracking-tighter uppercase leading-none">Composition Report</h1>
                            <p className="text-slate-500 font-medium italic text-lg tracking-tight uppercase tracking-widest text-xs">Statutory monitor of current and historical board incumbency.</p>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <Button variant="outline" className="h-16 px-10 rounded-3xl border-slate-200 font-black uppercase tracking-widest text-[10px] bg-white gap-2 shadow-sm hover:bg-slate-50 transition-all">
                            <FileSpreadsheet size={20} className="text-green-600" /> Export Registry
                        </Button>
                        <Button className="h-16 px-12 rounded-3xl bg-slate-950 text-white font-black uppercase tracking-widest text-[10px] shadow-2xl hover:bg-black transition-all gap-3">
                            <Printer size={20} /> Print Certified Copy
                        </Button>
                    </div>
                </div>
            </Card>

            {/* 2. ANALYTICS GRID (NEW CREATIVE SECTION) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

                {/* ROLE DISTRIBUTION DONUT */}
                <Card className="lg:col-span-4 rounded-[44px] border-slate-200 bg-white shadow-xl overflow-hidden relative group">
                    <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/topography.png')]" />
                    <CardHeader className="p-8 border-b border-slate-50 bg-slate-50/30">
                        <CardTitle className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Board Role Distribution</CardTitle>
                    </CardHeader>
                    <div className="p-10 flex flex-col items-center">
                        <div className="h-[250px] w-full relative flex items-center justify-center">
                            <ResponsiveContainer width="100%" height="100%">
                                <PieChart>
                                    <Pie data={roleDistribution} innerRadius={80} outerRadius={100} paddingAngle={8} dataKey="value">
                                        {roleDistribution.map((entry, index) => <Cell key={index} fill={entry.color} />)}
                                    </Pie>
                                    <Tooltip />
                                </PieChart>
                            </ResponsiveContainer>
                            <div className="absolute text-center space-y-1">
                                <p className="text-4xl font-black text-slate-900 tracking-tighter leading-none">28</p>
                                <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Total Members</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4 w-full mt-8 pt-8 border-t border-slate-50">
                            <LegendRow label="Apex" val="02" color="bg-emerald-600" />
                            <LegendRow label="Members" val="26" color="bg-emerald-300" />
                        </div>
                    </div>
                </Card>

                {/* CATEGORY REPRESENTATION BARS */}
                <Card className="lg:col-span-8 rounded-[44px] border-slate-200 bg-white shadow-xl overflow-hidden group">
                    <CardHeader className="p-8 border-b border-slate-50 bg-slate-50/30">
                        <CardTitle className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Representing Category aggregation</CardTitle>
                    </CardHeader>
                    <div className="p-10">
                        <ResponsiveContainer width="100%" height={350}>
                            <BarChart data={categoryData} margin={{ top: 20, right: 30, left: 0, bottom: 20 }}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 10, fontWeight: 'black' }} />
                                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10, fontWeight: 'bold' }} />
                                <Tooltip cursor={{ fill: '#f8fafc' }} contentStyle={{ borderRadius: '20px', border: 'none', boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1)' }} />
                                <Bar dataKey="count" fill="#10b981" radius={[12, 12, 0, 0]} barSize={60}>
                                    {categoryData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={index % 2 === 0 ? '#10b981' : '#34d399'} />
                                    ))}
                                </Bar>
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </Card>
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
                                    <FileText size={28} />
                                </div>
                                <div className="space-y-1">
                                    <CardTitle className="text-xl font-black uppercase tracking-tight">Composition list</CardTitle>
                                    <p className="text-[10px] font-bold text-emerald-100 uppercase tracking-widest leading-none">Statewide Member Registry Node v4.0</p>
                                </div>
                            </div>
                            <div className="relative group flex-1 max-w-md">
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-white/50" />
                                <input className="w-full pl-12 pr-6 py-4 bg-white/10 border border-white/20 rounded-2xl text-[10px] font-black uppercase outline-none text-white placeholder:text-white/30 focus:bg-white/20 transition-all shadow-inner" placeholder="Filter by Member Name..." />
                            </div>
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="p-0">
                    <Table>
                        <TableHeader className="bg-slate-50/80">
                            <TableRow className="border-slate-100">
                                <TableHead className="px-10 py-6 text-[9px] font-black uppercase tracking-widest text-slate-400">Member Name</TableHead>
                                <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400">Role</TableHead>
                                <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400 text-center">Representing Category</TableHead>
                                <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400 text-center">Date of Nomination</TableHead>
                                <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400 text-center">Tenure End Date</TableHead>
                                <TableHead className="text-right px-10 text-[9px] font-black uppercase tracking-widest text-slate-400">Status</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody className="divide-y divide-slate-50 font-sans">
                            <RegistryRow
                                name="Dr. Rajesh Mehra"
                                role="Chairperson"
                                cat="Expert"
                                nomDate="12 Jan 2022"
                                endDate="11 Jan 2025"
                                status="ACTIVE"
                                success
                            />
                            <RegistryRow
                                name="Amitabh Kant, IAS"
                                role="Member Secretary"
                                cat="Govt Dept"
                                nomDate="10 Oct 2023"
                                endDate="09 Oct 2026"
                                status="ACTIVE"
                                success
                            />
                            <RegistryRow
                                name="NGO Vacancy Hub"
                                role="Member"
                                cat="NGO"
                                nomDate="--"
                                endDate="--"
                                status="VACANT"
                                alert
                            />
                            <RegistryRow
                                name="Sr. Maria J."
                                role="Member"
                                cat="PwD"
                                nomDate="05 Feb 2023"
                                endDate="04 Feb 2026"
                                status="ACTIVE"
                                success
                            />
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>

            {/* FOOTER - VACANCY ALERTS AREA */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-10 border-t border-slate-200">
                <div className="flex items-start gap-5">
                    <div className="h-12 w-12 rounded-2xl bg-red-50 flex items-center justify-center text-red-600 shadow-sm border border-red-100">
                        <AlertTriangle size={24} />
                    </div>
                    <div className="space-y-2">
                        <p className="text-[11px] font-black text-red-600 uppercase tracking-widest">Vacancy / tenure expiry alerts</p>
                        <p className="text-sm font-medium text-slate-500 italic uppercase tracking-tighter leading-relaxed">
                            "Position 'Member (NGO)' has been vacant since 142 days. Tenure for 'Chairperson' expires in 82 days."
                        </p>
                    </div>
                </div>
                <div className="flex items-center justify-end gap-6">
                    <div className="flex items-center gap-3 text-slate-400">
                        <Globe size={18} className="text-emerald-600" />
                        <span className="text-[9px] font-black uppercase tracking-widest">National Board Node: Synced</span>
                    </div>
                    <Button className="h-14 px-10 rounded-2xl bg-emerald-600 text-white font-black uppercase tracking-widest text-[9px] shadow-lg shadow-emerald-900/20 group">
                        Notify Nodal Office <ArrowUpRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                </div>
            </div>

        </div>
    );
}

/* UI SUB-COMPONENTS */

function LegendRow({ label, val, color }: any) {
    return (
        <div className="flex justify-between items-center bg-slate-50 p-3 rounded-xl border border-slate-100">
            <div className="flex items-center gap-3">
                <div className={`h-2 w-2 rounded-full ${color}`} />
                <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest">{label}</span>
            </div>
            <span className="text-sm font-black text-slate-900">{val}</span>
        </div>
    )
}

function RegistryRow({ name, role, cat, nomDate, endDate, status, success, alert }: any) {
    const statusColor = success ? 'bg-green-100 text-green-700' : alert ? 'bg-red-100 text-red-700 animate-pulse' : 'bg-blue-100 text-blue-700';
    return (
        <TableRow className="border-none hover:bg-slate-50 transition-all group cursor-default">
            <TableCell className="px-10 py-6">
                <div className="flex items-center gap-3">
                    <div className={`h-1.5 w-1.5 rounded-full shrink-0 ${success ? 'bg-green-500' : 'bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.5)]'}`} />
                    <span className="text-sm font-black text-slate-900 uppercase tracking-tight">{name}</span>
                </div>
            </TableCell>
            <TableCell>
                <Badge className="bg-slate-100 text-slate-600 border-none font-black text-[8px] uppercase px-3 py-1 tracking-widest">{role}</Badge>
            </TableCell>
            <TableCell className="text-center">
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{cat}</span>
            </TableCell>
            <TableCell className="text-center font-mono font-black text-indigo-700 text-[11px]">{nomDate}</TableCell>
            <TableCell className="text-center font-mono font-black text-slate-900 text-[11px]">{endDate}</TableCell>
            <TableCell className="text-right px-10">
                <Badge className={`rounded-full px-4 py-1 text-[8px] font-black uppercase border-none shadow-sm ${statusColor}`}>
                    {status}
                </Badge>
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
                    <p className="text-lg font-black text-slate-900 tracking-tight">{desc}</p>
                </div>
            </CardHeader>
            <CardContent className="px-8 pb-10 flex-1 relative z-10">{children}</CardContent>
        </Card>
    );
}