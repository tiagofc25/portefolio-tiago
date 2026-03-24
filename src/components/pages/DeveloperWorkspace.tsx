import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Github, Mail, Phone, MapPin, Download } from "lucide-react";
import { useState, useEffect } from "react";
import HeroSection from "../developer/HeroSection";
import SkillsSection from "../developer/SkillsSection";
import ProjectsSection from "../developer/ProjectsSection";
import ExperienceSection from "../developer/ExperienceSection";

export default function DeveloperWorkspace() {
  const navigate = useNavigate();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-lg border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
          >
            <ArrowLeft size={20} />
            <span>Back</span>
          </motion.button>
          <h1 className="text-xl font-bold text-white">Developer Portfolio</h1>
          <div className="w-20"></div>
        </div>
      </div>

      <div className="pt-20">
        <HeroSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />

        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="bg-slate-950 border-t border-slate-800 mt-20"
        >
          <div className="max-w-7xl mx-auto px-4 py-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
              <div>
                <h3 className="text-white font-bold mb-4">Contact</h3>
                <div className="space-y-3">
                  <a
                    href="mailto:tiagofortescoronel@gmail.com"
                    className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    <Mail size={18} />
                    tiagofortescoronel@gmail.com
                  </a>
                  <a
                    href="tel:+33787124803"
                    className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    <Phone size={18} />
                    +33 7 87 12 48 03
                  </a>
                  <div className="flex items-center gap-2 text-gray-300">
                    <MapPin size={18} />
                    Houilles, France
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-white font-bold mb-4">Links</h3>
                <div className="space-y-3">
                  <a
                    href="https://github.com/tiagofc25"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    <Github size={18} />
                    GitHub Profile
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    <Download size={18} />
                    Download CV
                  </a>
                </div>
              </div>

              <div>
                <h3 className="text-white font-bold mb-4">Languages</h3>
                <div className="space-y-2 text-gray-300 text-sm">
                  <p>French (C2 Native)</p>
                  <p>Portuguese (C2)</p>
                  <p>English (C1)</p>
                  <p>Spanish (B2)</p>
                </div>
              </div>
            </div>

            <div className="border-t border-slate-800 pt-8 text-center text-gray-400 text-sm">
              <p>© 2025 Tiago Fortes Coronel. All rights reserved.</p>
            </div>
          </div>
        </motion.footer>
      </div>
    </div>
  );
}
