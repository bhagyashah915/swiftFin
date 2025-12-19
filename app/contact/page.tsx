"use client";

import { Mail, MapPin, Phone, ArrowLeft } from "lucide-react";
import Link from "next/link";
import ContactForm from "../components/contact-form";

export default function Contact() {
    return (
        <div className="relative min-h-screen overflow-hidden font-['Montserrat']">
            {/* Full Page Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/contact.jpeg"
                    alt="Contact Background"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-white/80 backdrop-blur-sm"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 py-12 md:py-20">
                <Link
                    href="/"
                    className="absolute top-4 md:top-6 left-4 md:left-6 flex items-center text-gray-600 hover:text-primary-teal transition-colors z-10"
                >
                    <ArrowLeft className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                    <span className="text-sm md:text-base">Back to Home</span>
                </Link>

                <div className="container mx-auto px-4 sm:px-6">
                    <div className="text-center mb-12 md:mb-16 pt-8 md:pt-0">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-slate mb-3 md:mb-4">
                            Contact Us
                        </h1>
                        <p className="text-lg md:text-xl text-gray-600">
                            We&apos;d love to hear from you. Get in touch with us.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
                        {/* Left Section */}
                        <div className="bg-gray-50 p-6 md:p-8 rounded-2xl order-2 md:order-1">
                            <h2 className="text-xl md:text-2xl font-bold text-neutral-slate mb-6 md:mb-8">
                                Get in Touch
                            </h2>

                            <div className="space-y-6 md:space-y-8">
                                <div className="flex items-start gap-3 md:gap-4">
                                    <div className="w-10 h-10 md:w-12 md:h-12 bg-primary-teal/10 rounded-lg flex items-center justify-center text-primary-teal shrink-0">
                                        <Mail className="w-5 h-5 md:w-6 md:h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-neutral-slate mb-1 text-sm md:text-base">
                                            Email
                                        </h3>
                                        <p className="text-gray-600 text-sm md:text-base">
                                            support@swiftfin.com
                                        </p>
                                        <p className="text-gray-600 text-sm md:text-base">
                                            sales@swiftfin.com
                                        </p>
                                    </div>
                                </div>

                                {/* Phone */}
                                <div className="flex items-start gap-3 md:gap-4">
                                    <div className="w-10 h-10 md:w-12 md:h-12 bg-primary-teal/10 rounded-lg flex items-center justify-center text-primary-teal shrink-0">
                                        <Phone className="w-5 h-5 md:w-6 md:h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-neutral-slate mb-1 text-sm md:text-base">
                                            Phone
                                        </h3>
                                        <p className="text-gray-600 text-sm md:text-base">
                                            +91 98765 43210
                                        </p>
                                        <p className="text-gray-600 text-sm md:text-base">
                                            Mon-Fri, 9am - 6pm IST
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Section – FORM */}
                        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-gray-100 order-1 md:order-2">
                            <h2 className="text-xl md:text-2xl font-bold text-neutral-slate mb-6 md:mb-8">
                                Send us a Message
                            </h2>
                            <ContactForm collectionName="contacts_web" theme="light" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
