// app/dashboard/establishment/page.tsx
"use client";
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
    MessageSquare, Clock, AlertCircle, Accessibility,
    Gavel, TrendingUp, Filter, Download, Sparkles,
    CheckCircle2, FileWarning, Activity, Globe, Users
} from "lucide-react";
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip,
    ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell,
    Legend, ComposedChart, AreaChart, Area
} from 'recharts';
import { Button } from '@/components/ui/button';

export default function EstablishmentDashboard() {

    // SECTION 12: STATUTORY DATA SETS
    const grievanceTrend = [
        { month: 'Jul', received: 40, disposed: 30, pending: 10 },
        { month: 'Aug', received: 55, disposed: 35, pending: 20 },
        { month: 'Sep', received: 45, disposed: 40, pending: 5 },
        { month: 'Oct', received: 70, disposed: 45, pending: 25 },
    ];

    const employmentData = [
        { name: 'PwD Employees', value: 12 },
        { name: 'Non-PwD', value: 278 },
    ];

    const complianceScores = [
        { area: 'Physical', score: 85 },
        { area: 'Digital', score: 40 },
        { area: 'Employment', score: 100 },
        { area: 'Policy', score: 95 },
        { area: 'Response', score: 72 },
    ];

    return (
        <div className="space-y-10 animate-in fade-in duration-700 pb-20 font-sans">

            {/* 1. ESTABLISHMENT HEADER WITH TEXTURE */}
            <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-6 bg-indigo-900 p-10 rounded-[48px] shadow-2xl relative overflow-hidden text-white">
                <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/circuit-board.png')]" />
                <div className="space-y-2 relative z-10">
                    <div className="inline-flex items-center gap-2 bg-blue-600 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border border-blue-400/30 shadow-lg">
                        <Globe size={14} className="animate-spin-slow" /> Node: EST-UP-7721-LKO
                    </div>
                    <h1 className="text-3xl font-black tracking-tighter uppercase leading-none">Establishments Dashboard</h1>
                    <p className="text-slate-400 font-medium text-lg italic">Statewide Monitoring of PwD Act Compliance & Grievance SLA.</p>
                </div>
                <div className="flex gap-4 relative z-10">
                    <Button variant="outline" className="h-16 px-8 rounded-3xl border-white/10 font-black uppercase tracking-widest text-[10px] bg-white/5 hover:bg-white/10 text-white backdrop-blur-md">
                        <Activity size={18} className="mr-2" /> Audit History
                    </Button>
                    <Button className="h-16 px-10 rounded-3xl bg-blue-600 text-white font-black uppercase tracking-widest text-[10px] shadow-2xl shadow-blue-500/40 hover:bg-blue-700 transition-all gap-2">
                        <Sparkles size={18} /> AI Compliance Brief
                    </Button>
                </div>
            </div>

            {/* 2. SECTION 5.1: COLORED KPI TILES (With Patterns) */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
                <StatTile label="Total Grievances" value="124" icon={<MessageSquare />} color="from-blue-600 to-indigo-900" />
                <StatTile label="Pending Review" value="18" icon={<Clock />} color="from-indigo-500 to-purple-800" />
                <StatTile label="Overdue SLA" value="05" icon={<AlertCircle />} color="from-red-600 to-rose-900" alert />
                <StatTile label="Access Issues" value="09" icon={<Accessibility />} color="from-orange-500 to-amber-800" />
                <StatTile label="Authority Directions" value="02" icon={<Gavel />} color="from-slate-700 to-slate-900" />

                {/* COMPLIANCE SCORE CARD */}
                <div className="group relative p-6 rounded-[32px] overflow-hidden transition-all duration-500 bg-white border-2 border-blue-100 shadow-xl flex flex-col justify-between">
                    <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/topography.png')]" />
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Section 7 Score</p>
                    <div className="relative z-10 flex items-baseline gap-1">
                        <span className="text-5xl font-black text-blue-600">79</span>
                        <span className="text-xl font-black text-blue-400">%</span>
                    </div>
                    <div className="w-full h-1.5 bg-slate-100 rounded-full mt-4 overflow-hidden">
                        <div className="h-full bg-blue-600 shadow-[0_0_12px_rgba(37,99,235,0.4)]" style={{ width: '79%' }} />
                    </div>
                </div>
            </div>

            {/* 3. SECTION 12: ANALYTICS ZONE (Real Charts) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

                {/*  GRIEVANCE TREND (Large Line Chart) */}
                <ChartCard title=" Grievance Trend Analysis" desc="Identify backlog and improvement trend." cols="lg:col-span-8">
                    <ResponsiveContainer width="100%" height={350}>
                        <LineChart data={grievanceTrend} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                            <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 11, fontWeight: 'bold' }} />
                            <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 11, fontWeight: 'bold' }} />
                            <Tooltip contentStyle={{ borderRadius: '24px', border: 'none', boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1)' }} />
                            <Legend verticalAlign="top" align="right" iconType="circle" wrapperStyle={{ paddingBottom: '40px', fontSize: '10px', fontWeight: 'black', textTransform: 'uppercase' }} />
                            <Line type="monotone" name="Received" dataKey="received" stroke="#2563eb" strokeWidth={5} dot={{ r: 6, fill: '#2563eb', strokeWidth: 3, stroke: '#fff' }} />
                            <Line type="monotone" name="Disposed" dataKey="disposed" stroke="#10b981" strokeWidth={5} dot={{ r: 6, fill: '#10b981', strokeWidth: 3, stroke: '#fff' }} />
                            <Line type="monotone" name="Pending" dataKey="pending" stroke="#f43f5e" strokeWidth={5} strokeDasharray="10 10" />
                        </LineChart>
                    </ResponsiveContainer>
                </ChartCard>

                {/*  EMPLOYMENT COMPOSITION (Donut) */}
                <ChartCard title=" Employment share" desc="4% Mandate Compliance." cols="lg:col-span-4">
                    <div className="flex flex-col items-center justify-center relative h-full">
                        <ResponsiveContainer width="100%" height={250}>
                            <PieChart>
                                <Pie data={employmentData} innerRadius={70} outerRadius={90} paddingAngle={8} dataKey="value">
                                    <Cell fill="#2563eb" />
                                    <Cell fill="#f1f5f9" />
                                </Pie>
                                <Tooltip />
                            </PieChart>
                        </ResponsiveContainer>
                        <div className="absolute top-[40%] text-center">
                            <p className="text-4xl font-black text-slate-900 tracking-tighter">4.2%</p>
                            <Badge className="bg-green-100 text-green-700 border-none font-black text-[8px] uppercase">Compliant</Badge>
                        </div>
                        <div className="w-full space-y-3 mt-4">
                            <LegendItem color="bg-blue-600" label="PwD Employees" val="12" />
                            <LegendItem color="bg-slate-200" label="General Staff" val="278" />
                        </div>
                    </div>
                </ChartCard>

                {/*  COMPLIANCE COMPARISON (Vertical Bars) */}
                <ChartCard title=" Compliance Area Comparison" desc="Identifying weakest implementation points." cols="lg:col-span-6">
                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={complianceScores} layout="vertical" margin={{ left: 40 }}>
                            <XAxis type="number" domain={[0, 100]} hide />
                            <YAxis dataKey="area" type="category" axisLine={false} tickLine={false} tick={{ fontSize: 10, fontWeight: 'black' }} width={100} />
                            <Tooltip cursor={{ fill: '#f8fafc' }} />
                            <Bar dataKey="score" radius={[0, 10, 10, 0]} barSize={24}>
                                {complianceScores.map((entry, index) => (
                                    <Cell key={index} fill={entry.score < 50 ? '#ef4444' : '#4f46e5'} />
                                ))}
                            </Bar>
                        </BarChart>
                    </ResponsiveContainer>
                </ChartCard>

                {/*  TIME-TO-RESOLUTION (Composed Chart) */}
                <ChartCard title=" Disposal Efficiency" desc="Avg resolution days vs Statutory SLA." cols="lg:col-span-6">
                    <ResponsiveContainer width="100%" height={300}>
                        <ComposedChart data={grievanceTrend}>
                            <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 10, fontWeight: 'bold' }} />
                            <YAxis axisLine={false} tickLine={false} />
                            <Tooltip />
                            <Bar dataKey="disposed" name="Days Taken" fill="#bfdbfe" radius={[8, 8, 0, 0]} barSize={40} />
                            <Line type="monotone" dataKey="received" name="Statutory SLA" stroke="#ef4444" strokeWidth={3} strokeDasharray="5 5" />
                        </ComposedChart>
                    </ResponsiveContainer>
                </ChartCard>
            </div>
        </div>
    );
}

/* UI SUB-COMPONENTS */

function StatTile({ label, value, icon, color, alert }: any) {
    return (
        <button className={`group relative text-left p-6 rounded-[32px] overflow-hidden transition-all duration-500 h-44 flex flex-col justify-between shadow-lg hover:shadow-2xl hover:-translate-y-1 bg-gradient-to-br ${color} text-white border-t border-white/20`}>
            <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
            <div className="relative z-10 flex flex-col justify-between h-full">
                <div className="h-10 w-10 rounded-xl bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform">
                    {React.cloneElement(icon, { size: 20, className: "text-white" })}
                </div>
                <div>
                    <p className="text-3xl font-black tracking-tighter drop-shadow-md">{value}</p>
                    <p className="text-[9px] font-black uppercase tracking-[0.15em] opacity-80 mt-1 leading-tight">{label}</p>
                </div>
            </div>
            {alert && <div className="absolute top-6 right-6 h-2 w-2 rounded-full bg-white animate-ping" />}
        </button>
    )
}

function ChartCard({ title, desc, children, cols }: any) {
    return (
        <Card className={`rounded-[44px] border-slate-200 bg-white shadow-sm overflow-hidden flex flex-col ${cols}`}>
            <CardHeader className="p-8 border-b border-slate-50 mb-6 bg-slate-50/30">
                <div className="space-y-1">
                    <CardTitle className="text-[11px] font-black uppercase tracking-[0.25em] text-blue-600">{title}</CardTitle>
                    <p className="text-lg font-black text-slate-900 tracking-tight">{desc}</p>
                </div>
            </CardHeader>
            <CardContent className="px-8 pb-10 flex-1">
                {children}
            </CardContent>
        </Card>
    )
}

function LegendItem({ color, label, val }: any) {
    return (
        <div className="flex justify-between items-center bg-slate-50 p-3 rounded-2xl border border-slate-100 group hover:bg-white transition-all">
            <div className="flex items-center gap-3">
                <div className={`h-2.5 w-2.5 rounded-full ${color}`} />
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{label}</span>
            </div>
            <span className="text-sm font-black text-slate-900">{val}</span>
        </div>
    )
}