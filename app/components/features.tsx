"use client";

import { Receipt, BarChart3, CreditCard, TrendingUp, Lightbulb, Camera, ChevronRight, Check } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Features() {
    const [activeIndex, setActiveIndex] = useState(0);

    const features = [
        {
            icon: <Receipt className="w-10 h-10" />,
            title: "Expense Tracking",
            description: "Track expenses with manual entry, receipt scanning, and automatic categorization.",
            details: [
                "Manual entry & receipt scan",
                "Auto-categorization by AI",
                "Real-time tracking"
            ]
        },
        {
            icon: <BarChart3 className="w-10 h-10" />,
            title: "Financial Reports",
            description: "Interactive dashboards with charts and easy PDF/CSV export.",
            details: [
                "Interactive dashboards",
                "Beautiful charts & graphs",
                "PDF/CSV export"
            ]
        },
        {
            icon: <CreditCard className="w-10 h-10" />,
            title: "EMI Tracking",
            description: "Manage loans, get reminders, and visualize EMI progress.",
            details: [
                "Loan management",
                "Payment reminders",
                "Progress visualization"
            ]
        },
        {
            icon: <TrendingUp className="w-10 h-10" />,
            title: "Investments",
            description: "Track portfolio, view gain/loss across all accounts.",
            details: [
                "Portfolio tracking",
                "Gain/loss analytics",
                "Multi-account support"
            ]
        },
        {
            icon: <Lightbulb className="w-10 h-10" />,
            title: "Smart Tips",
            description: "Personalized insights based on your spending behavior.",
            details: [
                "AI-powered insights",
                "Spending analysis",
                "Saving recommendations"
            ]
        },
        {
            icon: <Camera className="w-10 h-10" />,
            title: "Receipt Scan",
            description: "AI-powered receipt scanning and auto-categorization.",
            details: [
                "Camera scanning",
                "OCR text extraction",
                "Auto-save to expense"
            ]
        }
    ];

    // Auto-rotate with slower timing
    useEffect(() => {
        const timer = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % features.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [features.length]);

    const getPhonePosition = (index: number) => {
        const diff = index - activeIndex;
        const normalized = ((diff % features.length) + features.length) % features.length;

        if (normalized === 0) return { x: 0, z: 100, scale: 1, opacity: 1, rotateY: 0 };
        if (normalized === 1) return { x: 280, z: 0, scale: 0.85, opacity: 0.5, rotateY: -15 };
        if (normalized === features.length - 1) return { x: -280, z: 0, scale: 0.85, opacity: 0.5, rotateY: 15 };
        if (normalized === 2) return { x: 450, z: -100, scale: 0.7, opacity: 0.3, rotateY: -25 };
        if (normalized === features.length - 2) return { x: -450, z: -100, scale: 0.7, opacity: 0.3, rotateY: 25 };
        return { x: 0, z: -200, scale: 0.5, opacity: 0, rotateY: 0 };
    };

    return (
        <section id="features" className="py-20 md:py-24 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 md:px-12">
                {/* Header */}
                <motion.div
                    className="text-center max-w-4xl mx-auto mb-16 md:mb-20"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="inline-block px-4 py-1.5 rounded-full bg-primary-teal/10 mb-4">
                        <span className="text-[#20C997] font-bold text-sm uppercase tracking-widest">
                            Features
                        </span>
                    </div>
                    <h2 className="font-sora text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-slate mb-6 leading-tight">
                        Powerful Tools at Your Fingertips
                    </h2>
                    <p className="font-inter text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
                        Experience SwiftFin&apos;s innovative features designed for modern finance management
                    </p>
                </motion.div>

                {/* 3D Phone Carousel */}
                <div className="relative h-[500px] md:h-[650px]" style={{ perspective: "2000px" }}>
                    <div className="absolute inset-0 flex items-center justify-center">
                        {features.map((feature, index) => {
                            const pos = getPhonePosition(index);
                            const isActive = index === activeIndex;

                            return (
                                <motion.div
                                    key={index}
                                    className="absolute cursor-pointer"
                                    animate={{
                                        x: pos.x,
                                        z: pos.z,
                                        scale: pos.scale,
                                        opacity: pos.opacity,
                                        rotateY: pos.rotateY
                                    }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 120,
                                        damping: 25
                                    }}
                                    onClick={() => setActiveIndex(index)}
                                    style={{ transformStyle: "preserve-3d" }}
                                >
                                    {/* Phone mockup */}
                                    <div className="relative w-[240px] md:w-[300px]">
                                        {/* Phone frame with 3D depth */}
                                        <div className="relative bg-linear-to-b from-neutral-slate to-[#3d4349] rounded-4xl p-3 shadow-2xl"
                                            style={{
                                                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 10px 30px -5px rgba(32, 201, 151, 0.3)',
                                                transform: 'translateZ(20px)'
                                            }}>
                                            {/* Notch */}
                                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-[#2d3238] rounded-b-2xl z-20" />

                                            {/* Screen with glassmorphism */}
                                            <div className="relative rounded-4xl overflow-hidden h-[380px] md:h-[480px] bg-linear-to-br from-white/95 to-gray-50/95 backdrop-blur-xl">
                                                {/* Translucent overlay gradient */}
                                                <div className="absolute inset-0 bg-linear-to-br from-primary-teal/10 via-transparent to-blue-500/10" />

                                                {/* Glassmorphism top bar */}
                                                <div className="absolute top-0 left-0 right-0 h-16 bg-white/40 backdrop-blur-md border-b border-white/20 z-10 flex items-center justify-center">
                                                    <div className="w-12 h-1 bg-gray-300 rounded-full" />
                                                </div>

                                                {/* Content */}
                                                <div className="relative z-10 p-6 h-full flex flex-col justify-center items-center text-center pt-20">
                                                    {/* Icon with 3D effect */}
                                                    <motion.div
                                                        className="w-20 h-20 rounded-2xl bg-linear-to-br from-primary-teal to-emerald-600 flex items-center justify-center mb-6 text-white shadow-lg"
                                                        animate={isActive ? {
                                                            y: [0, -10, 0],
                                                            rotateZ: [0, 5, -5, 0],
                                                            scale: [1, 1.05, 1]
                                                        } : {}}
                                                        transition={{
                                                            duration: 3,
                                                            repeat: Infinity,
                                                            ease: "easeInOut"
                                                        }}
                                                        style={{
                                                            boxShadow: '0 10px 25px -5px rgba(32, 201, 151, 0.5)'
                                                        }}
                                                    >
                                                        {feature.icon}
                                                    </motion.div>

                                                    {/* Title */}
                                                    <h3 className="font-sora font-bold text-neutral-slate text-xl md:text-2xl mb-3">
                                                        {feature.title}
                                                    </h3>

                                                    {/* Description */}
                                                    <p className="font-inter text-gray-600 text-sm leading-relaxed mb-6 px-2">
                                                        {feature.description}
                                                    </p>

                                                    {/* Feature details with checkmarks */}
                                                    <div className="w-full space-y-2">
                                                        {feature.details.map((detail, idx) => (
                                                            <motion.div
                                                                key={idx}
                                                                initial={{ opacity: 0, x: -10 }}
                                                                animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                                                                transition={{ delay: idx * 0.1 }}
                                                                className="flex items-center gap-2 bg-white/60 backdrop-blur-sm rounded-lg p-2 border border-white/40"
                                                            >
                                                                <div className="w-5 h-5 rounded-full bg-primary-teal flex items-center justify-center shrink-0">
                                                                    <Check className="w-3 h-3 text-white" />
                                                                </div>
                                                                <span className="text-xs font-medium text-gray-700 text-left">{detail}</span>
                                                            </motion.div>
                                                        ))}
                                                    </div>

                                                    {/* CTA Button */}
                                                    {isActive && (
                                                        <motion.button
                                                            initial={{ opacity: 0, y: 10 }}
                                                            animate={{ opacity: 1, y: 0 }}
                                                            className="mt-4 px-4 py-2 bg-primary-teal hover:bg-emerald-600 text-white rounded-full text-sm font-semibold transition-colors duration-300 flex items-center gap-1 shadow-lg"
                                                        >
                                                            Learn more <ChevronRight className="w-4 h-4" />
                                                        </motion.button>
                                                    )}
                                                </div>

                                                {/* Decorative circles */}
                                                <div className="absolute bottom-10 right-0 w-32 h-32 border border-primary-teal/10 rounded-full" />
                                                <div className="absolute bottom-5 right-5 w-20 h-20 border border-primary-teal/20 rounded-full" />
                                            </div>
                                        </div>

                                        {/* Reflection */}
                                        <div className="absolute -bottom-20 left-0 right-0 h-20 bg-linear-to-b from-neutral-slate/10 to-transparent rounded-b-[2.5rem] blur-sm transform scale-y-[-1] opacity-30" />
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                {/* Navigation dots */}
                <div className="flex justify-center gap-2 mt-8">
                    {features.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveIndex(index)}
                            className={`h-2 rounded-full transition-all duration-300 ${index === activeIndex
                                ? 'w-8 bg-[#20C997]'
                                : 'w-2 bg-gray-300 hover:bg-gray-400'
                                }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
