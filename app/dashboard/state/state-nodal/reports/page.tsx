// app/dashboard/state/reports/consolidated/page.tsx
"use client";
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
    Table, TableBody, TableCell, TableHead, TableHeader, TableRow
} from "@/components/ui/table";
import {
    FileBarChart, Printer, FileSpreadsheet, ChevronRight,
    Search, Users, Building2, Gavel, Accessibility,
    MessageSquare, GraduationCap, Briefcase, Filter,
    ShieldAlert, Globe, Map, Sparkles, TrendingUp,
    Download, Landmark, ShieldCheck, History, Timer,
    Scale, Home, Navigation,
    ArrowUpRight
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

type StateReportType = 'PWD_TOTAL' | 'EMPLOYMENT' | 'RETURNS' | 'ACCESS' | 'EDUCATION' | 'DISASTER' | 'PROSECUTION';

export default function StateConsolidatedReports() {
    const [activeReport, setActiveReport] = useState<StateReportType>('PWD_TOTAL');

    return (
        <div className="space-y-10 animate-in fade-in duration-700 pb-20 font-sans">

            {/* 1. APEX HUB HEADER */}
            <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-6 bg-white p-10 rounded-[40px] border border-slate-200 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 p-10 opacity-[0.03] pointer-events-none">
                    <Landmark size={200} className="text-purple-600" />
                </div>
                <div className="space-y-2 relative z-10">
                    <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border border-purple-200">
                        <Globe size={14} className="animate-pulse" /> State Statutory Hub / Aggregation Node
                    </div>
                    <h1 className="text-5xl font-black text-slate-900 tracking-tighter uppercase leading-none">Consolidated Ledger</h1>
                    <p className="text-slate-500 font-medium italic">Apex Statewide Monitoring of PwD Act 2016 Enforcement (Rule 2017).</p>
                </div>
                <div className="flex gap-4 relative z-10">
                    <Button variant="outline" className="h-14 px-8 rounded-2xl border-slate-200 font-bold bg-white gap-2 shadow-sm">
                        <FileSpreadsheet size={20} className="text-green-600" /> Export State XLS
                    </Button>
                    <Button className="h-14 px-10 rounded-2xl bg-purple-700 text-white font-black uppercase tracking-widest text-[10px] shadow-2xl hover:bg-purple-900 transition-all gap-2">
                        <Printer size={20} /> Print Certified Copy
                    </Button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

                {/* 2. VERTICAL REPORT NAVIGATOR (The 7 Statutory Reports) */}
                <div className="lg:col-span-1 space-y-3 sticky top-8 h-fit">
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-4 mb-4 text-nowrap">Oversight Modules</p>
                    <ReportLink active={activeReport === 'PWD_TOTAL'} onClick={() => setActiveReport('PWD_TOTAL')} label="Total PwD Registry" icon={<Users size={18} />} />
                    <ReportLink active={activeReport === 'EMPLOYMENT'} onClick={() => setActiveReport('EMPLOYMENT')} label="Employment & Vacancy" icon={<Briefcase size={18} />} />
                    <ReportLink active={activeReport === 'RETURNS'} onClick={() => setActiveReport('RETURNS')} label="Return Compliance" icon={<History size={18} />} />
                    <ReportLink active={activeReport === 'ACCESS'} onClick={() => setActiveReport('ACCESS')} label="Access Compliance" icon={<Accessibility size={18} />} />
                    <ReportLink active={activeReport === 'EDUCATION'} onClick={() => setActiveReport('EDUCATION')} label="Education Inclusion" icon={<GraduationCap size={18} />} />
                    <ReportLink active={activeReport === 'DISASTER'} onClick={() => setActiveReport('DISASTER')} label="Disaster Preparedness" icon={<ShieldAlert size={18} />} />
                    <ReportLink active={activeReport === 'PROSECUTION'} onClick={() => setActiveReport('PROSECUTION')} label="Prosecution Status" icon={<Scale size={18} />} />

                    <Card className="mt-8 rounded-[40px] border-2 bg-slate-900 text-white p-8 shadow-2xl relative overflow-hidden group">
                        <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/circuit-board.png')]" />
                        <div className="relative z-10 space-y-6">
                            <div className="flex items-center gap-3">
                                <Sparkles size={20} className="text-purple-400" />
                                <h3 className="text-sm font-black uppercase tracking-widest text-purple-400">AI Apex Brief</h3>
                            </div>
                            <p className="text-xs font-medium text-slate-400 leading-relaxed uppercase tracking-tighter">
                                State compliance health is at <span className="text-green-400 font-black">84.2%</span>. Aggregated data suggests a correction directive for District <b>Howrah</b> in Section 6.5.
                            </p>
                            <Button className="w-full h-12 bg-white text-slate-900 hover:bg-purple-50 rounded-2xl font-black uppercase tracking-widest text-[9px]">Generate Report</Button>
                        </div>
                    </Card>
                </div>

                {/* 3. DYNAMIC REGISTRY VIEWPORT */}
                <div className="lg:col-span-3 space-y-6">

                    {/* DYNAMIC KPI SUMMARY TILES */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        {activeReport === 'PWD_TOTAL' && <KPISet data={[{ l: 'Total PwDs', v: '1.2M+' }, { l: 'Male', v: '640K' }, { l: 'Female', v: '560K' }, { l: 'Districts', v: '75' }]} />}
                        {activeReport === 'EMPLOYMENT' && <KPISet data={[{ l: 'Total Est.', v: '45K+' }, { l: 'PwD Emp', v: '342K' }, { l: 'Vacancies', v: '4.5K' }, { l: 'Mandate', v: '4.07%' }]} />}
                        {activeReport === 'RETURNS' && <KPISet data={[{ l: 'Required', v: '45K' }, { l: 'Submitted', v: '38K' }, { l: 'Overdue', v: '7K' }, { l: 'Rate', v: '84%' }]} />}
                        {activeReport === 'ACCESS' && <KPISet data={[{ l: 'Inspected', v: '18K' }, { l: 'Compliant', v: '14K' }, { l: 'Partial', v: '3K' }, { l: 'Non-Comp', v: '1.2K' }]} />}
                        {activeReport === 'EDUCATION' && <KPISet data={[{ l: 'Schools', v: '12K' }, { l: 'Students', v: '342K' }, { l: 'Non-Comp', v: '142' }, { l: 'Inclusion', v: '93%' }]} />}
                        {activeReport === 'DISASTER' && <KPISet data={[{ l: 'Mapped', v: '1.1M' }, { l: 'Shelters', v: '3.4K' }, { l: 'High-Risk', v: '124K' }, { l: 'Uncovered', v: '12K' }]} />}
                        {activeReport === 'PROSECUTION' && <KPISet data={[{ l: 'Total Cases', v: '2.8K' }, { l: 'Pending', v: '1.9K' }, { l: 'Disposed', v: '920' }, { l: 'Stagnant', v: '142' }]} />}
                    </div>

                    {/* TABULAR REGISTRY */}
                    <Card className="rounded-[40px] border-slate-200 shadow-sm overflow-hidden bg-white min-h-[700px]">
                        <CardHeader className="p-8 border-b border-slate-50 bg-slate-50/30 flex flex-row justify-between items-center">
                            <div>
                                <CardTitle className="text-xl font-black text-slate-900 uppercase tracking-tighter">
                                    {activeReport.replace('_', ' ')} STATUTORY LEDGER
                                </CardTitle>
                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mt-1">State Nodal Authority • October 2024 Audit</p>
                            </div>
                            <div className="flex gap-3">
                                <div className="relative">
                                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-300" />
                                    <input className="pl-10 pr-6 py-3 bg-white border border-slate-200 rounded-2xl text-[10px] font-bold outline-none w-64 focus:ring-2 focus:ring-purple-500 transition-all shadow-inner" placeholder="Registry Filter..." />
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent className="p-0">
                            {activeReport === 'PWD_TOTAL' && <TablePwDTotal />}
                            {activeReport === 'EMPLOYMENT' && <TableEmployment />}
                            {activeReport === 'RETURNS' && <TableReturns />}
                            {activeReport === 'ACCESS' && <TableAccessibility />}
                            {activeReport === 'EDUCATION' && <TableEducation />}
                            {activeReport === 'DISASTER' && <TableDisaster />}
                            {activeReport === 'PROSECUTION' && <TableProsecution />}
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}

/* -------------------------------------------------------------------------- */
/* DYNAMIC TABLES (Section-wise Mapping)                                      */
/* -------------------------------------------------------------------------- */

function TablePwDTotal() {
    return (
        <StatRegistry headers={['Disability Category', 'Total PwDs', 'Male', 'Female', 'District Distribution']}>
            <Row data={['Locomotor Disability', '424,000', '210,000', '214,000', 'Top: Lucknow, Agra']} />
            <Row data={['Visual Impairment', '182,500', '90,000', '92,500', 'Top: Varanasi, GBN']} />
            <Row data={['Hearing Impairment', '110,200', '55,000', '55,200', 'Top: Meerut, Kanpur']} />
        </StatRegistry>
    )
}

function TableEmployment() {
    return (
        <StatRegistry headers={['Establishments', 'Total Employees', 'PwD Employees', 'Employment %', 'Vacancies (I/F/P)']}>
            <Row data={['45,210', '8.4M', '342,850', '4.07%', '12,450 / 8,210 / 4,240']} />
        </StatRegistry>
    )
}

function TableReturns() {
    return (
        <StatRegistry headers={['District Name', 'Units Required', 'Returns Submitted', 'Overdue Units', 'Sub. Rate %']}>
            <Row data={['Lucknow', '482', '460', '22', '95.4%']} status="success" />
            <Row data={['Agra', '290', '122', '168', '42.0%']} status="danger" />
            <Row data={['Varanasi', '320', '164', '156', '51.2%']} status="danger" />
        </StatRegistry>
    )
}

function TableAccessibility() {
    return (
        <StatRegistry headers={['District', 'Est. Inspected', 'Compliant', 'Partially', 'Non-Compliant']}>
            <Row data={['Gautam Buddha Ngr', '3,200', '3,050', '120', '30']} status="success" />
            <Row data={['Kanpur Nagar', '4,100', '3,200', '750', '150']} status="warning" />
        </StatRegistry>
    )
}

function TableEducation() {
    return (
        <StatRegistry headers={['District', 'Total Institutions', 'PwD Students', 'Non-Compliant Units']}>
            <Row data={['Lucknow', '842', '5,210', '42']} />
            <Row data={['Meerut', '440', '2,800', '84']} status="danger" />
        </StatRegistry>
    )
}

function TableDisaster() {
    return (
        <StatRegistry headers={['District', 'PwDs Mapped', 'Acc. Shelters', 'High-Risk Uncovered']}>
            <Row data={['Howrah Hub', '32,100', '112', '450']} status="danger" />
            <Row data={['Kolkata Urban', '12,400', '48', '04']} status="success" />
        </StatRegistry>
    )
}

function TableProsecution() {
    return (
        <StatRegistry headers={['District', 'Total Cases', 'Pending', 'Disposed', 'Beyond Threshold']}>
            <Row data={['Ghaziabad', '210', '168', '42', '84']} status="danger" />
            <Row data={['Meerut', '98', '50', '48', '04']} />
        </StatRegistry>
    )
}

/* -------------------------------------------------------------------------- */
/* UI UTILITIES                                                               */
/* -------------------------------------------------------------------------- */

function ReportLink({ active, onClick, label, icon }: any) {
    return (
        <button onClick={onClick} className={`w-full flex items-center justify-between p-4 rounded-3xl transition-all group ${active ? 'bg-purple-700 text-white shadow-xl shadow-purple-200 border-t border-white/20' : 'bg-white text-slate-500 hover:bg-purple-50 hover:text-purple-700 border-t border-transparent'}`}>
            <div className="flex items-center gap-3">
                <div className={`${active ? 'text-purple-300' : 'text-slate-300 group-hover:text-purple-600'} transition-colors`}>{icon}</div>
                <span className="text-[10px] font-black uppercase tracking-widest">{label}</span>
            </div>
            {active && <ChevronRight size={14} className="opacity-30" />}
        </button>
    )
}

function KPISet({ data }: any) {
    return (
        <>
            {data.map((item: any, i: number) => (
                <div key={i} className={`group relative p-6 rounded-[32px] overflow-hidden transition-all duration-500 h-32 flex flex-col justify-between shadow-md border-t border-white/20 ${i % 2 === 0 ? 'bg-gradient-to-br from-slate-800 to-slate-950 text-white' : 'bg-gradient-to-br from-purple-600 to-indigo-900 text-white'}`}>
                    <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/topography.png')]" />
                    <p className="text-[8px] font-black uppercase tracking-[0.2em] opacity-60 relative z-10">{item.l}</p>
                    <p className="text-2xl font-black tracking-tighter relative z-10">{item.v}</p>
                </div>
            ))}
        </>
    )
}

function StatRegistry({ headers, children }: any) {
    return (
        <Table>
            <TableHeader className="bg-slate-50/50">
                <TableRow className="border-slate-100">
                    {headers.map((h: string) => (
                        <TableHead key={h} className="px-8 py-5 text-[9px] font-black uppercase tracking-widest text-slate-400">{h}</TableHead>
                    ))}
                    <TableHead className="text-right px-8"></TableHead>
                </TableRow>
            </TableHeader>
            <TableBody className="divide-y divide-slate-50">{children}</TableBody>
        </Table>
    )
}

function Row({ data, status }: any) {
    const dotColor = status === 'success' ? 'bg-green-500' : status === 'warning' ? 'bg-orange-500' : status === 'danger' ? 'bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.5)]' : 'bg-purple-400';
    return (
        <TableRow className="border-2 hover:bg-slate-50 group cursor-pointer transition-all">
            {data.map((d: string, i: number) => (
                <TableCell key={i} className="px-8 py-6">
                    <div className="flex items-center gap-3">
                        {i === 0 && <div className={`h-1.5 w-1.5 rounded-full shrink-0 ${dotColor}`} />}
                        <span className={`text-[11px] font-bold ${status === 'danger' && i === data.length - 1 ? 'text-red-600 underline' : i === 0 ? 'text-slate-900' : 'text-slate-600'} tracking-tight leading-snug uppercase`}>{d}</span>
                    </div>
                </TableCell>
            ))}
            <TableCell className="text-right px-8 opacity-0 group-hover:opacity-100 transition-all">
                <ArrowUpRight size={16} className="text-purple-600 ml-auto" />
            </TableCell>
        </TableRow>
    )
}