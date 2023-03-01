import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// ----- 
// Styles 
// -----
import './styles/App.scss';

// ----- 
// Components 
// -----
import Header from './components/Header'

// ----- 
// Pages  
// -----
import Home from './pages/Home'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <Router>

      <div className="App">
        <Header />

        <Routes>
          {/* ----- 404 Not Found ----- */}
          <Route path="*" element={<NotFound />} />

          {/* ----- Homepage ----- */}
          <Route exact path="/" element={<Home />} />

        </Routes>
      </div >

    </Router>
  );
}
