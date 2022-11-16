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

<div className="card mb-3">
  <div className="row g-0">
    <div className="col-md-4">
    <img src={picture1} className="img-fluid rounded-start " alt="kuva"/> 
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}
