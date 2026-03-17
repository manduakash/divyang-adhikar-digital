// app/dashboard/ndma/ai-intelligence/page.tsx
"use client";
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
    Sparkles, PenTool, FileText, Target, Activity,
    Copy, Save, RefreshCw, AlertCircle, ShieldAlert,
    CheckCircle2, MessageSquare, Lightbulb, Zap, Globe,
    Database
} from "lucide-react";

export default function NDMAGenerativeAIPage() {
    const [activeTool, setActiveTool] = useState<'risk' | 'state' | 'adv' | 'post'>('risk');
    const [isGenerating, setIsGenerating] = useState(false);
    const [draftText, setDraftText] = useState("");

    const handleGenerate = () => {
        setIsGenerating(true);
        setDraftText("");
        
        // Simulating AI generation delay
        setTimeout(() => {
            if (activeTool === 'risk') {
                setDraftText("National PwD Risk Summary (Q3 2024)\n\nThe aggregate risk profile indicates a high vulnerability index in the eastern coastal states due to an impending severe cyclonic season. Analysis of SDMA data reveals that approximately 1.2 million PwDs reside in high-risk zones across Odisha, West Bengal, and Andhra Pradesh. Critical gaps exist in the provision of accessible early warning systems (specifically for hearing-impaired populations) and dedicated wheelchair-accessible evacuation transport fleets.");
            } else if (activeTool === 'state') {
                setDraftText("State Preparedness Comparative Narrative: Odisha vs. Assam\n\nOdisha demonstrates a robust preparedness framework with 92% of its coastal cyclone shelters equipped with standardized ramps and accessible WASH facilities. Their early warning SMS penetration reaches 96% of the registered PwD database. Conversely, Assam's flood response infrastructure shows a compliance rate of only 42% for shelter accessibility. Evacuation protocols in Assam currently lack a formalized buddy system for persons with locomotor disabilities, necessitating immediate intervention before the monsoon onset.");
            } else if (activeTool === 'adv') {
                setDraftText("Draft National Advisory: Heatwave Protection for Intellectual & Multiple Disabilities\n\nSubject: Mandatory safeguarding protocols for highly vulnerable demographics during severe heatwaves.\n\nDirective to SDMAs:\n1. Ensure uninterrupted power supply (or generator backup) at all care homes and specialized institutions to support cooling and life-saving medical equipment.\n2. Restrict outdoor movement and modify working hours for PwDs employed under state schemes.\n3. Deploy ASHA workers for daily wellness checks on bed-ridden individuals.\n\nCompliance Report Expected: Within 15 days of advisory issuance.");
            } else {
                setDraftText("Post-Disaster Analytical Summary: Cyclone Remal\n\nEvacuation Efficiency: 88% of mapped PwDs were successfully evacuated to accessible shelters 12 hours prior to landfall.\nGaps Identified: 15 relief camps in South 24 Parganas experienced power outages, disabling electric wheelchairs and essential medical devices. Medical supply chains for specialized medications (e.g., anti-epileptic drugs) were severely delayed due to road blockages.\nRecommendation: NDMA mandates the inclusion of dedicated solar/battery backup systems in the updated Cyclone Shelter SOP.");
            }
            setIsGenerating(false);
        }, 1500);
    };

    return (
        <div className="space-y-8 animate-in fade-in duration-1000 pb-20 font-sans selection:bg-purple-100">

            {/* PAGE HEADER */}
            <div className="flex flex-col xl:flex-row justify-between items-start xl:items-end gap-6 relative">
                <div className="space-y-2">
                    <div className="inline-flex items-center gap-2 bg-purple-50 text-purple-700 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border-2 border-purple-200 shadow-sm">
                        <Sparkles size={14} className="animate-pulse" /> Artificial Intelligence
                    </div>
                    <h1 className="text-5xl font-black text-slate-800 tracking-tighter uppercase leading-none">
                        Analytical & Drafting Intelligence
                    </h1>
                    <p className="text-slate-500 font-medium text-lg italic underline underline-offset-8 decoration-purple-200">
                        Support for national risk narratives and directive drafting without altering primary SDMA data.
                    </p>
                </div>
            </div>

            {/* AI TOOL SELECTOR */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                <ToolCard 
                    title="Risk Summaries" 
                    desc="National disaster–PwD vulnerability profiles."
                    icon={<Globe />}
                    color="purple"
                    isActive={activeTool === 'risk'}
                    onClick={() => { setActiveTool('risk'); setDraftText(""); }}
                />
                <ToolCard 
                    title="State Comparison" 
                    desc="Comparative preparedness narratives."
                    icon={<Activity />}
                    color="blue"
                    isActive={activeTool === 'state'}
                    onClick={() => { setActiveTool('state'); setDraftText(""); }}
                />
                <ToolCard 
                    title="Draft Directives" 
                    desc="Generate advisories and SOP notes."
                    icon={<PenTool />}
                    color="emerald"
                    isActive={activeTool === 'adv'}
                    onClick={() => { setActiveTool('adv'); setDraftText(""); }}
                />
                <ToolCard 
                    title="Post-Event Audit" 
                    desc="Analytical summaries of disaster response."
                    icon={<ShieldAlert />}
                    color="orange"
                    isActive={activeTool === 'post'}
                    onClick={() => { setActiveTool('post'); setDraftText(""); }}
                />
            </div>

            {/* AI WORKSPACE */}
            <Card className="rounded-[40px] border-none shadow-2xl overflow-hidden bg-white">
                
                {/* WORKSPACE HEADER - VIBRANT GRADIENT */}
                <div className="p-8 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 relative overflow-hidden flex justify-between items-center border-b-4 border-indigo-300">
                    <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
                    <div className="relative z-10 flex items-center gap-4">
                        <div className="h-12 w-12 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center shadow-lg">
                            <Sparkles size={20} className="text-white drop-shadow-md" />
                        </div>
                        <div>
                            <CardTitle className="text-xl font-black uppercase tracking-tight text-white drop-shadow-sm">
                                National Intelligence Engine
                            </CardTitle>
                            <p className="text-[10px] font-bold text-indigo-100 uppercase tracking-widest mt-1">
                                Processing real-time data from 36 States/UTs
                            </p>
                        </div>
                    </div>
                    <Badge className="relative z-10 bg-white/20 text-white hover:bg-white/30 border-none font-black text-[9px] uppercase px-4 py-2 rounded-xl backdrop-blur-sm shadow-sm">
                        Outputs remain editable drafts
                    </Badge>
                </div>

                <div className="p-8 grid grid-cols-1 xl:grid-cols-2 gap-10 bg-slate-50/50 relative">
                    <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/topography.png')]" />
                    
                    {/* LEFT PANEL: CONTEXT & INPUT */}
                    <div className="space-y-6 relative z-10">
                        <div className="flex items-center gap-3 mb-6">
                            <Database className="text-indigo-600" size={20} />
                            <h3 className="text-sm font-black text-slate-800 uppercase tracking-[0.2em] border-b-2 border-indigo-100 pb-2 flex-1">
                                Data Sources & Parameters
                            </h3>
                        </div>

                        <FormField label="Select Primary Data Source" required>
                            <select className="form-input-apex appearance-none cursor-pointer">
                                <option value="" disabled selected>Select Registry or Report...</option>
                                <option value="1">National PwD Risk Registry (Q3 2024)</option>
                                <option value="2">SDMA Preparedness Index (Odisha & Assam)</option>
                                <option value="3">Post-Disaster Audit: Cyclone Remal</option>
                            </select>
                        </FormField>

                        <FormField label="Specific Instructions for Engine" required>
                            <textarea 
                                rows={6} 
                                placeholder="E.g., 'Compare the shelter accessibility and early warning coverage between coastal and non-coastal states. Highlight critical gaps requiring immediate NDMA intervention...'" 
                                className="form-input-apex resize-none text-sm leading-relaxed" 
                            />
                        </FormField>

                        <Button 
                            onClick={handleGenerate}
                            disabled={isGenerating}
                            className="w-full h-16 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-black uppercase tracking-widest text-xs shadow-xl hover:shadow-[0_0_20px_theme(colors.indigo.400)] transition-all gap-3 border-none"
                        >
                            {isGenerating ? (
                                <RefreshCw size={20} className="animate-spin" />
                            ) : (
                                <Sparkles size={20} />
                            )}
                            {isGenerating ? 'Synthesizing National Data...' : 'Generate Analysis / Draft'}
                        </Button>

                        <div className="flex items-start gap-3 p-5 bg-amber-50 border border-amber-200 rounded-2xl mt-4 shadow-inner">
                            <AlertCircle size={18} className="text-amber-600 shrink-0 mt-0.5" />
                            <p className="text-[10px] font-black text-amber-800 uppercase tracking-widest leading-relaxed">
                                AI drafts do not alter official NDMA or SDMA records. Please review, edit, and formally approve the generated content before publishing.
                            </p>
                        </div>
                    </div>

                    {/* RIGHT PANEL: EDITABLE OUTPUT */}
                    <div className="space-y-6 relative z-10 flex flex-col h-full">
                        <div className="flex items-center gap-3 mb-6">
                            <Zap className="text-amber-500" size={20} />
                            <h3 className="text-sm font-black text-slate-800 uppercase tracking-[0.2em] border-b-2 border-indigo-100 pb-2 flex-1">
                                Generated Output Workspace
                            </h3>
                        </div>

                        <div className="flex-1 relative group">
                            <textarea 
                                value={draftText}
                                onChange={(e) => setDraftText(e.target.value)}
                                placeholder="AI generated synthesis will appear here..."
                                className="w-full h-full min-h-[300px] border-2 border-indigo-100 bg-white rounded-3xl p-6 text-sm font-bold text-slate-700 leading-relaxed focus:outline-none focus:border-purple-400 focus:ring-4 focus:ring-purple-50 transition-all shadow-inner resize-none"
                            />
                            {draftText && (
                                <Badge className="absolute top-4 right-4 bg-emerald-100 text-emerald-700 border-none text-[9px] font-black uppercase tracking-widest px-3 py-1.5 shadow-sm">
                                    Editable Draft
                                </Badge>
                            )}
                        </div>

                        <div className="flex gap-4">
                            <Button 
                                variant="outline" 
                                disabled={!draftText}
                                className="flex-1 h-14 rounded-2xl border-2 border-indigo-200 text-indigo-700 font-black uppercase tracking-widest text-[10px] bg-white shadow-sm hover:bg-indigo-50 transition-all gap-2"
                            >
                                <Copy size={16} /> Copy to Clipboard
                            </Button>
                            <Button 
                                disabled={!draftText}
                                className="flex-1 h-14 rounded-2xl bg-emerald-500 hover:bg-emerald-600 text-white font-black uppercase tracking-widest text-[10px] shadow-lg hover:shadow-[0_0_15px_theme(colors.emerald.400)] transition-all gap-2 border-none"
                            >
                                <Save size={16} /> Save to Registry
                            </Button>
                        </div>
                    </div>
                </div>
            </Card>

        </div>
    );
}

/* UI SUB-COMPONENTS */

function ToolCard({ title, desc, icon, color, isActive, onClick }: any) {
    
    // Dynamic vibrant colors based on the prop
    const colorStyles = {
        purple: isActive ? 'bg-gradient-to-br from-purple-600 to-indigo-700 text-white shadow-lg shadow-purple-200 border-transparent' : 'bg-white text-slate-800 border-purple-100 hover:border-purple-300 hover:bg-purple-50',
        blue: isActive ? 'bg-gradient-to-br from-blue-600 to-cyan-700 text-white shadow-lg shadow-blue-200 border-transparent' : 'bg-white text-slate-800 border-blue-100 hover:border-blue-300 hover:bg-blue-50',
        emerald: isActive ? 'bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow-lg shadow-emerald-200 border-transparent' : 'bg-white text-slate-800 border-emerald-100 hover:border-emerald-300 hover:bg-emerald-50',
        orange: isActive ? 'bg-gradient-to-br from-orange-500 to-red-600 text-white shadow-lg shadow-orange-200 border-transparent' : 'bg-white text-slate-800 border-orange-100 hover:border-orange-300 hover:bg-orange-50',
    };

    const iconColor = isActive ? 'text-white' : 
        color === 'purple' ? 'text-purple-600' : 
        color === 'blue' ? 'text-blue-600' : 
        color === 'emerald' ? 'text-emerald-600' : 'text-orange-600';

    return (
        <button 
            onClick={onClick}
            className={`relative overflow-hidden rounded-[32px] p-6 border-2 text-left transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1 ${colorStyles[color as keyof typeof colorStyles]}`}
        >
            {isActive && <div className="absolute inset-0 opacity-[0.1] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />}
            
            <div className="relative z-10 flex flex-col justify-between h-full space-y-4">
                <div className="flex justify-between items-start">
                    <div className={`h-12 w-12 rounded-2xl flex items-center justify-center shadow-inner ${isActive ? 'bg-white/20 border border-white/30 backdrop-blur-md' : 'bg-slate-50 border border-slate-100'}`}>
                        {React.cloneElement(icon, { size: 24, className: iconColor })}
                    </div>
                    {isActive && <CheckCircle2 size={20} className="text-white drop-shadow-md" />}
                </div>
                <div>
                    <h3 className="text-lg font-black tracking-tight leading-none mb-2">{title}</h3>
                    <p className={`text-[9px] font-bold uppercase tracking-widest leading-relaxed ${isActive ? 'text-white/80' : 'text-slate-500'}`}>
                        {desc}
                    </p>
                </div>
            </div>
        </button>
    );
}

function FormField({ label, required, children, className }: any) {
    return (
        <div className={`space-y-2 ${className}`}>
            <label className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-indigo-800 ml-1">
                {label} {required && <span className="text-red-500">*</span>}
            </label>
            {children}
        </div>
    );
}

/* 
Add to globals.css if not already present:
@layer components {
  .form-input-apex {
    @apply w-full border-2 border-indigo-100 bg-white rounded-xl px-4 py-3 text-sm font-bold text-slate-800 focus:outline-none focus:border-purple-400 focus:ring-4 focus:ring-purple-50 transition-all shadow-sm placeholder:text-slate-400;
  }
}
*/