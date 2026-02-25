// app/dashboard/scpd/reports/education-master/page.tsx
"use client";
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow 
} from "@/components/ui/table";
import { 
  School, Search, Filter, Printer, FileSpreadsheet, 
  ArrowUpRight, Globe, ShieldCheck, GraduationCap,
  BadgeCheck, Users, Mail, Phone, Calendar,
  Activity, Landmark, MapPin, CheckCircle2,
  AlertTriangle, History, BookOpenCheck
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function EducationMasterReport() {
  return (
    <div className="space-y-10 animate-in fade-in duration-700 pb-20 font-sans selection:bg-indigo-100">
      
      {/* HUB ADMINISTRATIVE HEADER */}
      <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-6 bg-white p-10 rounded-[48px] border border-slate-200 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 p-10 opacity-[0.03] pointer-events-none text-indigo-600">
            <School size={200} />
        </div>
        <div className="space-y-2 relative z-10">
          <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border border-indigo-200 shadow-sm">
            <BookOpenCheck size={14} /> Inclusive Education Node
          </div>
          <h1 className="text-5xl font-black text-slate-900 tracking-tighter uppercase leading-none">Educational Master Ledger</h1>
          <p className="text-slate-500 font-medium italic text-lg tracking-tight">Statewide registry of schools and colleges monitored for inclusive standards.</p>
        </div>
        <div className="flex gap-4 relative z-10">
            <Button variant="outline" className="h-14 px-8 rounded-2xl border-slate-200 font-black uppercase tracking-widest text-[10px] bg-white gap-2 shadow-sm hover:bg-slate-50">
                <FileSpreadsheet size={18} className="text-green-600" /> Export Registry
            </Button>
            <Button className="h-14 px-10 rounded-2xl bg-indigo-600 text-white font-black uppercase tracking-widest text-[10px] shadow-2xl hover:bg-indigo-700 transition-all gap-2 border-t border-white/10">
                <Printer size={18} /> Print Statutory Audit
            </Button>
        </div>
      </div>

      {/* REGISTRY KPI STRIP */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <RegistryStat label="Total Institutions" val="18,450" color="text-indigo-600" />
        <RegistryStat label="Govt & Aided" val="12,100" color="text-blue-600" />
        <RegistryStat label="Private Nodes" val="6,350" color="text-emerald-600" />
        <div className="bg-white border-2 border-indigo-100 rounded-[32px] p-6 shadow-sm flex flex-col justify-center relative overflow-hidden group">
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/topography.png')]" />
            <p className="text-[9px] font-black uppercase tracking-widest text-indigo-400 mb-1">State Inclusion Rate</p>
            <p className="text-3xl font-black text-indigo-700 tracking-tighter group-hover:scale-105 transition-transform">93.2%</p>
        </div>
      </div>

      {/* INSTITUTION DATA TABLE */}
      <Card className="rounded-[48px] border-slate-200 shadow-sm overflow-hidden bg-white">
        <CardHeader className="p-0">
            <div className="p-8 bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700 text-white relative overflow-hidden">
                {/* CARBON FIBER TEXTURE OVERLAY */}
                <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 relative z-10">
                    <div className="flex items-center gap-4">
                        <div className="h-12 w-12 rounded-2xl bg-white/20 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-xl">
                            <GraduationCap size={24} />
                        </div>
                        <CardTitle className="text-sm font-black uppercase tracking-[0.3em]">Statewide Academic Registry</CardTitle>
                    </div>
                    <div className="flex gap-4 w-full md:w-auto">
                         <div className="relative flex-1 md:w-80">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-white/50" />
                            <input className="w-full pl-11 pr-4 py-3 bg-white/10 border border-white/20 rounded-2xl text-[10px] font-black uppercase outline-none text-white placeholder:text-white/40 focus:bg-white/20 transition-all shadow-inner" placeholder="Filter by Name, ID or Category..." />
                         </div>
                    </div>
                </div>
            </div>
        </CardHeader>
        <CardContent className="p-0">
            <Table>
                <TableHeader className="bg-slate-50/80">
                    <TableRow className="border-slate-100">
                        <TableHead className="px-8 py-6 text-[9px] font-black uppercase tracking-widest text-slate-400">Sl No</TableHead>
                        <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400">Institution ID & Name</TableHead>
                        <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400">Type / Category</TableHead>
                        <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400 text-center">District</TableHead>
                        <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400 text-center">Status</TableHead>
                        <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400 text-center">Structural Access</TableHead>
                        <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400 text-center">Digital Access</TableHead>
                        <TableHead className="text-right px-8 text-[9px] font-black uppercase tracking-widest text-slate-400">Nodal Contact</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody className="divide-y divide-slate-50">
                    <EducationRow 
                        sl="01" id="EDU-UP-9921" name="City Central High" type="GOVT" category="Secondary" district="Lucknow" status="ACTIVE" 
                        phys="COMPLIANT" digi="PARTIAL" nodal="Prof. S. Das" contact="94150-XXXX" 
                        success 
                    />
                    <EducationRow 
                        sl="02" id="EDU-UP-0014" name="St. Mary's Academy" type="PRIVATE" category="Higher Edu" district="Kolkata" status="ACTIVE" 
                        phys="PARTIAL" digi="NON-COMP" nodal="Sr. Maria J." contact="033-228XXX" 
                        warning 
                    />
                    <EducationRow 
                        sl="03" id="EDU-UP-8812" name="Primary School-B" type="AIDED" category="Primary" district="Meerut" status="INACTIVE" 
                        phys="NON-COMP" digi="NON-COMP" nodal="Amit Mehra" contact="98892-XXXX" 
                        alert 
                    />
                    <EducationRow 
                        sl="04" id="EDU-UP-4491" name="Regional Girls College" type="GOVT" category="College" district="Varanasi" status="ACTIVE" 
                        phys="COMPLIANT" digi="COMPLIANT" nodal="Dr. R. Singh" contact="contact@node.edu" 
                        success 
                    />
                    <EducationRow 
                        sl="05" id="EDU-UP-1102" name="Model Prep Academy" type="PRIVATE" category="Secondary" district="Ghaziabad" status="ACTIVE" 
                        phys="COMPLIANT" digi="PARTIAL" nodal="V.K. Gupta" contact="94120-XXXX" 
                    />
                </TableBody>
            </Table>
        </CardContent>
      </Card>

      {/* FOOTER AUDIT NOTICE */}
      <footer className="flex justify-between items-center pt-8 border-t border-slate-200">
        <div className="flex items-center gap-3 text-slate-400">
            <Activity size={18} className="text-indigo-600 animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-widest leading-none text-nowrap">Statutory Academic Sync: 18,450 Institutions Audited Statewide</span>
        </div>
        <div className="flex gap-4">
             <button className="text-[10px] font-black uppercase text-indigo-600 hover:underline">Download Master Index</button>
             <button className="text-[10px] font-black uppercase text-slate-400 hover:text-slate-900">Compliance Summary</button>
        </div>
      </footer>
    </div>
  );
}

/* UI SUB-COMPONENTS */

function RegistryStat({ label, val, color, alert }: any) {
    return (
        <Card className="rounded-3xl border-slate-100 bg-white p-6 shadow-sm group hover:shadow-xl transition-all duration-500 overflow-hidden relative">
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/topography.png')]" />
            <p className="text-[9px] font-black uppercase text-slate-400 tracking-widest mb-1 relative z-10">{label}</p>
            <p className={`text-2xl font-black tracking-tighter relative z-10 ${color}`}>{val}</p>
            {alert && <div className="absolute top-4 right-4 h-1.5 w-1.5 rounded-full bg-red-500 animate-ping" />}
        </Card>
    )
}

function EducationRow({ sl, id, name, type, category, district, status, phys, digi, nodal, contact, alert, warning, success }: any) {
    const statusColor = alert ? 'bg-red-500' : warning ? 'bg-orange-500' : success ? 'bg-green-500' : 'bg-blue-400';
    
    return (
        <TableRow className="border-none hover:bg-slate-50 transition-all group cursor-pointer font-sans">
            <TableCell className="px-8 py-6">
                <span className="text-[10px] font-black text-slate-300">#{sl}</span>
            </TableCell>
            <TableCell>
                <span className="text-[10px] font-mono font-black text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded-md uppercase">{id}</span>
                <p className="text-sm font-black text-slate-800 uppercase tracking-tight mt-2 leading-none">{name}</p>
            </TableCell>
            <TableCell>
                <div className="space-y-1">
                    <Badge className="bg-slate-100 text-slate-500 border-none font-black text-[8px] uppercase tracking-tighter px-2">{type}</Badge>
                    <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">{category}</p>
                </div>
            </TableCell>
            <TableCell className="text-center text-[10px] font-bold text-slate-800 uppercase tracking-tighter">{district}</TableCell>
            <TableCell className="text-center">
                <Badge className={`rounded-full px-3 py-0.5 text-[8px] font-black uppercase border-none shadow-none ${alert ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
                    {status}
                </Badge>
            </TableCell>
            <TableCell className="text-center">
                <AccessBadge label={phys} />
            </TableCell>
            <TableCell className="text-center">
                <AccessBadge label={digi} />
            </TableCell>
            <TableCell className="text-right px-8">
                <div className="space-y-1">
                    <p className="text-[11px] font-black text-slate-900 uppercase leading-none">{nodal}</p>
                    <p className="text-[9px] font-bold text-slate-400 uppercase tracking-tighter">{contact}</p>
                </div>
            </TableCell>
        </TableRow>
    )
}

function AccessBadge({ label }: { label: string }) {
    const color = label === 'COMPLIANT' ? 'bg-green-50 text-green-700' : label === 'PARTIAL' ? 'bg-orange-50 text-orange-600' : 'bg-red-50 text-red-600';
    return (
        <Badge className={`border-none font-black text-[8px] uppercase px-2 py-0.5 tracking-tighter shadow-none ${color}`}>
            {label}
        </Badge>
    );
}