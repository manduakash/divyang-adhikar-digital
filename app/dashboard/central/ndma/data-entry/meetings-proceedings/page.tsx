// app/dashboard/ndma/data-entry/meetings-proceedings/page.tsx
"use client";
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
    Table, TableBody, TableCell, TableHead, TableHeader, TableRow
} from "@/components/ui/table";
import {
    Users, History, Save, MapPin, Search, Tag, 
    Calendar, Video, Briefcase, FileSignature, UploadCloud,
    MessageSquare, CheckCircle2, ListChecks, Activity,
    Clock, PhoneCall, ShieldAlert, CheckSquare, Target
} from "lucide-react";

export default function MeetingsProceedingsDataEntryPage() {
    const [meetingType, setMeetingType] = useState("NDMA");
    const [mode, setMode] = useState("VC");

    return (
        <div className="space-y-8 animate-in fade-in duration-1000 pb-20 font-sans selection:bg-blue-100">

            {/* PAGE HEADER */}
            <div className="flex flex-col xl:flex-row justify-between items-start xl:items-end gap-6 relative">
                <div className="space-y-2">
                    <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border-2 border-blue-200 shadow-sm">
                        <Users size={14} /> National Governance Data Entry
                    </div>
                    <h1 className="text-5xl font-black text-slate-800 tracking-tighter uppercase leading-none">Meetings & Proceedings</h1>
                    <p className="text-slate-500 font-medium text-lg italic underline underline-offset-8 decoration-blue-200">
                        Manage NDMA-level sessions and record decisions on PwD-inclusive disaster management.
                    </p>
                </div>
                <div className="flex gap-4">
                    <Button variant="outline" className="h-14 px-8 rounded-full border-2 border-blue-200 text-blue-700 font-black uppercase tracking-widest text-[10px] bg-white shadow-xl hover:bg-blue-50 transition-all">
                        <History size={16} className="mr-2" /> View Archives
                    </Button>
                    <Button className="h-14 px-8 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-black uppercase tracking-widest text-[10px] shadow-xl hover:shadow-[0_0_20px_theme(colors.blue.400)] transition-all gap-2 group border-none">
                        <Save size={16} /> Save Proceedings
                    </Button>
                </div>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
                
                {/* LEFT: LOGISTICS & AGENDA (Spans 2 columns) */}
                <div className="xl:col-span-2 space-y-8">
                    
                    <SectionCard title="Meeting Logistics" icon={<Calendar />} color="text-indigo-600" border="border-indigo-200">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            
                            <FormField label="Meeting Type" required className="md:col-span-2">
                                <div className="flex gap-4 p-2 bg-slate-50 border-2 border-slate-100 rounded-2xl w-fit shadow-inner">
                                    <button 
                                        type="button"
                                        onClick={() => setMeetingType('NDMA')}
                                        className={`px-8 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all flex items-center gap-2 ${meetingType === 'NDMA' ? 'bg-indigo-600 text-white shadow-md' : 'text-slate-500 hover:bg-slate-200'}`}
                                    >
                                        <ShieldAlert size={16} /> Full NDMA Board
                                    </button>
                                    <button 
                                        type="button"
                                        onClick={() => setMeetingType('COMMITTEE')}
                                        className={`px-8 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all flex items-center gap-2 ${meetingType === 'COMMITTEE' ? 'bg-blue-600 text-white shadow-md' : 'text-slate-500 hover:bg-slate-200'}`}
                                    >
                                        <Users size={16} /> Sub-Committee
                                    </button>
                                </div>
                            </FormField>

                            <FormField label="Date & Time" required>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="relative">
                                        <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-3 w-3 text-indigo-400 pointer-events-none" />
                                        <input type="date" className="form-input-apex pl-8 text-xs px-2 border-indigo-100 focus:border-indigo-400" />
                                    </div>
                                    <div className="relative">
                                        <Clock className="absolute left-3 top-1/2 -translate-y-1/2 h-3 w-3 text-indigo-400 pointer-events-none" />
                                        <input type="time" className="form-input-apex pl-8 text-xs px-2 border-indigo-100 focus:border-indigo-400" />
                                    </div>
                                </div>
                            </FormField>

                            <FormField label="Meeting Mode" required>
                                <div className="flex gap-4 p-2 bg-slate-50 border-2 border-slate-100 rounded-2xl w-fit shadow-inner h-[52px]">
                                    <button 
                                        type="button"
                                        onClick={() => setMode('VC')}
                                        className={`px-6 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all flex items-center justify-center gap-2 h-full ${mode === 'VC' ? 'bg-emerald-500 text-white shadow-sm' : 'text-slate-500 hover:bg-slate-200'}`}
                                    >
                                        <Video size={14} /> Video Conf
                                    </button>
                                    <button 
                                        type="button"
                                        onClick={() => setMode('PHYSICAL')}
                                        className={`px-6 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all flex items-center justify-center gap-2 h-full ${mode === 'PHYSICAL' ? 'bg-amber-500 text-white shadow-sm' : 'text-slate-500 hover:bg-slate-200'}`}
                                    >
                                        <MapPin size={14} /> Physical
                                    </button>
                                </div>
                            </FormField>

                            <FormField label="Agenda & Core Focus" required className="md:col-span-2">
                                <div className="relative">
                                    <ListChecks className="absolute left-4 top-4 h-5 w-5 text-indigo-400 pointer-events-none" />
                                    <textarea 
                                        rows={4} 
                                        placeholder="Outline the primary topics of discussion. E.g., Review of coastal cyclone shelter accessibility, approval of revised SOPs for visual impairment..." 
                                        className="form-input-apex pl-12 pt-3.5 resize-none text-sm leading-relaxed border-indigo-100 focus:border-indigo-400" 
                                    />
                                </div>
                            </FormField>

                        </div>
                    </SectionCard>

                    <SectionCard title="Deliberations & Outcomes" icon={<MessageSquare />} color="text-purple-600" border="border-purple-200">
                        <div className="space-y-6">
                            
                            <FormField label="Proceedings Summary" required>
                                <div className="relative">
                                    <Activity className="absolute left-4 top-4 h-5 w-5 text-purple-400 pointer-events-none" />
                                    <textarea 
                                        rows={5} 
                                        placeholder="Summarize the core discussions, viewpoints raised by members, and inputs from state representatives..." 
                                        className="form-input-apex pl-12 pt-3.5 resize-none text-sm leading-relaxed border-purple-100 focus:border-purple-400 focus:ring-purple-50" 
                                    />
                                </div>
                            </FormField>

                            <FormField label="Decisions & Recommendations Approved" required>
                                <div className="relative">
                                    <Target className="absolute left-4 top-4 h-5 w-5 text-purple-400 pointer-events-none" />
                                    <textarea 
                                        rows={5} 
                                        placeholder="List the formal resolutions. E.g., 1. Approved funding for tactile paths. 2. Directed SDMAs to audit all relief camps by Q3..." 
                                        className="form-input-apex pl-12 pt-3.5 resize-none text-sm leading-relaxed border-purple-100 focus:border-purple-400 focus:ring-purple-50 bg-purple-50/30" 
                                    />
                                </div>
                            </FormField>

                        </div>
                    </SectionCard>

                </div>

                {/* RIGHT: ATTENDANCE & UPLOAD */}
                <div className="space-y-8">
                    
                    <SectionCard title="Participants & Attendance" icon={<Users />} color="text-blue-600" border="border-blue-200">
                        <div className="space-y-6">
                            
                            <FormField label="Mark Attendance Roster" required>
                                <div className="border-2 border-slate-100 bg-slate-50 rounded-2xl overflow-hidden shadow-inner">
                                    <div className="p-4 border-b-2 border-slate-100 bg-white flex justify-between items-center">
                                        <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">Record Presence</p>
                                        <Badge className="bg-blue-100 text-blue-700 border-none text-[8px] font-black uppercase tracking-widest">
                                            Auto-sync Enabled
                                        </Badge>
                                    </div>
                                    <div className="max-h-60 overflow-y-auto custom-scrollbar p-2 space-y-1">
                                        <AttendanceRow name="Hon'ble PM" role="Chairperson" />
                                        <AttendanceRow name="Shri Kamal Kishore" role="Member" />
                                        <AttendanceRow name="Ms. Sunita Rao" role="PwD Advisor" />
                                        <AttendanceRow name="Dr. Rajesh Pandey" role="Secretariat" />
                                        <AttendanceRow name="State Rep (OD)" role="Invitee" />
                                    </div>
                                </div>
                            </FormField>

                        </div>
                    </SectionCard>

                    <SectionCard title="Minutes Upload" icon={<UploadCloud />} color="text-emerald-600" border="border-emerald-200">
                        <div className="space-y-4">
                            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest leading-relaxed mb-4">
                                Attach the final, digitally signed Minutes of Meeting (MoM) approved by the competent authority.
                            </p>

                            {/* Upload Dropzone */}
                            <div className="border-2 border-dashed border-emerald-200 bg-emerald-50/50 rounded-3xl p-8 flex flex-col items-center justify-center text-center hover:bg-emerald-50 hover:border-emerald-400 transition-all cursor-pointer group min-h-[12rem]">
                                <div className="h-16 w-16 rounded-2xl bg-white shadow-sm border border-emerald-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                    <FileSignature size={24} className="text-emerald-600" />
                                </div>
                                <p className="text-xs font-black text-slate-800 uppercase tracking-widest mb-1">Upload Final MoM</p>
                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">PDF format, Max 15MB</p>
                            </div>
                        </div>
                    </SectionCard>

                </div>
            </div>

            {/* RECENT PROCEEDINGS REGISTRY TABLE */}
            <Card className="rounded-[40px] border-none shadow-xl overflow-hidden bg-white mt-8">
                <CardHeader className="p-0 border-b-4 border-blue-200">
                    <div className="p-8 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white relative overflow-hidden flex flex-col md:flex-row justify-between items-center gap-6">
                        <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] bg-fixed" />
                        
                        <div className="relative z-10 flex items-center gap-4">
                            <div className="h-12 w-12 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center shadow-lg">
                                <Briefcase size={20} className="text-white drop-shadow-md" />
                            </div>
                            <div>
                                <CardTitle className="text-xl font-black uppercase tracking-tight drop-shadow-sm">National Proceedings Ledger</CardTitle>
                                <p className="text-[10px] font-bold text-blue-100 uppercase tracking-widest mt-1">Recently concluded meetings and approved minutes</p>
                            </div>
                        </div>

                        <div className="relative z-10 flex gap-4 w-full md:w-auto">
                            <div className="relative group flex-1 md:w-64">
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-white/50" />
                                <input className="w-full pl-11 pr-6 py-3 border border-white/30 bg-white/10 rounded-2xl text-[10px] font-black uppercase outline-none text-white focus:bg-white/20 transition-all shadow-inner backdrop-blur-sm placeholder:text-white/60" placeholder="Search Agenda or Type..." />
                            </div>
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="p-0 overflow-x-auto relative min-h-[300px]">
                    <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/topography.png')]" />
                    
                    <Table className="relative z-10">
                        <TableHeader className="bg-blue-50/50">
                            <TableRow className="border-b-2 border-blue-100">
                                <TableHead className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-blue-800">Date Convened</TableHead>
                                <TableHead className="py-5 text-[10px] font-black uppercase tracking-[0.2em] text-blue-800">Meeting Type & Mode</TableHead>
                                <TableHead className="py-5 text-[10px] font-black uppercase tracking-[0.2em] text-blue-800 w-1/3">Core Agenda</TableHead>
                                <TableHead className="py-5 text-[10px] font-black uppercase tracking-[0.2em] text-blue-800 text-center">Attendance</TableHead>
                                <TableHead className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-blue-800 text-right">MoM Status</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody className="divide-y divide-blue-50">
                            
                            <ProceedingsRow 
                                date="14 Nov 2024"
                                type="NDMA" mode="VC"
                                agenda="Review of Coastal Cyclone Shelter Accessibility & State Preparedness."
                                attendance="94%"
                                status="FINALIZED"
                                isFinal
                            />
                            <ProceedingsRow 
                                date="22 Aug 2024"
                                type="COMMITTEE" mode="PHYSICAL"
                                agenda="Sub-committee draft approval for Hearing Impairment early warning integration."
                                attendance="100%"
                                status="FINALIZED"
                                isFinal
                            />
                            <ProceedingsRow 
                                date="10 May 2024"
                                type="NDMA" mode="VC"
                                agenda="Annual review of SDMA PwD-inclusion compliance reports."
                                attendance="88%"
                                status="DRAFTING"
                            />

                        </TableBody>
                    </Table>
                </CardContent>
            </Card>

        </div>
    );
}

/* UI SUB-COMPONENTS */

function SectionCard({ title, icon, color, border, children }: any) {
    return (
        <Card className={`rounded-[32px] border-2 shadow-lg bg-white overflow-hidden group hover:shadow-xl transition-all duration-500 border-slate-100 hover:${border}`}>
            <CardHeader className="p-8 border-b-2 border-slate-50 relative overflow-hidden bg-slate-50/30">
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
                <div className="flex items-center gap-4 relative z-10">
                    <div className={`h-12 w-12 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center ${color} group-hover:scale-110 transition-transform`}>
                        {React.cloneElement(icon, { size: 24 })}
                    </div>
                    <CardTitle className={`text-sm font-black uppercase tracking-[0.2em] text-slate-800`}>{title}</CardTitle>
                </div>
            </CardHeader>
            <CardContent className="p-8 relative overflow-hidden">
                <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/topography.png')]" />
                <div className="relative z-10">{children}</div>
            </CardContent>
        </Card>
    );
}

function FormField({ label, required, children, className }: any) {
    return (
        <div className={`space-y-2 ${className}`}>
            <label className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-600 ml-1">
                {label} {required && <span className="text-red-500">*</span>}
            </label>
            {children}
        </div>
    );
}

function AttendanceRow({ name, role }: any) {
    const [isPresent, setIsPresent] = useState(true);

    return (
        <div className="flex items-center justify-between p-3 rounded-xl bg-white border-2 border-transparent hover:border-slate-100 transition-colors shadow-sm">
            <div className="flex flex-col">
                <span className="text-xs font-black text-slate-800">{name}</span>
                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">{role}</span>
            </div>
            <button 
                onClick={() => setIsPresent(!isPresent)}
                className={`h-8 px-4 rounded-lg text-[9px] font-black uppercase tracking-widest transition-all w-24 flex items-center justify-center gap-1.5 ${isPresent ? 'bg-emerald-100 text-emerald-700 border border-emerald-200 shadow-inner' : 'bg-rose-100 text-rose-700 border border-rose-200 shadow-inner'}`}
            >
                {isPresent ? <CheckSquare size={12} /> : 'ABSENT'}
                {isPresent && 'PRESENT'}
            </button>
        </div>
    );
}

function ProceedingsRow({ date, type, mode, agenda, attendance, status, isFinal }: any) {
    
    const isNdma = type === 'NDMA';

    return (
        <TableRow className="border-none hover:bg-blue-50/50 transition-all group">
            
            <TableCell className="px-8 py-5">
                <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center shrink-0 shadow-inner border border-blue-200">
                        <Calendar size={14} className="text-blue-600" />
                    </div>
                    <span className="font-mono text-[11px] font-black text-slate-800">{date}</span>
                </div>
            </TableCell>

            <TableCell className="py-5">
                <div className="flex flex-col gap-1.5 pr-4">
                    <Badge variant="outline" className={`border-2 text-[8px] font-black uppercase tracking-widest px-2 py-0.5 w-fit ${isNdma ? 'border-indigo-200 text-indigo-700 bg-indigo-50' : 'border-purple-200 text-purple-700 bg-purple-50'}`}>
                        {type}
                    </Badge>
                    <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest flex items-center gap-1.5">
                        {mode === 'VC' ? <Video size={10} className="text-emerald-500" /> : <MapPin size={10} className="text-amber-500" />}
                        {mode}
                    </span>
                </div>
            </TableCell>

            <TableCell className="py-5">
                <div className="text-xs font-bold text-slate-700 line-clamp-2 leading-relaxed bg-white border border-slate-100 p-3 rounded-xl shadow-sm">
                    {agenda}
                </div>
            </TableCell>

            <TableCell className="py-5 text-center">
                <span className="font-mono text-[11px] font-black text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-100 shadow-inner">
                    {attendance}
                </span>
            </TableCell>

            <TableCell className="px-8 py-5 text-right">
                <Badge className={`border-none text-[9px] font-black uppercase tracking-widest px-4 py-1.5 shadow-sm ml-auto flex items-center justify-center gap-1.5 w-max ${isFinal ? 'bg-emerald-500 text-white' : 'bg-amber-400 text-white animate-pulse'}`}>
                    {isFinal && <CheckCircle2 size={10} />}
                    {status}
                </Badge>
            </TableCell>

        </TableRow>
    );
}