"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import AnimatedDownloadButton from "./AnimatedDownloadButton";

export default function Hero() {
    return (
        <section className="relative overflow-hidden bg-gradient-mesh pt-20 pb-16 md:pt-24 md:pb-20 lg:pt-28 lg:pb-32">
            {/* Floating Decorative Shapes */}
            <div className="absolute top-20 right-10 w-64 h-64 md:w-96 md:h-96 bg-teal-400 shape-circle-glow animate-float-slow"></div>
            <div className="absolute bottom-20 left-10 w-56 h-56 md:w-80 md:h-80 bg-orange-400 shape-circle-glow animate-float" style={{ animationDelay: '2s' }}></div>
            <div className="absolute top-1/2 left-1/4 w-48 h-48 md:w-64 md:h-64 bg-blue-400 shape-blob animate-float" style={{ animationDelay: '4s' }}></div>

            {/* Mesh Grid Overlay */}
            <div className="absolute inset-0 bg-mesh-grid opacity-50"></div>

            <div className="container mx-auto px-4 sm:px-6 md:px-12 relative z-10">
                <div className="flex flex-col items-center justify-center text-center relative z-10 max-w-6xl mx-auto">

                    {/* Left Image - Hidden on mobile and tablet */}
                    <motion.div
                        className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 -translate-x-24 xl:-translate-x-48 w-64 xl:w-80 pointer-events-none"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0, y: "-50%" }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <motion.div
                            animate={{ y: [0, -15, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <Image
                                src="/images/hero-left.png"
                                alt="Financial Dashboard on Devices"
                                width={400}
                                height={400}
                                className="w-full h-auto object-contain drop-shadow-2xl"
                                style={{ filter: 'drop-shadow(0 25px 50px rgba(0, 0, 0, 0.15))' }}
                            />
                        </motion.div>
                    </motion.div>

                    {/* Right Image - Hidden on mobile and tablet */}
                    <motion.div
                        className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-24 xl:translate-x-48 w-64 xl:w-80 pointer-events-none"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0, y: "-50%" }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <motion.div
                            animate={{ y: [0, -15, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        >
                            <Image
                                src="/images/hero-right.png"
                                alt="Financial Dashboard on Devices"
                                width={400}
                                height={400}
                                className="w-full h-auto object-contain drop-shadow-2xl"
                                style={{ filter: 'drop-shadow(0 25px 50px rgba(0, 0, 0, 0.15))' }}
                            />
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col items-center max-w-3xl mx-auto relative z-20"
                    >
                        <div className="inline-block px-4 py-2 mb-4 md:mb-6 text-xs sm:text-sm font-semibold tracking-wide text-primary-teal bg-teal-50 rounded-full border border-teal-100 font-inter">
                            Smart Finance Management
                        </div>

                        {/* ⭐ HERO TITLE WITH SORA FONT - Mobile Optimized */}
                        <h1 className="font-sora text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-neutral-slate mb-6 md:mb-8 leading-tight px-2">
                            Take Control of Your{" "}
                            <span className="text-gradient-primary">Finances</span>
                        </h1>

                        {/* ⭐ SUBTITLE WITH INTER FONT - Mobile Optimized */}
                        <p className="font-inter text-base sm:text-lg md:text-2xl text-gray-600 mb-8 md:mb-10 leading-relaxed max-w-2xl mx-auto px-4">
                            Track expenses, manage EMIs, monitor investments, and get personalized finance tips —
                            all in one powerful app.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 md:mb-12 w-full px-4 sm:w-auto">
                            <AnimatedDownloadButton className="w-full sm:w-auto" />

                            <Link
                                href="#features"
                                className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-neutral-slate border-2 border-gray-200 font-inter font-bold text-base sm:text-lg rounded-xl hover:border-primary-teal hover:text-primary-teal transition-all text-center"
                            >
                                Explore Features
                            </Link>
                        </div>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm text-gray-500 font-inter px-4">
                            <div className="flex items-center gap-2">
                                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-success-green shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span>Free forever</span>
                            </div>

                            <div className="flex items-center gap-2">
                                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-success-green shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span>No credit card required</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
