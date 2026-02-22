// app/register/page.tsx
"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Accessibility, ArrowRight, ShieldCheck, Mail, Smartphone, User, Calendar, Loader2, LockIcon } from "lucide-react";

export default function RegisterBeneficiary() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);

    const handleRegister = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        // Simulate statutory registration process
        setTimeout(() => {
            router.push('/login'); // Redirect to PwD portal
        }, 2000);
    };

    return (
        <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden font-sans py-12 px-6">

            {/* THEMATIC BACKGROUND (Shared with Login for consistency) */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2070&auto=format&fit=crop')`,
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950/80 to-slate-900/90" />
            </div>

            <div className="relative z-10 w-full max-w-2xl animate-in fade-in slide-in-from-bottom-8 duration-700">

                {/* LOGO & STATUTORY INFO */}
                <div className="text-center mb-8">
                    <div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-md px-6 py-3 rounded-2xl border border-white/10 mb-6">
                        <Accessibility className="text-blue-400 h-6 w-6" />
                        <span className="text-white text-[10px] font-black uppercase tracking-[0.3em]">Beneficiary Registration</span>
                    </div>
                    <h1 className="text-4xl font-black text-white tracking-tighter uppercase mb-2">Create Your Profile</h1>
                    <p className="text-slate-400 text-sm font-medium">Capture your data once. Access all government PwD services forever.</p>
                </div>

                <Card className="bg-white/95 backdrop-blur-xl shadow-[0_32px_64px_rgba(0,0,0,0.5)] rounded-[48px] overflow-hidden">

                    <CardContent className="p-10">
                        <form onSubmit={handleRegister} className="space-y-8">

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* FULL NAME */}
                                <div className="md:col-span-2 space-y-2">
                                    <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest ml-1">Full Name (As per Identity Proof)</label>
                                    <div className="relative">
                                        <User className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-300" />
                                        <Input required placeholder="Enter your full legal name" className="h-14 pl-11 rounded-2xl bg-slate-50 font-medium placeholder:text-slate-300" />
                                    </div>
                                </div>

                                {/* GENDER */}
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest ml-1">Gender</label>
                                    <Select required>
                                        <SelectTrigger className="h-14 px-8 py-7 w-full rounded-2xl bg-slate-50 border font-medium px-5">
                                            <SelectValue placeholder="Select your gender" />
                                        </SelectTrigger>
                                        <SelectContent className="rounded-2xl">
                                            <SelectItem value="male">Male</SelectItem>
                                            <SelectItem value="female">Female</SelectItem>
                                            <SelectItem value="other">Other</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                {/* DATE OF BIRTH */}
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest ml-1">Date of Birth</label>
                                    <div className="relative">
                                        <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-300 pointer-events-none" />
                                        <Input required type="date" className="h-14 pl-11 rounded-2xl bg-slate-50 font-medium text-slate-600" />
                                    </div>
                                </div>

                                {/* MOBILE NUMBER */}
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest ml-1">Mobile Number (For OTP)</label>
                                    <div className="relative">
                                        <Smartphone className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-300" />
                                        <Input required type="tel" placeholder="+91 00000 00000" className="h-14 pl-11 rounded-2xl bg-slate-50 font-medium placeholder:text-slate-300" />
                                    </div>
                                </div>

                                {/* EMAIL */}
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest ml-1">Email Address</label>
                                    <div className="relative">
                                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-300" />
                                        <Input required type="email" placeholder="example@email.com" className="h-14 pl-11 rounded-2xl bg-slate-50 font-medium placeholder:text-slate-300" />
                                    </div>
                                </div>
                            </div>

                            {/* ACTION BUTTON */}
                            <div className="pt-4 space-y-4">
                                <Button
                                    disabled={isLoading}
                                    className="w-full h-16 bg-blue-600 hover:bg-blue-700 text-white rounded-3xl font-black uppercase tracking-[0.2em] text-xs transition-all shadow-2xl shadow-blue-500/20"
                                >
                                    {isLoading ? (
                                        <div className="flex items-center gap-2">
                                            <Loader2 className="h-4 w-4 animate-spin" /> Finalizing Profile...
                                        </div>
                                    ) : (
                                        <div className="flex items-center gap-2">
                                            Verify & Create Profile <ArrowRight size={16} />
                                        </div>
                                    )}
                                </Button>

                                <p className="text-center text-[11px] text-slate-400 font-bold uppercase tracking-widest">
                                    Already have a profile? <Link href="/login" className="text-blue-600 hover:underline">Sign In</Link>
                                </p>
                            </div>
                        </form>
                    </CardContent>

                    {/* SECURITY STRIP */}
                    <div className="bg-slate-900 p-6 flex justify-center items-center gap-6">
                        <div className="flex items-center gap-2">
                            <LockIcon size={16} className="text-green-500" />
                            <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">AES 256 Encryption</span>
                        </div>
                        <div className="h-1 w-1 rounded-full bg-slate-700" />
                        <div className="flex items-center gap-2">
                            <ShieldCheck size={16} className="text-blue-500" />
                            <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Encrypted Data Transfer</span>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    );
}