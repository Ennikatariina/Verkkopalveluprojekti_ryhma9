import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import "../index.css"
import axios from 'axios'
import ShoppingBasket from '../components/ShoppingBasket'

export default function Navbar({url}) {

  const [categories, setCategories]=useState([]);

  useEffect(() =>{
    console.log(url);
    axios.get(url+ '/products/getcategories.php')
      .then((response)=>{
        const json=response.data;
        setCategories(json);
      }).catch(error=>{
        alert(error.response===undefined ?error:error.response.data.error)
      })
  },[])
  

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Sumppi</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
           {/**<li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Etusivu</Link>
                </li>*/}
            <li className="nav-item">
              <Link className="nav-link active" to="/madeby">Made By</Link>
            </li>
             {/**<li className="nav-item dropdown">
              <a className="nav-link activedropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Tuotteet
              </a>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/drinks">Juotavat</Link></li>
                <li><Link className="dropdown-item" to="/snacks">Syötävät</Link></li>
              </ul>
              </li>**/}
            <li className="nav-item dropdown">
              <a className="nav-link activedropdown-toggle" href="#" id="dropdown01"  data-bs-toggle="dropdown" aria-expanded="false">
                Tuotteet
              </a>  
              <ul className='dropdown-menu' aria-labelledby='dropdown01'>
                {categories.map(category =>(
                  <li key={category.tuoteryhmanro}>
                    {<Link
                      className='dropdown-item'
                      to={'/products/'+ category.tuoteryhmanro}>{category.tuoteryhmanimi}
                      </Link>}
                  </li> 
                ))}
              </ul>
            </li>
          </ul>
          <div className="nav-right ms-3">
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Tuotteen nimi" aria-label="Search"></input>
              <button className="btn btn-dark" type="submit">Löydä!</button>
            </form>
          </div>
        </div>
        <div className="nav-right">
        <Link className="nav-link active" to="/Login">Kirjaudu</Link>
         { /**<a href="#" className="nav-link active">Kirjaudu</a>**/}
        </div>
        <div className="containernav-right" class ="mx-3">
                      <ShoppingBasket shoppingbasket={ShoppingBasket} />
        </div>
      </div>
    </nav>
  )
}
