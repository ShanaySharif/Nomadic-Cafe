import React from "react";
import Header from "./Header";
import SignIn from "./SignIn";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import CafeControl from "./CafeControl";
function App(){
  return ( 
    <React.Fragment>
      <Header />
      <CafeControl />
    </React.Fragment>
  );
}

export default App;