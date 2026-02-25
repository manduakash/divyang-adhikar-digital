// app/dashboard/scpd/fact-sheets/establishment/page.tsx
"use client";
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
    Building2, MapPin, ShieldCheck, UserCircle2,
    Phone, Mail, Calendar, Activity, Briefcase,
    Users, TrendingUp, AlertCircle, Accessibility,
    Globe, MessageSquare, Gavel, Search, History,
    Printer, Download, ArrowUpRight, CheckCircle2,
    Clock, Landmark, FileText, BadgeCheck, FileSpreadsheet
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
    Select, SelectContent, SelectItem, SelectTrigger, SelectValue
} from "@/components/ui/select";

export default function EstablishmentFactSheet() {
    return (
        <div className="space-y-10 animate-in fade-in duration-1000 pb-20 font-sans selection:bg-indigo-100">

            {/* SELECTABLE IDENTITY HUB - APEX DESIGN */}
            <Card className="rounded-[40px] border-none bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 p-1 relative overflow-hidden shadow-2xl shadow-blue-200">
                <div className="absolute inset-0 opacity-15 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
                <div className="bg-white rounded-[38px] p-10 relative z-10">

                    <div className="flex flex-col xl:flex-row justify-between items-start gap-12">

                        {/* LEFT: SELECTABLE PARAMETERS */}
                        <div className="flex-1 space-y-8">
                            <div className="flex items-center gap-6">
                                <div className="h-20 w-20 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-3xl flex items-center justify-center text-white shadow-xl">
                                    <Building2 size={38} />
                                </div>
                                <div className="space-y-3 flex-1">
                                    <p className="text-[9px] font-black uppercase text-indigo-600 tracking-[0.3em] ml-1">Establishment Identity</p>
                                    <Select defaultValue="hdfc">
                                        <SelectTrigger className="h-16 w-full max-w-2xl border-none bg-slate-50 rounded-2xl px-6 text-2xl font-black text-slate-900 uppercase tracking-tighter shadow-inner focus:ring-2 focus:ring-blue-500 transition-all">
                                            <SelectValue />
                                        </SelectTrigger>
                                        <SelectContent className="rounded-2xl font-bold">
                                            <SelectItem value="hdfc">HDFC Bank Regional Hub [EST-UP-7721]</SelectItem>
                                            <SelectItem value="sbi">SBI Main Branch [EST-UP-4492]</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                                <HeaderFilter label="Type" defaultValue="pvt" options={[{ v: 'pvt', l: 'Private' }, { v: 'govt', l: 'Government' }, { v: 'psu', l: 'PSU' }]} />
                                <HeaderFilter label="Department / Sector" defaultValue="bank" options={[{ v: 'bank', l: 'Banking & Finance' }, { v: 'it', l: 'Information Tech' }]} />
                                <HeaderFilter label="District" defaultValue="lko" options={[{ v: 'lko', l: 'Lucknow' }, { v: 'vns', l: 'Varanasi' }]} />
                                <HeaderFilter label="Hub Status" defaultValue="act" options={[{ v: 'act', l: 'Active' }, { v: 'ina', l: 'Inactive' }]} />
                            </div>
                        </div>

                        {/* RIGHT: NODAL & ACTIVITY DATA */}
                        <div className="bg-slate-50 border border-slate-100 rounded-[32px] p-8 min-w-[350px] shadow-inner relative overflow-hidden group hover:border-blue-200 transition-all">
                            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/topography.png')]" />
                            <p className="text-[9px] font-black uppercase text-slate-400 tracking-widest mb-4">Statutory Nodal Officer</p>
                            <div className="flex items-center gap-4 relative z-10">
                                <div className="h-12 w-12 rounded-2xl bg-white border border-slate-100 flex items-center justify-center text-blue-600 shadow-sm"><UserCircle2 size={24} /></div>
                                <div>
                                    <p className="text-base font-black text-slate-800 uppercase tracking-tight">Rajesh Malhotra</p>
                                    <div className="flex gap-4 mt-1 opacity-70">
                                        <span className="text-[10px] font-bold text-slate-500 flex items-center gap-1"><Phone size={10} /> 94150-XXXX</span>
                                        <span className="text-[10px] font-bold text-slate-500 flex items-center gap-1"><Mail size={10} /> node@bank.com</span>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-6 pt-4 border-t border-slate-200/50 flex justify-between items-center relative z-10">
                                <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Last Activity Date</span>
                                <span className="text-[11px] font-mono font-black text-blue-600">14 OCT 2024</span>
                            </div>
                        </div>
                    </div>
                </div>
            </Card>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                {/* EMPLOYMENT & VACANCY LEDGER */}
                <StatTableCard title="Workforce Compliance" gradient="from-blue-600 to-indigo-700" icon={<Users />}>
                    <StatRow label="Total Employees (Registry)" val="1,500" />
                    <StatRow label="PwD Employees Engaged" val="62" mono />
                    <StatRow label="PwD Compliance Percentage" val="4.13%" success />
                    <div className="h-[1px] w-full bg-slate-100 my-2" />
                    <StatRow label="Identified PwD Vacancies" val="08" />
                    <StatRow label="Vacancies Filled" val="03" />
                    <StatRow label="Net Pending Vacancies" val="05" alert />
                    <div className="mt-6 pt-4 border-t border-slate-50 flex justify-between items-center">
                        <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Last Return Period Submitted</span>
                        <Badge className="bg-slate-100 text-slate-600 font-bold text-[8px] uppercase tracking-tighter px-3">Q3 FY 2024-25</Badge>
                    </div>
                </StatTableCard>

                {/* ACCESSIBILITY AUDIT LOG */}
                <StatTableCard title="Accessibility Registry" gradient="from-emerald-600 to-teal-800" icon={<Accessibility />}>
                    <div className="space-y-6">
                        <StatusNode label="Physical Accessibility Status" status="Fully Compliant" success />
                        <StatusNode label="Digital Accessibility Status" status="Action Required" alert />
                    </div>
                    <div className="h-[1px] w-full bg-slate-100 my-4" />
                    <div className="grid grid-cols-2 gap-8">
                        <StatRow label="Last Assessment Date" val="12 Oct 2024" />
                        <StatRow label="Compliance Due Date" val="15 Dec 2024" warning />
                    </div>
                    <Button variant="ghost" className="w-full mt-6 text-blue-600 font-black uppercase text-[9px] tracking-[0.2em] hover:bg-blue-50 group/btn">
                        Open Evidence Vault <ArrowUpRight size={14} className="ml-2 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-all" />
                    </Button>
                </StatTableCard>

                {/* GRIEVANCE PERFORMANCE */}
                <StatTableCard title="Grievance SLA Hub" gradient="from-purple-600 to-indigo-800" icon={<MessageSquare />}>
                    <StatRow label="Total Grievances Received" val="12" />
                    <StatRow label="Pending Filings" val="02" warning />
                    <StatRow label="Overdue Beyond SLA" val="01" alert />
                    <div className="mt-8 p-5 bg-purple-50 rounded-[32px] border border-purple-100 flex items-center justify-between group cursor-pointer hover:bg-white transition-all shadow-sm">
                        <div className="space-y-1">
                            <p className="text-[9px] font-black text-purple-400 uppercase tracking-widest leading-none">Latest Active Filing</p>
                            <p className="text-xs font-mono font-black text-blue-600 tracking-tighter">GRV-UP-7721-04</p>
                        </div>
                        <div className="h-8 w-8 rounded-full bg-white flex items-center justify-center text-purple-400 shadow-sm border border-purple-100 group-hover:bg-purple-600 group-hover:text-white transition-all"><ArrowUpRight size={14} /></div>
                    </div>
                </StatTableCard>

                {/* STATUTORY DIRECTIONS */}
                <StatTableCard title="Binding Orders" gradient="from-slate-800 to-slate-950" icon={<Gavel />}>
                    <StatRow label="Total Statutory Directions" val="03" />
                    <StatRow label="Orders Pending" val="01" warning />
                    <StatRow label="Statutory Overdue" val="00" success />
                    <div className="mt-8 p-5 bg-slate-50 rounded-[32px] border border-slate-100 flex items-center justify-between group cursor-pointer hover:bg-white transition-all shadow-sm">
                        <div className="space-y-1">
                            <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest leading-none">Latest Direct Order</p>
                            <p className="text-xs font-mono font-black text-indigo-600 tracking-tighter">DIR-STATE-UP-098</p>
                        </div>
                        <FileText size={18} className="text-slate-300 group-hover:text-indigo-600" />
                    </div>
                </StatTableCard>

                {/* INSPECTION & FOLLOW-UP LEDGER */}
                <Card className="lg:col-span-2 rounded-[44px] border-slate-200 bg-white shadow-sm overflow-hidden group hover:shadow-2xl transition-all duration-500">
                    <CardHeader className="p-8 bg-gradient-to-r from-orange-500 to-amber-700 text-white relative overflow-hidden">
                        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
                        <div className="flex items-center justify-between relative z-10">
                            <div className="flex items-center gap-4">
                                <div className="h-10 w-10 rounded-2xl bg-white/20 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-lg"><Activity size={20} /></div>
                                <CardTitle className="text-[11px] font-black uppercase tracking-[0.3em]">Statutory Inspection Ledger</CardTitle>
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent className="p-10 space-y-10 relative">
                        <div className="space-y-4">
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Major Audit Findings</p>
                            <div className="p-8 bg-slate-50 rounded-[40px] border border-slate-100 text-sm font-medium italic text-slate-700 leading-relaxed shadow-inner">
                                "Website navigation for screen-readers fails in the 'Wealth' module. Structural ramp access at salt-lake node verified. Equal Opportunity Policy version 2.1 published and publically available."
                            </div>
                        </div>
                        <div className="flex justify-between items-center pt-4 border-t border-slate-50">
                            <div className="flex items-center gap-8">
                                <div className="flex items-center gap-3">
                                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Follow-up Flag:</span>
                                    <Badge className="bg-red-100 text-red-700 border-none font-black text-[9px] uppercase px-4 py-1 tracking-widest">Yes - Required</Badge>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock size={16} className="text-orange-500 animate-pulse" />
                                <span className="text-[10px] font-black text-slate-900 uppercase">Next Statutory Audit: 15 DEC 2024</span>
                            </div>
                        </div>
                    </CardContent>
                </Card>

            </div>

            {/* FOOTER ACTIONS */}
            <footer className="pt-12 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="flex items-center gap-4">
                    <BadgeCheck className="text-blue-600 shadow-xl" size={24} />
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 leading-none">Establishment Fact Sheet v4.1 • All Nodes Synced</span>
                </div>
                <div className="flex gap-4">
                    <Button variant="outline" className="h-14 px-8 rounded-2xl border-slate-200 font-bold bg-white gap-2 text-[10px] uppercase tracking-widest hover:bg-slate-50 shadow-sm"><History size={18} /> View Lifecycle Timeline</Button>
                    <Button className="h-14 px-10 rounded-2xl bg-slate-900 text-white font-black uppercase tracking-widest text-[10px] shadow-2xl gap-2 hover:bg-black transition-all group">
                        <Printer size={18} /> Print Briefing Sheet <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                    </Button>
                </div>
            </footer>
        </div>
    );
}

/* UI SUB-COMPONENTS */

function HeaderFilter({ label, options, defaultValue }: any) {
    return (
        <div className="space-y-2">
            <label className="text-[9px] font-black uppercase text-slate-400 ml-1 tracking-widest">{label}</label>
            <Select defaultValue={defaultValue}>
                <SelectTrigger className="h-11 rounded-2xl bg-slate-50 border-none font-bold text-slate-700 text-[10px] uppercase shadow-inner transition-all hover:bg-slate-100">
                    <SelectValue />
                </SelectTrigger>
                <SelectContent className="rounded-2xl border-slate-100 shadow-2xl">
                    {options.map((opt: any) => (
                        <SelectItem key={opt.v} value={opt.v} className="font-bold text-[10px] uppercase py-2.5">{opt.l}</SelectItem>
                    ))}
                </SelectContent>
            </Select>
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
                        <CardTitle className="text-[11px] font-black uppercase tracking-[0.3em] leading-none">{title}</CardTitle>
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
    const colorClass = alert ? 'text-red-600 underline decoration-red-200 decoration-2' : success ? 'text-green-600' : warning ? 'text-orange-500' : 'text-slate-900';
    return (
        <div className="flex justify-between items-end group/row cursor-default">
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest group-hover/row:text-blue-600 transition-colors">{label}</p>
            <p className={`text-2xl font-black tracking-tighter leading-none ${colorClass} ${mono ? 'font-mono' : ''}`}>{val}</p>
        </div>
    )
}

function StatusNode({ label, status, success, alert }: any) {
    return (
        <div className="flex items-center justify-between p-5 rounded-[28px] bg-slate-50 border border-slate-100 group transition-all hover:bg-white hover:border-blue-200">
            <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest leading-none">{label}</p>
            <Badge className={`border-none font-black text-[9px] uppercase px-4 py-1.5 tracking-widest shadow-sm ${success ? 'bg-green-100 text-green-700' : alert ? 'bg-red-100 text-red-700 animate-pulse' : 'bg-slate-200 text-slate-600'}`}>
                {status}
            </Badge>
        </div>
    )
}