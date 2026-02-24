// components/layout/Header.tsx
"use client";
import { Bell, Search, Sparkles, User, MapPin } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu, DropdownMenuContent, DropdownMenuItem,
  DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";

export default function Header({ role }: { role: string }) {
  return (
    <header className="h-16 border-b bg-white flex items-center justify-between px-6 sticky top-0 z-10">
      <div className="flex items-center gap-4 w-1/3">
        <div className="relative w-full max-w-sm">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-400" />
          <Input
            placeholder="Search PwD ID, Case No, or Establishment..."
            className="pl-9 bg-slate-50 border-none focus-visible:ring-1"
          />
        </div>
      </div>

      <div className="flex items-center gap-6">
        {/* Generative AI Quick Draft */}
        <Button variant="outline" className="gap-2 border-purple-200 bg-purple-50 text-purple-700 hover:bg-purple-100 border">
          <Sparkles className="w-4 h-4" />
          AI Draft assistant
        </Button>

        <div className="flex items-center gap-2 text-slate-500 text-sm font-medium border-x px-4">
          <MapPin className="w-4 h-4" />
          Lucknow District
        </div>

        <div className="relative">
          <Bell className="w-5 h-5 text-slate-400 cursor-pointer" />
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-[10px] flex items-center justify-center rounded-full">
            12
          </span>
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="flex items-center gap-2 p-0 hover:bg-transparent">
              <div className="text-right hidden md:block">
                <p className="text-sm font-bold leading-none text-slate-800">S.K. Sharma, IAS</p>
                <p className="text-[10px] text-slate-500 uppercase mt-1">{role}</p>
              </div>
              <div className="h-9 w-9 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
                SS
              </div>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile Settings</DropdownMenuItem>
            <DropdownMenuItem>Security Credentials</DropdownMenuItem>
            <DropdownMenuItem className="text-red-600 font-medium">Log Out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}