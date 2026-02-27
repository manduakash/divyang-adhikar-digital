// components/dashboard/ccpd/CCPDHeader.tsx
"use client";
import React from 'react';
import { Search, Bell, ShieldCheck, BadgeCheck, Zap, Globe, ChevronDown } from "lucide-react";
import { Input } from "@/components/ui/input";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

export function CCPDHeader() {
    return (
        <header className="h-24 bg-white border-b-2 border-slate-100 flex items-center justify-between px-8 sticky top-0 z-30 font-sans shadow-sm">

            {/* NATIONAL SEARCH NODE */}
            <div className="flex items-center gap-6 w-1/3">
                <div className="relative w-full max-w-md hidden md:block group">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 group-focus-within:text-blue-600 transition-colors" />
                    <Input
                        className="pl-11 h-12 bg-slate-50 border-2 border-slate-200 rounded-2xl focus:ring-blue-600 font-medium transition-all"
                        placeholder="Global statutory search (Case, PwD, Est)..."
                    />
                </div>
            </div>

            {/* APEX AUTHORITY BADGES */}
            <div className="hidden xl:flex items-center gap-4">
                <div className="bg-gradient-to-r from-slate-800 via-indigo-900 to-blue-900 px-6 py-2.5 rounded-[20px] shadow-xl relative overflow-hidden group">
                    <div className="absolute inset-0 opacity-[0.06] pointer-events-none"
                        style={{ backgroundImage: `radial-gradient(black 2px, transparent 0)`, backgroundSize: '4px 4px' }} />
                    <div className="relative z-10 flex flex-col">
                        <span className="text-[8px] font-black text-blue-400 uppercase tracking-widest leading-none">Commission Authority</span>
                        <span className="text-[10px] font-black text-white uppercase tracking-tighter mt-1 flex items-center gap-1.5">
                            <ShieldCheck size={12} className="text-blue-400" /> Quasi-Judicial Mode Active
                        </span>
                    </div>
                </div>

                <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-700 px-6 py-2.5 rounded-[20px] shadow-xl relative overflow-hidden group">
                    <div className="relative z-10 flex flex-col">
                        <span className="text-[8px] font-black text-slate-300 tracking-widest leading-none">eSign Connectivity</span>
                        <span className="text-[10px] font-black text-white uppercase tracking-tighter mt-1 flex items-center gap-1.5">
                            <BadgeCheck size={12} className="text-emerald-300" /> Secured & Linked
                        </span>
                    </div>
                </div>
            </div>

            {/* APEX IDENTITY */}
            <div className="flex items-center gap-5">
                <div className="relative group">
                    <Bell size={22} className="text-slate-400 cursor-pointer hover:text-slate-900 transition-colors" />
                    <span className="absolute -top-1 -right-1 h-2.5 w-2.5 bg-red-500 rounded-full border-2 border-white shadow-sm" />
                </div>

                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="flex items-center gap-3 pl-3 pr-1 hover:bg-slate-50 rounded-[22px] h-16 transition-all border-2 border-transparent hover:border-slate-100">
                            <div className="text-right hidden sm:block">
                                <p className="text-sm font-black text-slate-900 leading-tight tracking-tight uppercase">Chief Commissioner</p>
                                <p className="text-[9px] font-bold text-blue-600 uppercase tracking-tighter">Directorate of PwDs</p>
                            </div>
                            <div className="h-12 w-12 rounded-2xl bg-indigo-900 flex items-center justify-center text-white font-black shadow-xl shadow-indigo-900/20 uppercase">
                                CC
                            </div>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-64 p-3 rounded-3xl shadow-2xl border-2 border-slate-100">
                        <DropdownMenuLabel className="px-3 py-3 border-b mb-2">
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Administrative Hub</p>
                            <p className="text-sm font-bold text-slate-800">Office of the Chief Commissioner</p>
                        </DropdownMenuLabel>
                        <DropdownMenuItem className="py-3 rounded-2xl cursor-pointer font-bold text-slate-600">Contact Us</DropdownMenuItem>
                        <DropdownMenuItem className="py-3 rounded-2xl cursor-pointer font-bold text-slate-600">Settings</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="py-3 rounded-2xl cursor-pointer font-black text-red-600 uppercase text-[10px] tracking-widest">Logout</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </header>
    );
}