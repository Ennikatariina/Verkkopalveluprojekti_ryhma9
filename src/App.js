import './App.css';
import {Routes, Route} from 'react-router-dom';
import Footer from './components/Footer';
import Home from './pages/Home/Home';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Drinks from './pages/Drinks/Drinks';
import Snacks from './pages/Snacks/Snacks';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import Form from './pages/Form/Form';
import MadeBy from './pages/MadeBy/MadeBy';
import DocumentMeta from 'react-document-meta';
import Products from './pages/Products/Products';
import Order from "./pages/Order/Order";
import { useEffect, useState } from 'react';


const meta = {
  title: 'Some Meta Title',
  description: 'I am a description, and I can create multiple tags',
  canonical: 'http://example.com/path/to/page',
  meta: {
      charset: 'utf-8',
      name: {
          keywords: 'react,meta,document,html,tags'
      }
  }
}


const URL ="http://localhost/verkkokauppa_backend"

function App() {

  //ostoskorin tilamuuttuja
  const [shoppingbasket, setShoppingbasket] = useState([]);

  //lukee localstoragesta ostoskorin tiedot mikäli selain refreshataan tai suljetaan
  useEffect(() => {
    if ("shoppingbasket" in localStorage) {
      setShoppingbasket(JSON.parse(localStorage.getItem("shoppingbasket")));
    }
  }, [])

  //Lisää tavaroita osotoskoriin
    function addToShoppingbasket(product) {
    const newShoppingbasket = [...shoppingbasket,product];
    setShoppingbasket(newShoppingbasket);
    localStorage.setItem("shoppingbasket", JSON.stringify(newShoppingbasket));
    console.log("HEp)")
  }

  //poistaa tuotteita ostoskorista, tällä hetkellä tyhjentää koko ostoskorin, muokkaus niin että poistaa tuotteen kerrallaan
    function removeFromShoppingbasket(product) {
      const itemsRemoved =shoppingbasket.filter(item => item.id !== product.id);
      setShoppingbasket(itemsRemoved);
      localStorage.setItem("shoppingbasket", JSON.stringify(itemsRemoved));
    }


  return (
    <>
    <DocumentMeta {...meta} />
    <Navbar url={URL} shoppingbasket={shoppingbasket}/>
    <Header />
    <div>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/drinks" element={<Drinks/>} />
            <Route path="/snacks" element={<Snacks/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/signup" element={<Signup/>} />
            <Route path="/form" element={<Form/>} />
            <Route path="/madeby" element={<MadeBy/>} />
            <Route path="/products/:tuoteryhmanro" element={<Products url={URL} addToShoppingbasket={addToShoppingbasket}/>} />
            <Route path="/order" element={<Order shoppingbasket={shoppingbasket} removeFromShoppingbasket={removeFromShoppingbasket} />} />
            
        </Routes>
    </div>
    <Footer/>
    </>
  );
}



export default App;
