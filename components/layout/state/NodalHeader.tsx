// components/dashboard/StateHeader.tsx
"use client";
import React from 'react';
import { Search, Bell, Sparkles, UserCircle, Map, Globe, ShieldCheck, ChevronDown, Activity, Landmark } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
    DropdownMenu, DropdownMenuContent, DropdownMenuItem,
    DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

export function StateHeader() {
    return (
        <header className="h-24 bg-white border-b border-slate-200 flex items-center justify-between px-8 sticky top-0 z-30 font-sans shadow-sm">

            {/* 1. STATE-WIDE SEARCH */}
            <div className="flex items-center gap-6 w-1/3">
                <div className="relative w-full max-w-md hidden md:block">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                    <Input
                        className="pl-11 h-12 bg-slate-50 border-slate-100 rounded-2xl focus:ring-purple-500 font-medium"
                        placeholder="Search District, Sector, or PwD ID..."
                    />
                </div>
            </div>

            {/* 2. STATE AGGREGATION BAR */}
            <div className="hidden xl:flex items-center gap-8 bg-slate-900 text-white px-8 py-3 rounded-[28px] shadow-2xl">
                <div className="flex flex-col">
                    <span className="text-[8px] font-black text-purple-400 uppercase tracking-widest leading-none">Districts Reporting</span>
                    <div className="flex items-center gap-1.5 mt-1.5">
                        <Globe className="h-3.5 w-3.5 text-blue-400" />
                        <span className="text-xs font-black uppercase tracking-tighter">75 / 75 DISTRICTS</span>
                    </div>
                </div>
                <div className="h-8 w-[1px] bg-white/10" />
                <div className="flex flex-col">
                    <span className="text-[8px] font-black text-purple-400 uppercase tracking-widest leading-none">State Avg Compliance</span>
                    <div className="flex items-center gap-1.5 mt-1.5">
                        <ShieldCheck className="h-3.5 w-3.5 text-green-400" />
                        <span className="text-xs font-black uppercase tracking-tighter text-green-400">84% SYSTEM HEALTH</span>
                    </div>
                </div>
            </div>

            {/* 3. IDENTITY */}
            <div className="flex items-center gap-4">

                <div className="h-10 w-[1px] bg-slate-200 mx-1" />

                <div className="relative">
                    <Button variant="ghost" size="icon" className="h-12 w-12 text-slate-400 hover:bg-slate-50 rounded-2xl border border-transparent">
                        <Bell className="h-6 w-6" />
                        <span className="absolute top-3 right-3 h-2.5 w-2.5 bg-red-500 border-none border-white rounded-full animate-pulse" />
                    </Button>
                </div>

                {/* State Secretary Profile */}
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="flex items-center gap-3 pl-3 pr-1 hover:bg-slate-50 rounded-[22px] h-16 transition-all">
                            <div className="text-right hidden sm:block">
                                <p className="text-sm font-black text-slate-900 leading-tight">Secretary, PwD Dept</p>
                                <p className="text-[10px] font-bold text-purple-600 uppercase tracking-tighter">State Nodal Authority</p>
                            </div>
                            <div className="h-12 w-12 rounded-2xl bg-purple-100 flex items-center justify-center text-purple-700 font-black shadow-inner uppercase border border-purple-200">
                                SN
                            </div>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-64 p-3 rounded-3xl shadow-2xl border-slate-200">
                        <DropdownMenuLabel className="px-3 py-3 border-b mb-2">
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Administrative Apex</p>
                            <p className="text-sm font-bold text-slate-800 tracking-tight">Department of Divyangjan</p>
                        </DropdownMenuLabel>
                        <DropdownMenuItem className="py-3 rounded-2xl cursor-pointer font-bold text-slate-600">
                            <Landmark className="mr-3 h-5 w-5 text-purple-600" /> Ministry Briefing
                        </DropdownMenuItem>
                        <DropdownMenuItem className="py-3 rounded-2xl cursor-pointer font-bold text-slate-600">
                            <ShieldCheck className="mr-3 h-5 w-5 text-blue-600" /> GoI Reporting Desk
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="py-3 rounded-2xl cursor-pointer font-black text-red-600 uppercase text-[10px] tracking-widest">
                            Log Out Hub
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </header>
    );
}