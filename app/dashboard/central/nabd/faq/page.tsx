// app/dashboard/scpd/help/faq/page.tsx
"use client";
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Search, MessageSquare, Gavel, Accessibility, 
  Briefcase, GraduationCap, FileBadge, Globe,
  ShieldCheck, HelpCircle, Sparkles, Filter,
  ChevronDown, BookOpen, Activity, UserCircle2,
  BadgeCheck, Info, ArrowUpRight
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

type FAQCategory = 'GRIEVANCES' | 'DIRECTIONS' | 'ACCESSIBILITY' | 'EMPLOYMENT' | 'EDUCATION' | 'CERTIFICATES';

export default function StatutoryFAQHub() {
  const [activeCategory, setActiveCategory] = useState<FAQCategory>('GRIEVANCES');

  return (
    <div className="space-y-10 animate-in fade-in duration-1000 pb-20 font-sans selection:bg-indigo-100">
      
      {/* 1. KNOWLEDGE HUB HEADER - CARBON FIBER */}
      <Card className="rounded-[40px] border-none bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 p-1 relative overflow-hidden shadow-2xl shadow-indigo-200">
        <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        <div className="bg-white rounded-[38px] p-10 relative z-10">
            <div className="flex flex-col xl:flex-row justify-between items-center gap-10">
                <div className="space-y-4 flex-1">
                    <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] border border-indigo-100">
                        <BadgeCheck size={14} /> Knowledge Repository Node
                    </div>
                    <h1 className="text-5xl font-black text-slate-900 tracking-tighter uppercase leading-none">Statutory Help Desk</h1>
                    <p className="text-slate-500 font-medium italic text-lg max-w-xl">Intelligent resolution of PwD Act implementation queries and administrative procedures.</p>
                </div>

                {/* KEYWORD SEARCH (Mandated Feature) */}
                <div className="w-full xl:w-[450px] space-y-3">
                    <label className="text-[10px] font-black uppercase text-slate-400 ml-1 tracking-widest">Keyword Search Engine</label>
                    <div className="relative group">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-300 group-focus-within:text-indigo-600 transition-colors" />
                        <Input 
                            className="h-16 pl-12 pr-6 rounded-3xl bg-slate-50 border-none font-bold text-slate-800 shadow-inner focus:ring-2 focus:ring-indigo-500" 
                            placeholder="Enter keywords (e.g. 4% mandate, Scribe rules)..." 
                        />
                        <button className="absolute right-3 top-1/2 -translate-y-1/2 bg-slate-900 text-white p-2.5 rounded-2xl hover:bg-black transition-all shadow-lg">
                            <Sparkles size={18} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
      </Card>

      <div className="grid grid-cols-1 xl:grid-cols-12 gap-10 items-start">
        
        {/* 2. CATEGORY SELECTOR (6 MANDATED CATEGORIES) */}
        <div className="xl:col-span-4 space-y-4 sticky top-28 h-fit">
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] ml-4 mb-6">Statutory Domains</p>
            <CategoryTile active={activeCategory === 'GRIEVANCES'} onClick={() => setActiveCategory('GRIEVANCES')} label="Grievances Hub" icon={<MessageSquare/>} gradient="from-purple-500 to-indigo-600" />
            <CategoryTile active={activeCategory === 'DIRECTIONS'} onClick={() => setActiveCategory('DIRECTIONS')} label="Binding Directions" icon={<Gavel/>} gradient="from-slate-700 to-slate-900" />
            <CategoryTile active={activeCategory === 'ACCESSIBILITY'} onClick={() => setActiveCategory('ACCESSIBILITY')} label="Accessibility Norms" icon={<Accessibility/>} gradient="from-emerald-500 to-teal-700" />
            <CategoryTile active={activeCategory === 'EMPLOYMENT'} onClick={() => setActiveCategory('EMPLOYMENT')} label="Employment & Quota" icon={<Briefcase/>} gradient="from-blue-600 to-indigo-800" />
            <CategoryTile active={activeCategory === 'EDUCATION'} onClick={() => setActiveCategory('EDUCATION')} label="Inclusive Education" icon={<GraduationCap/>} gradient="from-indigo-700 to-blue-900" />
            <CategoryTile active={activeCategory === 'CERTIFICATES'} onClick={() => setActiveCategory('CERTIFICATES')} label="Certificates & Rights" icon={<FileBadge/>} gradient="from-rose-500 to-orange-600" />
            
            <Card className="mt-8 rounded-[40px] border-none bg-slate-900 text-white p-10 shadow-2xl relative overflow-hidden group">
                <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/circuit-board.png')]" />
                <div className="relative z-10 space-y-6">
                    <div className="flex items-center gap-3">
                        <Sparkles className="text-blue-400" />
                        <h3 className="text-[10px] font-black uppercase tracking-widest text-blue-400">AI Context Hub</h3>
                    </div>
                    <p className="text-sm font-bold leading-relaxed uppercase tracking-tighter italic">
                        "Unable to find your answer? Our generative engine can draft a specific clarification request for the Registry."
                    </p>
                    <Button className="w-full h-12 bg-white text-slate-900 hover:bg-blue-50 rounded-2xl font-black uppercase tracking-widest text-[9px] shadow-lg">Ask Custom Question</Button>
                </div>
            </Card>
        </div>

        {/* 3. DYNAMIC Q&A ACCORDION LIST */}
        <div className="xl:col-span-8 space-y-6">
            <Card className="rounded-[48px] border-slate-200 bg-white shadow-sm overflow-hidden min-h-[800px]">
                <CardHeader className="p-8 border-b border-slate-50 bg-slate-50/30 flex flex-row justify-between items-center">
                    <CardTitle className="text-sm font-black uppercase tracking-widest text-slate-400">Resolution registry: {activeCategory}</CardTitle>
                    <Badge className="bg-indigo-50 text-indigo-700 font-black text-[9px] uppercase px-3 py-1 border-none tracking-widest">Version 2025.1.0</Badge>
                </CardHeader>
                <CardContent className="p-8">
                    <Accordion type="single" collapsible className="w-full space-y-4">
                        {faqData[activeCategory].map((faq, i) => (
                            <AccordionItem key={i} value={`item-${i}`} className="border border-slate-100 rounded-3xl overflow-hidden group hover:border-indigo-100 transition-all shadow-sm px-6">
                                <AccordionTrigger className="hover:no-underline py-6">
                                    <div className="flex items-center gap-4 text-left">
                                        <div className="h-8 w-8 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 group-data-[state=open]:bg-indigo-600 group-data-[state=open]:text-white transition-all shadow-inner">
                                            <HelpCircle size={16} />
                                        </div>
                                        <span className="text-sm font-black text-slate-800 uppercase tracking-tight leading-tight group-data-[state=open]:text-indigo-600">{faq.q}</span>
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent className="pb-8 pt-2 pl-12 relative overflow-hidden">
                                    <div className="absolute left-6 top-0 bottom-8 w-[2px] bg-slate-100 rounded-full" />
                                    <p className="text-sm font-medium text-slate-500 leading-[1.8] italic uppercase tracking-tighter">
                                        {faq.a}
                                    </p>
                                    <div className="mt-6 flex items-center gap-6">
                                        <button className="text-[9px] font-black text-blue-600 uppercase tracking-widest flex items-center gap-2 hover:underline"><BookOpen size={12}/> View Legal Section</button>
                                        <button className="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 hover:text-slate-900 transition-colors"><Activity size={12}/> Was this helpful?</button>
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </CardContent>
            </Card>
        </div>

      </div>

      {/* FOOTER SYNC STATUS */}
      <footer className="flex flex-col md:flex-row justify-between items-center gap-8 pt-10 border-t border-slate-200">
        <div className="flex items-center gap-3 text-slate-400">
            <BadgeCheck size={20} className="text-indigo-600 animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em]">Latest Statutory Update: 14 Oct 2024 • Consolidated Registry</span>
        </div>
        <div className="flex gap-4">
             <button className="text-[10px] font-black uppercase text-indigo-600 hover:underline">Download Master FAQ Guide (PDF)</button>
             <button className="text-[10px] font-black uppercase text-slate-400 hover:text-slate-900">Support Terminal</button>
        </div>
      </footer>
    </div>
  );
}

/* UI SUB-COMPONENTS */

function CategoryTile({ active, onClick, label, icon, gradient }: any) {
    return (
        <button 
            onClick={onClick}
            className={`group relative w-full flex items-center justify-between p-5 rounded-[28px] transition-all duration-500 border-2 overflow-hidden ${
                active 
                ? `bg-gradient-to-r ${gradient} text-white border-transparent shadow-xl scale-[1.03]` 
                : 'bg-white text-slate-500 border-slate-50 hover:border-indigo-100 hover:bg-slate-50'
            }`}
        >
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/topography.png')]" />
            <div className="flex items-center gap-4 relative z-10">
                <div className={`h-10 w-10 rounded-2xl flex items-center justify-center transition-all ${active ? 'bg-white/20 backdrop-blur-md' : 'bg-slate-50 text-slate-300 group-hover:text-indigo-600'}`}>
                    {React.cloneElement(icon, { size: 18 })}
                </div>
                <span className="text-[10px] font-black uppercase tracking-[0.15em]">{label}</span>
            </div>
            {active && <ArrowUpRight size={16} className="text-white opacity-40 animate-in zoom-in duration-300" />}
        </button>
    )
}

/* MOCK DATA (MANDATED CATEGORIES) */
const faqData: Record<FAQCategory, {q: string, a: string}[]> = {
  GRIEVANCES: [
    { q: "What is the statutory timeline for grievance redressal?", a: "Under Rule 15 of the PwD Rules 2017, the Establishment is mandated to provide a final response or resolution within 30 days of receipt." },
    { q: "When can a grievance be escalated to the Commissioner?", a: "Escalation is automatically triggered if the establishment fails to resolve the issue within the 30-day SLA or if the relief provided is non-satisfactory." }
  ],
  DIRECTIONS: [
    { q: "Are Commissioner directions legally binding?", a: "Yes, directions issued under Sections 44, 45, and 46 of the Act are statutory orders. Non-compliance results in Section 89 penalties." },
    { q: "How to submit proof of compliance against a state order?", a: "Institutions must use the 'Compliance Verification' module to upload geo-tagged photos and certified reports before the deadline." }
  ],
  ACCESSIBILITY: [
    { q: "What are the structural standards for physical access?", a: "Buildings must adhere to the Harmonized Guidelines (2021), including specific ramp gradients (1:12), elevator braille, and accessible toilets." }
  ],
  EMPLOYMENT: [
    { q: "How is the 4% reservation mandate calculated?", a: "The reservation is computed against the total sanctioned workforce of the establishment, specifically for identified PwD posts." }
  ],
  EDUCATION: [
    { q: "What constitutes 'Reasonable Accommodation' in schools?", a: "This includes provision of Scribes, extra time during exams, accessible study material, and specialized assistive devices." }
  ],
  CERTIFICATES: [
    { q: "How to verify the authenticity of a Disability Certificate?", a: "Each certificate features a unique monospaced ID and QR code synced with the National PwD Database (UDID)." }
  ]
};