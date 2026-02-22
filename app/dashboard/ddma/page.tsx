// app/dashboard/ddma/page.tsx
import { MapPin, ShieldAlert, Home, Truck } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function DDMADashboard() {
    return (
        <div className="space-y-6">
            <div className="bg-red-50 border-l-4 border-red-500 p-4">
                <div className="flex items-center gap-3">
                    <ShieldAlert className="text-red-600" />
                    <div>
                        <h3 className="font-bold text-red-800 uppercase text-xs">Flood Warning - Level 2</h3>
                        <p className="text-red-700 text-sm">42 PwDs identified in high-risk zones require immediate attention.</p>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                    <CardHeader><CardTitle className="text-md">High-Risk PwD Mapping</CardTitle></CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="flex justify-between items-center p-3 border rounded-lg hover:bg-slate-50 transition-colors">
                                    <div className="flex items-center gap-3">
                                        <div className="h-10 w-10 rounded bg-blue-100 flex items-center justify-center font-bold text-blue-700">P{i}</div>
                                        <div>
                                            <p className="font-bold text-sm">Rahul Varma (Locomotor Disability)</p>
                                            <p className="text-xs text-slate-500">Gomti Nagar, Block B-4</p>
                                        </div>
                                    </div>
                                    <Button size="sm" variant="destructive" className="gap-2">
                                        <Truck className="w-4 h-4" /> Mobilize
                                    </Button>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader><CardTitle className="text-md">Accessible Shelter Status</CardTitle></CardHeader>
                    <CardContent>
                        <div className="h-[250px] w-full border rounded bg-[url('https://maps.googleapis.com/...')] bg-cover flex items-center justify-center">
                            <Badge className="bg-white/90 text-slate-900 border-slate-300">Live GIS Mapping View</Badge>
                        </div>
                        <div className="mt-4 flex gap-4 text-xs font-bold uppercase text-slate-500">
                            <span className="flex items-center gap-1"><div className="w-3 h-3 rounded-full bg-green-500" /> Fully Accessible (12)</span>
                            <span className="flex items-center gap-1"><div className="w-3 h-3 rounded-full bg-orange-500" /> Partially (08)</span>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}