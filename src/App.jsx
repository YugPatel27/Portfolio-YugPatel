import React, { Suspense, lazy } from 'react';
import HeroSection from '@/components/sections/HeroSection';
import CursorGlow from '@/components/animations/CursorGlow';
import GradientBackground from '@/components/animations/GradientBackground';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ScrollToTop from '@/components/layout/ScrollToTop';

// Lazy load below-the-fold sections with optimized loading
const AboutSection = lazy(() => import('@/components/sections/AboutSection'));
const SkillsSection = lazy(() => import('@/components/sections/SkillsSection'));
const ExperienceSection = lazy(() => import('@/components/sections/ExperienceSection'));
const ProjectsSection = lazy(() => import('@/components/sections/ProjectsSection'));
const ContactSection = lazy(() => import('@/components/sections/ContactSection'));

function SectionFallback() {
  return <div style={{ minHeight: '100vh', background: '#0C0C0C' }} />;
}

export default function App() {
  return (
    <>
      <GradientBackground />
      <CursorGlow />
      <Navbar />
      <ScrollToTop />
      <main className="relative w-full" style={{ overflowX: 'clip', background: 'transparent' }}>
        <HeroSection />
        <Suspense fallback={<SectionFallback />}>
          <AboutSection />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <SkillsSection />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <ExperienceSection />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <ProjectsSection />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <ContactSection />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
