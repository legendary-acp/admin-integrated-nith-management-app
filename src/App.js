import React from 'react';
import app from "./firebase";
import {Navbar, Home} from './components'

function App() {
  return (
      <div>
        <Navbar/>
        <Home name="PD"/>
      </div>
  );
}

export default App;
