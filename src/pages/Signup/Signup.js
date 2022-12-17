import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from 'axios';
const URL ="http://localhost:3001"

export default function Signup() {

  const[etunimi, setEtunimi]=useState("")
  const[sukunimi, setSukunimi]=useState("")
  const[osoite, setOsoite]=useState("")
  const[postitmp, setPostitmp]=useState("")
  const[postinro, setPostinro]=useState("")
  const[puhelinnro, setPuhelinnro]=useState("")
  const[email, setEmail]=useState("")
  const[kayttajatunnus, setKayttajatunnus]=useState("")
  const[salasana, setSalasana]=useState("")

  function register(){
    const formData =new FormData();
    formData.append("etunimi", etunimi);
    formData.append("sukunimi", sukunimi);
    formData.append("osoite", osoite);
    formData.append("postinro", postinro);
    formData.append("postitmp", postitmp);
    formData.append("puhelinnro", puhelinnro);
    formData.append("email", email);
    formData.append("kayttajatunnus", kayttajatunnus);
    formData.append("salasana", salasana);

      //Muutetaan formData jsoniksi
    let object ={}
    formData.forEach((value, key) => object[key]=value);
    let json=JSON.stringify(object)

    axios.post(URL+"/user_login/rest_register.php",json,{withCredentials:true})
    .then (response =>{ console.log(response.data.token) 
         }).catch (e=> console.log(e))
  }



    return (
        <div className="modal modal-signin position-static d-block bg-secondary py-5" tabIndex="-1" role="dialog" id="modalSignin">
        <div className="modal-dialog" role="document">
          <div className="modal-content rounded-4 shadow">
            <div className="modal-header p-5 pb-4 border-bottom-0">
              <h1 className="fw-bold mb-0 fs-2">Rekisteröidy</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
      
      
            <div className="modal-body p-5 pt-0">
              <form className="">
                <div className="form-floating mb-3">
                  <input type="fname" className="form-control rounded-3" id="floatingfname" placeholder="fname" value={etunimi} onChange={e=>setEtunimi(e.target.value)} required="required"></input>
                  <label htmlFor="floatingfname">Etunimi</label>
                </div>
                <div className="form-floating mb-3">
                  <input type="lname" className="form-control rounded-3" id="floatinglname" placeholder="lname" value={sukunimi} onChange={e=>setSukunimi(e.target.value)} required="required"></input>
                  <label htmlFor="floatinglname">Sukunimi</label>
                </div> 
                <div className="form-floating mb-3">
                  <input type="lname" className="form-control rounded-3" id="floatinglname" placeholder="address" value={osoite} onChange={e=>setOsoite(e.target.value)} required="required"></input>
                  <label htmlFor="floatinglname">Osoite</label>
                </div>
                <div className="form-floating mb-3">
                  <input type="lname" className="form-control rounded-3" id="floatinglname" placeholder="postinro" value={postinro} onChange={e=>setPostinro(e.target.value)} required="required"></input>
                  <label htmlFor="floatinglname">postinumero</label>
                </div>
                <div className="form-floating mb-3">
                  <input type="lname" className="form-control rounded-3" id="floatinglname" placeholder="postipaikka" value={postitmp} onChange={e=>setPostitmp(e.target.value)} required="required"></input>
                  <label htmlFor="floatinglname">Postipaikka</label>
                </div>
                <div className="form-floating mb-3">
                  <input type="lname" className="form-control rounded-3" id="floatinglname" placeholder="puhelinnro" value={puhelinnro} onChange={e=>setPuhelinnro(e.target.value)} required="required"></input>
                  <label htmlFor="floatinglname">Puhelinnumero</label>
                </div>
                <div className="form-floating mb-3">
                  <input type="email" className="form-control rounded-3" id="floatingInput" placeholder="name@example.com" value={email} onChange={e=>setEmail(e.target.value)} required="required"></input>
                  <label htmlFor="floatingInput">Sähköpostiosoite</label>
                </div>
                <div className="form-floating mb-3">
                  <input type="lname" className="form-control rounded-3" id="floatinglname" placeholder="kayttajatunnus"value={kayttajatunnus} onChange={e=>setKayttajatunnus(e.target.value)}required="required"></input>
                  <label htmlFor="floatinglname">Käyttäjätunnus</label>
                </div>
                <div className="form-floating mb-3">
                  <input type="password" className="form-control rounded-3" id="floatingPassword" placeholder="Password" value={salasana} onChange={e=>setSalasana(e.target.value)} required="required"></input>
                  <label htmlFor="floatingPassword">Salasana</label>
                </div>
                <p className="form-row">
                <label className="form_label form_label-for-checkbox form-signup_terms">
                  <input id="terms" className="form_input form_input-chechbox" name="signup_terms" type="checkbox" value="forever" required="required"></input>
                  <span>I accept the <a href="#">Terms of Use</a> &amp; <a href="#">Privacy Policy</a></span>
                </label>
                <button className="w-100 mb-2 btn btn-lg rounded-3 btn-primary" type="button" onClick={register}>Rekisteröidy</button>
                </p>
              </form>
              <div className="modal-divider"></div>
              <Link className="nav-link active link-dark px-2" to="/Login">Oletko jo käyttäjä? kirjaudu sisään</Link>
               {/**  <a href="#" className="nav-link link-dark px-2">Oletko jo käyttäjä? kirjaudu sisään</a>*/}
              <small className="text-muted">Rekisteröitymällä sitoudut käyttöehtoihin</small>
            </div>
          </div>
        </div>
      </div>
    )
}