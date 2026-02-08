"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const featuredWorks = [
    {
        id: 1,
        title: "Apex Logistics",
        category: "Rebranding",
        description: "A complete identity overhaul for a global logistics giant.",
        color: "#1c2b36"
    },
    {
        id: 2,
        title: "Mono Finance",
        category: "App Design",
        description: "Simplifying complex financial data into a seamless mobile experience.",
        color: "#282828"
    },
    {
        id: 3,
        title: "Orbit Studios",
        category: "Web Development",
        description: "High-performance portfolio site with WebGL interactions.",
        color: "#0f1610"
    }
];

export default function FeaturedWorks() {
    return (
        <section className="py-32 bg-background text-foreground px-4 md:px-10">
            <div className="max-w-[1400px] mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                    <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[0.9]">
                        FEATURED <br /> CASE STUDIES
                    </h2>
                    <Link href="/work" className="rounded-full border border-white/20 px-8 py-3 uppercase tracking-widest text-sm hover:bg-white hover:text-black transition-colors">
                        View All Work
                    </Link>
                </div>

                <div className="flex flex-col gap-32">
                    {featuredWorks.map((work, index) => (
                        <motion.div
                            key={work.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8 }}
                            className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-10 md:gap-20 items-center`}
                        >
                            {/* Image Placeholder Block */}
                            <div
                                className="w-full md:w-3/5 aspect-[16/9] rounded-2xl overflow-hidden relative group"
                                style={{ backgroundColor: work.color }}
                            >
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                            </div>

                            {/* Text Content */}
                            <div className="w-full md:w-2/5 flex flex-col gap-6">
                                <span className="text-sm uppercase tracking-widest opacity-60 border-l border-white/20 pl-4">
                                    {work.category}
                                </span>
                                <h3 className="text-4xl md:text-5xl font-bold uppercase tracking-tight">
                                    {work.title}
                                </h3>
                                <p className="text-lg opacity-70 leading-relaxed">
                                    {work.description}
                                </p>
                                <Link href={`/work/${work.id}`} className="text-lg underline underline-offset-8 decoration-1 hover:opacity-60 transition-opacity w-max">
                                    Read Case Study
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
