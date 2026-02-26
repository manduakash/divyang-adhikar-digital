// app/dashboard/scpd/reports/special-issue/page.tsx
"use client";
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
    Table, TableBody, TableCell, TableHead, TableHeader, TableRow
} from "@/components/ui/table";
import {
    ShieldAlert, Landmark, Globe, Activity,
    MapPin, CheckCircle2, AlertTriangle, Gavel,
    Printer, Download, FileText, Sparkles,
    History, ArrowUpRight, Scale, Users,
    Zap, FileBadge, BadgeCheck, Timer,
    Search, Filter, BookOpen,
    Map
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function SpecialIssueReport() {
    return (
        <div className="max-w-[1200px] mx-auto pb-20 animate-in fade-in duration-1000 font-sans selection:bg-purple-100">

            {/* APEX BRIEFING HEADER */}
            <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-8 bg-white p-12 rounded-[48px] border border-slate-200 shadow-sm relative overflow-hidden mb-12">
                <div className="absolute top-0 right-0 p-10 opacity-[0.03] pointer-events-none text-purple-600">
                    <ShieldAlert size={240} />
                </div>
                <div className="space-y-4 relative z-10">
                    <div className="inline-flex items-center gap-2 bg-red-50 text-red-600 px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.2em] shadow-sm border border-red-100">
                        <ShieldAlert size={14} className="animate-pulse" /> High-Priority Special Report
                    </div>
                    <h1 className="text-6xl font-black text-slate-900 tracking-tighter uppercase leading-[0.9]">
                        Digital Barrier <br /> <span className="text-purple-600">Banking Sector</span>
                    </h1>
                    <p className="text-slate-500 font-medium italic text-xl max-w-2xl">A statutory investigation into the non-compliance of web-accessibility standards across financial nodes.</p>
                </div>
                <div className="flex flex-col gap-4 relative z-10 min-w-[240px]">
                    <Button className="h-16 px-10 rounded-[24px] bg-slate-950 text-white font-black uppercase tracking-widest text-[11px] shadow-2xl hover:bg-black transition-all gap-3">
                        <Printer size={20} /> Print Certified Brief
                    </Button>
                    <Button variant="outline" className="h-12 rounded-xl border-slate-200 font-black text-[9px] uppercase tracking-widest bg-white hover:bg-slate-50 shadow-sm">
                        <Download size={16} className="mr-2 text-blue-600" /> Export Statutory XLS
                    </Button>
                </div>
            </div>

            <div className="space-y-16">

                {/* ISSUE SUMMARY */}
                <IssueModule title="Executive Issue Summary" gradient="from-amber-700 via-amber-500 to-amber-800" icon={<BookOpen />}>
                    <div className="p-10 bg-slate-50 rounded-[40px] border border-slate-100 relative overflow-hidden group hover:bg-white transition-all shadow-inner">
                        <div className="absolute top-0 right-0 p-8 opacity-[0.02] group-hover:scale-110 transition-transform duration-1000"><Sparkles size={120} /></div>
                        <p className="text-lg font-medium text-slate-700 leading-[1.8] italic first-letter:text-5xl first-letter:font-black first-letter:text-purple-600 first-letter:mr-3 first-letter:float-left uppercase tracking-tighter">
                            Statutory audit reveals a critical failure in the implementation of Section 42 (Access to Information and Communication Technology). Out of 482 banking establishments reviewed, 310 have failed to provide WCAG 2.1 compliant digital interfaces, effectively disenfranchising PwD citizens from essential financial services. This report mandates immediate remediation.
                        </p>
                        <div className="mt-8 pt-8 border-t border-slate-200 flex justify-between items-center">
                            <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Authorization Node: SCPD-WB-KOL</p>
                            <BadgeCheck className="text-purple-600" size={32} />
                        </div>
                    </div>
                </IssueModule>

                {/* DISTRICT / ENTITY COVERAGE */}
                <IssueModule title="Regional Default Coverage" gradient="from-purple-600 to-indigo-700" icon={<Map />}>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                        <SummaryStat label="Districts Affected" val="14" />
                        <StatMetric label="Entities Defaulting" val="310" alert />
                        <StatMetric label="Total PwDs Affected" val="124K" />
                        <StatMetric label="State Impact Score" val="8.4/10" alert />
                    </div>
                    <div className="border border-slate-100 rounded-[32px] overflow-hidden bg-white shadow-inner">
                        <Table>
                            <TableHeader className="bg-slate-50">
                                <TableRow className="border-none">
                                    <TableHead className="px-8 py-5 text-[9px] font-black uppercase tracking-widest text-slate-400">District Node</TableHead>
                                    <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400 text-center">Entity Count</TableHead>
                                    <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400 text-center">Inclusion Fail Rate</TableHead>
                                    <TableHead className="text-right px-8 text-[9px] font-black uppercase tracking-widest text-slate-400">Status</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody className="divide-y divide-slate-50">
                                <PlainRow data={['Lucknow Central', '42 Units', '12% Failure', 'STANDBY']} />
                                <PlainRow data={['Meerut Hub', '88 Units', '64% Failure', 'CRITICAL']} alert />
                                <PlainRow data={['Varanasi Sector', '56 Units', '38% Failure', 'ATTENTION']} warning />
                            </TableBody>
                        </Table>
                    </div>
                </IssueModule>

                {/* EVIDENCE & FINDINGS */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <IssueModule title="Statutory Evidence" gradient="from-blue-600 to-indigo-900" icon={<Activity />}>
                        <div className="space-y-6">
                            <EvidenceItem label="WCAG 2.1 AA Audit" status="Failed" alert />
                            <EvidenceItem label="Screen Reader Compatibility" status="Non-Compliant" alert />
                            <EvidenceItem label="Alternative Text Registry" status="40% Compliance" warning />
                            <Button variant="ghost" className="w-full mt-4 text-blue-600 font-black uppercase text-[10px] tracking-widest border border-blue-100 rounded-xl h-12 hover:bg-blue-50">
                                <Download size={14} className="mr-2" /> Download Evidence ZIP
                            </Button>
                        </div>
                    </IssueModule>

                    <IssueModule title="Impact on Rights" gradient="from-rose-600 to-red-800" icon={<Scale />}>
                        <div className="space-y-8">
                            <div className="space-y-2">
                                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Section 42 Violation</p>
                                <p className="text-sm font-bold text-slate-700 leading-relaxed uppercase tracking-tighter">
                                    Non-compliance restricts the right to independent financial management and secure digital transactions.
                                </p>
                            </div>
                            <div className="space-y-2 pt-6 border-t border-slate-50">
                                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Atrocity Trigger (Section 92)</p>
                                <p className="text-sm font-bold text-red-600 leading-relaxed uppercase tracking-tighter">
                                    Systemic neglect of accessibility standards is being reviewed for intentional disenfranchisement.
                                </p>
                            </div>
                        </div>
                    </IssueModule>
                </div>

                {/* RECOMMENDATIONS & ACTIONS SOUGHT */}
                <IssueModule title="Enforcement Directives" gradient="from-emerald-600 to-teal-700" icon={<Gavel />}>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <div className="space-y-8">
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest border-b pb-2">Policy Recommendations</p>
                            <FindingItem text="Immediate adoption of 'Universal Design' across all mobile banking applications." />
                            <FindingItem text="Mandatory appointment of Digital Accessibility Officers at the state-hub level." />
                        </div>
                        <div className="space-y-8">
                            <p className="text-[10px] font-black text-red-400 uppercase tracking-widest border-b pb-2">Time-bound Actions Sought</p>
                            <div className="space-y-4">
                                <ActionNode task="Submit Remediation Plan" due="15 Days" alert />
                                <ActionNode task="Fix Primary Login Node" due="30 Days" />
                                <ActionNode task="Full WCAG AA Compliance" due="90 Days" />
                            </div>
                        </div>
                    </div>
                </IssueModule>

                {/* ANNEXURES */}
                <div className="mt-20 pt-12 border-t border-slate-200">
                    <div className="flex items-center gap-3 mb-10">
                        <History className="text-slate-400" />
                        <h2 className="text-[11px] font-black uppercase tracking-[0.3em] text-slate-400">Briefing Annexures</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <AnnexureCard name="Audit_Logs_Statewide.xls" sub="Digital Proof" />
                        <AnnexureCard name="District_Notice_Registry.pdf" sub="Orders Log" />
                        <AnnexureCard name="Technical_Standard_Manual.pdf" sub="WCAG 2.1 Ref" />
                    </div>
                </div>

            </div>
        </div>
    );
}

/* UI SUB-COMPONENTS */

function IssueModule({ title, gradient, icon, children }: any) {
    return (
        <Card className="rounded-[44px] border-slate-200 bg-white shadow-sm overflow-hidden group">
            <CardHeader className={`p-8 bg-gradient-to-r ${gradient} text-white relative overflow-hidden`}>
                {/* CARBON FIBRE TEXTURE */}
                <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
                <div className="flex items-center gap-4 relative z-10">
                    <div className="h-10 w-10 rounded-2xl bg-white/20 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        {icon}
                    </div>
                    <CardTitle className="text-[11px] font-black uppercase tracking-[0.3em] leading-none">{title}</CardTitle>
                </div>
            </CardHeader>
            <CardContent className="p-10 relative overflow-hidden">
                <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/topography.png')]" />
                <div className="relative z-10">
                    {children}
                </div>
            </CardContent>
        </Card>
    )
}

function StatMetric({ label, val, alert }: any) {
    return (
        <div className="p-6 bg-slate-50 rounded-[32px] border border-slate-100 text-center space-y-1">
            <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">{label}</p>
            <p className={`text-3xl font-black ${alert ? 'text-red-600 underline decoration-red-100' : 'text-slate-900'} tracking-tighter`}>{val}</p>
        </div>
    )
}

function SummaryStat({ label, val }: any) {
    return (
        <div className="p-6 bg-purple-700 rounded-[32px] text-white text-center space-y-1 shadow-xl shadow-purple-900/20">
            <p className="text-[9px] font-black uppercase tracking-widest opacity-60">{label}</p>
            <p className="text-3xl font-black tracking-tighter">{val}</p>
        </div>
    )
}

function PlainRow({ data, alert, warning }: any) {
    const statusColor = alert ? 'bg-red-500' : warning ? 'bg-orange-500' : 'bg-purple-500';
    return (
        <TableRow className="border-none hover:bg-slate-50 transition-all cursor-default">
            {data.map((d: string, i: number) => (
                <TableCell key={i} className="px-8 py-6">
                    <div className="flex items-center gap-3">
                        {i === 0 && <div className={`h-1.5 w-1.5 rounded-full shrink-0 ${statusColor}`} />}
                        <span className={`text-[11px] font-bold ${i === 0 ? 'text-slate-900' : 'text-slate-600'} ${alert && i === data.length - 1 ? 'text-red-600 underline' : ''} tracking-tight uppercase`}>{d}</span>
                    </div>
                </TableCell>
            ))}
        </TableRow>
    )
}

function EvidenceItem({ label, status, alert, warning }: any) {
    return (
        <div className="flex justify-between items-center group">
            <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest group-hover:text-blue-600 transition-colors">{label}</p>
            <Badge className={`border-none font-black text-[9px] uppercase px-3 py-1 shadow-none ${alert ? 'bg-red-50 text-red-600' : warning ? 'bg-orange-50 text-orange-600' : 'bg-green-50 text-green-600'}`}>
                {status}
            </Badge>
        </div>
    )
}

function FindingItem({ text }: { text: string }) {
    return (
        <div className="flex items-start gap-4 group">
            <div className="h-6 w-6 rounded-lg bg-slate-50 flex items-center justify-center shrink-0 mt-0.5 border border-slate-100 group-hover:bg-indigo-600 transition-all">
                <div className="h-1 w-1 rounded-full bg-slate-300 group-hover:bg-white" />
            </div>
            <p className="text-sm font-black text-slate-800 uppercase tracking-tight leading-relaxed group-hover:text-indigo-600 transition-colors">{text}</p>
        </div>
    )
}

function ActionNode({ task, due, alert }: any) {
    return (
        <div className="flex items-center justify-between p-5 bg-slate-50 rounded-[28px] border border-slate-100 group hover:bg-white hover:shadow-lg transition-all">
            <div className="flex items-center gap-4">
                <div className={`h-10 w-10 rounded-xl flex items-center justify-center ${alert ? 'bg-red-50 text-red-600' : 'bg-white text-slate-400'} shadow-sm transition-all group-hover:scale-110`}>
                    <Timer size={18} />
                </div>
                <p className="text-xs font-black text-slate-900 uppercase tracking-tight">{task}</p>
            </div>
            <span className={`text-[10px] font-mono font-black ${alert ? 'text-red-600 underline' : 'text-slate-400'}`}>{due}</span>
        </div>
    )
}

function AnnexureCard({ name, sub }: any) {
    return (
        <div className="p-6 bg-white rounded-[32px] border border-slate-200 hover:shadow-2xl transition-all cursor-pointer group flex flex-col justify-between h-40">
            <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:text-purple-600 transition-colors shadow-inner"><Download size={20} /></div>
                <div>
                    <p className="text-[10px] font-black text-slate-900 uppercase tracking-tighter truncate max-w-[150px]">{name}</p>
                    <p className="text-[8px] font-bold text-slate-400 uppercase tracking-widest">{sub}</p>
                </div>
            </div>
            <Button variant="ghost" className="w-full text-indigo-600 font-black uppercase text-[9px] tracking-widest hover:bg-indigo-50 rounded-xl">Download Hub</Button>
        </div>
    )
}