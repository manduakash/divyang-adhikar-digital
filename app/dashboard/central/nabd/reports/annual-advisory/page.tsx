// app/dashboard/nabd/reports/annual-advisory/page.tsx
"use client";
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
    FileBarChart, DownloadCloud, Printer, Sparkles,
    UserCircle, Users, CalendarCheck, Lightbulb,
    Target, AlertTriangle, Database, FileText,
    CheckCircle2, RefreshCw, Briefcase, Zap
} from "lucide-react";

export default function AnnualAdvisoryReportPage() {
    const [isGenerating, setIsGenerating] = useState(false);
    const [overviewText, setOverviewText] = useState("");

    const handleAIAssist = () => {
        setIsGenerating(true);
        setTimeout(() => {
            setOverviewText("The National Advisory Board has actively pursued the mandate of inclusive development throughout the fiscal year. Focus remained steadfast on rural accessibility, educational integration, and rapid grievance redressal. The collaborative efforts between state representatives and domain experts have yielded actionable policy directives, driving tangible progress across central ministries.");
            setIsGenerating(false);
        }, 1500);
    };

    return (
        <div className="space-y-8 animate-in fade-in duration-1000 pb-20 font-sans selection:bg-indigo-100">

            {/* PAGE HEADER */}
            <div className="flex flex-col xl:flex-row justify-between items-start xl:items-end gap-6 relative">
                <div className="space-y-2">
                    <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border-2 border-indigo-100">
                        <FileBarChart size={14} /> Statutory Reports
                    </div>
                    <h1 className="text-5xl font-black text-slate-800 tracking-tighter uppercase leading-none">Annual Advisory Report</h1>
                    <p className="text-slate-500 font-medium text-lg italic underline underline-offset-8 decoration-indigo-200">
                        Comprehensive year-end governance, policy, and compliance summary.
                    </p>
                </div>
                <div className="flex gap-4">
                    <Button variant="outline" className="h-14 px-8 rounded-full border-2 border-indigo-200 text-indigo-700 font-black uppercase tracking-widest text-[10px] bg-white shadow-xl hover:bg-indigo-50 transition-all">
                        <Printer size={16} className="mr-2" /> Print Draft
                    </Button>
                    <Button className="h-14 px-8 rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 text-white font-black uppercase tracking-widest text-[10px] shadow-xl hover:shadow-2xl hover:scale-105 transition-all gap-2 group border-none">
                        <DownloadCloud size={16} /> Finalise & Export PDF
                    </Button>
                </div>
            </div>

            {/* REPORT METADATA BANNER (Vibrant Gradient, No Dark Colors) */}
            <Card className="rounded-[40px] border-none shadow-2xl overflow-hidden relative">
                <div className="p-10 bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 text-white relative overflow-hidden flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] bg-fixed" />
                    
                    <div className="relative z-10 flex items-center gap-6">
                        <div className="h-20 w-20 rounded-3xl bg-white/20 backdrop-blur-md border-2 border-white/30 flex items-center justify-center shadow-xl shrink-0">
                            <FileText size={36} className="text-white drop-shadow-md" />
                        </div>
                        <div className="space-y-2">
                            <h2 className="text-3xl font-black uppercase tracking-tighter text-white drop-shadow-sm leading-none">
                                FY 2023-2024 Report Builder
                            </h2>
                            <p className="text-xs font-bold text-indigo-100 uppercase tracking-[0.2em]">
                                National Advisory Board on Disability
                            </p>
                            <div className="flex items-center gap-3 pt-2">
                                <Badge className="bg-white/20 text-white border-none text-[8px] font-black uppercase tracking-widest px-3 py-1 shadow-sm">
                                    Status: DRAFTING IN PROGRESS
                                </Badge>
                                <span className="text-[10px] font-black text-indigo-100 uppercase tracking-widest">
                                    Last Auto-Save: Just Now
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="relative z-10 flex flex-col items-center md:items-end gap-2 w-full md:w-1/3">
                        <div className="flex justify-between w-full text-[10px] font-black uppercase tracking-widest text-indigo-100">
                            <span>Compilation Progress</span>
                            <span>85%</span>
                        </div>
                        <Progress value={85} className="h-2 bg-white/20 [&>div]:bg-white" />
                    </div>
                </div>
            </Card>

            {/* REPORT SECTIONS GRID */}
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">

                {/* SECTION: CHAIRPERSON'S OVERVIEW */}
                <ReportSectionCard 
                    title="Chairperson's Overview" 
                    icon={<UserCircle />} 
                    gradient="from-blue-500 to-indigo-500"
                >
                    <div className="space-y-4">
                        <div className="flex justify-between items-center bg-indigo-50/50 p-3 rounded-xl border border-indigo-100">
                            <span className="text-[10px] font-black uppercase tracking-widest text-indigo-700">Executive Summary</span>
                            <Button 
                                onClick={handleAIAssist}
                                disabled={isGenerating}
                                variant="outline" 
                                className="h-8 rounded-lg border-indigo-200 text-indigo-600 font-black uppercase tracking-widest text-[9px] hover:bg-indigo-100 transition-all gap-2"
                            >
                                {isGenerating ? <RefreshCw size={12} className="animate-spin" /> : <Sparkles size={12} />}
                                AI Assist
                            </Button>
                        </div>
                        <textarea 
                            value={overviewText}
                            onChange={(e) => setOverviewText(e.target.value)}
                            rows={6} 
                            placeholder="Draft the executive overview highlighting the year's primary achievements and thematic focus..." 
                            className="w-full border-2 border-slate-100 bg-slate-50 rounded-2xl p-4 text-sm font-bold text-slate-700 focus:outline-none focus:border-blue-400 focus:bg-white transition-all shadow-inner resize-none leading-relaxed" 
                        />
                    </div>
                </ReportSectionCard>

                {/* SECTION: BOARD COMPOSITION & CHANGES */}
                <ReportSectionCard 
                    title="Board Composition & Changes" 
                    icon={<Users />} 
                    gradient="from-emerald-500 to-teal-500"
                >
                    <div className="grid grid-cols-2 gap-4 h-full">
                        <MetricBox value="32" label="Active Members" color="text-emerald-600" bg="bg-emerald-50" />
                        <MetricBox value="05" label="New Inductions" color="text-blue-600" bg="bg-blue-50" />
                        <MetricBox value="03" label="Retirements" color="text-amber-600" bg="bg-amber-50" />
                        <MetricBox value="92%" label="Attendance Rate" color="text-purple-600" bg="bg-purple-50" />
                    </div>
                </ReportSectionCard>

                {/* SECTION: MEETINGS CONDUCTED */}
                <ReportSectionCard 
                    title="Meetings Conducted" 
                    icon={<CalendarCheck />} 
                    gradient="from-purple-500 to-fuchsia-500"
                >
                    <div className="space-y-3">
                        <DataRow title="NABD/MTG/2024-47" subtitle="Ordinary Session • 14 Nov 2024" badge="Concluded" badgeColor="bg-purple-100 text-purple-700" />
                        <DataRow title="NABD/MTG/2024-46" subtitle="Special Session • 22 Aug 2024" badge="Concluded" badgeColor="bg-purple-100 text-purple-700" />
                        <DataRow title="NABD/MTG/2024-45" subtitle="Ordinary Session • 10 May 2024" badge="Concluded" badgeColor="bg-purple-100 text-purple-700" />
                        <DataRow title="NABD/MTG/2024-44" subtitle="Ordinary Session • 12 Feb 2024" badge="Concluded" badgeColor="bg-purple-100 text-purple-700" />
                    </div>
                </ReportSectionCard>

                {/* SECTION: KEY POLICY RECOMMENDATIONS */}
                <ReportSectionCard 
                    title="Key Policy Recommendations" 
                    icon={<Lightbulb />} 
                    gradient="from-amber-500 to-orange-500"
                >
                    <div className="space-y-3">
                        <DataRow title="Universal Design in Rural Transit" subtitle="Issued to: Ministry of Road Transport" badge="High Priority" badgeColor="bg-red-100 text-red-700" />
                        <DataRow title="Special Educator Vacancy Fulfillment" subtitle="Issued to: Ministry of Education" badge="Medium Priority" badgeColor="bg-amber-100 text-amber-700" />
                        <DataRow title="Digital Accessibility Audit" subtitle="Issued to: All Central Ministries" badge="Routine" badgeColor="bg-indigo-100 text-indigo-700" />
                    </div>
                </ReportSectionCard>

                {/* SECTION: FOLLOW-UP STATUS */}
                <ReportSectionCard 
                    title="Follow-up Status" 
                    icon={<Target />} 
                    gradient="from-blue-500 to-cyan-500"
                >
                    <div className="flex flex-col h-full justify-center space-y-6">
                        <div className="space-y-2">
                            <div className="flex justify-between items-end">
                                <span className="text-xs font-black uppercase tracking-widest text-slate-700">Closed / Resolved Actions</span>
                                <span className="text-2xl font-black text-blue-600 leading-none">62</span>
                            </div>
                            <Progress value={78} className="h-3 bg-slate-100 [&>div]:bg-blue-500" />
                        </div>
                        <div className="space-y-2">
                            <div className="flex justify-between items-end">
                                <span className="text-xs font-black uppercase tracking-widest text-slate-700">Open / Pending Actions</span>
                                <span className="text-2xl font-black text-amber-500 leading-none">18</span>
                            </div>
                            <Progress value={22} className="h-3 bg-slate-100 [&>div]:bg-amber-400" />
                        </div>
                    </div>
                </ReportSectionCard>

                {/* SECTION: EMERGING ISSUES */}
                <ReportSectionCard 
                    title="Emerging Issues" 
                    icon={<AlertTriangle />} 
                    gradient="from-orange-500 to-red-500"
                >
                    <textarea 
                        rows={6} 
                        placeholder="Detail future focus areas, unaddressed gaps, or anticipated challenges requiring Board attention in the next fiscal year..." 
                        className="w-full h-full border-2 border-slate-100 bg-slate-50 rounded-2xl p-4 text-sm font-bold text-slate-700 focus:outline-none focus:border-orange-400 focus:bg-white transition-all shadow-inner resize-none leading-relaxed" 
                    />
                </ReportSectionCard>

            </div>

            {/* ANNEXURES STRIP */}
            <Card className="rounded-[32px] border-2 border-emerald-100 bg-emerald-50 overflow-hidden shadow-sm">
                <div className="p-6 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-4">
                        <div className="h-12 w-12 rounded-2xl bg-white flex items-center justify-center shadow-sm">
                            <Database size={24} className="text-emerald-500" />
                        </div>
                        <div>
                            <h3 className="text-sm font-black text-emerald-900 uppercase tracking-widest">Annexures (Auto-generated Tables)</h3>
                            <p className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest mt-1">Raw datasets appended to the final PDF</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <Badge className="bg-white text-emerald-700 border-none text-[10px] font-black uppercase tracking-widest px-4 py-2 shadow-sm flex items-center gap-2">
                            <CheckCircle2 size={14} /> Full Roster Synced
                        </Badge>
                        <Badge className="bg-white text-emerald-700 border-none text-[10px] font-black uppercase tracking-widest px-4 py-2 shadow-sm flex items-center gap-2">
                            <CheckCircle2 size={14} /> MoM Ledger Synced
                        </Badge>
                    </div>
                </div>
            </Card>

        </div>
    );
}

/* UI SUB-COMPONENTS */

function ReportSectionCard({ title, icon, gradient, children }: any) {
    return (
        <Card className="rounded-[32px] border-2 border-slate-100 shadow-lg bg-white overflow-hidden flex flex-col h-full group hover:shadow-xl transition-all duration-300">
            {/* Vibrant Label Gradient Header */}
            <div className={`p-5 bg-gradient-to-r ${gradient} text-white relative overflow-hidden flex items-center gap-3 border-b-2 border-white/20`}>
                <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] bg-fixed" />
                <div className="relative z-10 bg-white/20 p-2 rounded-xl backdrop-blur-sm border border-white/30">
                    {React.cloneElement(icon, { size: 18, className: "text-white" })}
                </div>
                <CardTitle className="relative z-10 text-[11px] font-black uppercase tracking-[0.2em] drop-shadow-sm">
                    {title}
                </CardTitle>
            </div>
            <CardContent className="p-6 flex-1 relative bg-[url('https://www.transparenttextures.com/patterns/topography.png')]">
                <div className="absolute inset-0 opacity-[0.02] pointer-events-none" />
                <div className="relative z-10 h-full">
                    {children}
                </div>
            </CardContent>
        </Card>
    );
}

function MetricBox({ value, label, color, bg }: any) {
    return (
        <div className={`p-4 rounded-2xl border border-slate-100 flex flex-col items-center justify-center text-center space-y-1 ${bg}`}>
            <span className={`text-3xl font-black tracking-tighter ${color}`}>{value}</span>
            <span className="text-[9px] font-black uppercase tracking-widest text-slate-500">{label}</span>
        </div>
    );
}

function DataRow({ title, subtitle, badge, badgeColor }: any) {
    return (
        <div className="flex justify-between items-center p-3 rounded-xl bg-white border border-slate-100 shadow-sm hover:border-slate-300 transition-colors">
            <div className="flex flex-col">
                <span className="text-xs font-black text-slate-800">{title}</span>
                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">{subtitle}</span>
            </div>
            <Badge className={`border-none text-[8px] font-black uppercase tracking-widest px-2 py-1 ${badgeColor}`}>
                {badge}
            </Badge>
        </div>
    );
}