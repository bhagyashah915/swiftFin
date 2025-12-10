"use client";

import { useRef, useEffect, useState } from 'react';
import { ChevronDown, Zap, Shield, TrendingUp, Camera, FileText, ArrowRight, DollarSign } from 'lucide-react';

export default function Hero() {
    const [scrollY, setScrollY] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const heroRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setIsVisible(true);

        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const parallaxOffset = scrollY * 0.5;

    return (
        <section ref={heroRef} className="relative w-full min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-teal-950 to-slate-900">

            {/* Animated Background with Gradient Mesh */}
            <div className="absolute inset-0">
                {/* Base gradient overlay - Teal focused */}
                <div className="absolute inset-0 bg-gradient-to-br from-teal-600/10 via-emerald-500/10 to-orange-500/5 animate-gradient-shift"></div>

                {/* Animated orbs - Brand colors */}
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl animate-float"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/15 rounded-full blur-3xl animate-float-delayed"></div>
                <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl animate-pulse-slow"></div>

                {/* Grid pattern */}
                <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

                {/* Floating particles */}
                <div className="absolute inset-0">
                    {[...Array(25)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute w-1 h-1 bg-teal-400/40 rounded-full animate-particle"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                animationDelay: `${Math.random() * 5}s`,
                                animationDuration: `${10 + Math.random() * 10}s`
                            }}
                        />
                    ))}
                </div>
            </div>

            {/* Main Content */}
            <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
                <div className="w-full grid lg:grid-cols-2 gap-12 items-center">

                    {/* Left Content - Text */}
                    <div className={`space-y-8 transition-all duration-1500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>

                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-500/10 border border-teal-500/30 rounded-full backdrop-blur-sm">
                            <Zap className="w-4 h-4 text-teal-400 animate-pulse" />
                            <span className="text-sm text-teal-300 font-medium">Personal Finance Made Simple</span>
                        </div>

                        {/* Main Headline */}
                        <div className="space-y-4">
                            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                                <span className="bg-gradient-to-r from-white via-teal-200 to-emerald-300 bg-clip-text text-transparent animate-gradient-text">
                                    Track. Manage.
                                </span>
                                <br />
                                <span className="bg-gradient-to-r from-teal-400 via-emerald-400 to-teal-500 bg-clip-text text-transparent animate-gradient-text-delayed">
                                    Transform Your
                                </span>
                                <br />
                                <span className="bg-gradient-to-r from-orange-400 via-orange-300 to-teal-400 bg-clip-text text-transparent animate-gradient-text">
                                    Money Story.
                                </span>
                            </h1>

                            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-xl">
                                Say goodbye to messy spreadsheets. SwiftFin helps you track expenses, manage EMIs, monitor investments, and get smart money tips—all in one secure, easy-to-use app.
                            </p>
                        </div>

                        {/* Feature Pills */}
                        <div className="flex flex-wrap gap-4">
                            <div className="flex items-center gap-2 px-4 py-2 bg-teal-500/10 border border-teal-500/20 rounded-lg backdrop-blur-sm hover:bg-teal-500/20 transition-all">
                                <Camera className="w-5 h-5 text-teal-400" />
                                <span className="text-sm text-white font-medium">Snap Receipts</span>
                            </div>
                            <div className="flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-lg backdrop-blur-sm hover:bg-emerald-500/20 transition-all">
                                <Shield className="w-5 h-5 text-emerald-400" />
                                <span className="text-sm text-white font-medium">Secure & Private</span>
                            </div>
                            <div className="flex items-center gap-2 px-4 py-2 bg-orange-500/10 border border-orange-500/20 rounded-lg backdrop-blur-sm hover:bg-orange-500/20 transition-all">
                                <TrendingUp className="w-5 h-5 text-orange-400" />
                                <span className="text-sm text-white font-medium">Smart Insights</span>
                            </div>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <button className="group px-8 py-4 bg-gradient-to-r from-teal-500 to-emerald-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-teal-500/50 transition-all duration-300 hover:scale-105">
                                <span className="flex items-center justify-center gap-2">
                                    Start Tracking Free
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </span>
                            </button>
                            <button className="px-8 py-4 bg-white/5 border border-white/20 text-white font-semibold rounded-xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                                See How It Works
                            </button>
                        </div>

                        {/* Value Prop */}
                        <div className="pt-8 border-t border-white/10">
                            <p className="text-slate-400 text-sm">
                                <span className="text-teal-400 font-semibold">Reduce overspending by 30%</span> with automated tracking and smart reminders
                            </p>
                        </div>
                    </div>

                    {/* Right Content - Finance Visual Showcase */}
                    <div
                        className={`relative transition-all duration-1500 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}
                        style={{ transform: `translateY(${parallaxOffset * 0.3}px)` }}
                    >
                        {/* Floating Finance Cards Display */}
                        <div className="relative w-full aspect-square max-w-xl mx-auto">

                            {/* Glow effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-teal-500/30 to-emerald-500/30 blur-3xl animate-pulse-slow"></div>

                            {/* Main Expense Card */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-48 transform rotate-12 hover:rotate-6 transition-transform duration-700">
                                <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl shadow-teal-500/50 animate-float">
                                    {/* Card gradient background */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-teal-400 via-emerald-500 to-teal-600"></div>

                                    {/* Card pattern overlay */}
                                    <div className="absolute inset-0 bg-card-pattern opacity-20"></div>

                                    {/* Receipt icon */}
                                    <div className="absolute top-8 left-8">
                                        <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                                            <FileText className="w-7 h-7 text-white" />
                                        </div>
                                    </div>

                                    {/* Card content */}
                                    <div className="absolute bottom-8 left-8 space-y-2">
                                        <div className="text-white/80 text-sm font-medium">Monthly Expenses</div>
                                        <div className="text-white text-3xl font-bold">₹45,280</div>
                                        <div className="text-white/70 text-xs">Tracked automatically</div>
                                    </div>

                                    {/* Logo */}
                                    <div className="absolute top-8 right-8">
                                        <DollarSign className="w-8 h-8 text-white/80" />
                                    </div>
                                </div>
                            </div>

                            {/* EMI Tracker Card */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-44 transform -rotate-6 hover:-rotate-3 transition-transform duration-700">
                                <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl shadow-orange-500/50 animate-float-delayed">
                                    <div className="absolute inset-0 bg-gradient-to-br from-orange-400 via-orange-500 to-red-500"></div>
                                    <div className="absolute inset-0 bg-card-pattern opacity-20"></div>

                                    {/* Alert icon */}
                                    <div className="absolute top-7 left-7">
                                        <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                                            <Zap className="w-6 h-6 text-white" />
                                        </div>
                                    </div>

                                    <div className="absolute bottom-7 left-7 space-y-1">
                                        <div className="text-white/80 text-xs font-medium">EMI Due</div>
                                        <div className="text-white text-2xl font-bold">₹12,500</div>
                                        <div className="text-white/70 text-xs">in 3 days</div>
                                    </div>
                                </div>
                            </div>

                            {/* Orbiting Feature Icons */}
                            <div className="absolute top-1/4 right-0 w-16 h-16 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-500/50 animate-bounce-slow">
                                <Camera className="w-8 h-8 text-white" />
                            </div>

                            <div className="absolute bottom-1/4 left-0 w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center shadow-lg shadow-green-500/50 animate-bounce-delayed">
                                <TrendingUp className="w-8 h-8 text-white" />
                            </div>

                            {/* Investment Indicator */}
                            <div className="absolute top-1/3 left-4 w-20 h-20 bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl flex flex-col items-center justify-center shadow-lg border border-teal-500/30 animate-pulse-slow">
                                <div className="text-teal-400 text-xs font-medium">Portfolio</div>
                                <div className="text-white text-sm font-bold">+12.5%</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                <ChevronDown className="w-8 h-8 text-teal-400/70" />
            </div>

            {/* Custom Styles */}
            <style jsx>{`
                @keyframes gradient-shift {
                    0%, 100% { opacity: 0.5; }
                    50% { opacity: 1; }
                }

                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-20px); }
                }

                @keyframes float-delayed {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-30px); }
                }

                @keyframes pulse-slow {
                    0%, 100% { opacity: 0.3; transform: scale(1); }
                    50% { opacity: 0.5; transform: scale(1.05); }
                }

                @keyframes particle {
                    0% { transform: translateY(0) translateX(0); opacity: 0; }
                    50% { opacity: 1; }
                    100% { transform: translateY(-100vh) translateX(20px); opacity: 0; }
                }

                @keyframes gradient-text {
                    0%, 100% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                }

                @keyframes bounce-slow {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-10px); }
                }

                @keyframes bounce-delayed {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-15px); }
                }

                .animate-gradient-shift {
                    animation: gradient-shift 8s ease-in-out infinite;
                }

                .animate-float {
                    animation: float 6s ease-in-out infinite;
                }

                .animate-float-delayed {
                    animation: float-delayed 8s ease-in-out infinite;
                }

                .animate-pulse-slow {
                    animation: pulse-slow 10s ease-in-out infinite;
                }

                .animate-particle {
                    animation: particle linear infinite;
                }

                .animate-gradient-text {
                    background-size: 200% 200%;
                    animation: gradient-text 5s ease infinite;
                }

                .animate-gradient-text-delayed {
                    background-size: 200% 200%;
                    animation: gradient-text 7s ease infinite;
                }

                .animate-bounce-slow {
                    animation: bounce-slow 3s ease-in-out infinite;
                }

                .animate-bounce-delayed {
                    animation: bounce-delayed 4s ease-in-out infinite 0.5s;
                }

                .bg-grid-pattern {
                    background-image: 
                        linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px);
                    background-size: 50px 50px;
                }

                .bg-card-pattern {
                    background-image: 
                        repeating-linear-gradient(
                            45deg,
                            transparent,
                            transparent 10px,
                            rgba(255,255,255,0.05) 10px,
                            rgba(255,255,255,0.05) 20px
                        );
                }
            `}</style>
        </section>
    );
}