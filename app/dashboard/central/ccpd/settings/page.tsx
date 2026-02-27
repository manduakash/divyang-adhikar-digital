// app/dashboard/scpd/settings/page.tsx
"use client";
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Settings, Lock, ShieldCheck, Bell, 
  Globe, Fingerprint, Eye, Key, 
  Smartphone, Mail, CheckCircle2, AlertTriangle,
  History, UserCog, BadgeCheck, Activity,
  ChevronRight, Sparkles, Database, LayoutGrid,
  Monitor, ShieldAlert, Save, RefreshCw,
  Badge,
  Gavel,
  Clock
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { 
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue 
} from "@/components/ui/select";
import { 
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow 
} from "@/components/ui/table";

export default function StatutorySettingsHub() {
  return (
    <div className="space-y-10 animate-in fade-in duration-1000 pb-20 font-sans selection:bg-indigo-100">
      
      {/* 1. APEX SETTINGS HEADER - CARBON FIBER TEXTURE */}
      <Card className="rounded-[40px] border-none bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-700 p-1 relative overflow-hidden shadow-2xl shadow-indigo-200">
        <div className="absolute inset-0 opacity-15 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        <div className="bg-white rounded-[38px] p-10 relative z-10 flex flex-col xl:flex-row justify-between items-center gap-8">
            <div className="space-y-3 flex-1">
                <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] border border-indigo-100 shadow-sm">
                    <BadgeCheck size={14} /> System Governance Hub
                </div>
                <h1 className="text-5xl font-black text-slate-900 tracking-tighter uppercase leading-none">Security & Preferences</h1>
                <p className="text-slate-500 font-medium italic text-lg max-w-xl">Authorized management of administrative credentials and statutory system behavior.</p>
            </div>

            <div className="flex items-center gap-6 bg-slate-50 p-6 rounded-[32px] border border-slate-100 shadow-inner group transition-all hover:bg-white">
                <div className="h-12 w-12 rounded-2xl bg-white flex items-center justify-center text-indigo-600 shadow-sm border border-slate-100 group-hover:scale-110 transition-transform">
                    <Fingerprint size={24} />
                </div>
                <div className="space-y-1">
                    <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Account Integrity</p>
                    <p className="text-sm font-black text-slate-800 uppercase">Authenticated Level: Apex</p>
                    <p className="text-[8px] font-bold text-green-600 uppercase flex items-center gap-1"><CheckCircle2 size={10}/> All Protocols Compliant</p>
                </div>
            </div>
        </div>
      </Card>

      {/* 2. SETTINGS MODULES NAVIGATION */}
      <Tabs defaultValue="security" className="space-y-8">
        <div className="flex justify-between items-center bg-white p-3 rounded-[32px] border border-slate-200 shadow-sm">
            <TabsList className="bg-slate-100 p-1 rounded-2xl border border-slate-200 h-auto gap-1">
                <SettingTab value="security" icon={<Lock size={14}/>} label="Security Core" />
                <SettingTab value="notifications" icon={<Bell size={14}/>} label="Channel Preferences" />
                <SettingTab value="localization" icon={<Globe size={14}/>} label="Regional Settings" />
                <SettingTab value="access" icon={<Eye size={14}/>} label="Visibility Audit" />
            </TabsList>
            <Button className="h-11 px-8 rounded-xl bg-slate-900 text-white font-black uppercase tracking-widest text-[9px] shadow-lg gap-2 hover:bg-black transition-all">
                <Save size={16} /> Commit All Preferences
            </Button>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-12 gap-10 items-start">
            
            {/* 3. DYNAMIC SETTINGS CONTENT (8 COLS) */}
            <div className="xl:col-span-8">
                
                {/* SECURITY MODULE */}
                <TabsContent value="security" className="space-y-8 animate-in fade-in zoom-in-95 duration-500">
                    <Card className="rounded-[44px] border-slate-200 bg-white shadow-sm overflow-hidden">
                        <CardHeader className="p-10 border-b border-slate-50 bg-slate-50/50">
                            <CardTitle className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Identity & Access Control</CardTitle>
                        </CardHeader>
                        <CardContent className="p-10 space-y-12">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                <div className="space-y-4">
                                    <label className="text-[10px] font-black uppercase text-slate-400 ml-1">Update Master Password</label>
                                    <Input type="password" placeholder="••••••••••••" className="h-14 rounded-2xl bg-slate-50 border-none font-black px-6 shadow-inner" />
                                    <p className="text-[8px] font-bold text-slate-400 uppercase ml-1">Last changed: 45 days ago</p>
                                </div>
                                <div className="space-y-4">
                                    <label className="text-[10px] font-black uppercase text-slate-400 ml-1">Confirm New Password</label>
                                    <Input type="password" placeholder="••••••••••••" className="h-14 rounded-2xl bg-slate-50 border-none font-black px-6 shadow-inner" />
                                </div>
                            </div>

                            <div className="p-8 bg-indigo-50/50 rounded-[40px] border border-indigo-100 flex items-center justify-between group transition-all hover:bg-white hover:shadow-xl hover:border-indigo-200">
                                <div className="flex items-center gap-6">
                                    <div className="h-14 w-14 rounded-3xl bg-white border border-indigo-100 flex items-center justify-center text-indigo-600 shadow-sm group-hover:scale-110 transition-transform">
                                        <Smartphone size={28} />
                                    </div>
                                    <div className="space-y-1">
                                        <p className="text-lg font-black text-slate-900 uppercase tracking-tight leading-none">Multi-Factor Authentication</p>
                                        <p className="text-xs font-medium text-indigo-400 uppercase tracking-widest leading-none mt-2">Authenticated via Registered Mobile Node</p>
                                    </div>
                                </div>
                                <Switch className="data-[state=checked]:bg-indigo-600 scale-125 shadow-sm" defaultChecked />
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>

                {/* NOTIFICATIONS MODULE */}
                <TabsContent value="notifications" className="animate-in slide-in-from-right-4 duration-500">
                    <Card className="rounded-[44px] border-slate-200 bg-white shadow-sm overflow-hidden">
                        <CardHeader className="p-10 border-b border-slate-50 bg-purple-50/30">
                            <CardTitle className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Channel Alert Preferences</CardTitle>
                        </CardHeader>
                        <CardContent className="p-10 space-y-6">
                            <NotificationToggle label="Official Direction Issued" desc="Instant alert when a statewide order is dispatched." icon={<Gavel size={18}/>} active />
                            <NotificationToggle label="District SLA Breach" desc="Urgent notice when response exceeds 30-day window." icon={<Clock size={18}/>} active />
                            <NotificationToggle label="Master Sync Reports" desc="Weekly consolidation of statewide PwD registries." icon={<Database size={18}/>} />
                            <NotificationToggle label="System Performance Updates" desc="Maintenance schedules and new module releases." icon={<Activity size={18}/>} active />
                        </CardContent>
                    </Card>
                </TabsContent>

                {/* VISIBILITY AUDIT MODULE (Mandated Feature) */}
                <TabsContent value="access" className="animate-in fade-in duration-500">
                    <Card className="rounded-[44px] border-slate-200 bg-white shadow-sm overflow-hidden">
                        <CardHeader className="p-10 border-b border-slate-50 bg-slate-900 text-white relative overflow-hidden">
                             <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/circuit-board.png')]" />
                             <div className="flex items-center gap-4 relative z-10">
                                <Eye className="text-blue-400" />
                                <CardTitle className="text-sm font-black uppercase tracking-widest">Role-Based Access Audit</CardTitle>
                             </div>
                        </CardHeader>
                        <CardContent className="p-0">
                            <Table>
                                <TableHeader className="bg-slate-50">
                                    <TableRow className="border-slate-100">
                                        <TableHead className="px-10 py-6 text-[9px] font-black uppercase tracking-widest text-slate-400">Statutory Module</TableHead>
                                        <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400 text-center">Permitted Nodes</TableHead>
                                        <TableHead className="text-right px-10 text-[9px] font-black uppercase tracking-widest text-slate-400">Permission Level</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody className="divide-y divide-slate-50 font-sans">
                                    <PermissionRow module="Case Registry" nodes="All Districts" level="FULL ACCESS" success />
                                    <PermissionRow module="Statutory Returns" nodes="All Districts" level="SCRUTINY ONLY" warning />
                                    <PermissionRow module="Disaster Mapping" nodes="State Hub" level="READ ONLY" />
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>
                </TabsContent>
            </div>

            {/* 4. SIDEBAR: STATUTORY SECURITY & AI (4 COLS) */}
            <div className="xl:col-span-4 space-y-8 sticky top-28 h-fit">
                
                {/* SECURITY LOG SIDEBAR */}
                <Card className="rounded-[40px] border-none bg-slate-900 text-white p-10 shadow-2xl relative overflow-hidden group">
                    <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/topography.png')]" />
                    <div className="relative z-10 space-y-8">
                        <div className="flex items-center gap-3 text-blue-400">
                            <Sparkles className="animate-pulse" />
                            <h3 className="text-[10px] font-black uppercase tracking-widest">AI Security Scan</h3>
                        </div>
                        <div className="space-y-4">
                            <p className="text-lg font-black uppercase tracking-tight leading-none">Protocol Integrity: 100%</p>
                            <p className="text-xs font-medium text-slate-400 leading-relaxed uppercase tracking-tighter italic">
                                "Last unauthorized attempt detected from external node on 12-Oct was successfully blocked by DAEGS Shield."
                            </p>
                        </div>
                        <Button className="w-full h-12 bg-white text-slate-900 hover:bg-blue-50 rounded-2xl font-black uppercase tracking-widest text-[9px] shadow-lg">View Security Logs</Button>
                    </div>
                </Card>

                <Card className="rounded-[40px] border-slate-200 p-8 bg-white shadow-sm relative overflow-hidden">
                    <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/blueprint.png')]" />
                    <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-6 border-b pb-4">Localization Hub</h4>
                    <div className="space-y-6">
                        <div className="space-y-2">
                             <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest ml-1">System Language</label>
                             <Select defaultValue="en">
                                <SelectTrigger className="h-12 rounded-xl bg-slate-50 border-none font-bold text-slate-800"><SelectValue /></SelectTrigger>
                                <SelectContent className="rounded-xl">
                                    <SelectItem value="en">English (Statutory)</SelectItem>
                                    <SelectItem value="hi">Hindi (Official)</SelectItem>
                                </SelectContent>
                             </Select>
                        </div>
                    </div>
                </Card>

                <div className="p-6 bg-blue-50 rounded-[32px] border border-blue-100 flex gap-4">
                    <ShieldAlert className="text-blue-600 shrink-0" size={24} />
                    <p className="text-[9px] font-bold text-blue-800 leading-normal uppercase tracking-tighter">
                        Changes to <b>Access Visibility</b> must be counter-signed by the National System Administrator.
                    </p>
                </div>
            </div>

        </div>
      </Tabs>
    </div>
  );
}

/* UI SUB-COMPONENTS */

function SettingTab({ value, icon, label }: any) {
    return (
        <TabsTrigger value={value} className="flex-1 py-3.5 rounded-xl data-[state=active]:bg-white data-[state=active]:shadow-md data-[state=active]:text-indigo-600 text-[9px] font-black uppercase tracking-widest transition-all">
            <span className="mr-2.5">{icon}</span> {label}
        </TabsTrigger>
    );
}

function NotificationToggle({ label, desc, icon, active }: any) {
    return (
        <div className="flex items-center justify-between p-6 bg-slate-50 rounded-[32px] border border-transparent hover:border-purple-200 hover:bg-white hover:shadow-xl transition-all group">
            <div className="flex items-center gap-6">
                <div className="h-12 w-12 rounded-2xl bg-white border border-slate-100 flex items-center justify-center text-slate-400 group-hover:text-purple-600 transition-colors shadow-sm">
                    {icon}
                </div>
                <div className="space-y-1">
                    <p className="text-sm font-black text-slate-800 uppercase tracking-tight">{label}</p>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{desc}</p>
                </div>
            </div>
            <Switch className="data-[state=checked]:bg-purple-600 scale-110" defaultChecked={active} />
        </div>
    )
}

function PermissionRow({ module, nodes, level, success, warning }: any) {
    return (
        <TableRow className="border-none hover:bg-slate-50 transition-all cursor-default group">
            <TableCell className="px-10 py-6">
                <p className="text-xs font-black text-slate-900 uppercase tracking-tight group-hover:text-blue-600 transition-colors">{module}</p>
            </TableCell>
            <TableCell className="text-center font-bold text-slate-500 text-[10px] uppercase">{nodes}</TableCell>
            <TableCell className="text-right px-10">
                <Badge className={`rounded-lg px-3 py-1 text-[8px] font-black uppercase border-none shadow-none ${success ? 'bg-green-100 text-green-700' : warning ? 'bg-orange-100 text-orange-700' : 'bg-slate-100 text-slate-500'}`}>
                    {level}
                </Badge>
            </TableCell>
        </TableRow>
    )
}