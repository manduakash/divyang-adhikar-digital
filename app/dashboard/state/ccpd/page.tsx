// app/dashboard/scpd/page.tsx
"use client";
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
    Building2, School, Landmark, Users, MessageSquare,
    Gavel, Briefcase, FileWarning, Scale, ShieldCheck,
    Clock, ArrowUpRight, Sparkles, Filter, Download,
    TrendingUp, Activity, AlertTriangle, Trophy,
    CheckCircle2, XCircle, BarChart3, PieChart as PieIcon,
    History, Globe, Zap,
    ShieldAlert
} from "lucide-react";
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip,
    ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell,
    Legend, ComposedChart, AreaChart, Area
} from 'recharts';
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function SCPDApexDashboard() {

    // SECTION B1: 12 ACTION INDICATORS (Apex Patterned Gradients)
    const indicators = [
        { label: "Total Establishments", value: "45,210", icon: Building2, color: "from-slate-800 to-slate-900" },
        { label: "Educational Institutions", value: "18,450", icon: School, color: "from-indigo-700 to-indigo-900" },
        { label: "Registered Organizations", value: "2,140", icon: Landmark, color: "from-blue-700 to-blue-900" },
        { label: "Total PwDs (Statewide)", value: "1.24M", icon: Users, color: "from-purple-700 to-purple-900" },
        { label: "Total Grievances", value: "124K", icon: MessageSquare, color: "from-slate-700 to-slate-800" },
        { label: "Pending Grievances", value: "842", icon: Clock, color: "from-orange-600 to-orange-700", alert: true },
        { label: "Total Directions Issued", value: "142", icon: Gavel, color: "from-indigo-600 to-indigo-700" },
        { label: "Overdue Directions", value: "09", icon: ShieldAlert, color: "from-red-600 to-red-700", alert: true },
        { label: "PwD Vacancies Pending", value: "4,502", icon: Briefcase, color: "from-amber-500 to-amber-600", alert: true },
        { label: "Returns Overdue", value: "840", icon: FileWarning, color: "from-rose-600 to-rose-700", alert: true },
        { label: "Commission Composition", value: "08/10", icon: ShieldCheck, color: "from-emerald-600 to-emerald-700" },
        { label: "Court Matters Pending", value: "24", icon: Scale, color: "from-slate-900 to-black" },
    ];

    return (
        <div className="space-y-12 animate-in fade-in duration-700 pb-20 font-sans">

            {/* 1. APEX COMMISSIONER HEADER */}
            <div className="flex flex-col xl:flex-row justify-between items-start xl:items-end gap-6">
                <div className="space-y-2">
                    <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border border-indigo-200 shadow-sm">
                        <Globe size={14} className="animate-spin-slow" /> State Regulatory Node: SCPD-UP
                    </div>
                    <h1 className="text-4xl font-black text-slate-900 tracking-tighter uppercase leading-none">State Commissioner Authority</h1>
                    <p className="text-slate-500 font-medium text-xl italic underline underline-offset-8 decoration-indigo-100">Supervision of PwD Act Enforcement & Quasi-Judicial Oversight.</p>
                </div>
                <div className="flex gap-4">
                    <Button variant="outline" className="h-16 px-8 rounded-3xl border-slate-200 font-black uppercase tracking-widest text-[10px] bg-white shadow-xl hover:bg-slate-50">
                        <History size={18} className="mr-2" /> Action History
                    </Button>
                    <Button className="h-16 px-10 rounded-3xl bg-indigo-900 text-white font-black uppercase tracking-widest text-[10px] shadow-2xl hover:bg-black transition-all gap-2">
                        <Sparkles size={18} className="text-blue-400 fill-blue-400" /> AI Commissioner Brief
                    </Button>
                </div>
            </div>

            {/* 2. SECTION B1: 12 ACTION TILES (Advanced Patterns) */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {indicators.map((item, i) => (
                    <button key={i} className={`group relative text-left p-6 rounded-[32px] overflow-hidden transition-all duration-500 h-44 shadow-lg hover:shadow-2xl hover:-translate-y-1 bg-gradient-to-br ${item.color} text-white border-t border-white/20`}>
                        <div className="absolute inset-0 opacity-[0.08] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/topography.png')]" />
                        <div className="relative z-10 flex flex-col justify-between h-full">
                            <div className="h-10 w-10 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform">
                                <item.icon size={20} className="drop-shadow-md" />
                            </div>
                            <div>
                                <p className="text-2xl font-black tracking-tighter">{item.value}</p>
                                <p className="text-[8px] font-black uppercase tracking-widest opacity-80 leading-tight mt-1">{item.label}</p>
                            </div>
                        </div>
                        {item.alert && <div className="absolute top-6 right-6 h-2 w-2 rounded-full bg-red-400 animate-ping" />}
                    </button>
                ))}
            </div>

            {/* 3. SECTION B2: 8 STATUTORY CHARTS (Expanded Layout) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <ChartBox title="Establishments: Govt vs Private" desc="District-wise comparative institutional mapping.">
                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={estData}>
                            <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 9, fontWeight: 'black' }} />
                            <Tooltip cursor={{ fill: '#f8fafc' }} />
                            <Legend iconType="circle" wrapperStyle={{ fontSize: '10px', fontWeight: 'black', textTransform: 'uppercase' }} />
                            <Bar dataKey="govt" name="Government" fill="#4f46e5" radius={[6, 6, 0, 0]} />
                            <Bar dataKey="pvt" name="Private" fill="#e2e8f0" radius={[6, 6, 0, 0]} />
                        </BarChart>
                    </ResponsiveContainer>
                </ChartBox>

                <ChartBox title="Grievances Trend" desc="Time-wise incoming vs resolution performance.">
                    <ResponsiveContainer width="100%" height={300}>
                        <LineChart data={trendData}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                            <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 10, fontWeight: 'bold' }} />
                            <Tooltip />
                            <Line type="monotone" dataKey="received" stroke="#6366f1" strokeWidth={4} dot={{ r: 4 }} />
                            <Line type="monotone" dataKey="resolved" stroke="#10b981" strokeWidth={4} dot={{ r: 4 }} />
                        </LineChart>
                    </ResponsiveContainer>
                </ChartBox>

                <ChartBox title=" PwD Vacancy Status" desc="Fulfillment gap: Identified vs Filled vs Pending.">
                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={vacancyData}>
                            <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 10, fontWeight: 'bold' }} />
                            <Tooltip cursor={{ fill: '#f8fafc' }} />
                            <Bar dataKey="ident" name="Identified" fill="#4f46e5" />
                            <Bar dataKey="filled" name="Filled" fill="#10b981" />
                            <Bar dataKey="pend" name="Pending" fill="#ef4444" radius={[6, 6, 0, 0]} />
                        </BarChart>
                    </ResponsiveContainer>
                </ChartBox>

                <ChartBox title=" Directions Compliance Trend" desc="Percentage of district/dept fulfillment over time.">
                    <ResponsiveContainer width="100%" height={300}>
                        <AreaChart data={trendData}>
                            <defs>
                                <linearGradient id="colorIndigo" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#4f46e5" stopOpacity={0.1} />
                                    <stop offset="95%" stopColor="#4f46e5" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <XAxis dataKey="month" axisLine={false} tickLine={false} />
                            <Tooltip />
                            <Area type="monotone" dataKey="compliance" stroke="#4f46e5" strokeWidth={4} fillOpacity={1} fill="url(#colorIndigo)" />
                        </AreaChart>
                    </ResponsiveContainer>
                </ChartBox>
            </div>

            {/* 4. SECTION B3: PERFORMANCE SNAPSHOTS (TOP/BOTTOM 5) */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <RankingCard title="Top 5 Districts" color="text-green-600" bg="bg-green-50" icon={<Trophy />} data={topDistricts} />
                <RankingCard title="Top 5 Establishments" color="text-blue-600" bg="bg-blue-50" icon={<ShieldCheck />} data={topEsts} />
                <RankingCard title="Bottom 5 Laggards" color="text-red-600" bg="bg-rose-50" icon={<AlertTriangle />} data={bottomDistricts} isDanger />
            </div>

            {/* 5. SECTION B4: ACTIVE / INACTIVE PANEL */}
            <Card className="rounded-[40px] border-slate-200 shadow-sm overflow-hidden bg-white">
                <CardHeader className="p-8 border-b border-slate-50 bg-slate-900 text-white flex flex-row justify-between items-center">
                    <div className="flex items-center gap-4">
                        <Activity className="text-blue-400" />
                        <div>
                            <CardTitle className="text-sm font-black uppercase tracking-widest">Institutional Inactivity Panel</CardTitle>
                            <p className="text-[10px] text-slate-400 font-bold uppercase mt-1">Units with zero reporting activity in past 90 days</p>
                        </div>
                    </div>
                    <Badge className="bg-red-600 text-white font-black px-4 py-1">ACTION REQUIRED</Badge>
                </CardHeader>
                <div className="p-0">
                    <Table>
                        <TableHeader className="bg-slate-50">
                            <TableRow className="border-slate-100">
                                <TableHead className="px-8 py-5 text-[9px] font-black uppercase tracking-widest text-slate-400">Unit Name</TableHead>
                                <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400">Type</TableHead>
                                <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400">District</TableHead>
                                <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400 text-center">Last Active</TableHead>
                                <TableHead className="text-right px-8 text-[9px] font-black uppercase tracking-widest text-slate-400">Statutory Notice</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody className="divide-y divide-slate-50">
                            <InactiveRow name="Regional Library Hub" type="Registered Org" district="Varanasi" days="104 Days" />
                            <InactiveRow name="Secondary School-Z" type="Educational" district="Meerut" days="98 Days" />
                            <InactiveRow name="Private Retail Corp" type="Establishment" district="Lucknow" days="92 Days" />
                        </TableBody>
                    </Table>
                </div>
            </Card>

        </div>
    );
}

/* UI SUB-COMPONENTS */

function ChartBox({ title, desc, children }: any) {
    return (
        <Card className="rounded-[40px] border-slate-200 bg-white shadow-sm overflow-hidden">
            <CardHeader className="p-8 border-b border-slate-50 mb-6 flex flex-row justify-between items-start">
                <div className="space-y-1">
                    <CardTitle className="text-[11px] font-black uppercase tracking-[0.2em] text-indigo-600">{title}</CardTitle>
                    <p className="text-sm font-black text-slate-900">{desc}</p>
                </div>
                <Button variant="ghost" size="icon" className="text-slate-300 hover:text-indigo-600"><ArrowUpRight size={18} /></Button>
            </CardHeader>
            <CardContent className="px-8 pb-10">{children}</CardContent>
        </Card>
    );
}

function RankingCard({ title, data, color, bg, icon, isDanger }: any) {
    return (
        <Card className="rounded-[40px] border-slate-200 bg-white shadow-sm overflow-hidden h-full">
            <div className={`p-6 border-b border-slate-50 flex items-center justify-between ${isDanger ? 'bg-red-50/50' : 'bg-slate-50/30'}`}>
                <div className="flex items-center gap-3">
                    <div className={`${color}`}>{icon}</div>
                    <h3 className={`text-[10px] font-black uppercase tracking-widest ${color}`}>{title}</h3>
                </div>
            </div>
            <div className="p-6 space-y-5">
                {data.map((item: any, i: number) => (
                    <div key={i} className="flex justify-between items-center group cursor-pointer border-b border-slate-50 pb-4 last:border-0">
                        <div className="space-y-1">
                            <p className="text-xs font-black text-slate-800 uppercase tracking-tight group-hover:text-indigo-600 transition-colors leading-none">{item.name}</p>
                            <p className="text-[8px] font-bold text-slate-400 uppercase tracking-widest">{item.sub}</p>
                        </div>
                        <span className={`text-sm font-black ${isDanger ? 'text-red-500' : 'text-indigo-600'}`}>{item.score}</span>
                    </div>
                ))}
            </div>
        </Card>
    )
}

function InactiveRow({ name, type, district, days }: any) {
    return (
        <TableRow className="border-2 hover:bg-red-50/30 transition-all cursor-pointer">
            <TableCell className="px-8 py-5">
                <p className="text-sm font-black text-slate-800 uppercase tracking-tighter">{name}</p>
            </TableCell>
            <TableCell className="text-[10px] font-bold text-slate-500 uppercase">{type}</TableCell>
            <TableCell className="text-[10px] font-bold text-slate-500 uppercase">{district}</TableCell>
            <TableCell className="text-center">
                <span className="text-xs font-black text-red-600 underline decoration-red-200 decoration-2">{days}</span>
            </TableCell>
            <TableCell className="text-right px-8">
                <Button className="h-9 px-4 bg-slate-900 text-white rounded-xl font-black uppercase text-[8px] tracking-widest">Issue Notice</Button>
            </TableCell>
        </TableRow>
    )
}

/* MOCK DATA */
const estData = [{ name: 'LKO', govt: 400, pvt: 2400 }, { name: 'GBN', govt: 300, pvt: 3200 }, { name: 'VNS', govt: 200, pvt: 1800 }, { name: 'AGR', govt: 150, pvt: 1400 }];
const trendData = [{ month: 'Jul', received: 40, resolved: 30, compliance: 75 }, { month: 'Aug', received: 55, resolved: 35, compliance: 78 }, { month: 'Sep', received: 45, resolved: 40, compliance: 82 }, { month: 'Oct', received: 70, resolved: 45, compliance: 84 }];
const vacancyData = [{ name: 'Health', ident: 450, filled: 300, pend: 150 }, { name: 'Edu', ident: 600, filled: 520, pend: 80 }, { name: 'Rev', ident: 350, filled: 340, pend: 10 }];
const topDistricts = [{ name: 'Lucknow', sub: 'Grievance SLA 98%', score: '98%' }, { name: 'GB Ngr', sub: 'Digital Access 96%', score: '96%' }, { name: 'Agra', sub: 'Employment 4.2%', score: '92%' }];
const topEsts = [{ name: 'National Bank', sub: 'Govt Hub', score: '99%' }, { name: 'Pvt Tech Hub', sub: 'IT Sector', score: '98%' }];
const bottomDistricts = [{ name: 'Howrah Rural', sub: 'Access Deficit', score: '42%' }, { name: 'West Sector', sub: 'High Pendency', score: '48%' }];