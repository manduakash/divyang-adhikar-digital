// app/dashboard/ndma/fact-sheets/district/page.tsx
"use client";
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
    FileText, Printer, DownloadCloud, MapPin,
    Users, Tent, Navigation, RadioTower, Flame,
    Building2, Activity, Search, Sparkles, AlertTriangle
} from "lucide-react";
import {
    AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, 
    ResponsiveContainer, Legend
} from 'recharts';

export default function DistrictFactSheetPage() {
    const [selectedState, setSelectedState] = useState("Odisha");
    const [selectedDistrict, setSelectedDistrict] = useState("Puri");

    return (
        <div className="space-y-8 animate-in fade-in duration-1000 pb-20 font-sans selection:bg-purple-100">

            {/* PAGE HEADER */}
            <div className="flex flex-col xl:flex-row justify-between items-start xl:items-end gap-6 relative">
                <div className="space-y-2">
                    <div className="inline-flex items-center gap-2 bg-purple-50 text-purple-700 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border-2 border-purple-200 shadow-sm">
                        <FileText size={14} /> Local Fact Sheet
                    </div>
                    <h1 className="text-5xl font-black text-slate-800 tracking-tighter uppercase leading-none">District PwD Preparedness</h1>
                    <p className="text-slate-500 font-medium text-lg italic underline underline-offset-8 decoration-purple-200">
                        View-only snapshot of district-level disaster risks and ground readiness.
                    </p>
                </div>
                <div className="flex gap-4">
                    <Button variant="outline" className="h-14 px-8 rounded-full border-2 border-purple-200 text-purple-700 font-black uppercase tracking-widest text-[10px] bg-white shadow-xl hover:bg-purple-50 transition-all">
                        <DownloadCloud size={16} className="mr-2" /> Export PDF
                    </Button>
                    <Button className="h-14 px-8 rounded-full bg-slate-900 text-white font-black uppercase tracking-widest text-[10px] shadow-xl hover:bg-black transition-all gap-2 group border-none">
                        <Printer size={16} /> Print Fact Sheet
                    </Button>
                </div>
            </div>

            {/* DISTRICT SELECTOR / FILTER */}
            <Card className="rounded-[32px] border-2 border-purple-50 shadow-md bg-white overflow-hidden max-w-6xl mx-auto">
                <div className="p-4 flex flex-col md:flex-row justify-between items-center gap-4 bg-purple-50/50">
                    <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
                        
                        <div className="flex items-center gap-2 w-full md:w-auto">
                            <span className="text-[10px] font-black uppercase tracking-widest text-purple-700 whitespace-nowrap">State:</span>
                            <select 
                                className="border-2 border-purple-100 bg-white rounded-2xl px-6 py-3 text-sm font-bold text-slate-800 focus:outline-none focus:border-purple-400 shadow-sm appearance-none cursor-pointer w-full md:w-48"
                                value={selectedState}
                                onChange={(e) => setSelectedState(e.target.value)}
                            >
                                <option value="Odisha">Odisha</option>
                                <option value="Gujarat">Gujarat</option>
                            </select>
                        </div>

                        <div className="flex items-center gap-2 w-full md:w-auto">
                            <span className="text-[10px] font-black uppercase tracking-widest text-purple-700 whitespace-nowrap">District:</span>
                            <select 
                                className="border-2 border-purple-100 bg-white rounded-2xl px-6 py-3 text-sm font-bold text-slate-800 focus:outline-none focus:border-purple-400 shadow-sm appearance-none cursor-pointer w-full md:w-48"
                                value={selectedDistrict}
                                onChange={(e) => setSelectedDistrict(e.target.value)}
                            >
                                {selectedState === 'Odisha' ? (
                                    <>
                                        <option value="Puri">Puri</option>
                                        <option value="Ganjam">Ganjam</option>
                                        <option value="Khurda">Khurda</option>
                                    </>
                                ) : (
                                    <>
                                        <option value="Kutch">Kutch</option>
                                        <option value="Surat">Surat</option>
                                    </>
                                )}
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
                <div className="p-12 bg-gradient-to-br from-purple-600 via-fuchsia-600 to-pink-700 text-white relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 border-b-4 border-purple-300">
                    <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] bg-fixed" />
                    <div className="absolute -right-20 -top-20 opacity-[0.05] pointer-events-none">
                        <MapPin size={400} />
                    </div>
                    
                    <div className="relative z-10 flex items-center gap-6">
                        <div className="h-20 w-20 rounded-3xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center shadow-2xl shrink-0">
                            <Building2 size={36} className="text-white drop-shadow-md" />
                        </div>
                        <div className="space-y-2">
                            <h2 className="text-3xl font-black uppercase tracking-tighter text-white drop-shadow-lg leading-none">
                                District Disaster–PwD Fact Sheet
                            </h2>
                            <p className="text-xs font-bold text-fuchsia-100 uppercase tracking-[0.2em] drop-shadow-sm">
                                Data Sourced from: {selectedDistrict} DDMA ({selectedState})
                            </p>
                            <div className="flex items-center gap-3 pt-2">
                                <Badge className="bg-white/20 text-white border-none text-[8px] font-black uppercase tracking-widest px-3 py-1 shadow-sm backdrop-blur-md">
                                    Current Fiscal Year Status
                                </Badge>
                                <span className="text-[10px] font-black text-pink-100 uppercase tracking-widest">
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
                            <Activity className="text-purple-600" size={20} />
                            <h3 className="text-sm font-black text-slate-800 uppercase tracking-[0.2em] border-b-2 border-slate-100 pb-2 flex-1">
                                Local Vulnerability Overview
                            </h3>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <FactMetric 
                                title="Total PwDs in Risk Zones" 
                                value={selectedDistrict === 'Puri' ? '18,450' : '12,200'} 
                                icon={<Users />} 
                                color="from-rose-500 to-red-600"
                                desc={`Mapped across vulnerable blocks in ${selectedDistrict}`}
                            />
                            <FactMetric 
                                title="High-Risk Blocks / Tehsils" 
                                value={selectedDistrict === 'Puri' ? '04' : '03'} 
                                icon={<Flame />} 
                                color="from-orange-500 to-amber-600"
                                desc="Red-flagged for severe coastal/flood exposure"
                                alert={selectedDistrict === 'Puri'}
                            />
                        </div>
                    </div>

                    {/* SECTION 2: READINESS INDICATORS (3 Columns) */}
                    <div className="space-y-4 relative z-10">
                        <div className="flex items-center gap-3">
                            <MapPin className="text-fuchsia-600" size={20} />
                            <h3 className="text-sm font-black text-slate-800 uppercase tracking-[0.2em] border-b-2 border-slate-100 pb-2 flex-1">
                                District Ground Readiness
                            </h3>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <FactMetric 
                                title="Accessible Shelters" 
                                value={selectedDistrict === 'Puri' ? '120 / 145' : '90 / 110'} 
                                icon={<Tent />} 
                                color="from-emerald-500 to-teal-600"
                                desc="Fully compliant (Ramps & WASH)"
                            />
                            <FactMetric 
                                title="Transport Readiness" 
                                value={selectedDistrict === 'Puri' ? '92%' : '85%'} 
                                icon={<Navigation />} 
                                color="from-blue-500 to-indigo-600"
                                desc="Local evacuation fleet accessibility"
                            />
                            <FactMetric 
                                title="Early Warning Coverage" 
                                value={selectedDistrict === 'Puri' ? '98%' : '88%'} 
                                icon={<RadioTower />} 
                                color="from-purple-500 to-fuchsia-600"
                                desc="Last-mile PwD alerts & SMS reach"
                            />
                        </div>
                    </div>

                    {/* SECTION 3: ANALYTICAL DISTRIBUTION */}
                    <div className="space-y-4 relative z-10">
                        <div className="flex items-center gap-3">
                            <RadioTower className="text-pink-600" size={20} />
                            <h3 className="text-sm font-black text-slate-800 uppercase tracking-[0.2em] border-b-2 border-slate-100 pb-2 flex-1">
                                Early Warning Penetration Trend (Last 4 Drills)
                            </h3>
                        </div>
                        
                        <div className="bg-slate-50 border border-slate-100 rounded-[32px] p-6 shadow-inner flex flex-col md:flex-row items-center gap-8">
                            
                            <div className="w-full md:w-2/3 h-64">
                                <ResponsiveContainer width="100%" height="100%">
                                    <AreaChart data={warningCoverageData[selectedDistrict as keyof typeof warningCoverageData] || warningCoverageData['Puri']}>
                                        <defs>
                                            <linearGradient id="colorCoverage" x1="0" y1="0" x2="0" y2="1">
                                                <stop offset="5%" stopColor="#d946ef" stopOpacity={0.3}/>
                                                <stop offset="95%" stopColor="#d946ef" stopOpacity={0}/>
                                            </linearGradient>
                                        </defs>
                                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                                        <XAxis dataKey="drill" axisLine={false} tickLine={false} tick={{ fontSize: 10, fontWeight: 'black', fill: '#64748b' }} />
                                        <YAxis axisLine={false} tickLine={false} domain={[0, 100]} tick={{ fontSize: 10, fill: '#64748b' }} />
                                        <RechartsTooltip 
                                            cursor={{ fill: '#f1f5f9' }} 
                                            contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                                        />
                                        <Area type="monotone" name="Coverage %" dataKey="coverage" stroke="#d946ef" strokeWidth={4} fillOpacity={1} fill="url(#colorCoverage)" />
                                    </AreaChart>
                                </ResponsiveContainer>
                            </div>

                            <div className="w-full md:w-1/3 space-y-4">
                                <p className="text-xs font-bold text-slate-500 leading-relaxed">
                                    Continuous mock drills indicate a positive upward trend in early warning message delivery to the mapped PwD demographic in {selectedDistrict}.
                                </p>
                                <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl flex items-start gap-3">
                                    <Activity size={16} className="text-emerald-600 mt-0.5 shrink-0" />
                                    <p className="text-[10px] font-black uppercase tracking-widest text-emerald-800 leading-relaxed">
                                        Target set by NDMA for 100% last-mile delivery is on track for Q4.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* FACT SHEET FOOTER */}
                <div className="bg-slate-50 border-t-2 border-slate-100 p-6 flex justify-between items-center z-10 relative">
                    <div className="flex items-center gap-3">
                        <Sparkles size={16} className="text-purple-500" />
                        <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest">
                            NDMA View-Only Mode • Synced from DDMA Database
                        </span>
                    </div>
                    <span className="font-mono text-[10px] font-black text-slate-400 bg-white px-3 py-1.5 rounded border border-slate-200 shadow-sm">
                        DOC-REF: NDMA-DIST-FS-{selectedDistrict.substring(0,3).toUpperCase()}-{new Date().getFullYear()}
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
const warningCoverageData = {
    "Puri": [
        { drill: 'Drill 1', coverage: 75 },
        { drill: 'Drill 2', coverage: 82 },
        { drill: 'Drill 3', coverage: 89 },
        { drill: 'Drill 4', coverage: 98 },
    ],
    "Ganjam": [
        { drill: 'Drill 1', coverage: 70 },
        { drill: 'Drill 2', coverage: 78 },
        { drill: 'Drill 3', coverage: 85 },
        { drill: 'Drill 4', coverage: 92 },
    ],
    "Kutch": [
        { drill: 'Drill 1', coverage: 65 },
        { drill: 'Drill 2', coverage: 70 },
        { drill: 'Drill 3', coverage: 80 },
        { drill: 'Drill 4', coverage: 88 },
    ]
};