// app/dashboard/district/page.tsx
"use client";
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Users, Building2, MessageSquare, AlertCircle,
  CheckCircle2, Gavel, FileWarning, MapPin,
  GraduationCap, Scale, ArrowUpRight, Sparkles,
  Download, Filter, ChevronDown, TrendingUp,
  Activity, Briefcase
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, LineChart, Line, Legend, Cell,
  ComposedChart, AreaChart, Area
} from 'recharts';

export default function DistrictDashboard() {
  const [timeFilter, setTimeFilter] = useState('Month');

  // Section 3 Indicators (Re-used)
  const indicators = [
    { label: "Total PwDs", value: "14,502", icon: Users, color: "text-blue-600", bg: "bg-blue-50" },
    { label: "Total Establishments", value: "482", icon: Building2, color: "text-slate-600", bg: "bg-slate-100" },
    { label: "Total Grievances", value: "1,240", icon: MessageSquare, color: "text-purple-600", bg: "bg-purple-50" },
    { label: "Grievances Pending", value: "84", icon: AlertCircle, color: "text-orange-600", bg: "bg-orange-50", alert: true },
    { label: "Complied / Closed", value: "1,156", icon: CheckCircle2, color: "text-green-600", bg: "bg-green-50" },
    { label: "Directions Issued", value: "45", icon: Gavel, color: "text-blue-900", bg: "bg-slate-200" },
    { label: "Directions Pending", value: "12", icon: FileWarning, color: "text-red-600", bg: "bg-red-50", alert: true },
    { label: "Access Non-Compliant", value: "32", icon: MapPin, color: "text-red-700", bg: "bg-red-100" },
    { label: "PwD Vacancy %", value: "4.2%", icon: GraduationCap, color: "text-indigo-600", bg: "bg-indigo-50" },
    { label: "Prosecution Pending", value: "08", icon: Scale, color: "text-slate-900", bg: "bg-slate-100" },
  ];

  return (
    <div className="space-y-10 animate-in fade-in duration-700 pb-20 max-w-[1600px] mx-auto">

      {/* HEADER SECTION */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <h1 className="text-4xl font-black text-slate-900 tracking-tight leading-none uppercase">District Statutory Control</h1>
          <p className="text-slate-500 font-medium mt-3 text-lg italic underline underline-offset-8 decoration-slate-200">Lucknow Jurisdiction • PwD Act Enforcement Console</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="h-12 px-6 rounded-2xl border-slate-200 font-bold gap-2 bg-white">
            <Filter size={16} /> Global Parameters
          </Button>
        </div>
      </div>

      {/* SECTION 3: 10 ACTION BUTTONS */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {indicators.map((item, i) => (
          <button key={i} className={`group text-left p-6 rounded-[32px] border border-slate-100 bg-white hover:shadow-2xl transition-all duration-500 relative overflow-hidden flex flex-col justify-between h-44 ${item.alert ? 'ring-2 ring-red-50' : ''}`}>
            <div className={`h-12 w-12 rounded-2xl ${item.bg} flex items-center justify-center ${item.color} group-hover:scale-110 transition-transform duration-500 shadow-sm`}>
              <item.icon size={24} />
            </div>
            <div>
              <p className="text-3xl font-black text-slate-900 tracking-tighter">{item.value}</p>
              <p className="text-[9px] font-black uppercase text-slate-400 tracking-[0.1em] leading-tight mt-1 group-hover:text-blue-600 transition-colors">{item.label}</p>
            </div>
            <ArrowUpRight size={14} className="absolute top-6 right-6 text-slate-200 group-hover:text-blue-500 transition-colors" />
          </button>
        ))}
      </div>

      {/* ZONE 1: ECONOMIC INCLUSION OVERSIGHT ( & ) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <ChartCard
          title=" Employment Trend (%)"
          desc="Monitor compliance trajectory across sectors."
          filters={['All', 'Govt', 'Private']}
        >
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={employmentTrendData}>
              <defs>
                <linearGradient id="colorPerc" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#2563eb" stopOpacity={0.1} />
                  <stop offset="95%" stopColor="#2563eb" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
              <XAxis dataKey="time" axisLine={false} tickLine={false} tick={{ fontSize: 10, fontWeight: 'bold' }} />
              <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10, fontWeight: 'bold' }} domain={[0, 5]} />
              <Tooltip contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }} />
              <Area type="monotone" dataKey="percentage" stroke="#2563eb" strokeWidth={4} fillOpacity={1} fill="url(#colorPerc)" />
              <Line type="monotone" dataKey="mandate" stroke="#ef4444" strokeDasharray="5 5" strokeWidth={2} name="4% Mandate" />
            </AreaChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard
          title=" Vacancy Fulfillment"
          desc="Identifying the gap between mandated vs actual."
        >
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={vacancyFulfillmentData}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
              <XAxis dataKey="category" axisLine={false} tickLine={false} tick={{ fontSize: 10, fontWeight: 'bold' }} />
              <YAxis axisLine={false} tickLine={false} />
              <Tooltip cursor={{ fill: '#f8fafc' }} />
              <Legend iconType="circle" wrapperStyle={{ paddingTop: '20px', fontSize: '10px', fontWeight: 'black', textTransform: 'uppercase' }} />
              <Bar dataKey="identified" fill="#2563eb" radius={[6, 6, 0, 0]} barSize={30} name="Identified" />
              <Bar dataKey="filled" fill="#10b981" radius={[6, 6, 0, 0]} barSize={30} name="Filled" />
              <Bar dataKey="vacant" fill="#ef4444" radius={[6, 6, 0, 0]} barSize={30} name="Vacant" />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>

      {/* ZONE 2: INFRASTRUCTURE & REDRESSAL ( & ) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <ChartCard
          title=" Accessibility Compliance"
          desc="Physical vs Digital audit status across district."
        >
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={accessibilityStatusData} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#f1f5f9" />
              <XAxis type="number" hide />
              <YAxis dataKey="type" type="category" axisLine={false} tickLine={false} tick={{ fontSize: 10, fontWeight: 'black' }} width={100} />
              <Tooltip cursor={{ fill: 'transparent' }} />
              <Bar dataKey="compliant" stackId="a" fill="#10b981" barSize={40} />
              <Bar dataKey="partial" stackId="a" fill="#f59e0b" />
              <Bar dataKey="non" stackId="a" fill="#ef4444" radius={[0, 10, 10, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard
          title=" Grievance Pendency Trend"
          desc="District-level disposal efficiency tracking."
        >
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={grievanceTrendData}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
              <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 10, fontWeight: 'bold' }} />
              <Tooltip />
              <Line type="stepAfter" dataKey="received" stroke="#2563eb" strokeWidth={3} dot={{ r: 4 }} />
              <Line type="stepAfter" dataKey="disposed" stroke="#10b981" strokeWidth={3} dot={{ r: 4 }} />
              <Line type="stepAfter" dataKey="pending" stroke="#f43f5e" strokeWidth={3} dot={{ r: 4 }} />
              <Legend iconType="square" wrapperStyle={{ fontSize: '10px', fontWeight: 'black', textTransform: 'uppercase' }} />
            </LineChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>

      {/* ZONE 3: LEGAL & REGIONAL ( & ) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <ChartCard
            title=" Prosecution Case Progress"
            desc="Stagnation monitoring for PwD-related trials."
          >
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={prosecutionData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 10, fontWeight: 'bold' }} />
                <YAxis axisLine={false} tickLine={false} />
                <Tooltip />
                <Line type="monotone" dataKey="new" stroke="#2563eb" strokeWidth={3} />
                <Line type="monotone" dataKey="disposed" stroke="#10b981" strokeWidth={3} />
                <Line type="monotone" dataKey="pending" stroke="#f43f5e" strokeWidth={5} />
              </LineChart>
            </ResponsiveContainer>
          </ChartCard>
        </div>

        <Card className="rounded-[40px] border-slate-200 bg-white p-8 shadow-sm">
          <CardHeader className="p-0 mb-6">
            <CardTitle className="text-[10px] font-black uppercase tracking-widest text-slate-400"> District Compliance Heat Map</CardTitle>
            <p className="text-xs font-bold text-slate-900 mt-1">Problem Area Identification (By Block)</p>
          </CardHeader>
          <div className="space-y-4">
            <HeatMapRow label="Bakshi Ka Talab" employment="green" access="green" grievance="amber" />
            <HeatMapRow label="Chinhat" employment="amber" access="red" grievance="green" />
            <HeatMapRow label="Malihabad" employment="green" access="amber" grievance="red" />
            <HeatMapRow label="Sarojini Nagar" employment="red" access="red" grievance="red" />
            <HeatMapRow label="Gosainganj" employment="green" access="green" grievance="green" />
          </div>
          <div className="mt-8 flex justify-between items-center text-[8px] font-black uppercase tracking-widest text-slate-400">
            <span className="flex items-center gap-1"><div className="h-2 w-2 rounded-full bg-green-500" /> Compliant</span>
            <span className="flex items-center gap-1"><div className="h-2 w-2 rounded-full bg-orange-400" /> Partial</span>
            <span className="flex items-center gap-1"><div className="h-2 w-2 rounded-full bg-red-500" /> Critical</span>
          </div>
        </Card>
      </div>
    </div>
  );
}

/* UI SUB-COMPONENTS */

function ChartCard({ title, desc, children, filters }: any) {
  return (
    <Card className="rounded-[40px] border-slate-200 bg-white shadow-sm overflow-hidden">
      <CardHeader className="p-8 flex flex-row justify-between items-start border-b border-slate-50 mb-6">
        <div className="space-y-1">
          <CardTitle className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-600">{title}</CardTitle>
          <p className="text-sm font-bold text-slate-900">{desc}</p>
        </div>
        {filters && (
          <div className="flex gap-1 bg-slate-50 p-1 rounded-xl">
            {filters.map((f: string) => (
              <button key={f} className="px-3 py-1 text-[8px] font-black uppercase rounded-lg hover:bg-white hover:shadow-sm transition-all text-slate-400 hover:text-slate-900">{f}</button>
            ))}
          </div>
        )}
      </CardHeader>
      <CardContent className="px-8 pb-8">
        {children}
      </CardContent>
    </Card>
  )
}

function HeatMapRow({ label, employment, access, grievance }: any) {
  const getColor = (status: string) => {
    if (status === 'green') return 'bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.3)]';
    if (status === 'amber') return 'bg-orange-400 shadow-[0_0_10px_rgba(251,146,60,0.3)]';
    return 'bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.3)] animate-pulse';
  }
  return (
    <div className="flex items-center justify-between p-3 bg-slate-50 rounded-2xl group hover:bg-slate-100 transition-all">
      <span className="text-[10px] font-black text-slate-700 uppercase tracking-tight w-24">{label}</span>
      <div className="flex gap-3">
        <div title="Employment" className={`h-6 w-10 rounded-lg ${getColor(employment)}`} />
        <div title="Accessibility" className={`h-6 w-10 rounded-lg ${getColor(access)}`} />
        <div title="Grievances" className={`h-6 w-10 rounded-lg ${getColor(grievance)}`} />
      </div>
    </div>
  )
}

/* MOCK DATA SETS */

const employmentTrendData = [
  { time: 'Q1 23', percentage: 3.2, mandate: 4 },
  { time: 'Q2 23', percentage: 3.5, mandate: 4 },
  { time: 'Q3 23', percentage: 3.4, mandate: 4 },
  { time: 'Q4 23', percentage: 3.8, mandate: 4 },
  { time: 'Q1 24', percentage: 4.1, mandate: 4 },
  { time: 'Q2 24', percentage: 4.2, mandate: 4 },
];

const vacancyFulfillmentData = [
  { category: 'Health', identified: 450, filled: 300, vacant: 150 },
  { category: 'Education', identified: 600, filled: 520, vacant: 80 },
  { category: 'Transport', identified: 200, filled: 110, vacant: 90 },
  { category: 'Revenue', identified: 350, filled: 340, vacant: 10 },
];

const accessibilityStatusData = [
  { type: 'Physical', compliant: 342, partial: 108, non: 32 },
  { type: 'Digital', compliant: 210, partial: 150, non: 122 },
];

const grievanceTrendData = [
  { month: 'Jul', received: 120, disposed: 90, pending: 30 },
  { month: 'Aug', received: 150, disposed: 110, pending: 40 },
  { month: 'Sep', received: 180, disposed: 140, pending: 40 },
  { month: 'Oct', received: 240, disposed: 180, pending: 60 },
];

const prosecutionData = [
  { month: 'Jul', new: 4, disposed: 2, pending: 18 },
  { month: 'Aug', new: 2, disposed: 1, pending: 19 },
  { month: 'Sep', new: 6, disposed: 4, pending: 21 },
  { month: 'Oct', new: 5, disposed: 2, pending: 24 },
];