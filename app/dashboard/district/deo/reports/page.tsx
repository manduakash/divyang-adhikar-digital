// app/dashboard/deo/reports/page.tsx
"use client";
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
    Table, TableBody, TableCell, TableHead, TableHeader, TableRow 
} from "@/components/ui/table";
import { 
    FileBarChart, Printer, FileSpreadsheet, ChevronRight, 
    Search, Users, School, Gavel, Accessibility, 
    MessageSquare, GraduationCap, Briefcase, Filter, 
    BookOpen, History, TrendingUp, Download, PieChart as PieIcon
} from "lucide-react";
import { 
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, 
    ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell, 
    Legend, ComposedChart 
} from 'recharts';
import { Badge } from "@/components/ui/badge";

type DEOReportType = 'PWD_STUDENTS' | 'ADMISSION' | 'ACCOMMODATION' | 'ACCESSIBILITY' | 'GRIEVANCE' | 'INSPECTION';

export default function DEOReportsPage() {
    const [activeReport, setActiveReport] = useState<DEOReportType>('PWD_STUDENTS');

    return (
        <div className="space-y-8 animate-in fade-in duration-700 pb-20">
            
            {/* 1. REPORT HUB HEADER */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 bg-white p-8 rounded-[40px] border border-slate-200 shadow-sm">
                <div className="flex items-center gap-6">
                    <div className="h-16 w-16 bg-indigo-600 rounded-2xl flex items-center justify-center text-white shadow-xl shadow-indigo-100">
                        <FileBarChart size={32} />
                    </div>
                    <div>
                        <h1 className="text-3xl font-black text-slate-900 tracking-tight uppercase">Statutory Education Reports</h1>
                        <p className="text-slate-500 font-medium italic uppercase text-[10px] tracking-widest mt-1">Academic Oversight • Lucknow Region • Oct 2024</p>
                    </div>
                </div>
                <div className="flex gap-3">
                    <Button variant="outline" className="h-12 px-6 rounded-2xl border-slate-200 font-bold gap-2">
                        <FileSpreadsheet size={18} className="text-green-600" /> Export XLS
                    </Button>
                    <Button className="h-12 px-8 rounded-2xl bg-slate-900 text-white font-black uppercase tracking-widest text-[10px] gap-2 shadow-xl hover:bg-black transition-all">
                        <Printer size={18} /> Print Statutory Copy
                    </Button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                
                {/* 2. REPORT SELECTOR SIDEBAR (Items 1 - 6) */}
                <div className="lg:col-span-1 space-y-2 sticky top-8 h-fit">
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-4 mb-4">Education Registry</p>
                    <ReportLink active={activeReport === 'PWD_STUDENTS'} onClick={() => setActiveReport('PWD_STUDENTS')} label="1 Total PwD Students" icon={<GraduationCap size={16}/>} />
                    <ReportLink active={activeReport === 'ADMISSION'} onClick={() => setActiveReport('ADMISSION')} label="2 Admission & Access" icon={<School size={16}/>} />
                    <ReportLink active={activeReport === 'ACCOMMODATION'} onClick={() => setActiveReport('ACCOMMODATION')} label="3 Reasonable Accom." icon={<Accessibility size={16}/>} />
                    <ReportLink active={activeReport === 'ACCESSIBILITY'} onClick={() => setActiveReport('ACCESSIBILITY')} label="4 School Accessibility" icon={<BookOpen size={16}/>} />
                    <ReportLink active={activeReport === 'GRIEVANCE'} onClick={() => setActiveReport('GRIEVANCE')} label="5 Grievance Status" icon={<MessageSquare size={16}/>} />
                    <ReportLink active={activeReport === 'INSPECTION'} onClick={() => setActiveReport('INSPECTION')} label="6 Inspection Compliance" icon={<Gavel size={16}/>} />
                </div>

                {/* 3. DYNAMIC REPORT VIEWPORT */}
                <div className="lg:col-span-3 space-y-8">
                    
                    {/* SECTION 12: DYNAMIC ANALYTICS */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {activeReport === 'PWD_STUDENTS' && <DisabilityCategoryDonut />}
                        {activeReport === 'PWD_STUDENTS' && <EnrolmentTrendLine />}
                        {activeReport === 'ADMISSION' && <AdmissionSuccessBar />}
                        {activeReport === 'ACCOMMODATION' && <AccommodationGapChart />}
                        {activeReport === 'ACCESSIBILITY' && <AccessStatusStackedBar />}
                        {activeReport === 'GRIEVANCE' && <GrievanceSLAChart />}
                    </div>

                    {/* SECTION 11: TABULAR DATA (STATUTORY FORMATS) */}
                    <Card className="rounded-[40px] border-slate-200 shadow-sm overflow-hidden bg-white min-h-[500px]">
                        <CardHeader className="p-8 border-b border-slate-50 bg-slate-50/30 flex flex-row justify-between items-center">
                            <div>
                                <CardTitle className="text-xl font-black text-slate-900 tracking-tight uppercase">
                                    {activeReport.replace('_', ' ')} Registry
                                </CardTitle>
                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1 italic">Office of the DEO / Inclusive Education Cell</p>
                            </div>
                            <div className="flex gap-3">
                                 <div className="relative">
                                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-300" />
                                    <input className="pl-9 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-[10px] font-bold outline-none w-48 focus:ring-1 focus:ring-indigo-500" placeholder="Search school..." />
                                 </div>
                                 <Button variant="ghost" size="icon" className="h-9 w-9 rounded-xl border border-slate-200"><Filter size={16}/></Button>
                            </div>
                        </CardHeader>
                        <CardContent className="p-0">
                            {activeReport === 'PWD_STUDENTS' && <Table51 />}
                            {activeReport === 'ADMISSION' && <Table52 />}
                            {activeReport === 'ACCOMMODATION' && <Table53 />}
                            {activeReport === 'ACCESSIBILITY' && <Table54 />}
                            {activeReport === 'GRIEVANCE' && <Table55 />}
                            {activeReport === 'INSPECTION' && <Table56 />}
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}

/* -------------------------------------------------------------------------- */
/* ANALYTICS COMPONENTS                                                       */
/* -------------------------------------------------------------------------- */

function ChartWrapper({ title, children }: { title: string, children: React.ReactNode }) {
    return (
        <Card className="rounded-[32px] border-slate-200 bg-white p-6 shadow-sm overflow-hidden">
            <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-6">{title}</h3>
            <div className="h-[250px] w-full">{children}</div>
        </Card>
    );
}

function DisabilityCategoryDonut() {
    const data = [{ name: 'Locomotor', value: 400 }, { name: 'Visual', value: 300 }, { name: 'Hearing', value: 300 }, { name: 'SLD', value: 200 }];
    const COLORS = ['#4f46e5', '#818cf8', '#c7d2fe', '#e0e7ff'];
    return (
        <ChartWrapper title="Student Disability Profile">
            <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                    <Pie data={data} innerRadius={60} outerRadius={80} paddingAngle={5} dataKey="value">
                        {data.map((_, i) => <Cell key={i} fill={COLORS[i % COLORS.length]} />)}
                    </Pie>
                    <Tooltip />
                    <Legend verticalAlign="bottom" iconType="circle" wrapperStyle={{fontSize: '9px', fontWeight: 'bold'}} />
                </PieChart>
            </ResponsiveContainer>
        </ChartWrapper>
    );
}

function EnrolmentTrendLine() {
    const data = [{ year: '21', students: 320 }, { year: '22', students: 450 }, { year: '23', students: 510 }, { year: '24', students: 680 }];
    return (
        <ChartWrapper title="Total Enrolment Growth">
            <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                    <XAxis dataKey="year" axisLine={false} tickLine={false} tick={{fontSize: 10, fontWeight: 'bold'}} />
                    <YAxis axisLine={false} tickLine={false} />
                    <Tooltip />
                    <Line type="monotone" dataKey="students" stroke="#4f46e5" strokeWidth={4} dot={{r: 4}} />
                </LineChart>
            </ResponsiveContainer>
        </ChartWrapper>
    );
}

function AdmissionSuccessBar() {
    const data = [{ name: 'Requests', val: 500 }, { name: 'Granted', val: 460 }, { name: 'Denied', val: 40 }];
    return (
        <ChartWrapper title="Admission Funnel (District)">
            <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 10, fontWeight: 'bold'}} />
                    <Tooltip cursor={{fill: '#f8fafc'}} />
                    <Bar dataKey="val" fill="#4f46e5" radius={[6, 6, 0, 0]} barSize={40}>
                        <Cell fill="#6366f1" />
                        <Cell fill="#10b981" />
                        <Cell fill="#ef4444" />
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </ChartWrapper>
    );
}

function AccommodationGapChart() {
    const data = [{ type: 'Scribe', req: 120, prov: 110 }, { type: 'Devices', req: 85, prov: 50 }, { type: 'Time', req: 400, prov: 395 }];
    return (
        <ChartWrapper title="Accommodation Provision Gap">
            <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                    <XAxis dataKey="type" axisLine={false} tickLine={false} tick={{fontSize: 9, fontWeight: 'bold'}} />
                    <Legend wrapperStyle={{fontSize: '10px'}} />
                    <Bar dataKey="req" name="Requested" fill="#e2e8f0" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="prov" name="Provided" fill="#4f46e5" radius={[4, 4, 0, 0]} />
                </BarChart>
            </ResponsiveContainer>
        </ChartWrapper>
    );
}

function AccessStatusStackedBar() {
    const data = [{ name: 'Physical', ok: 80, part: 15, non: 5 }, { name: 'Digital', ok: 40, part: 30, non: 30 }];
    return (
        <ChartWrapper title="Institutional Accessibility (%)">
            <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data} layout="vertical">
                    <XAxis type="number" hide />
                    <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} tick={{fontSize: 10, fontWeight: 'black'}} />
                    <Bar dataKey="ok" stackId="a" fill="#10b981" barSize={30} />
                    <Bar dataKey="part" stackId="a" fill="#f59e0b" />
                    <Bar dataKey="non" stackId="a" fill="#ef4444" />
                </BarChart>
            </ResponsiveContainer>
        </ChartWrapper>
    );
}

function GrievanceSLAChart() {
    const data = [{ name: 'Jul', avg: 12, max: 30 }, { name: 'Aug', avg: 18, max: 30 }, { name: 'Sep', avg: 14, max: 30 }, { name: 'Oct', avg: 22, max: 30 }];
    return (
        <ChartWrapper title="Avg Resolution Days vs SLA">
            <ResponsiveContainer width="100%" height="100%">
                <ComposedChart data={data}>
                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 10, fontWeight: 'bold'}} />
                    <Tooltip />
                    <Bar dataKey="avg" fill="#c7d2fe" radius={[4, 4, 0, 0]} />
                    <Line type="monotone" dataKey="max" stroke="#ef4444" strokeDasharray="5 5" strokeWidth={2} />
                </ComposedChart>
            </ResponsiveContainer>
        </ChartWrapper>
    );
}

/* -------------------------------------------------------------------------- */
/* STATUTORY TABLE FORMATS (Sections 1 - 6)                               */
/* -------------------------------------------------------------------------- */

function Table51() {
    return (
        <StatTable headers={['Institution Name', 'Type', 'Total Students', 'PwD Students', 'Disability Breakdown']}>
            <Row data={['City Central High', 'Govt', '1,200', '42', 'Locomotor (12), Visual (8), Other (22)']} />
            <Row data={['Modern Aided Academy', 'Aided', '850', '21', 'Hearing (10), SLD (11)']} />
        </StatTable>
    );
}

function Table52() {
    return (
        <StatTable headers={['Institution Name', 'Requests', 'Granted', 'Denied', 'Primary Reasons for Denial']}>
            <Row data={['Green Valley High', '12', '10', '02', 'Seats Full / Documentation Mismatch']} />
            <Row data={['St. Mary\'s', '08', '08', '00', '--']} />
        </StatTable>
    );
}

function Table53() {
    return (
        <StatTable headers={['Institution Name', 'Accommodation Type', 'Requested', 'Provided', 'Pending']}>
            <Row data={['Govt Boys College', 'Scribe / Reader', '15', '14', '01']} />
            <Row data={['City University', 'Assistive Devices', '04', '02', '02']} />
        </StatTable>
    );
}

function Table54() {
    return (
        <StatTable headers={['Institution Name', 'Physical Status', 'Digital Status', 'Last Audit', 'Compliance']}>
            <Row data={['Central High', 'Compliant', 'Partial', '12-Oct-24', 'Verified']} />
            <Row data={['Secondary B', 'Non-Compliant', 'Non-Compliant', '05-Oct-24', 'Direction Issued']} status="danger" />
        </StatTable>
    );
}

function Table55() {
    return (
        <StatTable headers={['Registry Area', 'Total Grievances', 'Resolved', 'Within SLA', 'Beyond SLA']}>
            <Row data={['Admission Hub', '24', '20', '18', '02']} status="warning" />
            <Row data={['Infrastructure Hub', '18', '12', '10', '02']} status="warning" />
        </StatTable>
    );
}

function Table56() {
    return (
        <StatTable headers={['Institution Name', 'Direction Ref.', 'Date Issued', 'Due Date', 'Status']}>
            <Row data={['School Block-A', 'DIR-EDU-041', '10 Oct', '25 Oct', 'Complied']} status="success" />
            <Row data={['Academy-C', 'DIR-EDU-092', '12 Oct', '30 Oct', 'Overdue']} status="danger" />
        </StatTable>
    );
}

/* UI UTILS */

function ReportLink({ active, onClick, label, icon }: any) {
    return (
        <button onClick={onClick} className={`w-full flex items-center justify-between p-4 rounded-2xl transition-all group ${active ? 'bg-indigo-600 text-white shadow-xl shadow-indigo-100' : 'bg-white text-slate-500 hover:bg-slate-50'}`}>
            <div className="flex items-center gap-3">
                <div className={`${active ? 'text-white' : 'text-slate-300 group-hover:text-indigo-600'} transition-colors`}>{icon}</div>
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
                </TableRow>
            </TableHeader>
            <TableBody className="divide-y divide-slate-50">{children}</TableBody>
        </Table>
    )
}

function Row({ data, status }: any) {
    const dot = status === 'success' ? 'bg-green-500' : status === 'warning' ? 'bg-orange-500' : status === 'danger' ? 'bg-red-500' : 'bg-indigo-400';
    return (
        <TableRow className="border-none hover:bg-slate-50 transition-all">
            {data.map((d: string, i: number) => (
                <TableCell key={i} className="px-8 py-6">
                    <div className="flex items-center gap-3">
                        {i === 0 && <div className={`h-1.5 w-1.5 rounded-full shrink-0 ${dot}`} />}
                        <span className={`text-[11px] font-bold ${i === 0 ? 'text-slate-900' : 'text-slate-600'} tracking-tight leading-snug`}>{d}</span>
                    </div>
                </TableCell>
            ))}
        </TableRow>
    )
}