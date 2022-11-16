import React from 'react'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
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
            <li className="nav-item">
              <a className="nav-link" href="#">Hinnasto</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Tuotteet
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Juomat</a></li>
                <li><a className="dropdown-item" href="#">Makeat</a></li>
                <li><a className="dropdown-item" href="#">Suolaiset</a></li>
              </ul>
            </li>
            <div className= "navbar-right">
            <li className="nav-item"><a href="#" className="nav-link link-dark px-2">Kirjaudu</a></li>
            </div>
            <div className= "navbar-right">
            <li className="nav-item"><a href="#" className="nav-link link-dark px-2">Rekisteröidy</a></li>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  )
}
