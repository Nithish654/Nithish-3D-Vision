import { useState, useEffect, Suspense, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { AnimatePresence } from 'framer-motion';

import { Loader } from './components/Loader';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { DigitalExperience } from './components/canvas/DigitalExperience';
import { DigitalControlDock } from './components/canvas/DigitalControlDock';
import { VISUAL_PRESETS, VisualPreset } from './components/canvas/DigitalMonolith';

import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills';
import { Experience } from './components/sections/Experience';
import { Projects } from './components/sections/Projects';
import { Certificates } from './components/sections/Certificates';
import { Resume } from './components/sections/Resume';
import { Contact } from './components/sections/Contact';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('home');

  // Digital 3D Environment Controls
  const [preset, setPreset] = useState<VisualPreset>(VISUAL_PRESETS[0]);
  const [streamEnabled, setStreamEnabled] = useState(true);
  const [autoRotate, setAutoRotate] = useState(true);

  // Software WebGL detection guard
  const isSoftwareGl = useRef(false);

  useEffect(() => {
    try {
      const gl = document.createElement('canvas').getContext('webgl2');
      if (gl) {
        const ext = gl.getExtension('WEBGL_debug_renderer_info');
        const param = ext ? ext.UNMASKED_RENDERER_WEBGL : gl.RENDERER;
        const gpu = String(gl.getParameter(param));
        gl.getExtension('WEBGL_lose_context')?.loseContext();
        isSoftwareGl.current = /SwiftShader|llvmpipe|softpipe|Software|Basic Render/i.test(gpu);
      } else {
        isSoftwareGl.current = true;
      }
    } catch {
      isSoftwareGl.current = true;
    }
  }, []);

  // Track window scroll progress and determine active section for cinematic camera choreography
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = Math.min(Math.max(window.scrollY / totalHeight, 0), 1);
        setScrollProgress(progress);
      }

      // Check active section
      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'certificates', 'resume', 'contact'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.45 && rect.bottom >= window.innerHeight * 0.1) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#06080E] text-white selection:bg-[#00E5FF]/30 selection:text-white">
      {/* Percentage-Based Asset Loading Screen */}
      <AnimatePresence>
        {loading && <Loader key="loader" onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {/* Persistent Top Navigation (Desktop) & Full-Screen Drawer (Mobile) */}
      <Navbar activeSection={activeSection} />

      {/* FIXED 3D DIGITAL ENVIRONMENT CANVAS */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <Suspense fallback={null}>
          <Canvas
            camera={{ position: [4.6, 1.4, 5.2], fov: 45 }}
            dpr={isSoftwareGl.current ? 1 : [1, 2]}
            gl={{
              antialias: !isSoftwareGl.current,
              powerPreference: 'high-performance',
              alpha: true,
            }}
            shadows={!isSoftwareGl.current}
          >
            {/* Color Pipeline & Studio Environment */}
            <color attach="background" args={['#06080E']} />
            <fog attach="fog" args={['#06080E', 12, 32]} />

            {/* Procedural 3D Digital Monolith & Studio Caustic Lighting */}
            <DigitalExperience
              scrollProgress={scrollProgress}
              preset={preset}
              streamEnabled={streamEnabled}
              autoRotate={autoRotate}
              activeSection={activeSection}
            />
          </Canvas>
        </Suspense>
      </div>

      {/* SEMANTIC FLOATING GLASSMORPHISM DOM SECTIONS */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certificates />
        <Resume />
        <Contact />
      </main>

      {/* SLEEK COLLAPSIBLE DIGITAL ENVIRONMENT CONTROLS DOCK */}
      <DigitalControlDock
        preset={preset}
        setPreset={setPreset}
        streamEnabled={streamEnabled}
        setStreamEnabled={setStreamEnabled}
        autoRotate={autoRotate}
        setAutoRotate={setAutoRotate}
      />

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
