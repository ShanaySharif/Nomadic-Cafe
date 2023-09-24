import React from "react";
import Header from "./Header";
import Coffee from "./Coffee";
import Special from "./Special";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CoffeeControl from "./CafeControl";





function Home() {
    return (
      <main className="main">
        <Coffee />
        <Special />
      </main>
    );
  }

  export default Home;
