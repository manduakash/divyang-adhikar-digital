// app/dashboard/scpd/fact-sheets/district/page.tsx
"use client";
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Map, Globe, Download, FileText, 
  Printer, ShieldCheck, Search, Filter,
  Users, Building2, Gavel, Briefcase,
  GraduationCap, Accessibility, Scale, 
  History, Clock, AlertTriangle, TrendingUp,
  MapPin, CheckCircle2, Siren, LayoutGrid,
  ChevronDown, Activity,
  ArrowUpRight,
  MessageSquare
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function DistrictFactSheet() {
  return (
    <div className="space-y-10 animate-in fade-in duration-700 pb-20 font-sans selection:bg-indigo-100">
      
      {/* A4.1 HEADER - ADMINISTRATIVE HUB */}
      <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-6 bg-white p-10 rounded-[48px] border border-slate-200 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 p-10 opacity-[0.03] pointer-events-none">
            <Map size={200} className="text-indigo-600" />
        </div>
        
        <div className="space-y-4 relative z-10">
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 bg-indigo-600 rounded-2xl flex items-center justify-center text-white shadow-xl shadow-indigo-200">
                <MapPin size={24} />
            </div>
            <div>
                <h1 className="text-5xl font-black text-slate-900 tracking-tighter uppercase leading-none">Lucknow Hub</h1>
                <p className="text-[10px] font-black text-indigo-600 uppercase tracking-[0.3em] mt-2 flex items-center gap-2">
                    <Globe size={12} /> Division: Central Zone • Node ID: LKO-01
                </p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 relative z-10">
            <div className="bg-slate-50 p-1.5 rounded-2xl border border-slate-100 flex items-center gap-2">
                <span className="text-[9px] font-black uppercase text-slate-400 ml-3">Period</span>
                <Select defaultValue="90">
                    <SelectTrigger className="h-10 w-32 rounded-xl bg-white border-none font-black text-[10px] uppercase shadow-sm">
                        <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="rounded-xl border-slate-100">
                        <SelectItem value="30">Last 30 Days</SelectItem>
                        <SelectItem value="90">Last 90 Days</SelectItem>
                        <SelectItem value="180">Last 180 Days</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <Button variant="outline" className="h-14 px-8 rounded-2xl border-slate-200 font-black uppercase tracking-widest text-[10px] bg-white gap-2 shadow-sm">
                <Download size={18} className="text-green-600" /> Export XLS
            </Button>
            <Button className="h-14 px-10 rounded-2xl bg-slate-900 text-white font-black uppercase tracking-widest text-[10px] shadow-2xl hover:bg-black transition-all gap-2">
                <Printer size={18} /> Print Fact Sheet
            </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
        
        {/* SECTION 1: COVERAGE */}
        <FactSection title="Inclusion Coverage" color="from-blue-600 to-blue-800" icon={<Users/>}>
            <Metric label="Total PwDs" val="14,502" />
            <Metric label="Establishments" val="482" sub="Govt / Pvt" />
            <Metric label="Educational Inst." val="842" sub="Verified" />
            <Metric label="Registered Orgs" val="114" />
        </FactSection>

        {/* SECTION 2: GRIEVANCES */}
        <FactSection title="Grievance SLA" color="from-purple-600 to-indigo-800" icon={<MessageSquare/>}>
            <Metric label="Total Received" val="1,240" />
            <Metric label="Resolved Hub" val="1,156" success />
            <Metric label="Pending Node" val="84" />
            <Metric label="SLA Overdue" val="12" alert />
        </FactSection>

        {/* SECTION 3: DIRECTIONS */}
        <FactSection title="State Directions" color="from-slate-700 to-slate-900" icon={<Gavel/>}>
            <Metric label="Total Issued" val="45" />
            <Metric label="Complied" val="32" success />
            <Metric label="Within Timeline" val="08" />
            <Metric label="Overdue Orders" val="05" alert />
        </FactSection>

        {/* SECTION 4: EMPLOYMENT */}
        <FactSection title="Workforce Audit" color="from-emerald-500 to-teal-700" icon={<Briefcase/>}>
            <Metric label="Total Workforce" val="124K" />
            <Metric label="PwD Employees" val="5,210" />
            <Metric label="Mandate %" val="4.2%" success />
            <Metric label="Pending Vacancy" val="630" alert />
        </FactSection>

        {/* SECTION 5: RETURNS */}
        <FactSection title="Exchange Returns" color="from-orange-500 to-amber-700" icon={<History/>}>
            <Metric label="Units Required" val="482" />
            <Metric label="Submitted" val="420" />
            <Metric label="Overdue Units" val="32" alert />
            <Metric label="Not Submitted" val="30" alert />
        </FactSection>

        {/* SECTION 6: ACCESSIBILITY */}
        <FactSection title="Access Compliance" color="from-indigo-600 to-blue-900" icon={<Accessibility/>}>
            <div className="space-y-4">
                <div className="space-y-1">
                    <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest">Physical Infrastructure</p>
                    <div className="flex gap-1 h-2 w-full rounded-full overflow-hidden bg-slate-100 shadow-inner">
                        <div className="bg-green-500 w-[70%]" />
                        <div className="bg-orange-400 w-[20%]" />
                        <div className="bg-red-500 w-[10%]" />
                    </div>
                </div>
                <div className="space-y-1">
                    <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest">Digital Platforms</p>
                    <div className="flex gap-1 h-2 w-full rounded-full overflow-hidden bg-slate-100 shadow-inner">
                        <div className="bg-green-500 w-[40%]" />
                        <div className="bg-orange-400 w-[30%]" />
                        <div className="bg-red-500 w-[30%]" />
                    </div>
                </div>
            </div>
        </FactSection>

        {/* SECTION 7: EDUCATION */}
        <FactSection title="Education Inclusion" color="from-cyan-600 to-blue-800" icon={<GraduationCap/>}>
            <Metric label="PwD Enrolment" val="5,210" />
            <Metric label="Support Requests" val="120" />
            <Metric label="Provided" val="115" success />
            <Metric label="Default Inst." val="08" alert />
        </FactSection>

        {/* SECTION 8: COURT / CASE */}
        <FactSection title="Judicial Registry" color="from-rose-600 to-red-900" icon={<Scale/>}>
            <Metric label="Total Cases" val="24" />
            <Metric label="Trials Pending" val="18" />
            <Metric label="Beyond Threshold" val="06" alert />
            <Metric label="7D Hearings" val="05" />
        </FactSection>

      </div>

      {/* FOOTER - PERFORMANCE LINKS */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-10 border-t border-slate-200">
        <div className="flex gap-8">
            <FooterLink label="Top 5 Establishments" />
            <FooterLink label="Bottom 5 Laggards" alert />
            <FooterLink label="Institutional Depth" />
        </div>
        <div className="flex items-center gap-3 bg-slate-900 px-6 py-3 rounded-2xl text-white shadow-xl">
            <Clock size={16} className="text-indigo-400" />
            <span className="text-[10px] font-black uppercase tracking-widest">Last District Sync: 14 Oct, 09:42 AM</span>
        </div>
      </div>

    </div>
  );
}

/* UI SUB-COMPONENTS */

function FactSection({ title, color, icon, children }: any) {
    return (
        <Card className="rounded-[40px] border-slate-200 shadow-sm overflow-hidden bg-white group hover:shadow-xl transition-all duration-500">
            <CardHeader className={`p-6 bg-gradient-to-r ${color} text-white relative`}>
                {/* Texture Overlay */}
                <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
                <div className="flex items-center gap-3 relative z-10">
                    <div className="h-8 w-8 rounded-xl bg-white/20 backdrop-blur-md border border-white/20 flex items-center justify-center">
                        {React.cloneElement(icon, { size: 16 })}
                    </div>
                    <CardTitle className="text-[10px] font-black uppercase tracking-[0.2em]">{title}</CardTitle>
                </div>
            </CardHeader>
            <CardContent className="p-8 space-y-6 relative overflow-hidden">
                {/* Subtle Background Pattern */}
                <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
                <div className="relative z-10 space-y-6">
                    {children}
                </div>
            </CardContent>
        </Card>
    )
}

function Metric({ label, val, sub, alert, success }: any) {
    return (
        <div className="flex justify-between items-end group/metric cursor-default">
            <div className="space-y-1">
                <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest group-hover/metric:text-indigo-600 transition-colors">{label}</p>
                {sub && <p className="text-[8px] font-bold text-slate-300 uppercase leading-none">{sub}</p>}
            </div>
            <div className="text-right">
                <p className={`text-xl font-black tracking-tighter leading-none ${alert ? 'text-red-600' : success ? 'text-green-600' : 'text-slate-900'}`}>{val}</p>
            </div>
        </div>
    )
}

function FooterLink({ label, alert }: any) {
    return (
        <button className={`text-[10px] font-black uppercase tracking-widest flex items-center gap-2 transition-all hover:gap-3 ${alert ? 'text-red-600' : 'text-slate-400 hover:text-indigo-600'}`}>
            {label} <ArrowUpRight size={14} />
        </button>
    )
}