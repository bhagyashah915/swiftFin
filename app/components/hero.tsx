"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import AnimatedDownloadButton from "./AnimatedDownloadButton";

export default function Hero() {
    return (
        <section className="relative overflow-hidden bg-gradient-mesh pt-16 pb-14 md:pt-20 md:pb-20 lg:pt-24 lg:pb-28">

            {/* Floating Decorative Shapes */}
            <div className="absolute top-20 right-10 w-56 h-56 md:w-80 md:h-80 bg-teal-400 shape-circle-glow animate-float-slow"></div>
            <div className="absolute bottom-20 left-10 w-48 h-48 md:w-72 md:h-72 bg-orange-400 shape-circle-glow animate-float" style={{ animationDelay: '2s' }}></div>
            <div className="absolute top-1/2 left-1/4 w-40 h-40 md:w-56 md:h-56 bg-blue-400 shape-blob animate-float" style={{ animationDelay: '4s' }}></div>

            {/* Mesh grid */}
            <div className="absolute inset-0 bg-mesh-grid opacity-40"></div>

            <div className="container mx-auto px-4 sm:px-6 md:px-10 relative z-10">
                <div className="flex flex-col items-center text-center relative max-w-5xl mx-auto">

                    {/* Left Image */}
                    <motion.div
                        className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 -translate-x-20 xl:-translate-x-44 w-56 xl:w-72 pointer-events-none"
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
                                alt="Financial Dashboard"
                                width={350}
                                height={350}
                                className="w-full h-auto drop-shadow-2xl"
                                style={{ filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.15))' }}
                            />
                        </motion.div>
                    </motion.div>

                    {/* Right Image */}
                    <motion.div
                        className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-20 xl:translate-x-44 w-56 xl:w-72 pointer-events-none"
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
                                alt="Financial Dashboard"
                                width={350}
                                height={350}
                                className="w-full h-auto drop-shadow-2xl"
                                style={{ filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.15))' }}
                            />
                        </motion.div>
                    </motion.div>

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col items-center max-w-2xl mx-auto z-20"
                    >
                        <div className="inline-block px-3 py-1.5 mb-4 text-sm sm:text-base font-semibold tracking-wide text-primary-teal bg-teal-50 rounded-full border border-teal-100">
                            Smart Finance Management
                        </div>


                        {/* Title – reduced & balanced */}
                        <h1 className="font-sora text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-neutral-slate mb-4 sm:mb-6 leading-tight px-2">
                            Take Control of Your{" "}
                            <span className="text-gradient-primary">Finances</span>
                        </h1>

                        {/* Subtitle – lighter + smaller */}
                        <p className="font-inter text-sm sm:text-base md:text-lg text-gray-600 mb-6 md:mb-8 leading-relaxed px-4">
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
                                </svg>
                                <span>Free forever</span>
                            </div>

                            <div className="flex items-center gap-1.5">
                                <svg className="w-4 h-4 text-success-green" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a8 8 ..." clipRule="evenodd" />
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
