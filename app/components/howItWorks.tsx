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
        color: "#FFD700",
        coinGradient: "from-yellow-400 to-amber-500"
    },
    {
        id: 2,
        icon: <UserPlus className="w-6 h-6" />,
        title: "Launch & Explore",
        description: "Open the app and explore the intuitive interface. No complex setup required.",
        color: "#C0C0C0",
        coinGradient: "from-gray-300 to-gray-400"
    },
    {
        id: 3,
        icon: <Rocket className="w-6 h-6" />,
        title: "Start Managing",
        description: "Begin tracking expenses, managing EMIs, and monitoring investments effortlessly.",
        color: "#CD7F32",
        coinGradient: "from-amber-600 to-orange-700"
    },
    {
        id: 4,
        icon: <CheckCircle2 className="w-6 h-6" />,
        title: "Achieve Goals",
        description: "Watch your financial health improve with personalized insights and smart recommendations.",
        color: "#20C997",
        coinGradient: "from-emerald-400 to-teal-500"
    }
];

// Coin component with 3D effect
function Coin({ step, index, isActive, onClick, isCollected }: {
    step: typeof steps[0];
    index: number;
    isActive: boolean;
    onClick: () => void;
    isCollected: boolean;
}) {
    // Position coins in a circular arc around the wallet
    const angle = -45 + (index * 30); // Spread coins in an arc
    const radius = 180;
    const x = Math.cos((angle * Math.PI) / 180) * radius;
    const y = Math.sin((angle * Math.PI) / 180) * radius - 50;

    return (
        <motion.button
            onClick={onClick}
            className="absolute cursor-pointer"
            style={{
                left: `calc(50% + ${x}px)`,
                top: `calc(50% + ${y}px)`,
                transformStyle: "preserve-3d"
            }}
            initial={{ opacity: 0, scale: 0, rotateY: -180 }}
            animate={isCollected ? {
                opacity: 0,
                scale: 0.5,
                x: -x,
                y: 100 - y,
                rotateY: 360,
                transition: { duration: 0.6, ease: "easeIn" }
            } : {
                opacity: 1,
                scale: isActive ? 1.2 : 1,
                rotateY: 0,
                transition: { delay: index * 0.15, duration: 0.5, type: "spring" }
            }}
            whileHover={!isCollected ? {
                scale: 1.3,
                rotateY: 15,
                y: -10,
                boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
            } : undefined}
            whileTap={!isCollected ? { scale: 1.1 } : undefined}
        >
            {/* Coin body */}
            <div
                className={`relative w-20 h-20 rounded-full bg-gradient-to-br ${step.coinGradient} shadow-2xl flex items-center justify-center`}
                style={{
                    boxShadow: isActive
                        ? `0 0 30px 10px ${step.color}40, 0 10px 30px rgba(0,0,0,0.4)`
                        : "0 10px 30px rgba(0,0,0,0.3)",
                    transform: "translateZ(20px)"
                }}
            >
                {/* Inner ring */}
                <div className="absolute inset-2 rounded-full border-2 border-white/30" />

                {/* Icon */}
                <div className="text-white relative z-10">
                    {step.icon}
                </div>

                {/* Step number */}
                <div className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-black/80 text-white text-xs font-bold flex items-center justify-center border-2 border-white/20">
                    {index + 1}
                </div>

                {/* Shine effect */}
                <motion.div
                    className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/40 via-transparent to-transparent"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                />
            </div>

            {/* Coin edge (3D effect) */}
            <div
                className={`absolute top-1 left-0 w-20 h-20 rounded-full bg-gradient-to-br ${step.coinGradient} opacity-60`}
                style={{
                    transform: "translateZ(-5px)",
                    filter: "brightness(0.7)"
                }}
            />
        </motion.button>
    );
}

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

    return (
        <section id="how-it-works" className="py-20 md:py-28 bg-gradient-to-b from-[#0f0f1a] via-[#1a1a2e] to-[#0f0f1a] relative overflow-hidden">
            {/* Animated background */}
            <div className="absolute inset-0 pointer-events-none">
                <motion.div
                    className="absolute top-20 left-1/4 w-96 h-96 rounded-full bg-amber-500/10 blur-3xl"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 6, repeat: Infinity }}
                />
                <motion.div
                    className="absolute bottom-20 right-1/4 w-80 h-80 rounded-full bg-emerald-500/10 blur-3xl"
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
                    <div className="inline-block px-4 py-1.5 rounded-full bg-amber-500/20 mb-4 border border-amber-500/30">
                        <span className="text-amber-400 font-bold text-sm uppercase tracking-widest">
                            How It Works
                        </span>
                    </div>
                    <h2 className="font-sora text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                        Collect Your <span className="bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">Financial Coins</span>
                    </h2>
                    <p className="font-inter text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto">
                        Click on each coin to discover the steps to financial freedom
                    </p>
                </motion.div>
            </div>

            {/* Main Interactive Area */}
            <div className="container mx-auto px-4 sm:px-6 md:px-12 relative z-10">
                <div className="max-w-5xl mx-auto">

                    {/* Wallet and Coins Container */}
                    <div className="relative h-[500px] md:h-[600px] flex items-center justify-center" style={{ perspective: "1000px" }}>

                        {/* Central Wallet */}
                        <motion.div
                            className="relative z-10"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, type: "spring" }}
                        >
                            {/* Wallet body */}
                            <div className="relative w-48 h-32 md:w-64 md:h-44 rounded-2xl bg-gradient-to-br from-amber-800 via-amber-900 to-amber-950 shadow-2xl overflow-hidden"
                                style={{
                                    boxShadow: "0 20px 60px rgba(0,0,0,0.5), 0 0 40px rgba(217, 119, 6, 0.2)"
                                }}
                            >
                                {/* Wallet flap */}
                                <div className="absolute top-0 left-0 right-0 h-8 md:h-12 bg-gradient-to-b from-amber-700 to-amber-800 border-b-2 border-amber-950">
                                    {/* Clasp */}
                                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-8 h-4 rounded-full bg-gradient-to-b from-yellow-500 to-amber-600 border-2 border-amber-950" />
                                </div>

                                {/* Wallet interior glow */}
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-t from-amber-400/20 to-transparent"
                                    animate={{ opacity: [0.2, 0.4, 0.2] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                />

                                {/* Collected coins indicator */}
                                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-center gap-2">
                                    {steps.map((step, i) => (
                                        <motion.div
                                            key={i}
                                            className={`w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-br ${step.coinGradient} flex items-center justify-center text-white text-xs font-bold`}
                                            initial={{ scale: 0, opacity: 0 }}
                                            animate={collectedCoins.includes(i) ? {
                                                scale: 1,
                                                opacity: 1,
                                                transition: { delay: 0.5, type: "spring", stiffness: 200 }
                                            } : {
                                                scale: 0.4,
                                                opacity: 0.3
                                            }}
                                            style={{
                                                boxShadow: collectedCoins.includes(i) ? "0 0 10px rgba(255,215,0,0.5)" : "none"
                                            }}
                                        >
                                            {collectedCoins.includes(i) ? "✓" : i + 1}
                                        </motion.div>
                                    ))}
                                </div>

                                {/* Stitching details */}
                                <div className="absolute left-2 top-12 bottom-2 w-0.5 border-l-2 border-dashed border-amber-950/30" />
                                <div className="absolute right-2 top-12 bottom-2 w-0.5 border-l-2 border-dashed border-amber-950/30" />
                            </div>

                            {/* SwiftFin logo on wallet */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/4 text-center">
                                <span className="font-sora font-bold text-amber-400/60 text-lg md:text-xl tracking-wider">SwiftFin</span>
                            </div>
                        </motion.div>

                        {/* Floating Coins */}
                        <div className="absolute inset-0">
                            {steps.map((step, index) => (
                                <Coin
                                    key={step.id}
                                    step={step}
                                    index={index}
                                    isActive={activeStep === index}
                                    onClick={() => handleCoinClick(index)}
                                    isCollected={collectedCoins.includes(index)}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Step Details Panel */}
                    <AnimatePresence mode="wait">
                        {activeStep !== null && (
                            <motion.div
                                key={activeStep}
                                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                                transition={{ duration: 0.4, type: "spring" }}
                                className="mt-8 max-w-2xl mx-auto"
                            >
                                <div className="relative bg-gradient-to-br from-[#1a1a2e] to-[#252545] rounded-3xl p-8 border border-white/10 shadow-2xl overflow-hidden">
                                    {/* Glow effect */}
                                    <div
                                        className="absolute inset-0 opacity-20"
                                        style={{
                                            background: `radial-gradient(circle at 30% 30%, ${steps[activeStep].color}40, transparent 50%)`
                                        }}
                                    />

                                    <div className="relative z-10 flex items-start gap-6">
                                        {/* Coin preview */}
                                        <div
                                            className={`shrink-0 w-16 h-16 rounded-full bg-gradient-to-br ${steps[activeStep].coinGradient} flex items-center justify-center text-white shadow-lg`}
                                            style={{
                                                boxShadow: `0 0 20px ${steps[activeStep].color}40`
                                            }}
                                        >
                                            {steps[activeStep].icon}
                                        </div>

                                        <div className="flex-1">
                                            <div className="flex items-center gap-3 mb-2">
                                                <span className="text-xs font-bold uppercase tracking-widest text-gray-500">
                                                    Step {String(activeStep + 1).padStart(2, '0')}
                                                </span>
                                                {collectedCoins.includes(activeStep) && (
                                                    <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 font-semibold">
                                                        Collected!
                                                    </span>
                                                )}
                                            </div>
                                            <h3 className="font-sora text-2xl md:text-3xl font-bold text-white mb-3">
                                                {steps[activeStep].title}
                                            </h3>
                                            <p className="font-inter text-gray-400 text-base leading-relaxed">
                                                {steps[activeStep].description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Progress & Reset */}
                    <div className="mt-8 flex flex-col items-center gap-4">
                        {/* Progress bar */}
                        <div className="flex items-center gap-2">
                            <span className="text-gray-500 text-sm font-medium">Progress:</span>
                            <div className="w-40 h-2 bg-gray-800 rounded-full overflow-hidden">
                                <motion.div
                                    className="h-full bg-gradient-to-r from-amber-500 to-emerald-500 rounded-full"
                                    initial={{ width: 0 }}
                                    animate={{ width: `${(collectedCoins.length / steps.length) * 100}%` }}
                                    transition={{ duration: 0.5 }}
                                />
                            </div>
                            <span className="text-amber-400 font-bold text-sm">{collectedCoins.length}/{steps.length}</span>
                        </div>

                        {/* Completion message */}
                        <AnimatePresence>
                            {collectedCoins.length === steps.length && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="flex flex-col items-center gap-4"
                                >
                                    <motion.div
                                        className="text-center"
                                        initial={{ y: 10 }}
                                        animate={{ y: 0 }}
                                    >
                                        <span className="text-2xl">🎉</span>
                                        <p className="text-emerald-400 font-semibold mt-2">All coins collected! You&apos;re ready to start your journey.</p>
                                    </motion.div>

                                    <div className="flex gap-4">
                                        <motion.a
                                            href="/download"
                                            className="px-6 py-3 bg-gradient-to-r from-amber-500 to-emerald-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-shadow"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            Download Now
                                        </motion.a>
                                        <motion.button
                                            onClick={resetWallet}
                                            className="px-6 py-3 bg-white/10 text-white font-semibold rounded-full border border-white/20 hover:bg-white/20 transition-colors"
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
