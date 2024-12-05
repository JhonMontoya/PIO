import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Product from './pages/Products';

function App() {
  return(
    <BrowserRouter> {/* Contenedor principal*/}
      <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/products/:id" element={<Product/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App
