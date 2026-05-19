import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import RecursosNaturales from "./pages/RecursosNaturales";
import SectoresEconomicos from "./pages/SectoresEconomicos";

import Subcompetencia3 from "./pages/Subcompetencia3";
import Subcompetencia4 from "./pages/Subcompetencia4";

import Autor from "./pages/Autor";
import Fuentes from "./pages/Fuentes";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/recursos-naturales" element={<RecursosNaturales />} />
        <Route path="/sectores-economicos" element={<SectoresEconomicos />} />

        <Route path="/subcompetencia-3" element={<Subcompetencia3 />} />
        <Route path="/subcompetencia-4" element={<Subcompetencia4 />} />

        <Route path="/autor" element={<Autor />} />
        <Route path="/fuentes" element={<Fuentes />} />

        <Route path="*" element={<NotFound />} />

      </Routes>
    </BrowserRouter>
  );
};

export default App;
