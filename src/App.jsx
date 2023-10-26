import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import NavBar from './components/Navbar';
import Home from './pages/Home/Home';
import E404 from './pages/E404/E404';
import TiendaAuto from './pages/Tienda/TiendaAuto';
import TiendaMembresia from './pages/Tienda/TiendaMembresia';
import TiendaComercio from './pages/Tienda/TiendaComercio';
import TiendaAdicionales from './pages/Tienda/TiendaAdicionales';
import TiendaOrganizaciones from './pages/Tienda/TiendaOrganizaciones';
import TiendaAutosUnicos from './pages/Tienda/TiendaAutosUnicos';
import EventosList from './pages/Eventos/EventosList';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tienda/autos" element={<TiendaAuto />} />
        <Route path="/tienda/autos-unicos" element={<TiendaAutosUnicos />} />
        <Route path='/tienda/membresias' element={<TiendaMembresia/>} />
        <Route path='/tienda/comercio' element={<TiendaComercio/>} />
        <Route path='/tienda/adicionales' element={<TiendaAdicionales/>} />
        <Route path='/tienda/organizaciones' element={<TiendaOrganizaciones/>} />
        <Route path='/eventos'element={<EventosList/>} />
        <Route path="/*" element={<E404 />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
