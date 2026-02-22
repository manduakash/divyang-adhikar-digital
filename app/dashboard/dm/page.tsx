// app/dashboard/dm/page.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Users, Building2, Gavel, AlertCircle, CheckCircle2,
  MapPin, ClipboardCheck, GraduationCap, ArrowUpRight
} from "lucide-react";

export default function DMDashboard() {
  const stats = [
    { label: "Total PwDs", value: "14.2k", icon: Users, trend: "+2.4%" },
    { label: "Establishments", value: "482", icon: Building2, trend: "8 new" },
    { label: "Grievances", value: "1,240", icon: AlertCircle, trend: "12 high priority" },
    { label: "Pending", value: "84", icon: ClipboardCheck, color: "text-red-600" },
    { label: "Closed", value: "1,156", icon: CheckCircle2, color: "text-green-600" },
  ];

  return (
    <div className="animate-in fade-in duration-700">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-black text-slate-900 tracking-tight">District Overview</h1>
          <p className="text-slate-500 mt-1">Real-time enforcement of PwD Act 2016 compliance.</p>
        </div>
        <div className="flex gap-3">
          <Badge className="bg-blue-50 text-blue-700 hover:bg-blue-100 border-blue-200 px-4 py-1.5 text-xs font-bold uppercase tracking-widest">
            Fact Sheet: 2024 Q3
          </Badge>
        </div>
      </div>

      {/* 1. Action Stat Grid */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-8">
        {stats.map((stat, i) => (
          <Card key={i} className="border-none shadow-sm hover:shadow-xl transition-all group overflow-hidden bg-white">
            <CardContent className="p-6 relative">
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:scale-110 transition-transform">
                <stat.icon size={80} />
              </div>
              <div className={`p-3 rounded-2xl inline-block bg-slate-50 mb-4 group-hover:bg-white transition-colors border border-slate-100 shadow-sm`}>
                <stat.icon className={`h-6 w-6 ${stat.color || 'text-purple-600'}`} />
              </div>
              <p className="text-3xl font-black text-slate-900">{stat.value}</p>
              <p className="text-xs font-bold uppercase text-slate-400 tracking-widest mt-1">{stat.label}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* 2. Analytics & Snapshots */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Grievance Trend Chart (Mocked) */}
        <Card className="lg:col-span-2 border-slate-200 shadow-sm rounded-3xl overflow-hidden bg-white">
          <CardHeader className="flex flex-row items-center justify-between border-b border-slate-50 p-6">
            <CardTitle className="text-lg font-bold flex items-center gap-2">
              <Gavel className="h-5 w-5 text-blue-600" />
              Grievance Disposal Efficiency
            </CardTitle>
            <select className="text-xs font-bold bg-slate-50 border-none rounded-lg p-2 focus:ring-0">
              <option>Last 6 Months</option>
            </select>
          </CardHeader>
          <CardContent className="p-8">
            <div className="h-[350px] w-full flex items-end justify-between gap-2">
              {/* Modern minimalist bar chart mockup */}
              {[40, 70, 45, 90, 65, 80, 50, 95, 75, 60, 85, 40].map((h, i) => (
                <div key={i} className="w-full group relative">
                  <div
                    style={{ height: `${h}%` }}
                    className="bg-slate-100 rounded-t-lg group-hover:bg-gradient-to-t group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-500"
                  />
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-6 pt-6 border-t border-slate-50">
              <div className="flex gap-8">
                <div>
                  <p className="text-2xl font-black text-slate-900">89.4%</p>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Avg Disposal Rate</p>
                </div>
                <div>
                  <p className="text-2xl font-black text-slate-900">14 Days</p>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">SLA Time</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Top 5 / Bottom 5 Snapshot - From Documentation */}
        <Card className="border-slate-200 shadow-sm rounded-3xl bg-white">
          <CardHeader className="p-6">
            <CardTitle className="text-lg font-bold">Stakeholder Snapshots</CardTitle>
          </CardHeader>
          <CardContent className="p-6 pt-0 space-y-8">
            <div className="space-y-4">
              <h4 className="text-[10px] font-black text-green-600 uppercase tracking-[0.2em]">Top 5 Compliant (Establishments)</h4>
              {["District Hospital", "Central Bus Terminal", "City University"].map((item, i) => (
                <div key={i} className="flex items-center justify-between p-4 bg-green-50/50 rounded-2xl border border-green-100">
                  <span className="text-sm font-bold text-slate-700">{item}</span>
                  <div className="flex items-center text-green-600 font-bold text-xs gap-1">
                    98% <ArrowUpRight size={14} />
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              <h4 className="text-[10px] font-black text-red-600 uppercase tracking-[0.2em]">Bottom 5 Laggards</h4>
              {["Pvt. Industrial Park", "Municipal Annex", "Secondary School B"].map((item, i) => (
                <div key={i} className="flex items-center justify-between p-4 bg-red-50/50 rounded-2xl border border-red-100">
                  <span className="text-sm font-bold text-slate-700">{item}</span>
                  <span className="bg-red-100 text-red-700 text-[10px] font-black px-2 py-1 rounded-md uppercase">Critical</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* 3. Recent Statutory Directions */}
      <Card className="mt-8 border-slate-200 shadow-sm rounded-3xl overflow-hidden bg-white">
        <CardHeader className="p-6 border-b border-slate-50 flex flex-row justify-between items-center">
          <CardTitle className="text-lg font-bold tracking-tight">Recent Statutory Directions</CardTitle>
          <button className="text-blue-600 text-xs font-bold hover:underline">View All Records</button>
        </CardHeader>
        <CardContent className="p-0">
          <table className="w-full">
            <thead className="bg-slate-50/50">
              <tr className="text-[10px] font-black uppercase text-slate-400 tracking-widest">
                <th className="px-6 py-4 text-left">Ref Number</th>
                <th className="px-6 py-4 text-left">Establishment</th>
                <th className="px-6 py-4 text-left">Deadline</th>
                <th className="px-6 py-4 text-left">Status</th>
                <th className="px-6 py-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {[
                { ref: "DIR-UP-2024-001", target: "Regional Transport Office", date: "Oct 12, 2024", status: "In Progress" },
                { ref: "DIR-UP-2024-042", target: "Nagar Nigam Head Office", date: "Sep 28, 2024", status: "Overdue" },
                { ref: "DIR-UP-2024-098", target: "District Primary School", date: "Oct 05, 2024", status: "Complied" },
              ].map((row, i) => (
                <tr key={i} className="hover:bg-slate-50/80 transition-colors">
                  <td className="px-6 py-4 font-mono text-xs font-bold text-blue-600">{row.ref}</td>
                  <td className="px-6 py-4 text-sm font-bold text-slate-700">{row.target}</td>
                  <td className="px-6 py-4 text-sm text-slate-500 font-medium">{row.date}</td>
                  <td className="px-6 py-4">
                    <span className={`text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-tighter ${row.status === 'Overdue' ? 'bg-red-100 text-red-600' : 'bg-blue-100 text-blue-600'
                      }`}>
                      {row.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="p-2 hover:bg-slate-200 rounded-lg transition-colors">
                      <ArrowUpRight size={16} className="text-slate-400" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>
    </div>
  );
}