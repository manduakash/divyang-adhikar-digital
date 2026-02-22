// app/dashboard/pwd/inclusion-issues/page.tsx
"use client";
import React, { useState } from 'react';
import {
    GraduationCap,
    Briefcase,
    Plus,
    Search,
    Building2,
    FileText,
    Upload,
    ChevronRight,
    AlertCircle,
    Clock,
    CheckCircle2,
    XCircle,
    Gavel
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

type IssueTab = 'EDUCATION' | 'EMPLOYMENT';

export default function InclusionIssuesPage() {
    const [activeTab, setActiveTab] = useState<IssueTab>('EMPLOYMENT');
    const [showForm, setShowForm] = useState(false);

    // Mock Data for Section 9
    const issues = [
        {
            id: "EDU/8821",
            target: "National Institute of Technology",
            nature: "Denial of Reasonable Accommodation",
            date: "Oct 10, 2024",
            status: "Under Review",
            type: "EDUCATION"
        },
        {
            id: "EMP/4401",
            target: "Global Tech Solutions Pvt Ltd",
            nature: "Discrimination in Promotion",
            date: "Sep 22, 2024",
            status: "Action Taken",
            type: "EMPLOYMENT"
        }
    ];

    const filteredIssues = issues.filter(i => i.type === activeTab);

    return (
        <div className="max-w-6xl mx-auto space-y-8 animate-in fade-in duration-700">

            {/* 1. HEADER SECTION */}
            <div className="flex flex-col md:flex-row justify-between items-end gap-6 bg-white p-8 rounded-[32px] border border-slate-200 shadow-sm">
                <div>
                    <h1 className="text-3xl font-black text-slate-900 tracking-tight">Employment Related Issues</h1>
                    <p className="text-slate-500 font-medium">Report institutional barriers in education or discrimination in employment.</p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">

                {/* LEFT COLUMN: FILING FORM */}
                <div className="lg:col-span-1 space-y-6">
                    <Card className="rounded-[32px] border-slate-200 shadow-sm overflow-hidden bg-white">
                        <CardHeader className="bg-slate-50/50 border-b border-slate-100 p-6">
                            <CardTitle className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] flex items-center gap-2">
                                <Plus size={14} className="text-blue-600" /> New {activeTab === 'EDUCATION' ? 'Education' : 'Employment'} Issue
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="p-6 space-y-5">
                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase text-slate-500 ml-1">
                                    {activeTab === 'EDUCATION' ? 'Institution Name' : 'Employer Name'}
                                </label>
                                <div className="relative">
                                    <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                                    <Input className="pl-10 h-11 bg-slate-50 border-none rounded-xl" placeholder="Search or enter name..." />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase text-slate-500 ml-1">Nature of Issue</label>
                                <Select>
                                    <SelectTrigger className="rounded-xl h-11 bg-slate-50 border-none px-4">
                                        <SelectValue placeholder="Select Category" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {activeTab === 'EDUCATION' ? (
                                            <>
                                                <SelectItem value="admission">Denial of Admission</SelectItem>
                                                <SelectItem value="facility">Inaccessible Facility</SelectItem>
                                                <SelectItem value="scribe">No Scribe / Extra Time</SelectItem>
                                            </>
                                        ) : (
                                            <>
                                                <SelectItem value="reservation">Reservation Not Followed</SelectItem>
                                                <SelectItem value="promotion">Discrimination in Promotion</SelectItem>
                                                <SelectItem value="harassment">Workplace Harassment</SelectItem>
                                            </>
                                        )}
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase text-slate-500 ml-1">Description</label>
                                <Textarea className="min-h-[100px] rounded-xl bg-slate-50 border-none p-3 resize-none text-sm" placeholder="Briefly describe the incident..." />
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase text-slate-500 ml-1">Supporting Document</label>
                                <div className="border-2 border-dashed border-slate-100 rounded-xl p-4 flex flex-col items-center justify-center hover:bg-slate-50 transition-all cursor-pointer">
                                    <Upload className="text-slate-300 mb-1" size={20} />
                                    <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Upload Proof</span>
                                </div>
                            </div>

                            <Button className="w-full bg-slate-900 text-white hover:bg-black rounded-xl h-12 font-black uppercase tracking-widest text-[10px]">
                                Submit Issue
                            </Button>
                        </CardContent>
                    </Card>

                    {/* SLA INFO CARD */}
                    <Card className="rounded-[32px] bg-gradient-to-br from-blue-600 to-purple-600 p-6 text-white shadow-xl">
                        <div className="flex items-center gap-3 mb-3">
                            <Gavel size={20} className="text-blue-200" />
                            <h4 className="text-xs font-black uppercase tracking-widest">Statutory Rights</h4>
                        </div>
                        <p className="text-[11px] leading-relaxed opacity-90">
                            Matters related to {activeTab.toLowerCase()} are monitored by the <b>District Education Officer (DEO)</b> and <b>Special Employment Exchange</b> under Sections 16-23 of the Act.
                        </p>
                    </Card>
                </div>

                {/* RIGHT COLUMN: LIST OF APPLIED ISSUES */}
                <div className="lg:col-span-2">
                    <Card className="rounded-[32px] border-slate-200 shadow-sm overflow-hidden bg-white">
                        <CardHeader className="p-6 border-b border-slate-50 flex flex-row justify-between items-center">
                            <CardTitle className="text-sm font-black text-slate-800 uppercase tracking-tight">Active {activeTab.toLowerCase()} Filings</CardTitle>
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-400" />
                                <input className="pl-9 pr-4 py-1.5 bg-slate-50 border-none rounded-lg text-[10px] font-bold outline-none" placeholder="Search Filings..." />
                            </div>
                        </CardHeader>
                        <CardContent className="p-0">
                            <Table>
                                <TableHeader className="bg-slate-50/50">
                                    <TableRow className="border-slate-50">
                                        <TableHead className="px-6 py-4 text-[9px] font-black uppercase text-slate-400 tracking-widest">Issue ID</TableHead>
                                        <TableHead className="text-[9px] font-black uppercase text-slate-400 tracking-widest">{activeTab === 'EDUCATION' ? 'Institution' : 'Employer'}</TableHead>
                                        <TableHead className="text-[9px] font-black uppercase text-slate-400 tracking-widest">Nature</TableHead>
                                        <TableHead className="text-[9px] font-black uppercase text-slate-400 tracking-widest">Status</TableHead>
                                        <TableHead className="text-right px-6"></TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {filteredIssues.length > 0 ? filteredIssues.map((issue) => (
                                        <TableRow key={issue.id} className="border-slate-50 hover:bg-slate-50/50 group">
                                            <TableCell className="px-6 py-4 font-mono text-[10px] font-bold text-blue-600">
                                                {issue.id}
                                            </TableCell>
                                            <TableCell>
                                                <p className="text-xs font-bold text-slate-800">{issue.target}</p>
                                                <p className="text-[9px] text-slate-400 font-medium">{issue.date}</p>
                                            </TableCell>
                                            <TableCell>
                                                <span className="text-[10px] font-bold text-slate-600">{issue.nature}</span>
                                            </TableCell>
                                            <TableCell>
                                                <StatusBadge status={issue.status} />
                                            </TableCell>
                                            <TableCell className="px-6 text-right">
                                                <button className="p-2 rounded-lg hover:bg-white hover:shadow-sm text-slate-400">
                                                    <ChevronRight size={16} />
                                                </button>
                                            </TableCell>
                                        </TableRow>
                                    )) : (
                                        <TableRow>
                                            <TableCell colSpan={5} className="py-20 text-center">
                                                <div className="flex flex-col items-center gap-2 opacity-20">
                                                    <FileText size={48} />
                                                    <p className="text-xs font-black uppercase tracking-widest">No Active Filings</p>
                                                </div>
                                            </TableCell>
                                        </TableRow>
                                    )}
                                </TableBody>
                            </Table>
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

function StatusBadge({ status }: { status: string }) {
    const variants: Record<string, string> = {
        "Submitted": "bg-blue-100 text-blue-700",
        "Under Review": "bg-orange-100 text-orange-700",
        "Action Taken": "bg-green-100 text-green-700",
        "Closed": "bg-slate-100 text-slate-600",
    };

    return (
        <Badge className={`rounded-full px-3 py-0.5 text-[9px] font-black uppercase tracking-tighter border-none shadow-none ${variants[status] || "bg-slate-100 text-slate-600"}`}>
            {status}
        </Badge>
    );
}