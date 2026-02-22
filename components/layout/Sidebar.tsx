// components/layout/Sidebar.tsx
import {
    LayoutDashboard, UserCircle, Database, FileText,
    Search, Bot, Settings, LogOut, ChevronDown
} from "lucide-react";

export default function Sidebar({ role }: { role: string }) {
    const menuItems = [
        { label: "Dashboard", icon: LayoutDashboard },
        { label: "Profile", icon: UserCircle },
        { label: "Data Entry", icon: Database, hasSub: true },
        { label: "Fact Sheets", icon: FileText, hasSub: true },
        { label: "Advanced Search", icon: Search },
        { label: "Generative AI", icon: Bot, color: "text-purple-600" },
        { label: "Statutory Reports", icon: FileText },
    ];

    return (
        <div className="w-64 bg-slate-900 h-full text-slate-300 flex flex-col">
            <div className="p-6 border-b border-slate-800">
                <div className="font-black text-white text-2xl tracking-tighter">DAEGS</div>
                <div className="text-[10px] text-blue-400 font-bold uppercase tracking-widest mt-1">
                    {role}
                </div>
            </div>

            <nav className="flex-1 p-4 space-y-1">
                {menuItems.map((item, i) => (
                    <div key={i} className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-800 hover:text-white cursor-pointer transition-colors group">
                        <div className="flex items-center gap-3">
                            <item.icon className={`w-5 h-5 ${item.color || 'text-slate-400'}`} />
                            <span className="text-sm font-medium">{item.label}</span>
                        </div>
                        {item.hasSub && <ChevronDown className="w-4 h-4 text-slate-500" />}
                    </div>
                ))}
            </nav>

            <div className="p-4 border-t border-slate-800">
                <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-red-900/20 hover:text-red-400 cursor-pointer text-slate-400 transition-colors">
                    <LogOut className="w-5 h-5" />
                    <span className="text-sm font-medium">Log Out</span>
                </div>
            </div>
        </div>
    );
}