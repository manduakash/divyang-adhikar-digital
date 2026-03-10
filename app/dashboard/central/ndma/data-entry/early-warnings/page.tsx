// app/dashboard/ndma/data-entry/early-warnings/page.tsx
"use client";
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
    Table, TableBody, TableCell, TableHead, TableHeader, TableRow
} from "@/components/ui/table";
import {
    Siren, ShieldAlert, Zap, History, Target,
    Building2, Map, Tag, Calendar, MessageSquare,
    RadioTower, AlertTriangle, PhoneCall, Smartphone,
    Users, Clock, CheckCircle2, Waves, Wind, ThermometerSun
} from "lucide-react";

export default function EarlyWarningsDataEntryPage() {
    const [dissemination, setDissemination] = useState({
        sms: true,
        ivr: false,
        app: true,
        volunteers: true
    });

    const toggleChannel = (key: keyof typeof dissemination) => {
        setDissemination(prev => ({ ...prev, [key]: !prev[key] }));
    };

    return (
        <div className="space-y-8 animate-in fade-in duration-1000 pb-20 font-sans selection:bg-rose-100">

            {/* PAGE HEADER */}
            <div className="flex flex-col xl:flex-row justify-between items-start xl:items-end gap-6 relative">
                <div className="space-y-2">
                    <div className="inline-flex items-center gap-2 bg-rose-50 text-rose-700 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border-2 border-rose-200 shadow-sm">
                        <Siren size={14} className="animate-pulse text-red-600" /> Crisis Response Layer
                    </div>
                    <h1 className="text-5xl font-black text-slate-800 tracking-tighter uppercase leading-none">Alerts & Early Warnings</h1>
                    <p className="text-slate-500 font-medium text-lg italic underline underline-offset-8 decoration-rose-200">
                        Issue rapid, PwD-sensitive alerts supplementing IMD and early warning systems.
                    </p>
                </div>
                <div className="flex gap-4">
                    <Button variant="outline" className="h-14 px-8 rounded-full border-2 border-rose-200 text-rose-700 font-black uppercase tracking-widest text-[10px] bg-white shadow-xl hover:bg-rose-50 transition-all">
                        <History size={16} className="mr-2" /> View Alert Registry
                    </Button>
                    <Button className="h-14 px-8 rounded-full bg-gradient-to-r from-red-600 via-rose-600 to-orange-600 text-white font-black uppercase tracking-widest text-[10px] shadow-xl hover:shadow-[0_0_20px_theme(colors.red.500)] transition-all gap-2 group border-none">
                        <Zap size={16} className="text-yellow-300" /> Broadcast Alert
                    </Button>
                </div>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
                
                {/* LEFT: ALERT DEFINITION (Spans 2 columns) */}
                <div className="xl:col-span-2 space-y-8">
                    
                    <SectionCard title="Emergency Alert Definition" icon={<AlertTriangle />} color="text-red-600" border="border-red-200">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            
                            <FormField label="Alert Reference No." required>
                                <div className="relative">
                                    <Tag className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-red-300 pointer-events-none" />
                                    <input type="text" defaultValue="NDMA/EWS/2024-008" className="form-input-apex pl-12 font-mono text-red-700 bg-red-50/50" readOnly />
                                </div>
                            </FormField>

                            <FormField label="Disaster Type" required>
                                <select className="form-input-apex appearance-none cursor-pointer border-red-100 focus:border-red-400 focus:ring-red-50">
                                    <option value="" disabled selected>Select Threat Level...</option>
                                    <option value="CYCLONE">Severe Cyclone Warning</option>
                                    <option value="FLOOD">Flash Flood Alert</option>
                                    <option value="EARTHQUAKE">Earthquake Response</option>
                                    <option value="HEATWAVE">Extreme Heatwave Alert</option>
                                </select>
                            </FormField>

                            <FormField label="States / Regions Covered" required className="md:col-span-2">
                                <div className="relative">
                                    <Map className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-red-300 pointer-events-none" />
                                    <input type="text" placeholder="Specify vulnerable regions (e.g., Coastal Districts of Odisha & West Bengal)..." className="form-input-apex pl-12 border-red-100 focus:border-red-400 focus:ring-red-50" />
                                </div>
                            </FormField>

                            <FormField label="PwD-Specific Advisory Text" required className="md:col-span-2">
                                <div className="relative">
                                    <MessageSquare className="absolute left-4 top-4 h-5 w-5 text-red-400 pointer-events-none" />
                                    <textarea 
                                        rows={6} 
                                        placeholder="Draft the accessible, urgent alert message. Include specific directives for bed-ridden individuals, tactile warnings, or sensory-friendly evacuation routes..." 
                                        className="form-input-apex pl-12 pt-3.5 resize-none text-sm leading-relaxed border-red-100 focus:border-red-400 focus:ring-red-50" 
                                    />
                                </div>
                                <p className="text-[9px] font-black text-red-500 uppercase tracking-widest text-right mt-2">
                                    Max 300 characters for SMS/App compliance
                                </p>
                            </FormField>

                        </div>
                    </SectionCard>

                </div>

                {/* RIGHT: TIMING & DISSEMINATION */}
                <div className="space-y-8">
                    
                    <SectionCard title="Validity & Dissemination" icon={<RadioTower />} color="text-orange-600" border="border-orange-200">
                        <div className="space-y-6">
                            
                            <FormField label="Alert Validity Period" required>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="relative">
                                        <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-3 w-3 text-orange-400 pointer-events-none" />
                                        <input type="date" className="form-input-apex pl-8 text-xs px-2 border-orange-100 focus:border-orange-400" />
                                    </div>
                                    <div className="relative">
                                        <Clock className="absolute left-3 top-1/2 -translate-y-1/2 h-3 w-3 text-orange-400 pointer-events-none" />
                                        <input type="time" className="form-input-apex pl-8 text-xs px-2 border-orange-100 focus:border-orange-400" />
                                    </div>
                                </div>
                                <p className="text-[9px] font-bold text-orange-600 uppercase tracking-widest mt-2">
                                    Specify exactly when the alert expires.
                                </p>
                            </FormField>

                            <div className="space-y-4 pt-4 border-t-2 border-orange-50">
                                <label className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-orange-700 ml-1">
                                    Dissemination Channels <span className="text-red-500">*</span>
                                </label>
                                
                                <div className="grid grid-cols-2 gap-4">
                                    <ChannelToggle 
                                        icon={<Smartphone />} label="SMS (Text)" 
                                        active={dissemination.sms} 
                                        onClick={() => toggleChannel('sms')} 
                                    />
                                    <ChannelToggle 
                                        icon={<PhoneCall />} label="IVR (Audio)" 
                                        active={dissemination.ivr} 
                                        onClick={() => toggleChannel('ivr')} 
                                    />
                                    <ChannelToggle 
                                        icon={<ShieldAlert />} label="Mobile App Push" 
                                        active={dissemination.app} 
                                        onClick={() => toggleChannel('app')} 
                                    />
                                    <ChannelToggle 
                                        icon={<Users />} label="Volunteer Nodal" 
                                        active={dissemination.volunteers} 
                                        onClick={() => toggleChannel('volunteers')} 
                                    />
                                </div>
                            </div>

                        </div>
                    </SectionCard>

                </div>
            </div>

            {/* RECENT ALERTS REGISTRY TABLE */}
            <Card className="rounded-[40px] border-none shadow-xl overflow-hidden bg-white mt-8">
                <CardHeader className="p-0 border-b-4 border-red-200">
                    <div className="p-8 bg-gradient-to-r from-red-600 via-rose-600 to-orange-600 text-white relative overflow-hidden flex flex-col md:flex-row justify-between items-center gap-6">
                        <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] bg-fixed" />
                        
                        <div className="relative z-10 flex items-center gap-4">
                            <div className="h-12 w-12 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center shadow-lg">
                                <Siren size={20} className="text-white drop-shadow-md" />
                            </div>
                            <div>
                                <CardTitle className="text-xl font-black uppercase tracking-tight drop-shadow-sm">National Alert Registry</CardTitle>
                                <p className="text-[10px] font-bold text-red-100 uppercase tracking-widest mt-1">Recently broadcasted early warnings</p>
                            </div>
                        </div>

                        <div className="relative z-10 flex gap-3">
                            <Badge className="bg-white/20 text-white border-none text-[10px] font-black uppercase tracking-widest px-4 py-2 backdrop-blur-md shadow-sm">
                                Active Alerts: 01
                            </Badge>
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="p-0 overflow-x-auto relative min-h-[300px]">
                    <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/topography.png')]" />
                    
                    <Table className="relative z-10">
                        <TableHeader className="bg-rose-50/50">
                            <TableRow className="border-b-2 border-rose-100">
                                <TableHead className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-rose-800">Alert Ref / Type</TableHead>
                                <TableHead className="py-5 text-[10px] font-black uppercase tracking-[0.2em] text-rose-800 w-1/3">Target Region & Advisory</TableHead>
                                <TableHead className="py-5 text-[10px] font-black uppercase tracking-[0.2em] text-rose-800 text-center">Channels Used</TableHead>
                                <TableHead className="py-5 text-[10px] font-black uppercase tracking-[0.2em] text-rose-800 text-center">Validity / Expiry</TableHead>
                                <TableHead className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-rose-800 text-right">Status</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody className="divide-y divide-rose-50">
                            
                            <AlertRow 
                                refNo="NDMA/EWS/2024-007" 
                                type="CYCLONE"
                                icon={<Wind />}
                                region="Coastal Odisha & West Bengal"
                                advisory="Evacuation priority for wheelchair users. Move to designated ramp-accessible shelters."
                                channels={['SMS', 'APP', 'VOL']}
                                expiry="14 Nov 2024, 23:59"
                                status="ACTIVE"
                                alert
                            />
                            <AlertRow 
                                refNo="NDMA/EWS/2024-006" 
                                type="FLOOD"
                                icon={<Waves />}
                                region="Assam (Brahmaputra Valley)"
                                advisory="Flash flood warning. Hearing-impaired visual alerts triggered via local network."
                                channels={['SMS', 'APP']}
                                expiry="05 Sep 2024, 18:00"
                                status="EXPIRED"
                            />
                            <AlertRow 
                                refNo="NDMA/EWS/2024-005" 
                                type="HEATWAVE"
                                icon={<ThermometerSun />}
                                region="Delhi NCR & Rajasthan"
                                advisory="Severe heat wave. Restrict movement for persons with intellectual/multiple disabilities."
                                channels={['SMS', 'IVR', 'VOL']}
                                expiry="15 Jun 2024, 20:00"
                                status="EXPIRED"
                            />

                        </TableBody>
                    </Table>
                </CardContent>
            </Card>

        </div>
    );
}

/* UI SUB-COMPONENTS */

function SectionCard({ title, icon, color, border, children }: any) {
    return (
        <Card className={`rounded-[32px] border-2 shadow-lg bg-white overflow-hidden group hover:shadow-xl transition-all duration-500 border-slate-100 hover:${border}`}>
            <CardHeader className="p-8 border-b-2 border-slate-50 relative overflow-hidden bg-slate-50/30">
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
                <div className="flex items-center gap-4 relative z-10">
                    <div className={`h-12 w-12 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center ${color} group-hover:scale-110 transition-transform`}>
                        {React.cloneElement(icon, { size: 24 })}
                    </div>
                    <CardTitle className={`text-sm font-black uppercase tracking-[0.2em] text-slate-800`}>{title}</CardTitle>
                </div>
            </CardHeader>
            <CardContent className="p-8 relative overflow-hidden">
                <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/topography.png')]" />
                <div className="relative z-10">{children}</div>
            </CardContent>
        </Card>
    );
}

function FormField({ label, required, children, className }: any) {
    return (
        <div className={`space-y-2 ${className}`}>
            <label className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-600 ml-1">
                {label} {required && <span className="text-red-500">*</span>}
            </label>
            {children}
        </div>
    );
}

function ChannelToggle({ icon, label, active, onClick }: any) {
    return (
        <button 
            type="button"
            onClick={onClick}
            className={`flex flex-col items-center justify-center gap-2 p-3 rounded-xl border-2 transition-all ${active ? 'bg-orange-50 border-orange-200 text-orange-700 shadow-sm' : 'bg-white border-transparent hover:border-slate-200 text-slate-400 shadow-sm'}`}
        >
            {React.cloneElement(icon, { size: 20 })}
            <span className="text-[9px] font-black uppercase tracking-widest">{label}</span>
        </button>
    );
}

function AlertRow({ refNo, type, icon, region, advisory, channels, expiry, status, alert }: any) {
    
    const isCyclone = type === 'CYCLONE';
    const isFlood = type === 'FLOOD';
    const isHeatwave = type === 'HEATWAVE';

    const typeColor = isCyclone ? 'text-cyan-600 bg-cyan-50 border-cyan-200' :
                      isFlood ? 'text-blue-600 bg-blue-50 border-blue-200' :
                      isHeatwave ? 'text-orange-600 bg-orange-50 border-orange-200' :
                      'text-red-600 bg-red-50 border-red-200';

    return (
        <TableRow className="border-none hover:bg-rose-50/50 transition-all group">
            
            <TableCell className="px-8 py-5">
                <div className="flex flex-col gap-2">
                    <span className="font-mono text-[11px] font-black text-slate-800">{refNo}</span>
                    <Badge variant="outline" className={`border-2 text-[8px] font-black uppercase tracking-widest px-2 py-0.5 w-fit flex items-center gap-1.5 ${typeColor}`}>
                        {React.cloneElement(icon, { size: 10 })}
                        {type}
                    </Badge>
                </div>
            </TableCell>

            <TableCell className="py-5">
                <div className="space-y-1.5 pr-4">
                    <span className="text-[10px] font-black text-slate-800 uppercase tracking-widest flex items-center gap-1.5">
                        <Map size={12} className="text-rose-500" />
                        {region}
                    </span>
                    <p className="text-xs font-bold text-slate-600 line-clamp-2 leading-relaxed bg-white border border-slate-100 p-2.5 rounded-xl shadow-sm">
                        {advisory}
                    </p>
                </div>
            </TableCell>

            <TableCell className="py-5 text-center">
                <div className="flex flex-wrap justify-center gap-1.5">
                    {channels.map((ch: string) => (
                        <span key={ch} className="text-[8px] font-black uppercase tracking-widest bg-slate-100 text-slate-600 px-2 py-1 rounded-md border border-slate-200">
                            {ch}
                        </span>
                    ))}
                </div>
            </TableCell>

            <TableCell className="py-5 text-center">
                <span className={`font-mono text-[10px] font-bold border px-3 py-1.5 rounded-lg shadow-inner ${alert ? 'text-red-600 bg-red-50 border-red-100' : 'text-slate-500 bg-slate-50 border-slate-100'}`}>
                    {expiry}
                </span>
            </TableCell>

            <TableCell className="px-8 py-5 text-right">
                <Badge className={`border-none text-[9px] font-black uppercase tracking-widest px-4 py-1.5 shadow-sm ml-auto flex items-center justify-center gap-1.5 w-max ${alert ? 'bg-red-500 text-white animate-pulse' : 'bg-slate-200 text-slate-600'}`}>
                    {alert && <Siren size={10} />}
                    {status}
                </Badge>
            </TableCell>

        </TableRow>
    );
}