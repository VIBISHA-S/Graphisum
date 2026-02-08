"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function ContactPage() {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert("Thank you for your message. We will be in touch shortly.");
        // Handle form submission logic here
    };

    return (
        <div className="min-h-screen pt-32 pb-20 px-4 md:px-10 flex flex-col lg:flex-row items-start justify-center gap-20 relative overflow-hidden bg-background font-[family-name:var(--font-manrope)]">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0a3f2f] opacity-40 blur-[100px] rounded-full -z-10 animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#052e16] opacity-60 blur-[120px] rounded-full -z-10"></div>

            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="flex-1 max-w-2xl"
            >
                <span className="text-sm uppercase tracking-widest text-[#F0F8FF]/60 mb-4 block">Get in Touch</span>
                <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-none mb-8 text-[#F0F8FF]">
                    LET&apos;S START <br /> SOMETHING.
                </h1>
                <p className="text-xl opacity-70 max-w-md leading-relaxed mb-12 text-[#F0F8FF]">
                    Whether you have a groundbreaking idea or need to elevate your brand to the next stratosphere, we are here to listen.
                </p>

                <div className="flex flex-col gap-6 text-[#F0F8FF]">
                    <div>
                        <h3 className="text-sm uppercase tracking-widest opacity-50 mb-2">Email</h3>
                        <a href="mailto:hello@graphisum.com" className="text-2xl hover:opacity-70 transition-opacity">hello@graphisum.com</a>
                    </div>
                    <div>
                        <h3 className="text-sm uppercase tracking-widest opacity-50 mb-2">Socials</h3>
                        <div className="flex gap-6 text-lg">
                            <a href="#" className="hover:underline underline-offset-4 decoration-1">Instagram</a>
                            <a href="#" className="hover:underline underline-offset-4 decoration-1">Twitter</a>
                            <a href="#" className="hover:underline underline-offset-4 decoration-1">LinkedIn</a>
                        </div>
                    </div>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex-1 w-full max-w-xl"
            >
                <form onSubmit={handleSubmit} className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-3xl shadow-2xl">
                    <div className="flex flex-col gap-8">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="name" className="text-sm uppercase tracking-wide opacity-70 ml-2">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formState.name}
                                onChange={handleChange}
                                className="bg-black/20 border border-white/10 rounded-xl h-14 px-6 focus:outline-none focus:border-white/40 transition-colors text-lg placeholder:opacity-30"
                                placeholder="John Doe"
                                required
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="email" className="text-sm uppercase tracking-wide opacity-70 ml-2">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formState.email}
                                onChange={handleChange}
                                className="bg-black/20 border border-white/10 rounded-xl h-14 px-6 focus:outline-none focus:border-white/40 transition-colors text-lg placeholder:opacity-30"
                                placeholder="john@example.com"
                                required
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="message" className="text-sm uppercase tracking-wide opacity-70 ml-2">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formState.message}
                                onChange={handleChange}
                                className="bg-black/20 border border-white/10 rounded-xl p-6 min-h-[150px] focus:outline-none focus:border-white/40 transition-colors text-lg placeholder:opacity-30 resize-none"
                                placeholder="Tell us about your project..."
                                required
                            />
                        </div>

                        <button type="submit" className="mt-4 bg-[#F0F8FF] text-[#052e16] h-16 rounded-full font-bold text-lg uppercase tracking-wider hover:bg-white transition-colors">
                            Send Message
                        </button>
                    </div>
                </form>
            </motion.div>
        </div>
    );
}
