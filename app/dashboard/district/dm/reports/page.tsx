// app/dashboard/district/reports/page.tsx
"use client";
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
    Table, TableBody, TableCell, TableHead, TableHeader, TableRow
} from "@/components/ui/table";
import {
    FileBarChart, Printer, FileSpreadsheet, FileText,
    ChevronRight, Search, Users, Building2, Gavel,
    Accessibility, MessageSquare, Scale, Briefcase, Filter
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

type DistrictReportType = 'PWD_TOTAL' | 'EMPLOYMENT' | 'EXCHANGE' | 'ACCESSIBILITY' | 'GRIEVANCE' | 'DIRECTIONS' | 'PROSECUTION';

export default function DistrictReportsPage() {
    const [activeReport, setActiveReport] = useState<DistrictReportType>('PWD_TOTAL');

    return (
        <div className="space-y-8 animate-in fade-in duration-700 pb-20">

            {/* 1. REPORT HUB HEADER */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 bg-white p-8 rounded-[40px] border border-slate-200 shadow-sm">
                <div className="flex items-center gap-6">
                    <div className="h-16 w-16 bg-slate-900 rounded-2xl flex items-center justify-center text-white shadow-xl">
                        <FileBarChart size={32} />
                    </div>
                    <div>
                        <h1 className="text-3xl font-black text-slate-900 tracking-tight">Statutory District Reports</h1>
                        <p className="text-slate-500 font-medium italic uppercase text-[10px] tracking-widest mt-1">Nodal Oversight: Lucknow District • Oct 2024</p>
                    </div>
                </div>
                <div className="flex gap-3">
                    <Button variant="outline" className="h-12 px-6 rounded-2xl border-slate-200 font-bold gap-2 hover:bg-slate-50">
                        <FileSpreadsheet size={18} className="text-green-600" /> Export XLS
                    </Button>
                    <Button className="h-12 px-8 rounded-2xl bg-slate-900 text-white font-black uppercase tracking-widest text-[10px] gap-2 shadow-xl hover:bg-black transition-all">
                        <Printer size={18} /> Print Statutory Copy
                    </Button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

                {/* 2. REPORT SELECTOR SIDEBAR (Items 1 - 7) */}
                <div className="lg:col-span-1 space-y-2">
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-4 mb-4">Statutory Menu</p>
                    <ReportLink active={activeReport === 'PWD_TOTAL'} onClick={() => setActiveReport('PWD_TOTAL')} label="1 Total PwD Report" icon={<Users size={16} />} />
                    <ReportLink active={activeReport === 'EMPLOYMENT'} onClick={() => setActiveReport('EMPLOYMENT')} label="2 Employment & Vacancy" icon={<Briefcase size={16} />} />
                    <ReportLink active={activeReport === 'EXCHANGE'} onClick={() => setActiveReport('EXCHANGE')} label="3 Employment Exchange" icon={<FileText size={16} />} />
                    <ReportLink active={activeReport === 'ACCESSIBILITY'} onClick={() => setActiveReport('ACCESSIBILITY')} label="4 Access Compliance" icon={<Accessibility size={16} />} />
                    <ReportLink active={activeReport === 'GRIEVANCE'} onClick={() => setActiveReport('GRIEVANCE')} label="5 Grievance (Supervisory)" icon={<MessageSquare size={16} />} />
                    <ReportLink active={activeReport === 'DIRECTIONS'} onClick={() => setActiveReport('DIRECTIONS')} label="6 Directions & Compliance" icon={<Gavel size={16} />} />
                    <ReportLink active={activeReport === 'PROSECUTION'} onClick={() => setActiveReport('PROSECUTION')} label="7 Prosecution Status" icon={<Scale size={16} />} />
                </div>

                {/* 3. DYNAMIC REPORT VIEWPORT */}
                <div className="lg:col-span-3 space-y-6">
                    <Card className="rounded-[40px] border-slate-200 shadow-sm overflow-hidden bg-white min-h-[700px]">
                        <CardHeader className="p-8 border-b border-slate-50 bg-slate-50/30 flex flex-row justify-between items-center">
                            <div>
                                <CardTitle className="text-xl font-black text-slate-900 tracking-tight uppercase">
                                    {activeReport.replace('_', ' ')} Registry
                                </CardTitle>
                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1 italic">District Magistrate / Lucknow Jurisdiction</p>
                            </div>
                            <div className="flex gap-3">
                                <div className="relative">
                                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-300" />
                                    <input className="pl-9 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-[10px] font-bold outline-none w-48 focus:ring-1 focus:ring-blue-500" placeholder="Search Data..." />
                                </div>
                                <Button variant="ghost" size="icon" className="h-9 w-9 rounded-xl border border-slate-200"><Filter size={16} /></Button>
                            </div>
                        </CardHeader>
                        <CardContent className="p-0">
                            {activeReport === 'PWD_TOTAL' && <ReportPwDTotal />}
                            {activeReport === 'EMPLOYMENT' && <ReportEmploymentVacancy />}
                            {activeReport === 'EXCHANGE' && <ReportExchangeReturns />}
                            {activeReport === 'ACCESSIBILITY' && <ReportAccessibility />}
                            {activeReport === 'GRIEVANCE' && <ReportGrievanceSupervisory />}
                            {activeReport === 'DIRECTIONS' && <ReportDirections />}
                            {activeReport === 'PROSECUTION' && <ReportProsecution />}
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}

/* 4. SPECIFIC REPORT TABLES (Section 1 - 7 Format) */

function ReportPwDTotal() {
    return (
        <StatTable headers={['Disability Category', 'Total PwDs', 'Male', 'Female', 'Others', 'Block-wise Hub']}>
            <Row data={['Locomotor', '4,210', '2,100', '2,100', '10', 'Bakshi Ka Talab']} />
            <Row data={['Visual Impairment', '1,850', '900', '940', '10', 'Chinhat']} />
            <Row data={['Hearing Impairment', '2,100', '1,050', '1,050', '--', 'Malihabad']} />
        </StatTable>
    )
}

function ReportEmploymentVacancy() {
    return (
        <StatTable headers={['Total Est.', 'Total Employees', 'PwD Employees', 'PwD %', 'Identified', 'Filled', 'Pending']}>
            <Row data={['482', '124,000', '5,210', '4.2%', '6,000', '5,210', '790']} />
        </StatTable>
    )
}

function ReportExchangeReturns() {
    return (
        <StatTable headers={['Establishment Name', 'Return Type', 'Due Date', 'Date Submitted', 'Status']}>
            <Row data={['HDFC Regional Hub', 'Six-Monthly', '31 Jul', '28 Jul', 'Submitted']} status="success" />
            <Row data={['Municipal Corp LKO', 'Annual', '30 Apr', '12 May', 'Overdue']} status="danger" />
        </StatTable>
    )
}

function ReportAccessibility() {
    return (
        <StatTable headers={['Establishment', 'Physical Access', 'Digital Access', 'Last Inspection', 'Overall Status']}>
            <Row data={['Lucknow University', 'Compliant', 'Non-Compliant', '14 Oct 24', 'Partial']} status="warning" />
            <Row data={['District Hospital', 'Compliant', 'Compliant', '10 Oct 24', 'Compliant']} status="success" />
        </StatTable>
    )
}

function ReportGrievanceSupervisory() {
    return (
        <StatTable headers={['Grievance ID', 'Against Entity', 'Within SLA', 'Beyond SLA', 'Status', 'Escalated?']}>
            <Row data={['GRV-2291', 'Nagar Nigam', 'Yes', '--', 'Pending', 'No']} />
            <Row data={['GRV-8812', 'Pvt Hospital', 'No', '12 Days', 'Delayed', 'To State']} status="danger" />
        </StatTable>
    )
}

function ReportDirections() {
    return (
        <StatTable headers={['Direction Ref.', 'Establishment', 'Date Issued', 'Compliance Due', 'Status']}>
            <Row data={['DIR-LKO-001', 'Transport Office', '10 Oct', '25 Oct', 'Complied']} status="success" />
            <Row data={['DIR-LKO-042', 'Primary School B', '12 Oct', '30 Oct', 'In Progress']} status="warning" />
        </StatTable>
    )
}

function ReportProsecution() {
    return (
        <StatTable headers={['Case Number', 'Establishment / Accused', 'Stage of Case', 'Next Hearing', 'Status']}>
            <Row data={['CP/LKO/PwD/01', 'Pvt IT Park Ltd', 'Trial', '24 Oct 2024', 'Active']} />
            <Row data={['CP/LKO/PwD/04', 'Global Retail', 'Argument', '02 Nov 2024', 'Priority']} status="danger" />
        </StatTable>
    )
}

/* UI COMPONENTS */

function ReportLink({ active, onClick, label, icon }: any) {
    return (
        <button
            onClick={onClick}
            className={`w-full flex items-center justify-between p-4 rounded-2xl transition-all group ${active
                ? 'bg-slate-900 text-white shadow-xl'
                : 'bg-white text-slate-500 hover:bg-slate-50 hover:text-slate-900'
                }`}
        >
            <div className="flex items-center gap-3">
                <div className={`${active ? 'text-blue-400' : 'text-slate-300 group-hover:text-blue-600'} transition-colors`}>{icon}</div>
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
    const statusDot = status === 'success' ? 'bg-green-500' : status === 'warning' ? 'bg-orange-500' : status === 'danger' ? 'bg-red-500' : 'bg-blue-400';
    return (
        <TableRow className="border-2 hover:bg-slate-50/80 group transition-all">
            {data.map((d: string, i: number) => (
                <TableCell key={i} className="px-8 py-6">
                    <div className="flex items-center gap-3">
                        {i === 0 && <div className={`h-1.5 w-1.5 rounded-full shrink-0 ${statusDot}`} />}
                        <span className={`text-[11px] font-bold ${i === 0 ? 'text-slate-900' : 'text-slate-600'} tracking-tight`}>{d}</span>
                    </div>
                </TableCell>
            ))}
            <TableCell className="text-right px-8 opacity-0 group-hover:opacity-100 transition-all">
                <button className="text-blue-600 font-black uppercase text-[10px] tracking-widest hover:underline">View Source</button>
            </TableCell>
        </TableRow>
    )
}