// app/dashboard/ndma/search/advanced/page.tsx
"use client";
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
    Table, TableBody, TableCell, TableHead, TableHeader, TableRow
} from "@/components/ui/table";
import {
    Search, Filter, Database, FileSignature, BookOpen, 
    Siren, Map, Tent, DownloadCloud, Activity,
    Calendar, Building2, Wind, ShieldAlert, ArrowRight, X
} from "lucide-react";

export default function NDMAAdvancedSearchPage() {
    const [searchQuery, setSearchQuery] = useState("");
    const [activeScope, setActiveScope] = useState("ALL");
    const [showFilters, setShowFilters] = useState(false);

    // Search scopes mapped to NDMA requirements
    const searchScopes = [
        { id: "ALL", label: "All Records", icon: Database },
        { id: "ADVISORIES", label: "Advisories & Directions", icon: FileSignature },
        { id: "SOPS", label: "SOPs & Guidelines", icon: BookOpen },
        { id: "ALERTS", label: "Early Warnings", icon: Siren },
        { id: "REGIONS", label: "States / Districts", icon: Map },
        { id: "SHELTERS", label: "Shelters", icon: Tent },
    ];

    return (
        <div className="space-y-8 animate-in fade-in duration-1000 pb-20 font-sans selection:bg-orange-100">

            {/* PAGE HEADER */}
            <div className="flex flex-col xl:flex-row justify-between items-start xl:items-end gap-6 relative">
                <div className="space-y-2">
                    <div className="inline-flex items-center gap-2 bg-orange-50 text-orange-700 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border-2 border-orange-200 shadow-sm">
                        <Search size={14} /> Global Intelligence
                    </div>
                    <h1 className="text-5xl font-black text-slate-800 tracking-tighter uppercase leading-none">Advanced Registry Search</h1>
                    <p className="text-slate-500 font-medium text-lg italic underline underline-offset-8 decoration-orange-200">
                        Retrieve disaster–PwD data, advisories, alerts, and infrastructure across the country.
                    </p>
                </div>
                <div className="flex gap-4">
                    <Button className="h-14 px-8 rounded-full bg-gradient-to-r from-orange-500 via-amber-500 to-red-500 text-white font-black uppercase tracking-widest text-[10px] shadow-xl hover:shadow-[0_0_20px_theme(colors.orange.400)] transition-all gap-2 border-none">
                        <DownloadCloud size={16} /> Export Results (CSV)
                    </Button>
                </div>
            </div>

            {/* SEARCH CONSOLE CARD - VIBRANT GRADIENT BACKGROUND */}
            <Card className="rounded-[40px] border-none shadow-2xl overflow-hidden bg-white z-20 relative">
                <div className="p-10 bg-gradient-to-r from-indigo-600 via-purple-600 to-fuchsia-600 text-white relative overflow-hidden">
                    <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] bg-fixed" />
                    
                    <div className="relative z-10 space-y-8">
                        
                        {/* 1. PRIMARY SEARCH BAR */}
                        <div className="flex flex-col md:flex-row gap-4">
                            <div className="relative flex-1 group">
                                <Search className="absolute left-6 top-1/2 -translate-y-1/2 h-6 w-6 text-purple-200 group-focus-within:text-white transition-colors" />
                                <input 
                                    type="text" 
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    placeholder="Search by Keyword, Ref No, Location, or Disaster Name..." 
                                    className="w-full pl-16 pr-6 py-6 border-2 border-white/20 bg-white/10 rounded-3xl text-lg font-bold text-white placeholder:text-white/60 focus:outline-none focus:bg-white/20 focus:border-white/50 transition-all shadow-inner backdrop-blur-md"
                                />
                                {searchQuery && (
                                    <button onClick={() => setSearchQuery("")} className="absolute right-6 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors">
                                        <X size={20} />
                                    </button>
                                )}
                            </div>
                            <Button 
                                onClick={() => setShowFilters(!showFilters)}
                                className={`h-auto py-6 px-8 rounded-3xl font-black uppercase tracking-widest text-xs transition-all flex gap-3 ${showFilters ? 'bg-white text-purple-700 shadow-xl border-2 border-white' : 'bg-white/10 text-white hover:bg-white/20 border-2 border-white/20'}`}
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
                                    className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all border shadow-sm backdrop-blur-sm ${
                                        activeScope === scope.id 
                                            ? 'bg-white text-purple-800 border-white' 
                                            : 'bg-white/10 text-white border-white/20 hover:bg-white/20 hover:border-white/40'
                                    }`}
                                >
                                    <scope.icon size={14} />
                                    {scope.label}
                                </button>
                            ))}
                        </div>

                        {/* 3. ADVANCED FILTERS PANEL */}
                        {showFilters && (
                            <div className="pt-8 mt-2 border-t border-white/20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-in slide-in-from-top-4 duration-300">
                                
                                <FilterField label="Disaster Type">
                                    <div className="relative">
                                        <Wind className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-purple-200 pointer-events-none" />
                                        <select className="filter-input-apex pl-11">
                                            <option value="">All Disasters</option>
                                            <option value="cyclone">Cyclone</option>
                                            <option value="flood">Floods</option>
                                            <option value="earthquake">Earthquake</option>
                                            <option value="heatwave">Heatwave</option>
                                        </select>
                                    </div>
                                </FilterField>

                                <FilterField label="State / District">
                                    <div className="relative">
                                        <Map className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-purple-200 pointer-events-none" />
                                        <select className="filter-input-apex pl-11">
                                            <option value="">All Regions</option>
                                            <option value="odisha">Odisha</option>
                                            <option value="gujarat">Gujarat</option>
                                            <option value="assam">Assam</option>
                                        </select>
                                    </div>
                                </FilterField>

                                <FilterField label="Time Period">
                                    <div className="relative">
                                        <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-purple-200 pointer-events-none" />
                                        <select className="filter-input-apex pl-11">
                                            <option value="">Any Time</option>
                                            <option value="last30">Last 30 Days</option>
                                            <option value="last90">Last 3 Months</option>
                                            <option value="currentYear">Current Year</option>
                                        </select>
                                    </div>
                                </FilterField>

                                <FilterField label="Preparedness / Status">
                                    <div className="relative">
                                        <Activity className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-purple-200 pointer-events-none" />
                                        <select className="filter-input-apex pl-11">
                                            <option value="">Any Status</option>
                                            <option value="active">Active / Compliant</option>
                                            <option value="pending">Pending / Gaps Found</option>
                                            <option value="critical">Critical Alert</option>
                                        </select>
                                    </div>
                                </FilterField>
                            </div>
                        )}

                    </div>
                </div>
            </Card>

            {/* RESULTS DATA TABLE */}
            <Card className="rounded-[40px] border-2 border-slate-100 shadow-xl overflow-hidden bg-white">
                
                <CardHeader className="p-0">
                    <div className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 p-6 flex flex-row items-center justify-between border-b-2 border-indigo-200 relative overflow-hidden">
                        <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] bg-fixed" />
                        <div className="relative z-10">
                            <CardTitle className="text-sm font-black uppercase tracking-[0.2em] text-white drop-shadow-sm">Global Retrieval Results</CardTitle>
                            <p className="text-[10px] font-bold text-indigo-100 uppercase tracking-widest mt-1">Showing 4 records found across network</p>
                        </div>
                        <Badge className="relative z-10 bg-white/20 text-white hover:bg-white/30 border-none font-black text-[9px] uppercase px-4 py-2 rounded-xl backdrop-blur-sm shadow-sm">
                            Scope: {searchScopes.find(s => s.id === activeScope)?.label}
                        </Badge>
                    </div>
                </CardHeader>

                <CardContent className="p-0 overflow-x-auto relative min-h-[400px]">
                    <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/topography.png')]" />
                    <Table className="relative z-10">
                        <TableHeader className="bg-slate-50/80 backdrop-blur-sm">
                            <TableRow className="border-b-2 border-slate-200">
                                <TableHead className="px-8 py-5 text-[9px] font-black uppercase tracking-[0.2em] text-slate-500">Record Identity</TableHead>
                                <TableHead className="py-5 text-[9px] font-black uppercase tracking-[0.2em] text-slate-500">Type / Scope</TableHead>
                                <TableHead className="py-5 text-[9px] font-black uppercase tracking-[0.2em] text-slate-500 w-1/3">Context Snippet</TableHead>
                                <TableHead className="py-5 text-[9px] font-black uppercase tracking-[0.2em] text-slate-500 text-center">Date Logged</TableHead>
                                <TableHead className="px-8 py-5 text-[9px] font-black uppercase tracking-[0.2em] text-slate-500 text-right">Action</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody className="divide-y divide-slate-100">
                            
                            {/* MOCK RESULTS MIXING DIFFERENT SCOPES */}
                            <ResultRow 
                                id="NDMA/PWD/ADV/2024-041" 
                                type="ADVISORIES" 
                                icon={<FileSignature />}
                                context="Mandatory Wheelchair Access in Coastal Cyclone Shelters." 
                                date="30 Nov 2024"
                                color="text-indigo-600" bg="bg-indigo-50" border="border-indigo-200"
                                statusBadge="COMPLIANT" badgeColor="bg-emerald-100 text-emerald-700"
                            />
                            
                            <ResultRow 
                                id="NDMA/EWS/2024-007" 
                                type="ALERTS" 
                                icon={<Siren />}
                                context="Severe Cyclone Warning: Coastal Odisha. Evacuation priority active." 
                                date="14 Nov 2024"
                                color="text-red-600" bg="bg-red-50" border="border-red-200"
                                statusBadge="ACTIVE" badgeColor="bg-red-500 text-white animate-pulse"
                            />

                            <ResultRow 
                                id="SHELTER-PURI-01" 
                                type="SHELTERS" 
                                icon={<Tent />}
                                context="Kakatpur Cyclone Hub, Puri. Capacity: 50 Accessible Beds." 
                                date="10 Oct 2024"
                                color="text-teal-600" bg="bg-teal-50" border="border-teal-200"
                                statusBadge="GAPS FOUND" badgeColor="bg-amber-100 text-amber-700"
                            />

                            <ResultRow 
                                id="SOP-HEAT-2024" 
                                type="SOPS" 
                                icon={<BookOpen />}
                                context="Heatwave Preparedness & Vulnerable Group Protection Guidelines." 
                                date="01 Mar 2024"
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
            <label className="flex items-center gap-2 text-[9px] font-black uppercase tracking-widest text-purple-200 ml-1">
                {label}
            </label>
            {children}
        </div>
    );
}

function ResultRow({ id, type, icon, context, date, color, bg, border, statusBadge, badgeColor }: any) {
    return (
        <TableRow className="border-none hover:bg-slate-50 transition-all group">
            <TableCell className="px-8 py-5">
                <span className="font-mono text-[11px] font-black text-slate-800 bg-white border border-slate-200 px-2 py-1 rounded shadow-sm">{id}</span>
            </TableCell>
            <TableCell className="py-5">
                <Badge variant="outline" className={`border-2 ${border} ${bg} ${color} text-[8px] font-black uppercase tracking-widest px-3 py-1 flex items-center gap-2 w-fit shadow-sm`}>
                    {React.cloneElement(icon, { size: 12 })}
                    {type}
                </Badge>
            </TableCell>
            <TableCell className="py-5">
                <div className="flex flex-col items-start gap-2">
                    <span className="text-xs font-bold text-slate-700 line-clamp-2 leading-relaxed">{context}</span>
                    {statusBadge && (
                        <Badge className={`border-none text-[8px] font-black uppercase tracking-widest px-2 py-0.5 ${badgeColor}`}>
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
    @apply w-full border border-white/30 bg-white/10 rounded-2xl px-4 py-3 text-xs font-bold text-white focus:outline-none focus:bg-white/20 focus:border-white/50 transition-all shadow-inner placeholder:text-white/50 appearance-none cursor-pointer [&>option]:text-slate-900;
  }
}
*/