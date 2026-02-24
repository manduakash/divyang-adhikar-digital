// app/dashboard/scpd/functional-actions/page.tsx
"use client";
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Accessibility, Briefcase, GraduationCap, ShieldAlert, 
  Megaphone, Search, Filter, Printer, Download,
  ArrowUpRight, Globe, Activity, CheckCircle2,
  AlertTriangle, History, Timer, Landmark,
  Sparkles, ListChecks, FileText, Plus, 
  MoreHorizontal, BadgeCheck, FileCheck,
  TrendingUp
} from "lucide-react";
import { 
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow 
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

type FunctionalArea = 'ALL' | 'ACCESSIBILITY' | 'EMPLOYMENT' | 'EDUCATION' | 'DISASTER' | 'AWARENESS';

export default function FunctionalActionsHub() {
  const [filter, setFilter] = useState<FunctionalArea>('ALL');

  return (
    <div className="space-y-10 animate-in fade-in duration-700 pb-20 font-sans">
      
      {/* 1. APEX ADMINISTRATIVE HEADER */}
      <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-6 mb-10 bg-white p-10 rounded-[40px] border border-slate-200 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 p-10 opacity-[0.03] pointer-events-none">
            <Activity size={180} className="text-indigo-600" />
        </div>
        <div className="space-y-2 relative z-10">
          <div className="flex items-center gap-2 text-indigo-600 font-black uppercase text-[10px] tracking-[0.2em]">
            <BadgeCheck size={14} /> Statutory Oversight / A3.5 Functional Actions
          </div>
          <h1 className="text-4xl font-black text-slate-900 tracking-tighter uppercase leading-none">Functional Action Hub</h1>
          <p className="text-slate-500 font-medium italic">Tracking direct Commissioner interventions across statutory PwD domains.</p>
        </div>
        <div className="flex gap-4 relative z-10">
            <Button variant="outline" className="h-16 px-8 rounded-3xl border-slate-200 font-black uppercase tracking-widest text-[10px] bg-white hover:bg-slate-50 shadow-xl">
                <History size={18} className="mr-2" /> Performance Log
            </Button>
            <Button className="h-16 px-10 rounded-3xl bg-indigo-900 text-white font-black uppercase tracking-widest text-[10px] shadow-2xl hover:bg-black transition-all gap-2">
                <Plus size={18} /> Record New Action
            </Button>
        </div>
      </div>

      {/* 2. FUNCTIONAL AREA SELECTOR (Patterned KPI Tiles) */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        <AreaTile active={filter === 'ALL'} onClick={() => setFilter('ALL')} label="All Actions" count="214" icon={<ListChecks/>} color="from-slate-700 via-slate-800 to-slate-950" />
        <AreaTile active={filter === 'ACCESSIBILITY'} onClick={() => setFilter('ACCESSIBILITY')} label="Accessibility" count="84" icon={<Accessibility/>} color="from-blue-600 via-blue-700 to-indigo-900" />
        <AreaTile active={filter === 'EMPLOYMENT'} onClick={() => setFilter('EMPLOYMENT')} label="Employment" count="42" icon={<Briefcase/>} color="from-emerald-500 via-teal-600 to-green-800" />
        <AreaTile active={filter === 'EDUCATION'} onClick={() => setFilter('EDUCATION')} label="Education" count="56" icon={<GraduationCap/>} color="from-indigo-600 via-indigo-700 to-purple-900" />
        <AreaTile active={filter === 'DISASTER'} onClick={() => setFilter('DISASTER')} label="Disaster" count="12" icon={<ShieldAlert/>} color="from-orange-500 via-amber-600 to-orange-800" />
        <AreaTile active={filter === 'AWARENESS'} onClick={() => setFilter('AWARENESS')} label="Awareness" count="20" icon={<Megaphone/>} color="from-rose-500 via-rose-600 to-rose-800" />
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-start">
        
        {/* 3. ACTION TRACKER REGISTRY (Section A3.5 Mandated Output) */}
        <div className="xl:col-span-8">
            <Card className="rounded-[40px] border-slate-200 shadow-sm overflow-hidden bg-white min-h-[700px]">
                <CardHeader className="p-8 border-b border-slate-50 bg-slate-50/30 flex flex-row justify-between items-center">
                    <CardTitle className="text-xs font-black uppercase tracking-widest text-slate-400">A3.5 Statutory Action Tracker</CardTitle>
                    <div className="flex gap-3">
                         <div className="relative group">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-300 group-focus-within:text-indigo-600" />
                            <input className="pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-2xl text-[10px] font-bold outline-none w-64 shadow-inner" placeholder="Search by Action ID..." />
                         </div>
                    </div>
                </CardHeader>
                <CardContent className="p-0">
                    <Table>
                        <TableHeader className="bg-white">
                            <TableRow className="border-slate-100">
                                <TableHead className="px-8 py-6 text-[9px] font-black uppercase tracking-widest text-slate-400">Action ID</TableHead>
                                <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400">Functional Domain</TableHead>
                                <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400">Responsible Node</TableHead>
                                <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400 text-center">Status</TableHead>
                                <TableHead className="text-right px-8 text-[9px] font-black uppercase tracking-widest text-slate-400">Outcome</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody className="divide-y divide-slate-50">
                            <ActionRow 
                                id="ACT-UP-ACC-042" 
                                domain="Accessibility"
                                target="Lucknow Metro Rail"
                                desc="Direct intervention for tactile flooring sync."
                                status="COMPLETED"
                                outcome="12 Stations Audited"
                                success
                            />
                            <ActionRow 
                                id="ACT-UP-EMP-018" 
                                domain="Employment"
                                target="State Power Corp"
                                desc="Audit of 4% Reservation Backlog."
                                status="IN PROGRESS"
                                outcome="Notices Dispatched"
                            />
                            <ActionRow 
                                id="ACT-UP-EDU-901" 
                                domain="Education"
                                target="District Basic Edu Officer"
                                desc="Special drive for Scribe provision in board exams."
                                status="OVERDUE"
                                outcome="Awaiting Response"
                                alert
                            />
                            <ActionRow 
                                id="ACT-UP-DIS-004" 
                                domain="Disaster"
                                target="SDMA State Node"
                                desc="Validation of PwD tags in coastal regions."
                                status="VERIFIED"
                                outcome="High-Risk PwDs Mapped"
                                success
                            />
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>

        {/* 4. PERFORMANCE INPUTS & AI SIDEBAR */}
        <div className="xl:col-span-4 space-y-8 sticky top-28 h-fit">
            
            {/* PERFORMANCE INPUTS (For Annual Report) */}
            <Card className="rounded-[40px] border-none bg-slate-900 text-white p-8 shadow-2xl relative overflow-hidden group">
                <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/circuit-board.png')]" />
                <div className="relative z-10 space-y-6">
                    <div className="flex items-center gap-3 text-purple-400">
                        <TrendingUp size={18} />
                        <h3 className="text-[10px] font-black uppercase tracking-widest">Annual Report Feed</h3>
                    </div>
                    <p className="text-sm font-bold leading-tight uppercase">Outcome Summarization Active</p>
                    <p className="text-[10px] font-medium text-slate-400 leading-relaxed uppercase tracking-tighter italic">
                        "08 high-impact actions from this hub have been flagged as 'Inputs for Special Reports'."
                    </p>
                    <div className="pt-4 border-t border-white/10">
                         <div className="flex justify-between items-center mb-4">
                            <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">Impact Factor</span>
                            <span className="text-lg font-black text-white">8.4/10</span>
                         </div>
                         <Button className="w-full h-12 bg-white text-slate-900 hover:bg-purple-50 rounded-2xl font-black uppercase tracking-widest text-[9px] shadow-lg transition-all">
                             Sync to Annual Report Draft
                         </Button>
                    </div>
                </div>
            </Card>

            <Card className="rounded-[40px] border-slate-200 p-8 bg-white shadow-sm relative overflow-hidden">
                <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/graphy.png')]" />
                <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-6 border-b pb-4">Statutory Protocols</h4>
                <div className="space-y-6">
                    <ProtocolStep text="Ensure Action Description cites specific PwD Act Sections." />
                    <ProtocolStep text="Upload Outcome Proof (Photographs/Orders)." />
                    <ProtocolStep text="Outcome Notes must be auditable by CCPD." />
                    <ProtocolStep text="Timeline breaches flag the Secretary instantly." />
                </div>
            </Card>

            <div className="p-6 bg-blue-50 rounded-[32px] border border-blue-100 flex gap-4">
                <Globe className="text-blue-600 shrink-0" size={20} />
                <p className="text-[9px] font-bold text-blue-800 leading-normal uppercase">
                    Data recorded in this hub is used to generate the <b>Functional Performance Scorecard</b> for the State.
                </p>
            </div>
        </div>

      </div>
    </div>
  );
}

/* UI SUB-COMPONENTS */

function AreaTile({ active, onClick, label, count, icon, color }: any) {
    return (
        <button 
            onClick={onClick}
            className={`group relative text-left p-6 rounded-[32px] overflow-hidden transition-all duration-500 h-40 flex flex-col justify-between shadow-md hover:shadow-xl hover:-translate-y-1 bg-gradient-to-br ${color} text-white border-t border-white/20 ${active ? 'ring-4 ring-offset-2 ring-indigo-600' : ''}`}
        >
            <div className="absolute inset-0 opacity-[0.08] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/topography.png')]" />
            <div className="relative z-10 flex flex-col justify-between h-full">
                <div className="h-9 w-9 rounded-xl bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform">
                    {React.cloneElement(icon, { size: 18, className: "text-white" })}
                </div>
                <div>
                    <p className="text-2xl font-black tracking-tighter drop-shadow-sm">{count}</p>
                    <p className="text-[8px] font-black uppercase tracking-[0.1em] opacity-80 leading-tight mt-1">{label}</p>
                </div>
            </div>
        </button>
    )
}

function ActionRow({ id, domain, target, desc, status, outcome, success, alert }: any) {
    return (
        <TableRow className="border-none hover:bg-slate-50 transition-all group cursor-pointer font-sans">
            <TableCell className="px-8 py-6">
                <span className="text-[11px] font-mono font-black text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded-md">{id}</span>
                <p className="text-[8px] font-black text-slate-400 uppercase mt-2">Action Point</p>
            </TableCell>
            <TableCell>
                <div className="flex items-center gap-3">
                    <div className={`h-1.5 w-1.5 rounded-full ${success ? 'bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.4)]' : alert ? 'bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.4)]' : 'bg-blue-400'}`} />
                    <div>
                        <p className="text-xs font-black text-slate-800 uppercase tracking-tight leading-none">{domain}</p>
                        <p className="text-[9px] font-bold text-slate-400 mt-1 uppercase leading-none truncate max-w-[140px]">{desc}</p>
                    </div>
                </div>
            </TableCell>
            <TableCell className="text-center">
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{target}</span>
            </TableCell>
            <TableCell className="text-center">
                <Badge className={`rounded-full px-3 py-0.5 text-[8px] font-black uppercase border-none shadow-none ${
                    success ? 'bg-green-100 text-green-700' : alert ? 'bg-red-100 text-red-700' : 'bg-blue-100 text-blue-700'
                }`}>
                    {status}
                </Badge>
            </TableCell>
            <TableCell className="text-right px-8">
                <div className="flex flex-col items-end">
                    <p className="text-[10px] font-black text-indigo-900 uppercase tracking-tight">{outcome}</p>
                    <div className="flex gap-2 mt-2 opacity-0 group-hover:opacity-100 transition-all">
                        <button title="View Outcome Proof" className="p-1.5 bg-slate-50 text-slate-400 rounded-lg hover:bg-slate-900 hover:text-white transition-all"><FileCheck size={12}/></button>
                        <button title="Drill-down" className="p-1.5 bg-slate-50 text-slate-400 rounded-lg hover:bg-indigo-600 hover:text-white transition-all"><ArrowUpRight size={12}/></button>
                    </div>
                </div>
            </TableCell>
        </TableRow>
    )
}

function ProtocolStep({ text }: { text: string }) {
    return (
        <div className="flex items-start gap-3 group">
            <div className="h-5 w-5 rounded-full bg-slate-50 flex items-center justify-center border border-slate-100 shrink-0 mt-0.5 shadow-inner">
                <div className="h-1 w-1 rounded-full bg-slate-300 group-hover:bg-indigo-600 transition-colors" />
            </div>
            <span className="text-xs font-bold text-slate-600 tracking-tight leading-snug group-hover:text-slate-900 transition-colors">{text}</span>
        </div>
    )
}