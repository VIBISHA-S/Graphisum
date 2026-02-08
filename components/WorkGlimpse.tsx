"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const projects = [
    {
        id: 1,
        title: "Velvet Horizons",
        category: "Branding",
        color: "#1a1a1a", // Placeholder color for image
        year: "2024"
    },
    {
        id: 2,
        title: "Neon Nexus",
        category: "Web Design",
        color: "#2b2b2b",
        year: "2023"
    },
    {
        id: 3,
        title: "Aeris Capital",
        category: "Development",
        color: "#0f0f0f",
        year: "2024"
    },
    {
        id: 4,
        title: "Lumina Art",
        category: "Strategy",
        color: "#222",
        year: "2023"
    }
];

export default function WorkGlimpse() {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-75%"]);

    return (
        <section ref={targetRef} className="relative h-[300vh] bg-background">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                <motion.div style={{ x }} className="flex gap-10 pl-20 pr-20">
                    <div className="flex flex-col justify-center min-w-[400px]">
                        <h2 className="text-6xl md:text-8xl font-bold tracking-tighter leading-none mb-6">
                            SELECTED <br /> WORK
                        </h2>
                        <p className="text-xl max-w-sm opacity-70">
                            A curated selection of our finest digital outputs.
                        </p>
                    </div>

                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="group relative h-[60vh] w-[80vw] md:w-[40vw] flex-shrink-0 overflow-hidden bg-white/5 border border-white/10 transition-all hover:bg-white/10"
                        >
                            {/* Image Placeholder */}
                            <div
                                className="absolute inset-0 z-0 transition-transform duration-700 group-hover:scale-105"
                                style={{ backgroundColor: project.color }}
                            />

                            <div className="absolute inset-0 z-10 p-8 flex flex-col justify-between">
                                <div className="flex justify-between items-start">
                                    <span className="text-sm uppercase tracking-widest border border-white/20 px-3 py-1 rounded-full backdrop-blur-md">
                                        {project.category}
                                    </span>
                                    <span className="text-sm font-mono opacity-50">{project.year}</span>
                                </div>
                                <div>
                                    <h3 className="text-4xl md:text-5xl font-bold uppercase tracking-tight transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                        {project.title}
                                    </h3>
                                </div>
                            </div>
                        </div>
                    ))}

                    <div className="flex flex-col justify-center min-w-[300px] items-center">
                        <a href="/work" className="text-2xl underline decoration-1 underline-offset-8 hover:opacity-70 transition-opacity">
                            View All Projects
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
