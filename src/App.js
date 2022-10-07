import './App.css';
import Product from './Components/Product';
import Navbar from './Components/Navbar';
import { useEffect, useState } from 'react';
import axios from 'axios'

function App() {

  const [skip, setSkip] = useState(0)
  const [products, setProducts] = useState([])

  useEffect(() => {
    const productData = async () => {
      try{
      const response = await axios.get(`https://dummyjson.com/products?skip=${skip}&limit=5`)
      const newProducts = response.data.products
      setProducts([...products, ...newProducts])
    }
    catch(error){
      console.log(error)
    }
  }
    const handleScroll = () => {
        const currentScroll = window.innerHeight + window.scrollY
        const totalScrollHeight = document.documentElement.offsetHeight
        if(currentScroll+1 >= totalScrollHeight){
        setSkip(skip+5)
      }
    }
    productData()
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [skip])


  return (
    <div className="App">
      <Navbar />
      <Product products={products} />
    </div>
  );
}

export default App;
