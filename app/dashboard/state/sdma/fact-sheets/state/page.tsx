// app/dashboard/sdma/fact-sheets/state/page.tsx
"use client";
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Globe, ShieldAlert, Siren, Navigation, 
  MapPin, CheckCircle2, AlertTriangle, Gavel, 
  Printer, Download, FileText, Sparkles,
  History, ArrowUpRight, Scale, Users,
  Zap, FileBadge, BadgeCheck, Timer, 
  Search, Filter, Activity, Landmark, 
  Monitor, CalendarDays, MousePointer2
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue 
} from "@/components/ui/select";

export default function StateDisasterFactSheet() {
  return (
    <div className="space-y-10 animate-in fade-in duration-1000 pb-20 font-sans selection:bg-orange-100">
      
      {/* PRIMARY IDENTITY HUB - SELECTABLE PARAMETERS */}
      <Card className="rounded-[40px] border-none bg-gradient-to-r from-orange-600 via-orange-700 to-red-700 p-1 relative overflow-hidden shadow-2xl shadow-orange-200">
        <div className="absolute inset-0 opacity-15 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        <div className="bg-white rounded-[38px] p-10 relative z-10 flex flex-col xl:flex-row justify-between items-end gap-12">
            
            <div className="flex-1 space-y-8">
                <div className="flex items-center gap-6">
                    <div className="h-20 w-20 bg-gradient-to-br from-orange-500 to-red-600 rounded-3xl flex items-center justify-center text-white shadow-xl">
                        <Globe size={38} />
                    </div>
                    <div className="space-y-3 flex-1">
                        <p className="text-[10px] font-black uppercase text-orange-600 tracking-[0.3em] ml-1 leading-none">State Statutory Aggregator</p>
                        <Select defaultValue="state-fact">
                            <SelectTrigger className="w-full h-16 py-6 border-2 border-slate-200 bg-slate-50 rounded-2xl px-6 text-2xl font-black text-slate-900 uppercase tracking-tighter shadow-inner focus:ring-2 focus:ring-orange-500 transition-all">
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent className="rounded-2xl font-bold">
                                <SelectItem value="state-fact">State Disaster–PwD Fact Sheet [SDMA-UP-APEX]</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <p className="text-[9px] font-black uppercase text-slate-400 ml-1 tracking-widest leading-none">Selected Reporting Window</p>
                        <Select defaultValue="90">
                            <SelectTrigger className="w-full h-14 py-6 border-2 border-slate-200 bg-slate-50 rounded-2xl px-6 font-black text-slate-700 text-xs uppercase shadow-sm">
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent className="rounded-2xl">
                                <SelectItem value="90">Last 90 Days Aggregate</SelectItem>
                                <SelectItem value="180">Last 180 Days Aggregate</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="space-y-2">
                        <p className="text-[9px] font-black uppercase text-slate-400 ml-1 tracking-widest leading-none">Jurisdiction Focus</p>
                        <Select defaultValue="all">
                            <SelectTrigger className="w-full h-14 py-6 border-2 border-slate-200 bg-slate-50 rounded-2xl px-6 font-black text-slate-700 text-xs uppercase shadow-sm">
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent className="rounded-2xl">
                                <SelectItem value="all">Statewide (All 75 Districts)</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
            </div>

            <div className="bg-slate-900 text-white p-8 rounded-[40px] min-w-[350px] shadow-2xl relative overflow-hidden group border-t border-white/10">
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
                <div className="relative z-10 space-y-4">
                    <div className="flex justify-between items-center">
                        <p className="text-[9px] font-black text-orange-400 uppercase tracking-widest">Last Data Sync Time</p>
                        <Activity size={14} className="text-green-500 animate-pulse" />
                    </div>
                    <p className="text-2xl font-black uppercase tracking-tighter">14 OCT 2024, 10:42 AM</p>
                    <div className="pt-4 border-t border-white/10">
                        <Button className="w-full h-12 bg-white text-slate-900 rounded-2xl font-black uppercase tracking-widest text-[9px] shadow-lg group-hover:bg-orange-50 transition-all">
                            <Printer size={14} className="mr-2"/> Print Decision Brief
                        </Button>
                    </div>
                </div>
            </div>
        </div>
      </Card>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        
        {/* STATE-LEVEL TOTALS HUB */}
        <StatTableCard title="State-level totals" gradient="from-blue-600 to-indigo-700" icon={<Landmark/>}>
            <StatRow label="Consolidated PwD Registry" val="1.24M+" mono />
            <StatRow label="Active Emergency Shelters" val="3,450" />
            <StatRow label="Statutory Response Nodes" val="75 / 75" success />
            <div className="h-[1px] w-full bg-slate-100 my-4" />
            <StatRow label="Aggregated SOS Requests" val="12.4K" warning />
        </StatTableCard>

        {/* RISK DISTRIBUTION HUB */}
        <StatTableCard title="Risk distribution" gradient="from-orange-600 to-red-700" icon={<ShieldAlert/>}>
            <div className="space-y-6">
                <div className="p-5 bg-orange-50 rounded-3xl border-2 border-orange-100 flex items-center justify-between shadow-inner">
                    <div className="space-y-1">
                        <p className="text-[10px] font-black text-orange-600 uppercase tracking-widest">High vulnerability cluster</p>
                        <p className="text-3xl font-black text-slate-900 tracking-tighter leading-none">18.2K</p>
                    </div>
                    <Badge className="bg-red-600 text-white border-none font-black text-[8px] animate-pulse px-3 py-1">Critical</Badge>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <StatRow label="Coastal Zone PwDs" val="45K" />
                    <StatRow label="Urban Risk Nodes" val="122" />
                </div>
            </div>
        </StatTableCard>

        {/* PREPAREDNESS INDICATORS HUB */}
        <StatTableCard title="Preparedness indicators" gradient="from-emerald-500 to-teal-700" icon={<BadgeCheck/>}>
            <div className="space-y-8">
                <div className="space-y-2">
                    <div className="flex justify-between items-end mb-1">
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">State Readiness Score</p>
                        <span className="text-sm font-black text-emerald-600">88.4%</span>
                    </div>
                    <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden shadow-inner">
                        <div className="h-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.4)]" style={{ width: '88%' }} />
                    </div>
                </div>
                <div className="space-y-4 pt-4 border-t border-slate-50">
                    <StatusNode label="District Mapping Sync" status="94% Verified" success />
                    <StatusNode label="Shelter Compliance" status="82% Audited" warning />
                </div>
            </div>
        </StatTableCard>

      </div>

      {/* READ-ONLY STATUTORY DATA LOG (No Manual Editing) */}
      <Card className="rounded-[48px] border-slate-200 bg-white shadow-sm overflow-hidden">
        <CardHeader className="p-10 border-b border-slate-50 bg-slate-50/50 flex flex-row justify-between items-center relative overflow-hidden">
             <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/circuit-board.png')]" />
             <div className="flex items-center gap-5 relative z-10">
                <div className="h-12 w-12 rounded-2xl bg-white border border-slate-100 flex items-center justify-center shadow-sm"><FileText size={24} className="text-orange-600" /></div>
                <div className="space-y-1">
                    <CardTitle className="text-sm font-black uppercase tracking-widest leading-none">Decision-Ready Review Log</CardTitle>
                    <p className="text-[10px] text-slate-500 font-bold uppercase mt-1 tracking-widest">State-Level aggregated findings (Read-Only)</p>
                </div>
             </div>
             <Badge className="bg-slate-900 text-white border-none font-black text-[8px] px-4 py-1.5 uppercase tracking-widest">No Manual Editing at SDMA Level</Badge>
        </CardHeader>
        <CardContent className="p-12 space-y-12">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-4">
                    <label className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] ml-2">State Risk Summary Notes</label>
                    <Textarea 
                        readOnly
                        className="min-h-[140px] rounded-[32px] bg-slate-50 border-2 border-slate-200 p-8 text-sm font-medium leading-relaxed italic text-slate-600 shadow-inner resize-none" 
                        defaultValue="Statewide preparedness indicators suggest a strong alignment in Urban Lucknow. However, coastal districts show a 12% gap in PwD-to-Shelter mapping. High priority remediation suggested for Purba Medinipur and South 24 Parganas."
                    />
                </div>

                <div className="space-y-4">
                    <label className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] ml-2">Aggregation Metadata</label>
                    <div className="space-y-4">
                        <Input readOnly defaultValue="Consolidated from 75 District DDMA Nodes" className="h-16 px-8 rounded-2xl bg-slate-50 border-2 border-slate-200 font-black text-slate-900 text-sm shadow-sm" />
                        <div className="p-6 bg-blue-50 rounded-[32px] border border-blue-100 flex items-center justify-between group cursor-pointer hover:bg-white transition-all shadow-sm">
                            <div className="flex items-center gap-4">
                                <History size={20} className="text-blue-600" />
                                <span className="text-[10px] font-black uppercase tracking-widest text-blue-900">View Node-wise Aggregation History</span>
                            </div>
                            <ArrowUpRight size={18} className="text-blue-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                        </div>
                    </div>
                </div>
            </div>

        </CardContent>
      </Card>

      {/* FOOTER AUDIT STRIP */}
      <footer className="pt-12 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-4">
            <BadgeCheck className="text-orange-600 shadow-xl" size={24} />
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 leading-none">Decision-Ready Snapshot Node v5.2 • Aggregated Statewide Data</span>
        </div>
        <div className="flex gap-4">
            <Button variant="outline" className="h-14 px-8 rounded-2xl border-2 border-slate-200 font-bold bg-white gap-2 text-[10px] uppercase tracking-widest hover:bg-slate-50 shadow-sm"><Download size={18} className="text-green-600" /> Statutory XLS</Button>
            <Button className="h-14 px-10 rounded-2xl bg-slate-900 text-white font-black uppercase tracking-widest text-[10px] shadow-2xl gap-2 hover:bg-black transition-all group">
                <Printer size={18} /> Export / Print Summary <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
            </Button>
        </div>
      </footer>
    </div>
  );
}

/* UI SUB-COMPONENTS */

function HeaderNode({ label, val, icon }: any) {
    return (
        <div className="p-4 bg-slate-50 border-2 border-slate-100 rounded-2xl space-y-1">
            <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 uppercase">
                {icon} {label}
            </p>
            <p className="text-sm font-black text-slate-900 uppercase tracking-tight">{val}</p>
        </div>
    )
}

function StatTableCard({ title, icon, gradient, children }: any) {
    return (
        <Card className="rounded-[44px] border-slate-200 bg-white shadow-sm overflow-hidden group hover:shadow-2xl transition-all duration-500 h-full flex flex-col">
            <CardHeader className={`p-8 bg-gradient-to-r ${gradient} text-white relative overflow-hidden`}>
                <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
                <div className="flex items-center justify-between relative z-10">
                    <div className="flex items-center gap-4">
                        <div className="h-10 w-10 rounded-2xl bg-white/20 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500">
                            {icon}
                        </div>
                        <CardTitle className="text-[11px] font-black uppercase tracking-[0.3em] leading-none uppercase">{title}</CardTitle>
                    </div>
                </div>
            </CardHeader>
            <CardContent className="p-10 flex-1 space-y-5 relative">
                <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/topography.png')]" />
                <div className="relative z-10 space-y-5">
                    {children}
                </div>
            </CardContent>
        </Card>
    )
}

function StatRow({ label, val, alert, success, warning, mono }: any) {
    const colorClass = alert ? 'text-red-600 underline decoration-red-200 decoration-2' : success ? 'text-emerald-600' : warning ? 'text-orange-500' : 'text-slate-900';
    return (
        <div className="flex justify-between items-end group/row cursor-default">
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest group-hover/row:text-orange-600 transition-colors">{label}</p>
            <p className={`text-2xl font-black tracking-tighter leading-none ${colorClass} ${mono ? 'font-mono text-sm' : ''}`}>{val}</p>
        </div>
    )
}

function StatusNode({ label, status, success }: any) {
    return (
        <div className="flex items-center justify-between p-5 rounded-[28px] bg-slate-50 border-2 border-slate-100 group transition-all hover:bg-white hover:border-emerald-200">
            <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest leading-none">{label}</p>
            <Badge className={`border-none font-black text-[9px] uppercase px-4 py-1.5 tracking-widest shadow-sm ${success ? 'bg-green-100 text-green-700' : 'bg-slate-200 text-slate-600'}`}>
                {status}
            </Badge>
        </div>
    )
}