"use client";

import { Download, UserPlus, Rocket, CheckCircle2, Sparkles, TrendingUp, Shield, Zap } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useRef } from "react";

const steps = [
    {
        id: 1,
        icon: <Download className="w-5 h-5" />,
        title: "Download SwiftFin",
        description: "Get the app from Play Store or App Store. Quick and easy installation on any device.",
        position: { left: "15%", top: "75%" },
        mobileOrder: 1,
        decorIcon: <Sparkles className="w-8 h-8" />
    },
    {
        id: 2,
        icon: <UserPlus className="w-5 h-5" />,
        title: "Launch & Explore",
        description: "Open the app and explore the intuitive interface. No complex setup required.",
        position: { left: "35%", top: "45%" },
        mobileOrder: 2,
        decorIcon: <TrendingUp className="w-8 h-8" />
    },
    {
        id: 3,
        icon: <Rocket className="w-5 h-5" />,
        title: "Start Managing",
        description: "Begin tracking expenses, managing EMIs, and monitoring investments effortlessly.",
        position: { left: "60%", top: "25%" },
        mobileOrder: 3,
        decorIcon: <Shield className="w-8 h-8" />
    },
    {
        id: 4,
        icon: <CheckCircle2 className="w-5 h-5" />,
        title: "Achieve Goals",
        description: "Watch your financial health improve with personalized insights and smart recommendations.",
        position: { left: "85%", top: "55%" },
        mobileOrder: 4,
        decorIcon: <Zap className="w-8 h-8" />
    }
];

export default function HowItWorks() {
    const [hoveredStep, setHoveredStep] = useState<number | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // Parallax transforms
    const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
    const roadY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
    const floatY1 = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
    const floatY2 = useTransform(scrollYProgress, [0, 1], ["0%", "-35%"]);
    const roadProgress = useTransform(scrollYProgress, [0.2, 0.8], [0, 1]);

    return (
        <section
            id="how-it-works"
            ref={containerRef}
            className="py-20 md:py-28 relative overflow-hidden"
            style={{ background: "linear-gradient(180deg, #ffffff 0%, #f0fdf9 50%, #ffffff 100%)" }}
        >
            {/* Background Pattern Layer - Parallax */}
            <motion.div
                className="absolute inset-0 pointer-events-none"
                style={{ y: bgY }}
            >
                {/* Dot pattern */}
                <div
                    className="absolute inset-0 opacity-30"
                    style={{
                        backgroundImage: "radial-gradient(#20C997 1px, transparent 1px)",
                        backgroundSize: "30px 30px"
                    }}
                />

                {/* Large gradient orbs */}
                <motion.div
                    className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[#20C997]/10 to-transparent blur-3xl"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3]
                    }}
                    transition={{ duration: 8, repeat: Infinity }}
                />
                <motion.div
                    className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-gradient-to-tl from-[#20C997]/15 to-transparent blur-3xl"
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.2, 0.4, 0.2]
                    }}
                    transition={{ duration: 10, repeat: Infinity, delay: 2 }}
                />
                <motion.div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-gradient-to-br from-[#FD7E14]/5 to-transparent blur-3xl"
                    animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.2, 0.3, 0.2]
                    }}
                    transition={{ duration: 12, repeat: Infinity, delay: 4 }}
                />
            </motion.div>

            {/* Floating decorative elements - Parallax */}
            <motion.div
                className="absolute inset-0 pointer-events-none hidden lg:block"
                style={{ y: floatY1 }}
            >
                <motion.div
                    className="absolute top-[20%] left-[5%] w-16 h-16 rounded-full border-2 border-[#20C997]/20"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                    className="absolute top-[60%] right-[8%] w-24 h-24 rounded-full border-2 border-[#20C997]/15"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                    className="absolute bottom-[30%] left-[10%] w-8 h-8 bg-[#20C997]/10 rounded-lg rotate-45"
                    animate={{
                        y: [0, -20, 0],
                        rotate: [45, 135, 45]
                    }}
                    transition={{ duration: 6, repeat: Infinity }}
                />
            </motion.div>

            <motion.div
                className="absolute inset-0 pointer-events-none hidden lg:block"
                style={{ y: floatY2 }}
            >
                <motion.div
                    className="absolute top-[35%] right-[15%] w-12 h-12 rounded-full bg-[#20C997]/5"
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.5, 0.8, 0.5]
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                />
                <motion.div
                    className="absolute bottom-[45%] left-[20%] w-20 h-20 rounded-full border border-[#20C997]/10"
                    animate={{
                        scale: [1, 1.2, 1]
                    }}
                    transition={{ duration: 5, repeat: Infinity }}
                />

                {/* Decorative icons floating */}
                {steps.map((step, index) => {
                    const positions = [
                        { top: "15%", left: "8%" },
                        { top: "25%", right: "12%" },
                        { bottom: "35%", left: "15%" },
                        { bottom: "20%", right: "10%" }
                    ];
                    return (
                        <motion.div
                            key={index}
                            className="absolute text-[#20C997]/10"
                            style={positions[index]}
                            animate={{
                                y: [0, -15, 0],
                                rotate: [0, 10, -10, 0]
                            }}
                            transition={{
                                duration: 5 + index,
                                repeat: Infinity,
                                delay: index * 0.5
                            }}
                        >
                            {step.decorIcon}
                        </motion.div>
                    );
                })}
            </motion.div>

            {/* Header */}
            <div className="container mx-auto px-6 md:px-12 relative z-10 mb-16 md:mb-20">
                <motion.div
                    className="text-center max-w-4xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <motion.div
                        className="inline-block px-4 py-1.5 rounded-full bg-[#20C997]/10 mb-4 border border-[#20C997]/20"
                        whileHover={{ scale: 1.05 }}
                    >
                        <span className="text-[#20C997] font-bold text-sm uppercase tracking-widest">
                            How It Works
                        </span>
                    </motion.div>
                    <h2 className="font-sora text-3xl sm:text-4xl md:text-5xl font-bold text-[#495057] mb-6 leading-tight">
                        Your Journey to <span className="text-[#20C997]">Financial Freedom</span>
                    </h2>
                    <p className="font-inter text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
                        Follow the roadmap to take control of your finances in just 4 simple steps
                    </p>
                </motion.div>
            </div>

            {/* Desktop Roadmap Layout */}
            <div className="container mx-auto px-6 md:px-12 relative z-10 hidden lg:block">
                <motion.div
                    className="relative h-[500px] max-w-6xl mx-auto"
                    style={{ y: roadY }}
                >
                    {/* SVG Curved Road */}
                    <svg
                        viewBox="0 0 1200 400"
                        className="absolute inset-0 w-full h-full"
                        preserveAspectRatio="xMidYMid meet"
                    >
                        {/* Road shadow */}
                        <path
                            d="M 50 320 Q 200 320 280 200 Q 360 80 500 100 Q 640 120 720 180 Q 800 240 900 200 Q 1000 160 1150 220"
                            fill="none"
                            stroke="#20C997"
                            strokeWidth="56"
                            strokeLinecap="round"
                            opacity="0.1"
                        />

                        {/* Main road */}
                        <path
                            d="M 50 320 Q 200 320 280 200 Q 360 80 500 100 Q 640 120 720 180 Q 800 240 900 200 Q 1000 160 1150 220"
                            fill="none"
                            stroke="url(#roadGradient)"
                            strokeWidth="40"
                            strokeLinecap="round"
                        />

                        {/* Animated progress line */}
                        <motion.path
                            d="M 50 320 Q 200 320 280 200 Q 360 80 500 100 Q 640 120 720 180 Q 800 240 900 200 Q 1000 160 1150 220"
                            fill="none"
                            stroke="#20C997"
                            strokeWidth="4"
                            strokeLinecap="round"
                            initial={{ pathLength: 0 }}
                            whileInView={{ pathLength: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 2, ease: "easeInOut" }}
                        />

                        {/* Road center line (dashed) */}
                        <path
                            d="M 50 320 Q 200 320 280 200 Q 360 80 500 100 Q 640 120 720 180 Q 800 240 900 200 Q 1000 160 1150 220"
                            fill="none"
                            stroke="white"
                            strokeWidth="3"
                            strokeDasharray="15 20"
                            strokeLinecap="round"
                            opacity="0.6"
                        />

                        {/* Road edge lines */}
                        <path
                            d="M 50 320 Q 200 320 280 200 Q 360 80 500 100 Q 640 120 720 180 Q 800 240 900 200 Q 1000 160 1150 220"
                            fill="none"
                            stroke="#495057"
                            strokeWidth="44"
                            strokeLinecap="round"
                            opacity="0.3"
                        />

                        {/* Gradient definition */}
                        <defs>
                            <linearGradient id="roadGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#495057" />
                                <stop offset="50%" stopColor="#3d4349" />
                                <stop offset="100%" stopColor="#495057" />
                            </linearGradient>
                        </defs>
                    </svg>

                    {/* Step Pins with Hover Cards */}
                    {steps.map((step, index) => {
                        const pinPositions = [
                            { x: "4%", y: "75%" },
                            { x: "28%", y: "20%" },
                            { x: "58%", y: "40%" },
                            { x: "92%", y: "48%" }
                        ];

                        const isHovered = hoveredStep === index;
                        const cardPosition = index % 2 === 0 ? "bottom" : "top";

                        return (
                            <motion.div
                                key={step.id}
                                className="absolute"
                                style={{
                                    left: pinPositions[index].x,
                                    top: pinPositions[index].y,
                                    transform: "translate(-50%, -100%)"
                                }}
                                initial={{ opacity: 0, y: 30, scale: 0.5 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{
                                    delay: 0.5 + index * 0.2,
                                    duration: 0.6,
                                    type: "spring",
                                    stiffness: 200
                                }}
                                onMouseEnter={() => setHoveredStep(index)}
                                onMouseLeave={() => setHoveredStep(null)}
                            >
                                {/* Pulsing ring effect */}
                                <motion.div
                                    className="absolute top-6 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full border-2 border-[#20C997]"
                                    animate={{
                                        scale: [1, 1.5, 1],
                                        opacity: [0.5, 0, 0.5]
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        delay: index * 0.5
                                    }}
                                />

                                {/* Location Pin */}
                                <motion.div
                                    className="relative cursor-pointer"
                                    whileHover={{ scale: 1.1 }}
                                    animate={isHovered ? { y: -5 } : { y: 0 }}
                                >
                                    {/* Pin shape */}
                                    <div className="relative">
                                        <svg width="50" height="65" viewBox="0 0 50 65" className="drop-shadow-xl">
                                            <defs>
                                                <linearGradient id={`pinGrad${index}`} x1="0%" y1="0%" x2="0%" y2="100%">
                                                    <stop offset="0%" stopColor="#20C997" />
                                                    <stop offset="100%" stopColor="#0d9488" />
                                                </linearGradient>
                                                <filter id={`pinShadow${index}`} x="-50%" y="-50%" width="200%" height="200%">
                                                    <feDropShadow dx="0" dy="4" stdDeviation="3" floodColor="#20C997" floodOpacity="0.4" />
                                                </filter>
                                            </defs>
                                            <path
                                                d="M25 0C11.2 0 0 11.2 0 25c0 19.4 25 40 25 40s25-20.6 25-40C50 11.2 38.8 0 25 0z"
                                                fill={`url(#pinGrad${index})`}
                                                filter={`url(#pinShadow${index})`}
                                            />
                                        </svg>

                                        {/* Icon inside pin */}
                                        <div className="absolute top-3 left-1/2 -translate-x-1/2 text-white">
                                            {step.icon}
                                        </div>

                                        {/* Step number badge */}
                                        <motion.div
                                            className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-white border-2 border-[#20C997] flex items-center justify-center shadow-md"
                                            animate={isHovered ? {
                                                scale: [1, 1.2, 1],
                                                rotate: [0, 360]
                                            } : {}}
                                            transition={{ duration: 0.5 }}
                                        >
                                            <span className="text-[#20C997] font-bold text-sm">{step.id}</span>
                                        </motion.div>
                                    </div>

                                    {/* Hover Popup Card */}
                                    <motion.div
                                        className={`absolute left-1/2 -translate-x-1/2 w-64 z-50 ${cardPosition === "top" ? "bottom-full mb-4" : "top-full mt-4"
                                            }`}
                                        initial={{ opacity: 0, y: cardPosition === "top" ? 10 : -10, scale: 0.9 }}
                                        animate={isHovered ? {
                                            opacity: 1,
                                            y: 0,
                                            scale: 1
                                        } : {
                                            opacity: 0,
                                            y: cardPosition === "top" ? 10 : -10,
                                            scale: 0.9,
                                            pointerEvents: "none" as const
                                        }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        {/* Arrow */}
                                        <div className={`absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-white rotate-45 border-[#20C997]/20 ${cardPosition === "top"
                                                ? "bottom-[-8px] border-r border-b"
                                                : "top-[-8px] border-l border-t"
                                            }`} />

                                        {/* Card */}
                                        <div className="relative bg-white rounded-2xl p-5 shadow-xl border border-[#20C997]/20">
                                            {/* Decorative corner accent */}
                                            <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-[#20C997]/10 to-transparent rounded-tr-2xl" />

                                            <div className="flex items-center gap-3 mb-3 relative z-10">
                                                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#20C997] to-[#0d9488] flex items-center justify-center text-white">
                                                    {step.icon}
                                                </div>
                                                <div>
                                                    <span className="text-xs font-bold text-[#20C997] uppercase tracking-wider">Step {step.id}</span>
                                                    <h3 className="font-sora font-bold text-[#495057] text-base">{step.title}</h3>
                                                </div>
                                            </div>
                                            <p className="font-inter text-gray-600 text-sm leading-relaxed">{step.description}</p>
                                        </div>
                                    </motion.div>
                                </motion.div>
                            </motion.div>
                        );
                    })}

                    {/* Milestone markers along the road */}
                    {[15, 35, 60, 85].map((left, index) => (
                        <motion.div
                            key={index}
                            className="absolute w-3 h-3 rounded-full bg-white border-2 border-[#20C997]"
                            style={{
                                left: `${left}%`,
                                top: index % 2 === 0 ? "70%" : "35%"
                            }}
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 + index * 0.1 }}
                            animate={{
                                scale: [1, 1.3, 1],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                delay: index * 0.3
                            }}
                        />
                    ))}
                </motion.div>
            </div>

            {/* Mobile Layout */}
            <div className="container mx-auto px-6 relative z-10 lg:hidden">
                <div className="max-w-md mx-auto space-y-6">
                    {/* Vertical road line */}
                    <div className="absolute left-8 sm:left-1/2 sm:-translate-x-1/2 top-[280px] bottom-32 w-1 bg-gradient-to-b from-[#495057] via-[#3d4349] to-[#495057] rounded-full opacity-30" />

                    {steps.map((step, index) => (
                        <motion.div
                            key={step.id}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative pl-16 sm:pl-0"
                        >
                            {/* Mobile Pin */}
                            <div className="absolute left-0 sm:left-1/2 sm:-translate-x-1/2 top-0">
                                <motion.div
                                    className="w-12 h-12 rounded-full bg-gradient-to-br from-[#20C997] to-[#0d9488] flex items-center justify-center text-white shadow-lg border-4 border-white"
                                    whileHover={{ scale: 1.1 }}
                                >
                                    {step.icon}
                                </motion.div>
                                <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-white border-2 border-[#20C997] flex items-center justify-center">
                                    <span className="text-[#20C997] font-bold text-xs">{step.id}</span>
                                </div>
                            </div>

                            {/* Mobile Card */}
                            <motion.div
                                className="bg-white rounded-2xl p-5 shadow-lg border border-[#20C997]/10 ml-4 sm:ml-0 sm:mt-16"
                                whileHover={{ scale: 1.02 }}
                            >
                                <span className="text-xs font-bold text-[#20C997] uppercase tracking-wider">Step {step.id}</span>
                                <h3 className="font-sora font-bold text-[#495057] text-lg mt-1 mb-2">{step.title}</h3>
                                <p className="font-inter text-gray-600 text-sm leading-relaxed">{step.description}</p>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* CTA Section */}
            <motion.div
                className="container mx-auto px-6 md:px-12 relative z-10 mt-16"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
            >
                <div className="text-center">
                    <p className="text-gray-600 mb-4 font-inter">Ready to start your journey?</p>
                    <motion.a
                        href="/download"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#20C997] to-[#0d9488] text-white font-semibold rounded-full shadow-lg shadow-[#20C997]/30"
                        whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(32, 201, 151, 0.4)" }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Download className="w-5 h-5" />
                        Download SwiftFin Now
                    </motion.a>
                </div>
            </motion.div>
        </section>
    );
}
