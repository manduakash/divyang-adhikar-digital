// components/dashboard/sdma/SDMA_Header.tsx
"use client";
import React from 'react';
import { Search, Bell, Sparkles, ShieldAlert, Globe, Zap, Radio, ChevronDown, Activity, Map } from "lucide-react";
import { Input } from "@/components/ui/input";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

export function SDMAHeader() {
  return (
    <header className="h-24 bg-white border-b border-slate-200 flex items-center justify-between px-8 sticky top-0 z-30 font-sans shadow-sm">
      
      {/* GLOBAL DISASTER SEARCH */}
      <div className="flex items-center gap-6 w-1/3">
        <div className="relative w-full max-w-md hidden md:block">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
          <Input className="pl-11 h-12 bg-slate-50 border-slate-100 rounded-2xl focus:ring-orange-600 font-medium" placeholder="Search Districts, Shelters, Advisories..." />
        </div>
      </div>

      {/* STATEWIDE RISK COMMAND BAR */}
      <div className="hidden xl:flex items-center gap-8 bg-slate-900 text-white px-8 py-3 rounded-[28px] shadow-2xl relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        <div className="flex flex-col relative z-10">
          <span className="text-[8px] font-black text-orange-400 uppercase tracking-widest leading-none">State Preparedness</span>
          <div className="flex items-center gap-1.5 mt-1.5">
            <Globe className="h-3.5 w-3.5 text-blue-400" />
            <span className="text-xs font-black uppercase tracking-tighter">75 / 75 DISTRICTS SYNCED</span>
          </div>
        </div>
        <div className="h-8 w-[1px] bg-white/10 relative z-10" />
        <div className="flex flex-col relative z-10">
          <span className="text-[8px] font-black text-orange-400 uppercase tracking-widest leading-none">Active SOS</span>
          <div className="flex items-center gap-1.5 mt-1.5">
             <Radio className="h-3.5 w-3.5 text-red-500 animate-pulse" />
             <span className="text-xs font-black uppercase tracking-tighter text-red-500">14 UNRESPONDED</span>
          </div>
        </div>
      </div>

      {/* APEX IDENTITY & AI */}
      <div className="flex items-center gap-4">
        <Button className="bg-gradient-to-r from-orange-600 to-red-700 hover:opacity-90 text-white h-12 rounded-2xl px-5 gap-2 font-black uppercase tracking-widest text-[9px] shadow-lg shadow-orange-100 transition-all">
          <Sparkles size={16} /> AI Risk Summary
        </Button>

        <div className="h-10 w-[1px] bg-slate-200 mx-1" />

        <div className="relative"><Bell size={20} className="text-slate-400 cursor-pointer hover:text-slate-900 transition-colors" /><span className="absolute -top-1 -right-1 h-2.5 w-2.5 bg-red-500 rounded-full border-2 border-white shadow-sm" /></div>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="flex items-center gap-3 pl-3 pr-1 hover:bg-slate-50 rounded-[22px] h-16 transition-all">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-black text-slate-900 leading-tight tracking-tight uppercase">CEO / Vice Chair</p>
                <p className="text-[10px] font-bold text-orange-600 uppercase tracking-tighter mt-0.5">State Disaster Node</p>
              </div>
              <div className="h-12 w-12 rounded-2xl bg-orange-600 flex items-center justify-center text-white font-black shadow-inner">SD</div>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-72 p-3 rounded-3xl shadow-2xl border-slate-200 animate-in slide-in-from-top-2 duration-300">
             <DropdownMenuLabel className="px-3 py-3 border-b mb-2">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">Authority Control</p>
                <p className="text-sm font-black text-slate-800 mt-1 uppercase">State Management Unit</p>
             </DropdownMenuLabel>
             <DropdownMenuItem className="py-4 rounded-2xl cursor-pointer font-bold text-slate-600">
                <Activity className="mr-3 h-5 w-5 text-orange-600" /> Preparedness Monitor
             </DropdownMenuItem>
             <DropdownMenuItem className="py-4 rounded-2xl cursor-pointer font-bold text-slate-600">
                <Map className="mr-3 h-5 w-5 text-blue-600" /> Statewide GIS Hub
             </DropdownMenuItem>
             <DropdownMenuSeparator />
             <DropdownMenuItem className="py-4 rounded-2xl cursor-pointer font-black text-red-600 uppercase text-[10px] tracking-widest">
                Log Out
             </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}