// app/dashboard/ccpd/data/staffing/page.tsx
"use client";
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Users, UserCheck, UserPlus, ShieldCheck, 
  BadgeCheck, History, Calendar, Landmark, 
  Search, Filter, Save, Sparkles, 
  Timer, AlertTriangle, FileText, Activity,
  ArrowLeft, CheckCircle2, UserCog, Database
} from "lucide-react";
import { 
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue 
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";

export default function OfficeCompositionStaffing() {
  const [filledStatus, setFilledStatus] = useState('filled');

  return (
    <div className="space-y-12 animate-in fade-in duration-1000 pb-20 font-sans selection:bg-indigo-100 bg-[#fbfcfd]">
      
      {/* ADMINISTRATIVE HUB HEADER */}
      <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-8 mb-10 bg-white p-12 rounded-[48px] border-2 border-slate-100 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.05)] relative overflow-hidden">
        <div className="absolute top-0 right-0 p-10 opacity-[0.03] pointer-events-none text-indigo-600">
            <Users size={240} />
        </div>
        
        <div className="space-y-4 relative z-10">
          <div className="flex items-center gap-4">
            <div className="h-16 w-16 bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-700 rounded-3xl flex items-center justify-center text-white shadow-2xl shadow-indigo-500/20 transition-transform hover:scale-105">
                <UserCog size={32} />
            </div>
            <div>
                <h1 className="text-5xl font-black text-slate-900 tracking-tighter uppercase leading-none">Office Composition & Staffing</h1>
                <p className="text-[11px] font-black text-indigo-600 uppercase tracking-[0.3em] mt-3 flex items-center gap-2">
                    <BadgeCheck size={14} /> Secretariat Registry Node / A3.4
                </p>
            </div>
          </div>
          <p className="text-slate-500 font-medium italic text-lg max-w-2xl uppercase tracking-tighter leading-relaxed">
            Maintain statutory and administrative records of the Office of the Chief Commissioner.
          </p>
        </div>

        <div className="flex gap-4 relative z-10">
            <Button variant="outline" className="h-16 px-10 rounded-3xl border-2 border-slate-200 font-black uppercase tracking-widest text-[10px] bg-white gap-2 shadow-sm hover:bg-slate-50 transition-all">
                <History size={18} /> Tenure History
            </Button>
            <Button className="h-16 px-12 rounded-[28px] bg-slate-950 text-white font-black uppercase tracking-widest text-[11px] shadow-2xl hover:bg-black transition-all">
                Update Master Roll
            </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* DATA ENTRY WORKSPACE (8 COLS) */}
        <div className="lg:col-span-8 space-y-12">
            
            <Card className="rounded-[48px] border-2 border-slate-200 bg-white shadow-xl overflow-hidden group">
                <CardHeader className="p-0">
                    <div className="p-10 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white relative overflow-hidden">
                        {/* 4PX CARBON FIBER TEXTURE OVERLAY */}
                        <div className="absolute inset-0 opacity-20 pointer-events-none"
                             style={{ backgroundImage: `radial-gradient(black 2px, transparent 0)`, backgroundSize: '4px 4px' }} />
                        <div className="flex items-center gap-5 relative z-10">
                            <div className="h-12 w-12 rounded-2xl bg-white/20 backdrop-blur-md border-2 border-white/20 flex items-center justify-center shadow-lg group-hover:rotate-6 transition-transform">
                                <Database size={24} />
                            </div>
                            <CardTitle className="text-sm font-black uppercase tracking-[0.3em] leading-none text-white">Record Entry Parameters</CardTitle>
                        </div>
                    </div>
                </CardHeader>
                
                <CardContent className="p-12 space-y-12">
                    
                    {/* POST & STRENGTH */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div className="space-y-4">
                            <label className="text-[11px] font-black uppercase text-slate-400 ml-1 tracking-widest leading-none">Post Name</label>
                            <Input 
                                placeholder="e.g. Deputy Commissioner (Legal)" 
                                className="h-16 px-8 rounded-2xl bg-slate-50 border-2 border-slate-200 font-black text-slate-900 text-sm uppercase tracking-tight shadow-inner focus:ring-2 focus:ring-blue-500 transition-all" 
                            />
                        </div>
                        <div className="space-y-4">
                            <label className="text-[11px] font-black uppercase text-slate-400 ml-1 tracking-widest leading-none">Sanctioned Strength</label>
                            <Input 
                                type="number"
                                placeholder="Total Approved Count" 
                                className="h-16 px-8 rounded-2xl bg-slate-50 border-2 border-slate-200 font-black text-slate-900 text-sm shadow-inner" 
                            />
                        </div>
                    </div>

                    {/* STATUS SELECTOR */}
                    <div className="space-y-4">
                        <label className="text-[11px] font-black uppercase text-slate-400 ml-1 tracking-widest leading-none">Filled / Vacant Status</label>
                        <Select onValueChange={setFilledStatus} defaultValue="filled">
                            <SelectTrigger className="w-full h-16 py-6 border-2 border-slate-200 bg-white rounded-2xl px-6 font-black text-slate-800 uppercase text-[10px] focus:ring-2 focus:ring-indigo-500">
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent className="rounded-2xl border-2 border-slate-200 shadow-2xl">
                                <SelectItem value="filled" className="font-black py-4 uppercase tracking-widest text-emerald-600">Post Currently Filled</SelectItem>
                                <SelectItem value="vacant" className="font-black py-4 uppercase tracking-widest text-red-600">Post Currently Vacant</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    {/* INCUMBENT DETAILS (CONDITIONAL VIBE) */}
                    <div className={`space-y-10 transition-all duration-500 ${filledStatus === 'vacant' ? 'opacity-30 grayscale' : 'opacity-100'}`}>
                        <div className="space-y-4">
                            <label className="text-[11px] font-black uppercase text-slate-400 ml-1 tracking-widest leading-none">Incumbent Name</label>
                            <Input 
                                disabled={filledStatus === 'vacant'}
                                placeholder="Name of Appointed Officer" 
                                className="h-16 px-8 rounded-2xl bg-white border-2 border-slate-200 font-black text-slate-900 text-sm uppercase tracking-tight shadow-sm" 
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            <div className="space-y-4">
                                <label className="text-[11px] font-black uppercase text-slate-400 ml-1 tracking-widest leading-none">Date of Appointment</label>
                                <Input disabled={filledStatus === 'vacant'} type="date" className="h-16 px-8 rounded-2xl bg-white border-2 border-slate-200 font-black text-slate-900 text-xs" />
                            </div>
                            <div className="space-y-4">
                                <label className="text-[11px] font-black uppercase text-slate-400 ml-1 tracking-widest leading-none">Tenure End Date</label>
                                <Input disabled={filledStatus === 'vacant'} type="date" className="h-16 px-8 rounded-2xl bg-white border-2 border-slate-200 font-black text-slate-900 text-xs shadow-sm" />
                            </div>
                        </div>
                    </div>

                    {/* AUTO CALCULATION ALERT */}
                    <div className="p-8 bg-blue-50/50 rounded-[40px] border-2 border-blue-100 flex items-center justify-between">
                        <div className="flex items-center gap-6">
                            <div className="h-14 w-14 rounded-2xl bg-white border-2 border-blue-200 flex items-center justify-center text-blue-600 shadow-sm"><Timer size={28}/></div>
                            <div className="space-y-1">
                                <p className="text-md font-black text-blue-900 uppercase tracking-tight">Vacancy Since (auto)</p>
                                <p className="text-xs text-blue-600 font-medium uppercase tracking-widest">System calculated based on last exit or recruitment data.</p>
                            </div>
                        </div>
                        <Badge className="bg-blue-600 text-white border-none font-black text-[11px] px-6 py-2 rounded-full uppercase tracking-widest">42 Days</Badge>
                    </div>

                    <Button className="w-full h-20 bg-indigo-600 text-white rounded-[32px] font-black uppercase tracking-[0.25em] text-[11px] shadow-2xl hover:bg-indigo-700 transition-all gap-4">
                        Commit Staffing Record <CheckCircle2 size={20} />
                    </Button>
                </CardContent>
            </Card>
        </div>

        {/* SIDEBAR: STATUTORY MONITORING (4 COLS) */}
        <div className="lg:col-span-4 space-y-8 sticky top-28 h-fit">
            
            {/* AGGREGATE STAFFING CARD - VIBRANT EMERALD */}
            <Card className="rounded-[44px] border-none bg-gradient-to-br from-emerald-600 via-teal-700 to-indigo-700 text-white p-10 shadow-2xl relative overflow-hidden group">
                {/* 4PX CARBON FIBER */}
                <div className="absolute inset-0 opacity-15 pointer-events-none"
                     style={{ backgroundImage: `radial-gradient(black 2px, transparent 0)`, backgroundSize: '4px 4px' }} />
                
                <div className="relative z-10 space-y-8">
                    <div className="flex items-center gap-3">
                        <div className="h-10 w-10 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center border-2 border-white/20">
                            <Activity size={20} />
                        </div>
                        <h3 className="text-[11px] font-black uppercase tracking-[0.3em] text-emerald-100">National Node Summary</h3>
                    </div>
                    <div className="space-y-6">
                        <StatSummaryItem label="Total Sanctioned" val="24" />
                        <StatSummaryItem label="Active Incumbents" val="18" />
                        <StatSummaryItem label="Pending Vacancies" val="06" alert />
                    </div>
                    <div className="pt-6 border-t border-white/10 flex items-center gap-4">
                        <div className="h-2 w-2 rounded-full bg-blue-400 animate-pulse shadow-[0_0_10px_blue]" />
                        <span className="text-[9px] font-black uppercase tracking-widest text-emerald-100">Audit Status: Compliant</span>
                    </div>
                </div>
            </Card>

            {/* QUICK ALERTS HUB */}
            <Card className="rounded-[44px] border-2 border-slate-200 bg-white p-10 shadow-sm relative overflow-hidden group hover:border-red-200 transition-all">
                <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/topography.png')]" />
                <h4 className="text-[11px] font-black text-slate-400 uppercase tracking-widest mb-10 border-b-2 border-slate-50 pb-6 flex items-center gap-3 leading-none">
                    <AlertTriangle size={18} className="text-red-500" /> Statutory Alerts
                </h4>
                <div className="space-y-8 relative z-10">
                    <AlertNode label="Deputy Commissioner" sub="Tenure expires in 45 Days" warning />
                    <AlertNode label="Registry Staff Node B" sub="Vacant Since 112 Days" alert />
                </div>
            </Card>

            <div className="p-8 bg-blue-50 rounded-[40px] border-2 border-blue-100 flex gap-6 shadow-sm">
                <Landmark size={28} className="text-blue-600 shrink-0" />
                <p className="text-[9px] font-bold text-blue-900 leading-relaxed uppercase tracking-widest">
                    A3.4: All staffing records are mirrored to the <b>National Ministry</b> for budgetary alignment and post-clearance audits.
                </p>
            </div>
        </div>

      </div>
    </div>
  );
}

/* UI SUB-COMPONENTS */

function StatSummaryItem({ label, val, alert }: any) {
    return (
        <div className="flex justify-between items-center group cursor-default">
            <span className="text-[10px] font-black text-emerald-100/60 uppercase tracking-widest group-hover:text-white transition-colors">{label}</span>
            <span className={`text-2xl font-black ${alert ? 'text-red-300 animate-pulse' : 'text-white'}`}>{val}</span>
        </div>
    )
}

function AlertNode({ label, sub, alert, warning }: any) {
    return (
        <div className="space-y-1 group cursor-default">
            <p className="text-sm font-black text-slate-900 uppercase tracking-tight leading-none group-hover:text-red-600 transition-colors">{label}</p>
            <p className={`text-[10px] font-black uppercase tracking-widest ${alert ? 'text-red-600 underline' : 'text-orange-600'}`}>{sub}</p>
        </div>
    )
}