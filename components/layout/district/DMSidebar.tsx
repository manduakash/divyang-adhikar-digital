// components/dashboard/DistrictSidebar.tsx
"use client";
import React from 'react';
import {
    LayoutDashboard,
    ShieldCheck,
    Building2,
    Accessibility,
    Briefcase,
    Gavel,
    Scale,
    FileBarChart,
    Bell,
    Settings,
    LogOut,
    MapPin,
    ShieldAlert
} from "lucide-react";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function DistrictSidebar() {
    const pathname = usePathname();

    return (
        <div className="w-80 h-screen bg-white border-r border-slate-200 flex flex-col font-sans sticky top-0">

            {/* 1. BRANDING & DISTRICT CONTEXT */}
            <div className="p-8 pb-6">
                <div className="flex items-center gap-3 mb-6">
                    <div className="h-10 w-10 bg-slate-900 rounded-xl flex items-center justify-center shadow-lg shadow-slate-200">
                        <ShieldCheck className="text-blue-400 h-6 w-6" />
                    </div>
                    <div>
                        <h2 className="text-xl font-black text-slate-900 tracking-tighter leading-none">DAEGS</h2>
                        <p className="text-[9px] font-bold text-slate-400 uppercase tracking-[0.2em] mt-1">District Administration</p>
                    </div>
                </div>

                {/* District Nodal Authority Badge */}
                <div className="bg-slate-50 border border-slate-100 rounded-2xl p-4 flex items-center gap-3">
                    <div className="h-8 w-8 bg-white rounded-lg flex items-center justify-center shadow-sm border border-slate-100">
                        <MapPin size={16} className="text-blue-600" />
                    </div>
                    <div>
                        <p className="text-[10px] font-black text-slate-900 uppercase tracking-tight">Lucknow District</p>
                        <p className="text-[8px] font-bold text-slate-400 uppercase tracking-widest">Nodal Authority</p>
                    </div>
                </div>
            </div>

            {/* 2. SUPERVISORY MENU (LHS Items 1-9) */}
            <nav className="flex-1 px-4 pt-4 space-y-1 overflow-y-auto custom-scrollbar">

                <NavItem
                    href="/dashboard/district/dm"
                    icon={<LayoutDashboard size={18} />}
                    label="Dashboard"
                    active={pathname === '/dashboard/district/dm'}
                />

                <NavItem
                    href="/dashboard/district/dm/grievances"
                    icon={<ShieldAlert size={18} />}
                    label="Grievances (Supervisory)"
                    active={pathname === '/dashboard/district/dm/grievances'}
                    badge="42"
                />

                <NavItem
                    href="/dashboard/district/dm/establishments"
                    icon={<Building2 size={18} />}
                    label="Establishment Compliance"
                    active={pathname === '/dashboard/district/dm/establishments'}
                />

                <NavItem
                    href="/dashboard/district/dm/accessibility"
                    icon={<Accessibility size={18} />}
                    label="Accessibility Compliance"
                    active={pathname === '/dashboard/district/dm/accessibility'}
                />

                <NavItem
                    href="/dashboard/district/dm/employment"
                    icon={<Briefcase size={18} />}
                    label="Employment & Vacancy"
                    active={pathname === '/dashboard/district/dm/employment'}
                />

                <NavItem
                    href="/dashboard/district/dm/inspections"
                    icon={<Gavel size={18} />}
                    label="Inspections & Directions"
                    active={pathname === '/dashboard/district/dm/inspections'}
                    badge="08"
                />

                <NavItem
                    href="/dashboard/district/dm/prosecution"
                    icon={<Scale size={18} />}
                    label="Prosecution Status"
                    active={pathname === '/dashboard/district/dm/prosecution'}
                />

                <NavItem
                    href="/dashboard/district/dm/reports"
                    icon={<FileBarChart size={18} />}
                    label="Statutory Reports"
                    active={pathname === '/dashboard/district/dm/reports'}
                />

                <NavItem
                    href="/dashboard/district/dm/alerts"
                    icon={<Bell size={18} />}
                    label="Alerts & Reminders"
                    active={pathname === '/dashboard/district/dm/alerts'}
                    badge="12"
                />

                {/* 3. SYSTEM CONFIG */}
                <div className="pt-6 mt-6 border-t border-slate-50">
                    <NavItem
                        href="/dashboard/district/dm/settings"
                        icon={<Settings size={18} />}
                        label="Settings"
                        active={pathname === '/dashboard/district/dm/settings'}
                    />
                </div>
            </nav>

            {/* 4. LOG OUT (Item 11) */}
            <div className="p-4 border-t border-slate-100 bg-slate-50/50">
                <Link href="/login" className="w-full flex items-center gap-3 p-4 rounded-xl text-slate-500 hover:text-red-600 hover:bg-red-50 transition-all font-black text-[11px] uppercase tracking-widest">
                    <LogOut size={18} />
                    Log Out
                </Link>
            </div>
        </div>
    );
}

/* UI HELPER COMPONENT */

function NavItem({ href, icon, label, active = false, badge }: { href: string, icon: React.ReactNode, label: string, active?: boolean, badge?: string }) {
    return (
        <Link
            href={href}
            className={`w-full flex items-center justify-between p-3.5 rounded-xl transition-all group ${active
                ? 'bg-slate-900 text-white shadow-xl'
                : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'
                }`}
        >
            <div className="flex items-center gap-3">
                <span className={`${active ? 'text-blue-400' : 'text-slate-400 group-hover:text-blue-600'} transition-colors`}>
                    {icon}
                </span>
                <span className="text-[10px] font-black uppercase tracking-[0.15em] leading-none">{label}</span>
            </div>

            {badge && !active && (
                <span className="bg-blue-600 text-white text-[9px] font-black px-2 py-0.5 rounded-md min-w-[20px] text-center">
                    {badge}
                </span>
            )}
        </Link>
    );
}