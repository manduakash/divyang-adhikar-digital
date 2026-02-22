// components/dashboard/FactSheet.tsx
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function FactSheet({ title, entity }: { title: string, entity: string }) {
    return (
        <Card className="border-2 border-slate-200">
            <CardHeader className="bg-slate-50 border-b flex flex-row justify-between items-center">
                <div>
                    <CardTitle className="text-xl font-black uppercase text-slate-800">{title}</CardTitle>
                    <p className="text-xs text-slate-500 font-bold uppercase tracking-tighter mt-1">{entity}</p>
                </div>
                <Button variant="outline" size="sm">Export Formal PDF</Button>
            </CardHeader>
            <CardContent className="p-0">
                <div className="grid grid-cols-3 divide-x divide-y">
                    {[
                        { label: "Total PwDs", val: "14,502" },
                        { label: "Certificates Issued", val: "11,200" },
                        { label: "Pending Grievances", val: "04", alert: true },
                        { label: "Compliance Rank", val: "#02" },
                        { label: "Budget Utilized", val: "84%" },
                        { label: "Mock Drills Done", val: "Yes" },
                    ].map((item, i) => (
                        <div key={i} className={`p-6 ${item.alert ? 'bg-orange-50' : ''}`}>
                            <p className="text-[10px] font-bold text-slate-400 uppercase">{item.label}</p>
                            <p className={`text-2xl font-black ${item.alert ? 'text-orange-600' : 'text-slate-800'}`}>{item.val}</p>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
}