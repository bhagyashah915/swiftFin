"use client";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function SecurityPage() {
    return (
        <div className="min-h-screen bg-white font-['Montserrat']">
            {/* Hero Section with Image */}
            <section className="relative min-h-[60vh] overflow-hidden bg-gradient-to-br from-slate-900 via-teal-900 to-slate-900">
                {/* Background Image */}
                <div className="absolute inset-0 opacity-40">
                    <img
                        src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1920&q=80"
                        alt="Security Background"
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="container relative z-10 mx-auto px-6 pt-32 pb-20">
                    <Link
                        href="/"
                        className="inline-flex items-center text-teal-400 hover:text-teal-300 transition-all duration-300 group mb-12 font-['Montserrat']"
                    >
                        <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
                        Back to Home
                    </Link>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-6xl md:text-7xl font-black text-white mb-6 font-['Montserrat']">
                            Security at SwiftFin
                        </h1>
                        <p className="text-xl text-gray-300 max-w-3xl font-['Montserrat']">
                            Your financial data security is our top priority. Learn how we protect your information.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-20">
                <div className="container mx-auto px-6 max-w-4xl">
                    <div className="prose prose-lg max-w-none font-['Montserrat']">
                        <h2 className="text-3xl font-bold text-slate-900 mb-6 font-['Montserrat']">Our Security Architecture</h2>
                        <p className="text-slate-600 mb-8 font-['Montserrat']">
                            SwiftFin uses bank-grade security protocols to ensure your data remains private and secure. We employ a multi-layered approach to security that shields your information from unauthorized access.
                        </p>

                        <div className="grid md:grid-cols-2 gap-8 my-12">
                            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                                <h3 className="text-xl font-bold text-slate-900 mb-4">256-bit Encryption</h3>
                                <p className="text-slate-600">All data is encrypted in transit and at rest using AES-256 encryption standards, the same technology used by major banks.</p>
                            </div>
                            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                                <h3 className="text-xl font-bold text-slate-900 mb-4">Secure Cloud Infrastructure</h3>
                                <p className="text-slate-600">Our servers are hosted in world-class data centers with 24/7 monitoring and strict physical access controls.</p>
                            </div>
                        </div>

                        <h2 className="text-3xl font-bold text-slate-900 mb-6 font-['Montserrat']">Data Protection Measures</h2>
                        <ul className="list-disc pl-6 text-slate-600 mb-8 font-['Montserrat'] space-y-3">
                            <li><strong>Biometric Authentication:</strong> Support for FaceID and TouchID to secure app access.</li>
                            <li><strong>Automatic Logout:</strong> Sessions automatically expire after periods of inactivity.</li>
                            <li><strong>Real-time Monitoring:</strong> Continuous monitoring for suspicious activities and potential threats.</li>
                            <li><strong>Regular Audits:</strong> Frequent security audits and penetration testing by independent experts.</li>
                        </ul>

                        <h2 className="text-3xl font-bold text-slate-900 mb-6 font-['Montserrat']">Your Role in Security</h2>
                        <p className="text-slate-600 font-['Montserrat']">
                            While we do everything to protect your data, you also play a crucial role. We recommend using a strong, unique password for your account and enabling two-factor authentication when available. Never share your OTPs or passwords with anyone.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
