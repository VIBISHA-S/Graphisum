"use client";

import { motion } from "framer-motion";

const team = [
    { name: "ALEX R.", role: "Founder & Visionary" },
    { name: "SARAH K.", role: "Design Lead" },
    { name: "DAVID M.", role: "Tech Lead" },
    { name: "ELENA S.", role: "Strategy Director" },
    { name: "MICHAEL T.", role: "Motion Designer" },
    { name: "JESSICA W.", role: "Project Manager" },
];

export default function TeamGrid() {
    return (
        <section className="py-24 bg-background">
            <div className="container mx-auto px-6">
                <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-20 text-[#F0F8FF]">
                    THE <span className="text-[#0a3f2f]">SQUAD</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
                    {team.map((member, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="group cursor-pointer"
                        >
                            <div className="aspect-[3/4] bg-[#1a1a1a] mb-6 overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-500">
                                {/* Image Placeholder */}
                                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-b from-transparent to-black/50">
                                    <span className="text-[#F0F8FF]/20 text-6xl font-[family-name:var(--font-syne)] font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                        {member.name.charAt(0)}
                                    </span>
                                </div>
                            </div>

                            <h3 className="text-3xl font-bold mb-1 text-[#F0F8FF]">{member.name}</h3>
                            <p className="text-lg opacity-60 uppercase tracking-widest text-[#F0F8FF]">{member.role}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
