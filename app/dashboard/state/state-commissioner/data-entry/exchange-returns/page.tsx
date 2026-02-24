// app/dashboard/scpd/oversight/returns/page.tsx
"use client";
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  FileCheck, History, Building2, AlertCircle, 
  Search, Filter, Printer, FileSpreadsheet,
  ArrowUpRight, Globe, Map, Sparkles, 
  CheckCircle2, Landmark, Clock, 
  Timer, BadgeCheck, Download,
  ArrowLeft, ListChecks, CalendarDays
} from "lucide-react";
import { 
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow 
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

export default function ReturnOversightHub() {
  
  // Section A3.13 statewide Aggregation Data
  const returnStats = {
    totalExpected: "45,210",
    submittedOnTime: "32,840",
    currentlyOverdue: "12,370",
    avgDelay: "14 Days"
  };

  return (
    <div className="space-y-10 animate-in fade-in duration-700 pb-20 font-sans">
      
      {/* 1. APEX ADMINISTRATIVE HEADER */}
      <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-6 mb-10 bg-white p-10 rounded-[40px] border border-slate-200 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 p-10 opacity-[0.03] pointer-events-none">
            <FileCheck size={180} className="text-indigo-600" />
        </div>
        <div className="space-y-2 relative z-10">
          <div className="flex items-center gap-2 text-indigo-600 font-black uppercase text-[10px] tracking-[0.2em]">
            <BadgeCheck size={14} /> Commission Hub / A3.13 Return Oversight
          </div>
          <h1 className="text-4xl font-black text-slate-900 tracking-tighter uppercase leading-none">Statutory Return Ledger</h1>
          <p className="text-slate-500 font-medium italic">Monitoring Section 19 Compliance: Six-Monthly (ER-I) & Annual (ER-II) Returns.</p>
        </div>
        <div className="flex gap-4 relative z-10">
            <Button variant="outline" className="h-16 px-8 rounded-3xl border-slate-200 font-black uppercase tracking-widest text-[10px] bg-white hover:bg-slate-50 shadow-xl">
                <FileSpreadsheet size={18} className="mr-2 text-green-600" /> Export Overdue Ledger
            </Button>
            <Button className="h-16 px-10 rounded-3xl bg-indigo-900 text-white font-black uppercase tracking-widest text-[10px] shadow-2xl hover:bg-black transition-all gap-2 group">
                <AlertCircle size={18} /> Issue Default Notices
            </Button>
        </div>
      </div>

      {/* 2. STATUTORY KPI TILES (Patterned Gradients) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatTile label="Returns Expected (State)" value={returnStats.totalExpected} icon={<ListChecks/>} color="from-slate-700 via-slate-800 to-slate-900" />
        <StatTile label="Submitted (Verified)" value={returnStats.submittedOnTime} icon={<CheckCircle2/>} color="from-emerald-500 via-teal-600 to-green-800" />
        <StatTile label="Overdue / Default" value={returnStats.currentlyOverdue} icon={<History/>} color="from-red-600 via-rose-700 to-red-800" alert />
        <div className="bg-white border-2 border-indigo-100 rounded-[32px] p-6 shadow-sm flex flex-col justify-center relative overflow-hidden group">
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/topography.png')]" />
            <p className="text-[9px] font-black uppercase tracking-widest text-indigo-400 mb-1">Avg Compliance Delay</p>
            <p className="text-4xl font-black text-indigo-700 tracking-tighter group-hover:scale-105 transition-transform">{returnStats.avgDelay}</p>
            <div className="w-full h-1.5 bg-slate-100 rounded-full mt-4 overflow-hidden">
                <div className="h-full bg-red-500 shadow-[0_0_12px_rgba(239,68,68,0.3)]" style={{ width: '45%' }} />
            </div>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-start">
        
        {/* 3. RETURN REGISTRY (Section A3.13 Data Captured) */}
        <div className="xl:col-span-12">
            <Card className="rounded-[40px] border-slate-200 shadow-sm overflow-hidden bg-white min-h-[700px]">
                <CardHeader className="p-8 border-b border-slate-50 bg-slate-50/30 flex flex-row justify-between items-center">
                    <div className="flex gap-4 items-center">
                        <CardTitle className="text-sm font-black uppercase tracking-widest text-slate-400 leading-none">A3.13 Statewide statutory return Registry</CardTitle>
                        <Badge className="bg-indigo-50 text-indigo-700 border-none text-[8px] font-black uppercase tracking-widest px-3">Rule 19 Compliance</Badge>
                    </div>
                    <div className="flex gap-4">
                         <div className="relative group">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-300 group-focus-within:text-indigo-600" />
                            <input className="pl-11 pr-4 py-3 bg-white border border-slate-200 rounded-2xl text-[10px] font-bold outline-none w-80 shadow-inner focus:ring-2 focus:ring-indigo-100" placeholder="Search Establishment or Return Type..." />
                         </div>
                         <Button variant="outline" className="rounded-2xl border-slate-200 font-black uppercase text-[10px] tracking-widest px-6 h-12 bg-white"><Filter size={16} className="mr-2"/> Return Type</Button>
                    </div>
                </CardHeader>
                <CardContent className="p-0">
                    <Table>
                        <TableHeader className="bg-white">
                            <TableRow className="border-slate-100">
                                <TableHead className="px-8 py-6 text-[9px] font-black uppercase tracking-widest text-slate-400">Establishment Node</TableHead>
                                <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400">Return Details</TableHead>
                                <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400 text-center">Due Date</TableHead>
                                <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400 text-center">Submission Date</TableHead>
                                <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400 text-center">Status</TableHead>
                                <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400 text-center">Delay Monitoring</TableHead>
                                <TableHead className="text-right px-8"></TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody className="divide-y divide-slate-50">
                            <ReturnRow 
                                name="HDFC Bank Regional Hub" 
                                id="EST-UP-7721"
                                type="Six-Monthly (ER-I)"
                                period="Jan - Jun 2024"
                                due="31 Jul 2024"
                                submitted="28 Jul 2024"
                                status="SUBMITTED"
                                delay="--"
                                success
                            />
                            <ReturnRow 
                                name="Nagar Nigam Lucknow" 
                                id="EST-UP-0012"
                                type="Annual (ER-II)"
                                period="FY 2023-24"
                                due="30 Apr 2024"
                                submitted="12 May 2024"
                                status="OVERDUE"
                                delay="12 Days"
                                warning
                            />
                            <ReturnRow 
                                name="Pvt IT Hub - Meerut" 
                                id="EST-UP-4401"
                                type="Six-Monthly (ER-I)"
                                period="Jan - Jun 2024"
                                due="31 Jul 2024"
                                submitted="--"
                                status="NOT SUBMITTED"
                                delay="82 Days"
                                alert
                            />
                            <ReturnRow 
                                name="District Hospital Node" 
                                id="EST-UP-8811"
                                type="Annual (ER-II)"
                                period="FY 2023-24"
                                due="30 Apr 2024"
                                submitted="30 Apr 2024"
                                status="SUBMITTED"
                                delay="--"
                                success
                            />
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>

      </div>
    </div>
  );
}

/* UI SUB-COMPONENTS */

function StatTile({ label, value, icon, color, trend, alert }: any) {
    return (
        <div className={`group relative text-left p-7 rounded-[32px] overflow-hidden transition-all duration-500 h-44 flex flex-col justify-between shadow-md hover:shadow-xl hover:-translate-y-1 bg-gradient-to-br ${color} text-white border-t border-white/20`}>
            <div className="absolute inset-0 opacity-[0.08] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/topography.png')]" />
            <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
            
            <div className="relative z-10 flex flex-col justify-between h-full">
                <div className="h-10 w-10 rounded-xl bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform">
                    {React.cloneElement(icon, { size: 18, className: "text-white" })}
                </div>
                <div>
                    <p className="text-2xl font-black tracking-tighter drop-shadow-sm">{value}</p>
                    <p className="text-[9px] font-black uppercase tracking-[0.1em] opacity-80 leading-tight mt-1">{label}</p>
                </div>
            </div>
            {alert && <div className="absolute top-4 right-4 h-1.5 w-1.5 rounded-full bg-white animate-ping" />}
        </div>
    )
}

function ReturnRow({ name, id, type, period, due, submitted, status, delay, alert, warning, success }: any) {
    const statusColor = alert ? 'bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.4)]' : warning ? 'bg-orange-500' : 'bg-green-500';
    
    return (
        <TableRow className="border-none hover:bg-slate-50 transition-all group cursor-pointer font-sans">
            <TableCell className="px-8 py-6">
                <div className="flex items-center gap-3">
                    <div className={`h-1.5 w-1.5 rounded-full ${statusColor}`} />
                    <div>
                        <p className="text-sm font-black text-slate-800 uppercase tracking-tight leading-none">{name}</p>
                        <p className="text-[10px] font-mono font-bold text-indigo-600 mt-2">{id}</p>
                    </div>
                </div>
            </TableCell>
            <TableCell>
                <div className="space-y-1">
                    <p className="text-[10px] font-black text-slate-900 uppercase tracking-widest">{type}</p>
                    <div className="flex items-center gap-1.5">
                        <CalendarDays size={10} className="text-slate-300" />
                        <span className="text-[9px] font-bold text-slate-400 uppercase">Period: {period}</span>
                    </div>
                </div>
            </TableCell>
            <TableCell className="text-center text-[10px] font-bold text-slate-500 uppercase">{due}</TableCell>
            <TableCell className="text-center text-[10px] font-bold text-slate-500 uppercase">
                <span className={submitted === '--' ? 'text-slate-200 italic' : 'text-slate-700'}>{submitted}</span>
            </TableCell>
            <TableCell className="text-center">
                <Badge className={`rounded-full px-3 py-0.5 text-[8px] font-black uppercase border-none shadow-none ${
                    alert ? 'bg-red-100 text-red-700' : warning ? 'bg-orange-100 text-orange-700' : 'bg-green-100 text-green-700'
                }`}>
                    {status}
                </Badge>
            </TableCell>
            <TableCell className="text-center">
                <div className="flex flex-col items-center">
                    <span className={`text-[11px] font-mono font-black ${alert || warning ? 'text-red-600' : 'text-slate-300'}`}>
                        {delay}
                    </span>
                    {delay !== '--' && <p className="text-[7px] font-black text-red-400 uppercase mt-1">Breach detected</p>}
                </div>
            </TableCell>
            <TableCell className="text-right px-8 opacity-0 group-hover:opacity-100 transition-all">
                <div className="flex justify-end gap-2">
                    <button title="View Submitted Form" className={`p-2 rounded-xl transition-all ${success ? 'bg-green-50 text-green-600 hover:bg-green-600 hover:text-white' : 'bg-slate-50 text-slate-300 grayscale cursor-not-allowed'}`}>
                        <FileCheck size={16} />
                    </button>
                    <button title="Drill-down to History" className="p-2 bg-slate-50 text-slate-400 rounded-xl hover:bg-indigo-900 hover:text-white transition-all shadow-sm">
                        <ArrowUpRight size={16}/>
                    </button>
                </div>
            </TableCell>
        </TableRow>
    )
}