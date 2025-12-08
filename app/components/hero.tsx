"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import AnimatedDownloadButton from "./AnimatedDownloadButton";

export default function Hero() {
    return (
        <section className="relative pt-28 pb-16 md:pt-40 md:pb-24 lg:pt-48 lg:pb-32 overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 md:px-10 relative z-10">
                <div className="flex flex-col items-center text-center relative max-w-6xl mx-auto">
                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col items-center max-w-5xl mx-auto z-20"
                    >
                        <div className="inline-block px-5 py-2 mb-6 text-sm font-bold tracking-widest text-[#20C997] bg-[#20C997]/10 rounded-full uppercase">
                            Smart Finance Management
                        </div>


                        {/* Title – reduced & balanced */}
                        <h1 className="font-sora text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-neutral-slate mb-6 sm:mb-8 leading-[1.1] md:leading-[1.1] px-2 tracking-tight">
                            Take Control of Your{" "}
                            <span className="text-gradient-primary">Finances</span>
                        </h1>

                        {/* Subtitle – lighter + smaller */}
                        <p className="font-inter text-lg sm:text-xl text-gray-600 mb-8 md:mb-10 leading-relaxed px-4 max-w-3xl">
                            Track expenses, manage EMIs, monitor investments, and get personalized finance tips —
                            all in one powerful app.
                        </p>

                        {/* Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 md:mb-12 w-full px-4 sm:w-auto">
                            <AnimatedDownloadButton className="w-full sm:w-auto" />

                            <Link
                                href="#features"
                                className="px-6 sm:px-8 py-4 bg-white text-neutral-slate border-2 border-gray-200 font-bold text-base sm:text-lg rounded-xl hover:border-primary-teal hover:text-primary-teal transition-all"
                            >
                                Explore Features
                            </Link>
                        </div>

                        {/* Badges */}
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-gray-500 font-inter px-4">
                            <div className="flex items-center gap-2">
                                <svg className="w-5 h-5 text-success-green" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span>Free Forever</span>
                            </div>

                            <div className="flex items-center gap-2">
                                <svg className="w-5 h-5 text-success-green" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span>No Credit Card Required</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
