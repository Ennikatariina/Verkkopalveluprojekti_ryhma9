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
import ThankYou from "./pages/ThankYou/thankyou";
import { useEffect, useState } from 'react';
import CategoryList from './components/CategoryList';
import ManageCategories from './components/ManageCategories';
import axios from 'axios';
import ManageProducts from './components/ManageProducts';
import Yhteydenotto from './components/Yhteydenotto';

const meta = {
  title: 'Sumppi',
  description: 'I am a description, and I can create multiple tags',
  canonical: 'http://example.com/path/to/page',
  meta: {
      charset: 'utf-8',
      name: {
          keywords: 'react,meta,document,html,tags'
      }
  }
}


const URL ="http://localhost:3001"

function App() {
  //tilanmuuttuja käyttäjälle
  const[loggedUser, setLoggedUser] =useState(null);
  //tämä useEffect katsoo onko käyttäjä kirjautunut.
  useEffect(()=>{
    axios.post(URL+"/user_login/rest_login.php",{},{withCredentials:true})
    .then(resp =>{
      setLoggedUser(resp.data)
      
    })
    .catch(e=>console.log(e.message +" session hakeminen ei onnisnut app.js:ssä"))
  },[])
  console.log(loggedUser)
//{withCredentials:true}

//uloskirjautumiseen funktio
function logout(){
  axios.get(URL+"/user_login/rest_logout.php",{withCredentials:true})
  .then (resp => setLoggedUser(null))
  .catch(e=>console.log(e.message + "Ulos kirjautumisessa jokin ei onnistunut"));
}

  //ostoskorin tilamuuttuja
  const [shoppingbasket, setShoppingbasket] = useState([]);

  //categoryListiin tilamuuttuja
  const [selectedCategory, setSelectedCategory] =useState(1);

  //lukee localstoragesta ostoskorin tiedot mikäli selain refreshataan tai suljetaan
  useEffect(() => {
    if ("shoppingbasket" in localStorage) {
      setShoppingbasket(JSON.parse(localStorage.getItem("shoppingbasket")));
    }
  }, [])



  //Lisää tavaroita osotoskoriin
    function addToShoppingbasket(product) {
    if(shoppingbasket.some(item => item.tuotenro === product.tuotenro)) {
      const existingProduct = shoppingbasket.filter(item => item.tuotenro === product.tuotenro);
      updateAmount(parseInt(existingProduct[0].amount) +1, product);

    }
    else{
    product["amount"] = 1; //tuotelisätään ostoskoriin, oletusarvona 1 tuote
    const newShoppingbasket = [...shoppingbasket,product];
    setShoppingbasket(newShoppingbasket);
    localStorage.setItem("shoppingbasket", JSON.stringify(newShoppingbasket));
    }
  }

  //poistaa tuotteita ostoskorista
    function removeFromShoppingbasket(product) {
      const itemsRemoved =shoppingbasket.filter(item => item.tuotenro !== product.tuotenro);
      setShoppingbasket(itemsRemoved);
      localStorage.setItem("shoppingbasket", JSON.stringify(itemsRemoved));
    }

  //tuotemäärän muuttaminen ostoskorissa
    function updateAmount(amount, product) {
      product.amount = amount;
      const index = shoppingbasket.findIndex((item => item.tuotenro === product.tuotenro));
      const modifiedShoppingbasket = Object.assign([...shoppingbasket], {[index]:product});
      setShoppingbasket(modifiedShoppingbasket);
      localStorage.setItem("shoppingbasket", JSON.stringify(modifiedShoppingbasket));

    }


  return (
    <>
    <DocumentMeta {...meta} />
    <Navbar url={URL} shoppingbasket={shoppingbasket} loggedUser={loggedUser} setLoggedUser={setLoggedUser} logout={logout}/>
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
            <Route path="/order" element={<Order shoppingbasket={shoppingbasket} removeFromShoppingbasket={removeFromShoppingbasket} updateAmount={updateAmount}/>} />
            <Route path="/search/:searchPhrase" element={<Products url={URL} addToShoppingbasket={addToShoppingbasket}/>} />
            <Route path="/categoryList" element={<CategoryList url={URL}/>} />
            <Route path="/manageCategories" element={<ManageCategories url={URL} CategoryList={CategoryList} setLoggedUser={setLoggedUser} loggedUser={loggedUser}/>} />
            <Route path="/thankyou" element={<ThankYou url={URL} setLoggedUser={setLoggedUser} loggedUser={loggedUser} shoppingbasket={shoppingbasket}/>} />
            <Route path="/manageProducts" element={<ManageProducts url={URL} CategoryList={CategoryList}/>}/>
            <Route path="yhteydenotto" element={<Yhteydenotto />} />
        </Routes>
    </div>
    
    <Footer/>
    </>
  );
}



export default App;
