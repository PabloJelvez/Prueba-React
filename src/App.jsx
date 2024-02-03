import { useState, useEffect } from 'react';
import './App.css';
import Buscador from './components/Buscador';
import MiApi from './components/MiApi';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import imagen from './assets/img/Portada.jpg';
import Footer from './components/Footer';

function App() {
  const [users, setUsers] = useState([])
  const [search, setSearch] = useState("");
  const [sortProducts, setSortProducts] = useState("ascendente");
  
  useEffect(() => {
    
    const getData =  async () => {
      const route = "https://fakestoreapi.com/products"
      try {
        const response = await fetch(route)
        const formatedResponse = await response.json()
        
        const results = formatedResponse.filter((user) =>
          user.title.toLowerCase().includes(search.toLocaleLowerCase())
        );
        
        results.sort((a, b) => {
          if(sortProducts === "ascendente") {
           return a.price - b.price
          } else {
           return b.price - a.price
          }
        })
        setUsers(results)
      } catch (error) {
        console.log(error)
      }
    };
    
    getData();
  }, [search, sortProducts]); 

  return (
    <>
      <Header imagen={imagen}  />
      <Buscador updateSearch={setSearch} />
      <button className='buttonSort' onClick={() => setSortProducts(sortProducts === "ascendente" ? "descendente" : "ascendente")}>Ordenar por precios</button>
      <MiApi users={users} />
      <Footer />
    </>
  )
}

export default App
