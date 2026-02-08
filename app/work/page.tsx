"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const works = [
    {
        id: 1,
        title: "Velvet Horizons",
        category: "Branding",
        color: "#2a2a2a",
        size: "large"
    },
    {
        id: 2,
        title: "Neon Nexus",
        category: "Web Design",
        color: "#1f1f1f",
        size: "small"
    },
    {
        id: 3,
        title: "Aeris Capital",
        category: "Development",
        color: "#151515",
        size: "medium"
    },
    {
        id: 4,
        title: "Lumina Art",
        category: "Strategy",
        color: "#252525",
        size: "large"
    },
    {
        id: 5,
        title: "Echo Valley",
        category: "Identity",
        color: "#303030",
        size: "medium"
    },
    {
        id: 6,
        title: "Prism Core",
        category: "Digital",
        color: "#101010",
        size: "small"
    }
];

export default function WorkPage() {
    return (
        <div className="pt-32 pb-20 px-4 md:px-10 min-h-screen bg-background text-foreground">
            <div className="max-w-[1600px] mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-20"
                >
                    <h1 className="text-6xl md:text-9xl font-bold tracking-tighter mix-blend-overlay">
                        SELECTED <br /> WORKS
                    </h1>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
                    {works.map((work, index) => (
                        <motion.div
                            key={work.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`group relative overflow-hidden rounded-md bg-[#ffffff05] border border-white/5 hover:border-white/20 transition-colors ${work.size === 'large' ? 'lg:col-span-8 aspect-[16/9]' :
                                    work.size === 'medium' ? 'lg:col-span-6 aspect-square' :
                                        'lg:col-span-4 aspect-[3/4]'
                                }`}
                        >
                            {/* Clickable Area */}
                            <Link href={`/work/${work.id}`} className="absolute inset-0 z-20"></Link>

                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60 group-hover:opacity-40 transition-opacity z-10"></div>

                            {/* Content */}
                            <div className="absolute bottom-0 left-0 p-8 z-10 w-full transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                                <span className="text-xs font-mono uppercase tracking-widest bg-white/10 px-3 py-1 rounded-full backdrop-blur-md mb-4 inline-block">
                                    {work.category}
                                </span>
                                <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight group-hover:text-white transition-colors">
                                    {work.title}
                                </h2>
                            </div>

                            {/* Hover Effect Background */}
                            <div
                                className="absolute inset-0 -z-0 transition-transform duration-700 group-hover:scale-110 opacity-50"
                                style={{ backgroundColor: work.color }}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
