// app/dashboard/ddma/resources/page.tsx
"use client";
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
    Table, TableBody, TableCell, TableHead, TableHeader, TableRow
} from "@/components/ui/table";
import {
    Truck, Box, Warehouse, MapPin,
    Plus, Search, Filter, History,
    CheckCircle2, Package, AlertCircle,
    ArrowRight, ShieldCheck, Download,
    Stethoscope, Activity, Radio,
    Accessibility
} from "lucide-react";
import { Input } from "@/components/ui/input";
import {
    Select, SelectContent, SelectItem, SelectTrigger, SelectValue
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";

export default function ResourceMappingPage() {
    return (
        <div className="space-y-10 animate-in fade-in duration-700 pb-20">

            {/* 1. LOGISTICS HEADER */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 bg-white p-10 rounded-[40px] border border-slate-200 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 p-10 opacity-[0.03] pointer-events-none">
                    <Package size={160} className="text-orange-600" />
                </div>
                <div className="space-y-2 relative z-10">
                    <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border border-orange-200">
                        <Truck size={14} className="animate-bounce" /> Logistics Node / Section 5.5
                    </div>
                    <h1 className="text-4xl font-black text-slate-900 tracking-tighter uppercase leading-none">Resource Inventory</h1>
                    <p className="text-slate-500 font-medium italic">Tactical mapping of assistive mobility and medical supplies across district depots.</p>
                </div>
                <div className="flex gap-4 relative z-10">
                    <Button variant="outline" className="h-14 px-8 rounded-2xl border-slate-200 font-bold bg-white hover:bg-slate-50 gap-2">
                        <History size={18} /> Audit History
                    </Button>
                    <Button className="h-14 px-10 rounded-2xl bg-slate-900 text-white font-black uppercase tracking-widest text-[10px] shadow-2xl hover:bg-black transition-all">
                        Export Inventory XLS
                    </Button>
                </div>
            </div>

            {/* 2. RESOURCE ENTRY & REGISTRY GRID */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">

                {/* DATA ENTRY COLUMN (Section 5.5 Format) */}
                <div className="lg:col-span-1 space-y-6">
                    <Card className="rounded-[40px] border-slate-200 shadow-xl overflow-hidden bg-white">
                        <CardHeader className="p-8 border-b border-slate-50 bg-slate-50/50">
                            <CardTitle className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Section 5.5: New Resource Entry</CardTitle>
                        </CardHeader>
                        <CardContent className="p-8 space-y-6">

                            {/* RESOURCE TYPE */}
                            <div className="space-y-3">
                                <label className="text-[11px] font-black uppercase text-slate-500 ml-1">1. Resource Type</label>
                                <Select>
                                    <SelectTrigger className="h-14 rounded-2xl w-full py-6 bg-slate-50 border-2 px-5 font-bold text-slate-700">
                                        <SelectValue placeholder="Select Category" />
                                    </SelectTrigger>
                                    <SelectContent className="rounded-2xl border-slate-100">
                                        <SelectItem value="wheelchair" className="font-bold py-3 uppercase text-[10px]">Wheelchairs (Mobility)</SelectItem>
                                        <SelectItem value="stretcher" className="font-bold py-3 uppercase text-[10px]">Stretchers (Evac)</SelectItem>
                                        <SelectItem value="medical" className="font-bold py-3 uppercase text-[10px]">Medical Kits (SDRF)</SelectItem>
                                        <SelectItem value="transport" className="font-bold py-3 uppercase text-[10px]">Transport (Ambulance/Van)</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            {/* QUANTITY */}
                            <div className="space-y-3">
                                <label className="text-[11px] font-black uppercase text-slate-500 ml-1">2. Quantity Available</label>
                                <div className="relative group">
                                    <Box className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-300 group-focus-within:text-orange-500 transition-colors" />
                                    <Input
                                        type="number"
                                        placeholder="Units in stock"
                                        className="h-14 pl-12 rounded-2xl bg-slate-50 border-2 font-black text-slate-800"
                                    />
                                </div>
                            </div>

                            {/* LOCATION */}
                            <div className="space-y-3">
                                <label className="text-[11px] font-black uppercase text-slate-500 ml-1">3. Storage Location</label>
                                <div className="relative group">
                                    <Warehouse className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-300 group-focus-within:text-orange-500 transition-colors" />
                                    <Input
                                        placeholder="e.g. Urban Depot - Zone 4"
                                        className="h-14 pl-12 rounded-2xl bg-slate-50 border-2 font-bold text-slate-800"
                                    />
                                </div>
                            </div>

                            {/* DEPLOYMENT STATUS */}
                            <div className="space-y-3">
                                <label className="text-[11px] font-black uppercase text-slate-500 ml-1">4. Deployment Status</label>
                                <Select>
                                    <SelectTrigger className="h-14 rounded-2xl py-6 w-full bg-slate-50 border-2 px-5 font-bold text-slate-700">
                                        <SelectValue placeholder="Current Status" />
                                    </SelectTrigger>
                                    <SelectContent className="rounded-2xl border-slate-100">
                                        <SelectItem value="stocked" className="font-bold py-3 uppercase text-[10px] text-green-600">Available / Stocked</SelectItem>
                                        <SelectItem value="deployed" className="font-bold py-3 uppercase text-[10px] text-orange-600">Active / Deployed</SelectItem>
                                        <SelectItem value="maintenance" className="font-bold py-3 uppercase text-[10px] text-red-600">Maintenance</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            <Button className="w-full h-16 bg-orange-600 text-white rounded-3xl font-black uppercase tracking-widest text-[11px] shadow-xl shadow-orange-900/20 hover:bg-orange-700 transition-all mt-4">
                                Add to Registry <ArrowRight size={18} className="ml-2" />
                            </Button>
                        </CardContent>
                    </Card>

                    <Card className="rounded-[40px] border-2 bg-slate-900 text-white p-8 shadow-2xl relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform duration-700"><CheckCircle2 size={100} /></div>
                        <div className="relative z-10 space-y-6">
                            <h3 className="text-sm font-black uppercase tracking-widest text-blue-400">Network Readiness</h3>
                            <div className="space-y-4">
                                <p className="text-xs font-medium text-slate-400 leading-relaxed uppercase">
                                    Resource data is shared in real-time with the <b>State Emergency Response Centre</b> for inter-district mobilization.
                                </p>
                                <div className="flex items-center gap-2">
                                    <div className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
                                    <span className="text-[10px] font-black text-green-500 uppercase tracking-tighter">SDMA Sync: 100% Active</span>
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>

                {/* INVENTORY REGISTRY COLUMN */}
                <div className="lg:col-span-2 space-y-6">
                    <Card className="rounded-[40px] border-slate-200 shadow-sm overflow-hidden bg-white min-h-[700px]">
                        <CardHeader className="p-8 border-b border-slate-50 bg-slate-50/30 flex flex-row justify-between items-center">
                            <CardTitle className="text-xs font-black uppercase tracking-widest text-slate-400">Statutory Resource Registry</CardTitle>
                            <div className="flex gap-2">
                                <div className="relative">
                                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-300" />
                                    <input className="pl-9 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-[10px] font-bold outline-none w-48 focus:ring-1 focus:ring-orange-500" placeholder="Filter type..." />
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent className="p-0">
                            <Table>
                                <TableHeader className="bg-white">
                                    <TableRow className="border-slate-100">
                                        <TableHead className="px-8 py-5 text-[9px] font-black uppercase tracking-widest text-slate-400">Type</TableHead>
                                        <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400">Storage Hub</TableHead>
                                        <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400 text-center">Available Qty</TableHead>
                                        <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400 text-center">Status</TableHead>
                                        <TableHead className="text-right px-8 text-[9px] font-black uppercase tracking-widest text-slate-400">Enforcement</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody className="divide-y divide-slate-50">

                                    <ResourceRow
                                        type="Wheelchairs (Adult)"
                                        hub="District Civil Hospital"
                                        qty="145"
                                        status="STOCKED"
                                        icon={<Accessibility size={16} />}
                                    />

                                    <ResourceRow
                                        type="Medical Kits (PwD)"
                                        hub="SDRF Urban Depot"
                                        qty="42"
                                        status="DEPLOYED"
                                        icon={<Stethoscope size={16} />}
                                        alert
                                    />

                                    <ResourceRow
                                        type="Evac Vans (Accessible)"
                                        hub="Fire HQ Hub-B"
                                        qty="08"
                                        status="STOCKED"
                                        icon={<Truck size={16} />}
                                    />

                                    <ResourceRow
                                        type="Folding Stretchers"
                                        hub="Community Centre A"
                                        qty="220"
                                        status="MAINTENANCE"
                                        icon={<Activity size={16} />}
                                        danger
                                    />

                                    <ResourceRow
                                        type="Scribe Support Units"
                                        hub="Education Wing Hub"
                                        qty="12"
                                        status="STOCKED"
                                        icon={<Radio size={16} />}
                                    />

                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>
                </div>

            </div>
        </div>
    );
}

/* UI HELPER COMPONENTS */

function ResourceRow({ type, hub, qty, status, icon, alert, danger }: any) {
    return (
        <TableRow className="border-2 hover:bg-slate-50/80 group transition-all">
            <TableCell className="px-8 py-6">
                <div className="flex items-center gap-4">
                    <div className={`h-10 w-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-slate-900 group-hover:text-blue-400 transition-all shadow-sm`}>
                        {icon}
                    </div>
                    <span className="text-[11px] font-black text-slate-900 uppercase tracking-tight">{type}</span>
                </div>
            </TableCell>
            <TableCell>
                <div className="flex items-center gap-2">
                    <MapPin size={12} className="text-slate-300" />
                    <span className="text-[10px] font-bold text-slate-600 uppercase tracking-widest">{hub}</span>
                </div>
            </TableCell>
            <TableCell className="text-center font-black text-slate-900 text-lg tracking-tighter">
                {qty}
            </TableCell>
            <TableCell className="text-center">
                <Badge className={`rounded-md px-2.5 py-0.5 text-[8px] font-black uppercase tracking-widest border-2 shadow-none ${alert ? 'bg-orange-100 text-orange-700' :
                    danger ? 'bg-red-100 text-red-700 animate-pulse' :
                        'bg-green-100 text-green-700'
                    }`}>
                    {status}
                </Badge>
            </TableCell>
            <TableCell className="text-right px-8 opacity-0 group-hover:opacity-100 transition-all">
                <div className="flex justify-end gap-2">
                    <button className="p-2 bg-slate-900 text-white rounded-xl shadow-lg hover:bg-black transition-all">
                        <Activity size={14} />
                    </button>
                </div>
            </TableCell>
        </TableRow>
    )
}