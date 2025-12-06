"use client";

import { Lock, Shield, Server, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function Security() {
    const features = [
        { icon: <Lock className="w-5 h-5" />, text: "256-bit Encryption" },
        { icon: <Server className="w-5 h-5" />, text: "Automatic Backups" },
        { icon: <Shield className="w-5 h-5" />, text: "Privacy First" }
    ];

    return (
        <section id="security" className="py-20 md:py-28 bg-[#f8f9fa]">
            <div className="container mx-auto px-4 sm:px-6 md:px-12">
                <div className="max-w-4xl mx-auto text-center">

                    {/* Shield Icon */}
                    <motion.div
                        className="mb-8"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 200 }}
                    >
                        <div className="inline-flex items-center justify-center w-20 h-20 bg-[#20C997] rounded-full shadow-lg">
                            <Shield className="w-10 h-10 text-white" />
                        </div>
                    </motion.div>

                    {/* Title */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-block text-[#198754] font-semibold text-sm uppercase tracking-wider mb-4">
                            Security
                        </span>
                        <h2 className="font-sora text-3xl sm:text-4xl md:text-5xl font-bold text-[#495057] mb-6">
                            Your Data is Safe with Us
                        </h2>
                        <p className="font-inter text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
                            We use state-of-the-art security measures to ensure your financial information
                            remains private and protected at all times.
                        </p>
                    </motion.div>

                    {/* Feature List (Inline, no cards) */}
                    <motion.div
                        className="flex flex-wrap justify-center gap-6 sm:gap-10"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                    >
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                className="flex items-center gap-3"
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 + 0.3 }}
                            >
                                <div className="w-10 h-10 rounded-full bg-[#20C997]/10 flex items-center justify-center text-[#20C997]">
                                    {feature.icon}
                                </div>
                                <span className="font-inter font-medium text-[#495057]">
                                    {feature.text}
                                </span>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Trust Badge */}
                    <motion.div
                        className="mt-12 inline-flex items-center gap-2 px-5 py-3 bg-[#198754]/10 rounded-full"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 }}
                    >
                        <CheckCircle className="w-5 h-5 text-[#198754]" />
                        <span className="font-inter font-semibold text-[#198754] text-sm">
                            100% Secure & Private
                        </span>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
