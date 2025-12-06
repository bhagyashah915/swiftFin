"use client";

import { Download, UserPlus, Rocket, CheckCircle2 } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

export default function HowItWorks() {
    const sectionRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const pathLength = useTransform(scrollYProgress, [0, 0.8], [0, 1]);

    const steps = [
        {
            icon: <Download className="w-10 h-10 text-white" />,
            title: "Download SwiftFin",
            description: "Get the app from Play Store or App Store. Quick and easy installation on any device.",
            color: "from-[#20C997] to-[#17a2b8]"
        },
        {
            icon: <UserPlus className="w-10 h-10 text-white" />,
            title: "Launch & Explore",
            description: "Open the app and explore the intuitive interface. No complex setup required.",
            color: "from-[#3b82f6] to-[#6366f1]"
        },
        {
            icon: <Rocket className="w-10 h-10 text-white" />,
            title: "Start Managing",
            description: "Begin tracking expenses, managing EMIs, and monitoring investments effortlessly.",
            color: "from-[#FD7E14] to-[#ea580c]"
        },
        {
            icon: <CheckCircle2 className="w-10 h-10 text-white" />,
            title: "Achieve Financial Goals",
            description: "Watch your financial health improve with personalized insights and smart recommendations.",
            color: "from-[#198754] to-[#16a34a]"
        }
    ];

    return (
        <section ref={sectionRef} id="how-it-works" className="py-20 md:py-28 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-20 right-10 w-72 h-72 bg-[#20C997]/10 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse"></div>
            <div className="absolute bottom-20 left-10 w-72 h-72 bg-[#FD7E14]/10 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse" style={{ animationDelay: '2s' }}></div>

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <motion.div
                    className="text-center max-w-3xl mx-auto mb-20"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="inline-block text-[#FD7E14] font-semibold text-sm uppercase tracking-wider mb-4">
                        How It Works
                    </span>
                    <h2 className="font-sora text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#495057] mb-6">
                        Your Journey to <span className="text-[#20C997]">Financial Freedom</span>
                    </h2>
                    <p className="font-inter text-gray-600 text-lg">
                        Get started with SwiftFin in just a few simple steps and take control of your finances today
                    </p>
                </motion.div>

                {/* Roadmap */}
                <div className="relative max-w-5xl mx-auto pb-16">
                    {/* Animated Progress Line */}
                    <svg className="absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 hidden lg:block" style={{ height: "100%" }}>
                        <line x1="50%" y1="0" x2="50%" y2="100%" stroke="#e5e7eb" strokeWidth="3" />
                        <motion.line
                            x1="50%" y1="0" x2="50%" y2="100%"
                            stroke="url(#gradient)"
                            strokeWidth="3"
                            style={{ pathLength }}
                            strokeDasharray="0 1"
                        />
                        <defs>
                            <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" stopColor="#20C997" />
                                <stop offset="50%" stopColor="#3b82f6" />
                                <stop offset="100%" stopColor="#FD7E14" />
                            </linearGradient>
                        </defs>
                    </svg>

                    {/* Steps */}
                    <div className="space-y-16">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                className={`flex flex-col lg:flex-row items-center gap-8 ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.7, delay: index * 0.2 }}
                            >
                                {/* Content Card */}
                                <div className={`flex-1 ${index % 2 === 0 ? "lg:text-right" : "lg:text-left"}`}>
                                    <motion.div
                                        className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-shadow duration-300 relative overflow-hidden group"
                                        whileHover={{ scale: 1.02 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                    >
                                        <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>

                                        <div className="relative z-10">
                                            <div className={`inline-flex items-center gap-3 mb-4 ${index % 2 === 0 ? "lg:flex-row-reverse" : ""}`}>
                                                <span className="text-6xl font-bold text-gray-100">0{index + 1}</span>
                                                <h4 className="font-sora text-2xl font-bold text-[#495057]">{step.title}</h4>
                                            </div>
                                            <p className="font-inter text-gray-600 leading-relaxed text-lg">{step.description}</p>
                                        </div>

                                        <div className={`absolute ${index % 2 === 0 ? "top-0 right-0" : "top-0 left-0"} w-20 h-20 bg-gradient-to-br ${step.color} opacity-10 rounded-bl-full`}></div>
                                    </motion.div>
                                </div>

                                {/* Icon Circle */}
                                <motion.div
                                    className="relative z-20 flex-shrink-0"
                                    initial={{ scale: 0, rotate: -180 }}
                                    whileInView={{ scale: 1, rotate: 0 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 200,
                                        damping: 15,
                                        delay: index * 0.2 + 0.3
                                    }}
                                >
                                    <div className="relative">
                                        <motion.div
                                            className={`absolute inset-0 rounded-full bg-gradient-to-br ${step.color} blur-xl opacity-40`}
                                            animate={{ scale: [1, 1.2, 1] }}
                                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                        ></motion.div>

                                        <div className={`relative w-28 h-28 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-2xl border-4 border-white`}>
                                            {step.icon}
                                        </div>

                                        <motion.div
                                            className="absolute -bottom-2 -right-2 w-10 h-10 bg-[#198754] rounded-full flex items-center justify-center border-4 border-white shadow-lg"
                                            initial={{ scale: 0 }}
                                            whileInView={{ scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.2 + 0.5, type: "spring", stiffness: 500 }}
                                        >
                                            <CheckCircle2 className="w-5 h-5 text-white" />
                                        </motion.div>
                                    </div>
                                </motion.div>

                                <div className="flex-1 hidden lg:block"></div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Final CTA */}
                    <motion.div
                        className="text-center mt-20 relative z-20"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                    >
                        <Link
                            href="/download"
                            className="inline-block bg-gradient-to-r from-[#20C997] to-[#17a2b8] text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-2xl transition-shadow cursor-pointer"
                        >
                            Ready to get started? Download now!
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
