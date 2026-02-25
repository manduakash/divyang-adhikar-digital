// app/dashboard/scpd/fact-sheets/registered-org/page.tsx
"use client";
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
    Landmark, ShieldCheck, MapPin, UserCircle2,
    Phone, Mail, Calendar, Activity, Briefcase,
    FileText, ShieldAlert, History, Printer,
    Download, ArrowUpRight, CheckCircle2, Clock,
    MessageSquare, Gavel, Sparkles, FileBadge,
    BadgeCheck, Globe, Search, Filter, Map
} from "lucide-react";
import {
    Table, TableBody, TableCell, TableHead, TableHeader, TableRow
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import {
    Select, SelectContent, SelectItem, SelectTrigger, SelectValue
} from "@/components/ui/select";

export default function RegisteredInstitutionFactSheet() {
    return (
        <div className="space-y-10 animate-in fade-in duration-1000 pb-20 font-sans selection:bg-purple-100">

            {/* INTERACTIVE IDENTITY HUB - APEX DESIGN */}
            <Card className="rounded-[40px] border-none bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 p-1 relative overflow-hidden shadow-2xl shadow-purple-200">
                <div className="absolute inset-0 opacity-15 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
                <div className="bg-white rounded-[38px] p-10 relative z-10 flex flex-col xl:flex-row justify-between items-start gap-12">

                    {/* LEFT: SELECTABLE ORGANIZATION PARAMETERS */}
                    <div className="flex-1 space-y-8">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                            <HeaderFilter label="Category" defaultValue="ngo" options={[{ v: 'ngo', l: 'NGO / Advocacy' }, { v: 'rehab', l: 'Rehab Center' }, { v: 'other', l: 'Service Provider' }]} />
                            <HeaderFilter label="Registration No." defaultValue="r441" options={[{ v: 'r441', l: 'RPWD/NGO/2022/441' }, { v: 'r992', l: 'RPWD/RC/2021/012' }]} />
                            <HeaderFilter label="District" defaultValue="kol" options={[{ v: 'kol', l: 'Kolkata' }, { v: 'lko', l: 'Lucknow' }]} />
                            <HeaderFilter label="Active Status" defaultValue="act" options={[{ v: 'act', l: 'Active Node' }, { v: 'ina', l: 'Inactive' }]} />
                        </div>

                        <div className="flex items-center gap-6">
                            <div className="h-20 w-20 bg-gradient-to-br from-purple-600 to-indigo-700 rounded-3xl flex items-center justify-center text-white shadow-xl">
                                <Landmark size={38} />
                            </div>
                            <div className="space-y-3 flex-1">
                                <p className="text-[9px] font-black uppercase text-purple-600 tracking-[0.3em] ml-1">Statutory Entity Identity</p>
                                <Select defaultValue="samiti">
                                    <SelectTrigger className="h-16 w-full max-w-2xl border-none bg-slate-50 rounded-2xl px-6 text-xl font-black text-slate-900 uppercase tracking-tighter shadow-inner focus:ring-2 focus:ring-purple-500 transition-all">
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent className="rounded-2xl font-bold">
                                        <SelectItem value="samiti">Divyang Kalyan Samiti [ORG-WB-KOL-012]</SelectItem>
                                        <SelectItem value="rehab-hub">Varanasi Rehab Center [ORG-UP-VNS-044]</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>


                    </div>

                    {/* RIGHT: CONTACT PERSON HUB */}
                    <div className="bg-slate-50 border border-slate-100 rounded-[32px] p-8 min-w-[350px] shadow-inner relative overflow-hidden group hover:border-purple-200 transition-all">
                        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/topography.png')]" />
                        <p className="text-[9px] font-black uppercase text-slate-400 tracking-widest mb-4">Authorized Contact Person</p>
                        <div className="flex items-center gap-4 relative z-10">
                            <div className="h-12 w-12 rounded-2xl bg-white border border-slate-100 flex items-center justify-center text-purple-600 shadow-sm transition-transform group-hover:scale-110"><UserCircle2 size={24} /></div>
                            <div>
                                <p className="text-base font-black text-slate-800 uppercase tracking-tight">Dr. Suman Chatterjee</p>
                                <div className="flex gap-4 mt-1 opacity-70">
                                    <span className="text-[9px] font-bold text-slate-500 uppercase flex items-center gap-1"><Phone size={10} /> 2210-XXXX</span>
                                    <span className="text-[9px] font-bold text-slate-500 uppercase flex items-center gap-1"><Mail size={10} /> contact@node.org</span>
                                </div>
                            </div>
                        </div>
                        <div className="mt-6 pt-4 border-t border-slate-200/50 flex justify-between items-center relative z-10">
                            <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest leading-none">Registered Date</span>
                            <span className="text-[11px] font-mono font-black text-purple-600 tracking-tighter">12 OCT 2022</span>
                        </div>
                    </div>
                </div>
            </Card>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                {/* REGISTRATION INTELLIGENCE Hub */}
                <StatTableCard title="Certification Intelligence" gradient="from-purple-600 to-indigo-700" icon={<FileBadge />}>
                    <StatRow label="Current Certificate Validity" val="11 Oct 2025" success />
                    <StatRow label="Renewal Due Date" val="11 Oct 2025" warning />
                    <div className="h-[1px] w-full bg-slate-100 my-4" />
                    <StatRow label="Last Activity Recorded" val="14 Oct 2024" mono />
                    <div className="mt-6 p-6 bg-purple-50 rounded-[32px] border border-purple-100 relative group">
                        <p className="text-[10px] font-black text-purple-400 uppercase tracking-widest mb-2">Internal Compliance Notes</p>
                        <p className="text-xs font-medium italic text-slate-500 leading-relaxed uppercase tracking-tighter">
                            "Annual returns for current FY verified. Physical site audit for accessibility pending for the north-wing hub."
                        </p>
                    </div>
                </StatTableCard>

                {/* ACCOUNTABILITY MONITOR Hub */}
                <StatTableCard title="Accountability Monitor" gradient="from-slate-800 to-slate-950" icon={<ShieldAlert />}>
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Grievance Performance</p>
                            <div className="grid grid-cols-2 gap-4">
                                <UrgencyTile label="Total Filings" val="02" color="text-slate-900" />
                                <UrgencyTile label="Pending / Overdue" val="00" color="text-green-600" success />
                            </div>
                        </div>
                        <div className="h-[1px] w-full bg-slate-100" />
                        <div className="space-y-4">
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Statutory Direction Status</p>
                            <div className="grid grid-cols-2 gap-4">
                                <UrgencyTile label="Directives Issued" val="03" color="text-slate-900" />
                                <UrgencyTile label="Pending / Overdue" val="01" color="text-red-600" alert />
                            </div>
                        </div>
                    </div>
                </StatTableCard>

            </div>

            {/* FOOTER ACTIONS */}
            <footer className="pt-12 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="flex items-center gap-4">
                    <BadgeCheck className="text-purple-600 shadow-xl" size={24} />
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 leading-none uppercase">Organization Fact Sheet Ledger v4.4 • Authorized Node</span>
                </div>
                <div className="flex gap-4">
                    <Button variant="outline" className="h-14 px-8 rounded-2xl border-slate-200 font-bold bg-white gap-2 text-[10px] uppercase tracking-widest hover:bg-slate-50 shadow-sm transition-all"><History size={18} /> View Historical Timeline</Button>
                    <Button className="h-14 px-10 rounded-2xl bg-slate-900 text-white font-black uppercase tracking-widest text-[10px] shadow-2xl gap-2 hover:bg-black transition-all group">
                        <Printer size={18} /> Print Executive Brief <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
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
            <CardContent className="p-10 flex-1 space-y-4 relative">
                <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/topography.png')]" />
                <div className="relative z-10 space-y-4">
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
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest group-hover/row:text-purple-600 transition-colors">{label}</p>
            <p className={`text-2xl font-black tracking-tighter leading-none ${colorClass} ${mono ? 'font-mono' : ''}`}>{val}</p>
        </div>
    )
}

function UrgencyTile({ label, val, overdue, alert, success }: any) {
    const colorClass = alert ? 'text-red-600' : success ? 'text-green-600' : 'text-slate-900';
    const bgClass = alert ? 'bg-red-50 border-red-100 shadow-red-900/5' : 'bg-slate-50 border-slate-100';

    return (
        <div className={`p-5 rounded-[28px] border ${bgClass} text-center space-y-1 transition-all hover:bg-white hover:shadow-xl cursor-default group`}>
            <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest group-hover:text-purple-600">{label}</p>
            <p className={`text-3xl font-black ${colorClass} tracking-tighter leading-none`}>{val}</p>
            {overdue !== undefined && (
                <p className={`text-[8px] font-bold uppercase leading-none mt-2 ${alert ? 'text-red-400' : 'text-slate-400'}`}>
                    ({overdue} Overdue)
                </p>
            )}
        </div>
    )
}