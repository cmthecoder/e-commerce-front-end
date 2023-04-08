import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Category from './pages/Category';
import Product from './pages/Product';

function App() {
  return (
    <>
      <Routes>
        <Route
          path='/'
          element={<Home />}
        />
        <Route
          path='/products/:id'
          element={<Category />}
        />
        <Route
          path='/product/:id'
          element={<Product />}
        />
      </Routes>
    </>
  );
}

export default App;
