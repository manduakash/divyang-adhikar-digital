// app/dashboard/sdma/reports/shelter-accessibility/page.tsx
"use client";
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
    Table, TableBody, TableCell, TableHead, TableHeader, TableRow
} from "@/components/ui/table";
import {
    Home, MapPin, ShieldCheck, BadgeCheck,
    Search, Filter, Printer, FileText,
    ArrowUpRight, Globe, CheckCircle2,
    AlertTriangle, History, Landmark,
    Activity, Maximize, Zap, Stethoscope,
    Users, Timer, Navigation, Phone,
    Mail, HardDrive, Download, FileSpreadsheet
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
    Select, SelectContent, SelectItem, SelectTrigger, SelectValue
} from "@/components/ui/select";

export default function ShelterAccessibilityReport() {
    return (
        <div className="space-y-10 animate-in fade-in duration-1000 pb-20 font-sans selection:bg-orange-100 bg-white">

            {/* HUB PRIMARY HEADER - CARBON FIBER TEXTURE */}
            <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-8 mb-10 bg-white p-12 rounded-[48px] border-2 border-slate-100 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 p-10 opacity-[0.03] pointer-events-none text-emerald-600">
                    <Home size={240} />
                </div>

                <div className="space-y-4 relative z-10">
                    <div className="flex items-center gap-3">
                        <div className="h-14 w-14 bg-gradient-to-br from-emerald-500 via-teal-600 to-indigo-700 rounded-2xl flex items-center justify-center text-white shadow-xl shadow-emerald-500/20 transition-transform hover:scale-105">
                            <ShieldCheck size={32} />
                        </div>
                        <div>
                            <h1 className="text-4xl font-black text-slate-900 tracking-tighter uppercase leading-none">Shelter Accessibility Hub</h1>
                            <p className="text-[10px] font-black text-emerald-600 uppercase tracking-[0.3em] mt-2 flex items-center gap-2">
                                <BadgeCheck size={12} /> Infrastructure Audit Node / A7.3
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex gap-4 relative z-10">
                    <Button variant="outline" className="h-16 px-10 rounded-3xl border-2 border-slate-200 font-black uppercase tracking-widest text-[10px] bg-white gap-2 shadow-sm hover:bg-slate-50 transition-all">
                        <FileSpreadsheet size={18} className="text-green-600" /> Export State XLS
                    </Button>
                    <Button className="h-16 px-10 rounded-3xl bg-slate-950 text-white font-black uppercase tracking-widest text-[10px] shadow-2xl hover:bg-black transition-all gap-2 group border-t border-white/20">
                        <Printer size={18} /> Print Statutory Ledger <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </Button>
                </div>
            </div>

            {/* PARAMETRIC FILTERS - HIGH CONTRAST BORDERS */}
            <Card className="rounded-[40px] border-2 border-slate-100 bg-white p-8 shadow-sm">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="space-y-2">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1 leading-none">District Node</label>
                        <Select defaultValue="all">
                            <SelectTrigger className="w-full h-16 py-6 border-2 border-slate-200 bg-slate-50 rounded-2xl font-black text-slate-900 uppercase text-[10px] shadow-sm">
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent className="rounded-2xl border-2 border-slate-200 shadow-2xl">
                                <SelectItem value="all">All 75 Districts</SelectItem>
                                <SelectItem value="lko">Lucknow Region</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="space-y-2">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1 leading-none">Disaster Type</label>
                        <Select defaultValue="flood">
                            <SelectTrigger className="w-full h-16 py-6 border-2 border-slate-200 bg-slate-50 rounded-2xl font-black text-slate-900 uppercase text-[10px] shadow-sm">
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent className="rounded-2xl border-2 border-slate-200 shadow-2xl">
                                <SelectItem value="flood">Flood / Monsoon Inundation</SelectItem>
                                <SelectItem value="cyclone">Cyclone / High Wind</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="flex items-end">
                        <Button className="w-full h-16 bg-emerald-600 text-white rounded-2xl font-black uppercase tracking-widest text-[10px] shadow-xl hover:bg-emerald-700 transition-all gap-2">
                            <Filter size={16} /> Execute Audit Filter
                        </Button>
                    </div>
                </div>
            </Card>

            {/* MASTER REGISTRY LEDGER - CARBON FIBER TEXTURE HEADER */}
            <Card className="rounded-[48px] border-2 border-slate-200 shadow-sm overflow-hidden bg-white min-h-[800px]">
                <CardHeader className="p-0">
                    <div className="p-10 bg-gradient-to-r from-emerald-600 via-teal-600 to-blue-600 text-white relative overflow-hidden">
                        {/* CARBON FIBER TEXTURE OVERLAY */}
                        <div className="absolute inset-0 opacity-10 pointer-events-none"
                            style={{ backgroundImage: `radial-gradient(black 2px, transparent 0)`, backgroundSize: '4px 4px' }} />

                        <div className="flex flex-col md:flex-row justify-between items-center gap-6 relative z-10">
                            <div className="flex items-center gap-4">
                                <div className="h-12 w-12 rounded-2xl bg-white/20 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-xl">
                                    <Activity size={24} />
                                </div>
                                <CardTitle className="text-sm font-black uppercase tracking-[0.3em] text-white">SHELTER ACCESSIBILITY & CAPACITY REGISTRY</CardTitle>
                            </div>
                            <Badge className="bg-white/20 text-white border-none font-black text-[10px] px-5 py-2 uppercase tracking-widest">Aggregation Hub v5.2</Badge>
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="p-0">
                    <Table>
                        <TableHeader className="bg-slate-50/80 font-sans">
                            <TableRow className="border-b-2 border-slate-100">
                                <TableHead className="px-10 py-6 text-[9px] font-black uppercase tracking-widest text-slate-400">Shelter ID & Name</TableHead>
                                <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400">District / Hazard</TableHead>
                                <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400 text-center">Capacity (Total/PwD)</TableHead>
                                <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400 text-center">Wheelchair</TableHead>
                                <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400 text-center">Toilet</TableHead>
                                <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400 text-center">Power</TableHead>
                                <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400 text-center">Last Inspection</TableHead>
                                <TableHead className="text-right px-10 text-[9px] font-black uppercase tracking-widest text-slate-400">Accessibility Status</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody className="divide-y divide-slate-100 font-sans">
                            <ShelterRow
                                id="SHL-LKO-042" name="Primary Hub Sector V" district="Lucknow" type="Flood" total="450" pwd="85"
                                wheel="Yes" toilet="Yes" power="Yes" date="14 Oct 24" status="Compliant" success
                            />
                            <ShelterRow
                                id="SHL-MRT-118" name="District Hall Hub-B" district="Meerut" type="Cyclone" total="200" pwd="40"
                                wheel="No" toilet="Partial" power="Yes" date="02 Oct 24" status="Critical" alert
                            />
                            <ShelterRow
                                id="SHL-VNS-091" name="Community Ctr 04" district="Varanasi" type="Flood" total="320" pwd="60"
                                wheel="Partial" toilet="Yes" power="No" date="10 Sep 24" status="Needs Attention" warning
                            />
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>

            {/* FOOTER AUDIT NOTICE */}
            <footer className="pt-12 border-t-2 border-slate-100 flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="flex items-center gap-4 text-slate-400">
                    <Activity size={24} className="text-orange-600 animate-pulse" />
                    <span className="text-[10px] font-black uppercase tracking-widest leading-none">Statutory Hub Sync: 3,450 Shelter Nodes Audited Statewide • Read-Only Data Hub</span>
                </div>
                <div className="flex gap-6">
                    <button className="text-[10px] font-black uppercase text-emerald-600 hover:underline">Download Master Registry</button>
                    <button className="text-[10px] font-black uppercase text-slate-400 hover:text-slate-900">Infrastructure Manual</button>
                </div>
            </footer>
        </div>
    );
}

/* UI SUB-COMPONENTS */

function ShelterRow({ id, name, district, type, total, pwd, wheel, toilet, power, date, status, success, alert, warning }: any) {
    const statusColor = success ? 'bg-green-600 text-white shadow-green-200 shadow-lg' : alert ? 'bg-red-600 text-white animate-pulse shadow-red-200 shadow-lg' : 'bg-orange-500 text-white shadow-orange-200 shadow-lg';

    return (
        <TableRow className="border-none hover:bg-slate-50 transition-all group cursor-pointer">
            <TableCell className="px-10 py-8">
                <span className="text-[11px] font-mono font-black text-indigo-700 bg-indigo-50 px-2.5 py-0.5 rounded-md uppercase tracking-tighter">{id}</span>
                <p className="text-sm font-black text-slate-900 uppercase tracking-tight mt-2 leading-none">{name}</p>
            </TableCell>
            <TableCell>
                <div className="space-y-1">
                    <p className="text-[10px] font-black text-slate-800 uppercase tracking-widest">{district}</p>
                    <Badge className="bg-slate-100 text-slate-400 border-none font-black text-[8px] uppercase tracking-tighter px-2">{type}</Badge>
                </div>
            </TableCell>
            <TableCell className="text-center font-mono font-black text-blue-600 text-[12px]">
                {total} <span className="text-slate-300 font-bold mx-1">/</span> <span className="text-indigo-600">{pwd}</span>
            </TableCell>
            <TableCell className="text-center">
                <AuditBadge val={wheel} />
            </TableCell>
            <TableCell className="text-center">
                <AuditBadge val={toilet} />
            </TableCell>
            <TableCell className="text-center">
                <AuditBadge val={power} />
            </TableCell>
            <TableCell className="text-center">
                <p className="text-[10px] font-bold text-slate-400 uppercase">{date}</p>
            </TableCell>
            <TableCell className="text-right px-10">
                <Badge className={`rounded-full px-5 py-2 text-[8px] font-black uppercase border-none tracking-widest ${statusColor}`}>
                    {status}
                </Badge>
            </TableCell>
        </TableRow>
    )
}

function AuditBadge({ val }: { val: string }) {
    const isYes = val === 'Yes';
    const isNo = val === 'No';
    return (
        <Badge className={`border-none font-black text-[8px] uppercase px-2.5 py-0.5 shadow-sm ${isYes ? 'bg-green-50 text-green-700' : isNo ? 'bg-red-50 text-red-700' : 'bg-orange-50 text-orange-700'
            }`}>
            {val}
        </Badge>
    );
}

function StatTile({ label, value, icon, color, alert }: any) {
    return (
        <div className={`group relative text-left p-8 rounded-[40px] overflow-hidden transition-all duration-500 h-44 flex flex-col justify-between shadow-md hover:shadow-xl hover:-translate-y-1 bg-gradient-to-br ${color} text-white border-t border-white/20`}>
            <div className="absolute inset-0 opacity-[0.1] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
            <div className="relative z-10 flex flex-col justify-between h-full">
                <div className="h-10 w-10 rounded-xl bg-white/20 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform">
                    {React.cloneElement(icon, { size: 22, className: "text-white" })}
                </div>
                <div>
                    <p className="text-3xl font-black tracking-tighter drop-shadow-sm">{value}</p>
                    <p className="text-[10px] font-black uppercase tracking-[0.1em] opacity-80 leading-tight mt-1">{label}</p>
                </div>
            </div>
            {alert && <div className="absolute top-6 right-6 h-2 w-2 rounded-full bg-white animate-ping" />}
        </div>
    )
}