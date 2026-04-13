import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Products from './pages/Products';
import Tracking from './pages/Tracking';
import FAQ from './pages/FAQ';
import Legal from './pages/Legal';

export default function App() {
  return (
    <CartProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/products" element={<Products />} />
            <Route path="/tracking" element={<Tracking />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/terms" element={<Legal title="Terms & Conditions" lastUpdated="Oct 2024" />} />
            <Route path="/privacy" element={<Legal title="Privacy Policy" lastUpdated="Oct 2024" />} />
            <Route path="/returns" element={<Legal title="Returns & Refunds" lastUpdated="Oct 2024" />} />
            <Route path="/shipping" element={<Legal title="Shipping Info" lastUpdated="Oct 2024" />} />
          </Routes>
        </Layout>
      </Router>
    </CartProvider>
  );
}
