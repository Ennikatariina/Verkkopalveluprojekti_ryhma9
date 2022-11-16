import React from 'react'
import picture1 from '../images/tarjoiluehdotus.jpg'

export default function Home() {
  return (
    <div className='container-fluid'>
      <div id="homepageheader" className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center">
        <h2>Lyhyt esittely tähän</h2>
        <h2>tai</h2>
        <h2>kahvilan ajatus</h2>
      </div>

/*Kortti 1*/ 
<div className="card mb-3 container">
  <div className="row g-0">
    <div className="col-md-6">
    <img src={picture1} className="img-fluid" alt="kuva"/> 
    </div>
    <div className="col-md-6">
      <div className="card-body">
        <h5 className="card-title">Kahvit</h5>
        <p className="card-text">Uskomattomat kahvit....</p>
      </div>
    </div>
  </div>
</div>
/*Kortti 2 */
<div className="card mb-3 container">
  <div className="row g-0">
  <div className="col-md-6">
      <div className="card-body">
        <h5 className="card-title">Teet</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
    <div className="col-md-6">
    <img src={picture1} className="img-fluid" alt="kuva"/> 
    </div>
  </div>
</div>

/*Kortti 3 */
<div className="card mb-3 container">
  <div className="row g-0">
    <div className="col-md-6">
    <img src={picture1} className="img-fluid" alt="kuva"/> 
    </div>
    <div className="col-md-6">
      <div className="card-body">
        <h5 className="card-title">Makeat herkut</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
</div>
/*Kortti 4 */
<div className="card mb-3 container">
  <div className="row g-0">
  <div className="col-md-6">
      <div className="card-body">
        <h5 className="card-title">Suolat herkut</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
    <div className="col-md-6">
    <img src={picture1} className="img-fluid" alt="kuva"/> 
    </div>
  </div>
</div>
    </div>
  )
}
