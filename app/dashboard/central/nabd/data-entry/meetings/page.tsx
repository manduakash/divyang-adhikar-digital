// app/dashboard/nabd/data-entry/meetings/page.tsx
"use client";
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
    Table, TableBody, TableCell, TableHead, TableHeader, TableRow
} from "@/components/ui/table";
import {
    Calendar, Clock, MapPin, Video, Users, ListChecks,
    UploadCloud, Save, BellRing, History, Briefcase,
    CalendarCheck, AlertCircle, FileText, CheckSquare, Search,
    Edit2, Send
} from "lucide-react";

export default function MeetingsNoticesPage() {
    const [meetingType, setMeetingType] = useState("ORDINARY");
    const [notifyAll, setNotifyAll] = useState(true);

    return (
        <div className="space-y-8 animate-in fade-in duration-1000 pb-20 font-sans selection:bg-indigo-100">

            {/* PAGE HEADER */}
            <div className="flex flex-col xl:flex-row justify-between items-start xl:items-end gap-6 relative">
                <div className="space-y-2">
                    <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border-2 border-indigo-100">
                        <CalendarCheck size={14} /> Schedule & Notifications
                    </div>
                    <h1 className="text-5xl font-black text-slate-900 tracking-tighter uppercase leading-none">Meetings & Notices</h1>
                    <p className="text-slate-500 font-medium text-lg italic underline underline-offset-8 decoration-indigo-100">
                        Plan, schedule, and formally notify National Advisory Board meetings.
                    </p>
                </div>
                <div className="flex gap-4">
                    <Button variant="outline" className="h-14 px-8 rounded-full border-2 border-slate-200 font-black uppercase tracking-widest text-[10px] bg-white shadow-xl hover:bg-slate-50 transition-all">
                        <History size={16} className="mr-2" /> View Calendar
                    </Button>
                    <Button className="h-14 px-8 rounded-full bg-indigo-600 text-white font-black uppercase tracking-widest text-[10px] shadow-xl hover:bg-indigo-700 transition-all gap-2 group">
                        <Send size={16} /> Issue Formal Notice
                    </Button>
                </div>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
                
                {/* LEFT: DATA ENTRY FORM (Spans 2 columns) */}
                <div className="xl:col-span-2 space-y-8">
                    
                    {/* SECTION 1: MEETING LOGISTICS */}
                    <SectionCard title="Meeting Logistics" icon={<Calendar />} color="text-blue-600">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            
                            {/* Meeting Type Toggle */}
                            <FormField label="Meeting Type" required className="md:col-span-2">
                                <div className="flex gap-4 p-2 bg-slate-50 border-2 border-slate-100 rounded-2xl w-fit">
                                    <button 
                                        type="button"
                                        onClick={() => setMeetingType('ORDINARY')}
                                        className={`px-8 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all flex items-center gap-2 ${meetingType === 'ORDINARY' ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-200' : 'text-slate-500 hover:bg-slate-200'}`}
                                    >
                                        <Briefcase size={16} /> Ordinary Meeting
                                    </button>
                                    <button 
                                        type="button"
                                        onClick={() => setMeetingType('SPECIAL')}
                                        className={`px-8 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all flex items-center gap-2 ${meetingType === 'SPECIAL' ? 'bg-amber-500 text-white shadow-lg shadow-amber-200' : 'text-slate-500 hover:bg-slate-200'}`}
                                    >
                                        <AlertCircle size={16} /> Special / Urgent
                                    </button>
                                </div>
                            </FormField>

                            <FormField label="Meeting Date" required>
                                <div className="relative">
                                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 pointer-events-none" />
                                    <input type="date" className="form-input-apex pl-12" />
                                </div>
                            </FormField>

                            <FormField label="Meeting Time" required>
                                <div className="relative">
                                    <Clock className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 pointer-events-none" />
                                    <input type="time" className="form-input-apex pl-12" />
                                </div>
                            </FormField>

                            <FormField label="Venue / Video Conference Link" required className="md:col-span-2">
                                <div className="relative flex items-center">
                                    <div className="absolute left-4 flex gap-2 text-slate-400">
                                        <MapPin size={16} />
                                        <span className="text-slate-300">|</span>
                                        <Video size={16} />
                                    </div>
                                    <input type="text" placeholder="Physical Address or VC URL (Webex, NIC Meet, etc.)" className="form-input-apex pl-20" />
                                </div>
                            </FormField>

                        </div>
                    </SectionCard>

                    {/* SECTION 2: AGENDA & NOTIFICATION */}
                    <SectionCard title="Agenda & Notification Targeting" icon={<ListChecks />} color="text-emerald-600">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            
                            <FormField label="Agenda Items" required className="md:col-span-2">
                                <textarea 
                                    rows={4} 
                                    placeholder="1. Review of previous action points...&#10;2. Discussion on new accessibility guidelines..." 
                                    className="form-input-apex resize-none text-sm leading-relaxed" 
                                />
                            </FormField>

                            <FormField label="Members to be Notified" required className="md:col-span-2">
                                <div className="p-4 border-2 border-slate-200 bg-slate-50 rounded-2xl space-y-4">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <Users size={16} className="text-indigo-600" />
                                            <span className="text-xs font-black text-slate-900 uppercase tracking-widest">Recipient Selection</span>
                                        </div>
                                        <button 
                                            type="button" 
                                            onClick={() => setNotifyAll(!notifyAll)}
                                            className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-indigo-600 hover:text-indigo-800 transition-colors"
                                        >
                                            {notifyAll ? <CheckSquare size={14} /> : <div className="h-3.5 w-3.5 border-2 border-indigo-600 rounded-[3px]" />}
                                            All Active Board Members
                                        </button>
                                    </div>
                                    {!notifyAll && (
                                        <div className="pt-2">
                                            <input type="text" placeholder="Search and select specific members..." className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-xs font-bold focus:outline-none focus:border-indigo-500 transition-all" />
                                        </div>
                                    )}
                                </div>
                            </FormField>

                            <FormField label="Notice Issue Date" required>
                                <div className="relative">
                                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 pointer-events-none" />
                                    <input type="date" className="form-input-apex pl-12" />
                                </div>
                            </FormField>
                            
                        </div>
                    </SectionCard>

                </div>

                {/* RIGHT: DOCUMENT UPLOAD */}
                <div className="space-y-8">
                    <SectionCard title="Formal Notice Upload" icon={<UploadCloud />} color="text-purple-600">
                        <div className="space-y-4">
                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-relaxed mb-4">
                                Upload the digitally signed formal meeting notice and agenda document for archival and distribution.
                            </p>

                            {/* Upload Dropzone */}
                            <div className="border-2 border-dashed border-purple-200 bg-purple-50/50 rounded-3xl p-8 flex flex-col items-center justify-center text-center hover:bg-purple-50 hover:border-purple-400 transition-all cursor-pointer group h-[340px]">
                                <div className="h-20 w-20 rounded-2xl bg-white shadow-sm border border-purple-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <FileText size={32} className="text-purple-600" />
                                </div>
                                <p className="text-xs font-black text-slate-700 uppercase tracking-widest mb-2">Upload Signed Notice</p>
                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-4 leading-relaxed">Ensure document contains agenda annexures. PDF only, max 15MB.</p>
                                <Button variant="outline" className="mt-8 bg-white border-2 border-purple-100 text-purple-700 text-[10px] font-black uppercase tracking-widest h-12 px-8 rounded-xl hover:bg-purple-600 hover:text-white transition-all shadow-sm">
                                    Select File
                                </Button>
                            </div>
                        </div>
                    </SectionCard>
                </div>
            </div>

            {/* RECENT MEETINGS REGISTRY TABLE */}
            <Card className="rounded-[44px] border-2 border-slate-100 shadow-sm overflow-hidden bg-white mt-8">
                <CardHeader className="p-0 border-b-2 border-slate-100">
                    <div className="p-8 bg-gradient-to-r from-slate-900 via-slate-800 to-black text-white relative overflow-hidden flex flex-col md:flex-row justify-between items-center gap-6">
                        <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] bg-fixed" />
                        
                        <div className="relative z-10 flex items-center gap-4">
                            <div className="h-12 w-12 rounded-2xl bg-white/10 backdrop-blur-md border-2 border-white/20 flex items-center justify-center shadow-xl">
                                <BellRing size={20} className="text-white" />
                            </div>
                            <div>
                                <CardTitle className="text-lg font-black uppercase tracking-tight">Scheduled & Recent Meetings</CardTitle>
                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Status of issued notices and scheduled sessions</p>
                            </div>
                        </div>

                        <div className="relative z-10 flex gap-4 w-full md:w-auto">
                            <div className="relative group flex-1 md:w-64">
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-white/50" />
                                <input className="w-full pl-11 pr-6 py-3 border-2 border-white/20 bg-white/5 rounded-xl text-[10px] font-black uppercase outline-none text-white focus:bg-white/10 transition-all" placeholder="Search Reference..." />
                            </div>
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="p-0 overflow-x-auto">
                    <Table>
                        <TableHeader className="bg-slate-50">
                            <TableRow className="border-b-2 border-slate-100">
                                <TableHead className="px-8 py-5 text-[9px] font-black uppercase tracking-[0.2em] text-slate-400">Meeting Ref</TableHead>
                                <TableHead className="py-5 text-[9px] font-black uppercase tracking-[0.2em] text-slate-400">Schedule (Date & Time)</TableHead>
                                <TableHead className="py-5 text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 text-center">Type</TableHead>
                                <TableHead className="py-5 text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 text-center">Notice Status</TableHead>
                                <TableHead className="px-8 py-5 text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 text-right">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody className="divide-y divide-slate-100">
                            
                            <MeetingRow 
                                refNo="NABD/MTG/2024-47" 
                                date="14 Nov 2024" time="11:00 AM" 
                                type="ORDINARY" 
                                status="SCHEDULED" statusType="upcoming"
                            />
                            <MeetingRow 
                                refNo="NABD/MTG/2024-46" 
                                date="22 Aug 2024" time="02:30 PM" 
                                type="SPECIAL" 
                                status="CONCLUDED" statusType="completed"
                            />
                            <MeetingRow 
                                refNo="NABD/MTG/2024-45" 
                                date="10 May 2024" time="10:00 AM" 
                                type="ORDINARY" 
                                status="CONCLUDED" statusType="completed"
                            />

                        </TableBody>
                    </Table>
                </CardContent>
            </Card>

        </div>
    );
}

/* UI SUB-COMPONENTS */

function SectionCard({ title, icon, color, children }: any) {
    return (
        <Card className="rounded-[32px] border-2 border-slate-100 bg-white shadow-sm overflow-hidden group hover:shadow-xl transition-all duration-500 h-full">
            <CardHeader className="p-8 border-b-2 border-slate-50 bg-slate-50/50 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
                <div className="flex items-center gap-4 relative z-10">
                    <div className={`h-10 w-10 rounded-xl bg-white shadow-sm border border-slate-100 flex items-center justify-center ${color}`}>
                        {icon}
                    </div>
                    <CardTitle className="text-sm font-black uppercase tracking-[0.2em] text-slate-900">{title}</CardTitle>
                </div>
            </CardHeader>
            <CardContent className="p-8 relative overflow-hidden">
                <div className="absolute inset-0 opacity-[0.01] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/topography.png')]" />
                <div className="relative z-10">{children}</div>
            </CardContent>
        </Card>
    );
}

function FormField({ label, required, children, className }: any) {
    return (
        <div className={`space-y-2 ${className}`}>
            <label className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">
                {label} {required && <span className="text-red-500">*</span>}
            </label>
            {children}
        </div>
    );
}

function MeetingRow({ refNo, date, time, type, status, statusType }: any) {
    const isUpcoming = statusType === 'upcoming';
    const isSpecial = type === 'SPECIAL';

    return (
        <TableRow className="border-none hover:bg-slate-50 transition-all group">
            <TableCell className="px-8 py-5">
                <div className="flex flex-col">
                    <span className="text-xs font-black text-slate-900 uppercase tracking-tight">{refNo}</span>
                    <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">Reference ID</span>
                </div>
            </TableCell>
            <TableCell className="py-5">
                <div className="flex flex-col">
                    <span className="font-mono font-black text-[11px] text-indigo-700">{date}</span>
                    <span className="font-mono font-bold text-[10px] text-slate-500">{time}</span>
                </div>
            </TableCell>
            <TableCell className="py-5 text-center">
                <Badge variant="outline" className={`border-2 text-[9px] font-black uppercase tracking-widest px-3 py-1 bg-white ${isSpecial ? 'border-amber-200 text-amber-700' : 'border-indigo-200 text-indigo-700'}`}>
                    {type}
                </Badge>
            </TableCell>
            <TableCell className="py-5 text-center">
                <Badge className={`border-none text-[9px] font-black uppercase tracking-widest px-3 py-1 ${isUpcoming ? 'bg-emerald-100 text-emerald-700 animate-pulse' : 'bg-slate-200 text-slate-600'}`}>
                    {status}
                </Badge>
            </TableCell>
            <TableCell className="px-8 py-5 text-right">
                <Button variant="ghost" className="h-8 w-8 p-0 rounded-lg text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 transition-colors">
                    <Edit2 size={14} />
                </Button>
            </TableCell>
        </TableRow>
    );
}