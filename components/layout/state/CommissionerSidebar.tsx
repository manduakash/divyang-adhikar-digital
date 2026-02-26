// components/dashboard/commissioner/SCPD_Sidebar.tsx
"use client";
import React, { useState } from 'react';
import {
    LayoutDashboard, UserCircle, Database, FileText, Search,
    Bot, Settings, LogOut, ChevronDown, ChevronRight,
    Gavel, Scale, ShieldCheck, Briefcase, GraduationCap,
    MessageSquare, History, Activity, Landmark, Bell,
    FileCheck, Users, Info, Building2, HelpCircle, Sparkles, PenTool,
    FileBarChart,
    Phone,
    Headphones
} from "lucide-react";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Progress } from "@/components/ui/progress";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export function CommissionerSidebar() {
    const pathname = usePathname();
    const profileCompletion = 82;

    return (
        <div className="w-80 h-screen bg-white border-r border-slate-200 flex flex-col font-sans sticky top-0 overflow-hidden">

            {/* 1. APEX BRANDING */}
            <div className="p-8 pb-4">
                <div className="flex items-center gap-3 mb-6">
                    <div className="h-10 w-10 bg-indigo-900 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-200">
                        <ShieldCheck className="text-blue-400 h-6 w-6" />
                    </div>
                    <div>
                        <h2 className="text-xl font-black text-slate-900 tracking-tighter leading-none uppercase">DAEGS</h2>
                        <p className="text-[9px] font-bold text-indigo-600 uppercase tracking-[0.2em] mt-1">State Commissioner</p>
                    </div>
                </div>

                {/* A1. PROFILE COMPLETION METER */}
                <div className="bg-slate-50 border border-slate-100 rounded-2xl p-4 space-y-3">
                    <div className="flex justify-between items-end">
                        <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Profile Completion</span>
                        <span className="text-xs font-black text-indigo-600">{profileCompletion}%</span>
                    </div>
                    <Progress value={profileCompletion} className="h-1.5 bg-indigo-600" />
                    <p className="text-[8px] font-bold text-slate-400 uppercase tracking-tighter">eSign & Statutory Delegation Active</p>
                </div>
            </div>

            {/* 2. SCROLLABLE NAVIGATION AREA */}
            <nav className="flex-1 px-4 overflow-y-auto custom-scrollbar space-y-1 pb-10">

                <NavItem href="/dashboard/state/state-commissioner" icon={<LayoutDashboard size={18} />} label="Dashboard" active={pathname === '/dashboard/state/state-commissioner'} />

                <NavItem href="/dashboard/state/state-commissioner/profile" icon={<UserCircle size={18} />} label="Profile" active={pathname === '/dashboard/state/state-commissioner/profile'} />

                {/* A3. DATA ENTRY - 14 ITEMS */}
                <Accordion type="single" collapsible className="border-none">
                    <AccordionItem value="data-entry" className="border-none">
                        <AccordionTrigger className="flex items-center justify-between p-3.5 rounded-xl text-slate-500 hover:bg-slate-50 hover:no-underline group">
                            <div className="flex items-center gap-3">
                                <Database size={18} className="text-slate-400 group-hover:text-indigo-600" />
                                <span className="text-[10px] font-black uppercase tracking-widest">Data Entry</span>
                            </div>
                        </AccordionTrigger>
                        <AccordionContent className="pl-6 space-y-1 pb-4">
                            <SubNavItem link="/dashboard/state/state-commissioner/data-entry/commission-composition" label="Commission Composition" />
                            <SubNavItem link="/dashboard/state/state-commissioner/data-entry/monitoring-review" label="Monitoring & Review" />
                            <SubNavItem link="/dashboard/state/state-commissioner/data-entry/grievances" label="Grievances" />
                            <SubNavItem link="/dashboard/state/state-commissioner/data-entry/directions" label="Directions" />
                            <SubNavItem link="/dashboard/state/state-commissioner/data-entry/function-wise-actions" label="Function-wise Actions" />
                            <SubNavItem link="/dashboard/state/state-commissioner/data-entry/court-proceedings" label="Court Proceedings" />
                            <SubNavItem link="/dashboard/state/state-commissioner/data-entry/annual-reports-draft" label="Annual Reports (Draft)" />
                            <SubNavItem link="/dashboard/state/state-commissioner/data-entry/meetings-minutes" label="Meetings & Minutes" />
                            <SubNavItem link="/dashboard/state/state-commissioner/data-entry/establishment-oversight" label="Establishment Oversight" />
                            <SubNavItem link="/dashboard/state/state-commissioner/data-entry/educational-oversight" label="Educational Oversight" />
                            <SubNavItem link="/dashboard/state/state-commissioner/data-entry/registered-institutions" label="Registered Institutions" />
                            <SubNavItem link="/dashboard/state/state-commissioner/data-entry/employment-oversight" label="Employment Oversight" />
                            <SubNavItem link="/dashboard/state/state-commissioner/data-entry/exchange-returns" label="Exchange Returns" />
                            <SubNavItem link="/dashboard/state/state-commissioner/data-entry/accessibility-audits" label="Accessibility Audits" />
                        </AccordionContent>
                    </AccordionItem>

                    {/* A4. FACT SHEETS */}
                    <AccordionItem value="fact-sheets" className="border-none">
                        <AccordionTrigger className="flex items-center justify-between p-3.5 rounded-xl text-slate-500 hover:bg-slate-50 hover:no-underline group">
                            <div className="flex items-center gap-3">
                                <FileText size={18} className="text-slate-400 group-hover:text-indigo-600" />
                                <span className="text-[10px] font-black uppercase tracking-widest">Fact Sheets</span>
                            </div>
                        </AccordionTrigger>
                        <AccordionContent className="pl-6 space-y-1 pb-4">
                            <SubNavItem link="/dashboard/state/state-commissioner/fact-sheets/district-fact-sheet" label="District Fact Sheet" />
                            <SubNavItem link="/dashboard/state/state-commissioner/fact-sheets/establishment-fact-sheet" label="Establishment Fact Sheet" />
                            <SubNavItem link="/dashboard/state/state-commissioner/fact-sheets/education-fact-sheet" label="Education Fact Sheet" />
                            <SubNavItem link="/dashboard/state/state-commissioner/fact-sheets/registered-institution" label="Registered Institution" />
                        </AccordionContent>
                    </AccordionItem>

                    {/* A7. REPORTS - 14 ITEMS */}
                    <AccordionItem value="reports" className="border-none">
                        <AccordionTrigger className="flex items-center justify-between p-3.5 rounded-xl text-slate-500 hover:bg-slate-50 hover:no-underline group">
                            <div className="flex items-center gap-3">
                                <FileBarChart size={18} className="text-slate-400 group-hover:text-indigo-600" />
                                <span className="text-[10px] font-black uppercase tracking-widest">Statutory Reports</span>
                            </div>
                        </AccordionTrigger>
                        <AccordionContent className="pl-6 space-y-1 pb-4 flex flex-col ">
                            <SubNavItem link="/dashboard/state/state-commissioner/reports/total-establishments" label="Total Establishments" />
                            <SubNavItem link="/dashboard/state/state-commissioner/reports/educational-institutions" label="Educational Institutions" />
                            <SubNavItem link="/dashboard/state/state-commissioner/reports/registered-organizations" label="Registered Organizations" />
                            <SubNavItem link="/dashboard/state/state-commissioner/reports/statewide-pwd-report" label="Statewide PwD Report" />
                            <SubNavItem link="/dashboard/state/state-commissioner/reports/grievance-summary" label="Grievance Summary" />
                            <SubNavItem link="/dashboard/state/state-commissioner/reports/overdue-grievances" label="Overdue Grievances" />
                            <SubNavItem link="/dashboard/state/state-commissioner/reports/directions-compliance" label="Directions Compliance" />
                            <SubNavItem link="/dashboard/state/state-commissioner/reports/overdue-directions" label="Overdue Directions" />
                            <SubNavItem link="/dashboard/state/state-commissioner/reports/employment-vacancy" label="Employment & Vacancy" />
                            <SubNavItem link="/dashboard/state/state-commissioner/reports/return-status-hub" label="Return Status Hub" />
                            <SubNavItem link="/dashboard/state/state-commissioner/reports/accessibility-ledger" label="Accessibility Compliance" />
                            <SubNavItem link="/dashboard/state/state-commissioner/reports/court-case-status" label="Court / Case Status" />
                            <SubNavItem link="/dashboard/state/state-commissioner/reports/annual-report-final" label="Annual Report Final" />
                            <SubNavItem link="/dashboard/state/state-commissioner/reports/special-issue-reports" label="Special Issue Reports" />
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>

                {/* A5. SEARCH */}
                <NavItem href="/dashboard/state/state-commissioner/search" icon={<Search size={18} />} label="Quick & Advanced Search" />

                {/* A6. GENERATIVE AI */}
                {/* <div className="mt-4 pt-4 border-t border-slate-100">
                    <p className="text-[8px] font-black text-indigo-400 uppercase tracking-[0.3em] ml-4 mb-2">Intelligence Layer</p>
                    <NavItem
                        href="/dashboard/state/state-commissioner/ai-drafting"
                        icon={<Sparkles size={18} />}
                        label="AI Search & Summaries"
                        color="text-purple-600"
                    />
                    <NavItem
                        href="/dashboard/state/state-commissioner/ai-narrative"
                        icon={<PenTool size={18} />}
                        label="Narrative Builder"
                        color="text-purple-600"
                    />
                </div> */}

                {/* A8. COMMON */}
                <div className="mt-4 pt-4 border-t border-slate-100">
                    <NavItem href="/dashboard/state/state-commissioner/contact" icon={<Phone size={18} />} label="Contact Us" />
                    <NavItem href="/dashboard/state/state-commissioner/faq" icon={<HelpCircle size={18} />} label="FAQ" />
                    <NavItem href="/dashboard/state/state-commissioner/help" icon={<Headphones size={18} />} label="Help & Support" />
                    <NavItem href="/dashboard/state/state-commissioner/settings" icon={<Settings size={18} />} label="Settings" />
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