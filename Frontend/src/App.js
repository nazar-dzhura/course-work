import React from "react";
import Discover from "./pages/Discover";
import Footer from "./components/Footer";
import Header from "./components/header/Header";

function App() {
  return (
    <div style={{backgroundColor: 'var(--second-bg)'}}>
      <Header/>
      <Discover/>
      <Footer/>
    </div>
  );
}

export default App;
