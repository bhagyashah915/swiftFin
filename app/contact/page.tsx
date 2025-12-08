import { Mail, MapPin, Phone, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function Contact() {
    return (
        <div className="bg-white py-12 md:py-20 relative min-h-screen">
            <Link href="/" className="absolute top-4 md:top-6 left-4 md:left-6 flex items-center text-gray-600 hover:text-primary-teal transition-colors z-10">
                <ArrowLeft className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                <span className="text-sm md:text-base">Back to Home</span>
            </Link>

            <div className="container mx-auto px-4 sm:px-6">
                <div className="text-center mb-12 md:mb-16 pt-8 md:pt-0">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-slate mb-3 md:mb-4">Contact Us</h1>
                    <p className="text-lg md:text-xl text-gray-600">We&apos;d love to hear from you. Get in touch with us.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
                    {/* Contact Info */}
                    <div className="bg-gray-50 p-6 md:p-8 rounded-2xl order-2 md:order-1">
                        <h2 className="text-xl md:text-2xl font-bold text-neutral-slate mb-6 md:mb-8">Get in Touch</h2>
                        <div className="space-y-6 md:space-y-8">
                            <div className="flex items-start gap-3 md:gap-4">
                                <div className="w-10 h-10 md:w-12 md:h-12 bg-primary-teal/10 rounded-lg flex items-center justify-center text-primary-teal shrink-0">
                                    <Mail className="w-5 h-5 md:w-6 md:h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-neutral-slate mb-1 text-sm md:text-base">Email</h3>
                                    <p className="text-gray-600 text-sm md:text-base">support@swiftfin.com</p>
                                    <p className="text-gray-600 text-sm md:text-base">sales@swiftfin.com</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3 md:gap-4">
                                <div className="w-10 h-10 md:w-12 md:h-12 bg-primary-teal/10 rounded-lg flex items-center justify-center text-primary-teal shrink-0">
                                    <Phone className="w-5 h-5 md:w-6 md:h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-neutral-slate mb-1 text-sm md:text-base">Phone</h3>
                                    <p className="text-gray-600 text-sm md:text-base">+91 98765 43210</p>
                                    <p className="text-gray-600 text-sm md:text-base">Mon-Fri, 9am - 6pm IST</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3 md:gap-4">
                                <div className="w-10 h-10 md:w-12 md:h-12 bg-primary-teal/10 rounded-lg flex items-center justify-center text-primary-teal shrink-0">
                                    <MapPin className="w-5 h-5 md:w-6 md:h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-neutral-slate mb-1 text-sm md:text-base">Office</h3>
                                    <p className="text-gray-600 text-sm md:text-base">
                                        123, Business Park,<br />
                                        Bangalore, India - 560001
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form - Ready for Firebase integration */}
                    <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-gray-100 order-1 md:order-2">
                        <h2 className="text-xl md:text-2xl font-bold text-neutral-slate mb-6 md:mb-8">Send us a Message</h2>

                        <form className="space-y-5 md:space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                    Full Name <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full px-4 py-2.5 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-teal focus:border-transparent outline-none transition-all text-sm md:text-base"
                                    placeholder="John Doe"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                    Email Address <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full px-4 py-2.5 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-teal focus:border-transparent outline-none transition-all text-sm md:text-base"
                                    placeholder="john@example.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                                    Phone Number <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    className="w-full px-4 py-2.5 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-teal focus:border-transparent outline-none transition-all text-sm md:text-base"
                                    placeholder="9876543210"
                                    maxLength={10}
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                                    Message <span className="text-red-500">*</span>
                                </label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    className="w-full px-4 py-2.5 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-teal focus:border-transparent outline-none transition-all resize-none text-sm md:text-base"
                                    placeholder="How can we help you?"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-primary-teal text-white font-bold py-3 md:py-3.5 px-6 rounded-lg hover:bg-opacity-90 transition-all text-sm md:text-base"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
