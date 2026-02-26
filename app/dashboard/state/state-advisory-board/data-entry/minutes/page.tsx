// app/dashboard/sab/data/minutes/page.tsx
"use client";
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
    FileText, Calendar, Users, PenTool,
    Sparkles, CheckCircle2, History, Plus,
    ArrowLeft, BadgeCheck, Landmark, Upload,
    Briefcase, LayoutGrid, Timer
} from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from '@/components/ui/badge';

export default function MinutesEntry() {
    return (
        <div className="max-w-6xl mx-auto pb-20 animate-in fade-in duration-1000 font-sans selection:bg-emerald-100">

            {/* HEADER */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10">
                <div className="space-y-1">
                    <div className="flex items-center gap-2 text-emerald-600 font-black uppercase text-[10px] tracking-[0.2em]">
                        <ArrowLeft size={14} /> Advisory Hub / Data Entry
                    </div>
                    <h1 className="text-4xl font-black text-slate-900 tracking-tighter uppercase leading-none text-wrap">Minutes of Meeting (MoM)</h1>
                    <p className="text-slate-500 font-medium italic">Officially record the proceedings and decisions of the Advisory Board.</p>
                </div>
                <div className="flex gap-3">
                    <Button variant="outline" className="h-14 px-8 rounded-2xl border-slate-200 font-bold bg-white shadow-sm">MoM Archive</Button>
                    <Button className="h-14 px-10 rounded-2xl bg-emerald-600 text-white font-black uppercase tracking-widest text-[10px] shadow-2xl hover:bg-emerald-700 transition-all">
                        Save Minutes
                    </Button>
                </div>
            </div>

            {/* A3.3 FORM CONTENT */}
            <Card className="rounded-[40px] border-slate-200 bg-white shadow-xl overflow-hidden mb-10">
                <CardHeader className="p-8 border-b border-slate-50 bg-slate-50/30 relative overflow-hidden">
                    <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] bg-emerald-600 h-2 z-0" />
                    <CardTitle className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 relative z-10">Deliberation Record</CardTitle>
                </CardHeader>
                <CardContent className="p-10 space-y-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-3">
                            <label className="text-[11px] font-black uppercase text-slate-500 ml-1">Meeting Reference</label>
                            <Input placeholder="Link to Schedule ID (e.g. SAB/2024/012)" className="h-16 px-6 rounded-2xl bg-slate-50 border font-mono font-black text-blue-600 shadow-inner" />
                        </div>
                        <div className="space-y-3">
                            <label className="text-[11px] font-black uppercase text-slate-500 ml-1">Date of Meeting</label>
                            <Input type="date" className="h-16 px-6 rounded-2xl bg-slate-50 border font-bold text-slate-800 shadow-inner" />
                        </div>
                    </div>

                    {/* ATTENDANCE (Member-wise) */}
                    <div className="space-y-4">
                        <label className="text-[11px] font-black uppercase text-slate-500 ml-1">Attendance (member-wise)</label>
                        <div className="border border-slate-100 rounded-3xl overflow-hidden bg-slate-50/50">
                            <Table>
                                <TableBody className="divide-y divide-slate-100">
                                    {['Chairperson', 'Member Secretary', 'Expert Member 1'].map((role) => (
                                        <TableRow key={role} className="border hover:bg-white transition-all group">
                                            <TableCell className="px-6 py-4 text-xs font-black text-slate-700 uppercase">{role}</TableCell>
                                            <TableCell className="text-right px-6">
                                                <Badge className="bg-green-100 text-green-700 font-black text-[8px] uppercase">PRESENT</Badge>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </div>
                    </div>

                    {/* DISCUSSION SUMMARIES */}
                    <div className="space-y-4">
                        <div className="flex justify-between items-center px-1">
                            <label className="text-[11px] font-black uppercase text-slate-500 ml-1">Agenda-wise discussion summary</label>
                            <button className="flex items-center gap-1.5 text-purple-600 font-bold text-[10px] uppercase tracking-wider bg-purple-50 px-3 py-1.5 rounded-full border border-purple-100">
                                <Sparkles size={12} /> AI Transcription Assist
                            </button>
                        </div>
                        <Textarea className="min-h-[160px] rounded-[32px] bg-slate-50 border p-8 text-sm font-medium leading-relaxed resize-none focus:ring-2 focus:ring-emerald-600" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-4">
                            <label className="text-[11px] font-black uppercase text-slate-500 ml-1">Decisions Taken</label>
                            <Textarea className="min-h-[120px] rounded-[24px] bg-slate-50 border p-6 text-sm font-bold text-slate-800" />
                        </div>
                        <div className="space-y-4">
                            <label className="text-[11px] font-black uppercase text-slate-500 ml-1">Recommendations Made</label>
                            <Textarea className="min-h-[120px] rounded-[24px] bg-slate-50 border p-6 text-sm font-bold text-emerald-700" />
                        </div>
                    </div>

                    <div className="space-y-3">
                        <label className="text-[11px] font-black uppercase text-slate-500 ml-1">Minutes Upload (PDF / DOCX)</label>
                        <div className="p-8 border-2 border-dashed border-slate-200 rounded-[32px] flex flex-col items-center justify-center bg-slate-50 group hover:bg-white hover:border-emerald-500 transition-all cursor-pointer">
                            <PenTool className="text-slate-300 group-hover:text-emerald-600 mb-2" size={32} />
                            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Select Formally Signed MoM</span>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}