// app/dashboard/establishment/layout.tsx
import { EstSidebar } from "@/components/layout/establishment/EstSidebar";
import { EstHeader } from "@/components/layout/establishment/EstHeader";
import {
  CheckCircle, FileText, Accessibility, BarChart,
  ShieldCheck, Upload, Gavel, ClipboardList
} from "lucide-react";
import Link from "next/link";

export default function EstablishmentLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen bg-[#F8FAFC] overflow-hidden">
      <EstSidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <EstHeader />
        <div className="flex-1 flex overflow-hidden">
          {/* Main Content Area */}
          <main className="flex-1 overflow-y-auto p-8 custom-scrollbar">
            {children}
          </main>

          {/* SECTION 10: PERMANENT RHS ACTION BUTTONS */}
          <aside className="w-24 bg-white border-l border-slate-200 flex flex-col items-center py-6 gap-4 sticky top-0">
            <div className="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-2 vertical-text">Quick Actions</div>
            <ActionButton icon={<CheckCircle size={20} />} label="Acknowledge" title="Acknowledge Grievance" link="/dashboard/establishment/grievances" />
            <ActionButton icon={<Upload size={20} />} label="ATR" title="Upload Action Taken Report" link="/dashboard/establishment/grievances" />
            <ActionButton icon={<Accessibility size={20} />} label="Access" title="Respond to Accessibility" link="/dashboard/establishment/grievances" />
            <ActionButton icon={<BarChart size={20} />} label="Compliance" title="Update PwD Compliance" link="/dashboard/establishment/compliance" />
            <ActionButton icon={<ShieldCheck size={20} />} label="EO Policy" title="Upload Equal Opportunity Policy" link="/dashboard/establishment/compliance" />
            <ActionButton icon={<FileText size={20} />} label="Returns" title="Submit Employment Return" link="/dashboard/establishment/grievances" />
            <ActionButton icon={<Gavel size={20} />} label="Orders" title="View Directions/Orders" link="/dashboard/establishment/orders" />
            <ActionButton icon={<ClipboardList size={20} />} label="Report" title="Submit Compliance Report" link="/dashboard/establishment/reports" />
          </aside>
        </div>
      </div>
    </div>
  );
}

function ActionButton({ icon, label, title, link }: { icon: any, label: string, title: string, link: string }) {
  return (
    <Link href={link} title={title} className="group flex flex-col items-center gap-1 w-16 p-2 rounded-xl hover:bg-slate-900 transition-all">
      <div className="text-slate-400 group-hover:text-blue-400 transition-colors">
        {icon}
      </div>
      <span className="text-[8px] font-black uppercase text-slate-400 group-hover:text-white text-center leading-none tracking-tighter">
        {label}
      </span>
    </Link>
  )
}