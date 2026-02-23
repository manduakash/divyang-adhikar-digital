// components/dashboard/TrackApplicationStatus.tsx
"use client";
import React from 'react';
import {
    Search, Filter, Calendar, Hospital,
    Gavel, MapPin, ChevronRight, Download,
    Clock, CheckCircle2, AlertCircle, RefreshCw,
    FileText, MessageSquare, Construction
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    Table, TableBody, TableCell, TableHead, TableHeader, TableRow
} from "@/components/ui/table";

// Mock Data representing Section 8 requirements
const mockApplications = [
    {
        id: "DAEGS/CERT/2024/001",
        type: "Certificate",
        submissionDate: "2024-10-12",
        lastUpdated: "2024-10-15",
        status: "Under Review",
        authority: "District Medical Board, Lucknow",
        priority: "Standard"
    },
    {
        id: "DAEGS/GRV/2024/882",
        type: "Grievance",
        submissionDate: "2024-10-05",
        lastUpdated: "2024-10-14",
        status: "Action Taken",
        authority: "Establishment GRO (Nagar Nigam)",
        priority: "High"
    },
    {
        id: "DAEGS/ACC/2024/119",
        type: "Accessibility",
        submissionDate: "2024-09-28",
        lastUpdated: "2024-10-10",
        status: "Compliance Pending",
        authority: "District Administration (PWD Wing)",
        priority: "Critical"
    },
    {
        id: "DAEGS/CERT/2024/042",
        type: "Certificate",
        submissionDate: "2024-09-15",
        lastUpdated: "2024-09-30",
        status: "Closed",
        authority: "CMO Office",
        priority: "Completed"
    },
    {
        id: "DAEGS/GRV/2024/901",
        type: "Grievance",
        submissionDate: "2024-10-15",
        lastUpdated: "2024-10-15",
        status: "Submitted",
        authority: "District Grievance Redressal Officer",
        priority: "New"
    }
];

export default function TrackApplicationStatus() {
    return (
        <div className="space-y-6 animate-in fade-in duration-700">

            {/* HEADER & FILTERS */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 bg-white p-8 rounded-[32px] border border-slate-200 shadow-sm">
                <div className="space-y-1">
                    <h1 className="text-3xl font-black text-slate-900 tracking-tight">Track Applications</h1>
                    <p className="text-slate-500 font-medium">Unified tracking for Certificates, Grievances, and Accessibility reports.</p>
                </div>

                <div className="flex gap-3 w-full md:w-auto">
                    <div className="relative flex-1 md:w-80">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                        <input
                            className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border-2 rounded-xl text-sm font-medium focus:ring-2 focus:ring-blue-500 transition-all outline-none"
                            placeholder="Search by ID or Authority..."
                        />
                    </div>
                    <Button variant="outline" className="rounded-xl border-slate-200 font-bold px-5">
                        <Filter className="w-4 h-4 mr-2 text-slate-400" /> Filter
                    </Button>
                </div>
            </div>

            {/* UNIFIED LIST TABLE */}
            <Card className="border-slate-200 rounded-[32px] shadow-sm overflow-hidden bg-white">
                <Table>
                    <TableHeader className="bg-slate-50/50">
                        <TableRow className="border-slate-100 hover:bg-transparent">
                            <TableHead className="w-[200px] py-6 px-8 text-[10px] font-black uppercase text-slate-400 tracking-[0.2em]">Application ID</TableHead>
                            <TableHead className="text-[10px] font-black uppercase text-slate-400 tracking-[0.2em]">Category</TableHead>
                            <TableHead className="text-[10px] font-black uppercase text-slate-400 tracking-[0.2em]">Submission Date</TableHead>
                            <TableHead className="text-[10px] font-black uppercase text-slate-400 tracking-[0.2em]">Current Status</TableHead>
                            <TableHead className="text-[10px] font-black uppercase text-slate-400 tracking-[0.2em]">Authority Handling</TableHead>
                            <TableHead className="text-[10px] font-black uppercase text-slate-400 tracking-[0.2em]">Last Updated</TableHead>
                            <TableHead className="text-right px-8"></TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {mockApplications.map((app) => (
                            <TableRow key={app.id} className="group border-slate-50 hover:bg-slate-50/50 transition-colors">
                                <TableCell className="px-8 py-5">
                                    <span className="text-xs font-mono font-black text-blue-600 bg-blue-50 px-2 py-1 rounded-md">
                                        {app.id}
                                    </span>
                                </TableCell>
                                <TableCell>
                                    <div className="flex items-center gap-2">
                                        <TypeIcon type={app.type} />
                                        <span className="text-sm font-bold text-slate-700">{app.type}</span>
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <div className="flex items-center gap-2 text-slate-500">
                                        <Calendar size={14} className="opacity-40" />
                                        <span className="text-xs font-bold">{app.submissionDate}</span>
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <StatusBadge status={app.status} />
                                </TableCell>
                                <TableCell>
                                    <div className="flex items-center gap-2">
                                        <AuthorityIcon type={app.type} />
                                        <span className="text-xs font-bold text-slate-600 truncate max-w-[180px]">{app.authority}</span>
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <span className="text-xs font-medium text-slate-400">{app.lastUpdated}</span>
                                </TableCell>
                                <TableCell className="px-8 text-right">
                                    <button className="p-2 hover:bg-white hover:shadow-md rounded-lg transition-all text-slate-400 hover:text-blue-600">
                                        <ChevronRight size={18} />
                                    </button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Card>

            {/* FOOTER LEGEND / HELP */}
            <div className="flex flex-col md:flex-row gap-6">
                <Card className="flex-1 rounded-[32px] border-2 bg-slate-900 p-8 text-white shadow-xl">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="p-3 bg-white/10 rounded-2xl"><RefreshCw className="text-blue-400" size={20} /></div>
                        <h3 className="text-lg font-bold">Real-time Synchronization</h3>
                    </div>
                    <p className="text-slate-400 text-sm leading-relaxed">
                        This tracking module is synchronized with District and State level dashboards. Any update made by the Certifying Authority or GRO is visible here instantly.
                    </p>
                </Card>

                <Card className="md:w-1/3 rounded-[32px] border-slate-200 p-8 bg-white shadow-sm flex flex-col justify-center">
                    <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4 text-center">Need Assistance?</h4>
                    <Button variant="outline" className="w-full rounded-xl h-12 border-slate-200 font-bold hover:bg-slate-50">
                        Contact Support Desk
                    </Button>
                </Card>
            </div>
        </div>
    );
}

/* UI HELPER COMPONENTS */

function StatusBadge({ status }: { status: string }) {
    const variants: Record<string, string> = {
        "Submitted": "bg-blue-100 text-blue-700 border-blue-200",
        "Under Review": "bg-orange-100 text-orange-700 border-orange-200",
        "Action Taken": "bg-purple-100 text-purple-700 border-purple-200",
        "Compliance Pending": "bg-red-100 text-red-700 border-red-200",
        "Closed": "bg-green-100 text-green-700 border-green-200",
    };

    return (
        <Badge className={`rounded-full px-4 py-1 text-[10px] font-black uppercase tracking-widest border shadow-none ${variants[status] || "bg-slate-100 text-slate-600"}`}>
            {status}
        </Badge>
    );
}

function TypeIcon({ type }: { type: string }) {
    if (type === 'Certificate') return <FileText size={16} className="text-blue-500" />;
    if (type === 'Grievance') return <MessageSquare size={16} className="text-purple-500" />;
    if (type === 'Accessibility') return <Construction size={16} className="text-orange-500" />;
    return null;
}

function AuthorityIcon({ type }: { type: string }) {
    if (type === 'Certificate') return <Hospital size={14} className="text-slate-300" />;
    if (type === 'Grievance') return <Gavel size={14} className="text-slate-300" />;
    if (type === 'Accessibility') return <MapPin size={14} className="text-slate-300" />;
    return null;
}