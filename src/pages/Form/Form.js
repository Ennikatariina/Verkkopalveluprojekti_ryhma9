import React from "react";

export default function Form() {
    return (
    <div>
           <div className="modal modal-form position-static d-block bg-secondary py-5" tabIndex="-1" role="dialog" id="modalForm">
        <div className="modal-dialog" role="document">
          <div className="modal-content rounded-4 shadow">
            <div className="modal-header p-5 pb-4 border-bottom-0">
              <h1 className="fw-bold mb-0 fs-2">Yhteydenottolomake</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
          
    
        
        <form className="row g-3 p-5">
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
          <div className="col-md">
            <button type="submit" id="enterButton" className="w-100 mb-2 btn btn-lg rounded-3 btn-primary">Lähetä</button>
           
          </div>
        </form>
      </div>
    </div>
    </div>  
    
   </div>
    
    )
  }
  