// components/dashboard/district/DEOSidebar.tsx
"use client";
import React from 'react';
import {
    LayoutDashboard,
    MessageSquare,
    School,
    Accessibility,
    Building2,
    Gavel,
    FileBarChart,
    Bell,
    Settings,
    LogOut,
    GraduationCap,
    BookOpenCheck
} from "lucide-react";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function DEOSidebar() {
    const pathname = usePathname();

    return (
        <div className="w-80 h-screen bg-white border-r border-slate-200 flex flex-col font-sans sticky top-0">

            {/* 1. BRANDING & EDUCATION CONTEXT */}
            <div className="p-8 pb-6">
                <div className="flex items-center gap-3 mb-6">
                    <div className="h-10 w-10 bg-slate-900 rounded-xl flex items-center justify-center shadow-lg shadow-slate-200">
                        <GraduationCap className="text-blue-400 h-6 w-6" />
                    </div>
                    <div>
                        <h2 className="text-xl font-black text-slate-900 tracking-tighter leading-none">DAEGS</h2>
                        <p className="text-[9px] font-bold text-slate-400 uppercase tracking-[0.2em] mt-1">Education Authority</p>
                    </div>
                </div>

                {/* DEO Authority Badge */}
                <div className="bg-blue-50 border border-blue-100 rounded-2xl p-4 flex items-center gap-3">
                    <div className="h-8 w-8 bg-white rounded-lg flex items-center justify-center shadow-sm border border-blue-100">
                        <School size={16} className="text-blue-600" />
                    </div>
                    <div>
                        <p className="text-[10px] font-black text-slate-900 uppercase tracking-tight">Lucknow Region</p>
                        <p className="text-[8px] font-bold text-blue-600 uppercase tracking-widest">Office of the DEO</p>
                    </div>
                </div>
            </div>

            {/* 2. STATUTORY MENU (Items 1-8) */}
            <nav className="flex-1 px-4 pt-4 space-y-1 overflow-y-auto custom-scrollbar">

                <NavItem
                    href="/dashboard/district/deo"
                    icon={<LayoutDashboard size={18} />}
                    label="Dashboard"
                    active={pathname === '/dashboard/district/deo'}
                />

                <NavItem
                    href="/dashboard/district/deo/grievances"
                    icon={<MessageSquare size={18} />}
                    label="Education Grievances"
                    active={pathname === '/dashboard/district/deo/grievances'}
                    badge="18"
                />

                <NavItem
                    href="/dashboard/district/deo/compliance"
                    icon={<BookOpenCheck size={18} />}
                    label="Institution Compliance"
                    active={pathname === '/dashboard/district/deo/compliance'}
                />

                <NavItem
                    href="/dashboard/district/deo/accommodation"
                    icon={<Accessibility size={18} />}
                    label="Reasonable Accommodation"
                    active={pathname === '/dashboard/district/deo/accommodation'}
                    badge="05"
                />

                <NavItem
                    href="/dashboard/district/deo/accessibility"
                    icon={<Building2 size={18} />}
                    label="Accessibility in Schools"
                    active={pathname === '/dashboard/district/deo/accessibility'}
                />

                <NavItem
                    href="/dashboard/district/deo/inspections"
                    icon={<Gavel size={18} />}
                    label="Inspections & Directions"
                    active={pathname === '/dashboard/district/deo/inspections'}
                />

                <NavItem
                    href="/dashboard/district/deo/reports"
                    icon={<FileBarChart size={18} />}
                    label="Statutory Reports"
                    active={pathname === '/dashboard/district/deo/reports'}
                />

                <NavItem
                    href="/dashboard/district/deo/alerts"
                    icon={<Bell size={18} />}
                    label="Alerts & Reminders"
                    active={pathname === '/dashboard/district/deo/alerts'}
                    badge="09"
                />

                {/* 3. SYSTEM CONFIG */}
                <div className="pt-6 mt-6 border-t border-slate-50">
                    <NavItem
                        href="/dashboard/district/deo/settings"
                        icon={<Settings size={18} />}
                        label="Settings"
                        active={pathname === '/dashboard/district/deo/settings'}
                    />
                </div>
            </nav>

            {/* 4. LOG OUT (Item 10) */}
            <div className="p-4 border-t border-slate-100 bg-slate-50/30">
                <button className="w-full flex items-center gap-3 p-4 rounded-xl text-slate-500 hover:text-red-600 hover:bg-red-50 transition-all font-black text-[11px] uppercase tracking-widest">
                    <LogOut size={18} />
                    Exit Dashboard
                </button>
            </div>
        </div>
    );
}

function NavItem({ href, icon, label, active = false, badge }: { href: string, icon: React.ReactNode, label: string, active?: boolean, badge?: string }) {
    return (
        <Link
            href={href}
            className={`w-full flex items-center justify-between p-3.5 rounded-xl transition-all group ${active
                ? 'bg-blue-600 text-white shadow-xl shadow-blue-200'
                : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'
                }`}
        >
            <div className="flex items-center gap-3">
                <span className={`${active ? 'text-white' : 'text-slate-400 group-hover:text-blue-600'} transition-colors`}>
                    {icon}
                </span>
                <span className="text-[10px] font-black uppercase tracking-[0.15em]">{label}</span>
            </div>

            {badge && !active && (
                <span className="bg-blue-100 text-blue-700 text-[9px] font-black px-2 py-0.5 rounded-md min-w-[20px] text-center">
                    {badge}
                </span>
            )}
        </Link>
    );
}