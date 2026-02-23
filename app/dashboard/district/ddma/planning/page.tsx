// components/dashboard/ddma/BlockPlanningEntry.tsx
"use client";
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Navigation, Users, Home, ShieldCheck,
    UserCog, ClipboardCheck, ArrowRight, Info,
    Database, MapPin, Map as MapIcon, Sparkles,
    Zap, AlertCircle
} from "lucide-react";
import {
    Select, SelectContent, SelectItem, SelectTrigger, SelectValue
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";

export default function BlockPlanningEntry() {
    const [planActive, setPlanActive] = useState(true);

    return (
        <div className="max-w-5xl mx-auto animate-in fade-in slide-in-from-bottom-6 duration-700">

            {/* SECTION IDENTIFIER */}
            <div className="mb-8 flex items-center gap-4">
                <div className="h-12 w-12 bg-orange-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-orange-200">
                    <Navigation size={24} />
                </div>
                <div>
                    <h2 className="text-[10px] font-black text-orange-600 uppercase tracking-[0.3em]">Administrative Module</h2>
                    <h1 className="text-3xl font-black text-slate-900 tracking-tight uppercase">Tactical Block Planning</h1>
                </div>
            </div>

            <Card className="rounded-[48px] border-slate-200 shadow-2xl overflow-hidden bg-white relative">
                {/* Subtle Topographical Pattern Overlay */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/topography.png')] z-0" />

                <CardHeader className="p-10 border-b border-slate-50 bg-slate-50/50 relative z-10">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                        <div className="space-y-4 w-full md:w-1/2">
                            <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1">1. Block / ULB Jurisdiction</label>
                            <div className="relative group">
                                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-300 group-focus-within:text-orange-500 transition-colors" />
                                <Select defaultValue="lko-urban">
                                    <SelectTrigger className="h-16 w-full p-7 pl-12 rounded-[24px] bg-white border-2 shadow-sm font-bold text-slate-800 text-lg">
                                        <SelectValue placeholder="Select Area" />
                                    </SelectTrigger>
                                    <SelectContent className="rounded-2xl border-slate-100 shadow-2xl">
                                        <SelectItem value="lko-urban" className="font-bold py-4">Lucknow Urban Hub</SelectItem>
                                        <SelectItem value="chinhat" className="font-bold py-4">Chinhat Industrial Block</SelectItem>
                                        <SelectItem value="malihabad" className="font-bold py-4">Malihabad Rural Sector</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>

                        {/* AUTO-FETCHED PwD COUNT (Data Principle 2) */}
                        <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-6 rounded-[32px] text-white shadow-xl min-w-[240px] relative overflow-hidden group">
                            <Database className="absolute -right-2 -bottom-2 h-20 w-20 opacity-10 group-hover:scale-110 transition-transform duration-700" />
                            <div className="relative z-10">
                                <div className="flex items-center gap-2 mb-1">
                                    <Users size={14} className="text-blue-200" />
                                    <span className="text-[9px] font-black tracking-widest text-blue-100">Total PwDs</span>
                                </div>
                                <p className="text-4xl font-black tracking-tighter">1,842</p>
                                <Badge className="bg-white/10 text-white border-2 text-[8px] font-black uppercase mt-2 px-2">Verified Sync: LIVE</Badge>
                            </div>
                        </div>
                    </div>
                </CardHeader>

                <CardContent className="p-10 space-y-12 relative z-10">

                    {/* TACTICAL INPUTS GRID */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div className="space-y-1">
                            <div className="flex justify-between items-center px-1">
                                <label className="text-[11px] font-black text-slate-500 uppercase tracking-widest">2. PwDs Covered in Plan</label>
                                <Badge className="bg-orange-50 text-orange-700 border-2 font-black text-[9px]">SLA MANDATORY</Badge>
                            </div>
                            <div className="relative group">
                                <ShieldCheck className="absolute left-5 top-1/2 -translate-y-1/2 h-6 w-6 text-slate-300 group-focus-within:text-orange-500 transition-colors" />
                                <Input
                                    type="number"
                                    placeholder="Enter coverage count"
                                    className="h-16 pl-14 rounded-2xl bg-slate-50 border-2 font-black text-xl text-slate-900 focus:ring-2 focus:ring-orange-500 shadow-inner"
                                />
                            </div>
                            <p className="text-[10px] text-slate-400 font-medium italic">*Must represent citizens with active disaster tagging.</p>
                        </div>

                        <div className="space-y-4">
                            <label className="text-[11px] font-black text-slate-500 uppercase tracking-widest ml-1">3. Accessible Shelters Identified</label>
                            <div className="relative group">
                                <Home className="absolute left-5 top-1/2 -translate-y-1/2 h-6 w-6 text-slate-300 group-focus-within:text-orange-500 transition-colors" />
                                <Input
                                    type="number"
                                    placeholder="Shelter count"
                                    className="h-16 pl-14 rounded-2xl bg-slate-50 border-2 font-black text-xl text-slate-900 focus:ring-2 focus:ring-orange-500 shadow-inner"
                                />
                            </div>
                        </div>
                    </div>

                    {/* EVACUATION PLAN TOGGLE - High Visibility */}
                    <div className={`p-8 rounded-[40px] border-2 transition-all duration-500 flex flex-col md:flex-row items-center justify-between gap-6 ${planActive ? 'bg-emerald-50 border-emerald-100 shadow-lg' : 'bg-slate-50 border-slate-100'
                        }`}>
                        <div className="flex items-center gap-6">
                            <div className={`h-16 w-16 rounded-3xl flex items-center justify-center transition-all ${planActive ? 'bg-emerald-600 text-white shadow-emerald-200' : 'bg-slate-200 text-slate-400'}`}>
                                <MapIcon size={32} />
                            </div>
                            <div>
                                <p className={`text-lg font-black uppercase tracking-tight ${planActive ? 'text-emerald-900' : 'text-slate-400'}`}>4. Evacuation Plan Available?</p>
                                <p className={`text-xs font-medium ${planActive ? 'text-emerald-600' : 'text-slate-400'}`}>Finalized routes, assigned volunteers, and medical teams.</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 bg-white/50 p-4 rounded-3xl border border-white/50">
                            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Plan Pending</span>
                            <Switch
                                checked={planActive}
                                onCheckedChange={setPlanActive}
                                className="data-[state=checked]:bg-emerald-600 scale-125"
                            />
                            <span className="text-[10px] font-black text-emerald-600 uppercase tracking-widest">Plan Finalized</span>
                        </div>
                    </div>

                    {/* RESPONSIBLE OFFICER DETAIL */}
                    <div className="space-y-4">
                        <label className="text-[11px] font-black text-slate-500 uppercase tracking-widest ml-1">5. Responsible Officer</label>
                        <div className="relative group">
                            <UserCog className="absolute left-5 top-1/2 -translate-y-1/2 h-6 w-6 text-slate-300 group-focus-within:text-orange-500 transition-colors" />
                            <Input
                                placeholder="Full Name and Designation (e.g. S.K. Mehta, SDM)"
                                className="h-16 pl-14 rounded-2xl bg-slate-50 border-2 font-bold text-slate-800 placeholder:text-slate-300"
                            />
                            <div className="absolute right-4 top-1/2 -translate-y-1/2">
                                <button className="flex items-center gap-1.5 text-blue-600 font-bold text-[10px] uppercase tracking-wider bg-blue-50 px-3 py-1.5 rounded-full border border-blue-100 hover:bg-blue-100 transition-colors">
                                    <Sparkles size={12} /> AI Assign
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* ACTION FOOTER */}
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-10 border-t border-slate-50">
                        <div className="flex items-center gap-4 text-slate-400">
                            <AlertCircle size={20} className="text-orange-500 animate-pulse" />
                            <p className="text-[10px] font-bold uppercase tracking-widest leading-relaxed max-w-xs">
                                Updating this record will re-calculate the <b>Block Preparedness Score</b> instantly.
                            </p>
                        </div>
                        <div className="flex gap-4 w-full md:w-auto">
                            <Button variant="outline" className="h-10 px-10 rounded-2xl font-black uppercase text-[10px] tracking-widest text-slate-500">Discard Changes</Button>
                            <Button className="h-10 px-12 rounded-[24px] bg-slate-900 text-white font-black uppercase tracking-[0.2em] text-[11px] shadow-2xl shadow-slate-900/20 flex gap-2 hover:bg-black transition-all">
                                Commit Plan <Zap size={18} className="text-orange-400 fill-orange-400" />
                            </Button>
                        </div>
                    </div>

                </CardContent>
            </Card>
        </div>
    );
}