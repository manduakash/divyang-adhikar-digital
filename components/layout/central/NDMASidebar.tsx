// components/dashboard/central/ndma/NDMASidebar.tsx
"use client";
import React from 'react';
import {
    LayoutDashboard, UserCircle, Database, FileText, Search,
    LogOut, Settings, Phone, Headphones, HelpCircle,
    Activity, ShieldAlert, Sparkles, PenTool, AlertTriangle,
    FileBarChart, Wind, HeartPulse
} from "lucide-react";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Progress } from "@/components/ui/progress";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export function NDMASidebar() {
    const pathname = usePathname();
    const profileCompletion = 100;

    return (
        <div className="w-80 h-screen bg-white border-r border-indigo-50 flex flex-col font-sans sticky top-0 overflow-hidden shadow-sm z-30">

            {/* BRANDING */}
            <div className="p-8 pb-4">
                <div className="flex items-center gap-3 mb-6">
                    <div className="h-12 w-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg shadow-orange-200">
                        <ShieldAlert className="text-white h-6 w-6" />
                    </div>
                    <div>
                        <h2 className="text-2xl font-black text-slate-800 tracking-tighter leading-none uppercase">NDMA</h2>
                        <p className="text-[9px] font-black text-amber-600 uppercase tracking-[0.2em] mt-1">PwD Integration</p>
                    </div>
                </div>

                {/* PROFILE COMPLETION METER */}
                <div className="bg-orange-50/50 border border-orange-100 rounded-2xl p-4 space-y-3">
                    <div className="flex justify-between items-end">
                        <span className="text-[9px] font-black text-orange-600 uppercase tracking-widest">Authority Profile</span>
                        <span className="text-xs font-black text-orange-600">{profileCompletion}%</span>
                    </div>
                    <Progress value={profileCompletion} className="h-1.5 bg-orange-100 [&>div]:bg-orange-500" />
                    <p className="text-[8px] font-bold text-orange-500 uppercase tracking-tighter">National Framework Active</p>
                </div>
            </div>

            {/* SCROLLABLE NAVIGATION AREA */}
            <nav className="flex-1 px-4 overflow-y-auto custom-scrollbar space-y-1 pb-10">

                <NavItem href="/dashboard/ndma" icon={<LayoutDashboard size={18} />} label="Dashboard" active={pathname === '/dashboard/ndma'} />

                <NavItem href="/dashboard/central/ndma/profile" icon={<UserCircle size={18} />} label="Profile & Division Details" active={pathname === '/dashboard/central/ndma/profile'} />

                {/* DATA ENTRY */}
                <Accordion type="single" collapsible className="border-none">
                    <AccordionItem value="data-entry" className="border-none">
                        <AccordionTrigger className="flex items-center justify-between p-3.5 rounded-xl text-slate-500 hover:bg-orange-50 hover:text-orange-700 hover:no-underline group transition-colors">
                            <div className="flex items-center gap-3">
                                <Database size={18} className="text-slate-400 group-hover:text-orange-600" />
                                <span className="text-[10px] font-black uppercase tracking-widest">Data Entry</span>
                            </div>
                        </AccordionTrigger>
                        <AccordionContent className="pl-6 space-y-1 pb-4">
                            <SubNavItem link="/dashboard/central/ndma/data-entry/national-advisories" label="National Advisories & Directions" />
                            <SubNavItem link="/dashboard/central/ndma/data-entry/disaster-guidelines" label="Disaster-wise PwD Guidelines" />
                            <SubNavItem link="/dashboard/central/ndma/data-entry/early-warnings" label="Alerts & Early Warnings" />
                            <SubNavItem link="/dashboard/central/ndma/data-entry/state-preparedness" label="Review State Preparedness" />
                            <SubNavItem link="/dashboard/central/ndma/data-entry/meetings-proceedings" label="Meetings & Proceedings" />
                        </AccordionContent>
                    </AccordionItem>

                    {/* FACT SHEETS */}
                    <AccordionItem value="fact-sheets" className="border-none">
                        <AccordionTrigger className="flex items-center justify-between p-3.5 rounded-xl text-slate-500 hover:bg-blue-50 hover:text-blue-700 hover:no-underline group transition-colors">
                            <div className="flex items-center gap-3">
                                <FileText size={18} className="text-slate-400 group-hover:text-blue-600" />
                                <span className="text-[10px] font-black uppercase tracking-widest">Fact Sheets</span>
                            </div>
                        </AccordionTrigger>
                        <AccordionContent className="pl-6 space-y-1 pb-4">
                            <SubNavItem link="/dashboard/central/ndma/fact-sheets/national" label="National Disaster Fact Sheet" />
                            <SubNavItem link="/dashboard/central/ndma/fact-sheets/state" label="State Disaster Fact Sheet" />
                            <SubNavItem link="/dashboard/central/ndma/fact-sheets/district" label="District Disaster Fact Sheet" />
                            <SubNavItem link="/dashboard/central/ndma/fact-sheets/shelter" label="Shelter Capacity Fact Sheet" />
                        </AccordionContent>
                    </AccordionItem>

                    {/* REPORTS */}
                    <AccordionItem value="reports" className="border-none">
                        <AccordionTrigger className="flex items-center justify-between p-3.5 rounded-xl text-slate-500 hover:bg-emerald-50 hover:text-emerald-700 hover:no-underline group transition-colors">
                            <div className="flex items-center gap-3">
                                <FileBarChart size={18} className="text-slate-400 group-hover:text-emerald-600" />
                                <span className="text-[10px] font-black uppercase tracking-widest">Statutory Reports</span>
                            </div>
                        </AccordionTrigger>
                        <AccordionContent className="pl-6 space-y-1 pb-4 flex flex-col">
                            <SubNavItem link="/dashboard/central/ndma/reports/national-preparedness" label="National Risk & Preparedness" />
                            <SubNavItem link="/dashboard/central/ndma/reports/state-comparative" label="State Comparative Preparedness" />
                            <SubNavItem link="/dashboard/central/ndma/reports/shelter-capacity" label="Shelter Accessibility & Capacity" />
                            <SubNavItem link="/dashboard/central/ndma/reports/evacuation-transport" label="Evacuation & Transport Readiness" />
                            <SubNavItem link="/dashboard/central/ndma/reports/early-warning-coverage" label="Early Warning Coverage" />
                            <SubNavItem link="/dashboard/central/ndma/reports/mock-drill" label="Mock Drill & Capacity Building" />
                            <SubNavItem link="/dashboard/central/ndma/reports/post-disaster" label="Post-Disaster Response" />
                            <SubNavItem link="/dashboard/central/ndma/reports/advisories-compliance" label="Advisories & Compliance" />
                            <SubNavItem link="/dashboard/central/ndma/reports/annual-report" label="Annual Preparedness Report" />
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>

                {/* SEARCH */}
                <div className="pt-2">
                    <NavItem href="/dashboard/central/ndma/search/quick" icon={<Search size={18} />} label="Quick Search" />
                    <NavItem href="/dashboard/central/ndma/search/advanced" icon={<Database size={18} />} label="Advanced Search" />
                </div>

                {/* GENERATIVE AI */}
                <div className="mt-4 pt-4 border-t border-indigo-50">
                    <p className="text-[8px] font-black text-purple-500 uppercase tracking-[0.3em] ml-4 mb-2">Artificial Intelligence</p>
                    <NavItem 
                        href="/dashboard/central/ndma/ai/national-risk" 
                        icon={<Sparkles size={18} />} 
                        label="AI National Risk Summary" 
                        color="text-purple-600" 
                    />
                    <NavItem 
                        href="/dashboard/central/ndma/ai/state-preparedness" 
                        icon={<Activity size={18} />} 
                        label="AI State Preparedness Summary" 
                        color="text-purple-600" 
                    />
                    <NavItem 
                        href="/dashboard/central/ndma/ai/draft-advisories" 
                        icon={<PenTool size={18} />} 
                        label="AI Drafting of Advisories" 
                        color="text-purple-600" 
                    />
                </div>

                {/* COMMON */}
                <div className="mt-4 pt-4 border-t border-indigo-50">
                    <NavItem href="/dashboard/central/ndma/contact" icon={<Phone size={18} />} label="Contact Us" />
                    <NavItem href="/dashboard/central/ndma/faq" icon={<HelpCircle size={18} />} label="FAQ" />
                    <NavItem href="/dashboard/central/ndma/help" icon={<Headphones size={18} />} label="Help & Support" />
                    <NavItem href="/dashboard/central/ndma/settings" icon={<Settings size={18} />} label="Settings" />
                </div>
            </nav>

            {/* LOG OUT */}
            <div className="p-4 border-t border-indigo-50 bg-indigo-50/30">
                <Link href="/login" className="w-full flex items-center gap-3 p-4 rounded-xl text-slate-500 hover:text-red-600 hover:bg-red-50 transition-all font-black text-[11px] uppercase tracking-widest">
                    <LogOut size={18} />
                    Log Out
                </Link>
            </div>
        </div>
    );
}

/* UI HELPERS */
function NavItem({ href, icon, label, active = false, color }: any) {
    return (
        <Link href={href} className={`w-full flex items-center justify-between p-3.5 rounded-xl transition-all group ${active ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-md shadow-orange-200' : 'text-slate-500 hover:bg-indigo-50 hover:text-indigo-700'}`}>
            <div className="flex items-center gap-3">
                <span className={`${active ? 'text-white' : color || 'text-slate-400 group-hover:text-indigo-600'} transition-colors`}>{icon}</span>
                <span className="text-[10px] font-black uppercase tracking-[0.15em] leading-none">{label}</span>
            </div>
        </Link>
    );
}

function SubNavItem({ link, label }: { link: string, label: string }) {
    return (
        <Link href={link} className="w-full flex text-left p-2.5 rounded-lg text-[10px] font-bold uppercase tracking-tight text-slate-500 hover:text-indigo-700 hover:bg-indigo-50 transition-all">
            {label}
        </Link>
    );
}