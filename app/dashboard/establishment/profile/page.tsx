// app/dashboard/establishment/profile/page.tsx
"use client";
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Building2, MapPin, Users, ShieldCheck,
    Mail, Phone, Globe, Edit3, Camera,
    Briefcase, Landmark, CheckCircle2
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function EstablishmentProfile() {
    return (
        <div className="max-w-6xl mx-auto space-y-10 pb-20 animate-in fade-in duration-700">

            {/* 1. PROFILE HEADER SECTION */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 bg-white p-8 rounded-[40px] border border-slate-200 shadow-sm">
                <div className="flex items-center gap-8">
                    <div className="relative group">
                        <div className="h-24 w-24 bg-slate-900 rounded-[24px] flex items-center justify-center text-white overflow-hidden shadow-xl">
                            <Building2 size={40} />
                        </div>
                        <button className="absolute -bottom-2 -right-2 p-2 bg-blue-600 text-white rounded-lg shadow-lg hover:scale-110 transition-transform">
                            <Camera size={14} />
                        </button>
                    </div>
                    <div>
                        <div className="flex items-center gap-3">
                            <h1 className="text-3xl font-black text-slate-900 tracking-tight">GRO - Regional Hub</h1>
                            <Badge className="bg-blue-600 text-white font-black text-[9px] uppercase tracking-widest">Private Establishment</Badge>
                        </div>
                        <div className="flex items-center gap-4 mt-2">
                            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">ID: EST-UP-7721-KOL</span>
                            <div className="h-1 w-1 rounded-full bg-slate-200" />
                            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Sector: Banking & Finance</span>
                        </div>
                    </div>
                </div>
                <Button className="bg-slate-900 hover:bg-black text-white rounded-2xl px-8 font-black uppercase tracking-widest text-[10px] h-12 shadow-xl">
                    <Edit3 size={14} className="mr-2" /> Edit Profile
                </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                {/* LEFT COLUMN: CORE DETAILS */}
                <div className="lg:col-span-2 space-y-8">

                    {/* STATUTORY ASSIGNMENTS (Section 2 of Docs) */}
                    <CardWrapper title="Statutory Officer Assignments">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <OfficerCard
                                role="Establishment Head"
                                name="Rajesh Mehra"
                                designation="Regional Director"
                                status="Approver"
                            />
                            <OfficerCard
                                role="Grievance Redressal Officer"
                                name="V.K. Malhotra"
                                designation="Sr. Manager (HR)"
                                status="GRO"
                                active
                            />
                            <OfficerCard
                                role="PwD Nodal Officer"
                                name="Sunita Das"
                                designation="Compliance Manager"
                                status="Nodal"
                            />
                            <OfficerCard
                                role="Data Entry Operator"
                                name="Amit Singh"
                                designation="Asst. Manager"
                                status="Limited Access"
                            />
                        </div>
                    </CardWrapper>

                    {/* LOCATION & CONTACT */}
                    <CardWrapper title="Official Location & Contact">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <ProfileField icon={<MapPin />} label="Address" value="Plot 12, Swasthya Bhawan Road, Salt Lake Sector-V, Kolkata" full />
                            <ProfileField icon={<Landmark />} label="State" value="West Bengal" />
                            <ProfileField icon={<MapPin />} label="District" value="Kolkata" />
                            <ProfileField icon={<Mail />} label="Official Email" value="admin.kolkata@hdfcbank.com" />
                            <ProfileField icon={<Phone />} label="Contact Number" value="+91 33 2289 4400" />
                            <ProfileField icon={<Globe />} label="Establishment Website" value="www.hdfcbank.com" />
                            <ProfileField icon={<Briefcase />} label="Registration No." value="REG/EST/WB/2021/4492" />
                        </div>
                    </CardWrapper>
                </div>

                {/* RIGHT COLUMN: STATUS & AUDIT */}
                <div className="space-y-8">
                    <Card className="rounded-[40px] border-2 bg-slate-900 text-white p-8 shadow-2xl">
                        <h3 className="text-[10px] font-black text-blue-400 uppercase tracking-[0.2em] mb-8">Statutory Readiness</h3>
                        <div className="space-y-8">
                            <ComplianceItem label="Equal Opportunity Policy" status="Notified & Live" />
                            <ComplianceItem label="Accessibility Audit" status="Conducted 12-Oct" />
                            <ComplianceItem label="Employment Returns" status="Pending (Q3)" alert />
                            <ComplianceItem label="Grievance Register" status="Digitally Active" />
                        </div>
                        <div className="mt-12 pt-8 border-t border-white/10">
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Data Synchronization</span>
                                <CheckCircle2 size={14} className="text-green-500" />
                            </div>
                            <p className="text-[10px] text-slate-500 font-medium">Last synced with State Nodal Dashboard: Today, 09:42 AM</p>
                        </div>
                    </Card>

                    <Card className="rounded-[40px] border-slate-200 p-8 bg-white shadow-sm">
                        <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-6">Action History</h4>
                        <div className="space-y-6">
                            {[
                                { action: "Policy Revised", date: "14 Oct 2024", user: "Sunita Das" },
                                { action: "Officer Changed", date: "02 Sep 2024", user: "Rajesh Mehra" },
                                { action: "Audit Uploaded", date: "24 Aug 2024", user: "V.K. Malhotra" }
                            ].map((log, i) => (
                                <div key={i} className="flex gap-4 border-l-2 border-slate-50 pl-4 py-1">
                                    <div>
                                        <p className="text-xs font-black text-slate-800 uppercase tracking-tight">{log.action}</p>
                                        <p className="text-[10px] text-slate-400 font-medium">{log.date} by {log.user}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Card>
                </div>

            </div>
        </div>
    );
}

/* UI HELPER COMPONENTS */

function CardWrapper({ title, children }: any) {
    return (
        <Card className="rounded-[40px] border-slate-200 shadow-sm overflow-hidden bg-white">
            <CardHeader className="px-8 py-6 border-b border-slate-50 bg-slate-50/30">
                <CardTitle className="text-[10px] font-black uppercase text-slate-400 tracking-[0.2em]">{title}</CardTitle>
            </CardHeader>
            <CardContent className="p-8">
                {children}
            </CardContent>
        </Card>
    );
}

function ProfileField({ icon, label, value, full }: any) {
    return (
        <div className={`space-y-2 ${full ? 'md:col-span-2' : ''}`}>
            <label className="text-[9px] font-black uppercase text-slate-400 ml-1 tracking-widest">{label}</label>
            <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-2xl border hover:border-slate-200 transition-all group">
                <span className="text-slate-300 group-hover:text-blue-600 transition-colors">{icon && React.cloneElement(icon, { size: 18 })}</span>
                <span className="text-sm font-bold text-slate-800">{value}</span>
            </div>
        </div>
    );
}

function OfficerCard({ role, name, designation, status, active }: any) {
    return (
        <div className={`p-5 rounded-3xl border transition-all ${active ? 'bg-blue-50 border-blue-100' : 'bg-slate-50 hover:bg-white hover:border-slate-200'}`}>
            <div className="flex justify-between items-start mb-3">
                <div className={`p-2 rounded-xl ${active ? 'bg-blue-600 text-white' : 'bg-white text-slate-400'} shadow-sm`}>
                    <Users size={18} />
                </div>
                <Badge className={`${active ? 'bg-blue-600' : 'bg-slate-200 text-slate-600'} text-[8px] font-black uppercase tracking-tighter`}>{status}</Badge>
            </div>
            <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">{role}</p>
            <p className="text-sm font-black text-slate-900">{name}</p>
            <p className="text-[10px] font-medium text-slate-500">{designation}</p>
        </div>
    )
}

function ComplianceItem({ label, status, alert }: any) {
    return (
        <div className="flex justify-between items-center group">
            <div className="space-y-1">
                <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest group-hover:text-blue-400 transition-colors">{label}</p>
                <p className={`text-xs font-bold ${alert ? 'text-red-500' : 'text-white'}`}>{status}</p>
            </div>
            <div className={`h-2 w-2 rounded-full ${alert ? 'bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.5)]' : 'bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]'}`} />
        </div>
    );
}