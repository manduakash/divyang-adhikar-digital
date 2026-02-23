// app/dashboard/deo/accommodation/page.tsx
"use client";
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow 
} from "@/components/ui/table";
import { 
  Accessibility, School, Users, CheckCircle2, 
  Clock, XCircle, Search, Filter, Plus, 
  FileText, Calendar, ArrowUpRight, GraduationCap,
  BookOpen, Sparkles, AlertCircle
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { 
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger 
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { 
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue 
} from "@/components/ui/select";

export default function AccommodationTrackingPage() {
  return (
    <div className="space-y-8 animate-in fade-in duration-700 pb-20">
      
      {/* 1. TOP SUMMARY HEADER */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 bg-white p-8 rounded-[40px] border border-slate-200 shadow-sm">
        <div className="flex items-center gap-6">
            <div className="h-16 w-16 bg-indigo-600 rounded-2xl flex items-center justify-center text-white shadow-xl shadow-indigo-100">
                <Accessibility size={32} />
            </div>
            <div>
                <h1 className="text-3xl font-black text-slate-900 tracking-tight uppercase">Accommodation Tracking</h1>
                <p className="text-slate-500 font-medium">Monitoring Section 17/18: Provision of Readers, Scribes, and Assistive Devices.</p>
            </div>
        </div>
        <div className="flex gap-3">
            <Button variant="outline" className="h-12 px-6 rounded-2xl border-slate-200 font-bold gap-2">
                <FileText size={16}/> Download Audit Log
            </Button>
            <NewRequestDialog />
        </div>
      </div>

      {/* 2. LIVE STATS (Section 7.4 Data Source) */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <StatCard label="Total Requests" value="120" color="text-slate-900" icon={<BookOpen/>} />
        <StatCard label="Provided" value="110" color="text-green-600" icon={<CheckCircle2/>} />
        <StatCard label="Pending" value="10" color="text-red-600" icon={<Clock/>} alert />
        <div className="bg-slate-900 rounded-[32px] p-6 text-white shadow-xl flex flex-col justify-center">
            <p className="text-[9px] font-black uppercase text-slate-500 tracking-widest">Provision Rate</p>
            <p className="text-3xl font-black text-indigo-400">91.6%</p>
        </div>
      </div>

      {/* 3. THE REGISTRY TABLE (Section 4.2 Format) */}
      <Card className="rounded-[40px] border-slate-200 shadow-sm overflow-hidden bg-white">
        <CardHeader className="p-8 border-b border-slate-50 bg-slate-50/30 flex flex-row justify-between items-center">
            <CardTitle className="text-xs font-black uppercase tracking-widest text-slate-400">Statutory Accommodation Registry</CardTitle>
            <div className="flex gap-3">
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-300" />
                    <input className="pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-xs font-bold outline-none w-64 focus:ring-1 focus:ring-indigo-500" placeholder="Search Student or School..." />
                </div>
                <Button variant="outline" className="rounded-xl border-slate-200 font-bold text-xs px-4"><Filter size={14} className="mr-2"/> Filter</Button>
            </div>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader className="bg-white">
              <TableRow className="border-slate-100">
                <TableHead className="px-8 py-5 text-[9px] font-black uppercase tracking-widest text-slate-400">Institution Name</TableHead>
                <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400">Student Category</TableHead>
                <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400">Accommodation Type</TableHead>
                <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400 text-center">Status</TableHead>
                <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400">Date Provided</TableHead>
                <TableHead className="text-right px-8 text-[9px] font-black uppercase tracking-widest text-slate-400">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="divide-y divide-slate-50">
              
              <RequestRow 
                school="City Central High School" 
                category="Visual Impairment" 
                type="Reader / Scribe" 
                provided="Yes" 
                date="12 Oct 2024"
              />
              
              <RequestRow 
                school="St. Mary's Academy" 
                category="Locomotor" 
                type="Assistive Device (Wheelchair)" 
                provided="No" 
                date="--"
                alert
              />

              <RequestRow 
                school="Govt Boys College" 
                category="Specific Learning Disability" 
                type="Extra Time (Exams)" 
                provided="Yes" 
                date="10 Oct 2024"
              />

              <RequestRow 
                school="Primary School Block-A" 
                category="Multiple Disabilities" 
                type="Other: Digital Tablet" 
                provided="No" 
                date="--"
                alert
              />

            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}

/* 4. MODAL FOR DATA ENTRY (Section 4.2 Data Fields) */

function NewRequestDialog() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className="h-12 px-8 rounded-2xl bg-indigo-600 text-white font-black uppercase tracking-widest text-[10px] shadow-xl shadow-indigo-100 gap-2">
                    <Plus size={16} /> Track New Request
                </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl rounded-[40px] p-0 border-none overflow-hidden font-sans">
                <DialogHeader className="p-8 bg-slate-900 text-white">
                    <DialogTitle className="text-xl font-black uppercase tracking-tight">Accommodation Entry (4.2)</DialogTitle>
                </DialogHeader>
                <div className="p-10 space-y-6 bg-white">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-[10px] font-black uppercase text-slate-400 ml-1">Institution Name</label>
                            <Input className="h-12 bg-slate-50 border-none rounded-xl font-bold" placeholder="School Name" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] font-black uppercase text-slate-400 ml-1">Student Category</label>
                            <Select><SelectTrigger className="h-12 bg-slate-50 border-none rounded-xl font-bold"><SelectValue placeholder="Select Category"/></SelectTrigger></Select>
                        </div>
                        <div className="space-y-2 md:col-span-2">
                            <label className="text-[10px] font-black uppercase text-slate-400 ml-1">Accommodation Required</label>
                            <Select>
                                <SelectTrigger className="h-12 bg-slate-50 border-none rounded-xl font-bold">
                                    <SelectValue placeholder="Reader / Scribe / Extra Time..." />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="reader">Reader</SelectItem>
                                    <SelectItem value="scribe">Scribe</SelectItem>
                                    <SelectItem value="time">Extra Time</SelectItem>
                                    <SelectItem value="device">Assistive Device</SelectItem>
                                    <SelectItem value="other">Other</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="md:col-span-2 space-y-2">
                            <label className="text-[10px] font-black uppercase text-slate-400 ml-1">Official Remarks</label>
                            <Input className="h-12 bg-slate-50 border-none rounded-xl font-bold" placeholder="Specific details or serial numbers..." />
                        </div>
                    </div>
                    <Button className="w-full h-14 bg-indigo-600 text-white rounded-2xl font-black uppercase tracking-widest mt-4">Save to District Registry</Button>
                </div>
            </DialogContent>
        </Dialog>
    )
}

/* UI HELPER COMPONENTS */

function RequestRow({ school, category, type, provided, date, alert }: any) {
    return (
        <TableRow className="border-none hover:bg-slate-50 transition-colors group">
            <TableCell className="px-8 py-6">
                <div className="flex items-center gap-3">
                    <School className="text-slate-300" size={16} />
                    <span className="text-sm font-black text-slate-800 uppercase tracking-tighter">{school}</span>
                </div>
            </TableCell>
            <TableCell>
                <div className="flex items-center gap-2">
                    <GraduationCap className="text-slate-400" size={14} />
                    <span className="text-xs font-bold text-slate-600 uppercase">{category}</span>
                </div>
            </TableCell>
            <TableCell>
                <span className="text-xs font-black text-indigo-600 uppercase tracking-tight">{type}</span>
            </TableCell>
            <TableCell className="text-center">
                <Badge className={`rounded-full px-3 py-1 text-[9px] font-black uppercase border-none shadow-none ${
                    provided === 'Yes' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700 animate-pulse'
                }`}>
                    {provided === 'Yes' ? 'PROVIDED' : 'PENDING'}
                </Badge>
            </TableCell>
            <TableCell>
                <span className="text-xs font-bold text-slate-400 font-mono">{date}</span>
            </TableCell>
            <TableCell className="text-right px-8">
                <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-all">
                    <button className="p-2 bg-slate-900 text-white rounded-xl hover:bg-black shadow-lg"><ArrowUpRight size={14} /></button>
                </div>
            </TableCell>
        </TableRow>
    )
}

function StatCard({ label, value, icon, color, alert }: any) {
    return (
        <Card className={`rounded-[32px] border-slate-100 shadow-sm transition-all hover:shadow-md bg-white overflow-hidden group ${alert ? 'ring-1 ring-red-100' : ''}`}>
            <CardContent className="p-6">
                <div className="flex justify-between items-start">
                    <div className={`p-3 rounded-2xl bg-slate-50 ${alert ? 'text-red-500' : 'text-slate-400 group-hover:text-indigo-600'} transition-colors`}>
                        {React.cloneElement(icon, { size: 20 })}
                    </div>
                    {alert && <AlertCircle className="text-red-500" size={14} />}
                </div>
                <div className="mt-4">
                    <p className={`text-3xl font-black ${color}`}>{value}</p>
                    <p className="text-[9px] font-black uppercase text-slate-400 tracking-widest mt-1">{label}</p>
                </div>
            </CardContent>
        </Card>
    )
}