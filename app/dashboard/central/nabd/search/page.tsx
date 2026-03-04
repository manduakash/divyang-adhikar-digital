// app/dashboard/nabd/search/page.tsx
"use client";
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
    Table, TableBody, TableCell, TableHead, TableHeader, TableRow
} from "@/components/ui/table";
import {
    Search, Filter, Calendar, Users, Briefcase, FileText,
    Target, Lightbulb, Activity, ChevronDown, DownloadCloud,
    FolderSearch, Database, ArrowRight, X
} from "lucide-react";

export default function NABDGlobalSearchPage() {
    const [searchQuery, setSearchQuery] = useState("");
    const [activeScope, setActiveScope] = useState("ALL");
    const [showFilters, setShowFilters] = useState(false);

    // Mock search scopes for UI interaction
    const searchScopes = [
        { id: "ALL", label: "All Records", icon: FolderSearch },
        { id: "MEMBERS", label: "Members", icon: Users },
        { id: "MEETINGS", label: "Meetings", icon: Calendar },
        { id: "MOM", label: "Minutes of Meeting", icon: FileText },
        { id: "RECOMMENDATIONS", label: "Recommendations", icon: Lightbulb },
        { id: "ACTIONS", label: "Action Points", icon: Target },
    ];

    return (
        <div className="space-y-8 animate-in fade-in duration-1000 pb-20 font-sans selection:bg-indigo-100">

            {/* PAGE HEADER */}
            <div className="flex flex-col xl:flex-row justify-between items-start xl:items-end gap-6 relative">
                <div className="space-y-2">
                    <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border-2 border-indigo-100">
                        <Database size={14} /> Secretariat Database
                    </div>
                    <h1 className="text-5xl font-black text-slate-900 tracking-tighter uppercase leading-none">Global Registry Search</h1>
                    <p className="text-slate-500 font-medium text-lg italic underline underline-offset-8 decoration-indigo-100">
                        Fast retrieval of board composition, meetings, advisories, and tracking data.
                    </p>
                </div>
                <div className="flex gap-4">
                    <Button variant="outline" className="h-14 px-8 rounded-full border-2 border-slate-200 font-black uppercase tracking-widest text-[10px] bg-white shadow-xl hover:bg-slate-50 transition-all">
                        <DownloadCloud size={16} className="mr-2" /> Export Results (CSV)
                    </Button>
                </div>
            </div>

            {/* SEARCH CONSOLE CARD */}
            <Card className="rounded-[40px] border-2 border-slate-100 shadow-xl overflow-hidden bg-white z-20 relative">
                <div className="p-10 bg-gradient-to-r from-indigo-600 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
                    <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] bg-fixed" />
                    
                    <div className="relative z-10 space-y-8">
                        
                        {/* 1. PRIMARY SEARCH BAR */}
                        <div className="flex flex-col md:flex-row gap-4">
                            <div className="relative flex-1 group">
                                <Search className="absolute left-6 top-1/2 -translate-y-1/2 h-6 w-6 text-indigo-400 group-focus-within:text-indigo-300 transition-colors" />
                                <input 
                                    type="text" 
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    placeholder="Search references, themes, member names, or keywords..." 
                                    className="w-full pl-16 pr-6 py-6 border-2 border-white/20 bg-white/10 rounded-3xl text-lg font-bold text-white placeholder:text-white/40 focus:outline-none focus:bg-white/15 focus:border-indigo-400 transition-all shadow-inner backdrop-blur-sm"
                                />
                                {searchQuery && (
                                    <button onClick={() => setSearchQuery("")} className="absolute right-6 top-1/2 -translate-y-1/2 text-white/40 hover:text-white transition-colors">
                                        <X size={20} />
                                    </button>
                                )}
                            </div>
                            <Button 
                                onClick={() => setShowFilters(!showFilters)}
                                className={`h-auto py-6 px-8 rounded-3xl font-black uppercase tracking-widest text-xs transition-all flex gap-3 ${showFilters ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-900/50 border-2 border-indigo-500' : 'bg-white/10 text-white hover:bg-white/20 border-2 border-white/20'}`}
                            >
                                <Filter size={18} /> Advanced Filters
                            </Button>
                        </div>

                        {/* 2. SEARCH SCOPE TOGGLES */}
                        <div className="flex flex-wrap gap-3">
                            {searchScopes.map((scope) => (
                                <button
                                    key={scope.id}
                                    onClick={() => setActiveScope(scope.id)}
                                    className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all border ${
                                        activeScope === scope.id 
                                            ? 'bg-white text-indigo-900 border-white shadow-md' 
                                            : 'bg-transparent text-white/70 border-white/20 hover:bg-white/10 hover:border-white/40'
                                    }`}
                                >
                                    <scope.icon size={14} />
                                    {scope.label}
                                </button>
                            ))}
                        </div>

                        {/* 3. ADVANCED FILTERS PANEL (Collapsible) */}
                        {showFilters && (
                            <div className="pt-8 mt-2 border-t border-white/10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-in slide-in-from-top-4 duration-300">
                                
                                <FilterField label="Date Range">
                                    <div className="relative">
                                        <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-indigo-300 pointer-events-none" />
                                        <select className="filter-input-apex pl-11">
                                            <option value="">Any Time</option>
                                            <option value="last30">Last 30 Days</option>
                                            <option value="last90">Last 3 Quarterly</option>
                                            <option value="currentYear">Current Fiscal Year</option>
                                        </select>
                                    </div>
                                </FilterField>

                                <FilterField label="Member / Nominee Name">
                                    <div className="relative">
                                        <Users className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-indigo-300 pointer-events-none" />
                                        <input type="text" placeholder="e.g., Dr. Virendra..." className="filter-input-apex pl-11" />
                                    </div>
                                </FilterField>

                                <FilterField label="Recommendation Theme">
                                    <div className="relative">
                                        <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-indigo-300 pointer-events-none" />
                                        <select className="filter-input-apex pl-11">
                                            <option value="">All Themes</option>
                                            <option value="access">Accessibility</option>
                                            <option value="edu">Education</option>
                                            <option value="emp">Employment</option>
                                        </select>
                                    </div>
                                </FilterField>

                                <FilterField label="Action Point Status">
                                    <div className="relative">
                                        <Activity className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-indigo-300 pointer-events-none" />
                                        <select className="filter-input-apex pl-11">
                                            <option value="">All Statuses</option>
                                            <option value="OPEN">Open / Pending</option>
                                            <option value="CLOSED">Closed / Resolved</option>
                                        </select>
                                    </div>
                                </FilterField>
                            </div>
                        )}

                    </div>
                </div>
            </Card>

            {/* RESULTS DATA TABLE */}
            <Card className="rounded-[40px] border-2 border-slate-100 shadow-sm overflow-hidden bg-white">
                <CardHeader className="p-8 border-b-2 border-slate-50 bg-slate-50/50 flex flex-row items-center justify-between">
                    <div>
                        <CardTitle className="text-sm font-black uppercase tracking-[0.2em] text-slate-900">Search Results</CardTitle>
                        <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-1">Showing 4 records found</p>
                    </div>
                    <Badge variant="outline" className="border-2 border-indigo-100 text-indigo-700 bg-white font-black text-[9px] uppercase px-4 py-1.5 rounded-lg">
                        Scope: {searchScopes.find(s => s.id === activeScope)?.label}
                    </Badge>
                </CardHeader>
                <CardContent className="p-0 overflow-x-auto relative min-h-[400px]">
                    <div className="absolute inset-0 opacity-[0.01] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/topography.png')]" />
                    <Table className="relative z-10">
                        <TableHeader className="bg-white">
                            <TableRow className="border-b-2 border-slate-100">
                                <TableHead className="px-8 py-5 text-[9px] font-black uppercase tracking-[0.2em] text-slate-400">Record Identity</TableHead>
                                <TableHead className="py-5 text-[9px] font-black uppercase tracking-[0.2em] text-slate-400">Type / Scope</TableHead>
                                <TableHead className="py-5 text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 w-1/3">Context Snippet</TableHead>
                                <TableHead className="py-5 text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 text-center">Date Logged</TableHead>
                                <TableHead className="px-8 py-5 text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 text-right">Action</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody className="divide-y divide-slate-100">
                            
                            {/* MOCK RESULTS MIXING DIFFERENT SCOPES */}
                            <ResultRow 
                                id="NABD/REC/2024-110" 
                                type="RECOMMENDATIONS" 
                                icon={<Lightbulb />}
                                context="Mandatory Ramps in Tier-2 Railway Stations" 
                                date="28 Aug 2024"
                                color="text-purple-600" bg="bg-purple-50" border="border-purple-200"
                            />
                            
                            <ResultRow 
                                id="ACT-110-01" 
                                type="ACTIONS" 
                                icon={<Target />}
                                context="Issue circular for mandatory ramps in newly renovated stations. (Ministry of Railways)" 
                                date="30 Nov 2024"
                                color="text-amber-600" bg="bg-amber-50" border="border-amber-200"
                                statusBadge="OPEN"
                            />

                            <ResultRow 
                                id="NABD/MTG/2024-46" 
                                type="MEETINGS" 
                                icon={<Calendar />}
                                context="Special Meeting: Review of Digital Accessibility Standards across State Portals." 
                                date="22 Aug 2024"
                                color="text-emerald-600" bg="bg-emerald-50" border="border-emerald-200"
                            />

                            <ResultRow 
                                id="USR-MBR-004" 
                                type="MEMBERS" 
                                icon={<Users />}
                                context="Dr. Virendra Kumar (Chairperson) - Ministry / Gov Dept." 
                                date="12 Jan 2022"
                                color="text-blue-600" bg="bg-blue-50" border="border-blue-200"
                            />

                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    );
}

/* UI SUB-COMPONENTS */

function FilterField({ label, children }: any) {
    return (
        <div className="space-y-2">
            <label className="flex items-center gap-2 text-[9px] font-black uppercase tracking-widest text-indigo-300 ml-1">
                {label}
            </label>
            {children}
        </div>
    );
}

function ResultRow({ id, type, icon, context, date, color, bg, border, statusBadge }: any) {
    return (
        <TableRow className="border-none hover:bg-slate-50 transition-all group">
            <TableCell className="px-8 py-5">
                <span className="font-mono text-[11px] font-black text-slate-900">{id}</span>
            </TableCell>
            <TableCell className="py-5">
                <Badge variant="outline" className={`border-2 ${border} ${bg} ${color} text-[8px] font-black uppercase tracking-widest px-3 py-1 flex items-center gap-2 w-fit`}>
                    {React.cloneElement(icon, { size: 12 })}
                    {type}
                </Badge>
            </TableCell>
            <TableCell className="py-5">
                <div className="flex flex-col gap-1.5">
                    <span className="text-xs font-bold text-slate-700 line-clamp-2 leading-relaxed">{context}</span>
                    {statusBadge && (
                        <Badge className="bg-amber-100 text-amber-700 hover:bg-amber-100 border-none text-[8px] font-black uppercase tracking-widest px-2 py-0.5 w-fit">
                            STATUS: {statusBadge}
                        </Badge>
                    )}
                </div>
            </TableCell>
            <TableCell className="py-5 text-center">
                <span className="font-mono text-[10px] font-bold text-slate-500">{date}</span>
            </TableCell>
            <TableCell className="px-8 py-5 text-right">
                <Button variant="ghost" className="h-8 w-8 p-0 rounded-lg text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 transition-colors">
                    <ArrowRight size={16} />
                </Button>
            </TableCell>
        </TableRow>
    );
}

/* 
Add to globals.css if not already present:
@layer components {
  .filter-input-apex {
    @apply w-full border border-white/20 bg-white/10 rounded-xl px-4 py-2.5 text-xs font-bold text-white focus:outline-none focus:bg-white/20 focus:border-indigo-400 transition-all shadow-inner placeholder:text-white/40 appearance-none cursor-pointer [&>option]:text-slate-900;
  }
}
*/