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
              <a className="nav-link" href="#">Tiskin takana</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Tuotteet
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Juotavat</a></li>
                <li><a className="dropdown-item" href="#">Syötävät</a></li>
              </ul>
              </li>
          </ul>
        </div>
        <div className="nav-right">
            <a href="#" className="nav-link link-dark px-2">Kirjaudu</a> </div>
            <div className="containernav-right">
    <a className="nav-right mx-3" href="#">
      <img src={shopping} alt="" width="40" height="auto"></img>
    </a>
  </div>
      </div>
    </nav>
  )
}
