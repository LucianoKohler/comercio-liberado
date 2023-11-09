import React from "react";
import "./styles.css"; //TailwindCSS
import Header from "./Components/Header";
import HomeScreen from "./Screens/HomeScreen";
import Footer from "./Components/Footer";

export default function App() {
  document.title = "Comércio Liberado";
  document.body.style.backgroundColor = "#f3f4f6";
  return (
    <div>
      <Header />
      <HomeScreen />
      <Footer />
    </div>
  );
}
