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
        <main className="flex-1 overflow-y-auto p-8 custom-scrollbar relative bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-fixed">

          {/* Professional Power Watermark */}
          <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.9] flex items-center justify-center overflow-hidden">
            {/* <div className="border-[40px] border-slate-900 rounded-full h-[600px] w-[600px]" /> */}
          </div>

          {children}
        </main>
      </div>
    </div>
  );
}