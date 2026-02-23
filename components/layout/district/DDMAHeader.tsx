// components/dashboard/DDMAHeader.tsx
"use client";
import React from 'react';
import {
    Search, Bell, Sparkles, UserCircle,
    MapPin, ShieldAlert, Siren, Zap, ChevronDown, Radio,
    Home
} from "lucide-react";
import { Input } from "@/components/ui/input";
import {
    DropdownMenu, DropdownMenuContent, DropdownMenuItem,
    DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

export function DDMAHeader() {
    return (
        <header className="h-24 bg-white border-b border-slate-200 flex items-center justify-between px-8 sticky top-0 z-30 font-sans">

            {/* 1. GEOSPATIAL SEARCH */}
            <div className="flex items-center gap-6 w-1/3">
                <div className="relative w-full max-w-md hidden md:block">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                    <Input
                        className="pl-11 h-12 bg-slate-50 border-slate-100 rounded-2xl focus:ring-orange-500 placeholder:text-slate-400 font-medium"
                        placeholder="Search PwD ID or Shelter Name..."
                    />
                </div>
            </div>

            {/* 2. EMERGENCY STATUS BAR */}
            <div className="hidden xl:flex items-center gap-6 bg-red-100 text-white px-6 py-2.5 rounded-[24px] shadow-md shadow-red-200">
                <div className="flex flex-col">
                    <span className="text-[8px] font-black text-red-500 uppercase tracking-widest leading-none">Emergency Level</span>
                    <div className="flex items-center gap-1.5 mt-1.5">
                        <Radio className="h-3.5 w-3.5 text-red-500 animate-pulse" />
                        <span className="text-xs text-red-500 font-black uppercase tracking-tighter">RED ALERT ACTIVE</span>
                    </div>
                </div>
                <div className="h-8 w-[1px] bg-white/20" />
                <div className="flex flex-col">
                    <span className="text-[8px] font-black text-red-500 uppercase tracking-widest leading-none">SOS Queue</span>
                    <div className="flex items-center gap-1.5 mt-1.5">
                        <span className="text-xs text-red-500 font-black uppercase tracking-tighter underline underline-offset-2 decoration-white/50">14 UNRESPONDED</span>
                    </div>
                </div>
            </div>

            {/* 3. DDMA IDENTITY & QUICK EARLY WARNING */}
            <div className="flex items-center gap-4">

                <div className="h-10 w-[1px] bg-slate-200 mx-1" />

                <div className="relative">
                    <Button variant="ghost" size="icon" className="h-12 w-12 text-slate-400 hover:bg-slate-50 rounded-2xl border border-transparent">
                        <Bell className="h-6 w-6" />
                        <span className="absolute top-3 right-3 h-2.5 w-2.5 bg-red-500 border-2 border-white rounded-full" />
                    </Button>
                </div>

                {/* DDMA Officer Profile */}
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="flex items-center gap-3 pl-3 pr-1 hover:bg-slate-50 rounded-[22px] h-16 transition-all">
                            <div className="text-right hidden sm:block">
                                <p className="text-sm font-black text-slate-900 leading-tight">Control Officer</p>
                                <p className="text-[10px] font-bold text-orange-600 uppercase tracking-tighter">Emergency Response</p>
                            </div>
                            <div className="h-12 w-12 rounded-2xl bg-orange-600 flex items-center justify-center text-white font-black shadow-lg shadow-orange-100">
                                CO
                            </div>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-64 p-3 rounded-3xl shadow-2xl border-slate-200">
                        <DropdownMenuLabel className="px-3 py-3 border-b mb-2">
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Zone Authority</p>
                            <p className="text-sm font-bold text-slate-800">Lucknow Urban Hub</p>
                        </DropdownMenuLabel>
                        <DropdownMenuItem className="py-3 rounded-2xl cursor-pointer font-bold text-slate-600">
                            <Siren className="mr-3 h-5 w-5 text-red-500" /> Active Disasters
                        </DropdownMenuItem>
                        <DropdownMenuItem className="py-3 rounded-2xl cursor-pointer font-bold text-slate-600">
                            <Home className="mr-3 h-5 w-5 text-orange-500" /> Shelter Registry
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="py-3 rounded-2xl cursor-pointer font-black text-red-500 uppercase text-[10px]">
                            Exit Command
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </header>
    );
}