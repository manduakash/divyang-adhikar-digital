// app/dashboard/pp/hearings/new/page.tsx
"use client";
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Gavel, Calendar, FileText, Upload, 
  CheckCircle2, Scale, ShieldCheck, 
  ArrowLeft, Sparkles, Landmark, 
  ShieldAlert, Info, Download, Trash2, 
  Clock, FileCheck
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";

export default function HearingOrderEntry() {
  const [orderPassed, setOrderPassed] = useState(true);
  const [complianceNeeded, setComplianceNeeded] = useState(false);

  return (
    <div className="max-w-6xl mx-auto pb-20 animate-in fade-in slide-in-from-bottom-6 duration-700 font-sans">
      
      {/* 1. JUDICIAL HEADER */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-blue-600 font-black uppercase text-[10px] tracking-[0.2em]">
            <ArrowLeft size={14} /> Prosecution
          </div>
          <h1 className="text-4xl font-black text-slate-900 tracking-tighter uppercase">Hearing & Order Entry</h1>
          <p className="text-slate-500 font-medium italic">Official registry of court outcomes and statutory compliance directions.</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="h-14 px-8 rounded-2xl border-slate-200 font-bold bg-white shadow-sm">Draft Copy</Button>
          <Button className="h-14 px-10 rounded-2xl bg-slate-950 text-white font-black uppercase tracking-widest text-[10px] shadow-2xl hover:bg-black transition-all">
            Record & Sync Order
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* MAIN ENTRY FORM (8 COLS) */}
        <div className="lg:col-span-8 space-y-8">
          
          <Card className="rounded-[40px] border-slate-200 shadow-2xl overflow-hidden bg-white relative">
            {/* Visual Pattern Overlay */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/blueprint.png')]" />

            <CardHeader className="p-8 border-b border-slate-50 bg-slate-50/50 flex flex-row justify-between items-center relative z-10">
                <CardTitle className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Judicial Record Parameters</CardTitle>
                <div className="flex items-center gap-2 text-green-600">
                    <CheckCircle2 size={14} />
                    <span className="text-[10px] font-black uppercase tracking-tighter">Court Sync Enabled</span>
                </div>
            </CardHeader>
            
            <CardContent className="p-10 space-y-10 relative z-10">
              
              {/* CORE IDENTIFIERS */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-3">
                  <label className="text-[11px] font-black uppercase text-slate-500 ml-1 tracking-widest">1. Case ID</label>
                  <div className="relative group">
                    <Scale className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-300 group-focus-within:text-slate-900 transition-colors" />
                    <Input 
                      placeholder="e.g. CP-2024-LKO-91" 
                      className="h-16 pl-12 rounded-2xl bg-slate-50 border-2 font-mono font-black text-slate-900 text-lg uppercase shadow-inner"
                    />
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-[11px] font-black uppercase text-slate-500 ml-1 tracking-widest">2. Hearing Date</label>
                  <div className="relative">
                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-300 pointer-events-none" />
                    <Input type="date" className="h-16 pl-12 rounded-2xl bg-slate-50 border-2 font-bold text-slate-800" />
                  </div>
                </div>
              </div>

              {/* ORDER PASSED TOGGLE */}
              <div className="p-8 bg-slate-50 rounded-[32px] border border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-5">
                    <div className={`h-14 w-14 rounded-2xl flex items-center justify-center transition-all ${orderPassed ? 'bg-blue-600 text-white shadow-lg' : 'bg-white text-slate-300'}`}>
                        <Gavel size={28} />
                    </div>
                    <div>
                        <p className="text-md font-black text-slate-900 uppercase tracking-tight">3. Was an Order Passed?</p>
                        <p className="text-xs text-slate-400 font-medium">Record if the Hon'ble court issued a formal decree today.</p>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">No</span>
                    <Switch checked={orderPassed} onCheckedChange={setOrderPassed} className="data-[state=checked]:bg-blue-600 scale-125" />
                    <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest">Yes</span>
                </div>
              </div>

              {orderPassed && (
                <div className="space-y-10 animate-in slide-in-from-top-4 duration-500">
                    {/* GIST OF ORDER */}
                    <div className="space-y-4">
                        <div className="flex justify-between items-center px-1">
                            <label className="text-[11px] font-black uppercase text-slate-500">4. Gist of Order</label>
                            <button className="flex items-center gap-1.5 text-blue-600 font-bold text-[10px] uppercase tracking-wider bg-blue-50 px-3 py-1.5 rounded-full border border-blue-100">
                                <Sparkles size={12} /> AI Legal Abstract
                            </button>
                        </div>
                        <Textarea 
                          className="min-h-[160px] rounded-[32px] bg-slate-50 border-2 p-8 text-sm font-medium leading-relaxed resize-none focus:ring-2 focus:ring-blue-600 shadow-inner" 
                          placeholder="Provide the primary directives, penalties, or rulings contained in the order..." 
                        />
                    </div>

                    {/* PDF UPLOAD */}
                    <div className="space-y-4">
                        <label className="text-[11px] font-black uppercase text-slate-500 ml-1">5. Upload Court Order (PDF)</label>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="border-2 border-dashed border-slate-200 rounded-[32px] p-10 flex flex-col items-center justify-center bg-slate-50 group hover:bg-white hover:border-blue-400 transition-all cursor-pointer">
                                <Upload className="text-slate-300 group-hover:text-blue-500 mb-3" size={32} />
                                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Select Signed PDF</span>
                                <span className="text-[8px] text-slate-300 mt-2 font-bold uppercase tracking-tighter italic">CERTIFIED COPIES ONLY (MAX 15MB)</span>
                            </div>
                            
                            <div className="bg-white border border-slate-100 rounded-[32px] p-6 flex flex-col justify-center space-y-4 shadow-sm relative group">
                                <div className="flex items-center gap-4">
                                    <div className="h-12 w-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600"><FileText size={24}/></div>
                                    <div>
                                        <p className="text-sm font-black text-slate-800">order_copy_final.pdf</p>
                                        <p className="text-[9px] font-bold text-green-600 uppercase tracking-widest">Checksum Verified</p>
                                    </div>
                                </div>
                                <div className="flex gap-2">
                                    <Button variant="ghost" size="sm" className="text-red-500 font-black uppercase text-[10px] tracking-widest px-3 hover:bg-red-50 rounded-xl">Remove</Button>
                                    <Button variant="ghost" size="sm" className="text-blue-600 font-black uppercase text-[10px] tracking-widest px-3 hover:bg-blue-50 rounded-xl">Preview</Button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* COMPLIANCE REQUIRED TOGGLE */}
                    <div className={`p-8 rounded-[40px] border-2 transition-all duration-500 flex flex-col md:flex-row items-center justify-between gap-6 ${
                        complianceNeeded ? 'bg-orange-50 border-orange-100 shadow-lg' : 'bg-slate-50 border-slate-100'
                    }`}>
                        <div className="flex items-center gap-6">
                            <div className={`h-16 w-16 rounded-3xl flex items-center justify-center transition-all ${complianceNeeded ? 'bg-orange-600 text-white' : 'bg-white text-slate-300'}`}>
                                <FileCheck size={32} />
                            </div>
                            <div>
                                <p className={`text-lg font-black uppercase tracking-tight ${complianceNeeded ? 'text-orange-950' : 'text-slate-400'}`}>6. Compliance Required?</p>
                                <p className={`text-xs font-medium ${complianceNeeded ? 'text-orange-600' : 'text-slate-400'}`}>Automatically alerts the accused establishment for enforcement.</p>
                            </div>
                        </div>
                        <Switch 
                            checked={complianceNeeded} 
                            onCheckedChange={setComplianceNeeded}
                            className="data-[state=checked]:bg-orange-600 scale-125"
                        />
                    </div>
                </div>
              )}

            </CardContent>
          </Card>
        </div>

        {/* SIDEBAR: JUDICIAL MONITORING (4 COLS) */}
        <div className="lg:col-span-4 space-y-8 sticky top-28 h-fit">
            
            <Card className="rounded-[40px] border-2 bg-slate-900 text-white p-8 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none"><Scale size={120} /></div>
                <h4 className="text-[10px] font-black text-blue-400 uppercase tracking-widest mb-8 border-b border-white/10 pb-4">District Court Context</h4>
                <div className="space-y-6">
                    <ContextItem label="Court" value="Special Court PwD, LKO" />
                    <ContextItem label="Presiding" value="Hon'ble Justice S. Mishra" />
                    <ContextItem label="Case Nature" value="Atrocities (Section 92)" />
                </div>
            </Card>

            <Card className="rounded-[40px] border-slate-200 p-8 bg-white shadow-sm">
                <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-6 border-b pb-4">Outcome Protocols</h4>
                <div className="space-y-5">
                    <ProtocolStep text="Ensure gist contains exact penalty amounts if levied." />
                    <ProtocolStep text="Verify PDF readability (Text-searchable preferred)." />
                    <ProtocolStep text="Toggling Compliance sends a 'Legal Direction' notice." />
                    <ProtocolStep text="Final registry is visible to CCPD Registry." />
                </div>
            </Card>

            <div className="p-6 bg-blue-50 rounded-[32px] border border-blue-100 flex gap-4">
                <Info className="text-blue-600 shrink-0" size={20} />
                <p className="text-[9px] font-bold text-blue-800 leading-normal uppercase">
                    Orders marked as <b>"Compliance Required"</b> will appear in the Establishment's <i>Directions & Orders</i> module instantly.
                </p>
            </div>
        </div>

      </div>
    </div>
  );
}

/* UI SUB-COMPONENTS */

function ContextItem({ label, value }: { label: string, value: string }) {
    return (
        <div className="space-y-1">
            <p className="text-[8px] font-black text-slate-500 uppercase tracking-widest leading-none">{label}</p>
            <p className="text-sm font-black tracking-tight text-white">{value}</p>
        </div>
    )
}

function ProtocolStep({ text }: { text: string }) {
    return (
        <div className="flex items-start gap-3">
            <div className="h-5 w-5 rounded-full bg-slate-50 flex items-center justify-center border border-slate-100 shrink-0 mt-0.5">
                <div className="h-1.5 w-1.5 rounded-full bg-blue-600" />
            </div>
            <span className="text-xs font-bold text-slate-600 tracking-tight leading-snug">{text}</span>
        </div>
    )
}