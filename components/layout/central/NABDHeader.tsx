// components/dashboard/nabd/NABDHeader.tsx
"use client";
import React from 'react';
import { Search, Bell, ShieldCheck, PenTool } from "lucide-react";
import { Input } from "@/components/ui/input";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

export function NABDHeader() {
    return (
        <header className="h-24 bg-white border-b border-slate-200 flex items-center justify-between px-8 sticky top-0 z-30 font-sans shadow-sm">

            {/* 1. NABD GLOBAL SEARCH */}
            <div className="flex items-center gap-6 w-1/3">
                <div className="relative w-full max-w-md hidden md:block">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                    <Input className="pl-11 h-12 bg-slate-50 border-slate-100 rounded-2xl focus:ring-indigo-900 font-medium" placeholder="Search Meetings, Recommendations, Members..." />
                </div>
            </div>

            {/* 2. BOARD STATUS BAR */}
            <div className="hidden xl:flex items-center gap-8 bg-slate-900 text-white px-8 py-3 rounded-[28px] shadow-2xl">
                <div className="flex flex-col">
                    <span className="text-[8px] font-black text-indigo-400 uppercase tracking-widest leading-none">Board Authority</span>
                    <div className="flex items-center gap-1.5 mt-1.5">
                        <ShieldCheck className="h-3.5 w-3.5 text-blue-400" />
                        <span className="text-xs font-black uppercase tracking-tighter">Policy & Governance Active</span>
                    </div>
                </div>
                <div className="h-8 w-[1px] bg-white/10" />
                <div className="flex flex-col">
                    <span className="text-[8px] font-black text-indigo-400 uppercase tracking-widest leading-none">Secretariat Connectivity</span>
                    <div className="flex items-center gap-1.5 mt-1.5">
                        <div className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
                        <span className="text-xs font-black uppercase tracking-tighter text-green-400">Secured & Linked</span>
                    </div>
                </div>
            </div>

            {/* 3. PROFILE & NOTIFICATIONS */}
            <div className="flex items-center gap-4">

                <div className="h-10 w-[1px] bg-slate-200 mx-1" />

                <div className="relative">
                    <Bell size={20} className="text-slate-400 cursor-pointer" />
                    <span className="absolute -top-1 -right-1 h-2.5 w-2.5 bg-red-500 rounded-full border-none border-white" />
                </div>

                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="flex items-center gap-3 pl-3 pr-1 hover:bg-slate-50 rounded-[22px] h-16 transition-all">
                            <div className="text-right hidden sm:block">
                                <p className="text-sm font-black text-slate-900 leading-tight">Member Secretary</p>
                                <p className="text-[10px] font-bold text-indigo-600 uppercase tracking-tighter">NABD Secretariat</p>
                            </div>
                            <div className="h-12 w-12 rounded-2xl bg-indigo-900 flex items-center justify-center text-white font-black shadow-inner">MS</div>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-64 p-3 rounded-3xl shadow-2xl border-slate-200">
                        <DropdownMenuLabel className="px-3 py-3 border-b mb-2">
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Account Identity</p>
                            <p className="text-sm font-bold text-slate-800">Secretariat Control</p>
                        </DropdownMenuLabel>
                        <DropdownMenuItem className="py-3 rounded-2xl cursor-pointer font-bold text-slate-600">
                            <ShieldCheck className="mr-3 h-5 w-5 text-indigo-600" /> Advisory Delegation
                        </DropdownMenuItem>
                        <DropdownMenuItem className="py-3 rounded-2xl cursor-pointer font-bold text-slate-600">
                            <PenTool className="mr-3 h-5 w-5 text-purple-600" /> System Preferences
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="py-3 rounded-2xl cursor-pointer font-black text-red-600 uppercase text-[10px]">
                            Logout Secretariat Hub
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </header>
    );
}