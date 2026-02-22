// components/dashboard/PwDSidebar.tsx
"use client";
import React, { useState, useEffect } from 'react';
import {
    LayoutDashboard, FolderOpen, Accessibility,
    ChevronDown, HelpCircle, Settings, LogOut,
    FileBadge, GraduationCap, Briefcase, Landmark,
    ShieldAlert, Info, Building2, UserCheck, Bell,
    UserCircle
} from "lucide-react";
import { Progress } from "@/components/ui/progress";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function PwDSidebar() {
    const pathname = usePathname();
    const [openMenus, setOpenMenus] = useState<{ [key: string]: boolean }>({
        services: false,
        information: false
    });

    // Automatically open the parent menu if a child link is active
    useEffect(() => {
        if (pathname.includes('/pwd/services')) setOpenMenus(prev => ({ ...prev, services: true }));
        if (pathname.includes('/pwd/info')) setOpenMenus(prev => ({ ...prev, information: true }));
    }, [pathname]);

    const toggleMenu = (menu: string) => {
        setOpenMenus(prev => ({ ...prev, [menu]: !prev[menu] }));
    };

    const profileCompletion = 65;

    return (
        <div className="w-80 h-screen bg-white border-r border-slate-200 flex flex-col font-sans sticky top-0">
            {/* 1. BRANDING & LOGO */}
            <div className="p-8 pb-4">
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="h-10 w-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-200 group-hover:scale-105 transition-transform">
                        <Accessibility className="text-white h-6 w-6" />
                    </div>
                    <div>
                        <h2 className="text-xl font-black text-slate-900 tracking-tighter">DAEGS</h2>
                        <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest leading-none">Divyang Digital Portal</p>
                    </div>
                </Link>
            </div>

            {/* 2. PROFILE FIRST SECTION */}
            <div className="px-6 py-6">
                <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100 group transition-all hover:border-blue-200">
                    <div className="flex items-center justify-between mb-3">
                        <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.1em]">Profile Status</span>
                        <span className="text-xs font-black text-blue-600">{profileCompletion}%</span>
                    </div>
                    <Progress value={profileCompletion} color='bg-slate-200' className="h-1.5 bg-gradient-to-r from-blue-600 to-purple-600" />
                    <p className="text-[10px] text-slate-400 mt-3 font-medium">Complete your profile to unlock all government services.</p>
                    <Link
                        href="/pwd/my-profile"
                        className={`mt-3 inline-block text-[10px] border rounded-md p-1 font-bold px-2 transition-colors hover:bg-slate-200/50 text-slate-600`}
                    >
                        Complete Now
                    </Link>
                </div>
            </div>

            {/* 3. NAVIGATION ITEMS */}
            <nav className="flex-1 px-4 space-y-1 overflow-y-auto custom-scrollbar">

                <NavItem href="/dashboard/pwd" icon={<LayoutDashboard size={18} />} label="Home" active={pathname === '/dashboard/pwd'} />
                <NavItem href="/pwd/my-profile" icon={<UserCircle size={18} />} label="My Profile" active={pathname === '/pwd/my-profile'} />
                <NavItem href="/pwd/applications" icon={<FolderOpen size={18} />} label="My Applications" active={pathname === '/pwd/applications'} badge="3" />
                <NavItem href="/pwd/grievances" icon={<Accessibility size={18} />} label="Grievances & Accessibility" active={pathname === '/pwd/grievances'} />

                {/* SERVICES DROPDOWN */}
                <div className="pt-2">
                    <button
                        onClick={() => toggleMenu('services')}
                        className={`w-full flex items-center justify-between p-3 rounded-xl transition-colors group ${pathname.includes('/pwd/services') ? 'text-blue-600 bg-blue-50/30' : 'text-slate-600 hover:bg-slate-50'
                            }`}
                    >
                        <div className="flex items-center gap-3">
                            <Briefcase size={18} className={pathname.includes('/pwd/services') ? 'text-blue-600' : 'group-hover:text-blue-600'} />
                            <span className="text-sm font-bold">Services</span>
                        </div>
                        <ChevronDown size={14} className={`transition-transform duration-300 ${openMenus.services ? 'rotate-180' : ''}`} />
                    </button>

                    {openMenus.services && (
                        <div className="ml-9 mt-1 space-y-1 animate-in slide-in-from-top-2 duration-300">
                            <SubNavItem href="/pwd/apply-for-certificate" icon={<FileBadge size={14} />} label="Apply for Certificate" active={pathname === '/pwd/apply-for-certificate'} />
                            <SubNavItem href="/pwd/education-issues" icon={<GraduationCap size={14} />} label="Education Issues" active={pathname === '/pwd/education-issues'} />
                            <SubNavItem href="/pwd/employment-issues" icon={<Briefcase size={14} />} label="Employment Issues" active={pathname === '/pwd/employment-issues'} />
                            {/* <SubNavItem href="/pwd/finance" icon={<Landmark size={14} />} label="Financial Assistance" active={pathname === '/pwd/finance'} /> */}
                            <SubNavItem href="/pwd/disaster" icon={<ShieldAlert size={14} />} label="Disaster Assistance" active={pathname === '/pwd/disaster'} />
                        </div>
                    )}
                </div>

                {/* INFORMATION DROPDOWN */}
                <div>
                    <button
                        onClick={() => toggleMenu('information')}
                        className={`w-full flex items-center justify-between p-3 rounded-xl transition-colors group ${pathname.includes('/pwd/info') ? 'text-purple-600 bg-purple-50/30' : 'text-slate-600 hover:bg-slate-50'
                            }`}
                    >
                        <div className="flex items-center gap-3">
                            <Info size={18} className={pathname.includes('/pwd/info') ? 'text-purple-600' : 'group-hover:text-purple-600'} />
                            <span className="text-sm font-bold">Information</span>
                        </div>
                        <ChevronDown size={14} className={`transition-transform duration-300 ${openMenus.information ? 'rotate-180' : ''}`} />
                    </button>

                    {openMenus.information && (
                        <div className="ml-9 mt-1 space-y-1 animate-in slide-in-from-top-2 duration-300">
                            <SubNavItem href="/pwd/info/rights" icon={<UserCheck size={14} />} label="Rights under PwD Act" active={pathname === '/pwd/info/rights'} />
                            <SubNavItem href="/pwd/info/institutions" icon={<Building2 size={14} />} label="Registered Institutions" active={pathname === '/pwd/info/institutions'} />
                            <SubNavItem href="/pwd/info/exchange" icon={<Briefcase size={14} />} label="Special Employment Exch." active={pathname === '/pwd/info/exchange'} />
                            <SubNavItem href="/pwd/info/notifications" icon={<Bell size={14} />} label="Notifications" active={pathname === '/pwd/info/notifications'} />
                        </div>
                    )}
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100">
                    <NavItem href="/pwd/help" icon={<HelpCircle size={18} />} label="Help & Support" active={pathname === '/pwd/help'} />
                    <NavItem href="/pwd/settings" icon={<Settings size={18} />} label="Settings" active={pathname === '/pwd/settings'} />
                </div>
            </nav>

            {/* 4. LOGOUT FOOTER */}
            <div className="p-4 border-t border-slate-100">
                <Link href="/login" className="w-full flex items-center gap-3 p-3 rounded-xl text-red-500 hover:bg-red-50 transition-all font-bold text-sm">
                    <LogOut size={18} />
                    Log Out
                </Link>
            </div>
        </div>
    );
}

/* HELPER COMPONENTS */

function NavItem({ href, icon, label, active = false, badge }: { href: string, icon: React.ReactNode, label: string, active?: boolean, badge?: string }) {
    return (
        <Link
            href={href}
            className={`w-full flex items-center justify-between p-3 rounded-xl transition-all group ${active ? 'bg-blue-600 text-white shadow-lg shadow-blue-100' : 'text-slate-600 hover:bg-slate-50'
                }`}
        >
            <div className="flex items-center gap-3">
                <span className={`${active ? 'text-white' : 'text-slate-400 group-hover:text-blue-600'}`}>{icon}</span>
                <span className="text-sm font-bold">{label}</span>
            </div>
            {badge && !active && (
                <span className="bg-orange-500 text-white text-[10px] font-black px-1.5 py-0.5 rounded-md min-w-[18px]">
                    {badge}
                </span>
            )}
        </Link>
    );
}

function SubNavItem({ href, icon, label, active = false }: { href: string, icon: React.ReactNode, label: string, active?: boolean }) {
    return (
        <Link
            href={href}
            className={`w-full flex items-center gap-3 p-2.5 rounded-lg transition-all ${active ? 'text-blue-600 bg-blue-50/50 font-bold' : 'text-slate-500 hover:text-blue-600 hover:bg-blue-50/50'
                }`}
        >
            <span className={active ? 'opacity-100' : 'opacity-70'}>{icon}</span>
            <span className="text-xs">{label}</span>
        </Link>
    );
}