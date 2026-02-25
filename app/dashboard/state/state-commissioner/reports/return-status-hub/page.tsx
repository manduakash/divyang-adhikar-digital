// app/dashboard/scpd/reports/return-status/page.tsx
"use client";
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow 
} from "@/components/ui/table";
import { 
  FileCheck, Search, Filter, Printer, FileSpreadsheet, 
  ArrowUpRight, Globe, Map, Sparkles, CheckCircle2, 
  AlertTriangle, History, Landmark, Timer, 
  MapPin, BadgeCheck, Download, History as HistoryIcon,
  CalendarDays, Activity, Briefcase
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function ReturnStatusReport() {
  
  // Aggregate Statewide Return Metrics
  const returnStats = {
    totalExpected: "45,210",
    submittedOnTime: "38,400",
    overdueDefaults: "6,810",
    avgDelay: "14 Days"
  };

  return (
    <div className="space-y-10 animate-in fade-in duration-1000 pb-20 font-sans selection:bg-emerald-50">
      
      {/* APEX ADMINISTRATIVE HEADER */}
      <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-6 bg-white p-10 rounded-[48px] border border-slate-200 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 p-10 opacity-[0.03] pointer-events-none text-emerald-600">
            <FileCheck size={200} />
        </div>
        <div className="space-y-2 relative z-10">
          <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border border-emerald-100 shadow-sm">
            <BadgeCheck size={14} /> Rule 19 Compliance Node
          </div>
          <h1 className="text-5xl font-black text-slate-900 tracking-tighter uppercase leading-none">Exchange Return Ledger</h1>
          <p className="text-slate-500 font-medium italic text-lg tracking-tight">Consolidated audit of Six-Monthly and Annual employment returns.</p>
        </div>
        <div className="flex gap-4 relative z-10">
            <Button variant="outline" className="h-14 px-8 rounded-2xl border-slate-200 font-black uppercase tracking-widest text-[10px] bg-white gap-2 shadow-sm hover:bg-slate-50">
                <FileSpreadsheet size={18} className="text-green-600" /> Export XLS
            </Button>
            <Button className="h-14 px-10 rounded-2xl bg-slate-900 text-white font-black uppercase tracking-widest text-[10px] shadow-2xl hover:bg-black transition-all gap-2 border-t border-white/20">
                <Printer size={18} /> Print Certified Hub Copy
            </Button>
        </div>
      </div>

      {/* COMPLIANCE KPI STRIP (3-Stop Patterned Gradients) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatTile label="Returns Expected (Q3)" value={returnStats.totalExpected} icon={<Briefcase/>} color="from-slate-700 via-slate-800 to-slate-950" />
        <StatTile label="Verified Submitted" value={returnStats.submittedOnTime} icon={<CheckCircle2/>} color="from-emerald-500 via-teal-600 to-green-700" />
        <StatTile label="Currently Overdue" value={returnStats.overdueDefaults} icon={<AlertTriangle/>} color="from-orange-500 via-amber-600 to-red-600" alert />
        <div className="bg-white border-2 border-emerald-100 rounded-[32px] p-6 shadow-sm flex flex-col justify-center relative overflow-hidden group">
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/topography.png')]" />
            <p className="text-[9px] font-black uppercase text-emerald-600 tracking-widest mb-1 relative z-10">Avg Return Delay</p>
            <p className="text-3xl font-black text-emerald-700 tracking-tighter group-hover:scale-105 transition-transform">{returnStats.avgDelay}</p>
            <div className="w-full h-1 bg-slate-100 rounded-full mt-4 overflow-hidden">
                <div className="h-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.3)]" style={{ width: '45%' }} />
            </div>
        </div>
      </div>

      {/* MASTER DATA LEDGER */}
      <Card className="rounded-[48px] border-slate-200 shadow-sm overflow-hidden bg-white">
        <CardHeader className="p-0">
            <div className="p-8 bg-gradient-to-r from-emerald-600 via-teal-600 to-blue-700 text-white relative overflow-hidden">
                {/* CARBON FIBER TEXTURE OVERLAY */}
                <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 relative z-10">
                    <div className="flex items-center gap-4">
                        <div className="h-12 w-12 rounded-2xl bg-white/20 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-xl">
                            <HistoryIcon size={24} />
                        </div>
                        <CardTitle className="text-sm font-black uppercase tracking-[0.3em]">Statewide Statutory Return registry</CardTitle>
                    </div>
                    <div className="flex gap-4 w-full md:w-auto">
                         <div className="relative flex-1 md:w-80">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-white/50" />
                            <input className="w-full pl-11 pr-4 py-3 bg-white/10 border border-white/20 rounded-2xl text-[10px] font-black uppercase outline-none text-white placeholder:text-white/40 focus:bg-white/20 transition-all shadow-inner" placeholder="Search District or Establishment..." />
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
                        <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400">Establishment Name</TableHead>
                        <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400 text-center">Return Type</TableHead>
                        <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400 text-center">Period From – To</TableHead>
                        <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400 text-center">Due Date</TableHead>
                        <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400 text-center">Submission Date</TableHead>
                        <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400 text-center">Status</TableHead>
                        <TableHead className="text-right px-8 text-[9px] font-black uppercase tracking-widest text-slate-400">Delay Days</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody className="divide-y divide-slate-50">
                    <ReturnRow 
                        district="Lucknow"
                        name="HDFC Regional Hub"
                        type="Six-Monthly"
                        period="Jan 24 – Jun 24"
                        due="31 Jul 2024"
                        submitted="28 Jul 2024"
                        status="SUBMITTED"
                        delay="--"
                        success
                    />
                    <ReturnRow 
                        district="Meerut"
                        name="Municipal Corp HQ"
                        type="Annual"
                        period="FY 2023-24"
                        due="30 Apr 2024"
                        submitted="12 May 2024"
                        status="SUBMITTED"
                        delay="12 Days"
                        warning
                    />
                    <ReturnRow 
                        district="Varanasi"
                        name="Pvt IT Hub Node-B"
                        type="Six-Monthly"
                        period="Jan 24 – Jun 24"
                        due="31 Jul 2024"
                        submitted="--"
                        status="NOT SUBMITTED"
                        delay="82 Days"
                        alert
                    />
                    <ReturnRow 
                        district="Agra"
                        name="District Library Hub"
                        type="Annual"
                        period="FY 2023-24"
                        due="30 Apr 2024"
                        submitted="--"
                        status="OVERDUE"
                        delay="170 Days"
                        alert
                    />
                </TableBody>
            </Table>
        </CardContent>
      </Card>

      {/* FOOTER AUDIT NOTICE */}
      <footer className="flex justify-between items-center pt-8 border-t border-slate-200">
        <div className="flex items-center gap-3 text-slate-400">
            <Activity size={18} className="text-emerald-600 animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-widest leading-none">Rule 19 Monitoring Sync: 45,210 Establishment Node History Active</span>
        </div>
        <div className="flex gap-6">
             <button className="text-[10px] font-black uppercase text-emerald-600 hover:underline">Download Default List</button>
             <button className="text-[10px] font-black uppercase text-slate-400 hover:text-slate-900">Submission Protocols</button>
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

function ReturnRow({ district, name, type, period, due, submitted, status, delay, alert, success, warning }: any) {
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
                <p className="text-sm font-black text-slate-800 uppercase tracking-tight leading-none">{name}</p>
                <p className="text-[8px] font-black text-slate-400 uppercase mt-1.5 tracking-widest italic leading-none">Statutory Node</p>
            </TableCell>
            <TableCell className="text-center">
                <Badge className={`border-none font-black text-[8px] uppercase px-2 py-0.5 tracking-widest shadow-none ${type === 'Annual' ? 'bg-indigo-50 text-indigo-700' : 'bg-blue-50 text-blue-700'}`}>
                    {type}
                </Badge>
            </TableCell>
            <TableCell className="text-center">
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{period}</span>
            </TableCell>
            <TableCell className="text-center font-bold text-slate-400 text-[10px]">{due}</TableCell>
            <TableCell className="text-center">
                <span className={`text-[10px] font-bold uppercase ${submitted === '--' ? 'text-slate-200 italic' : 'text-slate-700'}`}>{submitted}</span>
            </TableCell>
            <TableCell className="text-center">
                <Badge className={`rounded-full px-3 py-0.5 text-[8px] font-black uppercase border-none shadow-none ${
                    alert ? 'bg-red-100 text-red-700' : success ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'
                }`}>
                    {status}
                </Badge>
            </TableCell>
            <TableCell className="text-right px-8">
                <div className="flex flex-col items-end">
                    <span className={`text-[12px] font-mono font-black ${alert || warning ? 'text-red-600 underline decoration-red-100 decoration-2' : 'text-slate-200'}`}>
                        {delay}
                    </span>
                    {(alert || warning) && <p className="text-[7px] font-black text-red-400 mt-1 uppercase leading-none">SLA Breach</p>}
                </div>
            </TableCell>
        </TableRow>
    )
}