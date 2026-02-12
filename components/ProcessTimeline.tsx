"use client";

import { motion } from "framer-motion";

const steps = [
    {
        id: "01",
        title: "Discovery",
        description: "We dive deep into your brand's DNA, understanding your goals, audience, and unique challenges."
    },
    {
        id: "02",
        title: "Strategy",
        description: "We map out a tailored roadmap, defining the creative direction and technical approach."
    },
    {
        id: "03",
        title: "Craft",
        description: "Design and development converge. We build, iterate, and refine every pixel and line of code."
    },
    {
        id: "04",
        title: "Launch",
        description: "We deploy your digital experience to the world, ensuring performance, stability, and impact."
    }
];

export default function ProcessTimeline() {
    return (
        <section className="py-32 bg-background relative overflow-hidden">
            <div className="container mx-auto px-6">
                <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-20 text-[#F0F8FF]">
                    THE <span className="text-[#0a3f2f]">PROCESS</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step, i) => (
                        <motion.div
                            key={step.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2, duration: 0.6 }}
                            className="relative p-8 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm group hover:bg-[#0a3f2f]/20 transition-colors duration-500"
                        >
                            <div className="text-6xl md:text-8xl font-bold opacity-10 mb-6 font-[family-name:var(--font-syne)] group-hover:opacity-30 transition-opacity">
                                {step.id}
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-[#F0F8FF] uppercase tracking-wide">
                                {step.title}
                            </h3>
                            <p className="text-lg opacity-70 leading-relaxed text-[#F0F8FF]">
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
