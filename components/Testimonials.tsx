"use client";

import { motion } from "framer-motion";

const testimonials = [
    {
        quote: "Graphisum transformed our digital presence. The attention to detail is unmatched.",
        author: "Sarah Jenkins",
        role: "CMO, Apex Logistics"
    },
    {
        quote: "A true partner in every sense. They understood our vision better than we did.",
        author: "David Chen",
        role: "Founder, Mono Finance"
    },
    {
        quote: "The best agency experience we've had. Professional, creative, and timely.",
        author: "Elena Rodriguez",
        role: "Director, Orbit Studios"
    }
];

export default function Testimonials() {
    return (
        <section className="py-32 border-t border-white/5 bg-background overflow-hidden">
            <div className="container mx-auto px-6">
                <h2 className="text-sm uppercase tracking-widest opacity-40 mb-20 text-center">Client Words</h2>

                <div className="flex flex-col md:flex-row gap-10 md:gap-20 justify-center items-center">
                    {testimonials.map((t, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="max-w-md text-center"
                        >
                            <p className="text-2xl md:text-3xl font-light italic leading-relaxed mb-8 opacity-90">
                                &quot;{t.quote}&quot;
                            </p>
                            <div>
                                <h4 className="font-bold uppercase tracking-wide">{t.author}</h4>
                                <span className="text-sm opacity-50">{t.role}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
