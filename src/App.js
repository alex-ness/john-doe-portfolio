

import React from 'react';
import './App.css';
import { NavLink, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import GithubModal from './components/GithubModal';

import Home from './pages/Home';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import MentionsLegales from './pages/MentionsLegales';
import Header from "./components/Header";

function HeroSection({ setModalOpen}) {
  
  return (
    <div className="hero">
      <div className="container text-center text-white">
        <h1>Bienvenue sur mon Portfolio</h1>
        <p>Découvrez mes projets et mes services</p>
          <button onClick={() => setModalOpen(true)} className="btn btn-primary btn-hover">
              En savoir plus
          </button>
      </div>
    </div>
  );
}

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div className="App">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className='container'>
            <NavLink className="navbar-brand" to="/">John Doe</NavLink>
            
            <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#nav-main">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="nav-main">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <NavLink end to="/" className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>Accueil</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/services" className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>Services</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/portfolio" className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>Portfolio</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/contact" className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>Contact</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/mentions-legales" className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>Mentions légales</NavLink>
                </li>
              </ul>
            </div>  
            
          </div>
        </nav>

          <HeroSection setModalOpen={setModalOpen} />


        <main>
          <Header />
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/services" element={<Services />} />  
            <Route path="/portfolio" element={<Portfolio />} />  
            <Route path="/contact" element={<Contact />} />  
            <Route path="/mentions-legales" element={<MentionsLegales />} />  
          </Routes>
        </main>
          <GithubModal open={modalOpen} onClose={() => setModalOpen(false)}/> 
      </div>
    );
}

export default App;


/*  <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
        <p> Edit <code>src/App.js</code> and save to reload.</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          Learn React
        </a>
    </header>
*/

/*
function GithubModal({ show, onClose, data }) {
  if (!show) return null;
  return (
    <div className="modal-overlay"> ... affiche data ... </div>
  );
} 
*/

/*
function useGitHub(username)  {
  const [data, setData] = username(null); 
 
  useEffect(() => {
    if (!username) return;
    fetch('https://api.github.com/users/${username}')
    .then((r) => (r.ok ? r.json() : null))
    .then((json) => setData(json))
    .catch(( )=> setData(null));
  }, [username]);

  return data;
}
*/

/*import heroBg from '../public/images/hero-bg.jpg'; */