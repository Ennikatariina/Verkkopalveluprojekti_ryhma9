import React from 'react'

export default function Header() {
  return (
    <main >
        <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light" id="taustakuva">
          <div className="col-md-5 p-lg-5 mx-auto my-5">
            <h1 className="display-4 fw-normal">Sumppi</h1>
            <p className="lead fw-normal">Maku joka muistetaan</p>
          </div>
          <div className="product-device shadow-sm d-none d-md-block"></div>
          <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
        </div> 
      </main>
  )
}
