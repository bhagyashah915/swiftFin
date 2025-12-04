import { Users, Download, Star, Globe } from "lucide-react";

const stats = [
    {
        icon: <Download className="w-6 h-6" />,
        value: "50M+",
        label: "App Downloads"
    },
    {
        icon: <Users className="w-6 h-6" />,
        value: "5Cr+",
        label: "Merchants Trust Us"
    },
    {
        icon: <Globe className="w-6 h-6" />,
        value: "4000+",
        label: "Cities Covered"
    },
    {
        icon: <Star className="w-6 h-6" />,
        value: "4.5",
        label: "Play Store Rating"
    }
];

export default function WhyUs() {
    return (
        <section id="about" className="py-20 bg-white dark:bg-black">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    <div className="lg:w-1/2">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
                            Why Businesses Love <span className="text-khatabook-blue">Khatabook</span>
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                            We understand the challenges of running a small business. That&apos;s why we built a tool that is simple, secure, and reliable. Whether you are a retailer, wholesaler, or a freelancer, Khatabook adapts to your needs.
                        </p>

                        <div className="grid grid-cols-2 gap-6">
                            {stats.map((stat, index) => (
                                <div key={index} className="p-6 rounded-2xl bg-gray-50 dark:bg-zinc-900 border border-gray-100 dark:border-zinc-800">
                                    <div className="text-khatabook-blue mb-2">{stat.icon}</div>
                                    <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">{stat.value}</div>
                                    <div className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="lg:w-1/2 relative">
                        <div className="absolute inset-0 bg-linear-to-r from-blue-500 to-purple-600 rounded-3xl rotate-3 opacity-10 blur-2xl"></div>
                        <div className="relative bg-gray-900 rounded-3xl p-8 md:p-12 text-white overflow-hidden">
                            <div className="absolute top-0 right-0 p-4 opacity-10">
                                <Users size={200} />
                            </div>

                            <blockquote className="relative z-10">
                                <div className="flex gap-1 mb-6">
                                    {[1, 2, 3, 4, 5].map(i => (
                                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                                    ))}
                                </div>
                                <p className="text-xl md:text-2xl font-medium leading-relaxed mb-6">
                                    &quot;Khatabook has completely transformed how I manage my shop. I no longer worry about lost ledgers or pending payments. The automatic reminders are a lifesaver!&quot;
                                </p>
                                <footer>
                                    <div className="font-bold text-lg">Rajesh Kumar</div>
                                    <div className="text-gray-400">Kirana Store Owner, Mumbai</div>
                                </footer>
                            </blockquote>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
