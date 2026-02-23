// app/dashboard/establishment/page.tsx
"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MessageSquare, Clock, AlertCircle, Accessibility, Gavel, TrendingUp } from "lucide-react";

export default function EstablishmentDashboard() {
  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      <div className="flex justify-between items-end">
        <div>
            <h1 className="text-3xl font-black text-slate-900 tracking-tight">Executive Summary</h1>
            <p className="text-slate-500 font-medium">Monitoring statutory response and institutional compliance.</p>
        </div>
        <Badge className="h-8 px-4 bg-slate-900 text-white font-black tracking-widest text-[10px] uppercase">FY 2024-25</Badge>
      </div>

      {/* SECTION 5.1: KEY INDICATORS */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
        <KPIBox label="Total Grievances" value="124" icon={<MessageSquare className="text-blue-600"/>} />
        <KPIBox label="Pending" value="18" icon={<Clock className="text-orange-600"/>} />
        <KPIBox label="Overdue" value="05" icon={<AlertCircle className="text-red-600"/>} alert />
        <KPIBox label="Access Pending" value="09" icon={<Accessibility className="text-purple-600"/>} />
        <KPIBox label="Directions" value="02" icon={<Gavel className="text-slate-900"/>} />
        <div className="bg-slate-900 rounded-[24px] p-5 text-white flex flex-col justify-between shadow-xl">
            <span className="text-[9px] font-black uppercase tracking-widest text-slate-500">Compliance Score</span>
            <div className="text-3xl font-black text-blue-400">79%</div>
        </div>
      </div>

      {/* SECTION 12: GRAPHS & CHARTS */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Grievance Trend Analysis (Line Chart Mock) */}
        <Card className="rounded-[32px] border-slate-200 bg-white shadow-sm overflow-hidden">
          <CardHeader className="p-6 border-b border-slate-50">
            <CardTitle className="text-xs font-black uppercase tracking-widest text-slate-400">Grievance Trend Analysis</CardTitle>
          </CardHeader>
          <CardContent className="p-8 h-64 flex items-end justify-between gap-2">
            {[40, 60, 45, 90, 100, 80, 50, 70, 85].map((h, i) => (
                <div key={i} className="w-full bg-slate-100 rounded-t-lg relative group transition-all hover:bg-blue-600" style={{ height: `${h}%` }}>
                    <span className="absolute -top-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 text-[10px] font-black text-blue-600">Month {i+1}</span>
                </div>
            ))}
          </CardContent>
        </Card>

        {/* PwD Employment Composition (Donut Chart Mock) */}
        <Card className="rounded-[32px] border-slate-200 bg-white shadow-sm">
           <CardHeader className="p-6">
              <CardTitle className="text-xs font-black uppercase tracking-widest text-slate-400">PwD Employment Composition</CardTitle>
           </CardHeader>
           <CardContent className="flex items-center justify-around h-64">
                <div className="relative h-48 w-48 rounded-full border-[16px] border-blue-600 flex items-center justify-center">
                    <div className="text-center">
                        <p className="text-3xl font-black text-slate-900">4.2%</p>
                        <p className="text-[10px] font-bold text-slate-400 uppercase">Compliance</p>
                    </div>
                </div>
                <div className="space-y-4">
                    <LegendItem color="bg-blue-600" label="PwD Employees" val="12" />
                    <LegendItem color="bg-slate-100" label="General" val="278" />
                </div>
           </CardContent>
        </Card>

        {/* Compliance Area Score Comparison (Bar Chart) */}
        <Card className="rounded-[32px] border-slate-200 lg:col-span-2 bg-white shadow-sm overflow-hidden">
            <CardHeader className="p-6 border-b border-slate-50">
                <CardTitle className="text-xs font-black uppercase tracking-widest text-slate-400">Compliance Area Score Comparison</CardTitle>
            </CardHeader>
            <CardContent className="p-8 space-y-6">
                <ComplianceBar label="Physical Accessibility" score={85} />
                <ComplianceBar label="Digital Accessibility" score={40} color="bg-red-500" />
                <ComplianceBar label="PwD Employment" score={100} color="bg-green-500" />
                <ComplianceBar label="EO Policy" score={95} />
                <ComplianceBar label="Grievance Response" score={72} />
            </CardContent>
        </Card>
      </div>
    </div>
  );
}

function KPIBox({ label, value, icon, alert }: any) {
    return (
        <div className={`p-5 rounded-[24px] border border-slate-100 bg-white shadow-sm ${alert ? 'ring-1 ring-red-100' : ''}`}>
            <div className="flex items-center justify-between mb-4">
                <div className="p-2 bg-slate-50 rounded-lg">{icon}</div>
                {alert && <div className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />}
            </div>
            <p className="text-2xl font-black text-slate-900 leading-none">{value}</p>
            <p className="text-[9px] font-black uppercase text-slate-400 tracking-widest mt-2">{label}</p>
        </div>
    );
}

function ComplianceBar({ label, score, color }: any) {
    return (
        <div className="space-y-2">
            <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest">
                <span>{label}</span>
                <span>{score}%</span>
            </div>
            <div className="h-3 w-full bg-slate-100 rounded-full overflow-hidden">
                <div className={`h-full ${color || 'bg-blue-600'} transition-all duration-1000`} style={{ width: `${score}%` }} />
            </div>
        </div>
    )
}

function LegendItem({ color, label, val }: any) {
    return (
        <div className="flex items-center gap-3">
            <div className={`h-3 w-3 rounded-full ${color}`} />
            <div>
                <p className="text-[10px] font-black text-slate-900 uppercase leading-none">{val}</p>
                <p className="text-[9px] font-medium text-slate-400 uppercase tracking-tighter">{label}</p>
            </div>
        </div>
    )
}