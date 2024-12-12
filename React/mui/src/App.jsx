import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import { AppBar, Toolbar, Button, Typography } from "@mui/material";

import Home from './pages/Home';
import About from './pages/About';
import Contacts from './pages/Contacts';
import Product from './pages/Product';

function App(){
  return (
    <Router>
      <AppBar position="static" style={{marginBottom: '20px'}}>
        <Toolbar>
          <Typography variant="h5" style={{flexGrow:1}}>
            Mi aplicación
            <Button color="inherit" component={Link} to = "/">
              Inicio
            </Button>
            <Button color="inherit" component={Link} to = "/about">
              Acerca de
            </Button>
            <Button color="inherit" component={Link} to = "/contact">
              Contactenos
            </Button>
            <Button color="inherit" component={Link} to = "/products">
              Productos
            </Button>
          </Typography>
        </Toolbar>
      </AppBar>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contacts/>}/>
        <Route path="/products" element={<Product/>}/>
      </Routes>
    </Router>
  );
};

export default App;