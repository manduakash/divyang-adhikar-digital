// app/dashboard/prosecutor/page.tsx
import { Calendar as CalendarIcon, Scale, FileWarning } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

export default function ProsecutorDashboard() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 space-y-6">
                <Card>
                    <CardHeader className="border-b"><CardTitle>Upcoming Court Hearings</CardTitle></CardHeader>
                    <CardContent className="p-0">
                        {[
                            { case: "STATE vs. CITY MALL LTD", section: "Sec 44, 45, 89 (PwD Act)", date: "Tomorrow, 10:30 AM", room: "Court Room 4" },
                            { case: "IN RE: ADMISSION DENIAL - GIC", section: "Sec 16 (Inclusive Education)", date: "24 Oct, 02:00 PM", room: "Special Court A" },
                        ].map((hearing, i) => (
                            <div key={i} className="p-4 border-b last:border-0 flex justify-between items-center">
                                <div className="flex gap-4">
                                    <div className="h-12 w-12 rounded bg-slate-100 flex flex-col items-center justify-center">
                                        <span className="text-[10px] font-bold text-slate-400">OCT</span>
                                        <span className="text-xl font-bold leading-none">22</span>
                                    </div>
                                    <div>
                                        <p className="font-bold text-slate-800 uppercase text-sm">{hearing.case}</p>
                                        <p className="text-xs text-blue-600 font-mono">{hearing.section}</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="text-xs font-bold text-slate-500">{hearing.room}</p>
                                    <p className="text-xs text-slate-400">{hearing.date}</p>
                                </div>
                            </div>
                        ))}
                    </CardContent>
                </Card>
            </div>

            <div className="space-y-6">
                <Card className="bg-blue-600 text-white shadow-lg">
                    <CardContent className="pt-6">
                        <Scale className="w-12 h-12 mb-4 opacity-50" />
                        <div className="text-4xl font-black">22</div>
                        <p className="text-sm font-medium opacity-80 uppercase tracking-widest">Active Trials under PwD Act</p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader><CardTitle className="text-sm uppercase text-slate-500">Legal Compliance Alerts</CardTitle></CardHeader>
                    <CardContent className="space-y-4">
                        <div className="flex gap-3 items-start">
                            <FileWarning className="text-red-500 w-5 h-5 shrink-0" />
                            <p className="text-xs text-slate-600">3 Orders awaiting compliance reports from Education Dept beyond 15 days.</p>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}