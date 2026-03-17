// app/dashboard/ndma/fact-sheets/state/page.tsx
"use client";
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
    FileText, Printer, DownloadCloud, Map,
    Users, Tent, Navigation, RadioTower, Flame,
    Building2, Activity, Search, Sparkles
} from "lucide-react";
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, 
    ResponsiveContainer, Legend
} from 'recharts';

export default function StateFactSheetPage() {
    const [selectedState, setSelectedState] = useState("Odisha");

    return (
        <div className="space-y-8 animate-in fade-in duration-1000 pb-20 font-sans selection:bg-blue-100">

            {/* PAGE HEADER */}
            <div className="flex flex-col xl:flex-row justify-between items-start xl:items-end gap-6 relative">
                <div className="space-y-2">
                    <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border-2 border-blue-200 shadow-sm">
                        <FileText size={14} /> Regional Fact Sheet
                    </div>
                    <h1 className="text-5xl font-black text-slate-800 tracking-tighter uppercase leading-none">State PwD Preparedness</h1>
                    <p className="text-slate-500 font-medium text-lg italic underline underline-offset-8 decoration-blue-200">
                        View-only snapshot of state-level disaster risks and readiness.
                    </p>
                </div>
                <div className="flex gap-4">
                    <Button variant="outline" className="h-14 px-8 rounded-full border-2 border-blue-200 text-blue-700 font-black uppercase tracking-widest text-[10px] bg-white shadow-xl hover:bg-blue-50 transition-all">
                        <DownloadCloud size={16} className="mr-2" /> Export PDF
                    </Button>
                    <Button className="h-14 px-8 rounded-full bg-slate-900 text-white font-black uppercase tracking-widest text-[10px] shadow-xl hover:bg-black transition-all gap-2 group border-none">
                        <Printer size={16} /> Print Fact Sheet
                    </Button>
                </div>
            </div>

            {/* STATE SELECTOR / FILTER */}
            <Card className="rounded-[32px] border-2 border-blue-50 shadow-md bg-white overflow-hidden max-w-6xl mx-auto">
                <div className="p-4 flex flex-col md:flex-row justify-between items-center gap-4 bg-blue-50/50">
                    <div className="flex items-center gap-4 w-full md:w-auto">
                        <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-blue-700">
                            <Map size={14} /> Select State / UT:
                        </div>
                        <select 
                            className="border-2 border-blue-100 bg-white rounded-2xl px-6 py-3 text-sm font-bold text-slate-800 focus:outline-none focus:border-blue-400 shadow-sm appearance-none cursor-pointer min-w-[250px]"
                            value={selectedState}
                            onChange={(e) => setSelectedState(e.target.value)}
                        >
                            <option value="Odisha">Odisha</option>
                            <option value="Gujarat">Gujarat</option>
                            <option value="Tamil Nadu">Tamil Nadu</option>
                            <option value="Assam">Assam</option>
                        </select>
                    </div>
                    <Badge variant="outline" className="border-2 border-amber-200 text-amber-700 bg-amber-50 font-black text-[9px] uppercase px-4 py-1.5 rounded-lg">
                        View-Only Mode
                    </Badge>
                </div>
            </Card>

            {/* MAIN FACT SHEET DOCUMENT CONTAINER */}
            <Card className="rounded-[48px] border-none bg-white shadow-2xl overflow-hidden relative max-w-6xl mx-auto ring-1 ring-slate-100">
                
                {/* FACT SHEET HEADER - VIBRANT GRADIENT */}
                <div className="p-12 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 text-white relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 border-b-4 border-blue-300">
                    <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] bg-fixed" />
                    <div className="absolute -right-20 -top-20 opacity-[0.05] pointer-events-none">
                        <Map size={400} />
                    </div>
                    
                    <div className="relative z-10 flex items-center gap-6">
                        <div className="h-20 w-20 rounded-3xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center shadow-2xl shrink-0">
                            <Building2 size={36} className="text-white drop-shadow-md" />
                        </div>
                        <div className="space-y-2">
                            <h2 className="text-3xl font-black uppercase tracking-tighter text-white drop-shadow-lg leading-none">
                                State Disaster–PwD Fact Sheet
                            </h2>
                            <p className="text-xs font-bold text-blue-100 uppercase tracking-[0.2em] drop-shadow-sm">
                                Data Sourced from: {selectedState} SDMA
                            </p>
                            <div className="flex items-center gap-3 pt-2">
                                <Badge className="bg-white/20 text-white border-none text-[8px] font-black uppercase tracking-widest px-3 py-1 shadow-sm backdrop-blur-md">
                                    Current Fiscal Year Status
                                </Badge>
                                <span className="text-[10px] font-black text-indigo-100 uppercase tracking-widest">
                                    Generated: {new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="p-10 space-y-10 relative bg-[url('https://www.transparenttextures.com/patterns/topography.png')] bg-fixed">
                    <div className="absolute inset-0 opacity-[0.03] pointer-events-none" />
                    
                    {/* SECTION 1: VULNERABILITY METRICS (2 Columns) */}
                    <div className="space-y-4 relative z-10">
                        <div className="flex items-center gap-3">
                            <Activity className="text-blue-600" size={20} />
                            <h3 className="text-sm font-black text-slate-800 uppercase tracking-[0.2em] border-b-2 border-slate-100 pb-2 flex-1">
                                Regional Vulnerability Overview
                            </h3>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <FactMetric 
                                title="Total PwDs in Risk Zones" 
                                value={selectedState === 'Odisha' ? '4.5L' : '3.2L'} 
                                icon={<Users />} 
                                color="from-rose-500 to-red-600"
                                desc={`Mapped across vulnerable districts in ${selectedState}`}
                            />
                            <FactMetric 
                                title="High-Risk Areas (Districts)" 
                                value={selectedState === 'Odisha' ? '12' : '08'} 
                                icon={<Flame />} 
                                color="from-orange-500 to-amber-600"
                                desc="Red-flagged for severe hazard exposure"
                                alert={selectedState === 'Odisha'}
                            />
                        </div>
                    </div>

                    {/* SECTION 2: READINESS INDICATORS (3 Columns) */}
                    <div className="space-y-4 relative z-10">
                        <div className="flex items-center gap-3">
                            <Map className="text-indigo-600" size={20} />
                            <h3 className="text-sm font-black text-slate-800 uppercase tracking-[0.2em] border-b-2 border-slate-100 pb-2 flex-1">
                                State Preparedness & Infrastructure
                            </h3>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <FactMetric 
                                title="Accessible Shelters" 
                                value={selectedState === 'Odisha' ? '1,240' : '840'} 
                                icon={<Tent />} 
                                color="from-emerald-500 to-teal-600"
                                desc="Fully compliant (Ramps & WASH)"
                            />
                            <FactMetric 
                                title="Transport Readiness" 
                                value={selectedState === 'Odisha' ? '88%' : '76%'} 
                                icon={<Navigation />} 
                                color="from-blue-500 to-indigo-600"
                                desc="Evacuation fleet accessibility"
                            />
                            <FactMetric 
                                title="Early Warning Coverage" 
                                value={selectedState === 'Odisha' ? '96%' : '82%'} 
                                icon={<RadioTower />} 
                                color="from-purple-500 to-fuchsia-600"
                                desc="PwD-specific alerts reaching target"
                            />
                        </div>
                    </div>

                    {/* SECTION 3: ANALYTICAL DISTRIBUTION */}
                    <div className="space-y-4 relative z-10">
                        <div className="flex items-center gap-3">
                            <Building2 className="text-teal-600" size={20} />
                            <h3 className="text-sm font-black text-slate-800 uppercase tracking-[0.2em] border-b-2 border-slate-100 pb-2 flex-1">
                                Shelter Accessibility Breakdown (Top Districts)
                            </h3>
                        </div>
                        
                        <div className="bg-slate-50 border border-slate-100 rounded-[32px] p-6 shadow-inner h-80">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={shelterBreakdownData[selectedState as keyof typeof shelterBreakdownData]}>
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                                    <XAxis dataKey="district" axisLine={false} tickLine={false} tick={{ fontSize: 10, fontWeight: 'black', fill: '#64748b' }} />
                                    <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#64748b' }} />
                                    <RechartsTooltip 
                                        cursor={{ fill: '#f1f5f9' }} 
                                        contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                                    />
                                    <Legend 
                                        align="right" 
                                        verticalAlign="top" 
                                        wrapperStyle={{ paddingBottom: '20px', fontSize: '10px', fontWeight: 'black', textTransform: 'uppercase' }} 
                                    />
                                    <Bar dataKey="accessible" name="Fully Accessible" stackId="a" fill="#10b981" radius={[0, 0, 4, 4]} barSize={40} />
                                    <Bar dataKey="partial" name="Partial Access" stackId="a" fill="#f59e0b" barSize={40} />
                                    <Bar dataKey="nonAccessible" name="Non-Accessible" stackId="a" fill="#ef4444" radius={[4, 4, 0, 0]} barSize={40} />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                </div>

                {/* FACT SHEET FOOTER */}
                <div className="bg-slate-50 border-t-2 border-slate-100 p-6 flex justify-between items-center z-10 relative">
                    <div className="flex items-center gap-3">
                        <Sparkles size={16} className="text-blue-500" />
                        <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest">
                            NDMA View-Only Mode • Synced from SDMA Database
                        </span>
                    </div>
                    <span className="font-mono text-[10px] font-black text-slate-400 bg-white px-3 py-1.5 rounded border border-slate-200 shadow-sm">
                        DOC-REF: NDMA-STATE-FS-{selectedState.substring(0,2).toUpperCase()}-{new Date().getFullYear()}
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

/* MOCK DATA */
const shelterBreakdownData = {
    "Odisha": [
        { district: 'Puri', accessible: 120, partial: 40, nonAccessible: 10 },
        { district: 'Ganjam', accessible: 90, partial: 50, nonAccessible: 15 },
        { district: 'Khurda', accessible: 110, partial: 30, nonAccessible: 5 },
        { district: 'Balasore', accessible: 85, partial: 60, nonAccessible: 20 },
    ],
    "Gujarat": [
        { district: 'Kutch', accessible: 80, partial: 50, nonAccessible: 20 },
        { district: 'Surat', accessible: 95, partial: 30, nonAccessible: 10 },
        { district: 'Rajkot', accessible: 70, partial: 40, nonAccessible: 15 },
    ],
    "Tamil Nadu": [
        { district: 'Chennai', accessible: 150, partial: 40, nonAccessible: 10 },
        { district: 'Cuddalore', accessible: 80, partial: 60, nonAccessible: 25 },
        { district: 'Nagapattinam', accessible: 90, partial: 50, nonAccessible: 15 },
    ],
    "Assam": [
        { district: 'Majuli', accessible: 40, partial: 80, nonAccessible: 30 },
        { district: 'Dhubri', accessible: 50, partial: 70, nonAccessible: 40 },
        { district: 'Barpeta', accessible: 35, partial: 60, nonAccessible: 25 },
    ]
};