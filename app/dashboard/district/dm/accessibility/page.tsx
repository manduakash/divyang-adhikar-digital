// app/dashboard/district/accessibility/page.tsx
"use client";
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
    Table, TableBody, TableCell, TableHead, TableHeader, TableRow
} from "@/components/ui/table";
import {
    Accessibility, Globe, Building2, CheckCircle2,
    XCircle, Search, Filter, Eye, Gavel,
    ArrowUpRight, AlertTriangle, ShieldCheck, Download
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
    DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";

export default function AccessibilityCompliancePage() {
    return (
        <div className="space-y-8 animate-in fade-in duration-700 pb-20">

            {/* 1. COMPLIANCE SUMMARY HEADER */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 bg-white p-8 rounded-[40px] border border-slate-200 shadow-sm">
                <div className="flex items-center gap-6">
                    <div className="h-16 w-16 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-xl">
                        <Accessibility size={32} />
                    </div>
                    <div>
                        <h1 className="text-3xl font-black text-slate-900 tracking-tight uppercase">Accessibility Compliance Hub</h1>
                        <p className="text-slate-500 font-medium">Statutory Oversight of Section 44, 45 & 46 (PwD Act, 2016).</p>
                    </div>
                </div>
                <div className="flex gap-4">
                    <StatBox label="Compliant" count="342" color="text-green-600" />
                    <StatBox label="Partial" count="108" color="text-orange-500" />
                    <StatBox label="Non-Compliant" count="32" color="text-red-600" />
                </div>
            </div>

            {/* 2. REGISTRY TABLE (Section 5.4 Format) */}
            <Card className="rounded-[40px] border-slate-200 shadow-sm overflow-hidden bg-white">
                <CardHeader className="p-8 border-b border-slate-50 flex flex-row justify-between items-center bg-slate-50/30">
                    <div className="flex items-center gap-4">
                        <CardTitle className="text-xs font-black uppercase tracking-[0.2em] text-slate-400">Statutory Compliance Registry</CardTitle>
                        <div className="h-4 w-[1px] bg-slate-200" />
                        <Badge className="bg-blue-50 text-blue-700 font-black text-[9px] uppercase">Lucknow District</Badge>
                    </div>
                    <div className="flex gap-3">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-300" />
                            <input className="pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-xs font-bold outline-none w-64 focus:ring-1 focus:ring-blue-500" placeholder="Search Establishments..." />
                        </div>
                        <Button variant="outline" className="rounded-xl border-slate-200 font-bold text-xs"><Filter size={14} className="mr-2" /> Filter</Button>
                    </div>
                </CardHeader>
                <CardContent className="p-0">
                    <Table>
                        <TableHeader className="bg-white">
                            <TableRow className="border-slate-100">
                                <TableHead className="px-8 py-5 text-[9px] font-black uppercase tracking-[0.2em] text-slate-400">Establishment Name</TableHead>
                                <TableHead className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400">Physical Access (6.1A)</TableHead>
                                <TableHead className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400">Digital Access (6.1B)</TableHead>
                                <TableHead className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 text-center">Last Inspection</TableHead>
                                <TableHead className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400">Status</TableHead>
                                <TableHead className="text-right px-8 text-[9px] font-black uppercase tracking-[0.2em] text-slate-400">Statutory Action</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody className="divide-y divide-slate-50">

                            <ComplianceRow
                                name="Regional Transport Office (RTO)"
                                physical="Compliant"
                                digital="Compliant"
                                lastDate="12 Oct 2024"
                                status="Compliant"
                            />

                            <ComplianceRow
                                name="Lucknow District Library"
                                physical="Partial"
                                digital="Non-Compliant"
                                lastDate="05 Oct 2024"
                                status="Under Review"
                            />

                            <ComplianceRow
                                name="City Medical Hub (Pvt)"
                                physical="Non-Compliant"
                                digital="Compliant"
                                lastDate="28 Sep 2024"
                                status="Action Required"
                                alert
                            />

                            <ComplianceRow
                                name="Nagar Nigam Main Office"
                                physical="Compliant"
                                digital="Partial"
                                lastDate="18 Oct 2024"
                                status="Compliant"
                            />

                        </TableBody>
                    </Table>
                </CardContent>
            </Card>

            {/* 3. ENFORCEMENT CALLOUT */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="rounded-[40px] border-none bg-slate-900 text-white p-10 shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-8 opacity-10"><ShieldCheck size={120} /></div>
                    <div className="relative z-10 space-y-6">
                        <h3 className="text-2xl font-black tracking-tight uppercase">Bulk Approval Cycle</h3>
                        <p className="text-slate-400 font-medium leading-relaxed max-w-md">
                            Approve compliance for all establishments that have submitted verified Physical and Digital audit reports for Q3.
                        </p>
                        <Button className="bg-blue-600 hover:bg-blue-700 text-white font-black uppercase tracking-widest text-[10px] h-14 px-10 rounded-2xl shadow-xl shadow-blue-500/20">
                            Approve 12 Pending Reviews
                        </Button>
                    </div>
                </Card>

                <Card className="rounded-[40px] border-slate-200 bg-white p-10 shadow-sm border-dashed border-2 flex flex-col justify-center text-center">
                    <AlertTriangle className="text-red-500 mx-auto mb-4" size={40} />
                    <h3 className="text-xl font-black text-slate-900 uppercase">Non-Compliance Escalation</h3>
                    <p className="text-slate-500 font-medium text-sm mt-2 mb-8">
                        32 Establishments have failed repeat inspections. Issue show-cause notices or refer to the Special Public Prosecutor.
                    </p>
                    <div className="flex gap-4 justify-center">
                        <Button variant="outline" className="rounded-xl font-bold">Download Default List</Button>
                        <Button variant="destructive" className="rounded-xl font-black uppercase tracking-widest text-[10px] px-8">Issue Bulk Directions</Button>
                    </div>
                </Card>
            </div>
        </div>
    );
}

/* UI HELPER COMPONENTS */

function ComplianceRow({ name, physical, digital, lastDate, status, alert }: any) {
    const getStatusStyle = (s: string) => {
        if (s === 'Compliant') return 'bg-green-100 text-green-700';
        if (s === 'Partial' || s === 'Under Review') return 'bg-orange-100 text-orange-700';
        return 'bg-red-100 text-red-700';
    };

    return (
        <TableRow className="border-none hover:bg-slate-50/80 group transition-all">
            <TableCell className="px-8 py-6">
                <div className="flex items-center gap-3">
                    <Building2 className="text-slate-300" size={18} />
                    <span className="text-sm font-black text-slate-800 uppercase tracking-tighter">{name}</span>
                </div>
            </TableCell>
            <TableCell>
                <div className="flex items-center gap-2">
                    <div className={`h-1.5 w-1.5 rounded-full ${physical === 'Compliant' ? 'bg-green-500' : 'bg-red-500'}`} />
                    <span className="text-xs font-bold text-slate-600">{physical}</span>
                </div>
            </TableCell>
            <TableCell>
                <div className="flex items-center gap-2">
                    <Globe className={`text-slate-300 ${digital === 'Compliant' ? 'text-blue-500' : ''}`} size={14} />
                    <span className="text-xs font-bold text-slate-600">{digital}</span>
                </div>
            </TableCell>
            <TableCell className="text-center">
                <span className="text-xs font-bold text-slate-400 font-mono">{lastDate}</span>
            </TableCell>
            <TableCell>
                <Badge className={`rounded-full px-3 py-1 text-[9px] font-black uppercase border-none shadow-none ${getStatusStyle(status)}`}>
                    {status}
                </Badge>
            </TableCell>
            <TableCell className="text-right px-8">
                <div className="flex justify-end gap-2">

                    {/* <button title="Approve Compliance" className="p-2.5 bg-green-50 text-green-600 rounded-xl hover:bg-green-600 hover:text-white transition-all shadow-sm">
                        <CheckCircle2 size={18} />
                    </button>
                    
                    <button title="Reject & Issue Direction" className="p-2.5 bg-red-50 text-red-600 rounded-xl hover:bg-red-600 hover:text-white transition-all shadow-sm">
                        <XCircle size={18} />
                    </button> */}
                    {/* VIEW DETAILS */}
                    <button title="View Audit Evidence" className="p-2.5 bg-slate-50 text-slate-400 rounded-xl hover:bg-slate-900 hover:text-white transition-all shadow-sm">
                        <Eye size={18} />
                    </button>
                </div>
            </TableCell>
        </TableRow>
    )
}

function StatBox({ label, count, color }: any) {
    return (
        <div className="text-center px-4 border-r last:border-0 border-slate-100">
            <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">{label}</p>
            <p className={`text-2xl font-black ${color}`}>{count}</p>
        </div>
    )
}