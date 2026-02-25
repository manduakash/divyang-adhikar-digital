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
    Clock, Landmark,
    BadgeCheck,
    ArrowRight,
    FileSpreadsheet
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function EstablishmentFactSheet() {
    return (
        <div className="space-y-10 animate-in fade-in duration-700 pb-20 font-sans selection:bg-blue-100">

            {/* A4.2 HEADER - ENTITY IDENTITY */}
            <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-8 bg-white p-10 rounded-[48px] border border-slate-200 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 p-10 opacity-[0.03] pointer-events-none">
                    <Building2 size={200} className="text-blue-600" />
                </div>

                <div className="flex flex-col md:flex-row gap-8 relative z-10">
                    <div className="h-24 w-24 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-[32px] flex items-center justify-center text-white shadow-2xl shadow-blue-200">
                        <Building2 size={42} />
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-3">
                            <h1 className="text-4xl font-black text-slate-900 tracking-tighter uppercase leading-none">HDFC Bank Regional Hub</h1>
                            <Badge className="bg-emerald-100 text-emerald-700 border-none font-black text-[10px] px-3 py-1 uppercase tracking-widest">Active</Badge>
                        </div>
                        <div className="flex flex-wrap gap-4 text-[10px] font-black uppercase tracking-widest text-slate-400">
                            <span className="flex items-center gap-1.5"><ShieldCheck size={12} className="text-blue-600" /> ID: EST-UP-7721</span>
                            <span className="flex items-center gap-1.5"><Briefcase size={12} className="text-blue-600" /> Type: Private Establishment</span>
                            <span className="flex items-center gap-1.5"><Landmark size={12} className="text-blue-600" /> Sector: Banking & Finance</span>
                            <span className="flex items-center gap-1.5"><MapPin size={12} className="text-blue-600" /> District: Lucknow</span>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-3 min-w-[280px] relative z-10 bg-slate-50 p-6 rounded-[32px] border border-slate-100 shadow-inner group transition-all hover:border-blue-200">
                    <p className="text-[9px] font-black uppercase text-slate-400 tracking-widest leading-none">Statutory Nodal Officer</p>
                    <div className="flex items-center gap-3">
                        <UserCircle2 className="text-blue-600" size={20} />
                        <p className="text-sm font-black text-slate-800">Rajesh Malhotra</p>
                    </div>
                    <div className="flex gap-4 pt-1">
                        <span className="text-[10px] font-bold text-slate-500 uppercase flex items-center gap-1"><Phone size={10} /> +91 94150 XXXX</span>
                        <span className="text-[10px] font-bold text-slate-500 uppercase flex items-center gap-1"><Mail size={10} /> contact@node.com</span>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">

                {/*  EMPLOYMENT & VACANCY */}
                <Card className="rounded-[44px] border-slate-200 bg-white shadow-sm overflow-hidden group hover:shadow-xl transition-all duration-500">
                    <CardHeader className="p-8 bg-gradient-to-r from-blue-600 to-indigo-700 text-white relative">
                        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/topography.png')]" />
                        <CardTitle className="text-[10px] font-black uppercase tracking-[0.3em] flex items-center gap-3 relative z-10">
                            <Users size={16} />  Workforce Audit
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="p-10 space-y-8 relative overflow-hidden">
                        <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
                        <div className="grid grid-cols-2 gap-8 relative z-10">
                            <Metric label="Total Employees" val="1,500" />
                            <Metric label="PwD Employees" val="62" />
                            <div className="col-span-2 p-6 bg-blue-50 rounded-[32px] border border-blue-100 flex items-center justify-between shadow-sm">
                                <div>
                                    <p className="text-[10px] font-black text-blue-400 uppercase tracking-widest">Compliance Rate</p>
                                    <p className="text-4xl font-black text-blue-700 tracking-tighter">4.13%</p>
                                </div>
                                <div className="text-right">
                                    <Badge className="bg-green-600 text-white font-black text-[8px] uppercase tracking-tighter mb-2">Mandate Satisfied</Badge>
                                    <p className="text-[8px] font-bold text-slate-400 uppercase">Last Return: 12-Oct-24</p>
                                </div>
                            </div>
                            <Metric label="Identified Vacancy" val="08" />
                            <Metric label="Filled" val="03" />
                            <Metric label="Net Pending" val="05" alert />
                        </div>
                    </CardContent>
                </Card>

                {/*  ACCESSIBILITY */}
                <Card className="rounded-[44px] border-slate-200 bg-white shadow-sm overflow-hidden group hover:shadow-xl transition-all duration-500">
                    <CardHeader className="p-8 bg-gradient-to-r from-emerald-500 to-teal-700 text-white relative">
                        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/topography.png')]" />
                        <CardTitle className="text-[10px] font-black uppercase tracking-[0.3em] flex items-center gap-3 relative z-10">
                            <Accessibility size={16} />  Barrier Registry
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="p-10 space-y-10 relative z-10">
                        <div className="space-y-6">
                            <StatusItem label="Physical Infrastructure" status="Fully Compliant" value="34" success icon={<CheckCircle2 size={14} />} />
                            <StatusItem label="Digital Platforms" status="Action Required" alert value="2" icon={<AlertCircle size={14} />} />
                        </div>
                        <div className="grid grid-cols-2 gap-8 pt-8 border-t border-slate-50">
                            <Metric label="Last Audit Date" val="14 Oct 24" />
                            <Metric label="SLA Deadline" val="15 Dec 24" alert />
                        </div>
                        <Button className="w-full h-14 bg-slate-900 text-white hover:bg-emerald-700 rounded-2xl font-black uppercase tracking-widest text-[9px] shadow-xl">
                            View Audit Evidence Vault
                        </Button>
                    </CardContent>
                </Card>

                {/* & 4: GRIEVANCES & DIRECTIONS */}
                <div className="space-y-8">
                    <Card className="rounded-[44px] border-slate-200 bg-white shadow-sm overflow-hidden p-8 flex flex-col justify-between">
                        <div className="space-y-6">
                            <div className="flex items-center gap-3">
                                <MessageSquare size={16} className="text-purple-600" />
                                <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400"> Grievances</h3>
                            </div>
                            <div className="flex justify-between items-center bg-purple-50 p-6 rounded-[32px] border border-purple-100">
                                <div className="text-center">
                                    <p className="text-[8px] font-black text-purple-400 uppercase tracking-widest">Total</p>
                                    <p className="text-2xl font-black text-slate-900">12</p>
                                </div>
                                <div className="h-10 w-[1px] bg-purple-200" />
                                <div className="text-center">
                                    <p className="text-[8px] font-black text-purple-400 uppercase tracking-widest">Pending</p>
                                    <p className="text-2xl font-black text-slate-900">02</p>
                                </div>
                                <div className="h-10 w-[1px] bg-purple-200" />
                                <div className="text-center group cursor-pointer">
                                    <p className="text-[8px] font-black text-red-400 uppercase tracking-widest">Overdue</p>
                                    <p className="text-2xl font-black text-red-600 animate-pulse">01</p>
                                </div>
                            </div>
                        </div>
                        <button className="flex items-center justify-between text-blue-600 font-black uppercase text-[9px] tracking-widest mt-6 hover:translate-x-1 transition-all">
                            Latest: GRV-UP-7721-04 <ArrowUpRight size={14} />
                        </button>
                    </Card>

                    <Card className="rounded-[44px] border-slate-200 bg-white shadow-sm overflow-hidden p-8 flex flex-col justify-between">
                        <div className="space-y-6">
                            <div className="flex items-center gap-3">
                                <Gavel size={16} className="text-indigo-600" />
                                <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400"> Directions</h3>
                            </div>
                            <div className="flex justify-between items-center bg-indigo-50 p-6 rounded-[32px] border border-indigo-100">
                                <div className="text-center">
                                    <p className="text-[8px] font-black text-indigo-400 uppercase tracking-widest">Orders</p>
                                    <p className="text-2xl font-black text-slate-900">03</p>
                                </div>
                                <div className="h-10 w-[1px] bg-indigo-200" />
                                <div className="text-center">
                                    <p className="text-[8px] font-black text-indigo-400 uppercase tracking-widest">Pending</p>
                                    <p className="text-2xl font-black text-slate-900">01</p>
                                </div>
                                <div className="h-10 w-[1px] bg-indigo-200" />
                                <div className="text-center">
                                    <p className="text-[8px] font-black text-green-400 uppercase tracking-widest">Closed</p>
                                    <p className="text-2xl font-black text-green-600">02</p>
                                </div>
                            </div>
                        </div>
                        <button className="flex items-center justify-between text-blue-600 font-black uppercase text-[9px] tracking-widest mt-6 hover:translate-x-1 transition-all">
                            Latest: DIR-STATE-UP-098 <ArrowUpRight size={14} />
                        </button>
                    </Card>
                </div>

            </div>

            {/*  INSPECTION & TIMELINE */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <Card className="lg:col-span-2 rounded-[48px] border-slate-200 bg-white p-10 shadow-sm relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:rotate-12 transition-transform duration-700">
                        <Activity size={120} className="text-blue-600" />
                    </div>
                    <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-10 flex items-center gap-3">
                        <Search size={16} className="text-blue-600" />  Inspection Summary
                    </h4>
                    <div className="flex flex-col md:flex-row justify-between items-start gap-12 relative z-10">
                        <div className="space-y-6 flex-1">
                            <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Major Findings (Last Audit)</p>
                            <p className="text-lg font-black text-slate-900 leading-relaxed uppercase tracking-tighter">
                                "Website navigation fails for NVDA users. Main lobby width compliant. Scribe policy not updated."
                            </p>
                            <div className="flex gap-4">
                                <Badge className="bg-red-100 text-red-700 border-none font-black text-[9px] px-3 py-1 uppercase">Follow-up: Yes</Badge>
                                <Badge className="bg-blue-100 text-blue-700 border-none font-black text-[9px] px-3 py-1 uppercase">Next: 15-Dec-24</Badge>
                            </div>
                        </div>
                        <div className="text-right space-y-1">
                            <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Last Inspection Date</p>
                            <p className="text-3xl font-black text-slate-900 tracking-tighter">14 Oct 2024</p>
                        </div>
                    </div>
                </Card>

                <Card className="rounded-[48px] border-none bg-slate-900 text-white p-10 shadow-2xl relative overflow-hidden flex flex-col justify-between">
                    <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/circuit-board.png')]" />
                    <div className="relative z-10 space-y-4">
                        <div className="h-10 w-10 bg-white/10 rounded-xl flex items-center justify-center text-blue-400 border border-white/10"><History size={20} /></div>
                        <h3 className="text-xl font-black uppercase tracking-tight">Activity Timeline</h3>
                        <p className="text-xs font-medium text-slate-400 leading-relaxed uppercase tracking-tighter">
                            Monitor the institutional lifecycle and statutory return history.
                        </p>
                    </div>
                    <Button className="w-full h-14 bg-white text-slate-900 hover:bg-blue-50 rounded-2xl font-black uppercase tracking-widest text-[10px] shadow-xl transition-all group relative z-10">
                        View Full Audit Trail <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                </Card>
            </div>

            {/* FOOTER ACTIONS */}
            <div className="flex justify-between items-center gap-8 pt-10 border-t border-slate-200">
                <div className="flex items-center gap-3">
                    <BadgeCheck size={20} className="text-blue-600" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Node Sync: National PwD Database Active</span>
                </div>
                <div className="flex gap-4">
                    <Button variant="outline" className="h-14 px-8 rounded-2xl border-slate-200 font-bold bg-white gap-2 text-[10px] uppercase tracking-widest"><FileSpreadsheet size={18} className="text-green-600" /> XLS Data</Button>
                    <Button className="h-14 px-10 rounded-2xl bg-slate-900 text-white font-black uppercase tracking-widest text-[10px] shadow-2xl gap-2 hover:bg-black transition-all"><Printer size={18} /> Print Briefing Sheet</Button>
                </div>
            </div>

        </div>
    );
}

/* UI SUB-COMPONENTS */

function Metric({ label, val, sub, alert }: any) {
    return (
        <div className="space-y-1">
            <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">{label}</p>
            <p className={`text-2xl font-black tracking-tighter leading-none ${alert ? 'text-red-600' : 'text-slate-900'}`}>{val}</p>
            {sub && <p className="text-[8px] font-bold text-slate-300 uppercase tracking-tighter mt-1">{sub}</p>}
        </div>
    )
}

function StatusItem({ label, status, success, alert, icon, value }: any) {
    return (
        <div className="flex justify-between items-center group cursor-default">
            <div className="space-y-1">
                <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest group-hover:text-blue-600 transition-colors">{label}</p>
                <div className="flex items-center gap-2">
                    <span className={`text-sm font-black uppercase tracking-tight ${success ? 'text-green-600' : alert ? 'text-red-600' : 'text-slate-800'}`}>
                        {status}
                    </span>
                    {icon && <span className={success ? 'text-green-500' : 'text-red-500'}>{icon}</span>}
                </div>
            </div>
            <div className={`h-8 w-8 text-xs flex items-center text-slate-800 justify-center rounded-full ${success ? 'bg-green-500' : 'bg-red-500'} opacity-60`} >{value}</div>
        </div>
    )
}