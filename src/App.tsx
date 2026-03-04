import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Star,
  Moon,
  Home,
  MessageSquare,
  Info,
  ChevronDown,
  Sparkles,
  Mail,
  Facebook,
  Linkedin,
  ExternalLink,
  Quote
} from 'lucide-react';

// --- Types ---
interface Review {
  id: number;
  name: string;
  text: string;
}

const reviews: Review[] = [
  { id: 1, name: "Hesha P.", text: "I had a consultation with Jolly Vaidya and truly enjoyed the experience. She was very honest, compassionate, and insightful throughout the session. I really appreciated how clearly she explained things and guided me in the right direction. Her approach felt genuine and thoughtful, which made the consultation very comforting and helpful. I would definitely recommend her to anyone looking for honest and meaningful astrological guidance." },
  { id: 2, name: "Tee P.", text: "She is very knowledgeable, compassionate, competent and friendly. I highly recommend her." },
  { id: 3, name: "Nayan Y.", text: "In odd times, I connected with astrovaastu solutions, I got good remedies & life changing solution - Guidance. Thanks." },
  { id: 4, name: "Mitali M.", text: "When you need some guidance in life to show you the right path AstroVaastu really came to the rescue. She was and and always will be our Guardian Angel. Highly recommend her for all your Vaastu needs" },
  { id: 5, name: "Ajay M.", text: "She really turned things around for us. She is the BEST." },
  { id: 6, name: "Alpesh S.", text: "About 8 months ago I had connected with her and she changed my life for the better, I will be going back." },
  { id: 7, name: "Anupama B.", text: "I have known Jollyji since 2018, when I first sought her guidance during a challenging period in my personal life. From our very first meeting, she listened with genuine attention, carefully reviewed my charts, and offered remedies that proved highly effective. Over the years, her insight..." }
];

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [reviewIndex, setReviewIndex] = useState(0);
  const [status, setStatus] = useState('');

  // Auto-scroll reviews
  useEffect(() => {
    const timer = setInterval(() => {
      setReviewIndex((prev) => (prev + 1) % reviews.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-astrodark text-white font-sans selection:bg-astrogold selection:text-astrodark">
      
      {/* --- Navigation --- */}
      <nav className="fixed top-0 w-full bg-astrodark/90 backdrop-blur-md border-b border-white/5 z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-astrogold rounded-full flex items-center justify-center text-astrodark">
              <Star size={18} fill="currentColor" />
            </div>
            <span className="text-xl font-bold tracking-tighter">ASTROVASTU</span>
          </div>
          <div className="hidden md:flex space-x-8">
            {['home', 'services', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`capitalize text-sm font-medium transition-colors hover:text-astrogold ${
                  activeSection === item ? 'text-astrogold' : 'text-zinc-400'
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <h1 className="text-5xl font-bold text-red-500 bg-blue-500">TESTING TAILWIND</h1>

      {/* --- Review Spotlight (Top) --- */}
      <section className="pt-24 pb-12 bg-black/20 overflow-hidden relative">
        
        <div className="relative h-64 flex items-center justify-center">
          {reviews.map((review, i) => {
            let offset = i - reviewIndex;
            if (offset < -2) offset += reviews.length;
            if (offset > 2) offset -= reviews.length;

            const isCenter = offset === 0;
            const isVisible = Math.abs(offset) <= 1;

            return (
              <motion.div
                key={review.id}
                initial={false}
                animate={{
                  x: offset * 350,
                  scale: isCenter ? 1 : 0.8,
                  opacity: isCenter ? 1 : isVisible ? 0.3 : 0,
                  zIndex: isCenter ? 20 : 10
                }}
                transition={{ type: "spring", stiffness: 120, damping: 20 }}
                className="absolute w-[300px] md:w-[400px] bg-astropurple/40 border border-white/10 p-8 rounded-2xl backdrop-blur-md"
              >
                <Quote className="text-astrogold/20 absolute top-4 right-4" size={32} />
                <p className="text-zinc-200 text-sm md:text-base italic mb-4">"{review.text}"</p>
                <div className="text-astrogold font-bold text-sm">— {review.name}</div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-20">
        <div className="container mx-auto px-6 text-center">
          <div className="animate-fade-in max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tighter">
              <span className="gradient-gold">
                AstroVastu Solutions
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-zinc-400 mb-12 max-w-2xl mx-auto leading-relaxed">
              Harmonizing your home and destiny through the ancient wisdom of 
              Jolly Vaidya.
            </p>

            <div className="flex flex-col md:flex-row justify-center items-center gap-6">
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-astrogold hover:bg-yellow-600 text-astrodark px-10 py-4 rounded-xl font-bold transition-all hover:scale-105 w-full md:w-auto"
              >
                Book a Consultation
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="border border-zinc-700 hover:border-astrogold px-10 py-4 rounded-xl font-bold transition-all text-zinc-300 w-full md:w-auto"
              >
                Our Services
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* --- Services Section --- */}
      <section id="services" className="py-24 bg-black/20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Expertise</h2>
            <div className="h-1 w-20 bg-astrogold"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Moon />, title: "Vedic Astrology", desc: "Unlock the secrets of your birth chart to navigate life's major milestones." },
              { icon: <Home />, title: "Vastu Shastra", desc: "Architectural alignment for residential spaces to enhance health and harmony." },
              { icon: <Sparkles />, title: "Business Vastu", desc: "Energy optimization for commercial spaces to drive growth and success." }
            ].map((s, i) => (
              <div key={i} className="group p-8 bg-astrodark border border-white/5 rounded-2xl hover:border-astrogold/50 transition-all">
                <div className="text-astrogold mb-6 group-hover:scale-110 transition-transform">{s.icon}</div>
                <h3 className="text-xl font-bold mb-4">{s.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Contact Section --- */}
      <section id="contact" className="py-24 container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-6xl font-bold">Connect with <br/><span className="text-astrogold">Jolly Vaidya</span></h2>
            <p className="text-zinc-400 text-lg">Available for global online consultations and on-site Vastu visits across India.</p>
            
            <div className="space-y-4">
              <a href="https://facebook.com/AstrologerJollyVaidya" target="_blank" className="flex items-center space-x-4 p-4 bg-white/5 rounded-xl border border-white/5 hover:border-astrogold/30 transition-all">
                <Facebook className="text-astrogold" />
                <span>Facebook Page</span>
              </a>
              <a href="https://linkedin.com/company/astrovastu-solutions" target="_blank" className="flex items-center space-x-4 p-4 bg-white/5 rounded-xl border border-white/5 hover:border-astrogold/30 transition-all">
                <Linkedin className="text-astrogold" />
                <span>LinkedIn Profile</span>
              </a>
            </div>
          </div>

          <form className="bg-astropurple/20 p-8 rounded-3xl border border-white/5 space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-[10px] uppercase tracking-widest text-zinc-500 font-bold mb-2">Full Name</label>
                <input type="text" className="w-full bg-astrodark border border-white/10 rounded-xl px-4 py-3 focus:border-astrogold outline-none transition-all" />
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-widest text-zinc-500 font-bold mb-2">Email</label>
                <input type="email" className="w-full bg-astrodark border border-white/10 rounded-xl px-4 py-3 focus:border-astrogold outline-none transition-all" />
              </div>
            </div>
            <div>
              <label className="block text-[10px] uppercase tracking-widest text-zinc-500 font-bold mb-2">Message</label>
              <textarea rows={4} className="w-full bg-astrodark border border-white/10 rounded-xl px-4 py-3 focus:border-astrogold outline-none transition-all"></textarea>
            </div>
            <button className="w-full py-4 bg-astrogold text-astrodark font-bold rounded-xl hover:bg-yellow-500 transition-colors">
              Send Message
            </button>
          </form>
        </div>
      </section>

      <footer className="py-12 border-t border-white/5 text-center text-zinc-600 text-xs tracking-widest uppercase">
        © 2026 ASTROVASTU SOLUTIONS • ALL RIGHTS RESERVED
      </footer>
    </div>
  );
}

export default App;