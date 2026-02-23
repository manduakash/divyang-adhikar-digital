// app/dashboard/pp/reports/page.tsx
"use client";
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow 
} from "@/components/ui/table";
import { 
  Scale, Printer, FileSpreadsheet, ChevronRight, 
  Search, Gavel, History, FileText, 
  Filter, Calendar, ShieldAlert, Timer, 
  ArrowUpRight, Download, Flag, Landmark
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

type PPReportType = 'SUMMARY' | 'PROGRESS' | 'THRESHOLD' | 'SCHEDULE' | 'COMPLIANCE';

export default function PPReportsPage() {
  const [activeReport, setActiveReport] = useState<PPReportType>('SUMMARY');

  return (
    <div className="space-y-8 animate-in fade-in duration-700 pb-20">
      
      {/* 1. JUDICIAL HUB HEADER */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 bg-white p-8 rounded-[40px] border border-slate-200 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-[0.03] pointer-events-none">
            <Scale size={160} className="text-slate-900" />
        </div>
        <div className="flex items-center gap-6 relative z-10">
            <div className="h-16 w-16 bg-slate-950 rounded-2xl flex items-center justify-center text-white shadow-xl">
                <FileText size={32} className="text-blue-400" />
            </div>
            <div>
                <h1 className="text-3xl font-black text-slate-900 tracking-tight uppercase leading-none">Statutory Prosecution Reports</h1>
                <p className="text-slate-500 font-medium italic text-sm mt-1 uppercase tracking-widest">Judicial Node • Lucknow District • Oct 2024</p>
            </div>
        </div>
        <div className="flex gap-3 relative z-10">
            <Button variant="outline" className="h-12 px-6 rounded-2xl border-slate-200 font-bold gap-2 hover:bg-slate-50">
                <FileSpreadsheet size={18} className="text-green-600" /> Export XLS
            </Button>
            <Button className="h-12 px-8 rounded-2xl bg-slate-950 text-white font-black uppercase tracking-widest text-[10px] gap-2 shadow-xl hover:bg-black transition-all">
                <Printer size={18} /> Print Certified Copy
            </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        
        {/* 2. REPORT SELECTOR SIDEBAR (Items  - ) */}
        <div className="lg:col-span-1 space-y-2 sticky top-8 h-fit">
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-4 mb-4">Judicial Registry</p>
            <ReportLink active={activeReport === 'SUMMARY'} onClick={() => setActiveReport('SUMMARY')} label=" Case Status Summary" icon={<Scale size={16}/>} />
            <ReportLink active={activeReport === 'PROGRESS'} onClick={() => setActiveReport('PROGRESS')} label=" Monthly Case Progress" icon={<History size={16}/>} />
            <ReportLink active={activeReport === 'THRESHOLD'} onClick={() => setActiveReport('THRESHOLD')} label=" Beyond Threshold" icon={<Timer size={16}/>} danger />
            <ReportLink active={activeReport === 'SCHEDULE'} onClick={() => setActiveReport('SCHEDULE')} label=" Hearing Schedule" icon={<Calendar size={16}/>} />
            <ReportLink active={activeReport === 'COMPLIANCE'} onClick={() => setActiveReport('COMPLIANCE')} label=" Order Compliance" icon={<ShieldAlert size={16}/>} />
            
            <div className="mt-8 p-6 bg-slate-900 rounded-[32px] border border-white/5 text-white">
                <div className="flex items-center gap-2 text-blue-400 mb-2">
                    <Scale size={14} />
                    <span className="text-[10px] font-black uppercase tracking-widest">Counsel Note</span>
                </div>
                <p className="text-[9px] text-slate-400 font-medium leading-relaxed uppercase">
                    All prosecution reports are syncronized with the <b>State Commissioner for PwDs</b> and the <b>National Judicial Bridge</b>.
                </p>
            </div>
        </div>

        {/* 3. DYNAMIC REPORT VIEWPORT */}
        <div className="lg:col-span-3 space-y-6">
            <Card className="rounded-[40px] border-slate-200 shadow-sm overflow-hidden bg-white min-h-[700px]">
                <CardHeader className="p-8 border-b border-slate-50 bg-slate-50/30 flex flex-row justify-between items-center">
                    <div>
                        <CardTitle className="text-xl font-black text-slate-900 tracking-tight uppercase">
                            {activeReport.replace('_', ' ')} REGISTRY
                        </CardTitle>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1 italic tracking-tighter">Office of the Special Public Prosecutor / District Court Node</p>
                    </div>
                    <div className="flex gap-3">
                         <div className="relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-300" />
                            <input className="pl-9 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-[10px] font-bold outline-none w-48 focus:ring-1 focus:ring-blue-500" placeholder="Search Case ID..." />
                         </div>
                    </div>
                </CardHeader>
                <CardContent className="p-0">
                    {activeReport === 'SUMMARY' && <Table61 />}
                    {activeReport === 'PROGRESS' && <Table62 />}
                    {activeReport === 'THRESHOLD' && <Table63 />}
                    {activeReport === 'SCHEDULE' && <Table64 />}
                    {activeReport === 'COMPLIANCE' && <Table65 />}
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
        <StatTable headers={['Case ID', 'Presiding Court', 'Trial Stage', 'Last Hearing', 'Next Hearing', 'Status']}>
            <Row data={['CP/2024/LKO/001', 'Special Court PwD', 'Evidence', '12 Oct', '24 Oct', 'Active']} status="success" />
            <Row data={['CP/2024/LKO/004', 'Dist. Sessions B', 'Argument', '05 Oct', '28 Oct', 'Priority']} status="warning" />
            <Row data={['CP/2023/LKO/882', 'Special Court PwD', 'Investigation', '18 Sep', '02 Nov', 'Delayed']} status="danger" />
        </StatTable>
    )
}

function Table62() {
    return (
        <StatTable headers={['Opening Balance', 'New Files', 'Disposed', 'Closing Balance', 'Disposal Rate (%)']}>
            <Row data={['24', '12', '08', '28', '28.5%']} />
            <TableRow><TableCell colSpan={5} className="bg-slate-50 text-[9px] font-black p-4 text-slate-400 text-center uppercase tracking-widest">Monthly progress snapshot for Lucknow Node</TableCell></TableRow>
        </StatTable>
    )
}

function Table63() {
    return (
        <StatTable headers={['Case ID', 'Duration Pending', 'Reason for Delay', 'Action Proposed']}>
            <Row data={['CP/2023/LKO/771', '340 Days', 'Accused Absent / Summons Pending', 'Issue BW to Police Station']} status="danger" />
            <Row data={['CP/2023/LKO/901', '245 Days', 'Forensic Evidence Mismatch', 'Summon IO for Clarification']} status="danger" />
        </StatTable>
    )
}

function Table64() {
    return (
        <StatTable headers={['Case ID', 'Court Room', 'Next Date', 'Scheduled Stage', 'Priority Flag']}>
            <Row data={['CP/2024/LKO/001', 'Court 4', '24 Oct', 'Cross Examination', 'HIGH']} status="warning" />
            <Row data={['CP/2024/LKO/008', 'Spec-A', '28 Oct', 'Charge Framing', 'CRITICAL']} status="danger" />
            <Row data={['CP/2024/LKO/012', 'Court 2', '02 Nov', 'Arguments', 'NORMAL']} />
        </StatTable>
    )
}

function Table65() {
    return (
        <StatTable headers={['Case ID', 'Order Date', 'Compliance Authority', 'Current Status', 'Delay (Days)']}>
            <Row data={['CP/2024/LKO/001', '10 Oct', 'Nagar Nigam Hub', 'Complied', '--']} status="success" />
            <Row data={['CP/2023/LKO/012', '12 Sep', 'Regional Transport', 'Overdue', '42 Days']} status="danger" />
        </StatTable>
    )
}

/* UI UTILITIES */

function ReportLink({ active, onClick, label, icon, danger }: any) {
    return (
        <button 
            onClick={onClick}
            className={`w-full flex items-center justify-between p-4 rounded-2xl transition-all group ${
                active 
                ? 'bg-slate-950 text-white shadow-xl' 
                : 'bg-white text-slate-500 hover:bg-slate-50 hover:text-blue-600'
            }`}
        >
            <div className="flex items-center gap-3">
                <div className={`${active ? 'text-blue-400' : danger ? 'text-red-500' : 'text-slate-300 group-hover:text-blue-600'} transition-colors`}>{icon}</div>
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
                const isCaseId = d.includes('/');
                const isCritical = d === 'CRITICAL' || d === 'HIGH' || d === 'Delayed' || d === 'Overdue';
                const isShortfall = d.includes('Days') && parseInt(d) > 30;
                return (
                    <TableCell key={i} className="px-8 py-6">
                        <div className="flex items-center gap-3">
                            {i === 0 && <div className={`h-1.5 w-1.5 rounded-full shrink-0 ${dotColor}`} />}
                            <span className={`text-[11px] font-bold tracking-tight leading-snug ${
                                isCaseId ? 'font-mono text-blue-600' : 
                                isCritical || isShortfall ? 'text-red-600 underline decoration-red-100 decoration-2' : 
                                i === 0 ? 'text-slate-900' : 'text-slate-600'
                            }`}>
                                {d}
                            </span>
                        </div>
                    </TableCell>
                );
            })}
            <TableCell className="text-right px-8 opacity-0 group-hover:opacity-100 transition-all">
                <button className="text-slate-900 font-black uppercase text-[10px] tracking-widest hover:underline">View File</button>
            </TableCell>
        </TableRow>
    )
}