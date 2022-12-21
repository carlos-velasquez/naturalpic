import "./styles.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import MyContext from "./my_context";
import { useState } from "react";


import Home from "./views/Home";
import Favoritos from "./views/Favoritos";

export default function App() {
  const [infoLike, setInfoLike] = useState([])
  const endPoint = () => {
    fetch('/fotos.json')
      .then(response => response.json())
      .then(data => {
        setInfoLike(data.photos.map(info => info.src.original))
      });
  }
  return (
    <div className="App">
      <BrowserRouter>
        <MyContext.Provider value={ endPoint}>
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favoritos" element={<Favoritos />} />
          </Routes>
        </MyContext.Provider>
      </BrowserRouter>
    </div>
  );
}
