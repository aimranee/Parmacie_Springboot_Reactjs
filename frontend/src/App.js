import "./App.css";
// import Ville from "./components/Ville";
// import Zone from "./components/Zone";
// import Pharmacies from "./components/Pharmacies";
import { React, useEffect, useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Test from "./components/Test";
import axios from "axios";

// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  const [user, setUser] = useState([]);

  const fetchData = () => {
    axios.get("/api/villes/1").then((response) => {
      setUser(response.data).catch((error) => console.log(error));
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return Object.keys(user).length > 0 ? (
    <div>
      <div>
        <h1>Customer data</h1>
        <h2>Nom : {user.nom}</h2>
        {/* <img src={user.results[0].picture.large} alt=""></img> */}
      </div>

      {/* {user.results.map((users) => (
        <div key={users.id.value}>
          <h1>Customer data</h1>
          <h2>Nom : {users.name.first}</h2>
          <img key={users.id.value} src={users.picture.large} alt=""></img>
        </div>
      ))} */}
    </div>
  ) : (
    <h1>Data pending...</h1>
  );

  //   // <BrowserRouter>
  //   //   <div>
  //   //     <nav>
  //   //       <Link to="/" className="nav-item">
  //   //         Ville
  //   //       </Link>
  //   //       <Link to="/zone" className="nav-item">
  //   //         Zone
  //   //       </Link>
  //   //       <Link to="/pharmacies" className="nav-item">
  //   //         Pharmacies
  //   //       </Link>
  //   //     </nav>
  //   //     <Routes>
  //   //       <Route path="/" element={<Ville />}></Route>
  //   //       <Route path="/zone" element={<Zone />}></Route>
  //   //       <Route path="/pharmacies" element={<Pharmacies />}></Route>
  //   //     </Routes>
  //   //   </div>
  //   // </BrowserRouter>
  // );
  // return (
  //   <div>
  //     <Header />
  //     <Test />
  //     <Footer />
  //   </div>
  // );
}

export default App;
