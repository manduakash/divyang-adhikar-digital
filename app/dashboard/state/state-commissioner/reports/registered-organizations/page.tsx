// app/dashboard/scpd/reports/registered-master/page.tsx
"use client";
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
    Table, TableBody, TableCell, TableHead, TableHeader, TableRow
} from "@/components/ui/table";
import {
    Landmark, Search, Filter, Printer, FileSpreadsheet,
    Globe, ShieldCheck, BadgeCheck, Users, Mail, Phone,
    CalendarDays, Activity, MapPin, CheckCircle2,
    AlertTriangle, History, FileBadge, Download,
    ArrowUpRight
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function RegisteredMasterReport() {
    return (
        <div className="space-y-10 animate-in fade-in duration-700 pb-20 font-sans selection:bg-purple-100">

            {/* HUB ADMINISTRATIVE HEADER */}
            <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-6 bg-white p-10 rounded-[48px] border border-slate-200 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 p-10 opacity-[0.03] pointer-events-none text-purple-600">
                    <Landmark size={200} />
                </div>
                <div className="space-y-2 relative z-10">
                    <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border border-purple-200 shadow-sm">
                        <BadgeCheck size={14} /> Organization Registry Node
                    </div>
                    <h1 className="text-5xl font-black text-slate-900 tracking-tighter uppercase leading-none">Registered Institution Hub</h1>
                    <p className="text-slate-500 font-medium italic text-lg tracking-tight">Statutory master list of NGOs and Rehabilitation centers across the state.</p>
                </div>
                <div className="flex gap-4 relative z-10">
                    <Button variant="outline" className="h-14 px-8 rounded-2xl border-slate-200 font-black uppercase tracking-widest text-[10px] bg-white gap-2 shadow-sm hover:bg-slate-50">
                        <FileSpreadsheet size={18} className="text-green-600" /> Export Registry
                    </Button>
                    <Button className="h-14 px-10 rounded-2xl bg-purple-700 text-white font-black uppercase tracking-widest text-[10px] shadow-2xl hover:bg-purple-900 transition-all gap-2 border-t border-white/10">
                        <Printer size={18} /> Print Certified Copy
                    </Button>
                </div>
            </div>

            {/* REGISTRY KPI STRIP */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <RegistryStat label="Total Registered Nodes" val="2,140" color="text-purple-600" />
                <RegistryStat label="NGO Category" val="1,420" color="text-indigo-600" />
                <RegistryStat label="Rehab Hubs" val="720" color="text-blue-600" />
                <div className="bg-white border-2 border-purple-100 rounded-[32px] p-6 shadow-sm flex flex-col justify-center relative overflow-hidden group">
                    <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/topography.png')]" />
                    <p className="text-[9px] font-black uppercase text-purple-400 tracking-widest mb-1 relative z-10">Registry Health</p>
                    <p className="text-3xl font-black text-purple-700 tracking-tighter group-hover:scale-105 transition-transform">98.4% Active</p>
                </div>
            </div>

            {/* MASTER DATA TABLE */}
            <Card className="rounded-[48px] border-slate-200 shadow-sm overflow-hidden bg-white">
                <CardHeader className="p-0">
                    <div className="p-8 bg-gradient-to-r from-purple-600 via-indigo-700 to-blue-700 text-white relative overflow-hidden">
                        {/* CARBON FIBER TEXTURE OVERLAY */}
                        <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
                        <div className="flex flex-col md:flex-row justify-between items-center gap-6 relative z-10">
                            <div className="flex items-center gap-4">
                                <div className="h-12 w-12 rounded-2xl bg-white/20 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-xl group-hover:rotate-6 transition-transform">
                                    <FileBadge size={24} />
                                </div>
                                <CardTitle className="text-sm font-black uppercase tracking-[0.3em]">Statewide Statutory Ledger</CardTitle>
                            </div>
                            <div className="flex gap-4 w-full md:w-auto">
                                <div className="relative flex-1 md:w-80">
                                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-white/50" />
                                    <input className="w-full pl-11 pr-4 py-3 bg-white/10 border border-white/20 rounded-2xl text-[10px] font-black uppercase outline-none text-white placeholder:text-white/40 focus:bg-white/20 transition-all shadow-inner" placeholder="Search Registration No, Name..." />
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
                                <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400">Registration Details</TableHead>
                                <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400 text-center">Category</TableHead>
                                <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400 text-center">District</TableHead>
                                <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400 text-center">Status</TableHead>
                                <TableHead className="text-right px-8 text-[9px] font-black uppercase tracking-widest text-slate-400">Contact Person & Details</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody className="divide-y divide-slate-50">
                            <RegistryRow
                                sl="01"
                                id="ORG-WB-KOL-012"
                                name="Divyang Kalyan Samiti"
                                regNo="RPWD/NGO/2022/441"
                                regDate="12 Oct 2022"
                                category="NGO"
                                district="Kolkata"
                                status="ACTIVE"
                                person="Dr. Suman Chatterjee"
                                contact="+91 33 2210 XXXX"
                                success
                            />
                            <RegistryRow
                                sl="02"
                                id="ORG-UP-VNS-044"
                                name="Varanasi Rehab Hub"
                                regNo="RPWD/RC/2021/012"
                                regDate="05 Jan 2021"
                                category="Rehab Center"
                                district="Varanasi"
                                status="ACTIVE"
                                person="Amitabh Roy"
                                contact="contact@node.org"
                            />
                            <RegistryRow
                                sl="03"
                                id="ORG-UP-MRT-998"
                                name="Ability First Group"
                                regNo="RPWD/NGO/2020/998"
                                regDate="18 Sep 2020"
                                category="NGO"
                                district="Meerut"
                                status="INACTIVE"
                                person="Meera Iyer"
                                contact="98892-XXXXX"
                                alert
                            />
                            <RegistryRow
                                sl="04"
                                id="ORG-UP-LKO-112"
                                name="Sunshine Special Node"
                                regNo="RPWD/EDU/2023/112"
                                regDate="20 Aug 2023"
                                category="Education Support"
                                district="Lucknow"
                                status="ACTIVE"
                                person="S.K. Gupta"
                                contact="info@sunshine.in"
                            />
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>

            {/* FOOTER AUDIT NOTICE */}
            <footer className="flex justify-between items-center pt-8 border-t border-slate-200">
                <div className="flex items-center gap-3 text-slate-400">
                    <Activity size={18} className="text-purple-600 animate-pulse" />
                    <span className="text-[10px] font-black uppercase tracking-widest leading-none">Registry Audit: 2,140 Organizations Synced with State Portal</span>
                </div>
                <div className="flex gap-4">
                    <button className="text-[10px] font-black uppercase text-purple-600 hover:underline">Download Master Zip</button>
                    <button className="text-[10px] font-black uppercase text-slate-400 hover:text-slate-900">Renewal Logs</button>
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

function RegistryRow({ sl, id, name, regNo, regDate, category, district, status, person, contact, alert, success }: any) {
    const statusColor = alert ? 'bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.3)]' : success ? 'bg-green-500' : 'bg-purple-400';

    return (
        <TableRow className="border-none hover:bg-slate-50 transition-all group cursor-pointer font-sans">
            <TableCell className="px-8 py-6">
                <span className="text-[10px] font-black text-slate-300">#{sl}</span>
            </TableCell>
            <TableCell>
                <span className="text-[10px] font-mono font-black text-purple-700 bg-purple-50 px-2 py-0.5 rounded-md uppercase tracking-tighter">{id}</span>
                <p className="text-sm font-black text-slate-800 uppercase tracking-tight mt-2 leading-none">{name}</p>
            </TableCell>
            <TableCell>
                <div className="space-y-1">
                    <p className="text-[10px] font-mono font-bold text-slate-600 uppercase tracking-tighter">{regNo}</p>
                    <div className="flex items-center gap-1.5">
                        <CalendarDays size={10} className="text-slate-300" />
                        <span className="text-[9px] font-bold text-slate-400 uppercase">{regDate}</span>
                    </div>
                </div>
            </TableCell>
            <TableCell className="text-center text-[10px] font-black text-slate-500 uppercase tracking-widest">{category}</TableCell>
            <TableCell className="text-center text-[10px] font-bold text-slate-800 uppercase tracking-tighter">{district}</TableCell>
            <TableCell className="text-center">
                <Badge className={`rounded-full px-3 py-0.5 text-[8px] font-black uppercase border-none shadow-none ${alert ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
                    {status}
                </Badge>
            </TableCell>
            <TableCell className="text-right px-8">
                <div className="space-y-1">
                    <p className="text-[11px] font-black text-slate-900 uppercase leading-none">{person}</p>
                    <div className="flex items-center justify-end gap-2 text-slate-400">
                        <span className="text-[9px] font-bold uppercase tracking-tighter">{contact}</span>
                    </div>
                </div>
            </TableCell>
        </TableRow>
    )
}