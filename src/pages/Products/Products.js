import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function Products({url}) {
   const[category,setCategoryName] = useState('');
   const [products, setProducts] = useState([]); //lista tuotteista

   let params = useParams(); //lukee osoitteesta lopun (mikä on category.id eli meillä tuoteryhmänro?) Jos tämä muuttuu ajetaan useEffect.

   //useEfect suoritetaan kun sivu ladataan, mutta koska [params] on lopussa, suoritetaan useEffect kun params muuttuu.
   useEffect(() =>{
     
       axios.get(url + '/products/getproducts.php/' + params.tuoteryhmanro) //backensiin tuoteryhmanro ja saadaan sinne haku, että hakee valitun kategorian tuotteen. 
         .then((response)=>{
           const json = response.data;
           //console.log(json);
           setCategoryName(json.category);
           //setProducts(json);
           setProducts(json.products);
         }).catch(error=>{
           alert(error.response === undefined ? error : error.response.data.error)
         })
     },[params]) //jos params muuttuu niin useEffect muuttuu.

   return (
       <div>
         <h3> {category} </h3> {/**{category} otsikon sisällä eli näkyy tuoteryhmän nimi */}
         {products.map(product => (
            <div key={product.tuotenro}>
               {product.tuotenimi} {product.hinta} {/**Testi, että hinnan ja muita tietoja voi lisätä tähän perään */}
               </div>
         ))}
         </div>
   )
   
}
