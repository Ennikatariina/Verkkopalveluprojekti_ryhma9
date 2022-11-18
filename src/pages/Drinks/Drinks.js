import React from 'react'
import './styledrinks.css'
import picture2 from '../../images/kahvia.jpg'


export default function Drinks() {
  return (
    <div>
       
    <div className="container-fluid">
     <div className="row-mx-5 mt-4">
      
     <div className="w-100 px-2" >
    <div className="card border-0">

    <img src={picture2} className="card-img-top" alt="kuva"style={{width: '18rem'}} />
     
      <div className = "card-body">
      <div className="row mb-2">
            <div className="col">
              <div className='mb-0'>
        <div className = "card-title">Card Title</div>
        <div className= "card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
          </div>
      </div>
    </div>
   </div>
   </div>

   </div>
   </div>
</div>
</div>
   
   
        
         <div className="container-lg">
          <div className="row mx-5 mt-4">
            
          <div className='col-sm-4'>
          <div className="w-100 px-2">
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

          <div className='col-sm-4'>
          <div className="w-100 px-2">
    
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
        </div>
        </div>

      </div>
    
  )
}
