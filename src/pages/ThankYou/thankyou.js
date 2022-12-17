import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "../../components/ProductCard/ProductCard";

export default function thankYou(product, shoppingbasket) {
    return(
        <div className="mx-5"> <h1>Kiitos tilauksestasi!</h1>
        <h3>ostoskorin sisältö {product.amount}</h3>
        </div>
    )
}

