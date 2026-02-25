// app/dashboard/scpd/reports/accessibility-compliance/page.tsx
"use client";
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow 
} from "@/components/ui/table";
import { 
  Accessibility, Globe, ShieldCheck, Search, 
  Filter, Printer, FileSpreadsheet, ArrowUpRight, 
  Camera, Link as LinkIcon, FileText, CheckCircle2, 
  AlertTriangle, History, Landmark, Timer, 
  MapPin, BadgeCheck, Download, Sparkles, 
  Eye, Zap, Activity, Building2, School
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function AccessibilityComplianceMaster() {
  
  // Statewide Aggregate Metrics
  const aggregateStats = {
    totalEntities: "45,210",
    physicallyCompliant: "34,800",
    digitallyCompliant: "12,140",
    remediationPending: "2,240"
  };

  return (
    <div className="space-y-10 animate-in fade-in duration-1000 pb-20 font-sans selection:bg-emerald-50">
      
      {/* HUB ADMINISTRATIVE HEADER */}
      <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-6 bg-white p-10 rounded-[48px] border border-slate-200 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 p-10 opacity-[0.03] pointer-events-none text-emerald-600">
            <Accessibility size={200} />
        </div>
        <div className="space-y-2 relative z-10">
          <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border border-emerald-100 shadow-sm">
            <BadgeCheck size={14} /> Sections 44-46 Oversight
          </div>
          <h1 className="text-5xl font-black text-slate-900 tracking-tighter uppercase leading-none">Accessibility Master Hub</h1>
          <p className="text-slate-500 font-medium italic text-lg tracking-tight">Consolidated Statewide Registry of Physical Infrastructure & Digital Platform Compliance.</p>
        </div>
        <div className="flex gap-4 relative z-10">
            <Button variant="outline" className="h-14 px-8 rounded-2xl border-slate-200 font-black uppercase tracking-widest text-[10px] bg-white gap-2 shadow-sm hover:bg-slate-50 transition-all">
                <FileSpreadsheet size={18} className="text-green-600" /> Export XLS
            </Button>
            <Button className="h-14 px-10 rounded-2xl bg-slate-900 text-white font-black uppercase tracking-widest text-[10px] shadow-2xl hover:bg-black transition-all gap-2 border-t border-white/20">
                <Printer size={18} /> Print Statutory Audit
            </Button>
        </div>
      </div>

      {/* COMPLIANCE KPI STRIP (Patterned Gradients) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatTile label="Entities Monitored" value={aggregateStats.totalEntities} icon={<Landmark/>} color="from-slate-700 via-slate-800 to-slate-950" />
        <StatTile label="Physically Accessible" value={aggregateStats.physicallyCompliant} icon={<Building2/>} color="from-emerald-500 via-teal-600 to-green-700" />
        <StatTile label="Digitally Accessible" value={aggregateStats.digitallyCompliant} icon={<Globe/>} color="from-blue-600 via-blue-700 to-indigo-900" />
        <StatTile label="Remediation Overdue" value={aggregateStats.remediationPending} icon={<Timer/>} color="from-red-600 via-rose-700 to-red-900" alert />
      </div>

      {/* MASTER DATA REGISTRY */}
      <Card className="rounded-[48px] border-slate-200 shadow-sm overflow-hidden bg-white">
        <CardHeader className="p-0">
            <div className="p-8 bg-gradient-to-r from-blue-600 via-indigo-600 to-emerald-600 text-white relative overflow-hidden">
                {/* CARBON FIBER TEXTURE OVERLAY */}
                <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 relative z-10">
                    <div className="flex items-center gap-4">
                        <div className="h-12 w-12 rounded-2xl bg-white/20 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-xl group-hover:rotate-6 transition-transform">
                            <ShieldCheck size={24} />
                        </div>
                        <CardTitle className="text-sm font-black uppercase tracking-[0.3em]">Statewide Statutory Access registry</CardTitle>
                    </div>
                    <div className="flex gap-4 w-full md:w-auto">
                         <div className="relative flex-1 md:w-80">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-white/50" />
                            <input className="w-full pl-11 pr-4 py-3 bg-white/10 border border-white/20 rounded-2xl text-[10px] font-black uppercase outline-none text-white placeholder:text-white/40 focus:bg-white/20 transition-all shadow-inner" placeholder="Search Entity, District or URL..." />
                         </div>
                         <Button variant="outline" size="icon" className="h-12 w-12 rounded-2xl border-white/20 bg-white/10 text-white hover:bg-white/20"><Filter size={18}/></Button>
                    </div>
                </div>
            </div>
        </CardHeader>
        <CardContent className="p-0">
            <Table>
                <TableHeader className="bg-slate-50/80 font-sans">
                    <TableRow className="border-slate-100">
                        <TableHead className="px-8 py-6 text-[9px] font-black uppercase tracking-widest text-slate-400">District Hub</TableHead>
                        <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400">Entity Details</TableHead>
                        <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400 text-center">Physical Status</TableHead>
                        <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400 text-center">Digital Status</TableHead>
                        <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400 text-center">Assessment Timeline</TableHead>
                        <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400 text-center">Compliance Due</TableHead>
                        <TableHead className="text-right px-8 text-[9px] font-black uppercase tracking-widest text-slate-400">Evidence Vault</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody className="divide-y divide-slate-50">
                    <AccessRegistryRow 
                        district="Lucknow"
                        type="Establishment"
                        name="HDFC Regional Hub"
                        phys="COMPLIANT"
                        digi="PARTIAL"
                        lastAudit="12 Oct 24"
                        due="Verified"
                        remarks="Web remediation pending"
                        success
                    />
                    <AccessRegistryRow 
                        district="Meerut"
                        type="Institution"
                        name="Secondary School-B"
                        phys="NON-COMP"
                        digi="NON-COMP"
                        lastAudit="05 Sep 24"
                        due="30 Oct 2024"
                        remarks="Critical structural gaps"
                        alert
                    />
                    <AccessRegistryRow 
                        district="Varanasi"
                        type="Establishment"
                        name="Municipal Corp Node"
                        phys="PARTIAL"
                        digi="COMPLIANT"
                        lastAudit="20 Sep 24"
                        due="15 Nov 2024"
                        remarks="Ramp width below 900mm"
                        warning
                    />
                    <AccessRegistryRow 
                        district="Kolkata"
                        type="Institution"
                        name="City University Hub"
                        phys="COMPLIANT"
                        digi="COMPLIANT"
                        lastAudit="14 Oct 24"
                        due="Verified"
                        remarks="All standards met"
                        success
                    />
                </TableBody>
            </Table>
        </CardContent>
      </Card>

      {/* FOOTER AUDIT NOTICE */}
      <footer className="flex justify-between items-center pt-8 border-t border-slate-200">
        <div className="flex items-center gap-4 text-slate-400">
            <Activity size={18} className="text-emerald-600 animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-widest leading-none">Statutory Barrier Audit: 45,210 Nodes Aggregate Analysis Active</span>
        </div>
        <div className="flex gap-6">
             <button className="text-[10px] font-black uppercase text-emerald-600 hover:underline transition-all">Download Audit Evidence ZIP</button>
             <button className="text-[10px] font-black uppercase text-slate-400 hover:text-slate-900">Accessibility Manual v3.2</button>
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

function AccessRegistryRow({ district, type, name, phys, digi, lastAudit, due, remarks, alert, warning, success }: any) {
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
                <div className="space-y-1">
                    <p className="text-sm font-black text-slate-800 uppercase tracking-tight leading-none">{name}</p>
                    <div className="flex items-center gap-2 text-slate-400">
                        {type === 'Institution' ? <School size={10} /> : <Building2 size={10} />}
                        <span className="text-[9px] font-bold uppercase tracking-tighter">{type}</span>
                    </div>
                </div>
            </TableCell>
            <TableCell className="text-center">
                <AccessStatusBadge label={phys} />
            </TableCell>
            <TableCell className="text-center">
                <AccessStatusBadge label={digi} />
            </TableCell>
            <TableCell className="text-center">
                <p className="text-[10px] font-bold text-slate-500 uppercase">{lastAudit}</p>
                <p className="text-[7px] font-black text-slate-300 mt-1 uppercase">Assessed</p>
            </TableCell>
            <TableCell className="text-center">
                <span className={`text-[11px] font-mono font-black ${alert ? 'text-red-600 underline' : success ? 'text-green-600' : 'text-slate-900'}`}>{due}</span>
            </TableCell>
            <TableCell className="text-right px-8">
                <div className="flex flex-col items-end">
                    <p className={`text-[10px] font-medium leading-relaxed italic ${alert ? 'text-red-600' : 'text-slate-500'}`}>{remarks}</p>
                    <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-all mt-2">
                        <button title="View Photo Evidence" className="p-1.5 bg-slate-100 text-slate-400 rounded-lg hover:bg-indigo-900 hover:text-white transition-all"><Camera size={12}/></button>
                        <button title="Inspect Digital URL" className="p-1.5 bg-slate-100 text-slate-400 rounded-lg hover:bg-indigo-900 hover:text-white transition-all"><Globe size={12}/></button>
                        <button title="View Audit Report" className="p-1.5 bg-slate-100 text-slate-400 rounded-lg hover:bg-slate-900 hover:text-white transition-all"><FileText size={12}/></button>
                    </div>
                </div>
            </TableCell>
        </TableRow>
    )
}

function AccessStatusBadge({ label }: { label: string }) {
    const color = label === 'COMPLIANT' ? 'bg-green-50 text-green-700' : label === 'PARTIAL' ? 'bg-orange-50 text-orange-600' : 'bg-red-50 text-red-600';
    return (
        <Badge className={`border-none font-black text-[8px] uppercase px-2.5 py-1 tracking-tighter shadow-none ${color}`}>
            {label}
        </Badge>
    );
}