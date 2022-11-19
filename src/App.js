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



function App() {
  return (
    <>
    <Navbar />
    <Header />
    <div>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/drinks" element={<Drinks/>} />
            <Route path="/snacks" element={<Snacks/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/signup" element={<Signup/>} />
        </Routes>
    </div>
    <Footer/>
    </>
  );
}

export default App;
