"use client";

import { Receipt, BarChart3, CreditCard, TrendingUp, Lightbulb, Camera } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Features() {
    const [activeIndex, setActiveIndex] = useState(0);

    const features = [
        {
            icon: <Receipt className="w-10 h-10" />,
            title: "Expense Tracking",
            description: "Track expenses with manual entry, receipt scanning, and automatic categorization."
        },
        {
            icon: <BarChart3 className="w-10 h-10" />,
            title: "Financial Reports",
            description: "Interactive dashboards with charts and easy PDF/CSV export."
        },
        {
            icon: <CreditCard className="w-10 h-10" />,
            title: "EMI Tracking",
            description: "Manage loans, get reminders, and visualize EMI progress."
        },
        {
            icon: <TrendingUp className="w-10 h-10" />,
            title: "Investments",
            description: "Track portfolio, view gain/loss across all accounts."
        },
        {
            icon: <Lightbulb className="w-10 h-10" />,
            title: "Smart Tips",
            description: "Personalized insights based on your spending behavior."
        },
        {
            icon: <Camera className="w-10 h-10" />,
            title: "Receipt Scan",
            description: "AI-powered receipt scanning and auto-categorization."
        }
    ];

    // Auto-rotate
    useEffect(() => {
        const timer = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % features.length);
        }, 3000);
        return () => clearInterval(timer);
    }, [features.length]);

    const getPhonePosition = (index: number) => {
        const diff = index - activeIndex;
        const normalized = ((diff % features.length) + features.length) % features.length;

        if (normalized === 0) return { x: 0, z: 100, scale: 1, opacity: 1, rotateY: 0 };
        if (normalized === 1) return { x: 250, z: 0, scale: 0.8, opacity: 0.7, rotateY: -15 };
        if (normalized === features.length - 1) return { x: -250, z: 0, scale: 0.8, opacity: 0.7, rotateY: 15 };
        if (normalized === 2) return { x: 400, z: -100, scale: 0.6, opacity: 0.4, rotateY: -25 };
        if (normalized === features.length - 2) return { x: -400, z: -100, scale: 0.6, opacity: 0.4, rotateY: 25 };
        return { x: 0, z: -200, scale: 0.4, opacity: 0, rotateY: 0 };
    };

    return (
        <section id="features" className="py-20 md:py-28 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 md:px-12">
                {/* Header */}
                <motion.div
                    className="text-center max-w-3xl mx-auto mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="inline-block text-[#20C997] font-semibold text-sm uppercase tracking-wider mb-4">
                        Features
                    </span>
                    <h2 className="font-sora text-3xl sm:text-4xl md:text-5xl font-bold text-[#495057] mb-6">
                        Powerful Tools at Your Fingertips
                    </h2>
                    <p className="font-inter text-gray-600 text-lg">
                        Experience SwiftFin&apos;s innovative features designed for modern finance management
                    </p>
                </motion.div>

                {/* 3D Phone Carousel */}
                <div className="relative h-[500px] md:h-[600px]" style={{ perspective: "1500px" }}>
                    <div className="absolute inset-0 flex items-center justify-center">
                        {features.map((feature, index) => {
                            const pos = getPhonePosition(index);
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
                                        stiffness: 100,
                                        damping: 20
                                    }}
                                    onClick={() => setActiveIndex(index)}
                                    style={{ transformStyle: "preserve-3d" }}
                                >
                                    {/* Phone mockup */}
                                    <div className="relative w-[220px] md:w-[280px]">
                                        {/* Phone frame - Teal themed */}
                                        <div className="relative bg-gradient-to-b from-[#495057] to-[#3d4349] rounded-[2.5rem] p-3 shadow-2xl shadow-[#495057]/30">
                                            {/* Notch */}
                                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-[#2d3238] rounded-b-2xl z-20" />

                                            {/* Screen */}
                                            <div className="relative rounded-[2rem] overflow-hidden h-[350px] md:h-[450px] bg-gradient-to-br from-white to-gray-50">
                                                {/* Teal glow effect */}
                                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-40 bg-[#20C997] rounded-full blur-3xl opacity-20" />

                                                {/* Content */}
                                                <div className="relative z-10 p-6 h-full flex flex-col justify-center items-center text-center">
                                                    {/* Icon */}
                                                    <motion.div
                                                        className="w-20 h-20 rounded-2xl bg-[#20C997]/10 flex items-center justify-center mb-6 text-[#20C997]"
                                                        animate={{
                                                            y: [0, -10, 0],
                                                            rotateZ: activeIndex === index ? [0, 5, -5, 0] : 0
                                                        }}
                                                        transition={{
                                                            y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                                                            rotateZ: { duration: 0.5 }
                                                        }}
                                                    >
                                                        {feature.icon}
                                                    </motion.div>

                                                    {/* Title */}
                                                    <h3 className="font-sora font-bold text-[#495057] text-xl md:text-2xl mb-3">
                                                        {feature.title}
                                                    </h3>

                                                    {/* Description */}
                                                    <p className="font-inter text-gray-600 text-sm leading-relaxed">
                                                        {feature.description}
                                                    </p>
                                                </div>

                                                {/* Decorative circles */}
                                                <div className="absolute bottom-10 right-0 w-32 h-32 border border-[#20C997]/10 rounded-full" />
                                                <div className="absolute bottom-5 right-5 w-20 h-20 border border-[#20C997]/20 rounded-full" />
                                            </div>
                                        </div>

                                        {/* Reflection */}
                                        <div className="absolute -bottom-20 left-0 right-0 h-20 bg-gradient-to-b from-[#495057]/10 to-transparent rounded-b-[2.5rem] blur-sm transform scale-y-[-1] opacity-30" />
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
