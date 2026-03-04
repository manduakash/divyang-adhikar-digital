// app/dashboard/ccpd/fact-sheets/establishment/page.tsx
"use client";
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Building2, MapPin, ShieldCheck, UserCircle2, 
  Phone, Mail, Calendar, Activity, Briefcase, 
  Users, TrendingUp, AlertTriangle, Accessibility,
  Globe, MessageSquare, Gavel, Search, History,
  Printer, Download, ArrowUpRight, CheckCircle2,
  Clock, Landmark, FileText, BadgeCheck, FileSpreadsheet,
  MousePointer2,
  Sparkles
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { 
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue 
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function EstablishmentFactSheet() {
  return (
    <div className="space-y-12 animate-in fade-in duration-1000 pb-20 font-sans selection:bg-indigo-100 bg-[#fbfcfd]">
      
      {/* PRIMARY ENTITY SELECTOR HUB - CARBON FIBER TEXTURE */}
      <Card className="rounded-[40px] border-2 border-slate-200 bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-600 p-1 relative overflow-hidden shadow-2xl">
        <div className="absolute inset-0 opacity-15 pointer-events-none"
             style={{ backgroundImage: `radial-gradient(black 2px, transparent 0)`, backgroundSize: '4px 4px' }} />
        <div className="bg-white rounded-[38px] p-10 relative z-10">
            
            <div className="flex flex-col xl:flex-row justify-between items-start gap-12">
                
                {/* SELECTABLE ENTITY HUB */}
                <div className="flex-1 space-y-8">
                    <div className="flex items-center gap-6">
                        <div className="h-20 w-20 bg-gradient-to-br from-indigo-600 to-blue-700 rounded-3xl flex items-center justify-center text-white shadow-xl">
                            <Building2 size={38} />
                        </div>
                        <div className="space-y-3 flex-1">
                            <p className="text-[10px] font-black uppercase text-indigo-600 tracking-[0.3em] ml-1 leading-none uppercase">National Registry Hub</p>
                            <Select defaultValue="entity-01">
                                <SelectTrigger className="w-full h-16 py-6 border-2 border-slate-200 bg-slate-50 rounded-2xl px-6 text-2xl font-black text-slate-900 uppercase tracking-tighter shadow-inner focus:ring-2 focus:ring-indigo-500 transition-all">
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent className="rounded-2xl border-2 border-slate-100 font-bold shadow-2xl">
                                    <SelectItem value="entity-01" className="font-black py-4 uppercase">HDFC Bank Regional Hub [EST-UP-7721]</SelectItem>
                                    <SelectItem value="entity-02" className="font-black py-4 uppercase">SBI Main Branch [EST-UP-4492]</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        <HeaderParam label="Type" defaultValue="pvt" options={['Private', 'Govt', 'PSU', 'Autonomous']} />
                        <HeaderParam label="Department / Sector" defaultValue="bank" options={['Banking & Finance', 'IT', 'Transport']} />
                        <HeaderParam label="District Hub" defaultValue="lko" options={['Lucknow', 'Varanasi', 'Agra']} />
                        <HeaderParam label="Current Node Status" defaultValue="act" options={['Active', 'Inactive']} />
                    </div>
                </div>

                {/* NODAL OFFICER & ACTIVITY CONTEXT */}
                <div className="bg-[#f8fafc] border-2 border-slate-200 rounded-[40px] p-8 min-w-[380px] shadow-xl relative overflow-hidden group hover:border-blue-200 transition-all">
                    <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/topography.png')]" />
                    <p className="text-[9px] font-black uppercase text-slate-400 tracking-widest mb-4">Statutory Nodal Officer Contact</p>
                    <div className="flex items-center gap-4 relative z-10">
                        <div className="h-12 w-12 rounded-2xl bg-white border-2 border-slate-100 flex items-center justify-center text-blue-600 shadow-sm"><UserCircle2 size={24}/></div>
                        <div>
                            <p className="text-base font-black text-slate-800 uppercase tracking-tight">Rajesh Malhotra</p>
                            <div className="flex gap-4 mt-1 opacity-70">
                                <span className="text-[9px] font-bold text-slate-500 uppercase flex items-center gap-1"><Phone size={10}/> +91 94150-XXXX</span>
                                <span className="text-[9px] font-bold text-slate-500 uppercase flex items-center gap-1"><Mail size={10}/> contact@node.in</span>
                            </div>
                        </div>
                    </div>
                    <div className="mt-6 pt-4 border-t-2 border-slate-100 flex justify-between items-center relative z-10">
                        <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Last Activity Date</span>
                        <span className="text-[11px] font-mono font-black text-indigo-600">14 OCT 2024</span>
                    </div>
                </div>
            </div>
        </div>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* EMPLOYMENT & VACANCY LEDGER */}
        <StatTableCard title="Employment & Vacancy" gradient="from-blue-600 via-blue-700 to-indigo-800" icon={<Users/>}>
            <div className="space-y-6">
                <StatRow label="Total Employees" val="1,500" />
                <StatRow label="PwD Employees" val="62" mono />
                <StatRow label="PwD Employment % (auto)" val="4.13%" success />
                <div className="h-[1px] w-full bg-slate-100" />
                <div className="grid grid-cols-3 gap-4">
                    <MiniMetric label="Identified" val="08" />
                    <MiniMetric label="Filled" val="03" />
                    <MiniMetric label="Pending" val="05" alert />
                </div>
                <div className="mt-4 pt-4 border-t-2 border-slate-50 flex justify-between items-center">
                    <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Last Return Period Submitted</span>
                    <Badge className="bg-indigo-50 text-indigo-700 border-2 border-indigo-100 font-black text-[8px] uppercase tracking-widest">Q3 FY 2024-25</Badge>
                </div>
            </div>
        </StatTableCard>

        {/* ACCESSIBILITY SNAPSHOT */}
        <StatTableCard title="Accessibility Compliance" gradient="from-emerald-600 via-teal-700 to-blue-700" icon={<Accessibility/>}>
            <div className="space-y-8">
                <StatusLabel label="Physical Accessibility Status" status="FULLY COMPLIANT" success />
                <StatusLabel label="Digital Accessibility Status" status="ACTION REQUIRED" alert />
                <div className="h-[1px] w-full bg-slate-100" />
                <div className="grid grid-cols-2 gap-8">
                    <StatRow label="Last Assessment Date" val="12 Oct 2024" />
                    <StatRow label="Compliance Due Date" val="15 Dec 2024" warning />
                </div>
            </div>
        </StatTableCard>

        {/* GRIEVANCES MONITOR */}
        <StatTableCard title="Grievance Redressal monitor" gradient="from-purple-600 via-indigo-700 to-purple-800" icon={<MessageSquare/>}>
            <div className="space-y-6">
                <StatRow label="Total Grievances Received" val="12" />
                <StatRow label="Pending Settlement" val="02" warning />
                <StatRow label="Overdue SLA" val="01" alert />
                <div className="mt-6 p-6 bg-purple-50 rounded-[32px] border-2 border-purple-100 flex items-center justify-between group cursor-pointer hover:bg-white transition-all shadow-inner">
                    <div className="space-y-1">
                        <p className="text-[9px] font-black text-purple-400 uppercase tracking-widest leading-none">Latest Active Case Link</p>
                        <p className="text-xs font-mono font-black text-blue-600">GRV-UP-7721-04</p>
                    </div>
                    <ArrowUpRight size={18} className="text-purple-300 group-hover:text-purple-600 transition-colors" />
                </div>
            </div>
        </StatTableCard>

        {/* STATUTORY DIRECTIONS */}
        <StatTableCard title="Directions & Statutory Orders" gradient="from-indigo-700 via-blue-800 to-slate-900" icon={<Gavel/>}>
            <div className="space-y-6">
                <StatRow label="Total Directions Issued" val="03" />
                <StatRow label="Pending Implementation" val="01" warning />
                <StatRow label="Overdue Timeline" val="00" success />
                <div className="mt-6 p-6 bg-slate-50 rounded-[32px] border-2 border-slate-200 flex items-center justify-between group cursor-pointer hover:bg-white transition-all shadow-inner">
                    <div className="space-y-1">
                        <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest leading-none">Latest Direct Order Ref Link</p>
                        <p className="text-xs font-mono font-black text-indigo-600">DIR-STATE-UP-098</p>
                    </div>
                    <FileText size={18} className="text-slate-300 group-hover:text-indigo-600 transition-colors" />
                </div>
            </div>
        </StatTableCard>

        {/* INSPECTION & FOLLOW-UP LOG */}
        <Card className="lg:col-span-2 rounded-[48px] border-2 border-slate-200 bg-white shadow-sm overflow-hidden group">
            <CardHeader className="p-0">
                <div className="p-8 bg-gradient-to-r from-orange-500 to-amber-700 text-white relative overflow-hidden">
                    <div className="absolute inset-0 opacity-20 pointer-events-none"
                         style={{ backgroundImage: `radial-gradient(black 2px, transparent 0)`, backgroundSize: '4px 4px' }} />
                    <div className="flex items-center justify-between relative z-10">
                        <div className="flex items-center gap-4">
                            <div className="h-10 w-10 rounded-2xl bg-white/20 backdrop-blur-md border-2 border-white/20 flex items-center justify-center shadow-lg"><Activity size={20}/></div>
                            <CardTitle className="text-sm font-black uppercase tracking-[0.3em] leading-none">Field Scrutiny & Follow-up Ledger</CardTitle>
                        </div>
                        <div className="text-right">
                            <p className="text-[9px] font-black text-orange-200 uppercase tracking-widest">Last Inspection Date</p>
                            <p className="text-lg font-black uppercase tracking-tighter">14 Oct 2024</p>
                        </div>
                    </div>
                </div>
            </CardHeader>
            <CardContent className="p-10 space-y-10 relative">
                 <div className="space-y-4">
                    <label className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] ml-2 leading-none">Major Findings (short)</label>
                    <Textarea 
                        readOnly
                        className="min-h-[120px] rounded-[32px] bg-slate-50 border-2 border-slate-200 p-8 text-sm font-medium leading-relaxed italic text-slate-600 shadow-inner resize-none focus:ring-0" 
                        defaultValue="Statutory audit identifies non-compliance in the digital loan-origination module. Screen-reader compatibility missing alt-tags for primary navigation nodes. Physical structural ramp width verified as compliant."
                    />
                 </div>
                 <div className="flex justify-between items-center pt-4 border-t-2 border-slate-50">
                    <div className="flex items-center gap-3">
                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Follow-up Flag (Yes/No):</span>
                        <Badge className="bg-red-50 text-red-700 border-2 border-red-100 font-black text-[9px] uppercase px-4 py-1 tracking-widest">YES - REQUIRED</Badge>
                    </div>
                    <Sparkles size={24} className="text-orange-400 animate-pulse" />
                 </div>
            </CardContent>
        </Card>

      </div>

      {/* FOOTER ACTIONS */}
      <footer className="pt-12 border-t-2 border-slate-200 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-4">
            <BadgeCheck className="text-indigo-600 shadow-xl" size={24} />
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 leading-none uppercase">Entity Snapshot Node v5.2 • View-Only National Access</span>
        </div>
        <div className="flex gap-4">
            <Button variant="outline" className="h-14 px-8 rounded-2xl border-2 border-slate-200 font-bold bg-white gap-2 text-[10px] uppercase tracking-widest hover:bg-slate-50 transition-all"><History size={18} /> View Timeline (Activity log)</Button>
            <Button className="h-14 px-10 rounded-2xl bg-slate-950 text-white font-black uppercase tracking-widest text-[10px] shadow-2xl gap-2 hover:bg-black transition-all group border-t-2 border-white/10">
                <Printer size={18} /> Print Certified Export <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
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
                <SelectTrigger className="w-full h-12 py-6 border-2 border-slate-200 bg-slate-50 rounded-2xl px-6 font-bold text-slate-800 text-[10px] uppercase shadow-sm focus:ring-2 focus:ring-indigo-500">
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
                {/* 4PX CARBON FIBER OVERLAY */}
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
            <CardContent className="p-10 flex-1 space-y-5 relative overflow-hidden">
                <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/topography.png')]" />
                <div className="relative z-10 space-y-5">
                    {children}
                </div>
            </CardContent>
        </Card>
    )
}

function StatRow({ label, val, alert, success, warning, mono }: any) {
    const colorClass = alert ? 'text-red-600 underline decoration-red-100 decoration-2' : success ? 'text-green-600' : warning ? 'text-orange-500' : 'text-slate-900';
    return (
        <div className="flex justify-between items-end group/row cursor-default">
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest group-hover/row:text-blue-600 transition-colors uppercase leading-none">{label}</p>
            <p className={`text-2xl font-black tracking-tighter leading-none ${colorClass} ${mono ? 'font-mono text-sm' : ''}`}>{val}</p>
        </div>
    )
}

function StatusLabel({ label, status, success, alert }: any) {
    const color = success ? 'bg-green-50 text-green-700 border-green-200' : alert ? 'bg-red-50 text-red-700 border-red-200 animate-pulse' : 'bg-slate-50 text-slate-400 border-slate-200';
    return (
        <div className="flex items-center justify-between p-5 rounded-[28px] bg-white border-2 border-slate-100 group transition-all hover:border-indigo-200">
            <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest leading-none">{label}</p>
            <Badge className={`border-2 font-black text-[9px] uppercase px-4 py-1.5 tracking-widest shadow-sm ${color}`}>
                {status}
            </Badge>
        </div>
    )
}

function MiniMetric({ label, val, alert }: any) {
    return (
        <div className="bg-slate-50 border-2 border-slate-100 p-4 rounded-2xl text-center group hover:bg-white hover:border-blue-100 transition-all shadow-inner">
            <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-1">{label}</p>
            <p className={`text-sm font-black ${alert ? 'text-red-600' : 'text-slate-900'}`}>{val}</p>
        </div>
    )
}