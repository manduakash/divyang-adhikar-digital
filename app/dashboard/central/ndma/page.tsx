// app/dashboard/ndma/page.tsx
"use client";
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
    Table, TableBody, TableCell, TableHead, TableHeader, TableRow
} from "@/components/ui/table";
import {
    Globe, ShieldAlert, HeartPulse, Building2,
    Activity, AlertTriangle, ArrowUpRight, History,
    Users, Map, Siren, CheckCircle2,
    Timer, Search, Sparkles, Navigation,
    RadioTower, Flame, Tent
} from "lucide-react";
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip,
    ResponsiveContainer, BarChart, Bar, Legend, AreaChart, Area
} from 'recharts';
import { useRouter } from 'next/navigation';

export default function NDMADashboardPage() {
    const router = useRouter();

    // ACTION INDICATORS - VIBRANT GRADIENTS
    const indicators = [
        { label: "States Onboarded", value: "36", icon: Globe, color: "from-blue-500 to-indigo-600", route: "/dashboard/ndma/reports/state-comparative" },
        { label: "PwDs in Risk Zones", value: "4.2M", icon: Users, color: "from-rose-500 to-red-600", alert: true, route: "/dashboard/ndma/reports/national-preparedness" },
        { label: "Accessible Shelters", value: "12,450", icon: Tent, color: "from-emerald-500 to-teal-600", route: "/dashboard/ndma/reports/shelter-capacity" },
        { label: "Transport Readiness", value: "84%", icon: Navigation, color: "from-blue-400 to-blue-600", route: "/dashboard/ndma/reports/evacuation-transport" },
        { label: "Early Warning Coverage", value: "92%", icon: RadioTower, color: "from-purple-500 to-violet-600", route: "/dashboard/ndma/reports/early-warning-coverage" },
        { label: "High-Risk States (PwD)", value: "08", icon: Flame, color: "from-orange-500 to-red-600", alert: true, route: "/dashboard/ndma/reports/state-comparative" },
        { label: "Advisories Issued", value: "142", icon: ShieldAlert, color: "from-indigo-500 to-purple-600", route: "/dashboard/ndma/reports/advisories-compliance" },
        { label: "Pending Compliance", value: "24", icon: Timer, color: "from-amber-500 to-orange-600", route: "/dashboard/ndma/reports/advisories-compliance" },
        { label: "Pending Actions", value: "16", icon: Activity, color: "from-rose-400 to-rose-600", alert: true, route: "/dashboard/ndma/reports/post-disaster" },
        { label: "Active National Alerts", value: "03", icon: Siren, color: "from-red-500 to-red-700", alert: true, route: "/dashboard/ndma/reports/early-warning-coverage" },
    ];

    return (
        <div className="space-y-12 animate-in fade-in duration-1000 pb-20 font-sans selection:bg-orange-100">

            {/* APEX NATIONAL HEADER */}
            <div className="flex flex-col xl:flex-row justify-between items-start xl:items-end gap-6 relative">
                <div className="space-y-2">
                    <div className="inline-flex items-center gap-2 bg-orange-50 text-orange-700 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border-2 border-orange-200">
                        <ShieldAlert size={14} className="animate-pulse" /> National Command Center
                    </div>
                    <h1 className="text-6xl font-black text-slate-800 tracking-tighter uppercase leading-none">NDMA Integration Hub</h1>
                    <p className="text-slate-500 font-medium text-xl italic underline underline-offset-8 decoration-orange-200">
                        National preparedness, evacuation, and risk overview for Persons with Disabilities.
                    </p>
                </div>
                <div className="flex gap-4">
                    <Button variant="outline" className="h-16 px-8 rounded-3xl border-2 border-orange-200 font-black uppercase tracking-widest text-[10px] text-orange-700 bg-white shadow-xl hover:bg-orange-50 transition-all">
                        <History size={20} className="mr-2" /> Global Audit Trail
                    </Button>
                    <Button className="h-16 px-10 rounded-3xl bg-gradient-to-r from-orange-500 to-red-500 text-white font-black uppercase tracking-widest text-[10px] shadow-2xl hover:shadow-[0_0_20px_theme(colors.orange.400)] transition-all gap-2 group border-none">
                        <Sparkles size={20} className="text-orange-100" /> AI Risk Brief
                    </Button>
                </div>
            </div>

            {/* B1. ACTION INDICATOR TILES */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-5">
                {indicators.map((item, i) => (
                    <button
                        key={i}
                        onClick={() => router.push(item.route)}
                        className={`group relative text-left p-6 rounded-[32px] overflow-hidden transition-all duration-500 h-44 flex flex-col justify-between shadow-lg hover:shadow-2xl  bg-gradient-to-br ${item.color} text-white border-none`}
                    >
                        <div className="absolute inset-0 opacity-90 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/diagonal-striped-brick.png')]" />

                        <div className="relative z-10 flex flex-col justify-between h-full">
                            <div className="h-10 w-10 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform">
                                <item.icon size={20} className="text-white drop-shadow-md" />
                            </div>
                            <div>
                                <p className="text-3xl font-black tracking-tighter drop-shadow-sm leading-none">{item.value}</p>
                                <p className="text-[9px] font-black uppercase tracking-widest opacity-90 leading-tight mt-2">{item.label}</p>
                            </div>
                        </div>
                        {item.alert && <div className="absolute top-6 right-6 h-2 w-2 rounded-full bg-white animate-ping shadow-[0_0_10px_white]" />}
                    </button>
                ))}
            </div>

            {/* B2. ANALYTICS GRID (Charts mapping to Reports) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                <ChartCard title="PwD Risk Distribution – State-wise" desc="Vulnerable populations residing in notified risk zones.">
                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={riskDistributionData}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                            <XAxis dataKey="state" axisLine={false} tickLine={false} tick={{ fontSize: 10, fontWeight: 'black', fill: '#64748b' }} />
                            <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#64748b' }} />
                            <Tooltip cursor={{ fill: '#f8fafc' }} contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }} />
                            <Bar dataKey="population" fill="#f97316" radius={[6, 6, 0, 0]} barSize={32} />
                        </BarChart>
                    </ResponsiveContainer>
                </ChartCard>

                <ChartCard title="Shelter Accessibility – State-wise" desc="Infrastructure readiness for PwD accommodation.">
                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={shelterAccessData}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                            <XAxis dataKey="state" axisLine={false} tickLine={false} tick={{ fontSize: 10, fontWeight: 'black', fill: '#64748b' }} />
                            <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#64748b' }} />
                            <Tooltip cursor={{ fill: '#f8fafc' }} />
                            <Legend align="right" verticalAlign="top" wrapperStyle={{ paddingBottom: '20px', fontSize: '10px', fontWeight: 'black' }} />
                            <Bar dataKey="accessible" name="Fully Accessible" stackId="a" fill="#10b981" radius={[0, 0, 4, 4]} barSize={32} />
                            <Bar dataKey="partial" name="Partial" stackId="a" fill="#f59e0b" barSize={32} />
                            <Bar dataKey="nonAccessible" name="Non-Accessible" stackId="a" fill="#ef4444" radius={[4, 4, 0, 0]} barSize={32} />
                        </BarChart>
                    </ResponsiveContainer>
                </ChartCard>

                <ChartCard title="Evacuation Readiness Trend" desc="National aggregate index over recent quarters.">
                    <ResponsiveContainer width="100%" height={250}>
                        <AreaChart data={readinessTrendData}>
                            <defs>
                                <linearGradient id="colorReadiness" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                            <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 10, fontWeight: 'bold' }} />
                            <YAxis axisLine={false} tickLine={false} domain={[0, 100]} />
                            <Tooltip />
                            <Area type="monotone" dataKey="index" stroke="#3b82f6" strokeWidth={4} fillOpacity={1} fill="url(#colorReadiness)" />
                        </AreaChart>
                    </ResponsiveContainer>
                </ChartCard>

                <ChartCard title="Early Warning Coverage Trend" desc="Percentage of PwDs receiving tailored accessible alerts.">
                    <ResponsiveContainer width="100%" height={250}>
                        <LineChart data={warningTrendData}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                            <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 10, fontWeight: 'bold' }} />
                            <YAxis axisLine={false} tickLine={false} domain={[0, 100]} />
                            <Tooltip />
                            <Line type="monotone" dataKey="coverage" stroke="#8b5cf6" strokeWidth={5} dot={{ r: 6, fill: '#8b5cf6', strokeWidth: 2, stroke: '#fff' }} />
                        </LineChart>
                    </ResponsiveContainer>
                </ChartCard>
            </div>

            {/* B3. PERFORMANCE SNAPSHOTS - TOP / BOTTOM */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <PerformanceSnapshot
                    title="Top 5 States - Preparedness"
                    icon={<ShieldAlert />}
                    data={topStates}
                    gradient="bg-gradient-to-r from-emerald-500 to-teal-500"
                />
                <PerformanceSnapshot
                    title="Bottom 5 States - Preparedness"
                    icon={<AlertTriangle />}
                    data={bottomStates}
                    gradient="bg-gradient-to-r from-rose-500 to-red-600"
                    isDanger
                />
                <PerformanceSnapshot
                    title="Top 5 Districts - Shelter Access"
                    icon={<Tent />}
                    data={topDistricts}
                    gradient="bg-gradient-to-r from-blue-500 to-indigo-500"
                />
                <PerformanceSnapshot
                    title="Bottom 5 Shelters - Capacity"
                    icon={<Building2 />}
                    data={bottomShelters}
                    gradient="bg-gradient-to-r from-amber-500 to-orange-500"
                    isDanger
                />
            </div>

            {/* B4. ACTIVE / INACTIVE REPORTING PANEL */}
            <Card className="rounded-[48px] border-none shadow-xl overflow-hidden bg-white">
                <CardHeader className="p-0">
                    <div className="p-10 bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 text-white relative overflow-hidden">
                        <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />

                        <div className="flex flex-col md:flex-row justify-between items-center gap-10 relative z-10">
                            <div className="flex items-center gap-5">
                                <div className="h-14 w-14 rounded-3xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center shadow-lg">
                                    <Activity size={28} className="text-white" />
                                </div>
                                <div className="space-y-1">
                                    <CardTitle className="text-2xl font-black uppercase tracking-tight drop-shadow-sm">Reporting & Compliance Ledger</CardTitle>
                                    <p className="text-[10px] font-bold text-indigo-100 uppercase tracking-widest leading-none">Identify reporting and compliance gaps for follow-up</p>
                                </div>
                            </div>
                            <div className="flex gap-4 w-full md:w-auto">
                                <div className="relative group flex-1 md:w-80 flex">
                                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-white/60" />
                                    <input className="w-full pl-11 pr-6 py-4 border border-white/30 bg-white/10 rounded-2xl text-[10px] font-black uppercase outline-none text-white focus:bg-white/20 transition-all shadow-inner backdrop-blur-sm placeholder:text-white/60" placeholder="Search State / District Node..." />
                                </div>
                                <Button className="h-14 px-8 rounded-2xl bg-white text-indigo-700 font-black uppercase tracking-widest text-[10px] shadow-xl hover:bg-indigo-50 transition-colors">
                                    Auto-Alert Defaulters
                                </Button>
                            </div>
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="p-0">
                    <Table>
                        <TableHeader className="bg-indigo-50/50">
                            <TableRow className="border-b-2 border-indigo-100 font-sans">
                                <TableHead className="px-10 py-6 text-[9px] font-black uppercase tracking-[0.2em] text-indigo-800">Entity Details</TableHead>
                                <TableHead className="text-[9px] font-black uppercase tracking-[0.2em] text-indigo-800 text-center">Last Data Update</TableHead>
                                <TableHead className="text-[9px] font-black uppercase tracking-[0.2em] text-indigo-800 text-center">Indicators Synced</TableHead>
                                <TableHead className="text-[9px] font-black uppercase tracking-[0.2em] text-indigo-800 text-center">Directions Responded</TableHead>
                                <TableHead className="text-right px-10 text-[9px] font-black uppercase tracking-[0.2em] text-indigo-800">Operational Status</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody className="divide-y divide-indigo-50 font-sans">
                            <ReportingRow type="STATE" name="Odisha SDMA" last="14 Oct 24" ind="YES" dir="YES" status="ACTIVE" />
                            <ReportingRow type="STATE" name="Gujarat SDMA" last="12 Oct 24" ind="YES" dir="YES" status="ACTIVE" />
                            <ReportingRow type="DISTRICT" name="Ernakulam DDMA (Kerala)" last="01 Sep 24" ind="NO" dir="NO" status="INACTIVE" alert />
                            <ReportingRow type="STATE" name="Assam SDMA" last="15 Aug 24" ind="NO" dir="NO" status="INACTIVE" alert />
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
        <Card className="rounded-[40px] border-none shadow-lg bg-white overflow-hidden group hover:shadow-2xl transition-all duration-500">
            <CardHeader className="p-8 border-b-2 border-slate-50 relative overflow-hidden">
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
                <div className="space-y-1 relative z-10">
                    <CardTitle className="text-[11px] font-black uppercase tracking-[0.3em] text-orange-600">{title}</CardTitle>
                    <p className="text-sm font-black text-slate-800 tracking-tight leading-none mt-2">{desc}</p>
                </div>
            </CardHeader>
            <CardContent className="p-8 relative overflow-hidden bg-slate-50/30">
                <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/topography.png')]" />
                <div className="relative z-10">{children}</div>
            </CardContent>
        </Card>
    );
}

function PerformanceSnapshot({ title, gradient, icon, data, isDanger }: any) {
    return (
        <Card className="rounded-[40px] border-none shadow-lg bg-white overflow-hidden flex flex-col h-full group hover:shadow-2xl transition-all duration-500">
            <div className={`p-6 flex items-center justify-between text-white relative overflow-hidden ${gradient}`}>
                <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
                <div className="flex items-center gap-4 relative z-10">
                    <div className="h-10 w-10 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center group-hover:scale-110 transition-transform shadow-inner">
                        {React.cloneElement(icon, { size: 18, className: "text-white drop-shadow-md" })}
                    </div>
                    <h3 className="text-[11px] font-black uppercase tracking-[0.2em] drop-shadow-sm">{title}</h3>
                </div>
                <ArrowUpRight size={18} className="text-white/70 relative z-10" />
            </div>
            <div className="p-6 space-y-4 flex-1 relative bg-slate-50/30">
                <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
                {data.map((item: any, i: number) => (
                    <div key={i} className="flex justify-between items-center bg-white border border-slate-100 p-4 rounded-2xl shadow-sm hover:border-slate-300 transition-colors relative z-10 cursor-pointer">
                        <div className="space-y-1">
                            <p className="text-xs font-black text-slate-800 uppercase tracking-tight leading-none">{item.name}</p>
                            <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">{item.metric}</p>
                        </div>
                        <Badge className={`border-none text-[10px] font-black uppercase tracking-widest px-3 py-1 ${isDanger ? 'bg-red-100 text-red-700' : 'bg-emerald-100 text-emerald-700'}`}>
                            {item.score}
                        </Badge>
                    </div>
                ))}
            </div>
        </Card>
    );
}

function ReportingRow({ type, name, last, ind, dir, status, alert }: any) {
    const isState = type === 'STATE';
    const isAlert = alert;

    return (
        <TableRow className="border-none hover:bg-indigo-50/50 transition-all group cursor-pointer">
            <TableCell className="px-10 py-6">
                <div className="flex flex-col gap-1.5">
                    <span className="text-xs font-black text-slate-800 uppercase tracking-tight">{name}</span>
                    <Badge variant="outline" className={`border-2 text-[8px] font-black uppercase tracking-widest px-2 py-0.5 w-fit ${isState ? 'border-blue-200 text-blue-700 bg-blue-50' : 'border-purple-200 text-purple-700 bg-purple-50'}`}>
                        {type} Node
                    </Badge>
                </div>
            </TableCell>
            <TableCell className="text-center">
                <span className={`font-mono font-bold text-[11px] px-3 py-1.5 rounded-lg border shadow-inner ${isAlert ? 'bg-red-50 text-red-600 border-red-100' : 'bg-slate-50 text-slate-500 border-slate-100'}`}>
                    {last}
                </span>
            </TableCell>
            <TableCell className="text-center">
                <Badge className={`border-none font-black text-[9px] uppercase px-3 py-1 ${ind === 'YES' ? 'bg-emerald-100 text-emerald-700' : 'bg-rose-100 text-rose-700'}`}>{ind}</Badge>
            </TableCell>
            <TableCell className="text-center">
                <Badge className={`border-none font-black text-[9px] uppercase px-3 py-1 ${dir === 'YES' ? 'bg-emerald-100 text-emerald-700' : 'bg-rose-100 text-rose-700'}`}>{dir}</Badge>
            </TableCell>
            <TableCell className="text-right px-10">
                <Badge className={`border-none text-[9px] font-black uppercase tracking-widest px-4 py-1.5 shadow-sm ${isAlert ? 'bg-rose-500 text-white animate-pulse' : 'bg-emerald-500 text-white'}`}>
                    {status}
                </Badge>
            </TableCell>
        </TableRow>
    )
}

/* MOCK DATA */
const riskDistributionData = [
    { state: 'OD', population: 450 },
    { state: 'WB', population: 380 },
    { state: 'AP', population: 320 },
    { state: 'TN', population: 290 },
    { state: 'GJ', population: 260 }
];

const shelterAccessData = [
    { state: 'OD', accessible: 120, partial: 80, nonAccessible: 30 },
    { state: 'GJ', accessible: 95, partial: 60, nonAccessible: 20 },
    { state: 'TN', accessible: 85, partial: 50, nonAccessible: 40 },
    { state: 'MH', accessible: 70, partial: 90, nonAccessible: 60 }
];

const readinessTrendData = [
    { month: 'Q1', index: 65 }, { month: 'Q2', index: 72 },
    { month: 'Q3', index: 78 }, { month: 'Q4', index: 84 }
];

const warningTrendData = [
    { month: 'Q1', coverage: 70 }, { month: 'Q2', coverage: 75 },
    { month: 'Q3', coverage: 85 }, { month: 'Q4', coverage: 92 }
];

const topStates = [
    { name: 'Odisha', metric: 'Composite Preparedness Index', score: '94.2%' },
    { name: 'Gujarat', metric: 'Composite Preparedness Index', score: '91.5%' },
    { name: 'Tamil Nadu', metric: 'Composite Preparedness Index', score: '88.7%' }
];

const bottomStates = [
    { name: 'Assam', metric: 'Composite Preparedness Index', score: '42.1%' },
    { name: 'Bihar', metric: 'Composite Preparedness Index', score: '45.8%' },
    { name: 'Jharkhand', metric: 'Composite Preparedness Index', score: '51.2%' }
];

const topDistricts = [
    { name: 'Puri (Odisha)', metric: 'Shelter Access Index', score: '98%' },
    { name: 'Kutch (Gujarat)', metric: 'Shelter Access Index', score: '96%' }
];

const bottomShelters = [
    { name: 'Camp Alpha (Assam)', metric: 'Ramp / Washroom Status', score: 'Non-Compliant' },
    { name: 'Relief Hub (Bihar)', metric: 'Ramp / Washroom Status', score: 'Non-Compliant' }
];