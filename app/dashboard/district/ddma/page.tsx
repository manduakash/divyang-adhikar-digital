// app/dashboard/ddma/page.tsx
"use client";
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Map, Siren, Home, Truck, ShieldAlert,
  Navigation, Activity, AlertTriangle,
  CheckCircle2, Users, Search, Filter,
  ArrowUpRight, Zap, Trophy, History,
  Timer, BarChart3, TrendingUp, Radio
} from "lucide-react";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, BarChart, Bar, Legend, Cell,
  AreaChart, Area
} from 'recharts';
import { Badge } from "@/components/ui/badge";

export default function DDMADashboard() {

  // SECTION 4: 10 INDICATOR BUTTONS (High-Contrast Design)
  const indicators = [
    { label: "Total PwDs (Master)", value: "14,502", icon: Users, color: "text-blue-600", bg: "bg-blue-50", border: "border-blue-100" },
    { label: "High-Risk Identified", value: "842", icon: AlertTriangle, color: "text-red-600", bg: "bg-red-50", border: "border-red-100", alert: true },
    { label: "Mapped to Shelters", value: "12,100", icon: Map, color: "text-indigo-600", bg: "bg-indigo-50", border: "border-indigo-100" },
    { label: "Accessible Shelters", value: "48", icon: CheckCircle2, color: "text-emerald-600", bg: "bg-emerald-50", border: "border-emerald-100" },
    { label: "Non-Accessible", value: "12", icon: Home, color: "text-slate-600", bg: "bg-slate-50", border: "border-slate-200" },
    { label: "SOS Received", value: "124", icon: Siren, color: "text-orange-600", bg: "bg-orange-50", border: "border-orange-100" },
    { label: "Requests Responded", value: "110", icon: Zap, color: "text-green-600", bg: "bg-green-50", border: "border-green-100" },
    { label: "Requests Pending", value: "14", icon: Timer, color: "text-amber-600", bg: "bg-amber-50", border: "border-amber-100", alert: true },
    { label: "Resource Gaps", value: "08", icon: History, color: "text-purple-600", bg: "bg-purple-50", border: "border-purple-100" },
    { label: "Active Disasters", value: "02", icon: ShieldAlert, color: "text-rose-600", bg: "bg-rose-50", border: "border-rose-100", alert: true },
  ];

  return (
    <div className="space-y-10 animate-in fade-in duration-700 pb-20 font-sans">

      {/* 1. EMERGENCY COMMAND HEADER */}
      <div className="flex flex-col xl:flex-row justify-between items-start xl:items-end gap-6 bg-white p-10 rounded-[40px] border border-slate-200 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 p-10 opacity-[0.03] pointer-events-none">
          <Radio size={180} className="text-orange-600" />
        </div>
        <div className="space-y-2 relative z-10">
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border border-orange-200">
            <Activity size={14} className="animate-pulse" /> Unified Disaster Node: Kolkata
          </div>
          <h1 className="text-5xl font-black text-slate-900 tracking-tighter uppercase leading-none">DDMA Dashboard</h1>
          <p className="text-slate-500 font-medium text-lg italic">Real-time PwD Disaster Mapping, Response & Recovery oversight.</p>
        </div>
        <div className="flex gap-4 relative z-10">
          <Button variant="outline" className="h-16 px-8 rounded-2xl border-slate-200 font-bold bg-white hover:bg-slate-50 gap-2 shadow-sm">
            <Navigation size={20} className="text-blue-600" /> Live Shelter GIS
          </Button>
        </div>
      </div>

      {/* 2. SECTION 4: 10 ACTION INDICATORS (High Contrast) */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
        {indicators.map((item, i) => (
          <button
            key={i}
            className={`group text-left p-6 rounded-[32px] border ${item.border} ${item.bg} hover:shadow-xl transition-all duration-500 h-44 flex flex-col justify-between relative overflow-hidden`}
          >
            <div className={`h-12 w-12 rounded-2xl bg-white flex items-center justify-center ${item.color} shadow-sm group-hover:scale-110 transition-transform`}>
              <item.icon size={24} />
            </div>
            <div>
              <p className="text-3xl font-black text-slate-900 tracking-tighter">{item.value}</p>
              <p className="text-[10px] font-black uppercase text-slate-500 tracking-widest leading-tight mt-1 group-hover:text-slate-900 transition-colors">
                {item.label}
              </p>
            </div>
            {item.alert && (
              <div className="absolute top-6 right-6 h-2 w-2 rounded-full bg-red-500 animate-ping" />
            )}
            <ArrowUpRight className="absolute bottom-6 right-6 text-slate-300 opacity-0 group-hover:opacity-100 transition-all" size={18} />
          </button>
        ))}
      </div>

      {/* 3. SECTION 7: DETAILED GRAPHS & CHARTS (Expanded Spacing) */}
      <div className="grid grid-cols-1 gap-8">

        {/*  EMERGENCY REQUEST TREND (Large View) */}
        <ChartCard title=" Emergency Request Lifecycle Trend" desc="X-Axis: Timeline • Y-Axis: SOS Count">
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={sosTrendData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
              <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fontSize: 11, fontWeight: 'bold' }} />
              <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 11, fontWeight: 'bold' }} />
              <Tooltip contentStyle={{ borderRadius: '24px', border: 'none', boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1)' }} />
              <Legend verticalAlign="top" align="right" iconType="circle" wrapperStyle={{ paddingBottom: '40px', fontSize: '11px', fontWeight: 'black', textTransform: 'uppercase' }} />
              <Line type="monotone" name="Received" dataKey="received" stroke="#f43f5e" strokeWidth={5} dot={{ r: 6 }} />
              <Line type="monotone" name="Responded" dataKey="responded" stroke="#10b981" strokeWidth={5} dot={{ r: 6 }} />
              <Line type="monotone" name="Pending" dataKey="pending" stroke="#f59e0b" strokeWidth={5} strokeDasharray="8 8" />
            </LineChart>
          </ResponsiveContainer>
        </ChartCard>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/*  MAPPING COVERAGE */}
          <ChartCard title=" Block-wise Mapping Coverage" desc="Status of PwD tagging per district sub-unit.">
            <ResponsiveContainer width="100%" height={350}>
              <BarChart data={mappingData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="block" axisLine={false} tickLine={false} tick={{ fontSize: 10, fontWeight: 'black' }} />
                <Tooltip cursor={{ fill: '#f8fafc' }} />
                <Bar dataKey="mapped" fill="#4f46e5" radius={[12, 12, 0, 0]} barSize={50} />
              </BarChart>
            </ResponsiveContainer>
          </ChartCard>

          {/*  SHELTER ACCESSIBILITY */}
          <ChartCard title=" Shelter Accessibility Status" desc="By Block (Accessible vs Non-Accessible stacks)">
            <ResponsiveContainer width="100%" height={350}>
              <BarChart data={shelterStatusData}>
                <XAxis dataKey="block" axisLine={false} tickLine={false} tick={{ fontSize: 10, fontWeight: 'black' }} />
                <Tooltip cursor={{ fill: '#f8fafc' }} />
                <Bar dataKey="accessible" stackId="a" fill="#10b981" barSize={50} />
                <Bar dataKey="inaccessible" stackId="a" fill="#ef4444" radius={[12, 12, 0, 0]} barSize={50} />
              </BarChart>
            </ResponsiveContainer>
          </ChartCard>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/*  RESPONSE TIME ANALYSIS */}
          <ChartCard title=" Avg Response Time Analysis" desc="Minutes elapsed from SOS to Evacuation.">
            <ResponsiveContainer width="100%" height={350}>
              <AreaChart data={responseTimeData}>
                <defs>
                  <linearGradient id="colorTime" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#f97316" stopOpacity={0.2} />
                    <stop offset="95%" stopColor="#f97316" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="request" hide />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10, fontWeight: 'bold' }} />
                <Tooltip />
                <Area type="monotone" dataKey="minutes" stroke="#f97316" strokeWidth={5} fillOpacity={1} fill="url(#colorTime)" />
              </AreaChart>
            </ResponsiveContainer>
          </ChartCard>

          {/*  RESOURCE GAP MONITORING */}
          <ChartCard title=" Resource Availability" desc="Critical Supplies: Available vs Mandated.">
            <ResponsiveContainer width="100%" height={350}>
              <BarChart data={resourceData} layout="vertical" margin={{ left: 40 }}>
                <XAxis type="number" hide />
                <YAxis dataKey="type" type="category" axisLine={false} tickLine={false} tick={{ fontSize: 10, fontWeight: 'black' }} width={120} />
                <Tooltip />
                <Bar dataKey="available" fill="#2563eb" barSize={15} radius={[0, 10, 10, 0]} />
                <Bar dataKey="required" fill="#e2e8f0" barSize={15} radius={[0, 10, 10, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </ChartCard>
        </div>
      </div>

      {/* 4. SECTION 8: TOP 5 / BOTTOM 5 PERFORMANCE (Full Data) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <RankingBox title="Top Prepared Blocks" data={topBlocks} color="text-green-600" icon={<Trophy />} />
        <RankingBox title="Critical Need Blocks" data={bottomBlocks} color="text-red-600" icon={<AlertTriangle />} isDanger />
        <RankingBox title="Most Accessible Shelters" data={topShelters} color="text-blue-600" icon={<Home />} />
        <RankingBox title="Primary Shelter Gaps" data={bottomShelters} color="text-orange-600" icon={<ShieldAlert />} isDanger />
      </div>

    </div>
  );
}

/* UI SUB-COMPONENTS */

function ChartCard({ title, desc, children }: any) {
  return (
    <Card className="rounded-[40px] border-slate-200 bg-white shadow-sm overflow-hidden">
      <CardHeader className="p-8 border-b border-slate-50 mb-6 flex flex-row justify-between items-start">
        <div className="space-y-1">
          <CardTitle className="text-[11px] font-black uppercase tracking-[0.25em] text-orange-600">{title}</CardTitle>
          <p className="text-lg font-black text-slate-900">{desc}</p>
        </div>
        <div className="flex gap-2">
          <Button variant="ghost" size="icon" className="h-10 w-10 rounded-xl text-slate-300 hover:text-slate-900 transition-colors"><Filter size={18} /></Button>
          <Button variant="ghost" size="icon" className="h-10 w-10 rounded-xl text-slate-300 hover:text-slate-900 transition-colors"><ArrowUpRight size={18} /></Button>
        </div>
      </CardHeader>
      <CardContent className="px-8 pb-10">
        {children}
      </CardContent>
    </Card>
  )
}

function RankingBox({ title, data, color, icon, isDanger }: any) {
  return (
    <Card className={`rounded-[40px] border-slate-200 bg-white shadow-sm overflow-hidden flex flex-col h-full`}>
      <div className={`p-6 border-b border-slate-50 flex items-center gap-3 ${isDanger ? 'bg-rose-50/50' : 'bg-slate-50/50'}`}>
        <div className={`${color}`}>{React.cloneElement(icon, { size: 20 })}</div>
        <h3 className={`text-[10px] font-black uppercase tracking-[0.2em] ${color}`}>{title}</h3>
      </div>
      <div className="px-6 flex-1 space-y-2">
        {data.map((item: any, i: number) => (
          <div key={i} className="flex justify-between items-start group cursor-pointer border-b border-slate-50 pb-2 last:border-0">
            <div className="space-y-1">
              <p className="text-sm font-black text-slate-800 uppercase tracking-tight group-hover:text-blue-600 transition-colors leading-none">{item.name}</p>
              <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">{item.sub || item.deficiency}</p>
            </div>
            <div className="text-right">
              <span className={`text-xs font-black ${isDanger ? 'text-red-500' : 'text-slate-900'}`}>{item.score}</span>
              {item.rank && <p className="text-[8px] font-black text-slate-300 uppercase">Rank {item.rank}</p>}
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}

/* MOCK DATA SETS (Expanded for 5 items) */

const mappingData = [
  { block: 'MALIBAD', mapped: 1200 }, { block: 'CHINHAT', mapped: 2100 },
  { block: 'BAKSHI TALAB', mapped: 1850 }, { block: 'GOSAINGANJ', mapped: 940 },
  { block: 'KAKORI', mapped: 1100 },
];

const sosTrendData = [
  { day: '01 Oct', received: 12, responded: 10, pending: 2 },
  { day: '04 Oct', received: 45, responded: 30, pending: 15 },
  { day: '08 Oct', received: 28, responded: 28, pending: 0 },
  { day: '12 Oct', received: 84, responded: 40, pending: 44 },
  { day: '15 Oct', received: 124, responded: 110, pending: 14 },
];

const shelterStatusData = [
  { block: 'URBAN', accessible: 24, inaccessible: 4 },
  { block: 'RURAL', accessible: 12, inaccessible: 8 },
  { block: 'ZONE A', accessible: 18, inaccessible: 2 },
  { block: 'ZONE B', accessible: 14, inaccessible: 6 },
];

const responseTimeData = [
  { request: 1, minutes: 12 }, { request: 2, minutes: 45 }, { request: 3, minutes: 22 },
  { request: 4, minutes: 18 }, { request: 5, minutes: 55 }, { request: 6, minutes: 30 },
];

const resourceData = [
  { type: 'Wheelchairs', available: 450, required: 600 },
  { type: 'Medical Kits', available: 800, required: 800 },
  { type: 'Evac Vans', available: 12, required: 20 },
  { type: 'Stretchers', available: 100, required: 150 },
  { type: 'Batteries', available: 40, required: 40 },
];

const topBlocks = [
  { name: 'CHINHAT', sub: '98% Mapped', score: '94%', rank: 1 },
  { name: 'BAKSHI TALAB', sub: '92% Mapped', score: '91%', rank: 2 },
  { name: 'GOSAINGANJ', sub: '88% Mapped', score: '89%', rank: 3 },
  { name: 'URBAN HUB', sub: '95% Mapped', score: '88%', rank: 4 },
  { name: 'SAROJINI NGR', sub: '85% Mapped', score: '86%', rank: 5 },
];

const bottomBlocks = [
  { name: 'MALIBAD', deficiency: 'Low Shelter Access', score: '42%' },
  { name: 'KAKORI', deficiency: 'Delayed Response', score: '48%' },
  { name: 'RURAL ZONE 4', deficiency: 'No Scribes Mapped', score: '51%' },
  { name: 'B-PURA BLOCK', deficiency: 'High Risk Unmapped', score: '54%' },
  { name: 'WEST SECTOR', deficiency: 'Resource Gap', score: '58%' },
];

const topShelters = [
  { name: 'COMMUNITY HUB A', sub: 'CHINHAT', score: '98%' },
  { name: 'DISTRICT STADIUM', sub: 'URBAN', score: '95%' },
  { name: 'GIC COLLEGE HALL', sub: 'BAKSHI TALAB', score: '92%' },
  { name: 'RAILWAY ANNEX', sub: 'ZONE A', score: '90%' },
  { name: 'PRIMARY HUB-C', sub: 'GOSAINGANJ', score: '89%' },
];

const bottomShelters = [
  { name: 'PRIMARY SCHOOL B', sub: 'RURAL', deficiency: 'Ramp Deficit' },
  { name: 'OLD TOWN LIBRARY', sub: 'MALIBAD', deficiency: 'No Power Backup' },
  { name: 'VILLAGE CENTRE 1', sub: 'KAKORI', deficiency: 'Inaccessible Washroom' },
  { name: 'TEMP CAMP 4', sub: 'ZONE B', deficiency: 'No Medical Kit' },
  { name: 'BLOCK OFFICE D', sub: 'WEST', deficiency: 'High Flooding Risk' },
];