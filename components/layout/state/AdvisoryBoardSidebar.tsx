// components/dashboard/dashboard/state/state-advisory-board/SAB_Sidebar.tsx
"use client";
import React from 'react';
import {
    LayoutDashboard, UserCircle, Database, FileText, Search,
    Sparkles, Settings, LogOut, ChevronDown,
    Users, Calendar, ClipboardList, BarChart3,
    MessageSquare, HelpCircle, ShieldCheck,
    Landmark, Activity, BadgeCheck, PenTool,
    FileSearch, History, Globe,
    ListChecks,
    ArrowRight
} from "lucide-react";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Progress } from "@/components/ui/progress";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger
} from "@/components/ui/accordion";

export function SABSidebar() {
    const pathname = usePathname();
    const profileCompletion = 75;

    return (
        <div className="w-85 h-screen bg-white border-r border-slate-200 flex flex-col font-sans sticky top-0 overflow-hidden shadow-sm">

            {/* 1. BRANDING HUB - CARBON FIBER TEXTURE */}
            <div className="relative p-8 pb-6 overflow-hidden">
                <div className="flex items-center gap-4 mb-6 relative z-10">
                    <div className="h-12 w-12 bg-emerald-500 rounded-2xl flex items-center justify-center text-white shadow-xl shadow-emerald-500/20 transition-transform hover:scale-105">
                        <Landmark size={28} />
                    </div>
                    <div>
                        <h2 className="text-2xl font-black text-slate-700 tracking-tighter leading-none uppercase">DAEGS</h2>
                        <p className="text-[9px] font-black text-emerald-400 uppercase tracking-[0.2em] mt-1">Advisory Authority</p>
                    </div>
                </div>

                {/* PROFILE COMPLETION CARTRIDGE */}
                <div className="bg-slate-100 border border-slate-100 rounded-2xl p-4 space-y-3">
                    <div className="flex justify-between items-end">
                        <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Profile Completion</span>
                        <span className="text-xs font-black text-indigo-600">{profileCompletion}%</span>
                    </div>
                    <Progress value={profileCompletion} className="h-1.5 bg-indigo-600" />
                    <Link href={"/dashboard/state/state-advisory-board/profile"} className="text-[8px] hover:text-blue-600 hover:underline font-bold text-slate-400 uppercase tracking-tighter flex gap-2 items-center">Complete Now <ArrowRight size={10} /></Link>
                </div>
            </div>

            {/* 2. NAVIGATION AREA WITH SUBMENUS */}
            <nav className="flex-1 px-4 pt-6 overflow-y-auto custom-scrollbar space-y-1 pb-10 font-sans">

                <NavItem href="/dashboard/state/state-advisory-board" icon={<LayoutDashboard size={18} />} label="Dashboard" active={pathname === '/dashboard/state/state-advisory-board'} />
                <NavItem href="/dashboard/state/state-advisory-board/profile" icon={<UserCircle size={18} />} label="Official Board Profile" active={pathname === '/dashboard/state/state-advisory-board/profile'} />

                <Accordion type="single" collapsible className="border-none w-full space-y-1">

                    {/* SUBMENU: DATA ENTRY */}
                    <AccordionItem value="data-entry" className="border-none">
                        <AccordionTrigger className="flex items-center justify-between p-3.5 rounded-xl text-slate-500 hover:bg-slate-50 hover:no-underline group transition-all">
                            <div className="flex items-center gap-3">
                                <Database size={18} className="text-slate-400 group-hover:text-emerald-600" />
                                <span className="text-[11px] font-black uppercase tracking-widest">Administrative Date Entry</span>
                            </div>
                        </AccordionTrigger>
                        <AccordionContent className="pl-10 space-y-1 pb-2">
                            <SubLink href="/dashboard/state/state-advisory-board/data-entry/composition" label="Board Composition" icon={<Users size={14} />} />
                            <SubLink href="/dashboard/state/state-advisory-board/data-entry/meetings" label="Schedule & Notices" icon={<Calendar size={14} />} />
                            <SubLink href="/dashboard/state/state-advisory-board/data-entry/minutes" label="Minutes of Meeting" icon={<PenTool size={14} />} />
                            <SubLink href="/dashboard/state/state-advisory-board/data-entry/agenda" label="Agenda & Actions" icon={<ClipboardList size={14} />} />
                        </AccordionContent>
                    </AccordionItem>

                    {/* SUBMENU: FACT SHEETS */}
                    <AccordionItem value="fact-sheets" className="border-none">
                        <AccordionTrigger className="flex items-center justify-between p-3.5 rounded-xl text-slate-500 hover:bg-slate-50 hover:no-underline group transition-all">
                            <div className="flex items-center gap-3">
                                <FileSearch size={18} className="text-slate-400 group-hover:text-emerald-600" />
                                <span className="text-[11px] font-black uppercase tracking-widest">Fact Sheets</span>
                            </div>
                        </AccordionTrigger>
                        <AccordionContent className="pl-10 space-y-1 pb-2">
                            <SubLink href="/dashboard/state/state-advisory-board/fact-sheets/board" label="Board Fact Sheet" icon={<BadgeCheck size={14} />} />
                        </AccordionContent>
                    </AccordionItem>

                    {/* SUBMENU: REPORTS */}
                    <AccordionItem value="reports" className="border-none">
                        <AccordionTrigger className="flex items-center justify-between p-3.5 rounded-xl text-slate-500 hover:bg-slate-50 hover:no-underline group transition-all">
                            <div className="flex items-center gap-3">
                                <BarChart3 size={18} className="text-slate-400 group-hover:text-emerald-600" />
                                <span className="text-[11px] font-black uppercase tracking-widest">Reports</span>
                            </div>
                        </AccordionTrigger>
                        <AccordionContent className="pl-10 space-y-1 pb-2">
                            <SubLink href="/dashboard/state/state-advisory-board/reports/composition" label="Composition Report" icon={<FileText size={14} />} />
                            <SubLink href="/dashboard/state/state-advisory-board/reports/meetings" label="Meetings Held Report" icon={<History size={14} />} />
                            <SubLink href="/dashboard/state/state-advisory-board/reports/attendance" label="Attendance Report" icon={<Users size={14} />} />
                            <SubLink href="/dashboard/state/state-advisory-board/reports/actions" label="Action Points Status" icon={<ListChecks size={14} />} />
                            <SubLink href="/dashboard/state/state-advisory-board/reports/recommendations" label="Recommendations Summary" icon={<ShieldCheck size={14} />} />
                        </AccordionContent>
                    </AccordionItem>

                </Accordion>

                <NavItem href="/dashboard/state/state-advisory-board/search" icon={<Search size={18} />} label="Advanced Search" active={pathname === '/dashboard/state/state-advisory-board/search'} />

                {/* <div className="mt-4 pt-4 border-t border-slate-100">
                    <p className="text-[9px] font-black text-emerald-600 uppercase tracking-[0.3em] ml-4 mb-2">AI Layer</p>
                    <NavItem href="/dashboard/state/state-advisory-board/ai" icon={<Sparkles size={18} />} label="Generative AI" color="text-purple-600" active={pathname === '/dashboard/state/state-advisory-board/ai'} />
                </div> */}

                <div className="mt-4 pt-4 border-t border-slate-100">
                    <NavItem href="/dashboard/state/state-advisory-board/contact" icon={<MessageSquare size={18} />} label="Contact Us" active={pathname === '/dashboard/state/state-advisory-board/contact'} />
                    <NavItem href="/dashboard/state/state-advisory-board/faq" icon={<HelpCircle size={18} />} label="FAQ" active={pathname === '/dashboard/state/state-advisory-board/faq'} />
                    <NavItem href="/dashboard/state/state-advisory-board/help" icon={<History size={18} />} label="Help & Support" active={pathname === '/dashboard/state/state-advisory-board/help'} />
                    <NavItem href="/dashboard/state/state-advisory-board/settings" icon={<Settings size={18} />} label="Settings" active={pathname === '/dashboard/state/state-advisory-board/settings'} />
                </div>
            </nav>

            {/* 3. LOG OUT - LIGHT RED THEME */}
            <div className="p-4 border-t border-slate-100 bg-slate-50/50">
                <Link href="/login" className="w-full flex items-center justify-between p-4 rounded-xl text-slate-500 hover:text-red-600 hover:bg-red-50 transition-all group">
                    <div className="flex items-center gap-3">
                        <LogOut size={18} className="group-hover:-translate-x-1 transition-transform" />
                        <span className="text-[11px] font-black uppercase tracking-widest">Logout</span>
                    </div>
                </Link>
            </div>
        </div>
    );
}

/* UI SUB-COMPONENTS */

function NavItem({ href, icon, label, active = false, color }: any) {
    return (
        <Link href={href} className={`w-full flex items-center justify-between p-3.5 rounded-xl transition-all duration-300 group relative overflow-hidden ${active
            ? 'bg-gradient-to-r from-emerald-600 to-teal-700 text-white shadow-xl shadow-emerald-200 border-t border-white/20'
            : 'text-slate-500 hover:bg-emerald-50/50 hover:text-emerald-700'
            }`}>
            <div className="flex items-center gap-3 relative z-10">
                <span className={`${active ? 'text-white' : color || 'text-slate-400 group-hover:text-emerald-600'} transition-all`}>{icon}</span>
                <span className={`text-[10px] font-black uppercase tracking-[0.12em] leading-none ${active ? 'text-white' : 'text-slate-600'}`}>{label}</span>
            </div>
            {active && <div className="h-1.5 w-1.5 rounded-full bg-white animate-pulse relative z-10" />}
        </Link>
    );
}

function SubLink({ href, label, icon }: any) {
    return (
        <Link href={href} className="flex items-center gap-3 p-2.5 rounded-lg text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 transition-all group">
            <span className="opacity-50 group-hover:opacity-100">{icon}</span>
            <span className="text-[9px] font-bold uppercase tracking-widest">{label}</span>
        </Link>
    )
}