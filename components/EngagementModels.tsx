"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const models = [
    {
        id: 1,
        title: "Creative as a service",
        description: "A subscription-based creative model where you get fixed deliverables every month—presentations, videos, posts, and more—at a predictable rate. Access, assign, and track your usage effortlessly through our platform. With Creative Insurance / Roll-Over, any unused deliverables carry forward, giving you complete value and flexibility.",
        color: "#0a3f2f",
        accent: "#1e5e45"
    },
    {
        id: 2,
        title: "Creative on demand",
        description: "A flexible, pay-as-you-go model designed for businesses with dynamic needs. Scale up or down based on urgency, volume, and timelines, and pay only for what you use. Perfect for those who value creative agility without fixed commitments, with rates tailored to timelines and complexity.",
        color: "#0a3f2f",
        accent: "#1e5e45"
    },
    {
        id: 3,
        title: "ONE",
        description: "Your all-in-one outsourcing partner for design, branding, marketing, and beyond. With Graphisum One, you get a seamless, single-window solution for all creative and business needs—making collaboration, coordination, and execution simple, unified, and impactful.",
        color: "#0a3f2f",
        accent: "#1e5e45"
    }
];

export default function EngagementModels() {
    const [hoveredId, setHoveredId] = useState<number | null>(null);

    // Default to showing the first one expanded if none are hovered (optional), 
    // or just keeping them equal until hover. Let's do equal until hover for maximum "different" feel,
    // or default to expanding the middle one? 
    // Let's go with: if none hovered, all equal width.

    return (
        <section className="py-32 bg-background relative overflow-hidden text-[#F0F8FF]">
            <div className="container mx-auto px-6 relative z-10">
                <div className="mb-20 text-center">
                    <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4">
                        ENGAGEMENT <br /> MODELS
                    </h2>
                    <p className="text-xl opacity-60">
                        Choose how you want to work with us.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row h-auto lg:h-[600px] gap-2">
                    {models.map((model) => {
                        const isHovered = hoveredId === model.id;
                        const isAnyHovered = hoveredId !== null;

                        return (
                            <motion.div
                                key={model.id}
                                onMouseEnter={() => setHoveredId(model.id)}
                                onMouseLeave={() => setHoveredId(null)}
                                initial={false}
                                animate={{
                                    flex: isHovered ? 3 : isAnyHovered ? 1 : 1,
                                    backgroundColor: isHovered ? model.color : "rgba(255, 255, 255, 0.05)"
                                }}
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                                className={`relative rounded-3xl overflow-hidden border border-white/10 cursor-pointer flex flex-col justify-end p-8 lg:p-12 transition-colors duration-500 group backdrop-blur-md ${isHovered ? '' : 'hover:border-white/30'}`}
                                style={{
                                    // Fallback for non-framer browsers or initial state
                                    flex: 1
                                }}
                            >
                                {/* Background Gradient on Hover */}
                                <div
                                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                                    style={{ background: `radial-gradient(circle at bottom right, ${model.accent}, transparent 70%)` }}
                                />

                                {/* Content Container */}
                                <div className="relative z-10 flex flex-col h-full justify-between">

                                    {/* Number / Top Lable */}
                                    <div className="flex justify-between items-start">
                                        <span className="text-sm font-mono opacity-50 border border-white/20 rounded-full px-3 py-1">
                                            0{model.id}
                                        </span>
                                        <motion.div
                                            animate={{ rotate: isHovered ? 45 : 0 }}
                                            className="opacity-50"
                                        >
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M7 17L17 7M17 7H7M17 7V17" />
                                            </svg>
                                        </motion.div>
                                    </div>

                                    {/* Text Content */}
                                    <div className="mt-8 lg:mt-0">
                                        <motion.h3
                                            layout
                                            className={`text-3xl md:text-5xl font-bold uppercase tracking-tight leading-none mb-6 ${isHovered ? 'text-white' : 'text-white/60'}`}
                                        >
                                            {model.title}
                                        </motion.h3>

                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{
                                                opacity: isHovered ? 1 : 0,
                                                height: isHovered ? "auto" : 0,
                                                marginTop: isHovered ? 24 : 0
                                            }}
                                            className="overflow-hidden"
                                        >
                                            <p className="text-lg opacity-80 leading-relaxed max-w-xl">
                                                {model.description}
                                            </p>
                                        </motion.div>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
