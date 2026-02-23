// app/dashboard/pp/progress/update/page.tsx
"use client";
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
    Scale, Gavel, Calendar, CheckCircle2,
    ArrowLeft, Sparkles, Timer, Landmark,
    Info
} from "lucide-react";
import {
    Select, SelectContent, SelectItem, SelectTrigger, SelectValue
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";

const STAGES = ['Investigation', 'Charge', 'Trial', 'Argument', 'Judgment'];

export default function CaseProgressUpdate() {
    const [currentStage, setCurrentStage] = useState('Trial');

    return (
        <div className="max-w-6xl mx-auto pb-20 animate-in fade-in slide-in-from-bottom-6 duration-700 font-sans">

            {/* 1. ADMINISTRATIVE HEADER */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10">
                <div className="space-y-1">
                    <div className="flex items-center gap-2 text-blue-600 font-black uppercase text-[10px] tracking-[0.2em]">
                        <ArrowLeft size={14} /> Legal Hub
                    </div>
                    <h1 className="text-4xl font-black text-slate-900 tracking-tighter uppercase">Update Case Progress</h1>
                    <p className="text-slate-500 font-medium italic">Statutory trail tracking and hearing outcome registration.</p>
                </div>
                <div className="flex gap-3">
                    <Button variant="outline" className="h-14 px-8 rounded-2xl border-slate-200 font-bold bg-white shadow-sm">Save Progress</Button>
                    <Button className="h-14 px-10 rounded-2xl bg-slate-950 text-white font-black uppercase tracking-widest text-[10px] shadow-2xl hover:bg-black transition-all">
                        Finalize Update
                    </Button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

                {/* MAIN DATA ENTRY COLUMN (8 COLS) */}
                <div className="lg:col-span-8 space-y-8">

                    {/* VISUAL STAGE STEPPER (Section 5.2 Item 2) */}
                    <Card className="rounded-[40px] border-2 bg-slate-900 p-8 shadow-2xl overflow-hidden relative">
                        <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
                        <div className="relative z-10">
                            <div className="flex justify-between mb-8 px-2">
                                {STAGES.map((s, i) => (
                                    <div key={s} className="flex flex-col items-center gap-3">
                                        <div className={`h-10 w-10 rounded-xl flex items-center justify-center font-black text-xs transition-all ${s === currentStage ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/40 scale-110' : 'bg-white/10 text-slate-500'
                                            }`}>
                                            0{i + 1}
                                        </div>
                                        <span className={`text-[9px] font-black uppercase tracking-widest ${s === currentStage ? 'text-blue-400' : 'text-slate-600'}`}>{s}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="h-1 w-full bg-white/5 rounded-full relative">
                                <div className="absolute h-full bg-blue-600 rounded-full transition-all duration-1000" style={{ width: '60%' }} />
                            </div>
                        </div>
                    </Card>

                    <Card className="rounded-[40px] border-slate-200 shadow-sm overflow-hidden bg-white">
                        <CardHeader className="p-8 border-b border-slate-50 bg-slate-50/50 flex flex-row justify-between items-center">
                            <CardTitle className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Current Hearing Record</CardTitle>
                            <Badge className="bg-blue-100 text-blue-700 font-black text-[9px] uppercase tracking-tighter">Case Linked: CP-2024-LKO-91</Badge>
                        </CardHeader>
                        <CardContent className="p-10 space-y-10">

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                {/* CASE ID & STAGE SELECT */}
                                <div className="space-y-4">
                                    <label className="text-[11px] font-black uppercase text-slate-500 ml-1">1. Current Stage (Statutory)</label>
                                    <Select value={currentStage} onValueChange={setCurrentStage}>
                                        <SelectTrigger className="h-14 rounded-2xl bg-slate-50 border-2 px-5 font-bold text-slate-900">
                                            <SelectValue placeholder="Move Stage" />
                                        </SelectTrigger>
                                        <SelectContent className="rounded-2xl">
                                            {STAGES.map(s => (
                                                <SelectItem key={s} value={s} className="font-bold py-3 uppercase text-[10px]">{s} Stage</SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="space-y-4">
                                    <label className="text-[11px] font-black uppercase text-slate-500 ml-1">2. Last Hearing Date</label>
                                    <div className="relative">
                                        <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-300" />
                                        <Input type="date" defaultValue="2024-10-15" className="h-14 pl-12 rounded-2xl bg-slate-50 border-2 font-bold text-slate-800" />
                                    </div>
                                </div>
                            </div>

                            {/* PROCEEDINGS SUMMARY */}
                            <div className="space-y-4">
                                <div className="flex justify-between items-center px-1">
                                    <label className="text-[11px] font-black uppercase text-slate-500">3. Proceedings Summary</label>
                                    <button className="flex items-center gap-1.5 text-blue-600 font-bold text-[10px] uppercase tracking-wider bg-blue-50 px-3 py-1.5 rounded-full border border-blue-100">
                                        <Sparkles size={12} /> AI Transcription
                                    </button>
                                </div>
                                <Textarea
                                    className="min-h-[160px] rounded-[32px] bg-slate-50 border-2 p-8 text-sm font-medium leading-relaxed resize-none focus:ring-2 focus:ring-blue-600"
                                    placeholder="Summarize the courtroom arguments, witness statements, or directions given by the Hon'ble Judge..."
                                />
                            </div>

                            {/* NEXT STEPS & DATES */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 border-t border-slate-50 pt-10">
                                <div className="space-y-4">
                                    <label className="text-[11px] font-black uppercase text-slate-500 ml-1 tracking-widest">4. Next Hearing Date</label>
                                    <div className="relative group">
                                        <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-red-400 group-focus-within:text-red-600 transition-colors" />
                                        <Input type="date" className="h-14 pl-12 rounded-2xl bg-red-50/30 border-2 font-black text-red-700" />
                                        <div className="absolute right-3 top-1/2 -translate-y-1/2">
                                            <Badge className="bg-red-100 text-red-600 border-2 text-[8px] font-black uppercase">Calendar Sync</Badge>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <label className="text-[11px] font-black uppercase text-slate-500 ml-1 tracking-widest">5. Next Action Required</label>
                                    <div className="relative group">
                                        <Gavel className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-300 group-focus-within:text-blue-600 transition-colors" />
                                        <Input placeholder="e.g. Filing of Rebuttal" className="h-14 pl-12 rounded-2xl bg-slate-50 border-2 font-bold text-slate-800" />
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* SIDEBAR: JUDICIAL CONTEXT (4 COLS) */}
                <div className="lg:col-span-4 space-y-8 sticky top-28 h-fit">

                    {/* LINKED VICTIM & ACCUSED INFO */}
                    <Card className="rounded-[40px] border-2 bg-slate-900 text-white p-8 shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none"><Scale size={120} /></div>
                        <h4 className="text-[10px] font-black text-blue-400 uppercase tracking-widest mb-8 border-b border-white/10 pb-4">Linked Registry Data</h4>
                        <div className="space-y-8">
                            <div className="space-y-2">
                                <p className="text-[8px] font-black text-slate-500 uppercase tracking-widest leading-none">Victim Profile (PwD)</p>
                                <div className="flex items-center gap-3">
                                    <div className="h-8 w-8 rounded-lg bg-blue-600 flex items-center justify-center"><CheckCircle2 size={16} /></div>
                                    <p className="text-sm font-black tracking-tight">AMIT KUMAR (ID: 0912)</p>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <p className="text-[8px] font-black text-slate-500 uppercase tracking-widest leading-none">Accused Entity</p>
                                <div className="flex items-center gap-3 text-red-400">
                                    <Landmark size={16} />
                                    <p className="text-sm font-black tracking-tight uppercase">CITY GLOBAL RETAIL LTD</p>
                                </div>
                            </div>
                        </div>
                    </Card>

                    <Card className="rounded-[40px] border-slate-200 p-8 bg-white shadow-sm">
                        <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-6 flex items-center gap-2">
                            <Timer size={14} className="text-blue-600" /> Statutory Reminders
                        </h4>
                        <div className="space-y-6">
                            <div className="flex gap-4 border-l-2 border-slate-100 pl-4">
                                <div>
                                    <p className="text-xs font-black text-slate-800 uppercase tracking-tight">Limitation Period</p>
                                    <p className="text-[10px] text-slate-400 font-medium">120 Days remaining for trial closure under Section 91 protocols.</p>
                                </div>
                            </div>
                            <div className="flex gap-4 border-l-2 border-red-100 pl-4 bg-red-50/50 py-3 rounded-r-2xl">
                                <div>
                                    <p className="text-xs font-black text-red-700 uppercase tracking-tight">Critical Hearing</p>
                                    <p className="text-[10px] text-red-600 font-medium">Cross-examination of PW-1 scheduled for next hearing date.</p>
                                </div>
                            </div>
                        </div>
                    </Card>

                    <div className="p-6 bg-blue-50 rounded-[32px] border border-blue-100 flex gap-4">
                        <Info className="text-blue-600 shrink-0" size={20} />
                        <p className="text-[9px] font-bold text-blue-800 leading-normal uppercase">
                            Trial progress is visible to the <b>Chief Commissioner (CCPD)</b> and <b>District Magistrate</b> in real-time.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
}