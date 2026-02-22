// components/dashboard/DocumentCenter.tsx
"use client";
import React, { useState } from 'react';
import {
    Download, Printer, Share2, FileText,
    CheckCircle2, XCircle, FileBadge, QrCode,
    ShieldCheck, Landmark, MapPin, User,
    FileSearch, MessageSquare, History, Activity
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from 'next/image';
import logo from "@/public/biswa-bangla.png"; // Ensure this path is correct

type DocType = 'ACKNOWLEDGEMENT' | 'CERTIFICATE' | 'REJECTION' | 'REPLY' | 'SUMMARY';

export default function DocumentCenter() {
    return (
        <div className="max-w-6xl mx-auto space-y-8 animate-in fade-in duration-700 pb-20">

            {/* 1. HEADER & GLOBAL ACTIONS */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 bg-white p-8 rounded-[32px] border border-slate-200 shadow-sm">
                <div>
                    <h1 className="text-3xl font-black text-slate-900 tracking-tight">Report/Document Center</h1>
                    <p className="text-slate-500 font-medium">Download or print your official DAEGS statutory documents and status summaries.</p>
                </div>
                <div className="flex gap-3">
                    <Button variant="outline" className="rounded-xl font-bold border-slate-200"><Share2 size={16} className="mr-2" /> Share</Button>
                    <Button className="bg-slate-900 text-white rounded-xl font-black px-6 shadow-xl uppercase tracking-widest text-[10px]">
                        <Download size={16} className="mr-2" /> Download All (ZIP)
                    </Button>
                </div>
            </div>

            {/* 2. DOCUMENT SELECTOR & PREVIEW */}
            <Tabs defaultValue="certificate" className="space-y-8">
                <TabsList className="bg-slate-100 p-1.5 rounded-2xl h-auto flex flex-wrap lg:flex-nowrap border border-slate-200 gap-1">
                    <TabLink value="ack" icon={<FileText size={14} />} label="Acknowledgement" />
                    <TabLink value="certificate" icon={<FileBadge size={14} />} label="Disability Certificate" />
                    <TabLink value="rejection" icon={<XCircle size={14} />} label="Rejection Order" color="text-red-600" />
                    <TabLink value="reply" icon={<MessageSquare size={14} />} label="Orders / Replies" />
                    <TabLink value="summary" icon={<FileSearch size={14} />} label="Status Summary" />
                </TabsList>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
                    {/* DOCUMENT PREVIEW AREA */}
                    <div className="lg:col-span-3">
                        <TabsContent value="ack" className="m-0"><DocumentPreview type="ACKNOWLEDGEMENT" /></TabsContent>
                        <TabsContent value="certificate" className="m-0"><DocumentPreview type="CERTIFICATE" /></TabsContent>
                        <TabsContent value="rejection" className="m-0"><DocumentPreview type="REJECTION" /></TabsContent>
                        <TabsContent value="reply" className="m-0"><DocumentPreview type="REPLY" /></TabsContent>
                        <TabsContent value="summary" className="m-0"><DocumentPreview type="SUMMARY" /></TabsContent>
                    </div>

                    {/* DOCUMENT METADATA SIDEBAR */}
                    <div className="space-y-6 sticky top-28">
                        <Card className="rounded-[32px] border-slate-200 p-8 bg-white shadow-sm">
                            <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-6">Security Details</h3>
                            <div className="space-y-6">
                                <div className="flex flex-col items-center p-4 bg-slate-50 rounded-2xl border border-slate-100">
                                    <QrCode size={80} className="text-slate-900 mb-2" />
                                    <span className="text-[8px] font-bold text-slate-400 uppercase">Verify Authenticity</span>
                                </div>
                                <div className="space-y-4">
                                    <SecurityInfo icon={<ShieldCheck className="text-green-600" />} label="Digital Signature" value="Verified by CMO Office" />
                                    <SecurityInfo icon={<Landmark className="text-blue-600" />} label="Issuing Authority" value="Dept. of Health, WB" />
                                </div>
                            </div>
                        </Card>

                        <Button variant="outline" className="w-full h-14 rounded-2xl border-slate-200 font-black uppercase tracking-widest text-[10px] hover:bg-slate-50 shadow-sm">
                            <Printer size={16} className="mr-2" /> Print Official Copy
                        </Button>
                    </div>
                </div>
            </Tabs>
        </div>
    );
}

/* UI SUB-COMPONENTS */

function TabLink({ value, icon, label, color }: { value: string, icon: React.ReactNode, label: string, color?: string }) {
    return (
        <TabsTrigger value={value} className={`flex-1 py-3 rounded-xl data-[state=active]:bg-white data-[state=active]:shadow-md text-[9px] font-black uppercase tracking-widest ${color || 'text-slate-600'}`}>
            <span className="mr-2">{icon}</span> {label}
        </TabsTrigger>
    );
}

function DocumentPreview({ type }: { type: DocType }) {
    return (
        <Card className="rounded-[32px] border-slate-200 shadow-2xl overflow-hidden bg-white p-4 md:p-12 transition-all">
            <div className={`border-4 ${type === 'REJECTION' ? 'border-red-50' : 'border-slate-50'} rounded-2xl p-8 md:p-16 min-h-[900px] relative flex flex-col`}>

                {/* Official Government Header */}
                <div className="text-center space-y-2 mb-12">
                    <div className="flex justify-center mb-4">
                        <Image src={logo} alt="Government Logo" className="w-20 h-20 object-contain" />
                    </div>
                    <h2 className="text-xl font-black text-slate-900 uppercase tracking-tighter leading-tight">Government of West Bengal</h2>
                    <h3 className="text-sm font-bold text-slate-600 uppercase tracking-widest">Department of Health & Family Welfare</h3>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Swasthya Bhawan, GN-29, Sector-V, Kolkata - 700091</p>
                    <div className="h-1 w-24 bg-slate-900 mx-auto rounded-full mt-6" />
                </div>

                {/* Dynamic Content */}
                <div className="flex-1">
                    {type === 'ACKNOWLEDGEMENT' && <AcknowledgementContent />}
                    {type === 'CERTIFICATE' && <CertificateContent />}
                    {type === 'REJECTION' && <RejectionContent />}
                    {type === 'REPLY' && <ReplyContent />}
                    {type === 'SUMMARY' && <SummaryContent />}
                </div>

                {/* Statutory Footer */}
                <div className="mt-16 pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center md:items-end gap-6">
                    <div className="space-y-1">
                        <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest">Verification Hash</p>
                        <p className="text-[10px] font-mono font-bold text-slate-400">DAEGS-WB-DOC-SHA256: 0x9921-X1192-ACBD</p>
                    </div>
                    <div className="text-center">
                        <div className="h-12 w-48 border-b border-slate-200 italic text-slate-300 text-xs mb-1 flex items-end justify-center">
                            Electronically Approved
                        </div>
                        <p className="text-[10px] font-black text-slate-900 uppercase tracking-widest mt-2">Competent Authority (Kolkata)</p>
                    </div>
                </div>
            </div>
        </Card>
    );
}

/* CONTENT TEMPLATES */

function ReplyContent() {
    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-top-4 duration-500">
            <div className="flex justify-between items-start border-b pb-4 border-slate-100">
                <DocField label="Order Ref No." value="WB/HFW/GRV/2024/0912" />
                <DocField label="Date of Reply" value="18th October 2024" />
            </div>
            <div className="py-6">
                <h1 className="text-lg font-black text-slate-900 mb-6 underline underline-offset-4 decoration-blue-200">Sub: Final Order regarding Grievance ID GRV-4421</h1>
                <p className="text-sm text-slate-700 leading-relaxed mb-4 font-medium">Dear Applicant,</p>
                <p className="text-sm text-slate-700 leading-relaxed mb-6 font-medium">
                    With reference to your grievance filed on 02-10-2024 regarding discrimination in employment, the designated Grievance Redressal Officer (GRO) has conducted an inquiry under Section 21 of the PwD Act, 2016.
                </p>
                <div className="p-6 bg-slate-50 border-l-4 border-blue-500 rounded-r-xl space-y-4">
                    <p className="text-xs font-black text-blue-600 uppercase tracking-widest">Authority's Decision</p>
                    <p className="text-sm font-bold text-slate-800 leading-relaxed italic">
                        "The Establishment has been directed to provide reasonable accommodation and reinstate the seniority benefits effective immediately. A compliance report is sought within 15 days."
                    </p>
                </div>
            </div>
        </div>
    );
}

function SummaryContent() {
    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-top-4 duration-500">
            <h1 className="text-2xl font-black text-center text-slate-900 uppercase tracking-tight mb-8">Consolidated Status Summary</h1>

            <div className="grid grid-cols-3 gap-4 mb-8">
                <SummaryMiniCard label="Active Applications" value="03" />
                <SummaryMiniCard label="Grievances Resolved" value="01" />
                <SummaryMiniCard label="Access Reports" value="02" />
            </div>

            <div className="space-y-4">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Interaction Timeline</p>
                <div className="border border-slate-100 rounded-2xl overflow-hidden">
                    <table className="w-full text-left text-sm">
                        <thead className="bg-slate-50">
                            <tr className="text-[9px] font-black uppercase text-slate-500 tracking-widest border-b">
                                <th className="p-4">Reference</th>
                                <th className="p-4">Subject</th>
                                <th className="p-4">Status</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-50">
                            <SummaryRow id="CRT-99210" subject="Disability Certificate" status="ISSUED" />
                            <SummaryRow id="GRV-4421" subject="Employment Grievance" status="RESOLVED" />
                            <SummaryRow id="ACC-1192" subject="Barrier Report (Metro Station)" status="PENDING" />
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

/* UTILITY COMPONENTS */

function SummaryMiniCard({ label, value }: { label: string, value: string }) {
    return (
        <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 text-center">
            <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-1">{label}</p>
            <p className="text-xl font-black text-slate-900">{value}</p>
        </div>
    );
}

function SummaryRow({ id, subject, status }: { id: string, subject: string, status: string }) {
    return (
        <tr>
            <td className="p-4 font-mono text-[10px] font-bold text-blue-600">{id}</td>
            <td className="p-4 text-xs font-bold text-slate-700">{subject}</td>
            <td className="p-4"><span className="text-[9px] font-black px-2 py-1 bg-green-50 text-green-700 rounded-md uppercase tracking-tighter">{status}</span></td>
        </tr>
    );
}

function AcknowledgementContent() {
    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-top-4 duration-500">
            <h1 className="text-2xl font-black text-center text-slate-900 underline underline-offset-8 decoration-slate-200 mb-12 uppercase">Application Acknowledgement</h1>
            <div className="grid grid-cols-2 gap-8">
                <DocField label="Applicant Name" value="Amit Kumar" />
                <DocField label="Application ID" value="DAEGS/ACK/2024/001" />
                <DocField label="Submission Date" value="12th October 2024" />
                <DocField label="Service Requested" value="Disability Certificate" />
            </div>
            <div className="mt-12 p-6 bg-slate-50 rounded-xl border border-slate-100">
                <p className="text-xs leading-relaxed text-slate-600 italic">
                    This is an electronically generated acknowledgement for the submission of disability certificate application. The physical verification schedule will be notified within 7 working days.
                </p>
            </div>
        </div>
    );
}

function CertificateContent() {
    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-top-4 duration-500">
            <div className="flex justify-between items-start mb-12">
                <h1 className="text-2xl font-black text-slate-900 uppercase tracking-tighter">Disability Certificate</h1>
                <div className="h-32 w-28 bg-slate-50 border border-slate-100 rounded flex items-center justify-center text-[10px] text-slate-300 font-bold uppercase text-center p-4">
                    Digital Photo Placeholder
                </div>
            </div>
            <div className="grid grid-cols-2 gap-8">
                <DocField label="Certificate Number" value="WB-KOL-CERT-2024-9910" />
                <DocField label="Date of Issue" value="20th October 2024" />
                <DocField label="Full Name" value="Amit Kumar" />
                <DocField label="Gender/DOB" value="Male / 15-05-1992" />
                <DocField label="Type of Disability" value="Locomotor Disability" />
                <DocField label="Percentage (%)" value="65% (Sixty Five Percent)" />
            </div>
            <p className="text-sm font-bold text-slate-800 mt-12 leading-relaxed">This is to certify that Sh. Amit Kumar has a permanent disability as assessed by the Medical Board under the PwD Rules 2017.</p>
        </div>
    );
}

function RejectionContent() {
    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-top-4 duration-500">
            <h1 className="text-2xl font-black text-red-600 underline underline-offset-8 decoration-red-100 mb-12 uppercase tracking-tighter">Rejection Order</h1>
            <div className="space-y-6">
                <DocField label="Order Reference" value="WB/MED/REJ/2024/044" />
                <p className="text-sm font-medium text-slate-700 leading-relaxed italic">
                    The competent medical board has reviewed Application ID DAEGS/ACK/2024/088 and found the following discrepancies:
                </p>
                <div className="p-8 bg-red-50 rounded-2xl border border-red-100">
                    <p className="text-[10px] font-black text-red-400 uppercase tracking-widest mb-2">Primary Grounds for Rejection</p>
                    <p className="text-sm font-bold text-red-700 leading-relaxed">
                        Medical verification failed: The clinical assessment conducted on 15-10-2024 did not correlate with the submitted audiogram. Percentage of disability found is below benchmark (40%).
                    </p>
                </div>
            </div>
        </div>
    );
}

function DocField({ label, value }: { label: string, value: string }) {
    return (
        <div className="space-y-1">
            <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest">{label}</p>
            <p className="text-sm font-bold text-slate-800">{value}</p>
        </div>
    );
}

function SecurityInfo({ icon, label, value }: { icon: React.ReactNode, label: string, value: string }) {
    return (
        <div className="flex gap-3">
            <div className="mt-0.5">{icon}</div>
            <div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{label}</p>
                <p className="text-xs font-bold text-slate-700 leading-tight">{value}</p>
            </div>
        </div>
    );
}