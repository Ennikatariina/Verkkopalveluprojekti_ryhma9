import React from "react";
import uuid from "react-uuid";
import { useEffect, useState } from "react";

export default function Order({shoppingbasket, removeFromShoppingbasket, updateAmount}) {
    const [inputs,_] = useState([]);
    const [inputIndex, setInputIndex] = useState(-1);

    useEffect(() => {
        for (let i = 0; i<shoppingbasket.length;i++) {
            inputs[i] = React.createRef(); // ongelma tässä kun ei toimi tai lisää tuotteita?
        }
        console.log(inputs);
        console.log(shoppingbasket);
    }, [shoppingbasket.length])

    useEffect(() => {
        if (inputs.length > 0 && inputIndex > -1 && inputs[inputIndex].current !== null) {
            inputs[inputIndex].current.focus();
        }
    }, [shoppingbasket])
    
    let sum = 0;

//funktio joka muuttaa tuotemäärää 
    function changeAmount(e, product, index) {
        updateAmount(e.target.value, product);
        setInputIndex(index);
    }

    return(
        <div className="mx-3 my-3">
            <h3 className= "header">Ostoskori</h3>
            <table className="table table-striped">
                <thead>
                    <tr>
                    <th scope="col">Tuote</th>
                    <th scope="col">Hinta</th>
                    <th scope="col">Kappalemäärä</th>
                    <th scope="col">Poista tuote</th>
                    </tr>
                 </thead>
                <tbody>
                    {shoppingbasket.map((product, index) => {
                        sum+=parseFloat(product.amount + product.hinta); //mistä poimii määrät? näyttää hinnan x3

                        return (
                            <tr key = {uuid()}>
                                <td>{product.tuotenimi}</td>
                                <td>{product.hinta} €</td>
                                <td>
                                    <input style={{width: "60px"}} value={product.amount} onChange={e => changeAmount(e,product, index)} />
                                    </td>

                                <td><a href="#" onClick={() => removeFromShoppingbasket(product)}>
                                    <svg color= "#261a12" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                    <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                                    </svg></a></td>
                            </tr>
                        )
                    })}
                    <tr key ={uuid()}>
                        <td className="fw-bold">Loppusumma</td>
                        <td className="fw-bold">{sum.toFixed(2)} €</td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
    
}
