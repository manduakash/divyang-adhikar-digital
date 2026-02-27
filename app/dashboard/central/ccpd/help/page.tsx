// app/dashboard/scpd/help/support/page.tsx
"use client";
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
    Headphones, LifeBuoy, Search, Filter,
    Plus, MessageSquare, History, CheckCircle2,
    AlertCircle, Clock, Paperclip, Upload,
    ShieldCheck, Globe, Activity, Sparkles,
    Database, Accessibility, HardDrive,
    ArrowUpRight, Monitor, Landmark, BadgeCheck,
    Send,
    ShieldAlert
} from "lucide-react";
import {
    Select, SelectContent, SelectItem, SelectTrigger, SelectValue
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function StatutorySupportHub() {
    const [ticketStatus, setTicketStatus] = useState('ACTIVE');

    return (
        <div className="space-y-10 animate-in fade-in duration-1000 pb-20 font-sans selection:bg-indigo-100">

            {/* 1. SUPPORT HUB HEADER - CARBON FIBER TEXTURE */}
            <Card className="rounded-[40px] border-none bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 p-1 relative overflow-hidden shadow-2xl shadow-indigo-200">
                <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
                <div className="bg-white rounded-[38px] p-10 relative z-10 flex flex-col xl:flex-row justify-between items-center gap-10">
                    <div className="space-y-4 flex-1">
                        <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.2em] border border-indigo-100">
                            <BadgeCheck size={14} /> Portal Support Node
                        </div>
                        <h1 className="text-5xl font-black text-slate-900 tracking-tighter uppercase leading-none">Help & Assistance</h1>
                        <p className="text-slate-500 font-medium italic text-lg max-w-xl">Statutory help-desk for technical portal navigation and procedural compliance support.</p>
                    </div>

                    <div className="flex gap-4">
                        <div className="p-6 bg-slate-50 rounded-[32px] border border-slate-100 text-center min-w-[140px] shadow-inner">
                            <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-1">Avg Response</p>
                            <p className="text-xl font-black text-slate-900 uppercase tracking-tighter">04 Hours</p>
                        </div>
                        <div className="p-6 bg-indigo-900 rounded-[32px] text-white text-center min-w-[140px] shadow-2xl relative overflow-hidden">
                            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/topography.png')]" />
                            <p className="text-[8px] font-black text-indigo-400 uppercase tracking-widest mb-1">Success Rate</p>
                            <p className="text-xl font-black text-white uppercase tracking-tighter">98.2%</p>
                        </div>
                    </div>
                </div>
            </Card>

            <div className="grid grid-cols-1 xl:grid-cols-12 gap-10">

                {/* 2. RAISE SUPPORT TICKET (MANDATED FORM) */}
                <div className="xl:col-span-5 space-y-8">
                    <Card className="rounded-[44px] border-slate-200 bg-white shadow-xl overflow-hidden group">
                        <CardHeader className="p-8 bg-gradient-to-r from-blue-600 to-indigo-700 text-white relative">
                            <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
                            <CardTitle className="text-[10px] font-black uppercase tracking-[0.3em] flex items-center gap-3 relative z-10">
                                <Plus size={16} /> Raise Statutory Support Ticket
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="p-10 space-y-8 relative overflow-hidden">
                            <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />

                            <div className="space-y-6 relative z-10">
                                <div className="space-y-3">
                                    <label className="text-[10px] font-black uppercase text-slate-400 ml-1 tracking-widest leading-none">1. Issue Category</label>
                                    <Select>
                                        <SelectTrigger className="h-14 rounded-2xl bg-slate-50 border-none font-bold text-slate-800 shadow-inner px-6">
                                            <SelectValue placeholder="Select (Technical / Data / Access / Other)" />
                                        </SelectTrigger>
                                        <SelectContent className="rounded-2xl shadow-2xl">
                                            <SelectItem value="tech" className="font-bold py-3 uppercase text-[10px] tracking-widest"><Monitor className="inline mr-2" size={12} /> Technical Issue</SelectItem>
                                            <SelectItem value="data" className="font-bold py-3 uppercase text-[10px] tracking-widest"><Database className="inline mr-2" size={12} /> Data Correction</SelectItem>
                                            <SelectItem value="access" className="font-bold py-3 uppercase text-[10px] tracking-widest"><Accessibility className="inline mr-2" size={12} /> Accessibility Tool</SelectItem>
                                            <SelectItem value="other" className="font-bold py-3 uppercase text-[10px] tracking-widest"><Globe className="inline mr-2" size={12} /> Other / Procedural</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div className="space-y-3">
                                    <label className="text-[10px] font-black uppercase text-slate-400 ml-1 tracking-widest leading-none">2. Subject Headline</label>
                                    <Input placeholder="Enter brief summary of assistance needed..." className="h-14 bg-slate-50 border-none rounded-2xl px-6 font-bold shadow-inner" />
                                </div>

                                <div className="space-y-3">
                                    <label className="text-[10px] font-black uppercase text-slate-400 ml-1 tracking-widest leading-none">3. Detailed Description</label>
                                    <Textarea className="min-h-[140px] bg-slate-50 border-none rounded-[32px] p-6 text-sm font-medium italic text-slate-500 shadow-inner resize-none" placeholder="Elaborate on the issue or procedural bottleneck faced..." />
                                </div>

                                {/* ATTACHMENTS (Mandated Feature) */}
                                <div className="space-y-3">
                                    <label className="text-[10px] font-black uppercase text-slate-400 ml-1 tracking-widest leading-none">4. Evidence / Screenshots</label>
                                    <div className="p-8 border-2 border-dashed border-indigo-100 rounded-[32px] bg-slate-50/50 flex flex-col items-center justify-center group hover:bg-white hover:border-indigo-400 transition-all cursor-pointer">
                                        <Upload className="text-slate-300 group-hover:text-indigo-600 mb-3" size={32} />
                                        <span className="text-[9px] font-black text-slate-400 uppercase tracking-[0.2em]">Attach Support Documents</span>
                                    </div>
                                </div>

                                <Button className="w-full h-16 bg-slate-950 text-white hover:bg-blue-600 rounded-[28px] font-black uppercase tracking-[0.25em] text-[10px] shadow-2xl transition-all hover:scale-[1.02]">
                                    Raise Ticket <Send size={14} className="ml-2" />
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* 3. TICKET STATUS & HISTORY (8 COLS) */}
                <div className="xl:col-span-7 space-y-8">
                    <Card className="rounded-[48px] border-slate-200 shadow-sm overflow-hidden bg-white min-h-[600px]">
                        <CardHeader className="p-8 border-b border-slate-50 bg-slate-50/30 flex flex-row justify-between items-center">
                            <div className="flex gap-4 items-center">
                                <History className="text-indigo-600" size={20} />
                                <CardTitle className="text-sm font-black uppercase tracking-widest text-slate-400">Statutory Resolution Ledger</CardTitle>
                            </div>
                            <div className="relative group">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-400 group-focus-within:text-indigo-600" />
                                <input className="pl-11 pr-6 py-2.5 bg-white border border-slate-200 rounded-2xl text-[10px] font-bold outline-none w-64 shadow-sm" placeholder="Search Ticket ID..." />
                            </div>
                        </CardHeader>
                        <CardContent className="p-0">
                            <Table>
                                <TableHeader className="bg-slate-50">
                                    <TableRow className="border-slate-100">
                                        <TableHead className="px-10 py-6 text-[9px] font-black uppercase tracking-widest text-slate-400">Ticket ID</TableHead>
                                        <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400">Issue Subject</TableHead>
                                        <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400 text-center">Category</TableHead>
                                        <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400 text-center">Last Active</TableHead>
                                        <TableHead className="text-right px-10 text-[9px] font-black uppercase tracking-widest text-slate-400">Status</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody className="divide-y divide-slate-50">
                                    <TicketRow id="TK-LKO-910" subject="eSign Verification Failure" cat="TECHNICAL" date="Today" status="PENDING" warning />
                                    <TicketRow id="TK-LKO-882" subject="Master ID Sync Latency" cat="DATA" date="14 Oct" status="RESOLVED" success />
                                    <TicketRow id="TK-LKO-001" subject="Ramp Slope Audit Logic" cat="ACCESS" date="10 Oct" status="CLOSED" success />
                                    <TicketRow id="TK-LKO-442" subject="Department Node Inactive" cat="OTHER" date="05 Oct" status="ESCALATED" alert />
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <Card className="rounded-[40px] border-none bg-slate-900 text-white p-10 shadow-2xl relative overflow-hidden group">
                            <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/circuit-board.png')]" />
                            <div className="relative z-10 space-y-6">
                                <div className="flex items-center gap-3 text-blue-400">
                                    <ShieldAlert size={24} />
                                    <h3 className="text-[10px] font-black uppercase tracking-widest">Escalation Protocol</h3>
                                </div>
                                <p className="text-sm font-bold leading-relaxed uppercase tracking-tighter">
                                    Tickets unresolved beyond 48 hours are automatically escalated to the <b>Technical Nodal Hub</b>.
                                </p>
                                <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden shadow-inner">
                                    <div className="h-full bg-blue-500 animate-pulse shadow-[0_0_10px_rgba(59,130,246,0.5)]" style={{ width: '60%' }} />
                                </div>
                            </div>
                        </Card>

                        <div className="p-10 bg-indigo-50 rounded-[40px] border border-indigo-100 flex flex-col justify-center gap-4">
                            <div className="flex items-center gap-3">
                                <Sparkles className="text-indigo-600" size={24} />
                                <h3 className="text-sm font-black uppercase text-indigo-950">Intelligent Hub</h3>
                            </div>
                            <p className="text-[11px] font-bold text-indigo-800/60 uppercase tracking-widest leading-relaxed">
                                Resolution history is analyzed to optimize the <b>State FAQ Hub</b> every statutory cycle.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

/* UI SUB-COMPONENTS */

function TicketRow({ id, subject, cat, date, status, success, alert, warning }: any) {
    const statusColor = success ? 'text-green-600 bg-green-50' : alert ? 'text-red-600 bg-red-50' : warning ? 'text-orange-600 bg-orange-50' : 'text-blue-600 bg-blue-50';
    return (
        <TableRow className="border-none hover:bg-slate-50 transition-all group cursor-pointer">
            <TableCell className="px-10 py-6">
                <span className="text-[11px] font-mono font-black text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded-md uppercase tracking-tighter">{id}</span>
                <p className="text-[7px] font-black text-slate-400 uppercase mt-2 tracking-widest">Auto-Generated</p>
            </TableCell>
            <TableCell>
                <p className="text-sm font-black text-slate-800 uppercase tracking-tight leading-none">{subject}</p>
                <p className="text-[8px] font-bold text-slate-400 uppercase tracking-widest mt-1.5 flex items-center gap-1"><History size={10} /> View Thread</p>
            </TableCell>
            <TableCell className="text-center">
                <Badge className="bg-slate-100 text-slate-500 border-none font-black text-[8px] uppercase px-2 py-0.5 tracking-tighter">{cat}</Badge>
            </TableCell>
            <TableCell className="text-center">
                <span className="text-[10px] font-bold text-slate-400 uppercase">{date}</span>
            </TableCell>
            <TableCell className="text-right px-10">
                <Badge className={`rounded-full px-4 py-1 text-[8px] font-black uppercase border-none shadow-sm ${statusColor}`}>
                    {status}
                </Badge>
            </TableCell>
        </TableRow>
    )
}