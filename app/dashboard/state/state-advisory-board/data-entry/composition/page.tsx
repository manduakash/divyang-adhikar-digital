// app/dashboard/sab/composition/page.tsx
"use client";
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Users, Landmark, Calendar, ShieldCheck,
    Upload, CheckCircle2, History, Plus,
    ArrowLeft, BadgeCheck, Info, Save,
    Sparkles, UserPlus, AlertCircle, FileText,
    Clock, Activity, Scale, Search, Filter,
    UserCheck,
    Timer,
    ArrowUpRight
} from "lucide-react";
import {
    Select, SelectContent, SelectItem, SelectTrigger, SelectValue
} from "@/components/ui/select";
import {
    Table, TableBody, TableCell, TableHead, TableHeader, TableRow
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";

export default function BoardCompositionHub() {
    const [activeTab, setActiveTab] = useState('registry');

    return (
        <div className="space-y-10 animate-in fade-in duration-1000 pb-20 font-sans selection:bg-emerald-100">

            {/* 1. PRIMARY HUB HEADER - CARBON FIBER TEXTURE */}
            <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-6 mb-10 bg-white p-10 rounded-[48px] border border-slate-200 shadow-sm relative overflow-hidden">
                <div className="absolute inset-0 opacity-[0.07] pointer-events-none bg-indigo-900" />

                <div className="relative z-10 space-y-4">
                    <div className="flex items-center gap-3">
                        <div className="h-14 w-14 bg-gradient-to-br from-emerald-500 to-teal-700 rounded-2xl flex items-center justify-center text-white shadow-xl shadow-emerald-500/20">
                            <Users size={32} />
                        </div>
                        <div>
                            <h1 className="text-4xl font-black text-white tracking-tighter uppercase leading-none">Board Composition</h1>
                            <p className="text-[10px] font-black text-emerald-400 uppercase tracking-[0.3em] mt-2 flex items-center gap-2 uppercase">
                                <ShieldCheck size={12} /> Statutory Member Registry hub
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex gap-4 relative z-10">
                    <Button variant="outline" className="h-16 px-8 rounded-3xl border-white/20 font-black uppercase tracking-widest text-[10px] bg-white/5 backdrop-blur-md text-white hover:bg-white/10 transition-all group">
                        <History size={18} className="mr-2" /> Tenure History
                    </Button>
                    <Button className="h-16 px-10 rounded-3xl bg-emerald-500 text-white font-black uppercase tracking-widest text-[10px] shadow-2xl shadow-emerald-900/20 hover:bg-emerald-600 transition-all gap-2 group border-t border-white/20">
                        <UserPlus size={18} /> Add Member Node
                    </Button>
                </div>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-12 gap-10">

                {/* 2. DATA CAPTURE FORM (8 COLS) */}
                <div className="xl:col-span-8 space-y-8">
                    <Card className="rounded-[44px] border-slate-200 bg-white shadow-sm overflow-hidden group hover:border-emerald-100 transition-all">
                        <CardHeader className="p-8 border-b border-slate-50 bg-slate-50/30">
                            <CardTitle className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Data Captured Module</CardTitle>
                        </CardHeader>
                        <CardContent className="p-10 space-y-10">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <DataField label="Member Name" icon={<UserCheck />} placeholder="Full Legal Identity" />
                                <div className="space-y-3">
                                    <label className="text-[10px] font-black uppercase text-slate-400 ml-1 tracking-widest">Role (Chairperson / Member / Member Secretary)</label>
                                    <Select>
                                        <SelectTrigger className="h-16 rounded-2xl bg-slate-50 border font-bold text-slate-800 shadow-inner px-6"><SelectValue placeholder="Identify Statutory Role" /></SelectTrigger>
                                        <SelectContent className="rounded-2xl border-slate-100">
                                            <SelectItem value="chair" className="font-bold py-3 uppercase text-[10px]">Chairperson</SelectItem>
                                            <SelectItem value="member" className="font-bold py-3 uppercase text-[10px]">Member</SelectItem>
                                            <SelectItem value="secretary" className="font-bold py-3 uppercase text-[10px]">Member Secretary</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>

                            <div className="space-y-3">
                                <label className="text-[10px] font-black uppercase text-slate-400 ml-1 tracking-widest">Representing Category (Govt Dept / NGO / Expert / PwD / Other)</label>
                                <div className="flex flex-wrap bg-slate-100 p-1.5 rounded-2xl gap-1">
                                    {['Govt Dept', 'NGO', 'Expert', 'PwD', 'Other'].map((cat) => (
                                        <button key={cat} className="flex-1 py-3 bg-white rounded-xl text-[9px] font-black uppercase text-slate-400 hover:text-emerald-600 transition-all shadow-sm">{cat}</button>
                                    ))}
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <DataField label="Date of Nomination" type="date" />
                                <DataField label="Tenure Start Date" type="date" />
                                <DataField label="Tenure End Date" type="date" />
                            </div>

                            <div className="p-8 bg-emerald-50 rounded-[40px] border border-emerald-100 flex items-center justify-between group">
                                <div className="flex items-center gap-6">
                                    <div className="h-14 w-14 rounded-3xl bg-white border border-emerald-200 flex items-center justify-center text-emerald-600 shadow-sm transition-transform group-hover:scale-110"><BadgeCheck size={28} /></div>
                                    <div className="space-y-1">
                                        <p className="text-lg font-black text-emerald-950 uppercase tracking-tight leading-none">Active / Inactive Status</p>
                                        <p className="text-[9px] font-bold text-emerald-600 uppercase tracking-widest">Toggle Member Node status in registry</p>
                                    </div>
                                </div>
                                <Switch className="data-[state=checked]:bg-emerald-600 scale-125 shadow-sm" defaultChecked />
                            </div>

                            <div className="space-y-4 pt-6 border-t border-slate-50">
                                <label className="text-[11px] font-black uppercase text-slate-500 ml-1 tracking-widest">Nomination / Notification Upload (PDF)</label>
                                <div className="border-2 border-dashed border-emerald-200 rounded-[40px] p-12 flex flex-col items-center justify-center bg-slate-50 group hover:bg-white hover:border-emerald-500 transition-all cursor-pointer">
                                    <Upload className="text-slate-300 group-hover:text-emerald-600 mb-4 transition-colors" size={42} />
                                    <span className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em]">Select Statutory Document</span>
                                    <p className="text-[8px] font-bold text-slate-300 uppercase mt-2">Certified Copy • Max 20MB</p>
                                </div>
                            </div>

                            <Button className="w-full h-16 bg-slate-950 text-white rounded-3xl font-black uppercase text-[11px] tracking-[0.2em] shadow-2xl hover:bg-black transition-all">
                                Commit Member Record to Registry <Save size={18} className="ml-2 text-emerald-400" />
                            </Button>
                        </CardContent>
                    </Card>
                </div>

                {/* 3. OUTPUTS & ALERTS (4 COLS) */}
                <div className="xl:col-span-4 space-y-8 sticky top-28 h-fit">

                    {/* VACANCY / TENURE EXPIRY ALERTS (Mandated Output) */}
                    <Card className="rounded-[40px] border bg-red-600 text-white p-10 shadow-2xl relative overflow-hidden group">
                        <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
                        <div className="relative z-10 space-y-8">
                            <div className="flex items-center gap-3">
                                <AlertCircle className="text-white animate-pulse" />
                                <h3 className="text-sm font-black uppercase tracking-widest">Vacancy / tenure expiry alerts</h3>
                            </div>
                            <div className="space-y-6">
                                <AlertNode label="Role: Member (Expert)" desc="Tenure End Date: 12 Nov 2024" alert />
                                <AlertNode label="Role: Member (NGO)" desc="Vacancy Since: 142 Days" alert />
                            </div>
                            <p className="text-[9px] font-black text-red-200 uppercase leading-relaxed tracking-widest">
                                These alerts are automatically mirrored to the State Secretary for immediate nomination cycle initiation.
                            </p>
                            <Button className="w-full h-12 bg-white text-red-600 hover:bg-slate-100 rounded-2xl font-black uppercase tracking-widest text-[9px]">Generate Notification</Button>
                        </div>
                    </Card>

                    {/* COMPOSITION LIST PREVIEW (Mandated Output) */}
                    <Card className="rounded-[40px] border-slate-200 p-8 bg-white shadow-sm relative overflow-hidden">
                        <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/graphy.png')]" />
                        <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-6 border-b pb-4 flex justify-between items-center">
                            <span>Composition list</span>
                            <History size={14} className="text-indigo-600" />
                        </h4>
                        <div className="space-y-6">
                            <MemberNode name="Dr. Rajesh Mehra" role="Chairperson" />
                            <MemberNode name="Amitabh Kant, IAS" role="Member Secretary" />
                            <MemberNode name="Smt. Reena Rai" role="Member (Expert)" />
                        </div>
                        <Button variant="ghost" className="w-full mt-6 text-indigo-600 font-black uppercase text-[9px] tracking-widest hover:bg-indigo-50 rounded-xl group/btn">
                            View Full Registry <ArrowUpRight size={14} className="ml-2 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-all" />
                        </Button>
                    </Card>
                </div>

            </div>
        </div>
    );
}

/* UI SUB-COMPONENTS */

function DataField({ label, icon, placeholder, type = "text" }: any) {
    return (
        <div className="space-y-3 group">
            <label className="text-[10px] font-black uppercase text-slate-400 ml-1 tracking-widest leading-none">{label}</label>
            <div className="relative">
                {icon && <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-emerald-600 transition-colors">{React.cloneElement(icon as React.ReactElement, {})}</div>}
                <Input type={type} placeholder={placeholder} className={`h-16 rounded-2xl bg-slate-50 border font-bold text-slate-800 shadow-inner ${icon ? 'pl-12' : 'px-6'} focus-visible:ring-2 focus-visible:ring-emerald-600`} />
            </div>
        </div>
    )
}

function AlertNode({ label, desc, alert }: any) {
    return (
        <div className="p-4 bg-white/10 rounded-2xl border border-white/10 group hover:bg-white/20 transition-all flex justify-between items-center">
            <div className="space-y-1">
                <p className="text-[10px] font-black text-white uppercase tracking-tight">{label}</p>
                <p className="text-[9px] font-bold text-red-200 uppercase tracking-widest">{desc}</p>
            </div>
            <Timer className="text-white opacity-40 group-hover:opacity-100 transition-opacity" size={16} />
        </div>
    )
}

function MemberNode({ name, role }: any) {
    return (
        <div className="flex items-center gap-4 group cursor-pointer">
            <div className="h-10 w-10 rounded-xl bg-slate-50 flex items-center justify-center border border-slate-100 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                <UserCheck size={18} className="opacity-40 group-hover:opacity-100" />
            </div>
            <div>
                <p className="text-xs font-black text-slate-900 uppercase tracking-tight leading-none">{name}</p>
                <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest mt-1.5">{role}</p>
            </div>
        </div>
    )
}