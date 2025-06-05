'use client' 

import { useState, useEffect } from "react"; // son hooks de react
import RecipeCard from "@/app/components/RecipeCard";
import axios from 'axios'

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
        {loading && <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><radialGradient id="a12" cx=".66" fx=".66" cy=".3125" fy=".3125" gradientTransform="scale(1.5)"><stop offset="0" stopColor="#000000"></stop><stop offset=".3" stopColor="#000000" stopOpacity=".9"></stop><stop offset=".6" stopColor="#000000" stopOpacity=".6"></stop><stop offset=".8" stopColor="#000000" stopOpacity=".3"></stop><stop offset="1" stopColor="#000000" stopOpacity="0"></stop></radialGradient><circle transformOrigin="center" fill="none" stroke="url(#a12)" strokeWidth="15" strokeLinecap="round" strokeDasharray="200 1000" strokeDashoffset="0" cx="100" cy="100" r="70"><animateTransform type="rotate" attributeName="transform" calcMode="spline" dur="2" values="360;0" keyTimes="0;1" keySplines="0 0 1 1" repeatCount="indefinite"></animateTransform></circle><circle transformOrigin="center" fill="none" opacity=".2" stroke="#000000" strokeWidth="15" strokeLinecap="round" cx="100" cy="100" r="70"></circle></svg>}

       {error && "hubo un error"}
    </div>
  );
};

export default RecipesGrid;
