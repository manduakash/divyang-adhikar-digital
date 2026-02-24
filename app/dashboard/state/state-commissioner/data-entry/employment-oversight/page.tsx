// app/dashboard/scpd/oversight/employment/page.tsx
"use client";
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Briefcase, Users, TrendingUp, AlertCircle, 
  Search, Filter, Printer, FileSpreadsheet,
  ArrowUpRight, Globe, Map, Sparkles, 
  CheckCircle2, Landmark, GraduationCap,
  Timer, History, BadgeCheck, Download,
  Target, BarChart3
} from "lucide-react";
import { 
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow 
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

export default function EmploymentOversightHub() {
  
  // Section A3.12 statewide Aggregation Data
  const employmentStats = {
    totalWorkforce: "8.4M",
    pwdEmployees: "342,850",
    stateAvgPerc: "4.07%",
    totalPendingVacancies: "4,240",
    identifiedTotal: "12,450"
  };

  return (
    <div className="space-y-10 animate-in fade-in duration-700 pb-20 font-sans">
      
      {/* 1. APEX ADMINISTRATIVE HEADER */}
      <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-6 mb-10 bg-white p-10 rounded-[40px] border border-slate-200 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 p-10 opacity-[0.03] pointer-events-none">
            <Briefcase size={180} className="text-indigo-600" />
        </div>
        <div className="space-y-2 relative z-10">
          <div className="flex items-center gap-2 text-indigo-600 font-black uppercase text-[10px] tracking-[0.2em]">
            <BadgeCheck size={14} /> Commission Hub / A3.12 Employment Oversight
          </div>
          <h1 className="text-4xl font-black text-slate-900 tracking-tighter uppercase leading-none">Employment & Reservation Ledger</h1>
          <p className="text-slate-500 font-medium italic">Statewide monitor of PwD recruitment, 4% mandate compliance, and vacancy fulfillment.</p>
        </div>
        <div className="flex gap-4 relative z-10">
            <Button variant="outline" className="h-16 px-8 rounded-3xl border-slate-200 font-black uppercase tracking-widest text-[10px] bg-white hover:bg-slate-50 shadow-xl">
                <FileSpreadsheet size={18} className="mr-2 text-green-600" /> State XLS Export
            </Button>
            <Button className="h-16 px-10 rounded-3xl bg-indigo-900 text-white font-black uppercase tracking-widest text-[10px] shadow-2xl hover:bg-black transition-all gap-2 group">
                <Target size={18} /> Recruitment Drive Audit
            </Button>
        </div>
      </div>

      {/* 2. STATUTORY KPI TILES (Patterned Gradients) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatTile label="PwD Workforce (State)" value={employmentStats.pwdEmployees} icon={<Users/>} color="from-slate-700 via-slate-800 to-slate-900" />
        <StatTile label="State Avg PwD %" value={employmentStats.stateAvgPerc} icon={<TrendingUp/>} color="from-blue-600 via-blue-700 to-indigo-900" trend="+0.04%" />
        <StatTile label="Identified Vacancies" value={employmentStats.identifiedTotal} icon={<BarChart3/>} color="from-indigo-600 via-indigo-700 to-purple-800" />
        <StatTile label="Net Pending Posts" value={employmentStats.totalPendingVacancies} icon={<Timer/>} color="from-red-600 via-rose-700 to-red-900" alert />
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-start">
        
        {/* 3. EMPLOYMENT REGISTRY (Section A3.12 Data Captured) */}
        <div className="xl:col-span-12">
            <Card className="rounded-[40px] border-slate-200 shadow-sm overflow-hidden bg-white min-h-[700px]">
                <CardHeader className="p-8 border-b border-slate-50 bg-slate-50/30 flex flex-row justify-between items-center">
                    <div className="flex gap-4 items-center">
                        <CardTitle className="text-sm font-black uppercase tracking-widest text-slate-400 leading-none">A3.12 statewide reservation registry</CardTitle>
                        <Badge className="bg-indigo-50 text-indigo-700 border-none text-[8px] font-black uppercase tracking-widest px-3">Mandate: 4.0%</Badge>
                    </div>
                    <div className="flex gap-4">
                         <div className="relative group">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-300 group-focus-within:text-indigo-600" />
                            <input className="pl-11 pr-4 py-3 bg-white border border-slate-200 rounded-2xl text-[10px] font-bold outline-none w-80 shadow-inner focus:ring-2 focus:ring-indigo-100" placeholder="Search Establishment, District or Dept..." />
                         </div>
                         <Button variant="outline" className="rounded-2xl border-slate-200 font-black uppercase text-[10px] tracking-widest px-6 h-12 bg-white"><Filter size={16} className="mr-2"/> Filter Dept.</Button>
                    </div>
                </CardHeader>
                <CardContent className="p-0">
                    <Table>
                        <TableHeader className="bg-white">
                            <TableRow className="border-slate-100">
                                <TableHead className="px-8 py-6 text-[9px] font-black uppercase tracking-widest text-slate-400">Node (District / Dept / Est)</TableHead>
                                <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400 text-center">Total Employees</TableHead>
                                <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400 text-center">PwD Employees</TableHead>
                                <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400 text-center">PwD %</TableHead>
                                <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400 text-center">Identified / Filled</TableHead>
                                <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400 text-center">Pending Vacancies</TableHead>
                                <TableHead className="text-right px-8"></TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody className="divide-y divide-slate-50">
                            <EmploymentRow 
                                node="Lucknow • Health Dept • District Hospital" 
                                total="2,450" 
                                pwd="102" 
                                perc={4.16} 
                                ident="105" 
                                filled="102" 
                                pending="03" 
                                success
                            />
                            <EmploymentRow 
                                node="Meerut • Revenue Dept • Tehsildar Office" 
                                total="840" 
                                pwd="12" 
                                perc={1.42} 
                                ident="34" 
                                filled="12" 
                                pending="22" 
                                alert
                            />
                            <EmploymentRow 
                                node="G.B. Nagar • IT Hub • Pvt Corp Node" 
                                total="12,000" 
                                pwd="480" 
                                perc={4.00} 
                                ident="480" 
                                filled="480" 
                                pending="00" 
                                success
                            />
                            <EmploymentRow 
                                node="Agra • Transport Dept • RTO Hub" 
                                total="1,120" 
                                pwd="28" 
                                perc={2.50} 
                                ident="45" 
                                filled="28" 
                                pending="17" 
                                warning
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

function EmploymentRow({ node, total, pwd, perc, ident, filled, pending, alert, warning, success }: any) {
    const statusColor = alert ? 'bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.4)]' : warning ? 'bg-orange-500' : 'bg-green-500';
    
    return (
        <TableRow className="border-none hover:bg-slate-50 transition-all group cursor-pointer font-sans">
            <TableCell className="px-8 py-6">
                <div className="flex items-center gap-3">
                    <div className={`h-1.5 w-1.5 rounded-full ${statusColor}`} />
                    <span className="text-xs font-black text-slate-800 uppercase tracking-tight leading-none max-w-[280px]">{node}</span>
                </div>
            </TableCell>
            <TableCell className="text-center text-[11px] font-bold text-slate-400">{total}</TableCell>
            <TableCell className="text-center text-[11px] font-black text-slate-900">{pwd}</TableCell>
            <TableCell>
                <div className="flex flex-col items-center gap-2">
                    <span className={`text-[11px] font-mono font-black ${perc < 4 ? 'text-red-600 underline decoration-red-200' : 'text-green-600'}`}>{perc}%</span>
                    <div className="w-20 h-1 bg-slate-100 rounded-full overflow-hidden">
                        <div className={`h-full ${perc < 4 ? 'bg-red-500' : 'bg-green-500'}`} style={{ width: `${Math.min(perc * 20, 100)}%` }} />
                    </div>
                </div>
            </TableCell>
            <TableCell className="text-center text-[10px] font-bold text-slate-500 uppercase tracking-tighter">
                {ident} <span className="mx-1 opacity-30">/</span> <span className="text-slate-900">{filled}</span>
            </TableCell>
            <TableCell className="text-center">
                <Badge className={`rounded-md px-2.5 py-0.5 text-[10px] font-black uppercase border-none shadow-none ${alert ? 'bg-red-100 text-red-700' : 'bg-slate-100 text-slate-400'}`}>
                    {pending}
                </Badge>
            </TableCell>
            <TableCell className="text-right px-8 opacity-0 group-hover:opacity-100 transition-all">
                <button className="p-2 bg-slate-50 text-slate-400 rounded-xl hover:bg-indigo-900 hover:text-white transition-all shadow-sm">
                    <ArrowUpRight size={16}/>
                </button>
            </TableCell>
        </TableRow>
    )
}