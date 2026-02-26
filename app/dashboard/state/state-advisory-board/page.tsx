// app/dashboard/sab/page.tsx
"use client";
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
    Users, Landmark, Calendar, ListChecks, Sparkles,
    TrendingUp, Activity, UserCheck, AlertTriangle,
    ArrowUpRight, History, Printer, Download, Filter,
    CheckCircle2, PieChart as PieIcon, BarChart3,
    Users2, FileText, Globe, Clock, ShieldCheck,
    BadgeCheck,
    Search
} from "lucide-react";
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
    ResponsiveContainer, PieChart, Pie, Cell, Legend
} from 'recharts';
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function SABDashboard() {

    // SECTION B1: 5 ACTION INDICATORS (Vibrant Patterned Gradients)
    const indicators = [
        { label: "Total Board Members", value: "28", icon: Users, color: "from-emerald-600 to-teal-700" },
        { label: "Meetings Held (FY)", value: "12", icon: Landmark, color: "from-blue-600 to-indigo-700" },
        { label: "Meetings Scheduled", value: "02", icon: Calendar, color: "from-purple-600 to-indigo-800" },
        { label: "Pending Action Items", value: "18", icon: ListChecks, color: "from-orange-500 to-amber-700", alert: true },
        { label: "Recommendations Issued", value: "45", icon: ShieldCheck, color: "from-slate-700 to-slate-900" },
    ];

    return (
        <div className="space-y-12 animate-in fade-in duration-1000 pb-20 font-sans selection:bg-emerald-100">

            {/* APEX BOARD HEADER */}
            <div className="flex flex-col xl:flex-row justify-between items-start xl:items-end gap-6 bg-white p-10 rounded-[48px] border border-slate-200 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 p-10 opacity-[0.03] pointer-events-none text-emerald-600">
                    <Landmark size={200} />
                </div>
                <div className="space-y-4 relative z-10">
                    <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.2em] border border-emerald-100 shadow-sm">
                        <Activity size={14} className="animate-pulse" /> Board Deliberation Mode: Active
                    </div>
                    <h1 className="text-3xl font-black text-slate-900 tracking-tighter uppercase leading-none">State Advisory Board Dashboard</h1>
                    <p className="text-slate-500 font-medium text-xl italic underline underline-offset-8 decoration-emerald-100">Oversight of State Advisory Board Decisions & Recommendation Lifecycle.</p>
                </div>
                <div className="flex gap-4 relative z-10">
                    <Button variant="outline" className="h-16 px-8 rounded-3xl border-slate-200 font-black uppercase tracking-widest text-[10px] bg-white shadow-xl hover:bg-slate-50 transition-all group">
                        <History size={18} className="mr-2" /> Session History <ArrowUpRight size={14} className="ml-1 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                    </Button>
                    <Button className="h-16 px-10 rounded-3xl bg-slate-950 text-white font-black uppercase tracking-widest text-[10px] shadow-2xl hover:bg-black transition-all gap-2 group">
                        <Sparkles size={18} className="text-emerald-400 fill-emerald-400" /> AI Board Assistant
                    </Button>
                </div>
            </div>

            {/* B1. ACTION BUTTONS (TOP SECTION) */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5">
                {indicators.map((item, i) => (
                    <button key={i} className={`group relative text-left p-7 rounded-[40px] overflow-hidden transition-all duration-500 h-44 flex flex-col justify-between shadow-lg hover:shadow-2xl hover:-translate-y-2 bg-gradient-to-br ${item.color} text-white border-t border-white/20`}>
                        <div className="absolute inset-0 opacity-[0.08] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
                        <div className="relative z-10 flex flex-col justify-between h-full">
                            <div className="h-10 w-10 rounded-2xl bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform">
                                <item.icon size={20} className="drop-shadow-md" />
                            </div>
                            <div>
                                <p className="text-3xl font-black tracking-tighter drop-shadow-sm">{item.value}</p>
                                <p className="text-[9px] font-black uppercase tracking-[0.15em] opacity-80 leading-tight mt-1">{item.label}</p>
                            </div>
                        </div>
                        {item.alert && <div className="absolute top-6 right-6 h-2 w-2 rounded-full bg-white animate-ping" />}
                    </button>
                ))}
            </div>

            {/* GRAPHS & CHARTS (MIDDLE SECTION) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

                {/* MEETINGS HELD (YEAR-WISE) */}
                <ChartContainer title="Annual Meeting Frequency" desc="Year-wise comparative deliberation counts." cols="lg:col-span-8">
                    <ResponsiveContainer width="100%" height={350}>
                        <BarChart data={meetingData}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                            <XAxis dataKey="year" axisLine={false} tickLine={false} tick={{ fontSize: 10, fontWeight: 'black' }} />
                            <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10, fontWeight: 'bold' }} />
                            <Tooltip cursor={{ fill: '#f8fafc' }} contentStyle={{ borderRadius: '24px', border: 'none', boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1)' }} />
                            <Bar dataKey="meetings" fill="#10b981" radius={[12, 12, 0, 0]} barSize={60}>
                                {meetingData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={index === 4 ? '#059669' : '#d1fae5'} />
                                ))}
                            </Bar>
                        </BarChart>
                    </ResponsiveContainer>
                </ChartContainer>

                {/* ACTION POINTS STATUS (PIE) */}
                <ChartContainer title="Action Point Status" desc="Fulfillment distribution log." cols="lg:col-span-4">
                    <div className="h-[300px] w-full flex items-center justify-center relative">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie data={actionStatusData} innerRadius={80} outerRadius={100} paddingAngle={8} dataKey="value">
                                    {actionStatusData.map((entry, index) => <Cell key={index} fill={entry.color} />)}
                                </Pie>
                                <Tooltip />
                            </PieChart>
                        </ResponsiveContainer>
                        <div className="absolute text-center">
                            <p className="text-4xl font-black text-slate-900 tracking-tighter">18</p>
                            <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Open Items</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2 mt-4">
                        <LegendNode label="Open" color="bg-emerald-600" />
                        <LegendNode label="Closed" color="bg-slate-200" />
                        <LegendNode label="In Progress" color="bg-blue-500" />
                    </div>
                </ChartContainer>
            </div>

            {/* TOP / BOTTOM PARTICIPATION (LIMITED) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card className="rounded-[44px] border-slate-200 bg-white shadow-sm overflow-hidden group">
                    <CardHeader className="p-8 border-b border-slate-50 bg-emerald-50/50 flex flex-row justify-between items-center relative overflow-hidden">
                        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
                        <div className="flex items-center gap-3 relative z-10">
                            <UserCheck className="text-emerald-600" />
                            <CardTitle className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-700">Most Active Members (Attendance)</CardTitle>
                        </div>
                    </CardHeader>
                    <div className="p-0">
                        <Table>
                            <TableBody className="divide-y divide-slate-50 font-sans">
                                <ParticipationRow name="Amitabh Roy" role="Member (Expert)" perc="100%" success />
                                <ParticipationRow name="Smt. Reena Rai" role="Chairperson" perc="92%" />
                                <ParticipationRow name="V.K. Malhotra" role="Member (NGO)" perc="88%" />
                            </TableBody>
                        </Table>
                    </div>
                </Card>

                <Card className="rounded-[44px] border-slate-200 bg-white shadow-sm overflow-hidden group">
                    <CardHeader className="p-8 border-b border-slate-50 bg-rose-50/50 flex flex-row justify-between items-center relative overflow-hidden">
                        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
                        <div className="flex items-center gap-3 relative z-10">
                            <AlertTriangle className="text-rose-600" />
                            <CardTitle className="text-[10px] font-black uppercase tracking-[0.2em] text-rose-700">Least Attending Members</CardTitle>
                        </div>
                    </CardHeader>
                    <div className="p-0">
                        <Table>
                            <TableBody className="divide-y divide-slate-50 font-sans">
                                <ParticipationRow name="Pvt Industry Rep" role="Member (Ex-Officio)" perc="12%" alert />
                                <ParticipationRow name="Local Body Node" role="Member (ULB)" perc="24%" alert />
                                <ParticipationRow name="State Transport Node" role="Member (Dept)" perc="42%" />
                            </TableBody>
                        </Table>
                    </div>
                </Card>
            </div>

            {/* ACTIVE / INACTIVE MEMBER LEDGER (BOTTOM SECTION) */}
            <Card className="rounded-[48px] border-slate-200 shadow-sm overflow-hidden bg-white">
                <CardHeader className="p-10 border-b border-slate-50 bg-indigo-900 text-white flex flex-row justify-between items-center relative overflow-hidden">
                    <div className="absolute inset-0 opacity-[0.05] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
                    <div className="flex items-center gap-5 relative z-10">
                        <div className="h-12 w-12 rounded-2xl bg-white/10 flex items-center justify-center border border-white/10 shadow-inner">
                            <BadgeCheck size={24} className="text-emerald-400" />
                        </div>
                        <div className="space-y-1">
                            <CardTitle className="text-sm font-black uppercase tracking-widest leading-none">Member Participation Registry</CardTitle>
                            <p className="text-[10px] text-slate-500 font-bold uppercase mt-1 tracking-widest italic">Statutory Inactivity Monitor • Consolidated Board Node</p>
                        </div>
                    </div>
                    <div className="flex gap-4 relative z-10">
                        <div className="relative group">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-500" />
                            <input className="pl-11 pr-6 py-3 bg-white/5 border border-white/10 rounded-2xl text-[10px] font-black uppercase outline-none w-64 text-white focus:bg-white/10 transition-all" placeholder="Search Member Name..." />
                        </div>
                        <Button variant="outline" className="h-12 border-white/10 bg-white/5 text-white hover:bg-white/10 rounded-2xl font-black uppercase tracking-widest text-[9px]">Filter Node</Button>
                    </div>
                </CardHeader>
                <CardContent className="p-0">
                    <Table>
                        <TableHeader className="bg-slate-50/80">
                            <TableRow className="border-slate-100">
                                <TableHead className="px-10 py-6 text-[9px] font-black uppercase tracking-[0.2em] text-slate-400">Sl No</TableHead>
                                <TableHead className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400">Member Identity & Role</TableHead>
                                <TableHead className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 text-center">Category</TableHead>
                                <TableHead className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 text-center">Last Participation</TableHead>
                                <TableHead className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 text-center">Avg Attendance</TableHead>
                                <TableHead className="text-right px-10 text-[9px] font-black uppercase tracking-[0.2em] text-slate-400">Registry Status</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody className="divide-y divide-slate-50 font-sans">
                            <MemberRow sl="01" name="Amitabh Roy" role="Chairperson" cat="Expert Hub" last="12 Oct 2024" rate="100%" status="ACTIVE" success />
                            <MemberRow sl="02" name="Sr. Maria J." role="Member Secretary" cat="Nodal Office" last="14 Oct 2024" rate="98.5%" status="ACTIVE" success />
                            <MemberRow sl="03" name="Pvt Industry Node" role="Ex-Officio" cat="Corporate" last="05 Jan 2024" rate="12.0%" status="INACTIVE" alert />
                            <MemberRow sl="04" name="Meerut DM Office" role="Member" cat="District" last="10 Sep 2024" rate="72.0%" status="ACTIVE" warning />
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>

            {/* FOOTER ACTIONS */}
            <footer className="pt-12 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="flex items-center gap-4">
                    <Globe className="text-emerald-600 animate-spin-slow" size={24} />
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 leading-none">State Advisory Board Node Sync: v4.2 • Statewide Aggregation Active</span>
                </div>
                <div className="flex gap-4">
                    <Button variant="outline" className="h-14 px-8 rounded-2xl border-slate-200 font-bold bg-white gap-2 text-[10px] uppercase tracking-widest hover:bg-slate-50 shadow-sm"><FileText size={18} /> Download Bye-laws</Button>
                    <Button className="h-14 px-10 rounded-2xl bg-slate-900 text-white font-black uppercase tracking-widest text-[10px] shadow-2xl gap-2 hover:bg-black transition-all group">
                        <Printer size={18} /> Print Certified Summary <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                    </Button>
                </div>
            </footer>
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
                    <p className="text-lg font-black text-slate-900 tracking-tight">{desc}</p>
                </div>
            </CardHeader>
            <CardContent className="px-8 pb-10 flex-1 relative z-10">{children}</CardContent>
        </Card>
    );
}

function MemberRow({ sl, name, role, cat, last, rate, status, success, alert, warning }: any) {
    const statusColor = success ? 'bg-green-500' : alert ? 'bg-red-500 animate-pulse' : warning ? 'bg-orange-500' : 'bg-blue-400';
    return (
        <TableRow className="border-none hover:bg-slate-50 transition-all group cursor-pointer font-sans">
            <TableCell className="px-10 py-6"><span className="text-[10px] font-black text-slate-300">#{sl}</span></TableCell>
            <TableCell>
                <p className="text-sm font-black text-slate-800 uppercase tracking-tight leading-none">{name}</p>
                <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-1.5">{role}</p>
            </TableCell>
            <TableCell className="text-center"><Badge className="bg-slate-100 text-slate-500 border-none text-[8px] font-black uppercase px-2 py-0.5">{cat}</Badge></TableCell>
            <TableCell className="text-center font-bold text-slate-400 text-[10px]">{last}</TableCell>
            <TableCell className="text-center"><span className={`text-[11px] font-mono font-black ${alert ? 'text-red-600 underline' : 'text-emerald-600'}`}>{rate}</span></TableCell>
            <TableCell className="text-right px-10">
                <Badge className={`rounded-full px-4 py-1 text-[8px] font-black uppercase border-none shadow-none ${alert ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
                    {status}
                </Badge>
            </TableCell>
        </TableRow>
    )
}

function ParticipationRow({ name, role, perc, success, alert }: any) {
    return (
        <TableRow className="border-none hover:bg-slate-50 transition-all cursor-default">
            <TableCell className="px-8 py-5">
                <p className="text-xs font-black text-slate-800 uppercase tracking-tight leading-none">{name}</p>
                <p className="text-[8px] font-bold text-slate-400 uppercase mt-1 tracking-widest">{role}</p>
            </TableCell>
            <TableCell className="text-right px-8">
                <span className={`text-sm font-black ${alert ? 'text-red-600' : success ? 'text-emerald-600' : 'text-slate-900'}`}>{perc}</span>
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

const meetingData = [{ year: '2020', meetings: 4 }, { year: '2021', meetings: 6 }, { year: '2022', meetings: 3 }, { year: '2023', meetings: 8 }, { year: '2024', meetings: 12 }];
const actionStatusData = [{ name: 'Open', value: 18, color: '#10b981' }, { name: 'Closed', value: 32, color: '#e2e8f0' }, { name: 'Progress', value: 10, color: '#3b82f6' }];