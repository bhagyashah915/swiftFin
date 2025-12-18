"use client";
import React, { useState } from 'react';
import { Plus, Minus, Search, Mail } from 'lucide-react';

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const faqs = [
        {
            q: "What is SwiftFin and how does it work?",
            a: "SwiftFin is a comprehensive financial management platform designed to streamline your business finances. We provide real-time analytics, automated invoicing, expense tracking, and seamless integration with your existing tools."
        },
        {
            q: "Is there a free trial available?",
            a: "Yes! We offer a 14-day free trial with full access to all premium features. No credit card required to start. Experience everything SwiftFin has to offer before making a commitment."
        },
        {
            q: "How secure is my financial data?",
            a: "Security is our top priority. We use bank-level 256-bit SSL encryption for all data transmission and storage. We never store your banking credentials. All data is encrypted at rest and in transit."
        },
        {
            q: "Can I access SwiftFin on mobile devices?",
            a: "Absolutely! SwiftFin is fully responsive and works seamlessly on all devices. We also offer native iOS and Android apps with offline capabilities."
        },
        {
            q: "What integrations does SwiftFin support?",
            a: "SwiftFin integrates with over 150+ popular tools including QuickBooks, Xero, Stripe, PayPal, Salesforce, Slack, and more."
        }
    ];

    const toggleFaq = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="relative py-16 md:py-24 overflow-hidden bg-white">
            <div className="relative z-10 container mx-auto px-6 max-w-4xl">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-bold text-gray-900 mb-4">
                        Got Questions?
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-teal-400 mt-2">
                            We've Got Answers
                        </span>
                    </h2>
                </div>

                {/* FAQ Grid */}
                <div className="space-y-4 mb-16">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <div
                                key={index}
                                className="bg-white border-2 border-teal-50 rounded-2xl overflow-hidden transition-all duration-300 hover:border-teal-300 hover:shadow-lg"
                            >
                                <button
                                    onClick={() => toggleFaq(index)}
                                    className="w-full px-6 py-5 flex items-center justify-between text-left transition-all"
                                >
                                    <span className="text-lg font-semibold text-gray-900 pr-8">
                                        {faq.q}
                                    </span>
                                    <div className={`flex-shrink-0 w-8 h-8 rounded-full bg-teal-500 flex items-center justify-center transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                                        {isOpen ? (
                                            <Minus className="w-5 h-5 text-white" />
                                        ) : (
                                            <Plus className="w-5 h-5 text-white" />
                                        )}
                                    </div>
                                </button>
                                <div
                                    className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}
                                >
                                    <div className="px-6 pb-6 text-gray-700 leading-relaxed border-t border-gray-100 pt-4">
                                        {faq.a}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Bottom CTA */}
                <div className="text-center">
                    <p className="text-gray-700 text-lg mb-6">Still have questions?</p>
                    <a href="/contact" className="inline-block px-10 py-4 bg-transparent border border-teal-500 text-teal-600 font-bold text-lg rounded-full hover:bg-teal-500 hover:text-white transition-all duration-300 hover:scale-105">
                        Contact Our Team
                    </a>
                </div>
            </div>
        </section>
    );
}
