import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Landing from "./components/pages/Landing";
import DeveloperWorkspace from "./components/pages/DeveloperWorkspace";
import BeatmakerWorkspace from "./components/pages/BeatmakerWorkspace";

export default function App() {
  const [lastWorkspace, setLastWorkspace] = useState<"dev" | "beat" | null>(
    null,
  );

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Landing onWorkspaceSelect={setLastWorkspace} />}
        />
        <Route path="/developer" element={<DeveloperWorkspace />} />
        <Route path="/beatmaker" element={<BeatmakerWorkspace />} />
      </Routes>
    </Router>
  );
}
