import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/cartContext";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import NavBar from "./components/NavBar";
import CartContainer from "./components/CartContainer/CartContainer";
import "./App.css";


import { exportData } from "./services/firestore";




function App() {

  
  return (
    <>
    
      <CartProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:categoryid" element={<ItemListContainer />} />
            <Route path="/detalle/:nombreid" element={<ItemDetailContainer />} />
            <Route path="/prueba" element={<h1>Prueba Ruta</h1>} />
            <Route path="/cart" element={<CartContainer />} />
            
            <Route path="*" element={<h1>Error 404: Page not found</h1>} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
     
      </>
  );
}

export default App;
