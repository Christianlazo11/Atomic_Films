// import "swiper/swiper.min.css";
import "swiper/css";
import "./assets/boxicons-2.0.7/css/boxicons.min.css";
import "./App.scss";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

import Routess from "./config/Routes";

function App() {
  return (
    <>
      <Routess />
    </>
  );
}

export default App;
