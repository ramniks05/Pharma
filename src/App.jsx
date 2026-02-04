import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import ScrollToTop from './components/ScrollToTop'
import Preloader from './components/Preloader'
import Home from './pages/Home'
import Products from './pages/Products'
import ProductDetail from './pages/ProductDetail'
import About from './pages/About'
import RnD from './pages/RnD'
import Contact from './pages/Contact'
import Calculator from './pages/Calculator'
import PCD from './pages/PCD'
import Terms from './pages/Terms'

function App() {
  return (
    <>
      <Preloader />
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:productId" element={<ProductDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/rnd" element={<RnD />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/pcd" element={<PCD />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
      </Layout>
    </>
  )
}

export default App
