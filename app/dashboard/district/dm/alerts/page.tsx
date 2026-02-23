// app/dashboard/district/alerts/page.tsx
"use client";
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Bell, AlertCircle, Clock, Building2, Gavel, 
  Scale, Accessibility, FileWarning, ArrowRight,
  Filter, Search, ShieldAlert, Sparkles, Send,
  Trash2, MailWarning
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

type AlertCategory = 'ALL' | 'RETURNS' | 'ACCESSIBILITY' | 'GRIEVANCE' | 'DIRECTIONS' | 'COURT';

export default function DistrictAlertsPage() {
  const [filter, setFilter] = useState<AlertCategory>('ALL');

  return (
    <div className="space-y-8 animate-in fade-in duration-700 pb-20">
      
      {/* 1. URGENCY HEADER */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 bg-white p-8 rounded-[40px] border border-slate-200 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 p-10 opacity-5">
            <Bell size={120} className="text-red-600" />
        </div>
        <div className="relative z-10 space-y-1">
          <h1 className="text-3xl font-black text-slate-900 tracking-tight uppercase">Statutory Alerts & Reminders</h1>
          <p className="text-slate-500 font-medium">Immediate administrative attention required for district-level PwD Act defaults.</p>
        </div>
        <div className="flex gap-3 relative z-10">
          <Button variant="outline" className="h-12 px-6 rounded-2xl border-slate-200 font-bold gap-2">
            <Search size={16}/> Global Filter
          </Button>
          <Button className="h-12 px-8 rounded-2xl bg-red-600 text-white font-black uppercase tracking-widest text-[10px] shadow-xl shadow-red-100 gap-2 hover:bg-red-700">
            <ShieldAlert size={16} /> Bulk Notice Issuance
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        
        {/* 2. ALERT TYPE FILTER PANEL */}
        <div className="lg:col-span-1 space-y-3 sticky top-8 h-fit">
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-4 mb-4">Urgency Categories</p>
            <AlertTab active={filter === 'ALL'} onClick={() => setFilter('ALL')} label="All Critical Alerts" count="24" icon={<Bell size={16}/>} />
            <AlertTab active={filter === 'RETURNS'} onClick={() => setFilter('RETURNS')} label="Overdue Returns" count="08" icon={<Building2 size={16}/>} color="border-orange-500" />
            <AlertTab active={filter === 'ACCESSIBILITY'} onClick={() => setFilter('ACCESSIBILITY')} label="Repeat Access Defaults" count="04" icon={<Accessibility size={16}/>} color="border-red-600" />
            <AlertTab active={filter === 'GRIEVANCE'} onClick={() => setFilter('GRIEVANCE')} label="SLA Breached Grievances" count="06" icon={<Clock size={16}/>} color="border-red-500" />
            <AlertTab active={filter === 'DIRECTIONS'} onClick={() => setFilter('DIRECTIONS')} label="Order Non-Compliance" count="03" icon={<Gavel size={16}/>} color="border-purple-600" />
            <AlertTab active={filter === 'COURT'} onClick={() => setFilter('COURT')} label="Upcoming Court Dates" count="03" icon={<Scale size={16}/>} color="border-slate-900" />
            
            <Card className="mt-8 rounded-3xl border-slate-100 bg-blue-50 p-6 text-center">
                <Sparkles size={24} className="text-blue-600 mx-auto mb-2" />
                <p className="text-[10px] font-black text-blue-900 uppercase tracking-widest">AI Prediction</p>
                <p className="text-[10px] text-blue-700 font-bold mt-2 leading-relaxed italic">
                    "3 Establishments are at high risk of repeat default next quarter based on trend analysis."
                </p>
            </Card>
        </div>

        {/* 3. DYNAMIC ALERTS LIST */}
        <div className="lg:col-span-3 space-y-6">
            
            {/* ALERT ITEM: OVERDUE RETURNS */}
            <AlertCard 
                type="Employment Exchange" 
                title="6-Monthly Returns Overdue" 
                establishment="Municipal Corporation Lucknow"
                time="8 Days Beyond Deadline"
                desc="Statutory requirement under Section 19. Repeated failure triggers administrative show-cause notice."
                severity="warning"
                actionLabel="Issue Notice"
                icon={<Building2 />}
            />

            {/* ALERT ITEM: REPEAT ACCESSIBILITY DEFECT */}
            <AlertCard 
                type="Accessibility" 
                title="Repeated Non-Compliance: Barrier Removal" 
                establishment="Pvt Industrial Park Ltd - Sector 4"
                time="3rd Reminder Issued"
                desc="Building inspection on 12-Oct confirmed that ramp width deficiencies remain uncorrected despite 2 past directions."
                severity="critical"
                actionLabel="Escalate to PP"
                icon={<Accessibility />}
            />

            {/* ALERT ITEM: GRIEVANCE SLA BREACH */}
            <AlertCard 
                type="Grievance Redressal" 
                title="Grievance #GRV-9921 Pending Beyond 30-Day SLA" 
                establishment="Transport Dept Office"
                time="32 Days Total"
                desc="Discrimination complaint by PwD citizen has not been responded to by the Establishment GRO."
                severity="critical"
                actionLabel="Summon GRO"
                icon={<Clock />}
            />

            {/* ALERT ITEM: DIRECTION COMPLIANCE */}
            <AlertCard 
                type="District Order" 
                title="Order Compliance Pending (Ref: DIR-LKO-041)" 
                establishment="City Hospital (Admin Wing)"
                time="Deadline: Tomorrow"
                desc="Statutory order to provide Braille signage in elevators has not received a compliance report yet."
                severity="impending"
                actionLabel="Check Status"
                icon={<Gavel />}
            />

            {/* ALERT ITEM: COURT HEARING */}
            <AlertCard 
                type="Special Court" 
                title="Upcoming Prosecution Hearing" 
                establishment="State vs. Global Retail Hub"
                time="24 Oct 2024 (10:30 AM)"
                desc="Matter listed before Special Court PwD Lucknow for hearing of arguments on charge."
                severity="court"
                actionLabel="Brief PP"
                icon={<Scale />}
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
                ? 'bg-slate-900 text-white shadow-xl translate-x-1' 
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

function AlertCard({ type, title, establishment, time, desc, severity, actionLabel, icon }: any) {
    const borderColors: any = {
        critical: 'border-l-red-600',
        warning: 'border-l-orange-500',
        impending: 'border-l-blue-600',
        court: 'border-l-slate-900'
    };

    const bgColors: any = {
        critical: 'bg-red-50/30',
        warning: 'bg-orange-50/30',
        impending: 'bg-blue-50/30',
        court: 'bg-slate-50/50'
    }

    return (
        <Card className={`rounded-[32px] border border-slate-200 border-l-[12px] ${borderColors[severity]} ${bgColors[severity]} shadow-sm hover:shadow-md transition-all overflow-hidden`}>
            <CardContent className="p-8">
                <div className="flex flex-col md:flex-row justify-between items-start gap-6">
                    <div className="flex-1 space-y-4">
                        <div className="flex items-center gap-3">
                            <div className={`p-2 rounded-xl bg-white shadow-sm border border-slate-100 ${severity === 'critical' ? 'text-red-600' : 'text-slate-400'}`}>
                                {React.cloneElement(icon, { size: 18 })}
                            </div>
                            <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">{type} ALERT</span>
                        </div>
                        <div className="space-y-1">
                            <h3 className="text-xl font-black text-slate-900 tracking-tight uppercase leading-tight">{title}</h3>
                            <p className="text-xs font-bold text-blue-600 uppercase tracking-tighter flex items-center gap-2">
                                <Building2 size={12} /> {establishment}
                            </p>
                        </div>
                        <p className="text-sm font-medium text-slate-600 leading-relaxed max-w-2xl">{desc}</p>
                    </div>

                    <div className="flex flex-col items-end gap-6 h-full justify-between">
                         <div className="text-right">
                             <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Timeframe</p>
                             <p className={`text-sm font-black uppercase mt-1 ${severity === 'critical' ? 'text-red-600 animate-pulse' : 'text-slate-900'}`}>{time}</p>
                         </div>
                         <div className="flex gap-2">
                            <Button variant="ghost" size="icon" className="h-12 w-12 rounded-2xl bg-white border border-slate-100 text-slate-400 hover:text-red-500"><Trash2 size={18}/></Button>
                            <Button className={`h-12 px-6 rounded-2xl font-black uppercase tracking-widest text-[9px] shadow-lg flex gap-2 ${
                                severity === 'critical' ? 'bg-red-600 hover:bg-red-700 text-white' : 'bg-slate-900 hover:bg-black text-white'
                            }`}>
                                {actionLabel} <Send size={14}/>
                            </Button>
                         </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}