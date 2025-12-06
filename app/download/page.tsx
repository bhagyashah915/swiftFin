"use client";

import { motion } from "framer-motion";
import { ArrowRight, Smartphone, Apple } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function DownloadPage() {
    const [hoveredPlatform, setHoveredPlatform] = useState<"android" | "ios" | null>(null);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut",
            },
        },
    };

    return (
        <main className="min-h-screen bg-neutral-slate text-white overflow-hidden relative selection:bg-primary-teal selection:text-white">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        repeatType: "reverse",
                    }}
                    className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary-teal/20 rounded-full blur-[100px]"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.2, 0.4, 0.2],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        repeatType: "reverse",
                        delay: 1,
                    }}
                    className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-[120px]"
                />
            </div>

            <div className="container mx-auto px-6 py-24 relative z-10 flex flex-col items-center justify-center min-h-screen">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="w-full max-w-5xl"
                >
                    <motion.div variants={itemVariants} className="text-center mb-16">
                        <h1 className="font-sora text-5xl md:text-7xl font-bold mb-6">
                            Download <span className="text-primary-teal">SwiftFin</span>
                        </h1>
                        <p className="font-inter text-xl text-gray-300 max-w-2xl mx-auto">
                            Experience the future of financial management. Available now on Android and iOS.
                            Start your journey to financial freedom today.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                        {/* Android Card */}
                        <motion.div
                            variants={itemVariants}
                            onHoverStart={() => setHoveredPlatform("android")}
                            onHoverEnd={() => setHoveredPlatform(null)}
                            className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 overflow-hidden hover:bg-white/10 transition-colors duration-500"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative z-10 flex flex-col h-full items-center text-center">
                                <div className="w-20 h-20 bg-green-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                                    <Smartphone className="w-10 h-10 text-green-400" />
                                </div>
                                <h2 className="font-sora text-3xl font-bold mb-4">Android</h2>
                                <p className="font-inter text-gray-400 mb-8 flex-grow">
                                    Get the app from the Google Play Store. Compatible with Android 8.0 and above.
                                </p>
                                <button className="w-full py-4 bg-white text-neutral-slate font-bold rounded-xl flex items-center justify-center gap-2 group-hover:bg-green-500 group-hover:text-white transition-all duration-300">
                                    <span>Download for Android</span>
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </motion.div>

                        {/* iOS Card */}
                        <motion.div
                            variants={itemVariants}
                            onHoverStart={() => setHoveredPlatform("ios")}
                            onHoverEnd={() => setHoveredPlatform(null)}
                            className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 overflow-hidden hover:bg-white/10 transition-colors duration-500"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative z-10 flex flex-col h-full items-center text-center">
                                <div className="w-20 h-20 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                                    <Apple className="w-10 h-10 text-blue-400" />
                                </div>
                                <h2 className="font-sora text-3xl font-bold mb-4">iOS</h2>
                                <p className="font-inter text-gray-400 mb-8 flex-grow">
                                    Download from the App Store. Optimized for iPhone and iPad running iOS 14+.
                                </p>
                                <button className="w-full py-4 bg-white text-neutral-slate font-bold rounded-xl flex items-center justify-center gap-2 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                                    <span>Download for iOS</span>
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </motion.div>
                    </div>

                    <motion.div
                        variants={itemVariants}
                        className="mt-16 text-center"
                    >
                        <p className="font-inter text-gray-500 text-sm">
                            By downloading, you agree to our Terms of Service and Privacy Policy.
                        </p>
                        <Link href="/" className="inline-block mt-8 text-primary-teal hover:text-white transition-colors font-medium border-b border-primary-teal/30 hover:border-white pb-1">
                            &larr; Back to Home
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </main>
    );
}
