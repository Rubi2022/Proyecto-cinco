import './App.css';

import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import Home from './Components/Navbar/Home';
import Inicio from './Components/Vistas/Inicio';
import Catalogo from './Components/Vistas/Catalogo';
import Contacto from './Components/Vistas/Contacto';
import Barra from './Components/Navbar/Barra';
import Compra from './Components/Vistas/Compra'

function App() {
  return (
    <div className="App">
    
    <BrowserRouter>
      <Routes>
       
      <Route path='/' element={ <Barra/> }>
        <Route path='Home' element={ <Home/> }/>
        <Route path='Catalogo' element={ <Catalogo titleCatalogo="Conoce nuestro Catalógo"/> }/>
        <Route path='Contacto' element={ <Contacto titleContacto="¿Cómo podemos ayudarte?"/> }/>
        <Route path='Inicio' element={ <Inicio/> }/>
        <Route path='Compra' element={<Compra/>}/>

        <Route path='*'  element={ <Navigate replace to="/"/>}/>
      </Route>
      </Routes>
    </BrowserRouter>
    
     
  </div>
  );
}

export default App;
