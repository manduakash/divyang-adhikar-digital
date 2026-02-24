// app/dashboard/state/directions/new/page.tsx
"use client";
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Gavel, Calendar, Building2, Map,
  Upload, CheckCircle2, Sparkles, ShieldAlert,
  Search, FileText, Landmark, Info, ArrowLeft,
  Briefcase, Globe, Send, Zap, BadgeCheck
} from "lucide-react";
import {
  Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";

export default function StateDirectionEntry() {
  return (
    <div className="max-w-6xl mx-auto pb-20 animate-in fade-in slide-in-from-bottom-6 duration-700 font-sans">

      {/* 1. APEX ADMINISTRATIVE HEADER */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-purple-600 font-black uppercase text-[10px] tracking-[0.2em]">
            <ArrowLeft size={14} /> State Nodal Hub / Section 5.1
          </div>
          <h1 className="text-4xl font-black text-slate-900 tracking-tighter uppercase leading-none">Issue State Direction</h1>
          <p className="text-slate-500 font-medium italic">Statutory oversight directives to Districts, Departments, and Establishments.</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="h-14 px-8 rounded-2xl border-slate-200 font-black uppercase tracking-widest text-[10px] bg-white hover:bg-slate-50">
            Save Draft
          </Button>
          <Button className="h-14 px-10 rounded-2xl bg-purple-700 text-white font-black uppercase tracking-widest text-[10px] shadow-2xl shadow-purple-200 transition-all hover:bg-purple-900">
            Dispatch Statutory Order
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

        {/* MAIN DATA ENTRY COLUMN (8 COLS) */}
        <div className="lg:col-span-8 space-y-8">

          <Card className="rounded-[40px] border-slate-200 shadow-xl overflow-hidden bg-white relative">
            {/* Visual Pattern Overlay - State Theme */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/circuit-board.png')]" />

            <CardHeader className="p-8 border-b border-slate-50 bg-slate-50/50 flex flex-row justify-between items-center relative z-10">
              <CardTitle className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Section 5.1: Order Parameters</CardTitle>
              <div className="flex items-center gap-2 text-purple-600">
                <BadgeCheck size={14} />
                <span className="text-[10px] font-black uppercase tracking-tighter">State Authority Authenticated</span>
              </div>
            </CardHeader>

            <CardContent className="p-10 space-y-10 relative z-10">

              {/* REFERENCE & TARGET */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-3">
                  <label className="text-[11px] font-black uppercase text-slate-500 ml-1 tracking-widest">1. Direction Reference No.</label>
                  <div className="relative">
                    <FileText className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-300" />
                    <Input
                      defaultValue="DIR-STATE-UP-2024-098"
                      readOnly
                      className="h-16 pl-12 rounded-2xl bg-slate-50 border-2 font-mono font-black text-purple-700 text-lg uppercase shadow-inner"
                    />
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-[11px] font-black uppercase text-slate-500 ml-1 tracking-widest">2. Issued To (Target Entity)</label>
                  <Select>
                    <SelectTrigger className="h-16 rounded-2xl bg-slate-50 border-2 px-5 font-bold text-slate-800">
                      <SelectValue placeholder="Select Recipient" />
                    </SelectTrigger>
                    <SelectContent className="rounded-2xl shadow-2xl">
                      <SelectGroup>
                        <SelectLabel className="text-[9px] font-black uppercase text-blue-600 tracking-widest px-3">Districts</SelectLabel>
                        <SelectItem value="dist-all" className="font-bold">All 75 District Magistrates</SelectItem>
                        <SelectItem value="dist-lko" className="font-bold">Lucknow District</SelectItem>
                      </SelectGroup>
                      <SelectGroup>
                        <SelectLabel className="text-[9px] font-black uppercase text-purple-600 tracking-widest px-3">Departments</SelectLabel>
                        <SelectItem value="dept-health" className="font-bold">Health & Family Welfare</SelectItem>
                        <SelectItem value="dept-edu" className="font-bold">Secondary Education</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* SUBJECT LINE */}
              <div className="space-y-3">
                <label className="text-[11px] font-black uppercase text-slate-500 ml-1 tracking-widest">3. Subject of Direction</label>
                <div className="relative group">
                  <Landmark className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-300 group-focus-within:text-purple-600 transition-colors" />
                  <Input
                    placeholder="Brief headline of the statutory order..."
                    className="h-16 pl-12 rounded-2xl bg-slate-50 border-2 font-bold text-slate-900"
                  />
                </div>
              </div>

              {/* DIRECTION TEXT */}
              <div className="space-y-4">
                <div className="flex justify-between items-center px-1">
                  <label className="text-[11px] font-black uppercase text-slate-500 tracking-widest">4. Direction Text (Core Body)</label>
                  <button className="flex items-center gap-1.5 text-purple-600 font-bold text-[10px] uppercase tracking-wider bg-purple-50 px-3 py-1.5 rounded-full border border-purple-100 hover:bg-purple-100 transition-all shadow-sm">
                    <Sparkles size={12} /> AI Policy Draft
                  </button>
                </div>
                <Textarea
                  className="min-h-[220px] rounded-[32px] bg-slate-50 border-2 p-8 text-sm font-medium leading-relaxed resize-none focus:ring-2 focus:ring-purple-600 shadow-inner"
                  placeholder="Elaborate on the statutory mandates, specific compliance tasks, and administrative expectations..."
                />
              </div>

              {/* DEADLINE & DOCUMENT */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 border-t border-slate-50 pt-10">
                <div className="space-y-3">
                  <label className="text-[11px] font-black uppercase text-slate-500 ml-1 tracking-widest">5. Compliance Deadline</label>
                  <div className="relative group">
                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-300 group-focus-within:text-purple-600 transition-colors" />
                    <Input type="date" className="h-16 pl-12 rounded-2xl bg-slate-50 border-2 font-black text-slate-900 shadow-inner" />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-[11px] font-black uppercase text-slate-500 ml-1 tracking-widest">6. Supporting Document (Signed Order)</label>
                  <div className="relative">
                    <div className="border-2 border-dashed border-slate-200 rounded-[24px] p-4 flex items-center justify-between bg-slate-50 hover:bg-white hover:border-purple-400 transition-all cursor-pointer group">
                      <div className="flex items-center gap-3">
                        <Upload className="text-slate-300 group-hover:text-purple-600 transition-colors" size={20} />
                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Upload Secure PDF</span>
                      </div>
                      <Badge className="bg-slate-200 text-slate-500 border-2 text-[8px] font-black uppercase">MAX 20MB</Badge>
                    </div>
                  </div>
                </div>
              </div>

            </CardContent>
          </Card>
        </div>

        {/* SIDEBAR: STATUTORY AUTHORITY (4 COLS) */}
        <div className="lg:col-span-4 space-y-8 sticky top-28 h-fit">

          {/* POWER CARD */}
          <Card className="rounded-[40px] border-2 bg-slate-900 text-white p-8 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:rotate-12 transition-transform duration-700">
              <Landmark size={120} />
            </div>
            <div className="relative z-10 space-y-6">
              <div className="flex items-center gap-3">
                <Gavel className="text-purple-400" />
                <h3 className="text-sm font-black uppercase tracking-widest text-purple-400">Rule 2017 Mandate</h3>
              </div>
              <p className="text-sm font-bold leading-relaxed opacity-80 italic">
                "The State Nodal Department may issue directions to any local authority or establishment to ensure the rights and facilities provided under the Act are implemented in a time-bound manner."
              </p>
              <div className="pt-6 border-t border-white/10 space-y-4">
                <HealthItem label="Active State Orders" val="142" />
                <HealthItem label="District Compliance" val="94%" color="text-green-400" />
              </div>
            </div>
          </Card>

          {/* ACTION CHECKLIST */}
          <Card className="rounded-[40px] border-slate-200 p-8 bg-white shadow-sm">
            <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-6 border-b border-slate-50 pb-4">Drafting Checklist</h4>
            <div className="space-y-5">
              <ProtocolStep text="Cross-reference with State Cabinet policy." />
              <ProtocolStep text="Verify recipient District ID / Department Code." />
              <ProtocolStep text="Notify Central Ministry (GoI) via Bridge." />
              <ProtocolStep text="Attach Digital Certificate of the Secretary." />
            </div>
          </Card>

          {/* NATIONAL SYNC ALERT */}
          <div className="p-6 bg-blue-50 rounded-[32px] border border-blue-100 flex gap-4">
            <Globe className="text-blue-600 shrink-0" size={24} />
            <p className="text-[10px] font-bold text-blue-800 leading-normal uppercase">
              Issued state directions are mirrored to the <b>Chief Commissioner for PwDs (National)</b> for audit and policy alignment.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}

/* UI SUB-COMPONENTS */

function HealthItem({ label, val, color }: any) {
  return (
    <div className="flex justify-between items-center">
      <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{label}</span>
      <span className={`text-xl font-black ${color || 'text-purple-400'}`}>{val}</span>
    </div>
  )
}

function ProtocolStep({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-3">
      <div className="h-5 w-5 rounded-full bg-slate-50 flex items-center justify-center border border-slate-100 shrink-0 mt-0.5 shadow-inner">
        <div className="h-1.5 w-1.5 rounded-full bg-purple-600" />
      </div>
      <span className="text-xs font-bold text-slate-600 tracking-tight leading-snug">{text}</span>
    </div>
  )
}