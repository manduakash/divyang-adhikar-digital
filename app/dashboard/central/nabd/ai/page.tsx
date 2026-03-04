// app/dashboard/nabd/ai-intelligence/page.tsx
"use client";
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
    Sparkles, PenTool, FileText, Target,
    Copy, Save, RefreshCw, AlertCircle,
    CheckCircle2, MessageSquare, Lightbulb, Zap
} from "lucide-react";

export default function GenerativeAIPage() {
    const [activeTool, setActiveTool] = useState<'mom' | 'rec' | 'action'>('mom');
    const [isGenerating, setIsGenerating] = useState(false);
    const [draftText, setDraftText] = useState("");

    const handleGenerate = () => {
        setIsGenerating(true);
        setDraftText("");
        
        // Simulating AI generation delay
        setTimeout(() => {
            if (activeTool === 'mom') {
                setDraftText("Draft Minutes of Meeting\nReference: NABD/MTG/2024-47\n\nThe board convened to discuss accessibility gaps in rural infrastructure. The Chairperson initiated the dialogue highlighting the pending status of Tier-2 railway station ramps. Members concurred on the urgency of the matter. It was decided that a special sub-committee will be formed to oversee the implementation, and a formal advisory will be drafted for the Ministry of Railways.");
            } else if (activeTool === 'rec') {
                setDraftText("Draft Policy Recommendation\nTheme: Universal Design in Public Transport\n\nObservation: Despite existing guidelines, rural transit hubs lack basic wheelchair accessibility and tactile paths.\n\nDirective: The Ministry of Road Transport & Highways is hereby advised to mandate universal design compliance for all new rural transit projects funded under central schemes. A compliance report should be submitted within the next quarter.");
            } else {
                setDraftText("Draft Action Point Summary\nSource: Recommendation NABD/REC/2024-110\n\nTask: Issue a comprehensive circular mandating ramps and tactile guidance at all newly renovated Tier-2 and Tier-3 railway stations.\n\nAuthority: Ministry of Railways\nTarget Timeline: End of current fiscal quarter.\nPriority: High/Urgent");
            }
            setIsGenerating(false);
        }, 1500);
    };

    return (
        <div className="space-y-8 animate-in fade-in duration-1000 pb-20 font-sans selection:bg-purple-100">

            {/* PAGE HEADER - STRICTLY NO DARK COLORS */}
            <div className="flex flex-col xl:flex-row justify-between items-start xl:items-end gap-6 relative">
                <div className="space-y-2">
                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-indigo-100 text-purple-700 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border-2 border-purple-200 shadow-sm">
                        <Sparkles size={14} className="animate-pulse" /> Artificial Intelligence
                    </div>
                    <h1 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 tracking-tighter uppercase leading-none">
                        Intelligence Drafting
                    </h1>
                    <p className="text-indigo-900/60 font-medium text-lg italic underline underline-offset-8 decoration-purple-200">
                        Assists drafting and summarisation without altering official records.
                    </p>
                </div>
            </div>

            {/* AI TOOL SELECTOR */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <ToolCard 
                    title="Summarise Minutes" 
                    desc="Process transcripts and notes into structured Minutes of Meeting."
                    icon={<FileText />}
                    color="purple"
                    isActive={activeTool === 'mom'}
                    onClick={() => { setActiveTool('mom'); setDraftText(""); }}
                />
                <ToolCard 
                    title="Draft Recommendations" 
                    desc="Transform observations into formal policy advisory notes."
                    icon={<Lightbulb />}
                    color="orange"
                    isActive={activeTool === 'rec'}
                    onClick={() => { setActiveTool('rec'); setDraftText(""); }}
                />
                <ToolCard 
                    title="Extract Action Points" 
                    desc="Identify and list actionable directives from meeting narratives."
                    icon={<Target />}
                    color="emerald"
                    isActive={activeTool === 'action'}
                    onClick={() => { setActiveTool('action'); setDraftText(""); }}
                />
            </div>

            {/* AI WORKSPACE */}
            <Card className="rounded-[40px] border-2 border-indigo-50 shadow-xl overflow-hidden bg-white">
                
                {/* WORKSPACE HEADER - VIBRANT GRADIENT */}
                <div className="p-8 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 relative overflow-hidden flex justify-between items-center border-b-4 border-indigo-200">
                    <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
                    <div className="relative z-10 flex items-center gap-4">
                        <div className="h-12 w-12 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center shadow-lg">
                            <PenTool size={20} className="text-white" />
                        </div>
                        <div>
                            <CardTitle className="text-xl font-black uppercase tracking-tight text-white drop-shadow-sm">
                                Generative Workspace
                            </CardTitle>
                            <p className="text-[10px] font-bold text-indigo-100 uppercase tracking-widest mt-1">
                                Secure processing environment
                            </p>
                        </div>
                    </div>
                    <Badge className="bg-white/20 hover:bg-white/20 text-white border-none text-[10px] font-black uppercase tracking-widest px-4 py-2 backdrop-blur-md shadow-sm">
                        All Outputs Remain Editable Drafts
                    </Badge>
                </div>

                <div className="p-8 grid grid-cols-1 xl:grid-cols-2 gap-10 bg-indigo-50/30 relative">
                    <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/topography.png')]" />
                    
                    {/* LEFT PANEL: CONTEXT & INPUT */}
                    <div className="space-y-6 relative z-10">
                        <div className="flex items-center gap-3 mb-6">
                            <MessageSquare className="text-indigo-500" size={20} />
                            <h3 className="text-sm font-black text-indigo-900 uppercase tracking-[0.2em] border-b-2 border-indigo-100 pb-2 flex-1">
                                Context & Parameters
                            </h3>
                        </div>

                        <FormField label="Select Reference Material" required>
                            <select className="form-input-apex appearance-none cursor-pointer">
                                <option value="" disabled selected>Select Source Record...</option>
                                <option value="1">NABD/MTG/2024-47 (Raw Transcript)</option>
                                <option value="2">NABD/MTG/2024-46 (Meeting Notes)</option>
                                <option value="3">Theme: Accessibility (Working Paper)</option>
                            </select>
                        </FormField>

                        <FormField label="Specific Instructions for AI" required>
                            <textarea 
                                rows={6} 
                                placeholder="Add specific focus areas. E.g., 'Emphasise the discussion around rural education funding and list the resulting directives clearly.'" 
                                className="form-input-apex resize-none text-sm leading-relaxed" 
                            />
                        </FormField>

                        <Button 
                            onClick={handleGenerate}
                            disabled={isGenerating}
                            className="w-full h-16 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-black uppercase tracking-widest text-xs shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all gap-3"
                        >
                            {isGenerating ? (
                                <RefreshCw size={20} className="animate-spin" />
                            ) : (
                                <Sparkles size={20} />
                            )}
                            {isGenerating ? 'Processing Intelligence...' : 'Generate Draft'}
                        </Button>

                        <div className="flex items-start gap-3 p-4 bg-amber-50 border-2 border-amber-200 rounded-2xl mt-4">
                            <AlertCircle size={18} className="text-amber-600 shrink-0 mt-0.5" />
                            <p className="text-[10px] font-bold text-amber-800 uppercase tracking-widest leading-relaxed">
                                AI drafts do not alter official records. Review and modify the generated content before saving it to the official registry.
                            </p>
                        </div>
                    </div>

                    {/* RIGHT PANEL: EDITABLE OUTPUT */}
                    <div className="space-y-6 relative z-10 flex flex-col h-full">
                        <div className="flex items-center gap-3 mb-6">
                            <Zap className="text-amber-500" size={20} />
                            <h3 className="text-sm font-black text-indigo-900 uppercase tracking-[0.2em] border-b-2 border-indigo-100 pb-2 flex-1">
                                Editable Output Draft
                            </h3>
                        </div>

                        <div className="flex-1 relative group">
                            <textarea 
                                value={draftText}
                                onChange={(e) => setDraftText(e.target.value)}
                                placeholder="AI generated draft will appear here..."
                                className="w-full h-full min-h-[300px] border-2 border-indigo-100 bg-white rounded-3xl p-6 text-sm font-medium text-slate-800 leading-relaxed focus:outline-none focus:border-purple-400 focus:ring-4 focus:ring-purple-50 transition-all shadow-inner resize-none"
                            />
                            {draftText && (
                                <Badge className="absolute top-4 right-4 bg-emerald-100 text-emerald-700 border-2 border-emerald-200 text-[9px] font-black uppercase tracking-widest px-3 py-1 shadow-sm">
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
                                <Copy size={16} /> Copy Text
                            </Button>
                            <Button 
                                disabled={!draftText}
                                className="flex-1 h-14 rounded-2xl bg-emerald-500 hover:bg-emerald-600 text-white font-black uppercase tracking-widest text-[10px] shadow-lg transition-all gap-2"
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
    const colorStyles = {
        purple: isActive ? 'bg-gradient-to-br from-purple-500 to-indigo-600 text-white shadow-purple-200 border-transparent' : 'bg-white text-purple-900 border-purple-100 hover:border-purple-300 hover:bg-purple-50',
        orange: isActive ? 'bg-gradient-to-br from-amber-500 to-orange-600 text-white shadow-amber-200 border-transparent' : 'bg-white text-amber-900 border-amber-100 hover:border-amber-300 hover:bg-amber-50',
        emerald: isActive ? 'bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow-emerald-200 border-transparent' : 'bg-white text-emerald-900 border-emerald-100 hover:border-emerald-300 hover:bg-emerald-50',
    };

    const iconColor = isActive ? 'text-white' : 
        color === 'purple' ? 'text-purple-500' : 
        color === 'orange' ? 'text-amber-500' : 'text-emerald-500';

    return (
        <button 
            onClick={onClick}
            className={`relative overflow-hidden rounded-[32px] p-8 border-2 text-left transition-all duration-300 shadow-lg hover:-translate-y-1 ${colorStyles[color as keyof typeof colorStyles]}`}
        >
            {isActive && <div className="absolute inset-0 opacity-[0.1] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />}
            
            <div className="relative z-10 flex flex-col justify-between h-full space-y-4">
                <div className="flex justify-between items-start">
                    <div className={`h-12 w-12 rounded-2xl flex items-center justify-center shadow-inner ${isActive ? 'bg-white/20 border border-white/30 backdrop-blur-md' : 'bg-slate-50 border border-slate-100'}`}>
                        {React.cloneElement(icon, { size: 24, className: iconColor })}
                    </div>
                    {isActive && <CheckCircle2 size={24} className="text-white drop-shadow-md" />}
                </div>
                <div>
                    <h3 className="text-lg font-black tracking-tighter leading-none mb-2">{title}</h3>
                    <p className={`text-[10px] font-bold uppercase tracking-widest leading-relaxed ${isActive ? 'text-white/80' : 'text-slate-500'}`}>
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
            <label className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-indigo-700 ml-1">
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
    @apply w-full border-2 border-indigo-100 bg-white rounded-xl px-4 py-3 text-sm font-bold text-slate-800 focus:outline-none focus:border-purple-400 focus:ring-4 focus:ring-purple-50 transition-all shadow-inner placeholder:text-slate-400;
  }
}
*/