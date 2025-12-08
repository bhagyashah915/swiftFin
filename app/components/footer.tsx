import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-gray-100 text-neutral-slate pt-20 md:pt-28 pb-10 md:pb-14">
            <div className="container mx-auto px-4 sm:px-6 md:px-12">

                {/* Top Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12 md:mb-16">

                    {/* Logo + Description */}
                    <div className="col-span-1">
                        <div className="flex items-center gap-2 mb-4 md:mb-6">
                            <Image
                                src="/images/logo.png"
                                alt="SwiftFin Logo"
                                width={40}
                                height={40}
                                className="w-10 h-10 object-contain"
                            />
                            <h2 className="font-bold text-2xl">SwiftFin</h2>
                        </div>

                        <p className="text-gray-600 mb-4 md:mb-6 leading-relaxed text-sm sm:text-base">
                            Empowering millions of small businesses with digital financial tools.
                        </p>

                        <div className="flex gap-3 md:gap-4">
                            <a href="#" className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-primary-teal hover:text-white transition-colors">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-primary-teal hover:text-white transition-colors">
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-primary-teal hover:text-white transition-colors">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-primary-teal hover:text-white transition-colors">
                                <Linkedin className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="font-bold text-base md:text-lg mb-4 md:mb-6">Company</h3>
                        <ul className="space-y-3 md:space-y-4 text-gray-600 text-sm sm:text-base">
                            <li><Link href="/about" className="hover:text-primary-teal transition-colors">About Us</Link></li>
                            <li><Link href="/careers" className="hover:text-primary-teal transition-colors">Careers</Link></li>
                            <li><Link href="/blog" className="hover:text-primary-teal transition-colors">Blog</Link></li>
                            <li><Link href="/contact" className="hover:text-primary-teal transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Product */}
                    <div>
                        <h3 className="font-bold text-base md:text-lg mb-4 md:mb-6">Product</h3>
                        <ul className="space-y-3 md:space-y-4 text-gray-600 text-sm sm:text-base">
                            <li><Link href="/#features" className="hover:text-primary-teal transition-colors">Features</Link></li>
                            <li><Link href="/who-is-it-for" className="hover:text-primary-teal transition-colors">Who Is It For</Link></li>
                            <li><Link href="/security" className="hover:text-primary-teal transition-colors">Security</Link></li>
                            <li><Link href="/faq-page" className="hover:text-primary-teal transition-colors">FAQ</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="font-bold text-base md:text-lg mb-4 md:mb-6">Contact</h3>
                        <ul className="space-y-3 md:space-y-4 text-gray-600 text-sm sm:text-base">
                            <li>support@swiftfin.com</li>
                            <li>+91 98765 43210</li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-300 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-700 text-xs sm:text-sm">
                    <p>© {new Date().getFullYear()} SwiftFin. All rights reserved.</p>

                    <div className="flex gap-4 md:gap-6">
                        <Link href="/privacy" className="hover:text-primary-teal transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-primary-teal transition-colors">Terms of Service</Link>
                    </div>
                </div>

            </div>
        </footer>
    );
}
