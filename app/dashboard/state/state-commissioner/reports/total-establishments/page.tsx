// app/dashboard/scpd/reports/establishments/page.tsx
"use client";
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
    Table, TableBody, TableCell, TableHead, TableHeader, TableRow
} from "@/components/ui/table";
import {
    Building2, Search, Filter, Printer, FileSpreadsheet,
    ArrowUpRight, Globe, ShieldCheck, Download,
    BadgeCheck, Users, Mail, Phone, Calendar,
    Activity, Briefcase, Landmark, MapPin
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function EstablishmentMasterReport() {
    return (
        <div className="space-y-10 animate-in fade-in duration-700 pb-20 font-sans selection:bg-indigo-100">

            {/* HUB ADMINISTRATIVE HEADER */}
            <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-6 bg-white p-10 rounded-[40px] border border-slate-200 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 p-10 opacity-[0.03] pointer-events-none text-indigo-600">
                    <Building2 size={200} />
                </div>
                <div className="space-y-2 relative z-10">
                    <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border border-indigo-200 shadow-sm">
                        <BadgeCheck size={14} /> Statutory Registry Hub
                    </div>
                    <h1 className="text-5xl font-black text-slate-900 tracking-tighter uppercase leading-none">Establishments Report</h1>
                    <p className="text-slate-500 font-medium italic text-lg">Comprehensive audit of all government and private institutions registered under the PwD Act.</p>
                </div>
                <div className="flex gap-4 relative z-10">
                    <Button variant="outline" className="h-14 px-8 rounded-2xl border-slate-200 font-black uppercase tracking-widest text-[10px] bg-white gap-2 shadow-sm hover:bg-slate-50">
                        <FileSpreadsheet size={18} className="text-green-600" /> Export XLS
                    </Button>
                    <Button className="h-14 px-10 rounded-2xl bg-indigo-900 text-white font-black uppercase tracking-widest text-[10px] shadow-2xl hover:bg-black transition-all gap-2 border-t border-white/10">
                        <Printer size={18} /> Print Certified Ledger
                    </Button>
                </div>
            </div>

            {/* REGISTRY KPI STRIP */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <RegistryStat label="Total Registered Nodes" val="45,210" color="text-indigo-600" />
                <RegistryStat label="Government Sector" val="12,400" color="text-blue-600" />
                <RegistryStat label="Active Reporting" val="42,850" color="text-emerald-600" />
                <RegistryStat label="Inactive / Defaults" val="2,360" color="text-red-600" alert />
            </div>

            {/* MASTER DATA TABLE */}
            <Card className="rounded-[48px] border-slate-200 shadow-sm overflow-hidden bg-white">
                <CardHeader className="p-0">
                    <div className="p-8 bg-gradient-to-r from-indigo-600 via-indigo-700 to-blue-700 text-white relative overflow-hidden">
                        {/* CARBON FIBER TEXTURE */}
                        <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
                        <div className="flex flex-col md:flex-row justify-between items-center gap-6 relative z-10">
                            <div className="flex items-center gap-4">
                                <div className="h-12 w-12 rounded-2xl bg-white/20 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-xl">
                                    <Landmark size={24} />
                                </div>
                                <CardTitle className="text-sm font-black uppercase tracking-[0.3em]">Statewide Institutional Ledger</CardTitle>
                            </div>
                            <div className="flex gap-4 w-full md:w-auto">
                                <div className="relative flex-1 md:w-80">
                                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-white/50" />
                                    <input className="w-full pl-11 pr-4 py-3 bg-white/10 border border-white/20 rounded-2xl text-[10px] font-black uppercase outline-none text-white placeholder:text-white/40 focus:bg-white/20 transition-all" placeholder="Search Establishment, ID or District..." />
                                </div>
                                <Button variant="outline" size="icon" className="h-12 w-12 rounded-2xl border-white/20 bg-white/10 text-white hover:bg-white/20"><Filter size={18} /></Button>
                            </div>
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="p-0">
                    <Table>
                        <TableHeader className="bg-slate-50/80">
                            <TableRow className="border-slate-100">
                                <TableHead className="px-8 py-6 text-[9px] font-black uppercase tracking-widest text-slate-400">Sl No</TableHead>
                                <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400">Establishment ID & Name</TableHead>
                                <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400 text-center">Entity Type</TableHead>
                                <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400 text-center">Sector Hub</TableHead>
                                <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400 text-center">District</TableHead>
                                <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400 text-center">Status</TableHead>
                                <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400">Nodal Officer & Contact</TableHead>
                                <TableHead className="text-right px-8 text-[9px] font-black uppercase tracking-widest text-slate-400">Last Activity</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody className="divide-y divide-slate-50">
                            <EstablishmentRow
                                sl="01"
                                id="EST-UP-7721"
                                name="HDFC Regional Hub"
                                type="PRIVATE"
                                sector="Banking"
                                district="Lucknow"
                                status="ACTIVE"
                                nodal="Rajesh Malhotra"
                                contact="94150-XXXXX"
                                last="14 Oct 2024"
                                success
                            />
                            <EstablishmentRow
                                sl="02"
                                id="EST-UP-0012"
                                name="Nagar Nigam HQ"
                                type="GOVT"
                                sector="Urban Body"
                                district="Lucknow"
                                status="ACTIVE"
                                nodal="S.K. Singh"
                                contact="0522-228XXX"
                                last="12 Oct 2024"
                            />
                            <EstablishmentRow
                                sl="03"
                                id="EST-UP-4491"
                                name="Global Tech Hub"
                                type="PSU"
                                sector="Electronics"
                                district="GB Nagar"
                                status="INACTIVE"
                                nodal="Meera Iyer"
                                contact="98892-XXXXX"
                                last="10 Jan 2024"
                                alert
                            />
                            <EstablishmentRow
                                sl="04"
                                id="EST-UP-8811"
                                name="District Sessions"
                                type="GOVT"
                                sector="Judiciary"
                                district="Varanasi"
                                status="ACTIVE"
                                nodal="Amit Rai"
                                contact="contact@node.in"
                                last="20 Oct 2024"
                            />
                            <EstablishmentRow
                                sl="05"
                                id="EST-UP-1102"
                                name="Transport Hub-A"
                                type="AUTONOMOUS"
                                sector="Logistics"
                                district="Meerut"
                                status="ACTIVE"
                                nodal="V.K. Gupta"
                                contact="94120-XXXXX"
                                last="15 Oct 2024"
                            />
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>

            {/* FOOTER AUDIT NOTICE */}
            <footer className="flex justify-between items-center pt-8 border-t border-slate-200">
                <div className="flex items-center gap-3 text-slate-400">
                    <Activity size={18} className="text-indigo-600 animate-pulse" />
                    <span className="text-[10px] font-black uppercase tracking-widest leading-none">Registry Audit: 45,210 Nodes Synced with National PwD Database</span>
                </div>
                <div className="flex gap-4">
                    <button className="text-[10px] font-black uppercase text-indigo-600 hover:underline">Download Master Zip</button>
                    <button className="text-[10px] font-black uppercase text-slate-400 hover:text-slate-900">System Logs</button>
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

function EstablishmentRow({ sl, id, name, type, sector, district, status, nodal, contact, last, alert, success }: any) {
    const statusColor = alert ? 'bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.3)]' : success ? 'bg-green-500' : 'bg-blue-400';

    return (
        <TableRow className="border-none hover:bg-slate-50 transition-all group cursor-pointer font-sans">
            <TableCell className="px-8 py-6">
                <span className="text-[10px] font-black text-slate-300">#{sl}</span>
            </TableCell>
            <TableCell>
                <span className="text-[10px] font-mono font-black text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded-md">{id}</span>
                <p className="text-sm font-black text-slate-800 uppercase tracking-tight mt-2 leading-none">{name}</p>
            </TableCell>
            <TableCell className="text-center">
                <Badge className="bg-slate-100 text-slate-500 border-none font-black text-[8px] uppercase tracking-tighter px-2">{type}</Badge>
            </TableCell>
            <TableCell className="text-center text-[10px] font-bold text-slate-500 uppercase tracking-widest">{sector}</TableCell>
            <TableCell className="text-center text-[10px] font-bold text-slate-800 uppercase tracking-tighter">{district}</TableCell>
            <TableCell className="text-center">
                <Badge className={`rounded-full px-3 py-0.5 text-[8px] font-black uppercase border-none shadow-none ${alert ? 'bg-red-100 text-red-700 animate-pulse' : 'bg-green-100 text-green-700'}`}>
                    {status}
                </Badge>
            </TableCell>
            <TableCell>
                <div className="space-y-1">
                    <p className="text-xs font-black text-slate-900 uppercase leading-none">{nodal}</p>
                    <div className="flex items-center gap-2 text-slate-400">
                        <Phone size={10} />
                        <span className="text-[9px] font-bold uppercase tracking-tighter">{contact}</span>
                    </div>
                </div>
            </TableCell>
            <TableCell className="text-right px-8">
                <div className="flex flex-col items-end">
                    <span className="text-[11px] font-mono font-black text-slate-900">{last}</span>
                    <p className="text-[8px] font-black text-slate-300 uppercase mt-1 tracking-widest">Assessment</p>
                </div>
            </TableCell>
        </TableRow>
    )
}