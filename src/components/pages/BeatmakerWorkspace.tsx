import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Music, ExternalLink, X, Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import BeatmakerHeroSection from "../beatmaker/HeroSection";
import ParticleConstellationBackground from "../common/ParticleConstellationBackground";

interface BeatmakerWorkspaceProps {
  isLightMode: boolean;
  onToggleTheme: () => void;
}

export default function BeatmakerWorkspace({
  isLightMode,
  onToggleTheme,
}: BeatmakerWorkspaceProps) {
  const navigate = useNavigate();
  const [isCatalogOpen, setIsCatalogOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsCatalogOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isCatalogOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isCatalogOpen]);

  return (
    <div
      className={`relative min-h-screen overflow-hidden ${
        isLightMode ? "bg-white theme-light" : "bg-black"
      }`}
    >
      <ParticleConstellationBackground isLightMode={isLightMode} />
      <div
        className={`pointer-events-none absolute inset-0 bg-grid ${
          isLightMode ? "opacity-35" : "opacity-60"
        }`}
      />
      <div
        className={`pointer-events-none absolute top-[-18rem] right-[-8rem] h-[32rem] w-[32rem] rounded-full blur-[120px] animate-pulse-glow ${
          isLightMode ? "bg-orange-300/35" : "bg-orange-500/15"
        }`}
      />

      <div
        className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b ${
          isLightMode
            ? "bg-white/90 border-slate-200"
            : "bg-black/70 border-white/10"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/")}
            className={`flex items-center gap-2 transition-colors ${
              isLightMode
                ? "text-orange-700 hover:text-orange-500"
                : "text-orange-300 hover:text-orange-200"
            }`}
          >
            <ArrowLeft size={20} />
            <span>Back</span>
          </motion.button>
          <h1
            className={`text-xl font-bold ${
              isLightMode ? "text-slate-900" : "text-white"
            }`}
          >
            Beatmaker Portfolio
          </h1>
          <button
            onClick={onToggleTheme}
            className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-semibold transition-colors ${
              isLightMode
                ? "border-slate-300 bg-white text-slate-800 hover:bg-slate-100"
                : "border-white/20 bg-white/10 text-slate-200 hover:bg-white/15"
            }`}
          >
            {isLightMode ? <Moon size={14} /> : <Sun size={14} />}
            {isLightMode ? "Dark" : "White"}
          </button>
        </div>
      </div>

      <div className="relative z-10 pt-20">
        <BeatmakerHeroSection
          onExploreClick={() => setIsCatalogOpen(true)}
          isLightMode={isLightMode}
        />

        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto px-4 py-20"
        >
          <div className="text-center mb-12">
            <h2 className="section-title mb-4">Full Catalog</h2>
            <p className="section-subtitle">
              Explore all my beats on my dedicated platform
            </p>
          </div>

          <motion.div
            whileHover={{ scale: 1.02, y: -6 }}
            className="relative overflow-hidden rounded-3xl glass-panel neon-orange p-12 text-center"
          >
            <div className="absolute inset-0 bg-orange-500/10 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <Music className="w-16 h-16 mx-auto text-orange-400 mb-4" />
              <h3
                className={`text-2xl font-bold mb-4 ${
                  isLightMode ? "text-slate-900" : "text-white"
                }`}
              >
                Space Chico Beats
              </h3>
              <p className="text-slate-300 mb-6">
                Visit my complete beats catalog and explore all my productions
              </p>
              <a
                href="https://spacechico-winnit.online/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl transition-colors"
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
          className={`max-w-7xl mx-auto px-4 py-20 border-t ${
            isLightMode ? "border-slate-200" : "border-white/10"
          }`}
        >
          <div className="text-center">
            <h2
              className={`text-3xl font-bold mb-4 ${
                isLightMode ? "text-slate-900" : "text-white text-shimmer"
              }`}
            >
              About Space Chico
            </h2>
            <p className="text-slate-300 max-w-2xl mx-auto mb-8">
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
          className={`border-t mt-20 backdrop-blur-lg ${
            isLightMode
              ? "bg-white/90 border-slate-200"
              : "bg-black/80 border-white/10"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
              <div className="glass-panel rounded-2xl p-6">
                <h3
                  className={`font-bold mb-4 ${
                    isLightMode ? "text-slate-900" : "text-white"
                  }`}
                >
                  Social & Links
                </h3>
                <div className="space-y-3">
                  <a
                    href="https://spacechico-winnit.online/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-slate-300 hover:text-orange-300 transition-colors"
                  >
                    <Music size={18} />
                    Space Chico Website
                  </a>
                </div>
              </div>

              <div className="glass-panel rounded-2xl p-6">
                <h3
                  className={`font-bold mb-4 ${
                    isLightMode ? "text-slate-900" : "text-white"
                  }`}
                >
                  Contact
                </h3>
                <div className="space-y-2 text-slate-300 text-sm">
                  <p>For collaborations and inquiries</p>
                  <p>Email: tiagofortescoronel@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="border-t border-white/10 pt-8 text-center text-slate-400 text-sm">
              <p>© 2025 Space Chico. All beats reserved.</p>
            </div>
          </div>
        </motion.footer>
      </div>

      {isCatalogOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={`fixed inset-0 z-[70] backdrop-blur-sm p-3 md:p-6 ${
            isLightMode ? "bg-white/70" : "bg-black/80"
          }`}
          onClick={() => setIsCatalogOpen(false)}
        >
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.2 }}
            className={`relative mx-auto flex h-full w-full max-w-7xl flex-col overflow-hidden rounded-2xl shadow-2xl ${
              isLightMode
                ? "border border-slate-200 bg-white"
                : "border border-white/10 bg-black"
            }`}
            onClick={(event) => event.stopPropagation()}
          >
            <div
              className={`flex items-center justify-between border-b px-4 py-3 md:px-6 ${
                isLightMode ? "border-slate-200" : "border-white/10"
              }`}
            >
              <div>
                <p className="text-sm text-orange-300">Space Chico</p>
                <h3
                  className={`text-lg font-bold ${
                    isLightMode ? "text-slate-900" : "text-white"
                  }`}
                >
                  Explore All Beats
                </h3>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href="https://www.spacechico-winnit.online/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`hidden md:inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-sm transition-colors ${
                    isLightMode
                      ? "border-slate-300 text-slate-700 hover:text-orange-600 hover:border-orange-300"
                      : "border-white/15 text-slate-200 hover:text-orange-200 hover:border-orange-300/40"
                  }`}
                >
                  Open in new tab
                  <ExternalLink size={16} />
                </a>
                <button
                  onClick={() => setIsCatalogOpen(false)}
                  className={`rounded-lg border p-2 transition-colors ${
                    isLightMode
                      ? "border-slate-300 text-slate-700 hover:text-orange-600 hover:border-orange-300"
                      : "border-white/15 text-slate-200 hover:text-orange-200 hover:border-orange-300/40"
                  }`}
                  aria-label="Close catalog popup"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            <div
              className={`relative flex-1 ${
                isLightMode ? "bg-white" : "bg-black"
              }`}
            >
              <iframe
                src="https://www.spacechico-winnit.online/"
                title="Space Chico Catalog"
                className="h-full w-full"
                loading="lazy"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
