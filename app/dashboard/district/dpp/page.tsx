// app/dashboard/pp/page.tsx
"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Scale, Gavel, Calendar, AlertCircle,
  CheckCircle2, History, ArrowUpRight,
  Filter, Sparkles,
  ShieldAlert, Timer,
  ChevronRight, Trophy, Plus, Radio
} from "lucide-react";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, BarChart, Bar, Legend, Cell
} from 'recharts';

export default function PPDashboard() {

  // SECTION 4: 9 INDICATOR TILES (High-Contrast Colorful Patterns)
  const indicators = [
    { label: "Total PwD Cases", value: "142", icon: Scale, color: "from-slate-800 to-slate-900", text: "text-white" },
    { label: "New Cases (Q3)", value: "12", icon: Plus, color: "from-blue-600 to-blue-700", text: "text-white" },
    { label: "Pending Trial", value: "84", icon: Gavel, color: "from-indigo-600 to-indigo-700", text: "text-white" },
    { label: "Cases Disposed", value: "46", icon: CheckCircle2, color: "from-emerald-600 to-emerald-700", text: "text-white" },
    { label: "Beyond Threshold", value: "18", icon: Timer, color: "from-rose-600 to-rose-700", text: "text-white", alert: true },
    { label: "Hearings (7 Days)", value: "09", icon: Calendar, color: "from-purple-600 to-purple-700", text: "text-white" },
    { label: "Awaiting Compliance", value: "22", icon: ShieldAlert, color: "from-orange-500 to-orange-600", text: "text-white" },
    { label: "Appeals Pending", value: "04", icon: History, color: "from-amber-500 to-amber-600", text: "text-slate-900" },
    { label: "High-Priority", value: "07", icon: AlertCircle, color: "from-red-500 to-red-600", text: "text-white", alert: true },
  ];

  return (
    <div className="space-y-10 animate-in fade-in duration-700 pb-20 font-sans">

      {/* 1. JUDICIAL COMMAND HEADER */}
      <div className="flex flex-col xl:flex-row justify-between items-start xl:items-end gap-6 bg-white p-10 rounded-[40px] border border-slate-200 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 p-10 opacity-[0.03] pointer-events-none">
          <Radio size={180} className="text-blue-600" />
        </div>
        <div className="space-y-2 relative z-10">
          <div className="inline-flex items-center gap-2 bg-slate-900 text-blue-400 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border border-slate-800">
            <Scale size={14} /> Prosecution Node: LKO-01
          </div>
          <h1 className="text-3xl font-black text-slate-900 tracking-tighter uppercase leading-none">District Public Prosecutor Dashboard</h1>
          <p className="text-slate-500 font-medium text-lg italic">Prosecution Registry & Stagnation Monitoring Hub (Section 4-9 Oversight).</p>
        </div>
        <div className="flex gap-4 relative z-10">
          <Button variant="outline" className="h-16 px-8 rounded-2xl border-slate-200 font-bold bg-white hover:bg-slate-50 gap-2 shadow-sm">
            <History size={20} className="text-slate-400" /> Court Calendar
          </Button>
        </div>
      </div>

      {/* 2. SECTION 4: 9 ACTION TILES (Patterned Gradients) */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {indicators.map((item, i) => (
          <button
            key={i}
            className={`group relative text-left p-5 rounded-[32px] overflow-hidden transition-all duration-500 h-44 shadow-sm hover:shadow-xl hover:-translate-y-1 bg-gradient-to-br ${item.color} ${item.text}`}
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] group-hover:scale-110 transition-transform duration-700" />

            <div className="relative z-10 flex flex-col justify-between h-full">
              <div className="h-10 w-10 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center">
                <item.icon size={20} />
              </div>
              <div>
                <p className="text-2xl font-black tracking-tighter">{item.value}</p>
                <p className="text-[8px] font-black uppercase tracking-widest opacity-80 leading-tight mt-1">{item.label}</p>
              </div>
            </div>
            {item.alert && (
              <div className="absolute top-4 right-4 h-2 w-2 rounded-full bg-white animate-ping" />
            )}
          </button>
        ))}
      </div>

      {/* 3. SECTION 8: JUDICIAL ANALYTICS (Expanded) */}
      <div className="grid grid-cols-1 gap-8">

        {/*  CASE PENDENCY TREND (Large View) */}
        <ChartCard title=" Statutory Case Pendency lifecycle" desc="Tracking New vs Disposed vs Pending trajectory.">
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={pendencyData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
              <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 11, fontWeight: 'bold' }} />
              <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 11, fontWeight: 'bold' }} />
              <Tooltip contentStyle={{ borderRadius: '24px', border: 'none', boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1)' }} />
              <Legend verticalAlign="top" align="right" iconType="circle" wrapperStyle={{ paddingBottom: '40px', fontSize: '11px', fontWeight: 'black', textTransform: 'uppercase' }} />
              <Line type="monotone" name="New Cases" dataKey="new" stroke="#2563eb" strokeWidth={5} dot={{ r: 6 }} />
              <Line type="monotone" name="Disposed" dataKey="disposed" stroke="#10b981" strokeWidth={5} dot={{ r: 6 }} />
              <Line type="monotone" name="Pending Trial" dataKey="pending" stroke="#f43f5e" strokeWidth={5} strokeDasharray="8 8" />
            </LineChart>
          </ResponsiveContainer>
        </ChartCard>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/*  CASE STAGE DISTRIBUTION */}
          <ChartCard title=" Case Stage Distribution" desc="Identification of judicial bottlenecks (Investigation to Judgment).">
            <ResponsiveContainer width="100%" height={350}>
              <BarChart data={stageData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="stage" axisLine={false} tickLine={false} tick={{ fontSize: 10, fontWeight: 'black' }} />
                <Tooltip cursor={{ fill: '#f8fafc' }} />
                <Bar dataKey="count" fill="#1e293b" radius={[12, 12, 0, 0]} barSize={50}>
                  {stageData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={index === 2 ? '#4f46e5' : '#cbd5e1'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </ChartCard>

          {/*  ORDER COMPLIANCE STATUS */}
          <ChartCard title=" Court Order Compliance" desc="Stacked status of execution of orders per month.">
            <ResponsiveContainer width="100%" height={350}>
              <BarChart data={complianceData}>
                <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 10, fontWeight: 'black' }} />
                <Tooltip cursor={{ fill: '#f8fafc' }} />
                <Legend iconType="square" wrapperStyle={{ fontSize: '10px', fontWeight: 'black', textTransform: 'uppercase', paddingTop: '20px' }} />
                <Bar dataKey="complied" stackId="a" fill="#10b981" />
                <Bar dataKey="pending" stackId="a" fill="#f59e0b" />
                <Bar dataKey="overdue" stackId="a" fill="#ef4444" radius={[12, 12, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </ChartCard>
        </div>
      </div>

      {/* 4. SECTION 9: TOP 5 / BOTTOM 5 (Full Professional Snapshot) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/*  TOP 5 FAST-MOVING */}
        <Card className="rounded-[40px] border-2 bg-slate-900 text-white shadow-2xl overflow-hidden relative">
          <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/blueprint.png')]" />
          <CardHeader className="p-8 border-b border-white/5 bg-white/5 flex flex-row justify-between items-center relative z-10">
            <div>
              <CardTitle className="text-xs font-black uppercase tracking-[0.2em] text-blue-400"> Efficiency Leaderboard</CardTitle>
              <p className="text-[10px] text-slate-400 font-bold uppercase mt-1">Cases with shortest disposal window</p>
            </div>
            <Trophy size={24} className="text-blue-400 opacity-50" />
          </CardHeader>
          <CardContent className="p-0 relative z-10">
            <div className="divide-y divide-white/5">
              <LegalPerformanceRow id="CP-LKO-910" sub="Court Room 4" time="42 Days" isTop rank={1} />
              <LegalPerformanceRow id="CP-LKO-882" sub="Special Court A" time="55 Days" isTop rank={2} />
              <LegalPerformanceRow id="CP-LKO-001" sub="Dist. Sessions" time="61 Days" isTop rank={3} />
              <LegalPerformanceRow id="CP-LKO-044" sub="Court Room 2" time="68 Days" isTop rank={4} />
              <LegalPerformanceRow id="CP-LKO-119" sub="Special Court B" time="72 Days" isTop rank={5} />
            </div>
          </CardContent>
        </Card>

        {/*  BOTTOM 5 STAGNANT */}
        <Card className="rounded-[40px] border-slate-200 bg-white shadow-sm overflow-hidden flex flex-col">
          <CardHeader className="p-8 border-b border-slate-50 bg-red-50/50 flex flex-row justify-between items-center">
            <div>
              <CardTitle className="text-xs font-black uppercase tracking-[0.2em] text-red-600"> Stagnation Watchlist</CardTitle>
              <p className="text-[10px] text-slate-400 font-bold uppercase mt-1">Cases beyond threshold or repeat adjournments</p>
            </div>
            <AlertCircle size={24} className="text-red-500 opacity-50" />
          </CardHeader>
          <CardContent className="p-0 flex-1">
            <div className="divide-y divide-slate-50">
              <LegalPerformanceRow id="CP-LKO-2023-01" sub="Evidence Mismatch" time="340 Days" isBottom />
              <LegalPerformanceRow id="CP-LKO-2023-42" sub="Accused Absent" time="285 Days" isBottom />
              <LegalPerformanceRow id="CP-LKO-2023-18" sub="Drafting Error" time="242 Days" isBottom />
              <LegalPerformanceRow id="CP-LKO-2024-04" sub="Stayed by State" time="210 Days" isBottom />
              <LegalPerformanceRow id="CP-LKO-2024-09" sub="Repeated Adjourn" time="195 Days" isBottom />
            </div>
          </CardContent>
        </Card>
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
          <CardTitle className="text-[11px] font-black uppercase tracking-[0.25em] text-blue-600">{title}</CardTitle>
          <p className="text-lg font-black text-slate-900 tracking-tight">{desc}</p>
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

function LegalPerformanceRow({ id, sub, time, isTop, isBottom, rank }: any) {
  return (
    <div className="p-6 flex items-center justify-between group cursor-pointer transition-all hover:bg-slate-50 lg:hover:bg-white/5">
      <div className="flex items-center gap-5">
        {rank && (
          <div className="h-8 w-8 rounded-lg bg-blue-600/20 flex items-center justify-center text-blue-400 font-black text-xs">
            {rank}
          </div>
        )}
        <div className="space-y-1">
          <h4 className={`text-sm font-black uppercase font-mono tracking-tight ${isTop ? 'text-white' : 'text-slate-800'}`}>{id}</h4>
          <p className="text-[9px] font-bold text-slate-400 uppercase tracking-[0.2em]">{sub}</p>
        </div>
      </div>
      <div className="text-right flex items-center gap-4">
        <div>
          <p className={`text-xl font-black ${isBottom ? 'text-red-600' : 'text-blue-400'}`}>{time}</p>
          <p className="text-[8px] font-bold text-slate-500 uppercase tracking-widest">{isBottom ? 'Pendency' : 'Closure'}</p>
        </div>
        <ChevronRight size={18} className={isTop ? 'text-white/20' : 'text-slate-300'} />
      </div>
    </div>
  )
}

/* MOCK DATA SETS */
const pendencyData = [
  { month: 'Jul', new: 10, disposed: 4, pending: 18 },
  { month: 'Aug', new: 6, disposed: 5, pending: 19 },
  { month: 'Sep', new: 15, disposed: 10, pending: 24 },
  { month: 'Oct', new: 8, disposed: 2, pending: 30 },
];

const disposalRateData = [
  { time: 'Q1', rate: 22 }, { time: 'Q2', rate: 45 }, { time: 'Q3', rate: 38 }, { time: 'Q4', rate: 62 },
];

const stageData = [
  { stage: 'Investigation', count: 12 }, { stage: 'Charge Sheet', count: 24 },
  { stage: 'Evidence', count: 42 }, { stage: 'Arguments', count: 18 }, { stage: 'Judgment', count: 4 },
];

const hearingLoadData = [
  { week: 'Week 1', hearings: 4 }, { week: 'Week 2', hearings: 12 },
  { week: 'Week 3', hearings: 8 }, { week: 'Week 4', hearings: 18 },
];

const complianceData = [
  { month: 'Aug', complied: 12, pending: 4, overdue: 2 },
  { month: 'Sep', complied: 18, pending: 2, overdue: 1 },
  { month: 'Oct', complied: 8, pending: 10, overdue: 4 },
];