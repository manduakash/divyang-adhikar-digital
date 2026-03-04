// app/dashboard/nabd/page.tsx
"use client";
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
    Table, TableBody, TableCell, TableHead, TableHeader, TableRow
} from "@/components/ui/table";
import {
    Globe, ShieldCheck, BadgeCheck, Landmark,
    Activity, CheckCircle2, AlertTriangle,
    ArrowUpRight, History, Scale,
    Users, MessageSquare, Gavel,
    Timer, FileText, Search,
    Sparkles, CalendarCheck, CalendarClock,
    UserCheck, UserX, Lightbulb, Target
} from "lucide-react";
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip,
    ResponsiveContainer, BarChart, Bar, Legend, Cell
} from 'recharts';
import { Badge } from "@/components/ui/badge";
import { useRouter } from 'next/navigation';

export default function NABDDashboard() {
    const router = useRouter();

    // B1. ACTION BUTTONS - VIBRANT GRADIENTS WITH CARBON FIBRE
    // Links to respective reports as per specifications
    const indicators = [
        { label: "Total Board Members", value: "32", icon: Users, color: "from-blue-600 via-blue-700 to-indigo-900", route: "/dashboard/nabd/reports/board-composition" },
        { label: "Meetings Held", value: "08", icon: CalendarCheck, color: "from-indigo-600 via-indigo-700 to-purple-900", route: "/dashboard/nabd/reports/meetings-attendance" },
        { label: "Meetings Scheduled", value: "02", icon: CalendarClock, color: "from-teal-600 via-teal-700 to-emerald-800", route: "/dashboard/nabd/reports/meetings-attendance" },
        { label: "Recommendations Issued", value: "45", icon: Lightbulb, color: "from-purple-600 via-violet-700 to-purple-900", route: "/dashboard/nabd/reports/recommendations-issued" },
        { label: "Action Points Pending", value: "18", icon: Timer, color: "from-amber-600 via-amber-700 to-orange-800", alert: true, route: "/dashboard/nabd/reports/action-points-status" },
        { label: "Action Points Closed", value: "62", icon: CheckCircle2, color: "from-emerald-500 via-emerald-600 to-emerald-800", route: "/dashboard/nabd/reports/action-points-status" },
        { label: "Active Members", value: "28", icon: UserCheck, color: "from-blue-500 via-blue-600 to-blue-800", route: "/dashboard/nabd/reports/board-composition" },
        { label: "Inactive Members", value: "04", icon: UserX, color: "from-red-500 via-red-600 to-red-800", alert: true, route: "/dashboard/nabd/reports/board-composition" },
        { label: "Annual Advisory Status", value: "DRAFTING", icon: Landmark, color: "from-slate-700 via-slate-800 to-black", route: "/dashboard/nabd/reports/annual-advisory" },
    ];

    return (
        <div className="space-y-12 animate-in fade-in duration-1000 pb-20 font-sans selection:bg-indigo-100">

            {/* APEX ADVISORY HEADER */}
            <div className="flex flex-col xl:flex-row justify-between items-start xl:items-end gap-6 relative">
                <div className="space-y-2">
                    <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border-2 border-indigo-100">
                        <ShieldCheck size={14} /> Secretariat Governance Snapshot
                    </div>
                    <h1 className="text-6xl font-black text-slate-900 tracking-tighter uppercase leading-none">NABD Dashboard</h1>
                    <p className="text-slate-500 font-medium text-xl italic underline underline-offset-8 decoration-indigo-100">National Advisory Board on Disability Policy Framework.</p>
                </div>
                <div className="flex gap-4">
                    <Button variant="outline" className="h-16 px-8 rounded-3xl border-2 border-slate-200 font-black uppercase tracking-widest text-[10px] bg-white shadow-xl hover:bg-slate-50 transition-all">
                        <History size={20} className="mr-2" /> Governance Audit
                    </Button>
                    <Button className="h-16 px-10 rounded-3xl bg-slate-950 text-white font-black uppercase tracking-widest text-[10px] shadow-2xl hover:bg-black transition-all gap-2 group">
                        <Sparkles size={20} className="text-purple-400 fill-purple-400" /> AI Board Brief
                    </Button>
                </div>
            </div>

            {/* B1. ACTION INDICATOR TILES */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
                {indicators.map((item, i) => (
                    <button 
                        key={i} 
                        onClick={() => router.push(item.route)}
                        className={`group relative text-left p-6 rounded-[32px] overflow-hidden transition-all duration-500 h-44 flex flex-col justify-between shadow-lg hover:shadow-2xl hover:-translate-y-1 bg-gradient-to-br ${item.color} text-white border-t-2 border-white/20`}
                    >
                        {/* CARBON FIBER TEXTURE OVERLAY */}
                        <div className="absolute inset-0 opacity-[0.06] pointer-events-none"
                            style={{ backgroundImage: `radial-gradient(black 2px, transparent 0)`, backgroundSize: '4px 4px' }} />

                        <div className="relative z-10 flex flex-col justify-between h-full">
                            <div className="h-10 w-10 rounded-xl bg-white/15 backdrop-blur-md border-2 border-white/20 flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform">
                                <item.icon size={20} className="drop-shadow-md text-white" />
                            </div>
                            <div>
                                <p className="text-2xl font-black tracking-tighter drop-shadow-sm leading-none">{item.value}</p>
                                <p className="text-[8px] font-black uppercase tracking-widest opacity-80 leading-tight mt-2 min-h-[20px]">{item.label}</p>
                            </div>
                        </div>
                        {item.alert && <div className="absolute top-6 right-6 h-2 w-2 rounded-full bg-white animate-ping shadow-[0_0_10px_white]" />}
                    </button>
                ))}
            </div>

            {/* B2. GRAPHS & CHARTS */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Chart 1: Meetings Held - Year-wise */}
                <ChartCard title="Meetings Conducted" desc="Year-wise historical tracking.">
                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={meetingsYearData}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                            <XAxis dataKey="year" axisLine={false} tickLine={false} tick={{ fontSize: 10, fontWeight: 'black' }} />
                            <YAxis axisLine={false} tickLine={false} />
                            <Tooltip cursor={{ fill: '#f8fafc' }} />
                            <Bar dataKey="meetings" fill="#4f46e5" radius={[6, 6, 0, 0]} barSize={40} />
                        </BarChart>
                    </ResponsiveContainer>
                </ChartCard>

                {/* Chart 2: Attendance Percentage - Meeting-wise */}
                <ChartCard title="Board Attendance Trends" desc="Meeting-wise participation tracking.">
                    <ResponsiveContainer width="100%" height={300}>
                        <LineChart data={attendanceMeetingData}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                            <XAxis dataKey="meeting" axisLine={false} tickLine={false} tick={{ fontSize: 10, fontWeight: 'bold' }} />
                            <YAxis axisLine={false} tickLine={false} domain={[0, 100]} />
                            <Tooltip />
                            <Line type="monotone" name="Attendance %" dataKey="attendance" stroke="#0ea5e9" strokeWidth={5} dot={{ r: 6, fill: '#0ea5e9' }} />
                        </LineChart>
                    </ResponsiveContainer>
                </ChartCard>

                {/* Chart 3: Action Points Status */}
                <ChartCard title="Action Points Status" desc="Quarterly tracking of advisory actions.">
                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={actionPointsData}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                            <XAxis dataKey="quarter" axisLine={false} tickLine={false} tick={{ fontSize: 10, fontWeight: 'black' }} />
                            <YAxis axisLine={false} tickLine={false} />
                            <Tooltip cursor={{ fill: '#f8fafc' }} />
                            <Legend align="right" verticalAlign="top" wrapperStyle={{ paddingBottom: '20px', fontSize: '10px', fontWeight: 'black' }} />
                            <Bar dataKey="closed" name="Closed Actions" stackId="a" fill="#10b981" radius={[0, 0, 4, 4]} barSize={40} />
                            <Bar dataKey="open" name="Pending Actions" stackId="a" fill="#f59e0b" radius={[4, 4, 0, 0]} barSize={40} />
                        </BarChart>
                    </ResponsiveContainer>
                </ChartCard>

                {/* Chart 4: Recommendations Issued - Theme-wise */}
                <ChartCard title="Recommendations by Theme" desc="Categorized advisory issuance.">
                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={recommendationsData} layout="vertical">
                            <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#f1f5f9" />
                            <XAxis type="number" axisLine={false} tickLine={false} />
                            <YAxis dataKey="theme" type="category" axisLine={false} tickLine={false} tick={{ fontSize: 9, fontWeight: 'black' }} width={100} />
                            <Tooltip cursor={{ fill: '#f8fafc' }} />
                            <Bar dataKey="count" fill="#8b5cf6" radius={[0, 6, 6, 0]} barSize={20} />
                        </BarChart>
                    </ResponsiveContainer>
                </ChartCard>
            </div>

            {/* B3. PERFORMANCE SNAPSHOTS - TOP / BOTTOM 5 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <PerformanceSnapshot title="Top 5 Members (Attendance)" color="text-emerald-600" bg="bg-emerald-500" icon={<UserCheck />} data={topMembers} />
                <PerformanceSnapshot title="Bottom 5 Members (Attendance)" color="text-red-600" bg="bg-red-500" icon={<UserX />} data={bottomMembers} isDanger />
            </div>

            {/* B4. ACTIVE / INACTIVE PANEL */}
            <Card className="rounded-[48px] border-2 border-slate-100 shadow-sm overflow-hidden bg-white">
                <CardHeader className="p-0">
                    <div className="p-10 bg-gradient-to-r from-blue-800 via-blue-900 to-black text-white relative overflow-hidden">
                        {/* CARBON FIBER OVERLAY */}
                        <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] bg-fixed" />
                        <div className="flex flex-col md:flex-row justify-between items-center gap-10 relative z-10">
                            <div className="flex items-center gap-5">
                                <div className="h-12 w-12 rounded-2xl bg-white/10 backdrop-blur-md border-2 border-white/20 flex items-center justify-center shadow-xl">
                                    <Target size={24} className="text-white" />
                                </div>
                                <div className="space-y-1">
                                    <CardTitle className="text-xl font-black uppercase tracking-tight">Board Member Status Ledger</CardTitle>
                                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none">Continuous monitoring of governance hygiene & participation</p>
                                </div>
                            </div>
                            <div className="flex gap-4 w-full md:w-auto">
                                <div className="relative group flex-1 md:w-80 flex">
                                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-white/50" />
                                    <input className="w-full pl-11 pr-6 py-4 border-2 border-white/20 bg-white/5 rounded-2xl text-[10px] font-black uppercase outline-none text-white focus:bg-white/10 transition-all shadow-inner" placeholder="Search Member or Category..." />
                                </div>
                                <Button className="h-16 px-8 rounded-2xl bg-indigo-600 text-white font-black uppercase tracking-widest text-[9px] shadow-xl">Review Tenure</Button>
                            </div>
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="p-0">
                    <Table>
                        <TableHeader className="bg-slate-50">
                            <TableRow className="border-b-2 border-slate-100 font-sans">
                                <TableHead className="px-10 py-6 text-[9px] font-black uppercase tracking-[0.2em] text-slate-400">Member Identity</TableHead>
                                <TableHead className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400">Role & Category</TableHead>
                                <TableHead className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 text-center">Last Meeting</TableHead>
                                <TableHead className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 text-center">Attendance</TableHead>
                                <TableHead className="text-right px-10 text-[9px] font-black uppercase tracking-[0.2em] text-slate-400">Current Status</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody className="divide-y divide-slate-100 font-sans">
                            <MemberRow name="Dr. Virendra Kumar" role="Chairperson" category="Ministry" last="12 Oct 2024" attendance="100%" status="ACTIVE" success />
                            <MemberRow name="Smt. Anjali Bhawra" role="Member Secretary" category="Secretariat" last="12 Oct 2024" attendance="96%" status="ACTIVE" success />
                            <MemberRow name="Shri R.K. Singh" role="Member" category="State Rep" last="15 Aug 2024" attendance="40%" status="INACTIVE" alert />
                            <MemberRow name="Ms. Sunita Rao" role="Expert Member" category="NGO" last="10 Feb 2024" attendance="15%" status="INACTIVE" alert />
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>

        </div>
    );
}

/* UI SUB-COMPONENTS */

function ChartCard({ title, desc, children }: any) {
    return (
        <Card className="rounded-[44px] border-2 border-slate-100 bg-white shadow-sm overflow-hidden group hover:shadow-xl transition-all duration-500">
            <CardHeader className="p-10 border-b-2 border-slate-50 bg-slate-50/50 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
                <div className="space-y-1 relative z-10">
                    <CardTitle className="text-[11px] font-black uppercase tracking-[0.3em] text-indigo-600">{title}</CardTitle>
                    <p className="text-lg font-black text-slate-900 tracking-tight leading-none mt-2">{desc}</p>
                </div>
            </CardHeader>
            <CardContent className="p-10 relative overflow-hidden">
                <div className="absolute inset-0 opacity-[0.01] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/topography.png')]" />
                <div className="relative z-10">{children}</div>
            </CardContent>
        </Card>
    );
}

function PerformanceSnapshot({ title, color, bg, icon, data, isDanger }: any) {
    return (
        <Card className="rounded-[44px] border-2 border-slate-100 bg-white shadow-sm overflow-hidden flex flex-col h-full group hover:shadow-2xl transition-all duration-500">
            <div className={`p-8 border-b-2 border-slate-50 flex items-center justify-between ${bg} relative overflow-hidden`}>
                <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] bg-fixed" />
                <div className="flex items-center gap-4 relative z-10">
                    <div className={`text-[10px] font-black uppercase tracking-[0.2em] text-slate-100 group-hover:scale-110 transition-transform`}>{icon}</div>
                    <h3 className={`text-[10px] font-black uppercase tracking-[0.2em] text-slate-100`}>{title}</h3>
                </div>
                <ArrowUpRight size={16} className="text-slate-200" />
            </div>
            <div className="p-8 space-y-6 flex-1 relative overflow-hidden">
                <div className="absolute inset-0 opacity-[0.01] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
                {data.map((item: any, i: number) => (
                    <div key={i} className="flex justify-between items-center group/row cursor-pointer border-b-2 border-slate-50 pb-5 last:border-0 hover:bg-slate-50/50 transition-all rounded-xl p-2 relative z-10">
                        <div className="space-y-1">
                            <p className="text-sm font-black text-slate-900 uppercase tracking-tight leading-none">{item.name}</p>
                            <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">{item.role}</p>
                        </div>
                        <span className={`text-lg font-black font-mono ${isDanger ? 'text-red-600' : 'text-emerald-600'}`}>{item.score}</span>
                    </div>
                ))}
            </div>
        </Card>
    )
}

function MemberRow({ name, role, category, last, attendance, status, success, alert }: any) {
    const statusColor = success ? 'bg-green-600 text-white shadow-green-100 shadow-lg' : alert ? 'bg-red-600 text-white animate-pulse shadow-red-100 shadow-lg' : 'bg-slate-500 text-white';
    return (
        <TableRow className="border-none hover:bg-slate-50 transition-all group cursor-pointer">
            <TableCell className="px-10 py-8">
                <div className="flex items-center gap-3">
                    <div className={`h-1.5 w-1.5 rounded-full shrink-0 ${success ? 'bg-green-500' : 'bg-red-500'}`} />
                    <span className="text-xs font-black text-slate-900 uppercase tracking-tight leading-none">{name}</span>
                </div>
            </TableCell>
            <TableCell>
                <div className="space-y-1">
                    <p className="text-[10px] font-black text-slate-600 uppercase tracking-widest">{role}</p>
                    <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">{category}</p>
                </div>
            </TableCell>
            <TableCell className="text-center font-mono font-bold text-slate-500 text-[11px]">{last}</TableCell>
            <TableCell className="text-center">
                <span className="font-mono font-black text-slate-700">{attendance}</span>
            </TableCell>
            <TableCell className="text-right px-10">
                <Badge className={`rounded-full px-5 py-2 text-[8px] font-black uppercase border-none tracking-widest ${statusColor}`}>
                    {status}
                </Badge>
            </TableCell>
        </TableRow>
    )
}

/* MOCK DATA */
const meetingsYearData = [
    { year: '2021', meetings: 4 },
    { year: '2022', meetings: 5 },
    { year: '2023', meetings: 6 },
    { year: '2024', meetings: 8 }
];

const attendanceMeetingData = [
    { meeting: 'M-42', attendance: 92 },
    { meeting: 'M-43', attendance: 85 },
    { meeting: 'M-44', attendance: 78 },
    { meeting: 'M-45', attendance: 88 },
    { meeting: 'M-46', attendance: 94 }
];

const actionPointsData = [
    { quarter: 'Q1-24', open: 12, closed: 24 },
    { quarter: 'Q2-24', open: 8, closed: 30 },
    { quarter: 'Q3-24', open: 15, closed: 22 },
    { quarter: 'Q4-24', open: 18, closed: 10 }
];

const recommendationsData = [
    { theme: 'Accessibility', count: 18 },
    { theme: 'Employment', count: 12 },
    { theme: 'Education', count: 9 },
    { theme: 'Healthcare', count: 6 }
];

const topMembers = [
    { name: 'Dr. Virendra Kumar', role: 'Chairperson', score: '100%' },
    { name: 'Smt. Anjali Bhawra', role: 'Member Secretary', score: '96%' },
    { name: 'Dr. Rajesh Pandey', role: 'Expert Member', score: '92%' },
    { name: 'Shri A.K. Sharma', role: 'State Rep', score: '90%' },
    { name: 'Ms. Meena Gupta', role: 'NGO Rep', score: '88%' }
];

const bottomMembers = [
    { name: 'Ms. Sunita Rao', role: 'Expert Member', score: '15%' },
    { name: 'Shri T.V. Reddy', role: 'State Rep', score: '22%' },
    { name: 'Dr. Arun Singh', role: 'Expert Member', score: '30%' },
    { name: 'Shri R.K. Singh', role: 'State Rep', score: '40%' },
    { name: 'Smt. Kavita Jain', role: 'NGO Rep', score: '45%' }
];