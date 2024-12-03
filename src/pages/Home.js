import React from 'react';
import {Link} from "react-router-dom";

import '../App.css';

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Virtual Paints</h1>
        <Link to="/login"><button>Buy Art</button></Link>
      </header>
    </div>
  )
}

export default Home
