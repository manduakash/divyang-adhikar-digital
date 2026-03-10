// components/dashboard/ndma/NDMAHeader.tsx
"use client";
import React from 'react';
import { Search, Bell, ShieldAlert, PenTool, Globe, Activity } from "lucide-react";
import { Input } from "@/components/ui/input";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

export function NDMAHeader() {
    return (
        <header className="h-24 bg-white border-b border-indigo-50 flex items-center justify-between px-8 sticky top-0 z-30 font-sans shadow-sm">

            {/* GLOBAL SEARCH */}
            <div className="flex items-center gap-6 w-1/3">
                <div className="relative w-full max-w-md hidden md:block">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-indigo-300" />
                    <Input className="pl-11 h-12 bg-indigo-50/50 border-indigo-100 rounded-2xl focus:ring-orange-500 font-medium text-slate-700 placeholder:text-indigo-300" placeholder="Search Advisories, SOPs, States..." />
                </div>
            </div>

            {/* AUTHORITY STATUS BAR - VIBRANT GRADIENT */}
            <div className="hidden xl:flex items-center gap-8 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 text-white px-8 py-3 rounded-[28px] shadow-lg shadow-emerald-200">
                <div className="flex flex-col">
                    <span className="text-[8px] font-black text-emerald-100 uppercase tracking-widest leading-none">Response Authority</span>
                    <div className="flex items-center gap-1.5 mt-1.5">
                        <ShieldAlert className="h-3.5 w-3.5 text-white" />
                        <span className="text-xs font-black uppercase tracking-tighter drop-shadow-sm">National Command Active</span>
                    </div>
                </div>
                <div className="h-8 w-[1px] bg-white/30" />
                <div className="flex flex-col">
                    <span className="text-[8px] font-black text-emerald-100 uppercase tracking-widest leading-none">Network Status</span>
                    <div className="flex items-center gap-1.5 mt-1.5">
                        <div className="h-2 w-2 rounded-full bg-white animate-ping" />
                        <span className="text-xs font-black uppercase tracking-tighter drop-shadow-sm">States Connected</span>
                    </div>
                </div>
            </div>

            {/* AI TOOLS & IDENTITY */}
            <div className="flex items-center gap-4">

                <div className="h-10 w-[1px] bg-indigo-100 mx-1" />

                <div className="relative">
                    <Bell size={20} className="text-indigo-400 hover:text-orange-500 transition-colors cursor-pointer" />
                    <span className="absolute -top-1 -right-1 h-2.5 w-2.5 bg-rose-500 rounded-full border-2 border-white" />
                </div>

                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="flex items-center gap-3 pl-3 pr-1 hover:bg-indigo-50 rounded-[22px] h-16 transition-all border border-transparent hover:border-indigo-100">
                            <div className="text-right hidden sm:block">
                                <p className="text-sm font-black text-slate-800 leading-tight">National Authority</p>
                                <p className="text-[10px] font-bold text-orange-600 uppercase tracking-tighter">Secretariat Desk</p>
                            </div>
                            <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-white font-black shadow-md shadow-orange-200">
                                NA
                            </div>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-64 p-3 rounded-3xl shadow-2xl border-indigo-100 bg-white">
                        <DropdownMenuLabel className="px-3 py-3 border-b border-indigo-50 mb-2">
                            <p className="text-[10px] font-black text-indigo-400 uppercase tracking-widest">Account Identity</p>
                            <p className="text-sm font-black text-slate-800">NDMA Secretariat</p>
                        </DropdownMenuLabel>
                        <DropdownMenuItem className="py-3 rounded-2xl cursor-pointer font-bold text-slate-600 hover:bg-indigo-50 hover:text-indigo-700">
                            <ShieldAlert className="mr-3 h-5 w-5 text-orange-500" /> Delegation Hub
                        </DropdownMenuItem>
                        <DropdownMenuItem className="py-3 rounded-2xl cursor-pointer font-bold text-slate-600 hover:bg-indigo-50 hover:text-indigo-700">
                            <Activity className="mr-3 h-5 w-5 text-emerald-500" /> Operational Status
                        </DropdownMenuItem>
                        <DropdownMenuSeparator className="bg-indigo-50" />
                        <DropdownMenuItem className="py-3 rounded-2xl cursor-pointer font-black text-rose-600 hover:bg-rose-50 uppercase text-[10px]">
                            Log Out Securely
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </header>
    );
}