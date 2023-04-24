import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header, Footer } from "./components/Layout";
import CityList from "./components/villes/CityList";
import PageTest from "./components/villes/pageTest";

function App() {
  return (
    <Router>
      <body class="gray">
        <div id="wrapper">
          <Header />
          <div class="clearfix"></div>
          <div id="titlebar" class="gradient">
            <Routes>
              <Route path="/villes" element={<CityList />} />
              <Route path="/small-dialog" element={<CityList />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </body>
    </Router>
  );
}

export default App;

// return Object.keys(user).length > 0 ? (
//     <div>
//       <div>
//         <h1>Customer data</h1>
//         <h2>Nom : {user.nom}</h2>
//         {/* <img src={user.results[0].picture.large} alt=""></img> */}
//       </div>

//       {/* {user.results.map((users) => (
//         <div key={users.id.value}>
//           <h1>Customer data</h1>
//           <h2>Nom : {users.name.first}</h2>
//           <img key={users.id.value} src={users.picture.large} alt=""></img>
//         </div>
//       ))} */}
//     </div>
//   ) : (
//     <h1>Data pending...</h1>
//   );

//   //   // <BrowserRouter>
//   //   //   <div>
//   //   //     <nav>
//   //   //       <Link to="/" className="nav-item">
//   //   //         Ville
//   //   //       </Link>
//   //   //       <Link to="/zone" className="nav-item">
//   //   //         Zone
//   //   //       </Link>
//   //   //       <Link to="/pharmacies" className="nav-item">
//   //   //         Pharmacies
//   //   //       </Link>
//   //   //     </nav>
//   //   //     <Routes>
//   //   //       <Route path="/" element={<Ville />}></Route>
//   //   //       <Route path="/zone" element={<Zone />}></Route>
//   //   //       <Route path="/pharmacies" element={<Pharmacies />}></Route>
//   //   //     </Routes>
//   //   //   </div>
//   //   // </BrowserRouter>
//   // );
//   // return (
//   //   <div>
//   //     <Header />
//   //     <Test />
//   //     <Footer />
//   //   </div>
//   // );
// }
