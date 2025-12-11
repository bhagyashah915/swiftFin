"use client";

import { motion } from "framer-motion";
import { CloudLightning, ShieldCheck, TrendingUp, Wallet, PieChart, Coins, Banknote, CreditCard } from "lucide-react";
import { useState } from "react";

const steps = [
    {
        id: 1,
        title: "Instant Setup",
        description: "Create your SwiftFin account in seconds with a smooth, secure onboarding process.",
        icon: <CloudLightning className="w-6 h-6 text-white" />,
        color: "bg-emerald-500",
        bgIcon: <Wallet className="w-32 h-32 text-emerald-100 opacity-20 rotate-12" />
    },
    {
        id: 2,
        title: "Smart Tracking",
        description: "Automatically categorize and visualize your spending with AI-powered insights.",
        icon: <TrendingUp className="w-6 h-6 text-white" />,
        color: "bg-teal-500",
        bgIcon: <PieChart className="w-32 h-32 text-teal-100 opacity-20 -rotate-12" />
    },
    {
        id: 3,
        title: "Secure Sync",
        description: "Connect your bank safely with enterprise‑grade encryption and zero‑risk protection.",
        icon: <ShieldCheck className="w-6 h-6 text-white" />,
        color: "bg-cyan-500",
        bgIcon: <ShieldCheck className="w-32 h-32 text-cyan-100 opacity-20 rotate-6" />
    },
    {
        id: 4,
        title: "Financial Boost",
        description: "Get personalized tips to grow, save, and optimize your financial flow effortlessly.",
        icon: <Coins className="w-6 h-6 text-white" />,
        color: "bg-blue-500",
        bgIcon: <Banknote className="w-32 h-32 text-blue-100 opacity-20 -rotate-6" />
    },
];

export default function HowItWorks() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <section className="relative py-24 bg-white text-neutral-800 overflow-hidden" id="how-it-works">

            {/* Background Floating Elements */}
            <div className="absolute inset-0 pointer-events-none">
                <motion.div
                    animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-20 left-10 text-emerald-50"
                >
                    <Wallet className="w-48 h-48 opacity-40" />
                </motion.div>
                <motion.div
                    animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute bottom-20 right-10 text-teal-50"
                >
                    <PieChart className="w-56 h-56 opacity-40" />
                </motion.div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border-[50px] border-emerald-50/30 rounded-full blur-3xl -z-10"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 font-poppins">
                        How <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-500">SwiftFin</span> Works
                    </h2>
                    <p className="text-xl text-neutral-500">Simple steps to master your money.</p>
                </motion.div>

                {/* C-Shaped Layout Container */}
                <div className="relative max-w-5xl mx-auto h-[600px] hidden lg:block">
                    {/* The "C" Curve Line - SVG */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 800 600">
                        {/* Define the C curve path */}
                        <path
                            d="M 600 550 Q 100 300 600 50"
                            fill="none"
                            stroke="#E2E8F0"
                            strokeWidth="2"
                            strokeDasharray="8 8"
                            className="opacity-50"
                        />
                    </svg>

                    {/* Steps positioned along the C-Curve */}
                    {steps.map((step, index) => {
                        // Custom coordinates to form a "C" shape (Reverse C actually, or standard C)
                        // Adjusting for a visual C shape opening to the right
                        const positions = [
                            { top: "0%", right: "20%" },   // Top Right
                            { top: "25%", left: "15%" },   // Middle Top Left
                            { bottom: "25%", left: "15%" }, // Middle Bottom Left
                            { bottom: "0%", right: "20%" }  // Bottom Right
                        ];

                        return (
                            <motion.div
                                key={step.id}
                                className={`absolute cursor-pointer group`}
                                style={positions[index]}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                            >
                                {/* Circle Node */}
                                <div className={`w-16 h-16 rounded-2xl ${step.color} shadow-lg shadow-emerald-500/20 flex items-center justify-center transform transition-transform duration-300 group-hover:scale-110 z-20 relative`}>
                                    {step.icon}
                                    {/* Pulse effect */}
                                    <div className={`absolute inset-0 rounded-2xl ${step.color} animate-ping opacity-20`}></div>
                                </div>

                                {/* Content Card - Pops up on hover */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8, x: 20 }}
                                    animate={hoveredIndex === index ? { opacity: 1, scale: 1, x: 50 } : { opacity: 1, scale: 1, x: 20 }}
                                    className={`absolute left-full top-1/2 -translate-y-1/2 ml-4 w-72 bg-white p-6 rounded-2xl shadow-xl border border-neutral-100 z-30 transition-all duration-300 origin-left ${hoveredIndex === index ? 'ring-2 ring-emerald-500/20' : ''}`}
                                >
                                    {/* Large Background Icon inside card */}
                                    <div className="absolute right-0 bottom-0 pointer-events-none overflow-hidden rounded-br-2xl">
                                        {step.bgIcon}
                                    </div>

                                    <h3 className={`font-bold text-lg mb-2 text-slate-800`}>{step.title}</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed relative z-10">{step.description}</p>
                                </motion.div>

                                {/* Connecting Line to Node (Visual) */}
                                <div className="absolute top-1/2 -right-4 w-4 h-0.5 bg-neutral-200 -z-10"></div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Mobile Stack Layout */}
                <div className="grid gap-6 lg:hidden">
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-2xl p-6 shadow-lg border border-neutral-100 relative overflow-hidden"
                        >
                            <div className="absolute right-[-20px] bottom-[-20px] opacity-10">
                                {step.bgIcon}
                            </div>
                            <div className="flex items-center gap-4 mb-4">
                                <div className={`w-12 h-12 rounded-xl ${step.color} flex items-center justify-center shadow-md`}>
                                    {step.icon}
                                </div>
                                <h3 className="font-bold text-lg text-slate-800">{step.title}</h3>
                            </div>
                            <p className="text-slate-600 text-sm leading-relaxed">{step.description}</p>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
