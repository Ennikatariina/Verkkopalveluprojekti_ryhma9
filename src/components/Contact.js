import React from "react"
import { useState } from "react"
import "../index.css"
import axios from "axios"

const URL ="http://localhost:3001"

export default function Contact() {
  const[etunimi, setEtunimi]=useState("")
  const[sukunimi, setSukunimi]=useState("")
  const[email, setEmail]=useState("")
  const[puhnro, setPuhnro]=useState("")
  const[viesti, setViesti]=useState("")

    function sendContact(e){
      e.preventDefault();

    const formData =new FormData();
    formData.append("etunimi", etunimi);
    formData.append("sukunimi", sukunimi);
    formData.append("email", email);
    formData.append("puhnro", puhnro);
    formData.append("viesti", viesti);

      //Muutetaan formData jsoniksi
    let object ={}
    formData.forEach((value, key) => object[key]=value);
    let json=JSON.stringify(object)
    console.log(json);

    axios.post(URL+"/contact/contact.php",json,{withCredentials:true})
    .then (response =>{ console.log(response.data) 
         }).catch (e=> console.log(e))
  }

    return (

<div id='formbackground'>
<div className="container mt-2 mb-4">
<div id="form-container">
<h3>Yhteydenottolomake</h3>
<p>Tähdellä (*) merkatut tiedot ovat pakollisia</p>
<form className="row g-3">
<div className="col-md-6">
  <label for="firstname" className="form-label">Etunimi*</label>
  <input type="text" className="form-control" id="firstname" value={etunimi} onChange={e=>setEtunimi(e.target.value)} required="required"></input>
</div>
<div className="col-md-6">
  <label for="lastname" className="form-label">Sukunimi*</label>
  <input type="text" className="form-control" id="lastname" value={sukunimi} onChange={e=>setSukunimi(e.target.value)} required="required"></input>
</div>
<div className="col-md-8">
  <label for="emailInfo" className="form-label">Sähköpostiosoite*</label>
  <input type="email" className="form-control" id="emailInfo" value={email} onChange={e=>setEmail(e.target.value)} required="required"></input>
</div>
<div className="col-md-4">
  <label for="phoneNumber" className="form-label">Puhelinnumero</label>
  <input type="text" className="form-control" id="phoneNumber" placeholder="+358 40 123 456 7" value={puhnro} onChange={e=>setPuhnro(e.target.value)}></input>
</div>
<div className="col-md-12">
  <label for="comments" className="form-label">Tiedustelut, kysymykset, kommentit (max. 1000 merkkiä)*</label>
  <textarea className="form-control" id="comments" rows="10" value={viesti} onChange={e=>setViesti(e.target.value)} required="required"></textarea>
</div>
<div className="col-md-12">
  <button type="submit" id="enterButton" className="buttons btn btn-secondary btn-lg" onClick={sendContact}>Lähetä</button>
</div>
</form>
</div>
</div>
</div>
    )
}