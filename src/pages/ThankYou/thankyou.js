import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "../../components/ProductCard/ProductCard";

export default function thankYou() {
    return(
        <>
        <div className="mx-5"> <h1>Kiitos tilauksestasi!</h1></div>
        <div className="mx-5"> <h2>Tilauksesi on noudettavissa puolen tunnin kuluttua kahvila Sumpista.</h2>
        
        </div>
        </>
    )

}