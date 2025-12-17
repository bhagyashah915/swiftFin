"use client";

import { Check } from "lucide-react";
import AnimatedDownloadButton from "./AnimatedDownloadButton";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Pricing() {
    return (
        <section id="pricing" className="py-20 bg-gray-50 bg-grid-pattern">
            <div className="container mx-auto px-6 md:px-12">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-primary-teal font-bold tracking-wide uppercase text-sm mb-3">Pricing</h2>
                    <h3 className="font-['Montserrat'] text-6xl md:text-7xl font-bold text-neutral-slate mb-6">
                        Simple, <span className="text-gradient-primary">Transparent</span> Pricing
                    </h3>
                    <p className="font-['Montserrat'] text-gray-600 text-lg">
                        Start for free and scale as you grow. No hidden fees.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {/* Free Plan */}
                    <motion.div
                        className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 flex flex-col hover:shadow-lg transition-shadow"
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <div className="mb-6">
                            <h4 className="font-['Montserrat'] text-xl font-bold text-neutral-slate mb-2">Basic</h4>
                            <div className="text-4xl font-bold text-neutral-slate">Free</div>
                            <p className="text-gray-500 mt-2">Forever free for small businesses</p>
                        </div>
                        <ul className="space-y-4 mb-8 flex-1">
                            <li className="flex items-center gap-3 text-gray-600">
                                <Check className="w-5 h-5 text-success-green" />
                                <span>Digital Ledger</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-600">
                                <Check className="w-5 h-5 text-success-green" />
                                <span>Payment Reminders</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-600">
                                <Check className="w-5 h-5 text-success-green" />
                                <span>Basic Reports</span>
                            </li>
                        </ul>
                        <AnimatedDownloadButton className="w-full py-3 border-2 border-primary-teal text-primary-teal bg-transparent hover:bg-teal-50 shadow-none" text="Download" />
                    </motion.div>

                    {/* Pro Plan */}
                    <motion.div
                        className="bg-white rounded-2xl p-8 shadow-xl border-2 border-primary-teal flex flex-col relative transform md:-translate-y-4"
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <motion.div
                            className="absolute top-0 right-0 bg-primary-teal text-white text-xs font-bold px-3 py-1 rounded-bl-xl rounded-tr-xl"
                            animate={{ scale: [1, 1.05, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            POPULAR
                        </motion.div>
                        <div className="mb-6">
                            <h4 className="font-['Montserrat'] text-xl font-bold text-neutral-slate mb-2">Pro</h4>
                            <div className="flex items-baseline gap-1">
                                <span className="text-4xl font-bold text-neutral-slate">₹299</span>
                                <span className="text-gray-500">/month</span>
                            </div>
                            <p className="font-['Montserrat'] text-gray-500 mt-2">For growing businesses</p>
                        </div>
                        <ul className="space-y-4 mb-8 flex-1">
                            <li className="flex items-center gap-3 text-gray-600">
                                <Check className="w-5 h-5 text-success-green" />
                                <span>Everything in Basic</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-600">
                                <Check className="w-5 h-5 text-success-green" />
                                <span>Staff Management</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-600">
                                <Check className="w-5 h-5 text-success-green" />
                                <span>Inventory Management</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-600">
                                <Check className="w-5 h-5 text-success-green" />
                                <span>Priority Support</span>
                            </li>
                        </ul>
                        <AnimatedDownloadButton className="w-full py-3" text="Download" />
                    </motion.div>

                    {/* Enterprise Plan */}
                    <motion.div
                        className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 flex flex-col hover:shadow-lg transition-shadow"
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <div className="mb-6">
                            <h4 className="font-['Montserrat'] text-xl font-bold text-neutral-slate mb-2">Enterprise</h4>
                            <div className="text-4xl font-bold text-neutral-slate">Custom</div>
                            <p className="font-['Montserrat'] text-gray-500 mt-2">For large organizations</p>
                        </div>
                        <ul className="space-y-4 mb-8 flex-1">
                            <li className="flex items-center gap-3 text-gray-600">
                                <Check className="w-5 h-5 text-success-green" />
                                <span>Everything in Pro</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-600">
                                <Check className="w-5 h-5 text-success-green" />
                                <span>Dedicated Account Manager</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-600">
                                <Check className="w-5 h-5 text-success-green" />
                                <span>Custom Integrations</span>
                            </li>
                        </ul>
                        <Link
                            href="/contact"
                            className="w-full py-3 border-2 border-gray-200 text-neutral-slate font-bold rounded-xl hover:border-primary-teal hover:text-primary-teal transition-colors text-center block"
                        >
                            Contact Sales
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section >
    );
}
