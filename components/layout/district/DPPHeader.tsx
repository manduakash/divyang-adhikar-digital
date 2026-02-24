// components/dashboard/PPHeader.tsx
"use client";
import React from 'react';
import {
  Search, Bell, Sparkles, UserCircle,
  Gavel, Scale, ChevronDown,
  ShieldAlert, BookOpen, Clock,
  ShieldCheck
} from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu, DropdownMenuContent, DropdownMenuItem,
  DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

export function PPHeader() {
  return (
    <header className="h-24 bg-white border-b border-slate-200 flex items-center justify-between px-8 sticky top-0 z-30 font-sans">

      {/* 1. LEGAL DISCOVERY SEARCH */}
      <div className="flex items-center gap-6 w-1/3">
        <div className="relative w-full max-w-md hidden md:block group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 group-focus-within:text-blue-600 transition-colors" />
          <Input
            className="pl-11 h-12 bg-slate-50 border-slate-100 rounded-2xl focus:ring-slate-900 placeholder:text-slate-400 font-medium"
            placeholder="Search Case ID, FIR No, or Accused..."
          />
        </div>
      </div>

      {/* 2. COURT LOAD STATUS (Judicial Dashboard Insight) */}
      <div className="hidden xl:flex items-center gap-6 bg-slate-50 border border-slate-100 px-6 py-2.5 rounded-[24px]">
        <div className="flex flex-col">
          <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest leading-none">Trial Load</span>
          <div className="flex items-center gap-1.5 mt-1.5">
            <Scale className="h-3.5 w-3.5 text-blue-600" />
            <span className="text-xs font-black uppercase text-slate-800 tracking-tighter">24 ACTIVE CASES</span>
          </div>
        </div>
        <div className="h-8 w-[1px] bg-slate-200" />
        <div className="flex flex-col">
          <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest leading-none">Hearing Window</span>
          <div className="flex items-center gap-1.5 mt-1.5">
            <Clock className="h-3.5 w-3.5 text-orange-500" />
            <span className="text-xs font-black uppercase text-slate-800 tracking-tighter">05 THIS WEEK</span>
          </div>
        </div>
      </div>

      {/* 3. PP IDENTITY & STATUTORY ACTIONS */}
      <div className="flex items-center gap-4">

        <div className="h-10 w-[1px] bg-slate-200 mx-1" />

        <div className="relative">
          <Button variant="ghost" size="icon" className="h-12 w-12 text-slate-400 hover:bg-slate-50 rounded-2xl border border-transparent hover:border-slate-100 transition-all">
            <Bell className="h-6 w-6" />
            <span className="absolute top-3 right-3 h-2.5 w-2.5 bg-red-600 border-none border-white rounded-full animate-pulse" />
          </Button>
        </div>

        {/* PP Profile Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="flex items-center gap-3 pl-3 pr-1 hover:bg-slate-50 rounded-[22px] h-16 transition-all">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-black text-slate-900 leading-tight">Adv. Alok Dubey</p>
                <p className="text-[10px] font-bold text-blue-600 uppercase tracking-tighter">Special Public Prosecutor</p>
              </div>
              <div className="h-12 w-12 rounded-2xl bg-slate-950 flex items-center justify-center text-white font-black shadow-xl shadow-slate-900/20">
                AD
              </div>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-64 p-3 rounded-3xl shadow-2xl border-slate-200 animate-in slide-in-from-top-2 duration-300">
            <DropdownMenuLabel className="px-3 py-3 border-b mb-2">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Legal Authority</p>
              <p className="text-sm font-bold text-slate-800 tracking-tight leading-tight">District & Sessions Court, Lucknow</p>
            </DropdownMenuLabel>
            <DropdownMenuItem className="py-3 rounded-2xl cursor-pointer font-bold text-slate-600">
              <ShieldCheck className="mr-3 h-5 w-5 text-blue-600" /> Judicial Credentials
            </DropdownMenuItem>
            <DropdownMenuItem className="py-3 rounded-2xl cursor-pointer font-bold text-slate-600">
              <BookOpen className="mr-3 h-5 w-5 text-purple-600" /> PwD Act Reference
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="py-3 rounded-2xl cursor-pointer font-black text-red-600 uppercase text-[10px] tracking-widest">
              Close Legal Portal
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}