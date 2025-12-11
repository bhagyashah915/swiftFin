"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Download, Smartphone, Shield, Zap, Star, TrendingUp } from 'lucide-react';

export default function HeroNew() {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setTimeout(() => setIsLoaded(true), 100);
    }, []);

    return (
        <section className="relative min-h-screen w-full bg-linear-to-br from-white via-teal-50 to-cyan-50 overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 right-20 w-72 h-72 bg-teal-200/30 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 left-20 w-96 h-96 bg-cyan-200/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
            </div>

            <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
                <div className="w-full grid lg:grid-cols-2 gap-12 lg:gap-16 items-center py-20">

                    {/* Left Content */}
                    <div
                        className={`space-y-8 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                    >
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-100 rounded-full">
                            <Star className="w-4 h-4 text-teal-600 fill-teal-600" />
                            <span className="text-sm font-semibold text-teal-900">Rated 4.8/5 by 50k+ users</span>
                        </div>

                        {/* Main Headline */}
                        <div className="space-y-4">
                            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                                <span className="block bg-linear-to-r from-teal-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent">
                                    Your Personal
                                </span>
                                <span
                                    className="block text-6xl sm:text-7xl lg:text-8xl mt-2"
                                    style={{ fontFamily: "var(--font-cedarville), cursive" }}
                                >
                                    <span className="bg-linear-to-r from-teal-500 via-cyan-500 to-teal-600 bg-clip-text text-transparent">
                                        SwiftFin
                                    </span>
                                </span>
                                <span className="block text-slate-700 mt-2">Finance Buddy</span>
                            </h1>

                            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-xl">
                                Track expenses, manage budgets, and achieve your financial goals with India's most trusted personal finance app.
                            </p>
                        </div>

                        {/* Feature highlights */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            <div className="flex items-center gap-3 p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-teal-100 shadow-sm">
                                <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center">
                                    <Zap className="w-5 h-5 text-teal-600" />
                                </div>
                                <div>
                                    <div className="text-sm font-semibold text-slate-900">Instant</div>
                                    <div className="text-xs text-slate-600">Sync</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-cyan-100 shadow-sm">
                                <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center">
                                    <Shield className="w-5 h-5 text-cyan-600" />
                                </div>
                                <div>
                                    <div className="text-sm font-semibold text-slate-900">100%</div>
                                    <div className="text-xs text-slate-600">Secure</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-blue-100 shadow-sm">
                                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                                    <TrendingUp className="w-5 h-5 text-blue-600" />
                                </div>
                                <div>
                                    <div className="text-sm font-semibold text-slate-900">Smart</div>
                                    <div className="text-xs text-slate-600">Insights</div>
                                </div>
                            </div>
                        </div>

                        {/* Download buttons */}
                        <div className="space-y-4 pt-4">
                            <div className="flex flex-col sm:flex-row gap-4">
                                <button className="group flex items-center justify-center gap-3 px-8 py-4 bg-linear-to-r from-teal-600 to-cyan-600 text-white font-semibold rounded-xl shadow-lg shadow-teal-500/30 hover:shadow-xl hover:shadow-teal-500/40 transition-all duration-300 hover:scale-105">
                                    <Download className="w-5 h-5" />
                                    <span>Download for Android</span>
                                </button>
                                <button className="group flex items-center justify-center gap-3 px-8 py-4 bg-slate-900 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                                    <Smartphone className="w-5 h-5" />
                                    <span>Download for iOS</span>
                                </button>
                            </div>
                            <p className="text-sm text-slate-500">
                                Free download • No credit card required • Available on Android & iOS
                            </p>
                        </div>

                        {/* Social proof */}
                        <div className="flex items-center gap-6 pt-4 border-t border-slate-200">
                            <div>
                                <div className="text-2xl font-bold text-slate-900">50K+</div>
                                <div className="text-sm text-slate-600">Active Users</div>
                            </div>
                            <div className="w-px h-12 bg-slate-200"></div>
                            <div>
                                <div className="text-2xl font-bold text-slate-900">4.8★</div>
                                <div className="text-sm text-slate-600">App Rating</div>
                            </div>
                            <div className="w-px h-12 bg-slate-200"></div>
                            <div>
                                <div className="text-2xl font-bold text-slate-900">₹10Cr+</div>
                                <div className="text-sm text-slate-600">Money Tracked</div>
                            </div>
                        </div>
                    </div>

                    {/* Right Content - Phone Mockup */}
                    <div
                        className={`relative transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                    >
                        <div className="relative w-full max-w-md mx-auto">
                            {/* Glow effect */}
                            <div className="absolute inset-0 bg-linear-to-br from-teal-400/30 to-cyan-400/30 blur-3xl"></div>

                            {/* Wallet/App Image */}
                            <div className="relative z-10 w-full aspect-square">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="relative w-4/5 h-4/5 animate-float">
                                        <Image
                                            src="/herowallet.png"
                                            alt="SwiftFin App"
                                            fill
                                            className="object-contain drop-shadow-2xl"
                                            priority
                                        />
                                    </div>
                                </div>

                                {/* Floating stats cards */}
                                <div className="absolute top-10 -left-4 bg-white rounded-2xl shadow-xl p-4 animate-float-delayed">
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                                            <TrendingUp className="w-6 h-6 text-green-600" />
                                        </div>
                                        <div>
                                            <div className="text-xs text-slate-600">Saved this month</div>
                                            <div className="text-lg font-bold text-slate-900">₹12,500</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="absolute bottom-10 -right-4 bg-white rounded-2xl shadow-xl p-4 animate-float">
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center">
                                            <Zap className="w-6 h-6 text-teal-600" />
                                        </div>
                                        <div>
                                            <div className="text-xs text-slate-600">Transactions</div>
                                            <div className="text-lg font-bold text-slate-900">248</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex items-start justify-center p-2">
                    <div className="w-1.5 h-3 bg-slate-400 rounded-full"></div>
                </div>
            </div>

            {/* Animation styles */}
            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-20px); }
                }
                @keyframes float-delayed {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-15px); }
                }
                .animate-float {
                    animation: float 6s ease-in-out infinite;
                }
                .animate-float-delayed {
                    animation: float-delayed 8s ease-in-out infinite;
                }
            `}</style>
        </section>
    );
}
