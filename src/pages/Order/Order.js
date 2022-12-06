import React from "react";
import uuid from "react-uuid";

export default function Order({shoppingbasket}) {
    let sum = 0;

    return(
        <div>
            <h3 className= "header">Ostoskorin sisältö</h3>
            <table className="table">
                <tbody>
                    {shoppingbasket.map(product => {
                        sum+=parseFloat(product.hinta);

                        return (
                            <tr key = {uuid()}>
                                <td>{product.tuotenimi}</td>
                                <td>{product.hinta}</td>
                                <td></td>
                            </tr>
                        )
                    })}
                    <tr key ={uuid()}>
                        <td></td>
                        <td>{sum.toFixed(2)} €</td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
    
}
