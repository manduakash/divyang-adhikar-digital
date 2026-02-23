// app/dashboard/pwd/disaster-assistance/page.tsx
"use client";
import React, { useState } from 'react';
import {
    ShieldAlert,
    MapPin,
    PhoneCall,
    LifeBuoy,
    AlertTriangle,
    UserPlus,
    Navigation,
    Truck,
    Stethoscope,
    ChevronRight,
    Info,
    Clock,
    CheckCircle2,
    Ambulance,
    Radio
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
    Select, SelectContent, SelectItem, SelectTrigger, SelectValue
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import {
    Table, TableBody, TableCell, TableHead, TableHeader, TableRow
} from "@/components/ui/table";

type DisasterTab = 'PREPAREDNESS' | 'EMERGENCY';

export default function DisasterAssistancePage() {
    const [activeTab, setActiveTab] = useState<DisasterTab>('PREPAREDNESS');

    // Mock Emergency Contacts for Section 10
    const emergencyContacts = [
        { role: "District Control Room", phone: "0522-223451", icon: <Radio size={16} /> },
        { role: "DDMA Nodal Officer", phone: "94150-XXXXX", icon: <UserPlus size={16} /> },
        { role: "PwD Helpline", phone: "1800-11-XXXX", icon: <PhoneCall size={16} /> },
        { role: "Emergency Medical", phone: "108", icon: <Ambulance size={16} /> }
    ];

    return (
        <div className="max-w-6xl mx-auto space-y-8 animate-in fade-in duration-700">

            {/* 1. HEADER SECTION */}
            <div className="flex flex-col md:flex-row justify-between items-end gap-6 bg-white p-8 rounded-[32px] border border-slate-200 shadow-sm">
                <div>
                    <h1 className="text-3xl font-black text-slate-900 tracking-tight">Disaster Assistance</h1>
                    <p className="text-slate-500 font-medium">Preparedness registration and emergency assistance under Section 8 of the PwD Act.</p>
                </div>
                <div className="flex bg-slate-100 p-1.5 rounded-2xl border border-slate-200">
                    <TabBtn active={activeTab === 'PREPAREDNESS'} onClick={() => setActiveTab('PREPAREDNESS')} icon={<ShieldAlert size={16} />} label="Preparedness" />
                    <TabBtn active={activeTab === 'EMERGENCY'} onClick={() => setActiveTab('EMERGENCY')} icon={<AlertTriangle size={16} />} label="Emergency" />
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">

                {/* LEFT COLUMN: FILING FORM */}
                <div className="lg:col-span-1 space-y-6">
                    <Card className={`rounded-[32px] border-slate-200 shadow-sm overflow-hidden bg-white ${activeTab === 'EMERGENCY' ? 'ring-2 ring-red-500 ring-offset-4' : ''}`}>
                        <CardHeader className={`${activeTab === 'EMERGENCY' ? 'bg-red-50' : 'bg-slate-50/50'} border-b border-slate-100 p-6`}>
                            <CardTitle className={`text-[10px] font-black uppercase tracking-[0.2em] flex items-center gap-2 ${activeTab === 'EMERGENCY' ? 'text-red-600' : 'text-slate-400'}`}>
                                {activeTab === 'PREPAREDNESS' ? <UserPlus size={14} /> : <AlertTriangle size={14} />}
                                {activeTab === 'PREPAREDNESS' ? 'Register Special Needs' : 'Request Emergency Help'}
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="p-6 space-y-5">

                            {activeTab === 'PREPAREDNESS' ? (
                                /* PREPAREDNESS FORM (Section 10) */
                                <>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase text-slate-500 ml-1">Special Assistance Needed</label>
                                        <Select>
                                            <SelectTrigger className="rounded-xl h-11 bg-slate-50 border-2 px-4">
                                                <SelectValue placeholder="Select Needs" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="mobility">Wheelchair/Mobility Support</SelectItem>
                                                <SelectItem value="medical">Life-Support Equipment</SelectItem>
                                                <SelectItem value="sensory">Sensory Assistance (Deaf/Blind)</SelectItem>
                                                <SelectItem value="caregiver">Caregiver Evacuation</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase text-slate-500 ml-1">Regular Medications</label>
                                        <Textarea className="min-h-[80px] rounded-xl bg-slate-50 border-2 p-3 resize-none text-sm" placeholder="List critical medicines needed..." />
                                    </div>
                                    <Button className="w-full bg-blue-600 text-white hover:bg-blue-700 rounded-xl h-12 font-black uppercase tracking-widest text-[10px]">
                                        Update Needs Profile
                                    </Button>
                                </>
                            ) : (
                                /* EMERGENCY FORM (Section 10) */
                                <>
                                    <div className="p-4 bg-red-50 border border-red-100 rounded-xl flex items-center gap-3">
                                        <Navigation className="text-red-600" size={18} />
                                        <div className="flex flex-col">
                                            <span className="text-[10px] font-black text-red-700 uppercase">GPS Location</span>
                                            <span className="text-xs font-bold text-red-600">Locked: 26.84° N, 80.94° E</span>
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase text-slate-500 ml-1">Nature of Emergency</label>
                                        <Select>
                                            <SelectTrigger className="rounded-xl h-11 bg-red-50 border-2 px-4 text-red-700 font-bold">
                                                <SelectValue placeholder="Select Crisis" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="flood">Flood / Water Ingress</SelectItem>
                                                <SelectItem value="fire">Fire Incident</SelectItem>
                                                <SelectItem value="medical">Critical Medical Failure</SelectItem>
                                                <SelectItem value="trapped">Trapped / Unable to Move</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase text-slate-500 ml-1">Details</label>
                                        <Textarea className="min-h-[80px] rounded-xl bg-slate-50 border-2 p-3 resize-none text-sm" placeholder="Briefly describe your situation..." />
                                    </div>
                                    <Button className="w-full bg-red-600 text-white hover:bg-red-700 rounded-xl h-14 font-black uppercase tracking-[0.15em] text-xs shadow-xl shadow-red-100">
                                        Send Distress Signal
                                    </Button>
                                </>
                            )}
                        </CardContent>
                    </Card>

                    {/* ADVISORY CARD */}
                    <Card className="rounded-[32px] bg-slate-900 p-6 text-white shadow-xl border-2">
                        <div className="flex items-center gap-3 mb-3">
                            <LifeBuoy size={20} className="text-blue-400" />
                            <h4 className="text-xs font-black uppercase tracking-widest">DDMA Protocol</h4>
                        </div>
                        <p className="text-[11px] leading-relaxed opacity-80">
                            Registered PwDs receive <b>priority evacuation</b> and access to <b>inclusive shelters</b> with accessible toilets and power backup for assistive devices.
                        </p>
                    </Card>
                </div>

                {/* RIGHT COLUMN: CONTACTS OR TRACKING */}
                <div className="lg:col-span-2 space-y-6">

                    {/* 1. DISTRICT EMERGENCY CONTACTS (Section 10 Requirement) */}
                    <Card className="rounded-[32px] border-slate-200 shadow-sm overflow-hidden bg-white">
                        <CardHeader className="p-6 border-b border-slate-50">
                            <CardTitle className="text-sm font-black text-slate-800 uppercase tracking-tight">District Emergency Contacts</CardTitle>
                        </CardHeader>
                        <CardContent className="p-0">
                            <div className="grid grid-cols-1 md:grid-cols-2 divide-x divide-y divide-slate-50">
                                {emergencyContacts.map((contact, i) => (
                                    <div key={i} className="p-6 flex items-center justify-between hover:bg-slate-50 transition-colors">
                                        <div className="flex items-center gap-3">
                                            <div className="h-10 w-10 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600">
                                                {contact.icon}
                                            </div>
                                            <div>
                                                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{contact.role}</p>
                                                <p className="text-sm font-black text-slate-800 tracking-tight">{contact.phone}</p>
                                            </div>
                                        </div>
                                        <Button variant="ghost" size="icon" className="text-blue-600 hover:bg-blue-100 rounded-lg">
                                            <PhoneCall size={18} />
                                        </Button>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>

                    {/* 2. REGISTRATION / REQUEST STATUS */}
                    <Card className="rounded-[32px] border-slate-200 shadow-sm overflow-hidden bg-white">
                        <CardHeader className="p-6 border-b border-slate-50">
                            <CardTitle className="text-sm font-black text-slate-800 uppercase tracking-tight">Current Preparedness Status</CardTitle>
                        </CardHeader>
                        <CardContent className="p-8">
                            <div className="flex flex-col md:flex-row gap-8 items-center">
                                <div className="h-32 w-32 rounded-full border-8 border-green-100 border-t-green-500 flex items-center justify-center relative">
                                    <span className="text-2xl font-black text-slate-800">85%</span>
                                    <CheckCircle2 className="absolute -top-1 -right-1 text-green-600 bg-white rounded-full" size={24} />
                                </div>
                                <div className="space-y-4 flex-1">
                                    <div className="grid grid-cols-2 gap-4">
                                        <StatusItem label="Special Needs" val="Registered" status="SUCCESS" />
                                        <StatusItem label="Assigned Shelter" val="City School A" status="SUCCESS" />
                                        <StatusItem label="Evacuation Plan" val="Mobile Assist" status="SUCCESS" />
                                        <StatusItem label="Medical Kit" val="Pending" status="ALERT" />
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

            </div>
        </div>
    );
}

/* UI HELPERS */

function TabBtn({ active, onClick, icon, label }: { active: boolean, onClick: () => void, icon: React.ReactNode, label: string }) {
    return (
        <button
            onClick={onClick}
            className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${active ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-700'
                }`}
        >
            {icon} {label}
        </button>
    );
}

function StatusItem({ label, val, status }: { label: string, val: string, status: 'SUCCESS' | 'ALERT' }) {
    return (
        <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
            <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">{label}</p>
            <div className="flex items-center justify-between mt-1">
                <span className="text-xs font-bold text-slate-700">{val}</span>
                <div className={`h-2 w-2 rounded-full ${status === 'SUCCESS' ? 'bg-green-500' : 'bg-orange-500'}`} />
            </div>
        </div>
    );
}