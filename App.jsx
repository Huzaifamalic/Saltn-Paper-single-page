import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Section from './Section';
import Footer from './Footer';
import Home from './Home';
import Aboutus from './Aboutsus';




import './App.css';
import Publication from './Publication';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Main Sections */}
      <Section />

      {/* Footer */}
      <Footer />
    </div>
  );
}

function Singlepage() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={< Aboutus/>} />
        <Route path="/publication" element={<Publication/>} />
       
        
      </Routes>
    </Router>
  );
}

export default Singlepage;





























// import React from 'react';
// import { useState } from 'react'
// import Navbar from './Navbar'
// // import reactLogo from './assets/react.svg'
// // import viteLogo from '/vite.svg'
// // import './App.css'




// function App() {
//  const [count, setCount] = useState(0)

//  return (
//      <div>
//       <Navbar/>
//      </div>
    
//  )

// }



//  export default App
