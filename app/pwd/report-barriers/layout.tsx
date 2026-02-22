// components/dashboard/DashboardLayout.tsx
import React from 'react';
import Header from '@/components/layout/Header';
import { PwDSidebar } from '@/components/layout/pwd/Sidebar';
import { PwDHeader } from '@/components/layout/pwd/Header';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen bg-[#F8FAFC] overflow-hidden font-sans">
      <PwDSidebar />
      <div className="flex-1 flex flex-col overflow-hidden relative">
        <PwDHeader />
        <main className="flex-1 overflow-y-auto p-8 custom-scrollbar">
          <div className="max-w-[1600px] mx-auto space-y-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}