import React from "react";
import "./styles.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Bootcamp from "./components/Bootcamp";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Footer />
      <Bootcamp bootcamp_name={"ReactJS Bootcamp"} />
      <Bootcamp bootcamp_name={"Python and Machine Learning Bootcamp"} />
      <Bootcamp bootcamp_name={"Python and DeepLearning Bootcamp"} />
      <Bootcamp bootcamp_name={"Python and Cycber Security Bootcamp"} />
      <Bootcamp bootcamp_name={"Netflix Clone Bootcamp"} />
    </div>
  );
}
