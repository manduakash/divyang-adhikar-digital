// app/dashboard/ddma/mapping/tagging/page.tsx
"use client";
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Search, ShieldAlert, MapPin, Navigation,
    HeartHandshake, Home, CheckCircle2, AlertTriangle,
    User, Fingerprint, Map as MapIcon, ArrowLeft,
    Info, Loader2, Sparkles, Radio as RadioIcon,
    Truck,
    ArrowRight
} from "lucide-react";
import {
    Select, SelectContent, SelectItem, SelectTrigger, SelectValue
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";

export default function DisasterMappingTagging() {
    const [isSearching, setIsSearching] = useState(false);
    const [recordFound, setRecordFound] = useState(true); // Mocking state

    return (
        <div className="max-w-6xl mx-auto pb-20 animate-in fade-in slide-in-from-bottom-4 duration-700">

            {/* 1. TOP HEADER & SEARCH */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10">
                <div className="space-y-1">
                    <div className="flex items-center gap-2 text-orange-600 font-black uppercase text-[10px] tracking-[0.2em]">
                        <ArrowLeft size={14} /> Disaster Hub / Mapping
                    </div>
                    <h1 className="text-4xl font-black text-slate-900 tracking-tighter uppercase">Disaster Risk Tagging</h1>
                    <p className="text-slate-500 font-medium italic">Tag PwD Profiles with evacuation and assistance metadata.</p>
                </div>

                <div className="w-full md:w-96 group">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1 mb-2 block">Lookup PwD ID</label>
                    <div className="relative">
                        <Fingerprint className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-300 group-focus-within:text-orange-500 transition-colors" />
                        <Input
                            placeholder="Enter PwD ID (e.g. UP/LKO/1234)"
                            className="h-14 pl-12 pr-24 rounded-2xl bg-white border-slate-200 font-bold shadow-sm focus:ring-orange-500"
                        />
                        <Button className="absolute right-2 top-2 h-10 bg-slate-900 text-white rounded-xl font-black uppercase text-[9px] tracking-widest">
                            Fetch
                        </Button>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                {/* LEFT COLUMN: AUTO-FETCHED MASTER DATA (READ-ONLY - Section 2) */}
                <div className="lg:col-span-1 space-y-6">
                    <Card className="rounded-[40px] border-2 bg-slate-900 text-white shadow-2xl overflow-hidden relative">
                        {/* Visual Topographical Pattern */}
                        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />

                        <CardHeader className="p-8 border-b border-white/5 relative z-10">
                            <div className="flex justify-between items-center">
                                <Badge className="bg-orange-600 text-white font-black text-[9px] uppercase tracking-widest border-2">Record</Badge>
                                <div className="flex items-center gap-1.5 text-green-400">
                                    <CheckCircle2 size={12} />
                                    <span className="text-[9px] font-black uppercase">Verified ID</span>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent className="p-8 space-y-8 relative z-10">
                            <div className="flex items-center gap-5">
                                <div className="h-20 w-20 rounded-3xl bg-white/10 flex items-center justify-center text-white border border-white/10">
                                    <User size={40} />
                                </div>
                                <div>
                                    <p className="text-2xl font-black tracking-tight">Amit Kumar</p>
                                    <p className="text-xs font-bold text-orange-400 uppercase tracking-widest">Locomotor Disability (65%)</p>
                                </div>
                            </div>

                            <div className="space-y-6 pt-4 border-t border-white/5">
                                <MasterField label="PwD ID Number" value="UP-LKO-2024-0912" />
                                <MasterField label="Date of Birth" value="15 May 1992" />
                                <MasterField label="Mobile Number" value="+91 98765 43210" />
                                <MasterField label="Residential Address" value="B-42, Gomti Nagar, Lucknow, UP" />
                            </div>

                            <div className="p-4 bg-white/5 rounded-2xl border border-white/10 flex items-center gap-3">
                                <Info className="text-blue-400" size={16} />
                                <p className="text-[9px] font-bold text-slate-400 leading-normal uppercase">
                                    Master data is read-only. Updates must be made via the National PwD Portal.
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* RIGHT COLUMN: DISASTER TAGGING FORM (Section 5.1) */}
                <div className="lg:col-span-2 space-y-8">
                    <Card className="rounded-[40px] border-slate-200 shadow-sm overflow-hidden bg-white">
                        <CardHeader className="p-8 border-b border-slate-50 bg-slate-50/50 flex flex-row justify-between items-center">
                            <CardTitle className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 flex items-center gap-2">
                                <ShieldAlert size={16} className="text-orange-600" /> Risk Metadata
                            </CardTitle>
                            <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                        </CardHeader>
                        <CardContent className="p-10 space-y-10">

                            {/* BLOCK / ULB & RISK CATEGORY */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                <div className="space-y-4">
                                    <label className="text-[11px] font-black uppercase text-slate-500 ml-1 tracking-widest">1. Block / ULB Mapping</label>
                                    <div className="relative">
                                        <Navigation className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-300 pointer-events-none" />
                                        <Select defaultValue="urban-lko">
                                            <SelectTrigger className="h-14 pl-12 rounded-2xl bg-slate-50 border-2 font-bold text-slate-800">
                                                <SelectValue placeholder="Select Local Body" />
                                            </SelectTrigger>
                                            <SelectContent className="rounded-2xl">
                                                <SelectItem value="urban-lko" className="font-bold py-3">Lucknow Urban (Zone 1)</SelectItem>
                                                <SelectItem value="rural-chinhat" className="font-bold py-3">Chinhat Block</SelectItem>
                                                <SelectItem value="rural-malihabad" className="font-bold py-3">Malihabad Block</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <label className="text-[11px] font-black uppercase text-slate-500 ml-1 tracking-widest">2. Disaster Risk Category</label>
                                    <div className="grid grid-cols-3 gap-2">
                                        <RiskBtn label="LOW" color="bg-green-100 text-green-700 border-green-200" />
                                        <RiskBtn label="MED" color="bg-orange-100 text-orange-700 border-orange-200" />
                                        <RiskBtn label="HIGH" color="bg-red-100 text-red-700 border-red-500" active />
                                    </div>
                                </div>
                            </div>

                            {/* SPECIAL ASSISTANCE REQUIRED (Multi-select pills) */}
                            <div className="space-y-6">
                                <div className="flex justify-between items-center px-1">
                                    <label className="text-[11px] font-black uppercase text-slate-500 tracking-widest">3. Special Assistance Required</label>
                                    <span className="text-[10px] font-bold text-slate-400 uppercase">Multiple Selection Allowed</span>
                                </div>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                    <AssistanceTag icon={<Truck size={14} />} label="Mobility" active />
                                    <AssistanceTag icon={<ShieldAlert size={14} />} label="Medical" active />
                                    <AssistanceTag icon={<Navigation size={14} />} label="Sensory" />
                                    <AssistanceTag icon={<HeartHandshake size={14} />} label="Caregiver" />
                                </div>
                            </div>

                            {/* SHELTER MAPPING TOGGLE */}
                            <div className="p-8 bg-orange-50/50 rounded-[40px] border border-orange-100 flex items-center justify-between">
                                <div className="flex items-center gap-5">
                                    <div className="h-12 w-12 bg-white rounded-2xl flex items-center justify-center text-orange-600 shadow-sm border border-orange-100">
                                        <Home size={24} />
                                    </div>
                                    <div className="space-y-1">
                                        <p className="text-md font-black text-orange-950 uppercase tracking-tight">4. Shelter Mapped?</p>
                                        <p className="text-xs text-orange-700 font-medium">Link this citizen to the nearest accessible emergency shelter.</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="text-[10px] font-black uppercase text-slate-400">NO</span>
                                    <Switch className="data-[state=checked]:bg-orange-600" />
                                    <span className="text-[10px] font-black uppercase text-orange-600 font-bold">YES</span>
                                </div>
                            </div>

                            {/* FINAL SUBMIT */}
                            <div className="flex justify-end pt-6 border-t border-slate-50">
                                <Button className="h-16 px-12 rounded-[24px] bg-slate-900 text-white font-black uppercase tracking-[0.2em] text-xs shadow-2xl hover:bg-black transition-all hover:scale-105 gap-3">
                                    Tag Disaster Risk <ArrowRight size={18} className="text-orange-400" />
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}

/* UI HELPER COMPONENTS */

function MasterField({ label, value }: { label: string, value: string }) {
    return (
        <div className="space-y-1">
            <p className="text-[8px] font-black text-slate-500 uppercase tracking-widest">{label}</p>
            <p className="text-sm font-bold text-white tracking-tight">{value}</p>
        </div>
    )
}

function RiskBtn({ label, color, active }: { label: string, color: string, active?: boolean }) {
    return (
        <button className={`py-3 rounded-xl text-[10px] font-black uppercase tracking-widest border transition-all ${active ? `${color} ring-2 ring-offset-2 ring-slate-900` : 'bg-slate-50 text-slate-400 border-transparent hover:bg-white hover:border-slate-200'}`}>
            {label}
        </button>
    )
}

function AssistanceTag({ icon, label, active }: any) {
    return (
        <button className={`flex items-center justify-center gap-2 p-3 rounded-2xl border font-black text-[10px] uppercase tracking-widest transition-all ${active ? 'bg-indigo-600 text-white border-indigo-600 shadow-lg shadow-indigo-200' : 'bg-white text-slate-400 border-slate-100 hover:border-indigo-200 hover:text-indigo-600'}`}>
            {icon} {label}
        </button>
    )
}