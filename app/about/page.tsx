"use client";

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

    // Images for the ticker animation
    const heroImages = [
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=80",
        "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=600&q=80",
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&q=80",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
        "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&q=80"
    ];

    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section with Ticker Animation */}
            <section className="relative overflow-hidden bg-white">
                <div className="container relative z-10 mx-auto px-6 py-32">
                    <a href="/" className="inline-flex items-center text-slate-600 hover:text-teal-600 transition-colors mb-8">
                        <ArrowLeft className="w-5 h-5 mr-2" />
                        Back to Home
                    </a>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-3xl mb-16"
                    >
                        <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 leading-tight">
                            About <span className="text-teal-600">SwiftFin</span>
                        </h1>
                        <p className="text-xl text-slate-600 leading-relaxed">
                            Your trusted companion for managing personal finances with ease and confidence.
                            We're on a mission to make financial management accessible to everyone.
                        </p>
                    </motion.div>

                    {/* Scrolling Images Ticker */}
                    <div className="relative overflow-hidden py-12">
                        <motion.div
                            className="flex gap-6"
                            animate={{ x: [0, -1800] }}
                            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                        >
                            {[...heroImages, ...heroImages, ...heroImages].map((img, i) => (
                                <div key={i} className="flex-shrink-0 w-80 h-64 rounded-2xl overflow-hidden shadow-xl">
                                    <img src={img} alt={`Gallery ${i}`} className="w-full h-full object-cover" />
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>

                {/* Decorative background elements */}
                <div className="absolute top-20 left-10 w-72 h-72 bg-teal-200/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-300/20 rounded-full blur-3xl"></div>
            </section>

            {/* Values Section */}
            <section className="py-20 bg-gradient-to-br from-white via-teal-50/30 to-white">
                <div className="container mx-auto px-6">
                    <motion.div
                        className="text-center max-w-3xl mx-auto mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-sm font-bold text-teal-600 uppercase tracking-wider mb-4 inline-block">Our Core Values</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                            Our Core Values
                        </h2>
                        <p className="text-lg text-slate-600">
                            Everything we do is guided by our commitment to simplicity, security, and your success.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {values.map((value, index) => (
                            <motion.div
                                key={index}
                                className="text-center p-8 rounded-2xl bg-white border border-teal-100 hover:shadow-xl transition-all duration-300"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -5 }}
                            >
                                <div className="w-16 h-16 bg-teal-50 rounded-2xl flex items-center justify-center text-teal-600 mx-auto mb-6">
                                    {value.icon}
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">{value.title}</h3>
                                <p className="text-slate-600 leading-relaxed">{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Security Section */}
            <section className="py-20 bg-gradient-to-br from-slate-900 to-teal-900">
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
                            <div className="inline-flex items-center justify-center w-24 h-24 bg-teal-500 rounded-full shadow-lg shadow-teal-500/30">
                                <Shield className="w-12 h-12 text-white" />
                            </div>
                        </motion.div>

                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Your Data is <span className="text-teal-400">Safe</span> with Us
                        </h2>
                        <p className="text-lg text-slate-300 leading-relaxed">
                            We use state-of-the-art security measures to ensure your financial information
                            remains private and protected at all times.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {securityFeatures.map((feature, index) => (
                            <motion.div
                                key={index}
                                className="text-center p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-teal-400/40 transition-all duration-300"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -5, scale: 1.02 }}
                            >
                                <div className="w-14 h-14 bg-teal-500/20 rounded-xl flex items-center justify-center text-teal-400 mx-auto mb-5">
                                    {feature.icon}
                                </div>
                                <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                                <p className="text-slate-400 text-sm leading-relaxed">{feature.description}</p>
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
                        <div className="inline-flex items-center gap-2 px-6 py-3 bg-teal-500/20 rounded-full border border-teal-400/40">
                            <CheckCircle className="w-5 h-5 text-teal-400" />
                            <span className="font-semibold text-teal-400">
                                100% Secure & Private
                            </span>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-slate-900 text-white">
                <div className="container mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-2xl mx-auto"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            Ready to Get Started?
                        </h2>
                        <p className="text-xl text-slate-300 mb-10">
                            Download SwiftFin today and take the first step towards financial freedom.
                        </p>
                        <a
                            href="/download"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-teal-500 text-white font-semibold rounded-full hover:bg-teal-600 transition-all shadow-lg hover:shadow-xl hover:scale-105"
                        >
                            Download Now
                        </a>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}