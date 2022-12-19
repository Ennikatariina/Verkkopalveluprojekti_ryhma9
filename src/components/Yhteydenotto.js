import React from "react"
import "../index.css"

export default function Yhteydenotto() {
    return (

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
    )
}