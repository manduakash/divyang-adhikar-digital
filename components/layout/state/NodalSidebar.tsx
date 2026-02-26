// components/dashboard/StateSidebar.tsx
"use client";
import React from 'react';
import {
    LayoutDashboard,
    BarChart3,
    Building2,
    Accessibility,
    Briefcase,
    GraduationCap,
    ShieldAlert,
    Scale,
    Gavel,
    FileBarChart,
    Bell,
    Settings,
    LogOut,
    Map,
    ShieldCheck
} from "lucide-react";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function StateSidebar() {
    const pathname = usePathname();

    return (
        <div className="w-80 h-screen bg-white border-r border-slate-200 flex flex-col font-sans sticky top-0">

            {/* 1. STATE AUTHORITY BRANDING */}
            <div className="p-8 pb-6">
                <div className="flex items-center gap-3 mb-6">
                    <div className="h-10 w-10 bg-purple-700 rounded-xl flex items-center justify-center shadow-lg shadow-purple-200 transition-transform hover:scale-110">
                        <ShieldCheck className="text-white h-6 w-6" />
                    </div>
                    <div>
                        <h2 className="text-xl font-black text-slate-900 tracking-tighter leading-none uppercase">DAEGS</h2>
                        <p className="text-[9px] font-bold text-purple-600 uppercase tracking-[0.2em] mt-1">State Nodal Authority</p>
                    </div>
                </div>

                {/* State Jurisdiction Badge */}
                <div className="bg-purple-50 border border-purple-100 rounded-2xl p-4 flex items-center gap-3">
                    <div className="h-8 w-8 bg-white rounded-lg flex items-center justify-center shadow-sm border border-purple-100">
                        <Map size={16} className="text-purple-600" />
                    </div>
                    <div>
                        <p className="text-[10px] font-black text-slate-900 uppercase tracking-tight leading-none">West Bengal</p>
                        <p className="text-[8px] font-bold text-purple-500 uppercase tracking-widest mt-1 italic text-nowrap">Directorate of Divyangjan</p>
                    </div>
                </div>
            </div>

            {/* 2. SUPERVISORY MENU (LHS Items 1-11) */}
            <nav className="flex-1 px-4 pt-4 space-y-1 overflow-y-auto custom-scrollbar">

                <NavItem href="/dashboard/state" icon={<LayoutDashboard size={18} />} label="Dashboard" active={pathname === '/dashboard/state'} />

                <NavItem href="/dashboard/state/state-nodal/districts" icon={<BarChart3 size={18} />} label="District Performance" active={pathname === '/dashboard/state/state-nodal/districts'} />

                <div className="pt-4 pb-2 ml-4">
                    <p className="text-[8px] font-black text-slate-400 uppercase tracking-[0.3em]">Compliance Monitoring</p>
                </div>

                <NavItem href="/dashboard/state/state-nodal/establishments" icon={<Building2 size={18} />} label="Establishments" active={pathname === '/dashboard/state/state-nodal/establishments'} />

                <NavItem href="/dashboard/state/state-nodal/accessibility" icon={<Accessibility size={18} />} label="Accessibility" active={pathname === '/dashboard/state/state-nodal/accessibility'} />

                <NavItem href="/dashboard/state/state-nodal/employment" icon={<Briefcase size={18} />} label="Employment & Vacancy" active={pathname === '/dashboard/state/state-nodal/employment'} />

                <NavItem href="/dashboard/state/state-nodal/education" icon={<GraduationCap size={18} />} label="Education Compliance" active={pathname === '/dashboard/state/state-nodal/education'} />

                <NavItem href="/dashboard/state/state-nodal/disaster" icon={<ShieldAlert size={18} />} label="Disaster (PwD)" active={pathname === '/dashboard/state/state-nodal/disaster'} />

                <div className="pt-4 pb-2 ml-4">
                    <p className="text-[8px] font-black text-slate-400 uppercase tracking-[0.3em]">Statutory & Legal</p>
                </div>

                <NavItem href="/dashboard/state/state-nodal/prosecution" icon={<Scale size={18} />} label="Prosecution Status" active={pathname === '/dashboard/state/state-nodal/prosecution'} badge="View Only" isLocked />

                <NavItem href="/dashboard/state/state-nodal/inspections" icon={<Gavel size={18} />} label="Inspections & Directions" active={pathname === '/dashboard/state/state-nodal/inspections'} badge="14" />

                <NavItem href="/dashboard/state/state-nodal/reports" icon={<FileBarChart size={18} />} label="Statutory Reports" active={pathname === '/dashboard/state/state-nodal/reports'} />

                <NavItem href="/dashboard/state/state-nodal/alerts" icon={<Bell size={18} />} label="Alerts & Reminders" active={pathname === '/dashboard/state/state-nodal/alerts'} badge="22" />

                <div className="pt-6 mt-6 border-t border-slate-50">
                    <NavItem href="/dashboard/state/state-nodal/settings" icon={<Settings size={18} />} label="Settings" active={pathname === '/dashboard/state/state-nodal/settings'} />
                </div>
            </nav>

            {/* 4. LOG OUT */}
            <div className="p-4 border-t border-slate-100 bg-slate-50/50">
                <Link href="/login" className="w-full flex items-center gap-3 p-4 rounded-xl text-slate-500 hover:text-purple-700 transition-all font-black text-[11px] uppercase tracking-widest">
                    <LogOut size={18} />
                    Log Out
                </Link>
            </div>
        </div>
    );
}

function NavItem({ href, icon, label, active = false, badge, isLocked }: any) {
    return (
        <Link href={href} className={`w-full flex items-center justify-between p-3.5 rounded-xl transition-all group ${active ? 'bg-purple-700 text-white shadow-xl shadow-purple-200' : 'text-slate-500 hover:bg-purple-50 hover:text-purple-700'}`}>
            <div className="flex items-center gap-3">
                <span className={`${active ? 'text-purple-300' : 'text-slate-400 group-hover:text-purple-600'} transition-colors`}>{icon}</span>
                <span className="text-[10px] font-black uppercase tracking-[0.15em] leading-none">{label}</span>
            </div>
            {badge && (
                <span className={`text-[8px] font-black px-2 py-0.5 rounded-md min-w-[20px] text-center ${isLocked ? 'bg-slate-100 text-slate-400' : 'bg-purple-100 text-purple-600'}`}>
                    {badge}
                </span>
            )}
        </Link>
    );
}