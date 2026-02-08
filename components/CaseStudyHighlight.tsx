"use client";

import { motion } from "framer-motion";

export default function CaseStudyHighlight() {
    return (
        <section className="py-32 bg-[#052e16] text-[#F0F8FF] relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#0a3f2f] rounded-full blur-[120px] opacity-50 -z-10 translate-x-1/2 -translate-y-1/2"></div>

            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-20 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="w-full lg:w-1/2"
                    >
                        <span className="text-sm uppercase tracking-widest opacity-60 mb-6 block border-l-2 border-[#F0F8FF] pl-4">Spotlight Case Study</span>
                        <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 leading-none">
                            NEON <br /> NEXUS
                        </h2>

                        <div className="flex flex-col gap-8 text-lg opacity-80 leading-relaxed mb-10">
                            <p>
                                <strong className="text-white">The Challenge:</strong> Neon Nexus needed a digital identity that could cut through the noise of the saturated fintech market. They wanted to look less like a bank and more like a lifestyle brand.
                            </p>
                            <p>
                                <strong className="text-white">The Solution:</strong> We developed a &quot;Cyber-Organic&quot; design language, mixing fluid organic shapes with sharp digital neon accents. The result is a platform that feels alive.
                            </p>
                        </div>

                        <div className="flex gap-10">
                            <div>
                                <span className="block text-4xl font-bold mb-1">400%</span>
                                <span className="text-sm uppercase tracking-widest opacity-50">User Growth</span>
                            </div>
                            <div>
                                <span className="block text-4xl font-bold mb-1">2.5s</span>
                                <span className="text-sm uppercase tracking-widest opacity-50">vLoad Time</span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="w-full lg:w-1/2 aspect-square relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-sm"
                    >
                        {/* Visual Placeholder for Case Study Image */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] to-[#000]" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-9xl font-bold text-white/5 uppercase tracking-tighter">NEXUS</span>
                        </div>

                        {/* Floating UI Elements Mockup */}
                        <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-[#052e16]/80 backdrop-blur-xl border border-white/20 rounded-xl p-6 shadow-2xl transform -rotate-6 hover:rotate-0 transition-transform duration-700">
                            <div className="w-12 h-12 rounded-full bg-white/20 mb-4"></div>
                            <div className="h-4 w-3/4 bg-white/20 rounded-full mb-2"></div>
                            <div className="h-4 w-1/2 bg-white/20 rounded-full"></div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
