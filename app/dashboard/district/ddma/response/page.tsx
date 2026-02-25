"use client";
import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
    Siren, Navigation, Activity,
    Zap, Timer, Radio, Smartphone, LocateFixed, Fingerprint, Sparkles, ShieldAlert
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

// IMPORTANT: Dynamically import the map component with SSR disabled
const EmergencyMap = dynamic(
    () => import('@/components/map/EmergencyResponseMap'),
    {
        ssr: false,
        loading: () => <div className="h-96 w-full bg-slate-800 animate-pulse rounded-[40px]" />
    }
);

export default function EmergencyResponseConsole() {
    const [outcome, setOutcome] = useState<string>('');
    const [coords] = useState({ lat: 26.8467, lng: 80.9462 });

    return (
        <div className="max-w-7xl mx-auto pb-20 animate-in fade-in duration-700 font-sans">

            {/* 1. STATUS HEADER */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10">
                <div className="space-y-1">
                    <div className="flex items-center gap-2 text-red-600 font-black uppercase text-[10px] tracking-[0.2em]">
                        <Radio size={14} className="animate-pulse" /> Live Emergency Node
                    </div>
                    <h1 className="text-5xl font-black text-slate-900 tracking-tighter uppercase">SOS Response Console</h1>
                    <p className="text-slate-500 font-medium italic">Authorized response and outcome logging for real-time PwD SOS requests.</p>
                </div>
                <div className="flex gap-3">
                    <Badge className="h-12 px-6 bg-red-50 text-red-700 border-red-100 font-black text-xs uppercase tracking-widest flex items-center gap-2 shadow-sm">
                        <Siren size={18} className="animate-bounce" /> 14 Unresolved SOS
                    </Badge>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

                {/* LEFT COLUMN: REQUEST PARAMETERS */}
                <div className="lg:col-span-8 space-y-8">
                    <Card className="rounded-[40px] border-slate-200 shadow-2xl overflow-hidden bg-white">
                        <CardHeader className="p-8 border-b border-slate-50 bg-slate-50/50 flex flex-row justify-between items-center">
                            <CardTitle className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Request Metadata</CardTitle>
                            <div className="flex items-center gap-4">
                                <div className="flex items-center gap-2 text-red-600 bg-white px-3 py-1 rounded-full border border-red-100 shadow-sm">
                                    <Timer size={14} />
                                    <span className="text-[10px] font-black uppercase tracking-tighter">Response Time: 12m 40s</span>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent className="p-10 space-y-10">

                            {/* IDS & LINKING */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-3">
                                    <label className="text-[11px] font-black uppercase text-slate-500 ml-1 tracking-widest">1. Request ID</label>
                                    <div className="relative">
                                        <Activity className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-300" />
                                        <Input
                                            defaultValue="REQ-SOS-LKO-9102"
                                            readOnly
                                            className="h-16 pl-12 rounded-2xl bg-slate-50 border-2 font-mono font-black text-blue-600 uppercase"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <label className="text-[11px] font-black uppercase text-slate-500 ml-1 tracking-widest">2. PwD ID (Linked)</label>
                                    <div className="relative group">
                                        <Fingerprint className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-300 group-focus-within:text-red-500 transition-colors" />
                                        <Input
                                            defaultValue="UP/LKO/00912"
                                            className="h-16 pl-12 rounded-2xl bg-slate-50 border-2 font-black text-slate-800"
                                        />
                                        <Badge className="absolute right-3 top-1/2 -translate-y-1/2 bg-blue-600 text-white border-2 font-black text-[8px] px-2 py-1 uppercase shadow-lg">Verified</Badge>
                                    </div>
                                </div>
                            </div>

                            {/* EMERGENCY NATURE & LOCATION */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-3">
                                    <label className="text-[11px] font-black uppercase text-slate-500 ml-1 tracking-widest">3. Nature of Emergency</label>
                                    <Input
                                        defaultValue="Flood / Water Logging"
                                        className="h-16 px-6 rounded-2xl bg-slate-50 border-2 font-bold text-slate-900"
                                    />
                                </div>
                                <div className="space-y-3">
                                    <label className="text-[11px] font-black uppercase text-slate-500 ml-1 tracking-widest">4. Geo-Tagged Coordinates</label>
                                    <div className="relative">
                                        <LocateFixed className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-red-600" />
                                        <Input
                                            value={`${coords.lat}° N, ${coords.lng}° E`}
                                            readOnly
                                            className="h-16 pl-12 rounded-2xl bg-red-50 border border-red-100 font-mono font-black text-red-700 shadow-inner"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* ASSISTANCE REQUIRED */}
                            <div className="space-y-3">
                                <label className="text-[11px] font-black uppercase text-slate-500 ml-1 tracking-widest">5. Assistance Tags</label>
                                <div className="p-4 bg-slate-50 rounded-[32px] border border-slate-100 flex flex-wrap gap-3">
                                    <AssistanceBadge label="Mobility" active />
                                    <AssistanceBadge label="Medical" active />
                                    <AssistanceBadge label="Sensory" />
                                    <AssistanceBadge label="Caregiver" />
                                </div>
                            </div>

                            {/* ACTION TAKEN */}
                            <div className="space-y-4">
                                <div className="flex justify-between items-center px-1">
                                    <label className="text-[11px] font-black uppercase text-slate-500 tracking-widest">6. Response Action Taken</label>
                                    <Button variant="ghost" className="text-blue-600 font-black text-[10px] uppercase tracking-widest gap-2 bg-blue-50 px-4 rounded-full">
                                        <Sparkles size={12} /> AI Transcription
                                    </Button>
                                </div>
                                <Textarea
                                    className="min-h-[160px] rounded-[32px] bg-slate-50 border-2 p-8 text-sm font-medium leading-relaxed resize-none focus:ring-2 focus:ring-red-500"
                                    placeholder="Describe the rescue operation steps..."
                                />
                            </div>

                            {/* DATE & OUTCOME */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                <div className="space-y-3">
                                    <label className="text-[11px] font-black uppercase text-slate-500 ml-1 tracking-widest">7. Date & Time of Close</label>
                                    <Input type="datetime-local" className="h-16 px-6 rounded-2xl bg-slate-50 border-2 font-bold text-slate-800" />
                                </div>
                                <div className="space-y-3">
                                    <label className="text-[11px] font-black uppercase text-slate-500 ml-1 tracking-widest">8. Outcome Status</label>
                                    <div className="flex gap-4">
                                        <button onClick={() => setOutcome('ok')} className={`flex-1 h-16 rounded-2xl font-black uppercase text-[10px] tracking-widest transition-all ${outcome === 'ok' ? 'bg-green-600 text-white shadow-xl shadow-green-200' : 'bg-slate-50 text-slate-400 hover:bg-slate-100'}`}>Success</button>
                                        <button onClick={() => setOutcome('no')} className={`flex-1 h-16 rounded-2xl font-black uppercase text-[10px] tracking-widest transition-all ${outcome === 'no' ? 'bg-red-600 text-white shadow-xl shadow-red-200' : 'bg-slate-50 text-slate-400 hover:bg-slate-100'}`}>Failed</button>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* RIGHT COLUMN: GIS MAPPING */}
                <div className="lg:col-span-4 space-y-8 sticky top-28 h-fit">

                    <Card className="rounded-[40px] border-2 bg-slate-900 shadow-2xl overflow-hidden relative group">
                        <div className="h-96 w-full z-0">
                            {/* The Map component is now wrapped in EmergencyMap and imported dynamically */}
                            <EmergencyMap lat={coords?.lat} lng={coords?.lng} />
                        </div>
                        <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl shadow-xl border border-white/50">
                            <p className="text-[10px] font-black uppercase text-slate-900 flex items-center gap-2">
                                <Navigation size={12} className="text-red-600" /> GIS Positioning Active
                            </p>
                        </div>
                    </Card>

                    <Card className="rounded-[40px] border-slate-200 p-8 bg-white shadow-sm relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none"><ShieldAlert size={80} /></div>
                        <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-6 flex items-center gap-2">
                            <Activity size={14} className="text-red-600" /> SOS Priority Detail
                        </h4>
                        <div className="space-y-6">
                            <div className="space-y-1">
                                <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Citizen Name</p>
                                <p className="text-2xl font-black text-slate-900 tracking-tight">Amit Kumar</p>
                                <Badge className="bg-red-600 text-white border-2 font-black text-[8px] px-2 py-0.5 mt-1 uppercase">High Risk Zone</Badge>
                            </div>
                            <div className="pt-6 border-t border-slate-50">
                                <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-3">Rescue Contact</p>
                                <div className="flex items-center gap-4 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                                    <Smartphone size={20} className="text-blue-600" />
                                    <p className="text-lg font-black text-slate-800 tracking-tighter">+91 98765 0912</p>
                                </div>
                            </div>
                        </div>
                    </Card>

                    <Button className="w-full h-20 bg-slate-900 hover:bg-black text-white rounded-[32px] font-black uppercase tracking-[0.2em] text-xs shadow-2xl transition-all hover:scale-[1.02] flex gap-3 group">
                        Commit Response Record <Zap size={20} className="text-orange-500 fill-orange-500 group-hover:animate-pulse" />
                    </Button>
                </div>
            </div>
        </div>
    );
}

/* HELPER COMPONENTS */
function AssistanceBadge({ label, active }: { label: string, active?: boolean }) {
    return (
        <Badge className={`px-4 py-2 rounded-xl font-black text-[9px] uppercase tracking-widest border-2 transition-all ${active
            ? 'bg-blue-600 text-white border-blue-600 shadow-md'
            : 'bg-white text-slate-400 border-slate-100'
            }`}>
            {label}
        </Badge>
    );
}