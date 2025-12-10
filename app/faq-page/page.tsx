"use client";
import React, { useState } from 'react';
import { Plus, Minus, Search, Mail } from 'lucide-react';

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

    const faqs = [
        {
            category: "Getting Started",
            questions: [
                {
                    q: "What is SwiftFin and how does it work?",
                    a: "SwiftFin is a comprehensive financial management platform designed to streamline your business finances. We provide real-time analytics, automated invoicing, expense tracking, and seamless integration with your existing tools. Our AI-powered insights help you make smarter financial decisions."
                },
                {
                    q: "How quickly can I get started with SwiftFin?",
                    a: "You can be up and running in under 5 minutes! Simply sign up, connect your bank accounts or import your data, and our intelligent onboarding wizard will guide you through the setup. Most users complete their first transaction within 10 minutes of signing up."
                },
                {
                    q: "Is there a free trial available?",
                    a: "Yes! We offer a 14-day free trial with full access to all premium features. No credit card required to start. Experience everything SwiftFin has to offer before making a commitment."
                }
            ]
        },
        {
            category: "Security & Privacy",
            questions: [
                {
                    q: "How secure is my financial data?",
                    a: "Security is our top priority. We use bank-level 256-bit SSL encryption for all data transmission and storage. Our infrastructure is SOC 2 Type II certified, and we never store your banking credentials. All data is encrypted at rest and in transit."
                },
                {
                    q: "Do you sell or share my data with third parties?",
                    a: "Absolutely not. Your data is yours and yours alone. We never sell, rent, or share your personal or financial information with third parties for marketing purposes. We only use your data to provide and improve our services to you."
                },
                {
                    q: "What happens if I delete my account?",
                    a: "You maintain full control over your data. When you delete your account, all personal and financial data is permanently removed from our servers within 30 days. We can provide an export of your data before deletion if requested."
                }
            ]
        },
        {
            category: "Pricing & Plans",
            questions: [
                {
                    q: "What pricing plans do you offer?",
                    a: "We offer flexible pricing to suit businesses of all sizes: Starter ($29/month), Professional ($79/month), and Enterprise (custom pricing). All plans include core features with varying limits on transactions, team members, and advanced analytics."
                },
                {
                    q: "Can I change my plan at any time?",
                    a: "Yes! You can upgrade, downgrade, or cancel your plan at any time. Changes take effect immediately for upgrades, or at the end of your billing cycle for downgrades. There are no cancellation fees or long-term contracts."
                },
                {
                    q: "Do you offer discounts for annual subscriptions?",
                    a: "Yes! Save 20% when you choose annual billing. For example, our Professional plan is $948/year instead of $79/month ($1,188/year). We also offer custom pricing for enterprises and non-profit discounts."
                }
            ]
        },
        {
            category: "Features & Integration",
            questions: [
                {
                    q: "What integrations does SwiftFin support?",
                    a: "SwiftFin integrates with over 150+ popular tools including QuickBooks, Xero, Stripe, PayPal, Salesforce, Slack, and more. We also offer a robust API for custom integrations. New integrations are added regularly based on user feedback."
                },
                {
                    q: "Can I access SwiftFin on mobile devices?",
                    a: "Absolutely! SwiftFin is fully responsive and works seamlessly on all devices. We also offer native iOS and Android apps with offline capabilities, so you can manage your finances on the go, even without internet connection."
                },
                {
                    q: "How does the automated invoicing feature work?",
                    a: "Create invoice templates once, then set up recurring schedules or trigger invoices based on specific events. SwiftFin automatically generates, sends, and tracks invoices. You'll receive notifications when clients view or pay invoices, and we handle automatic payment reminders."
                }
            ]
        }
    ];

    const filteredFaqs = faqs.map(category => ({
        ...category,
        questions: category.questions.filter(faq =>
            faq.q.toLowerCase().includes(searchTerm.toLowerCase()) ||
            faq.a.toLowerCase().includes(searchTerm.toLowerCase())
        )
    })).filter(category => category.questions.length > 0);

    const toggleFaq = (categoryIndex, questionIndex) => {
        const key = `${categoryIndex}-${questionIndex}`;
        setOpenIndex(openIndex === key ? null : key);
    };

    return (
        <div className="relative min-h-screen py-20 overflow-hidden">
            {/* Animated gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-white via-teal-50 to-white">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMxNGI4YTYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDE2YzAtNi42MjcgNS4zNzMtMTIgMTItMTJzMTIgNS4zNzMgMTIgMTItNS4zNzMgMTItMTIgMTItMTItNS4zNzMtMTItMTJ6bTAgMzJjMC02LjYyNyA1LjM3My0xMiAxMi0xMnMxMiA1LjM3MyAxMiAxMi01LjM3MyAxMi0xMiAxMi0xMi01LjM3My0xMi0xMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>
            </div>

            <div className="relative z-10 container mx-auto px-6 max-w-6xl">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-bold text-gray-900 mb-4">
                        Got Questions?
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-teal-400 mt-2">
                            We've Got Answers
                        </span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Everything you need to know about SwiftFin. Can't find what you're looking for? Our support team is here to help.
                    </p>
                </div>

                {/* Search Bar */}
                <div className="max-w-2xl mx-auto mb-12">
                    <div className="relative">
                        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
                        <input
                            type="text"
                            placeholder="Search your question..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-12 pr-4 py-4 bg-white border-2 border-teal-200 rounded-2xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all shadow-lg"
                        />
                    </div>
                </div>

                {/* FAQ Grid */}
                <div className="grid gap-8 mb-16">
                    {filteredFaqs.map((category, categoryIndex) => (
                        <div key={categoryIndex} className="space-y-4">
                            <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                                <span className="w-12 h-1 bg-gradient-to-r from-teal-600 to-teal-400 rounded-full"></span>
                                {category.category}
                            </h3>
                            <div className="space-y-4">
                                {category.questions.map((faq, questionIndex) => {
                                    const isOpen = openIndex === `${categoryIndex}-${questionIndex}`;
                                    return (
                                        <div
                                            key={questionIndex}
                                            className="bg-white border-2 border-teal-200 rounded-2xl overflow-hidden transition-all duration-300 hover:border-teal-400 hover:shadow-xl"
                                        >
                                            <button
                                                onClick={() => toggleFaq(categoryIndex, questionIndex)}
                                                className="w-full px-6 py-5 flex items-center justify-between text-left transition-all"
                                            >
                                                <span className="text-lg font-semibold text-gray-900 pr-8">
                                                    {faq.q}
                                                </span>
                                                <div className={`flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-teal-600 to-teal-400 flex items-center justify-center transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                                                    {isOpen ? (
                                                        <Minus className="w-5 h-5 text-white" />
                                                    ) : (
                                                        <Plus className="w-5 h-5 text-white" />
                                                    )}
                                                </div>
                                            </button>
                                            <div
                                                className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                                    }`}
                                            >
                                                <div className="px-6 pb-6 text-gray-700 leading-relaxed">
                                                    {faq.a}
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Contact Card */}
                <div className="max-w-md mx-auto">
                    <div className="bg-white border-2 border-teal-200 rounded-2xl p-8 text-center hover:border-teal-400 hover:shadow-xl transition-all duration-300 group">
                        <div className="w-16 h-16 bg-gradient-to-r from-teal-600 to-teal-400 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                            <Mail className="w-8 h-8 text-white" />
                        </div>
                        <h4 className="text-gray-900 font-bold text-xl mb-2">Email Support</h4>
                        <p className="text-gray-600 mb-6">We'll respond within 24 hours</p>
                        <button className="px-6 py-3 bg-gradient-to-r from-teal-600 to-teal-400 text-white font-semibold rounded-full hover:shadow-xl hover:shadow-teal-400/50 transform hover:scale-105 transition-all duration-300">
                            Send Email →
                        </button>
                    </div>
                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-16">
                    <p className="text-gray-700 text-lg mb-6">Still have questions?</p>
                    <button className="px-10 py-4 bg-gradient-to-r from-teal-600 to-teal-400 text-white font-bold text-lg rounded-full hover:shadow-2xl hover:shadow-teal-400/50 transform hover:scale-105 transition-all duration-300">
                        Contact Our Team
                    </button>
                </div>
            </div>
        </div>
    );
}