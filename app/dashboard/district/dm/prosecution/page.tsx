// app/dashboard/district/prosecution/page.tsx
"use client";
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
    Table, TableBody, TableCell, TableHead, TableHeader, TableRow
} from "@/components/ui/table";
import {
    Scale, Gavel, Calendar, Building2, AlertCircle,
    Search, Filter, Download, FileText, ChevronRight,
    UserCheck, ShieldAlert, History, ArrowUpRight
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid,
    Tooltip, ResponsiveContainer, Cell
} from 'recharts';

export default function ProsecutionStatusPage() {

    // Section 5.7 Mandated KPIs
    const judicialStats = [
        { label: "Total PwD Cases", value: "24", icon: Scale, color: "text-slate-900" },
        { label: "Trials Active", value: "18", icon: Gavel, color: "text-blue-600" },
        { label: "Next 7 Days Hearings", value: "05", icon: Calendar, color: "text-purple-600" },
        { label: "Convictions / Closed", value: "02", icon: UserCheck, color: "text-green-600" },
    ];

    return (
        <div className="space-y-8 animate-in fade-in duration-700 pb-20">

            {/* 1. JUDICIAL OVERVIEW HEADER */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 bg-white p-8 rounded-[40px] border border-slate-200 shadow-sm">
                <div className="flex items-center gap-6">
                    <div className="h-16 w-16 bg-slate-900 rounded-2xl flex items-center justify-center text-white shadow-xl">
                        <Scale size={32} />
                    </div>
                    <div>
                        <h1 className="text-3xl font-black text-slate-900 tracking-tight uppercase leading-none">Prosecution Oversight</h1>
                        <p className="text-slate-500 font-medium mt-2 text-sm italic">Monitoring District Special PP Proceedings • Section 5.7 Registry</p>
                    </div>
                </div>
                <div className="flex gap-3">
                    <Button variant="outline" className="h-12 px-6 rounded-2xl border-slate-200 font-bold gap-2">
                        <FileText size={16} /> Briefing Note
                    </Button>
                    <Button className="h-12 px-8 rounded-2xl bg-blue-600 text-white font-black uppercase tracking-widest text-[10px] shadow-xl">
                        Assign New Case to PP
                    </Button>
                </div>
            </div>

            {/* 2. JUDICIAL KPI GRID */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {judicialStats.map((stat, i) => (
                    <Card key={i} className="rounded-[32px] border-slate-100 shadow-sm hover:shadow-md transition-all bg-white overflow-hidden group">
                        <CardContent className="p-6">
                            <div className="flex justify-between items-start">
                                <div className="p-3 bg-slate-50 rounded-2xl text-slate-400 group-hover:text-blue-600 transition-colors">
                                    <stat.icon size={24} />
                                </div>
                                <ArrowUpRight size={14} className="text-slate-200 group-hover:text-blue-500" />
                            </div>
                            <div className="mt-4">
                                <p className={`text-3xl font-black ${stat.color}`}>{stat.value}</p>
                                <p className="text-[9px] font-black uppercase text-slate-400 tracking-widest mt-1">{stat.label}</p>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                {/* 3. CASE STAGE DISTRIBUTION (Section 8.2 of PP Dashboard) */}
                <Card className="lg:col-span-1 rounded-[40px] border-slate-200 shadow-sm bg-white p-8">
                    <CardHeader className="p-0 mb-8">
                        <CardTitle className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Trial Stage Distribution</CardTitle>
                    </CardHeader>
                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={stageData} layout="vertical">
                            <XAxis type="number" hide />
                            <YAxis dataKey="stage" type="category" axisLine={false} tickLine={false} tick={{ fontSize: 9, fontWeight: 'black' }} width={100} />
                            <Tooltip cursor={{ fill: 'transparent' }} contentStyle={{ borderRadius: '12px', border: 'none' }} />
                            <Bar dataKey="count" radius={[0, 10, 10, 0]} barSize={20}>
                                {stageData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={index % 2 === 0 ? '#2563eb' : '#94a3b8'} />
                                ))}
                            </Bar>
                        </BarChart>
                    </ResponsiveContainer>
                </Card>

                {/* 4. PROSECUTION STATUS REPORT (Table for Section 5.7) */}
                <Card className="lg:col-span-2 rounded-[40px] border-slate-200 shadow-sm overflow-hidden bg-white">
                    <CardHeader className="p-8 border-b border-slate-50 bg-slate-50/30 flex flex-row justify-between items-center">
                        <CardTitle className="text-sm font-black uppercase tracking-widest text-slate-400">Statutory Case Registry</CardTitle>
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-400" />
                            <input className="pl-9 pr-4 py-1.5 bg-white border border-slate-200 rounded-lg text-[10px] font-bold outline-none w-48" placeholder="Search Case ID..." />
                        </div>
                    </CardHeader>
                    <CardContent className="p-0">
                        <Table>
                            <TableHeader className="bg-white">
                                <TableRow className="border-slate-100">
                                    <TableHead className="px-8 py-5 text-[9px] font-black uppercase tracking-widest text-slate-400">Case Number</TableHead>
                                    <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400">Establishment / Accused</TableHead>
                                    <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400">Trial Stage</TableHead>
                                    <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400 text-center">Next Hearing</TableHead>
                                    <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400">Status</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody className="divide-y divide-slate-50">
                                <ProsecutionRow
                                    id="CP/LKO/PwD/001"
                                    accused="Pvt IT Park Ltd - Sector 4"
                                    stage="Trial / Evidence"
                                    date="24 Oct 2024"
                                    status="Active"
                                />
                                <ProsecutionRow
                                    id="CP/LKO/PwD/008"
                                    accused="Nagar Nigam Lucknow (Dept. Head)"
                                    stage="Argument on Charge"
                                    date="28 Oct 2024"
                                    status="Priority"
                                    alert
                                />
                                <ProsecutionRow
                                    id="CP/LKO/PwD/012"
                                    accused="City Global Retail Hub"
                                    stage="Investigation / FIR"
                                    date="02 Nov 2024"
                                    status="Active"
                                />
                                <ProsecutionRow
                                    id="CP/LKO/PwD/014"
                                    accused="District Library Authority"
                                    stage="Summoning Stage"
                                    date="15 Nov 2024"
                                    status="Stayed"
                                />
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
            </div>

            {/* 5. LEGAL ACTION CALLOUT */}
            <Card className="rounded-[40px] border-2 bg-slate-900 text-white p-10 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-10"><ShieldAlert size={120} /></div>
                <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="space-y-4">
                        <div className="inline-flex items-center gap-2 bg-red-600 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">
                            Stagnant Case Alert
                        </div>
                        <h2 className="text-3xl font-black tracking-tighter uppercase">Legal Follow-up Protocol</h2>
                        <p className="text-slate-400 font-medium max-w-lg leading-relaxed">
                            03 cases have been stagnant at the <b>"Trial"</b> stage for over 180 days. Review the PP's progress report and issue necessary directions to speed up the proceedings.
                        </p>
                    </div>
                    <div className="flex gap-4">
                        <Button className="h-16 px-10 rounded-3xl bg-white text-slate-900 font-black uppercase tracking-widest text-xs hover:bg-slate-100 transition-all">
                            Review Stagnant Cases
                        </Button>
                        <Button variant="outline" className="h-16 px-8 rounded-3xl border-white/20 text-white font-black uppercase tracking-widest text-xs hover:bg-white/10">
                            Contact Special PP
                        </Button>
                    </div>
                </div>
            </Card>
        </div>
    );
}

/* UI HELPER COMPONENTS */

function ProsecutionRow({ id, accused, stage, date, status, alert }: any) {
    return (
        <TableRow className="border-2 hover:bg-slate-50 transition-colors group">
            <TableCell className="px-8 py-6">
                <span className="text-[11px] font-mono font-black text-blue-600 bg-blue-50/50 px-2 py-1 rounded-md">{id}</span>
            </TableCell>
            <TableCell>
                <div className="flex items-center gap-3">
                    <Building2 className="text-slate-300" size={16} />
                    <span className="text-xs font-bold text-slate-700 uppercase tracking-tighter">{accused}</span>
                </div>
            </TableCell>
            <TableCell>
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{stage}</span>
            </TableCell>
            <TableCell className="text-center">
                <div className="flex flex-col items-center">
                    <span className={`text-xs font-bold ${alert ? 'text-red-600 underline decoration-red-200 decoration-2' : 'text-slate-700'}`}>{date}</span>
                    {alert && <span className="text-[8px] font-black text-red-400 uppercase mt-1">SLA Critical</span>}
                </div>
            </TableCell>
            <TableCell>
                <Badge className={`rounded-full px-3 py-1 text-[9px] font-black uppercase border-2 shadow-none ${status === 'Active' ? 'bg-blue-100 text-blue-700' :
                    status === 'Priority' ? 'bg-red-100 text-red-700' :
                        'bg-slate-100 text-slate-600'
                    }`}>
                    {status}
                </Badge>
            </TableCell>
        </TableRow>
    )
}

const stageData = [
    { stage: 'Investigation', count: 4 },
    { stage: 'Charge Sheet', count: 6 },
    { stage: 'Evidence', count: 10 },
    { stage: 'Arguments', count: 3 },
    { stage: 'Judgement', count: 1 },
];