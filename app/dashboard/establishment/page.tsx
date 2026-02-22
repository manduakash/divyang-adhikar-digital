// app/dashboard/establishment/page.tsx
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, Upload, FileCheck, Accessibility } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function EstablishmentDashboard() {
  const complianceAreas = [
    { label: "Physical Accessibility", score: 85, color: "bg-green-600" },
    { label: "Digital Accessibility", score: 40, color: "bg-red-600" },
    { label: "PwD Employment (4%)", score: 100, color: "bg-blue-600" },
    { label: "Equal Opportunity Policy", score: 100, color: "bg-blue-600" },
    { label: "Grievance Response", score: 72, color: "bg-orange-600" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">National Bank - Regional HQ</h1>
          <p className="text-slate-500 italic text-sm underline cursor-pointer">Establishment ID: EST-UP-LKO-4492</p>
        </div>
        <div className="flex gap-3">
          <Button variant="default" className="gap-2"><Upload className="w-4 h-4" /> Submit Returns</Button>
          <Button variant="outline" className="gap-2"><Activity className="w-4 h-4" /> Accessibility Audit</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="md:col-span-1 bg-slate-900 text-white">
          <CardHeader>
            <CardTitle className="text-sm font-medium uppercase text-slate-400">Compliance Score</CardTitle>
          </CardHeader>
          <CardContent className="text-center pb-8">
            <div className="text-6xl font-black text-blue-400">79%</div>
            <p className="mt-2 text-xs text-slate-400">Ranked #14 in District</p>
          </CardContent>
        </Card>

        <Card className="md:col-span-3">
          <CardHeader>
            <CardTitle className="text-sm font-bold uppercase tracking-widest text-slate-500">Statutory Compliance Breakdown</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {complianceAreas.map((area, i) => (
              <div key={i} className="space-y-2">
                <div className="flex justify-between text-sm font-medium">
                  <span>{area.label}</span>
                  <span>{area.score}%</span>
                </div>
                <Progress value={area.score} className="h-2" indicatorClassName={area.color} />
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* 8 Permanent RHS Action Buttons as per docs */}
      <div className="grid grid-cols-4 gap-4 mt-6">
        <Button variant="secondary" className="h-20 flex flex-col gap-1 text-xs">
          <FileCheck className="w-5 h-5" /> Acknowledge Grievance
        </Button>
        {/* ... Repeated for 8 buttons defined in docs ... */}
      </div>
    </div>
  );
}