"use client";

import { motion } from "framer-motion";
import { ArrowRight, Smartphone, Apple, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function DownloadPage() {
    return (
        <main className="min-h-screen bg-white text-slate-900 overflow-hidden relative selection:bg-teal-50 selection:text-teal-700 font-lato">

            {/* Background Decor - Teal Gradient Orbs */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-teal-50/50 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-teal-50/30 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/4 pointer-events-none"></div>

            <div className="container mx-auto px-6 pt-32 pb-20 relative z-10 flex flex-col items-center min-h-screen">

                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center max-w-4xl mb-16"
                >
                    <div className="inline-block px-4 py-1.5 rounded-full bg-teal-50 border border-teal-100 text-teal-600 font-bold text-sm uppercase tracking-wider mb-6">
                        Available Now
                    </div>
                    <h1 className="font-poppins text-5xl md:text-7xl font-bold mb-8 leading-tight text-slate-900">
                        Your First Step To<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-teal-400">Financial Freedom</span><br />
                        Begins Here
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-500 font-medium max-w-2xl mx-auto">
                        Watch your money grow. Download the app now and start taking control of your money today.
                    </p>
                </motion.div>

                {/* Floating Mockups / Visuals */}
                <div className="relative w-full max-w-6xl h-[400px] md:h-[500px] mb-12 flex justify-between items-center pointer-events-none">

                    {/* Left Card - Net Income */}
                    <motion.div
                        initial={{ opacity: 0, x: -100, rotate: -10 }}
                        animate={{ opacity: 1, x: 0, rotate: -6 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="hidden md:block absolute left-0 top-10 bg-white rounded-3xl p-6 shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-100 w-80 text-slate-800 z-10"
                    >
                        <div className="flex justify-between mb-6">
                            <div>
                                <p className="text-sm text-slate-400 font-bold mb-1">Net Income</p>
                                <h3 className="text-2xl font-bold text-slate-800">$4,500</h3>
                            </div>
                            <div>
                                <p className="text-sm text-slate-400 font-bold mb-1">Expense</p>
                                <h3 className="text-2xl font-bold text-slate-800">$1,691</h3>
                            </div>
                        </div>
                        <div className="h-24 w-full bg-teal-50 rounded-xl overflow-hidden relative">
                            {/* Simple SVG Chart Line */}
                            <svg viewBox="0 0 100 40" className="w-full h-full stroke-teal-500 stroke-[3] fill-none">
                                <path d="M0 30 Q 25 35, 50 15 T 100 10" />
                            </svg>
                        </div>
                        <div className="mt-4 flex gap-2 items-center">
                            <div className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center">
                                <CheckCircle2 className="w-5 h-5 text-teal-600" />
                            </div>
                            <span className="text-xs font-bold text-slate-500">Smart Card Used Frequency</span>
                        </div>
                    </motion.div>

                    {/* Right Card - Spend this week */}
                    <motion.div
                        initial={{ opacity: 0, x: 100, rotate: 10 }}
                        animate={{ opacity: 1, x: 0, rotate: 6 }}
                        transition={{ duration: 1, delay: 0.4 }}
                        className="hidden md:block absolute right-0 bottom-10 bg-white rounded-3xl p-6 shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-100 w-80 text-slate-800 z-10"
                    >
                        <h3 className="font-bold text-slate-800 mb-2">Spend this week</h3>
                        <div className="w-full bg-slate-100 h-3 rounded-full overflow-hidden mb-2">
                            <div className="bg-teal-500 h-full w-[30%] rounded-full"></div>
                        </div>
                        <div className="flex justify-between text-xs font-bold text-slate-500 mb-6">
                            <span>$124 left to spend</span>
                            <span className="text-slate-800 text-lg">$124</span>
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center font-bold text-purple-600">P</div>
                                <div className="flex-1">
                                    <p className="text-sm font-bold text-slate-800">Transfer to Dianne</p>
                                    <p className="text-xs text-red-400 text-left">➔ diannxx@gmail.com</p>
                                </div>
                                <p className="text-sm font-bold text-red-500">-$120.90</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center font-bold text-teal-600">S</div>
                                <div className="flex-1">
                                    <p className="text-sm font-bold text-slate-800">Starbucks</p>
                                    <p className="text-xs text-slate-400 text-left">Yuzu Dish</p>
                                </div>
                                <p className="text-sm font-bold text-slate-800 opacity-40">09:39 AM</p>
                            </div>
                        </div>
                    </motion.div>

                </div>


                {/* Download Buttons Area */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col sm:flex-row gap-6 mt-[-100px] z-20"
                >
                    {/* App Store Button */}
                    <button className="flex items-center gap-4 bg-slate-900 text-white px-8 py-4 rounded-xl shadow-lg shadow-teal-500/20 hover:shadow-xl hover:scale-105 transition-all duration-300 group border border-slate-800">
                        <Apple className="w-10 h-10" />
                        <div className="text-left">
                            <p className="text-xs font-bold uppercase tracking-wider opacity-60">Download on the</p>
                            <p className="text-2xl font-bold font-poppins">App Store</p>
                        </div>
                    </button>

                    {/* Google Play Button */}
                    <button className="flex items-center gap-4 bg-white text-slate-900 px-8 py-4 rounded-xl shadow-lg shadow-black/5 hover:shadow-xl hover:scale-105 transition-all duration-300 group border border-slate-200">
                        <div className="w-10 h-10 flex items-center justify-center">
                            <Smartphone className="w-9 h-9 text-teal-600" />
                        </div>
                        <div className="text-left">
                            <p className="text-xs font-bold uppercase tracking-wider opacity-60">GET IT ON</p>
                            <p className="text-2xl font-bold font-poppins">Google Play</p>
                        </div>
                    </button>
                </motion.div>

                {/* Back to Home */}
                <div className="mt-20">
                    <Link href="/" className="text-slate-500 hover:text-teal-600 font-bold tracking-wide border-b border-transparent hover:border-teal-600 transition-all pb-1">
                        &larr; Back to Website
                    </Link>
                </div>

            </div>
        </main>
    );
}
