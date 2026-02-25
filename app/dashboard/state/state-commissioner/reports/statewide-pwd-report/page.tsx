// app/dashboard/scpd/reports/pwd-master/page.tsx
"use client";
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
    Table, TableBody, TableCell, TableHead, TableHeader, TableRow
} from "@/components/ui/table";
import {
    Users, Map, Globe, Search, Filter, Printer,
    FileSpreadsheet, ArrowUpRight, ShieldCheck,
    BadgeCheck, Activity, Landmark, MapPin,
    TrendingUp, Download, PieChart, LayoutGrid,
    History, UserCircle2
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function PwDStateMasterReport() {
    return (
        <div className="space-y-10 animate-in fade-in duration-1000 pb-20 font-sans selection:bg-purple-100">

            {/* APEX ADMINISTRATIVE HEADER */}
            <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-6 bg-white p-10 rounded-[48px] border border-slate-200 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 p-10 opacity-[0.03] pointer-events-none text-purple-600">
                    <Users size={200} />
                </div>
                <div className="space-y-2 relative z-10">
                    <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border border-purple-200 shadow-sm">
                        <BadgeCheck size={14} /> National PwD Bridge Hub
                    </div>
                    <h1 className="text-5xl font-black text-slate-900 tracking-tighter uppercase leading-none">State Demographic Ledger</h1>
                    <p className="text-slate-500 font-medium italic text-lg tracking-tight">Consolidated statutory registry of Persons with Disabilities across all 75 Districts.</p>
                </div>
                <div className="flex gap-4 relative z-10">
                    <Button variant="outline" className="h-14 px-8 rounded-2xl border-slate-200 font-black uppercase tracking-widest text-[10px] bg-white gap-2 shadow-sm hover:bg-slate-50">
                        <FileSpreadsheet size={18} className="text-green-600" /> Export XLS
                    </Button>
                    <Button className="h-14 px-10 rounded-2xl bg-purple-700 text-white font-black uppercase tracking-widest text-[10px] shadow-2xl hover:bg-black transition-all gap-2 border-t border-white/20">
                        <Printer size={18} /> Print Certified Registry
                    </Button>
                </div>
            </div>

            {/* DEMOGRAPHIC KPI STRIP */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <RegistryStat label="Total PwDs (State)" val="1,242,850" color="text-purple-600" />
                <RegistryStat label="Urban Concentration" val="742,100" color="text-blue-600" />
                <RegistryStat label="Rural Reach" val="500,750" color="text-indigo-600" />
                <div className="bg-white border-2 border-purple-100 rounded-[32px] p-6 shadow-sm flex flex-col justify-center relative overflow-hidden group">
                    <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/topography.png')]" />
                    <p className="text-[9px] font-black uppercase text-purple-400 tracking-widest mb-1 relative z-10">Certification Rate</p>
                    <p className="text-3xl font-black text-purple-700 tracking-tighter group-hover:scale-105 transition-transform">94.2%</p>
                </div>
            </div>

            {/* MASTER DATA TABLE */}
            <Card className="rounded-[48px] border-slate-200 shadow-sm overflow-hidden bg-white">
                <CardHeader className="p-0">
                    <div className="p-8 bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-700 text-white relative overflow-hidden">
                        {/* CARBON FIBER TEXTURE OVERLAY */}
                        <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
                        <div className="flex flex-col md:flex-row justify-between items-center gap-6 relative z-10">
                            <div className="flex items-center gap-4">
                                <div className="h-12 w-12 rounded-2xl bg-white/20 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-xl group-hover:rotate-6 transition-transform">
                                    <Globe size={24} />
                                </div>
                                <CardTitle className="text-sm font-black uppercase tracking-[0.3em]">Statewide Statutory Distribution</CardTitle>
                            </div>
                            <div className="flex gap-4 w-full md:w-auto">
                                <div className="relative flex-1 md:w-80">
                                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-white/50" />
                                    <input className="w-full pl-11 pr-4 py-3 bg-white/10 border border-white/20 rounded-2xl text-[10px] font-black uppercase outline-none text-white placeholder:text-white/40 focus:bg-white/20 transition-all shadow-inner" placeholder="Search District or Category..." />
                                </div>
                                <Button variant="outline" size="icon" className="h-12 w-12 rounded-2xl border-white/20 bg-white/10 text-white hover:bg-white/20"><Filter size={18} /></Button>
                            </div>
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="p-0">
                    <Table>
                        <TableHeader className="bg-slate-50/80 font-sans">
                            <TableRow className="border-slate-100">
                                <TableHead className="px-8 py-6 text-[9px] font-black uppercase tracking-widest text-slate-400">District Hub</TableHead>
                                <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400">Disability Category</TableHead>
                                <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400 text-center">Total PwDs</TableHead>
                                <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400 text-center">Male</TableHead>
                                <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400 text-center">Female</TableHead>
                                <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400 text-center">Others</TableHead>
                                <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400 text-center">Rural</TableHead>
                                <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400 text-center">Urban</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody className="divide-y divide-slate-50">
                            <DemographicRow
                                district="Lucknow"
                                category="Locomotor"
                                total="42,100"
                                male="21,000"
                                female="21,050"
                                others="50"
                                rural="12,000"
                                urban="30,100"
                            />
                            <DemographicRow
                                district="Varanasi"
                                category="Visual"
                                total="18,200"
                                male="9,100"
                                female="9,080"
                                others="20"
                                rural="14,000"
                                urban="4,200"
                            />
                            <DemographicRow
                                district="Gautam Buddha Ngr"
                                category="Hearing"
                                total="12,400"
                                male="6,200"
                                female="6,150"
                                others="50"
                                rural="2,100"
                                urban="10,300"
                            />
                            <DemographicRow
                                district="Meerut"
                                category="Multiple"
                                total="8,450"
                                male="4,200"
                                female="4,240"
                                others="10"
                                rural="6,000"
                                urban="2,450"
                            />
                            <DemographicRow
                                district="Agra"
                                category="Intellectual"
                                total="11,200"
                                male="5,600"
                                female="5,590"
                                others="10"
                                rural="8,100"
                                urban="3,100"
                            />
                            <DemographicRow
                                district="Kanpur Nagar"
                                category="Locomotor"
                                total="34,800"
                                male="17,400"
                                female="17,350"
                                others="50"
                                rural="10,200"
                                urban="24,600"
                            />
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>

            {/* FOOTER SYNC STATUS */}
            <footer className="flex justify-between items-center pt-8 border-t border-slate-200">
                <div className="flex items-center gap-4 text-slate-400">
                    <Activity size={18} className="text-purple-600 animate-pulse" />
                    <span className="text-[10px] font-black uppercase tracking-widest leading-none">Statewide Census Sync: Active • 1.2M Records Mirroring National Bridge</span>
                </div>
                <div className="flex gap-6">
                    <button className="text-[10px] font-black uppercase text-purple-600 hover:underline">Download Master Zip</button>
                    <button className="text-[10px] font-black uppercase text-slate-400 hover:text-slate-900">District Map View</button>
                </div>
            </footer>
        </div>
    );
}

/* UI SUB-COMPONENTS */

function RegistryStat({ label, val, color }: any) {
    return (
        <Card className="rounded-[32px] border-slate-100 bg-white p-6 shadow-sm group hover:shadow-xl transition-all duration-500 overflow-hidden relative">
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/topography.png')]" />
            <p className="text-[9px] font-black uppercase text-slate-400 tracking-widest mb-1 relative z-10">{label}</p>
            <p className={`text-2xl font-black tracking-tighter relative z-10 ${color}`}>{val}</p>
        </Card>
    )
}

function DemographicRow({ district, category, total, male, female, others, rural, urban }: any) {
    return (
        <TableRow className="border-none hover:bg-slate-50 transition-all group cursor-pointer font-sans">
            <TableCell className="px-8 py-6">
                <div className="flex items-center gap-3">
                    <div className="h-1.5 w-1.5 rounded-full bg-purple-500 shadow-[0_0_8px_rgba(126,34,206,0.3)]" />
                    <span className="text-xs font-black text-slate-800 uppercase tracking-tight leading-none">{district}</span>
                </div>
            </TableCell>
            <TableCell>
                <Badge className="bg-slate-100 text-slate-500 border-none font-black text-[8px] uppercase tracking-widest px-2.5 py-0.5">
                    {category}
                </Badge>
            </TableCell>
            <TableCell className="text-center font-mono font-black text-indigo-700 text-[12px] bg-indigo-50/30">
                {total}
            </TableCell>
            <TableCell className="text-center font-bold text-slate-600 text-[11px]">{male}</TableCell>
            <TableCell className="text-center font-bold text-slate-600 text-[11px]">{female}</TableCell>
            <TableCell className="text-center font-bold text-slate-400 text-[11px]">{others}</TableCell>
            <TableCell className="text-center font-bold text-slate-700 text-[11px]">{rural}</TableCell>
            <TableCell className="text-center font-bold text-slate-700 text-[11px]">{urban}</TableCell>
        </TableRow>
    )
}