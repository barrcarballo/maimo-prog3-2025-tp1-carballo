'use client'

import { useState, useEffect } from "react";
import RecipeCard from "@/app/components/RecipeCard";
import data from "@/data/recipes";
import axios from 'axios'

const RecipesGrid = () => {
const [data1, setData1] = useState([])

useEffect(()=> {

  const getData = async () => {
    const response = await axios.get(`https://dummyjson.com/recipes`)
    const responseData = response.data.recipes
    //console.log(responseData)
    setData1(responseData)
  }

  getData()
}, [])

  return (
    <div className="recipes_grid">
      {data1.map(
        (
          recipe // si el objeto no tiene id se pone index
        ) => (
          <RecipeCard key={recipe.id} name={recipe.name} image={recipe.image} id={recipe.id}/>
        )
      )}
    </div>
  );
};

export default RecipesGrid;
