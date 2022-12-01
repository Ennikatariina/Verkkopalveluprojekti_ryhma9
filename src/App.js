import './App.css';
import {Routes, Route} from 'react-router-dom'
import Footer from './components/Footer'
import Home from './pages/Home/Home';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Drinks from './pages/Drinks/Drinks';
import Snacks from './pages/Snacks/Snacks';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import Form from './pages/Form/Form';
import ShoppingBasket from './components/ShoppingBasket';
import MadeBy from './pages/MadeBy/MadeBy';
import DocumentMeta from 'react-document-meta';
import { useState } from 'react';

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


  return (
    <>
    <DocumentMeta {...meta} />
    <Navbar url={URL}/>
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
        </Routes>
    </div>
    <Footer/>
    </>
  );
}



export default App;
