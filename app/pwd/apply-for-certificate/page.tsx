// app/dashboard/pwd/apply-certificate/page.tsx
"use client";
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  CheckCircle2,
  Upload,
  FileText,
  Info,
  UserCheck,
  Activity,
  AlertCircle,
  ArrowRight,
  ShieldCheck
} from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";

export default function ApplyCertificatePage() {
  const [isPermanent, setIsPermanent] = useState<string>("permanent");

  // Mock State for Uploads
  const [uploads, setUploads] = useState({
    identity: true,
    address: false,
    medical: false
  });

  return (
    <div className="max-w-4xl mx-auto pb-20 animate-in fade-in slide-in-from-bottom-4 duration-700">

      {/* 1. HEADER & SYNC STATUS */}
      <div className="mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-black text-slate-900 tracking-tight">Apply for Disability Certificate</h1>
          <p className="text-slate-500 font-medium">Form No. 6 under PwD Rules, 2017</p>
        </div>
        <Badge className="bg-blue-50 text-blue-700 border-blue-200 px-4 py-2 flex gap-2 items-center rounded-xl">
          <ShieldCheck size={14} />
          <span className="text-[10px] font-black uppercase tracking-widest">Profile Synced</span>
        </Badge>
      </div>

      <div className="space-y-8">

        {/* 2. AUTO-FILLED SECTION (READ ONLY) */}
        <Card className="border-slate-200 shadow-sm rounded-[32px] overflow-hidden">
          <CardHeader className="bg-slate-50/50 p-6 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <UserCheck size={18} className="text-blue-600" />
              <CardTitle className="text-xs font-black uppercase text-slate-500 tracking-widest">Step 1: Verify Profile Data</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <ReadOnlyField label="Full Name" value="Amit Kumar" />
            <ReadOnlyField label="Date of Birth" value="12 Aug 1994" />
            <ReadOnlyField label="Disability Type" value="Locomotor Disability (Leg)" />
            <ReadOnlyField label="Mobile Number" value="+91 98765 43210" />
            <div className="md:col-span-2 p-4 bg-blue-50/50 rounded-2xl border border-blue-100 flex items-start gap-3">
              <Info size={16} className="text-blue-600 mt-0.5" />
              <p className="text-xs text-blue-700 leading-relaxed font-medium">
                The above information is fetched from your Master Profile. To change these details, please visit the <strong>My Profile</strong> section before proceeding.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* 3. ADDITIONAL INPUTS */}
        <Card className="border-slate-200 shadow-sm rounded-[32px]">
          <CardHeader className="p-6 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <Activity size={18} className="text-purple-600" />
              <CardTitle className="text-xs font-black uppercase text-slate-500 tracking-widest">Step 2: Additional Details</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="p-8 space-y-8">
            <div className="space-y-4">
              <Label className="text-[11px] font-black uppercase text-slate-500 tracking-widest">Nature of Disability</Label>
              <RadioGroup
                defaultValue="permanent"
                onValueChange={setIsPermanent}
                className="flex flex-col md:flex-row gap-4"
              >
                <div className={`flex-1 flex items-center space-x-3 space-y-0 p-4 rounded-2xl border transition-all cursor-pointer ${isPermanent === 'permanent' ? 'border-blue-600 bg-blue-50/30' : 'border-slate-100 bg-slate-50'}`}>
                  <RadioGroupItem value="permanent" id="permanent" className="text-blue-600" />
                  <Label htmlFor="permanent" className="font-bold text-sm cursor-pointer">Permanent Disability</Label>
                </div>
                <div className={`flex-1 flex items-center space-x-3 space-y-0 p-4 rounded-2xl border transition-all cursor-pointer ${isPermanent === 'temporary' ? 'border-blue-600 bg-blue-50/30' : 'border-slate-100 bg-slate-50'}`}>
                  <RadioGroupItem value="temporary" id="temporary" className="text-blue-600" />
                  <Label htmlFor="temporary" className="font-bold text-sm cursor-pointer">Temporary / Under Treatment</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="space-y-3">
              <Label className="text-[11px] font-black uppercase text-slate-500 tracking-widest">Additional Remarks (Optional)</Label>
              <Textarea
                placeholder="Briefly describe the history of the disability or existing treatment details..."
                className="rounded-2xl border-2 bg-slate-50 p-4 focus-visible:ring-blue-600 min-h-[120px]"
              />
            </div>
          </CardContent>
        </Card>

        {/* 4. MANDATORY UPLOADS */}
        <Card className="border-slate-200 shadow-sm rounded-[32px]">
          <CardHeader className="p-6 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <FileText size={18} className="text-orange-600" />
              <CardTitle className="text-xs font-black uppercase text-slate-500 tracking-widest">Step 3: Mandatory Documents (Exactly Three)</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <UploadSlot
                label="1. Identity Proof"
                desc="Aadhar, PAN, or Voter ID"
                uploaded={uploads.identity}
              />
              <UploadSlot
                label="2. Address Proof"
                desc="Ration Card or Utility Bill"
                uploaded={uploads.address}
              />
              <UploadSlot
                label="3. Medical Document"
                desc="Recent Hospital Report"
                uploaded={uploads.medical}
              />
            </div>

            {(!uploads.identity || !uploads.address || !uploads.medical) && (
              <div className="mt-6 flex items-center gap-2 text-red-500 bg-red-50 px-4 py-3 rounded-2xl border border-red-100">
                <AlertCircle size={16} />
                <span className="text-[10px] font-black uppercase tracking-tight">All three documents are mandatory for submission</span>
              </div>
            )}
          </CardContent>
        </Card>

        {/* 5. SUBMISSION ACTION */}
        <div className="flex items-center justify-between p-8 bg-white border border-slate-200 rounded-[32px] shadow-sm">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center">
              <CheckCircle2 />
            </div>
            <div>
              <p className="font-bold text-slate-800">Final Step</p>
              <p className="text-xs text-slate-500">I hereby declare all information is true as per my knowledge.</p>
            </div>
          </div>
          <Button
            disabled={!uploads.identity || !uploads.address || !uploads.medical}
            className="bg-blue-600 hover:bg-blue-700 rounded-xl px-10 h-14 font-black text-sm uppercase tracking-widest shadow-xl shadow-blue-100 gap-3"
          >
            Submit Application <ArrowRight size={18} />
          </Button>
        </div>

      </div>
    </div>
  );
}

/* HELPER COMPONENTS */

function ReadOnlyField({ label, value }: { label: string, value: string }) {
  return (
    <div className="space-y-1">
      <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest">{label}</p>
      <p className="text-sm font-bold text-slate-700">{value}</p>
    </div>
  );
}

function UploadSlot({ label, desc, uploaded }: { label: string, desc: string, uploaded: boolean }) {
  return (
    <div className={`relative p-6 rounded-[24px] border-2 border-dashed transition-all flex flex-col items-center text-center gap-3 group cursor-pointer ${uploaded ? 'border-green-200 bg-green-50/50' : 'border-slate-200 bg-slate-50 hover:bg-white hover:border-blue-300'
      }`}>
      <div className={`h-12 w-12 rounded-2xl flex items-center justify-center shadow-sm transition-colors ${uploaded ? 'bg-white text-green-600' : 'bg-white text-slate-400 group-hover:text-blue-600'
        }`}>
        {uploaded ? <CheckCircle2 size={24} /> : <Upload size={24} />}
      </div>
      <div>
        <p className={`text-[11px] font-black uppercase tracking-tight ${uploaded ? 'text-green-700' : 'text-slate-800'}`}>{label}</p>
        <p className="text-[9px] font-medium text-slate-400 mt-1 leading-tight">{desc}</p>
      </div>
      {uploaded && (
        <Badge className="absolute -top-2 -right-2 bg-green-600 text-white border-2 text-[8px] font-black uppercase">Ready</Badge>
      )}
    </div>
  );
}