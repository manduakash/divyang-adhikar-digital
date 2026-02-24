// components/dashboard/EstHeader.tsx
"use client";
import React from 'react';
import {
    Search, Bell, UserCircle, Settings2,
    Building2, ShieldCheck, AlertCircle, Menu,
    Link
} from "lucide-react";
import { Input } from "@/components/ui/input";
import {
    DropdownMenu, DropdownMenuContent, DropdownMenuItem,
    DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function EstHeader() {
    return (
        <header className="h-20 bg-white border-b border-slate-200 flex items-center justify-between px-8 sticky top-0 z-20 font-sans">

            {/* 1. SEARCH & IDENTITY */}
            <div className="flex items-center gap-6 w-1/3">
                <div className="relative w-full max-w-sm hidden md:block">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                    <Input
                        className="pl-10 h-11 bg-slate-50 border-slate-200 rounded-xl focus:ring-blue-500 placeholder:text-slate-400"
                        placeholder="Search grievances or directions..."
                    />
                </div>
            </div>

            {/* 2. STATUTORY HEALTH BAR */}
            <div className="hidden xl:flex items-center gap-4 bg-slate-50 border border-slate-100 px-5 py-2 rounded-2xl">
                <div className="flex flex-col">
                    <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest leading-none">Compliance Level</span>
                    <div className="flex items-center gap-1.5 mt-1">
                        <ShieldCheck className="h-3.5 w-3.5 text-blue-600" />
                        <span className="text-xs font-black text-slate-700 uppercase">Tier 1 Secure</span>
                    </div>
                </div>
                <div className="h-8 w-[1px] bg-slate-200 mx-2" />
                <div className="flex flex-col">
                    <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest leading-none">SLA Alerts</span>
                    <div className="flex items-center gap-1.5 mt-1">
                        <AlertCircle className="h-3.5 w-3.5 text-red-500" />
                        <span className="text-xs font-black text-red-600 uppercase tracking-tighter">04 Overdue</span>
                    </div>
                </div>
            </div>

            {/* 3. USER ACTIONS */}
            <div className="flex items-center gap-4">

                <div className="relative">
                    <Button variant="ghost" size="icon" className="text-slate-400 hover:bg-slate-50 rounded-xl">
                        <Bell className="h-6 w-6" />
                        <span className="absolute top-2 right-2 h-2.5 w-2.5 bg-red-500 border-none border-white rounded-full" />
                    </Button>
                </div>

                <div className="h-10 w-[1px] bg-slate-200 mx-1" />

                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="flex items-center gap-3 pl-3 pr-1 hover:bg-slate-50 rounded-2xl h-14 transition-all">
                            <div className="text-right hidden sm:block">
                                <p className="text-sm font-black text-slate-900 leading-tight">V.K. Malhotra</p>
                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter mt-0.5">Redressal Officer (GRO)</p>
                            </div>
                            <div className="h-10 w-10 rounded-xl bg-slate-900 flex items-center justify-center text-white font-bold shadow-lg shadow-slate-200">
                                VM
                            </div>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-64 p-2 rounded-2xl shadow-2xl border-slate-200">
                        <DropdownMenuLabel className="px-3 py-3 font-black text-xs text-slate-400 uppercase tracking-widest border-b mb-2">
                            HDFC Regional Hub
                        </DropdownMenuLabel>
                        <DropdownMenuItem className="py-3 rounded-xl cursor-pointer font-bold text-slate-600">
                            <Building2 className="mr-3 h-5 w-5 text-blue-600" /> Establishment Profile
                        </DropdownMenuItem>
                        <DropdownMenuItem className="py-3 rounded-xl cursor-pointer font-bold text-slate-600">
                            <Settings2 className="mr-3 h-5 w-5 text-purple-600" /> System Settings
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="py-3 rounded-xl cursor-pointer font-bold text-red-500 hover:bg-red-50 focus:bg-red-50">
                            <Link href="/login">
                                Log Out
                            </Link>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </header>
    );
}