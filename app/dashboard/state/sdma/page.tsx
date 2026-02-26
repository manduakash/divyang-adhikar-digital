// app/dashboard/sdma/page.tsx
"use client";
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
    ShieldAlert, Siren, Home, Truck, Map,
    Navigation, Activity, AlertTriangle,
    CheckCircle2, Users, Search, Filter,
    ArrowUpRight, Zap, Trophy, History,
    Timer, BarChart3, TrendingUp, Globe,
    Radio, Megaphone, BadgeCheck, FileText,
    MousePointer2, Clock, Landmark, Gavel,
    Printer,
    MapPin,
    Sparkles
} from "lucide-react";
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip,
    ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell,
    Legend, ComposedChart, AreaChart, Area
} from 'recharts';
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function SDMADashboard() {

    // ACTION INDICATORS (Vibrant Patterned Gradients)
    const indicators = [
        { label: "PwDs in Risk Zones (State Total)", value: "124K", icon: Users, color: "from-orange-500 to-red-600" },
        { label: "Districts Reporting (DDMA Coverage)", value: "75/75", icon: Globe, color: "from-blue-600 to-indigo-700" },
        { label: "Shelters Mapped", value: "3,450", icon: Map, color: "from-indigo-600 to-purple-700" },
        { label: "Accessible Shelters", value: "2,840", icon: CheckCircle2, color: "from-emerald-500 to-green-700" },
        { label: "Transport Readiness (Aggregated)", value: "84%", icon: Truck, color: "from-slate-700 to-slate-900" },
        { label: "Assistive Support Availability", value: "92%", icon: Activity, color: "from-blue-500 to-blue-700" },
        { label: "Early Warning Coverage (PwD)", value: "98.2%", icon: Megaphone, color: "from-purple-600 to-purple-800" },
        { label: "Preparedness Actions Pending", value: "114", icon: Clock, color: "from-orange-400 to-red-700", alert: true },
        { label: "High-Risk Districts (PwD)", value: "08", icon: ShieldAlert, color: "from-red-600 to-red-700", alert: true },
        { label: "Directions Pending Compliance", value: "22", icon: Gavel, color: "from-indigo-800 to-black", alert: true },
        { label: "Post-Disaster Actions Pending", value: "05", icon: Timer, color: "from-rose-500 to-rose-600" },
        { label: "Alerts / Advisories Issued", value: "142", icon: Zap, color: "from-amber-500 to-amber-600" },
    ];

    return (
        <div className="space-y-12 animate-in fade-in duration-1000 pb-20 font-sans selection:bg-orange-100">

            {/* APEX COMMAND HEADER */}
            <div className="flex flex-col xl:flex-row justify-between items-start xl:items-end gap-6 bg-white p-10 rounded-[48px] border border-slate-200 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 p-10 opacity-[0.03] pointer-events-none text-orange-600">
                    <Siren size={200} />
                </div>
                <div className="space-y-4 relative z-10">
                    <div className="inline-flex items-center gap-2 bg-orange-50 text-orange-700 px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.2em] border border-orange-100 shadow-sm">
                        <Radio size={14} className="animate-pulse" /> State Disaster Node: Unified Command
                    </div>
                    <h1 className="text-4xl font-black text-slate-900 tracking-tighter uppercase leading-none">State Disaster Management Authority</h1>
                    <p className="text-slate-500 font-medium text-xl italic underline underline-offset-8 decoration-orange-100 uppercase tracking-tighter leading-tight">Statewide PwD Disaster Readiness & Emergency Response Monitoring Hub.</p>
                </div>
                <div className="flex gap-4 relative z-10">
                    <Button variant="outline" className="h-16 px-8 rounded-3xl border-slate-200 font-black uppercase tracking-widest text-[10px] bg-white shadow-xl hover:bg-slate-50 transition-all group">
                        <Navigation size={18} className="mr-2 text-blue-600" /> GIS State Map
                    </Button>
                    <Button className="h-16 px-10 rounded-3xl bg-slate-950 text-white font-black uppercase tracking-widest text-[10px] shadow-2xl hover:bg-black transition-all gap-2 group">
                        <Sparkles size={18} className="text-orange-400 fill-orange-400" /> AI Risk Summary
                    </Button>
                </div>
            </div>

            {/* ACTION BUTTONS (TOP SECTION) */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5">
                {indicators.map((item, i) => (
                    <button key={i} className={`group relative text-left p-6 rounded-[32px] overflow-hidden transition-all duration-500 h-44 flex flex-col justify-between shadow-lg hover:shadow-2xl hover:-translate-y-2 bg-gradient-to-br ${item.color} text-white border-t border-white/20`}>
                        <div className="absolute inset-0 opacity-[0.08] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
                        <div className="relative z-10 flex flex-col justify-between h-full">
                            <div className="h-10 w-10 rounded-xl bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform">
                                <item.icon size={20} className="drop-shadow-md" />
                            </div>
                            <div>
                                <p className="text-2xl font-black tracking-tighter drop-shadow-sm">{item.value}</p>
                                <p className="text-[8px] font-black uppercase tracking-widest opacity-80 leading-tight mt-1 min-h-[20px]">{item.label}</p>
                            </div>
                        </div>
                        {item.alert && <div className="absolute top-6 right-6 h-2 w-2 rounded-full bg-white animate-ping" />}
                    </button>
                ))}
            </div>

            {/* GRAPHS & CHARTS (MIDDLE SECTION) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

                {/* PwD RISK DISTRIBUTION */}
                <ChartContainer title="PwD Risk Distribution – District-wise" desc="Regional concentration of high-vulnerability nodes." cols="lg:col-span-8">
                    <ResponsiveContainer width="100%" height={350}>
                        <BarChart data={riskData} margin={{ top: 20, right: 30, left: 0, bottom: 20 }}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                            <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 10, fontWeight: 'black' }} />
                            <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10, fontWeight: 'bold' }} />
                            <Tooltip cursor={{ fill: '#f8fafc' }} contentStyle={{ borderRadius: '24px', border: 'none', boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1)' }} />
                            <Bar dataKey="risk" fill="#f97316" radius={[12, 12, 0, 0]} barSize={60}>
                                {riskData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={index % 2 === 0 ? '#ea580c' : '#f97316'} />
                                ))}
                            </Bar>
                        </BarChart>
                    </ResponsiveContainer>
                </ChartContainer>

                {/* EARLY WARNING COVERAGE */}
                <ChartContainer title="Early Warning Coverage (PwD)" desc="Fulfillment distribution across reached nodes." cols="lg:col-span-4">
                    <div className="h-full w-full flex items-center justify-center relative">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie data={warningData} innerRadius={80} outerRadius={110} paddingAngle={8} dataKey="value">
                                    {warningData.map((entry, index) => <Cell key={index} fill={entry.color} stroke="none" />)}
                                </Pie>
                                <Tooltip />
                            </PieChart>
                        </ResponsiveContainer>
                        <div className="absolute text-center space-y-1">
                            <p className="text-4xl font-black text-slate-900 tracking-tighter leading-none">98.2<span className="text-lg">%</span></p>
                            <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">State Coverage</p>
                        </div>
                    </div>
                </ChartContainer>
            </div>

            {/* TOP / BOTTOM PERFORMANCE SNAPSHOTS */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <RankingCard title="Top 5 Districts – PwD Preparedness" color="text-green-600" bg="bg-green-50" icon={<Trophy />} data={topDistricts} />
                <RankingCard title="Bottom 5 Districts – PwD Preparedness" color="text-red-600" bg="bg-rose-50" icon={<AlertTriangle />} data={bottomDistricts} isDanger />
                <RankingCard title="Top 5 Shelters – Accessibility & Capacity" color="text-blue-600" bg="bg-blue-50" icon={<Home />} data={topShelters} />
                <RankingCard title="Bottom 5 Shelters – Accessibility Gaps" color="text-orange-600" bg="bg-orange-50" icon={<ShieldAlert />} data={bottomShelters} isDanger />
            </div>

            {/* ACTIVE / INACTIVE (BOTTOM SECTION) */}
            <Card className="rounded-[48px] border-slate-200 shadow-sm overflow-hidden bg-white">
                <CardHeader className="p-10 border-b border-slate-50 bg-slate-900 text-white flex flex-row justify-between items-center relative overflow-hidden">
                    <div className="absolute inset-0 opacity-[0.05] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
                    <div className="flex items-center gap-5 relative z-10">
                        <div className="h-12 w-12 rounded-2xl bg-white/10 flex items-center justify-center border border-white/10 shadow-inner">
                            <BadgeCheck size={24} className="text-orange-400" />
                        </div>
                        <div className="space-y-1">
                            <CardTitle className="text-sm font-black uppercase tracking-widest leading-none">Active / Inactive Unit Monitor</CardTitle>
                            <p className="text-[10px] text-slate-500 font-bold uppercase mt-1 tracking-widest italic leading-none">Consolidated district and shelter activity tracking node.</p>
                        </div>
                    </div>
                    <div className="flex gap-4 relative z-10">
                        <div className="relative group">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-500" />
                            <input className="pl-11 pr-6 py-3 bg-white/5 border border-white/10 rounded-2xl text-[10px] font-black uppercase outline-none w-64 text-white focus:bg-white/10 transition-all" placeholder="Search District ID..." />
                        </div>
                        <Button variant="outline" className="h-12 border-white/10 bg-white/5 text-white hover:bg-white/10 rounded-2xl font-black uppercase tracking-widest text-[9px]">Filter Registry</Button>
                    </div>
                </CardHeader>
                <CardContent className="p-0">
                    <Table>
                        <TableHeader className="bg-slate-50/80">
                            <TableRow className="border-slate-100">
                                <TableHead className="px-10 py-6 text-[9px] font-black uppercase tracking-[0.2em] text-slate-400">Node ID</TableHead>
                                <TableHead className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400">District Preparedness Unit</TableHead>
                                <TableHead className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 text-center">Last Active Participation</TableHead>
                                <TableHead className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 text-center">Avg Response Rate</TableHead>
                                <TableHead className="text-right px-10 text-[9px] font-black uppercase tracking-[0.2em] text-slate-400">Registry Status</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody className="divide-y divide-slate-50 font-sans">
                            <NodeRow id="DDMA-LKO-01" name="Lucknow Urban Hub" last="12 Oct 2024" rate="98.5%" status="ACTIVE" success />
                            <NodeRow id="DDMA-VNS-04" name="Varanasi Region" last="14 Oct 2024" rate="92.0%" status="ACTIVE" success />
                            <NodeRow id="DDMA-MRT-09" name="Meerut Cluster" last="05 Jan 2024" rate="12.0%" status="INACTIVE" alert />
                            <NodeRow id="DDMA-AGR-12" name="Agra Sector" last="10 Sep 2024" rate="65.0%" status="ACTIVE" warning />
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>

            {/* FOOTER ACTIONS */}
            <footer className="pt-12 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="flex items-center gap-4">
                    <Globe className="text-orange-600 animate-spin-slow" size={24} />
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 leading-none">State Disaster Sync Node Active: v5.2 • Statewide Aggregation Verified</span>
                </div>
                <div className="flex gap-4">
                    <Button variant="outline" className="h-14 px-8 rounded-2xl border-slate-200 font-bold bg-white gap-2 text-[10px] uppercase tracking-widest hover:bg-slate-50 shadow-sm transition-all"><FileText size={18} /> Download Emergency SOPs</Button>
                    <Button className="h-14 px-10 rounded-2xl bg-slate-900 text-white font-black uppercase tracking-widest text-[10px] shadow-2xl gap-2 hover:bg-black transition-all group">
                        <Printer size={18} /> Export Briefing Note <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
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
                    <CardTitle className="text-[11px] font-black uppercase tracking-[0.25em] text-orange-600 leading-none">{title}</CardTitle>
                    <p className="text-lg font-black text-slate-900 tracking-tight leading-none mt-2">{desc}</p>
                </div>
            </CardHeader>
            <CardContent className="px-8 pb-10 flex-1 relative z-10">{children}</CardContent>
        </Card>
    );
}

function RankingCard({ title, data, color, bg, icon, isDanger }: any) {
    return (
        <Card className="rounded-[40px] border-slate-200 bg-white shadow-sm overflow-hidden h-full flex flex-col">
            <div className={`p-6 border-b border-slate-50 flex items-center justify-between ${isDanger ? 'bg-rose-50/50' : 'bg-slate-50/30'}`}>
                <div className="flex items-center gap-3">
                    <div className={`${color}`}>{icon}</div>
                    <h3 className={`text-[10px] font-black uppercase tracking-widest ${color}`}>{title}</h3>
                </div>
            </div>
            <div className="p-6 space-y-5 flex-1">
                {data.map((item: any, i: number) => (
                    <div key={i} className="flex justify-between items-start group cursor-pointer border-b border-slate-50 pb-4 last:border-0 hover:bg-slate-50/50 rounded-xl p-2 transition-all">
                        <div className="space-y-1">
                            <p className="text-xs font-black text-slate-800 uppercase tracking-tight group-hover:text-orange-600 transition-colors leading-none">{item.name}</p>
                            <p className="text-[8px] font-bold text-slate-400 uppercase tracking-widest mt-1">{item.sub}</p>
                        </div>
                        <span className={`text-sm font-black ${isDanger ? 'text-red-500' : 'text-orange-600'}`}>{item.score}</span>
                    </div>
                ))}
            </div>
        </Card>
    )
}

function NodeRow({ id, name, last, rate, status, success, alert, warning }: any) {
    const statusColor = success ? 'bg-green-500' : alert ? 'bg-red-500 animate-pulse shadow-[0_0_8px_rgba(239,68,68,0.4)]' : warning ? 'bg-orange-500' : 'bg-blue-400';
    return (
        <TableRow className="border-none hover:bg-slate-50 transition-all group cursor-pointer font-sans">
            <TableCell className="px-10 py-6">
                <span className="text-[11px] font-mono font-black text-orange-600 bg-orange-50 px-2 py-0.5 rounded-md uppercase tracking-tighter">{id}</span>
            </TableCell>
            <TableCell>
                <p className="text-sm font-black text-slate-800 uppercase tracking-tight leading-none">{name}</p>
                <p className="text-[8px] font-bold text-slate-400 uppercase tracking-widest mt-1.5 flex items-center gap-1"><MapPin size={10} /> District Command Node</p>
            </TableCell>
            <TableCell className="text-center font-bold text-slate-400 text-[10px] uppercase">{last}</TableCell>
            <TableCell className="text-center"><span className={`text-[11px] font-mono font-black ${alert ? 'text-red-600 underline' : 'text-slate-900'}`}>{rate}</span></TableCell>
            <TableCell className="text-right px-10">
                <Badge className={`rounded-full px-4 py-1 text-[8px] font-black uppercase border-none shadow-none ${alert ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
                    {status}
                </Badge>
            </TableCell>
        </TableRow>
    )
}

/* MOCK DATA */
const riskData = [{ name: 'Urban LKO', risk: 840 }, { name: 'Meerut Hub', risk: 620 }, { name: 'VNS North', risk: 480 }, { name: 'Agra East', risk: 710 }, { name: 'GBN Sector', risk: 940 }];
const warningData = [{ name: 'Reached', value: 98, color: '#f97316' }, { name: 'Unreached', value: 2, color: '#f1f5f9' }];
const topDistricts = [{ name: 'Lucknow', sub: 'Prep Score 98%', score: '98%' }, { name: 'Varanasi', sub: 'Prep Score 94%', score: '94%' }, { name: 'Agra', sub: 'Prep Score 92%', score: '92%' }, { name: 'GB Nagar', sub: 'Prep Score 91%', score: '91%' }, { name: 'Kanpur', sub: 'Prep Score 89%', score: '89%' }];
const bottomDistricts = [{ name: 'Howrah Rural', sub: 'Access Gap', score: '42%' }, { name: 'Meerut Cluster', sub: 'Mapping Failure', score: '48%' }, { name: 'Sunderbans', sub: 'High SOS Delay', score: '51%' }, { name: 'Sector 4', sub: 'Resource Gap', score: '54%' }, { name: 'Node B', sub: 'Audit Pending', score: '58%' }];
const topShelters = [{ name: 'City Hub A', sub: 'LKO Node', score: '98%' }, { name: 'Stadium Node', sub: 'VNS Node', score: '96%' }, { name: 'GIC School', sub: 'AGR Node', score: '94%' }, { name: 'Community Ctr', sub: 'GBN Node', score: '92%' }, { name: 'Central Hall', sub: 'KNP Node', score: '90%' }];
const bottomShelters = [{ name: 'Primary School B', sub: 'Ramp Deficit', score: 'Gap' }, { name: 'Old Library', sub: 'No Power', score: 'Gap' }, { name: 'Village Ctr 1', sub: 'Toilet Def.', score: 'Gap' }, { name: 'Block School', sub: 'Flood Risk', score: 'Gap' }, { name: 'Temp Camp 2', sub: 'No Aid', score: 'Gap' }];