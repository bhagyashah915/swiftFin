"use client";

import { useRef, useEffect, useState } from 'react';
import { ArrowRight, Plus, TrendingUp, Lightbulb, PieChart, Home, Receipt, Target, MoreHorizontal, Wallet, CreditCard, DollarSign } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
    const [scrollY, setScrollY] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const [showSplash, setShowSplash] = useState(true);
    const [splashStep, setSplashStep] = useState(0);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isLargeScreen, setIsLargeScreen] = useState(false);
    const phoneRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Simple 3-second splash screen timer
        const splashTimer = setTimeout(() => {
            setShowSplash(false);
            setTimeout(() => setIsVisible(true), 100);
        }, 3000);

        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        const handleResize = () => {
            setIsLargeScreen(window.innerWidth >= 1024);
        };

        const handleMouseMove = (e: MouseEvent) => {
            if (phoneRef.current && isLargeScreen) {
                const rect = phoneRef.current.getBoundingClientRect();
                const centerX = rect.left + rect.width / 2;
                const centerY = rect.top + rect.height / 2;

                setMousePosition({
                    x: (e.clientX - centerX) / 40,
                    y: (e.clientY - centerY) / 40
                });
            }
        };

        // Initial check
        handleResize();

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);
        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            clearTimeout(splashTimer);
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [isLargeScreen]);

    const parallaxOffset = scrollY * 0.3;

    return (
        <>
            {/* Splash Screen with Video Background */}
            <div className={`fixed inset-0 z-[100] bg-black h-[100vh] flex items-center justify-center transition-opacity duration-1000 ${showSplash ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                {/* Video Background */}
                <div className="absolute inset-0 z-0">
                    <video
                        autoPlay
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                    >
                        <source src="/start bg.mp4" type="video/mp4" />
                    </video>
                    {/* Overlay for contrast */}
                    <div className="absolute inset-0 bg-black/40"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center justify-center space-y-6">
                    <div className="w-32 h-32 md:w-40 md:h-40 bg-white/10 backdrop-blur-md rounded-3xl p-6 flex items-center justify-center border border-white/20 shadow-2xl animate-fade-in-up">
                        <Image
                            src="/images/logo.png"
                            alt="SwiftFin Logo"
                            width={160}
                            height={160}
                            className="object-contain"
                            priority
                        />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black text-white tracking-widest font-['Montserrat'] animate-fade-in-up delay-200">
                        SwiftFin
                    </h1>
                </div>
            </div>

            {/* Main Hero Section with Background Image */}
            <section className="relative w-full min-h-screen lg:h-[90vh] overflow-hidden">



                {/* White overlay to blend with design */}
                <div className="absolute inset-0 "></div>

                {/* Subtle Background Elements */}
                <div className="absolute inset-0 pointer-events-none z-[2]">
                    <div className="hidden lg:block absolute top-32 right-20 text-gray-200 text-6xl font-light select-none">+</div>
                    <div className="hidden lg:block absolute bottom-40 left-32 text-gray-100 text-8xl font-light select-none">+</div>
                </div>

                {/* Main Content */}
                <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center pt-12 pb-48 lg:py-12">
                    <div className="w-full flex flex-col lg:grid lg:grid-cols-12 gap-8 lg:gap-4 items-start lg:items-center">

                        {/* Left Content - Text (Order 1 on mobile, original position on desktop) */}
                        <div className={`order-1 lg:order-none lg:col-span-4 transition-all duration-1000 lg:-mt-56 text-center lg:text-left ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
                            <div className="space-y-4">
                                <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight tracking-wide text-white">
                                    <span className="tracking-wider">Welcome to SwiftFin</span>
                                    <br />
                                    <span className="text-teal-600 tracking-wider">Your Personal Finance Buddy</span>
                                </h1>
                            </div>

                            {/* Button - Only show on desktop in this section */}
                            <div className="pt-4 hidden lg:flex justify-center lg:justify-start">
                                <a href="/download" className="group px-6 py-3 lg:px-8 lg:py-4 bg-white border-2 border-teal-500 text-teal-600 font-semibold rounded-full hover:bg-teal-500 hover:text-white transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-3 text-sm lg:text-base">
                                    <span>Get Started Free</span>
                                    <div className="w-7 h-7 lg:w-8 lg:h-8 bg-teal-500 group-hover:bg-white rounded-full flex items-center justify-center transition-colors">
                                        <ArrowRight className="w-3.5 h-3.5 lg:w-4 lg:h-4 text-white group-hover:text-teal-500 group-hover:translate-x-0.5 transition-all" />
                                    </div>
                                </a>
                            </div>
                        </div>

                        {/* Center Content - Interactive Phone Mockup (Order 2 on mobile, original position on desktop) */}
                        <div className={`order-2 lg:order-none lg:col-span-4 flex justify-center transition-all duration-1000 delay-200 relative z-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
                            <div
                                ref={phoneRef}
                                className="relative group"
                                style={isLargeScreen ? {
                                    transform: `translateY(${parallaxOffset + mousePosition.y * 2}px) translateX(${mousePosition.x * 2}px) perspective(2000px) rotateY(${mousePosition.x * 0.3}deg) rotateX(${-mousePosition.y * 0.3}deg)`,
                                    transition: 'transform 0.2s ease-out',
                                    transformStyle: 'preserve-3d'
                                } : {}}
                            >
                                <div className="relative w-[280px] h-[373px] sm:w-[400px] sm:h-[533px] lg:w-[600px] lg:h-[800px] transform transition-all duration-500">
                                    <Image
                                        src="/herophone2.png"
                                        alt="SwiftFin App Hero Phone"
                                        fill
                                        className="object-contain drop-shadow-2xl"
                                        priority
                                    />
                                    {/* Glow effect */}
                                    <div className="absolute -bottom-8 lg:-bottom-12 left-1/2 -translate-x-1/2 w-[90%] h-12 lg:h-20 bg-gradient-to-r from-transparent via-teal-500/30 to-transparent blur-2xl lg:blur-3xl rounded-full -z-10"></div>
                                </div>
                            </div>
                        </div>

                        {/* Mobile Button - Order 3 on mobile, hidden on desktop */}
                        <div className="order-3 lg:hidden pt-4 flex justify-center">
                            <a href="/download" className="group px-6 py-3 bg-white border-2 border-teal-500 text-teal-600 font-semibold rounded-full hover:bg-teal-500 hover:text-white transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-3 text-sm">
                                <span>Get Started Free</span>
                                <div className="w-7 h-7 bg-teal-500 group-hover:bg-white rounded-full flex items-center justify-center transition-colors">
                                    <ArrowRight className="w-3.5 h-3.5 text-white group-hover:text-teal-500 group-hover:translate-x-0.5 transition-all" />
                                </div>
                            </a>
                        </div>

                        {/* Right Content - Hidden on mobile, visible on desktop */}
                        <div className={`hidden lg:block lg:col-span-4 space-y-6 lg:space-y-8 transition-all duration-1000 delay-400 lg:-mt-72 text-center lg:text-left ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
                            <div className="flex justify-end mb-8">
                                <div className="text-teal-300 text-8xl font-light leading-none select-none">+</div>
                            </div>

                            <div className="space-y-4">
                                <p className="text-lg sm:text-xl lg:text-2xl text-black  leading-relaxed">
                                    Simplify your financial life. Our intuitive app makes managing your money effortless.
                                </p>
                            </div>

                            <div className="flex items-center justify-center lg:justify-start gap-4 pt-6">
                                <div className="flex -space-x-3">
                                    <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-gradient-to-br from-orange-400 to-pink-500 border-3 lg:border-4 border-white shadow-lg"></div>
                                    <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 border-3 lg:border-4 border-white shadow-lg"></div>
                                    <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-gradient-to-br from-green-400 to-teal-500 border-3 lg:border-4 border-white shadow-lg"></div>
                                </div>
                                <div className="text-left">
                                    <p className="text-2xl lg:text-3xl font-bold text-black">2.3M+</p>
                                    <p className="text-xs lg:text-sm text-black">Trusted to use by millions users<br />over 140 countries</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Teal Curved Background with Ticker - Bottom Half */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[95%] sm:w-[90%] lg:w-[80%] h-40 sm:h-52 lg:h-72 overflow-hidden z-[5]">
                    <div className="absolute inset-0 bg-teal-600 rounded-t-[40px] sm:rounded-t-[60px] lg:rounded-t-[80px] shadow-2xl">
                        {/* Ticker Text */}
                        <div className="absolute top-1/2 -translate-y-1/2 w-full overflow-hidden">
                            <div className="flex animate-ticker whitespace-nowrap">
                                <span className="inline-block text-white text-2xl sm:text-4xl lg:text-6xl font-black px-4 sm:px-6 lg:px-8">
                                    Your Personal Finance Buddy • Your Personal Finance Buddy • Your Personal Finance Buddy • Your Personal Finance Buddy • Your Personal Finance Buddy • Your Personal Finance Buddy •
                                </span>
                                <span className="inline-block text-white text-2xl sm:text-4xl lg:text-6xl font-black px-4 sm:px-6 lg:px-8">
                                    Your Personal Finance Buddy • Your Personal Finance Buddy • Your Personal Finance Buddy • Your Personal Finance Buddy • Your Personal Finance Buddy • Your Personal Finance Buddy •
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <style jsx>{`
                    .scrollbar-hide::-webkit-scrollbar {
                        display: none;
                    }
                    .scrollbar-hide {
                        -ms-overflow-style: none;
                        scrollbar-width: none;
                    }
                    @keyframes ticker {
                        0% {
                            transform: translateX(0);
                        }
                        100% {
                            transform: translateX(-50%);
                        }
                    }
                    .animate-ticker {
                        animation: ticker 30s linear infinite;
                    }
                `}</style>
            </section>
        </>
    );
}