import React from "react";

export default function Signup() {
    return (
        <div class="modal modal-signin position-static d-block bg-secondary py-5" tabindex="-1" role="dialog" id="modalSignin">
        <div class="modal-dialog" role="document">
          <div class="modal-content rounded-4 shadow">
            <div class="modal-header p-5 pb-4 border-bottom-0">
              <h1 class="fw-bold mb-0 fs-2">Rekisteröidy</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
      
            <div class="modal-body p-5 pt-0">
              <form class="">
                <div class="form-floating mb-3">
                  <input type="fname" class="form-control rounded-3" id="floatingfname" placeholder="fname" required="required"></input>
                  <label for="floatingfname">Etunimi</label>
                </div>
                <div class="form-floating mb-3">
                  <input type="lname" class="form-control rounded-3" id="floatinglname" placeholder="lname" required="required"></input>
                  <label for="floatinglname">Sukunimi</label>
                </div>
                <div class="form-floating mb-3">
                  <input type="email" class="form-control rounded-3" id="floatingInput" placeholder="name@example.com" required="required"></input>
                  <label for="floatingInput">Sähköpostiosoite</label>
                </div>
                <div class="form-floating mb-3">
                  <input type="password" class="form-control rounded-3" id="floatingPassword" placeholder="Password" required="required"></input>
                  <label for="floatingPassword">Salasana</label>
                </div>
                <div class="form-floating mb-3">
                  <input type="password" class="form-control rounded-3" id="floatingConfirmPassword" placeholder="confirmPassword" required="required"></input>
                  <label for="floatingConfirmPassword">Salasana uudelleen</label>
                </div>
                <p class="form-row">
                <label class="form_label form_label-for-checkbox form-signup_terms">
                  <input id="terms" class="form_input form_input-chechbox" name="signup_terms" type="checkbox" value="forever" required="required"></input>
                  <span>I accept the <a href="#">Terms of Use</a> &amp; <a href="#">Privacy Policy</a></span>
                </label>
                <button class="w-100 mb-2 btn btn-lg rounded-3 btn-primary" type="submit">Rekisteröidy</button>
                </p>
              </form>
              <div class="modal-divider"></div>
                <a href="#" class="nav-link link-dark px-2">Oletko jo käyttäjä? kirjaudu sisään</a>
              <small class="text-muted">Rekisteröitymällä sitoudut käyttöehtoihin</small>
            </div>
          </div>
        </div>
      </div>
    )
}