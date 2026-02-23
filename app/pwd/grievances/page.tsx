// app/dashboard/pwd/grievances/page.tsx
"use client";
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  MessageSquare, Building2, MapPin, Target, Upload, Info,
  CheckCircle2, Sparkles, FileText, AlertCircle,
  Navigation, Camera, Globe, Monitor, Smartphone, Link as LinkIcon,
  ShieldAlert
} from "lucide-react";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";

type ReportType = 'GRIEVANCE' | 'PHYSICAL_ACCESS' | 'DIGITAL_ACCESS';

export default function GrievanceFilingPage() {
  const [reportType, setReportType] = useState<ReportType>('GRIEVANCE');

  return (
    <div className="max-w-6xl mx-auto pb-20 animate-in fade-in duration-700">

      {/* 1. HEADER SECTION */}
      <div className="mb-10 flex flex-col md:flex-row justify-between items-end gap-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-black text-slate-900 tracking-tight">Enforcement & Reporting</h1>
          <p className="text-slate-500 font-medium">Lodge grievances or report accessibility barriers to the authorities.</p>
        </div>

        {/* REPORT TYPE SELECTOR */}
        <div className="flex bg-slate-100 p-1.5 rounded-2xl border border-slate-200">
          <TabBtn active={reportType === 'GRIEVANCE'} onClick={() => setReportType('GRIEVANCE')} label="General Grievance" />
          <TabBtn active={reportType === 'PHYSICAL_ACCESS'} onClick={() => setReportType('PHYSICAL_ACCESS')} label="Physical Barrier" />
          <TabBtn active={reportType === 'DIGITAL_ACCESS'} onClick={() => setReportType('DIGITAL_ACCESS')} label="Digital Issue" />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

        <div className="lg:col-span-2 space-y-6">

          {/* PROFILE DATA SYNC NOTIFICATION */}
          <div className="p-4 bg-blue-50 border border-blue-100 rounded-2xl flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-blue-600 p-2 rounded-lg"><Info className="text-white h-4 w-4" /></div>
              <div>
                <p className="text-sm font-bold text-blue-900">Auto-Fill Active</p>
                <p className="text-[11px] text-blue-700 font-medium">Your PwD Profile data is auto-linked to this {reportType.toLowerCase()}.</p>
              </div>
            </div>
          </div>

          <Card className="border-slate-200 rounded-[32px] shadow-sm overflow-hidden bg-white">
            <CardHeader className="bg-slate-50/50 border-b border-slate-100 p-8">
              <CardTitle className="text-sm font-black text-slate-400 uppercase tracking-[0.2em] flex items-center gap-2">
                {reportType === 'GRIEVANCE' && <MessageSquare size={16} className="text-blue-600" />}
                {reportType === 'PHYSICAL_ACCESS' && <Camera size={16} className="text-orange-600" />}
                {reportType === 'DIGITAL_ACCESS' && <Globe size={16} className="text-purple-600" />}
                {reportType.replace('_', ' ')} Details
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8 space-y-8">

              {/* SECTION A: PHYSICAL ACCESSIBILITY SPECIFIC FIELDS */}
              {reportType === 'PHYSICAL_ACCESS' && (
                <div className="space-y-6 animate-in slide-in-from-left-2 duration-300">
                  <div className="p-6 bg-orange-50/50 border border-orange-100 rounded-2xl flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 bg-white rounded-xl flex items-center justify-center text-orange-600 shadow-sm">
                        <Navigation size={24} />
                      </div>
                      <div>
                        <p className="text-xs font-black text-slate-400 uppercase tracking-widest">Auto Geo-Tagging</p>
                        <p className="text-sm font-bold text-slate-800">GPS: 26.8467° N, 80.9462° E ( लखनऊ )</p>
                      </div>
                    </div>
                    <Badge className="bg-green-100 text-green-700 border-2 font-bold">Location Locked</Badge>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[11px] font-black uppercase text-slate-500 ml-1">Landmark / Specific Address (Optional)</label>
                    <div className="relative">
                      <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                      <Input className="pl-11 h-12 bg-slate-50 border-2 rounded-xl" placeholder="e.g. Near Entry Gate 2, Metro Station" />
                    </div>
                  </div>
                </div>
              )}

              {/* SECTION B: DIGITAL ACCESSIBILITY SPECIFIC FIELDS */}
              {reportType === 'DIGITAL_ACCESS' && (
                <div className="space-y-6 animate-in slide-in-from-left-2 duration-300">
                  <div className="space-y-2">
                    <label className="text-[11px] font-black uppercase text-slate-500 ml-1">Website / App URL</label>
                    <div className="relative">
                      <LinkIcon className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                      <Input className="pl-11 h-12 bg-slate-50 border-2 rounded-xl" placeholder="https://example-government-portal.gov.in" />
                    </div>
                  </div>
                </div>
              )}

              {/* SHARED FIELDS: DESCRIPTION */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <label className="text-[11px] font-black uppercase text-slate-500 ml-1">Description of Issue</label>
                  <button className="flex items-center gap-1.5 text-blue-600 font-bold text-[10px] uppercase tracking-wider bg-blue-50 px-3 py-1 rounded-full border border-blue-100 transition-all hover:bg-blue-100">
                    <Sparkles size={12} /> AI Narrative Assist
                  </button>
                </div>
                <Textarea
                  className="min-h-[140px] rounded-2xl bg-slate-50 border-2 p-4 resize-none placeholder:text-slate-400 font-medium"
                  placeholder={reportType === 'PHYSICAL_ACCESS' ? "Describe the barrier (e.g. Broken ramp, inaccessible toilet...)" : "Explain what is inaccessible (e.g. Screen reader not working, no alt text...)"}
                />
              </div>

              {/* SECTION C: UPLOAD LOGIC (7.2 MANDATORY VS OPTIONAL) */}
              <div className="space-y-4 pt-4 border-t border-slate-50">
                <div className="flex justify-between items-end">
                  <label className="text-[11px] font-black uppercase text-slate-500 ml-1">
                    {reportType === 'PHYSICAL_ACCESS' ? 'Photo Upload (Mandatory)' : 'Supporting Upload (Optional)'}
                  </label>
                  {reportType === 'PHYSICAL_ACCESS' && <Badge variant="destructive" className="text-[9px] font-black uppercase">Required for GPS Verification</Badge>}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className={`border-2 border-dashed rounded-2xl p-8 flex flex-col items-center justify-center transition-all cursor-pointer group ${reportType === 'PHYSICAL_ACCESS' ? 'border-orange-200 bg-orange-50/20 hover:bg-orange-50' : 'border-slate-100 bg-slate-50/50 hover:bg-slate-50'}`}>
                    <Upload className={`${reportType === 'PHYSICAL_ACCESS' ? 'text-orange-400' : 'text-slate-300'} mb-2`} size={28} />
                    <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">
                      {reportType === 'PHYSICAL_ACCESS' ? 'Take / Upload Photo' : 'Upload Screenshot'}
                    </span>
                  </div>
                  {/* Uploaded Item State */}
                  <div className="bg-white border border-slate-100 rounded-2xl p-4 flex items-center justify-between shadow-sm">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600"><FileText size={20} /></div>
                      <div className="flex flex-col">
                        <span className="text-xs font-bold text-slate-700 uppercase tracking-tighter">barrier_view_01.jpg</span>
                        <span className="text-[9px] text-green-600 font-black uppercase">Captured via GPS Cam</span>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" className="text-slate-400 hover:text-red-500">Remove</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-end items-center gap-6">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Draft saved at 14:02</span>
            <Button
              className="bg-slate-900 text-white hover:bg-black rounded-xl px-12 font-black shadow-xl h-14 uppercase tracking-[0.15em] transition-all hover:scale-[1.02]"
            >
              Submit {reportType === 'GRIEVANCE' ? 'Grievance' : 'Access Report'}
            </Button>
          </div>
        </div>

        {/* SIDEBAR - RULES & SLA */}
        <div className="space-y-6">
          <Card className="rounded-[32px] border-2 bg-gradient-to-br from-slate-900 to-slate-800 text-white shadow-xl p-8">
            <div className="h-12 w-12 bg-white/10 rounded-2xl flex items-center justify-center mb-6">
              <ShieldAlert className="text-blue-400" />
            </div>
            <h3 className="text-xl font-bold mb-2 tracking-tight">Enforcement Logic</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Accessibility reports are routed directly to the <span className="text-blue-400 font-bold">District Grievance Redressal Officer (GRO)</span> for immediate inspection and directions.
            </p>
            <div className="flex items-center gap-2 px-3 py-2 bg-white/5 rounded-xl border border-white/10">
              <CheckCircle2 size={14} className="text-green-400" />
              <span className="text-[10px] font-black uppercase tracking-wider">Statutory Rights Guaranteed</span>
            </div>
          </Card>

          <Card className="rounded-[32px] border-slate-200 shadow-sm p-8 bg-white">
            <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-6">Reporting Requirements</h4>
            <div className="space-y-6">
              <RequirementItem
                icon={<Navigation size={14} />}
                label="Auto GPS"
                desc="System automatically records coordinates for physical barriers."
              />
              <RequirementItem
                icon={<Camera size={14} />}
                label="Photo Mandatory"
                desc="Physical barrier reports require live photo verification."
              />
              <RequirementItem
                icon={<LinkIcon size={14} />}
                label="URL Accuracy"
                desc="Please provide exact URL where digital barrier exists."
              />
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

/* UI HELPER COMPONENTS */

function TabBtn({ active, onClick, label }: { active: boolean, onClick: () => void, label: string }) {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${active ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-700'
        }`}
    >
      {label}
    </button>
  );
}

function RequirementItem({ icon, label, desc }: { icon: React.ReactNode, label: string, desc: string }) {
  return (
    <div className="flex gap-4">
      <div className="h-8 w-8 rounded-lg bg-slate-50 flex items-center justify-center text-slate-400 shrink-0 border border-slate-100">
        {icon}
      </div>
      <div className="space-y-0.5">
        <p className="text-xs font-black text-slate-800 uppercase tracking-tight">{label}</p>
        <p className="text-[11px] text-slate-500 font-medium leading-normal">{desc}</p>
      </div>
    </div>
  );
}