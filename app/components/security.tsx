"use client";

import { Lock, Shield, Server } from "lucide-react";
import { motion } from "framer-motion";

export default function Security() {
    const features = [
        {
            icon: <Lock className="w-6 h-6" />,
            title: "256-bit Encryption",
            description: "Bank-grade encryption protects all your financial data"
        },
        {
            icon: <Server className="w-6 h-6" />,
            title: "Automatic Backups",
            description: "Your data is safely backed up and never lost"
        },
        {
            icon: <Shield className="w-6 h-6" />,
            title: "Privacy First",
            description: "We never share your data with third parties"
        }
    ];

    return (
        <section id="security" className="py-20 bg-white">
            <div className="container mx-auto px-6 md:px-12">
                <div className="max-w-6xl mx-auto">
                    <div className="bg-linear-to-br from-teal-50 via-white to-orange-50 rounded-3xl p-12 md:p-16 border border-teal-100 shadow-xl relative overflow-hidden">
                        {/* Decorative elements */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary-teal/5 rounded-full blur-3xl"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-orange/5 rounded-full blur-3xl"></div>

                        <div className="relative z-10 text-center">
                            {/* Header */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <div className="inline-flex items-center gap-2 px-5 py-2 bg-white rounded-full shadow-sm border border-gray-100 mb-6">
                                    <Shield className="w-5 h-5 text-success-green" />
                                    <span className="text-sm font-bold text-neutral-slate">Bank Grade Security</span>
                                </div>

                                <h2 className="font-sora text-6xl md:text-7xl font-bold text-neutral-slate mb-6">
                                    Your Data is <span className="text-gradient-primary">Safe</span> with Us
                                </h2>

                                <p className="font-inter text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
                                    We use state-of-the-art security measures to ensure your financial information
                                    remains private and protected at all times.
                                </p>
                            </motion.div>

                            {/* Features Grid */}
                            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                                {features.map((feature, index) => (
                                    <motion.div
                                        key={index}
                                        className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 hover:shadow-xl hover:border-primary-teal transition-all group"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                    >
                                        <div className="w-12 h-12 bg-primary-teal/10 rounded-xl flex items-center justify-center text-primary-teal mb-4 mx-auto group-hover:bg-primary-teal group-hover:text-white transition-all">
                                            {feature.icon}
                                        </div>
                                        <h4 className="font-sora font-bold text-neutral-slate mb-2">{feature.title}</h4>
                                        <p className="font-inter text-sm text-gray-600">{feature.description}</p>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Trust Badge */}
                            <motion.div
                                className="mt-12 inline-flex items-center gap-3 bg-white px-6 py-4 rounded-2xl shadow-md border border-gray-100"
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                            >
                                <div className="w-3 h-3 bg-success-green rounded-full animate-pulse"></div>
                                <span className="text-sm font-bold text-neutral-slate">100% Secure & Private</span>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
