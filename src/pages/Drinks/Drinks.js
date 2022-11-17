import React from 'react'
import picture2 from '../../images/kahvia.jpg'

export default function Drinks() {
  return (
    <><div>Drinks</div>
    <div class="container-lg">
      <div className="row mx-5 mt-4">

        <div className="w-100 px-2" style="max-width: 320px;">

          <div className="card border-0">

            <img src={picture2} className="card-img-top" alt="kuva" />

            <div className="card-body">

              <div className="row mb-2">
                <div className="col">
                  <h5 className="mb-0">Lorem ipsum dolor sit amet consectetur</h5>
                </div>
                <div className="col-auto">
                  <span className="fs-4 font-serif text-black">$18</span>
                </div>
              </div>

              <p className="mb-0">
                In perspiciatis nisi dicta, aperiam magnam eaque laborum iste.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div></> 

  )
}
