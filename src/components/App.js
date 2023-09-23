import React from "react";
import Header from "./Header";
import Coffee from "./Coffee";
import Special from "./Special";


// import CafeControl from "./CafeControl";



function App() {
  return ( 
    <>
    <Header />
    <main className="main">
      <Coffee />
      <Special />

    </main>
    </>
  );
}

export default App;

