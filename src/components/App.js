import React from "react";
import Header from "./Header";
import CoffeeControl from "./Coffee";
import Special from "./Special";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./SignIn";



// import CafeControl from "./CafeControl";



// function App() {
//   return ( 
//     <>
//     <Header />
//     <main className="main">
//       <Coffee />
//       <Special />

//     </main>
//     </>
//   );
// }


function App() {
  return (
    <Router>
      <Header />
      <Routes>
      <Route path="/sign-in" element={<SignIn />} />

        <Route path="/" element={<Home />} />
        <Route path="/coffee" element={<CoffeeControl />} />
        <Route path="/special" element={<Special />} />
      </Routes>
    </Router>
  );
}
export default App;

