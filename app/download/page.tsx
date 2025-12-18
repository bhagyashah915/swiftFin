"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";

export default function DownloadPage() {
    return (
        <main className="min-h-screen bg-white relative overflow-hidden font-['Montserrat']">
            {/* Curved Teal Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-0 right-0 h-[60%] bg-gradient-to-br from-teal-500 to-teal-600">
                    {/* Curved bottom edge */}
                    <svg
                        className="absolute bottom-0 left-0 w-full"
                        viewBox="0 0 1440 120"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="none"
                    >
                        <path
                            d="M0 0C240 80 480 120 720 120C960 120 1200 80 1440 0V120H0V0Z"
                            fill="white"
                        />
                    </svg>
                </div>
            </div>

            <div className="container mx-auto px-4 md:px-6 pt-20 pb-16 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                        Download SwiftFin
                    </h1>
                    <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto font-light">
                        Start your journey to financial freedom today
                    </p>
                </motion.div>

                {/* Phone Images Section - Smaller */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative h-[350px] md:h-[420px] mb-20 flex justify-center items-center"
                >
                    {/* Left Phone */}
                    <motion.div
                        initial={{ opacity: 0, x: -80 }}
                        animate={{ opacity: 1, x: -80 }}
                        transition={{ duration: 1, delay: 0.4 }}
                        className="absolute left-1/4 md:left-[30%] top-1/2 -translate-y-1/2 z-10"
                    >
                        <div className="relative">
                            <img
                                src="/featuresphone.png"
                                alt="Phone Preview"
                                className="w-48 md:w-56 lg:w-64 h-auto object-contain drop-shadow-2xl"
                            />
                            <img
                                src="/hero.jpg"
                                alt="Screen"
                                className="absolute inset-0 w-[82%] h-[82%] object-cover rounded-2xl top-[9%] left-[9%]"
                            />
                        </div>
                    </motion.div>

                    {/* Right Phone */}
                    <motion.div
                        initial={{ opacity: 0, x: 80 }}
                        animate={{ opacity: 1, x: 80 }}
                        transition={{ duration: 1, delay: 0.6 }}
                        className="absolute right-1/4 md:right-[30%] top-1/2 -translate-y-1/2 z-10"
                    >
                        <div className="relative">
                            <img
                                src="/featuresphone.png"
                                alt="Phone Preview"
                                className="w-48 md:w-56 lg:w-64 h-auto object-contain drop-shadow-2xl"
                            />
                            <img
                                src="/investments.jpg"
                                alt="Screen"
                                className="absolute inset-0 w-[82%] h-[82%] object-cover rounded-2xl top-[9%] left-[9%]"
                            />
                        </div>
                    </motion.div>
                </motion.div>

                {/* Download Cards */}
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
                    {/* Apple Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300 border border-slate-100"
                    >
                        {/* Apple Logo - Centered */}
                        <div className="flex justify-center mb-6">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
                                alt="Apple Logo"
                                className="w-16 h-16 object-contain"
                            />
                        </div>

                        {/* Title */}
                        <h3 className="text-3xl font-bold text-slate-900 mb-4 text-center">iOS</h3>

                        {/* Info */}
                        <p className="text-slate-600 mb-2 leading-relaxed text-center">
                            Download for iPhone and iPad
                        </p>
                        <p className="text-sm text-slate-500 mb-6 text-center">
                            Requires iOS 14.0 or later
                        </p>

                        {/* Features */}
                        <ul className="space-y-3 mb-8">
                            <li className="flex items-center gap-3 text-slate-700">
                                <div className="w-1.5 h-1.5 rounded-full bg-slate-900" />
                                <span className="text-sm">Optimized for all Apple devices</span>
                            </li>
                            <li className="flex items-center gap-3 text-slate-700">
                                <div className="w-1.5 h-1.5 rounded-full bg-slate-900" />
                                <span className="text-sm">Face ID & Touch ID support</span>
                            </li>
                            <li className="flex items-center gap-3 text-slate-700">
                                <div className="w-1.5 h-1.5 rounded-full bg-slate-900" />
                                <span className="text-sm">Apple Watch companion app</span>
                            </li>
                        </ul>

                        {/* Download Button */}
                        <button className="w-full bg-slate-900 text-white font-semibold py-4 px-6 rounded-xl hover:bg-slate-800 transition-all duration-300 flex items-center justify-center gap-3 group">
                            <Download className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
                            Download for iOS
                        </button>
                    </motion.div>

                    {/* Android Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1 }}
                        className="bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300 border border-teal-200"
                    >
                        {/* Android Logo - Centered */}
                        <div className="flex justify-center mb-6">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/d/d7/Android_robot.svg"
                                alt="Android Logo"
                                className="w-16 h-16 object-contain"
                            />
                        </div>

                        {/* Title */}
                        <h3 className="text-3xl font-bold text-slate-900 mb-4 text-center">Android</h3>

                        {/* Info */}
                        <p className="text-slate-600 mb-2 leading-relaxed text-center">
                            Download for Android devices
                        </p>
                        <p className="text-sm text-slate-500 mb-6 text-center">
                            Requires Android 8.0 or higher
                        </p>

                        {/* Features */}
                        <ul className="space-y-3 mb-8">
                            <li className="flex items-center gap-3 text-slate-700">
                                <div className="w-1.5 h-1.5 rounded-full bg-teal-600" />
                                <span className="text-sm">Works on all Android devices</span>
                            </li>
                            <li className="flex items-center gap-3 text-slate-700">
                                <div className="w-1.5 h-1.5 rounded-full bg-teal-600" />
                                <span className="text-sm">Fingerprint authentication</span>
                            </li>
                            <li className="flex items-center gap-3 text-slate-700">
                                <div className="w-1.5 h-1.5 rounded-full bg-teal-600" />
                                <span className="text-sm">Wear OS companion app</span>
                            </li>
                        </ul>

                        {/* Download Button */}
                        <button className="w-full bg-gradient-to-r from-teal-500 to-teal-600 text-white font-semibold py-4 px-6 rounded-xl hover:from-teal-600 hover:to-teal-700 transition-all duration-300 flex items-center justify-center gap-3 group shadow-lg shadow-teal-500/30">
                            <Download className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
                            Download for Android
                        </button>
                    </motion.div>
                </div>

                {/* Back to Home Link */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                    className="text-center mt-16"
                >
                    <a
                        href="/"
                        className="text-slate-600 hover:text-teal-600 font-semibold transition-colors inline-flex items-center gap-2"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Back to Home
                    </a>
                </motion.div>
            </div>
        </main>
    );
}
