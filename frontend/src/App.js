import Home from "./pages/Home";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Pharmacie from "./pages/Pharmacie";
import Ville from "./pages/Ville";
import Zone from "./pages/Zone";
import PharmacieGarde from "./pages/PharmacieGarde";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<PharmacieGarde />} />
          <Route path="/villes" exact element={<Ville />} />
          <Route path="/zones" exact element={<Zone />} />
          <Route path="/pharmacies" exact element={<Pharmacie />} />
          <Route path="/pharmacieGarde" exact element={<PharmacieGarde />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
