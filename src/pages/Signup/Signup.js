import React from "react";
import { Link } from "react-router-dom";

export default function Signup() {
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
                  <input type="fname" className="form-control rounded-3" id="floatingfname" placeholder="fname" required="required"></input>
                  <label htmlFor="floatingfname">Etunimi</label>
                </div>
                <div className="form-floating mb-3">
                  <input type="lname" className="form-control rounded-3" id="floatinglname" placeholder="lname" required="required"></input>
                  <label htmlFor="floatinglname">Sukunimi</label>
                </div> 
                <div className="form-floating mb-3">
                  <input type="lname" className="form-control rounded-3" id="floatinglname" placeholder="address" required="required"></input>
                  <label htmlFor="floatinglname">Osoite</label>
                </div>
                <div className="form-floating mb-3">
                  <input type="lname" className="form-control rounded-3" id="floatinglname" placeholder="postinro" required="required"></input>
                  <label htmlFor="floatinglname">postinumero</label>
                </div>
                <div className="form-floating mb-3">
                  <input type="lname" className="form-control rounded-3" id="floatinglname" placeholder="postipaikka" required="required"></input>
                  <label htmlFor="floatinglname">Postipaikka</label>
                </div>
                <div className="form-floating mb-3">
                  <input type="lname" className="form-control rounded-3" id="floatinglname" placeholder="puhelinnro" required="required"></input>
                  <label htmlFor="floatinglname">Puhelinnumero</label>
                </div>
                <div className="form-floating mb-3">
                  <input type="email" className="form-control rounded-3" id="floatingInput" placeholder="name@example.com" required="required"></input>
                  <label htmlFor="floatingInput">Sähköpostiosoite</label>
                </div>
                <div className="form-floating mb-3">
                  <input type="lname" className="form-control rounded-3" id="floatinglname" placeholder="kayttajatunnus" required="required"></input>
                  <label htmlFor="floatinglname">Käyttäjätunnus</label>
                </div>
                <div className="form-floating mb-3">
                  <input type="password" className="form-control rounded-3" id="floatingPassword" placeholder="Password" required="required"></input>
                  <label htmlFor="floatingPassword">Salasana</label>
                </div>
                <div className="form-floating mb-3">
                  <input type="password" className="form-control rounded-3" id="floatingConfirmPassword" placeholder="confirmPassword" required="required"></input>
                  <label htmlFor="floatingConfirmPassword">Salasana uudelleen</label>
                </div>
                <p className="form-row">
                <label className="form_label form_label-for-checkbox form-signup_terms">
                  <input id="terms" className="form_input form_input-chechbox" name="signup_terms" type="checkbox" value="forever" required="required"></input>
                  <span>I accept the <a href="#">Terms of Use</a> &amp; <a href="#">Privacy Policy</a></span>
                </label>
                <button className="w-100 mb-2 btn btn-lg rounded-3 btn-primary" type="submit">Rekisteröidy</button>
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