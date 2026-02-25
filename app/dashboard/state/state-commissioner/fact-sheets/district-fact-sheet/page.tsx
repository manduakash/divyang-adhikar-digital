// app/dashboard/scpd/fact-sheets/district/page.tsx
"use client";
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
    Map, Globe, Download, FileText,
    Printer, ShieldCheck, Search, Filter,
    Users, Building2, Gavel, Briefcase,
    GraduationCap, Accessibility, Scale,
    History, Clock, AlertTriangle, TrendingUp,
    MapPin, CheckCircle2, Siren, LayoutGrid,
    ChevronDown, Activity, BadgeCheck, Zap,
    CalendarDays, Landmark, FileSpreadsheet,
    ArrowUpRight,
    MessageSquare
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function DistrictFactSheet() {
    return (
        <div className="space-y-10 animate-in fade-in duration-1000 pb-20 font-sans selection:bg-indigo-100">

            {/* PRIMARY FILTER HUB */}
            <Card className="rounded-[40px] border-none bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 p-1 relative overflow-hidden shadow-2xl shadow-blue-200">
                <div className="absolute inset-0 opacity-15 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
                <div className="bg-white rounded-[38px] p-8 relative z-10 flex flex-col xl:flex-row justify-between items-end gap-6">

                    <div className="flex flex-col md:flex-row gap-8 items-center w-full xl:w-auto">
                        <div className="h-20 w-20 bg-blue-50 rounded-3xl flex items-center justify-center text-blue-600 shadow-inner">
                            <Map size={32} />
                        </div>
                        <div className="space-y-4 w-full md:w-auto">
                            <div className="space-y-1">
                                <h1 className="text-3xl font-black text-slate-900 tracking-tighter uppercase leading-none">District Fact Sheet</h1>
                                <p className="text-[10px] font-black text-indigo-600 uppercase tracking-[0.3em]">State Statutory Aggregator</p>
                            </div>
                            <div className="flex flex-wrap gap-4">
                                <FilterSelect label="District" defaultValue="Please Select" options={['Please Select', 'All Districts', 'Lucknow', 'Varanasi', 'Agra']} />
                                <FilterSelect label="Division" defaultValue="Please Select" options={['Please Select', 'Central Zone', 'West Zone', 'East Zone']} />
                                <FilterSelect label="Period" defaultValue="Please Select" options={['Please Select', 'Last 30 Days', 'Last 90 Days', 'Last 180 Days']} />
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col items-end gap-4 min-w-[280px]">
                        <div className="flex items-center gap-2 bg-slate-900 text-white px-4 py-2 rounded-2xl shadow-xl border border-white/10">
                            <Clock size={14} className="text-blue-400" />
                            <span className="text-[9px] font-black uppercase tracking-widest leading-none">Last Data Sync: 14 Oct, 09:42 AM</span>
                        </div>
                        <div className="flex gap-3">
                            <Button variant="outline" className="h-12 px-6 rounded-xl border-slate-200 font-bold bg-white gap-2 shadow-sm text-[10px] uppercase tracking-widest hover:bg-slate-50"><FileSpreadsheet size={16} className="text-green-600" /> Excel</Button>
                            <Button className="h-12 px-8 rounded-xl bg-slate-950 text-white font-black uppercase tracking-widest text-[10px] shadow-lg hover:bg-black transition-all gap-2 border-t border-white/20"><Printer size={16} /> PDF Brief</Button>
                        </div>
                    </div>
                </div>
            </Card>

            {/* STATUTORY TABLE GRID (TABLES 1-8) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                {/* TABLE 1: COVERAGE */}
                <StatTableCard title="Inclusion Coverage" gradient="from-blue-600 to-indigo-700" icon={<Users />}>
                    <StatRow label="Total PwDs in District" val="14,502" mono />
                    <StatRow label="Establishments (Govt/Pvt)" val="482" />
                    <StatRow label="Educational Inst." val="842" />
                    <StatRow label="Registered Orgs" val="114" />
                </StatTableCard>

                {/* TABLE 2: GRIEVANCES */}
                <StatTableCard title="Grievance SLA" gradient="from-purple-600 to-indigo-800" icon={<MessageSquare />}>
                    <StatRow label="Total Received" val="1,240" />
                    <StatRow label="Resolved / Closed" val="1,156" success />
                    <StatRow label="Pending Within Timeline" val="72" />
                    <StatRow label="Pending Beyond Timeline" val="12" alert />
                </StatTableCard>

                {/* TABLE 3: DIRECTIONS */}
                <StatTableCard title="State Directions" gradient="from-indigo-600 to-blue-800" icon={<Gavel />}>
                    <StatRow label="Total Directions Issued" val="45" />
                    <StatRow label="Complied Orders" val="32" success />
                    <StatRow label="Pending Within Timeline" val="08" />
                    <StatRow label="Overdue Directions" val="05" alert />
                </StatTableCard>

                {/* TABLE 4: EMPLOYMENT & VACANCY */}
                <StatTableCard title="Workforce Audit" gradient="from-emerald-600 to-teal-800" icon={<Briefcase />}>
                    <StatRow label="Total Employees (Returns)" val="124K" />
                    <StatRow label="Total PwD Employees" val="5,210" />
                    <StatRow label="Employment Percentage" val="4.2%" success />
                    <StatRow label="Identified Vacancies" val="1,450" />
                    <StatRow label="Filled / Pending" val="820 / 630" alert />
                </StatTableCard>

                {/* TABLE 5: RETURNS COMPLIANCE */}
                <StatTableCard title="Exchange Returns" gradient="from-orange-500 to-amber-700" icon={<History />}>
                    <StatRow label="Units Required" val="482" />
                    <StatRow label="Returns Submitted" val="420" success />
                    <StatRow label="Returns Overdue" val="32" warning />
                    <StatRow label="Not Submitted" val="30" alert />
                </StatTableCard>

                {/* TABLE 6: ACCESSIBILITY COMPLIANCE */}
                <StatTableCard title="Barrier Management" gradient="from-cyan-600 to-blue-700" icon={<Accessibility />}>
                    <div className="space-y-4 pt-2">
                        <div className="flex justify-between items-center border-b border-slate-50 pb-2">
                            <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Type</span>
                            <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Compliant / Partial / Non</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-[10px] font-bold text-slate-700 uppercase">Physical</span>
                            <p className="text-xs font-black text-slate-900">340 / 110 / 32</p>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-[10px] font-bold text-slate-700 uppercase">Digital</span>
                            <p className="text-xs font-black text-slate-900">210 / 150 / 122</p>
                        </div>
                    </div>
                </StatTableCard>

                {/* TABLE 7: EDUCATION INCLUSION */}
                <StatTableCard title="Education Inclusion" gradient="from-blue-700 to-indigo-900" icon={<GraduationCap />}>
                    <StatRow label="PwD Students Enrolled" val="5,210" />
                    <StatRow label="Accommodation Requests" val="120" />
                    <StatRow label="Provided / Pending" val="115 / 05" warning />
                    <StatRow label="Institutions Non-Compliant" val="08" alert />
                </StatTableCard>

                {/* TABLE 8: JUDICIAL REGISTRY */}
                <StatTableCard title="Court / Case Monitoring" gradient="from-rose-600 to-red-800" icon={<Scale />}>
                    <StatRow label="Total District Cases" val="24" />
                    <StatRow label="Pending / Disposed" val="18 / 06" />
                    <StatRow label="Beyond Threshold" val="04" alert />
                    <StatRow label="7D Hearing Count" val="05" success />
                </StatTableCard>

            </div>

            {/* FOOTER ACTIONS */}
            <footer className="pt-12 border-t border-slate-200">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex items-center gap-8">
                        <BadgeLink label="Top 5 Performance" />
                        <BadgeLink label="Bottom 5 Laggards" alert />
                    </div>
                    <div className="flex items-center gap-3">
                        <BadgeCheck className="text-blue-600 shadow-lg" size={20} />
                        <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Authorized Fact Sheet Registry Node v4.2</span>
                    </div>
                </div>
            </footer>
        </div>
    );
}

/* UI SUB-COMPONENTS */

function StatTableCard({ title, icon, gradient, children }: any) {
    return (
        <Card className="rounded-[44px] border-slate-200 bg-white shadow-sm overflow-hidden group hover:shadow-2xl transition-all duration-500">
            <CardHeader className={`p-8 bg-gradient-to-r ${gradient} text-white relative overflow-hidden`}>
                {/* CARBON FIBRE TEXTURE OVERLAY */}
                <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] z-0" />

                <div className="flex items-center justify-between relative z-10">
                    <div className="flex items-center gap-4">
                        <div className="h-10 w-10 rounded-2xl bg-white/20 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                            {icon}
                        </div>
                        <CardTitle className="text-[11px] font-black uppercase tracking-[0.3em] text-white leading-none">{title}</CardTitle>
                    </div>
                    <ArrowUpRight className="text-white/40 group-hover:text-white transition-all" size={20} />
                </div>
            </CardHeader>
            <CardContent className="p-10 space-y-5 relative">
                {/* Subtle Content Pattern */}
                <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/topography.png')]" />
                <div className="relative z-10 space-y-5">
                    {children}
                </div>
            </CardContent>
        </Card>
    )
}

function StatRow({ label, val, sub, alert, success, warning, mono }: any) {
    const colorClass = alert ? 'text-red-600 underline decoration-red-200 decoration-2' : success ? 'text-green-600' : warning ? 'text-orange-500' : 'text-slate-900';
    return (
        <div className="flex justify-between items-end group/row cursor-default">
            <div className="space-y-1">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest group-hover/row:text-indigo-600 transition-colors">{label}</p>
                {sub && <p className="text-[8px] font-bold text-slate-300 uppercase leading-none">{sub}</p>}
            </div>
            <div className="text-right">
                <p className={`text-2xl font-black tracking-tighter leading-none ${colorClass} ${mono ? 'font-mono' : ''}`}>{val}</p>
            </div>
        </div>
    )
}

function FilterSelect({ label, options, defaultValue }: any) {
    return (
        <div className="flex flex-col gap-1.5 min-w-[150px]">
            <span className="text-[9px] font-black uppercase text-slate-400 ml-1 tracking-widest leading-none">{label}</span>
            <Select defaultValue="Please Select Option">
                <SelectTrigger className="h-11 rounded-2xl bg-slate-50 border-none font-bold text-slate-800 text-xs uppercase shadow-inner transition-all hover:bg-slate-100">
                    <SelectValue />
                </SelectTrigger>
                <SelectContent className="rounded-2xl border-slate-100 shadow-2xl">
                    {options.map((opt: string) => (
                        <SelectItem key={opt} value={opt.toLowerCase()} className="font-bold text-[10px] uppercase py-2.5">{opt}</SelectItem>
                    ))}
                </SelectContent>
            </Select>
        </div>
    )
}

function BadgeLink({ label, alert }: any) {
    return (
        <button className={`text-[10px] font-black uppercase tracking-widest flex items-center gap-2 transition-all hover:gap-3 ${alert ? 'text-red-600 animate-pulse' : 'text-slate-400 hover:text-indigo-600'}`}>
            {label} <ArrowUpRight size={14} />
        </button>
    )
}