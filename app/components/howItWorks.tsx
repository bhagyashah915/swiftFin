"use client";

import { Download, UserPlus, Rocket, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const steps = [
    {
        id: 1,
        icon: <Download className="w-6 h-6" />,
        title: "Download SwiftFin",
        description: "Get the app from Play Store or App Store. Quick and easy installation on any device.",
        color: "#20C997",
        coinGradient: "from-[#20C997] to-[#198754]"
    },
    {
        id: 2,
        icon: <UserPlus className="w-6 h-6" />,
        title: "Launch & Explore",
        description: "Open the app and explore the intuitive interface. No complex setup required.",
        color: "#FD7E14",
        coinGradient: "from-[#FD7E14] to-[#ea580c]"
    },
    {
        id: 3,
        icon: <Rocket className="w-6 h-6" />,
        title: "Start Managing",
        description: "Begin tracking expenses, managing EMIs, and monitoring investments effortlessly.",
        color: "#198754",
        coinGradient: "from-[#198754] to-[#16a34a]"
    },
    {
        id: 4,
        icon: <CheckCircle2 className="w-6 h-6" />,
        title: "Achieve Goals",
        description: "Watch your financial health improve with personalized insights and smart recommendations.",
        color: "#20C997",
        coinGradient: "from-[#20C997] to-[#14b8a6]"
    }
];

export default function HowItWorks() {
    const [activeStep, setActiveStep] = useState<number | null>(null);
    const [collectedCoins, setCollectedCoins] = useState<number[]>([]);

    const handleCoinClick = (index: number) => {
        setActiveStep(index);
        if (!collectedCoins.includes(index)) {
            setTimeout(() => {
                setCollectedCoins(prev => [...prev, index]);
            }, 100);
        }
    };

    const resetWallet = () => {
        setCollectedCoins([]);
        setActiveStep(null);
    };

    // Split steps for left and right
    const leftSteps = steps.filter((_, i) => i % 2 === 0); // Steps 1, 3
    const rightSteps = steps.filter((_, i) => i % 2 === 1); // Steps 2, 4

    return (
        <section id="how-it-works" className="py-20 md:py-28 bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden">
            {/* Subtle background elements */}
            <div className="absolute inset-0 pointer-events-none">
                <motion.div
                    className="absolute top-20 left-1/4 w-96 h-96 rounded-full bg-[#20C997]/5 blur-3xl"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 6, repeat: Infinity }}
                />
                <motion.div
                    className="absolute bottom-20 right-1/4 w-80 h-80 rounded-full bg-[#FD7E14]/5 blur-3xl"
                    animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
                    transition={{ duration: 8, repeat: Infinity, delay: 2 }}
                />
            </div>

            {/* Header */}
            <div className="container mx-auto px-6 md:px-12 relative z-10 mb-12 md:mb-16">
                <motion.div
                    className="text-center max-w-4xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="inline-block px-4 py-1.5 rounded-full bg-[#FD7E14]/10 mb-4 border border-[#FD7E14]/20">
                        <span className="text-[#FD7E14] font-bold text-sm uppercase tracking-widest">
                            How It Works
                        </span>
                    </div>
                    <h2 className="font-sora text-3xl sm:text-4xl md:text-5xl font-bold text-[#495057] mb-6 leading-tight">
                        Collect Your <span className="text-[#20C997]">Financial Coins</span>
                    </h2>
                    <p className="font-inter text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
                        Click on each coin to discover the steps to financial freedom
                    </p>
                </motion.div>
            </div>

            {/* Main Layout: Left Steps - Wallet - Right Steps */}
            <div className="container mx-auto px-4 sm:px-6 md:px-12 relative z-10">
                <div className="max-w-6xl mx-auto">

                    {/* Desktop: 3-Column Layout */}
                    <div className="hidden lg:grid lg:grid-cols-5 gap-8 items-center min-h-[500px]">

                        {/* Left Steps (1 & 3) */}
                        <div className="col-span-1 space-y-6">
                            {leftSteps.map((step, i) => {
                                const originalIndex = i * 2; // 0, 2
                                const isActive = activeStep === originalIndex;
                                const isCollected = collectedCoins.includes(originalIndex);

                                return (
                                    <motion.div
                                        key={step.id}
                                        initial={{ opacity: 0, x: -50 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: originalIndex * 0.2, duration: 0.5 }}
                                        onClick={() => handleCoinClick(originalIndex)}
                                        className="cursor-pointer"
                                    >
                                        <motion.div
                                            className={`relative p-6 rounded-2xl border-2 transition-all ${isActive
                                                    ? 'bg-white border-[#20C997] shadow-xl'
                                                    : isCollected
                                                        ? 'bg-gray-50 border-gray-200 opacity-60'
                                                        : 'bg-white border-gray-100 hover:border-[#20C997]/50 hover:shadow-lg'
                                                }`}
                                            whileHover={{ scale: isCollected ? 1 : 1.02 }}
                                            animate={isActive ? { scale: 1.05 } : {}}
                                        >
                                            {/* Coin badge */}
                                            <motion.div
                                                className={`absolute -top-3 -right-3 w-10 h-10 rounded-full bg-gradient-to-br ${step.coinGradient} flex items-center justify-center text-white font-bold shadow-lg`}
                                                animate={isActive ? {
                                                    scale: [1, 1.2, 1],
                                                    rotate: [0, 10, -10, 0]
                                                } : {}}
                                                transition={{ duration: 0.5 }}
                                            >
                                                {isCollected ? "✓" : originalIndex + 1}
                                            </motion.div>

                                            <div className="flex items-center gap-3 mb-3">
                                                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${step.coinGradient} flex items-center justify-center text-white`}>
                                                    {step.icon}
                                                </div>
                                                <span className="text-xs font-bold uppercase tracking-wider text-gray-400">Step {originalIndex + 1}</span>
                                            </div>
                                            <h3 className="font-sora font-bold text-[#495057] text-lg mb-2">{step.title}</h3>

                                            <AnimatePresence>
                                                {isActive && (
                                                    <motion.p
                                                        initial={{ opacity: 0, height: 0 }}
                                                        animate={{ opacity: 1, height: "auto" }}
                                                        exit={{ opacity: 0, height: 0 }}
                                                        className="font-inter text-gray-600 text-sm leading-relaxed"
                                                    >
                                                        {step.description}
                                                    </motion.p>
                                                )}
                                            </AnimatePresence>
                                        </motion.div>
                                    </motion.div>
                                );
                            })}
                        </div>

                        {/* Center Wallet */}
                        <div className="col-span-3 flex items-center justify-center">
                            <motion.div
                                className="relative"
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, type: "spring" }}
                            >
                                {/* Wallet glow */}
                                <motion.div
                                    className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#20C997]/20 to-[#FD7E14]/20 blur-3xl"
                                    animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
                                    transition={{ duration: 4, repeat: Infinity }}
                                />

                                {/* Wallet body */}
                                <div className="relative w-72 h-48 md:w-80 md:h-56 rounded-3xl bg-gradient-to-br from-[#495057] via-[#3d4349] to-[#343a40] shadow-2xl overflow-hidden"
                                    style={{
                                        boxShadow: "0 25px 80px rgba(0,0,0,0.3), 0 0 40px rgba(32, 201, 151, 0.15)"
                                    }}
                                >
                                    {/* Wallet flap */}
                                    <div className="absolute top-0 left-0 right-0 h-12 md:h-14 bg-gradient-to-b from-[#3d4349] to-[#495057] border-b-2 border-[#343a40]">
                                        {/* Clasp */}
                                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-10 h-5 rounded-full bg-gradient-to-b from-[#20C997] to-[#198754] border-2 border-[#343a40]" />
                                    </div>

                                    {/* Wallet interior pattern */}
                                    <div className="absolute inset-0 opacity-5">
                                        <div className="absolute inset-0" style={{
                                            backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.1) 10px, rgba(255,255,255,0.1) 20px)"
                                        }} />
                                    </div>

                                    {/* Collected coins display */}
                                    <div className="absolute bottom-6 left-6 right-6 flex items-center justify-center gap-3">
                                        {steps.map((step, i) => (
                                            <motion.div
                                                key={i}
                                                className={`w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br ${step.coinGradient} flex items-center justify-center text-white font-bold shadow-lg border-2 border-white/20`}
                                                initial={{ scale: 0, opacity: 0, y: -50 }}
                                                animate={collectedCoins.includes(i) ? {
                                                    scale: 1,
                                                    opacity: 1,
                                                    y: 0,
                                                    transition: { delay: 0.3, type: "spring", stiffness: 200 }
                                                } : {
                                                    scale: 0.5,
                                                    opacity: 0.2,
                                                    y: 0
                                                }}
                                                style={{
                                                    boxShadow: collectedCoins.includes(i) ? `0 0 15px ${step.color}40` : "none"
                                                }}
                                            >
                                                {collectedCoins.includes(i) ? (
                                                    <motion.span
                                                        initial={{ scale: 0 }}
                                                        animate={{ scale: 1 }}
                                                        transition={{ delay: 0.5 }}
                                                    >
                                                        ✓
                                                    </motion.span>
                                                ) : (
                                                    <span className="opacity-50">{i + 1}</span>
                                                )}
                                            </motion.div>
                                        ))}
                                    </div>

                                    {/* SwiftFin branding */}
                                    <div className="absolute top-16 left-1/2 -translate-x-1/2 text-center">
                                        <span className="font-sora font-bold text-white/40 text-xl tracking-wider">SwiftFin</span>
                                    </div>

                                    {/* Stitching details */}
                                    <div className="absolute left-3 top-16 bottom-3 w-px border-l-2 border-dashed border-white/10" />
                                    <div className="absolute right-3 top-16 bottom-3 w-px border-l-2 border-dashed border-white/10" />
                                </div>
                            </motion.div>
                        </div>

                        {/* Right Steps (2 & 4) */}
                        <div className="col-span-1 space-y-6">
                            {rightSteps.map((step, i) => {
                                const originalIndex = i * 2 + 1; // 1, 3
                                const isActive = activeStep === originalIndex;
                                const isCollected = collectedCoins.includes(originalIndex);

                                return (
                                    <motion.div
                                        key={step.id}
                                        initial={{ opacity: 0, x: 50 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: originalIndex * 0.2, duration: 0.5 }}
                                        onClick={() => handleCoinClick(originalIndex)}
                                        className="cursor-pointer"
                                    >
                                        <motion.div
                                            className={`relative p-6 rounded-2xl border-2 transition-all ${isActive
                                                    ? 'bg-white border-[#FD7E14] shadow-xl'
                                                    : isCollected
                                                        ? 'bg-gray-50 border-gray-200 opacity-60'
                                                        : 'bg-white border-gray-100 hover:border-[#FD7E14]/50 hover:shadow-lg'
                                                }`}
                                            whileHover={{ scale: isCollected ? 1 : 1.02 }}
                                            animate={isActive ? { scale: 1.05 } : {}}
                                        >
                                            {/* Coin badge */}
                                            <motion.div
                                                className={`absolute -top-3 -left-3 w-10 h-10 rounded-full bg-gradient-to-br ${step.coinGradient} flex items-center justify-center text-white font-bold shadow-lg`}
                                                animate={isActive ? {
                                                    scale: [1, 1.2, 1],
                                                    rotate: [0, -10, 10, 0]
                                                } : {}}
                                                transition={{ duration: 0.5 }}
                                            >
                                                {isCollected ? "✓" : originalIndex + 1}
                                            </motion.div>

                                            <div className="flex items-center gap-3 mb-3">
                                                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${step.coinGradient} flex items-center justify-center text-white`}>
                                                    {step.icon}
                                                </div>
                                                <span className="text-xs font-bold uppercase tracking-wider text-gray-400">Step {originalIndex + 1}</span>
                                            </div>
                                            <h3 className="font-sora font-bold text-[#495057] text-lg mb-2">{step.title}</h3>

                                            <AnimatePresence>
                                                {isActive && (
                                                    <motion.p
                                                        initial={{ opacity: 0, height: 0 }}
                                                        animate={{ opacity: 1, height: "auto" }}
                                                        exit={{ opacity: 0, height: 0 }}
                                                        className="font-inter text-gray-600 text-sm leading-relaxed"
                                                    >
                                                        {step.description}
                                                    </motion.p>
                                                )}
                                            </AnimatePresence>
                                        </motion.div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Mobile Layout */}
                    <div className="lg:hidden space-y-6">
                        {/* Mobile Wallet */}
                        <div className="flex justify-center mb-8">
                            <div className="relative w-64 h-40 rounded-2xl bg-gradient-to-br from-[#495057] to-[#343a40] shadow-xl overflow-hidden">
                                <div className="absolute top-0 left-0 right-0 h-10 bg-gradient-to-b from-[#3d4349] to-[#495057] border-b-2 border-[#343a40]">
                                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-8 h-4 rounded-full bg-gradient-to-b from-[#20C997] to-[#198754]" />
                                </div>
                                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-center gap-2">
                                    {steps.map((step, i) => (
                                        <motion.div
                                            key={i}
                                            className={`w-10 h-10 rounded-full bg-gradient-to-br ${step.coinGradient} flex items-center justify-center text-white text-sm font-bold`}
                                            animate={collectedCoins.includes(i) ? { scale: 1, opacity: 1 } : { scale: 0.6, opacity: 0.3 }}
                                        >
                                            {collectedCoins.includes(i) ? "✓" : i + 1}
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Mobile Steps */}
                        {steps.map((step, index) => (
                            <motion.div
                                key={step.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                onClick={() => handleCoinClick(index)}
                                className={`p-5 rounded-2xl border-2 cursor-pointer ${activeStep === index
                                        ? 'bg-white border-[#20C997] shadow-lg'
                                        : collectedCoins.includes(index)
                                            ? 'bg-gray-50 border-gray-200 opacity-60'
                                            : 'bg-white border-gray-100'
                                    }`}
                            >
                                <div className="flex items-start gap-4">
                                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${step.coinGradient} flex items-center justify-center text-white flex-shrink-0`}>
                                        {collectedCoins.includes(index) ? <span className="text-lg">✓</span> : step.icon}
                                    </div>
                                    <div className="flex-1">
                                        <span className="text-xs font-bold uppercase tracking-wider text-gray-400">Step {index + 1}</span>
                                        <h3 className="font-sora font-bold text-[#495057] text-lg">{step.title}</h3>
                                        <p className="font-inter text-gray-600 text-sm mt-1">{step.description}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Progress & Actions */}
                    <div className="mt-12 flex flex-col items-center gap-4">
                        {/* Progress bar */}
                        <div className="flex items-center gap-3">
                            <span className="text-gray-500 text-sm font-medium">Progress:</span>
                            <div className="w-40 h-2 bg-gray-200 rounded-full overflow-hidden">
                                <motion.div
                                    className="h-full bg-gradient-to-r from-[#20C997] to-[#198754] rounded-full"
                                    initial={{ width: 0 }}
                                    animate={{ width: `${(collectedCoins.length / steps.length) * 100}%` }}
                                    transition={{ duration: 0.5 }}
                                />
                            </div>
                            <span className="text-[#20C997] font-bold text-sm">{collectedCoins.length}/{steps.length}</span>
                        </div>

                        {/* Completion */}
                        <AnimatePresence>
                            {collectedCoins.length === steps.length && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="flex flex-col items-center gap-4 mt-4"
                                >
                                    <div className="text-center">
                                        <span className="text-3xl">🎉</span>
                                        <p className="text-[#198754] font-semibold mt-2">All coins collected! You&apos;re ready to start.</p>
                                    </div>

                                    <div className="flex gap-4">
                                        <motion.a
                                            href="/download"
                                            className="px-6 py-3 bg-gradient-to-r from-[#20C997] to-[#198754] text-white font-semibold rounded-full shadow-lg"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            Download Now
                                        </motion.a>
                                        <motion.button
                                            onClick={resetWallet}
                                            className="px-6 py-3 bg-gray-100 text-[#495057] font-semibold rounded-full border border-gray-200 hover:bg-gray-200"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            Play Again
                                        </motion.button>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
}
