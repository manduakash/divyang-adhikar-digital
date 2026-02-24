"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import {
  Accessibility, ShieldCheck, BarChart3, Users,
  ArrowRight, Landmark, Building2, Gavel,
  ShieldAlert, Sparkles, CheckCircle2, ChevronRight,
  Menu, X, FileText, Activity
} from "lucide-react";

export default function LandingPage() {
  const [activeHero, setActiveHero] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const heroImages = [
    {
      url: "/login1.jpg",
      title: "Operationalizing the Rights of PwD Act, 2016",
      subtitle: "From statutory mandate to administrative action."
    },
    {
      url: "/login2.jpg",
      title: "A Unified Digital Backbone for India",
      subtitle: "Connecting PwDs, Establishments, and Authorities seamlessly."
    },
    {
      url: "/login3.jpg",
      title: "Empowerment through Governance",
      subtitle: "Real-time monitoring and transparent grievance redressal."
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveHero((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-blue-100">

      {/* 1. TOP STATUTORY STRIP */}
      <div className="bg-slate-900 text-white py-2 px-4 md:px-6 text-[8px] md:text-[10px] font-bold uppercase tracking-[0.1em] md:tracking-[0.2em] flex justify-between items-center">
        <span>Ministry of Social Justice & Empowerment initiative</span>
        <div className="hidden sm:flex gap-4 opacity-70">
          <span>Helpdesk: 1800-XXX-XXXX</span>
          <span className="text-blue-400">Section 21 Compliance Active</span>
        </div>
      </div>

      {/* 2. NAVIGATION */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 flex justify-between items-center p-4 md:p-6 md:px-12">
        <div className="flex items-center gap-3 md:gap-4">
          <div className="bg-blue-600 h-10 w-10 md:h-12 md:w-12 rounded-xl md:rounded-2xl flex items-center justify-center text-white shadow-lg shadow-blue-200">
            <Accessibility size={24} />
          </div>
          <div className="flex flex-col">
            <span className="text-xl md:text-2xl font-black tracking-tighter text-slate-900 leading-none">DAEGS</span>
            <span className="hidden xs:block text-[8px] md:text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">
              Divyang Adhikar & Empowerment Governance
            </span>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-10">
          {["Objectives", "Stakeholders", "Inclusion", "Reports"].map((item) => (
            <button key={item} className="text-xs font-black uppercase text-slate-500 hover:text-blue-600 transition-colors tracking-widest">
              {item}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2 md:gap-3">
          <Link href="/login" className="hidden sm:block">
            <Button variant="ghost" className="font-black uppercase tracking-widest text-[10px] h-10 md:h-12 px-4 md:px-6">Login</Button>
          </Link>
          <Link href="/register">
            <Button className="bg-slate-900 text-white hover:bg-black rounded-lg md:rounded-xl px-4 md:px-8 font-black uppercase tracking-widest text-[9px] md:text-[10px] h-10 md:h-12 shadow-xl">
              Register <span className="hidden md:inline ml-1">Beneficiary</span>
            </Button>
          </Link>
          {/* Mobile Menu Toggle */}
          <button className="lg:hidden p-2 text-slate-900" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white pt-24 px-6 lg:hidden">
          <div className="flex flex-col gap-8">
            {["Objectives", "Stakeholders", "Inclusion", "Reports"].map((item) => (
              <button key={item} className="text-2xl font-black uppercase text-slate-900 text-left border-b border-slate-100 pb-4">
                {item}
              </button>
            ))}
            <Link href="/login">
              <Button className="w-full bg-blue-600 h-14 text-lg font-black uppercase tracking-widest">Login to Portal</Button>
            </Link>
          </div>
        </div>
      )}

      {/* 3. DYNAMIC HERO SECTION */}
      <section className="relative h-[70vh] md:h-[85vh] w-full overflow-hidden bg-slate-100">
        {heroImages.map((img, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${activeHero === i ? 'opacity-100 scale-105' : 'opacity-0 scale-100'}`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/60 to-transparent z-10" />
            <img src={img.url} className="w-full h-full object-cover" alt="Hero" />
            <div className="absolute inset-0 z-20 flex flex-col justify-center px-6 md:px-24">
              <div className="max-w-3xl space-y-4 md:space-y-6 animate-in fade-in slide-in-from-left-8 duration-1000">
                <div className="inline-flex items-center gap-2 bg-blue-600 text-white px-3 py-1.5 md:px-4 md:py-2 rounded-full text-[9px] md:text-[10px] font-black uppercase tracking-widest w-fit">
                  <Sparkles size={14} /> Digital Governance
                </div>
                <h1 className="text-3xl md:text-7xl font-black text-white leading-[1.1] tracking-tight">
                  {img.title}
                </h1>
                <p className="text-sm md:text-xl text-slate-300 font-medium max-w-xl">
                  {img.subtitle}
                </p>
                <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-4">
                  <Button className="bg-white text-slate-900 hover:bg-blue-50 h-12 md:h-14 px-6 md:px-10 rounded-xl md:rounded-2xl font-black uppercase tracking-widest text-xs">
                    Explore Features
                  </Button>
                  <Button variant="outline" className="border-white/20 text-white bg-white/10 hover:bg-white/20 h-12 md:h-14 px-6 md:px-10 rounded-xl md:rounded-2xl font-black uppercase tracking-widest text-xs backdrop-blur-sm">
                    Read the Act
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
        {/* Hero Indicators */}
        <div className="absolute bottom-8 md:bottom-12 left-6 md:left-24 z-30 flex gap-2">
          {heroImages.map((_, i) => (
            <div
              key={i}
              className={`h-1.5 transition-all duration-500 rounded-full ${activeHero === i ? 'w-8 md:w-12 bg-blue-500' : 'w-3 md:w-4 bg-white/30'}`}
            />
          ))}
        </div>
      </section>

      {/* 4. REAL-TIME STATUTORY TRACKER */}
      <section className="py-12 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          <StatCard count="1.2M+" label="Citizens Registered" icon={<Users className="text-blue-600" />} />
          <StatCard count="45K+" label="Establishments" icon={<Building2 className="text-purple-600" />} />
          <StatCard count="98.2%" label="Grievance Redressal" icon={<CheckCircle2 className="text-emerald-600" />} />
          <StatCard count="12k+" label="Compliant Buildings" icon={<Landmark className="text-orange-600" />} />
        </div>
      </section>

      {/* 5. STAKEHOLDER ECOSYSTEM */}
      <section className="py-16 md:py-24 px-6 md:px-12 bg-slate-50/50">
        <div className="max-w-7xl mx-auto space-y-12 md:space-y-16">
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <h2 className="text-[10px] font-black text-blue-600 uppercase tracking-[0.2em]">Stakeholder Network</h2>
            <p className="text-2xl md:text-4xl font-black text-slate-900 tracking-tight leading-tight">
              One unified digital backbone connecting all administrative layers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <StakeholderCard
              title="Central & State"
              icon={<Landmark size={32} />}
              items={["Ministry of Social Justice", "Chief Commissioner PwD", "State Nodal Departments", "Advisory Boards"]}
              color="bg-blue-600"
            />
            <StakeholderCard
              title="District Level"
              icon={<Gavel size={32} />}
              items={["District Magistrate", "Grievance Officers", "Education Officers", "Special Prosecutors"]}
              color="bg-purple-600"
            />
            <StakeholderCard
              title="Inclusion Units"
              icon={<Building2 size={32} />}
              items={["Government Establishments", "Private Corporates", "Educational Institutions", "NGOs & Shelters"]}
              color="bg-emerald-600"
            />
          </div>
        </div>
      </section>

      {/* 6. KEY OBJECTIVES & PLATFORM PREVIEW */}
      <section className="py-16 md:py-24 px-6 md:px-12 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="space-y-8 order-2 lg:order-1">
            <div className="space-y-4">
              <h2 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">Core Mission</h2>
              <h3 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight tracking-tighter">
                Translating statutory mandates into administrative actions.
              </h3>
            </div>
            <div className="space-y-6">
              <ObjectiveItem title="Time-bound Redressal" desc="Automated escalation of grievances ensuring accountability at every district level." />
              <ObjectiveItem title="Disaster Preparedness" desc="GPS-tagged PwD mapping for priority response during emergency situations." />
              <ObjectiveItem title="Inclusive Employment" desc="Monitoring of 4% reservation mandates in both Government and Private sectors." />
            </div>
            <Button className="w-full sm:w-auto h-14 px-10 rounded-2xl font-black uppercase tracking-widest text-xs bg-blue-600 hover:bg-blue-700 text-white group">
              Learn more about the Act <ArrowRight size={16} className="ml-2 group-hover:translate-x-2 transition-transform" />
            </Button>
          </div>

          <div className="relative order-1 lg:order-2">
            <div className="absolute -inset-4 bg-gradient-to-tr from-blue-100 to-purple-100 rounded-[40px] blur-2xl opacity-50" />
            <div className="relative bg-white border border-slate-200 rounded-[30px] md:rounded-[40px] p-6 md:p-8 shadow-2xl space-y-6">
              <div className="flex justify-between items-center">
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Compliance Dashboard</span>
                  <span className="text-xs font-bold text-slate-900">National Overview - 2024</span>
                </div>
                <div className="flex gap-1.5">
                  <div className="h-2.5 w-2.5 rounded-full bg-red-400" />
                  <div className="h-2.5 w-2.5 rounded-full bg-orange-400" />
                  <div className="h-2.5 w-2.5 rounded-full bg-green-400" />
                </div>
              </div>

              {/* Platform Mockup Data */}
              <div className="space-y-4">
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center"><FileText size={16} /></div>
                    <div>
                      <p className="text-[10px] font-bold text-slate-500 uppercase">Accessibility Audit</p>
                      <p className="text-xs font-black text-slate-900">Railways North Zone</p>
                    </div>
                  </div>
                  <span className="text-[9px] font-black bg-emerald-100 text-emerald-700 px-2 py-1 rounded-md uppercase tracking-tighter">Compliant</span>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                    <p className="text-[10px] font-bold text-slate-500 uppercase mb-1">Grievance Rate</p>
                    <div className="flex items-end gap-2">
                      <span className="text-xl font-black text-slate-900">-12%</span>
                      <Activity size={16} className="text-emerald-500 mb-1" />
                    </div>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                    <p className="text-[10px] font-bold text-slate-500 uppercase mb-1">Emp. Quota</p>
                    <div className="h-1.5 w-full bg-slate-200 rounded-full mt-2 overflow-hidden">
                      <div className="h-full bg-blue-600 w-[84%]" />
                    </div>
                    <p className="text-[9px] font-bold text-slate-400 mt-2">84% Targeted Met</p>
                  </div>
                </div>

                <div className="h-32 bg-slate-900 rounded-2xl flex flex-col items-center justify-center relative overflow-hidden group">
                  <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-400 via-transparent to-transparent" />
                  <BarChart3 className="text-blue-400 h-10 w-10 mb-2 relative z-10" />
                  <span className="text-[10px] font-bold text-blue-200 uppercase tracking-widest relative z-10">Real-time Analytics active</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FOOTER */}
      <footer className="bg-slate-950 text-white py-16 md:py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 border-b border-white/10 pb-16">
          <div className="col-span-1 space-y-6">
            <div className="flex items-center gap-4">
              <div className="bg-blue-600 h-10 w-10 rounded-xl flex items-center justify-center text-white">
                <Accessibility size={24} />
              </div>
              <span className="text-2xl font-black tracking-tighter">DAEGS</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed font-medium">
              Ensuring effective enforcement of the Rights of Persons with Disabilities Act, 2016 through unified digital governance.
            </p>
          </div>
          <FooterList title="Governance" items={["National Board", "State Commissioner", "District GRO", "Special Courts"]} />
          <FooterList title="Public Services" items={["Disability Certificate", "Employment Return", "Accessibility Report", "Scheme Tracker"]} />
          <FooterList title="Resources" items={["PwD Act 2016", "PwD Rules 2017", "Grievance Manual", "Annual Reports"]} />
        </div>
        <div className="max-w-7xl mx-auto pt-12 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-bold uppercase tracking-widest text-slate-500">
          <p className="text-center md:text-left">© 2025 DAEGS - Government of India Initiative</p>
          <div className="flex gap-8">
            <button className="hover:text-white transition-colors">Privacy Policy</button>
            <button className="hover:text-white transition-colors">SLA Agreement</button>
          </div>
        </div>
      </footer>
    </div>
  );
}

/* SUB-COMPONENTS */

function StatCard({ count, label, icon }: any) {
  return (
    <div className="flex flex-col items-center text-center space-y-4">
      <div className="h-10 w-10 md:h-12 md:w-12 rounded-xl md:rounded-2xl bg-slate-50 flex items-center justify-center shadow-inner">
        {icon}
      </div>
      <div className="space-y-1">
        <h4 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tighter">{count}</h4>
        <p className="text-[8px] md:text-[10px] font-bold text-slate-400 uppercase tracking-widest">{label}</p>
      </div>
    </div>
  );
}

function StakeholderCard({ title, icon, items, color }: any) {
  return (
    <div className="bg-white p-6 md:p-8 rounded-[30px] md:rounded-[40px] border border-slate-100 shadow-sm hover:shadow-2xl hover:border-blue-100 transition-all group overflow-hidden relative">
      <div className={`absolute top-0 right-0 w-32 h-32 ${color} opacity-[0.03] -mr-8 -mt-8 rounded-full group-hover:scale-150 transition-transform duration-700`} />
      <div className={`h-12 w-12 md:h-16 md:w-16 ${color} text-white rounded-xl md:rounded-2xl flex items-center justify-center mb-6 md:mb-8 shadow-lg`}>
        {React.cloneElement(icon as React.ReactElement, {})}
      </div>
      <h3 className="text-lg md:text-xl font-black text-slate-900 mb-4 md:mb-6 uppercase tracking-tight">{title}</h3>
      <ul className="space-y-3 md:space-y-4">
        {items.map((item: string) => (
          <li key={item} className="flex items-center gap-3 text-[11px] md:text-xs font-bold text-slate-500">
            <div className={`h-1.5 w-1.5 rounded-full ${color} shrink-0`} /> {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ObjectiveItem({ title, desc }: any) {
  return (
    <div className="flex gap-4 md:gap-6 group">
      <div className="h-10 w-10 md:h-12 md:w-12 shrink-0 bg-blue-50 text-blue-600 rounded-lg md:rounded-xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all">
        <ChevronRight size={18} />
      </div>
      <div className="space-y-1">
        <h4 className="text-base md:text-lg font-black text-slate-900 tracking-tight">{title}</h4>
        <p className="text-xs md:text-sm font-medium text-slate-500 leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

function FooterList({ title, items }: any) {
  return (
    <div className="space-y-6 md:space-y-8">
      <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-white underline underline-offset-[12px] decoration-blue-600 decoration-2">{title}</h4>
      <ul className="space-y-3 md:space-y-4">
        {items.map((item: string) => (
          <li key={item} className="text-xs font-bold text-slate-400 hover:text-blue-400 cursor-pointer transition-colors">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}