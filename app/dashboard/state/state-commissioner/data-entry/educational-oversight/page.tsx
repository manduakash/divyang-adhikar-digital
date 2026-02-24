// app/dashboard/scpd/oversight/education/page.tsx
"use client";
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  School, GraduationCap, Users, ShieldCheck, 
  Search, Filter, Printer, FileSpreadsheet,
  ArrowUpRight, Globe, Map, Sparkles, 
  CheckCircle2, AlertTriangle, Landmark,
  Timer, BookOpen, Activity, History,
  Accessibility, BadgeCheck, MoreVertical,
  MapPin
} from "lucide-react";
import { 
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow 
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

export default function EducationalOversightHub() {
  
  // Section A3.10 statewide Aggregation Data
  const academicStats = {
    totalInstitutions: "18,450",
    totalPwDStudents: "342,120",
    stateAvgInclusion: "84.2%",
    defaultingSchools: "142"
  };

  return (
    <div className="space-y-10 animate-in fade-in duration-700 pb-20 font-sans">
      
      {/* 1. APEX ADMINISTRATIVE HEADER */}
      <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-6 mb-10 bg-white p-10 rounded-[40px] border border-slate-200 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 p-10 opacity-[0.03] pointer-events-none">
            <School size={180} className="text-indigo-600" />
        </div>
        <div className="space-y-2 relative z-10">
          <div className="flex items-center gap-2 text-indigo-600 font-black uppercase text-[10px] tracking-[0.2em]">
            <BadgeCheck size={14} /> Commission Hub / A3.10 Educational Oversight
          </div>
          <h1 className="text-4xl font-black text-slate-900 tracking-tighter uppercase leading-none">Inclusion & Academic Audit</h1>
          <p className="text-slate-500 font-medium italic">Statewide monitoring of structural accessibility and PwD student enrollment metrics.</p>
        </div>
        <div className="flex gap-4 relative z-10">
            <Button variant="outline" className="h-16 px-8 rounded-3xl border-slate-200 font-black uppercase tracking-widest text-[10px] bg-white hover:bg-slate-50 shadow-xl">
                <FileSpreadsheet size={18} className="mr-2 text-green-600" /> State XLS Export
            </Button>
            <Button className="h-16 px-10 rounded-3xl bg-indigo-900 text-white font-black uppercase tracking-widest text-[10px] shadow-2xl hover:bg-black transition-all gap-2 group">
                <GraduationCap size={18} /> Statewide Admission Audit
            </Button>
        </div>
      </div>

      {/* 2. STATUTORY KPI TILES (Academic Gradient Set) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatTile label="Total Institutions" value={academicStats.totalInstitutions} icon={<School/>} color="from-slate-800 to-slate-950" />
        <StatTile label="PwD Students Enrolled" value="342K" icon={<Users/>} color="from-blue-600 via-blue-700 to-indigo-900" />
        <StatTile label="State Inclusion Score" value={academicStats.stateAvgInclusion} icon={<ShieldCheck/>} color="from-emerald-600 via-teal-700 to-green-800" trend="+1.4%" />
        <StatTile label="High-Priority Defaults" value={academicStats.defaultingSchools} icon={<AlertTriangle/>} color="from-red-600 via-rose-700 to-red-800" alert />
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-start">
        
        {/* 3. EDUCATION REGISTRY (Section A3.10 Data Captured) */}
        <div className="xl:col-span-12">
            <Card className="rounded-[40px] border-slate-200 shadow-sm overflow-hidden bg-white min-h-[700px]">
                <CardHeader className="p-8 border-b border-slate-50 bg-slate-50/30 flex flex-row justify-between items-center">
                    <div className="flex gap-4 items-center">
                        <CardTitle className="text-sm font-black uppercase tracking-widest text-slate-400 leading-none">A3.10 Statewide Institutional Registry</CardTitle>
                        <Badge className="bg-indigo-50 text-indigo-700 border-none text-[8px] font-black uppercase tracking-widest px-3">Section 16-18 Monitoring</Badge>
                    </div>
                    <div className="flex gap-4">
                         <div className="relative group">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-300 group-focus-within:text-indigo-600" />
                            <input className="pl-11 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-[10px] font-bold outline-none w-80 shadow-inner" placeholder="Search School Name or ID..." />
                         </div>
                         <Button variant="outline" className="rounded-2xl border-slate-200 font-black uppercase text-[10px] tracking-widest px-6 h-12 bg-white"><Filter size={16} className="mr-2"/> Sector Filter</Button>
                    </div>
                </CardHeader>
                <CardContent className="p-0">
                    <Table>
                        <TableHeader className="bg-white">
                            <TableRow className="border-slate-100">
                                <TableHead className="px-8 py-6 text-[9px] font-black uppercase tracking-widest text-slate-400">Institution ID & Name</TableHead>
                                <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400">Type / District</TableHead>
                                <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400 text-center">Structural Access</TableHead>
                                <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400 text-center">Digital Access</TableHead>
                                <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400 text-center">Inclusion Score</TableHead>
                                <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400 text-center">PwD Student Count</TableHead>
                                <TableHead className="text-right px-8"></TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody className="divide-y divide-slate-50">
                            <SchoolOversightRow 
                                id="EDU-UP-9921" 
                                name="City Central High School" 
                                type="GOVERNMENT" 
                                district="Lucknow" 
                                phys="COMPLIANT"
                                digi="PARTIAL"
                                score={88} 
                                studentCount="42" 
                                success
                            />
                            <SchoolOversightRow 
                                id="EDU-UP-0014" 
                                name="St. Mary's Academy" 
                                type="PRIVATE" 
                                district="Kanpur Nagar" 
                                phys="PARTIAL"
                                digi="NON-COMP"
                                score={52} 
                                studentCount="12" 
                                warning
                            />
                            <SchoolOversightRow 
                                id="EDU-UP-8812" 
                                name="Secondary School Block-B" 
                                type="AIDED" 
                                district="Meerut" 
                                phys="NON-COMP"
                                digi="NON-COMP"
                                score={34} 
                                studentCount="08" 
                                alert
                            />
                            <SchoolOversightRow 
                                id="EDU-UP-4491" 
                                name="Regional Girls College" 
                                type="GOVERNMENT" 
                                district="Varanasi" 
                                phys="COMPLIANT"
                                digi="COMPLIANT"
                                score={96} 
                                studentCount="56" 
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
                    <div className="flex items-baseline gap-1">
                        <p className="text-2xl font-black tracking-tighter drop-shadow-sm">{value}</p>
                        {trend && <span className="text-[8px] font-black opacity-60 flex items-center gap-0.5 tracking-tighter"> {trend}</span>}
                    </div>
                    <p className="text-[9px] font-black uppercase tracking-[0.1em] opacity-80 leading-tight mt-1">{label}</p>
                </div>
            </div>
            {alert && <div className="absolute top-4 right-4 h-1.5 w-1.5 rounded-full bg-white animate-ping" />}
        </div>
    )
}

function SchoolOversightRow({ id, name, type, district, phys, digi, score, studentCount, alert, warning, success }: any) {
    const statusColor = alert ? 'bg-red-500' : warning ? 'bg-orange-500' : 'bg-green-500';
    const scoreColor = score > 80 ? 'bg-green-500' : score > 50 ? 'bg-indigo-600' : 'bg-red-500';

    return (
        <TableRow className="border-none hover:bg-slate-50 transition-all group cursor-pointer font-sans">
            <TableCell className="px-8 py-6">
                <span className="text-[11px] font-mono font-black text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded-md">{id}</span>
                <p className="text-sm font-black text-slate-800 uppercase tracking-tight mt-2 leading-none">{name}</p>
            </TableCell>
            <TableCell>
                <div className="space-y-1">
                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{type}</p>
                    <div className="flex items-center gap-1.5">
                        <MapPin size={10} className="text-slate-300" />
                        <span className="text-[10px] font-bold text-slate-400 uppercase">{district}</span>
                    </div>
                </div>
            </TableCell>
            <TableCell className="text-center">
                <StatusBadge label={phys} variant={phys === 'COMPLIANT' ? 'success' : phys === 'PARTIAL' ? 'warning' : 'danger'} />
            </TableCell>
            <TableCell className="text-center">
                <StatusBadge label={digi} variant={digi === 'COMPLIANT' ? 'success' : digi === 'PARTIAL' ? 'warning' : 'danger'} />
            </TableCell>
            <TableCell>
                <div className="flex flex-col items-center gap-2">
                    <span className="text-xs font-black text-slate-900">{score}%</span>
                    <div className="w-24 h-1 bg-slate-100 rounded-full overflow-hidden">
                        <div className={`h-full ${scoreColor}`} style={{ width: `${score}%` }} />
                    </div>
                </div>
            </TableCell>
            <TableCell className="text-center">
                <span className="text-lg font-black text-slate-900 tracking-tighter">{studentCount}</span>
                <p className="text-[7px] font-black text-slate-400 uppercase tracking-widest">Enrolled</p>
            </TableCell>
            <TableCell className="text-right px-8 opacity-0 group-hover:opacity-100 transition-all">
                <button className="p-2 bg-slate-50 text-slate-400 rounded-xl hover:bg-indigo-900 hover:text-white transition-all shadow-sm">
                    <ArrowUpRight size={16}/>
                </button>
            </TableCell>
        </TableRow>
    )
}

function StatusBadge({ label, variant }: { label: string, variant: 'success' | 'warning' | 'danger' }) {
    const styles = {
        success: 'bg-green-100 text-green-700',
        warning: 'bg-orange-100 text-orange-700',
        danger: 'bg-red-100 text-red-700'
    };
    return (
        <Badge className={`rounded-full px-2.5 py-0.5 text-[8px] font-black uppercase border-none shadow-none ${styles[variant]}`}>
            {label}
        </Badge>
    );
}