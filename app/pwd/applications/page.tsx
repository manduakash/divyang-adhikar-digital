// app/dashboard/pwd/applications/page.tsx
"use client";
import React from 'react';
import { 
  FileText, 
  Download, 
  Clock, 
  CheckCircle2, 
  XCircle, 
  Search, 
  Filter, 
  MoreVertical,
  ChevronRight,
  Hospital
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Mock Data for the 3 Application States
const applications = [
  {
    id: "CRT-99210",
    type: "Disability Certificate",
    submissionDate: "Oct 01, 2024",
    lastUpdate: "Oct 12, 2024",
    status: "Closed", // Generated
    authority: "CMO Office, Lucknow",
    description: "Permanent Disability Certificate (Locomotor)",
    isGenerated: true,
  },
  {
    id: "CRT-99554",
    type: "Disability Certificate",
    submissionDate: "Oct 15, 2024",
    lastUpdate: "Oct 16, 2024",
    status: "Under Review", // Pending
    authority: "Medical Board, KGMU",
    description: "Renewal of Disability Certificate",
    isGenerated: false,
  },
  {
    id: "CRT-88123",
    type: "Disability Certificate",
    submissionDate: "Sep 10, 2024",
    lastUpdate: "Sep 25, 2024",
    status: "Action Taken", // Rejected
    authority: "District Certifying Authority",
    description: "New Application (Hearing Impairment)",
    isRejected: true,
    remarks: "Medical Document mismatch: The uploaded audiogram does not match the applicant's identity details. Please re-upload verified documents.",
  }
];

export default function ApplicationsPage() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      
      {/* 1. PAGE HEADER */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-black text-slate-900 tracking-tight">My Applications</h1>
          <p className="text-slate-500 font-medium">Track and download your statutory certificates and documents.</p>
        </div>
        <div className="flex gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input 
              className="pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-500 outline-none w-64" 
              placeholder="Search by ID..."
            />
          </div>
          <Button variant="outline" className="rounded-xl border-slate-200">
            <Filter size={16} className="mr-2" /> Filter
          </Button>
        </div>
      </div>

      {/* 2. STATS SUMMARY */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <SummaryCard count="01" label="Generated" color="text-green-600" bg="bg-green-50" />
        <SummaryCard count="01" label="Under Review" color="text-orange-600" bg="bg-orange-50" />
        <SummaryCard count="01" label="Rejected" color="text-red-600" bg="bg-red-50" />
      </div>

      {/* 3. UNIFIED LIST VIEW */}
      <div className="space-y-4">
        {applications.map((app) => (
          <Card key={app.id} className="border-slate-200 overflow-hidden hover:shadow-lg transition-all rounded-3xl group">
            <CardContent className="p-0">
              <div className="flex flex-col lg:flex-row">
                
                {/* ID & Type Section */}
                <div className="p-6 lg:w-1/4 border-b lg:border-b-0 lg:border-r border-slate-100 bg-slate-50/30">
                  <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest bg-blue-50 px-2 py-1 rounded-md">
                    {app.id}
                  </span>
                  <h3 className="text-lg font-black text-slate-800 mt-3 leading-tight">{app.type}</h3>
                  <div className="flex items-center gap-2 mt-4 text-slate-500">
                    <Hospital size={14} />
                    <span className="text-xs font-bold">{app.authority}</span>
                  </div>
                </div>

                {/* Status & Timeline Section */}
                <div className="p-6 lg:w-2/4 flex flex-col justify-center gap-6">
                  <div className="flex flex-wrap gap-8">
                    <DataPoint label="Submitted On" value={app.submissionDate} />
                    <DataPoint label="Last Updated" value={app.lastUpdate} />
                    <div className="space-y-1">
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Current Status</p>
                      <StatusBadge status={app.status} />
                    </div>
                  </div>
                  
                  {app.isRejected && (
                    <div className="p-3 bg-red-50 border border-red-100 rounded-xl">
                      <p className="text-[10px] font-black text-red-700 uppercase mb-1">Rejection Remarks</p>
                      <p className="text-xs text-red-600 font-medium leading-relaxed italic">"{app.remarks}"</p>
                    </div>
                  )}
                </div>

                {/* Actions Section */}
                <div className="p-6 lg:w-1/4 flex flex-row lg:flex-col items-center justify-center gap-3 bg-slate-50/30">
                  {app.isGenerated ? (
                    <Button className="w-full bg-green-600 hover:bg-green-700 rounded-xl font-bold shadow-lg shadow-green-100 gap-2">
                      <Download size={16} /> Download Certificate
                    </Button>
                  ) : app.isRejected ? (
                    <Button variant="outline" className="w-full border-red-200 text-red-600 hover:bg-red-50 rounded-xl font-bold gap-2">
                      <Download size={16} /> Rejection Order (PDF)
                    </Button>
                  ) : (
                    <Button variant="ghost" className="w-full text-blue-600 font-bold hover:bg-blue-50 gap-2 rounded-xl">
                      View Application Details <ChevronRight size={16} />
                    </Button>
                  )}
                </div>

              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

/* HELPER COMPONENTS */

function SummaryCard({ count, label, color, bg }: { count: string, label: string, color: string, bg: string }) {
  return (
    <div className={`p-6 rounded-[32px] border border-slate-100 shadow-sm flex items-center justify-between bg-white`}>
      <div>
        <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">{label}</p>
        <p className={`text-3xl font-black ${color} mt-1`}>{count}</p>
      </div>
      <div className={`h-12 w-12 rounded-2xl ${bg} flex items-center justify-center ${color}`}>
        {label === 'Generated' ? <CheckCircle2 /> : label === 'Rejected' ? <XCircle /> : <Clock />}
      </div>
    </div>
  );
}

function DataPoint({ label, value }: { label: string, value: string }) {
  return (
    <div className="space-y-1">
      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{label}</p>
      <p className="text-sm font-bold text-slate-700">{value}</p>
    </div>
  );
}

function StatusBadge({ status }: { status: string }) {
  const styles: { [key: string]: string } = {
    "Closed": "bg-green-100 text-green-700 border-green-200",
    "Under Review": "bg-orange-100 text-orange-700 border-orange-200",
    "Action Taken": "bg-red-100 text-red-700 border-red-200",
    "Submitted": "bg-blue-100 text-blue-700 border-blue-200",
    "Compliance Pending": "bg-purple-100 text-purple-700 border-purple-200",
  };

  return (
    <Badge className={`rounded-full px-4 py-1 text-[10px] font-black uppercase tracking-widest border shadow-none ${styles[status] || "bg-slate-100 text-slate-600"}`}>
      {status === 'Closed' ? 'Certificate Issued' : status === 'Action Taken' ? 'Rejected' : status}
    </Badge>
  );
}