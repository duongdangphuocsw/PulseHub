import { Routes, Route, Link } from 'react-router-dom';

const Profile = () => (
  <div>
    <h2>My Profile</h2>
    <p>Username: testuser</p>
    <Link to="/account/orders">My Orders</Link>
  </div>
);

const Orders = () => (
  <div>
    <h2>My Orders</h2>
    <ul>
      <li>Order 1</li>
      <li>Order 2</li>
    </ul>
    <Link to="/account">Back to Profile</Link>
  </div>
);

const App = () => (
  <Routes>
    <Route path="/" element={<Profile />} />
    <Route path="/orders" element={<Orders />} />
  </Routes>
);

export default App;
