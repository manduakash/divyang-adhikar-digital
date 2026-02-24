// app/dashboard/state/directions/registry/page.tsx
"use client";
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
    Table, TableBody, TableCell, TableHead, TableHeader, TableRow
} from "@/components/ui/table";
import {
    Gavel, Search, Filter, Printer, FileSpreadsheet,
    ArrowUpRight, Globe, Map, Sparkles, CheckCircle2,
    AlertTriangle, Landmark, ShieldCheck, School,
    Building2, FileText, Navigation, Calendar,
    Eye, Download, Briefcase,
    Activity,
    ChevronRight
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function StateStatutoryRegistry() {
    const [selectedInspection, setSelectedInspection] = useState<any>(null);

    return (
        <div className="space-y-10 animate-in fade-in duration-700 pb-20 font-sans">

            {/* 1. APEX HEADER */}
            <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-6 bg-white p-10 rounded-[40px] border border-slate-200 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 p-10 opacity-[0.03] pointer-events-none">
                    <ShieldCheck size={180} className="text-purple-600" />
                </div>
                <div className="space-y-2 relative z-10">
                    <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border border-purple-200">
                        <Globe size={14} className="animate-pulse" /> State Oversight Node / Registry Hub
                    </div>
                    <h1 className="text-4xl font-black text-slate-900 tracking-tighter uppercase leading-none">Statutory Audit Registry</h1>
                    <p className="text-slate-500 font-medium italic">Supervisory view of all District (DM) and Educational (DEO) level inspections.</p>
                </div>
                <div className="flex gap-4 relative z-10">
                    <Button variant="outline" className="h-14 px-8 rounded-2xl border-slate-200 font-bold bg-white gap-2">
                        <FileSpreadsheet size={18} className="text-green-600" /> Export State XLS
                    </Button>
                    <Button className="h-14 px-8 rounded-2xl bg-purple-700 text-white font-black uppercase tracking-widest text-[10px] shadow-2xl hover:bg-purple-900 transition-all">
                        Print State Summary
                    </Button>
                </div>
            </div>

            {/* 2. DYNAMIC REGISTRY TABS */}
            <Tabs defaultValue="all" className="space-y-8">
                <div className="flex justify-between items-center bg-white p-4 rounded-[32px] border border-slate-200 shadow-sm">
                    <TabsList className="bg-slate-100 p-1 rounded-2xl border border-slate-200 h-auto">
                        <TabsTrigger value="all" className="px-8 py-3 rounded-xl font-black text-[10px] uppercase tracking-widest data-[state=active]:bg-white">All Inspections</TabsTrigger>
                        <TabsTrigger value="dm" className="px-8 py-3 rounded-xl font-black text-[10px] uppercase tracking-widest data-[state=active]:bg-blue-600 data-[state=active]:text-white">DM Level (General)</TabsTrigger>
                        <TabsTrigger value="deo" className="px-8 py-3 rounded-xl font-black text-[10px] uppercase tracking-widest data-[state=active]:bg-indigo-600 data-[state=active]:text-white">DEO Level (Education)</TabsTrigger>
                    </TabsList>

                    <div className="flex gap-3">
                        <div className="relative group">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 group-focus-within:text-purple-600" />
                            <input className="pl-10 pr-4 py-3 bg-slate-50 border-2 rounded-2xl text-[10px] font-bold outline-none w-72 shadow-inner" placeholder="Search Establishment or ID..." />
                        </div>
                        <Button variant="outline" size="icon" className="h-12 w-12 rounded-2xl border-slate-200 hover:bg-slate-50"><Filter size={18} /></Button>
                    </div>
                </div>

                <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-start">

                    {/* REGISTRY LIST PANE (7 COLS) */}
                    <div className="xl:col-span-7">
                        <Card className="rounded-[40px] border-slate-200 shadow-sm overflow-hidden bg-white min-h-[600px]">
                            <CardContent className="p-0">
                                <Table>
                                    <TableHeader className="bg-slate-50/50">
                                        <TableRow className="border-slate-100">
                                            <TableHead className="px-8 py-5 text-[9px] font-black uppercase tracking-widest text-slate-400">Source Node</TableHead>
                                            <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400">Establishment / Institution</TableHead>
                                            <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400 text-center">Date</TableHead>
                                            <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400">Compliance</TableHead>
                                            <TableHead className="text-right px-8"></TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody className="divide-y divide-slate-50">
                                        {/* DM LEVEL ROW */}
                                        <InspectionRegistryRow
                                            node="DM Lucknow"
                                            target="Nagar Nigam Hub"
                                            date="12 Oct 2024"
                                            status="In Progress"
                                            type="DM"
                                            onClick={() => setSelectedInspection({
                                                id: 'INS-DM-001', type: 'DM', target: 'Nagar Nigam Hub', trigger: 'Routine Audit',
                                                date: '12-10-2024', findings: 'Ramp access in Block-C does not meet Section 44 standards. Signage missing in elevators.',
                                                deadline: '12-Nov-2024', file: 'inspection_report_dm_01.pdf'
                                            })}
                                            active={selectedInspection?.id === 'INS-DM-001'}
                                        />

                                        {/* DEO LEVEL ROW */}
                                        <InspectionRegistryRow
                                            node="DEO Kolkata"
                                            target="City Central High"
                                            date="15 Oct 2024"
                                            status="Complied"
                                            type="DEO"
                                            success
                                            onClick={() => setSelectedInspection({
                                                id: 'INS-DEO-882', type: 'DEO', target: 'City Central High', trigger: 'Complaint-Based',
                                                date: '15-10-2024', findings: 'Scribe provision issues verified. Institution directed to maintain PwD Exam Registry.',
                                                deadline: '30-Oct-2024', file: 'deo_educational_audit.pdf'
                                            })}
                                            active={selectedInspection?.id === 'INS-DEO-882'}
                                        />

                                        <InspectionRegistryRow
                                            node="DEO Lucknow"
                                            target="Primary School-B"
                                            date="18 Oct 2024"
                                            status="Overdue"
                                            type="DEO"
                                            alert
                                            onClick={() => setSelectedInspection({
                                                id: 'INS-DEO-901', type: 'DEO', target: 'Primary School-B', trigger: 'Routine Audit',
                                                date: '18-10-2024', findings: 'Total lack of tactile flooring in the main laboratory wing.',
                                                deadline: '20-Oct-2024', file: 'primary_school_findings.pdf'
                                            })}
                                            active={selectedInspection?.id === 'INS-DEO-901'}
                                        />
                                    </TableBody>
                                </Table>
                            </CardContent>
                        </Card>
                    </div>

                    {/* INSPECTION DETAIL / SCRUTINY PANE (5 COLS) */}
                    <div className="xl:col-span-5 space-y-6 sticky top-28 h-fit">
                        {selectedInspection ? (
                            <Card className="rounded-[40px] border-2 bg-slate-900 text-white shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-500">
                                {/* THEMATIC PATTERN BASED ON TYPE */}
                                <div className={`absolute inset-0 opacity-[0.05] pointer-events-none ${selectedInspection.type === 'DEO' ? "bg-[url('https://www.transparenttextures.com/patterns/circuit-board.png')]" : "bg-[url('https://www.transparenttextures.com/patterns/blueprint.png')]"}`} />

                                <CardHeader className="p-8 border-b border-white/10 flex flex-row justify-between items-center relative z-10">
                                    <div className="flex items-center gap-3">
                                        {selectedInspection.type === 'DEO' ? <School className="text-indigo-400" /> : <Building2 className="text-blue-400" />}
                                        <CardTitle className="text-[10px] font-black uppercase tracking-[0.2em] text-white">Inspection Source Data</CardTitle>
                                    </div>
                                    <Badge className={`${selectedInspection.type === 'DEO' ? 'bg-indigo-600' : 'bg-blue-600'} text-white border-2 font-black text-[8px]`}>
                                        {selectedInspection.type} AUTHORIZED
                                    </Badge>
                                </CardHeader>

                                <CardContent className="p-10 space-y-10 relative z-10">
                                    {/* Mirroring Entry Fields from images */}
                                    <div className="grid grid-cols-2 gap-8">
                                        <DetailItem label="Target Institution" value={selectedInspection.target} />
                                        <DetailItem label="Inspection Trigger" value={selectedInspection.trigger} />
                                        <DetailItem label="Inspection Date" value={selectedInspection.date} />
                                        <DetailItem label="Compliance Deadline" value={selectedInspection.deadline} />
                                    </div>

                                    <div className="space-y-3">
                                        <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest">Findings Registry</p>
                                        <div className="p-6 bg-white/5 rounded-3xl border border-white/10 text-sm font-medium leading-relaxed italic text-slate-300">
                                            "{selectedInspection.findings}"
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest">Inspection Report (PDF)</p>
                                        <div className="flex items-center justify-between p-4 bg-white/10 rounded-2xl border border-white/10 group cursor-pointer hover:bg-white/20 transition-all">
                                            <div className="flex items-center gap-4">
                                                <FileText className="text-blue-400" />
                                                <span className="text-xs font-bold uppercase tracking-tight">{selectedInspection.file}</span>
                                            </div>
                                            <Download size={16} className="text-slate-500 group-hover:text-white" />
                                        </div>
                                    </div>

                                    {/* State Scrutiny Action */}
                                    <div className="pt-8 border-t border-white/10 space-y-6">
                                        <div className="flex items-center gap-3">
                                            <Sparkles className="text-purple-400" size={18} />
                                            <h4 className="text-[10px] font-black uppercase tracking-widest text-purple-400">State Scrutiny Decision</h4>
                                        </div>
                                        <div className="flex gap-4">
                                            <Button className="flex-1 h-14 bg-green-600 hover:bg-green-700 text-white rounded-2xl font-black uppercase text-[10px] tracking-widest">Accept Compliance</Button>
                                            <Button className="flex-1 h-14 bg-red-600 hover:bg-red-700 text-white rounded-2xl font-black uppercase text-[10px] tracking-widest">Flag for Secretary</Button>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ) : (
                            <Card className="rounded-[40px] border-2 border-dashed border-slate-200 h-[700px] flex flex-col items-center justify-center text-center p-12 bg-white">
                                <div className="h-20 w-20 bg-slate-50 rounded-full flex items-center justify-center mb-6 text-slate-300">
                                    <Activity size={40} />
                                </div>
                                <h3 className="text-xl font-black text-slate-900 uppercase">Select Inspection</h3>
                                <p className="text-sm font-medium text-slate-400 mt-2">Pick a record from the registry to perform statewide statutory scrutiny.</p>
                            </Card>
                        )}
                    </div>

                </div>
            </Tabs>
        </div>
    );
}

/* UI SUB-COMPONENTS */

function InspectionRegistryRow({ node, target, date, status, type, alert, success, onClick, active }: any) {
    const dotColor = success ? 'bg-green-500' : alert ? 'bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.5)]' : 'bg-blue-500';
    return (
        <TableRow onClick={onClick} className={`border-2 transition-all group cursor-pointer ${active ? 'bg-purple-50 shadow-inner' : 'hover:bg-slate-50'}`}>
            <TableCell className="px-8 py-6">
                <div className="flex items-center gap-4">
                    <div className={`h-2 w-2 rounded-full shrink-0 ${dotColor}`} />
                    <div>
                        <p className={`text-[10px] font-black uppercase tracking-tighter ${type === 'DEO' ? 'text-indigo-600' : 'text-blue-600'}`}>{node}</p>
                        <p className="text-[8px] font-bold text-slate-400 uppercase">Node Verified</p>
                    </div>
                </div>
            </TableCell>
            <TableCell>
                <div className="flex items-center gap-3">
                    {type === 'DEO' ? <School className="text-slate-300" size={16} /> : <Building2 className="text-slate-300" size={16} />}
                    <span className="text-sm font-black text-slate-800 uppercase tracking-tight">{target}</span>
                </div>
            </TableCell>
            <TableCell className="text-center">
                <span className="text-[10px] font-bold text-slate-500 uppercase">{date}</span>
            </TableCell>
            <TableCell>
                <Badge className={`rounded-full px-3 py-0.5 text-[8px] font-black uppercase border-2 shadow-none ${success ? 'bg-green-100 text-green-700' : alert ? 'bg-red-100 text-red-700 animate-pulse' : 'bg-blue-100 text-blue-700'
                    }`}>
                    {status}
                </Badge>
            </TableCell>
            <TableCell className="text-right px-8">
                <ChevronRight className={`ml-auto transition-transform ${active ? 'translate-x-1 text-purple-600' : 'text-slate-200'}`} size={20} />
            </TableCell>
        </TableRow>
    )
}

function DetailItem({ label, value }: any) {
    return (
        <div className="space-y-1">
            <p className="text-[8px] font-black text-slate-500 uppercase tracking-[0.2em] leading-none">{label}</p>
            <p className="text-sm font-black tracking-tight text-white uppercase">{value}</p>
        </div>
    )
}

function TabBtn({ active, onClick, label }: any) {
    return (
        <button
            onClick={onClick}
            className={`px-8 py-3 rounded-xl text-[9px] font-black uppercase tracking-widest transition-all ${active ? 'bg-white text-purple-700 shadow-sm' : 'text-slate-400 hover:text-slate-600'
                }`}
        >
            {label}
        </button>
    )
}