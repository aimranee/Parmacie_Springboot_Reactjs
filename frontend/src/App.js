import Sidenav from "./components/Sidenav";
import Home from "./pages/Home";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Pharmacie from "./pages/Pharmacie";
import Ville from "./pages/Ville";
import Zone from "./pages/Zone";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/villes" exact element={<Ville />} />
          <Route path="/zones" exact element={<Zone />} />
          <Route path="/pharmacies" exact element={<Pharmacie />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
