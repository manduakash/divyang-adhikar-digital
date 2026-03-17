// app/dashboard/ndma/fact-sheets/shelter/page.tsx
"use client";
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
    FileText, Printer, DownloadCloud, Tent,
    MapPin, Thermometer, Wind, Waves, Accessibility,
    Building2, Activity, Search, Sparkles, CheckCircle2, AlertTriangle,
    RadioTower,
    Navigation,
    Users
} from "lucide-react";
import {
    PieChart, Pie, Cell, ResponsiveContainer, Tooltip as RechartsTooltip, Legend
} from 'recharts';

export default function ShelterFactSheetPage() {
    const [selectedState, setSelectedState] = useState("Odisha");
    const [selectedDistrict, setSelectedDistrict] = useState("Puri");
    const [selectedShelter, setSelectedShelter] = useState("SHELTER-01");

    return (
        <div className="space-y-8 animate-in fade-in duration-1000 pb-20 font-sans selection:bg-emerald-100">

            {/* PAGE HEADER */}
            <div className="flex flex-col xl:flex-row justify-between items-start xl:items-end gap-6 relative">
                <div className="space-y-2">
                    <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border-2 border-emerald-200 shadow-sm">
                        <FileText size={14} /> Micro-Level Fact Sheet
                    </div>
                    <h1 className="text-5xl font-black text-slate-800 tracking-tighter uppercase leading-none">Shelter Capacity & Access</h1>
                    <p className="text-slate-500 font-medium text-lg italic underline underline-offset-8 decoration-emerald-200">
                        View-only snapshot of individual relief camp infrastructure and PwD readiness.
                    </p>
                </div>
                <div className="flex gap-4">
                    <Button variant="outline" className="h-14 px-8 rounded-full border-2 border-emerald-200 text-emerald-700 font-black uppercase tracking-widest text-[10px] bg-white shadow-xl hover:bg-emerald-50 transition-all">
                        <DownloadCloud size={16} className="mr-2" /> Export PDF
                    </Button>
                    <Button className="h-14 px-8 rounded-full bg-slate-900 text-white font-black uppercase tracking-widest text-[10px] shadow-xl hover:bg-black transition-all gap-2 group border-none">
                        <Printer size={16} /> Print Fact Sheet
                    </Button>
                </div>
            </div>

            {/* SHELTER SELECTOR / FILTER */}
            <Card className="rounded-[32px] border-2 border-emerald-50 shadow-md bg-white overflow-hidden max-w-6xl mx-auto">
                <div className="p-4 flex flex-col md:flex-row justify-between items-center gap-4 bg-emerald-50/50">
                    <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
                        
                        <div className="flex items-center gap-2 w-full md:w-auto">
                            <span className="text-[10px] font-black uppercase tracking-widest text-emerald-700 whitespace-nowrap">State:</span>
                            <select 
                                className="border-2 border-emerald-100 bg-white rounded-2xl px-4 py-3 text-xs font-bold text-slate-800 focus:outline-none focus:border-emerald-400 shadow-sm appearance-none cursor-pointer w-full md:w-40"
                                value={selectedState}
                                onChange={(e) => setSelectedState(e.target.value)}
                            >
                                <option value="Odisha">Odisha</option>
                                <option value="Gujarat">Gujarat</option>
                            </select>
                        </div>

                        <div className="flex items-center gap-2 w-full md:w-auto">
                            <span className="text-[10px] font-black uppercase tracking-widest text-emerald-700 whitespace-nowrap">District:</span>
                            <select 
                                className="border-2 border-emerald-100 bg-white rounded-2xl px-4 py-3 text-xs font-bold text-slate-800 focus:outline-none focus:border-emerald-400 shadow-sm appearance-none cursor-pointer w-full md:w-40"
                                value={selectedDistrict}
                                onChange={(e) => setSelectedDistrict(e.target.value)}
                            >
                                <option value="Puri">Puri</option>
                                <option value="Ganjam">Ganjam</option>
                            </select>
                        </div>

                        <div className="flex items-center gap-2 w-full md:w-auto">
                            <span className="text-[10px] font-black uppercase tracking-widest text-emerald-700 whitespace-nowrap">Shelter:</span>
                            <select 
                                className="border-2 border-emerald-100 bg-white rounded-2xl px-4 py-3 text-xs font-bold text-slate-800 focus:outline-none focus:border-emerald-400 shadow-sm appearance-none cursor-pointer w-full md:w-48"
                                value={selectedShelter}
                                onChange={(e) => setSelectedShelter(e.target.value)}
                            >
                                <option value="SHELTER-01">Kakatpur Cyclone Hub</option>
                                <option value="SHELTER-02">Astaranga Relief Camp</option>
                            </select>
                        </div>

                    </div>
                    <Badge variant="outline" className="border-2 border-amber-200 text-amber-700 bg-amber-50 font-black text-[9px] uppercase px-4 py-1.5 rounded-lg shrink-0 mt-4 md:mt-0">
                        View-Only Mode
                    </Badge>
                </div>
            </Card>

            {/* MAIN FACT SHEET DOCUMENT CONTAINER */}
            <Card className="rounded-[48px] border-none bg-white shadow-2xl overflow-hidden relative max-w-6xl mx-auto ring-1 ring-slate-100">
                
                {/* FACT SHEET HEADER - VIBRANT GRADIENT */}
                <div className="p-12 bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-700 text-white relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 border-b-4 border-emerald-300">
                    <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] bg-fixed" />
                    <div className="absolute -right-20 -top-20 opacity-[0.05] pointer-events-none">
                        <Tent size={400} />
                    </div>
                    
                    <div className="relative z-10 flex items-center gap-6">
                        <div className="h-20 w-20 rounded-3xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center shadow-2xl shrink-0">
                            <Building2 size={36} className="text-white drop-shadow-md" />
                        </div>
                        <div className="space-y-2">
                            <h2 className="text-3xl font-black uppercase tracking-tighter text-white drop-shadow-lg leading-none">
                                Shelter Capacity Fact Sheet
                            </h2>
                            <p className="text-xs font-bold text-emerald-100 uppercase tracking-[0.2em] drop-shadow-sm">
                                Facility: Kakatpur Cyclone Hub ({selectedDistrict}, {selectedState})
                            </p>
                            <div className="flex items-center gap-3 pt-2">
                                <Badge className="bg-white/20 text-white border-none text-[8px] font-black uppercase tracking-widest px-3 py-1 shadow-sm backdrop-blur-md">
                                    Status: ACTIVE & COMPLIANT
                                </Badge>
                                <span className="text-[10px] font-black text-cyan-100 uppercase tracking-widest">
                                    Generated: {new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="p-10 space-y-10 relative bg-[url('https://www.transparenttextures.com/patterns/topography.png')] bg-fixed">
                    <div className="absolute inset-0 opacity-[0.03] pointer-events-none" />
                    
                    {/* SECTION 1: CAPACITY & EXPOSURE (2 Columns) */}
                    <div className="space-y-4 relative z-10">
                        <div className="flex items-center gap-3">
                            <Activity className="text-emerald-600" size={20} />
                            <h3 className="text-sm font-black text-slate-800 uppercase tracking-[0.2em] border-b-2 border-slate-100 pb-2 flex-1">
                                Coverage & Exposure
                            </h3>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <FactMetric 
                                title="Total PwDs in Catchment Zone" 
                                value="450" 
                                icon={<Users />} 
                                color="from-rose-500 to-red-600"
                                desc={`Mapped within 5km radius of this shelter`}
                            />
                            <FactMetric 
                                title="Primary Hazard Threat" 
                                value="Cyclone" 
                                icon={<Wind />} 
                                color="from-cyan-500 to-blue-600"
                                desc="High-wind coastal vulnerability zone"
                            />
                        </div>
                    </div>

                    {/* SECTION 2: READINESS INDICATORS (3 Columns) */}
                    <div className="space-y-4 relative z-10">
                        <div className="flex items-center gap-3">
                            <Accessibility className="text-teal-600" size={20} />
                            <h3 className="text-sm font-black text-slate-800 uppercase tracking-[0.2em] border-b-2 border-slate-100 pb-2 flex-1">
                                Shelter Infrastructure & Logistics
                            </h3>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <FactMetric 
                                title="Accessible Bed Capacity" 
                                value="50" 
                                icon={<Tent />} 
                                color="from-emerald-500 to-teal-600"
                                desc="Ground floor, clear pathways"
                            />
                            <FactMetric 
                                title="Dedicated Transport Nodes" 
                                value="04" 
                                icon={<Navigation />} 
                                color="from-blue-500 to-indigo-600"
                                desc="Ambulance & wheelchair vans assigned"
                            />
                            <FactMetric 
                                title="Early Warning Node" 
                                value="ACTIVE" 
                                icon={<RadioTower />} 
                                color="from-purple-500 to-fuchsia-600"
                                desc="PA system & Visual Alarms verified"
                            />
                        </div>
                    </div>

                    {/* SECTION 3: COMPLIANCE CHECKLIST */}
                    <div className="space-y-4 relative z-10">
                        <div className="flex items-center gap-3">
                            <CheckCircle2 className="text-indigo-600" size={20} />
                            <h3 className="text-sm font-black text-slate-800 uppercase tracking-[0.2em] border-b-2 border-slate-100 pb-2 flex-1">
                                Mandatory Accessibility Audit Checklist
                            </h3>
                        </div>
                        
                        <div className="bg-slate-50 border border-slate-100 rounded-[32px] p-6 shadow-inner grid grid-cols-1 md:grid-cols-2 gap-4">
                            <ChecklistItem label="Ramps at Main Entrance (1:12 slope)" status="PASS" />
                            <ChecklistItem label="Accessible WASH Facilities (Grab bars)" status="PASS" />
                            <ChecklistItem label="Tactile Guiding Paths to Facilities" status="FAIL" />
                            <ChecklistItem label="Visual / Flashing Emergency Alarms" status="PASS" />
                            <ChecklistItem label="Dedicated Medical / First Aid Room" status="PASS" />
                            <ChecklistItem label="Power Backup for Assistive Devices" status="FAIL" />
                        </div>
                        <div className="flex items-start gap-3 p-4 bg-orange-50 border border-orange-200 rounded-2xl">
                            <AlertTriangle size={18} className="text-orange-600 mt-0.5 shrink-0" />
                            <p className="text-[10px] font-black uppercase tracking-widest text-orange-800 leading-relaxed">
                                Action Required: Tactile paths and dedicated power backup need immediate resolution before monsoon onset. Alert sent to DDMA.
                            </p>
                        </div>
                    </div>

                </div>

                {/* FACT SHEET FOOTER */}
                <div className="bg-slate-50 border-t-2 border-slate-100 p-6 flex justify-between items-center z-10 relative">
                    <div className="flex items-center gap-3">
                        <Sparkles size={16} className="text-emerald-500" />
                        <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest">
                            NDMA View-Only Mode • Synced from DDMA Infrastructure Audit
                        </span>
                    </div>
                    <span className="font-mono text-[10px] font-black text-slate-400 bg-white px-3 py-1.5 rounded border border-slate-200 shadow-sm">
                        DOC-REF: NDMA-SHL-{selectedShelter}-{new Date().getFullYear()}
                    </span>
                </div>

            </Card>

        </div>
    );
}

/* UI SUB-COMPONENTS */

function FactMetric({ title, value, icon, color, desc, alert }: any) {
    return (
        <div className={`relative overflow-hidden rounded-3xl p-6 text-white shadow-lg bg-gradient-to-br ${color} group hover:-translate-y-1 transition-transform duration-300`}>
            <div className="absolute inset-0 opacity-[0.1] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
            <div className="relative z-10 flex flex-col justify-between h-full space-y-4">
                <div className="flex justify-between items-start">
                    <div className="h-12 w-12 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform">
                        {React.cloneElement(icon, { size: 24, className: "text-white drop-shadow-md" })}
                    </div>
                    {alert && <div className="h-3 w-3 rounded-full bg-white animate-pulse shadow-[0_0_15px_white]" />}
                </div>
                <div>
                    <p className="text-4xl font-black tracking-tighter drop-shadow-sm leading-none">{value}</p>
                    <p className="text-[10px] font-black uppercase tracking-widest opacity-90 mt-2 leading-tight">{title}</p>
                    {desc && <p className="text-[9px] font-bold text-white/70 uppercase tracking-widest mt-1">{desc}</p>}
                </div>
            </div>
        </div>
    );
}

function ChecklistItem({ label, status }: any) {
    const isPass = status === 'PASS';
    return (
        <div className="flex items-center justify-between p-4 bg-white border border-slate-100 rounded-2xl shadow-sm">
            <span className="text-[10px] font-black text-slate-700 uppercase tracking-widest">{label}</span>
            <Badge className={`border-none text-[9px] font-black uppercase tracking-widest px-3 py-1 ${isPass ? 'bg-emerald-100 text-emerald-700' : 'bg-red-100 text-red-700'}`}>
                {status}
            </Badge>
        </div>
    );
}