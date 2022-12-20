import React,{useState,useEffect} from "react";
import axios from "axios";


export default function CategoryList({url,selectedCategory,setSelectedCategory}) {
    const[categories,setCategories] = useState([]);



    useEffect(() => {
        axios.get(url + '/products/getcategories.php')
        .then((response) => {
            const json = response.data;
            if (json) {
                if (selectedCategory === null) { //set first category selected if there is no default
                    setSelectedCategory(json[0]);
                }
                setCategories(json);
               console.log(json[0]); 
            }
        }).catch (error => {
            alert(error.response === undefined ? error : error.response.data.error);
        })
    }, [selectedCategory])

    function onCategoryChange(value) {
        //setSelectedCategory(categories.filter(item => item.id === value));
        //filteröi koko kategorian staten ja palauttaa ehdonmukaiset rivit ja tässä se ehto on tuoteryhma == value. Ei toiminut aikasemmin koska oli ===.
        const testi = categories.filter(item => item.tuoteryhmanro == value);
        setSelectedCategory(testi[0]);
       // setSelectedCategory(categories.filter(item => item.tuoteryhmanro == value));
        /*const testi = categories.filter(item => item.tuoteryhmanro === value);
        console.log(testi);
        console.log(selectedCategory);
        console.log(value);*/
    }

    return (
        //<select value={selectedCategory?.id} onChange={(e) => onCategoryChange(e.target.value)}>
        <select value={selectedCategory?.tuoteryhmanro} onChange={(e) => onCategoryChange(e.target.value)}>
        {categories.map((category) => (
            //<option key={category.id} value={category.id}>{category.name}</option>
            <option key={category.tuoteryhmanro} value={category.tuoteryhmanro}>{category.tuoteryhmanimi}</option>
        ))}
        </select>  
        
    )
}

//tuohon mappiin tulee varmaan .tuoteryhmanro ja .tuoteryhmanimi?