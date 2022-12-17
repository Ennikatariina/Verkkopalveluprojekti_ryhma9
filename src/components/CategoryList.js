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
                
            }
        }).catch (error => {
            alert(error.response === undefined ? error : error.response.data.error);
        })
    }, [selectedCategory])

    function onCategoryChange(value) {
        setSelectedCategory(categories.filter(item => item.tuoteryhmanro === value));
    }

    return (
        
        <select value={selectedCategory?.tuoteryhmanro} onChange={(e) => onCategoryChange(e.target.value)}>
        {categories.map((category) => (
            <option key={category.tuoteryhmanro} value={category.tuoteryhmanro}>{category.tuoteryhmanimi}</option>
        ))}
        </select>  
        
    )
}

//tuohon mappiin tulee varmaan .tuoteryhmanro ja .tuoteryhmanimi?