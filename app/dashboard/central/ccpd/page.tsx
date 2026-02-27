// app/dashboard/ccpd/page.tsx
"use client";
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
    Table, TableBody, TableCell, TableHead, TableHeader, TableRow
} from "@/components/ui/table";
import {
    Globe, ShieldCheck, BadgeCheck, Landmark,
    Map, Activity, CheckCircle2, AlertTriangle,
    ArrowUpRight, Zap, History, Scale,
    TrendingUp, Users, MessageSquare, Gavel,
    Timer, Briefcase, GraduationCap, School,
    Building2, Search, Filter, Printer,
    Sparkles
} from "lucide-react";
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip,
    ResponsiveContainer, BarChart, Bar, Legend, Cell,
    AreaChart, Area
} from 'recharts';
import { Badge } from "@/components/ui/badge";

export default function CCPDDashboard() {

    // ACTION INDICATORS - VIBRANT GRADIENTS WITH CARBON FIBRE
    const indicators = [
        { label: "States Onboarded", value: "36 / 36", icon: Globe, color: "from-blue-600 via-blue-700 to-indigo-900" },
        { label: "Total PwDs (India)", value: "26.8M", icon: Users, color: "from-indigo-600 via-indigo-700 to-purple-900" },
        { label: "Pending Grievances (National)", value: "1,240", icon: MessageSquare, color: "from-amber-600 via-amber-700 to-orange-800" },
        { label: "Overdue Grievances", value: "142", icon: Timer, color: "from-red-600 via-rose-700 to-red-900", alert: true },
        { label: "Directions Issued", value: "842", icon: Gavel, color: "from-purple-600 via-violet-700 to-purple-900" },
        { label: "Compliance Pending", value: "112", icon: Activity, color: "from-orange-500 via-orange-600 to-orange-800" },
        { label: "PwD Vacancies (National)", value: "45K+", icon: Briefcase, color: "from-blue-500 via-blue-600 to-blue-800" },
        { label: "Accessibility Defaults", value: "1,840", icon: AlertTriangle, color: "from-amber-500 via-amber-600 to-amber-700", alert: true },
        { label: "Education Non-Compliant", value: "842", icon: School, color: "from-emerald-500 via-emerald-600 to-emerald-800" },
        { label: "Court Cases Pending", value: "214", icon: Scale, color: "from-slate-500 via-state-900 to-black" },
        { label: "States with Critical Issues", value: "05", icon: ShieldAlert, color: "from-red-500 via-red-600 to-red-800", alert: true },
        { label: "Active National Directions", value: "24", icon: Zap, color: "from-indigo-600 via-blue-700 to-indigo-900" },
    ];

    return (
        <div className="space-y-12 animate-in fade-in duration-1000 pb-20 font-sans selection:bg-indigo-100">

            {/* APEX NATIONAL HEADER */}
            <div className="flex flex-col xl:flex-row justify-between items-start xl:items-end gap-6 relative">
                <div className="space-y-2">
                    <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border-2 border-indigo-100">
                        <Globe size={14} className="animate-spin-slow" /> National Statutory Hub: CCPD-INDIA
                    </div>
                    <h1 className="text-6xl font-black text-slate-900 tracking-tighter uppercase leading-none">CHIEF COMMISSIONER Dashboard</h1>
                    <p className="text-slate-500 font-medium text-xl italic underline underline-offset-8 decoration-indigo-100">Statewide PwD Act Implementation Monitoring & National Policy Coordination.</p>
                </div>
                <div className="flex gap-4">
                    <Button variant="outline" className="h-16 px-8 rounded-3xl border-2 border-slate-200 font-black uppercase tracking-widest text-[10px] bg-white shadow-xl hover:bg-slate-50 transition-all">
                        <History size={20} className="mr-2" /> National Audit Trail
                    </Button>
                    <Button className="h-16 px-10 rounded-3xl bg-slate-950 text-white font-black uppercase tracking-widest text-[10px] shadow-2xl hover:bg-black transition-all gap-2 group">
                        <Sparkles size={20} className="text-blue-400 fill-blue-400" /> AI National Brief
                    </Button>
                </div>
            </div>

            {/* ACTION INDICATOR TILES */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5">
                {indicators.map((item, i) => (
                    <button key={i} className={`group relative text-left p-6 rounded-[32px] overflow-hidden transition-all duration-500 h-44 flex flex-col justify-between shadow-lg hover:shadow-2xl hover:-translate-y-1 bg-gradient-to-br ${item.color} text-white border-t-2 border-white/20`}>
                        {/* CARBON FIBER TEXTURE OVERLAY */}
                        <div className="absolute inset-0 opacity-[0.06] pointer-events-none"
                            style={{ backgroundImage: `radial-gradient(black 2px, transparent 0)`, backgroundSize: '4px 4px' }} />

                        <div className="relative z-10 flex flex-col justify-between h-full">
                            <div className="h-10 w-10 rounded-xl bg-white/15 backdrop-blur-md border-2 border-white/20 flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform">
                                <item.icon size={20} className="drop-shadow-md text-white" />
                            </div>
                            <div>
                                <p className="text-2xl font-black tracking-tighter drop-shadow-sm leading-none">{item.value}</p>
                                <p className="text-[8px] font-black uppercase tracking-widest opacity-80 leading-tight mt-2 min-h-[20px]">{item.label}</p>
                            </div>
                        </div>
                        {item.alert && <div className="absolute top-6 right-6 h-2 w-2 rounded-full bg-white animate-ping shadow-[0_0_10px_white]" />}
                    </button>
                ))}
            </div>

            {/* ANALYTICS GRID */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <ChartCard title="PwD Distribution – State-wise" desc="State-level population and certification mapping.">
                    <ResponsiveContainer width="100%" height={350}>
                        <BarChart data={statePopData}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                            <XAxis dataKey="state" axisLine={false} tickLine={false} tick={{ fontSize: 10, fontWeight: 'black' }} />
                            <YAxis axisLine={false} tickLine={false} />
                            <Tooltip cursor={{ fill: '#f8fafc' }} />
                            <Bar dataKey="pwd" fill="#6366f1" radius={[10, 10, 0, 0]} barSize={40} />
                        </BarChart>
                    </ResponsiveContainer>
                </ChartCard>

                <ChartCard title="Grievance Disposal Trend – National" desc="Aggregation of statewide redressal efficiency.">
                    <ResponsiveContainer width="100%" height={350}>
                        <LineChart data={grievanceTrendData}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                            <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 10, fontWeight: 'bold' }} />
                            <Tooltip />
                            <Legend align="right" verticalAlign="top" iconType="circle" wrapperStyle={{ paddingBottom: '20px', fontSize: '10px', fontWeight: 'black' }} />
                            <Line type="monotone" name="Received" dataKey="received" stroke="#6366f1" strokeWidth={5} dot={{ r: 6 }} />
                            <Line type="monotone" name="Disposed" dataKey="disposed" stroke="#10b981" strokeWidth={5} dot={{ r: 6 }} />
                        </LineChart>
                    </ResponsiveContainer>
                </ChartCard>
            </div>

            {/* PERFORMANCE SNAPSHOTS - TOP / BOTTOM 5 */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <PerformanceSnapshot title="Overall Compliance" color="text-emerald-600" bg="bg-emerald-500" icon={<Trophy />} data={topCompliance} />
                <PerformanceSnapshot title="Grievance Disposal" color="text-blue-600" bg="bg-blue-500" icon={<CheckCircle2 />} data={topDisposal} />
                <PerformanceSnapshot title="Accessibility & Inclusion" color="text-red-600" bg="bg-red-500" icon={<AlertTriangle />} data={bottomAccess} isDanger />
            </div>

            {/* CONNECTIVITY PANEL - ACTIVE / INACTIVE */}
            <Card className="rounded-[48px] border-2 border-slate-100 shadow-sm overflow-hidden bg-white">
                <CardHeader className="p-0">
                    <div className="p-10 bg-gradient-to-r from-teal-500 via-teal-600 to-teal-700 text-white relative overflow-hidden">
                        {/* CARBON FIBER OVERLAY */}
                        <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] bg-fixed" />
                        <div className="flex flex-col md:flex-row justify-between items-center gap-10 relative z-10">
                            <div className="flex items-center gap-5">
                                <div className="h-12 w-12 rounded-2xl bg-white/10 backdrop-blur-md border-2 border-white/20 flex items-center justify-center shadow-xl">
                                    <Globe size={24} className="text-white" />
                                </div>
                                <div className="space-y-1">
                                    <CardTitle className="text-xl font-black uppercase tracking-tight">National Reporting connectivity</CardTitle>
                                    <p className="text-[10px] font-bold text-indigo-300 uppercase tracking-widest leading-none">Real-time sync status across all state regulatory nodes</p>
                                </div>
                            </div>
                            <div className="flex gap-4 w-full md:w-auto">
                                <div className="relative group flex-1 md:w-80 flex">
                                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-white/50" />
                                    <input className="w-full pl-11 pr-6 py-4 border-2 border-white/20 bg-white/5 rounded-2xl text-[10px] font-black uppercase outline-none text-white focus:bg-white/10 transition-all shadow-inner" placeholder="Search State / UT Node..." />
                                </div>
                                <Button className="h-16 px-8 rounded-2xl bg-blue-600 text-white font-black uppercase tracking-widest text-[9px] shadow-xl">Audit Nodes</Button>
                            </div>
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="p-0">
                    <Table>
                        <TableHeader className="bg-slate-50">
                            <TableRow className="border-b-2 border-slate-100 font-sans">
                                <TableHead className="px-10 py-6 text-[9px] font-black uppercase tracking-[0.2em] text-slate-400">State / Union Territory</TableHead>
                                <TableHead className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 text-center">Last Sync Date</TableHead>
                                <TableHead className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 text-center">Grievances Updated</TableHead>
                                <TableHead className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 text-center">Directions Responded</TableHead>
                                <TableHead className="text-right px-10 text-[9px] font-black uppercase tracking-[0.2em] text-slate-400">Operational status</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody className="divide-y divide-slate-100 font-sans">
                            <StateNodeRow name="Uttar Pradesh" last="14 Oct 24" grievances="YES" directions="YES" status="ACTIVE" success />
                            <StateNodeRow name="West Bengal" last="14 Oct 24" grievances="YES" directions="YES" status="ACTIVE" success />
                            <StateNodeRow name="Maharashtra" last="12 Oct 24" grievances="YES" directions="NO" status="INACTIVE" alert />
                            <StateNodeRow name="Karnataka" last="10 Oct 24" grievances="NO" directions="NO" status="INACTIVE" alert />
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>

        </div>
    );
}

/* UI SUB-COMPONENTS */

function ChartCard({ title, desc, children }: any) {
    return (
        <Card className="rounded-[44px] border-2 border-slate-100 bg-white shadow-sm overflow-hidden group hover:shadow-xl transition-all duration-500">
            <CardHeader className="p-10 border-b-2 border-slate-50 bg-slate-50/50 relative overflow-hidden">
                {/* CARBON FIBER ON HEADER */}
                <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
                <div className="space-y-1 relative z-10">
                    <CardTitle className="text-[11px] font-black uppercase tracking-[0.3em] text-indigo-600">{title}</CardTitle>
                    <p className="text-lg font-black text-slate-900 tracking-tight leading-none mt-2">{desc}</p>
                </div>
            </CardHeader>
            <CardContent className="p-10 relative overflow-hidden">
                <div className="absolute inset-0 opacity-[0.01] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/topography.png')]" />
                <div className="relative z-10">{children}</div>
            </CardContent>
        </Card>
    );
}

function PerformanceSnapshot({ title, color, bg, icon, data, isDanger }: any) {
    return (
        <Card className="rounded-[44px] border-2 border-slate-100 bg-white shadow-sm overflow-hidden flex flex-col h-full group hover:shadow-2xl transition-all duration-500">
            <div className={`p-8 border-b-2 border-slate-50 flex items-center justify-between ${bg} relative overflow-hidden`}>
                <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] bg-fixed" />
                <div className="flex items-center gap-4 relative z-10">
                    <div className={`text-[10px] font-black uppercase tracking-[0.2em] text-slate-100 group-hover:scale-110 transition-transform`}>{icon}</div>
                    <h3 className={`text-[10px] font-black uppercase tracking-[0.2em] text-slate-100`}>{title}</h3>
                </div>
                <ArrowUpRight size={16} className="text-slate-200" />
            </div>
            <div className="p-8 space-y-6 flex-1 relative overflow-hidden">
                <div className="absolute inset-0 opacity-[0.01] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
                {data.map((item: any, i: number) => (
                    <div key={i} className="flex justify-between items-start group/row cursor-pointer border-b-2 border-slate-50 pb-5 last:border-0 hover:bg-slate-50/50 transition-all rounded-xl p-2 relative z-10">
                        <div className="space-y-1">
                            <p className="text-sm font-black text-slate-900 uppercase tracking-tight leading-none">{item.name}</p>
                            <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">{item.metric}</p>
                        </div>
                        <span className={`text-sm font-black font-mono ${isDanger ? 'text-red-600' : 'text-emerald-600'}`}>{item.score}</span>
                    </div>
                ))}
            </div>
        </Card>
    )
}

function StateNodeRow({ name, last, grievances, directions, status, success, alert }: any) {
    const statusColor = success ? 'bg-green-600 text-white shadow-green-100 shadow-lg' : alert ? 'bg-red-600 text-white animate-pulse shadow-red-100 shadow-lg' : 'bg-orange-500 text-white';
    return (
        <TableRow className="border-none hover:bg-slate-50 transition-all group cursor-pointer">
            <TableCell className="px-10 py-8">
                <div className="flex items-center gap-3">
                    <div className={`h-1.5 w-1.5 rounded-full shrink-0 ${success ? 'bg-green-500' : 'bg-red-500'}`} />
                    <span className="text-xs font-black text-slate-900 uppercase tracking-tight leading-none">{name}</span>
                </div>
            </TableCell>
            <TableCell className="text-center font-mono font-bold text-slate-400 text-[11px]">{last}</TableCell>
            <TableCell className="text-center">
                <Badge className={`border-2 font-black text-[8px] uppercase px-3 py-1 ${grievances === 'YES' ? 'bg-green-50 text-green-700 border-green-200' : 'bg-red-50 text-red-700 border-red-200'}`}>{grievances}</Badge>
            </TableCell>
            <TableCell className="text-center">
                <Badge className={`border-2 font-black text-[8px] uppercase px-3 py-1 ${directions === 'YES' ? 'bg-green-50 text-green-700 border-green-200' : 'bg-red-50 text-red-700 border-red-200'}`}>{directions}</Badge>
            </TableCell>
            <TableCell className="text-right px-10">
                <Badge className={`rounded-full px-5 py-2 text-[8px] font-black uppercase border-none tracking-widest ${statusColor}`}>
                    {status}
                </Badge>
            </TableCell>
        </TableRow>
    )
}

function ShieldAlert(props: any) { return <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><line x1="12" x2="12" y1="8" y2="12" /><line x1="12" x2="12.01" y1="16" y2="16" /></svg> }
function Trophy(props: any) { return <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" /><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" /><path d="M4 22h16" /><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" /><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" /><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" /></svg> }

/* MOCK DATA */
const statePopData = [{ state: 'UP', pwd: 1240000 }, { state: 'WB', pwd: 980000 }, { state: 'MH', pwd: 840000 }, { state: 'KA', pwd: 720000 }, { state: 'TN', pwd: 610000 }];
const grievanceTrendData = [{ month: 'Jul', received: 12000, disposed: 9000 }, { month: 'Aug', received: 15000, disposed: 11000 }, { month: 'Sep', received: 18000, disposed: 14000 }, { month: 'Oct', received: 24000, disposed: 18000 }];
const topCompliance = [{ name: 'Tamil Nadu', metric: 'State Health Index', score: '98.2%' }, { name: 'Gujarat', metric: 'Inclusion Rate', score: '96.5%' }, { name: 'Odisha', metric: 'Disaster Ready', score: '94.0%' }];
const topDisposal = [{ name: 'Kerala', metric: 'Grievance SLA', score: '99.1%' }, { name: 'Punjab', metric: 'Response Time', score: '97.2%' }, { name: 'Assam', metric: 'Case Registry', score: '95.4%' }];
const bottomAccess = [{ name: 'Outer Hub Node', metric: 'Access Deficit', score: '42.8%' }, { name: 'Sector Rural B', metric: 'Digital Barrier', score: '48.5%' }, { name: 'West Sector', metric: 'SLA Breach', score: '51.2%' }];