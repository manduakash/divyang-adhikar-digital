// app/dashboard/sdma/data/review-notes/page.tsx
"use client";
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  ShieldAlert, MapPin, Calendar, Clock, 
  Activity, AlertTriangle, Gavel, History,
  Plus, Search, Filter, Globe, Sparkles,
  BadgeCheck, Navigation, Landmark, ListChecks,
  CheckCircle2, ArrowLeft, Download, Timer,
  Info,
  Zap
} from "lucide-react";
import { 
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue 
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";

export default function DistrictPreparednessReview() {
  const [priority, setPriority] = useState<string>('High');

  return (
    <div className="space-y-10 animate-in fade-in duration-1000 pb-20 font-sans selection:bg-orange-100">
      
      {/* 1. PRIMARY REVIEW HEADER - CARBON FIBER TEXTURE */}
      <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-8 mb-10 bg-white p-10 rounded-[48px] border border-slate-200 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 p-10 opacity-[0.03] pointer-events-none text-orange-600">
            <Activity size={200} />
        </div>
        
        <div className="space-y-4 relative z-10">
          <div className="flex items-center gap-3">
            <div className="h-14 w-14 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center text-white shadow-xl shadow-orange-500/20">
                <Navigation size={32} />
            </div>
            <div>
                <h1 className="text-4xl font-black text-slate-900 tracking-tighter uppercase leading-none">District Preparedness Review Notes (PwD)</h1>
                <p className="text-[10px] font-black text-orange-600 uppercase tracking-[0.3em] mt-2 flex items-center gap-2">
                    <BadgeCheck size={12} /> State Scrutiny Node Hub
                </p>
            </div>
          </div>
        </div>

        <div className="flex gap-4 relative z-10">
            <Button variant="outline" className="h-16 px-10 rounded-[24px] border-slate-200 font-black uppercase tracking-widest text-[10px] bg-white gap-2 shadow-sm hover:bg-slate-50 transition-all">
                <History size={18} /> District review register
            </Button>
            <Button className="h-16 px-10 rounded-[24px] bg-slate-950 text-white font-black uppercase tracking-widest text-[10px] shadow-2xl hover:bg-black transition-all">
                Commit Review Node
            </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-12 gap-10">
        
        {/* 2. DATA ENTRY MODULE (8 COLS) */}
        <div className="xl:col-span-8 space-y-8">
            <Card className="rounded-[48px] border-slate-200 shadow-sm overflow-hidden bg-white group hover:border-orange-200 transition-all">
                <CardHeader className="p-0">
                    <div className="p-10 bg-gradient-to-r from-orange-600 via-orange-700 to-red-700 text-white relative overflow-hidden">
                        {/* CARBON FIBER OVERLAY */}
                        <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
                        <CardTitle className="text-[10px] font-black uppercase tracking-[0.3em] relative z-10 text-white leading-none">Data Captured Module</CardTitle>
                    </div>
                </CardHeader>

                <CardContent className="p-12 space-y-12">
                    
                    {/* DISTRICT & PERIOD */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div className="space-y-4">
                            <label className="text-[11px] font-black uppercase text-slate-500 ml-1 tracking-widest">District Name</label>
                            <div className="relative group">
                                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-300 group-focus-within:text-orange-600 transition-colors" />
                                <Select>
                                    <SelectTrigger className="h-16 pl-12 rounded-2xl bg-slate-50 border font-black text-slate-900 shadow-inner"><SelectValue placeholder="Select District Node" /></SelectTrigger>
                                    <SelectContent className="rounded-2xl shadow-2xl">
                                        <SelectItem value="lko" className="font-bold py-3 uppercase text-[10px]">Lucknow Urban</SelectItem>
                                        <SelectItem value="vns" className="font-bold py-3 uppercase text-[10px]">Varanasi Region</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <label className="text-[11px] font-black uppercase text-slate-500 ml-1 tracking-widest">Review Period</label>
                            <Select defaultValue="q3">
                                <SelectTrigger className="h-16 rounded-2xl bg-slate-50 border font-black text-slate-900 shadow-inner px-6"><SelectValue /></SelectTrigger>
                                <SelectContent className="rounded-2xl">
                                    <SelectItem value="q3" className="font-bold py-3 uppercase text-[10px]">Q3 FY 2024-25</SelectItem>
                                    <SelectItem value="q2" className="font-bold py-3 uppercase text-[10px]">Q2 FY 2024-25</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>

                    {/* PREPAREDNESS GAPS (Textarea) */}
                    <div className="space-y-4">
                        <div className="flex justify-between items-center px-1">
                            <label className="text-[11px] font-black uppercase text-slate-500 ml-1 tracking-widest">Key Preparedness Gaps (derived from DDMA data)</label>
                            <button className="flex items-center gap-2 text-blue-600 font-black text-[9px] uppercase tracking-widest bg-blue-50 px-4 py-2 rounded-full border border-blue-100 hover:bg-white transition-all shadow-sm"><Sparkles size={12}/> AI Gap Derivation</button>
                        </div>
                        <Textarea className="min-h-[160px] bg-slate-50 border rounded-[32px] p-8 text-sm font-medium leading-relaxed italic text-slate-700 shadow-inner resize-none focus:ring-2 focus:ring-orange-500" placeholder="Analyze regional shortfalls in mapping, shelters, or resources..." />
                    </div>

                    {/* PRIORITY SELECTION */}
                    <div className="space-y-4">
                        <label className="text-[11px] font-black uppercase text-slate-500 ml-1 tracking-widest">Priority Level (High / Medium / Low)</label>
                        <div className="grid grid-cols-3 gap-3">
                            <PriorityBtn label="High" active={priority === 'High'} onClick={() => setPriority('High')} color="bg-red-100 text-red-700 border-red-200" />
                            <PriorityBtn label="Medium" active={priority === 'Medium'} onClick={() => setPriority('Medium')} color="bg-orange-100 text-orange-700 border-orange-200" />
                            <PriorityBtn label="Low" active={priority === 'Low'} onClick={() => setPriority('Low')} color="bg-green-100 text-green-700 border-green-200" />
                        </div>
                    </div>

                    {/* PROPOSED DIRECTIONS */}
                    <div className="space-y-4 pt-4 border-t border-slate-50">
                        <label className="text-[11px] font-black uppercase text-slate-500 ml-1 tracking-widest">Proposed Directions</label>
                        <Textarea className="min-h-[140px] bg-slate-50 border rounded-[32px] p-8 text-sm font-black text-slate-900 uppercase tracking-tight leading-relaxed shadow-inner resize-none focus:ring-2 focus:ring-indigo-600" placeholder="Author binding statutory directives for the DM Node..." />
                    </div>

                    {/* FOLLOW-UP DATE */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div className="space-y-4">
                            <label className="text-[11px] font-black uppercase text-slate-500 ml-1 tracking-widest">Follow-up Date</label>
                            <div className="relative">
                                <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-300 pointer-events-none" />
                                <Input type="date" className="h-16 pl-12 rounded-2xl bg-slate-50 border font-bold text-slate-800 shadow-inner" />
                            </div>
                        </div>
                        <div className="flex flex-col justify-end">
                            <Button className="w-full h-16 bg-orange-600 text-white rounded-[24px] font-black uppercase tracking-[0.2em] text-[11px] shadow-2xl shadow-orange-900/20 hover:bg-orange-700 transition-all gap-3">
                                Save Review Notes <Zap size={18} className="fill-white" />
                            </Button>
                        </div>
                    </div>

                </CardContent>
            </Card>
        </div>

        {/* 3. SIDEBAR: STATUTORY INTELLIGENCE (4 COLS) */}
        <div className="xl:col-span-4 space-y-8 sticky top-28 h-fit">
            
            <Card className="rounded-[40px] border-none bg-slate-900 text-white p-10 shadow-2xl relative overflow-hidden group">
                <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/circuit-board.png')]" />
                <div className="relative z-10 space-y-8">
                    <div className="flex items-center gap-3 text-orange-400">
                        <Activity size={24} />
                        <h3 className="text-[10px] font-black uppercase tracking-widest">Oversight Pulse</h3>
                    </div>
                    <div className="space-y-6">
                        <div className="p-5 bg-white/5 rounded-3xl border border-white/10">
                            <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">Statewide Gaps Identified</p>
                            <p className="text-3xl font-black text-white tracking-tighter">142</p>
                        </div>
                    </div>
                    <p className="text-[10px] font-medium text-slate-400 leading-relaxed uppercase tracking-widest italic">
                        Data from this review Hub serves as the primary **Inputs for Special Reports** per Section A3.3.
                    </p>
                </div>
            </Card>

            <Card className="rounded-[40px] border-slate-200 p-8 bg-white shadow-sm relative overflow-hidden">
                <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/topography.png')]" />
                <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-8 border-b pb-6 flex items-center gap-3">
                    <Timer size={18} className="text-orange-600" /> Pending Follow-up
                </h4>
                <div className="space-y-6">
                    <FollowUpNode district="Meerut Hub" due="Tomorrow" alert />
                    <FollowUpNode district="Agra Sector" due="24 Oct" />
                    <FollowUpNode district="Varanasi Region" due="30 Oct" />
                </div>
            </Card>

            <div className="p-8 bg-orange-50 rounded-[40px] border border-orange-100 flex gap-6 shadow-sm">
                <Info className="text-orange-600 shrink-0" size={28} />
                <p className="text-[9px] font-bold text-orange-950 leading-relaxed uppercase tracking-widest">
                    Proposed directions automatically mirror to the <b>Advisory register</b> for formal dispatch tracking.
                </p>
            </div>
        </div>

      </div>
    </div>
  );
}

/* UI SUB-COMPONENTS */

function PriorityBtn({ label, active, onClick, color }: any) {
    return (
        <button 
            onClick={onClick}
            className={`py-4 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all border-2 ${
                active ? `${color} shadow-lg scale-[1.05] border-transparent` : 'bg-slate-50 text-slate-400 border-slate-100 hover:bg-white hover:border-slate-300'
            }`}
        >
            {label}
        </button>
    )
}

function FollowUpNode({ district, due, alert }: any) {
    return (
        <div className="flex items-center justify-between group cursor-pointer hover:bg-slate-50 p-2 rounded-xl transition-all">
            <div className="flex items-center gap-3">
                <div className={`h-1.5 w-1.5 rounded-full ${alert ? 'bg-red-500 animate-pulse shadow-[0_0_10px_rgba(239,68,68,0.4)]' : 'bg-orange-400'}`} />
                <span className="text-xs font-black text-slate-800 uppercase tracking-tight">{district}</span>
            </div>
            <span className={`text-[10px] font-mono font-black ${alert ? 'text-red-600 underline' : 'text-slate-400'}`}>{due}</span>
        </div>
    )
}