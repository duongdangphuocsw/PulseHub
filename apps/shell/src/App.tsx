import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HabitTracking, QuoteGeneration, DecisionJournal, Admin } from './remotes';
import './styles/App.css';
import Header from './components/Header';

const App = () => (
  <Router>
    <Header />
    <div className="text-red-500">shell app</div>
    <main style={{ padding: '1rem' }}>
      <React.Suspense fallback="Loading...">
        <Routes>
          <Route path="/habitTracking/*" element={<HabitTracking />} />
          <Route path="/quoteGeneration/*" element={<QuoteGeneration />} />
          <Route path="/decisionJournal/*" element={<DecisionJournal />} />
          <Route path="/admin/*" element={<Admin />} />
          <Route path="/" element={<h2>Home</h2>} />
        </Routes>
      </React.Suspense>
    </main>
  </Router>
);

export default App;
