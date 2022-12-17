import React from 'react'
import picture1 from '../../images/tarjoiluehdotus.jpg'
import './home.css'

export default function Home() {
  return (
    <div className='container-fluid'>
      <div id="homepageheader" className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center">
        <h2>Lyhyt esittely tähän</h2>
        <h2>tai</h2>
        <h2>kahvilan ajatus</h2>
      </div>

      <div className='vgr-cards '>
      <div className="card mb-3 container">
        <div className="row g-0">
          <div className="col-md-6 card-img-body">
            <img src={picture1} className="img-fluid card-img" alt="kuva" />
          </div>
          <div className="col-md-6">
            <div className="card-body tekstikeskelle">
              <h5 className="card-title">Kahvit</h5>
              <p className="card-text">Uskomattomat kahvit Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lacus ante, finibus sit amet faucibus quis, consectetur eu mauris. Suspendisse tempor magna tortor, tempus egestas leo tempor et. </p>
            </div>
          </div>
        </div>
      </div>

      <div className="card mb-3 container">
        <div className="row g-0">
          <div className="col-md-6 card-img-body">
            <img src={picture1} className="img-fluid card-img" alt="kuva" />
          </div>
          <div className="col-md-6">
            <div className="card-body tekstikeskelle">
              <h5 className="card-title">Teet</h5>
              <p className="card-text">Aistikkaat teet Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lacus ante, finibus sit amet faucibus quis, consectetur eu mauris. Suspendisse tempor magna tortor, tempus egestas leo tempor et. </p>
            </div>
          </div>
        </div>
      </div>

      <div className="card mb-3 container">
        <div className="row g-0">
          <div className="col-md-6 card-img-body">
            <img src={picture1} className="img-fluid card-img" alt="kuva" />
          </div>
          <div className="col-md-6">
            <div className="card-body tekstikeskelle">
              <h5 className="card-title">Makeat leivokset</h5>
              <p className="card-text">Maistuvat maukkaat leivokset Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lacus ante, finibus sit amet faucibus quis, consectetur eu mauris. Suspendisse tempor magna tortor, tempus egestas leo tempor et. </p>
            </div>
          </div>
        </div>
      </div>

      <div className="card mb-3 container">
        <div className="row g-0">
          <div className="col-md-6 card-img-body">
            <img src={picture1} className="img-fluid card-img" alt="kuva" />
          </div>
          <div className="col-md-6">
            <div className="card-body tekstikeskelle">
              <h5 className="card-title">Suolaiset </h5>
              <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lacus ante, finibus sit amet faucibus quis, consectetur eu mauris. Suspendisse tempor magna tortor, tempus egestas leo tempor et. </p>
            </div>
          </div>
        </div>
      </div>
      </div>
      <div id='formbackground'>
        
      <div className="container mt-2 mb-4">
    <div id="form-container">
    <h3>Yhteydenottolomake</h3>
    <form className="row g-3">
    <div className="col-md-6">
      <label for="firstname" className="form-label">Etunimi</label>
      <input type="text" className="form-control" id="firstname" required></input>
    </div>
    <div className="col-md-6">
      <label for="lastname" className="form-label">Sukunimi</label>
      <input type="text" className="form-control" id="lastname" required></input>
    </div>
    <div className="col-md-8">
      <label for="emailInfo" className="form-label">Sähköpostiosoite</label>
      <input type="email" className="form-control" id="emailInfo" required></input>
    </div>
    <div className="col-md-4">
      <label for="phoneNumber" className="form-label">Puhelinnumero</label>
      <input type="text" className="form-control" id="phoneNumber" placeholder="+358 40 123 456 7"></input>
    </div>
    <div className="col-md-12">
      <label for="comments" className="form-label">Tiedustelut, kysymykset, kommentit</label>
      <textarea className="form-control" id="comments" rows="3" required></textarea>
    </div>
    <div className="col-md-12">
      <button type="submit" id="enterButton" className="buttons btn btn-secondary btn-lg">Lähetä</button>
    </div>
  </form>
</div>
</div>
        
      </div>
    </div>


  )
}
