// app/dashboard/ddma/reports/page.tsx
"use client";
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
    Table, TableBody, TableCell, TableHead, TableHeader, TableRow
} from "@/components/ui/table";
import {
    FileBarChart, Printer, FileSpreadsheet, ChevronRight,
    Search, Users, Map, Siren, Home, Truck, Filter,
    ShieldAlert, Activity, ArrowUpRight, Download,
    Navigation, AlertTriangle, Timer
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

type DDMAReportType = 'COVERAGE' | 'PREPAREDNESS' | 'SHELTERS' | 'RESPONSE' | 'RESOURCES';

export default function DDMAReportsPage() {
    const [activeReport, setActiveReport] = useState<DDMAReportType>('COVERAGE');

    return (
        <div className="space-y-8 animate-in fade-in duration-700 pb-20">

            {/* 1. REPORT HUB HEADER */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 bg-white p-8 rounded-[40px] border border-slate-200 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-[0.03] pointer-events-none">
                    <FileBarChart size={160} className="text-orange-600" />
                </div>
                <div className="flex items-center gap-6 relative z-10">
                    <div className="h-16 w-16 bg-slate-900 rounded-2xl flex items-center justify-center text-white shadow-xl">
                        <FileBarChart size={32} className="text-orange-400" />
                    </div>
                    <div>
                        <h1 className="text-3xl font-black text-slate-900 tracking-tight uppercase leading-none">Statutory Disaster Reports</h1>
                        <p className="text-slate-500 font-medium italic text-sm mt-1 uppercase tracking-widest">Emergency Oversight • West Bengal Hub • Oct 2024</p>
                    </div>
                </div>
                <div className="flex gap-3 relative z-10">
                    <Button variant="outline" className="h-12 px-6 rounded-2xl border-slate-200 font-bold gap-2 hover:bg-slate-50">
                        <FileSpreadsheet size={18} className="text-green-600" /> Export XLS
                    </Button>
                    <Button className="h-12 px-8 rounded-2xl bg-slate-900 text-white font-black uppercase tracking-widest text-[10px] gap-2 shadow-xl hover:bg-black transition-all">
                        <Printer size={18} /> Print Statutory Copy
                    </Button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

                {/* 2. REPORT SELECTOR SIDEBAR (Items  - ) */}
                <div className="lg:col-span-1 space-y-2 sticky top-8 h-fit">
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-4 mb-4">Statutory Menu</p>
                    <ReportLink active={activeReport === 'COVERAGE'} onClick={() => setActiveReport('COVERAGE')} label=" Disaster Coverage" icon={<Map size={16} />} />
                    <ReportLink active={activeReport === 'PREPAREDNESS'} onClick={() => setActiveReport('PREPAREDNESS')} label=" Prep. Coverage" icon={<Navigation size={16} />} />
                    <ReportLink active={activeReport === 'SHELTERS'} onClick={() => setActiveReport('SHELTERS')} label=" Shelter Access" icon={<Home size={16} />} />
                    <ReportLink active={activeReport === 'RESPONSE'} onClick={() => setActiveReport('RESPONSE')} label=" Response Performance" icon={<Timer size={16} />} />
                    <ReportLink active={activeReport === 'RESOURCES'} onClick={() => setActiveReport('RESOURCES')} label=" Resource Gaps" icon={<Truck size={16} />} />

                    <div className="mt-8 p-6 bg-orange-50 rounded-3xl border border-orange-100">
                        <div className="flex items-center gap-2 text-orange-700 mb-2">
                            <ShieldAlert size={14} />
                            <span className="text-[10px] font-black uppercase tracking-widest">Audit Notice</span>
                        </div>
                        <p className="text-[10px] text-orange-600 font-medium leading-relaxed uppercase">
                            All disaster reports are synchronized with the <b>State Disaster Authority (SDMA)</b> every 6 hours.
                        </p>
                    </div>
                </div>

                {/* 3. DYNAMIC REPORT VIEWPORT */}
                <div className="lg:col-span-3 space-y-6">
                    <Card className="rounded-[40px] border-slate-200 shadow-sm overflow-hidden bg-white min-h-[700px]">
                        <CardHeader className="p-8 border-b border-slate-50 bg-slate-50/30 flex flex-row justify-between items-center">
                            <div>
                                <CardTitle className="text-xl font-black text-slate-900 tracking-tight uppercase">
                                    {activeReport.replace('_', ' ')} Registry
                                </CardTitle>
                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1 italic">District Disaster Management Authority Jurisdiction</p>
                            </div>
                            <div className="flex gap-3">
                                <div className="relative">
                                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-300" />
                                    <input className="pl-9 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-[10px] font-bold outline-none w-48 focus:ring-1 focus:ring-orange-500" placeholder="Search Data..." />
                                </div>
                                <Button variant="ghost" size="icon" className="h-9 w-9 rounded-xl border border-slate-200"><Filter size={16} /></Button>
                            </div>
                        </CardHeader>
                        <CardContent className="p-0">
                            {activeReport === 'COVERAGE' && <Table61 />}
                            {activeReport === 'PREPAREDNESS' && <Table62 />}
                            {activeReport === 'SHELTERS' && <Table63 />}
                            {activeReport === 'RESPONSE' && <Table64 />}
                            {activeReport === 'RESOURCES' && <Table65 />}
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}

/* 4. SPECIFIC REPORT TABLES (Section  -  Format) */

function Table61() {
    return (
        <StatTable headers={['Block / ULB', 'Total PwDs', 'High-Risk PwDs', 'Shelter Mapped', 'Sync Status']}>
            <Row data={['Salt Lake Sector V', '1,240', '112', '1,190', 'Synced']} status="success" />
            <Row data={['Howrah Urban', '3,450', '420', '3,100', 'Synced']} status="success" />
            <Row data={['Sunderbans Rural', '840', '184', '512', 'Attention']} status="danger" />
        </StatTable>
    )
}

function Table62() {
    return (
        <StatTable headers={['Block / ULB', 'PwDs Identified', 'PwDs Covered', 'Coverage %', 'Status']}>
            <Row data={['Kolkata North', '4,200', '4,150', '98.8%', 'Adequate']} status="success" />
            <Row data={['Kolkata South', '5,100', '4,800', '94.1%', 'Adequate']} />
            <Row data={['Outer Hub-B', '1,200', '450', '37.5%', 'Critical']} status="danger" />
        </StatTable>
    )
}

function Table63() {
    return (
        <StatTable headers={['Shelter Name', 'Block / ULB', 'Access Status', 'Capacity (PwD)', 'Compliance Status']}>
            <Row data={['Community Hub 01', 'Sector V', 'Full Access', '45 Persons', 'Verified']} status="success" />
            <Row data={['GIC School Annex', 'Howrah', 'Partial Access', '20 Persons', 'Pending Audit']} status="warning" />
            <Row data={['Town Hall B', 'Urban Central', 'Inaccessible', '00 Persons', 'Default']} status="danger" />
        </StatTable>
    )
}

function Table64() {
    return (
        <StatTable headers={['Request ID', 'Nature of SOS', 'Response Time', 'Final Status']}>
            <Row data={['SOS/2024/912', 'Flood Evacuation', '42 Minutes', 'Responded']} status="success" />
            <Row data={['SOS/2024/988', 'Medical Support', '18 Minutes', 'Responded']} status="success" />
            <Row data={['SOS/2024/104', 'Transport Assist', 'Running...', 'Pending']} status="danger" />
        </StatTable>
    )
}

function Table65() {
    return (
        <StatTable headers={['Resource Type', 'Required Qty', 'Available Qty', 'Shortfall', 'Urgency']}>
            <Row data={['Wheelchairs', '600', '450', '-150', 'High Priority']} status="danger" />
            <Row data={['Medical Kits', '800', '780', '-20', 'Low Priority']} status="warning" />
            <Row data={['Evac Vans', '20', '12', '-8', 'Critical']} status="danger" />
        </StatTable>
    )
}

/* UI UTILITIES */

function ReportLink({ active, onClick, label, icon }: any) {
    return (
        <button
            onClick={onClick}
            className={`w-full flex items-center justify-between p-4 rounded-2xl transition-all group ${active
                    ? 'bg-slate-900 text-white shadow-xl'
                    : 'bg-white text-slate-500 hover:bg-slate-50 hover:text-orange-600'
                }`}
        >
            <div className="flex items-center gap-3">
                <div className={`${active ? 'text-orange-400' : 'text-slate-300 group-hover:text-orange-500'} transition-colors`}>{icon}</div>
                <span className="text-[10px] font-black uppercase tracking-widest">{label}</span>
            </div>
            {active && <ChevronRight size={14} className="opacity-30" />}
        </button>
    )
}

function StatTable({ headers, children }: any) {
    return (
        <Table>
            <TableHeader className="bg-slate-50/50">
                <TableRow className="border-slate-100">
                    {headers.map((h: string) => (
                        <TableHead key={h} className="px-8 py-5 text-[9px] font-black uppercase tracking-[0.2em] text-slate-400">{h}</TableHead>
                    ))}
                    <TableHead className="text-right px-8"></TableHead>
                </TableRow>
            </TableHeader>
            <TableBody className="divide-y divide-slate-50">{children}</TableBody>
        </Table>
    )
}

function Row({ data, status }: any) {
    const dotColor = status === 'success' ? 'bg-green-500' : status === 'warning' ? 'bg-orange-500' : status === 'danger' ? 'bg-red-500' : 'bg-blue-400';
    return (
        <TableRow className="border-2 hover:bg-slate-50/80 group transition-all">
            {data.map((d: string, i: number) => {
                const isShortfall = d.startsWith('-');
                const isCritical = d === 'Critical' || d === 'Inaccessible' || d === 'Default';
                return (
                    <TableCell key={i} className="px-8 py-6">
                        <div className="flex items-center gap-3">
                            {i === 0 && <div className={`h-1.5 w-1.5 rounded-full shrink-0 ${dotColor}`} />}
                            <span className={`text-[11px] font-bold tracking-tight leading-snug ${isShortfall || isCritical ? 'text-red-600' : i === 0 ? 'text-slate-900' : 'text-slate-600'
                                }`}>
                                {d}
                            </span>
                        </div>
                    </TableCell>
                );
            })}
            <TableCell className="text-right px-8 opacity-0 group-hover:opacity-100 transition-all">
                <button className="text-orange-600 font-black uppercase text-[10px] tracking-widest hover:underline">View Mapping</button>
            </TableCell>
        </TableRow>
    )
}