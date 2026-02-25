// components/dashboard/EstSidebar.tsx
"use client";
import React from 'react';
import {
    LayoutDashboard,
    Building2,
    MessageSquare,
    ShieldCheck,
    Gavel,
    FileBarChart,
    HelpCircle,
    Settings,
    LogOut,
    ShieldAlert,
    ChevronRight,
    Sparkles
} from "lucide-react";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function EstSidebar() {
    const pathname = usePathname();

    return (
        <div className="w-80 h-screen bg-white border-r border-slate-200 flex flex-col font-sans sticky top-0">

            {/* 1. INSTITUTIONAL BRANDING - VIBRANT */}
            <div className="p-8 pb-4">
                <div className="flex items-center gap-4 mb-6">
                    <div className="h-12 w-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-200 transition-transform hover:scale-110">
                        <ShieldAlert className="text-white h-7 w-7" />
                    </div>
                    <div>
                        <h2 className="text-2xl font-black text-slate-900 tracking-tighter leading-none">DAEGS</h2>
                        <p className="text-[10px] font-black text-blue-600 uppercase tracking-[0.2em] mt-1">Institutional</p>
                    </div>
                </div>

            </div>

            {/* 2. STATUTORY MENU */}
            <nav className="flex-1 px-4 pt-2 space-y-1.5 overflow-y-auto custom-scrollbar">

                <p className="text-[9px] font-black text-slate-400 uppercase tracking-[0.3em] ml-4 mb-3">Menu</p>

                <NavItem
                    href="/dashboard/establishment"
                    icon={<LayoutDashboard size={18} />}
                    label="Dashboard"
                    active={pathname === '/dashboard/establishment'}
                />

                <NavItem
                    href="/dashboard/establishment/profile"
                    icon={<Building2 size={18} />}
                    label="Establishment Profile"
                    active={pathname === '/dashboard/establishment/profile'}
                />

                <NavItem
                    href="/dashboard/establishment/grievances"
                    icon={<MessageSquare size={18} />}
                    label="Grievances & Accessibility"
                    active={pathname === '/dashboard/establishment/grievances'}
                    badge="14"
                />

                <NavItem
                    href="/dashboard/establishment/compliance"
                    icon={<ShieldCheck size={18} />}
                    label="PwD Compliance & EO Policy"
                    active={pathname === '/dashboard/establishment/compliance'}
                />

                <NavItem
                    href="/dashboard/establishment/orders"
                    icon={<Gavel size={18} />}
                    label="Directions & Orders"
                    active={pathname === '/dashboard/establishment/orders'}
                    badge="03"
                />

                <NavItem
                    href="/dashboard/establishment/reports"
                    icon={<FileBarChart size={18} />}
                    label="Statutory Reports"
                    active={pathname === '/dashboard/establishment/reports'}
                />

                {/* 3. SYSTEM SECTION */}
                <div className="pt-8 mt-8 border-t border-slate-100">
                    <p className="text-[9px] font-black text-slate-400 uppercase tracking-[0.3em] ml-4 mb-3">System Hub</p>
                    <NavItem
                        href="/dashboard/establishment/help"
                        icon={<HelpCircle size={18} />}
                        label="Help & Support"
                        active={pathname === '/dashboard/establishment/help'}
                    />
                    <NavItem
                        href="/dashboard/establishment/settings"
                        icon={<Settings size={18} />}
                        label="Settings"
                        active={pathname === '/dashboard/establishment/settings'}
                    />
                </div>
            </nav>

            {/* 4. LOG OUT - DIGNIFIED RED */}
            <div className="p-4 border-t border-slate-100 bg-slate-50/50">
                <Link href="/" className="w-full flex items-center justify-between p-4 rounded-xl text-slate-500 hover:text-red-600 hover:bg-red-50 transition-all group">
                    <div className="flex items-center gap-3">
                        <LogOut size={18} className="group-hover:-translate-x-1 transition-transform" />
                        <span className="text-[11px] font-black uppercase tracking-widest">Logout</span>
                    </div>
                    <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
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
            className={`w-full flex items-center justify-between p-4 rounded-2xl transition-all duration-300 group relative overflow-hidden ${active
                ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-xl shadow-blue-200 scale-[1.02]'
                : 'text-slate-500 hover:bg-blue-50/50 hover:text-blue-700'
                }`}
        >
            {/* Active Texture Overlay */}
            {active && (
                <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/topography.png')]" />
            )}

            <div className="flex items-center gap-3 relative z-10">
                <span className={`${active ? 'text-white' : 'text-slate-400 group-hover:text-blue-600'} transition-all duration-300 group-hover:scale-110`}>
                    {icon}
                </span>
                <span className={`text-[10px] font-black uppercase tracking-[0.12em] leading-none ${active ? 'text-white' : 'text-slate-600'}`}>
                    {label}
                </span>
            </div>

            {badge && !active && (
                <span className="bg-red-500 text-white text-[9px] font-black px-2 py-0.5 rounded-lg min-w-[22px] text-center shadow-md animate-in zoom-in-50 duration-500 relative z-10">
                    {badge}
                </span>
            )}

            {active && (
                <div className="h-1.5 w-1.5 rounded-full bg-white animate-pulse relative z-10" />
            )}
        </Link>
    );
}