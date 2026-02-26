// app/dashboard/scpd/reports/annual-compiled/page.tsx
"use client";
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
    Table, TableBody, TableCell, TableHead, TableHeader, TableRow
} from "@/components/ui/table";
import {
    BookOpen, Printer, Download, Share2, Globe, ShieldCheck,
    BadgeCheck, Users, Landmark, MapPin, CheckCircle2,
    AlertTriangle, History, Gavel, Scale, TrendingUp,
    Activity, GraduationCap, Briefcase, Sparkles,
    FileText, Layers, FileBadge, Calendar,
    ArrowUpRight,
    MessageSquare,
    Map
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function CompiledAnnualReport() {
    return (
        <div className="max-w-[1200px] mx-auto pb-20 animate-in fade-in duration-1000 font-sans selection:bg-indigo-100">

            {/* APEX DOCUMENT HEADER */}
            <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-8 bg-white p-12 rounded-[48px] border border-slate-200 shadow-[0_32px_64px_-20px_rgba(0,0,0,0.1)] relative overflow-hidden mb-12">
                <div className="absolute top-0 right-0 p-10 opacity-[0.03] pointer-events-none text-indigo-600">
                    <BookOpen size={240} />
                </div>
                <div className="space-y-4 relative z-10">
                    <div className="inline-flex items-center gap-2 bg-indigo-600 text-white px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.2em] shadow-xl shadow-indigo-200">
                        <BadgeCheck size={14} /> Official Statutory Release
                    </div>
                    <h1 className="text-6xl font-black text-slate-900 tracking-tighter uppercase leading-[0.9]">Annual Report <br /> <span className="text-indigo-600">FY 2024-25</span></h1>
                    <p className="text-slate-500 font-medium italic text-xl max-w-2xl">A comprehensive audit of the enforcement of the Rights of Persons with Disabilities Act, 2016 within the State.</p>
                </div>
                <div className="flex flex-col gap-4 relative z-10 min-w-[240px]">
                    <Button className="h-16 px-10 rounded-[24px] bg-slate-950 text-white font-black uppercase tracking-widest text-[11px] shadow-2xl hover:bg-black transition-all gap-3 group">
                        <Printer size={20} /> Generate Print Copy <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </Button>
                    <div className="flex gap-3">
                        <Button variant="outline" className="flex-1 h-12 rounded-xl border-slate-200 font-black text-[9px] uppercase tracking-widest bg-white hover:bg-slate-50 shadow-sm"><Download size={16} className="mr-2 text-green-600" /> XLS Data</Button>
                        <Button variant="outline" className="flex-1 h-12 rounded-xl border-slate-200 font-black text-[9px] uppercase tracking-widest bg-white hover:bg-slate-50 shadow-sm"><Share2 size={16} className="mr-2 text-blue-600" /> Share Hub</Button>
                    </div>
                </div>
            </div>

            <div className="space-y-16">

                {/* EXECUTIVE NARRATIVE */}
                <ReportChapter title="The Executive Narrative" gradient="from-amber-800 via-amber-400 to-amber-900" icon={<Landmark />}>
                    <div className="p-10 bg-slate-50 rounded-[40px] border border-slate-100 relative overflow-hidden group hover:bg-white transition-all shadow-inner">
                        <div className="absolute top-0 right-0 p-8 opacity-[0.02] group-hover:scale-110 transition-transform duration-1000"><Sparkles size={120} /></div>
                        <p className="text-lg font-medium text-slate-700 leading-[1.8] italic first-letter:text-5xl first-letter:font-black first-letter:text-indigo-600 first-letter:mr-3 first-letter:float-left uppercase tracking-tighter">
                            This reporting period signifies a pivotal shift in the digital enforcement of disability rights. Through the DAEGS architecture, we have synchronized over 1.2 million beneficiary records with district-level administrative actions. The state has achieved a baseline compliance rate of 82.4% across government establishments, with critical focuses on digital accessibility and time-bound grievance redressal.
                        </p>
                        <div className="mt-8 pt-8 border-t border-slate-200 flex justify-between items-center">
                            <div className="flex items-center gap-4">
                                <div className="h-12 w-12 rounded-full bg-indigo-900 border-4 border-indigo-50" />
                                <div>
                                    <p className="text-sm font-black text-slate-900 uppercase">State Commissioner</p>
                                    <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest leading-none">Apex Regulatory Authority</p>
                                </div>
                            </div>
                            <CheckCircle2 className="text-green-500" size={32} />
                        </div>
                    </div>
                </ReportChapter>

                {/* COMMISSION COMPOSITION & STAFFING */}
                <ReportChapter title="Commission Infrastructure" gradient="from-indigo-600 to-blue-700" icon={<Users />}>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                        <StatMetric label="Sanctioned Strength" val="12" />
                        <StatMetric label="Active Incumbents" val="10" success />
                        <StatMetric label="Current Vacancies" val="02" alert />
                        <StatMetric label="Staffing Efficiency" val="83%" />
                    </div>
                    <TableWrapper>
                        <StatTableHeader headers={['Post Hub', 'Designation', 'Status', 'Term Completion']} />
                        <TableBody className="divide-y divide-slate-50">
                            <PlainRow data={['Apex Node', 'State Commissioner', 'FILLED', '14 Jan 2025']} success />
                            <PlainRow data={['Admin Hub', 'Secretary', 'FILLED', '12 Oct 2026']} success />
                            <PlainRow data={['Expert Panel', 'Member (Expert)', 'VACANT', '--']} alert />
                        </TableBody>
                    </TableWrapper>
                </ReportChapter>

                {/* DISTRICT-WISE STATISTICAL SNAPSHOT */}
                <ReportChapter title="Statewide District Performance" gradient="from-purple-600 to-indigo-700" icon={<Map />}>
                    <TableWrapper>
                        <StatTableHeader headers={['District Hub', 'Coverage Count', 'Grievance SLA', 'Inclusion Index', 'Rank']} />
                        <TableBody className="divide-y divide-slate-50">
                            <PlainRow data={['Lucknow', '14,502 PwDs', '98% Success', '94% Compliant', '#01']} success />
                            <PlainRow data={['Varanasi', '8,210 PwDs', '82% Success', '88% Compliant', '#04']} />
                            <PlainRow data={['Agra', '5,210 PwDs', '64% Success', '42% Compliant', '#72']} alert />
                        </TableBody>
                    </TableWrapper>
                </ReportChapter>

                {/* GRIEVANCES & DIRECTIONS ANALYSIS */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <ReportChapter title="Redressal Efficiency" gradient="from-rose-600 to-red-800" icon={<MessageSquare />}>
                        <div className="space-y-6">
                            <BarProgress label="Average Resolution Days" val={14} max={30} color="bg-indigo-500" />
                            <BarProgress label="Escalation Rate" val={5} max={100} color="bg-orange-500" />
                            <div className="pt-6 border-t border-slate-50 flex justify-between">
                                <MetricBlock label="Total Registry" val="124K" />
                                <MetricBlock label="SLA Breaches" val="840" alert />
                            </div>
                        </div>
                    </ReportChapter>

                    <ReportChapter title="Directive Monitoring" gradient="from-blue-600 to-indigo-900" icon={<Gavel />}>
                        <div className="space-y-6">
                            <BarProgress label="Order Compliance Rate" val={82} max={100} color="bg-emerald-500" />
                            <BarProgress label="District Response Speed" val={91} max={100} color="bg-blue-500" />
                            <div className="pt-6 border-t border-slate-50 flex justify-between">
                                <MetricBlock label="Orders Issued" val="142" />
                                <MetricBlock label="Overdue Orders" val="09" alert />
                            </div>
                        </div>
                    </ReportChapter>
                </div>

                {/* KEY FINDINGS & RECOMMENDATIONS */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 pt-8">
                    <div className="space-y-8">
                        <CardHeaderItem label="Key Statutory Findings" icon={<Activity size={20} />} color="text-red-600" />
                        <div className="space-y-6">
                            <FindingItem text="Digital accessibility remains the primary barrier in the banking and finance sectors." />
                            <FindingItem text="Admission denial complaints have surged by 15% in district-level clusters." />
                            <FindingItem text="Disaster mapping data sync is inconsistent in 04 coastal districts." />
                        </div>
                    </div>
                    <div className="space-y-8">
                        <CardHeaderItem label="Executive Recommendations" icon={<CheckCircle2 size={20} />} color="text-green-600" />
                        <div className="space-y-6">
                            <FindingItem text="Mandatory digital accessibility audit for all government portals by Q2." />
                            <FindingItem text="Establishment of District PwD Courts for specialized case disposal." />
                            <FindingItem text="Direct inter-departmental budget mapping for structural remediation." />
                        </div>
                    </div>
                </div>

            </div>

            {/* ANNEXURES VAULT */}
            <div className="mt-20 pt-12 border-t border-slate-200">
                <div className="flex items-center gap-3 mb-10">
                    <Layers className="text-slate-400" />
                    <h2 className="text-[11px] font-black uppercase tracking-[0.3em] text-slate-400">Statutory Annexures Hub</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <AnnexureTile name="Master_Node_Aggregation.xls" sub="District Data Sheet" />
                    <AnnexureTile name="Statutory_Directives_Archive.pdf" sub="Orders Registry" />
                    <AnnexureTile name="Judicial_Outcome_Matrix.xls" sub="Court Summary" />
                </div>
            </div>

        </div>
    );
}

/* UI SUB-COMPONENTS */

function ReportChapter({ title, gradient, icon, children }: any) {
    return (
        <Card className="rounded-[44px] border-slate-200 bg-white shadow-sm overflow-hidden group">
            <CardHeader className={`p-8 bg-gradient-to-r ${gradient} text-white relative overflow-hidden`}>
                {/* CARBON FIBRE TEXTURE */}
                <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
                <div className="flex items-center gap-4 relative z-10">
                    <div className="h-10 w-10 rounded-2xl bg-white/20 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        {icon}
                    </div>
                    <CardTitle className="text-[11px] font-black uppercase tracking-[0.3em] leading-none">{title}</CardTitle>
                </div>
            </CardHeader>
            <CardContent className="p-10 relative overflow-hidden">
                <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/topography.png')]" />
                <div className="relative z-10">
                    {children}
                </div>
            </CardContent>
        </Card>
    )
}

function StatMetric({ label, val, alert, success }: any) {
    return (
        <div className="p-6 bg-slate-50 rounded-[32px] border border-slate-100 text-center space-y-1">
            <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">{label}</p>
            <p className={`text-3xl font-black ${alert ? 'text-red-600' : success ? 'text-green-600' : 'text-slate-900'} tracking-tighter`}>{val}</p>
        </div>
    )
}

function TableWrapper({ children }: any) {
    return (
        <div className="border border-slate-100 rounded-[32px] overflow-hidden bg-white shadow-inner">
            <Table>{children}</Table>
        </div>
    )
}

function StatTableHeader({ headers }: { headers: string[] }) {
    return (
        <TableHeader className="bg-slate-50/80">
            <TableRow className="border-none">
                {headers.map((h) => (
                    <TableHead key={h} className="px-8 py-5 text-[9px] font-black uppercase tracking-widest text-slate-400">{h}</TableHead>
                ))}
            </TableRow>
        </TableHeader>
    )
}

function PlainRow({ data, alert, success }: any) {
    const statusColor = alert ? 'bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.3)]' : success ? 'bg-green-500' : 'bg-slate-300';
    return (
        <TableRow className="border-none hover:bg-slate-50 transition-all cursor-default">
            {data.map((d: string, i: number) => (
                <TableCell key={i} className="px-8 py-6">
                    <div className="flex items-center gap-3">
                        {i === 0 && <div className={`h-1.5 w-1.5 rounded-full shrink-0 ${statusColor}`} />}
                        <span className={`text-[11px] font-bold ${i === 0 ? 'text-slate-900' : 'text-slate-600'} ${alert && i === data.length - 1 ? 'text-red-600' : ''} tracking-tight uppercase`}>{d}</span>
                    </div>
                </TableCell>
            ))}
        </TableRow>
    )
}

function BarProgress({ label, val, max, color }: any) {
    const perc = (val / max) * 100;
    return (
        <div className="space-y-2">
            <div className="flex justify-between font-black text-[9px] uppercase tracking-widest text-slate-400">
                <span>{label}</span>
                <span className="text-slate-900">{val} / {max}</span>
            </div>
            <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                <div className={`h-full ${color} transition-all duration-1000 shadow-sm`} style={{ width: `${perc}%` }} />
            </div>
        </div>
    )
}

function MetricBlock({ label, val, alert }: any) {
    return (
        <div className="space-y-1">
            <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">{label}</p>
            <p className={`text-2xl font-black ${alert ? 'text-red-600' : 'text-slate-900'} tracking-tighter`}>{val}</p>
        </div>
    )
}

function CardHeaderItem({ label, icon, color }: any) {
    return (
        <div className="flex items-center gap-3 border-b border-slate-50 pb-4">
            <div className={`${color}`}>{icon}</div>
            <h3 className={`text-[11px] font-black uppercase tracking-[0.3em] ${color}`}>{label}</h3>
        </div>
    )
}

function FindingItem({ text }: { text: string }) {
    return (
        <div className="flex items-start gap-4 group">
            <div className="h-6 w-6 rounded-lg bg-slate-50 flex items-center justify-center shrink-0 mt-0.5 border border-slate-100 group-hover:bg-indigo-600 transition-all">
                <div className="h-1 w-1 rounded-full bg-slate-300 group-hover:bg-white" />
            </div>
            <p className="text-sm font-black text-slate-800 uppercase tracking-tight leading-relaxed group-hover:text-indigo-600 transition-colors">
                {text}
            </p>
        </div>
    )
}

function AnnexureTile({ name, sub }: any) {
    return (
        <div className="p-6 bg-slate-50 rounded-[32px] border border-slate-100 hover:shadow-xl hover:bg-white transition-all cursor-pointer group">
            <div className="flex items-center gap-4 mb-4">
                <div className="h-10 w-10 rounded-xl bg-white flex items-center justify-center text-slate-400 group-hover:text-indigo-600 shadow-sm transition-colors border border-slate-50">
                    <FileBadge size={20} />
                </div>
                <div>
                    <p className="text-[10px] font-black text-slate-900 uppercase tracking-tighter truncate max-w-[150px]">{name}</p>
                    <p className="text-[8px] font-bold text-slate-400 uppercase tracking-widest">{sub}</p>
                </div>
            </div>
            <Button variant="ghost" className="w-full text-indigo-600 font-black uppercase text-[8px] tracking-widest">Download Data Hub</Button>
        </div>
    )
}