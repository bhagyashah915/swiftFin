"use client";

import { useState } from "react";
import { Mail, MapPin, Phone, ArrowLeft } from "lucide-react";
import Link from "next/link";

import { db } from "@/app/lib/firebaseconfig";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

import { motion, AnimatePresence } from "framer-motion";

// ⭐ PREMIUM POPUP COMPONENT (UI NOT AFFECTING PAGE)
const SuccessPopup = ({ open, onClose }) => {
    if (!open) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-[999]"
            >
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                    transition={{ type: "spring", duration: 0.5 }}
                    className="bg-white/90 backdrop-blur-xl p-6 rounded-2xl shadow-2xl border border-white/40 max-w-sm w-[90%] text-center"
                >
                    <h2 className="text-xl font-semibold text-gray-800">
                        Message Sent 🎉
                    </h2>
                    <p className="text-gray-600 mt-1">
                        Your message has been delivered. Our team will reach out soon!
                    </p>

                    <button
                        onClick={onClose}
                        className="mt-4 px-6 py-2 bg-primary-teal text-white rounded-xl hover:bg-primary-teal/80 transition"
                    >
                        Close
                    </button>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default function Contact() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);
    const [successPopup, setSuccessPopup] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (form.phone.length !== 10) {
            alert("Phone number must be exactly 10 digits");
            return;
        }

        setLoading(true);

        try {
            await addDoc(collection(db, "contacts_web"), {
                ...form,
                timestamp: serverTimestamp(),
            });

            // Show success popup
            setSuccessPopup(true);

            // Hide after 2 seconds automatically
            setTimeout(() => setSuccessPopup(false), 2000);

            // Reset form
            setForm({ name: "", email: "", phone: "", message: "" });
        } catch (error) {
            console.error("Error sending message:", error);
            alert("Something went wrong!");
        }

        setLoading(false);
    };

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

                            <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
                                {/* Name */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Full Name <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        name="name"
                                        value={form.name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2.5 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-teal outline-none transition-all"
                                        placeholder="John Doe"
                                        required
                                    />
                                </div>

                                {/* Email */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Email Address <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={form.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2.5 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-teal outline-none transition-all"
                                        placeholder="john@example.com"
                                        required
                                    />
                                </div>

                                {/* Phone */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Phone Number <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={form.phone}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2.5 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-teal outline-none transition-all"
                                        placeholder="9876543210"
                                        maxLength={10}
                                        required
                                    />
                                </div>

                                {/* Message */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Message <span className="text-red-500">*</span>
                                    </label>
                                    <textarea
                                        name="message"
                                        value={form.message}
                                        onChange={handleChange}
                                        rows={4}
                                        className="w-full px-4 py-2.5 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-teal outline-none transition-all resize-none"
                                        placeholder="How can we help you?"
                                        required
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full bg-primary-teal text-white font-bold py-3 md:py-3.5 rounded-lg hover:bg-opacity-90 transition-all"
                                >
                                    {loading ? "Sending..." : "Send Message"}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

                {/* PREMIUM SUCCESS POPUP */}
                <SuccessPopup
                    open={successPopup}
                    onClose={() => setSuccessPopup(false)}
                />
            </div>
        </div>
    );
}
