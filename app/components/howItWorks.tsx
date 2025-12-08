"use client";

import { Download, UserPlus, Rocket, CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const steps = [
    {
        id: 1,
        icon: <Download className="w-10 h-10" />,
        title: "Download SwiftFin",
        description: "Get the app from Play Store or App Store. Quick and easy installation on any device.",
        color: "#20C997",
        bgGradient: "from-[#20C997] to-[#17a2b8]"
    },
    {
        id: 2,
        icon: <UserPlus className="w-10 h-10" />,
        title: "Launch & Explore",
        description: "Open the app and explore the intuitive interface. No complex setup required.",
        color: "#3b82f6",
        bgGradient: "from-[#3b82f6] to-[#6366f1]"
    },
    {
        id: 3,
        icon: <Rocket className="w-10 h-10" />,
        title: "Start Managing",
        description: "Begin tracking expenses, managing EMIs, and monitoring investments effortlessly.",
        color: "#FD7E14",
        bgGradient: "from-[#FD7E14] to-[#ea580c]"
    },
    {
        id: 4,
        icon: <CheckCircle2 className="w-10 h-10" />,
        title: "Achieve Goals",
        description: "Watch your financial health improve with personalized insights and smart recommendations.",
        color: "#198754",
        bgGradient: "from-[#198754] to-[#16a34a]"
    }
];

export default function HowItWorks() {
    const [activeStep, setActiveStep] = useState(0);

    const nextStep = () => {
        setActiveStep((prev) => (prev + 1) % steps.length);
    };

    const prevStep = () => {
        setActiveStep((prev) => (prev - 1 + steps.length) % steps.length);
    };

    return (
        <section id="how-it-works" className="py-20 md:py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
            {/* Header */}
            <div className="container mx-auto px-6 md:px-12 relative z-10 mb-16 md:mb-20">
                <motion.div
                    className="text-center max-w-4xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="inline-block px-4 py-1.5 rounded-full bg-[#FD7E14]/10 mb-4">
                        <span className="text-[#FD7E14] font-bold text-sm uppercase tracking-widest">
                            How It Works
                        </span>
                    </div>
                    <h2 className="font-sora text-3xl sm:text-4xl md:text-5xl font-bold text-[#495057] mb-6 leading-tight">
                        Your Journey to <span className="text-[#20C997]">Financial Freedom</span>
                    </h2>
                    <p className="font-inter text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
                        Follow the roadmap to better financial health
                    </p>
                </motion.div>
            </div>

            {/* Main Roadmap Container */}
            <div className="container mx-auto px-4 sm:px-6 md:px-12 relative">
                <div className="max-w-7xl mx-auto">

                    {/* Desktop Layout */}
                    <div className="hidden lg:grid lg:grid-cols-12 gap-8 min-h-[600px] relative">

                        {/* Left: Visual Card */}
                        <div className="col-span-5 relative">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeStep}
                                    initial={{ opacity: 0, x: -50, scale: 0.95 }}
                                    animate={{ opacity: 1, x: 0, scale: 1 }}
                                    exit={{ opacity: 0, x: 50, scale: 0.95 }}
                                    transition={{ duration: 0.5, ease: "easeInOut" }}
                                    className="sticky top-32"
                                >
                                    <div className={`relative rounded-3xl bg-gradient-to-br ${steps[activeStep].bgGradient} p-1 shadow-2xl overflow-hidden h-[500px]`}>
                                        <div className="absolute inset-0 bg-white/5 backdrop-blur-sm"></div>
                                        <div className="relative h-full bg-white/95 rounded-[22px] flex items-center justify-center p-12 overflow-hidden">
                                            {/* Animated Background Blobs */}
                                            <motion.div
                                                className={`absolute -top-20 -right-20 w-64 h-64 rounded-full bg-gradient-to-br ${steps[activeStep].bgGradient} opacity-10 blur-3xl`}
                                                animate={{
                                                    scale: [1, 1.2, 1],
                                                    rotate: [0, 90, 0]
                                                }}
                                                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                                            />
                                            <motion.div
                                                className={`absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-gradient-to-br ${steps[activeStep].bgGradient} opacity-10 blur-3xl`}
                                                animate={{
                                                    scale: [1, 1.3, 1],
                                                    rotate: [0, -90, 0]
                                                }}
                                                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                            />

                                            {/* Icon & Content */}
                                            <div className="relative z-10 flex flex-col items-center gap-8 text-center">
                                                <motion.div
                                                    className={`w-32 h-32 rounded-3xl bg-gradient-to-br ${steps[activeStep].bgGradient} flex items-center justify-center shadow-2xl text-white`}
                                                    initial={{ scale: 0, rotate: -180 }}
                                                    animate={{ scale: 1, rotate: 0 }}
                                                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                                                >
                                                    {steps[activeStep].icon}
                                                </motion.div>
                                                <div>
                                                    <motion.span
                                                        className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-3 block"
                                                        initial={{ opacity: 0 }}
                                                        animate={{ opacity: 1 }}
                                                        transition={{ delay: 0.2 }}
                                                    >
                                                        Step {String(activeStep + 1).padStart(2, '0')}
                                                    </motion.span>
                                                    <motion.h3
                                                        className="font-sora text-3xl font-bold text-gray-800"
                                                        initial={{ opacity: 0, y: 10 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        transition={{ delay: 0.3 }}
                                                    >
                                                        {steps[activeStep].title}
                                                    </motion.h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* Center: Curved Timeline */}
                        <div className="col-span-2 flex items-center justify-center relative">
                            <svg className="w-full h-[600px]" viewBox="0 0 100 600" preserveAspectRatio="xMidYMid meet">
                                {/* Background Path */}
                                <path
                                    d="M 50 50 Q 70 150, 50 250 Q 30 350, 50 450 Q 70 500, 50 550"
                                    fill="none"
                                    stroke="#e5e7eb"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                />

                                {/* Active Path Segment */}
                                <motion.path
                                    d="M 50 50 Q 70 150, 50 250 Q 30 350, 50 450 Q 70 500, 50 550"
                                    fill="none"
                                    stroke="url(#roadmapGradient)"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    initial={{ pathLength: 0 }}
                                    animate={{ pathLength: (activeStep + 1) / steps.length }}
                                    transition={{ duration: 0.8, ease: "easeInOut" }}
                                />

                                <defs>
                                    <linearGradient id="roadmapGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                        <stop offset="0%" stopColor="#20C997" />
                                        <stop offset="50%" stopColor="#3b82f6" />
                                        <stop offset="100%" stopColor="#FD7E14" />
                                    </linearGradient>
                                </defs>
                            </svg>

                            {/* Nodes */}
                            <div className="absolute inset-0 flex flex-col justify-around items-center py-12">
                                {steps.map((step, index) => (
                                    <motion.button
                                        key={step.id}
                                        onClick={() => setActiveStep(index)}
                                        className="relative group cursor-pointer"
                                        whileHover={{ scale: 1.2 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        {/* Glow Effect for Active */}
                                        <AnimatePresence>
                                            {activeStep === index && (
                                                <motion.div
                                                    layoutId="activeNodeGlow"
                                                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full opacity-30 blur-md"
                                                    style={{ backgroundColor: step.color }}
                                                    initial={{ scale: 0 }}
                                                    animate={{ scale: 1 }}
                                                    exit={{ scale: 0 }}
                                                    transition={{ duration: 0.3 }}
                                                />
                                            )}
                                        </AnimatePresence>

                                        {/* Node Circle */}
                                        <motion.div
                                            className={`w-5 h-5 rounded-full border-3 bg-white relative z-10 transition-all duration-300`}
                                            style={{
                                                borderColor: activeStep >= index ? step.color : '#d1d5db',
                                                borderWidth: activeStep === index ? '3px' : '2px'
                                            }}
                                            animate={{
                                                scale: activeStep === index ? 1.3 : 1
                                            }}
                                        >
                                            {activeStep >= index && (
                                                <motion.div
                                                    className="absolute inset-1 rounded-full"
                                                    style={{ backgroundColor: step.color }}
                                                    initial={{ scale: 0 }}
                                                    animate={{ scale: 1 }}
                                                    transition={{ delay: 0.2 }}
                                                />
                                            )}
                                        </motion.div>
                                    </motion.button>
                                ))}
                            </div>
                        </div>

                        {/* Right: Step Content */}
                        <div className="col-span-5 flex flex-col justify-center">
                            <div className="space-y-6">
                                {steps.map((step, index) => (
                                    <motion.div
                                        key={step.id}
                                        onClick={() => setActiveStep(index)}
                                        className="cursor-pointer"
                                        animate={{
                                            opacity: activeStep === index ? 1 : 0.3,
                                            scale: activeStep === index ? 1 : 0.95,
                                            x: activeStep === index ? 0 : 20
                                        }}
                                        transition={{ duration: 0.4, ease: "easeOut" }}
                                    >
                                        {/* Inactive Steps - Just Title */}
                                        {activeStep !== index && (
                                            <div className="py-4">
                                                <h3 className="font-sora text-xl font-semibold text-gray-300 hover:text-gray-400 transition-colors">
                                                    {step.title}
                                                </h3>
                                            </div>
                                        )}

                                        {/* Active Step - Full Content */}
                                        {activeStep === index && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.5, delay: 0.2 }}
                                                className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100"
                                            >
                                                <div className="flex items-center gap-4 mb-6">
                                                    <motion.span
                                                        className="text-6xl font-bold font-sora"
                                                        style={{ color: step.color }}
                                                        initial={{ scale: 0 }}
                                                        animate={{ scale: 1 }}
                                                        transition={{ type: "spring", stiffness: 200 }}
                                                    >
                                                        {String(index + 1).padStart(2, '0')}
                                                    </motion.span>
                                                    <div
                                                        className="h-1 flex-1 rounded-full"
                                                        style={{ backgroundColor: step.color }}
                                                    />
                                                </div>

                                                <h3 className="font-sora text-4xl font-bold text-[#495057] mb-4">
                                                    {step.title}
                                                </h3>

                                                <p className="font-inter text-lg text-gray-600 leading-relaxed">
                                                    {step.description}
                                                </p>
                                            </motion.div>
                                        )}
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Mobile Layout */}
                    <div className="lg:hidden space-y-8">
                        {steps.map((step, index) => (
                            <motion.div
                                key={step.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
                            >
                                <div className="flex items-start gap-4 mb-4">
                                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${step.bgGradient} flex items-center justify-center text-white flex-shrink-0`}>
                                        {step.icon}
                                    </div>
                                    <div className="flex-1">
                                        <span className="text-xs font-bold uppercase tracking-widest text-gray-400 block mb-1">
                                            Step {String(index + 1).padStart(2, '0')}
                                        </span>
                                        <h3 className="font-sora text-2xl font-bold text-[#495057]">
                                            {step.title}
                                        </h3>
                                    </div>
                                </div>
                                <p className="font-inter text-gray-600 leading-relaxed">
                                    {step.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Navigation Controls (Desktop Only) */}
                    <div className="hidden lg:flex items-center justify-center gap-6 mt-12">
                        <motion.button
                            onClick={prevStep}
                            className="w-12 h-12 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center text-gray-600 hover:border-[#20C997] hover:text-[#20C997] transition-all shadow-md"
                            whileHover={{ scale: 1.1, backgroundColor: "#f0fdf4" }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </motion.button>

                        <div className="flex items-center gap-2 px-6 py-3 bg-white rounded-full shadow-md border border-gray-100">
                            <span className="font-sora text-lg font-bold text-[#495057]">
                                {String(activeStep + 1).padStart(2, '0')}
                            </span>
                            <span className="text-gray-400 font-medium">/</span>
                            <span className="text-gray-400 font-medium">
                                {String(steps.length).padStart(2, '0')}
                            </span>
                        </div>

                        <motion.button
                            onClick={nextStep}
                            className="w-12 h-12 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center text-gray-600 hover:border-[#20C997] hover:text-[#20C997] transition-all shadow-md"
                            whileHover={{ scale: 1.1, backgroundColor: "#f0fdf4" }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <ChevronRight className="w-6 h-6" />
                        </motion.button>
                    </div>
                </div>
            </div>
        </section>
    );
}
