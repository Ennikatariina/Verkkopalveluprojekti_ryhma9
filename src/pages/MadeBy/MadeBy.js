import React from 'react'
import picture4 from '../../images/Avatarit/Aikku_avatar.png'
import picture5 from '../../images/Avatarit/Avatar_Enni.png'
import picture6 from '../../images/Avatarit/Avatar_JennyK.jpg'
import picture7 from '../../images/Avatarit/Jonnaavatar.png'
import './MadeBy.css'

export default function MadeBy() {
    return (
    <div>
      <div className='otsikkomadeby'>
<h1>Made By</h1>
<p>Tähän tekijät ja avataret?</p>
</div>
<div className="container-fluid">
  <div className="row mx-5 mt-4">
    
<div className="col-md-12  col-lg-3">
      <div className="card" style={{width: "auto"}}>
        <img src={picture4} className="img-thumbnail" alt="..."/>
        <div className="card-body">
          <h3>Aila-Mari</h3>
          <p className="card-text">juu</p>
        </div>
      </div>
    </div>
    <div className="col-md-12 col-lg-3">
      <div className="card" style={{width: "auto"}}>
        <img src={picture5} className="img-thumbnail" alt="..."/>
        <div className="card-body">
          <h3>Enni</h3>
          <p className="card-text"> juu
          </p>
        </div> 
      </div>
    </div>
    <div className="col-md-12 col-lg-3">
      <div className="card" style={{width: "auto"}}>
        <img src={picture6} className="img-thumbnail" alt="..."/>
        <div className="card-body">
          <h3>Jenny</h3>
          <p className="card-text">juu 
             </p>
        </div>
      </div>
    </div>
  
    <div className="col-md-12 col-lg-3">
      <div className="card" style={{width:"auto"}}>
        <img src={picture7} className="img-thumbnail" alt="..."/>
        <div className="card-body">
          <h3>Jonna</h3>
          <p className="card-text">juu</p>
        </div>
      </div>
    </div>
</div>
</div>
</div>

)
}
