import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from 'axios';

const URL ="http://localhost/verkkokauppa_backend"
export default function Login(props) {
  const[uname, setUname]=useState("")
  const[pw, setPw]=useState("")

  function checklogin(){
    const formData =new FormData();
    formData.append("kayttajatunnus", uname);
    formData.append("salasana", pw);
    
    axios.post(URL+"/user_login/rest_login.php",formData,{})
    .then (
      resp =>{ 
        console.log(resp.data+" Heps") 
        props.setLoggedUser(resp.data)
  })
    .catch (e=> console.log(e))
  }

    return (
    <div className="modal modal-signin position-static d-block bg-secondary py-5" tabIndex="-1" role="dialog" id="modalSignin">
        <div className="modal-dialog" role="document">
          <div className="modal-content rounded-4 shadow">
            <div className="modal-header p-5 pb-4 border-bottom-0">
              <h1 className="fw-bold mb-0 fs-2">Kirjaudu sisään</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
      
            <div className="modal-body p-5 pt-0">
              <form className="">
                <div className="form-floating mb-3">
                  <input type="text" className="form-control rounded-3" id="floatingInput" placeholder="name@example.com" required="required" value={uname} onChange={e=>setUname(e.target.value)}></input>
                  <label htmlFor="floatingInput">Käyttäjätunnus</label>
                </div>
                <div className="form-floating mb-3">
                  <input type="text" className="form-control rounded-3" id="floatingPassword" placeholder="Password" required="required" value={pw} onChange={e=>setPw(e.target.value)}></input>
                  <label htmlFor="floatingPassword">Salasana</label>
                </div>
                <p className="form-row">
                <label className="form_label form_label-for-checkbox form-login_rememberme">
                  <input id="rememberme" className="form_input form_input-chechbox" name="rememberme" type="checkbox" value="forever"></input>
                  <span>Muista minut</span>
                </label>
                <button className="w-100 mb-2 btn btn-lg rounded-3 btn-primary" type="button" onClick={checklogin}>Kirjaudu sisään</button>
                </p>
              </form>
              <div className="modal-divider"></div>
              <Link className="nav-link active link-dark px-2" to="/Signup">Uusi käyttäjä? Rekisteröidy</Link>
                {/**<a href="#" className="nav-link link-dark px-2">Uusi käyttäjä? Rekisteröidy</a> */}
                <a href="#" className="nav-link link-dark px-2">Unohtuiko salasana?</a>
              <small className="text-muted">Rekisteröitymällä sitoudut käyttöehtoihin</small>
            </div>
          </div>
        </div>
    </div>
    )
}