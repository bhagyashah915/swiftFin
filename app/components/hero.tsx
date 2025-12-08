"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import AnimatedDownloadButton from "./AnimatedDownloadButton";

export default function Hero() {
    return (
        <section className="relative min-h-screen pt-16 pb-10 md:pt-24 md:pb-20 lg:pt-28 lg:pb-28 overflow-hidden bg-gradient-to-br from-white via-teal-50/30 to-white">
            {/* Abstract Circle - Bottom Left, showing only top-right portion */}
            <div className="absolute -bottom-[280px] -left-[200px] md:-bottom-[480px] md:-left-[400px] lg:-bottom-[550px] lg:-left-[450px] w-[600px] h-[600px] md:w-[1200px] md:h-[1200px] lg:w-[1500px] lg:h-[1500px] pointer-events-none">
                <div className="absolute inset-12 md:inset-28 lg:inset-36 bg-gradient-to-tr from-teal-100 to-teal-50 rounded-full" />
                <div className="absolute inset-16 md:inset-40 lg:inset-52 bg-gradient-to-tr from-teal-400 to-teal-500 rounded-full opacity-90" />
                <div className="absolute inset-20 md:inset-48 lg:inset-60 bg-teal-600 rounded-full" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 md:px-10 relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 xl:gap-16 w-full max-w-7xl mx-auto">

                    {/* Left Side - Mobile Image */}
                    <div className="relative order-2 lg:order-1 flex-shrink-0 mt-6 lg:mt-0">
                        {/* Mobile Image with Fade Up Animation */}
                        <motion.div
                            initial={{ opacity: 0, y: 60 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="relative z-10"
                        >
                            {/* Glow effect behind phone */}
                            <div className="absolute inset-0 bg-gradient-to-t from-teal-400/20 to-transparent blur-3xl scale-110" />
                            <Image
                                src="/heroMobile.png"
                                alt="SwiftFin Mobile App"
                                width={600}
                                height={1200}
                                className="relative w-64 sm:w-80 md:w-[420px] lg:w-[480px] xl:w-[550px] h-auto drop-shadow-[0_35px_60px_rgba(0,0,0,0.25)]"
                                priority
                            />
                        </motion.div>
                    </div>

                    {/* Right Side - Text Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-2xl order-1 lg:order-2 flex-shrink-0 w-full"
                    >
                        {/* Premium Badge */}
                        <motion.span
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            className="inline-flex items-center gap-2 px-4 py-2 mb-6 md:mb-8 text-xs md:text-sm font-semibold tracking-wide text-teal-700 bg-gradient-to-r from-teal-50 to-emerald-50 rounded-full border border-teal-200/60 shadow-sm"
                        >
                            <span className="w-2 h-2 bg-teal-500 rounded-full animate-pulse" />
                            Smart Finance Management
                        </motion.span>

                        {/* Title */}
                        <h1 className="font-sora text-3xl sm:text-4xl md:text-6xl lg:text-6xl xl:text-7xl font-bold text-neutral-slate mb-4 md:mb-6 leading-[1.1] tracking-tight">
                            Master Your{" "}
                            <span className="text-gradient-primary relative">
                                Money
                                <svg className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-2 md:h-3 text-teal-400/30" viewBox="0 0 200 12" preserveAspectRatio="none">
                                    <path d="M0 9c50-6 100-6 200 0" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round"/>
                                </svg>
                            </span>
                            <br />
                            <span className="text-gray-400">Effortlessly</span>
                        </h1>

                        {/* Subtitle */}
                        <p className="font-inter text-base md:text-lg lg:text-xl text-gray-600 mb-6 md:mb-10 leading-relaxed max-w-lg px-2 md:px-0">
                            The all-in-one financial companion that helps you track expenses,
                            manage EMIs, grow investments, and achieve your financial goals with
                            <span className="text-teal-600 font-medium"> AI-powered insights</span>.
                        </p>

                        {/* Buttons */}
                        <div className="flex flex-col md:flex-row gap-3 md:gap-4 mb-6 md:mb-10 w-full max-w-md lg:max-w-none md:w-auto px-4 md:px-0">
                            <AnimatedDownloadButton className="w-full md:w-auto shadow-lg shadow-teal-500/25 hover:shadow-xl hover:shadow-teal-500/30 transition-shadow" />

                            <Link
                                href="#features"
                                className="group px-6 md:px-8 py-3 md:py-4 bg-white text-neutral-slate border-2 border-gray-200 font-semibold text-sm md:text-base rounded-2xl hover:border-teal-400 hover:text-teal-600 transition-all text-center flex items-center justify-center gap-2 whitespace-nowrap w-full md:w-auto"
                            >
                                Explore Features
                                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </Link>
                        </div>

                        {/* Trust Indicators */}
                        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 md:gap-6 text-xs md:text-sm text-gray-600 font-inter px-2 md:px-0">
                            <div className="flex items-center gap-2 md:gap-2.5 bg-white/80 backdrop-blur-sm px-3 md:px-4 py-1.5 md:py-2 rounded-full shadow-sm border border-gray-100">
                                <div className="w-6 h-6 md:w-8 md:h-8 bg-green-100 rounded-full flex items-center justify-center">
                                    <svg className="w-3 h-3 md:w-4 md:h-4 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <span className="font-medium">100% Free</span>
                            </div>

                            <div className="flex items-center gap-2 md:gap-2.5 bg-white/80 backdrop-blur-sm px-3 md:px-4 py-1.5 md:py-2 rounded-full shadow-sm border border-gray-100">
                                <div className="w-6 h-6 md:w-8 md:h-8 bg-blue-100 rounded-full flex items-center justify-center">
                                    <svg className="w-3 h-3 md:w-4 md:h-4 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <span className="font-medium whitespace-nowrap">Bank-Grade Security</span>
                            </div>

                            <div className="flex items-center gap-2 md:gap-2.5 bg-white/80 backdrop-blur-sm px-3 md:px-4 py-1.5 md:py-2 rounded-full shadow-sm border border-gray-100">
                                <div className="w-6 h-6 md:w-8 md:h-8 bg-purple-100 rounded-full flex items-center justify-center">
                                    <svg className="w-3 h-3 md:w-4 md:h-4 text-purple-600" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                </div>
                                <span className="font-medium">4.9 Rating</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
