// app/dashboard/district/employment/page.tsx
"use client";
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
    Table, TableBody, TableCell, TableHead, TableHeader, TableRow
} from "@/components/ui/table";
import {
    Briefcase, Users, TrendingUp, AlertCircle,
    Search, Filter, Download, FileSpreadsheet,
    Building2, ArrowUpRight, GraduationCap, ChevronRight,
    ShieldCheck, Landmark, FileWarning
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid,
    Tooltip, ResponsiveContainer, Legend
} from 'recharts';

export default function DistrictEmploymentReport() {

    // KPI Mock Data for Section 5.2
    const districtTotals = {
        establishments: "482",
        totalEmployees: "1,24,500",
        pwdEmployees: "5,210",
        overallPercentage: "4.18%",
        identifiedVacancies: "1,450",
        filledVacancies: "820",
        pendingVacancies: "630"
    };

    return (
        <div className="space-y-8 animate-in fade-in duration-700 pb-20">

            {/* 1. EMPLOYMENT OVERVIEW HEADER */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 bg-white p-8 rounded-[40px] border border-slate-200 shadow-sm">
                <div className="flex items-center gap-6">
                    <div className="h-16 w-16 bg-indigo-600 rounded-2xl flex items-center justify-center text-white shadow-xl">
                        <Briefcase size={32} />
                    </div>
                    <div>
                        <h1 className="text-3xl font-black text-slate-900 tracking-tight uppercase">Employment & Vacancy Hub</h1>
                        <p className="text-slate-500 font-medium">Monitoring 4% Reservation Compliance • Lucknow District</p>
                    </div>
                </div>
                <div className="flex gap-3">
                    <Button variant="outline" className="h-12 px-6 rounded-2xl border-slate-200 font-bold gap-2">
                        <FileSpreadsheet size={18} className="text-green-600" /> Export XLS
                    </Button>
                    <Button className="h-12 px-8 rounded-2xl bg-slate-900 text-white font-black uppercase tracking-widest text-[10px] gap-2 shadow-xl">
                        <Download size={18} /> Download Detailed PDF
                    </Button>
                </div>
            </div>

            {/* 2. STATUTORY KPI GRID (Section 5.2 Requirements) */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <KPICard label="Total Establishments" value={districtTotals.establishments} icon={<Building2 />} color="text-slate-900" />
                <KPICard label="Total Workforce" value={districtTotals.totalEmployees} icon={<Users />} color="text-blue-600" />
                <KPICard label="PwD Workforce" value={districtTotals.pwdEmployees} icon={<GraduationCap />} color="text-indigo-600" />
                <div className="bg-slate-900 rounded-[32px] p-6 text-white shadow-xl flex flex-col justify-between overflow-hidden relative">
                    <div className="absolute top-0 right-0 p-4 opacity-10"><ShieldCheck size={80} /></div>
                    <p className="text-[9px] font-black uppercase tracking-widest text-slate-500">Employment %</p>
                    <div className="flex items-baseline gap-2">
                        <span className="text-4xl font-black text-blue-400">{districtTotals.overallPercentage}</span>
                        <span className="text-[10px] font-bold text-green-400">Above Mandate</span>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                {/* 3. VACANCY GAP ANALYSIS (Visualizing Section 5.2 Vacancies) */}
                <Card className="lg:col-span-2 rounded-[40px] border-slate-200 shadow-sm overflow-hidden bg-white">
                    <CardHeader className="p-8 border-b border-slate-50 bg-slate-50/30 flex flex-row justify-between items-center">
                        <div>
                            <CardTitle className="text-xs font-black uppercase tracking-widest text-slate-400">Vacancy Fulfillment Gap</CardTitle>
                            <p className="text-sm font-bold text-slate-900 mt-1">Identified vs Filled PwD Posts</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2"><div className="h-2 w-2 rounded-full bg-blue-600" /> <span className="text-[10px] font-bold uppercase text-slate-500">Identified</span></div>
                            <div className="flex items-center gap-2"><div className="h-2 w-2 rounded-full bg-slate-200" /> <span className="text-[10px] font-bold uppercase text-slate-500">Filled</span></div>
                        </div>
                    </CardHeader>
                    <CardContent className="p-10">
                        <ResponsiveContainer width="100%" height={300}>
                            <BarChart data={vacancyChartData}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                                <XAxis dataKey="sector" axisLine={false} tickLine={false} tick={{ fontSize: 10, fontWeight: 'bold' }} />
                                <YAxis axisLine={false} tickLine={false} />
                                <Tooltip cursor={{ fill: '#f8fafc' }} contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }} />
                                <Bar dataKey="identified" fill="#2563eb" radius={[6, 6, 0, 0]} barSize={40} />
                                <Bar dataKey="filled" fill="#e2e8f0" radius={[6, 6, 0, 0]} barSize={40} />
                            </BarChart>
                        </ResponsiveContainer>
                    </CardContent>
                </Card>

                {/* 4. VACANCY ALERT SIDEBAR */}
                <div className="space-y-6">
                    <Card className="rounded-[40px] border-2 bg-red-600 text-white p-8 shadow-2xl relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:rotate-12 transition-transform"><FileWarning size={120} /></div>
                        <h3 className="text-sm font-black uppercase tracking-[0.2em] mb-4">Urgent: Pending Vacancies</h3>
                        <div className="space-y-1">
                            <p className="text-6xl font-black tracking-tighter">{districtTotals.pendingVacancies}</p>
                            <p className="text-xs font-bold uppercase opacity-70 tracking-widest">Identified Posts Unfilled</p>
                        </div>
                        <Button className="w-full mt-8 bg-white text-red-600 hover:bg-slate-100 h-12 rounded-2xl font-black uppercase tracking-widest text-[9px]">
                            Issue Recruitment Directions
                        </Button>
                    </Card>

                    <Card className="rounded-[40px] border-slate-200 p-8 bg-white shadow-sm">
                        <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-6 underline underline-offset-8 decoration-slate-100">Top Vacant Sectors</h4>
                        <div className="space-y-6">
                            <SectorItem label="Health & Family Welfare" count="142" />
                            <SectorItem label="Education Department" count="108" />
                            <SectorItem label="Public Works (PWD)" count="94" />
                            <SectorItem label="Banking & Finance" count="82" />
                        </div>
                    </Card>
                </div>
            </div>

            {/* 5. DETAILED REGISTRY (Section 5.2 Format) */}
            <Card className="rounded-[40px] border-slate-200 shadow-sm overflow-hidden bg-white">
                <CardHeader className="p-8 border-b border-slate-50 flex flex-row justify-between items-center">
                    <CardTitle className="text-sm font-black uppercase tracking-widest text-slate-400">Establishment-wise Employment Statistics</CardTitle>
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-300" />
                        <input className="pl-10 pr-4 py-2 bg-slate-50 border-2 rounded-xl text-xs font-bold outline-none w-64" placeholder="Search Establishment..." />
                    </div>
                </CardHeader>
                <CardContent className="p-0">
                    <Table>
                        <TableHeader className="bg-slate-50/50">
                            <TableRow className="border-slate-100">
                                <TableHead className="px-8 py-5 text-[9px] font-black uppercase tracking-widest text-slate-400">Establishment Name</TableHead>
                                <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400 text-center">Total Employees</TableHead>
                                <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400 text-center">PwD Employees</TableHead>
                                <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400 text-center">PwD %</TableHead>
                                <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400 text-center">Identified Posts</TableHead>
                                <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400 text-center">Posts Filled</TableHead>
                                <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400 text-center">Posts Pending</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody className="divide-y divide-slate-50">

                            <EmploymentRow
                                name="Regional Transport Office"
                                total="2,400"
                                pwd="102"
                                perc="4.25%"
                                ident="105"
                                filled="102"
                                pending="03"
                            />

                            <EmploymentRow
                                name="Municipal Corporation LKO"
                                total="8,500"
                                pwd="210"
                                perc="2.47%"
                                ident="340"
                                filled="210"
                                pending="130"
                                alert
                            />

                            <EmploymentRow
                                name="HDFC Regional Hub (Pvt)"
                                total="1,200"
                                pwd="48"
                                perc="4.00%"
                                ident="48"
                                filled="48"
                                pending="00"
                            />

                            <EmploymentRow
                                name="Primary Education Board"
                                total="12,000"
                                pwd="420"
                                perc="3.50%"
                                ident="480"
                                filled="420"
                                pending="60"
                                warning
                            />

                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    );
}

/* UI HELPER COMPONENTS */

function KPICard({ label, value, icon, color }: any) {
    return (
        <Card className="rounded-[32px] border-slate-100 shadow-sm hover:shadow-md transition-all bg-white overflow-hidden group">
            <CardContent className="p-6">
                <div className="flex justify-between items-start">
                    <div className="p-3 bg-slate-50 rounded-2xl text-slate-400 group-hover:text-blue-600 transition-colors">
                        {React.cloneElement(icon, { size: 24 })}
                    </div>
                    <ArrowUpRight size={14} className="text-slate-200 group-hover:text-blue-500" />
                </div>
                <div className="mt-4">
                    <p className={`text-3xl font-black ${color}`}>{value}</p>
                    <p className="text-[9px] font-black uppercase text-slate-400 tracking-widest mt-1">{label}</p>
                </div>
            </CardContent>
        </Card>
    )
}

function SectorItem({ label, count }: any) {
    return (
        <div className="flex justify-between items-center group cursor-pointer">
            <div className="space-y-0.5">
                <p className="text-xs font-black text-slate-800 uppercase tracking-tighter group-hover:text-blue-600 transition-colors">{label}</p>
                <div className="h-1 w-full bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-slate-200 w-1/2" />
                </div>
            </div>
            <span className="text-sm font-black text-slate-900">{count}</span>
        </div>
    )
}

function EmploymentRow({ name, total, pwd, perc, ident, filled, pending, alert, warning }: any) {
    return (
        <TableRow className="border-2 hover:bg-slate-50 transition-colors group">
            <TableCell className="px-8 py-5">
                <div className="flex items-center gap-3">
                    <div className={`h-2 w-2 rounded-full ${alert ? 'bg-red-500' : warning ? 'bg-orange-500' : 'bg-green-500'}`} />
                    <span className="text-sm font-black text-slate-900 uppercase tracking-tighter">{name}</span>
                </div>
            </TableCell>
            <TableCell className="text-center font-bold text-slate-500 text-xs">{total}</TableCell>
            <TableCell className="text-center font-bold text-slate-700 text-xs">{pwd}</TableCell>
            <TableCell className="text-center">
                <span className={`text-[11px] font-mono font-black ${alert ? 'text-red-600' : warning ? 'text-orange-600' : 'text-blue-600'}`}>
                    {perc}
                </span>
            </TableCell>
            <TableCell className="text-center font-bold text-slate-500 text-xs">{ident}</TableCell>
            <TableCell className="text-center font-bold text-slate-700 text-xs">{filled}</TableCell>
            <TableCell className="text-center">
                <Badge className={`rounded-md px-2 py-0.5 font-black text-[10px] ${alert ? 'bg-red-100 text-red-600' : 'bg-slate-100 text-slate-600'}`}>
                    {pending}
                </Badge>
            </TableCell>
        </TableRow>
    )
}

const vacancyChartData = [
    { sector: 'Govt Depts', identified: 450, filled: 310 },
    { sector: 'PSUs', identified: 320, filled: 280 },
    { sector: 'Health', identified: 280, filled: 120 },
    { sector: 'Education', identified: 400, filled: 320 },
];