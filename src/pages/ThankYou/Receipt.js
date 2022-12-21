import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "../../components/ProductCard/ProductCard";
import Login from '../Login/Login'
import axios from 'axios';
import thankYou from "./Thankyou";
import { redirect } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

export default function Receipt({url,  setLoggedUser, loggedUser, shoppingbasket }) {
    const navigate= useNavigate();
    
    async function orderProducts() {
       let obj=[{kayttajatunnus: loggedUser}]
        obj.push(shoppingbasket);
        console.log(obj)

        
        await axios.post(url + "/shoppingbasket/order.php",obj , { withCredentials: true })
            .then(
                navigate("/thankyou"),
                resp => {
                    console.log(resp.data + " tilausvahvistus")
                }).catch(e => console.log(e))
              
      

    }
    

    let sum = 0
    let totalPrice = 0
    return (
        <>

            {loggedUser ?
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h2>Vahvista tilaus</h2>
                            <button className="btn btn-warning btn-lg mt-5 position-relative top-30 start-50 translate-middle"
                                onClick={orderProducts}>Vahvista tilaus</button>
                        </div>
                        <div className="col">
                            <div className="mx-5">
                                <h1>Tilaus sisältää</h1>


                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th scope="col">Tuote</th>
                                            <th scope="col">Kappalemäärä</th>
                                            <th scope="col">Hinta</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {shoppingbasket.map((product) => {
                                            sum = parseFloat(product.hinta) * (product.amount);
                                            totalPrice += parseFloat(product.hinta) * (product.amount);
                                            return (
                                                <tr >
                                                    <td>{product.tuotenimi}</td>
                                                    <td>{product.amount} </td>
                                                    <td>{sum} €</td>
                                                </tr>
                                            )
                                        })}
                                        <tr>
                                            <td className="fw-bold">Loppusumma</td>
                                            <td className="fw-bold"></td>
                                            <td className="fw-bold">{totalPrice.toFixed(2)} €</td>

                                        </tr>
                                    </tbody>
                                </table>

                            </div>
                        </div>
                    </div>
                </div>
                : <Login setLoggedUser={setLoggedUser} />}


        </>
    )
}

