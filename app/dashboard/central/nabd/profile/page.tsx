// app/dashboard/nabd/profile/page.tsx
"use client";
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
    ShieldCheck, Building2, MapPin, Mail, Phone,
    UserCircle, Users, Bell, Save, CheckCircle2,
    Briefcase, Activity, AlertTriangle, Sparkles
} from "lucide-react";

export default function NABDProfilePage() {
    // Mocking auto-calculated completion
    const profileCompletion = 100;

    return (
        <div className="space-y-8 animate-in fade-in duration-1000 pb-20 font-sans selection:bg-indigo-100">

            {/* PAGE HEADER */}
            <div className="flex flex-col xl:flex-row justify-between items-start xl:items-end gap-6 relative">
                <div className="space-y-2">
                    <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border-2 border-indigo-100">
                        <ShieldCheck size={14} /> Configuration & Identity
                    </div>
                    <h1 className="text-5xl font-black text-slate-900 tracking-tighter uppercase leading-none">Secretariat Profile</h1>
                    <p className="text-slate-500 font-medium text-lg italic underline underline-offset-8 decoration-indigo-100">
                        Governance framework, key personnel, and notification rules.
                    </p>
                </div>
                <div className="flex gap-4">
                    <Button className="h-14 px-8 rounded-full bg-indigo-600 text-white font-black uppercase tracking-widest text-[10px] shadow-xl hover:bg-indigo-700 transition-all gap-2 group">
                        <Save size={16} /> Save Configuration
                    </Button>
                </div>
            </div>

            {/* COMPLETION METRICS CARD */}
            <Card className="rounded-[32px] border-2 border-slate-100 shadow-sm overflow-hidden bg-white">
                <div className="p-8 bg-gradient-to-r from-blue-900 via-blue-800 to-black text-white relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
                    {/* CARBON FIBER OVERLAY */}
                    <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] bg-fixed" />
                    
                    <div className="relative z-10 flex items-center gap-6 w-full md:w-1/2">
                        <div className="h-16 w-16 rounded-2xl bg-white/10 backdrop-blur-md border-2 border-white/20 flex items-center justify-center shadow-xl shrink-0">
                            <Activity size={28} className="text-emerald-400" />
                        </div>
                        <div className="space-y-2 w-full">
                            <div className="flex justify-between items-end">
                                <span className="text-[10px] font-black text-slate-300 uppercase tracking-[0.2em]">Profile Completion</span>
                                <span className="text-2xl font-black text-emerald-400 leading-none">{profileCompletion}%</span>
                            </div>
                            <Progress value={profileCompletion} className="h-2 bg-white/10 [&>div]:bg-emerald-400" />
                        </div>
                    </div>

                    <div className="relative z-10 flex gap-4 text-[10px] font-black uppercase tracking-widest text-slate-300">
                        <div className="flex items-center gap-2 bg-white/5 px-4 py-3 rounded-xl border border-white/10">
                            <CheckCircle2 size={16} className="text-emerald-400" /> Core Identity
                        </div>
                        <div className="flex items-center gap-2 bg-white/5 px-4 py-3 rounded-xl border border-white/10">
                            <CheckCircle2 size={16} className="text-emerald-400" /> Role Mapping
                        </div>
                        <div className="flex items-center gap-2 bg-white/5 px-4 py-3 rounded-xl border border-white/10">
                            <CheckCircle2 size={16} className="text-emerald-400" /> Alerts Linked
                        </div>
                    </div>
                </div>
            </Card>

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
                
                {/* LEFT COLUMN: IDENTITY & FRAMEWORK (Spans 2 columns) */}
                <div className="xl:col-span-2 space-y-8">
                    
                    <SectionCard title="Secretariat Framework" icon={<Building2 />} color="text-blue-600">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <FormField label="Board Name" required>
                                <input type="text" defaultValue="National Advisory Board on Disability" className="form-input-apex" />
                            </FormField>
                            <FormField label="Secretariat Ministry / Department" required>
                                <input type="text" defaultValue="Department of Empowerment of Persons with Disabilities (DEPwD)" className="form-input-apex" />
                            </FormField>
                            <FormField label="Official Email ID(s)" required className="md:col-span-2">
                                <div className="relative">
                                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                                    <input type="email" defaultValue="nabd-secretariat@gov.in, advisory.depwd@gov.in" className="form-input-apex pl-12" />
                                </div>
                            </FormField>
                            <FormField label="Official Phone Number(s)" required>
                                <div className="relative">
                                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                                    <input type="text" defaultValue="+91 11 2436 4301, +91 11 2436 4302" className="form-input-apex pl-12" />
                                </div>
                            </FormField>
                            <FormField label="Office Address" required className="md:col-span-2">
                                <div className="relative">
                                    <MapPin className="absolute left-4 top-4 h-4 w-4 text-slate-400" />
                                    <textarea rows={3} defaultValue="5th Floor, Pt. Deendayal Antyodaya Bhawan, CGO Complex, Lodhi Road, New Delhi-110003" className="form-input-apex pl-12 py-3 resize-none" />
                                </div>
                            </FormField>
                        </div>
                    </SectionCard>

                    <SectionCard title="Notification Preferences" icon={<Bell />} color="text-amber-600">
                        <div className="space-y-4">
                            <ToggleRow 
                                title="System In-App Alerts" 
                                desc="Receive critical updates, meeting notices, and document sync alerts within the dashboard."
                                active={true}
                            />
                            <div className="h-[1px] w-full bg-slate-100" />
                            <ToggleRow 
                                title="Official Email Broadcasts" 
                                desc="Forward auto-generated notices, minutes, and recommendation briefs to mapped official emails."
                                active={true}
                            />
                            <div className="h-[1px] w-full bg-slate-100" />
                            <ToggleRow 
                                title="SMS / WhatsApp Triggers" 
                                desc="Send urgent meeting reminders and attendance verification requests to registered mobile numbers."
                                active={false}
                            />
                        </div>
                    </SectionCard>

                </div>

                {/* RIGHT COLUMN: LEADERSHIP & ROLE MAPPING */}
                <div className="space-y-8">
                    
                    <SectionCard title="Key Personnel" icon={<UserCircle />} color="text-purple-600">
                        <div className="space-y-6">
                            <FormField label="Chairperson Details" required>
                                <div className="p-4 rounded-2xl border-2 border-slate-100 bg-slate-50 space-y-3">
                                    <input type="text" defaultValue="Dr. Virendra Kumar" className="form-input-apex bg-white" placeholder="Full Name" />
                                    <input type="text" defaultValue="Hon'ble Minister, MSJE" className="form-input-apex bg-white" placeholder="Designation" />
                                </div>
                            </FormField>
                            
                            <FormField label="Member Secretary Details" required>
                                <div className="p-4 rounded-2xl border-2 border-slate-100 bg-slate-50 space-y-3">
                                    <input type="text" defaultValue="Smt. Anjali Bhawra" className="form-input-apex bg-white" placeholder="Full Name" />
                                    <input type="text" defaultValue="Secretary, DEPwD" className="form-input-apex bg-white" placeholder="Designation" />
                                </div>
                            </FormField>

                            <FormField label="Secretariat / Support Staff Details">
                                <textarea rows={2} defaultValue="Shri Rajeev Sharma (Under Secretary)&#10;Ms. Neha Gupta (Section Officer)" className="form-input-apex resize-none text-xs" placeholder="List key support staff" />
                            </FormField>
                        </div>
                    </SectionCard>

                    <SectionCard title="System Role Mapping" icon={<Briefcase />} color="text-emerald-600">
                        <div className="space-y-4">
                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-relaxed mb-4">
                                Map system accounts to statutory advisory roles for access control and e-signing logic.
                            </p>

                            <div className="space-y-3">
                                <RoleMappingRow account="USR-DIR-001" role="Chairperson" />
                                <RoleMappingRow account="USR-SEC-042" role="Member Secretary" />
                                <RoleMappingRow account="USR-STF-119" role="Secretariat" />
                                <RoleMappingRow account="USR-MBD-882" role="Member" />
                                <RoleMappingRow account="SYS-AUD-009" role="View-only" />
                            </div>

                            <Button variant="outline" className="w-full mt-4 border-2 border-dashed border-slate-200 text-slate-500 hover:text-indigo-600 hover:bg-indigo-50 hover:border-indigo-200 rounded-xl h-12 text-[10px] font-black uppercase tracking-widest transition-all">
                                + Map New Account
                            </Button>
                        </div>
                    </SectionCard>

                </div>
            </div>
        </div>
    );
}

/* UI SUB-COMPONENTS */

function SectionCard({ title, icon, color, children }: any) {
    return (
        <Card className="rounded-[32px] border-2 border-slate-100 bg-white shadow-sm overflow-hidden group hover:shadow-xl transition-all duration-500">
            <CardHeader className="p-8 border-b-2 border-slate-50 bg-slate-50/50 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
                <div className="flex items-center gap-4 relative z-10">
                    <div className={`h-10 w-10 rounded-xl bg-white shadow-sm border border-slate-100 flex items-center justify-center ${color}`}>
                        {icon}
                    </div>
                    <CardTitle className="text-sm font-black uppercase tracking-[0.2em] text-slate-900">{title}</CardTitle>
                </div>
            </CardHeader>
            <CardContent className="p-8 relative overflow-hidden">
                <div className="absolute inset-0 opacity-[0.01] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/topography.png')]" />
                <div className="relative z-10">{children}</div>
            </CardContent>
        </Card>
    );
}

function FormField({ label, required, children, className }: any) {
    return (
        <div className={`space-y-2 ${className}`}>
            <label className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">
                {label} {required && <span className="text-red-500">*</span>}
            </label>
            {children}
        </div>
    );
}

function ToggleRow({ title, desc, active }: any) {
    const [isOn, setIsOn] = useState(active);
    
    return (
        <div className="flex items-center justify-between gap-6 p-2">
            <div className="space-y-1">
                <h4 className="text-xs font-black text-slate-900 uppercase tracking-widest">{title}</h4>
                <p className="text-[10px] font-bold text-slate-400 leading-relaxed">{desc}</p>
            </div>
            <button 
                onClick={() => setIsOn(!isOn)}
                className={`w-12 h-6 rounded-full transition-colors relative shrink-0 ${isOn ? 'bg-emerald-500' : 'bg-slate-200'}`}
            >
                <div className={`h-4 w-4 rounded-full bg-white absolute top-1 transition-transform ${isOn ? 'translate-x-7' : 'translate-x-1'}`} />
            </button>
        </div>
    )
}

function RoleMappingRow({ account, role }: any) {
    return (
        <div className="flex items-center justify-between p-3 rounded-xl border border-slate-100 bg-white hover:border-indigo-200 hover:shadow-md transition-all group cursor-pointer">
            <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-lg bg-indigo-50 flex items-center justify-center">
                    <Users size={14} className="text-indigo-600" />
                </div>
                <div>
                    <p className="text-[10px] font-black text-slate-900 font-mono">{account}</p>
                    <p className="text-[8px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">System ID</p>
                </div>
            </div>
            <select className="bg-slate-50 border border-slate-200 text-slate-700 text-[10px] font-black uppercase tracking-widest rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500 cursor-pointer appearance-none text-right">
                <option value={role} selected>{role}</option>
                <option value="Chairperson">Chairperson</option>
                <option value="Member Secretary">Member Secretary</option>
                <option value="Member">Member</option>
                <option value="Secretariat">Secretariat</option>
                <option value="View-only">View-only</option>
            </select>
        </div>
    );
}

/* 
Add this to your globals.css to ensure the inputs look exactly as intended without cluttering the JSX:


*/