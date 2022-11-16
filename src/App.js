import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppContent from './components/AppContent';
import Homepage from '../src/pages/HomePage';
import Places from './pages/Places';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<AppContent><Homepage /></AppContent>} />
        <Route path="/places" exact element={<AppContent><Places /></AppContent>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
