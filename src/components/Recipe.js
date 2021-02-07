import React,{useState} from 'react'
import RecipeDetails from './RecipeDetails'

const Recipe = ({recipe}) => {
    const [show,setShow]= useState(false)
    return (
        <div className="recipe">
            <h2>{recipe.recipe.label}</h2>
            <img src={recipe.recipe.image} alt={recipe.recipe.label}/>
            <a href={recipe.recipe.url} target="_blank" rel="noopener noreferrer">URL</a>
            <button onClick={()=>setShow(!show)}>Ingredients</button>
            {show && <RecipeDetails ingredients={recipe.recipe.ingredients}/>}
        </div>
    )
}

export default Recipe;
