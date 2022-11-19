import React from 'react'
import shopping from '../images/shopping_basket.png'
import "../index.css"

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Sumppi</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Etusivu</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">Tiskin takana</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link activedropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Tuotteet
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Juotavat</a></li>
                <li><a className="dropdown-item" href="#">Syötävät</a></li>
              </ul>
            </li>
          </ul>
          <div className="nav-right ms-3">
            <form class="d-flex">
              <input class="form-control me-2" type="search" placeholder="Tuotteen nimi" aria-label="Search"></input>
              <button class="btn btn-dark" type="submit">Löydä!</button>
            </form>
          </div>
        </div>
        <div className="nav-right">
          <a href="#" className="nav-link active">Kirjaudu</a>
        </div>
        <div className="containernav-right">
          <a className="nav-right mx-3" href="#">
            <img src={shopping} alt="" width="40" height="auto"></img>
          </a>
        </div>
      </div>
    </nav>
  )
}
