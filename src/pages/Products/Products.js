import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ProductCard from '../../components/ProductCard/ProductCard';

export default function Products({url, addToShoppingbasket}) {
   const[category,setCategoryName] = useState('');
   const [products, setProducts] = useState([]); //lista tuotteista
   

   let params = useParams(); //lukee osoitteesta lopun (mikä on category.id eli meillä tuoteryhmänro?) Jos tämä muuttuu ajetaan useEffect.

   //useEfect suoritetaan kun sivu ladataan, mutta koska [params] on lopussa, suoritetaan useEffect kun params muuttuu.
   useEffect(() =>{
     let address = '';
      // tarkistaa etsitäänkö tuotekategoria vai halutaanko näyttää hakusanan tuote/tuotteet
     if (params.searchPhrase === undefined){ 
      address= url + '/products/getproducts.php/' + params.tuoteryhmanro;
     } else{
      address = url + '/products/searchproducts.php/' + params.searchPhrase;
     }
      
      

       axios.get(address) //backensiin tuoteryhmanro ja saadaan sinne haku, että hakee valitun kategorian tuotteen. 
         .then((response)=>{
           const json = response.data;
           //console.log(json);
           if(params.searchPhrase === undefined){
           setCategoryName(json.category);
           //setProducts(json);
           setProducts(json.products);
           //setName(json.category);
           }else{
            setCategoryName(params.searchPhrase);
            setProducts(json);
          }

         }).catch(error=>{
           alert(error.response === undefined ? error : error.response.data.error)
         })
     },[params]) //jos params muuttuu niin useEffect muuttuu.

   return (
       <div>
         <h3> {category} </h3> {/**{category} otsikon sisällä eli näkyy tuoteryhmän nimi */}
         <div className="container-lg">
            <div className="row mx-5 mt-4">
         {products.map(product => (
            <ProductCard param={product}  addToShoppingbasket={addToShoppingbasket}/>
          //<button className="btn btn-primary" type="button" onclick={e => addToShoppingbasket(product)}>Add</button>
            
         )
         )} 
        </div> </div>
         </div>
   )
   
}
