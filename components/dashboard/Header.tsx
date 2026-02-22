// components/dashboard/Header.tsx
import { Search, Bell, MapPin, Sparkles, UserCircle } from "lucide-react";
import { Input } from "@/components/ui/input";

export function Header() {
    return (
        <header className="h-20 bg-white border-b border-slate-200 flex items-center justify-between px-8 sticky top-0 z-20">
            <div className="flex items-center gap-6 w-1/2">
                <div className="relative w-full max-w-md">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                    <Input
                        className="pl-10 h-11 bg-slate-50 border-slate-200 rounded-xl focus:ring-purple-500"
                        placeholder="Search by PwD ID, Case, or Establishment..."
                    />
                </div>
                <div className="flex items-center gap-2 text-slate-500 font-medium text-sm bg-slate-50 px-4 py-2 rounded-full border border-slate-100">
                    <MapPin className="h-4 w-4 text-blue-600" />
                    <span>Lucknow District</span>
                </div>
            </div>

            <div className="flex items-center gap-5">
                <button className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-5 py-2.5 rounded-xl text-sm font-semibold shadow-lg shadow-purple-200 hover:opacity-90 transition-all">
                    <Sparkles className="h-4 w-4" />
                    AI Draft Assistant
                </button>
                <div className="h-10 w-[1px] bg-slate-200 mx-2" />
                <div className="relative">
                    <Bell className="h-6 w-6 text-slate-400 cursor-pointer" />
                    <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 border-2 border-white rounded-full" />
                </div>
                <div className="flex items-center gap-3 pl-4">
                    <div className="text-right">
                        <p className="text-sm font-bold text-slate-900">Dr. Alok Verma</p>
                        <p className="text-[10px] uppercase font-heavy tracking-widest text-slate-500">District Magistrate</p>
                    </div>
                    <div className="h-11 w-11 rounded-2xl bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center border border-purple-200">
                        <UserCircle className="h-7 w-7 text-purple-600" />
                    </div>
                </div>
            </div>
        </header>
    );
}