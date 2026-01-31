import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import Navigation from './components/Navigation';
import './App.css';

// Lazy loading de páginas
const Home = lazy(() => import('./pages/Home'));
const BioPage = lazy(() => import('./pages/BioPage'));
const ResearchPage = lazy(() => import('./pages/ResearchPage'));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));

// Componente de loading simple
const LoadingSpinner = () => (
  <div style={{ textAlign: 'center', padding: '2rem' }}>Cargando...</div>
);

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="App">
          <Navigation />
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/bio" element={<BioPage />} />
              <Route path="/research" element={<ResearchPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </Suspense>
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;