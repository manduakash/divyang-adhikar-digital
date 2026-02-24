// app/dashboard/scpd/composition/page.tsx
"use client";
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
    Users, UserCheck, UserPlus, ShieldCheck,
    FileText, Calendar, Upload, AlertCircle,
    Search, Filter, Printer, Download,
    ChevronRight, ArrowLeft, History, Clock,
    MoreVertical, CheckCircle2, XCircle, Landmark
} from "lucide-react";
import {
    Table, TableBody, TableCell, TableHead, TableHeader, TableRow
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

export default function CommissionComposition() {

    // Section A3.1 Mandated Roles & Summary Data
    const stats = {
        totalSanctioned: 10,
        totalFilled: "08",
        totalVacant: "02",
        vacancyRate: "20%"
    };

    return (
        <div className="space-y-10 animate-in fade-in duration-700 pb-20 font-sans">

            {/* 1. APEX ADMINISTRATIVE HEADER */}
            <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-6 mb-10">
                <div className="space-y-1">
                    <div className="flex items-center gap-2 text-indigo-600 font-black uppercase text-[10px] tracking-[0.2em]">
                        <ArrowLeft size={14} /> Commission Hub / A3.1 Composition
                    </div>
                    <h1 className="text-4xl font-black text-slate-900 tracking-tighter uppercase leading-none">Statutory Composition</h1>
                    <p className="text-slate-500 font-medium italic">Monitoring sanctioned strength and incumbency of the Commission.</p>
                </div>
                <div className="flex gap-3">
                    <Button variant="outline" className="h-14 px-8 rounded-2xl border-slate-200 font-bold bg-white shadow-sm gap-2">
                        <History size={18} /> Past Tenure Log
                    </Button>
                    <Button className="h-14 px-10 rounded-2xl bg-indigo-900 text-white font-black uppercase tracking-widest text-[10px] shadow-2xl hover:bg-black transition-all gap-2">
                        <UserPlus size={18} /> Update Composition
                    </Button>
                </div>
            </div>

            {/* 2. STATUTORY SUMMARY TILES (Outputs: Filled vs Vacant) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <SummaryTile label="Sanctioned Strength" value={stats.totalSanctioned} icon={<Landmark />} color="from-slate-700 via-slate-800 to-slate-900" />
                <SummaryTile label="Posts Filled" value={stats.totalFilled} icon={<UserCheck />} color="from-emerald-500 via-teal-600 to-green-700" />
                <SummaryTile label="Posts Vacant" value={stats.totalVacant} icon={<UserPlus />} color="from-red-600 via-rose-700 to-red-800" alert />
                <div className="bg-white border-2 border-indigo-100 rounded-[32px] p-6 shadow-sm flex flex-col justify-center relative overflow-hidden group">
                    <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/topography.png')]" />
                    <p className="text-[9px] font-black uppercase tracking-widest text-indigo-400 mb-1">Vacancy Rate</p>
                    <p className="text-4xl font-black text-indigo-700 tracking-tighter group-hover:scale-105 transition-transform">{stats.vacancyRate}</p>
                    <div className="w-full h-1 bg-slate-100 rounded-full mt-4 overflow-hidden">
                        <div className="h-full bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.3)]" style={{ width: stats.vacancyRate }} />
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

                {/* 3. COMPOSITION REGISTRY (Table Format) */}
                <div className="lg:col-span-8">
                    <Card className="rounded-[40px] border-slate-200 shadow-sm overflow-hidden bg-white min-h-[600px]">
                        <CardHeader className="p-8 border-b border-slate-50 bg-slate-50/30 flex flex-row justify-between items-center">
                            <CardTitle className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Section A3.1: Statutory Role Ledger</CardTitle>
                            <div className="flex gap-3">
                                <div className="relative group">
                                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-300 group-focus-within:text-indigo-600" />
                                    <input className="pl-9 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-[10px] font-bold outline-none w-48 shadow-inner" placeholder="Search Roles..." />
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent className="p-0">
                            <Table>
                                <TableHeader className="bg-white">
                                    <TableRow className="border-slate-100">
                                        <TableHead className="px-8 py-5 text-[9px] font-black uppercase tracking-widest text-slate-400">Post / Role</TableHead>
                                        <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400 text-center">Incumbent</TableHead>
                                        <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400 text-center">Appointment</TableHead>
                                        <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400 text-center">Tenure End</TableHead>
                                        <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400 text-center">Status</TableHead>
                                        <TableHead className="text-right px-8"></TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody className="divide-y divide-slate-50">
                                    <RoleRow
                                        post="State Commissioner"
                                        incumbent="Dr. S.K. Srivastava"
                                        appt="14 Jan 2022"
                                        tenure="13 Jan 2025"
                                        isFilled={true}
                                    />
                                    <RoleRow
                                        post="Member (Social Work)"
                                        incumbent="Smt. Reena Rai"
                                        appt="02 Mar 2023"
                                        tenure="01 Mar 2026"
                                        isFilled={true}
                                    />
                                    <RoleRow
                                        post="Member (Expert)"
                                        incumbent="--"
                                        appt="--"
                                        tenure="--"
                                        isFilled={false}
                                        vacancySince="124 Days"
                                    />
                                    <RoleRow
                                        post="Secretary"
                                        incumbent="Amitabh Kant, IAS"
                                        appt="10 Oct 2023"
                                        tenure="09 Oct 2026"
                                        isFilled={true}
                                    />
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>
                </div>

                {/* 4. VACANCY ALERT & NOTIFICATION SIDEBAR */}
                <div className="lg:col-span-4 space-y-8 sticky top-28">
                    <Card className="rounded-[40px] border-none bg-slate-900 text-white p-8 shadow-2xl relative overflow-hidden group">
                        <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/circuit-board.png')]" />
                        <div className="relative z-10 space-y-6">
                            <div className="flex items-center gap-3">
                                <AlertCircle className="text-red-400" />
                                <h3 className="text-sm font-black uppercase tracking-widest text-red-400">Vacancy Alert</h3>
                            </div>
                            <div className="space-y-4">
                                <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                                    <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Active Vacancies</p>
                                    <p className="text-lg font-black text-white mt-1">Member (Expert) - Role B</p>
                                    <p className="text-[9px] font-bold text-red-400 uppercase mt-1">Pending since 124 Days</p>
                                </div>
                            </div>
                            <p className="text-[10px] font-medium text-slate-500 leading-relaxed uppercase tracking-tighter">
                                Statutory roles vacant beyond 90 days are automatically flagged in the <b>Annual Report Section 2</b>.
                            </p>
                            <Button className="w-full h-12 bg-white text-slate-900 hover:bg-indigo-50 rounded-2xl font-black uppercase tracking-widest text-[9px]">
                                Notify Secretariat
                            </Button>
                        </div>
                    </Card>

                    <Card className="rounded-[40px] border-slate-200 p-8 bg-white shadow-sm relative overflow-hidden">
                        <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/blueprint.png')]" />
                        <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-8 border-b pb-4">Composition Protocol</h4>
                        <div className="space-y-6">
                            <ProtocolStep text="Verify sanctioned strength against State Gazette." />
                            <ProtocolStep text="Tenure End Date triggers reminder at T-90 days." />
                            <ProtocolStep text="Ensure all Appointment Orders are digitally signed." />
                            <ProtocolStep text="Role mapping affects system delegation rights." />
                        </div>
                    </Card>
                </div>

            </div>
        </div>
    );
}

/* UI SUB-COMPONENTS */

function SummaryTile({ label, value, icon, color, alert }: any) {
    return (
        <div className={`group relative text-left p-6 rounded-[32px] overflow-hidden transition-all duration-500 h-40 flex flex-col justify-between shadow-md hover:shadow-xl hover:-translate-y-1 bg-gradient-to-br ${color} text-white border-t border-white/20`}>
            <div className="absolute inset-0 opacity-[0.08] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
            <div className="relative z-10 flex flex-col justify-between h-full">
                <div className="h-9 w-9 rounded-xl bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform">
                    {React.cloneElement(icon, { size: 18, className: "text-white" })}
                </div>
                <div>
                    <p className="text-2xl font-black tracking-tighter drop-shadow-sm">{value}</p>
                    <p className="text-[9px] font-black uppercase tracking-[0.1em] opacity-80 leading-tight mt-1">{label}</p>
                </div>
            </div>
            {alert && <div className="absolute top-4 right-4 h-1.5 w-1.5 rounded-full bg-white animate-ping" />}
        </div>
    )
}

function RoleRow({ post, incumbent, appt, tenure, isFilled, vacancySince }: any) {
    return (
        <TableRow className="border-none hover:bg-slate-50 transition-all group cursor-pointer font-sans">
            <TableCell className="px-8 py-6">
                <div className="flex items-center gap-3">
                    <div className={`h-1.5 w-1.5 rounded-full ${isFilled ? 'bg-green-500' : 'bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.4)]'}`} />
                    <span className="text-xs font-black text-slate-800 uppercase tracking-tight leading-none">{post}</span>
                </div>
            </TableCell>
            <TableCell className="text-center">
                <span className={`text-[11px] font-bold ${isFilled ? 'text-slate-700' : 'text-slate-300 italic'}`}>{incumbent}</span>
            </TableCell>
            <TableCell className="text-center text-[10px] font-bold text-slate-400 uppercase">{appt}</TableCell>
            <TableCell className="text-center text-[10px] font-bold text-slate-400 uppercase">{tenure}</TableCell>
            <TableCell className="text-center">
                <Badge className={`rounded-full px-3 py-0.5 text-[8px] font-black uppercase border-none shadow-none ${isFilled ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                    {isFilled ? 'FILED' : 'VACANT'}
                </Badge>
                {!isFilled && <p className="text-[7px] font-black text-red-400 mt-1 uppercase">Since {vacancySince}</p>}
            </TableCell>
            <TableCell className="text-right px-8 opacity-0 group-hover:opacity-100 transition-all">
                <div className="flex justify-end gap-2">
                    <button className="p-2 bg-slate-50 text-slate-400 rounded-xl hover:bg-slate-900 hover:text-white transition-all"><FileText size={14} /></button>
                    <button className="p-2 bg-slate-50 text-slate-400 rounded-xl hover:bg-indigo-600 hover:text-white transition-all"><MoreVertical size={14} /></button>
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