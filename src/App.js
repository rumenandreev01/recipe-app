import React,{useState} from 'react';
import Recipe from './components/Recipe';
import Alert from './components/Alert';

import Axios from 'axios';
import {v4 as uuidv4} from 'uuid';

import './App.css';


 const App = () => {

    const [query,setQuery] = useState("");
    const [recipes,setRecipes] = useState([]);
    const [alert,setAlert] = useState("");

    const APP_ID = "6ad60599"; 
    const APP_KEY = "99b1aac534ea790f740799ff04a5e902";

    const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

    

    
    
    const getData = async () => {
        if (query !== "") {
            const result = await Axios.get(url) ;
            if (!result.data.more) setAlert("No such food");
            setRecipes(result.data.hits);
            console.log(result);
            setAlert("");
            setQuery("");
        } else {
            setAlert("Error!")
        }
        
      
    }

    const onChange = (e) => {
        setQuery(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        getData()
    }
    
    return (
        <div className="App">
            <h1 onClick={getData}>Food Recipes</h1>
            <form className="search-form" onSubmit={onSubmit}>
                {alert !== "" && <Alert alert={alert}/>}
                <input type="text" placeholder="Search here" autoComplete="off" onChange={onChange}/>
                <input type="submit" value="Search"/>
            </form>
            <div className="recipes">
                {recipes !==[] && recipes.map(
                    recipe =><Recipe key={uuidv4()} recipe={recipe}/>
                )}
            </div>
        </div>
    )
}

export default App