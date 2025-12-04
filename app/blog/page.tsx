import Link from "next/link";
import { ArrowLeft, Calendar, User } from "lucide-react";

export default function Blog() {
    const posts = [
        {
            title: "5 Simple Ways to Track Your Daily Expenses",
            excerpt: "Learn effective strategies to monitor your spending and stay within budget.",
            date: "Dec 1, 2025",
            author: "Sarah Johnson",
            category: "Finance Tips"
        },
        {
            title: "Understanding EMI: A Complete Guide",
            excerpt: "Everything you need to know about managing your loans and EMI payments.",
            date: "Nov 28, 2025",
            author: "Raj Kumar",
            category: "Education"
        },
        {
            title: "Investment Basics for Beginners",
            excerpt: "Start your investment journey with these fundamental principles and tips.",
            date: "Nov 25, 2025",
            author: "Priya Sharma",
            category: "Investing"
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
                    <h1 className="text-5xl font-bold mb-4">SwiftFin Blog</h1>
                    <p className="text-xl text-gray-300">Financial tips, guides, and insights</p>
                </div>
            </div>

            <div className="container mx-auto px-6 py-16">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map((post, index) => (
                        <div key={index} className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl hover:border-primary-teal transition-all group">
                            <div className="h-48 bg-linear-to-br from-teal-100 to-orange-100"></div>
                            <div className="p-6">
                                <div className="text-xs font-semibold text-primary-teal mb-2">{post.category}</div>
                                <h3 className="text-xl font-bold text-neutral-slate mb-3 group-hover:text-primary-teal transition-colors">
                                    {post.title}
                                </h3>
                                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                                <div className="flex items-center justify-between text-sm text-gray-500">
                                    <div className="flex items-center gap-2">
                                        <User className="w-4 h-4" />
                                        <span>{post.author}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Calendar className="w-4 h-4" />
                                        <span>{post.date}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
