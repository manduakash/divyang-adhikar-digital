// app/dashboard/deo/page.tsx
"use client";
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  School, Users, MessageSquare, AlertCircle,
  CheckCircle2, Building2, Accessibility, Gavel,
  Search, Filter, ArrowUpRight, GraduationCap,
  Clock, FileWarning, Sparkles, TrendingUp,
  ChevronRight, Trophy, AlertTriangle
} from "lucide-react";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, BarChart, Bar, Legend, ComposedChart
} from 'recharts';
import { Badge } from "@/components/ui/badge";

export default function DEODashboard() {

  // SECTION 3: 9 INDICATOR / ACTION BUTTONS (Page 34)
  const indicators = [
    { label: "Total Institutions", value: "842", icon: School, color: "text-slate-900", bg: "bg-slate-100" },
    { label: "PwD Students Enrolled", value: "5,210", icon: GraduationCap, color: "text-blue-600", bg: "bg-blue-50" },
    { label: "Edu Grievances Recv.", value: "124", icon: MessageSquare, color: "text-indigo-600", bg: "bg-indigo-50" },
    { label: "Grievances Pending", value: "18", icon: Clock, color: "text-orange-600", bg: "bg-orange-50", alert: true },
    { label: "Grievances Resolved", value: "106", icon: CheckCircle2, color: "text-green-600", bg: "bg-green-50" },
    { label: "Non-Compliant (Access)", value: "42", icon: Building2, color: "text-red-600", bg: "bg-red-50", alert: true },
    { label: "Accommodation Pending", value: "05", icon: Accessibility, color: "text-purple-600", bg: "bg-purple-50" },
    { label: "Inspections Conducted", value: "88", icon: Search, color: "text-slate-600", bg: "bg-slate-100" },
    { label: "Directions Pending", value: "12", icon: Gavel, color: "text-red-700", bg: "bg-red-100", alert: true },
  ];

  return (
    <div className="space-y-10 animate-in fade-in duration-700 pb-20">

      {/* 1. HEADER SECTION */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <h1 className="text-4xl font-black text-slate-900 tracking-tight leading-none uppercase">Education Command Center</h1>
          <p className="text-slate-500 font-medium mt-3 text-lg italic underline underline-offset-8 decoration-indigo-100">Supervision of Inclusive Education • PwD Act 2016 Sections 16-18</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="h-12 px-6 rounded-2xl border-slate-200 font-bold gap-2 bg-white shadow-sm">
            <TrendingUp size={16} /> District Inclusion: 88%
          </Button>
          <Button className="h-12 px-6 rounded-2xl bg-indigo-600 text-white font-black uppercase tracking-widest text-[10px] shadow-xl shadow-indigo-100 gap-2 hover:bg-indigo-700 transition-all">
            <Sparkles size={16} /> AI Academic Audit
          </Button>
        </div>
      </div>

      {/* 2. SECTION 3: 9 INDICATOR BUTTONS */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-9 gap-4">
        {indicators.map((item, i) => (
          <button
            key={i}
            className={`group text-left p-4 rounded-3xl border border-slate-100 bg-white hover:shadow-xl transition-all duration-500 flex flex-col justify-between h-40 ${item.alert ? 'ring-2 ring-red-50' : 'hover:border-indigo-100'}`}
          >
            <div className={`h-10 w-10 rounded-xl ${item.bg} flex items-center justify-center ${item.color} group-hover:scale-110 transition-transform duration-500 shadow-sm`}>
              <item.icon size={20} />
            </div>
            <div>
              <p className="text-2xl font-black text-slate-900 tracking-tighter">{item.value}</p>
              <p className="text-[8px] font-black uppercase text-slate-400 tracking-widest leading-tight mt-1 group-hover:text-indigo-600 transition-colors">
                {item.label}
              </p>
            </div>
          </button>
        ))}
      </div>

      {/* ZONE 1: PERFORMANCE SNAPSHOTS (SECTION 8 - Page 42) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* 8.1 TOP 5 COMPLIANT */}
        <Card className="rounded-[40px] border-2 bg-slate-900 text-white shadow-2xl overflow-hidden">
          <CardHeader className="p-8 border-b border-white/5 bg-white/5 flex flex-row justify-between items-center">
            <div>
              <CardTitle className="text-xs font-black uppercase tracking-[0.2em] text-blue-400 flex items-center gap-2">
                <Trophy size={14} /> Top 5 Compliant Institutions
              </CardTitle>
              <p className="text-[10px] text-slate-400 font-bold uppercase mt-1">Best-performing for benchmarking</p>
            </div>
            <Button variant="ghost" className="text-white/50 hover:text-slate-600/50 text-[10px] font-black uppercase tracking-widest">View Rankings</Button>
          </CardHeader>
          <CardContent className="p-0">
            <div className="divide-y divide-white/5">
              <RankingRow name="City Central High" type="Govt" score="98.5%" rank={1} isTop />
              <RankingRow name="St. Mary's Academy" type="Private" score="96.2%" rank={2} isTop />
              <RankingRow name="Kendriya Vidyalaya No.1" type="Govt" score="94.0%" rank={3} isTop />
              <RankingRow name="Modern Aided School" type="Aided" score="92.8%" rank={4} isTop />
              <RankingRow name="Global International" type="Private" score="91.5%" rank={5} isTop />
            </div>
          </CardContent>
        </Card>

        {/* 8.2 BOTTOM 5 NON-COMPLIANT */}
        <Card className="rounded-[40px] border-slate-200 bg-white shadow-sm overflow-hidden">
          <CardHeader className="p-8 border-b border-slate-50 bg-red-50/50 flex flex-row justify-between items-center">
            <div>
              <CardTitle className="text-xs font-black uppercase tracking-[0.2em] text-red-600 flex items-center gap-2">
                <AlertTriangle size={14} /> Critical Defaults (Bottom 5)
              </CardTitle>
              <p className="text-[10px] text-slate-400 font-bold uppercase mt-1">Immediate intervention required</p>
            </div>
            <Badge variant="destructive" className="font-black text-[8px] px-2 py-0.5">ACTION REQUIRED</Badge>
          </CardHeader>
          <CardContent className="p-0">
            <div className="divide-y divide-slate-50">
              <RankingRow name="Secondary School-B" type="Private" score="42.0%" issue="Physical Access Deficit" isBottom />
              <RankingRow name="Green Valley High" type="Aided" score="48.5%" issue="Scribe Denial" isBottom />
              <RankingRow name="Primary School-A" type="Govt" score="52.0%" issue="Reasonable Accom." isBottom />
              <RankingRow name="Kolkata Tech Inst." type="Private" score="55.2%" issue="Repeated Defaults" isBottom />
              <RankingRow name="New Era Academy" type="Private" score="58.0%" issue="Grievance Stagnation" isBottom />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* ZONE 2: STATUTORY TRENDS (SECTION 7) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <ChartCard title="PwD Enrolment Trend" desc="Academic Year vs Number of PwD Students">
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={enrolmentData}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
              <XAxis dataKey="year" axisLine={false} tickLine={false} tick={{ fontSize: 10, fontWeight: 'bold' }} />
              <YAxis axisLine={false} tickLine={false} />
              <Tooltip contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }} />
              <Line type="monotone" dataKey="students" stroke="#4f46e5" strokeWidth={4} dot={{ r: 6 }} />
            </LineChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard title=" Education Grievance Trend" desc="Monthly received vs resolved vs pending">
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={grievanceTrendData}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
              <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 10, fontWeight: 'bold' }} />
              <Tooltip />
              <Legend iconType="circle" wrapperStyle={{ fontSize: '10px', fontWeight: 'black', textTransform: 'uppercase' }} />
              <Line type="monotone" dataKey="received" stroke="#2563eb" strokeWidth={3} />
              <Line type="monotone" dataKey="resolved" stroke="#10b981" strokeWidth={3} />
              <Line type="monotone" dataKey="pending" stroke="#f43f5e" strokeWidth={3} strokeDasharray="5 5" />
            </LineChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>

      {/* ZONE 3: ACCESSIBILITY & ACCOMMODATION ( & ) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <ChartCard title=" Accessibility Compliance" desc="Institution Count by Stacked Status">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={accessData}>
              <XAxis dataKey="type" axisLine={false} tickLine={false} tick={{ fontSize: 10, fontWeight: 'bold' }} />
              <Tooltip cursor={{ fill: '#f8fafc' }} />
              <Bar dataKey="compliant" stackId="a" fill="#10b981" />
              <Bar dataKey="partial" stackId="a" fill="#f59e0b" />
              <Bar dataKey="non" stackId="a" fill="#ef4444" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard title=" Reasonable Accommodation" desc="Requests vs Provided vs Pending">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={accommodationData}>
              <XAxis dataKey="type" axisLine={false} tickLine={false} tick={{ fontSize: 9, fontWeight: 'black' }} />
              <Legend iconType="square" wrapperStyle={{ fontSize: '10px', fontWeight: 'black' }} />
              <Bar dataKey="requested" fill="#e2e8f0" radius={[4, 4, 0, 0]} />
              <Bar dataKey="provided" fill="#4f46e5" radius={[4, 4, 0, 0]} />
              <Bar dataKey="pending" fill="#f43f5e" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>
    </div>
  );
}

/* UI SUB-COMPONENTS */

function RankingRow({ name, type, score, rank, issue, isTop, isBottom }: any) {
  return (
    <div className={`p-6 flex items-center justify-between group cursor-pointer transition-all ${isTop ? 'hover:bg-white/50 lg:hover:bg-slate-700' : 'hover:bg-white/50 lg:hover:bg-slate-200'}`}>
      <div className="flex items-center gap-5">
        {rank && (
          <div className="h-8 w-8 rounded-lg bg-blue-600/10 flex items-center justify-center text-blue-400 font-black text-xs">
            #0{rank}
          </div>
        )}
        <div className="space-y-0.5">
          <div className="flex items-center gap-2">
            <h4 className={`text-sm font-black uppercase tracking-tight ${isTop ? 'text-white' : 'text-slate-800'}`}>{name}</h4>
            <Badge className={`text-[8px] font-black uppercase tracking-tighter ${isTop ? 'bg-white/10 text-slate-400 border-2' : 'bg-slate-100 text-slate-500'}`}>{type}</Badge>
          </div>
          {issue && (
            <p className="text-[10px] font-bold text-red-500 uppercase flex items-center gap-1">
              <AlertCircle size={10} /> {issue}
            </p>
          )}
        </div>
      </div>
      <div className="text-right flex items-center gap-4">
        <div>
          <p className={`text-xl font-black ${isBottom ? 'text-red-600' : 'text-blue-400'}`}>{score}</p>
          <p className="text-[8px] font-bold text-slate-500 uppercase tracking-widest">Compliance</p>
        </div>
        <button className={`p-2 rounded-xl transition-all ${isTop ? 'bg-white/5 text-white/20 group-hover:text-blue-400' : 'bg-slate-50 text-slate-300 group-hover:text-blue-600 group-hover:bg-white group-hover:shadow-sm'}`}>
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}

function ChartCard({ title, desc, children }: { title: string, desc: string, children: React.ReactNode }) {
  return (
    <Card className="rounded-[40px] border-slate-200 bg-white shadow-sm overflow-hidden">
      <CardHeader className="p-8 border-b border-slate-50 mb-6 flex flex-row justify-between items-start">
        <div className="space-y-1">
          <CardTitle className="text-[10px] font-black uppercase tracking-[0.2em] text-indigo-600">{title}</CardTitle>
          <p className="text-sm font-bold text-slate-900">{desc}</p>
        </div>
        <div className="flex gap-2">
          <Button variant="ghost" size="icon" className="h-8 w-8 rounded-lg text-slate-400 hover:bg-slate-50"><Filter size={14} /></Button>
          <Button variant="ghost" size="icon" className="h-8 w-8 rounded-lg text-slate-400 hover:bg-slate-50"><ArrowUpRight size={14} /></Button>
        </div>
      </CardHeader>
      <CardContent className="px-8 pb-8">
        {children}
      </CardContent>
    </Card>
  )
}

/* MOCK DATA SETS */

const enrolmentData = [
  { year: '2020-21', students: 3200 }, { year: '2021-22', students: 3800 },
  { year: '2022-23', students: 4500 }, { year: '2023-24', students: 5210 },
];

const grievanceTrendData = [
  { month: 'Jul', received: 12, resolved: 8, pending: 4 },
  { month: 'Aug', received: 22, resolved: 15, pending: 7 },
  { month: 'Sep', received: 18, resolved: 12, pending: 6 },
  { month: 'Oct', received: 34, resolved: 16, pending: 18 },
];

const accessData = [
  { type: 'Primary', compliant: 320, partial: 80, non: 20 },
  { type: 'Secondary', compliant: 210, partial: 40, non: 15 },
  { type: 'Colleges', compliant: 95, partial: 20, non: 7 },
];

const accommodationData = [
  { type: 'Scribe', requested: 120, provided: 110, pending: 10 },
  { type: 'Extra Time', requested: 450, provided: 448, pending: 2 },
  { type: 'Assistive Device', requested: 85, provided: 50, pending: 35 },
  { type: 'Reader', requested: 40, provided: 38, pending: 2 },
];