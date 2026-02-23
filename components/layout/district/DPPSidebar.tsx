// components/dashboard/dPPSidebar.tsx
"use client";
import React from 'react';
import {
    LayoutDashboard,
    Gavel,
    History,
    Scale,
    CheckCircle2,
    FileBarChart,
    Bell,
    Settings,
    LogOut,
    ShieldCheck,
    Briefcase,
    FileText
} from "lucide-react";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function PPSidebar() {
    const pathname = usePathname();

    return (
        <div className="w-80 h-screen bg-white border-r border-slate-200 flex flex-col font-sans sticky top-0">
            
            {/* 1. JUDICIAL BRANDING */}
            <div className="p-8 pb-6">
                <div className="flex items-center gap-3 mb-6">
                    <div className="h-10 w-10 bg-slate-950 rounded-xl flex items-center justify-center shadow-lg shadow-slate-900/20 transition-transform hover:rotate-12">
                        <Scale className="text-white h-6 w-6" />
                    </div>
                    <div>
                        <h2 className="text-xl font-black text-slate-950 tracking-tighter leading-none uppercase">DAEGS</h2>
                        <p className="text-[9px] font-bold text-blue-600 uppercase tracking-[0.2em] mt-1">Prosecution Unit</p>
                    </div>
                </div>

                {/* PP Node Identity */}
                <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4 flex items-center gap-3 shadow-xl">
                    <div className="h-8 w-8 bg-white/10 rounded-lg flex items-center justify-center border border-white/10">
                        <Gavel size={16} className="text-blue-400" />
                    </div>
                    <div>
                        <p className="text-[10px] font-black text-white uppercase tracking-tight">Special Prosecutor</p>
                        <p className="text-[8px] font-bold text-slate-400 uppercase tracking-widest">District Court Node</p>
                    </div>
                </div>
            </div>

            {/* 2. STATUTORY LEGAL MENU (Items 1-7) */}
            <nav className="flex-1 px-4 pt-4 space-y-1 overflow-y-auto custom-scrollbar">
                
                <NavItem 
                    href="/dashboard/dpp" 
                    icon={<LayoutDashboard size={18} />} 
                    label="Dashboard" 
                    active={pathname === '/dashboard/dpp'} 
                />
                
                <NavItem 
                    href="/dashboard/district/dpp/registry" 
                    icon={<Briefcase size={18} />} 
                    label="Case Registry" 
                    active={pathname === '/dashboard/district/dpp/registry'} 
                />

                <NavItem 
                    href="/dashboard/district/dpp/progress" 
                    icon={<History size={18} />} 
                    label="Case Progress" 
                    active={pathname === '/dashboard/district/dpp/progress'} 
                />

                <NavItem 
                    href="/dashboard/district/dpp/hearings" 
                    icon={<Scale size={18} />} 
                    label="Hearings & Orders" 
                    active={pathname === '/dashboard/district/dpp/hearings'} 
                    badge="05"
                />

                <NavItem 
                    href="/dashboard/district/dpp/compliance" 
                    icon={<CheckCircle2 size={18} />} 
                    label="Compliance Follow-up" 
                    active={pathname === '/dashboard/district/dpp/compliance'} 
                />

                <NavItem 
                    href="/dashboard/district/dpp/reports" 
                    icon={<FileBarChart size={18} />} 
                    label="Statutory Reports" 
                    active={pathname === '/dashboard/district/dpp/reports'} 
                />

                <NavItem 
                    href="/dashboard/district/dpp/alerts" 
                    icon={<Bell size={18} />} 
                    label="Alerts & Reminders" 
                    active={pathname === '/dashboard/district/dpp/alerts'} 
                    badge="12"
                />

                {/* 3. SYSTEM CONFIG */}
                <div className="pt-6 mt-6 border-t border-slate-100">
                    <NavItem 
                        href="/dashboard/district/dpp/settings" 
                        icon={<Settings size={18} />} 
                        label="Settings" 
                        active={pathname === '/dashboard/district/dpp/settings'} 
                    />
                </div>
            </nav>

            {/* 4. LOG OUT */}
            <div className="p-4 border-t border-slate-100 bg-slate-50/50">
                <Link href="/login" className="w-full flex items-center gap-3 p-4 rounded-xl text-slate-500 hover:text-red-600 hover:bg-red-50 transition-all font-black text-[11px] uppercase tracking-widest">
                    <LogOut size={18} />
                    Logout
                </Link>
            </div>
        </div>
    );
}

function NavItem({ href, icon, label, active = false, badge }: any) {
    return (
        <Link 
            href={href}
            className={`w-full flex items-center justify-between p-3.5 rounded-xl transition-all group ${
                active 
                ? 'bg-slate-950 text-white shadow-xl shadow-slate-900/40' 
                : 'text-slate-500 hover:bg-blue-50 hover:text-blue-700'
            }`}
        >
            <div className="flex items-center gap-3">
                <span className={`${active ? 'text-blue-400' : 'text-slate-400 group-hover:text-blue-600'} transition-colors`}>
                    {icon}
                </span>
                <span className="text-[10px] font-black uppercase tracking-[0.15em]">{label}</span>
            </div>
            
            {badge && !active && (
                <span className="bg-red-600 text-white text-[9px] font-black px-2 py-0.5 rounded-md min-w-[20px] text-center shadow-md">
                    {badge}
                </span>
            )}
        </Link>
    );
}