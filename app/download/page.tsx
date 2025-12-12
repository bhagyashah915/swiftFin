"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Smartphone, Apple, CheckCircle2, X, Download, Loader2 } from "lucide-react";
import { useState } from "react";

export default function DownloadPage() {
    const [showModal, setShowModal] = useState(false);
    const [platform, setPlatform] = useState("");
    const [downloadStage, setDownloadStage] = useState(0); // 0: initial, 1: preparing, 2: success

    const handleDownload = (platformName) => {
        setPlatform(platformName);
        setShowModal(true);
        setDownloadStage(1);

        // Simulate download preparation
        setTimeout(() => {
            setDownloadStage(2);
        }, 2000);
    };

    const closeModal = () => {
        setShowModal(false);
        setTimeout(() => {
            setDownloadStage(0);
        }, 300);
    };

    return (
        <main className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-teal-50/30 text-slate-900 overflow-hidden relative selection:bg-teal-100 selection:text-teal-700 font-sans">

            {/* Background Decor */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-200/20 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-300/15 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-teal-100/40 via-transparent to-transparent rounded-full blur-2xl pointer-events-none"></div>

            <div className="container mx-auto px-6 pt-20 pb-20 relative z-10 flex flex-col items-center min-h-screen">

                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center max-w-4xl mb-12"
                >
                    <div className="inline-block px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-sm border border-teal-200 text-teal-600 font-bold text-sm uppercase tracking-wider mb-6 shadow-sm">
                        Available Now
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight text-slate-900">
                        Your First Step To<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-teal-400">Financial Freedom</span><br />
                        Begins Here
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-600 font-medium max-w-2xl mx-auto">
                        Watch your money grow. Download the app now and start taking control of your money today.
                    </p>
                </motion.div>

                {/* Phone Mockup Section */}
                <div className="relative w-full max-w-5xl h-[500px] md:h-[600px] mb-8 flex justify-center items-center">

                    {/* Center Glow Effect */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div className="w-[600px] h-[600px] bg-gradient-radial from-teal-200/40 via-teal-100/20 to-transparent rounded-full blur-3xl"></div>
                    </div>

                    {/* LEFT PHONE (Replaced with PNG) */}
                    <motion.div
                        initial={{ opacity: 0, x: -80, rotate: -8 }}
                        animate={{ opacity: 1, x: -60, rotate: -6 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="absolute left-1/4 top-1/2 -translate-y-1/2 z-10"
                    >
                        <div className="relative">
                            <img
                                src="/featuresphone.png"
                                alt="Phone Preview"
                                className="w-64 h-auto object-contain drop-shadow-2xl"
                            />
                            <img
                                src="/hero.jpg"
                                alt="Screen"
                                className="absolute inset-0 w-[82%] h-[82%] object-cover rounded-2xl top-[9%] left-[9%]"
                            />

                            <div className="absolute inset-0 bg-teal-400/20 rounded-[3rem] blur-2xl -z-10"></div>
                        </div>
                    </motion.div>

                    {/* RIGHT PHONE (Replaced with PNG) */}
                    <motion.div
                        initial={{ opacity: 0, x: 80, rotate: 8 }}
                        animate={{ opacity: 1, x: 60, rotate: 6 }}
                        transition={{ duration: 1, delay: 0.4 }}
                        className="absolute right-1/4 top-1/2 -translate-y-1/2 z-10"
                    >
                        <div className="relative">
                            <img
                                src="/featuresphone.png"
                                alt="Phone Preview"
                                className="w-64 h-auto object-contain drop-shadow-2xl"
                            />
                            <img
                                src="/investments.jpg"
                                alt="Screen"
                                className="absolute inset-0 w-[82%] h-[82%] object-cover rounded-2xl top-[9%] left-[9%]"
                            />
                            <div className="absolute inset-0 bg-teal-400/20 rounded-[3rem] blur-2xl -z-10"></div>
                        </div>
                    </motion.div>

                </div>

                {/* Download Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col sm:flex-row gap-6 z-20 pointer-events-auto"
                >
                    {/* App Store Button */}
                    <button
                        onClick={() => handleDownload("iOS")}
                        className="flex items-center gap-4 bg-white text-slate-900 px-8 py-4 rounded-2xl shadow-xl shadow-black/30 hover:shadow-4xl hover:scale-105 hover:-translate-y-1 transition-all duration-300 group border border-neutral-800"
                    >
                        <img
                            src="/app store badge.png"
                            alt="Download on the App Store"
                            className="w-10 h-10 object-contain"
                        />
                        <div className="text-left">
                            <p className="text-xs font-bold uppercase tracking-wider text-slate-500">GET IT ON</p>
                            <p className="text-2xl font-bold">App Store</p>
                        </div>
                    </button>

                    {/* Google Play Button */}
                    <button
                        onClick={() => handleDownload("Android")}
                        className="flex items-center gap-4 bg-white text-slate-900 px-8 py-4 rounded-2xl shadow-xl shadow-teal-500/20 hover:shadow-2xl hover:scale-105 hover:-translate-y-1 transition-all duration-300 group border-2 border-teal-500"
                    >
                        <img
                            src="/google-play.png"
                            alt="Google Play"
                            className="w-10 h-10 object-contain"
                        />

                        <div className="text-left">
                            <p className="text-xs font-bold uppercase tracking-wider text-slate-500">GET IT ON</p>
                            <p className="text-2xl font-bold">Google Play</p>
                        </div>
                    </button>
                </motion.div>

                {/* Back to Home */}
                <div className="mt-20">
                    <a href="/" className="text-slate-500 hover:text-teal-600 font-bold tracking-wide border-b-2 border-transparent hover:border-teal-600 transition-all pb-1">
                        &larr; Back to Website
                    </a>
                </div>

            </div>

            {/* Download Modal */}
            <AnimatePresence>
                {showModal && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={closeModal}
                            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-40"
                        />

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            transition={{ duration: 0.3 }}
                            className="fixed inset-0 z-50 flex items-center justify-center p-4"
                        >
                            <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-8 relative border border-teal-100">

                                <button
                                    onClick={closeModal}
                                    className="absolute top-6 right-6 text-slate-400 hover:text-slate-600 transition-colors"
                                >
                                    <X className="w-6 h-6" />
                                </button>

                                {downloadStage === 1 && (
                                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center">
                                        <div className="w-20 h-20 bg-gradient-to-br from-teal-50 to-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                            <Loader2 className="w-10 h-10 text-teal-600 animate-spin" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-slate-900 mb-3">Preparing Your Download</h3>
                                        <p className="text-slate-500 mb-6">We're getting your {platform} app ready...</p>
                                        <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                                            <motion.div
                                                className="h-full bg-gradient-to-r from-teal-500 to-teal-400"
                                                initial={{ width: "0%" }}
                                                animate={{ width: "100%" }}
                                                transition={{ duration: 2 }}
                                            />
                                        </div>
                                    </motion.div>
                                )}

                                {downloadStage === 2 && (
                                    <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center">
                                        <motion.div
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                                            className="w-20 h-20 bg-gradient-to-br from-teal-500 to-teal-400 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-teal-500/30"
                                        >
                                            <CheckCircle2 className="w-10 h-10 text-white" />
                                        </motion.div>

                                        <h3 className="text-2xl font-bold text-slate-900 mb-3">Ready to Install!</h3>
                                        <p className="text-slate-500 mb-8">
                                            Your download is ready. Follow the prompts to install the app on your {platform} device.
                                        </p>

                                        <div className="space-y-3 text-left mb-8">
                                            <div className="flex items-start gap-3">
                                                <div className="w-6 h-6 rounded-full bg-teal-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                                                    <CheckCircle2 className="w-4 h-4 text-teal-600" />
                                                </div>
                                                <div>
                                                    <p className="font-semibold text-slate-800">Open the app</p>
                                                    <p className="text-sm text-slate-500">Locate and tap the app icon</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <div className="w-6 h-6 rounded-full bg-teal-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                                                    <CheckCircle2 className="w-4 h-4 text-teal-600" />
                                                </div>
                                                <div>
                                                    <p className="font-semibold text-slate-800">Create your account</p>
                                                    <p className="text-sm text-slate-500">Sign up in seconds</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <div className="w-6 h-6 rounded-full bg-teal-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                                                    <CheckCircle2 className="w-4 h-4 text-teal-600" />
                                                </div>
                                                <div>
                                                    <p className="font-semibold text-slate-800">Start managing your money</p>
                                                    <p className="text-sm text-slate-500">Take control of your finances</p>
                                                </div>
                                            </div>
                                        </div>

                                        <button
                                            onClick={closeModal}
                                            className="w-full bg-gradient-to-r from-teal-500 to-teal-400 text-white font-bold py-4 rounded-xl hover:from-teal-600 hover:to-teal-500 transition-all shadow-lg shadow-teal-500/30 hover:shadow-xl hover:shadow-teal-500/40"
                                        >
                                            Got it!
                                        </button>
                                    </motion.div>
                                )}
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </main>
    );
}
