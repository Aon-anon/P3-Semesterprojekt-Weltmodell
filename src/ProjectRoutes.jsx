import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router';
import Home from './pages/Home.jsx';
import Imprint from './pages/Imprint.jsx';
import Privacy from './pages/Privacy.jsx';
import Contact from './pages/Contact.jsx';

function ProjectRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/imprint' element={<Imprint />} />
        <Route path='/privacy' element={<Privacy />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default ProjectRoutes;