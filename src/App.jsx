import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Menubar } from 'primereact/menubar';
import "primeicons/primeicons.css";
import Productos from './Components/CreateProductos';
import Soluciones from './Components/CreateSoluciones';
import Servicios from './Components/CreateServicios';
import Reclamos from './Components/CreateReclamos';
import Contactos from './Components/CreateContacto';
import Home from './Components/Home';
import './App.css'

function App() {
  const items = [
    { label: 'Inicio', icon: 'pi pi-home', url: '/'},
    { label: 'Lista de Productos', icon: 'pi pi-list', url: '/productos'},
    { label: 'Soluciones', icon: 'pi pi-home', url: '/Soluciones'},
    { label: 'Servicios', icon: 'pi pi-wrench', url: '/Servicios'},
    { label: 'Reclamos', icon: 'pi pi-exclamation-circle', url: '/Reclamos'},
    { label: 'Contacto', icon: 'pi pi-phone', url: '/Contactos'},
  ];


  return (
    <BrowserRouter >
      <Menubar model={items} className="menubar"/> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/soluciones" element={<Soluciones />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/reclamos" element={<Reclamos />} />
          <Route path="/contactos" element={<Contactos />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App
