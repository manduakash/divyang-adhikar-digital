// app/dashboard/ndma/reports/annual-report/page.tsx
"use client";
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
    FileBarChart, DownloadCloud, Printer, Sparkles,
    Globe, ShieldAlert, Tent, RadioTower,
    Activity, History, AlertTriangle, FileText,
    CheckCircle2, RefreshCw, Database
} from "lucide-react";

export default function AnnualPreparednessReportPage() {
    const [isGenerating, setIsGenerating] = useState(false);
    const [gapText, setGapText] = useState("");

    const handleAIAssist = () => {
        setIsGenerating(true);
        setTimeout(() => {
            setGapText("1. Early Warning Dissemination: Despite a 92% national coverage rate, SMS and IVR alerts failed to reach deep-rural hearing-impaired populations during the Assam floods.\n\n2. Evacuation Transport: Coastal states show adequate readiness, but northern plains lack sufficient accessible boat transport for swift flood evacuation.\n\n3. Shelter Accessibility: Power backup for critical medical/assistive devices remains a major point of failure in over 30% of designated rural relief camps.\n\nRecommendation: Mandate solar battery backups in all new shelter construction guidelines and initiate dedicated localized sign-language warning broadcasts via DDMA networks.");
            setIsGenerating(false);
        }, 1500);
    };

    return (
        <div className="space-y-8 animate-in fade-in duration-1000 pb-20 font-sans selection:bg-orange-100">

            {/* PAGE HEADER */}
            <div className="flex flex-col xl:flex-row justify-between items-start xl:items-end gap-6 relative">
                <div className="space-y-2">
                    <div className="inline-flex items-center gap-2 bg-orange-50 text-orange-700 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border-2 border-orange-200 shadow-sm">
                        <FileBarChart size={14} /> Apex Statutory Output
                    </div>
                    <h1 className="text-5xl font-black text-slate-800 tracking-tighter uppercase leading-none">Annual NDMA PwD Report</h1>
                    <p className="text-slate-500 font-medium text-lg italic underline underline-offset-8 decoration-orange-200">
                        Comprehensive year-end compilation of national disaster risks and state readiness.
                    </p>
                </div>
                <div className="flex gap-4">
                    <Button variant="outline" className="h-14 px-8 rounded-full border-2 border-orange-200 text-orange-700 font-black uppercase tracking-widest text-[10px] bg-white shadow-xl hover:bg-orange-50 transition-all">
                        <Printer size={16} className="mr-2" /> Print Draft
                    </Button>
                    <Button className="h-14 px-8 rounded-full bg-gradient-to-r from-orange-500 via-amber-500 to-red-500 text-white font-black uppercase tracking-widest text-[10px] shadow-xl hover:shadow-[0_0_20px_theme(colors.orange.400)] transition-all gap-2 group border-none">
                        <DownloadCloud size={16} /> Finalise & Export PDF
                    </Button>
                </div>
            </div>

            {/* REPORT METADATA BANNER (Vibrant Gradient, No Dark Colors) */}
            <Card className="rounded-[40px] border-none shadow-2xl overflow-hidden relative">
                <div className="p-10 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white relative overflow-hidden flex flex-col md:flex-row justify-between items-center gap-8">
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
                                National Disaster Management Authority (PwD Cell)
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
                            <span>92%</span>
                        </div>
                        <Progress value={92} className="h-2 bg-white/20 [&>div]:bg-white" />
                    </div>
                </div>
            </Card>

            {/* REPORT SECTIONS GRID */}
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">

                {/* SECTION: NATIONAL RISK PROFILE */}
                <ReportSectionCard 
                    title="National Risk Profile (PwD)" 
                    icon={<Globe />} 
                    gradient="from-rose-500 to-red-600"
                >
                    <div className="grid grid-cols-2 gap-4 h-full">
                        <MetricBox value="4.2M" label="PwDs in Risk Zones" color="text-red-600" bg="bg-red-50" />
                        <MetricBox value="112" label="High-Risk Districts" color="text-orange-600" bg="bg-orange-50" />
                        <MetricBox value="65%" label="Coastal Vulnerability" color="text-blue-600" bg="bg-blue-50" />
                        <MetricBox value="35%" label="Flood Plain Vulnerability" color="text-cyan-600" bg="bg-cyan-50" />
                    </div>
                </ReportSectionCard>

                {/* SECTION: STATE-WISE PREPAREDNESS */}
                <ReportSectionCard 
                    title="State-wise Preparedness Summary" 
                    icon={<ShieldAlert />} 
                    gradient="from-blue-500 to-indigo-600"
                >
                    <div className="space-y-3">
                        <DataRow title="Top Performers" subtitle="Odisha (94%), Gujarat (91%), TN (88%)" badge="Adequate" badgeColor="bg-emerald-100 text-emerald-700" />
                        <DataRow title="Moderate Readiness" subtitle="Maharashtra (78%), AP (75%)" badge="Partial" badgeColor="bg-amber-100 text-amber-700" />
                        <DataRow title="Deficient States" subtitle="Assam (42%), Bihar (45%)" badge="Critical" badgeColor="bg-red-100 text-red-700" />
                    </div>
                </ReportSectionCard>

                {/* SECTION: SHELTER & EVACUATION READINESS */}
                <ReportSectionCard 
                    title="Shelter & Evacuation Logistics" 
                    icon={<Tent />} 
                    gradient="from-emerald-500 to-teal-600"
                >
                    <div className="flex flex-col h-full justify-center space-y-6">
                        <div className="space-y-2">
                            <div className="flex justify-between items-end">
                                <span className="text-xs font-black uppercase tracking-widest text-slate-700">Accessible Shelters (National)</span>
                                <span className="text-2xl font-black text-emerald-600 leading-none">12,450</span>
                            </div>
                            <Progress value={85} className="h-3 bg-slate-100 [&>div]:bg-emerald-500" />
                        </div>
                        <div className="space-y-2">
                            <div className="flex justify-between items-end">
                                <span className="text-xs font-black uppercase tracking-widest text-slate-700">Transport Fleet Readiness</span>
                                <span className="text-2xl font-black text-teal-600 leading-none">84%</span>
                            </div>
                            <Progress value={84} className="h-3 bg-slate-100 [&>div]:bg-teal-500" />
                        </div>
                    </div>
                </ReportSectionCard>

                {/* SECTION: EARLY WARNING SYSTEMS */}
                <ReportSectionCard 
                    title="Early Warning Dissemination" 
                    icon={<RadioTower />} 
                    gradient="from-purple-500 to-fuchsia-600"
                >
                    <div className="grid grid-cols-2 gap-4 h-full">
                        <MetricBox value="92%" label="Overall Coverage Rate" color="text-purple-600" bg="bg-purple-50" />
                        <MetricBox value="1.8M" label="SMS Alerts Sent" color="text-fuchsia-600" bg="bg-fuchsia-50" />
                        <div className="col-span-2 p-4 bg-orange-50 border border-orange-200 rounded-2xl flex items-start gap-3">
                            <AlertTriangle size={16} className="text-orange-600 mt-0.5 shrink-0" />
                            <p className="text-[10px] font-black uppercase tracking-widest text-orange-800 leading-relaxed">
                                Gap: 8% of mapped PwDs (mostly hearing impaired in rural belts) remain unreached by standard IVR/SMS protocols.
                            </p>
                        </div>
                    </div>
                </ReportSectionCard>

                {/* SECTION: POST-DISASTER LEARNINGS */}
                <ReportSectionCard 
                    title="Post-Disaster Learnings (Event Audits)" 
                    icon={<History />} 
                    gradient="from-amber-500 to-orange-600"
                >
                    <div className="space-y-3">
                        <DataRow title="Cyclone Remal (May '24)" subtitle="Evac: 95% • Issue: Power backup failures in shelters" badge="Reviewed" badgeColor="bg-slate-100 text-slate-600" />
                        <DataRow title="Assam Floods (Jul '24)" subtitle="Evac: 65% • Issue: Severe accessible boat shortage" badge="Critical Audit" badgeColor="bg-red-100 text-red-700" />
                        <DataRow title="Northern Heatwave (Jun '24)" subtitle="Evac: N/A • Issue: Lack of specialized cooling centers" badge="Reviewed" badgeColor="bg-slate-100 text-slate-600" />
                    </div>
                </ReportSectionCard>

                {/* SECTION: GAPS & RECOMMENDATIONS (AI Assisted) */}
                <ReportSectionCard 
                    title="Key Gaps & Policy Recommendations" 
                    icon={<Activity />} 
                    gradient="from-cyan-500 to-blue-600"
                >
                    <div className="space-y-4 h-full flex flex-col">
                        <div className="flex justify-between items-center bg-cyan-50 p-3 rounded-xl border border-cyan-100">
                            <span className="text-[10px] font-black uppercase tracking-widest text-cyan-800">Analytical Synthesis</span>
                            <Button 
                                onClick={handleAIAssist}
                                disabled={isGenerating}
                                variant="outline" 
                                className="h-8 rounded-lg border-cyan-200 text-cyan-700 font-black uppercase tracking-widest text-[9px] hover:bg-cyan-100 transition-all gap-2 bg-white"
                            >
                                {isGenerating ? <RefreshCw size={12} className="animate-spin" /> : <Sparkles size={12} />}
                                AI Generate
                            </Button>
                        </div>
                        <textarea 
                            value={gapText}
                            onChange={(e) => setGapText(e.target.value)}
                            placeholder="Draft final policy recommendations based on the aggregated data and post-disaster audits..." 
                            className="w-full flex-1 border-2 border-slate-100 bg-white rounded-2xl p-4 text-xs font-bold text-slate-700 focus:outline-none focus:border-cyan-400 transition-all shadow-inner resize-none leading-relaxed" 
                        />
                    </div>
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
                    <div className="flex flex-wrap gap-4">
                        <Badge className="bg-white text-emerald-700 border-none text-[10px] font-black uppercase tracking-widest px-4 py-2 shadow-sm flex items-center gap-2">
                            <CheckCircle2 size={14} /> State Matrix Synced
                        </Badge>
                        <Badge className="bg-white text-emerald-700 border-none text-[10px] font-black uppercase tracking-widest px-4 py-2 shadow-sm flex items-center gap-2">
                            <CheckCircle2 size={14} /> Shelter Logs Synced
                        </Badge>
                        <Badge className="bg-white text-emerald-700 border-none text-[10px] font-black uppercase tracking-widest px-4 py-2 shadow-sm flex items-center gap-2">
                            <CheckCircle2 size={14} /> Advisories Linked
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
                <div className="relative z-10 bg-white/20 p-2 rounded-xl backdrop-blur-sm border border-white/30 shadow-inner">
                    {React.cloneElement(icon, { size: 18, className: "text-white drop-shadow-md" })}
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
        <div className={`p-4 rounded-2xl border border-slate-100 flex flex-col items-center justify-center text-center space-y-1 shadow-inner ${bg}`}>
            <span className={`text-3xl font-black tracking-tighter drop-shadow-sm ${color}`}>{value}</span>
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
            <Badge className={`border-none text-[8px] font-black uppercase tracking-widest px-2 py-1 shadow-sm ${badgeColor}`}>
                {badge}
            </Badge>
        </div>
    );
}