import axios from "axios";
import { useState } from "react";
import CategoryList from "../components/CategoryList";


export default function ManageCategories({url}) {
    const [newCategory, setNewCategory] = useState("");
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [addingCategory, setAddingCategory] = useState(false);


    function saveCategory(e) {
        e.preventDefault();
        const json = JSON.stringify({tuoteryhmanimi: newCategory}); //tuoteryhmanimi:tuoteryhmälle annettu nimi
        axios.post(url + '/products/addcategory.php',json,{
            headers: {
                'Content-Type' : 'application/json'
                //'Content-Type': 'application/json; charset=utf-8' //ei auttanut ääkkösten kanssa
            }
        })
    .then((response) => {
        setNewCategory('');
        setAddingCategory(false);
        setSelectedCategory(response.data);
        console.log(json);
    }).catch(error => {
        alert(error.response === undefined ? error : error.reponse.data.error);
    });
    }

    if(!addingCategory) {
        return(
            <>
            <h3 className="mx-3">Ylläpidä tuoteryhmiä</h3>
            <div>
                <label>Tuoteryhmä</label>
                <CategoryList
                url={url}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                />
                <button className="btn btn-dark" type="button" onClick={()=> setAddingCategory(true)}>Lisää</button>
            </div>
        </>
        )
    } else {
    return (
        <>
        <h3>Lisää uusi kategoria</h3>
        <form onSubmit={saveCategory}>
            <div>
                <label>Kategorian nimi</label>
                <input type="text" value={newCategory} onChange={(e) => setNewCategory(e.target.value)}/>
            </div>
            <button type="button" onClick={() => setAddingCategory(false)}>Peruuta</button>
            <button type="submit">Tallenna</button>
        </form>
        </>
        )
    }

}