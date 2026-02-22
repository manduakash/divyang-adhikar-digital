"use client";
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    User, MapPin, Accessibility, ShieldCheck,
    Users, Upload, CheckCircle2, AlertCircle,
    Plus, Trash2, FileText, Camera,
    BadgeCheck
} from "lucide-react";
import {
    Select, SelectContent, SelectItem, SelectTrigger, SelectValue
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";

export default function MyProfilePage() {
    const [completion, setCompletion] = useState(65);

    return (
        <div className="max-w-6xl mx-auto pb-20 animate-in fade-in duration-700">

            {/* HEADER SECTION - Completion Status */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10 bg-white p-8 rounded-[32px] border border-slate-200 shadow-sm">
                <div>
                    <h1 className="text-3xl font-black text-slate-900 tracking-tight">My Profile</h1>
                    <p className="text-slate-500 font-medium">Update your details once to use them across all government applications.</p>
                </div>
                <div className="flex items-center gap-4">
                    <div className="text-right">
                        <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Completion Status</p>
                        <p className="text-2xl font-black text-blue-600">{completion}%</p>
                    </div>
                    <Button className="bg-blue-600 hover:bg-blue-700 rounded-xl px-8 font-bold shadow-lg shadow-blue-100">
                        Save Changes
                    </Button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

                {/* LEFT NAVIGATION - Section Jumps */}
                <div className="lg:col-span-1">
                    <nav className="sticky top-28 space-y-2">
                        <NavAnchor icon={<User size={18} />} label="Personal Details" active />
                        <NavAnchor icon={<MapPin size={18} />} label="Address Details" />
                        <NavAnchor icon={<Accessibility size={18} />} label="Disability Details" />
                        <NavAnchor icon={<ShieldCheck size={18} />} label="Documents Vault" />
                        <NavAnchor icon={<Users size={18} />} label="Caregiver Info" />
                    </nav>
                </div>

                {/* MAIN FORM AREA */}
                <div className="lg:col-span-3 space-y-8">

                    {/* PERSONAL DETAILS */}
                    <SectionWrapper title="Personal Details">
                        <div className="flex flex-col md:flex-row gap-8 mb-8">
                            <div className="relative group">
                                <div className="h-32 w-32 rounded-3xl bg-slate-100 border-2 border-dashed border-slate-300 flex items-center justify-center overflow-hidden">
                                    <Camera className="text-slate-400" />
                                </div>
                                <button className="absolute -bottom-2 -right-2 p-2 bg-blue-600 text-white rounded-lg shadow-lg">
                                    <Plus size={16} />
                                </button>
                            </div>
                            <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
                                <Field label="Full Name" placeholder="As per Identity Proof" />
                                <div className="space-y-2">
                                    <label className="text-[11px] font-black uppercase text-slate-500 ml-1">Gender</label>
                                    <Select><SelectTrigger className="rounded-xl py-6 bg-slate-50 border w-full">
                                        <SelectValue placeholder="Select Gender" />
                                    </SelectTrigger><SelectContent>
                                            <SelectItem value="m">Male</SelectItem><SelectItem value="f">Female</SelectItem><SelectItem value="o">Other</SelectItem>
                                        </SelectContent></Select>
                                </div>
                                <Field label="Date of Birth" type="date" />
                                <div className="space-y-2 relative">
                                    <Field label="Mobile Number" placeholder="+91 00000 00000" />
                                    <Badge className="absolute right-3 bottom-5 bg-green-100 text-green-700 hover:bg-green-100 border-none font-bold text-[10px]"><BadgeCheck /> Verified</Badge>
                                </div>
                                <Field label="Email ID" type="email" placeholder="example@email.com" />
                            </div>
                        </div>
                    </SectionWrapper>

                    {/* ADDRESS DETAILS */}
                    <SectionWrapper title="Address Details">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-[11px] font-black uppercase text-slate-500">State</label>
                                <Select><SelectTrigger className="rounded-xl py-6 bg-slate-50 border w-full">
                                    <SelectValue placeholder="Select State" />
                                </SelectTrigger></Select>
                            </div>
                            <div className="space-y-2">
                                <label className="text-[11px] font-black uppercase text-slate-500">District</label>
                                <Select><SelectTrigger className="rounded-xl py-6 bg-slate-50 border w-full">
                                    <SelectValue placeholder="Select District" />
                                </SelectTrigger></Select>
                            </div>
                            <Field label="Block / ULB / Village" placeholder="Enter locality" />
                            <Field label="PIN Code" placeholder="6-digit code" />
                        </div>
                    </SectionWrapper>

                    {/* DISABILITY DETAILS */}
                    <SectionWrapper title="Disability Details">
                        <div className="space-y-6">
                            <div className="p-4 bg-purple-50 rounded-2xl border border-purple-100">
                                <label className="text-[11px] font-black uppercase text-purple-700 mb-3 block">Type of Disability (Multi-select)</label>
                                <div className="flex flex-wrap gap-2">
                                    {["Locomotor", "Visual", "Hearing", "Intellectual", "Multiple"].map(d => (
                                        <Badge key={d} variant="outline" className="bg-white px-4 py-2 rounded-xl font-bold cursor-pointer hover:border-purple-400">
                                            {d}
                                        </Badge>
                                    ))}
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <Field label="Percentage (%)" placeholder="e.g. 60" />
                                <div className="space-y-2">
                                    <label className="text-[11px] font-black uppercase text-slate-500">Certificate Status</label>
                                    <Select><SelectTrigger className="rounded-xl py-6 bg-slate-50 border w-full">
                                        <SelectValue placeholder="Select Status" />
                                    </SelectTrigger><SelectContent>
                                            <SelectItem value="n">Not Applied</SelectItem><SelectItem value="a">Applied</SelectItem><SelectItem value="i">Issued</SelectItem>
                                        </SelectContent></Select>
                                </div>
                                <Field label="Certificate No." placeholder="If Issued" />
                                <Field label="Issuing Authority" placeholder="Name of Hospital/Dept" />
                                <Field label="Date of Issue" type="date" />
                            </div>
                        </div>
                    </SectionWrapper>

                    {/* DOCUMENTS REPOSITORY */}
                    <SectionWrapper title="Documents Vault (Reusable)">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <DocCard label="Identity Proof" status="Verified" />
                            <DocCard label="Address Proof" status="Pending" />
                            <DocCard label="Medical Document" status="Missing" />
                            <DocCard label="Disability Certificate" status="Verified" />
                        </div>
                    </SectionWrapper>

                    {/* GUARDIAN INFO */}
                    <SectionWrapper title="Caregiver / Guardian (Optional)">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <Field label="Guardian Name" />
                            <Field label="Relationship" />
                            <Field label="Contact Number" />
                        </div>
                    </SectionWrapper>

                </div>
            </div>
        </div>
    );
}

/* UI SUB-COMPONENTS */

function NavAnchor({ icon, label, active = false }: { icon: React.ReactNode, label: string, active?: boolean }) {
    return (
        <div className={`flex items-center gap-3 px-6 py-4 rounded-2xl font-bold text-sm cursor-pointer transition-all ${active ? 'bg-slate-900 text-white shadow-xl' : 'text-slate-500 hover:bg-slate-100'
            }`}>
            {icon} {label}
        </div>
    );
}

function SectionWrapper({ title, children }: { title: string, children: React.ReactNode }) {
    return (
        <div className="bg-white rounded-[32px] border border-slate-200 p-8 shadow-sm">
            <h3 className="text-sm font-black text-slate-400 uppercase tracking-[0.2em] mb-8 flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-blue-600" /> {title}
            </h3>
            {children}
        </div>
    );
}

function Field({ label, type = "text", placeholder = "", ...props }: any) {
    return (
        <div className="space-y-2">
            <label className="text-[11px] font-black uppercase text-slate-500 ml-1">{label}</label>
            <Input
                type={type}
                placeholder={placeholder}
                className="rounded-xl h-12 bg-slate-50 border focus-visible:ring-purple-500 px-4 font-medium"
                {...props}
            />
        </div>
    );
}

function DocCard({ label, status }: { label: string, status: 'Verified' | 'Pending' | 'Missing' }) {
    const colors = {
        Verified: 'text-green-600 bg-green-50 border-green-100',
        Pending: 'text-orange-600 bg-orange-50 border-orange-100',
        Missing: 'text-red-600 bg-red-50 border-red-100'
    };

    return (
        <div className="flex items-center justify-between p-4 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-white transition-all group">
            <div className="flex items-center gap-3">
                <div className="h-10 w-10 bg-white rounded-xl flex items-center justify-center text-slate-400 group-hover:text-blue-600 shadow-sm">
                    <FileText size={20} />
                </div>
                <div className="flex flex-col">
                    <span className="text-xs font-bold text-slate-800">{label}</span>
                    <span className={`text-[9px] font-black uppercase tracking-tight ${colors[status]}`}>
                        {status}
                    </span>
                </div>
            </div>
            <button className="p-2 hover:bg-slate-200 rounded-lg text-slate-400">
                <Upload size={16} />
            </button>
        </div>
    );
}