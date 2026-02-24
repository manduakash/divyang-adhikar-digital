// app/dashboard/state/compliance/verify/page.tsx
"use client";
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  BadgeCheck, Building2, ClipboardCheck, CheckCircle2,
  XCircle, Calendar, ShieldCheck, ArrowLeft,
  Search, Link as LinkIcon, AlertCircle, Sparkles,
  Landmark, UserCheck, History, Activity, Globe
} from "lucide-react";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";

export default function StateComplianceVerification() {
  const [isSubmitted, setIsSubmitted] = useState<boolean>(true);
  const [decision, setDecision] = useState<string>('');

  return (
    <div className="max-w-6xl mx-auto pb-20 animate-in fade-in slide-in-from-bottom-6 duration-700 font-sans">

      {/* 1. APEX ADMINISTRATIVE HEADER */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-purple-600 font-black uppercase text-[10px] tracking-[0.2em]">
            <ArrowLeft size={14} /> State Nodal Hub / Section 5.2
          </div>
          <h1 className="text-4xl font-black text-slate-900 tracking-tighter uppercase leading-none">Compliance Verification</h1>
          <p className="text-slate-500 font-medium italic">Apex audit and finalization of statutory directions issued by the State.</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="h-14 px-8 rounded-2xl border-slate-200 font-bold bg-white shadow-sm">Hold for Cabinet</Button>
          <Button className="h-14 px-10 rounded-2xl bg-purple-700 text-white font-black uppercase tracking-widest text-[10px] shadow-2xl shadow-purple-200 transition-all hover:bg-purple-900">
            Finalize State Audit
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

        {/* MAIN DATA ENTRY COLUMN (8 COLS) */}
        <div className="lg:col-span-8 space-y-8">

          <Card className="rounded-[40px] border-slate-200 shadow-xl overflow-hidden bg-white relative">
            {/* Visual Pattern Overlay */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/circuit-board.png')]" />

            <CardHeader className="p-8 border-b border-slate-50 bg-slate-50/50 flex flex-row justify-between items-center relative z-10">
              <CardTitle className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Section 5.2: State Audit Record</CardTitle>
              <div className="flex items-center gap-2 text-purple-600">
                <BadgeCheck size={14} />
                <span className="text-[10px] font-black uppercase tracking-tighter">Apex Review Active</span>
              </div>
            </CardHeader>

            <CardContent className="p-10 space-y-10 relative z-10">

              {/* DIRECTION REFERENCE & STATUS */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-3">
                  <label className="text-[11px] font-black uppercase text-slate-500 ml-1 tracking-widest">1. Direction Reference</label>
                  <div className="relative group">
                    <LinkIcon className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-purple-400" />
                    <Input
                      placeholder="e.g. DIR-STATE-UP-098"
                      className="h-16 pl-12 rounded-2xl bg-slate-50 border-2 font-mono font-black text-purple-700 text-lg uppercase shadow-inner"
                    />
                    <Badge className="absolute right-3 top-1/2 -translate-y-1/2 bg-purple-100 text-purple-700 border-2 font-black text-[8px]">MANDATORY ORDER</Badge>
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-[11px] font-black uppercase text-slate-500 ml-1 tracking-widest">2. Compliance Submitted?</label>
                  <div className="flex h-16 bg-slate-50 rounded-2xl p-1.5 gap-1">
                    <button
                      onClick={() => setIsSubmitted(true)}
                      className={`flex-1 rounded-xl font-black text-[10px] uppercase tracking-widest transition-all ${isSubmitted ? 'bg-white text-green-600 shadow-sm' : 'text-slate-400 hover:text-slate-600'}`}
                    >
                      Yes - Received
                    </button>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className={`flex-1 rounded-xl font-black text-[10px] uppercase tracking-widest transition-all ${!isSubmitted ? 'bg-white text-red-600 shadow-sm' : 'text-slate-400 hover:text-slate-600'}`}
                    >
                      No - Default
                    </button>
                  </div>
                </div>
              </div>

              {/* VERIFIED BY & DATE */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-3">
                  <label className="text-[11px] font-black uppercase text-slate-500 ml-1 tracking-widest">3. Verified By (Authorizing Officer)</label>
                  <div className="relative group">
                    <UserCheck className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-300 group-focus-within:text-purple-600 transition-colors" />
                    <Input
                      placeholder="Officer Name and PIN"
                      className="h-16 pl-12 rounded-2xl bg-slate-50 border-2 font-bold text-slate-800"
                    />
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-[11px] font-black uppercase text-slate-500 ml-1 tracking-widest">4. Verification Date</label>
                  <div className="relative">
                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-300 pointer-events-none" />
                    <Input type="date" className="h-16 pl-12 rounded-2xl bg-slate-50 border-2 font-black text-slate-700 shadow-inner" />
                  </div>
                </div>
              </div>

              {/* REMARKS / AUDIT NOTES */}
              <div className="space-y-4">
                <div className="flex justify-between items-center px-1">
                  <label className="text-[11px] font-black uppercase text-slate-500 tracking-widest">5. Verification Remarks / Findings</label>
                  <button className="flex items-center gap-1.5 text-purple-600 font-bold text-[10px] uppercase tracking-wider bg-purple-50 px-3 py-1.5 rounded-full border border-purple-100 hover:bg-purple-100 transition-all shadow-sm">
                    <Sparkles size={12} /> AI Policy Check
                  </button>
                </div>
                <Textarea
                  className="min-h-[180px] rounded-[32px] bg-slate-50 border-2 p-8 text-sm font-medium leading-relaxed resize-none focus:ring-2 focus:ring-purple-600 shadow-inner"
                  placeholder="Provide final administrative assessment. Detail if the compliance meets the statutory standards defined in the PwD Rules 2017..."
                />
              </div>

              {/* FINAL AUDIT DECISION (UI ENHANCEMENT) */}
              <div className="p-8 bg-slate-900 rounded-[40px] flex items-center justify-between text-white shadow-2xl relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
                <div className="relative z-10 space-y-1">
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-purple-400">Statutory Finality</p>
                  <p className="text-xl font-black uppercase">Official State Audit Result</p>
                </div>
                <div className="relative z-10 flex gap-4">
                  <DecisionBtn active={decision === 'accept'} onClick={() => setDecision('accept')} label="Accept" color="green" />
                  <DecisionBtn active={decision === 'reject'} onClick={() => setDecision('reject')} label="Escalate" color="red" />
                </div>
              </div>

            </CardContent>
          </Card>
        </div>

        {/* SIDEBAR: APEX AUTHORITY CONTEXT (4 COLS) */}
        <div className="lg:col-span-4 space-y-8 sticky top-28 h-fit">

          {/* STATE COMPLIANCE SCORE CARD */}
          <Card className="rounded-[40px] border-2 bg-slate-950 text-white p-8 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:rotate-12 transition-transform duration-700">
              <Landmark size={120} />
            </div>
            <div className="relative z-10 space-y-6">
              <div className="flex items-center gap-3">
                <Activity className="text-purple-400" />
                <h3 className="text-sm font-black uppercase tracking-widest text-purple-400">State Execution Hub</h3>
              </div>
              <div className="space-y-4 pt-4 border-t border-white/10">
                <HealthItem label="Total Directions Issued" val="142" />
                <HealthItem label="Verified Compliant" val="118" color="text-green-400" />
                <HealthItem label="Beyond SLA" val="09" color="text-red-400" />
              </div>
              <Button className="w-full mt-4 h-14 bg-white/10 hover:bg-white/20 text-white border border-white/10 rounded-2xl font-black uppercase tracking-widest text-[9px] gap-2">
                <History size={16} /> District Comparison Log
              </Button>
            </div>
          </Card>

          {/* AUDIT PROTOCOL */}
          <Card className="rounded-[40px] border-slate-200 p-8 bg-white shadow-sm">
            <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-6 border-b border-slate-50 pb-4">Verification Protocol</h4>
            <div className="space-y-5">
              <ProtocolStep text="Verify District Magistrate's secondary signature." />
              <ProtocolStep text="Cross-verify accessibility claims with National Mapping." />
              <ProtocolStep text="Confirm inter-departmental budget utilization." />
              <ProtocolStep text="Rejections must include policy correction directives." />
            </div>
          </Card>

          {/* NATIONAL SYNC ALERT */}
          <div className="p-6 bg-blue-50 rounded-[32px] border border-blue-100 flex gap-4">
            <Globe className="text-blue-600 shrink-0" size={24} />
            <p className="text-[10px] font-bold text-blue-800 leading-normal uppercase">
              Verification results are synchronized with the <b>GoI Central Dashboard</b> every 12 hours.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}

/* UI SUB-COMPONENTS */

function DecisionBtn({ label, color, active, onClick }: any) {
  const activeStyles: any = {
    green: 'bg-green-600 text-white shadow-lg shadow-green-900/40',
    red: 'bg-red-600 text-white shadow-lg shadow-red-900/40 animate-pulse'
  };
  return (
    <button
      onClick={onClick}
      className={`px-6 py-3 rounded-xl font-black uppercase text-[10px] tracking-widest transition-all border border-white/10 ${active ? activeStyles[color] : 'bg-white/10 text-slate-400 hover:text-white'
        }`}
    >
      {label}
    </button>
  )
}

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