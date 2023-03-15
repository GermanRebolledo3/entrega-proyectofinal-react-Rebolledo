import  './app.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import NavBar from './componentes/NavBar';
import contacto from './componentes/paginas/contacto';
import inicio from './componentes/paginas/inicio';
import destacados from './componentes/paginas/Destacados';
import informacion from './componentes/paginas/informacion';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      </BrowserRouter>
        <Routes>
          <Route/ path= '/' element={<Inicio/>} >
          <Route/ path= '/' element={<Destacados/>} >
          <Route/ path= '/' element={<Informacion/>} >
          <Route/ path= '/' element={<Contacto/>} >
        </Routes>
      <BrowserRouter/>
       <NavBar/>

      </div>
  );
}

export default App;
