import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { CartProvider } from './components/context/CartContext';
import Cart from './components/Cart/Cart';

function App() {
  return (
    <div className='App'>
       <BrowserRouter>
       <CartProvider>
              <NavBar />
              <Routes>
                <Route path='/' element={<ItemListContainer greeting={'Listado de todos los productos'}/>}/>
                <Route path='/category/:categoryId' element={<ItemListContainer greeting={'Listado de los productos filtrados: '}/>}/>
                <Route path='/item/:itemId' element={<ItemDetailContainer />} />
                <Route path='/cart' element={<Cart/>}/>
                <Route path='*' element={<h1>ERROR 404</h1>} />
              </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  )
}

export default App;
