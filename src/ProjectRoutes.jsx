import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Imprint from './pages/Imprint.jsx';
import Privacy from './pages/Privacy.jsx';
import Contact from './pages/Contact.jsx';

function RedirectFrom404() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const redirect = params.get('redirect');
    if (redirect) {
      navigate(redirect, { replace: true });
    }
  }, [location.search, navigate]);

  return null;
}

function ProjectRoutes() {
  return (
    <BrowserRouter basename="/P3-Semesterprojekt-Weltmodell">
      <RedirectFrom404 />
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