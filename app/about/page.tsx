import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function About() {
    return (
        <div className="bg-gradient-mesh min-h-screen relative">
            <Link href="/" className="absolute top-6 left-6 z-10 flex items-center text-gray-600 hover:text-primary-teal transition-colors">
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back to Home
            </Link>
            {/* Hero Section */}
            <div className="bg-neutral-slate text-white py-20">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-5xl md:text-6xl font-bold mb-4">About SwiftFin</h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Your trusted companion for managing personal finances with ease and confidence.
                    </p>
                </div>
            </div>

            {/* Mission Section */}
            <div className="py-20 container mx-auto px-6">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-4xl font-bold text-neutral-slate mb-8">Our Mission</h2>
                    <p className="text-lg text-gray-600 leading-relaxed mb-12">
                        At SwiftFin, we believe that everyone deserves simple, powerful tools to take control
                        of their finances. Our mission is to help you track expenses effortlessly, manage EMIs
                        smartly, monitor investments effectively, and make informed financial decisions through
                        personalized insights.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mt-16">
                    <div className="p-6 bg-gray-50 rounded-xl text-center">
                        <div className="w-12 h-12 bg-primary-teal/10 text-primary-teal rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                            1
                        </div>
                        <h3 className="text-xl font-bold text-neutral-slate mb-2">Simplicity</h3>
                        <p className="text-gray-600">Intuitive design that anyone can use, no financial expertise required.</p>
                    </div>
                    <div className="p-6 bg-gray-50 rounded-xl text-center">
                        <div className="w-12 h-12 bg-primary-teal/10 text-primary-teal rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                            2
                        </div>
                        <h3 className="text-xl font-bold text-neutral-slate mb-2">Security</h3>
                        <p className="text-gray-600">Bank-grade encryption keeps your financial data safe and private.</p>
                    </div>
                    <div className="p-6 bg-gray-50 rounded-xl text-center">
                        <div className="w-12 h-12 bg-primary-teal/10 text-primary-teal rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                            3
                        </div>
                        <h3 className="text-xl font-bold text-neutral-slate mb-2">Intelligence</h3>
                        <p className="text-gray-600">Smart insights and tips based on your spending patterns and goals.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
