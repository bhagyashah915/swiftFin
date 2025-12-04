import Link from "next/link";
import { ArrowLeft, Shield, Lock, Server, Eye, FileCheck, AlertTriangle } from "lucide-react";

export default function SecurityPage() {
    const features = [
        {
            icon: <Lock className="w-8 h-8" />,
            title: "256-bit Encryption",
            description: "All data is encrypted using industry-standard AES-256 encryption, the same level used by banks and financial institutions worldwide."
        },
        {
            icon: <Server className="w-8 h-8" />,
            title: "Secure Cloud Storage",
            description: "Your data is stored on secure, redundant servers with automatic backups to prevent any data loss."
        },
        {
            icon: <Eye className="w-8 h-8" />,
            title: "Privacy Protection",
            description: "We never sell or share your personal information with third parties. Your data belongs to you."
        },
        {
            icon: <FileCheck className="w-8 h-8" />,
            title: "Compliance",
            description: "We comply with all major data protection regulations including GDPR and industry best practices."
        },
        {
            icon: <AlertTriangle className="w-8 h-8" />,
            title: "Fraud Detection",
            description: "Advanced monitoring systems detect and prevent unauthorized access to your account."
        },
        {
            icon: <Shield className="w-8 h-8" />,
            title: "Two-Factor Authentication",
            description: "Add an extra layer of security to your account with optional 2FA protection."
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            <div className="bg-neutral-slate text-white py-20">
                <div className="container mx-auto px-6">
                    <Link href="/" className="inline-flex items-center text-gray-300 hover:text-primary-teal transition-colors mb-8">
                        <ArrowLeft className="w-5 h-5 mr-2" />
                        Back to Home
                    </Link>
                    <h1 className="text-5xl font-bold mb-4">Security & Privacy</h1>
                    <p className="text-xl text-gray-300">Your financial data is protected with enterprise-grade security</p>
                </div>
            </div>

            <div className="container mx-auto px-6 py-16">
                <div className="max-w-6xl mx-auto">
                    <div className="mb-16 text-center">
                        <div className="inline-flex items-center gap-2 px-5 py-2 bg-teal-50 text-primary-teal rounded-full mb-6">
                            <Shield className="w-5 h-5" />
                            <span className="font-semibold">Bank-Grade Security</span>
                        </div>
                        <h2 className="text-4xl font-bold text-neutral-slate mb-4">How We Protect Your Data</h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            At SwiftFin, security is our top priority. We employ multiple layers of protection
                            to ensure your financial information remains safe and private.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <div key={index} className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl hover:border-primary-teal transition-all group">
                                <div className="w-16 h-16 bg-teal-50 rounded-xl flex items-center justify-center text-primary-teal mb-4 group-hover:bg-primary-teal group-hover:text-white transition-all">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-bold text-neutral-slate mb-3">{feature.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-16 bg-linear-to-br from-teal-50 to-orange-50 rounded-3xl p-12 text-center">
                        <h3 className="text-3xl font-bold text-neutral-slate mb-4">Questions About Security?</h3>
                        <p className="text-lg text-gray-600 mb-6">
                            Our security team is here to help. Contact us anytime with your concerns.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-block px-8 py-3 bg-primary-teal text-white font-bold rounded-xl hover:bg-opacity-90 transition-colors"
                        >
                            Contact Security Team
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
