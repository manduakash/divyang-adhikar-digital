// app/dashboard/scpd/oversight/registered-orgs/page.tsx
"use client";
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Landmark, ShieldCheck, Search, Filter, Printer, 
  FileSpreadsheet, ArrowUpRight, Globe, Map, Sparkles, 
  CheckCircle2, AlertTriangle, Building2, Activity,
  History, BadgeCheck, FileText, Calendar, MapPin,
  Briefcase, Download, Plus, MoreHorizontal
} from "lucide-react";
import { 
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow 
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

export default function RegisteredInstitutionOversight() {
  
  // Section A3.11 Aggregation Mock Data
  const registryStats = {
    totalRegistered: "2,140",
    newThisFY: "142",
    activeNodes: "1,980",
    complianceAlerts: "24"
  };

  return (
    <div className="space-y-10 animate-in fade-in duration-700 pb-20 font-sans">
      
      {/* 1. APEX ADMINISTRATIVE HEADER */}
      <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-6 mb-10 bg-white p-10 rounded-[40px] border border-slate-200 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 p-10 opacity-[0.03] pointer-events-none">
            <Landmark size={180} className="text-indigo-600" />
        </div>
        <div className="space-y-2 relative z-10">
          <div className="flex items-center gap-2 text-indigo-600 font-black uppercase text-[10px] tracking-[0.2em]">
            <BadgeCheck size={14} /> Commission Hub / A3.11 Registered Oversight
          </div>
          <h1 className="text-4xl font-black text-slate-900 tracking-tighter uppercase leading-none">Organization Registry</h1>
          <p className="text-slate-500 font-medium italic">Statutory monitoring of NGOs, Rehab Centers, and PwD Service Providers.</p>
        </div>
        <div className="flex gap-4 relative z-10">
            <Button variant="outline" className="h-16 px-8 rounded-3xl border-slate-200 font-black uppercase tracking-widest text-[10px] bg-white hover:bg-slate-50 shadow-xl">
                <FileSpreadsheet size={18} className="mr-2 text-green-600" /> State XLS Export
            </Button>
            <Button className="h-16 px-10 rounded-3xl bg-indigo-900 text-white font-black uppercase tracking-widest text-[10px] shadow-2xl hover:bg-black transition-all gap-2 group">
                <Plus size={18} /> New Registration
            </Button>
        </div>
      </div>

      {/* 2. STATUTORY KPI TILES (High Contrast Gradients) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatTile label="Total Registered Orgs" value={registryStats.totalRegistered} icon={<Landmark/>} color="from-slate-700 via-slate-800 to-slate-950" />
        <StatTile label="New Registrations (FY)" value={registryStats.newThisFY} icon={<History/>} color="from-blue-600 via-blue-700 to-indigo-900" />
        <StatTile label="Active Service Nodes" value={registryStats.activeNodes} icon={<Globe/>} color="from-emerald-600 via-teal-700 to-green-800" />
        <StatTile label="Compliance Alerts" value={registryStats.complianceAlerts} icon={<AlertTriangle/>} color="from-red-600 via-rose-700 to-red-800" alert />
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-start">
        
        {/* 3. ORGANIZATION REGISTRY (Section A3.11 Data Fields) */}
        <div className="xl:col-span-12">
            <Card className="rounded-[40px] border-slate-200 shadow-sm overflow-hidden bg-white min-h-[700px]">
                <CardHeader className="p-8 border-b border-slate-50 bg-slate-50/30 flex flex-row justify-between items-center">
                    <div className="flex gap-4 items-center">
                        <CardTitle className="text-sm font-black uppercase tracking-widest text-slate-400 leading-none">A3.11 Statewide NGO/Rehab Registry</CardTitle>
                        <Badge className="bg-indigo-50 text-indigo-700 border-none text-[8px] font-black uppercase tracking-widest px-3">Sync Status: Live</Badge>
                    </div>
                    <div className="flex gap-4">
                         <div className="relative group">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-300 group-focus-within:text-indigo-600" />
                            <input className="pl-11 pr-4 py-3 bg-white border border-slate-200 rounded-2xl text-[10px] font-bold outline-none w-80 shadow-inner focus:ring-2 focus:ring-indigo-100" placeholder="Search by Reg No, Name or Category..." />
                         </div>
                         <Button variant="outline" className="rounded-2xl border-slate-200 font-black uppercase text-[10px] tracking-widest px-6 h-12 bg-white"><Filter size={16} className="mr-2"/> Category Filter</Button>
                    </div>
                </CardHeader>
                <CardContent className="p-0">
                    <Table>
                        <TableHeader className="bg-white">
                            <TableRow className="border-slate-100">
                                <TableHead className="px-8 py-6 text-[9px] font-black uppercase tracking-widest text-slate-400">Institution ID & Name</TableHead>
                                <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400">Reg. Number & Date</TableHead>
                                <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400">Category / District</TableHead>
                                <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400 text-center">Status</TableHead>
                                <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400">Compliance Notes</TableHead>
                                <TableHead className="text-right px-8"></TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody className="divide-y divide-slate-50">
                            <OrgRow 
                                id="REG-ORG-9901" 
                                name="Divyang Kalyan Samiti" 
                                regNo="RPWD/NGO/2022/441"
                                regDate="12 Oct 2022"
                                category="NGO (Advocacy)"
                                district="Lucknow"
                                status="ACTIVE"
                                note="Annual returns filed for FY 23-24."
                                success
                            />
                            <OrgRow 
                                id="REG-ORG-0042" 
                                name="Varanasi Rehab Center" 
                                regNo="RPWD/RC/2021/012"
                                regDate="05 Jan 2021"
                                category="Rehab Center"
                                district="Varanasi"
                                status="ACTIVE"
                                note="Physical access audit pending."
                                warning
                            />
                            <OrgRow 
                                id="REG-ORG-8812" 
                                name="Ability First Foundation" 
                                regNo="RPWD/NGO/2020/998"
                                regDate="18 Sep 2020"
                                category="Vocational Training"
                                district="Meerut"
                                status="INACTIVE"
                                note="Registration expired - Renewal pending."
                                alert
                            />
                            <OrgRow 
                                id="REG-ORG-4491" 
                                name="Sunshine Special School" 
                                regNo="RPWD/EDU/2023/112"
                                regDate="20 Aug 2023"
                                category="Special School"
                                district="Gautam Buddha Ngr"
                                status="ACTIVE"
                                note="Facility verified by District Nodal."
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

function StatTile({ label, value, icon, color, alert }: any) {
    return (
        <div className={`group relative text-left p-7 rounded-[32px] overflow-hidden transition-all duration-500 h-44 flex flex-col justify-between shadow-md hover:shadow-xl hover:-translate-y-1 bg-gradient-to-br ${color} text-white border-t border-white/20`}>
            {/* Pattern Overlays */}
            <div className="absolute inset-0 opacity-[0.08] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/topography.png')]" />
            <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
            
            <div className="relative z-10 flex flex-col justify-between h-full">
                <div className="h-10 w-10 rounded-xl bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform">
                    {React.cloneElement(icon, { size: 18, className: "text-white drop-shadow-md" })}
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

function OrgRow({ id, name, regNo, regDate, category, district, status, note, alert, warning, success }: any) {
    const statusColor = alert ? 'bg-red-500' : warning ? 'bg-orange-500' : 'bg-green-500';
    
    return (
        <TableRow className="border-none hover:bg-slate-50 transition-all group cursor-pointer font-sans">
            <TableCell className="px-8 py-6">
                <span className="text-[11px] font-mono font-black text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded-md">{id}</span>
                <p className="text-sm font-black text-slate-800 uppercase tracking-tight mt-2 leading-none">{name}</p>
            </TableCell>
            <TableCell>
                <div className="space-y-1">
                    <p className="text-[10px] font-mono font-bold text-slate-600 uppercase tracking-tighter">{regNo}</p>
                    <div className="flex items-center gap-1.5">
                        <Calendar size={10} className="text-slate-300" />
                        <span className="text-[9px] font-bold text-slate-400 uppercase">{regDate}</span>
                    </div>
                </div>
            </TableCell>
            <TableCell>
                <div className="space-y-1">
                    <p className="text-[10px] font-black text-indigo-600 uppercase tracking-widest">{category}</p>
                    <div className="flex items-center gap-1.5">
                        <MapPin size={10} className="text-slate-300" />
                        <span className="text-[10px] font-bold text-slate-400 uppercase">{district}</span>
                    </div>
                </div>
            </TableCell>
            <TableCell className="text-center">
                <Badge className={`rounded-full px-3 py-0.5 text-[8px] font-black uppercase border-none shadow-none ${alert ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
                    {status}
                </Badge>
            </TableCell>
            <TableCell className="max-w-[200px]">
                <div className="flex items-start gap-2">
                    <FileText size={12} className={alert ? 'text-red-400' : 'text-slate-300'} />
                    <p className={`text-[10px] font-medium leading-relaxed italic ${alert ? 'text-red-600' : 'text-slate-500'}`}>{note}</p>
                </div>
            </TableCell>
            <TableCell className="text-right px-8 opacity-0 group-hover:opacity-100 transition-all">
                <div className="flex justify-end gap-2">
                    <button className="p-2 bg-slate-50 text-slate-400 rounded-xl hover:bg-slate-900 hover:text-white transition-all shadow-sm"><Download size={14}/></button>
                    <button className="p-2 bg-slate-50 text-slate-400 rounded-xl hover:bg-indigo-900 hover:text-white transition-all shadow-sm"><ArrowUpRight size={16}/></button>
                </div>
            </TableCell>
        </TableRow>
    )
}