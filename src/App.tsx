import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Landing from "./components/pages/Landing";
import DeveloperWorkspace from "./components/pages/DeveloperWorkspace";
import BeatmakerWorkspace from "./components/pages/BeatmakerWorkspace";

export default function App() {
  const [, setLastWorkspace] = useState<"dev" | "beat" | null>(null);
  const [isLightMode, setIsLightMode] = useState(() => {
    const storedTheme = localStorage.getItem("portfolio-theme");
    return storedTheme === "light";
  });
  const [isEnglish, setIsEnglish] = useState(() => {
    const storedLanguage = localStorage.getItem("portfolio-language");
    return storedLanguage === "en";
  });

  useEffect(() => {
    localStorage.setItem("portfolio-theme", isLightMode ? "light" : "dark");
  }, [isLightMode]);

  useEffect(() => {
    localStorage.setItem("portfolio-language", isEnglish ? "en" : "fr");
  }, [isEnglish]);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Landing
              onWorkspaceSelect={setLastWorkspace}
              isLightMode={isLightMode}
              onToggleTheme={() => setIsLightMode((prev) => !prev)}
              isEnglish={isEnglish}
              onToggleLanguage={() => setIsEnglish((prev) => !prev)}
            />
          }
        />
        <Route
          path="/developer"
          element={
            <DeveloperWorkspace
              isLightMode={isLightMode}
              onToggleTheme={() => setIsLightMode((prev) => !prev)}
              isEnglish={isEnglish}
              onToggleLanguage={() => setIsEnglish((prev) => !prev)}
            />
          }
        />
        <Route
          path="/beatmaker"
          element={
            <BeatmakerWorkspace
              isLightMode={isLightMode}
              onToggleTheme={() => setIsLightMode((prev) => !prev)}
              isEnglish={isEnglish}
              onToggleLanguage={() => setIsEnglish((prev) => !prev)}
            />
          }
        />
      </Routes>
    </Router>
  );
}
