// app/dashboard/scpd/reports/drafting/page.tsx
"use client";
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  FileText, PenTool, BookOpen, Sparkles, 
  CheckCircle2, Clock, ShieldCheck, ArrowLeft, 
  History, Download, Save, Layers, 
  FilePlus, ClipboardList, Info, AlertCircle,
  FileCheck, Globe, Printer, ChevronRight,
  Plus, Paperclip
} from "lucide-react";
import { 
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue 
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function ReportDraftingStudio() {
  const [reportStatus, setReportStatus] = useState('DRAFT');
  const [reportType, setReportType] = useState('ANNUAL');

  return (
    <div className="max-w-7xl mx-auto pb-20 animate-in fade-in duration-700 font-sans">
      
      {/* 1. APEX STUDIO HEADER */}
      <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-6 mb-10 bg-white p-10 rounded-[40px] border border-slate-200 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 p-10 opacity-[0.03] pointer-events-none">
            <BookOpen size={200} className="text-indigo-600" />
        </div>
        <div className="space-y-2 relative z-10">
          <div className="flex items-center gap-2 text-indigo-600 font-black uppercase text-[10px] tracking-[0.2em]">
            <ArrowLeft size={14} /> Commission Hub / A3.7 Report Drafting
          </div>
          <h1 className="text-4xl font-black text-slate-900 tracking-tighter uppercase leading-none">Statutory Report Studio</h1>
          <p className="text-slate-500 font-medium italic">Authoring official Annual and Special Issue Reports for Cabinet Submission.</p>
        </div>
        <div className="flex gap-4 relative z-10">
            <Button variant="outline" className="h-16 px-8 rounded-3xl border-slate-200 font-black uppercase tracking-widest text-[10px] bg-white hover:bg-slate-50 shadow-xl">
                <History size={18} className="mr-2" /> Revision History
            </Button>
            <Button className="h-16 px-10 rounded-3xl bg-indigo-900 text-white font-black uppercase tracking-widest text-[10px] shadow-2xl hover:bg-black transition-all gap-2 group">
                <FileCheck size={18} /> Finalize & Compile <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-start">
        
        {/* 2. DRAFTING CANVAS (8 COLS) */}
        <div className="xl:col-span-8 space-y-8">
            
            {/* CORE METADATA (Section A3.7 Data Captured) */}
            <Card className="rounded-[40px] border-slate-200 shadow-sm bg-white overflow-hidden">
                <CardHeader className="p-8 border-b border-slate-50 bg-slate-50/30">
                    <CardTitle className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Section A3.7: Report Primary Metadata</CardTitle>
                </CardHeader>
                <CardContent className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                        <label className="text-[10px] font-black uppercase text-slate-400 ml-1 tracking-widest">1. Report Type</label>
                        <Select value={reportType} onValueChange={setReportType}>
                            <SelectTrigger className="h-14 rounded-2xl bg-slate-50 border-2 font-bold text-slate-800">
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent className="rounded-2xl border-slate-200">
                                <SelectItem value="ANNUAL" className="font-bold py-3 uppercase text-[10px]">Statutory Annual Report</SelectItem>
                                <SelectItem value="SPECIAL" className="font-bold py-3 uppercase text-[10px]">Issue-based Special Report</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="space-y-3">
                        <label className="text-[10px] font-black uppercase text-slate-400 ml-1 tracking-widest">2. Reporting Period / Subject</label>
                        <Input placeholder="e.g. FY 2024-25 or 'Accessibility in Rail'" className="h-14 bg-slate-50 border-2 rounded-2xl font-bold px-6" />
                    </div>
                </CardContent>
            </Card>

            {/* SECTION-WISE DRAFTING HUB */}
            <Tabs defaultValue="draft" className="space-y-6">
                <TabsList className="bg-slate-100 p-1.5 rounded-2xl h-auto border border-slate-200 gap-1">
                    <TabsTrigger value="draft" className="flex-1 py-3 rounded-xl font-black text-[10px] uppercase tracking-widest data-[state=active]:bg-white shadow-sm">3. Section-wise Draft</TabsTrigger>
                    <TabsTrigger value="findings" className="flex-1 py-3 rounded-xl font-black text-[10px] uppercase tracking-widest data-[state=active]:bg-white shadow-sm">4. Key Findings</TabsTrigger>
                    <TabsTrigger value="recom" className="flex-1 py-3 rounded-xl font-black text-[10px] uppercase tracking-widest data-[state=active]:bg-white shadow-sm">5. Recommendations</TabsTrigger>
                </TabsList>

                <TabsContent value="draft" className="space-y-6 animate-in fade-in duration-500">
                    <Card className="rounded-[40px] border-slate-200 shadow-xl bg-white p-10 space-y-8">
                        <div className="flex justify-between items-center border-b border-slate-50 pb-6">
                            <div className="space-y-1">
                                <p className="text-[10px] font-black text-indigo-600 uppercase tracking-[0.2em]">Editing: Section 2</p>
                                <h3 className="text-2xl font-black text-slate-900 tracking-tight uppercase">Implementation of PwD Act</h3>
                            </div>
                            <Button variant="ghost" className="text-purple-600 font-black uppercase text-[10px] tracking-widest gap-2 bg-purple-50 px-4 rounded-full">
                                <Sparkles size={14} /> AI Narrative builder
                            </Button>
                        </div>
                        <Textarea 
                            className="min-h-[400px] bg-slate-50/50 border-2 rounded-[32px] p-8 text-sm font-medium leading-relaxed resize-none focus:ring-2 focus:ring-indigo-600 shadow-inner" 
                            placeholder="Begin drafting the statutory implementation summary for the current period..."
                        />
                        <div className="flex justify-between items-center pt-4 border-t border-slate-50">
                            <span className="text-[10px] font-bold text-slate-400 uppercase">Auto-saved at 10:42 AM • 1,240 Words</span>
                            <div className="flex gap-3">
                                <Button variant="ghost" className="rounded-xl font-black text-[10px] uppercase text-slate-400 hover:text-slate-900">Prev Section</Button>
                                <Button className="rounded-xl bg-slate-900 text-white font-black text-[10px] uppercase px-6">Save & Next</Button>
                            </div>
                        </div>
                    </Card>
                </TabsContent>

                <TabsContent value="findings" className="animate-in slide-in-from-right-4 duration-500">
                    <Card className="rounded-[40px] border-slate-200 bg-white p-10">
                        <CardTitle className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-8 flex items-center gap-3">
                            <ClipboardList size={16} className="text-orange-500" /> A3.7.4 Executive Findings Log
                        </CardTitle>
                        <div className="space-y-6">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="relative">
                                    <div className="absolute -left-4 top-4 h-8 w-8 bg-slate-900 text-white rounded-xl flex items-center justify-center font-black text-xs">0{i}</div>
                                    <Input placeholder="Enter key statutory finding..." className="h-16 pl-10 bg-slate-50 border-2 rounded-2xl font-bold text-slate-800" />
                                </div>
                            ))}
                            <Button variant="outline" className="w-full h-14 rounded-2xl border-dashed border-2 border-slate-200 text-slate-400 font-bold uppercase text-[10px] tracking-widest">
                                + Add Major Finding Row
                            </Button>
                        </div>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>

        {/* 3. SIDEBAR: CONTROL & ANNEXURES (4 COLS) */}
        <div className="xl:col-span-4 space-y-8 sticky top-28 h-fit">
            
            {/* COMPILATION & STATUS (Draft / Final) */}
            <Card className="rounded-[40px] border-2 bg-slate-900 text-white p-10 shadow-2xl relative overflow-hidden group">
                <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/circuit-board.png')]" />
                <div className="relative z-10 space-y-8">
                    <div className="flex items-center justify-between">
                        <h3 className="text-sm font-black uppercase tracking-widest text-blue-400">Finalization</h3>
                        <Badge className={`${reportStatus === 'DRAFT' ? 'bg-orange-600' : 'bg-green-600'} text-white border-2 font-black text-[8px] uppercase px-3`}>{reportStatus}</Badge>
                    </div>
                    
                    <div className="space-y-4">
                        <label className="text-[9px] font-black uppercase text-slate-500 tracking-widest">A3.7.7 Change Final Status</label>
                        <div className="flex bg-white/5 p-1 rounded-2xl border border-white/10 gap-1">
                            <button onClick={() => setReportStatus('DRAFT')} className={`flex-1 py-3 rounded-xl text-[9px] font-black uppercase transition-all ${reportStatus === 'DRAFT' ? 'bg-white text-slate-900 shadow-xl' : 'text-slate-400 hover:text-white'}`}>Draft</button>
                            <button onClick={() => setReportStatus('FINAL')} className={`flex-1 py-3 rounded-xl text-[9px] font-black uppercase transition-all ${reportStatus === 'FINAL' ? 'bg-green-600 text-white shadow-xl' : 'text-slate-400 hover:text-white'}`}>Finalize</button>
                        </div>
                    </div>

                    <Button className="w-full h-16 bg-white text-slate-900 hover:bg-blue-50 rounded-3xl font-black uppercase tracking-[0.2em] text-[10px] shadow-2xl transition-all group">
                       <Layers size={18} className="mr-2 text-indigo-600 group-hover:scale-110 transition-transform" /> 
                       Auto-Compile Report
                    </Button>
                </div>
            </Card>

            {/* ANNEXURES VAULT (A3.7 Data Captured) */}
            <Card className="rounded-[40px] border-slate-200 p-8 bg-white shadow-sm relative overflow-hidden">
                <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/blueprint.png')]" />
                <div className="flex justify-between items-center mb-8 border-b pb-4">
                    <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest">A3.7.6 Annexures Vault</h4>
                    <Button variant="ghost" size="icon" className="h-8 w-8 rounded-lg bg-slate-50"><Paperclip size={14}/></Button>
                </div>
                <div className="space-y-4">
                    <AnnexureItem name="District_Aggregation_Sheet.xls" type="Spreadsheet" />
                    <AnnexureItem name="Court_Order_Summaries.pdf" type="Legal Registry" />
                    <AnnexureItem name="Establishment_Photo_Proof.zip" type="Evidence Hub" />
                </div>
                <Button variant="outline" className="w-full mt-6 h-12 rounded-2xl border-dashed border-2 border-indigo-100 text-indigo-600 font-black uppercase text-[9px] tracking-widest">
                    + Link Supporting Document
                </Button>
            </Card>

            <div className="p-6 bg-blue-50 rounded-[32px] border border-blue-100 flex gap-4">
                <Info className="text-blue-600 shrink-0" size={20} />
                <p className="text-[9px] font-bold text-blue-800 leading-normal uppercase">
                    Compiled final reports are instantly available in the <b>A7. Statutory Reports</b> hub for state-wide distribution.
                </p>
            </div>
        </div>

      </div>
    </div>
  );
}

/* UI SUB-COMPONENTS */

function AnnexureItem({ name, type }: any) {
    return (
        <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl group hover:bg-slate-100 transition-all cursor-pointer">
            <div className="flex items-center gap-3">
                <div className="p-2 bg-white rounded-lg shadow-sm group-hover:text-indigo-600 transition-colors"><FilePlus size={14}/></div>
                <div>
                    <p className="text-[10px] font-black text-slate-800 tracking-tight leading-none uppercase">{name}</p>
                    <p className="text-[8px] font-bold text-slate-400 mt-1 uppercase">{type}</p>
                </div>
            </div>
            <Download size={14} className="text-slate-300 group-hover:text-indigo-600" />
        </div>
    )
}