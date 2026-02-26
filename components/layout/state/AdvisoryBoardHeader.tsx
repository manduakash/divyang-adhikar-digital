// components/dashboard/sab/SAB_Header.tsx
"use client";
import React from 'react';
import { Search, Bell, Sparkles, UserCircle, Landmark, ShieldCheck, ChevronDown, Activity, Globe, Users } from "lucide-react";
import { Input } from "@/components/ui/input";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

export function SABHeader() {
  return (
    <header className="h-24 bg-white border-b border-slate-200 flex items-center justify-between px-8 sticky top-0 z-30 font-sans shadow-sm">
      
      {/* GLOBAL DECISION SEARCH */}

      {/* SECRETARIAT STATUS BAR */}
      <div className="hidden xl:flex items-center gap-8 bg-slate-600 text-white px-8 py-3 rounded-[28px] shadow-2xl relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        <div className="flex flex-col relative z-10">
          <span className="text-[8px] font-black text-emerald-400 uppercase tracking-widest leading-none">Board Sync</span>
          <div className="flex items-center gap-1.5 mt-1.5">
            <Globe className="h-3.5 w-3.5 text-blue-400" />
            <span className="text-xs font-black uppercase tracking-tighter">National Board Linked</span>
          </div>
        </div>
        <div className="h-8 w-[1px] bg-white/10 relative z-10" />
        <div className="flex flex-col relative z-10">
          <span className="text-[8px] font-black text-emerald-400 uppercase tracking-widest leading-none">Action Points</span>
          <div className="flex items-center gap-1.5 mt-1.5">
             <div className="h-1.5 w-1.5 rounded-full bg-orange-500 animate-pulse" />
             <span className="text-xs font-black uppercase tracking-tighter text-orange-400">12 OPEN ITEMS</span>
          </div>
        </div>
      </div>

      {/* AI & IDENTITY */}
      <div className="flex items-center gap-4">
        <Button className="bg-gradient-to-r from-emerald-600 to-teal-700 hover:opacity-90 text-white h-12 rounded-2xl px-5 gap-2 font-black uppercase tracking-widest text-[9px] shadow-lg shadow-emerald-100 transition-all">
          <Sparkles size={16} /> AI Draft Minutes
        </Button>

        <div className="h-10 w-[1px] bg-slate-200 mx-1" />

        <div className="relative"><Bell size={20} className="text-slate-400 cursor-pointer" /><span className="absolute -top-1 -right-1 h-2.5 w-2.5 bg-red-500 rounded-full border-2 border-white" /></div>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="flex items-center gap-3 pl-3 pr-1 hover:bg-slate-50 rounded-[22px] h-16 transition-all">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-black text-slate-900 leading-tight">Member Secretary</p>
                <p className="text-[10px] font-bold text-emerald-600 uppercase tracking-tighter">SAB Nodal Office</p>
              </div>
              <div className="h-12 w-12 rounded-2xl bg-emerald-600 flex items-center justify-center text-white font-black shadow-inner">MS</div>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-64 p-3 rounded-3xl shadow-2xl border-slate-200 animate-in slide-in-from-top-2 duration-300">
             <DropdownMenuLabel className="px-3 py-3 border-b mb-2">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">Authority Context</p>
                <p className="text-sm font-black text-slate-800 mt-1 uppercase leading-none">State Advisory Board</p>
             </DropdownMenuLabel>
             <DropdownMenuItem className="py-4 rounded-2xl cursor-pointer font-bold text-slate-600">
                <ShieldCheck className="mr-3 h-5 w-5 text-emerald-600" /> Statutory Credentials
             </DropdownMenuItem>
             <DropdownMenuItem className="py-4 rounded-2xl cursor-pointer font-bold text-slate-600">
                <Users className="mr-3 h-5 w-5 text-blue-600" /> Member Directory
             </DropdownMenuItem>
             <DropdownMenuSeparator />
             <DropdownMenuItem className="py-4 rounded-2xl cursor-pointer font-black text-red-600 uppercase text-[10px] tracking-widest">
                Logout Authority Hub
             </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}