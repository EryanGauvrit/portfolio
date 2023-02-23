import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './style/normalize.css';
import './style/main.scss';
import Header from './components/Header';
import Error from './components/Error';
import Footer from './components/Footer';
import Home from './pages/Home';
import Profil from './pages/Profil';
import Projects from './pages/Projects';
import ProjectDetails from './pages/ProjectDetails';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path='/'
          element={<Home />}
        />
        <Route exact path='/profil'
          element={<Profil />}
        />
        <Route exact path='/projects'
          element={<Projects />}
        />
        <Route exact path='/projects/:id'
          element={<ProjectDetails />}
        />
        <Route exact path='*'
          element={<Error />}
        />
      </Routes>
      <Footer />
    </BrowserRouter>

  </React.StrictMode>
);

