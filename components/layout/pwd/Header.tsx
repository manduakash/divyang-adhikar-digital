// components/dashboard/PwDHeader.tsx
"use client";
import React from 'react';
import { 
  Search, 
  Bell, 
  UserCircle, 
  Settings2, 
  Type, 
  Eye, 
  CheckCircle2, 
  Clock,
  Menu
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function PwDHeader() {
  return (
    <header className="h-20 bg-white border-b border-slate-200 flex items-center justify-between px-8 sticky top-0 z-20 font-sans">
      
      {/* 1. SEARCH & MOBILE TRIGGER */}
      <div className="flex items-center gap-6 w-1/3">
        <Button variant="ghost" size="icon" className="lg:hidden">
          <Menu className="h-6 w-6 text-slate-600" />
        </Button>
        <div className="relative w-full max-w-sm hidden md:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
          <Input 
            className="pl-10 h-11 bg-slate-50 border-slate-200 rounded-xl focus:ring-blue-500 placeholder:text-slate-400" 
            placeholder="Search services or track cases..." 
          />
        </div>
      </div>

      {/* 2. IDENTITY & STATUS BAR (Central Visibility) */}
      <div className="hidden xl:flex items-center gap-4 bg-slate-50 border border-slate-100 px-5 py-2 rounded-2xl">
        <div className="flex flex-col">
          <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest leading-none">Status</span>
          <div className="flex items-center gap-1.5 mt-1">
            <CheckCircle2 className="h-3.5 w-3.5 text-green-600" />
            <span className="text-xs font-bold text-slate-700">Certificate Issued</span>
          </div>
        </div>
        <div className="h-8 w-[1px] bg-slate-200 mx-2" />
        <div className="flex flex-col">
          <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest leading-none">PwD ID Number</span>
          <span className="text-xs font-mono font-bold text-blue-600 mt-1">UP/LKO/2024/0912</span>
        </div>
      </div>

      {/* 3. ACCESSIBILITY & USER ACTIONS */}
      <div className="flex items-center gap-4">
        
        {/* Accessibility Toolkit Button */}
        <div className="flex items-center gap-1 mr-2">
            <Button variant="ghost" size="icon" className="text-slate-500 hover:bg-slate-100 rounded-xl" title="Font Size">
              <Type className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-slate-500 hover:bg-slate-100 rounded-xl" title="Contrast Mode">
              <Eye className="h-5 w-5" />
            </Button>
        </div>

        <div className="h-10 w-[1px] bg-slate-200 mx-1 hidden sm:block" />

        {/* Notifications */}
        <div className="relative">
          <Button variant="ghost" size="icon" className="text-slate-400 hover:bg-slate-50 rounded-xl">
            <Bell className="h-6 w-6" />
            <span className="absolute top-2 right-2 h-2.5 w-2.5 bg-red-500 border-2 border-white rounded-full" />
          </Button>
        </div>

        {/* User Profile Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="flex items-center gap-3 pl-3 pr-1 hover:bg-slate-50 rounded-2xl h-14">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-black text-slate-900 leading-tight">Amit Kumar</p>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Locomotor Disability</p>
              </div>
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold shadow-lg shadow-blue-100">
                AK
              </div>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-64 p-2 rounded-2xl shadow-2xl border-slate-200">
            <DropdownMenuLabel className="px-3 py-3">
              <div className="flex flex-col gap-0.5">
                <span className="text-xs font-black text-slate-400 uppercase tracking-widest">Logged in as</span>
                <span className="text-sm font-bold text-slate-900">amit.k@email.com</span>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="py-3 rounded-xl cursor-pointer font-bold text-slate-600 focus:bg-slate-50">
                <UserCircle className="mr-3 h-5 w-5 text-blue-600" />
                My Profile
            </DropdownMenuItem>
            <DropdownMenuItem className="py-3 rounded-xl cursor-pointer font-bold text-slate-600 focus:bg-slate-50">
                <Settings2 className="mr-3 h-5 w-5 text-purple-600" />
                Account Settings
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="py-3 rounded-xl cursor-pointer font-bold text-red-500 focus:bg-red-50">
                Log Out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}