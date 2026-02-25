// app/dashboard/pwd/page.tsx
"use client";
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
    FileBadge,
    MessageSquare,
    Accessibility,
    Search,
    ArrowRight,
    AlertCircle,
    CheckCircle2,
    Clock,
    Sparkles
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Link from 'next/link';

export default function PwDDashboard() {
    const profileComplete = 65;

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">

            {/* 1. PROFILE FIRST - Master Status Section */}
            <section className="relative overflow-hidden bg-white border border-slate-200 rounded-[32px] p-8 shadow-sm">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-50/50 to-transparent pointer-events-none" />

                <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
                    <div className="space-y-2 max-w-xl">
                        <h1 className="text-3xl font-black text-slate-900 tracking-tight">Welcome back, Amit</h1>
                        <p className="text-slate-500 font-medium leading-relaxed">
                            Your profile is the single source for all applications. Keep it updated to ensure fast processing and automated form filling.
                        </p>
                    </div>

                    <div className="w-full md:w-72 space-y-3">
                        <div className="flex justify-between items-end">
                            <span className="text-[11px] font-black text-slate-400 uppercase tracking-widest">Profile Completion</span>
                            <span className="text-xl font-black text-blue-600">{profileComplete}%</span>
                        </div>
                        <Progress value={profileComplete} className="h-3 bg-slate-100 bg-gradient-to-r from-blue-600 to-purple-600" />
                        {profileComplete < 100 && (
                            <div className="flex items-center gap-2 text-orange-600 bg-orange-50 px-3 py-1.5 rounded-lg border border-orange-100">
                                <AlertCircle size={14} />
                                <span className="text-[10px] font-black uppercase tracking-tight">Mandatory Fields Missing, Complete your profile then only you'll be able to apply for certificate.</span>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* 2. QUICK ACTIONS - Objective Based */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <ActionCard
                    icon={<FileBadge />}
                    title="Apply for Certificate"
                    desc="New disability certificate application"
                    disabled={profileComplete < 80}
                    link="/pwd/apply-for-certificate"
                    color="from-blue-500 via-blue-600 to-blue-700"
                />
                <ActionCard
                    icon={<MessageSquare />}
                    title="Lodge Grievance"
                    desc="Report discrimination or issues"
                    link="/pwd/grievances"
                    color="from-purple-500 via-purple-600 to-purple-700"
                />
                <ActionCard
                    icon={<Accessibility />}
                    title="Report Barriers"
                    desc="Physical or digital accessibility"
                    link="/pwd/report-barriers"
                    color="from-orange-500 via-orange-600 to-orange-700"
                />
                <ActionCard
                    icon={<Search />}
                    title="Track Status"
                    desc="Check your active applications"
                    link="/pwd/track-application-status"
                    color="from-emerald-500 via-emerald-600 to-emerald-700"
                />
            </div>

            {/* 3. ACTIVE TRACKING & AI INSIGHTS */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                {/* Application Tracker */}
                <Card className="lg:col-span-2 border-slate-200 shadow-sm rounded-[32px] overflow-hidden">
                    <CardHeader className="p-6 border-b border-slate-50 flex flex-row justify-between items-center">
                        <CardTitle className="text-lg font-black text-slate-800 uppercase tracking-tight">Recent Applications</CardTitle>
                        <Link href="/pwd/applications" className="text-xs p-1 rounded-md px-2 text-blue-600 font-bold hover:bg-blue-50">View History</Link>
                    </CardHeader>
                    <CardContent className="p-0">
                        <div className="divide-y divide-slate-50">
                            <StatusRow
                                id="APP-9210"
                                type="Disability Certificate"
                                date="Oct 14, 2024"
                                status="Under Review"
                                icon={<Clock className="text-orange-500" size={16} />}
                            />
                            <StatusRow
                                id="GRV-4421"
                                type="Grievance (Employment)"
                                date="Oct 02, 2024"
                                status="Resolved"
                                icon={<CheckCircle2 className="text-green-500" size={16} />}
                            />
                        </div>
                    </CardContent>
                </Card>

                {/* AI Recommendations Section */}
                <Card className="border-2 bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-[32px] overflow-hidden shadow-xl">
                    <CardContent className="p-8 space-y-6">
                        <div className="h-12 w-12 bg-white/10 rounded-2xl flex items-center justify-center">
                            <Sparkles className="text-purple-400" />
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-xl font-bold">Smart Assistance</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                Based on your profile, you are eligible for the <span className="text-blue-400 font-bold tracking-tight">Niramaya Health Scheme</span>.
                            </p>
                        </div>
                        <Link href="/pwd/apply-for-certificate" className="flex w-[50%] mx-auto p-2 justify-center items-center bg-blue-600 hover:bg-blue-700 rounded-xl font-bold gap-2">
                            Apply Now <ArrowRight size={16} />
                        </Link>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}

/* HELPER COMPONENTS */

function ActionCard({
    icon,
    title,
    desc,
    disabled = false,
    link,
    color = "from-slate-500 via-slate-800 to-slate-900",
    alert = false,
}: {
    icon: React.ReactNode
    title: string
    desc: string
    disabled?: boolean
    link?: string
    color?: string
    alert?: boolean
}) {
    return (
        <div
            className={`group relative text-left p-6 rounded-[32px] overflow-hidden transition-all duration-500 h-48 flex flex-col justify-between shadow-md hover:shadow-2xl hover:-translate-y-1.5 bg-gradient-to-br ${color} text-white border-t border-white/20 ${disabled ? "opacity-60 grayscale-[0.6] pointer-events-none" : "cursor-pointer"
                }`}
        >
            {/* subtle texture overlay */}
            <div className="absolute inset-0 opacity-[0.08] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />

            <div className="relative z-10 flex flex-col justify-between h-full">
                {/* Icon */}
                <div className="h-10 w-10 rounded-xl bg-white/20 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform">
                    {React.cloneElement(icon as React.ReactElement, {
                    })}
                </div>

                {/* Content */}
                <div>
                    <h3 className="text-lg font-black tracking-tight drop-shadow-sm">
                        {title}
                    </h3>
                    <p className="text-[11px] font-medium opacity-80 mt-1 leading-relaxed">
                        {desc}
                    </p>

                    <Link
                        href={disabled || !link ? "#" : link}
                        className="inline-flex items-center mt-4 text-[10px] font-black uppercase tracking-[0.15em] group-hover:gap-2 transition-all"
                    >
                        {disabled ? "Complete Profile First" : "Get Started"}
                        <ArrowRight size={12} className="ml-1 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>

            {/* Alert pulse dot */}
            {alert && (
                <div className="absolute top-4 right-4 h-2 w-2 rounded-full bg-white animate-ping" />
            )}
        </div>
    )
}

function StatusRow({ id, type, date, status, icon }: { id: string, type: string, date: string, status: string, icon: React.ReactNode }) {
    return (
        <div className="p-6 flex items-center justify-between hover:bg-slate-50 transition-colors cursor-pointer">
            <div className="flex items-center gap-4">
                <div className="p-2.5 bg-white border border-slate-100 rounded-xl shadow-sm font-mono text-[10px] font-black text-blue-600">
                    {id}
                </div>
                <div>
                    <p className="text-sm font-bold text-slate-800">{type}</p>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">{date}</p>
                </div>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-slate-100 shadow-sm">
                {icon}
                <span className="text-[10px] font-black text-slate-700 uppercase tracking-tight">{status}</span>
            </div>
        </div>
    );
}