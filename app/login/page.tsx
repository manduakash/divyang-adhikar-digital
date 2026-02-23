// app/login/page.tsx
"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Accessibility, ShieldCheck, Landmark, Building2, UserCog, Loader2, GraduationCap, Scale, Siren } from "lucide-react";
import { DropdownMenuSeparator } from '@/components/ui/dropdown-menu';

export default function Login() {
  const router = useRouter();
  const [role, setRole] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!role) return alert("Please select your role");

    setIsLoading(true);

    // Dynamic Redirection based on Stakeholder Roles (Section 1-6 of Docs)
    setTimeout(() => {
      switch (role) {
        case 'pwd': router.push('/dashboard/pwd'); break;
        case 'est': router.push('/dashboard/establishment'); break;
        case 'dm': router.push('/dashboard/district/dm'); break;
        case 'deo': router.push('/dashboard/district/deo'); break;
        case 'ddma': router.push('/dashboard/district/ddma'); break;
        case 'dpp': router.push('/dashboard/district/dpp'); break;
        case 'state': router.push('/dashboard/state'); break;
        case 'central': router.push('/dashboard/central'); break;
        case 'admin': router.push('/dashboard/admin'); break;
        default: router.push('/');
      }
    }, 1500); // Artificial delay for professional feel
  };

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden font-sans">

      {/* THEMATIC BACKGROUND */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 hover:scale-105"
        style={{
          backgroundImage: `url('/login1.jpg')`,
        }}
      >
        {/* Deep Gradient Overlay to match Blue/Purple Theme */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-slate-900/80 to-purple-900/90" />
      </div>

      {/* LOGIN CARD */}
      <Card className="relative z-10 w-full max-w-[450px] bg-white/95 backdrop-blur-md border-2 shadow-[0_20px_50px_rgba(0,0,0,0.3)] rounded-[40px] p-4 animate-in fade-in zoom-in duration-500">
        <CardHeader className="text-center pb-8">
          <div className="flex justify-center mb-6">
            <div className="h-16 w-16 bg-blue-600 rounded-[20px] flex items-center justify-center shadow-xl shadow-blue-500/20">
              <Accessibility className="text-white h-10 w-10" />
            </div>
          </div>
          <CardTitle className="text-3xl font-black text-slate-900 tracking-tighter uppercase">
            DAEGS Portal
          </CardTitle>
          <CardDescription className="text-slate-500 font-bold text-[10px] uppercase tracking-widest mt-2">
            Divyang Adhikar & Empowerment Governance System
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleLogin} className="space-y-6">

            {/* STAKEHOLDER SELECTOR */}
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase text-slate-400 tracking-[0.2em] ml-1">
                Stakeholder Category
              </label>
              <Select onValueChange={setRole}>
                <SelectTrigger className="h-16 w-full px-5 py-6 rounded-2xl bg-slate-50 border-slate-200 focus:ring-blue-600 transition-all font-bold text-slate-700 shadow-sm hover:border-slate-300">
                  <SelectValue placeholder="Identify your role" />
                </SelectTrigger>

                <SelectContent className="rounded-2xl p-2 shadow-2xl border-slate-200 font-sans">

                  {/* GROUP 1: PUBLIC INTERFACE */}
                  <SelectGroup>
                    <SelectLabel className="px-3 py-2 text-[9px] font-black text-slate-400 uppercase tracking-[0.2em]">
                      Citizens & Units
                    </SelectLabel>
                    <RoleOption value="pwd" label="Citizen / Beneficiary" icon={<Accessibility size={16} />} />
                    <RoleOption value="est" label="Establishment / Institution" icon={<Building2 size={16} />} />
                  </SelectGroup>

                  <DropdownMenuSeparator className="my-2 opacity-50" />

                  {/* GROUP 2: DISTRICT ADMINISTRATION */}
                  <SelectGroup>
                    <SelectLabel className="px-3 py-2 text-[9px] font-black text-blue-600 uppercase tracking-[0.2em]">
                      District Authorities
                    </SelectLabel>
                    <RoleOption value="dm" label="District Magistrate (DM)" icon={<Landmark size={16} />} />
                    <RoleOption value="deo" label="Education Officer (DEO)" icon={<GraduationCap size={16} />} />
                    <RoleOption value="ddma" label="Disaster Authority (DDMA)" icon={<Siren size={16} />} />
                    <RoleOption value="dpp" label="Special Prosecutor (DPP)" icon={<Scale size={16} />} />
                  </SelectGroup>

                  <DropdownMenuSeparator className="my-2 opacity-50" />

                  {/* GROUP 3: STATE & NATIONAL */}
                  <SelectGroup>
                    <SelectLabel className="px-3 py-2 text-[9px] font-black text-purple-600 uppercase tracking-[0.2em]">
                      Apex Authorities
                    </SelectLabel>
                    <RoleOption value="state" label="State-Level Authority" icon={<ShieldCheck size={16} />} />
                    <RoleOption value="central" label="Central-Level Authority" icon={<Landmark size={16} />} />
                  </SelectGroup>

                  <DropdownMenuSeparator className="my-2 opacity-50" />

                  {/* GROUP 4: SYSTEM */}
                  <SelectGroup>
                    <SelectLabel className="px-3 py-2 text-[9px] font-black text-slate-400 uppercase tracking-[0.2em]">
                      IT Governance
                    </SelectLabel>
                    <RoleOption value="admin" label="System Administrator" icon={<UserCog size={16} />} />
                  </SelectGroup>

                </SelectContent>
              </Select>
            </div>

            {/* CREDENTIALS */}
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase text-slate-400 tracking-[0.2em] ml-1">Identity Number / Mobile</label>
                <Input
                  required
                  placeholder="Enter your registered ID"
                  className="h-14 rounded-2xl bg-slate-50 border-slate-300 focus-visible:ring-blue-600 font-medium px-5"
                />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center px-1">
                  <label className="text-[10px] font-black uppercase text-slate-400 tracking-[0.2em]">Password</label>
                  <button type="button" className="text-[10px] font-black text-blue-600 uppercase hover:underline">Forgot?</button>
                </div>
                <Input
                  required
                  type="password"
                  placeholder="••••••••"
                  className="h-14 rounded-2xl bg-slate-50 border-slate-300 focus-visible:ring-blue-600 font-medium px-5"
                />
              </div>
            </div>

            {/* LOGIN ACTION */}
            <Button
              type="submit"
              disabled={isLoading}
              className="w-full h-16 bg-slate-900 hover:bg-black text-white rounded-[24px] font-black uppercase tracking-[0.2em] text-xs transition-all hover:scale-[1.02] active:scale-[0.98] shadow-2xl shadow-slate-900/20"
            >
              {isLoading ? (
                <div className="flex items-center gap-2">
                  <Loader2 className="h-4 w-4 animate-spin" /> Verifying Credentials...
                </div>
              ) : "Sign In to Portal"}
            </Button>
          </form>

          {/* FOOTER */}
          <div className="mt-8 pt-6 border-t border-slate-300 text-center">
            <p className="text-[7px] font-bold text-slate-400 uppercase tracking-widest leading-relaxed">
              © 2026 Department of Empowerment of Persons with Disabilities <br />
              Government of India Initiative
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

/* HELPER COMPONENT FOR SELECT OPTIONS */
function RoleOption({ value, label, icon }: { value: string, label: string, icon: React.ReactNode }) {
  return (
    <SelectItem value={value} className="rounded-xl py-3 cursor-pointer focus:bg-blue-50 focus:text-blue-700">
      <div className="flex items-center gap-3 font-bold text-xs">
        <span className="opacity-70">{icon}</span>
        {label}
      </div>
    </SelectItem>
  );
}