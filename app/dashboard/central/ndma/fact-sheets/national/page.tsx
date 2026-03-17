// app/dashboard/ndma/fact-sheets/national/page.tsx
"use client";
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
    FileText, Printer, DownloadCloud, ShieldAlert,
    Users, Tent, Navigation, RadioTower, Flame,
    Building2, Activity, Map, Sparkles,
    AlertTriangle
} from "lucide-react";
import {
    PieChart, Pie, Cell, ResponsiveContainer, Tooltip as RechartsTooltip, Legend
} from 'recharts';

export default function NationalFactSheetPage() {
    return (
        <div className="space-y-8 animate-in fade-in duration-1000 pb-20 font-sans selection:bg-orange-100">

            {/* PAGE HEADER */}
            <div className="flex flex-col xl:flex-row justify-between items-start xl:items-end gap-6 relative">
                <div className="space-y-2">
                    <div className="inline-flex items-center gap-2 bg-orange-50 text-orange-700 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border-2 border-orange-200 shadow-sm">
                        <FileText size={14} /> Official Fact Sheet
                    </div>
                    <h1 className="text-5xl font-black text-slate-800 tracking-tighter uppercase leading-none">National PwD Preparedness</h1>
                    <p className="text-slate-500 font-medium text-lg italic underline underline-offset-8 decoration-orange-200">
                        Single-page apex snapshot of disaster risks and readiness.
                    </p>
                </div>
                <div className="flex gap-4">
                    <Button variant="outline" className="h-14 px-8 rounded-full border-2 border-orange-200 text-orange-700 font-black uppercase tracking-widest text-[10px] bg-white shadow-xl hover:bg-orange-50 transition-all">
                        <DownloadCloud size={16} className="mr-2" /> Export PDF
                    </Button>
                    <Button className="h-14 px-8 rounded-full bg-slate-900 text-white font-black uppercase tracking-widest text-[10px] shadow-xl hover:bg-black transition-all gap-2 group border-none">
                        <Printer size={16} /> Print Fact Sheet
                    </Button>
                </div>
            </div>

            {/* MAIN FACT SHEET DOCUMENT CONTAINER */}
            <Card className="rounded-[48px] border-none bg-white shadow-2xl overflow-hidden relative max-w-6xl mx-auto ring-1 ring-slate-100">
                
                {/* FACT SHEET HEADER - VIBRANT GRADIENT */}
                <div className="p-12 bg-gradient-to-br from-emerald-500 via-teal-600 to-cyan-700 text-white relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 border-b-4 border-emerald-300">
                    <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] bg-fixed" />
                    <div className="absolute -right-20 -top-20 opacity-[0.05] pointer-events-none">
                        <ShieldAlert size={400} />
                    </div>
                    
                    <div className="relative z-10 flex items-center gap-6">
                        <div className="h-20 w-20 rounded-3xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center shadow-2xl shrink-0">
                            <Building2 size={36} className="text-white drop-shadow-md" />
                        </div>
                        <div className="space-y-2">
                            <h2 className="text-3xl font-black uppercase tracking-tighter text-white drop-shadow-lg leading-none">
                                National Disaster–PwD Fact Sheet
                            </h2>
                            <p className="text-xs font-bold text-emerald-100 uppercase tracking-[0.2em] drop-shadow-sm">
                                National Disaster Management Authority (PwD Cell)
                            </p>
                            <div className="flex items-center gap-3 pt-2">
                                <Badge className="bg-white/20 text-white border-none text-[8px] font-black uppercase tracking-widest px-3 py-1 shadow-sm backdrop-blur-md">
                                    Current Fiscal Year Status
                                </Badge>
                                <span className="text-[10px] font-black text-teal-100 uppercase tracking-widest">
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
                            <Activity className="text-emerald-600" size={20} />
                            <h3 className="text-sm font-black text-slate-800 uppercase tracking-[0.2em] border-b-2 border-slate-100 pb-2 flex-1">
                                National Vulnerability Overview
                            </h3>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <FactMetric 
                                title="Total PwDs in Risk Zones" 
                                value="4.2M" 
                                icon={<Users />} 
                                color="from-rose-500 to-red-600"
                                desc="Aggregated across all notified disaster zones"
                                alert
                            />
                            <FactMetric 
                                title="High-Risk Areas (Districts)" 
                                value="112" 
                                icon={<Flame />} 
                                color="from-orange-500 to-amber-600"
                                desc="Red-flagged for multi-hazard exposure"
                            />
                        </div>
                    </div>

                    {/* SECTION 2: READINESS INDICATORS (3 Columns) */}
                    <div className="space-y-4 relative z-10">
                        <div className="flex items-center gap-3">
                            <ShieldAlert className="text-blue-600" size={20} />
                            <h3 className="text-sm font-black text-slate-800 uppercase tracking-[0.2em] border-b-2 border-slate-100 pb-2 flex-1">
                                Preparedness & Infrastructure
                            </h3>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <FactMetric 
                                title="Accessible Shelters" 
                                value="12,450" 
                                icon={<Tent />} 
                                color="from-emerald-500 to-teal-600"
                                desc="Fully compliant (Ramps & WASH)"
                            />
                            <FactMetric 
                                title="Transport Readiness" 
                                value="84%" 
                                icon={<Navigation />} 
                                color="from-blue-500 to-indigo-600"
                                desc="Evacuation fleet accessibility"
                            />
                            <FactMetric 
                                title="Early Warning Coverage" 
                                value="92%" 
                                icon={<RadioTower />} 
                                color="from-purple-500 to-fuchsia-600"
                                desc="PwD-specific alerts reaching target"
                            />
                        </div>
                    </div>

                    {/* SECTION 3: ANALYTICAL DISTRIBUTION */}
                    <div className="space-y-4 relative z-10">
                        <div className="flex items-center gap-3">
                            <Map className="text-indigo-600" size={20} />
                            <h3 className="text-sm font-black text-slate-800 uppercase tracking-[0.2em] border-b-2 border-slate-100 pb-2 flex-1">
                                Risk Distribution by Disaster Type
                            </h3>
                        </div>
                        
                        <div className="bg-slate-50 border border-slate-100 rounded-[32px] p-6 flex flex-col md:flex-row items-center gap-8 shadow-inner">
                            <div className="h-64 w-full md:w-1/2">
                                <ResponsiveContainer width="100%" height="100%">
                                    <PieChart>
                                        <Pie
                                            data={disasterRiskData}
                                            innerRadius={60}
                                            outerRadius={90}
                                            paddingAngle={5}
                                            dataKey="value"
                                            stroke="none"
                                        >
                                            {disasterRiskData.map((entry, index) => (
                                                <Cell key={`cell-${index}`} fill={entry.color} />
                                            ))}
                                        </Pie>
                                        <RechartsTooltip 
                                            contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                                            itemStyle={{ fontSize: '12px', fontWeight: 'bold' }}
                                        />
                                        <Legend 
                                            verticalAlign="middle" 
                                            align="right" 
                                            layout="vertical"
                                            wrapperStyle={{ fontSize: '10px', fontWeight: 'black', textTransform: 'uppercase', letterSpacing: '0.1em' }}
                                        />
                                    </PieChart>
                                </ResponsiveContainer>
                            </div>
                            
                            <div className="w-full md:w-1/2 space-y-4">
                                <p className="text-xs font-bold text-slate-500 leading-relaxed">
                                    The distribution highlights the primary hazards affecting the PwD population nationwide. Coastal states face acute cyclone threats requiring specific evacuation transport, while northern plains dominate the flood risk profile, demanding rapid accessible shelter deployment.
                                </p>
                                <div className="p-4 bg-orange-50 border border-orange-200 rounded-2xl flex items-start gap-3">
                                    <AlertTriangle size={16} className="text-orange-600 mt-0.5 shrink-0" />
                                    <p className="text-[10px] font-black uppercase tracking-widest text-orange-800 leading-relaxed">
                                        Cyclone and Flood zones account for over 65% of the total vulnerable PwD demographic requiring targeted interventions.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* FACT SHEET FOOTER */}
                <div className="bg-slate-50 border-t-2 border-slate-100 p-6 flex justify-between items-center z-10 relative">
                    <div className="flex items-center gap-3">
                        <Sparkles size={16} className="text-emerald-500" />
                        <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest">
                            National Command Layer • Auto-generated Report
                        </span>
                    </div>
                    <span className="font-mono text-[10px] font-black text-slate-400 bg-white px-3 py-1.5 rounded border border-slate-200 shadow-sm">
                        DOC-REF: NDMA-NAT-FS-{new Date().getFullYear()}-01
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
const disasterRiskData = [
    { name: 'Cyclone', value: 35, color: '#06b6d4' },
    { name: 'Floods', value: 30, color: '#3b82f6' },
    { name: 'Earthquake', value: 20, color: '#f59e0b' },
    { name: 'Heatwave', value: 15, color: '#ef4444' }
];