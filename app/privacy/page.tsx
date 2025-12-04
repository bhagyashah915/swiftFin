import Link from "next/link";
import { ArrowLeft, Shield, Lock, Eye, Database, UserCheck, Cookie } from "lucide-react";

export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <div className="bg-neutral-slate text-white py-20">
                <div className="container mx-auto px-6 md:px-12">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-primary-teal hover:text-teal-300 transition-colors mb-6"
                    >
                        <ArrowLeft className="w-5 h-5" />
                        Back to Home
                    </Link>
                    <h1 className="text-5xl md:text-6xl font-bold mb-4">Privacy Policy</h1>
                    <p className="text-gray-300 text-lg">Last updated: December 4, 2024</p>
                </div>
            </div>

            {/* Content */}
            <div className="container mx-auto px-6 md:px-12 py-16 max-w-4xl">
                <div className="prose prose-lg max-w-none">

                    {/* Introduction */}
                    <section className="mb-12">
                        <p className="text-gray-600 leading-relaxed text-lg">
                            At SwiftFin, we take your privacy seriously. This Privacy Policy explains how we
                            collect, use, disclose, and safeguard your information when you use our mobile
                            application and services. Please read this policy carefully to understand our practices
                            regarding your personal data.
                        </p>
                    </section>

                    {/* Quick Overview */}
                    <section className="mb-12 bg-teal-50 p-8 rounded-2xl border border-teal-100">
                        <h2 className="text-2xl font-bold text-neutral-slate mb-6">Privacy at a Glance</h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="flex flex-col items-center text-center">
                                <div className="w-16 h-16 bg-primary-teal rounded-full flex items-center justify-center mb-3">
                                    <Shield className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="font-bold text-neutral-slate mb-2">Secure Storage</h3>
                                <p className="text-sm text-gray-600">Your data is encrypted and securely stored</p>
                            </div>
                            <div className="flex flex-col items-center text-center">
                                <div className="w-16 h-16 bg-primary-teal rounded-full flex items-center justify-center mb-3">
                                    <Lock className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="font-bold text-neutral-slate mb-2">No Selling</h3>
                                <p className="text-sm text-gray-600">We never sell your personal information</p>
                            </div>
                            <div className="flex flex-col items-center text-center">
                                <div className="w-16 h-16 bg-primary-teal rounded-full flex items-center justify-center mb-3">
                                    <UserCheck className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="font-bold text-neutral-slate mb-2">Your Control</h3>
                                <p className="text-sm text-gray-600">You own and control your financial data</p>
                            </div>
                        </div>
                    </section>

                    {/* 1. Information We Collect */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-neutral-slate mb-4">1. Information We Collect</h2>

                        <h3 className="text-xl font-bold text-neutral-slate mb-3 mt-6">1.1 Personal Information</h3>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            When you create an account, we may collect:
                        </p>
                        <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                            <li>Name and email address</li>
                            <li>Phone number (optional)</li>
                            <li>Profile picture (optional)</li>
                            <li>Date of birth (for age verification)</li>
                        </ul>

                        <h3 className="text-xl font-bold text-neutral-slate mb-3 mt-6">1.2 Financial Information</h3>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            To provide our services, we collect:
                        </p>
                        <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                            <li>Expense and income transactions you manually enter</li>
                            <li>EMI and loan details</li>
                            <li>Investment portfolio information</li>
                            <li>Budget and financial goals</li>
                            <li>Receipt images and extracted data</li>
                        </ul>
                        <p className="text-gray-600 leading-relaxed mt-4">
                            <strong>Important:</strong> We do not store your bank account credentials or passwords.
                            We do not have direct access to your bank accounts.
                        </p>

                        <h3 className="text-xl font-bold text-neutral-slate mb-3 mt-6">1.3 Usage Information</h3>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            We automatically collect certain information about your device and how you interact
                            with SwiftFin:
                        </p>
                        <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                            <li>Device type, operating system, and version</li>
                            <li>IP address and general location (city/country level)</li>
                            <li>App usage patterns and feature interactions</li>
                            <li>Error logs and crash reports</li>
                            <li>Performance metrics</li>
                        </ul>
                    </section>

                    {/* 2. How We Use Your Information */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-neutral-slate mb-4">2. How We Use Your Information</h2>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            We use the collected information for the following purposes:
                        </p>
                        <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                            <li><strong>Service Delivery:</strong> To provide, maintain, and improve SwiftFin's features</li>
                            <li><strong>Personalization:</strong> To generate personalized financial insights and recommendations</li>
                            <li><strong>Analytics:</strong> To understand usage patterns and improve user experience</li>
                            <li><strong>Communication:</strong> To send important updates, notifications, and support messages</li>
                            <li><strong>Security:</strong> To detect and prevent fraud, abuse, and security incidents</li>
                            <li><strong>Compliance:</strong> To comply with legal obligations and enforce our terms</li>
                            <li><strong>Development:</strong> To develop new features and services</li>
                        </ul>
                    </section>

                    {/* 3. Data Security */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-neutral-slate mb-4">3. Data Security</h2>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            We implement industry-standard security measures to protect your information:
                        </p>
                        <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                            <li><strong>Encryption:</strong> All data is encrypted in transit (TLS/SSL) and at rest (AES-256)</li>
                            <li><strong>Access Controls:</strong> Strict access controls limit who can view your data</li>
                            <li><strong>Regular Audits:</strong> We conduct regular security audits and vulnerability assessments</li>
                            <li><strong>Secure Infrastructure:</strong> Data is stored on secure, certified cloud servers</li>
                            <li><strong>Authentication:</strong> Multi-factor authentication options for account protection</li>
                        </ul>
                        <p className="text-gray-600 leading-relaxed mt-4">
                            While we strive to protect your information, no method of transmission over the internet
                            is 100% secure. We cannot guarantee absolute security.
                        </p>
                    </section>

                    {/* 4. Data Sharing and Disclosure */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-neutral-slate mb-4">4. Data Sharing and Disclosure</h2>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            We do not sell your personal information. We may share your information only in the
                            following limited circumstances:
                        </p>

                        <h3 className="text-xl font-bold text-neutral-slate mb-3 mt-6">4.1 Service Providers</h3>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            We may share data with trusted third-party service providers who help us operate SwiftFin:
                        </p>
                        <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                            <li>Cloud hosting providers (AWS, Google Cloud)</li>
                            <li>Analytics services (Google Analytics, Firebase)</li>
                            <li>Customer support tools</li>
                            <li>Payment processors (for premium subscriptions)</li>
                        </ul>
                        <p className="text-gray-600 leading-relaxed mt-4">
                            These providers are contractually obligated to protect your data and use it only for
                            the purposes we specify.
                        </p>

                        <h3 className="text-xl font-bold text-neutral-slate mb-3 mt-6">4.2 Legal Requirements</h3>
                        <p className="text-gray-600 leading-relaxed">
                            We may disclose your information if required by law, court order, or government request,
                            or to protect our rights, property, or safety.
                        </p>

                        <h3 className="text-xl font-bold text-neutral-slate mb-3 mt-6">4.3 Business Transfers</h3>
                        <p className="text-gray-600 leading-relaxed">
                            In the event of a merger, acquisition, or sale of assets, your information may be
                            transferred to the acquiring entity.
                        </p>
                    </section>

                    {/* 5. Your Rights and Choices */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-neutral-slate mb-4">5. Your Rights and Choices</h2>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            You have the following rights regarding your personal information:
                        </p>
                        <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                            <li><strong>Access:</strong> Request a copy of the personal data we hold about you</li>
                            <li><strong>Correction:</strong> Update or correct inaccurate information</li>
                            <li><strong>Deletion:</strong> Request deletion of your account and associated data</li>
                            <li><strong>Export:</strong> Download your financial data in a portable format (CSV/PDF)</li>
                            <li><strong>Opt-out:</strong> Unsubscribe from marketing communications</li>
                            <li><strong>Restriction:</strong> Request limitation of processing in certain circumstances</li>
                        </ul>
                        <p className="text-gray-600 leading-relaxed mt-4">
                            To exercise these rights, please contact us at privacy@swiftfin.com or through the
                            app settings.
                        </p>
                    </section>

                    {/* 6. Data Retention */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-neutral-slate mb-4">6. Data Retention</h2>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            We retain your information for as long as necessary to provide our services and comply
                            with legal obligations:
                        </p>
                        <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                            <li><strong>Active Accounts:</strong> Data is retained while your account is active</li>
                            <li><strong>Deleted Accounts:</strong> Most data is deleted within 30 days of account deletion</li>
                            <li><strong>Legal Requirements:</strong> Some data may be retained longer for legal/compliance purposes</li>
                            <li><strong>Backups:</strong> Backup copies may persist for up to 90 days</li>
                        </ul>
                    </section>

                    {/* 7. Cookies and Tracking */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-neutral-slate mb-4">7. Cookies and Tracking Technologies</h2>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            We use cookies and similar technologies to enhance your experience:
                        </p>
                        <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                            <li><strong>Essential Cookies:</strong> Required for basic app functionality</li>
                            <li><strong>Analytics Cookies:</strong> Help us understand how you use SwiftFin</li>
                            <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
                        </ul>
                        <p className="text-gray-600 leading-relaxed mt-4">
                            You can control cookie preferences through your device settings, though this may affect
                            app functionality.
                        </p>
                    </section>

                    {/* 8. Children's Privacy */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-neutral-slate mb-4">8. Children's Privacy</h2>
                        <p className="text-gray-600 leading-relaxed">
                            SwiftFin is not intended for children under 13 years of age. We do not knowingly collect
                            personal information from children. If you believe we have collected information from a
                            child, please contact us immediately, and we will delete it.
                        </p>
                    </section>

                    {/* 9. International Users */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-neutral-slate mb-4">9. International Data Transfers</h2>
                        <p className="text-gray-600 leading-relaxed">
                            Your information may be transferred to and processed in countries other than your own.
                            We ensure appropriate safeguards are in place to protect your data in accordance with
                            this Privacy Policy and applicable laws.
                        </p>
                    </section>

                    {/* 10. Changes to Privacy Policy */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-neutral-slate mb-4">10. Changes to This Privacy Policy</h2>
                        <p className="text-gray-600 leading-relaxed">
                            We may update this Privacy Policy from time to time. We will notify you of material
                            changes by posting the new policy on this page and updating the "Last updated" date.
                            We encourage you to review this policy periodically.
                        </p>
                    </section>

                    {/* Contact */}
                    <section className="mb-12 bg-gray-50 p-8 rounded-2xl">
                        <h2 className="text-3xl font-bold text-neutral-slate mb-4">Contact Us</h2>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            If you have any questions, concerns, or requests regarding this Privacy Policy or your
                            personal data, please contact us:
                        </p>
                        <ul className="text-gray-600 space-y-2">
                            <li><strong>Privacy Email:</strong> privacy@swiftfin.com</li>
                            <li><strong>Support Email:</strong> support@swiftfin.com</li>
                            <li><strong>Phone:</strong> +91 98765 43210</li>                        </ul>
                    </section>

                </div>
            </div>
        </div>
    );
}
