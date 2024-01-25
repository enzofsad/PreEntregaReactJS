import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element ={<ItemListContainer/>}/>
          <Route path='/category/:categoryId' element ={<ItemListContainer/>}/>
          <Route path='/item/:itemId' element ={<ItemDetailContainer/>}/>
          <Route path='*' element ={<h1>ERROR 404</h1>}/>
        </Routes>
      </BrowserRouter>
        <ItemListContainer greeting={"Bienvenidos"} />
        <ItemDetailContainer/>
        <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log("Cantidad agregada", quantity)}/>
    </div>
    )
}

export default App;
