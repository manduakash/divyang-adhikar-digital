// app/dashboard/pp/alerts/page.tsx
"use client";
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Bell, Scale, Gavel, Clock, Calendar, 
  ShieldAlert, History, AlertTriangle, ArrowRight,
  Filter, Search, Timer, CheckCircle2, Eye,
  Lock, Settings2, Trash2, Send, Radio
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

type AlertType = 'ALL' | 'HEARING' | 'STAGNANT' | 'COMPLIANCE' | 'LIMITATION';

export default function PPAlertsPage() {
  const [filter, setFilter] = useState<AlertType>('ALL');

  return (
    <div className="space-y-10 animate-in fade-in duration-700 pb-20 font-sans">
      
      {/* 1. JUDICIAL ALERT HEADER */}
      <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-6 bg-white p-10 rounded-[40px] border border-slate-200 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 p-10 opacity-[0.03] pointer-events-none">
            <ShieldAlert size={180} className="text-red-600" />
        </div>
        <div className="space-y-2 relative z-10">
          <div className="inline-flex items-center gap-2 bg-red-50 text-red-700 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border border-red-100">
            <Radio size={14} className="animate-pulse" /> Judicial Risk Monitor Active
          </div>
          <h1 className="text-4xl font-black text-slate-900 tracking-tighter uppercase leading-none">Judicial Alerts Hub</h1>
          <p className="text-slate-500 font-medium italic">Monitoring Limitation Periods, Hearing Schedules, and Compliance Defaults.</p>
        </div>
        <div className="flex gap-4 relative z-10">
            <Button variant="outline" className="h-16 px-8 rounded-2xl border-slate-200 font-bold bg-white hover:bg-slate-50 gap-2">
                <Settings2 size={20} className="text-slate-400" /> Alert Thresholds
            </Button>
            <Button className="h-16 px-10 rounded-2xl bg-slate-950 text-white font-black uppercase tracking-widest text-xs shadow-2xl gap-2 hover:bg-black transition-all">
                <Send size={20} className="text-blue-400 fill-blue-400" /> Notify Authorities
            </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        
        {/* 2. STATUTORY CATEGORY FILTERS */}
        <div className="lg:col-span-1 space-y-3 sticky top-8 h-fit">
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-4 mb-4">Risk Categories</p>
            <AlertTab active={filter === 'ALL'} onClick={() => setFilter('ALL')} label="All Legal Alerts" count="18" icon={<Bell size={16}/>} />
            <AlertTab active={filter === 'HEARING'} onClick={() => setFilter('HEARING')} label="Upcoming Hearings" count="05" icon={<Calendar size={16}/>} color="border-blue-600" />
            <AlertTab active={filter === 'STAGNANT'} onClick={() => setFilter('STAGNANT')} label="Stagnant Cases" count="08" icon={<Timer size={16}/>} color="border-red-600" />
            <AlertTab active={filter === 'COMPLIANCE'} onClick={() => setFilter('COMPLIANCE')} label="Order Defaults" count="03" icon={<ShieldAlert size={16}/>} color="border-orange-500" />
            <AlertTab active={filter === 'LIMITATION'} onClick={() => setFilter('LIMITATION')} label="Limitation Expiry" count="02" icon={<History size={16}/>} color="border-rose-600" />
            
            {/* VISIBILITY LEDGER (Statutory Requirement) */}
            <Card className="mt-8 rounded-[32px] border-none bg-slate-900 text-white p-6 shadow-xl relative overflow-hidden">
                <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
                <div className="relative z-10 space-y-4">
                    <h4 className="text-[10px] font-black text-blue-400 uppercase tracking-widest">Visibility Registry</h4>
                    <div className="space-y-3">
                        <VisibilityUser label="District Magistrate" access="View Only" />
                        <VisibilityUser label="State Commissioner" access="View Only" />
                        <VisibilityUser label="District PP" access="Full Control" active />
                    </div>
                </div>
            </Card>
        </div>

        {/* 3. DYNAMIC ALERTS FEED */}
        <div className="lg:col-span-3 space-y-6">
            
            {/* ALERT: UPCOMING HEARING */}
            <JudicialAlertCard 
                category="Upcoming Hearing"
                id="CP/LKO/PwD/091"
                title="Cross Examination of Prosecution Witness (PW-1)"
                court="Special Court PwD - Court Room 4"
                time="24 Oct 2024 (10:30 AM)"
                severity="blue"
                desc="Case involving Section 92 atrocities. Pre-hearing briefing with the victim's guardian required."
                icon={<Calendar />}
                action="Review File"
            />

            {/* ALERT: BEYOND THRESHOLD (STAGNANT) */}
            <JudicialAlertCard 
                category="Cases Beyond Threshold"
                id="CP/LKO/PwD/2022-12"
                title="State vs. Global Tech Hub (Pvt)"
                court="District & Sessions Court"
                time="Pending: 480 Days"
                severity="red"
                desc="Trial stagnant at 'Evidence' stage. Defense has sought 4 consecutive adjournments. Threshold crossed."
                icon={<Timer />}
                action="Oppose Adjournment"
                alert
            />

            {/* ALERT: ORDER COMPLIANCE */}
            <JudicialAlertCard 
                category="Orders Awaiting Compliance"
                id="ORDER-REF-9921-LKO"
                title="Mandatory Barrier Removal Directive"
                court="Issued to: Nagar Nigam Office"
                time="Overdue: 14 Days"
                severity="orange"
                desc="The Hon'ble Court's order dated 10-Sep-2024 to provide tactile floor mapping has not been fulfilled."
                icon={<ShieldAlert />}
                action="Initiate Execution"
                alert
            />

            {/* ALERT: LIMITATION PERIOD */}
            <JudicialAlertCard 
                category="Appeals Limitation"
                id="JUDG-2024-44"
                title="Limitation Period Nearing Expiry"
                court="State vs. Railway Annex"
                time="48 Hours Remaining"
                severity="rose"
                desc="Window for filing an appeal before the High Court against the partial acquittal expires on 22-Oct."
                icon={<History />}
                action="File Appeal"
                alert
            />

        </div>
      </div>
    </div>
  );
}

/* UI SUB-COMPONENTS */

function AlertTab({ active, onClick, label, count, icon, color }: any) {
    return (
        <button 
            onClick={onClick}
            className={`w-full flex items-center justify-between p-4 rounded-2xl transition-all group border-l-4 ${
                active 
                ? 'bg-slate-900 text-white shadow-xl' 
                : `bg-white text-slate-500 hover:bg-slate-50 ${color || 'border-transparent'}`
            }`}
        >
            <div className="flex items-center gap-3">
                <div className={`${active ? 'text-blue-400' : 'text-slate-300 group-hover:text-blue-600'}`}>{icon}</div>
                <span className="text-[10px] font-black uppercase tracking-widest">{label}</span>
            </div>
            <span className={`text-[10px] font-black px-2 py-0.5 rounded-md ${active ? 'bg-white/10 text-white' : 'bg-slate-100 text-slate-600'}`}>{count}</span>
        </button>
    )
}

function VisibilityUser({ label, access, active }: any) {
    return (
        <div className="flex items-center justify-between opacity-80 group hover:opacity-100 transition-opacity">
            <div className="flex items-center gap-2">
                <div className={`h-1.5 w-1.5 rounded-full ${active ? 'bg-blue-400 animate-pulse' : 'bg-slate-600'}`} />
                <span className="text-[9px] font-bold uppercase tracking-tight">{label}</span>
            </div>
            <span className="text-[8px] font-black text-slate-500 uppercase tracking-tighter">{access}</span>
        </div>
    )
}

function JudicialAlertCard({ category, id, title, court, time, desc, severity, icon, action, alert }: any) {
    const variants: any = {
        blue: { border: 'border-l-blue-600', bg: 'bg-blue-50/30', text: 'text-blue-700' },
        red: { border: 'border-l-red-600', bg: 'bg-red-50/50', text: 'text-red-700' },
        orange: { border: 'border-l-orange-500', bg: 'bg-orange-50/30', text: 'text-orange-700' },
        rose: { border: 'border-l-rose-600', bg: 'bg-rose-50/50', text: 'text-rose-700' }
    };

    return (
        <Card className={`rounded-[40px] border border-slate-200 border-l-[14px] ${variants[severity].border} ${variants[severity].bg} shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden group`}>
            <CardContent className="p-8">
                <div className="flex flex-col xl:flex-row justify-between items-start gap-8">
                    <div className="flex-1 space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="p-2.5 rounded-xl bg-white shadow-sm border border-slate-100 text-slate-400 group-hover:text-slate-900 transition-colors">
                                {React.cloneElement(icon, { size: 18 })}
                            </div>
                            <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.25em]">{category}</span>
                        </div>
                        <div className="space-y-1">
                            <div className="flex items-center gap-3">
                                <span className="text-xs font-mono font-black text-blue-600 bg-blue-50 px-2 py-0.5 rounded-md">{id}</span>
                                <h3 className="text-xl font-black text-slate-900 tracking-tight uppercase leading-tight">{title}</h3>
                            </div>
                            <p className="text-xs font-bold text-slate-500 uppercase tracking-tighter flex items-center gap-2 mt-2">
                                <Gavel size={14} className="opacity-40" /> {court}
                            </p>
                        </div>
                        <p className="text-sm font-medium text-slate-600 leading-relaxed max-w-3xl">{desc}</p>
                    </div>

                    <div className="flex flex-col items-end gap-6 h-full justify-between min-w-[200px]">
                         <div className="text-right">
                             <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Judicial Timeline</p>
                             <p className={`text-lg font-black uppercase mt-1 ${alert ? 'text-red-600 animate-pulse' : 'text-slate-900'}`}>{time}</p>
                         </div>
                         <div className="flex gap-2">
                            <Button variant="ghost" size="icon" className="h-12 w-12 rounded-2xl bg-white border border-slate-100 text-slate-400 hover:text-blue-600 transition-all shadow-sm"><Eye size={20}/></Button>
                            <Button className="h-12 px-6 rounded-2xl bg-slate-900 text-white font-black uppercase tracking-widest text-[10px] shadow-lg flex gap-2 hover:bg-black transition-all">
                                {action} <ArrowRight size={14}/>
                            </Button>
                         </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}