"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import WorkGlimpse from "@/components/WorkGlimpse";
import ServicesMarquee from "@/components/ServicesMarquee";
import TrustedCompanies from "@/components/TrustedCompanies";
import FeaturedWorks from "@/components/FeaturedWorks";
import EngagementModels from "@/components/EngagementModels";
import Testimonials from "@/components/Testimonials";
import CaseStudyHighlight from "@/components/CaseStudyHighlight";
import AboutCEO from "@/components/AboutCEO";
import BookingSection from "@/components/BookingSection";
import VideoPreloader from "@/components/VideoPreloader";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative isolate flex flex-col items-center justify-center font-[family-name:var(--font-manrope)] bg-background">
      <AnimatePresence mode="wait">
        {isLoading && (
          <VideoPreloader key="preloader" onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {!isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-full"
        >
          {/* Hero Section */}
          <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">
            {/* ... keeping existing hero content ... */}
            <div className="z-10 text-center px-4">
              <h1 className="text-[15vw] leading-[0.8] font-bold tracking-tighter mix-blend-difference font-[family-name:var(--font-syne)] text-[#F0F8FF]">
                GRAPHISUM.
              </h1>
              <p className="mt-8 text-xl md:text-2xl font-light tracking-widest opacity-80 uppercase text-[#F0F8FF]">
                Digital Experiences That Matter
              </p>

              <div className="mt-12 flex flex-col md:flex-row gap-6 justify-center">
                <button className="px-10 py-4 bg-[#F0F8FF] text-[#052e16] rounded-full font-bold uppercase tracking-wider hover:scale-105 transition-transform">
                  Explore Work
                </button>
                <button className="px-10 py-4 border border-[#F0F8FF]/30 text-[#F0F8FF] rounded-full font-bold uppercase tracking-wider backdrop-blur-sm hover:bg-[#F0F8FF]/10 transition-colors">
                  Contact Us
                </button>
              </div>
            </div>

            {/* Background elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#0A3F2F] rounded-full blur-[120px] opacity-40 -z-10"></div>
          </section>

          <TrustedCompanies />

          <WorkGlimpse />
          <FeaturedWorks />
          <EngagementModels />
          <Testimonials />
          <ServicesMarquee />
          <CaseStudyHighlight />
          <AboutCEO />
          <BookingSection />
        </motion.div>
      )}
    </div>
  );
}
