import { Routes, Route, Link } from 'react-router-dom';

const ProductList = () => (
  <div>
    <h2>Product List</h2>
    <ul>
      <li>
        <Link to="/catalog/product/1">Product 1</Link>
      </li>
      <li>
        <Link to="/catalog/product/2">Product 2</Link>
      </li>
    </ul>
  </div>
);

const ProductDetail = () => (
  <div>
    <h2>Product Detail</h2>
    <p>This is a product detail page.</p>
    <Link to="/catalog">Back to Product List</Link>
  </div>
);

const App = () => (
  <Routes>
    <Route path="/" element={<ProductList />} />
    <Route path="product/:id" element={<ProductDetail />} />
  </Routes>
);

export default App;
