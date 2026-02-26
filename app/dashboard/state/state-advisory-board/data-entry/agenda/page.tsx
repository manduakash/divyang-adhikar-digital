// app/dashboard/sab/data/meetings/page.tsx
"use client";
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
    Calendar, Clock, MapPin, Video,
    Users, FileText, Send, Sparkles,
    ShieldCheck, ArrowLeft, Landmark,
    Upload, CheckCircle2, Radio
} from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function MeetingScheduleEntry() {
    return (
        <div className="max-w-6xl mx-auto pb-20 animate-in fade-in duration-1000 font-sans selection:bg-emerald-100">

            {/* HEADER SECTION */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10">
                <div className="space-y-1">
                    <div className="flex items-center gap-2 text-emerald-600 font-black uppercase text-[10px] tracking-[0.2em]">
                        <ArrowLeft size={14} /> Advisory Hub / Data Entry
                    </div>
                    <h1 className="text-4xl font-black text-slate-900 tracking-tighter uppercase leading-none">Meetings (Schedule & Notices)</h1>
                    <p className="text-slate-500 font-medium italic">Plan, schedule, and formally notify meetings of the Advisory Board.</p>
                </div>
                <div className="flex gap-3">
                    <Button variant="outline" className="h-14 px-8 rounded-2xl border-slate-200 font-bold bg-white shadow-sm">Meeting Calendar</Button>
                    <Button className="h-14 px-10 rounded-2xl bg-slate-950 text-white font-black uppercase tracking-widest text-[10px] shadow-2xl hover:bg-black transition-all gap-2">
                        Dispatch Formal Notice <Send size={16} />
                    </Button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

                {/* MAIN DATA ENTRY COLUMN (8 COLS) */}
                <div className="lg:col-span-8 space-y-8">

                    <Card className="rounded-[40px] border-slate-200 shadow-2xl overflow-hidden bg-white relative">
                        <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] bg-emerald-600 h-2 z-0" />
                        <CardHeader className="p-8 border-b border-slate-50 bg-slate-50/50 relative z-10">
                            <CardTitle className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Statutory Meeting Parameters</CardTitle>
                        </CardHeader>

                        <CardContent className="p-10 space-y-10 relative z-10">

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-3">
                                    <label className="text-[11px] font-black uppercase text-slate-500 ml-1">Meeting Type (Ordinary / Special)</label>
                                    <Select>
                                        <SelectTrigger className="h-16 py-7 w-full rounded-2xl bg-slate-50 border px-6 font-bold text-slate-800">
                                            <SelectValue placeholder="Select Type" />
                                        </SelectTrigger>
                                        <SelectContent className="rounded-2xl">
                                            <SelectItem value="ordinary" className="font-bold py-3 uppercase text-[10px]">Ordinary Meeting</SelectItem>
                                            <SelectItem value="special" className="font-bold py-3 uppercase text-[10px] text-orange-600">Special Meeting</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="space-y-3">
                                    <label className="text-[11px] font-black uppercase text-slate-500 ml-1">Date and Time</label>
                                    <div className="relative">
                                        <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-300 pointer-events-none" />
                                        <Input type="datetime-local" className="h-16 pl-12 rounded-2xl bg-slate-50 border font-bold text-slate-700" />
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-3">
                                <label className="text-[11px] font-black uppercase text-slate-500 ml-1">Venue / Video Conference Link</label>
                                <div className="relative group">
                                    <Video className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-300 group-focus-within:text-emerald-600 transition-colors" />
                                    <Input placeholder="Enter physical location or digital link" className="h-16 pl-12 rounded-2xl bg-slate-50 border font-bold text-slate-800 shadow-inner" />
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className="flex justify-between items-center px-1">
                                    <label className="text-[11px] font-black uppercase text-slate-500 ml-1">Agenda Summary</label>
                                    <button className="flex items-center gap-1.5 text-blue-600 font-bold text-[10px] uppercase tracking-wider bg-blue-50 px-3 py-1.5 rounded-full border border-blue-100 hover:bg-blue-100 transition-colors">
                                        <Sparkles size={12} /> AI Agenda Builder
                                    </button>
                                </div>
                                <Textarea placeholder="Detail the statutory objectives of the meeting..." className="min-h-[160px] rounded-[32px] bg-slate-50 border p-8 text-sm font-medium leading-relaxed resize-none focus:ring-2 focus:ring-emerald-600 shadow-inner" />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-slate-50">
                                <div className="space-y-3">
                                    <label className="text-[11px] font-black uppercase text-slate-500 ml-1">Notice Issue Date</label>
                                    <Input type="date" className="h-14 rounded-2xl bg-slate-50 border font-bold px-6" />
                                </div>
                                <div className="space-y-3">
                                    <label className="text-[11px] font-black uppercase text-slate-500 ml-1">Notice Document Upload (PDF)</label>
                                    <div className="border-2 border-dashed border-slate-200 rounded-2xl p-4 flex items-center justify-between bg-slate-50 hover:bg-white hover:border-emerald-400 transition-all cursor-pointer group">
                                        <div className="flex items-center gap-3">
                                            <Upload className="text-slate-300 group-hover:text-emerald-600 transition-colors" size={20} />
                                            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Signed Notice PDF</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </CardContent>
                    </Card>
                </div>

                {/* SIDEBAR (4 COLS) */}
                <div className="lg:col-span-4 space-y-8 sticky top-28 h-fit">
                    <Card className="rounded-[40px] border bg-slate-900 text-white p-8 shadow-2xl relative overflow-hidden group">
                        <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/circuit-board.png')]" />
                        <div className="relative z-10 space-y-6">
                            <div className="flex items-center gap-3 text-emerald-400">
                                <Users size={20} />
                                <h3 className="text-sm font-black uppercase tracking-widest">Members to be Notified</h3>
                            </div>
                            <div className="space-y-3 max-h-[300px] overflow-y-auto custom-scrollbar pr-2">
                                {['Chairperson', 'Member Secretary', 'Expert Member 1', 'Expert Member 2', 'NGO Representative'].map((member) => (
                                    <div key={member} className="flex items-center justify-between p-3 bg-white/5 rounded-xl border border-white/10 group/item hover:bg-white/10 transition-all">
                                        <span className="text-[10px] font-bold uppercase tracking-tight text-slate-300">{member}</span>
                                        <CheckCircle2 size={14} className="text-emerald-500 opacity-40 group-hover/item:opacity-100 transition-opacity" />
                                    </div>
                                ))}
                            </div>
                            <p className="text-[9px] font-medium text-slate-500 uppercase tracking-widest leading-relaxed">
                                Notice will be dispatched via <b>Automated meeting notices</b> system as per Section A3.2 outputs.
                            </p>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
}