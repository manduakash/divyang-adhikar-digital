// components/dashboarddashboard/central/ccpd/CCPD_Sidebar.tsx
"use client";
import React from 'react';
import {
    LayoutDashboard, UserCircle, Database, FileText, Search,
    Sparkles, Settings, LogOut, ShieldCheck,
    Activity, Landmark, Globe, Briefcase,
    Scale, FileSearch, History, Users
} from "lucide-react";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Progress } from "@/components/ui/progress";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export function CCPDSidebar() {
    const pathname = usePathname();
    const profileCompletion = 82;

    return (
        <div className="w-85 h-screen bg-white border-r-2 border-slate-100 flex flex-col font-sans sticky top-0 overflow-hidden shadow-sm">

            {/* BRANDING HUB */}
            <div className="p-8 pb-6 border-b border-slate-50">
                <div className="flex items-center gap-4 mb-8 group cursor-pointer">
                    <div className="h-12 w-12 bg-indigo-900 rounded-2xl flex items-center justify-center text-white shadow-xl shadow-indigo-900/20 group-hover:rotate-6 transition-transform duration-500">
                        <ShieldCheck size={28} />
                    </div>
                    <div>
                        <h2 className="text-2xl font-black text-slate-950 tracking-tighter leading-none">DAEGS</h2>
                        <p className="text-[9px] font-black text-indigo-600 uppercase tracking-[0.2em] mt-1">Chief Commissioner</p>
                    </div>
                </div>

                <div className="bg-slate-50 border-2 border-slate-100 rounded-2xl p-5 space-y-4 shadow-inner relative overflow-hidden">
                    <div className="flex justify-between items-end relative z-10">
                        <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest leading-none">Profile Completion</span>
                        <span className="text-xs font-black text-indigo-600 leading-none">{profileCompletion}%</span>
                    </div>
                    <Progress value={profileCompletion} className="h-1.5 bg-indigo-600 shadow-[0_0_10px_rgba(79,70,229,0.3)]" />
                    <p className="text-[8px] font-bold text-slate-400 uppercase tracking-tighter relative z-10">eSign & Statutory Delegation Active</p>
                </div>
            </div>

            {/* NAVIGATION MODULES - NO BULLETIN NUMBERS */}
            <nav className="flex-1 px-4 pt-6 overflow-y-auto custom-scrollbar space-y-1 pb-10">

                <NavItem href="/dashboard/central/ccpd" icon={<LayoutDashboard size={18} />} label="Dashboard Hub" active={pathname === 'dashboard/central/ccpd'} />

                <NavItem href="/dashboard/central/ccpd/profile" icon={<UserCircle size={18} />} label="Profile" active={pathname === 'dashboard/central/ccpd/profile'} />

                <Accordion type="single" collapsible className="border-none w-full space-y-1">

                    <AccordionItem value="data-entry" className="border-none">
                        <AccordionTrigger className="flex items-center justify-between p-3.5 rounded-xl text-slate-500 hover:bg-slate-50 hover:no-underline group transition-all">
                            <div className="flex items-center gap-3">
                                <Database size={18} className="text-slate-400 group-hover:text-blue-600" />
                                <span className="text-[11px] font-black uppercase tracking-widest leading-none">Data Entry hub</span>
                            </div>
                        </AccordionTrigger>
                        <AccordionContent className="pl-10 space-y-1 pb-2">
                            <SubLink href="/dashboard/central/ccpd/data-entry/directions" label="Directions / Orders / Instructions" />
                            <SubLink href="/dashboard/central/ccpd/data-entry/grievances" label="National-Level Grievance Handling" />
                            <SubLink href="/dashboard/central/ccpd/data-entry/reviews" label="Review Notes on State Performance" />
                            <SubLink href="/dashboard/central/ccpd/data-entry/staff" label="Office Composition & Staffing" />
                            <SubLink href="/dashboard/central/ccpd/data-entry/hearings" label="Hearings, Meetings & Proceedings" />
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="fact-sheets" className="border-none">
                        <AccordionTrigger className="flex items-center justify-between p-3.5 rounded-xl text-slate-500 hover:bg-slate-50 hover:no-underline group transition-all">
                            <div className="flex items-center gap-3">
                                <FileSearch size={18} className="text-slate-400 group-hover:text-blue-600" />
                                <span className="text-[11px] font-black uppercase tracking-widest leading-none">Fact Sheets</span>
                            </div>
                        </AccordionTrigger>
                        <AccordionContent className="pl-10 space-y-1 pb-2">
                            <SubLink href="/dashboard/central/ccpd/fact/national" label="National Fact Sheet" />
                            <SubLink href="/dashboard/central/ccpd/fact/state" label="State Fact Sheet" />
                            <SubLink href="/dashboard/central/ccpd/fact/district" label="District Fact Sheet" />
                            <SubLink href="/dashboard/central/ccpd/fact/entity" label="Establishment Fact Sheet" />
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="reports" className="border-none">
                        <AccordionTrigger className="flex items-center justify-between p-3.5 rounded-xl text-slate-500 hover:bg-slate-50 hover:no-underline group transition-all">
                            <div className="flex items-center gap-3">
                                <FileText size={18} className="text-slate-400 group-hover:text-blue-600" />
                                <span className="text-[11px] font-black uppercase tracking-widest leading-none">Statutory Reports</span>
                            </div>
                        </AccordionTrigger>
                        <AccordionContent className="pl-10 space-y-1 pb-2 font-sans">
                            <SubLink href="/dashboard/central/ccpd/rep/national" label="National PwD Status Report" />
                            <SubLink href="/dashboard/central/ccpd/rep/comparative" label="State-wise PwD Comparative Report" />
                            <SubLink href="/dashboard/central/ccpd/rep/grievances" label="National Grievance Disposal Report" />
                            <SubLink href="/dashboard/central/ccpd/rep/compliance" label="Directions Issued & Compliance Status" />
                            <SubLink href="/dashboard/central/ccpd/rep/employment" label="PwD Employment & Vacancy Report" />
                            <SubLink href="/dashboard/central/ccpd/rep/access" label="Accessibility Compliance Report" />
                            <SubLink href="/dashboard/central/ccpd/rep/education" label="Education Inclusion Report" />
                            <SubLink href="/dashboard/central/ccpd/rep/court" label="Court / Case Status Report" />
                            <SubLink href="/dashboard/central/ccpd/rep/annual" label="Annual Report of the Chief Commissioner" />
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>

                <NavItem href="/dashboard/central/ccpd/search" icon={<Search size={18} />} label="Search Hub" active={pathname === 'dashboard/central/ccpd/search'} />

                <div className="mt-6 pt-6 border-t border-slate-100">
                    <p className="text-[9px] font-black text-blue-600 uppercase tracking-[0.3em] ml-4 mb-3">Intelligence Layer</p>
                    <NavItem href="/dashboard/central/ccpd/ai" icon={<Sparkles size={18} />} label="Generative AI Studio" color="text-purple-600" active={pathname === 'dashboard/central/ccpd/ai'} />
                </div>
            </nav>

            {/* EXIT INTERFACE */}
            <div className="p-4 border-t border-slate-100 bg-slate-50/50">
                <button className="w-full flex items-center justify-between p-4 rounded-xl text-slate-500 hover:text-red-600 hover:bg-red-50 transition-all font-black text-[11px] uppercase tracking-widest group">
                    <div className="flex items-center gap-3">
                        <LogOut size={18} className="group-hover:-translate-x-1 transition-transform" />
                        Terminate Session
                    </div>
                </button>
            </div>
        </div>
    );
}

/* UI UTILITIES */
function NavItem({ href, icon, label, active = false, color }: any) {
    return (
        <Link href={href} className={`w-full flex items-center justify-between p-4 rounded-2xl transition-all duration-300 group relative overflow-hidden ${active ? 'bg-slate-900 text-white shadow-xl scale-[1.02]' : 'text-slate-500 hover:bg-blue-50 hover:text-blue-700'}`}>
            <div className="flex items-center gap-3 relative z-10">
                <span className={`${active ? 'text-blue-400' : color || 'text-slate-400 group-hover:text-blue-600'} transition-all group-hover:scale-110`}>{icon}</span>
                <span className={`text-[10px] font-black uppercase tracking-[0.12em] leading-none ${active ? 'text-white' : 'text-slate-600'}`}>{label}</span>
            </div>
        </Link>
    );
}

function SubLink({ href, label }: any) {
    return (
        <Link href={href} className="block text-[9px] font-bold uppercase tracking-[0.15em] text-slate-400 hover:text-blue-700 hover:bg-blue-50/50 p-3 rounded-xl transition-all border-l-2 border-transparent hover:border-blue-600">
            {label}
        </Link>
    )
}