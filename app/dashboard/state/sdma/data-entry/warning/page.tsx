// app/dashboard/sdma/data/early-warning/page.tsx
"use client";
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Megaphone, Zap, Radio, Globe, 
  Smartphone, Users, ShieldAlert, History,
  Plus, Search, Filter, Sparkles,
  BadgeCheck, Map, Activity, Volume2,
  CheckCircle2, ArrowLeft, Download, Timer,
  Navigation, MousePointer2, Landmark, Gavel,
  Wifi, UserCircle2,
  MapPin,
  ArrowUpRight
} from "lucide-react";
import { 
  Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue 
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";

export default function EarlyWarningOutreach() {
  return (
    <div className="space-y-10 animate-in fade-in duration-1000 pb-20 font-sans selection:bg-orange-100">
      
      {/* 1. BROADCAST HUB HEADER - CARBON FIBER TEXTURE */}
      <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-8 mb-10 bg-white p-10 rounded-[48px] border border-slate-200 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 p-10 opacity-[0.03] pointer-events-none text-orange-600">
            <Megaphone size={200} />
        </div>
        
        <div className="space-y-4 relative z-10">
          <div className="flex items-center gap-3">
            <div className="h-14 w-14 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center text-white shadow-xl shadow-orange-500/20 transition-transform hover:scale-110">
                <Radio size={32} />
            </div>
            <div>
                <h1 className="text-4xl font-black text-slate-900 tracking-tighter uppercase leading-none">Early Warning Policy & Outreach Directives (PwD)</h1>
                <p className="text-[10px] font-black text-orange-600 uppercase tracking-[0.3em] mt-2 flex items-center gap-2">
                    <BadgeCheck size={12} /> Statewide Broadcast Node / Statutory Registry
                </p>
            </div>
          </div>
        </div>

        <div className="flex gap-4 relative z-10">
            <Button variant="outline" className="h-16 px-10 rounded-[24px] border-slate-200 font-black uppercase tracking-widest text-[10px] bg-white gap-2 shadow-sm hover:bg-slate-50 transition-all group">
                <History size={18} className="mr-2" /> Early warning directive register <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Button>
            <Button className="h-16 px-12 rounded-[24px] bg-slate-950 text-white font-black uppercase tracking-widest text-[11px] shadow-2xl hover:bg-black transition-all gap-3 group border-t border-white/10">
                <Zap size={18} className="text-orange-400 group-hover:animate-pulse" /> Dispatch Outreach Directive
            </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-12 gap-10">
        
        {/* 2. DATA CAPTURE HUB (8 COLS) */}
        <div className="xl:col-span-8 space-y-8">
            <Card className="rounded-[48px] border-slate-200 shadow-sm overflow-hidden bg-white group hover:border-orange-200 transition-all">
                <CardHeader className="p-0">
                    <div className="p-10 bg-gradient-to-r from-orange-600 via-orange-700 to-red-700 text-white relative overflow-hidden">
                        {/* CARBON FIBER OVERLAY */}
                        <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
                        <CardTitle className="text-[10px] font-black uppercase tracking-[0.3em] relative z-10 text-white leading-none">Directive Formulation Registry</CardTitle>
                    </div>
                </CardHeader>

                <CardContent className="p-12 space-y-12">
                    
                    {/* DISASTER TYPE & TARGET GROUPS */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div className="space-y-4">
                            <label className="text-[11px] font-black uppercase text-slate-500 ml-1 tracking-widest">Disaster Type</label>
                            <Select>
                                <SelectTrigger className="h-16 rounded-2xl bg-slate-50 border font-black text-slate-900 shadow-inner px-6"><SelectValue placeholder="Identify Hazard" /></SelectTrigger>
                                <SelectContent className="rounded-2xl shadow-2xl border-slate-100">
                                    <SelectItem value="flood" className="font-bold py-3 uppercase text-[10px] text-blue-600">Flood / Inundation</SelectItem>
                                    <SelectItem value="cyclone" className="font-bold py-3 uppercase text-[10px] text-indigo-600">Cyclone / Wind Storm</SelectItem>
                                    <SelectItem value="heat" className="font-bold py-3 uppercase text-[10px] text-orange-600">Extreme Heatwave</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="space-y-4">
                            <label className="text-[11px] font-black uppercase text-slate-500 ml-1 tracking-widest">Target PwD Groups</label>
                            <div className="flex flex-wrap gap-2">
                                {['Visual', 'Hearing', 'Mobility', 'Cognitive'].map(group => (
                                    <Badge key={group} className="bg-white border-2 border-slate-100 text-slate-400 font-black text-[9px] px-3 py-1.5 uppercase hover:border-orange-500 hover:text-orange-600 transition-all cursor-pointer shadow-sm">{group}</Badge>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* COMMUNICATION MODE (Tactile Selectors) */}
                    <div className="space-y-4">
                        <label className="text-[11px] font-black uppercase text-slate-500 ml-1 tracking-widest">Communication Mode (SMS / IVR / Volunteers / Media)</label>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <ModeTile icon={<Smartphone size={18}/>} label="SMS Hub" active />
                            <ModeTile icon={<Volume2 size={18}/>} label="IVR Voice" active />
                            <ModeTile icon={<Users size={18}/>} label="Volunteers" />
                            <ModeTile icon={<Globe size={18}/>} label="Media Node" active />
                        </div>
                    </div>

                    {/* DIRECTIVE DETAILS */}
                    <div className="space-y-4">
                        <div className="flex justify-between items-center px-1">
                            <label className="text-[11px] font-black uppercase text-slate-500 ml-1 tracking-widest">Directive Details</label>
                            <button className="flex items-center gap-2 text-blue-600 font-black text-[9px] uppercase tracking-widest bg-blue-50 px-4 py-2 rounded-full border border-blue-100 hover:bg-white transition-all shadow-sm"><Sparkles size={12}/> AI Policy Draft</button>
                        </div>
                        <Textarea className="min-h-[160px] bg-slate-50 border rounded-[32px] p-8 text-sm font-medium leading-relaxed italic text-slate-700 shadow-inner resize-none focus:ring-2 focus:ring-orange-500" placeholder="Author the binding directive for outreach protocols..." />
                    </div>

                    {/* DISTRICTS COVERED */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 border-t border-slate-50 pt-10">
                        <div className="space-y-4">
                            <label className="text-[11px] font-black uppercase text-slate-500 ml-1 tracking-widest">Districts Covered</label>
                            <div className="relative group">
                                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-300 group-focus-within:text-orange-600 transition-colors" />
                                <Input placeholder="Enter targeted District IDs..." className="h-16 pl-12 rounded-2xl bg-slate-50 border font-bold text-slate-800 shadow-inner" />
                            </div>
                        </div>
                        <div className="space-y-4">
                            <label className="text-[11px] font-black uppercase text-slate-500 ml-1 tracking-widest">Monitoring Notes</label>
                            <Input placeholder="Internal audit observations..." className="h-16 px-6 rounded-2xl bg-slate-50 border font-bold text-slate-800 shadow-inner" />
                        </div>
                    </div>

                    <Button className="w-full h-20 bg-orange-600 text-white rounded-[32px] font-black uppercase tracking-[0.2em] text-[11px] shadow-2xl shadow-orange-900/20 hover:bg-orange-700 transition-all flex gap-4 group">
                        Execute Outreach Directive <Zap size={20} className="fill-white group-hover:scale-110 transition-transform" />
                    </Button>
                </CardContent>
            </Card>
        </div>

        {/* 3. SIDEBAR: COVERAGE TRACKING (4 COLS) */}
        <div className="xl:col-span-4 space-y-8 sticky top-28 h-fit">
            
            {/* COVERAGE TRACKING (Mandated Output) */}
            <Card className="rounded-[40px] border-none bg-slate-900 text-white p-10 shadow-2xl relative overflow-hidden group">
                <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/circuit-board.png')]" />
                <div className="relative z-10 space-y-8">
                    <div className="flex items-center gap-3 text-orange-400">
                        <Activity size={24} />
                        <h3 className="text-[10px] font-black uppercase tracking-widest">Coverage tracking</h3>
                    </div>
                    <div className="space-y-6">
                        <StatBar label="SMS Reach" val="98.2%" color="bg-orange-500" />
                        <StatBar label="IVR Connection" val="94.0%" color="bg-blue-500" />
                        <StatBar label="Volunteer Sync" val="72.5%" color="bg-emerald-500" />
                    </div>
                    <p className="text-[10px] font-medium text-slate-400 leading-relaxed uppercase tracking-tighter italic border-t border-white/10 pt-4">
                        A6: Neural node monitors real-time feedback loops from <b>Districts Covered</b> nodes.
                    </p>
                </div>
            </Card>

            <Card className="rounded-[40px] border-slate-200 p-10 bg-white shadow-sm relative overflow-hidden">
                <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/topography.png')]" />
                <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-8 border-b pb-6 flex items-center gap-3">
                    <History size={18} className="text-orange-600" /> Statutory History
                </h4>
                <div className="space-y-6">
                    <HistoryNode id="ORD-EW-042" date="14 Oct" status="DELIVERED" success />
                    <HistoryNode id="ORD-EW-018" date="10 Oct" status="VERIFIED" success />
                    <HistoryNode id="ORD-EW-004" date="02 Oct" status="ARCHIVED" />
                </div>
            </Card>

            <div className="p-8 bg-orange-50 rounded-[40px] border border-orange-100 flex gap-6 shadow-sm">
                <ShieldAlert className="text-orange-600 shrink-0" size={28} />
                <p className="text-[10px] font-bold text-orange-900 leading-relaxed uppercase tracking-widest">
                    Outreach directives issued here automatically populate the <b>Early warning directive register</b> for statewide audit.
                </p>
            </div>
        </div>

      </div>
    </div>
  );
}

/* UI SUB-COMPONENTS */

function ModeTile({ icon, label, active }: any) {
    return (
        <div className={`p-5 rounded-[28px] border-2 transition-all flex flex-col items-center justify-center gap-3 ${active ? 'bg-orange-50 border-orange-600 text-orange-900 shadow-md' : 'bg-slate-50 border-slate-100 text-slate-300 opacity-60'}`}>
            {React.cloneElement(icon, { className: active ? 'text-orange-600' : '' })}
            <span className="text-[9px] font-black uppercase tracking-widest">{label}</span>
        </div>
    )
}

function StatBar({ label, val, color }: any) {
    return (
        <div className="space-y-2">
            <div className="flex justify-between items-end">
                <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest leading-none">{label}</p>
                <p className="text-sm font-black text-white leading-none">{val}</p>
            </div>
            <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                <div className={`h-full ${color} shadow-[0_0_8px_rgba(249,115,22,0.3)] transition-all duration-1000`} style={{ width: val }} />
            </div>
        </div>
    )
}

function HistoryNode({ id, date, status, success }: any) {
    return (
        <div className="flex items-center justify-between group cursor-pointer hover:bg-slate-50 p-2 rounded-xl transition-all">
            <div className="flex items-center gap-3">
                <div className={`h-1.5 w-1.5 rounded-full ${success ? 'bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.4)]' : 'bg-slate-300'}`} />
                <span className="text-[10px] font-mono font-black text-indigo-600 group-hover:text-orange-600 transition-colors">{id}</span>
            </div>
            <span className="text-[9px] font-bold text-slate-400 uppercase">{date}</span>
        </div>
    )
}