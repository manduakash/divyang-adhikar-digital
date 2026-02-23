// app/dashboard/establishment/grievances/page.tsx
"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    Table, TableBody, TableCell, TableHead, TableHeader, TableRow
} from "@/components/ui/table";
import { MessageSquare, Clock, AlertCircle, RefreshCw, ArrowUpRight } from "lucide-react";

export default function GrievanceResponsiveness() {
    return (
        <div className="space-y-8 animate-in fade-in duration-700">

            {/* 6.1E SYSTEM GENERATED METRICS */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <MetricCard label="Avg Resolution Days" value="14.2" icon={<Clock className="text-blue-600" />} trend="Within SLA" />
                <MetricCard label="Escalation Count" value="05" icon={<AlertCircle className="text-red-600" />} color="text-red-600" />
                <MetricCard label="Repeat Violations" value="01" icon={<RefreshCw className="text-orange-600" />} alert />
                <div className="bg-slate-900 rounded-[32px] p-8 text-white shadow-xl flex flex-col justify-center">
                    <p className="text-[9px] font-black uppercase text-slate-400 tracking-widest">Responsiveness Score</p>
                    <p className="text-4xl font-black text-blue-400">72%</p>
                </div>
            </div>

            <Card className="rounded-[40px] border-slate-200 shadow-sm overflow-hidden bg-white">
                <CardHeader className="p-8 border-b border-slate-50 flex flex-row justify-between items-center">
                    <CardTitle className="text-sm font-black uppercase tracking-widest text-slate-400">Grievance Registry</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                    <Table>
                        <TableHeader className="bg-slate-50/50">
                            <TableRow className="border-slate-100">
                                <TableHead className="px-8 py-5 text-[9px] font-black uppercase tracking-widest text-slate-400">ID</TableHead>
                                <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400">Category</TableHead>
                                <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400">Received</TableHead>
                                <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400">Disposed</TableHead>
                                <TableHead className="text-[9px] font-black uppercase tracking-widest text-slate-400">Status</TableHead>
                                <TableHead className="text-right px-8"></TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {[
                                { id: 'GRV-9921', cat: 'Employment', rec: '12 Oct', dis: '14 Oct', status: 'Disposed' },
                                { id: 'GRV-9942', cat: 'Accessibility', rec: '15 Oct', dis: '--', status: 'Escalated' },
                                { id: 'GRV-9950', cat: 'Education', rec: '16 Oct', dis: '--', status: 'Pending' },
                            ].map((row) => (
                                <TableRow key={row.id} className="border-slate-50 hover:bg-slate-50/50 group">
                                    <TableCell className="px-8 py-5 font-mono text-[10px] font-black text-blue-600">{row.id}</TableCell>
                                    <TableCell className="text-xs font-bold text-slate-700">{row.cat}</TableCell>
                                    <TableCell className="text-xs font-medium text-slate-400">{row.rec}</TableCell>
                                    <TableCell className="text-xs font-medium text-slate-400">{row.dis}</TableCell>
                                    <TableCell>
                                        <span className={`text-[9px] font-black uppercase px-2 py-1 rounded-md ${row.status === 'Disposed' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                                            }`}>{row.status}</span>
                                    </TableCell>
                                    <TableCell className="text-right px-8">
                                        <button className="p-2 rounded-lg hover:bg-white hover:shadow-sm text-slate-300 group-hover:text-blue-600 transition-all"><ArrowUpRight size={16} /></button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    );
}

function MetricCard({ label, value, icon, trend, color, alert }: any) {
    return (
        <Card className={`rounded-[32px] border-slate-100 shadow-sm ${alert ? 'ring-2 ring-red-100' : ''}`}>
            <CardContent className="p-8">
                <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-slate-50 rounded-2xl">{icon}</div>
                    {trend && <span className="text-[10px] font-black text-green-600 uppercase">{trend}</span>}
                </div>
                <p className={`text-3xl font-black ${color || 'text-slate-900'}`}>{value}</p>
                <p className="text-[9px] font-black uppercase text-slate-400 tracking-widest mt-1">{label}</p>
            </CardContent>
        </Card>
    )
}