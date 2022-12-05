import React from "react";
import picture2 from '../../images/kahvia.jpg'
import './ProductCard.css'

export default function ProductCard(props, addToShoppingbasket, product){


    return(
        <div className='col-sm-4'>
        <div className="w-100 px-2">
          <div className="card border-0">
            <img src={picture2} className="card-img-top" alt="kuva" />
              <div className="card-body">
              <div className="row mb-2">
                <div className="col">
                  <h5 className="mb-0">{props.param.tuotenimi}</h5>
                </div>
                <div className="col-auto">
                  <span className="fs-4 font-serif text-black">{props.param.hinta}€</span>
                </div>
              </div>
              <p className="mb-0">
                {props.param.kuvaus}
              </p>
              <button className="w-50 mb-2 btn btn-sm rounded-3 btn-primary" type="submit" onclick={e => addToShoppingbasket(product)}>Lisää ostoskoriin</button>
  
            </div>
          </div>
        </div>
      </div>
    )
} 


