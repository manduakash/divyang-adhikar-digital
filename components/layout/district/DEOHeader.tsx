// components/dashboard/DEOHeader.tsx
"use client";
import React from 'react';
import {
  Search, Bell, Sparkles, UserCircle,
  School, GraduationCap, ChevronDown,
  Menu, Info, CheckCircle2, History
} from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu, DropdownMenuContent, DropdownMenuItem,
  DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

export function DEOHeader() {
  return (
    <header className="h-24 bg-white border-b border-slate-200 flex items-center justify-between px-8 sticky top-0 z-30 font-sans shadow-sm">

      {/* 1. INCLUSIVE EDUCATION SEARCH */}
      <div className="flex items-center gap-6 w-1/3">
        <div className="relative w-full max-w-md hidden md:block group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 group-focus-within:text-blue-600 transition-colors" />
          <Input
            className="pl-11 h-12 bg-slate-50 border-slate-100 rounded-2xl focus:ring-blue-500 placeholder:text-slate-400 font-medium"
            placeholder="Search School ID, Student PwD ID..."
          />
        </div>
      </div>

      {/* 2. INCLUSION PERFORMANCE BAR */}
      <div className="hidden xl:flex items-center gap-6 bg-slate-50 border border-slate-100 px-6 py-2.5 rounded-[24px]">
        <div className="flex flex-col">
          <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest leading-none">Admission Rate</span>
          <div className="flex items-center gap-1.5 mt-1.5">
            <CheckCircle2 className="h-3.5 w-3.5 text-green-600" />
            <span className="text-xs font-black uppercase text-slate-700 tracking-tighter">94% Fulfillment</span>
          </div>
        </div>
        <div className="h-8 w-[1px] bg-slate-200" />
        <div className="flex flex-col">
          <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest leading-none">Accommodation</span>
          <div className="flex items-center gap-1.5 mt-1.5">
            <History className="h-3.5 w-3.5 text-orange-500" />
            <span className="text-xs font-black uppercase text-slate-700 tracking-tighter">05 PENDING</span>
          </div>
        </div>
        <Button size="sm" variant="ghost" className="h-8 px-3 text-[9px] font-black uppercase tracking-widest hover:bg-white text-blue-600 border border-blue-100 rounded-xl">
          School Registry
        </Button>
      </div>

      {/* 3. AI DRAFT & DEO IDENTITY */}
      <div className="flex items-center gap-4">

        <div className="h-10 w-[1px] bg-slate-200 mx-1" />

        <div className="relative">
          <Button variant="ghost" size="icon" className="h-12 w-12 text-slate-400 hover:bg-slate-50 rounded-2xl border border-transparent hover:border-slate-100">
            <Bell className="h-6 w-6" />
            <span className="absolute top-3 right-3 h-2.5 w-2.5 bg-red-500 border-none border-white rounded-full animate-pulse" />
          </Button>
        </div>

        {/* DEO Profile */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="flex items-center gap-3 pl-3 pr-1 hover:bg-slate-50 rounded-[22px] h-16 transition-all">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-black text-slate-900 leading-tight">Dr. Rajesh Kumar</p>
                <div className="flex items-center justify-end gap-1 mt-0.5">
                  <p className="text-[10px] font-bold text-blue-600 uppercase tracking-tighter">District Education Officer</p>
                </div>
              </div>
              <div className="h-12 w-12 rounded-2xl bg-blue-600 flex items-center justify-center text-white font-black shadow-lg shadow-blue-200 uppercase">
                RK
              </div>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-72 p-3 rounded-3xl shadow-2xl border-slate-200">
            <DropdownMenuLabel className="px-4 py-4 border-b border-slate-50">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-1">Administrative Wing</p>
              <p className="text-sm font-black text-slate-800">Inclusive Education Cell</p>
            </DropdownMenuLabel>
            <DropdownMenuItem className="py-4 rounded-2xl cursor-pointer font-bold text-slate-600 hover:bg-slate-50">
              <School className="mr-3 h-5 w-5 text-blue-600" /> Institutional Hierarchy
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="py-4 rounded-2xl cursor-pointer font-black text-red-500 uppercase text-[10px] tracking-widest hover:bg-red-50">
              Sign Out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}