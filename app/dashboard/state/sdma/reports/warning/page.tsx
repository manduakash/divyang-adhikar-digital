// app/dashboard/sdma/reports/early-warning-coverage/page.tsx
"use client";
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
    Table, TableBody, TableCell, TableHead, TableHeader, TableRow
} from "@/components/ui/table";
import {
    Megaphone, Radio, Globe, ShieldCheck,
    BadgeCheck, Search, Filter, Printer,
    FileSpreadsheet, ArrowUpRight, CheckCircle2,
    AlertTriangle, History, Landmark,
    Activity, Zap, Siren, Navigation,
    Timer, Download, FileText, Smartphone,
    Volume2, Users, Wifi
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
    Select, SelectContent, SelectItem, SelectTrigger, SelectValue
} from "@/components/ui/select";

export default function EarlyWarningReport() {
    return (
        <div className="space-y-10 animate-in fade-in duration-1000 pb-20 font-sans selection:bg-orange-100 bg-white">

            {/* PRIMARY HUB HEADER - VIBRANT GRADIENT + CARBON FIBER */}
            <Card className="rounded-[40px] border-none bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 p-1 relative overflow-hidden shadow-2xl shadow-indigo-200">
                {/* CARBON FIBER TEXTURE OVERLAY */}
                <div className="absolute inset-0 opacity-10 pointer-events-none"
                    style={{ backgroundImage: `radial-gradient(black 2px, transparent 0)`, backgroundSize: '4px 4px' }} />

                <div className="bg-white rounded-[38px] p-10 relative z-10 flex flex-col xl:flex-row justify-between items-end gap-12">
                    <div className="flex-1 space-y-8">
                        <div className="flex items-center gap-6">
                            <div className="h-20 w-20 bg-gradient-to-br from-emerald-500 to-teal-700 rounded-3xl flex items-center justify-center text-white shadow-xl">
                                <Megaphone size={38} />
                            </div>
                            <div className="space-y-3 flex-1">
                                <p className="text-[10px] font-black uppercase text-emerald-600 tracking-[0.3em] ml-1 leading-none">Broadcast Control node</p>
                                <h1 className="text-4xl font-black text-slate-900 tracking-tighter uppercase leading-none">Early Warning & Outreach Coverage</h1>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-[9px] font-black uppercase text-slate-400 ml-1 tracking-widest leading-none">Select Regional Hub</label>
                                <Select defaultValue="all">
                                    <SelectTrigger className="w-full h-16 py-6 border-2 border-slate-200 bg-slate-50 rounded-2xl px-6 font-black text-slate-900 uppercase text-[10px] shadow-sm">
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent className="rounded-2xl border-2 border-slate-200 shadow-2xl">
                                        <SelectItem value="all">All Statewide Districts</SelectItem>
                                        <SelectItem value="lko">Lucknow Division</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="space-y-2">
                                <label className="text-[9px] font-black uppercase text-slate-400 ml-1 tracking-widest leading-none">Hazard Context</label>
                                <Select defaultValue="flood">
                                    <SelectTrigger className="w-full h-16 py-6 border-2 border-slate-200 bg-slate-50 rounded-2xl font-black text-slate-900 uppercase text-[10px] shadow-sm">
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent className="rounded-2xl border-2 border-slate-200 shadow-2xl">
                                        <SelectItem value="flood">Monsoon Inundation</SelectItem>
                                        <SelectItem value="cyclone">Cyclone / Storm Alert</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4 min-w-[320px] relative z-10">
                        <div className="bg-blue-50 border-2 border-blue-100 p-6 rounded-[32px] shadow-sm flex flex-col items-center text-center">
                            <Radio size={24} className="text-blue-600 mb-2 animate-pulse" />
                            <p className="text-[9px] font-black uppercase text-blue-700 tracking-widest">Active State Warning Sync</p>
                            <p className="text-2xl font-black text-slate-900 uppercase tracking-tighter">Verified Node Hub</p>
                        </div>
                        <div className="flex gap-3">
                            <Button variant="outline" className="flex-1 h-12 rounded-xl border-2 border-slate-200 font-bold bg-white gap-2 shadow-sm text-[9px] uppercase tracking-widest hover:bg-slate-50 transition-all"><FileSpreadsheet size={16} className="text-emerald-600" /> Export XLS</Button>
                            <Button className="flex-1 h-12 rounded-xl bg-slate-950 text-white font-black uppercase tracking-widest text-[9px] shadow-lg gap-2 group"><Printer size={16} /> Print Brief</Button>
                        </div>
                    </div>
                </div>
            </Card>

            {/* KPI AGGREGATE STRIP */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatTile label="PwDs Mapped (Registry)" value="1,242,850" icon={<BadgeCheck />} color="from-blue-600 to-blue-700" />
                <StatTile label="Total Nodes Reached" value="1,210,400" icon={<CheckCircle2 />} color="from-emerald-500 to-emerald-700" />
                <StatTile label="Pending / Unreached" value="32,450" icon={<AlertTriangle />} color="from-red-600 to-red-800" alert />
                <div className="bg-white border-2 border-emerald-100 rounded-[32px] p-8 shadow-sm flex flex-col justify-center relative overflow-hidden group">
                    <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/topography.png')]" />
                    <p className="text-[9px] font-black uppercase text-emerald-400 tracking-widest mb-1 relative z-10">Global Coverage %</p>
                    <p className="text-4xl font-black text-emerald-700 tracking-tighter group-hover:scale-105 transition-transform relative z-10">98.2%</p>
                    <div className="w-full h-1.5 bg-slate-100 rounded-full mt-4 overflow-hidden relative z-10">
                        <div className="h-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.4)]" style={{ width: '98%' }} />
                    </div>
                </div>
            </div>

            {/* MASTER REGISTRY LEDGER - CARBON FIBER TABLE HEADER */}
            <Card className="rounded-[48px] border-2 border-slate-200 shadow-sm overflow-hidden bg-white min-h-[700px]">
                <CardHeader className="p-0">
                    <div className="p-10 bg-gradient-to-r from-emerald-600 via-teal-600 to-blue-700 text-white relative overflow-hidden">
                        {/* CARBON FIBER TEXTURE OVERLAY */}
                        <div className="absolute inset-0 opacity-10 pointer-events-none"
                            style={{ backgroundImage: `radial-gradient(black 2px, transparent 0)`, backgroundSize: '4px 4px' }} />

                        <div className="flex flex-col md:flex-row justify-between items-center gap-6 relative z-10">
                            <div className="flex items-center gap-4">
                                <div className="h-12 w-12 rounded-2xl bg-white/20 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-xl">
                                    <Globe size={24} />
                                </div>
                                <CardTitle className="text-sm font-black uppercase tracking-[0.3em] text-white uppercase leading-none">STATEWIDE EARLY WARNING & OUTREACH REGISTRY</CardTitle>
                            </div>
                            <Badge className="bg-white/20 text-white border-none font-black text-[10px] px-5 py-2 uppercase tracking-widest">Aggregation Hub v5.2</Badge>
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="p-0">
                    <Table>
                        <TableHeader className="bg-slate-50/80 font-sans">
                            <TableRow className="border-b-2 border-slate-100">
                                <TableHead className="px-10 py-6 text-[9px] font-black uppercase tracking-widest text-emerald-600">District Node</TableHead>
                                <TableHead className="text-[9px] font-black uppercase tracking-widest text-indigo-600">Disaster Type</TableHead>
                                <TableHead className="text-[9px] font-black uppercase tracking-widest text-purple-600 text-center">PwDs Mapped</TableHead>
                                <TableHead className="text-[9px] font-black uppercase tracking-widest text-blue-600 text-center">Channels Used</TableHead>
                                <TableHead className="text-[9px] font-black uppercase tracking-widest text-emerald-600 text-center">PwDs Reached</TableHead>
                                <TableHead className="text-[9px] font-black uppercase tracking-widest text-indigo-600 text-center">Coverage Rate</TableHead>
                                <TableHead className="text-[9px] font-black uppercase tracking-widest text-red-600 text-center">Unreached PwDs</TableHead>
                                <TableHead className="text-right px-10 text-[9px] font-black uppercase tracking-widest text-orange-600">Corrective Measures</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody className="divide-y divide-slate-100 font-sans">
                            <CoverageRow
                                district="Lucknow Urban Hub" type="Flood" mapped="124,000" channels={['SMS', 'IVR', 'APP']}
                                reached="121,000" perc="97.5%" unreached="3,000" measures="Deployment of Field Volunteers" success
                            />
                            <CoverageRow
                                district="Meerut Cluster" type="Cyclone" mapped="42,000" channels={['Media', 'Volunteer']}
                                reached="21,000" perc="50.0%" unreached="21,000" measures="Activate Backup Satellite Hubs" alert
                            />
                            <CoverageRow
                                district="Varanasi East Node" type="Monsoon" mapped="88,200" channels={['IVR', 'Volunteer']}
                                reached="74,500" perc="84.4%" unreached="13,700" measures="Strengthen IVR Voice Gateways" warning
                            />
                            <CoverageRow
                                district="Howrah Central" type="Flood" mapped="114,800" channels={['SMS', 'Media', 'APP']}
                                reached="112,000" perc="97.5%" unreached="2,800" measures="Maintain Current Sync" success
                            />
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>

            {/* FOOTER AUDIT NOTICE */}
            <footer className="pt-12 border-t-2 border-slate-100 flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="flex items-center gap-4">
                    <Activity size={24} className="text-emerald-600 animate-pulse" />
                    <span className="text-[10px] font-black uppercase tracking-widest leading-none">Consolidated Statutory Coverage Monitor Active • Statewide Aggregation Verified</span>
                </div>
            </footer>
        </div>
    );
}

/* UI SUB-COMPONENTS */

function CoverageRow({ district, type, mapped, channels, reached, perc, unreached, measures, success, alert, warning }: any) {
    const statusColor = success ? 'bg-green-500 shadow-[0_0_8px_rgba(16,185,129,0.3)]' : alert ? 'bg-red-500 animate-pulse shadow-[0_0_8px_rgba(239,68,68,0.4)]' : 'bg-orange-500';

    return (
        <TableRow className="border-none hover:bg-slate-50 transition-all group cursor-pointer">
            <TableCell className="px-10 py-8 text-left">
                <div className="flex items-center gap-3">
                    <div className={`h-1.5 w-1.5 rounded-full shrink-0 ${statusColor}`} />
                    <span className="text-xs font-black text-slate-900 uppercase tracking-tight leading-none">{district}</span>
                </div>
            </TableCell>
            <TableCell>
                <Badge className="bg-slate-100 text-slate-400 border-2 border-slate-200 font-black text-[8px] uppercase tracking-tighter px-2">{type}</Badge>
            </TableCell>
            <TableCell className="text-center font-mono font-black text-indigo-700 text-[12px]">
                {mapped}
            </TableCell>
            <TableCell className="text-center">
                <div className="flex justify-center gap-1.5">
                    {channels.map((c: string) => (
                        <div key={c} className="h-7 w-7 rounded-lg bg-white border-2 border-slate-100 flex items-center justify-center text-slate-400 hover:text-indigo-600 transition-all shadow-sm group-hover:border-indigo-100">
                            {c === 'SMS' && <Smartphone size={12} />}
                            {c === 'IVR' && <Volume2 size={12} />}
                            {c === 'Volunteer' && <Users size={12} />}
                            {c === 'APP' && <Wifi size={12} />}
                            {c === 'Media' && <Globe size={12} />}
                        </div>
                    ))}
                </div>
            </TableCell>
            <TableCell className="text-center font-bold text-emerald-600 text-[11px]">{reached}</TableCell>
            <TableCell className="text-center">
                <span className={`text-[11px] font-mono font-black ${alert ? 'text-red-600 underline' : 'text-indigo-600'}`}>{perc}</span>
            </TableCell>
            <TableCell className="text-center">
                <span className={`text-[11px] font-black ${alert ? 'text-red-600' : 'text-slate-400'}`}>{unreached}</span>
            </TableCell>
            <TableCell className="text-right px-10">
                <div className="flex items-center justify-end gap-3 group/btn">
                    <p className={`text-[10px] font-bold uppercase italic leading-tight max-w-[180px] text-right ${alert ? 'text-red-700' : 'text-slate-500'}`}>{measures}</p>
                    <ArrowUpRight size={14} className="text-slate-200 group-hover/btn:text-emerald-600 transition-colors shrink-0" />
                </div>
            </TableCell>
        </TableRow>
    )
}

function StatTile({ label, value, icon, color, alert }: any) {
    return (
        <div className={`group relative text-left p-8 rounded-[40px] overflow-hidden transition-all duration-500 h-44 flex flex-col justify-between shadow-md hover:shadow-xl hover:-translate-y-1 bg-gradient-to-br ${color} text-white border-t-2 border-white/20`}>
            <div className="absolute inset-0 opacity-[0.06] pointer-events-none"
                style={{ backgroundImage: `radial-gradient(black 2px, transparent 0)`, backgroundSize: '4px 4px' }} />
            <div className="relative z-10 flex flex-col justify-between h-full">
                <div className="h-10 w-10 rounded-xl bg-white/20 backdrop-blur-md border-2 border-white/20 flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform">
                    {React.cloneElement(icon, { size: 22, className: "text-white shadow-sm" })}
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