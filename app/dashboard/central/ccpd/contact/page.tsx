// app/dashboard/scpd/contact/page.tsx
"use client";
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Landmark, Mail, Phone, Clock, Users, 
  MapPin, ShieldCheck, BadgeCheck, Globe,
  MessageSquare, History, ArrowUpRight,
  Sparkles, UserCircle2, PhoneCall, Send,
  CalendarDays, Activity, Briefcase, Info,
  Headphones,
  CheckCircle2
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow, } from "@/components/ui/table";

export default function SCPDContactHub() {
  return (
    <div className="space-y-10 animate-in fade-in duration-1000 pb-20 font-sans selection:bg-indigo-100">
      
      {/* HUB PRIMARY HEADER */}
      <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-8 bg-white p-12 rounded-[48px] border border-slate-200 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.05)] relative overflow-hidden">
        <div className="absolute top-0 right-0 p-10 opacity-[0.03] pointer-events-none text-indigo-600">
            <Headphones size={240} />
        </div>
        
        <div className="space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.2em] border border-indigo-100 shadow-sm">
            <ShieldCheck size={14} /> Official Communication Node
          </div>
          <h1 className="text-6xl font-black text-slate-900 tracking-tighter uppercase leading-none">Contact & Escalation</h1>
          <p className="text-slate-500 font-medium italic text-xl max-w-2xl">Official directory of the Office of the State Commissioner for Persons with Disabilities.</p>
        </div>

        <div className="flex gap-4 relative z-10">
            <Button variant="outline" className="h-16 px-10 rounded-3xl border-slate-200 font-black uppercase tracking-widest text-[10px] bg-white hover:bg-slate-50 shadow-xl transition-all group">
                <History size={18} className="mr-2" /> System Logs <ArrowUpRight size={14} className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
            </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* OFFICE HEADQUARTERS HUB */}
        <Card className="rounded-[44px] border-slate-200 bg-white shadow-sm overflow-hidden group hover:shadow-xl transition-all duration-500">
            <CardHeader className="p-8 bg-gradient-to-r from-blue-600 to-indigo-700 text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
                <CardTitle className="text-[10px] font-black uppercase tracking-[0.3em] flex items-center gap-3 relative z-10">
                    <Landmark size={16}/> Headquarters Details
                </CardTitle>
            </CardHeader>
            <CardContent className="p-10 space-y-10 relative overflow-hidden">
                <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/topography.png')]" />
                <div className="space-y-8 relative z-10">
                    <div className="space-y-3">
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Office Address</p>
                        <p className="text-lg font-black text-slate-900 leading-relaxed uppercase tracking-tighter">
                            Directorate of Divyangjan, <br/> Nabibullah Road, Lucknow, <br/> Uttar Pradesh - 226001
                        </p>
                    </div>
                    <div className="flex gap-6 items-center bg-slate-50 p-6 rounded-[32px] border border-slate-100">
                        <Clock className="text-indigo-600" size={24} />
                        <div className="space-y-1">
                            <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Working Hours</p>
                            <p className="text-sm font-black text-slate-800">10:00 AM — 05:00 PM</p>
                            <p className="text-[8px] font-bold text-slate-400 uppercase tracking-tighter">Mon to Sat (Excluding Gazetted Holidays)</p>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>

        {/* DESIGNATION-WISE DIRECTORY */}
        <Card className="lg:col-span-2 rounded-[44px] border-slate-200 bg-white shadow-sm overflow-hidden group hover:shadow-xl transition-all duration-500">
            <CardHeader className="p-8 bg-gradient-to-r from-purple-600 to-indigo-700 text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
                <div className="flex items-center justify-between relative z-10">
                    <CardTitle className="text-[10px] font-black uppercase tracking-[0.3em] flex items-center gap-3">
                        <Users size={16}/> Secretariat Hierarchy
                    </CardTitle>
                    <BadgeCheck className="text-white opacity-40" />
                </div>
            </CardHeader>
            <CardContent className="p-0">
                <Table>
                    <TableHeader className="bg-slate-50/50">
                        <TableRow className="border-slate-100">
                            <TableHead className="px-10 py-6 text-[9px] font-black uppercase tracking-widest text-slate-400">Designated Role</TableHead>
                            <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400">Officer Name</TableHead>
                            <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400 text-center">Statutory Channel</TableHead>
                            <TableHead className="text-right px-10 text-[9px] font-black uppercase tracking-widest text-slate-400">Action</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody className="divide-y divide-slate-50 font-sans">
                        <ContactRow role="State Commissioner" name="Dr. S.K. Srivastava" email="scpd-up@nic.in" phone="0522-228XXXX" active />
                        <ContactRow role="Secretary (Admin)" name="Amitabh Kant, IAS" email="sec-scpd@up.gov.in" phone="0522-221XXXX" />
                        <ContactRow role="Public Relations" name="Meera Iyer" email="pr-node@daegs.in" phone="+91 94150 XXXX" />
                        <ContactRow role="Tech Support Hub" name="National Informatics" email="support@daegs.nic.in" phone="1800-XXX-XXXX" />
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
      </div>

      {/* SYSTEM BEHAVIOUR ALERT PANEL */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="rounded-[48px] border-none bg-slate-900 text-white p-12 shadow-2xl relative overflow-hidden group">
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/circuit-board.png')]" />
            <div className="relative z-10 space-y-8">
                <div className="flex items-center gap-3 text-blue-400">
                    <Sparkles size={24} />
                    <h3 className="text-sm font-black uppercase tracking-widest">Automation Engine</h3>
                </div>
                <p className="text-2xl font-black leading-tight uppercase tracking-tighter">System-Generated Communications</p>
                <p className="text-sm font-medium text-slate-400 leading-relaxed italic uppercase tracking-tighter">
                    Contact details from this hub are automatically utilized for all statutory directions, case notices, and portal-generated alerts to maintain administrative uniformity.
                </p>
                <div className="pt-6 border-t border-white/10 flex items-center gap-4">
                    <CheckCircle2 className="text-green-500" size={20} />
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">Global Variable Sync Active</span>
                </div>
            </div>
        </Card>

        <Card className="rounded-[48px] border-slate-200 bg-white p-12 shadow-sm border-dashed border-2 flex flex-col justify-center text-center">
            <div className="h-20 w-20 bg-indigo-50 rounded-full flex items-center justify-center mx-auto mb-6 border border-indigo-100 shadow-inner">
                <BadgeCheck size={40} className="text-indigo-600" />
            </div>
            <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tighter leading-none">Profile Updates</h3>
            <p className="text-slate-500 font-medium text-sm mt-4 mb-10 max-w-sm mx-auto uppercase tracking-tighter">
                Modification of contact details is strictly restricted to <b>Authorized Admin Nodes</b> to ensure statutory integrity.
            </p>
            <div className="flex gap-4 justify-center">
                <Button className="bg-slate-900 text-white rounded-2xl font-black uppercase text-[9px] tracking-widest px-10 h-14 shadow-xl hover:bg-black transition-all">Request Update</Button>
            </div>
        </Card>
      </div>

    </div>
  );
}

/* UI SUB-COMPONENTS */

function ContactRow({ role, name, email, phone, active }: any) {
    return (
        <TableRow className="border-none hover:bg-slate-50 transition-all group cursor-pointer">
            <TableCell className="px-10 py-6">
                <div className="flex items-center gap-3">
                    <div className={`h-1.5 w-1.5 rounded-full ${active ? 'bg-indigo-600 shadow-[0_0_10px_rgba(79,70,229,0.5)] animate-pulse' : 'bg-slate-200'}`} />
                    <p className="text-xs font-black text-slate-900 uppercase tracking-widest">{role}</p>
                </div>
            </TableCell>
            <TableCell>
                <p className="text-sm font-black text-slate-800 uppercase tracking-tight leading-none">{name}</p>
                <p className="text-[8px] font-bold text-slate-400 uppercase tracking-widest mt-1.5">Statutory Officer</p>
            </TableCell>
            <TableCell className="text-center">
                <div className="space-y-1">
                    <div className="flex items-center justify-center gap-2 text-[10px] font-mono font-black text-blue-600">
                        <Mail size={12} /> {email}
                    </div>
                    <div className="flex items-center justify-center gap-2 text-[10px] font-mono font-black text-slate-400">
                        <PhoneCall size={12} /> {phone}
                    </div>
                </div>
            </TableCell>
            <TableCell className="text-right px-10 opacity-0 group-hover:opacity-100 transition-all">
                <button className="p-2.5 bg-white border border-slate-200 text-indigo-600 rounded-xl hover:bg-indigo-900 hover:text-white hover:border-indigo-900 shadow-sm transition-all">
                    <Send size={16}/>
                </button>
            </TableCell>
        </TableRow>
    )
}