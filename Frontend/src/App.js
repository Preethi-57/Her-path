import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Resources from './pages/Resources';
import Schemes from './pages/Schemes';
import Jobs from './pages/Jobs';
import Auth from './pages/Auth';
import './styles.css';

function App(){
  return (
    <Router>
      <header className="header">
        <div className="container">
          <h1 style={{margin:0}}>Her-Path</h1>
          <nav style={{marginTop:8}}>
            <Link to="/" style={{color:'white', marginRight:12}}>Home</Link>
            <Link to="/resources" style={{color:'white', marginRight:12}}>Resources</Link>
            <Link to="/schemes" style={{color:'white', marginRight:12}}>Schemes</Link>
            <Link to="/jobs" style={{color:'white', marginRight:12}}>Jobs</Link>
            <Link to="/auth" style={{color:'white'}}>Auth</Link>
          </nav>
        </div>
      </header>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/schemes" element={<Schemes />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
