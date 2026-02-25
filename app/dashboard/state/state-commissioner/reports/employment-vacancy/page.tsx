// app/dashboard/scpd/reports/employment-vacancy/page.tsx
"use client";
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
    Table, TableBody, TableCell, TableHead, TableHeader, TableRow
} from "@/components/ui/table";
import {
    Briefcase, Search, Filter, Printer, FileSpreadsheet,
    ArrowUpRight, Globe, ShieldCheck, BadgeCheck,
    Users, Landmark, MapPin, CheckCircle2,
    AlertTriangle, History, Download, TrendingUp,
    Target, GraduationCap, BarChart3, ChevronDown,
    Activity,
    Timer
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function EmploymentVacancyReport() {

    // Section A7.9 Aggregated State Totals
    const stateTotals = {
        totalEmployees: "8.4M",
        pwdEmployees: "342,850",
        identifiedVacancies: "12,450",
        filledVacancies: "8,210",
        pendingVacancies: "4,240",
        stateAvg: "4.07%"
    };

    return (
        <div className="space-y-10 animate-in fade-in duration-1000 pb-20 font-sans selection:bg-blue-100">

            {/* APEX ADMINISTRATIVE HEADER */}
            <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-6 bg-white p-10 rounded-[48px] border border-slate-200 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 p-10 opacity-[0.03] pointer-events-none text-blue-600">
                    <Briefcase size={200} />
                </div>
                <div className="space-y-2 relative z-10">
                    <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border border-blue-100 shadow-sm">
                        <BadgeCheck size={14} /> National Reservation monitor
                    </div>
                    <h1 className="text-5xl font-black text-slate-900 tracking-tighter uppercase leading-none">Employment & Vacancy Ledger</h1>
                    <p className="text-slate-500 font-medium italic text-lg tracking-tight">Statewide monitoring of the 4% recruitment mandate and identified post fulfillment.</p>
                </div>
                <div className="flex gap-4 relative z-10">
                    <Button variant="outline" className="h-14 px-8 rounded-2xl border-slate-200 font-black uppercase tracking-widest text-[10px] bg-white gap-2 shadow-sm hover:bg-slate-50">
                        <FileSpreadsheet size={18} className="text-green-600" /> Export XLS
                    </Button>
                    <Button className="h-14 px-10 rounded-2xl bg-slate-950 text-white font-black uppercase tracking-widest text-[10px] shadow-2xl hover:bg-black transition-all gap-2 border-t border-white/20">
                        <Target size={18} /> Print Recruitment Drive
                    </Button>
                </div>
            </div>

            {/* RESERVATION KPI STRIP */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                <StatTile label="Total State Workforce" value={stateTotals.totalEmployees} icon={<Users />} color="from-slate-700 via-slate-800 to-slate-900" />
                <StatTile label="PwD Workforce" value={stateTotals.pwdEmployees} icon={<GraduationCap />} color="from-blue-600 via-blue-700 to-indigo-900" />
                <StatTile label="Identified Vacancies" value={stateTotals.identifiedVacancies} icon={<BarChart3 />} color="from-indigo-600 via-indigo-700 to-purple-800" />
                <StatTile label="Pending Fulfillment" value={stateTotals.pendingVacancies} icon={<Timer />} color="from-red-600 via-rose-700 to-red-800" alert />
                <div className="bg-white border-2 border-blue-100 rounded-[32px] p-6 shadow-sm flex flex-col justify-center relative overflow-hidden group">
                    <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/topography.png')]" />
                    <p className="text-[9px] font-black uppercase text-blue-400 tracking-widest mb-1 relative z-10">State Compliance Avg</p>
                    <p className="text-4xl font-black text-blue-700 tracking-tighter group-hover:scale-105 transition-transform">{stateTotals.stateAvg}</p>
                    <div className="w-full h-1.5 bg-slate-100 rounded-full mt-4 overflow-hidden">
                        <div className="h-full bg-blue-600" style={{ width: stateTotals.stateAvg }} />
                    </div>
                </div>
            </div>

            {/* MASTER DATA LEDGER */}
            <Card className="rounded-[48px] border-slate-200 shadow-sm overflow-hidden bg-white">
                <CardHeader className="p-0">
                    <div className="p-8 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 text-white relative overflow-hidden">
                        {/* CARBON FIBER TEXTURE OVERLAY */}
                        <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
                        <div className="flex flex-col md:flex-row justify-between items-center gap-6 relative z-10">
                            <div className="flex items-center gap-4">
                                <div className="h-12 w-12 rounded-2xl bg-white/20 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-xl">
                                    <TrendingUp size={24} />
                                </div>
                                <CardTitle className="text-sm font-black uppercase tracking-[0.3em]">Statewide Reservation Registry</CardTitle>
                            </div>
                            <div className="flex gap-4 w-full md:w-auto">
                                <div className="relative flex-1 md:w-80">
                                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-white/50" />
                                    <input className="w-full pl-11 pr-4 py-3 bg-white/10 border border-white/20 rounded-2xl text-[10px] font-black uppercase outline-none text-white placeholder:text-white/40 focus:bg-white/20 transition-all shadow-inner" placeholder="Search District, Dept or Est..." />
                                </div>
                            </div>
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="p-0">
                    <Table>
                        <TableHeader className="bg-slate-50/80 font-sans">
                            <TableRow className="border-slate-100">
                                <TableHead className="px-8 py-6 text-[9px] font-black uppercase tracking-widest text-slate-400">District Hub</TableHead>
                                <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400">Department / Sector</TableHead>
                                <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400">Establishment Name</TableHead>
                                <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400 text-center">Workforce (Total / PwD)</TableHead>
                                <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400 text-center">Compliance %</TableHead>
                                <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400 text-center">Vacancies (I/F/P)</TableHead>
                                <TableHead className="text-right px-8 text-[9px] font-black uppercase tracking-widest text-slate-400 w-[240px]">Reason for Pending</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody className="divide-y divide-slate-50">
                            <EmploymentRow
                                district="Lucknow"
                                dept="Medical Health"
                                est="Civil Hospital HQ"
                                total="1,450"
                                pwd="62"
                                perc="4.27%"
                                ident="05"
                                filled="02"
                                pending="03"
                                reason="Recruitment Process in Progress"
                                success
                            />
                            <EmploymentRow
                                district="Meerut"
                                dept="Secondary Education"
                                est="School Block-A"
                                total="840"
                                pwd="12"
                                perc="1.42%"
                                ident="34"
                                filled="12"
                                pending="22"
                                reason="Lack of Specialized Candidates"
                                alert
                            />
                            <EmploymentRow
                                district="Varanasi"
                                dept="Transport"
                                est="Regional RTO Hub"
                                total="610"
                                pwd="24"
                                perc="3.93%"
                                ident="04"
                                filled="04"
                                pending="00"
                                reason="--"
                                warning
                            />
                            <EmploymentRow
                                district="G.B. Nagar"
                                dept="IT & Electronics"
                                est="Pvt Tech Corp Node"
                                total="12,000"
                                pwd="485"
                                perc="4.04%"
                                ident="120"
                                filled="118"
                                pending="02"
                                reason="On-boarding Phase"
                                success
                            />
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>

            {/* FOOTER SYNC STATUS */}
            <footer className="flex justify-between items-center pt-8 border-t border-slate-200">
                <div className="flex items-center gap-3 text-slate-400">
                    <Activity size={18} className="text-blue-600 animate-pulse" />
                    <span className="text-[10px] font-black uppercase tracking-widest leading-none text-nowrap">State Reservation Sync: 8.4M Employee Records Aggregated via District Hubs</span>
                </div>
                <div className="flex gap-6">
                    <button className="text-[10px] font-black uppercase text-blue-600 hover:underline">Download Return Logs</button>
                    <button className="text-[10px] font-black uppercase text-slate-400 hover:text-slate-900">Mandate History</button>
                </div>
            </footer>
        </div>
    );
}

/* UI SUB-COMPONENTS */

function StatTile({ label, value, icon, color, alert }: any) {
    return (
        <Card className="rounded-[32px] border-slate-100 bg-white p-7 shadow-sm group hover:shadow-xl transition-all duration-500 overflow-hidden relative h-44 flex flex-col justify-between">
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/topography.png')]" />
            <div className={`h-10 w-10 rounded-xl bg-slate-50 flex items-center justify-center transition-all group-hover:scale-110 group-hover:bg-slate-900 group-hover:text-white shadow-inner`}>
                {icon}
            </div>
            <div>
                <p className="text-[9px] font-black uppercase text-slate-400 tracking-widest mb-1">{label}</p>
                <p className={`text-3xl font-black tracking-tighter ${alert ? 'text-red-600' : 'text-slate-900'}`}>{value}</p>
            </div>
            {alert && <div className="absolute top-6 right-6 h-1.5 w-1.5 rounded-full bg-red-500 animate-ping" />}
        </Card>
    )
}

function EmploymentRow({ district, dept, est, total, pwd, perc, ident, filled, pending, reason, alert, success, warning }: any) {
    const statusColor = alert ? 'bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.3)]' : warning ? 'bg-orange-500' : 'bg-green-500';

    return (
        <TableRow className="border-none hover:bg-slate-50 transition-all group cursor-pointer font-sans">
            <TableCell className="px-8 py-6">
                <div className="flex items-center gap-3">
                    <div className={`h-1.5 w-1.5 rounded-full shrink-0 ${statusColor}`} />
                    <span className="text-xs font-black text-slate-800 uppercase tracking-tight leading-none">{district}</span>
                </div>
            </TableCell>
            <TableCell>
                <Badge className="bg-slate-100 text-slate-500 border-none font-black text-[8px] uppercase tracking-widest px-2.5 py-0.5">
                    {dept}
                </Badge>
            </TableCell>
            <TableCell>
                <p className="text-sm font-black text-slate-800 uppercase tracking-tight leading-none">{est}</p>
                <p className="text-[8px] font-black text-slate-400 uppercase mt-1.5 tracking-widest">Verified Node</p>
            </TableCell>
            <TableCell className="text-center">
                <span className="text-xs font-black text-slate-400">{total}</span>
                <span className="mx-2 text-slate-200">/</span>
                <span className="text-xs font-black text-slate-900">{pwd}</span>
            </TableCell>
            <TableCell className="text-center">
                <div className="flex flex-col items-center">
                    <span className={`text-[11px] font-mono font-black ${alert ? 'text-red-600 underline' : 'text-blue-600'}`}>{perc}</span>
                    <div className="w-12 h-1 bg-slate-100 rounded-full mt-1.5 overflow-hidden">
                        <div className={`h-full ${alert ? 'bg-red-500' : 'bg-blue-600'}`} style={{ width: perc }} />
                    </div>
                </div>
            </TableCell>
            <TableCell className="text-center">
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-tighter">
                    <span className="text-blue-600 font-black">{ident}</span> • <span className="text-green-600 font-black">{filled}</span> • <span className={alert ? 'text-red-600 font-black' : 'text-slate-300 font-black'}>{pending}</span>
                </p>
                <p className="text-[7px] font-black text-slate-300 mt-1 uppercase">IDEN / FILL / PEND</p>
            </TableCell>
            <TableCell className="text-right px-8">
                <div className="bg-slate-50 rounded-xl p-3 border border-slate-100 flex items-center justify-between group-hover:bg-white transition-all">
                    <span className={`text-[9px] font-medium italic ${alert ? 'text-red-600' : 'text-slate-500'}`}>{reason}</span>
                    <ChevronDown size={12} className="text-slate-300" />
                </div>
            </TableCell>
        </TableRow>
    )
}