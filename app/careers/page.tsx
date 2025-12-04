import Link from "next/link";
import { ArrowLeft, MapPin, Briefcase } from "lucide-react";

export default function Careers() {
    const jobs = [
        {
            title: "Senior Full Stack Developer",
            location: "Bangalore, India",
            type: "Full-time",
            department: "Engineering"
        },
        {
            title: "Product Designer",
            location: "Remote",
            type: "Full-time",
            department: "Design"
        },
        {
            title: "Marketing Manager",
            location: "Mumbai, India",
            type: "Full-time",
            department: "Marketing"
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
                    <h1 className="text-5xl font-bold mb-4">Join Our Team</h1>
                    <p className="text-xl text-gray-300">Help us build the future of personal finance</p>
                </div>
            </div>

            <div className="container mx-auto px-6 py-16">
                <div className="max-w-4xl mx-auto">
                    <div className="mb-12 text-center">
                        <h2 className="text-3xl font-bold text-neutral-slate mb-4">Open Positions</h2>
                        <p className="text-gray-600 text-lg">We&apos;re always looking for talented people to join our mission</p>
                    </div>

                    <div className="space-y-6">
                        {jobs.map((job, index) => (
                            <div key={index} className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl hover:border-primary-teal transition-all group">
                                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                                    <div>
                                        <h3 className="text-xl font-bold text-neutral-slate mb-2 group-hover:text-primary-teal transition-colors">
                                            {job.title}
                                        </h3>
                                        <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                                            <div className="flex items-center gap-2">
                                                <MapPin className="w-4 h-4" />
                                                <span>{job.location}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Briefcase className="w-4 h-4" />
                                                <span>{job.type}</span>
                                            </div>
                                            <div className="px-3 py-1 bg-teal-50 text-primary-teal rounded-full text-xs font-semibold">
                                                {job.department}
                                            </div>
                                        </div>
                                    </div>
                                    <button className="px-6 py-2 bg-primary-teal text-white font-semibold rounded-lg hover:bg-opacity-90 transition-colors whitespace-nowrap">
                                        Apply Now
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
