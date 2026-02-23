// components/dashboard/DistrictHeader.tsx
"use client";
import React from 'react';
import {
    Search, Bell, Sparkles, UserCircle,
    MapPin, ShieldCheck, Gavel,
    ChevronDown, Menu, Filter, AlertCircle
} from "lucide-react";
import { Input } from "@/components/ui/input";
import {
    DropdownMenu, DropdownMenuContent, DropdownMenuItem,
    DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function DistrictHeader() {
    return (
        <header className="h-24 bg-white border-b border-slate-200 flex items-center justify-between px-8 sticky top-0 z-30 font-sans shadow-sm">

            {/* 1. BROAD DISTRICT SEARCH */}
            <div className="flex items-center gap-6 w-1/3">
                <div className="relative w-full max-w-md hidden md:block group">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 group-focus-within:text-blue-600 transition-colors" />
                    <Input
                        className="pl-11 h-12 bg-slate-50 border-slate-100 rounded-2xl focus:ring-blue-500 placeholder:text-slate-400 font-medium"
                        placeholder="Search District Registry, PwD ID, Case..."
                    />
                </div>
            </div>

            {/* 2. DISTRICT STATUTORY SUMMARY (Command View) */}
            <div className="hidden xl:flex items-center gap-6 bg-slate-900 text-white px-6 py-2.5 rounded-[24px] shadow-xl">
                <div className="flex flex-col">
                    <span className="text-[8px] font-black text-blue-400 uppercase tracking-widest leading-none">District SLA</span>
                    <div className="flex items-center gap-1.5 mt-1.5">
                        <ShieldCheck className="h-3.5 w-3.5 text-green-400" />
                        <span className="text-xs font-black uppercase tracking-tighter">92% COMPLIANT</span>
                    </div>
                </div>
                <div className="h-8 w-[1px] bg-white/10" />
                <div className="flex flex-col">
                    <span className="text-[8px] font-black text-blue-400 uppercase tracking-widest leading-none">Active Orders</span>
                    <div className="flex items-center gap-1.5 mt-1.5">
                        <AlertCircle className="h-3.5 w-3.5 text-orange-400" />
                        <span className="text-xs font-black uppercase tracking-tighter">14 PENDING</span>
                    </div>
                </div>
                <div className="h-8 w-[1px] bg-white/10" />
                <Button size="sm" variant="ghost" className="h-8 px-3 text-[9px] font-black uppercase tracking-widest hover:bg-white/10 text-blue-400">
                    Fact Sheet <ChevronDown size={12} className="ml-1" />
                </Button>
            </div>

            {/* 3. AI TOOLS & SUPERVISOR IDENTITY */}
            <div className="flex items-center gap-4">

                <div className="h-10 w-[1px] bg-slate-200 mx-1" />

                {/* System Notifications */}
                <div className="relative">
                    <Button variant="ghost" size="icon" className="h-12 w-12 text-slate-400 hover:bg-slate-50 rounded-2xl border border-transparent hover:border-slate-100">
                        <Bell className="h-6 w-6" />
                        <span className="absolute top-3 right-3 h-2.5 w-2.5 bg-red-500 border-2 border-white rounded-full animate-pulse" />
                    </Button>
                </div>

                {/* DM Profile */}
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="flex items-center gap-3 pl-3 pr-1 hover:bg-slate-50 rounded-[22px] h-16 transition-all">
                            <div className="text-right hidden sm:block">
                                <p className="text-sm font-black text-slate-900 leading-tight">S.K. Singh, IAS</p>
                                <div className="flex items-center justify-end gap-1 mt-0.5">
                                    <div className="h-1.5 w-1.5 rounded-full bg-green-500" />
                                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Collector & DM</p>
                                </div>
                            </div>
                            <div className="h-12 w-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 font-black shadow-inner">
                                SS
                            </div>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-72 p-3 rounded-3xl shadow-2xl border-slate-200 animate-in slide-in-from-top-2 duration-300">
                        <DropdownMenuLabel className="px-4 py-4">
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-1">Administrative Node</p>
                            <p className="text-sm font-black text-slate-800">Lucknow District (UP)</p>
                        </DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="py-4 rounded-2xl cursor-pointer font-bold text-slate-600 hover:bg-slate-50">
                            <UserCircle className="mr-3 h-5 w-5 text-blue-600 opacity-70" /> Supervisor Profile
                        </DropdownMenuItem>
                        <DropdownMenuItem className="py-4 rounded-2xl cursor-pointer font-bold text-slate-600 hover:bg-slate-50">
                            <Gavel className="mr-3 h-5 w-5 text-purple-600 opacity-70" /> Inspection Registry
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="py-4 rounded-2xl cursor-pointer font-black text-red-500 uppercase text-[10px] tracking-widest hover:bg-red-50">
                            Terminate Session
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </header>
    );
}