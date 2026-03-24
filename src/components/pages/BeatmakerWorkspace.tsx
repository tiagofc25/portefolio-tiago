import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Music, ExternalLink } from "lucide-react";
import BeatmakerHeroSection from "../beatmaker/HeroSection";

export default function BeatmakerWorkspace() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-lg border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-orange-400 hover:text-orange-300 transition-colors"
          >
            <ArrowLeft size={20} />
            <span>Back</span>
          </motion.button>
          <h1 className="text-xl font-bold text-white">Beatmaker Portfolio</h1>
          <div className="w-20"></div>
        </div>
      </div>

      <div className="pt-20">
        <BeatmakerHeroSection />

        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto px-4 py-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Full Catalog</h2>
            <p className="text-gray-300">
              Explore all my beats on my dedicated platform
            </p>
          </div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-orange-900/40 to-red-900/40 border border-orange-500/30 p-12 text-center"
          >
            <div className="absolute inset-0 bg-orange-500/5 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <Music className="w-16 h-16 mx-auto text-orange-400 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">
                Space Chico Beats
              </h3>
              <p className="text-gray-300 mb-6">
                Visit my complete beats catalog and explore all my productions
              </p>
              <a
                href="https://spacechico-winnit.online/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg transition-colors"
              >
                Visit Catalog
                <ExternalLink size={20} />
              </a>
            </div>
          </motion.div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto px-4 py-20 border-t border-slate-800"
        >
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              About Space Chico
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8">
              Producer passionate about creating high-quality beats across
              multiple genres including Hip-Hop, Trap, and Electronic music.
              Each beat is crafted with attention to detail and designed for
              both professional and creative use.
            </p>
          </div>
        </motion.section>

        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="bg-slate-950 border-t border-slate-800 mt-20"
        >
          <div className="max-w-7xl mx-auto px-4 py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
              <div>
                <h3 className="text-white font-bold mb-4">Social & Links</h3>
                <div className="space-y-3">
                  <a
                    href="https://spacechico-winnit.online/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-300 hover:text-orange-400 transition-colors"
                  >
                    <Music size={18} />
                    Space Chico Website
                  </a>
                </div>
              </div>

              <div>
                <h3 className="text-white font-bold mb-4">Contact</h3>
                <div className="space-y-2 text-gray-300 text-sm">
                  <p>For collaborations and inquiries</p>
                  <p>Email: tiagofortescoronel@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="border-t border-slate-800 pt-8 text-center text-gray-400 text-sm">
              <p>© 2025 Space Chico. All beats reserved.</p>
            </div>
          </div>
        </motion.footer>
      </div>
    </div>
  );
}
