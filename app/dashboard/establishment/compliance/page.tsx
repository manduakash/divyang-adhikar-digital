// app/dashboard/establishment/compliance/page.tsx
"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, AlertTriangle, Upload, Globe, Building2, Users } from "lucide-react";

export default function ComplianceModule() {
    return (
        <div className="space-y-8 animate-in fade-in duration-700 pb-20">

            {/* AUTO-CALCULATED SCORECARD */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <Card className="md:col-span-3 bg-slate-900 text-white rounded-[40px] p-8 border-none shadow-2xl flex items-center justify-between overflow-hidden relative">
                    <div className="relative z-10 space-y-4">
                        <div>
                            <h2 className="text-sm font-black text-blue-400 uppercase tracking-[0.3em]">Institutional Compliance Engine</h2>
                            <p className="text-4xl font-black tracking-tighter mt-1">Statutory Scorecard</p>
                        </div>
                        <div className="flex gap-8">
                            <ScoreStat label="Physical" val="85%" />
                            <ScoreStat label="Digital" val="40%" color="text-red-400" />
                            <ScoreStat label="Employment" val="100%" />
                            <ScoreStat label="EO Policy" val="95%" />
                        </div>
                    </div>
                    <div className="text-center relative z-10 bg-white/10 p-8 rounded-[32px] backdrop-blur-md border border-white/10">
                        <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-1">Overall PwD Score</p>
                        <div className="text-6xl font-black text-blue-400">79.2<span className="text-2xl">%</span></div>
                    </div>
                </Card>

                <Card className="rounded-[40px] border-slate-200 p-8 flex flex-col justify-center text-center space-y-4 shadow-sm">
                    <AlertTriangle className="mx-auto text-orange-500" size={32} />
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-widest leading-relaxed">
                        Bottom 5 Ranking Risk: Digital Accessibility non-compliance detected.
                    </p>
                </Card>
            </div>

            <Tabs defaultValue="physical" className="space-y-6">
                <TabsList className="bg-slate-100 p-1.5 rounded-2xl h-auto border border-slate-200">
                    <TabTrigger value="physical" label="Physical" />
                    <TabTrigger value="digital" label="Digital" />
                    <TabTrigger value="employment" label="Employment" />
                    <TabTrigger value="policy" label="EO Policy" />
                </TabsList>

                {/* PHYSICAL ACCESSIBILITY */}
                <TabsContent value="physical">
                    <Card className="rounded-[40px] border-slate-200 shadow-sm overflow-hidden bg-white">
                        <CardHeader className="p-8 border-b border-slate-50 bg-slate-50/30 flex flex-row justify-between items-center">
                            <CardTitle className="text-sm font-black uppercase tracking-widest text-slate-400 flex items-center gap-3">
                                <Building2 size={18} className="text-blue-600" /> Physical Infrastructure Compliance
                            </CardTitle>
                            <Badge className="bg-orange-100 text-orange-700 font-black">Partially Compliant</Badge>
                        </CardHeader>
                        <CardContent className="p-10 grid grid-cols-1 md:grid-cols-2 gap-10">
                            <div className="space-y-6">
                                <ComplianceField label="Accessibility audit conducted?" type="select" options={['Yes', 'No']} />
                                <ComplianceField label="Date of last audit" type="date" />
                                <ComplianceField label="Deficiencies identified?" type="select" options={['Yes', 'No']} />
                                <ComplianceField label="Compliance Date" type="date" />
                            </div>
                            <div className="space-y-6">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest ml-1">Corrective Measures Taken</label>
                                    <textarea className="w-full h-32 bg-slate-50 border-none rounded-3xl p-5 text-sm font-bold focus:ring-2 focus:ring-blue-500 outline-none" placeholder="Details of ramps, lifts, toilets, signage..." />
                                </div>
                                <div className="p-8 border-2 border-dashed border-slate-100 rounded-[32px] flex flex-col items-center justify-center group hover:bg-slate-50 transition-all cursor-pointer">
                                    <Upload className="text-slate-300 group-hover:text-blue-600 mb-2" size={32} />
                                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Upload Evidence (Photos/Videos)</span>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>

                {/* EMPLOYMENT OF PWDs */}
                <TabsContent value="employment">
                    <Card className="rounded-[40px] border-slate-200 shadow-sm overflow-hidden bg-white">
                        <CardHeader className="p-8 border-b border-slate-50 bg-slate-50/30 flex flex-row justify-between items-center">
                            <CardTitle className="text-sm font-black uppercase tracking-widest text-slate-400 flex items-center gap-3">
                                <Users size={18} className="text-purple-600" /> Employment Composition
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="p-10 grid grid-cols-1 md:grid-cols-3 gap-8">
                            <ComplianceField label="Total sanctioned workforce" placeholder="290" />
                            <ComplianceField label="PwD employees engaged" placeholder="12" />
                            <div className="bg-blue-50 p-6 rounded-[32px] border border-blue-100 flex flex-col justify-center">
                                <p className="text-[9px] font-black uppercase text-blue-400 tracking-widest">Auto-Calculated Percentage</p>
                                <p className="text-3xl font-black text-blue-700">4.13%</p>
                                <Badge className="bg-green-600 text-white w-fit mt-2 text-[8px]">Mandate Met</Badge>
                            </div>
                            <ComplianceField label="Vacant PwD Posts" placeholder="02" />
                            <ComplianceField label="Recruitment in period?" type="select" options={['Yes', 'No']} />
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    );
}

/* UI SUB-COMPONENTS */

function TabTrigger({ value, label }: any) {
    return (
        <TabsTrigger value={value} className="flex-1 py-3 rounded-xl data-[state=active]:bg-white data-[state=active]:shadow-sm text-[10px] font-black uppercase tracking-widest">
            {label}
        </TabsTrigger>
    );
}

function ScoreStat({ label, val, color }: any) {
    return (
        <div>
            <p className="text-[9px] font-black uppercase text-slate-500 tracking-widest">{label}</p>
            <p className={`text-xl font-black ${color || 'text-white'}`}>{val}</p>
        </div>
    )
}

function ComplianceField({ label, type = "text", placeholder, options }: any) {
    return (
        <div className="space-y-2">
            <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest ml-1">{label}</label>
            {type === 'select' ? (
                <div className="flex gap-2">
                    {options.map((opt: string) => (
                        <button key={opt} className="flex-1 h-12 bg-slate-50 rounded-2xl text-xs font-bold hover:bg-slate-900 hover:text-white transition-all">{opt}</button>
                    ))}
                </div>
            ) : (
                <Input type={type} placeholder={placeholder} className="h-12 bg-slate-50 border-none rounded-2xl px-5 font-bold focus-visible:ring-blue-600" />
            )}
        </div>
    )
}