// components/layout/DashboardLayout.tsx
"use client";
import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

export default function DashboardLayout({ children, role }: { children: React.ReactNode, role: string }) {
    return (
        <div className="flex h-screen bg-slate-50 overflow-hidden">
            <Sidebar role={role} />
            <div className="flex-1 flex flex-col overflow-hidden">
                <Header role={role} />
                <main className="flex-1 overflow-y-auto p-6">
                    {children}
                </main>
            </div>
        </div>
    );
}