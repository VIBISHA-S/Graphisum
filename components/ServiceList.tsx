"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const services = [
    { id: 1, title: "BRAND IDENTITY", description: "Logos, Typography, Color Systems", image: "/placeholder-brand.jpg" },
    { id: 2, title: "WEB DESIGN", description: "UI/UX, Interactive Prototypes", image: "/placeholder-web.jpg" },
    { id: 3, title: "DEVELOPMENT", description: "Next.js, React, Creative Coding", image: "/placeholder-dev.jpg" },
    { id: 4, title: "MOTION", description: "2D/3D Animation, Micro-interactions", image: "/placeholder-motion.jpg" },
    { id: 5, title: "STRATEGY", description: "Market Analysis, Positioning", image: "/placeholder-strategy.jpg" },
];

export default function ServiceList() {
    const [hoveredService, setHoveredService] = useState<number | null>(null);

    return (
        <section className="py-24 bg-background relative z-10">
            <div className="container mx-auto px-6">
                <div className="flex flex-col">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            className="group relative border-b border-white/10 py-12 cursor-pointer transition-colors hover:bg-white/5"
                            onMouseEnter={() => setHoveredService(service.id)}
                            onMouseLeave={() => setHoveredService(null)}
                        >
                            <div className="flex flex-col md:flex-row md:items-center justify-between relative z-20">
                                <h3 className="text-4xl md:text-7xl font-bold tracking-tighter text-[#F0F8FF] group-hover:translate-x-4 transition-transform duration-500">
                                    {service.title}
                                </h3>
                                <p className="text-xl md:text-2xl opacity-60 mt-4 md:mt-0 font-[family-name:var(--font-manrope)] group-hover:-translate-x-4 transition-transform duration-500">
                                    {service.description}
                                </p>
                            </div>

                            {/* Hover Image Reveal (Absolute positioned, following cursor or fixed in center?) 
                   Let's do a fixed center reveal or just a background fade for simple elegance 
                   as we don't have real images yet. Using a gradient/color burst for now. */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{
                                    opacity: hoveredService === service.id ? 1 : 0,
                                    scale: hoveredService === service.id ? 1 : 0.8
                                }}
                                transition={{ duration: 0.4 }}
                                className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-r from-[#0a3f2f]/20 to-transparent opacity-0 mix-blend-screen"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
