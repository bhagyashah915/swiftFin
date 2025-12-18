"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { db } from "@/app/lib/firebaseconfig";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

interface ContactFormProps {
    collectionName?: string;
    className?: string;
}

export default function ContactForm({ collectionName = "contacts", className = "" }: ContactFormProps) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: ""
    });
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");

        try {
            await addDoc(collection(db, collectionName), {
                ...formData,
                timestamp: serverTimestamp()
            });
            setStatus("success");
            setFormData({ name: "", email: "", phone: "", message: "" });
        } catch (error) {
            console.error("Error adding document: ", error);
            setStatus("error");
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    if (status === "success") {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className={`bg-teal-50 border border-teal-200 rounded-2xl p-8 text-center ${className}`}
            >
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="w-8 h-8 text-teal-600">✓</div>
                </div>
                <h3 className="text-2xl font-bold text-teal-800 mb-2">Message Sent!</h3>
                <p className="text-teal-600">We'll get back to you shortly.</p>
                <button
                    onClick={() => setStatus("idle")}
                    className="mt-6 text-sm text-teal-700 font-semibold underline"
                >
                    Send another message
                </button>
            </motion.div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className={`space-y-4 ${className}`}>
            <div className="grid grid-cols-2 gap-4">
                <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    type="text"
                    placeholder="Name"
                    required
                    className="w-full px-4 py-3 border-b-2 border-slate-300 focus:border-teal-500 outline-none bg-transparent font-['Montserrat'] transition-colors placeholder-slate-400 text-slate-800"
                />
                <input
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    type="email"
                    placeholder="Email"
                    required
                    className="w-full px-4 py-3 border-b-2 border-slate-300 focus:border-teal-500 outline-none bg-transparent font-['Montserrat'] transition-colors placeholder-slate-400 text-slate-800"
                />
            </div>
            <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                type="tel"
                placeholder="Phone Number"
                className="w-full px-4 py-3 border-b-2 border-slate-300 focus:border-teal-500 outline-none bg-transparent font-['Montserrat'] transition-colors placeholder-slate-400 text-slate-800"
            />
            <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Anything we should know?"
                rows={2}
                required
                className="w-full px-4 py-3 border-b-2 border-slate-300 focus:border-teal-500 outline-none bg-transparent resize-none font-['Montserrat'] transition-colors placeholder-slate-400 text-slate-800"
            />
            <div className="flex justify-end pt-4">
                <button
                    type="submit"
                    disabled={status === "loading"}
                    className="bg-teal-500 text-white px-8 py-3 font-semibold hover:bg-teal-600 transition-all duration-300 font-['Montserrat'] disabled:opacity-50 disabled:cursor-not-allowed rounded-lg"
                >
                    {status === "loading" ? "Sending..." : "Submit"}
                </button>
            </div>
        </form>
    );
}
