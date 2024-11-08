import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import About from "./pages/About";
import Login from "./pages/Login";
import Products from "./pages/Products";
import Register from "./pages/Register";
import Home from "./pages/Home";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/about" element={<About/>}/>
       
        <Route path="/register" element={<Register/>}/>
    
        <Route path="/login" element={<Login/>}/>

        <Route path="/products" element={<Products/>}/>
  
        <Route path="/" element={<Home/>}/>
      </Routes>
    </Router>
  );
}

export default App;
