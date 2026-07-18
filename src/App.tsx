import { Route, Routes } from "react-router";
import { Home } from "./pages/home";

import "./App.css";
import { CV } from "./pages/cv";
import { Outreach } from "./pages/outreach";
import { Resources } from "./pages/resources";

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="cv" element={<CV />} />
      <Route path="outreach" element={<Outreach />} />
      <Route path="resources" element={<Resources />} />
    </Routes>
  );
}

export default App;