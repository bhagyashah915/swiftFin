"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import AnimatedDownloadButton from "./AnimatedDownloadButton";

export default function Hero() {
    return (
        <section className="relative pt-16 pb-14 md:pt-20 md:pb-20 lg:pt-24 lg:pb-28 overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 md:px-10 relative z-10">
                <div className="flex flex-col items-center text-center relative max-w-5xl mx-auto">
                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col items-center max-w-4xl mx-auto z-20"
                    >
                        <div className="inline-block px-4 py-2 mb-4 text-5xl sm:text-5xl md:text-5xl font-semibold tracking-wide text-primary-teal bg-teal-50 rounded-full border border-teal-100">
                            Smart Finance Management
                        </div>


                        {/* Title – reduced & balanced */}
                        <h1 className="font-sora text-lg sm:text-xl md:text-4xl lg:text-4xl xl:text-4xl font-bold text-neutral-slate mb-4 sm:mb-6 leading-tight px-2">
                            Take Control of Your{" "}
                            <span className="text-gradient-primary">Finances</span>
                        </h1>

                        {/* Subtitle – lighter + smaller */}
                        <p className="font-inter text-sm sm:text-base md:text-lg text-gray-600 mb-6 md:mb-8 leading-relaxed px-4 max-w-2xl">
                            Track expenses, manage EMIs, monitor investments, and get personalized finance tips —
                            all in one powerful app.
                        </p>

                        {/* Buttons */}
                        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6 md:mb-10 w-full px-4 sm:w-auto">
                            <AnimatedDownloadButton className="w-full sm:w-auto" />

                            <Link
                                href="#features"
                                className="px-5 sm:px-7 py-3 bg-white text-neutral-slate border-2 border-gray-200 font-bold text-sm sm:text-base rounded-xl hover:border-primary-teal hover:text-primary-teal transition-all"
                            >
                                Explore Features
                            </Link>
                        </div>

                        {/* Badges */}
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-[10px] sm:text-xs text-gray-500 font-inter px-4">
                            <div className="flex items-center gap-1.5">
                                <svg className="w-4 h-4 text-success-green" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a8 8 ..." clipRule="evenodd" />
                                </svg> </div>

                            <div className="flex items-center gap-1.5">
                                <svg className="w-4 h-4 text-success-green" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a8 8 ..." clipRule="evenodd" />
                                </svg>

                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
