import React, {useState, useEffect} from 'react'
import { Link, Navigate } from 'react-router-dom'
import "../index.css"
import axios from 'axios'
import ShoppingBasket from '../components/ShoppingBasket'
import Login from '../pages/Login/Login'

export default function Navbar({url, shoppingbasket}) {

  const [categories, setCategories]=useState([]);
  const [search, setSearch] = useState([]);

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

function executeSearch(e){
    if (e.charCode ===13){
      e.preventDefault();
      Navigate('/search/' + search)
    }
  }
  

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
          <div className='nav-right ms-3'>
          <form className = "d-flex">
            <input 
              value = {search}
              onChange= {(e) => setSearch(e.target.value)}
              onKeyPress = {(e)=> executeSearch(e)}
              className = "form-control mr-sm-2"
              type="search"
              placeholder='Etsi'
              aria-label='Search'></input>
          </form>
          </div>
          {/**<div className="nav-right ms-3">
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Tuotteen nimi" aria-label="Search"></input>
              <button className="btn btn-dark" type="submit">Löydä!</button>
            </form>
          </div>*/}
        </div>
        <div className="nav-right">
          <li className="nav-item dropdown">
              <a className="nav-link activedropdown-toggle" href="#" id="dropdown01"  data-bs-toggle="dropdown" aria-expanded="false">
                Kirjaudu
              </a>  
              <ul className='dropdown-menu dropdown-menu-end dropdown-width' aria-labelledby='dropdown01'>
                <Login />
              </ul>
            </li>

        {/**<Link className="nav-link active" onClick= loginClick>Kirjaudu</Link>
         { /**<a href="#" className="nav-link active">Kirjaudu</a>**/}
        </div>
        <div className="containernav-right mx-3">
                      <ShoppingBasket shoppingbasket={shoppingbasket} />
        </div>
      </div>
    </nav>
  )
}
/**<div class="navbar-nav action-buttons ml-auto">
			<a href="#" data-toggle="dropdown" class="nav-item nav-link dropdown-toggle mr-3">Login</a>
			<div class="dropdown-menu login-form">
				<form action="/examples/actions/confirmation.php" method="post">
					<div class="form-group">
						<label>Username</label>
						<input type="text" class="form-control" required="required">
					</div>
					<div class="form-group">
						<div class="clearfix">
							<label>Password</label>
							<a href="#" class="float-right text-muted"><small>Forgot?</small></a>
						</div>                            
						<input type="password" class="form-control" required="required">
					</div>
					<input type="submit" class="btn btn-primary btn-block" value="Login">
				</form>					
			</div>			
			<a href="#" class="btn btn-primary">Get Started</a>
		</div>
	</div>*/