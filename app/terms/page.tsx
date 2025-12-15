import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function TermsOfService() {
    return (
        <div className="min-h-screen bg-white font-['Montserrat']">
            {/* Header with Background Image */}
            <div className="relative bg-neutral-slate text-white py-20 overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 opacity-25">
                    <img
                        src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1920&q=80"
                        alt="Terms of Service Background"
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="container relative z-10 mx-auto px-6 md:px-12">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-primary-teal hover:text-teal-300 transition-colors mb-6 font-['Montserrat']"
                    >
                        <ArrowLeft className="w-5 h-5" />
                        Back to Home
                    </Link>
                    <h1 className="text-5xl md:text-6xl font-bold mb-4 font-['Montserrat']">Terms of Service</h1>
                    <p className="text-gray-300 text-lg font-['Montserrat']">Last updated: December 4, 2024</p>
                </div>
            </div>

            {/* Content */}
            <div className="container mx-auto px-6 md:px-12 py-16 max-w-4xl">
                <div className="prose prose-lg max-w-none">

                    {/* Introduction */}
                    <section className="mb-12">
                        <p className="text-gray-600 leading-relaxed text-lg">
                            Welcome to SwiftFin. By accessing or using our mobile application and services,
                            you agree to be bound by these Terms of Service. Please read them carefully before
                            using our platform.
                        </p>
                    </section>

                    {/* 1. Acceptance of Terms */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-neutral-slate mb-4">1. Acceptance of Terms</h2>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            By creating an account or using SwiftFin, you acknowledge that you have read,
                            understood, and agree to be bound by these Terms of Service and our Privacy Policy.
                            If you do not agree to these terms, please do not use our services.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            We reserve the right to modify these terms at any time. Continued use of SwiftFin
                            after changes constitutes acceptance of the modified terms.
                        </p>
                    </section>

                    {/* 2. Service Description */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-neutral-slate mb-4">2. Service Description</h2>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            SwiftFin is a personal finance management application that provides:
                        </p>
                        <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                            <li>Expense tracking and categorization</li>
                            <li>EMI and loan management</li>
                            <li>Investment portfolio tracking</li>
                            <li>Financial reports and analytics</li>
                            <li>Personalized financial insights and tips</li>
                            <li>Receipt scanning and automatic data extraction</li>
                        </ul>
                        <p className="text-gray-600 leading-relaxed mt-4">
                            We strive to provide accurate and reliable services, but we do not guarantee
                            uninterrupted or error-free operation of the application.
                        </p>
                    </section>

                    {/* 3. User Responsibilities */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-neutral-slate mb-4">3. User Responsibilities</h2>
                        <p className="text-gray-600 leading-relaxed mb-4">As a user of SwiftFin, you agree to:</p>
                        <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                            <li>Provide accurate and complete information when creating your account</li>
                            <li>Maintain the security and confidentiality of your account credentials</li>
                            <li>Use the service only for lawful purposes</li>
                            <li>Not attempt to gain unauthorized access to our systems or other users' accounts</li>
                            <li>Not use the service to transmit malicious code or engage in harmful activities</li>
                            <li>Comply with all applicable local, state, and national laws</li>
                        </ul>
                        <p className="text-gray-600 leading-relaxed mt-4">
                            You are responsible for all activities that occur under your account. Please notify
                            us immediately of any unauthorized use.
                        </p>
                    </section>

                    {/* 4. Intellectual Property */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-neutral-slate mb-4">4. Intellectual Property Rights</h2>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            All content, features, and functionality of SwiftFin, including but not limited to
                            text, graphics, logos, icons, images, audio clips, and software, are the exclusive
                            property of SwiftFin and are protected by international copyright, trademark, and
                            other intellectual property laws.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            You may not reproduce, distribute, modify, create derivative works of, publicly
                            display, or exploit any of our content without our express written permission.
                        </p>
                    </section>

                    {/* 5. Data and Privacy */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-neutral-slate mb-4">5. Data and Privacy</h2>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            Your privacy is important to us. Our collection and use of personal information is
                            governed by our Privacy Policy. By using SwiftFin, you consent to our collection,
                            use, and sharing of your information as described in the Privacy Policy.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            You retain ownership of all financial data you input into SwiftFin. We use this data
                            solely to provide and improve our services to you.
                        </p>
                    </section>

                    {/* 6. Subscription and Payments */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-neutral-slate mb-4">6. Subscription and Payments</h2>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            SwiftFin offers both free and premium subscription plans:
                        </p>
                        <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                            <li><strong>Basic Plan:</strong> Free forever with core features</li>
                            <li><strong>Pro Plan:</strong> ₹299/month with advanced features</li>
                            <li><strong>Enterprise Plan:</strong> Custom pricing for organizations</li>
                        </ul>
                        <p className="text-gray-600 leading-relaxed mt-4">
                            Premium subscriptions are billed on a recurring basis. You may cancel your subscription
                            at any time, but no refunds will be provided for partial billing periods.
                        </p>
                    </section>

                    {/* 7. Limitation of Liability */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-neutral-slate mb-4">7. Limitation of Liability</h2>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            SwiftFin is provided "as is" and "as available" without warranties of any kind, either
                            express or implied. We do not warrant that the service will be uninterrupted, secure,
                            or error-free.
                        </p>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            To the maximum extent permitted by law, SwiftFin shall not be liable for any indirect,
                            incidental, special, consequential, or punitive damages, including but not limited to
                            loss of profits, data, or other intangible losses resulting from:
                        </p>
                        <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                            <li>Your use or inability to use the service</li>
                            <li>Unauthorized access to your data or account</li>
                            <li>Errors or omissions in the service</li>
                            <li>Any financial decisions made based on information from SwiftFin</li>
                        </ul>
                    </section>

                    {/* 8. Financial Disclaimer */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-neutral-slate mb-4">8. Financial Disclaimer</h2>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            SwiftFin provides tools and insights for personal finance management but does not
                            provide financial, investment, or tax advice. The information and recommendations
                            provided are for informational purposes only.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            You should consult with qualified financial advisors before making any financial
                            decisions. We are not responsible for any financial losses incurred based on
                            information or suggestions from our application.
                        </p>
                    </section>

                    {/* 9. Termination */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-neutral-slate mb-4">9. Termination</h2>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            We reserve the right to suspend or terminate your account at any time, with or without
                            notice, for any reason, including but not limited to:
                        </p>
                        <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                            <li>Violation of these Terms of Service</li>
                            <li>Fraudulent or illegal activity</li>
                            <li>Extended periods of inactivity</li>
                            <li>Requests by law enforcement or government agencies</li>
                        </ul>
                        <p className="text-gray-600 leading-relaxed mt-4">
                            Upon termination, your right to use SwiftFin will immediately cease. You may request
                            a copy of your data within 30 days of termination.
                        </p>
                    </section>

                    {/* 10. Governing Law */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-neutral-slate mb-4">10. Governing Law</h2>
                        <p className="text-gray-600 leading-relaxed">
                            These Terms of Service shall be governed by and construed in accordance with the laws
                            of India. Any disputes arising from these terms or your use of SwiftFin shall be
                            subject to the exclusive jurisdiction of the courts in Mumbai, India.
                        </p>
                    </section>

                    {/* 11. Changes to Terms */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-neutral-slate mb-4">11. Changes to Terms</h2>
                        <p className="text-gray-600 leading-relaxed">
                            We may update these Terms of Service from time to time. We will notify you of any
                            material changes by posting the new terms on this page and updating the "Last updated"
                            date. Your continued use of SwiftFin after such changes constitutes acceptance of the
                            new terms.
                        </p>
                    </section>

                    {/* Contact */}
                    <section className="mb-12 bg-gray-50 p-8 rounded-2xl">
                        <h2 className="text-3xl font-bold text-neutral-slate mb-4">Contact Us</h2>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            If you have any questions about these Terms of Service, please contact us:
                        </p>
                        <ul className="text-gray-600 space-y-2">
                            <li><strong>Email:</strong> support@swiftfin.com</li>
                            <li><strong>Phone:</strong> +91 98765 43210</li>

                        </ul>
                    </section>

                </div>
            </div>
        </div>
    );
}
