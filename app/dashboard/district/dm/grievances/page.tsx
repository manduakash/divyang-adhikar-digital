// app/dashboard/district/grievances/page.tsx
"use client";
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow 
} from "@/components/ui/table";
import { 
  ShieldAlert, Clock, AlertCircle, ArrowUpRight, 
  Search, Filter, Download, MessageSquare, 
  Building2, Timer, Landmark, ChevronRight,
  TrendingDown, CheckCircle2,
  Gavel
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { 
  PieChart, Pie, Cell, ResponsiveContainer, 
  Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid 
} from 'recharts';

export default function DistrictGrievanceSupervisory() {
  
  // Section 5.5 Mandated Totals
  const stats = {
    total: "1,240",
    withinTimeline: "842",
    beyondTimeline: "156",
    escalatedToState: "42"
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-700 pb-20">
      
      {/* 1. SUPERVISORY HEADER */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 bg-white p-8 rounded-[40px] border border-slate-200 shadow-sm">
        <div className="flex items-center gap-6">
            <div className="h-16 w-16 bg-red-600 rounded-2xl flex items-center justify-center text-white shadow-xl">
                <ShieldAlert size={32} />
            </div>
            <div>
                <h1 className="text-3xl font-black text-slate-900 tracking-tight uppercase leading-none">Grievance Supervisory Control</h1>
                <p className="text-slate-500 font-medium mt-2 text-sm italic">Monitoring District SLA & State Escalations • Section 5.5 Registry</p>
            </div>
        </div>
        <div className="flex gap-3">
            <Button variant="outline" className="h-12 px-6 rounded-2xl border-slate-200 font-bold gap-2">
                <Download size={16}/> Supervisory Audit
            </Button>
            <Button className="h-12 px-8 rounded-2xl bg-slate-900 text-white font-black uppercase tracking-widest text-[10px] shadow-xl">
                Manual State Escalation
            </Button>
        </div>
      </div>

      {/* 2. STATUTORY KPI GRID (Section 5.5 Requirements) */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <KPICard label="Total Grievances" value={stats.total} icon={<MessageSquare />} color="text-slate-900" />
        <KPICard label="Pending (Within SLA)" value={stats.withinTimeline} icon={<CheckCircle2 />} color="text-green-600" />
        <KPICard label="Pending (Beyond SLA)" value={stats.beyondTimeline} icon={<Clock />} color="text-red-600" alert />
        <KPICard label="Escalated to State" value={stats.escalatedToState} icon={<Landmark />} color="text-purple-600" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* 3. SLA COMPLIANCE CHART */}
        <Card className="lg:col-span-1 rounded-[40px] border-slate-200 shadow-sm bg-white p-8 flex flex-col items-center justify-center relative overflow-hidden">
            <div className="text-center mb-6">
                <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">SLA Health Distribution</h3>
            </div>
            <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                    <Pie
                        data={pieData}
                        innerRadius={70}
                        outerRadius={90}
                        paddingAngle={5}
                        dataKey="value"
                    >
                        {pieData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                    </Pie>
                    <Tooltip />
                </PieChart>
            </ResponsiveContainer>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-4 text-center">
                <p className="text-3xl font-black text-slate-900">12.5%</p>
                <p className="text-[8px] font-black text-red-500 uppercase tracking-widest">Overdue</p>
            </div>
            <div className="grid grid-cols-2 gap-4 w-full mt-6 pt-6 border-t border-slate-50">
                <LegendItem color="bg-green-500" label="Within Timeline" />
                <LegendItem color="bg-red-500" label="Beyond Timeline" />
                <LegendItem color="bg-purple-600" label="Escalated" />
                <LegendItem color="bg-slate-200" label="Closed" />
            </div>
        </Card>

        {/* 4. SUPERVISORY WATCHLIST (Table for Section 5.5) */}
        <Card className="lg:col-span-2 rounded-[40px] border-slate-200 shadow-sm overflow-hidden bg-white">
            <CardHeader className="p-8 border-b border-slate-50 bg-slate-50/30 flex flex-row justify-between items-center">
                <div>
                    <CardTitle className="text-sm font-black uppercase tracking-widest text-slate-400">Critical Pendency Registry</CardTitle>
                    <p className="text-[10px] font-bold text-red-600 uppercase mt-1">Immediate intervention required for Beyond-SLA items</p>
                </div>
                <div className="flex gap-2">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-400" />
                        <input className="pl-9 pr-4 py-1.5 bg-white border border-slate-200 rounded-lg text-[10px] font-bold outline-none w-48" placeholder="Search ID..." />
                    </div>
                </div>
            </CardHeader>
            <CardContent className="p-0">
                <Table>
                    <TableHeader className="bg-white">
                        <TableRow className="border-slate-100">
                            <TableHead className="px-8 py-5 text-[9px] font-black uppercase tracking-widest text-slate-400">Grievance ID</TableHead>
                            <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400">Establishment</TableHead>
                            <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400">Days Elapsed</TableHead>
                            <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400">Timeline Status</TableHead>
                            <TableHead className="text-right px-8 text-[9px] font-black uppercase tracking-widest text-slate-400">Supervisory Action</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody className="divide-y divide-slate-50">
                        <GrievanceRow 
                            id="GRV/2024/091" 
                            est="Regional Transport Office" 
                            days="42 Days" 
                            status="Beyond Timeline" 
                            escalated={false}
                        />
                        <GrievanceRow 
                            id="GRV/2024/118" 
                            est="Municipal Corporation" 
                            days="12 Days" 
                            status="Within Timeline" 
                            escalated={false}
                        />
                        <GrievanceRow 
                            id="GRV/2024/004" 
                            est="Global Pvt IT Park" 
                            days="65 Days" 
                            status="Escalated to State" 
                            escalated={true}
                        />
                        <GrievanceRow 
                            id="GRV/2024/201" 
                            est="Primary Health Centre" 
                            days="38 Days" 
                            status="Beyond Timeline" 
                            escalated={false}
                        />
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
      </div>

      {/* 5. STATE COORDINATION PANEL */}
      <Card className="rounded-[40px] border-none bg-slate-900 text-white p-10 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-10"><Landmark size={120} /></div>
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-4">
                <div className="inline-flex items-center gap-2 bg-purple-600 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">
                    National Bridge Active
                </div>
                <h2 className="text-3xl font-black tracking-tighter uppercase">State Escalation Bridge</h2>
                <p className="text-slate-400 font-medium max-w-lg leading-relaxed">
                    Automatically push grievances to the <b>State Commissioner for PwDs</b> if the establishment fails to respond within the 30+15 day extension period.
                </p>
            </div>
            <Button className="h-16 px-12 rounded-3xl bg-white text-slate-900 font-black uppercase tracking-widest text-xs hover:bg-blue-50 transition-all hover:scale-105">
                Review Escalation Queue (42)
            </Button>
        </div>
      </Card>
    </div>
  );
}

/* UI HELPER COMPONENTS */

function KPICard({ label, value, icon, color, alert }: any) {
    return (
        <Card className={`rounded-[32px] border-slate-100 shadow-sm hover:shadow-md transition-all bg-white overflow-hidden group ${alert ? 'ring-1 ring-red-100' : ''}`}>
            <CardContent className="p-6">
                <div className="flex justify-between items-start">
                    <div className={`p-3 rounded-2xl bg-slate-50 ${alert ? 'text-red-600' : 'text-slate-400 group-hover:text-blue-600'} transition-colors`}>
                        {React.cloneElement(icon, { size: 24 })}
                    </div>
                    {alert && <div className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />}
                </div>
                <div className="mt-4">
                    <p className={`text-3xl font-black ${color}`}>{value}</p>
                    <p className="text-[9px] font-black uppercase text-slate-400 tracking-widest mt-1">{label}</p>
                </div>
            </CardContent>
        </Card>
    )
}

function GrievanceRow({ id, est, days, status, escalated }: any) {
    const isOverdue = status === 'Beyond Timeline';
    return (
        <TableRow className="border-none hover:bg-slate-50 transition-colors group">
            <TableCell className="px-8 py-6">
                <span className="text-[11px] font-mono font-black text-blue-600 bg-blue-50/50 px-2 py-1 rounded-md">{id}</span>
            </TableCell>
            <TableCell>
                <div className="flex items-center gap-3">
                    <Building2 className="text-slate-300" size={16} />
                    <span className="text-xs font-bold text-slate-700 uppercase tracking-tighter">{est}</span>
                </div>
            </TableCell>
            <TableCell>
                <div className="flex items-center gap-2">
                    <Timer className={`text-slate-300 ${isOverdue ? 'text-red-500' : ''}`} size={14} />
                    <span className={`text-xs font-bold ${isOverdue ? 'text-red-600 underline decoration-red-200' : 'text-slate-600'}`}>{days}</span>
                </div>
            </TableCell>
            <TableCell>
                <Badge className={`rounded-full px-3 py-1 text-[9px] font-black uppercase border-none shadow-none ${
                    status === 'Within Timeline' ? 'bg-green-100 text-green-700' : 
                    status === 'Beyond Timeline' ? 'bg-red-100 text-red-700' : 
                    'bg-purple-100 text-purple-700'
                }`}>
                    {status}
                </Badge>
            </TableCell>
            <TableCell className="text-right px-8">
                <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-all">
                    <button title="Issue Summon" className="p-2 bg-slate-900 text-white rounded-xl hover:bg-black shadow-lg">
                        <Gavel size={14} />
                    </button>
                    <button title="Escalate to State" className="p-2 bg-purple-50 text-purple-600 rounded-xl hover:bg-purple-600 hover:text-white border border-purple-100">
                        <ArrowUpRight size={14} />
                    </button>
                </div>
            </TableCell>
        </TableRow>
    )
}

function LegendItem({ color, label }: any) {
    return (
        <div className="flex items-center gap-2">
            <div className={`h-2 w-2 rounded-full ${color}`} />
            <span className="text-[9px] font-black text-slate-500 uppercase tracking-tighter">{label}</span>
        </div>
    )
}

const pieData = [
  { name: 'Within SLA', value: 842, color: '#10b981' },
  { name: 'Beyond SLA', value: 156, color: '#ef4444' },
  { name: 'Escalated', value: 42, color: '#9333ea' },
  { name: 'Closed', value: 200, color: '#e2e8f0' },
];