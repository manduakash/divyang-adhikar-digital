// app/dashboard/establishment/directions/page.tsx
"use client";
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
    Table, TableBody, TableCell, TableHead, TableHeader, TableRow
} from "@/components/ui/table";
import {
    Gavel, FileText, Clock, AlertCircle, CheckCircle2,
    ArrowUpRight, Download, Upload, Eye, Filter,
    ShieldAlert, Landmark, Building2
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function DirectionsOrdersPage() {
    return (
        <div className="space-y-8 animate-in fade-in duration-700 pb-20">

            {/* 1. STATUTORY SUMMARY HEADER */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 bg-white p-8 rounded-[40px] border border-slate-200 shadow-sm">
                <div className="flex items-center gap-6">
                    <div className="h-16 w-16 bg-slate-900 rounded-2xl flex items-center justify-center text-white shadow-xl">
                        <Gavel size={32} />
                    </div>
                    <div>
                        <h1 className="text-3xl font-black text-slate-900 tracking-tight">Directions & Orders</h1>
                        <p className="text-slate-500 font-medium">Monitoring binding instructions from District, State, and National authorities.</p>
                    </div>
                </div>
                <div className="flex gap-4">
                    <SummaryBadge label="Total" count="12" color="bg-slate-100" />
                    <SummaryBadge label="Pending" count="03" color="bg-blue-50 text-blue-600" />
                    <SummaryBadge label="Overdue" count="01" color="bg-red-50 text-red-600" alert />
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                {/* 2. MAIN REGISTRY (Table Format Section 11.6) */}
                <div className="lg:col-span-2">
                    <Card className="rounded-[40px] border-slate-200 shadow-sm overflow-hidden bg-white">
                        <CardHeader className="p-8 border-b border-slate-50 flex flex-row justify-between items-center bg-slate-50/30">
                            <CardTitle className="text-xs font-black uppercase tracking-[0.2em] text-slate-400">Statutory Order Registry</CardTitle>
                            <div className="flex gap-2">
                                <Button variant="ghost" size="sm" className="h-9 rounded-xl border border-slate-200 font-bold text-[10px] uppercase">
                                    <Filter size={14} className="mr-2" /> Filter
                                </Button>
                            </div>
                        </CardHeader>
                        <CardContent className="p-0">
                            <Table>
                                <TableHeader>
                                    <TableRow className="border-slate-100 bg-white">
                                        <TableHead className="px-8 py-5 text-[9px] font-black uppercase tracking-widest text-slate-400 w-[180px]">Reference No.</TableHead>
                                        <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400">Issuing Authority</TableHead>
                                        <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400">Due Date</TableHead>
                                        <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400">Status</TableHead>
                                        <TableHead className="text-right px-8"></TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    <OrderRow
                                        id="DIR-LKO-2024-001"
                                        authority="District Magistrate"
                                        issued="12 Oct"
                                        due="25 Oct"
                                        status="Complied"
                                    />
                                    <OrderRow
                                        id="ORD-SC-2024-992"
                                        authority="State Commissioner"
                                        issued="15 Oct"
                                        due="30 Oct"
                                        status="Pending"
                                    />
                                    <OrderRow
                                        id="MAND-GOI-4421"
                                        authority="Chief Commissioner"
                                        issued="02 Oct"
                                        due="16 Oct"
                                        status="Overdue"
                                        alert
                                    />
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>
                </div>

                {/* 3. COMPLIANCE SUBMISSION PANEL (Section 10 Button 8 Logic) */}
                <div className="space-y-6">
                    <Card className="rounded-[40px] border-2 bg-slate-900 text-white p-8 shadow-2xl">
                        <div className="flex items-center gap-3 mb-6">
                            <ShieldAlert className="text-blue-400" />
                            <h3 className="text-sm font-black uppercase tracking-widest">Enforcement Notice</h3>
                        </div>
                        <div className="p-5 rounded-3xl bg-white/5 border border-white/10 space-y-4">
                            <div className="flex justify-between items-start">
                                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Current Focus</span>
                                <Badge className="bg-red-500 text-white text-[8px]">Action Required</Badge>
                            </div>
                            <p className="text-sm font-bold leading-relaxed italic">
                                "Provide physical ramp access at Block-A Main Entry as per Section 44(b)."
                            </p>
                            <div className="pt-4 border-t border-white/10">
                                <p className="text-[10px] font-medium text-slate-400 mb-4 tracking-tight">Upload Action Taken Report (ATR) and supporting photographs to close this direction.</p>
                                <Button className="w-full bg-blue-600 hover:bg-blue-700 rounded-2xl h-14 font-black uppercase tracking-widest text-[10px] gap-2">
                                    <Upload size={16} /> Submit Compliance
                                </Button>
                            </div>
                        </div>
                    </Card>

                    <Card className="rounded-[40px] border-slate-200 p-8 bg-white shadow-sm">
                        <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-6">Visibility Linkage</h4>
                        <p className="text-xs font-bold text-slate-600 leading-relaxed">
                            Updates to these orders are shared in real-time with:
                        </p>
                        <div className="mt-4 space-y-3">
                            <VisibilityItem icon={<Landmark size={14} />} label="District Nodal Authority" />
                            <VisibilityItem icon={<Building2 size={14} />} label="State Commissioner's Office" />
                        </div>
                    </Card>
                </div>

            </div>
        </div>
    );
}

/* UI HELPER COMPONENTS */

function OrderRow({ id, authority, issued, due, status, alert }: any) {
    const statusStyles: any = {
        "Complied": "bg-green-100 text-green-700",
        "Pending": "bg-blue-100 text-blue-700",
        "Overdue": "bg-red-100 text-red-700"
    };

    return (
        <TableRow className="border-slate-50 hover:bg-slate-50 group cursor-pointer">
            <TableCell className="px-8 py-6">
                <span className="text-[11px] font-mono font-black text-blue-600 bg-blue-50/50 px-2 py-1 rounded-md">{id}</span>
                <p className="text-[9px] font-bold text-slate-400 uppercase mt-2">Issued: {issued}</p>
            </TableCell>
            <TableCell>
                <div className="flex items-center gap-2">
                    <Landmark size={14} className="text-slate-300" />
                    <span className="text-xs font-bold text-slate-700">{authority}</span>
                </div>
            </TableCell>
            <TableCell>
                <div className="flex items-center gap-2">
                    <Clock size={14} className={alert ? 'text-red-500' : 'text-slate-300'} />
                    <span className={`text-xs font-bold ${alert ? 'text-red-600 underline decoration-red-200 decoration-2' : 'text-slate-600'}`}>{due}</span>
                </div>
            </TableCell>
            <TableCell>
                <span className={`text-[9px] font-black uppercase px-2.5 py-1 rounded-full ${statusStyles[status]}`}>
                    {status}
                </span>
            </TableCell>
            <TableCell className="text-right px-8 opacity-0 group-hover:opacity-100 transition-all">
                <div className="flex justify-end gap-2">
                    <Button variant="ghost" size="icon" className="h-9 w-9 rounded-xl hover:bg-white hover:shadow-md transition-all text-slate-400 hover:text-blue-600"><Eye size={16} /></Button>
                    <Button variant="ghost" size="icon" className="h-9 w-9 rounded-xl hover:bg-white hover:shadow-md transition-all text-slate-400 hover:text-green-600"><Download size={16} /></Button>
                </div>
            </TableCell>
        </TableRow>
    )
}

function SummaryBadge({ label, count, color, alert }: any) {
    return (
        <div className={`flex flex-col items-center justify-center h-16 w-20 rounded-2xl border border-slate-100 bg-white shadow-sm ${alert ? 'ring-1 ring-red-100' : ''}`}>
            <span className="text-lg font-black">{count}</span>
            <span className={`text-[8px] font-black uppercase tracking-widest ${color}`}>{label}</span>
        </div>
    )
}

function VisibilityItem({ icon, label }: any) {
    return (
        <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-transparent hover:border-slate-100 transition-all">
            <div className="text-slate-300">{icon}</div>
            <span className="text-[9px] font-black text-slate-500 uppercase tracking-tight">{label}</span>
            <CheckCircle2 size={12} className="ml-auto text-green-500 opacity-30" />
        </div>
    )
}