'use client' 

import { useState, useEffect } from "react"; // son hooks de react
import RecipeCard from "@/app/components/RecipeCard";
import axios from 'axios'
import Loading from "./Loading";

const RecipesGrid = () => {
const [data1, setData1] = useState([])
const [error, setError] = useState(false)
const [loading, setLoading] = useState(true)

useEffect(()=> {

  const getData = async () => {
    setLoading(true) 
    try {
      const response = await axios.get(`https://dummyjson.com/recipes`)
    const responseData = response.data.recipes
    setData1(responseData)
    setLoading(false)
    } catch (error) {
      console.log('mi error fue',error)
      setError(true)
    }
    
  }

  getData()
}, [])

/* sintaxis useEffect
useEffect(callback,[])s
useEffect(()=>{},[])
*/

  return (
    <div className="recipes_grid">
      {/* {!loading
      ? data1.map( (recipe) => (
          <RecipeCard 
          key={recipe.id} 
          name={recipe.name} 
          image={recipe.image} 
          id={recipe.id}/> 
    
      )
      : "loading..."} */}

      {!loading &&
        data1.map( (recipe) => (
          <RecipeCard 
          key={recipe.id} 
          name={recipe.name} 
          image={recipe.image} 
          id={recipe.id}
          /> 
        ))}
        {loading && <Loading/>}
       {error && "hubo un error"}
    </div>
  );
};

export default RecipesGrid;
