"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Shield, Lock, Server, CheckCircle, Users, Zap, Heart } from "lucide-react";

export default function AboutPage() {
    const values = [
        {
            icon: <Heart className="w-8 h-8" />,
            title: "Mission",
            description: "Empower every Indian to take control of their finances with simple, powerful tools."
        },
        {
            icon: <Users className="w-8 h-8" />,
            title: "Community",
            description: "Built by Indians, for Indians. Trusted by 500,000+ users across the country."
        },
        {
            icon: <Zap className="w-8 h-8" />,
            title: "Innovation",
            description: "Constantly evolving with AI-powered insights and smart automation features."
        }
    ];

    const securityFeatures = [
        { icon: <Lock className="w-6 h-6" />, title: "256-bit Encryption", description: "Military-grade encryption protects all your data" },
        { icon: <Server className="w-6 h-6" />, title: "Automatic Backups", description: "Your data is backed up securely every day" },
        { icon: <Shield className="w-6 h-6" />, title: "Privacy First", description: "We never sell or share your personal information" },
    ];

    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1579621970795-87facc2f976d?w=1920&q=80')" }}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a]/95 via-[#1e293b]/90 to-[#0f172a]/95" />

                <div className="relative z-10 container mx-auto px-6 py-32">
                    <Link href="/" className="inline-flex items-center text-gray-300 hover:text-[#20C997] transition-colors mb-8">
                        <ArrowLeft className="w-5 h-5 mr-2" />
                        Back to Home
                    </Link>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-3xl"
                    >
                        <h1 className="font-sora text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                            About <span className="text-[#20C997]">SwiftFin</span>
                        </h1>
                        <p className="font-inter text-xl text-gray-300 leading-relaxed">
                            Your trusted companion for managing personal finances with ease and confidence.
                            We&apos;re on a mission to make financial management accessible to everyone.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <motion.div
                        className="text-center max-w-3xl mx-auto mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="font-sora text-4xl md:text-5xl font-bold text-[#2E3A39] mb-6">
                            Our Core Values
                        </h2>
                        <p className="font-inter text-lg text-gray-600">
                            Everything we do is guided by our commitment to simplicity, security, and your success.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {values.map((value, index) => (
                            <motion.div
                                key={index}
                                className="text-center p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:shadow-xl transition-all duration-300"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -5 }}
                            >
                                <div className="w-16 h-16 bg-[#20C997]/10 rounded-2xl flex items-center justify-center text-[#20C997] mx-auto mb-6">
                                    {value.icon}
                                </div>
                                <h3 className="font-sora text-xl font-bold text-[#2E3A39] mb-3">{value.title}</h3>
                                <p className="font-inter text-gray-600 leading-relaxed">{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Security Section */}
            <section className="py-20 bg-gradient-to-br from-[#0f172a] to-[#1e293b]">
                <div className="container mx-auto px-6">
                    <motion.div
                        className="text-center max-w-3xl mx-auto mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        {/* Shield Icon */}
                        <motion.div
                            className="mb-8"
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ type: "spring", stiffness: 200 }}
                        >
                            <div className="inline-flex items-center justify-center w-24 h-24 bg-[#20C997] rounded-full shadow-lg shadow-[#20C997]/30">
                                <Shield className="w-12 h-12 text-white" />
                            </div>
                        </motion.div>

                        <h2 className="font-sora text-4xl md:text-5xl font-bold text-white mb-6">
                            Your Data is <span className="text-[#20C997]">Safe</span> with Us
                        </h2>
                        <p className="font-inter text-lg text-gray-300 leading-relaxed">
                            We use state-of-the-art security measures to ensure your financial information
                            remains private and protected at all times.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {securityFeatures.map((feature, index) => (
                            <motion.div
                                key={index}
                                className="text-center p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#20C997]/40 transition-all duration-300"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -5, scale: 1.02 }}
                            >
                                <div className="w-14 h-14 bg-[#20C997]/20 rounded-xl flex items-center justify-center text-[#20C997] mx-auto mb-5">
                                    {feature.icon}
                                </div>
                                <h3 className="font-sora text-lg font-bold text-white mb-2">{feature.title}</h3>
                                <p className="font-inter text-gray-400 text-sm leading-relaxed">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Trust Badge */}
                    <motion.div
                        className="text-center mt-12"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                    >
                        <div className="inline-flex items-center gap-2 px-6 py-3 bg-[#20C997]/20 rounded-full border border-[#20C997]/40">
                            <CheckCircle className="w-5 h-5 text-[#20C997]" />
                            <span className="font-inter font-semibold text-[#20C997]">
                                100% Secure & Private
                            </span>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-[#2E3A39] text-white">
                <div className="container mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-2xl mx-auto"
                    >
                        <h2 className="font-sora text-4xl md:text-5xl font-bold mb-6">
                            Ready to Get Started?
                        </h2>
                        <p className="font-inter text-xl text-gray-300 mb-10">
                            Download SwiftFin today and take the first step towards financial freedom.
                        </p>
                        <Link
                            href="/download"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-[#20C997] text-white font-semibold rounded-full hover:bg-[#198754] transition-all shadow-lg"
                        >
                            Download Now
                        </Link>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}
