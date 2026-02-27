// app/dashboard/sdma/reports/mock-drills/page.tsx
"use client";
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
    Table, TableBody, TableCell, TableHead, TableHeader, TableRow
} from "@/components/ui/table";
import {
    Activity, Users, MapPin, ShieldCheck, BadgeCheck,
    Search, Filter, Printer, FileText,
    ArrowUpRight, Globe, CheckCircle2,
    AlertTriangle, History, Landmark,
    Zap, Siren, Navigation,
    Timer, Download, FileSpreadsheet,
    RotateCw, PlayCircle, ClipboardCheck,
    ClipboardList
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
    Select, SelectContent, SelectItem, SelectTrigger, SelectValue
} from "@/components/ui/select";

export default function MockDrillReport() {
    return (
        <div className="space-y-10 animate-in fade-in duration-1000 pb-20 font-sans selection:bg-emerald-100">

            {/* HUB PRIMARY HEADER - VIBRANT GRADIENT + CARBON FIBER */}
            <Card className="rounded-[40px] border-none bg-gradient-to-r from-emerald-500 via-indigo-600 to-purple-600 p-1 relative overflow-hidden shadow-2xl shadow-indigo-200">
                <div className="absolute inset-0 opacity-15 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
                {/* CARBON FIBER TEXTURE OVERLAY */}
                <div className="absolute inset-0 opacity-10 pointer-events-none"
                    style={{ backgroundImage: `radial-gradient(black 2px, transparent 0)`, backgroundSize: '4px 4px' }} />

                <div className="bg-white rounded-[38px] p-10 relative z-10 flex flex-col xl:flex-row justify-between items-end gap-12">
                    <div className="flex-1 space-y-8">
                        <div className="flex items-center gap-6">
                            <div className="h-20 w-20 bg-gradient-to-br from-indigo-500 to-purple-700 rounded-3xl flex items-center justify-center text-white shadow-xl">
                                <RotateCw size={38} />
                            </div>
                            <div className="space-y-3 flex-1">
                                <p className="text-[10px] font-black uppercase text-indigo-600 tracking-[0.3em] ml-1 leading-none">Readiness Validation Node</p>
                                <h1 className="text-4xl font-black text-slate-900 tracking-tighter uppercase leading-none">Mock Drill & Preparedness Coverage</h1>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-[9px] font-black uppercase text-slate-400 ml-1 tracking-widest leading-none">District Node Selection</label>
                                <Select defaultValue="all">
                                    <SelectTrigger className="w-full h-16 py-6 border-2 border-slate-300 bg-slate-50 rounded-2xl px-6 font-black text-slate-900 uppercase text-[10px] shadow-sm">
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent className="rounded-2xl border-2 border-slate-300 shadow-2xl">
                                        <SelectItem value="all">All Statewide Districts</SelectItem>
                                        <SelectItem value="lko">Lucknow Division</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="space-y-2">
                                <label className="text-[9px] font-black uppercase text-slate-400 ml-1 tracking-widest leading-none">Disaster Category</label>
                                <Select defaultValue="all">
                                    <SelectTrigger className="w-full h-16 py-6 border-2 border-slate-300 bg-slate-50 rounded-2xl px-6 font-black text-slate-900 uppercase text-[10px] shadow-sm">
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent className="rounded-2xl border-2 border-slate-300 shadow-2xl">
                                        <SelectItem value="all">All Hazards</SelectItem>
                                        <SelectItem value="flood">Flood Response</SelectItem>
                                        <SelectItem value="earthquake">Earthquake Response</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4 min-w-[320px] relative z-10">
                        <div className="bg-indigo-50 border-2 border-indigo-100 p-6 rounded-[32px] shadow-sm flex flex-col items-center text-center">
                            <Activity size={24} className="text-indigo-600 mb-2 animate-pulse" />
                            <p className="text-[9px] font-black uppercase text-indigo-700 tracking-widest">Statewide Readiness Index</p>
                            <p className="text-2xl font-black text-slate-900 uppercase tracking-tighter">84.2% Verified</p>
                        </div>
                        <div className="flex gap-3">
                            <Button variant="outline" className="flex-1 h-12 rounded-xl border-2 border-slate-300 font-bold bg-white gap-2 shadow-sm text-[9px] uppercase tracking-widest hover:bg-slate-50 transition-all"><FileSpreadsheet size={16} className="text-green-600" /> Export XLS</Button>
                            <Button className="flex-1 h-12 rounded-xl bg-slate-950 text-white font-black uppercase tracking-widest text-[10px] shadow-lg gap-2 group"><Printer size={16} /> Print Brief</Button>
                        </div>
                    </div>
                </div>
            </Card>

            {/* TACTICAL STAT TILES */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatTile label="Drills Conducted (FY)" value="142" icon={<PlayCircle />} color="from-blue-600 to-indigo-700" />
                <StatTile label="PwDs Participated" value="12,840" icon={<Users />} color="from-emerald-500 to-emerald-700" />
                <StatTile label="Remediation Points" value="84" icon={<ClipboardList size={18} />} color="from-orange-500 to-orange-700" alert />
                <StatTile label="District Compliance" value="92.4%" icon={<BadgeCheck />} color="from-purple-600 to-indigo-800" />
            </div>

            {/* MASTER REGISTRY LEDGER - CARBON FIBER TABLE HEADER */}
            <Card className="rounded-[48px] border-2 border-slate-200 shadow-sm overflow-hidden min-h-[750px]">
                <CardHeader className="p-0">
                    <div className="p-10 bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-700 text-white relative overflow-hidden">
                        {/* CARBON FIBER TEXTURE OVERLAY */}
                        <div className="absolute inset-0 opacity-10 pointer-events-none"
                            style={{ backgroundImage: `radial-gradient(black 2px, transparent 0)`, backgroundSize: '4px 4px' }} />

                        <div className="flex flex-col md:flex-row justify-between items-center gap-6 relative z-10">
                            <div className="flex items-center gap-4">
                                <div className="h-12 w-12 rounded-2xl bg-white/20 backdrop-blur-md border-2 border-white/20 flex items-center justify-center shadow-xl">
                                    <Siren size={24} />
                                </div>
                                <CardTitle className="text-sm font-black uppercase tracking-[0.3em] text-white leading-none">STATEWIDE MOCK DRILL & PREPAREDNESS REGISTRY</CardTitle>
                            </div>
                            <Badge className="bg-white/20 text-white border-none font-black text-[10px] px-5 py-2 uppercase tracking-widest">Aggregation Hub v5.2</Badge>
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="p-0">
                    <Table>
                        <TableHeader className="bg-slate-50/80 font-sans">
                            <TableRow className="border-b-2 border-slate-100">
                                <TableHead className="px-10 py-6 text-[9px] font-black uppercase tracking-widest text-indigo-600">District Node</TableHead>
                                <TableHead className="text-[9px] font-black uppercase tracking-widest text-blue-600">Disaster Type</TableHead>
                                <TableHead className="text-[9px] font-black uppercase tracking-widest text-emerald-600 text-center">Conducted</TableHead>
                                <TableHead className="text-[9px] font-black uppercase tracking-widest text-indigo-600 text-center">Date of Drill</TableHead>
                                <TableHead className="text-[9px] font-black uppercase tracking-widest text-purple-600 text-center">PwDs Participated</TableHead>
                                <TableHead className="text-[9px] font-black uppercase tracking-widest text-orange-600 text-center">Gaps Observed</TableHead>
                                <TableHead className="text-[9px] font-black uppercase tracking-widest text-emerald-600 text-center">Corrective Actions</TableHead>
                                <TableHead className="text-right px-10 text-[9px] font-black uppercase tracking-widest text-amber-600">Follow-up Status</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody className="divide-y divide-slate-100 font-sans">
                            <DrillRow
                                district="Lucknow Urban Hub" type="Flood / Rescue" conducted="Yes" date="14 Oct 2024"
                                participants="420" gaps="Ramp congestion" actions="Widen access point B" status="RESOLVED" success
                            />
                            <DrillRow
                                district="Meerut Cluster" type="Earthquake" conducted="Yes" date="02 Oct 2024"
                                participants="112" gaps="Audio alarm lag" actions="Sync with National App" status="IN PROGRESS" warning
                            />
                            <DrillRow
                                district="Agra Sector Hub" type="Heatwave" conducted="No" date="--"
                                participants="0" gaps="--" actions="--" status="OVERDUE" alert
                            />
                            <DistrictListRow district="Varanasi Region" type="Flood Sync" conducted="Yes" date="28 Sep 2024"
                                participants="280" gaps="Scribe shortage" actions="Recruit specialized volunteers" status="AUDIT PENDING"
                            />
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>

            {/* FOOTER AUDIT NOTICE */}
            <footer className="pt-12 border-t-2 border-slate-100 flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="flex items-center gap-4">
                    <BadgeCheck className="text-indigo-600 shadow-xl" size={24} />
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 leading-none">Statutory Audit Sync Active: v5.2 • Aggregated Statewide Drill Logs</span>
                </div>
            </footer>
        </div>
    );
}

/* UI SUB-COMPONENTS */

function DrillRow({ district, type, conducted, date, participants, gaps, actions, status, success, alert, warning }: any) {
    const statusColor = success ? 'bg-green-100 text-green-700' : alert ? 'bg-red-100 text-red-700 animate-pulse' : 'bg-orange-100 text-orange-700';

    return (
        <TableRow className="border-none hover:bg-slate-50 transition-all group cursor-pointer">
            <TableCell className="px-10 py-8">
                <div className="flex items-center gap-3">
                    <div className={`h-1.5 w-1.5 rounded-full shrink-0 ${success ? 'bg-green-500' : alert ? 'bg-red-500' : 'bg-orange-500'}`} />
                    <span className="text-xs font-black text-slate-900 uppercase tracking-tight leading-none">{district}</span>
                </div>
            </TableCell>
            <TableCell>
                <Badge className="bg-slate-100 text-slate-400 border-2 border-slate-200 font-black text-[8px] uppercase tracking-tighter px-2">{type}</Badge>
            </TableCell>
            <TableCell className="text-center">
                <Badge className={`border-none font-black text-[8px] uppercase px-3 py-1 shadow-sm ${conducted === 'Yes' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
                    {conducted}
                </Badge>
            </TableCell>
            <TableCell className="text-center font-mono font-black text-slate-900 text-[11px]">{date}</TableCell>
            <TableCell className="text-center font-bold text-indigo-600 text-[12px]">{participants}</TableCell>
            <TableCell className="text-center">
                <p className={`text-[10px] font-bold uppercase italic leading-tight max-w-[140px] mx-auto ${alert ? 'text-red-700' : 'text-slate-400'}`}>{gaps}</p>
            </TableCell>
            <TableCell className="text-center">
                <p className="text-[9px] font-black text-slate-800 uppercase tracking-tight leading-relaxed max-w-[160px] mx-auto">{actions}</p>
            </TableCell>
            <TableCell className="text-right px-10">
                <Badge className={`rounded-full px-5 py-2 text-[8px] font-black uppercase border-none tracking-widest ${statusColor}`}>
                    {status}
                </Badge>
            </TableCell>
        </TableRow>
    )
}

function DistrictListRow({ district, type, conducted, date, participants, gaps, actions, status }: any) {
    return (
        <TableRow className="border-none hover:bg-slate-50 transition-all group cursor-pointer opacity-70 grayscale">
            <TableCell className="px-10 py-8">
                <span className="text-xs font-black text-slate-400 uppercase tracking-tight">{district}</span>
            </TableCell>
            <TableCell><span className="text-[8px] font-black text-slate-300 uppercase">{type}</span></TableCell>
            <TableCell className="text-center"><span className="text-[8px] font-black text-slate-300 uppercase">{conducted}</span></TableCell>
            <TableCell className="text-center font-mono text-[10px] text-slate-300">{date}</TableCell>
            <TableCell className="text-center font-bold text-slate-300">{participants}</TableCell>
            <TableCell className="text-center italic text-[9px] text-slate-300">{gaps}</TableCell>
            <TableCell className="text-center font-black text-slate-300">{actions}</TableCell>
            <TableCell className="text-right px-10"><Badge className="bg-slate-100 text-slate-300 font-black text-[8px]">{status}</Badge></TableCell>
        </TableRow>
    )
}

function StatTile({ label, value, icon, color, alert }: any) {
    return (
        <div className={`group relative text-left p-8 rounded-[40px] overflow-hidden transition-all duration-500 h-44 flex flex-col justify-between shadow-md hover:shadow-xl hover:-translate-y-1 bg-gradient-to-br ${color} text-white border-t-2 border-white/20`}>
            <div className="absolute inset-0 opacity-10 pointer-events-none"
                style={{ backgroundImage: `radial-gradient(black 2px, transparent 0)`, backgroundSize: '4px 4px' }} />
            <div className="relative z-10 flex flex-col justify-between h-full">
                <div className="h-10 w-10 rounded-xl bg-white/20 backdrop-blur-md border-2 border-white/20 flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform">
                    {React.cloneElement(icon as React.ReactElement, {})}
                </div>
                <div>
                    <p className="text-3xl font-black tracking-tighter drop-shadow-sm leading-none">{value}</p>
                    <p className="text-[10px] font-black uppercase tracking-[0.1em] opacity-80 leading-tight mt-2">{label}</p>
                </div>
            </div>
            {alert && <div className="absolute top-6 right-6 h-2 w-2 rounded-full bg-white animate-ping shadow-[0_0_10px_white]" />}
        </div>
    )
}