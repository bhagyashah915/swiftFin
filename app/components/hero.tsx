"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import AnimatedDownloadButton from "./AnimatedDownloadButton";

export default function Hero() {
    return (
        <section className="relative overflow-hidden bg-gradient-mesh pt-20 pb-24 lg:pt-28 lg:pb-32">
            {/* Floating Decorative Shapes */}
            <div className="absolute top-20 right-10 w-96 h-96 bg-teal-400 shape-circle-glow animate-float-slow"></div>
            <div className="absolute bottom-20 left-10 w-80 h-80 bg-orange-400 shape-circle-glow animate-float" style={{ animationDelay: '2s' }}></div>
            <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-blue-400 shape-blob animate-float" style={{ animationDelay: '4s' }}></div>

            {/* Mesh Grid Overlay */}
            <div className="absolute inset-0 bg-mesh-grid opacity-50"></div>

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="flex flex-col items-center justify-center text-center relative z-10 max-w-6xl mx-auto">

                    {/* Left Image */}
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

                    {/* Right Image */}
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
                        <div className="inline-block px-5 py-2 mb-6 text-sm font-semibold tracking-wide text-primary-teal bg-teal-50 rounded-full border border-teal-100 font-inter">
                            Smart Finance Management
                        </div>

                        {/* ⭐ HERO TITLE WITH SORA FONT */}
                        <h1 className="font-sora text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-neutral-slate mb-8 leading-tight">
                            Take Control of Your{" "}
                            <span className="text-gradient-primary">Finances</span>
                        </h1>

                        {/* ⭐ SUBTITLE WITH INTER FONT */}
                        <p className="font-inter text-lg md:text-2xl text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto">
                            Track expenses, manage EMIs, monitor investments, and get personalized finance tips —
                            all in one powerful app.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                            <AnimatedDownloadButton />

                            <Link
                                href="#features"
                                className="px-8 py-4 bg-white text-neutral-slate border-2 border-gray-200 font-inter font-bold text-lg rounded-xl hover:border-primary-teal hover:text-primary-teal transition-all"
                            >
                                Explore Features
                            </Link>
                        </div>

                        <div className="flex items-center justify-center gap-8 text-sm text-gray-500 font-inter">
                            <div className="flex items-center gap-2">
                                <svg className="w-5 h-5 text-success-green" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span>Free forever</span>
                            </div>

                            <div className="flex items-center gap-2">
                                <svg className="w-5 h-5 text-success-green" fill="currentColor" viewBox="0 0 20 20">
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
