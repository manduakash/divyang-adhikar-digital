// app/dashboard/sab/reports/attendance/page.tsx
"use client";
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow 
} from "@/components/ui/table";
import { 
  Users, UserCheck, History, Landmark, 
  Search, Filter, Printer, FileSpreadsheet, 
  ArrowUpRight, Globe, BadgeCheck, Activity,
  Timer, Clock, Download, Sparkles, 
  CheckCircle2, AlertTriangle, TrendingUp,
  MapPin, CalendarDays
} from "lucide-react";
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, 
  ResponsiveContainer, Cell, Legend, ComposedChart
} from 'recharts';
import { Badge } from "@/components/ui/badge";

export default function AttendanceReport() {
    
    // MOCK DATA FOR ANALYTICS (Meeting-wise Attendance)
    const meetingAttendanceData = [
        { date: '12 Jan', percent: 92 },
        { date: '05 Mar', percent: 88 },
        { date: '18 May', percent: 95 },
        { date: '22 Jul', percent: 84 },
        { date: '10 Sep', percent: 96 },
        { date: '14 Oct', percent: 98 },
    ];

    return (
        <div className="space-y-10 animate-in fade-in duration-1000 pb-20 font-sans selection:bg-emerald-100">
            
            {/* 1. APEX HUB HEADER - CARBON FIBER TEXTURE */}
            <Card className="rounded-[48px] border-none bg-white p-1 relative overflow-hidden shadow-2xl shadow-slate-200">
                <div className="p-12 relative z-10 flex flex-col xl:flex-row justify-between items-start xl:items-center gap-10">
                    <div className="flex items-center gap-8">
                        <div className="h-24 w-24 bg-gradient-to-br from-teal-500 via-emerald-600 to-indigo-700 rounded-[32px] flex items-center justify-center text-white shadow-2xl shadow-emerald-500/20 group hover:rotate-6 transition-transform">
                            <UserCheck size={42} />
                        </div>
                        <div className="space-y-2">
                            <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.2em] border border-emerald-100">
                                <BadgeCheck size={14} /> Participation Monitor Node
                            </div>
                            <h1 className="text-5xl font-black text-slate-900 tracking-tighter uppercase leading-none text-wrap">Attendance Report</h1>
                            <p className="text-slate-500 font-medium italic text-lg tracking-tight uppercase tracking-widest text-xs text-nowrap">Statutory record of Board Member participation and quorum fulfillment.</p>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <Button variant="outline" className="h-16 px-10 rounded-3xl border-slate-200 font-black uppercase tracking-widest text-[10px] bg-white gap-2 shadow-sm hover:bg-slate-50 transition-all">
                            <FileSpreadsheet size={20} className="text-green-600" /> Export XLS
                        </Button>
                        <Button className="h-16 px-12 rounded-3xl bg-slate-950 text-white font-black uppercase tracking-widest text-[10px] shadow-2xl hover:bg-black transition-all gap-3 group">
                            <Printer size={20} /> Print Certified Hub
                        </Button>
                    </div>
                </div>
            </Card>

            {/* 2. ANALYTICS GRID */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                
                {/* B2.2 ATTENDANCE PERCENTAGE - MEETING-WISE */}
                <ChartContainer title="Meeting-wise Attendance Percentage" desc="X-Axis: Meeting Date • Y-Axis: Attendance Percentage" cols="lg:col-span-8">
                    <ResponsiveContainer width="100%" height={350}>
                        <BarChart data={meetingAttendanceData} margin={{ top: 20, right: 30, left: 0, bottom: 20 }}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                            <XAxis dataKey="date" axisLine={false} tickLine={false} tick={{fontSize: 10, fontWeight: 'black' }} />
                            <YAxis axisLine={false} tickLine={false} tick={{fontSize: 10, fontWeight: 'bold'}} domain={[0, 100]} />
                            <Tooltip cursor={{fill: '#f8fafc'}} contentStyle={{borderRadius: '20px', border: 'none', boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1)'}} />
                            <Bar dataKey="percent" fill="#10b981" radius={[12, 12, 0, 0]} barSize={60}>
                                {meetingAttendanceData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.percent > 90 ? '#059669' : '#34d399'} />
                                ))}
                            </Bar>
                        </BarChart>
                    </ResponsiveContainer>
                </ChartContainer>

                {/* QUORUM METRICS */}
                <Card className="lg:col-span-4 rounded-[44px] border-slate-200 bg-white shadow-xl overflow-hidden relative">
                    <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/topography.png')]" />
                    <CardHeader className="p-8 border-b border-slate-50 bg-slate-50/30">
                        <CardTitle className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Quorum Summary</CardTitle>
                    </CardHeader>
                    <div className="p-8 space-y-8">
                        <StatItem label="Avg State Attendance" val="92.4%" color="text-indigo-600" />
                        <StatItem label="Quorum Met Sessions" val="12 / 12" color="text-emerald-600" />
                        <div className="pt-6 border-t border-slate-100">
                             <div className="flex items-center gap-3 text-orange-600 mb-4">
                                <AlertTriangle size={16} />
                                <p className="text-[9px] font-black uppercase tracking-widest leading-none">Participation Warning</p>
                             </div>
                             <p className="text-xs font-bold text-slate-400 uppercase tracking-tighter leading-relaxed">
                                03 Members have missed 2+ consecutive meetings. Automated notifications pending.
                             </p>
                        </div>
                    </div>
                </Card>
            </div>

            {/* 3. MEMBER PARTICIPATION LEDGER - CARBON FIBER OVERLAY */}
            <Card className="rounded-[48px] border-slate-200 shadow-sm overflow-hidden bg-white">
                <CardHeader className="p-0">
                    <div className="p-10 bg-gradient-to-r from-emerald-600 via-teal-600 to-indigo-700 text-white relative overflow-hidden">
                        {/* CARBON FIBER TEXTURE */}
                        <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
                        
                        <div className="flex flex-col md:flex-row justify-between items-center gap-10 relative z-10">
                            <div className="flex items-center gap-5">
                                <div className="h-14 w-14 rounded-2xl bg-white/20 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-xl">
                                    <Users size={28} />
                                </div>
                                <div className="space-y-1">
                                    <CardTitle className="text-xl font-black uppercase tracking-tight">Member Name & Identity Registry</CardTitle>
                                    <p className="text-[10px] font-bold text-emerald-100 uppercase tracking-widest leading-none">Historical participation and attendance Percentage tracker</p>
                                </div>
                            </div>
                            <div className="relative group flex-1 max-w-md">
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-white/50" />
                                <input className="w-full pl-12 pr-6 py-4 bg-white/10 border border-white/20 rounded-2xl text-[10px] font-black uppercase outline-none text-white placeholder:text-white/30 focus:bg-white/20 transition-all shadow-inner" placeholder="Search by Member Name..." />
                            </div>
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="p-0">
                    <Table>
                        <TableHeader className="bg-slate-50/80">
                            <TableRow className="border-slate-100">
                                <TableHead className="px-10 py-6 text-[9px] font-black uppercase tracking-widest text-slate-400">Member Name</TableHead>
                                <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400">Role</TableHead>
                                <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400 text-center">Representing Category</TableHead>
                                <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400 text-center">Last Meeting Attended</TableHead>
                                <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400 text-center">Attendance Percentage</TableHead>
                                <TableHead className="text-right px-10 text-[9px] font-black uppercase tracking-widest text-slate-400">Status (Active / Inactive)</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody className="divide-y divide-slate-50 font-sans">
                            <AttendanceRow 
                                name="Dr. Rajesh Mehra" 
                                role="Chairperson" 
                                cat="Expert Node" 
                                last="14 Oct 2024" 
                                rate="100%" 
                                status="ACTIVE" 
                                success 
                            />
                            <AttendanceRow 
                                name="Amitabh Kant, IAS" 
                                role="Member Secretary" 
                                cat="Nodal Office" 
                                last="14 Oct 2024" 
                                rate="98.5%" 
                                status="ACTIVE" 
                                success 
                            />
                            <AttendanceRow 
                                name="Dept. Revenue Node" 
                                role="Member" 
                                cat="Govt Dept" 
                                last="22 Jul 2024" 
                                rate="24.2%" 
                                status="INACTIVE" 
                                alert 
                            />
                            <AttendanceRow 
                                name="Sr. Maria J." 
                                role="Member" 
                                cat="NGO / Expert" 
                                last="10 Sep 2024" 
                                rate="72.0%" 
                                status="ACTIVE" 
                                warning 
                            />
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>

            {/* FOOTER - SYSTEM INTEGRITY */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-10 border-t border-slate-200">
                <div className="flex items-center gap-4 text-slate-400">
                    <Globe size={20} className="text-emerald-600 animate-spin-slow" />
                    <span className="text-[10px] font-black uppercase tracking-widest leading-none">Participation Sync Hub: 28 Board Members Audited Across Districts</span>
                </div>
                <div className="flex gap-4">
                     <button className="text-[10px] font-black uppercase text-emerald-600 hover:underline">Download Attendance ZIP</button>
                     <button className="text-[10px] font-black uppercase text-slate-400 hover:text-slate-900">Protocols</button>
                </div>
            </div>

        </div>
    );
}

/* UI SUB-COMPONENTS */

function ChartContainer({ title, desc, children, cols }: any) {
    return (
        <Card className={`rounded-[44px] border-slate-200 bg-white shadow-sm overflow-hidden flex flex-col ${cols}`}>
            <CardHeader className="p-8 border-b border-slate-50 mb-6 bg-slate-50/30 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
                <div className="space-y-1 relative z-10">
                    <CardTitle className="text-[11px] font-black uppercase tracking-[0.25em] text-emerald-600">{title}</CardTitle>
                    <p className="text-lg font-black text-slate-900 tracking-tight">{desc}</p>
                </div>
            </CardHeader>
            <CardContent className="px-8 pb-10 flex-1 relative z-10">{children}</CardContent>
        </Card>
    );
}

function AttendanceRow({ name, role, cat, last, rate, status, success, alert, warning }: any) {
    const statusColor = success ? 'bg-green-100 text-green-700' : alert ? 'bg-red-100 text-red-700 animate-pulse' : warning ? 'bg-orange-100 text-orange-700' : 'bg-blue-100 text-blue-700';
    return (
        <TableRow className="border-none hover:bg-slate-50 transition-all group cursor-default">
            <TableCell className="px-10 py-6">
                <div className="flex items-center gap-3">
                    <div className={`h-1.5 w-1.5 rounded-full shrink-0 ${success ? 'bg-green-500' : alert ? 'bg-red-500' : 'bg-slate-300'}`} />
                    <span className="text-sm font-black text-slate-900 uppercase tracking-tight">{name}</span>
                </div>
            </TableCell>
            <TableCell><Badge className="bg-slate-100 text-slate-600 border-none font-black text-[8px] uppercase px-3 py-1 tracking-widest">{role}</Badge></TableCell>
            <TableCell className="text-center text-[10px] font-bold text-slate-500 uppercase tracking-widest">{cat}</TableCell>
            <TableCell className="text-center font-mono font-black text-indigo-700 text-[11px]">{last}</TableCell>
            <TableCell className="text-center">
                <div className="flex flex-col items-center">
                    <span className={`text-[11px] font-mono font-black ${alert ? 'text-red-600 underline' : 'text-emerald-600'}`}>{rate}</span>
                    <div className="w-16 h-1 bg-slate-100 rounded-full mt-1 overflow-hidden">
                        <div className={`h-full ${alert ? 'bg-red-500' : 'bg-emerald-600'}`} style={{ width: rate }} />
                    </div>
                </div>
            </TableCell>
            <TableCell className="text-right px-10">
                <Badge className={`rounded-full px-4 py-1 text-[8px] font-black uppercase border-none shadow-sm ${statusColor}`}>
                    {status}
                </Badge>
            </TableCell>
        </TableRow>
    )
}

function StatItem({ label, val, color }: any) {
    return (
        <div className="flex justify-between items-center group cursor-default">
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest group-hover:text-emerald-600 transition-colors">{label}</span>
            <span className={`text-2xl font-black ${color}`}>{val}</span>
        </div>
    )
}