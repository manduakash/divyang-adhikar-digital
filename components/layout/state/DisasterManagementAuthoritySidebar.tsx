// components/dashboarddashboard/state/sdma/SDMA_Sidebar.tsx
"use client";
import React from 'react';
import {
  LayoutDashboard, UserCircle, Database, FileText, Search,
  Sparkles, Settings, LogOut, Siren, ShieldAlert,
  Navigation, Landmark, Activity, History, Globe,
  Briefcase, PenTool, Map, FileSearch, BadgeCheck,
  Siren as SirenIcon, Truck, Home, Megaphone,
  CheckCircle2, Bell, HelpCircle, ChevronRight
} from "lucide-react";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Progress } from "@/components/ui/progress";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export function SDMASidebar() {
  const pathname = usePathname();
  const profileCompletion = 88;

  return (
    <div className="w-85 h-screen bg-white border-r border-slate-200 flex flex-col font-sans sticky top-0 overflow-hidden shadow-sm">

      {/* 1. APEX BRANDING HUB - LIGHT THEME WITH CARBON FIBER */}
      <div className="relative p-8 pb-6 overflow-hidden">
        {/* Subtle Carbon Fiber Overlay on Light Gradient */}
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] bg-slate-100 z-0" />

        <div className="flex items-center gap-4 mb-6 relative z-10">
          <div className="h-12 w-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center text-white shadow-xl shadow-orange-200 transition-transform hover:rotate-6">
            <ShieldAlert size={28} />
          </div>
          <div>
            <h2 className="text-2xl font-black text-slate-900 tracking-tighter leading-none uppercase text-nowrap">DAEGS</h2>
            <p className="text-[9px] font-black text-orange-600 uppercase tracking-[0.2em] mt-1">State Disaster Authority</p>
          </div>
        </div>

        {/* PROFILE COMPLETION CARTRIDGE - GLASSMORPHIC LIGHT */}
        <div className="bg-white/40 backdrop-blur-md border border-slate-200 rounded-[24px] p-4 space-y-3 relative z-10 shadow-sm group hover:border-orange-200 transition-all">
          <div className="flex justify-between items-end">
            <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest leading-none">Profile Completion</span>
            <span className="text-xs font-black text-orange-600 leading-none">{profileCompletion}%</span>
          </div>
          <Progress value={profileCompletion} className="h-1 bg-slate-100 from-orange-500 to-red-500 shadow-[0_0_10px_rgba(249,115,22,0.3)]" />
          <p className="text-[8px] font-bold text-slate-400 uppercase tracking-tighter leading-none italic">Authorized Control Hub Active</p>
        </div>
      </div>

      {/* 2. STATUTORY NAVIGATION HUB */}
      <nav className="flex-1 px-4 pt-6 overflow-y-auto custom-scrollbar space-y-1 pb-10">

        <NavItem href="/dashboard/state/sdma" icon={<LayoutDashboard size={18} />} label="Dashboard" active={pathname === '/dashboard/state/sdma'} />

        <NavItem href="/dashboard/state/sdma/profile" icon={<UserCircle size={18} />} label="Profile" active={pathname === '/dashboard/state/sdma/profile'} />

        <Accordion type="single" collapsible className="border-none w-full space-y-1">

          {/* DATA ENTRY SUBMENU */}
          <AccordionItem value="data-entry" className="border-none">
            <AccordionTrigger className="flex items-center justify-between p-3.5 rounded-xl text-slate-500 hover:bg-slate-50 hover:no-underline group">
              <div className="flex items-center gap-3">
                <Database size={18} className="text-slate-400 group-hover:text-orange-600 transition-colors" />
                <span className="text-[10px] font-black uppercase tracking-widest leading-none">Data Entry</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pl-10 space-y-1 pb-2">
              <SubLink href="/dashboard/state/sdma/data-entry/directions" label="State-level Directions & Advisories" />
              <SubLink href="/dashboard/state/sdma/data-entry/compliance" label="Responses & Compliance Tracking" />
              <SubLink href="/dashboard/state/sdma/data-entry/review" label="District Preparedness Review Notes" />
              <SubLink href="/dashboard/state/sdma/data-entry/coord" label="Inter-District Coordination Notes" />
              <SubLink href="/dashboard/state/sdma/data-entry/warning" label="Early Warning Policy" />
              <SubLink href="/dashboard/state/sdma/data-entry/resource" label="Resource Allocation" />
              <SubLink href="/dashboard/state/sdma/data-entry/post-disaster" label="Post-Disaster Review" />
            </AccordionContent>
          </AccordionItem>

          {/* FACT SHEETS SUBMENU */}
          <AccordionItem value="fact-sheets" className="border-none">
            <AccordionTrigger className="flex items-center justify-between p-3.5 rounded-xl text-slate-500 hover:bg-slate-50 hover:no-underline group">
              <div className="flex items-center gap-3">
                <FileSearch size={18} className="text-slate-400 group-hover:text-orange-600 transition-colors" />
                <span className="text-[10px] font-black uppercase tracking-widest leading-none">Fact Sheets</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pl-10 space-y-1 pb-2">
              <SubLink href="/dashboard/state/sdma/fact-sheets/state" label="State Disaster–PwD Fact Sheet" />
              <SubLink href="/dashboard/state/sdma/fact-sheets/district" label="District Disaster–PwD Fact Sheet" />
              <SubLink href="/dashboard/state/sdma/fact-sheets/shelter" label="Shelter Fact Sheet" />
            </AccordionContent>
          </AccordionItem>

          {/* REPORTS SUBMENU */}
          <AccordionItem value="reports" className="border-none">
            <AccordionTrigger className="flex items-center justify-between p-3.5 rounded-xl text-slate-500 hover:bg-slate-50 hover:no-underline group">
              <div className="flex items-center gap-3">
                <FileText size={18} className="text-slate-400 group-hover:text-orange-600 transition-colors" />
                <span className="text-[11px] font-black uppercase tracking-widest leading-none">Reports</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pl-10 space-y-1 pb-2 font-sans">
              <SubLink href="/dashboard/state/sdma/reports/risk" label="State PwD Disaster Risk Summary" />
              <SubLink href="/dashboard/state/sdma/reports/district" label="District-wise PwD Risk" />
              <SubLink href="/dashboard/state/sdma/reports/access" label="Shelter Accessibility Report" />
              <SubLink href="/dashboard/state/sdma/reports/evac" label="Transport Readiness Report" />
              <SubLink href="/dashboard/state/sdma/reports/med" label="Assistive Support & Medical" />
              <SubLink href="/dashboard/state/sdma/reports/warning" label="Early Warning Coverage (PwD)" />
              <SubLink href="/dashboard/state/sdma/reports/drills" label="Mock Drill Coverage Report" />
              <SubLink href="/dashboard/state/sdma/reports/post" label="Post-Disaster Response Evaluation" />
              <SubLink href="/dashboard/state/sdma/reports/compliance" label="Directions & Compliance Status" />
              <SubLink href="/dashboard/state/sdma/reports/annual" label="Annual Disaster Preparedness" />
              <SubLink href="/dashboard/state/sdma/reports/national-submission" label="NDMA / GoI Submission" />
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <NavItem href="/dashboard/state/sdma/search" icon={<Search size={18} />} label="Search" active={pathname === '/dashboard/state/sdma/search'} />

        <div className="mt-6 pt-6 border-t border-slate-100">
          <p className="text-[9px] font-black text-orange-600 uppercase tracking-[0.3em] ml-4 mb-3">Intelligence Layer</p>
          <NavItem href="/dashboard/state/sdma/ai" icon={<Sparkles size={18} />} label="Generative AI Hub" color="text-purple-600" active={pathname === '/dashboard/state/sdma/ai'} />
        </div>

        <div className="mt-4 pt-4 border-t border-slate-100">
          <NavItem href="/dashboard/state/sdma/contact" icon={<Megaphone size={18} />} label="Contact Us" />
          <NavItem href="/dashboard/state/sdma/faq" icon={<HelpCircle size={18} />} label="FAQ" />
          <NavItem href="/dashboard/state/sdma/settings" icon={<Settings size={18} />} label="Settings" />
        </div>
      </nav>

      {/* 3. LOG OUT */}
      <div className="p-4 border-t border-slate-100 bg-slate-50/50">
        <Link href="/login" className="w-full flex items-center justify-between p-4 rounded-2xl text-slate-500 hover:text-red-600 hover:bg-red-50 transition-all font-black text-[11px] uppercase tracking-widest group">
          <div className="flex items-center gap-3">
            <LogOut size={18} className="group-hover:-translate-x-1 transition-transform" />
            Log Out
          </div>
          <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
        </Link>
      </div>
    </div>
  );
}

/* UI UTILITIES */
function NavItem({ href, icon, label, active = false, color }: any) {
  return (
    <Link href={href} className={`w-full flex items-center justify-between p-4 rounded-2xl transition-all duration-300 group relative overflow-hidden ${active ? 'bg-slate-900 text-white shadow-xl shadow-slate-200 scale-[1.02]' : 'text-slate-500 hover:bg-orange-50 hover:text-orange-700'}`}>
      <div className="flex items-center gap-3 relative z-10">
        <span className={`${active ? 'text-orange-400' : color || 'text-slate-400 group-hover:text-orange-500'} transition-all group-hover:scale-110`}>{icon}</span>
        <span className={`text-[10px] font-black uppercase tracking-[0.12em] leading-none ${active ? 'text-white' : 'text-slate-600'}`}>{label}</span>
      </div>
      {active && (
        <div className="h-1.5 w-1.5 rounded-full bg-orange-500 animate-pulse relative z-10" />
      )}
    </Link>
  );
}

function SubLink({ href, label }: any) {
  return (
    <Link href={href} className="block text-[9px] font-bold uppercase tracking-[0.15em] text-slate-400 hover:text-orange-600 hover:bg-orange-50/50 p-3 rounded-xl transition-all border-l-2 border-transparent hover:border-orange-500">
      {label}
    </Link>
  )
}