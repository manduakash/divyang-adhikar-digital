// components/dashboard/central/nabd/NABDSidebar.tsx
"use client";
import React from 'react';
import {
    LayoutDashboard, UserCircle, Database, FileText, Search,
    LogOut, Users, Calendar, CheckCircle, Target,
    FileBarChart, Phone, Headphones, HelpCircle, Settings,
    Sparkles, PenTool, ShieldCheck, FileClock
} from "lucide-react";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Progress } from "@/components/ui/progress";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export function NABDSidebar() {
    const pathname = usePathname();
    const profileCompletion = 100;

    return (
        <div className="w-80 h-screen bg-white border-r border-slate-200 flex flex-col font-sans sticky top-0 overflow-hidden">

            {/* 1. APEX BRANDING */}
            <div className="p-8 pb-4">
                <div className="flex items-center gap-3 mb-6">
                    <div className="h-10 w-10 bg-indigo-900 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-200">
                        <ShieldCheck className="text-blue-400 h-6 w-6" />
                    </div>
                    <div>
                        <h2 className="text-xl font-black text-slate-900 tracking-tighter leading-none uppercase">NABD</h2>
                        <p className="text-[8px] font-bold text-indigo-600 uppercase tracking-[0.2em] mt-1">National Advisory Board</p>
                    </div>
                </div>

                {/* A1. PROFILE COMPLETION METER */}
                <div className="bg-slate-50 border border-slate-100 rounded-2xl p-4 space-y-3">
                    <div className="flex justify-between items-end">
                        <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Profile Completion</span>
                        <span className="text-xs font-black text-indigo-600">{profileCompletion}%</span>
                    </div>
                    <Progress value={profileCompletion} className="h-1.5 bg-indigo-600" />
                    <p className="text-[8px] font-bold text-slate-400 uppercase tracking-tighter">Secretariat Framework Active</p>
                </div>
            </div>

            {/* 2. SCROLLABLE NAVIGATION AREA */}
            <nav className="flex-1 px-4 overflow-y-auto custom-scrollbar space-y-1 pb-10">

                <NavItem href="/dashboard/central/nabd" icon={<LayoutDashboard size={18} />} label="Dashboard" active={pathname === '/dashboard/central/nabd'} />

                <NavItem href="/dashboard/central/nabd/profile" icon={<UserCircle size={18} />} label="Profile" active={pathname === '/dashboard/central/nabd/profile'} />

                {/* A3. DATA ENTRY */}
                <Accordion type="single" collapsible className="border-none">
                    <AccordionItem value="data-entry" className="border-none">
                        <AccordionTrigger className="flex items-center justify-between p-3.5 rounded-xl text-slate-500 hover:bg-slate-50 hover:no-underline group">
                            <div className="flex items-center gap-3">
                                <Database size={18} className="text-slate-400 group-hover:text-indigo-600" />
                                <span className="text-[10px] font-black uppercase tracking-widest">Data Entry</span>
                            </div>
                        </AccordionTrigger>
                        <AccordionContent className="pl-6 space-y-1 pb-4">
                            <SubNavItem link="/dashboard/central/nabd/data-entry/board-composition" label="Board Composition & Tenure" />
                            <SubNavItem link="/dashboard/central/nabd/data-entry/meetings" label="Meetings & Notices" />
                            <SubNavItem link="/dashboard/central/nabd/data-entry/minutes-of-meeting" label="Minutes of Meeting (MoM)" />
                            <SubNavItem link="/dashboard/central/nabd/data-entry/recommendations" label="Recommendations & Advisory" />
                            <SubNavItem link="/dashboard/central/nabd/data-entry/action-points" label="Action Points Tracking" />
                        </AccordionContent>
                    </AccordionItem>

                    {/* A4. FACT SHEETS */}
                    <AccordionItem value="fact-sheets" className="border-none">
                        <AccordionTrigger className="flex items-center justify-between p-3.5 rounded-xl text-slate-500 hover:bg-slate-50 hover:no-underline group">
                            <div className="flex items-center gap-3">
                                <FileText size={18} className="text-slate-400 group-hover:text-indigo-600" />
                                <span className="text-[10px] font-black uppercase tracking-widest">Fact Sheet</span>
                            </div>
                        </AccordionTrigger>
                        <AccordionContent className="pl-6 space-y-1 pb-4">
                            <SubNavItem link="/dashboard/central/nabd/fact-sheets/advisory-board" label="National Advisory Board" />
                        </AccordionContent>
                    </AccordionItem>

                    {/* A7. REPORTS */}
                    <AccordionItem value="reports" className="border-none">
                        <AccordionTrigger className="flex items-center justify-between p-3.5 rounded-xl text-slate-500 hover:bg-slate-50 hover:no-underline group">
                            <div className="flex items-center gap-3">
                                <FileBarChart size={18} className="text-slate-400 group-hover:text-indigo-600" />
                                <span className="text-[10px] font-black uppercase tracking-widest">Reports</span>
                            </div>
                        </AccordionTrigger>
                        <AccordionContent className="pl-6 space-y-1 pb-4 flex flex-col">
                            <SubNavItem link="/dashboard/central/nabd/reports/board-composition" label="Board Composition Report" />
                            <SubNavItem link="/dashboard/central/nabd/reports/meetings-attendance" label="Meetings & Attendance Report" />
                            <SubNavItem link="/dashboard/central/nabd/reports/recommendations-issued" label="Recommendations Issued Report" />
                            <SubNavItem link="/dashboard/central/nabd/reports/action-points-status" label="Action Points Status Report" />
                            <SubNavItem link="/dashboard/central/nabd/reports/annual-advisory" label="Annual Advisory Report" />
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>

                {/* A5. SEARCH */}
                <NavItem href="/dashboard/central/nabd/search" icon={<Search size={18} />} label="Search Records" />
                <NavItem href="/dashboard/central/nabd/ai" icon={<Sparkles size={18} />} label="AI Summary" />

                {/* A8. COMMON */}
                <div className="mt-4 pt-4 border-t border-slate-100">
                    <NavItem href="/dashboard/central/nabd/contact" icon={<Phone size={18} />} label="Contact Us" />
                    <NavItem href="/dashboard/central/nabd/faq" icon={<HelpCircle size={18} />} label="FAQ" />
                    <NavItem href="/dashboard/central/nabd/help" icon={<Headphones size={18} />} label="Help & Support" />
                    <NavItem href="/dashboard/central/nabd/settings" icon={<Settings size={18} />} label="Settings" />
                </div>
            </nav>

            {/* LOG OUT */}
            <div className="p-4 border-t border-slate-100 bg-slate-50/50">
                <Link href="/login" className="w-full flex items-center gap-3 p-4 rounded-xl text-slate-500 hover:text-red-600 hover:bg-red-50 transition-all font-black text-[11px] uppercase tracking-widest">
                    <LogOut size={18} />
                    Logout
                </Link>
            </div>
        </div>
    );
}

/* UI HELPERS */
function NavItem({ href, icon, label, active = false, color }: any) {
    return (
        <Link href={href} className={`w-full flex items-center justify-between p-3.5 rounded-xl transition-all group ${active ? 'bg-indigo-900 text-white shadow-xl shadow-indigo-900/30' : 'text-slate-500 hover:bg-slate-50 hover:text-indigo-900'}`}>
            <div className="flex items-center gap-3">
                <span className={`${active ? 'text-blue-400' : color || 'text-slate-400 group-hover:text-indigo-600'} transition-colors`}>{icon}</span>
                <span className="text-[10px] font-black uppercase tracking-[0.15em] leading-none">{label}</span>
            </div>
        </Link>
    );
}

function SubNavItem({ link, label }: { link: string, label: string }) {
    return (
        <Link href={link} className="w-full flex text-left p-2.5 rounded-lg text-[10px] font-bold uppercase tracking-tight text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 transition-all">
            {label}
        </Link>
    );
}