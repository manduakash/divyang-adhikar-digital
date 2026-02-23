// app/dashboard/establishment/reports/page.tsx
"use client";
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
    Table, TableBody, TableCell, TableHead, TableHeader, TableRow
} from "@/components/ui/table";
import {
    Download, Printer, FileSpreadsheet, FileText,
    ChevronRight, Filter, Search, AlertCircle,
    FileCheck, Accessibility, Users, Gavel,
    History, ShieldCheck, BarChart3, TrendingUp, Clock
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend,
    BarChart, Bar, PieChart, Pie, Cell, ComposedChart
} from 'recharts';
import { Progress } from '@/components/ui/progress';

type ReportType = 'GRIEVANCE' | 'ACCESSIBILITY' | 'EMPLOYMENT' | 'SCORECARD' | 'EXCEPTION' | 'DIRECTIONS';

export default function ReportsDetailedPage() {
    const [activeReport, setActiveReport] = useState<ReportType>('GRIEVANCE');

    return (
        <div className="space-y-8 animate-in fade-in duration-700 pb-20">

            {/* 1. HUB HEADER */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 bg-white p-8 rounded-[40px] border border-slate-200 shadow-sm">
                <div>
                    <h1 className="text-3xl font-black text-slate-900 tracking-tight leading-none">Statutory Reporting Hub</h1>
                    <p className="text-slate-500 font-medium mt-2">• Auditable Governance Metrics.</p>
                </div>
                <div className="flex gap-3">
                    <Button variant="outline" className="h-12 px-6 rounded-2xl border-slate-200 font-bold gap-2">
                        <FileSpreadsheet size={18} className="text-green-600" /> Excel
                    </Button>
                    <Button variant="outline" className="h-12 px-6 rounded-2xl border-slate-200 font-bold gap-2">
                        <FileText size={18} className="text-red-600" /> PDF
                    </Button>
                    <Button className="h-12 px-6 rounded-2xl bg-slate-900 text-white font-black uppercase tracking-widest text-[10px] gap-2 shadow-xl">
                        <Printer size={18} /> Print Report
                    </Button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">

                {/* 2. REPORT SELECTOR */}
                <div className="lg:col-span-1 space-y-2 sticky top-8">
                    <ReportTab active={activeReport === 'GRIEVANCE'} onClick={() => setActiveReport('GRIEVANCE')} label="Grievance Hub" icon={<History size={16} />} />
                    <ReportTab active={activeReport === 'ACCESSIBILITY'} onClick={() => setActiveReport('ACCESSIBILITY')} label="Access Audits" icon={<Accessibility size={16} />} />
                    <ReportTab active={activeReport === 'EMPLOYMENT'} onClick={() => setActiveReport('EMPLOYMENT')} label="Employment Data" icon={<Users size={16} />} />
                    <ReportTab active={activeReport === 'DIRECTIONS'} onClick={() => setActiveReport('DIRECTIONS')} label="Orders & Directions" icon={<Gavel size={16} />} />
                    <ReportTab active={activeReport === 'SCORECARD'} onClick={() => setActiveReport('SCORECARD')} label="Full Scorecard" icon={<BarChart3 size={16} />} />
                    <ReportTab active={activeReport === 'EXCEPTION'} onClick={() => setActiveReport('EXCEPTION')} label="Exceptions" icon={<AlertCircle size={16} />} danger />
                </div>

                {/* 3. DYNAMIC REPORT VIEW */}
                <div className="lg:col-span-3 space-y-8">

                    {/* ANALYTICS HEADER */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {activeReport === 'GRIEVANCE' && <GrievanceTrendChart />}
                        {activeReport === 'GRIEVANCE' && <TimeResolutionChart />}
                        {activeReport === 'ACCESSIBILITY' && <AccessibilityStackedBar />}
                        {activeReport === 'EMPLOYMENT' && <EmploymentDonutChart />}
                        {activeReport === 'SCORECARD' && <AreaComparisonBar />}
                    </div>

                    {/* TABULAR DATA */}
                    <Card className="rounded-[40px] border-slate-200 shadow-sm overflow-hidden bg-white">
                        <CardHeader className="p-8 border-b border-slate-50 flex flex-row justify-between items-center">
                            <CardTitle className="text-sm font-black uppercase tracking-widest text-slate-400">{activeReport} STATUTORY DATA</CardTitle>
                        </CardHeader>
                        <CardContent className="p-0">
                            {activeReport === 'GRIEVANCE' && <GrievanceTable />}
                            {activeReport === 'ACCESSIBILITY' && <AccessibilityTable />}
                            {activeReport === 'EMPLOYMENT' && <EmploymentTable />}
                            {activeReport === 'DIRECTIONS' && <DirectionsTable />}
                            {activeReport === 'SCORECARD' && <ScorecardDetailedView />}
                            {activeReport === 'EXCEPTION' && <ExceptionTable />}
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}

/* -------------------------------------------------------------------------- */
/* GRAPHS & CHARTS COMPONENTS                                      */
/* -------------------------------------------------------------------------- */

// 12.1 GRIEVANCE TREND ANALYSIS
function GrievanceTrendChart() {
    const data = [
        { month: 'Jul', received: 40, disposed: 24, pending: 16 },
        { month: 'Aug', received: 30, disposed: 32, pending: 14 },
        { month: 'Sep', received: 45, disposed: 20, pending: 39 },
        { month: 'Oct', received: 60, disposed: 45, pending: 54 },
    ];

    return (
        <ChartWrapper title="Grievance Trend Analysis" desc="Identify backlog and improvement trend.">
            <ResponsiveContainer width="100%" height={250}>
                <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                    <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 10, fontWeight: 'bold' }} />
                    <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10, fontWeight: 'bold' }} />
                    <Tooltip contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }} />
                    <Legend iconType="circle" wrapperStyle={{ paddingTop: '20px', fontSize: '10px', fontWeight: 'black', textTransform: 'uppercase' }} />
                    <Line type="monotone" dataKey="received" stroke="#2563eb" strokeWidth={3} dot={{ r: 4 }} />
                    <Line type="monotone" dataKey="disposed" stroke="#10b981" strokeWidth={3} dot={{ r: 4 }} />
                    <Line type="monotone" dataKey="pending" stroke="#f43f5e" strokeWidth={3} dot={{ r: 4 }} />
                </LineChart>
            </ResponsiveContainer>
        </ChartWrapper>
    );
}

// 12.2 ACCESSIBILITY COMPLIANCE STATUS
function AccessibilityStackedBar() {
    const data = [
        { name: 'Physical', complied: 45, pending: 15, non: 5 },
        { name: 'Digital', complied: 20, pending: 30, non: 25 },
    ];

    return (
        <ChartWrapper title="Accessibility Compliance Status" desc="Visual of physical vs digital gaps.">
            <ResponsiveContainer width="100%" height={250}>
                <BarChart data={data}>
                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 10, fontWeight: 'bold' }} />
                    <Tooltip cursor={{ fill: '#f8fafc' }} />
                    <Bar dataKey="complied" stackId="a" fill="#10b981" radius={[0, 0, 0, 0]} />
                    <Bar dataKey="pending" stackId="a" fill="#f59e0b" />
                    <Bar dataKey="non" stackId="a" fill="#ef4444" radius={[10, 10, 0, 0]} />
                </BarChart>
            </ResponsiveContainer>
        </ChartWrapper>
    );
}

// 12.3 PwD EMPLOYMENT COMPOSITION
function EmploymentDonutChart() {
    const data = [
        { name: 'PwD Employees', value: 12 },
        { name: 'Non-PwD', value: 278 },
    ];
    const COLORS = ['#2563eb', '#f1f5f9'];

    return (
        <ChartWrapper title="Employment Composition" desc="Visual compliance with 4% mandate.">
            <div className="flex items-center justify-center">
                <PieChart width={250} height={250}>
                    <Pie data={data} innerRadius={70} outerRadius={90} paddingAngle={5} dataKey="value">
                        {data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)}
                    </Pie>
                    <Tooltip />
                </PieChart>
                <div className="text-center -left-10">
                    <p className="text-2xl font-black text-slate-900">4.2%</p>
                    <p className="text-[8px] font-bold text-slate-400 uppercase">PwD Share</p>
                </div>
            </div>
        </ChartWrapper>
    )
}

// 12.4 COMPLIANCE AREA COMPARISON
function AreaComparisonBar() {
    const data = [
        { area: 'Physical', score: 85 },
        { area: 'Digital', score: 40 },
        { area: 'Employment', score: 100 },
        { area: 'Policy', score: 95 },
        { area: 'Grievance', score: 72 },
    ];

    return (
        <ChartWrapper title="Area Score Comparison" desc="Identify weakest compliance area instantly.">
            <ResponsiveContainer width="100%" height={250}>
                <BarChart data={data} layout="vertical">
                    <XAxis type="number" hide />
                    <YAxis dataKey="area" type="category" axisLine={false} tickLine={false} tick={{ fontSize: 9, fontWeight: 'black' }} width={80} />
                    <Bar dataKey="score" fill="#2563eb" radius={[0, 10, 10, 0]} barSize={20} />
                </BarChart>
            </ResponsiveContainer>
        </ChartWrapper>
    )
}

// 12.5 TIME-TO-RESOLUTION ANALYSIS
function TimeResolutionChart() {
    const data = [
        { month: 'Jul', avg: 12, sla: 30 },
        { month: 'Aug', avg: 18, sla: 30 },
        { month: 'Sep', avg: 14, sla: 30 },
        { month: 'Oct', avg: 22, sla: 30 },
    ];

    return (
        <ChartWrapper title="Resolution Efficiency" desc="Avg days compared against statutory SLA.">
            <ResponsiveContainer width="100%" height={250}>
                <ComposedChart data={data}>
                    <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 10, fontWeight: 'bold' }} />
                    <YAxis axisLine={false} tickLine={false} />
                    <Tooltip />
                    <Bar dataKey="avg" fill="#bfdbfe" radius={[8, 8, 0, 0]} name="Avg Days" />
                    <Line type="monotone" dataKey="sla" stroke="#ef4444" strokeDasharray="5 5" name="Statutory SLA" />
                </ComposedChart>
            </ResponsiveContainer>
        </ChartWrapper>
    )
}

/* -------------------------------------------------------------------------- */
/* TABULAR DATA COMPONENTS                                        */
/* -------------------------------------------------------------------------- */

function GrievanceTable() {
    return (
        <TableSkeleton headers={['Grievance ID', 'Category', 'Received', 'Disposed', 'Days Taken', 'Status']}>
            <DataRow data={['GRV-9921', 'Employment', '12 Oct', '14 Oct', '02', 'Disposed']} status="success" />
            <DataRow data={['GRV-9942', 'Accessibility', '15 Oct', '--', '--', 'Pending']} status="warning" />
        </TableSkeleton>
    )
}

function DirectionsTable() {
    return (
        <TableSkeleton headers={['Issuing Authority', 'Reference No', 'Date', 'Due Date', 'Status']}>
            <DataRow data={['District Magistrate', 'DIR-UP-001', '10 Oct', '25 Oct', 'Complied']} status="success" />
            <DataRow data={['State Commissioner', 'ORD-SC-221', '15 Oct', '30 Oct', 'Overdue']} status="danger" />
        </TableSkeleton>
    )
}

function EmploymentTable() {
    return (
        <TableSkeleton headers={['Total Employees', 'PwD Employees', 'Percentage', 'Identified Posts', 'Vacant Posts']}>
            <DataRow data={['290', '12', '4.13%', '14', '02']} />
        </TableSkeleton>
    )
}

function ExceptionTable() {
    return (
        <TableSkeleton headers={['Area', 'Nature of Default', 'Duration (Days)', 'Repeat Violation', 'Escalation']}>
            <DataRow data={['Digital Access', 'Screen Reader Mismatch', '45', 'Yes', 'Active']} status="danger" />
        </TableSkeleton>
    )
}

function AccessibilityTable() {
    return (
        <TableSkeleton headers={['Type', 'Location / URL', 'Reported Date', 'Action Taken', 'Compliance Status', 'Comp. Date']}>
            <DataRow data={['Physical', 'Gomti Nagar Branch', '10 Oct', 'Ramp Fixed', 'Compliant', '14 Oct']} status="success" />
            <DataRow data={['Digital', 'bank.com/portal', '12 Oct', 'Pending Audit', 'Non-Compliant', '--']} status="danger" />
        </TableSkeleton>
    )
}

function ScorecardDetailedView() {
    const scores = [
        { label: 'Physical Accessibility', score: 85 },
        { label: 'Digital Accessibility', score: 40 },
        { label: 'Employment Compliance', score: 100 },
        { label: 'Policy Compliance', score: 95 },
        { label: 'Grievance Responsiveness', score: 72 },
    ]
    return (
        <div className="p-10 space-y-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {scores.map(s => (
                    <div key={s.label} className="space-y-3">
                        <div className="flex justify-between font-black text-[10px] uppercase text-slate-400">
                            <span>{s.label}</span>
                            <span>{s.score}%</span>
                        </div>
                        <Progress value={s.score} className={`h-2 ${s.score < 50 ? 'bg-red-500' : 'bg-blue-600'}`} />
                    </div>
                ))}
            </div>
            <div className="pt-10 border-t border-slate-50 flex justify-between items-center">
                <div className="space-y-1">
                    <p className="text-sm font-black uppercase text-slate-900">Overall PwD Compliance Score</p>
                    <p className="text-xs font-medium text-slate-400 italic">Aggregated across all 5 statutory heads.</p>
                </div>
                <span className="text-5xl font-black text-blue-600">79.2%</span>
            </div>
        </div>
    )
}

/* -------------------------------------------------------------------------- */
/* UI HELPER COMPONENTS                                                        */
/* -------------------------------------------------------------------------- */

function ChartWrapper({ title, desc, children }: any) {
    return (
        <Card className="rounded-[40px] border-slate-200 bg-white p-8 shadow-sm overflow-hidden flex flex-col justify-between">
            <div className="mb-6">
                <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">{title}</h3>
                <p className="text-xs font-bold text-slate-800 mt-1">{desc}</p>
            </div>
            {children}
        </Card>
    );
}

function ReportTab({ active, onClick, label, icon, danger }: any) {
    return (
        <button
            onClick={onClick}
            className={`w-full flex items-center justify-between p-4 rounded-2xl transition-all group ${active
                ? 'bg-slate-900 text-white shadow-xl'
                : 'bg-white text-slate-400 hover:bg-slate-50'
                }`}
        >
            <div className="flex items-center gap-3">
                <div className={`${active ? 'text-blue-400' : danger ? 'text-red-400' : 'group-hover:text-blue-600'}`}>{icon}</div>
                <span className="text-[10px] font-black uppercase tracking-widest">{label}</span>
            </div>
            {active && <ChevronRight size={14} className="opacity-30" />}
        </button>
    )
}

function TableSkeleton({ headers, children }: any) {
    return (
        <Table>
            <TableHeader className="bg-slate-50/50">
                <TableRow className="border-slate-100">
                    {headers.map((h: string) => (
                        <TableHead key={h} className="px-8 py-5 text-[9px] font-black uppercase tracking-widest text-slate-400">{h}</TableHead>
                    ))}
                </TableRow>
            </TableHeader>
            <TableBody className="divide-y divide-slate-50">{children}</TableBody>
        </Table>
    )
}

function DataRow({ data, status }: any) {
    const statusDot = status === 'success' ? 'bg-green-500' : status === 'warning' ? 'bg-orange-500' : status === 'danger' ? 'bg-red-500' : 'bg-slate-300';
    return (
        <TableRow className="border-none hover:bg-slate-50 transition-colors">
            {data.map((d: string, i: number) => (
                <TableCell key={i} className="px-8 py-5">
                    <div className="flex items-center gap-3">
                        {i === 0 && <div className={`h-1.5 w-1.5 rounded-full ${statusDot}`} />}
                        <span className={`text-xs font-bold ${i === 0 ? 'text-slate-900' : 'text-slate-600'}`}>{d}</span>
                    </div>
                </TableCell>
            ))}
        </TableRow>
    )
}