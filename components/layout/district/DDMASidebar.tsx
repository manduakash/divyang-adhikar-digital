// components/dashboard/DDMASidebar.tsx
"use client";
import React from 'react';
import {
    LayoutDashboard,
    Map,
    ShieldCheck,
    Siren,
    Home,
    Truck,
    FileBarChart,
    Bell,
    Settings,
    LogOut,
    Navigation,
    Activity
} from "lucide-react";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function DDMASidebar() {
    const pathname = usePathname();

    return (
        <div className="w-80 h-screen bg-white border-r border-slate-200 flex flex-col font-sans sticky top-0">

            {/* 1. DISASTER AUTHORITY BRANDING (Light Theme) */}
            <div className="p-8 pb-6">
                <div className="flex items-center gap-3 mb-6">
                    <div className="h-10 w-10 bg-orange-600 rounded-xl flex items-center justify-center shadow-lg shadow-orange-100 transition-transform hover:scale-105">
                        <ShieldCheck className="text-white h-6 w-6" />
                    </div>
                    <div>
                        <h2 className="text-xl font-black text-slate-900 tracking-tighter leading-none uppercase">DAEGS</h2>
                        <p className="text-[9px] font-bold text-orange-600 uppercase tracking-[0.2em] mt-1">Disaster Authority</p>
                    </div>
                </div>

                {/* Live Node Badge - High Contrast Light Mode */}
                <div className="bg-orange-50 border border-orange-100 rounded-2xl p-4 flex items-center gap-3">
                    <div className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
                    </div>
                    <div>
                        <p className="text-[10px] font-black text-slate-800 uppercase tracking-tight leading-none">Active Emergency Nodal</p>
                        <p className="text-[8px] font-bold text-orange-700 uppercase tracking-widest mt-1">DDMA West Bengal</p>
                    </div>
                </div>
            </div>

            {/* 2. STATUTORY MENU (Items 1-8) */}
            <nav className="flex-1 px-4 pt-4 space-y-1 overflow-y-auto custom-scrollbar">

                <NavItem
                    href="/dashboard/district/ddma"
                    icon={<LayoutDashboard size={18} />}
                    label="Dashboard"
                    active={pathname === '/dashboard/district/ddma'}
                />

                <NavItem
                    href="/dashboard/district/ddma/mapping"
                    icon={<Map size={18} />}
                    label="PwD Disaster Mapping"
                    active={pathname === '/dashboard/district/ddma/mapping'}
                />

                <NavItem
                    href="/dashboard/district/ddma/planning"
                    icon={<Navigation size={18} />}
                    label="Preparedness & Planning"
                    active={pathname === '/dashboard/district/ddma/planning'}
                />

                <NavItem
                    href="/dashboard/district/ddma/response"
                    icon={<Siren size={18} />}
                    label="Emergency Requests"
                    active={pathname === '/dashboard/district/ddma/response'}
                    badge="14"
                />

                <NavItem
                    href="/dashboard/district/ddma/shelters"
                    icon={<Home size={18} />}
                    label="Shelter Accessibility"
                    active={pathname === '/dashboard/district/ddma/shelters'}
                />

                <NavItem
                    href="/dashboard/district/ddma/resources"
                    icon={<Truck size={18} />}
                    label="Resource Mapping"
                    active={pathname === '/dashboard/district/ddma/resources'}
                />

                <NavItem
                    href="/dashboard/district/ddma/reports"
                    icon={<FileBarChart size={18} />}
                    label="Statutory Reports"
                    active={pathname === '/dashboard/district/ddma/reports'}
                />

                {/* <NavItem
                    href="/dashboard/district/ddma/alerts"
                    icon={<Bell size={18} />}
                    label="Alerts & Reminders"
                    active={pathname === '/dashboard/district/ddma/alerts'}
                    badge="03"
                /> */}

                <NavItem
                    href="/dashboard/district/ddma/settings"
                    icon={<Settings size={18} />}
                    label="Settings"
                    active={pathname === '/dashboard/district/ddma/settings'}
                />
            </nav>

            {/* 3. LOG OUT - Professional Light Theme */}
            <div className="p-4 border-t border-slate-100 bg-slate-50/50">
                <Link href="/login" className="w-full flex items-center gap-3 p-4 rounded-xl text-slate-500 hover:text-red-600 hover:bg-red-50 transition-all font-black text-[11px] uppercase tracking-widest">
                    <LogOut size={18} className='text-red-600' />
                    Logout
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
                ? 'bg-slate-900 text-white shadow-xl shadow-slate-200'
                : 'text-slate-500 hover:bg-orange-50/50 hover:text-orange-600'
                }`}
        >
            <div className="flex items-center gap-3">
                <span className={`${active ? 'text-orange-400' : 'text-slate-400 group-hover:text-orange-500'} transition-colors`}>
                    {icon}
                </span>
                <span className="text-[10px] font-black uppercase tracking-[0.15em] leading-none">{label}</span>
            </div>

            {badge && !active && (
                <span className="bg-red-600 text-white text-[9px] font-black px-2 py-0.5 rounded-md min-w-[20px] text-center shadow-sm">
                    {badge}
                </span>
            )}
        </Link>
    );
}