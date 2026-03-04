// app/dashboard/ccpd/fact-sheets/district/page.tsx
"use client";
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow 
} from "@/components/ui/table";
import { 
  Map, Globe, Download, FileText, 
  Printer, ShieldCheck, Search, Filter,
  Users, Building2, Gavel, Briefcase,
  GraduationCap, Accessibility, Scale, 
  History, Clock, AlertTriangle, TrendingUp,
  MapPin, CheckCircle2, Siren, LayoutGrid,
  ChevronDown, Activity, BadgeCheck, Zap,
  Landmark, FileSpreadsheet, Timer,
  MessageSquare,
  ArrowUpRight
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { 
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue 
} from "@/components/ui/select";

export default function DistrictFactSheet() {
  return (
    <div className="space-y-12 animate-in fade-in duration-1000 pb-20 font-sans selection:bg-indigo-100 bg-[#fbfcfd]">
      
      {/* PRIMARY DISTRICT FILTER HUB - CARBON FIBER TEXTURE */}
      <Card className="rounded-[40px] border-none bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 p-1 relative overflow-hidden shadow-2xl shadow-indigo-100">
        <div className="absolute inset-0 opacity-15 pointer-events-none"
             style={{ backgroundImage: `radial-gradient(black 2px, transparent 0)`, backgroundSize: '4px 4px' }} />
        <div className="bg-white rounded-[38px] p-10 relative z-10 flex flex-col xl:flex-row justify-between items-end gap-12">
            
            <div className="flex-1 space-y-8">
                <div className="flex items-center gap-6">
                    <div className="h-20 w-20 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl flex items-center justify-center text-white shadow-xl">
                        <MapPin size={38} />
                    </div>
                    <div className="space-y-3 flex-1">
                        <p className="text-[10px] font-black uppercase text-indigo-600 tracking-[0.3em] ml-1 leading-none">Administrative Discovery Node</p>
                        <Select defaultValue="lko">
                            <SelectTrigger className="w-full h-16 py-6 border-2 border-slate-200 bg-slate-50 rounded-2xl px-6 text-2xl font-black text-slate-900 uppercase tracking-tighter shadow-inner focus:ring-2 focus:ring-indigo-500 transition-all">
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent className="rounded-2xl border-2 border-slate-100 font-bold shadow-2xl">
                                <SelectItem value="lko">Lucknow Urban Hub [DIST-UP-01]</SelectItem>
                                <SelectItem value="vns">Varanasi Region Node [DIST-UP-04]</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <HeaderParam label="Reporting Window" defaultValue="90" options={['Last 90 Days', 'Last 180 Days']} />
                    <HeaderParam label="State Hub Node" defaultValue="up" options={['Uttar Pradesh', 'Maharashtra']} />
                    <HeaderParam label="Data Aggregation" defaultValue="all" options={['Consolidated Registry', 'Live Operational']} />
                </div>
            </div>

            <div className="flex flex-col gap-4 min-w-[320px] relative z-10">
                <div className="bg-slate-50 border-2 border-slate-100 p-6 rounded-[32px] shadow-sm flex flex-col items-center text-center">
                    <Activity size={24} className="text-blue-600 mb-2 animate-pulse" />
                    <p className="text-[9px] font-black uppercase text-slate-400 tracking-widest">Last District Data Sync</p>
                    <p className="text-xl font-black text-slate-900 uppercase tracking-tighter">14 Oct 2024, 10:42 AM</p>
                </div>
                <div className="flex gap-3">
                    <Button variant="outline" className="flex-1 h-12 rounded-xl border-2 border-slate-200 font-bold bg-white gap-2 shadow-sm text-[9px] uppercase tracking-widest hover:bg-slate-50 transition-all"><FileSpreadsheet size={16} className="text-green-600" /> Export XLS</Button>
                    <Button className="flex-1 h-12 rounded-xl bg-slate-950 text-white font-black uppercase tracking-widest text-[9px] shadow-lg gap-2 group border-t border-white/10">
                        <Printer size={16} /> Print Brief <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                    </Button>
                </div>
            </div>
        </div>
      </Card>

      {/* STATUTORY PERFORMANCE GRID (TABLES 1-4) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* TABLE 1: COVERAGE */}
        <StatTableCard title="Inclusion Coverage" gradient="from-blue-600 via-blue-700 to-indigo-800" icon={<Users/>}>
            <StatRow label="Total PwDs in District" val="14,502" mono />
            <StatRow label="Establishments (Govt / Private)" val="482 Units" />
            <StatRow label="Educational Institutions" val="842 Nodes" success />
            <StatRow label="Registered Institutions (NGOs)" val="114 Units" />
        </StatTableCard>

        {/* TABLE 2: GRIEVANCES */}
        <StatTableCard title="Grievance SLA Hub" gradient="from-purple-600 via-purple-700 to-indigo-800" icon={<MessageSquare/>}>
            <StatRow label="Total Grievances Received" val="1,240" />
            <StatRow label="Resolved / Closed Registry" val="1,156" success />
            <StatRow label="Pending Within Timeline" val="72 Nodes" />
            <StatRow label="Pending Beyond Timeline (Overdue)" val="12 Units" alert />
        </StatTableCard>

        {/* TABLE 3: DIRECTIONS */}
        <StatTableCard title="Statutory Directions" gradient="from-indigo-700 via-blue-800 to-slate-900" icon={<Gavel/>}>
            <StatRow label="Total Directions Issued" val="45 Orders" />
            <StatRow label="Verified Complied" val="32 Orders" success />
            <StatRow label="Pending Within Timeline" val="08 Nodes" />
            <StatRow label="Overdue Directions" val="05 Orders" alert />
        </StatTableCard>

        {/* TABLE 4: EMPLOYMENT & VACANCY */}
        <StatTableCard title="Workforce & Reservation" gradient="from-emerald-600 via-teal-700 to-blue-800" icon={<Briefcase/>}>
            <StatRow label="Total District Employees" val="124K" />
            <StatRow label="PwD Workforce (State returns)" val="5,210" />
            <StatRow label="PwD Employment % (auto)" val="4.2%" success />
            <div className="grid grid-cols-3 gap-2 mt-4">
                <MetricBox label="Identified" val="1,450" />
                <MetricBox label="Filled" val="820" />
                <MetricBox label="Pending" val="630" alert />
            </div>
        </StatTableCard>

      </div>

      {/* TABLE 5: EMPLOYMENT EXCHANGE RETURNS REGISTRY */}
      <Card className="rounded-[48px] border-2 border-slate-200 shadow-sm overflow-hidden bg-white">
        <CardHeader className="p-0">
            <div className="p-10 bg-gradient-to-r from-orange-500 via-amber-600 to-orange-700 text-white relative overflow-hidden">
                {/* CARBON FIBER TEXTURE OVERLAY */}
                <div className="absolute inset-0 opacity-20 pointer-events-none" 
                     style={{ backgroundImage: `radial-gradient(black 2px, transparent 0)`, backgroundSize: '4px 4px' }} />
                
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 relative z-10">
                    <div className="flex items-center gap-4">
                        <div className="h-12 w-12 rounded-2xl bg-white/10 backdrop-blur-md border-2 border-white/20 flex items-center justify-center shadow-xl">
                            <History size={24} />
                        </div>
                        <CardTitle className="text-sm font-black uppercase tracking-[0.3em] leading-none">TABLE 5: EMPLOYMENT EXCHANGE RETURNS SUMMARY</CardTitle>
                    </div>
                </div>
            </div>
        </CardHeader>
        <CardContent className="p-0">
            <Table>
                <TableHeader className="bg-slate-50/80 font-sans border-b-2 border-slate-100">
                    <TableRow className="border-none">
                        <TableHead className="px-10 py-6 text-[9px] font-black uppercase tracking-widest text-slate-400">Establishment Node</TableHead>
                        <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400 text-center">Return Type</TableHead>
                        <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400 text-center">Due Date</TableHead>
                        <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400 text-center">Submission Date</TableHead>
                        <TableHead className="text-right px-10 text-[9px] font-black uppercase tracking-widest text-slate-400">Compliance status</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody className="divide-y divide-slate-100 font-sans">
                    <ReturnsRow name="HDFC Regional Hub" type="Six-Monthly" due="31 Jul 24" sub="28 Jul 24" status="SUBMITTED" success />
                    <ReturnsRow name="Municipal Corp LKO" type="Annual" due="30 Apr 24" sub="--" status="NOT SUBMITTED" alert />
                    <ReturnsRow name="Secondary School-B" type="Six-Monthly" due="31 Jul 24" sub="12 Aug 24" status="OVERDUE" warning />
                </TableBody>
            </Table>
        </CardContent>
      </Card>

      {/* FOOTER ACTIONS */}
      <footer className="pt-12 border-t-2 border-slate-200 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-4">
            <BadgeCheck className="text-indigo-600 shadow-xl" size={24} />
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 leading-none uppercase">District Snapshot Node v5.2 • Aggregated Statewide Sync Verified</span>
        </div>
        <div className="flex gap-4">
            <Button variant="outline" className="h-14 px-8 rounded-2xl border-2 border-slate-200 font-bold bg-white gap-2 text-[10px] uppercase tracking-widest hover:bg-slate-50 transition-all"><History size={18} /> View Multi-Node Timeline</Button>
            <Button className="h-14 px-10 rounded-2xl bg-slate-950 text-white font-black uppercase tracking-widest text-[10px] shadow-2xl hover:bg-black transition-all group border-t border-white/10">
                <Globe size={18} className="text-blue-400" /> State Coordination Node
            </Button>
        </div>
      </footer>
    </div>
  );
}

/* UI SUB-COMPONENTS */

function HeaderParam({ label, options, defaultValue }: any) {
    return (
        <div className="space-y-3">
            <label className="text-[9px] font-black uppercase text-slate-400 ml-1 tracking-widest leading-none">{label}</label>
            <Select defaultValue={defaultValue}>
                <SelectTrigger className="w-full h-12 py-6 border-2 border-slate-200 bg-slate-50 rounded-2xl px-6 font-bold text-slate-800 text-[10px] uppercase shadow-inner focus:ring-2 focus:ring-indigo-500">
                    <SelectValue />
                </SelectTrigger>
                <SelectContent className="rounded-2xl border-2 border-slate-200 shadow-2xl">
                    {options.map((opt: string) => (
                        <SelectItem key={opt} value={opt.toLowerCase()} className="font-bold text-[10px] uppercase py-3">{opt}</SelectItem>
                    ))}
                </SelectContent>
            </Select>
        </div>
    )
}

function StatTableCard({ title, icon, gradient, children }: any) {
    return (
        <Card className="rounded-[44px] border-2 border-slate-200 bg-white shadow-sm overflow-hidden group hover:shadow-2xl transition-all duration-500 h-full flex flex-col">
            <CardHeader className={`p-8 bg-gradient-to-r ${gradient} text-white relative overflow-hidden`}>
                {/* CARBON FIBER TEXTURE OVERLAY */}
                <div className="absolute inset-0 opacity-20 pointer-events-none"
                     style={{ backgroundImage: `radial-gradient(black 2px, transparent 0)`, backgroundSize: '4px 4px' }} />
                <div className="flex items-center justify-between relative z-10">
                    <div className="flex items-center gap-4">
                        <div className="h-10 w-10 rounded-2xl bg-white/20 backdrop-blur-md border-2 border-white/20 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500">
                            {icon}
                        </div>
                        <CardTitle className="text-[11px] font-black uppercase tracking-[0.3em] leading-none text-white uppercase">{title}</CardTitle>
                    </div>
                </div>
            </CardHeader>
            <CardContent className="p-10 flex-1 space-y-6 relative overflow-hidden">
                <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/topography.png')]" />
                <div className="relative z-10 space-y-5">
                    {children}
                </div>
            </CardContent>
        </Card>
    )
}

function StatRow({ label, val, alert, success, mono }: any) {
    const colorClass = alert ? 'text-red-600 underline decoration-red-100 decoration-2' : success ? 'text-emerald-600' : 'text-slate-900';
    return (
        <div className="flex justify-between items-end group/row cursor-default">
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest group-hover/row:text-blue-600 transition-colors uppercase">{label}</p>
            <p className={`text-2xl font-black tracking-tighter leading-none ${colorClass} ${mono ? 'font-mono text-sm' : ''}`}>{val}</p>
        </div>
    )
}

function MetricBox({ label, val, alert }: any) {
    return (
        <div className="bg-slate-50 border-2 border-slate-100 p-4 rounded-2xl text-center shadow-inner group hover:bg-white hover:border-blue-100 transition-all">
            <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-1">{label}</p>
            <p className={`text-sm font-black ${alert ? 'text-red-600' : 'text-slate-900'}`}>{val}</p>
        </div>
    )
}

function ReturnsRow({ name, type, due, sub, status, success, warning, alert }: any) {
    const statusColor = success ? 'bg-green-600 text-white shadow-green-200' : alert ? 'bg-red-600 text-white animate-pulse shadow-red-200' : 'bg-orange-500 text-white shadow-orange-200';
    return (
        <TableRow className="border-none hover:bg-slate-50 transition-all group cursor-default">
            <TableCell className="px-10 py-8">
                <div className="flex items-center gap-3">
                    <Building2 className="text-slate-300" size={18} />
                    <span className="text-sm font-black text-slate-950 uppercase tracking-tight leading-none">{name}</span>
                </div>
            </TableCell>
            <TableCell className="text-center">
                <Badge className="bg-slate-100 text-slate-500 border-2 border-slate-200 font-black text-[8px] uppercase px-3">{type}</Badge>
            </TableCell>
            <TableCell className="text-center font-mono font-bold text-slate-500 text-[10px] uppercase">{due}</TableCell>
            <TableCell className="text-center font-mono font-bold text-slate-700 text-[10px] uppercase">{sub}</TableCell>
            <TableCell className="text-right px-10">
                <Badge className={`rounded-full px-5 py-2 text-[8px] font-black uppercase border-none shadow-lg tracking-widest ${statusColor}`}>
                    {status}
                </Badge>
            </TableCell>
        </TableRow>
    )
}