"use client";

import React from 'react';

interface LogoProps {
    className?: string;
    light?: boolean;
}

export default function Logo({ className = "w-12 h-12", light = false }: LogoProps) {
    return (
        <div className={`flex items-center justify-center ${className}`}>
            <svg
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
            >
                {/* Background Shape - Consistent with the original square/rounded container */}
                <rect
                    width="100"
                    height="100"
                    rx="24"
                    className={light ? "fill-white/10" : "fill-teal-600"}
                />

                {/* FINCO "F" Symbol - Modern Fintech Style */}
                <path
                    d="M35 25V75M35 25H65M35 50H60"
                    stroke="white"
                    strokeWidth="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />

                {/* Modern Growth Arrow integration */}
                <path
                    d="M45 45L75 25M75 25V40M75 25H60"
                    stroke={light ? "#20C997" : "#FFA500"}
                    strokeWidth="8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        </div>
    );
}
