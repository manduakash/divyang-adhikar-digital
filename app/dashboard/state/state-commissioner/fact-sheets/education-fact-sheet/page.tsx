// app/dashboard/scpd/fact-sheets/education/page.tsx
"use client";
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  School, GraduationCap, Users, ShieldCheck, 
  MapPin, Landmark, UserCircle2, Phone, 
  Mail, Calendar, Globe, Accessibility,
  Activity, Clock, AlertTriangle, CheckCircle2,
  Printer, Download, History, ArrowUpRight,
  Sparkles, BookOpenCheck, MousePointer2, FileText, BadgeCheck,
  Gavel
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { 
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue 
} from "@/components/ui/select";

export default function EducationalFactSheet() {
  return (
    <div className="space-y-10 animate-in fade-in duration-1000 pb-20 font-sans selection:bg-indigo-100">
      
      {/* INTERACTIVE IDENTITY HUB - APEX DESIGN */}
      <Card className="rounded-[40px] border-none bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 p-1 relative overflow-hidden shadow-2xl shadow-indigo-200">
        <div className="absolute inset-0 opacity-15 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        <div className="bg-white rounded-[38px] p-10 relative z-10 flex flex-col xl:flex-row justify-between items-start gap-12">
            
            {/* LEFT: SELECTABLE INSTITUTION PARAMETERS */}
            <div className="flex-1 space-y-8">
                <div className="flex items-center gap-6">
                    <div className="h-20 w-20 bg-gradient-to-br from-indigo-500 to-purple-700 rounded-3xl flex items-center justify-center text-white shadow-xl">
                        <School size={38} />
                    </div>
                    <div className="space-y-3 flex-1">
                        <p className="text-[9px] font-black uppercase text-indigo-600 tracking-[0.3em] ml-1">Academic Entity Identity</p>
                        <Select defaultValue="university">
                            <SelectTrigger className="h-16 w-full max-w-2xl border-none bg-slate-50 rounded-2xl px-6 text-2xl font-black text-slate-900 uppercase tracking-tighter shadow-inner focus:ring-2 focus:ring-indigo-500 transition-all">
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent className="rounded-2xl font-bold">
                                <SelectItem value="university">City Central University [EDU-UP-9921]</SelectItem>
                                <SelectItem value="highschool">Model High School [EDU-UP-0014]</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <HeaderFilter label="Type" defaultValue="aided" options={[{v:'govt', l:'Government'}, {v:'aided', l:'Govt Aided'}, {v:'pvt', l:'Private'}]} />
                    <HeaderFilter label="Category" defaultValue="college" options={[{v:'school', l:'Secondary School'}, {v:'college', l:'Higher Education'}]} />
                    <HeaderFilter label="District" defaultValue="lko" options={[{v:'lko', l:'Lucknow'}, {v:'vns', l:'Varanasi'}]} />
                    <HeaderFilter label="Current Status" defaultValue="act" options={[{v:'act', l:'Active Node'}, {v:'ina', l:'Inactive'}]} />
                </div>
            </div>

            {/* RIGHT: NODAL OFFICER HUB */}
            <div className="bg-slate-50 border border-slate-100 rounded-[32px] p-8 min-w-[350px] shadow-inner relative overflow-hidden group hover:border-indigo-200 transition-all">
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/topography.png')]" />
                <p className="text-[9px] font-black uppercase text-slate-400 tracking-widest mb-4">Designated Nodal Officer</p>
                <div className="flex items-center gap-4 relative z-10">
                    <div className="h-12 w-12 rounded-2xl bg-white border border-slate-100 flex items-center justify-center text-indigo-600 shadow-sm transition-transform group-hover:scale-110"><UserCircle2 size={24}/></div>
                    <div>
                        <p className="text-base font-black text-slate-800 uppercase tracking-tight">Prof. Anirban Das</p>
                        <div className="flex gap-4 mt-1 opacity-70">
                            <span className="text-[9px] font-bold text-slate-500 uppercase flex items-center gap-1"><Phone size={10}/> 2289-XXXX</span>
                            <span className="text-[9px] font-bold text-slate-500 uppercase flex items-center gap-1"><Mail size={10}/> nodal@edu.in</span>
                        </div>
                    </div>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-200/50 flex justify-between items-center relative z-10">
                    <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest leading-none">Last Audit Session</span>
                    <span className="text-[11px] font-mono font-black text-indigo-600 tracking-tighter">14 OCT 2024</span>
                </div>
            </div>
        </div>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* INCLUSION DYNAMICS LEDGER */}
        <StatTableCard title="Inclusion Dynamics" gradient="from-blue-600 to-indigo-700" icon={<Users/>}>
            <StatRow label="Total Registered Students" val="12,450" />
            <StatRow label="PwD Students Enrolled" val="420" mono />
            <div className="col-span-2 p-6 bg-indigo-50 rounded-[32px] border border-indigo-100 flex items-center justify-between shadow-sm my-4">
                <div>
                    <p className="text-[9px] font-black text-indigo-400 uppercase tracking-widest">Inclusion Score</p>
                    <p className="text-4xl font-black text-indigo-700 tracking-tighter">92.4%</p>
                </div>
                <div className="text-right">
                        <Badge className="bg-green-600 text-white font-black text-[8px] uppercase tracking-tighter mb-2">Benchmark Satisfied</Badge>
                        <div className="flex gap-2 justify-end opacity-60">
                            <span className="text-[8px] font-black uppercase text-slate-500">Vis: 42</span>
                            <span className="text-[8px] font-black uppercase text-slate-500">Hear: 18</span>
                        </div>
                </div>
            </div>
        </StatTableCard>

        {/* REASONABLE ACCOMMODATION STATUS */}
        <StatTableCard title="Support Provisioning" gradient="from-emerald-600 to-teal-800" icon={<GraduationCap/>}>
            <StatRow label="Total Requests Received" val="84" />
            <StatRow label="Accommodations Provided" val="80" success />
            <div className="h-[1px] w-full bg-slate-100 my-2" />
            <StatRow label="Pending Requests" val="04" warning />
            <StatRow label="Pending Beyond Timeline" val="01" alert />
            <Button variant="ghost" className="w-full mt-6 text-indigo-600 font-black uppercase text-[9px] tracking-[0.2em] group/btn">
                Audit Individual Scribe Logs <ArrowUpRight size={14} className="ml-2 group-hover/btn:translate-x-1 transition-all" />
            </Button>
        </StatTableCard>

        {/* BARRIER REGISTRY Hub */}
        <StatTableCard title="Barrier Monitoring" gradient="from-purple-600 to-indigo-800" icon={<Globe/>}>
            <div className="space-y-6">
                <StatusNode label="Physical Accessibility Status" status="Fully Compliant" success />
                <StatusNode label="Digital Accessibility (LMS)" status="Partial Access" warning />
            </div>
            <div className="h-[1px] w-full bg-slate-100 my-4" />
            <div className="grid grid-cols-2 gap-8">
                <StatRow label="Last Audit Date" val="12 Oct 2024" />
                <StatRow label="Compliance Due" val="15 Dec 2024" warning />
            </div>
        </StatTableCard>

        {/* ACCOUNTABILITY MONITOR */}
        <StatTableCard title="Oversight Accountability" gradient="from-slate-800 to-slate-950" icon={<Gavel/>}>
            <div className="space-y-4">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Active Filings</p>
                <div className="grid grid-cols-2 gap-4">
                    <UrgencyTile label="Grievances" total="08" overdue="00" success />
                    <UrgencyTile label="Directions" total="04" overdue="01" alert />
                </div>
            </div>
            <div className="mt-8 p-5 bg-slate-50 rounded-[32px] border border-slate-100 flex items-center justify-between group cursor-pointer hover:bg-white transition-all shadow-sm">
                <div className="space-y-1">
                    <p className="text-[9px] font-black text-indigo-400 uppercase tracking-widest leading-none">Latest Statutory Order</p>
                    <p className="text-xs font-mono font-black text-indigo-600 tracking-tighter uppercase">DIR-EDU-STATE-098</p>
                </div>
                <div className="h-8 w-8 rounded-full bg-white flex items-center justify-center text-indigo-400 shadow-sm border border-slate-100 group-hover:bg-indigo-600 group-hover:text-white transition-all"><ArrowUpRight size={14} /></div>
            </div>
        </StatTableCard>

      </div>

      {/* FOOTER ACTIONS */}
      <footer className="pt-12 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-4">
            <BadgeCheck className="text-blue-600 shadow-xl" size={24} />
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 leading-none uppercase">Education Fact Sheet Ledger v4.2 • Sync Node Active</span>
        </div>
        <div className="flex gap-4">
            <Button variant="outline" className="h-14 px-8 rounded-2xl border-slate-200 font-bold bg-white gap-2 text-[10px] uppercase tracking-widest hover:bg-slate-50 shadow-sm"><History size={18} /> View Institutional Timeline</Button>
            <Button className="h-14 px-10 rounded-2xl bg-slate-900 text-white font-black uppercase tracking-widest text-[10px] shadow-2xl gap-2 hover:bg-black transition-all group">
                <Printer size={18} /> Export Briefing Note <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
            </Button>
        </div>
      </footer>
    </div>
  );
}

/* UI SUB-COMPONENTS */

function HeaderFilter({ label, options, defaultValue }: any) {
    return (
        <div className="space-y-2">
            <label className="text-[9px] font-black uppercase text-slate-400 ml-1 tracking-widest">{label}</label>
            <Select defaultValue={defaultValue}>
                <SelectTrigger className="h-11 rounded-2xl bg-slate-50 border-none font-bold text-slate-700 text-[10px] uppercase shadow-inner transition-all hover:bg-slate-100">
                    <SelectValue />
                </SelectTrigger>
                <SelectContent className="rounded-2xl border-slate-100 shadow-2xl">
                    {options.map((opt: any) => (
                        <SelectItem key={opt.v} value={opt.v} className="font-bold text-[10px] uppercase py-2.5">{opt.l}</SelectItem>
                    ))}
                </SelectContent>
            </Select>
        </div>
    )
}

function StatTableCard({ title, icon, gradient, children }: any) {
    return (
        <Card className="rounded-[44px] border-slate-200 bg-white shadow-sm overflow-hidden group hover:shadow-2xl transition-all duration-500 h-full flex flex-col">
            <CardHeader className={`p-8 bg-gradient-to-r ${gradient} text-white relative overflow-hidden`}>
                <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
                <div className="flex items-center justify-between relative z-10">
                    <div className="flex items-center gap-4">
                        <div className="h-10 w-10 rounded-2xl bg-white/20 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500">
                            {icon}
                        </div>
                        <CardTitle className="text-[11px] font-black uppercase tracking-[0.3em] leading-none">{title}</CardTitle>
                    </div>
                </div>
            </CardHeader>
            <CardContent className="p-10 flex-1 space-y-4 relative">
                <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/topography.png')]" />
                <div className="relative z-10 space-y-4">
                    {children}
                </div>
            </CardContent>
        </Card>
    )
}

function StatRow({ label, val, alert, success, warning, mono }: any) {
    const colorClass = alert ? 'text-red-600 underline decoration-red-200 decoration-2' : success ? 'text-green-600' : warning ? 'text-orange-500' : 'text-slate-900';
    return (
        <div className="flex justify-between items-end group/row cursor-default">
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest group-hover/row:text-indigo-600 transition-colors">{label}</p>
            <p className={`text-2xl font-black tracking-tighter leading-none ${colorClass} ${mono ? 'font-mono' : ''}`}>{val}</p>
        </div>
    )
}

function StatusNode({ label, status, success, alert }: any) {
    return (
        <div className="flex items-center justify-between p-5 rounded-[28px] bg-slate-50 border border-slate-100 group transition-all hover:bg-white hover:border-indigo-200">
            <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest leading-none">{label}</p>
            <Badge className={`border-none font-black text-[9px] uppercase px-4 py-1.5 tracking-widest shadow-sm ${success ? 'bg-green-100 text-green-700' : alert ? 'bg-red-100 text-red-700 animate-pulse' : 'bg-slate-200 text-slate-600'}`}>
                {status}
            </Badge>
        </div>
    )
}

function UrgencyTile({ label, total, overdue, alert, success }: any) {
    const colorClass = alert ? 'text-red-600' : success ? 'text-green-600' : 'text-slate-900';
    const bgClass = alert ? 'bg-red-50 border-red-100' : 'bg-slate-50 border-slate-100';

    return (
        <div className={`p-4 rounded-2xl border ${bgClass} text-center space-y-1 group hover:shadow-lg transition-all`}>
            <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest">{label}</p>
            <p className={`text-2xl font-black ${colorClass} tracking-tighter leading-none`}>{total}</p>
            <p className="text-[8px] font-bold text-slate-400 uppercase leading-none mt-2">({overdue} Overdue)</p>
        </div>
    )
}