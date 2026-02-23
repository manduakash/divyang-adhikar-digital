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
    ShieldAlert
} from "lucide-react";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function EstSidebar() {
    const pathname = usePathname();

    return (
        <div className="w-80 h-screen bg-white border-r border-slate-200 flex flex-col font-sans sticky top-0">

            {/* 1. INSTITUTIONAL BRANDING */}
            <div className="p-8 pb-4">
                <div className="flex items-center gap-3">
                    <div className="h-10 w-10 bg-slate-900 rounded-xl flex items-center justify-center shadow-lg shadow-slate-200 transition-transform hover:scale-105">
                        <ShieldAlert className="text-white h-6 w-6" />
                    </div>
                    <div>
                        <h2 className="text-xl font-black text-slate-900 tracking-tighter leading-none">DAEGS</h2>
                        <p className="text-[9px] font-bold text-slate-400 uppercase tracking-[0.2em] mt-1 italic">Institutional Response</p>
                    </div>
                </div>
            </div>

            {/* 2. STATUTORY MENU (Items 1-6) */}
            <nav className="flex-1 px-4 pt-10 space-y-1.5 overflow-y-auto custom-scrollbar">

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

                {/* 3. SYSTEM MENU (Items 7-8) */}
                <div className="pt-8 mt-8 border-t border-slate-100">
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

            {/* 4. LOG OUT (Item 9) */}
            <div className="p-4 border-t border-slate-100">
                <button className="w-full flex items-center gap-3 p-4 rounded-xl text-red-500 hover:bg-red-50 transition-all font-black text-[11px] uppercase tracking-widest">
                    <LogOut size={18} />
                    Log Out
                </button>
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
                <span className="bg-red-500 text-white text-[9px] font-black px-2 py-0.5 rounded-md min-w-[20px] text-center shadow-sm">
                    {badge}
                </span>
            )}
        </Link>
    );
}