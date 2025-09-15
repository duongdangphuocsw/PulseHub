import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Catalog, Checkout, Account, Admin } from './remotes';

const Header = () => (
  <header
    style={{
      display: 'flex',
      gap: '1rem',
      padding: '1rem',
      backgroundColor: '#f0f0f0',
    }}
  >
    <Link to="/">Home</Link>
    <Link to="/catalog">Catalog</Link>
    <Link to="/checkout">Checkout</Link>
    <Link to="/account">Account</Link>
    <Link to="/admin">Admin</Link>
  </header>
);

const App = () => (
  <Router>
    <Header />
    <main style={{ padding: '1rem' }}>
      <React.Suspense fallback="Loading...">
        <Routes>
          <Route path="/catalog/*" element={<Catalog />} />
          <Route path="/checkout/*" element={<Checkout />} />
          <Route path="/account/*" element={<Account />} />
          <Route path="/admin/*" element={<Admin />} />
          <Route path="/" element={<h2>Home</h2>} />
        </Routes>
      </React.Suspense>
    </main>
  </Router>
);

export default App;
