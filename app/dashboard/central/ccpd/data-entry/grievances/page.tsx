// app/dashboard/ccpd/data/grievance-handling/page.tsx
"use client";
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  MessageSquare, ShieldAlert, Globe, MapPin, 
  Send, Zap, History, Search, Filter, 
  BadgeCheck, Landmark, Sparkles, UserCircle2, 
  ArrowLeft, Info, Forward, Calendar, 
  FileText, Activity, Save
} from "lucide-react";
import { 
  Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue 
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";

export default function NationalGrievanceHandling() {
  return (
    <div className="space-y-12 animate-in fade-in duration-1000 pb-20 font-sans selection:bg-indigo-100 bg-[#fbfcfd]">
      
      {/* HUB PRIMARY HEADER */}
      <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-8 mb-10 bg-white p-12 rounded-[48px] border-2 border-slate-100 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.05)] relative overflow-hidden">
        <div className="absolute top-0 right-0 p-10 opacity-[0.03] pointer-events-none text-blue-600">
            <MessageSquare size={240} />
        </div>
        
        <div className="space-y-4 relative z-10">
          <div className="flex items-center gap-3">
            <div className="h-14 w-14 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 rounded-2xl flex items-center justify-center text-white shadow-xl shadow-blue-500/20 transition-transform hover:scale-110">
                <Forward size={32} />
            </div>
            <div>
                <h1 className="text-4xl font-black text-slate-900 tracking-tighter uppercase leading-none">Grievance Handling & Forwarding</h1>
                <p className="text-[10px] font-black text-blue-600 uppercase tracking-[0.3em] mt-2 flex items-center gap-2">
                    <BadgeCheck size={12} /> A3.2 National Intake Node
                </p>
            </div>
          </div>
          <p className="text-slate-500 font-medium italic text-lg max-w-2xl">For grievances received directly by the Chief Commissioner.</p>
        </div>

        <div className="flex gap-4 relative z-10">
            <Button variant="outline" className="h-16 px-10 rounded-3xl border-2 border-slate-200 font-black uppercase tracking-widest text-[10px] bg-white gap-2 shadow-sm hover:bg-slate-50 transition-all">
                <History size={18} className="mr-2" /> Forwarding History
            </Button>
            <Button className="h-16 px-12 rounded-[24px] bg-slate-950 text-white font-black uppercase tracking-widest text-[11px] shadow-2xl hover:bg-black transition-all gap-3">
                <Zap size={18} className="text-blue-400" /> Dispatch to State Node
            </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* DATA CAPTURE HUB (8 COLS) */}
        <div className="lg:col-span-8 space-y-10">
            <Card className="rounded-[48px] border-2 border-slate-200 bg-white shadow-xl overflow-hidden group">
                <CardHeader className="p-0">
                    <div className="p-10 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white relative overflow-hidden">
                        {/* CARBON FIBER TEXTURE OVERLAY */}
                        <div className="absolute inset-0 opacity-20 pointer-events-none"
                             style={{ backgroundImage: `radial-gradient(black 2px, transparent 0)`, backgroundSize: '4px 4px' }} />
                        <div className="flex items-center gap-5 relative z-10">
                            <div className="h-12 w-12 rounded-2xl bg-white/20 backdrop-blur-md border-2 border-white/20 flex items-center justify-center shadow-lg">
                                <FileText size={24} />
                            </div>
                            <CardTitle className="text-sm font-black uppercase tracking-[0.3em] leading-none">Intake & Routing Parameters</CardTitle>
                        </div>
                    </div>
                </CardHeader>

                <CardContent className="p-12 space-y-12">
                    
                    {/* ID & SOURCE */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div className="space-y-4">
                            <label className="text-[11px] font-black uppercase text-slate-400 ml-1 tracking-widest leading-none">Grievance ID (auto)</label>
                            <Input 
                                defaultValue="CCPD-GRV-2024-NAT-0091"
                                readOnly
                                className="h-16 px-8 rounded-2xl bg-slate-50 border-2 border-slate-200 font-mono font-black text-blue-700 text-lg uppercase shadow-inner"
                            />
                        </div>
                        <div className="space-y-4">
                            <label className="text-[11px] font-black uppercase text-slate-400 ml-1 tracking-widest leading-none">Source (Online / Email / Post)</label>
                            <Select>
                                <SelectTrigger className="w-full h-16 py-6 border-2 border-slate-200 bg-white rounded-2xl px-6 font-black text-slate-800 uppercase text-xs focus:ring-2 focus:ring-blue-500">
                                    <SelectValue placeholder="Identify Entry Channel" />
                                </SelectTrigger>
                                <SelectContent className="rounded-2xl border-2 border-slate-200 shadow-2xl">
                                    <SelectItem value="online" className="font-black py-4 uppercase tracking-widest">Online Portal</SelectItem>
                                    <SelectItem value="email" className="font-black py-4 uppercase tracking-widest">Official Email</SelectItem>
                                    <SelectItem value="post" className="font-black py-4 uppercase tracking-widest">Physical Post</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>

                    {/* COMPLAINANT DETAILS */}
                    <div className="space-y-4">
                        <label className="text-[11px] font-black uppercase text-slate-400 ml-1 tracking-widest leading-none">Complainant Details</label>
                        <div className="relative">
                            <UserCircle2 className="absolute left-5 top-5 h-6 w-6 text-slate-300" />
                            <Textarea 
                                className="min-h-[100px] pl-14 pr-8 py-6 rounded-[32px] border-2 border-slate-200 bg-white font-black text-slate-900 shadow-sm uppercase text-sm tracking-tighter" 
                                placeholder="Full Name, PwD ID (if any), and Primary Contact Information..." 
                            />
                        </div>
                    </div>

                    {/* NATURE OF GRIEVANCE */}
                    <div className="space-y-4">
                        <div className="flex justify-between items-center px-1">
                            <label className="text-[11px] font-black uppercase text-slate-400 ml-1 tracking-widest leading-none">Nature of Grievance</label>
                            <button className="flex items-center gap-2 text-purple-600 font-black text-[10px] uppercase tracking-widest bg-purple-50 px-4 py-2 rounded-full border-2 border-purple-100 hover:bg-white transition-all shadow-sm">
                                <Sparkles size={12} /> AI Classification
                            </button>
                        </div>
                        <Textarea 
                            className="min-h-[140px] bg-slate-50 border-2 border-slate-200 rounded-[32px] p-8 text-base font-medium leading-relaxed italic text-slate-700 shadow-inner resize-none focus:ring-2 focus:ring-indigo-600" 
                            placeholder="Describe the primary statutory violation or complaint..."
                        />
                    </div>

                    {/* ROUTING NODE */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 border-t-2 border-slate-50 pt-10">
                        <div className="space-y-4">
                            <label className="text-[11px] font-black uppercase text-slate-400 ml-1 tracking-widest leading-none">State / Authority Concerned</label>
                            <div className="relative group">
                                <Landmark className="absolute left-5 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-300 group-focus-within:text-indigo-600 transition-colors" />
                                <Input placeholder="Identify State or Nodal Dept" className="h-16 pl-14 rounded-2xl bg-white border-2 border-slate-200 font-black text-slate-900 text-sm shadow-sm" />
                            </div>
                        </div>
                        <div className="space-y-4">
                            <label className="text-[11px] font-black uppercase text-slate-400 ml-1 tracking-widest leading-none">Forwarded To</label>
                            <div className="relative group">
                                <Globe className="absolute left-5 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-300 group-focus-within:text-blue-600 transition-colors" />
                                <Input placeholder="Designated State Authority" className="h-16 pl-14 rounded-2xl bg-white border-2 border-slate-200 font-black text-slate-900 text-sm shadow-sm" />
                            </div>
                        </div>
                    </div>

                    {/* DATE & REMARKS */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div className="space-y-4">
                            <label className="text-[11px] font-black uppercase text-slate-400 ml-1 tracking-widest leading-none">Forwarding Date</label>
                            <div className="relative">
                                <Calendar className="absolute left-5 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-300" />
                                <Input type="date" className="h-16 pl-14 rounded-2xl bg-white border-2 border-slate-200 font-black text-slate-900 text-xs shadow-sm" />
                            </div>
                        </div>
                        <div className="space-y-4">
                            <label className="text-[11px] font-black uppercase text-slate-400 ml-1 tracking-widest leading-none">Remarks / Instructions</label>
                            <Textarea 
                                className="min-h-[100px] bg-slate-50 border-2 border-slate-200 rounded-[32px] p-6 text-sm font-bold text-slate-700 shadow-inner resize-none" 
                                placeholder="Specific directions for the State Commissioner..." 
                            />
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>

        {/* SIDEBAR: SYSTEM BEHAVIOUR & GUARDRAILS (4 COLS) */}
        <div className="lg:col-span-4 space-y-8 sticky top-28 h-fit">
            
            {/* SYSTEM BEHAVIOUR - VIBRANT EMERALD */}
            <Card className="rounded-[44px] border-none bg-gradient-to-br from-emerald-600 via-teal-700 to-blue-700 text-white p-10 shadow-2xl relative overflow-hidden group">
                <div className="absolute inset-0 opacity-20 pointer-events-none"
                     style={{ backgroundImage: `radial-gradient(black 2px, transparent 0)`, backgroundSize: '2px 2px' }} />
                
                <div className="relative z-10 space-y-8">
                    <div className="flex items-center gap-3">
                        <BadgeCheck className="text-emerald-300" size={24} />
                        <h3 className="text-[11px] font-black uppercase tracking-[0.3em] text-emerald-100">System Behaviour</h3>
                    </div>
                    <div className="space-y-8">
                        <BehaviourNode label="Cross-Node Sync" text="Grievance appears in State grievance modules instantly." />
                        <BehaviourNode label="Monitoring Protocol" text="Status monitored through reports only (Read-Only at National)." />
                    </div>
                    <div className="pt-6 border-t border-white/10 flex items-center gap-4">
                        <div className="h-2 w-2 rounded-full bg-blue-400 animate-pulse shadow-[0_0_10px_blue]" />
                        <span className="text-[9px] font-black uppercase tracking-widest text-emerald-100">National Routing Enabled</span>
                    </div>
                </div>
            </Card>

            {/* LIVE INTAKE METRICS */}
            <Card className="rounded-[44px] border-2 border-slate-200 bg-white p-10 shadow-sm relative overflow-hidden">
                <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/topography.png')]" />
                <h4 className="text-[11px] font-black text-slate-400 uppercase tracking-widest mb-10 border-b-2 border-slate-50 pb-6 flex items-center gap-3">
                    <Activity size={18} className="text-blue-600" /> Live Intake Registry
                </h4>
                <div className="space-y-8">
                    <MetricItem label="Intake Total (Q3)" val="1,240" color="text-slate-900" />
                    <MetricItem label="Forwarded to State" val="1,118" color="text-emerald-600" />
                    <MetricItem label="Awaiting Dispatch" val="122" color="text-orange-600" alert />
                </div>
            </Card>

            <div className="flex justify-end pt-4 relative z-10">
                <Button className="w-full h-20 bg-slate-950 text-white rounded-[32px] font-black uppercase tracking-[0.2em] text-[11px] shadow-2xl hover:bg-black transition-all gap-4">
                    Commit & Synchronize <Save size={20} className="text-blue-400" />
                </Button>
            </div>
        </div>

      </div>
    </div>
  );
}

/* UI SUB-COMPONENTS */

function BehaviourNode({ label, text }: { label: string, text: string }) {
    return (
        <div className="space-y-2 group cursor-default">
            <p className="text-[9px] font-black uppercase text-emerald-300 tracking-widest">{label}</p>
            <p className="text-sm font-black text-white uppercase tracking-tighter leading-tight">{text}</p>
        </div>
    )
}

function MetricItem({ label, val, color, alert }: any) {
    return (
        <div className="flex justify-between items-center group cursor-default">
            <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest group-hover:text-blue-600 transition-colors">{label}</span>
            <span className={`text-xl font-black ${color} ${alert ? 'animate-pulse' : ''}`}>{val}</span>
        </div>
    )
}