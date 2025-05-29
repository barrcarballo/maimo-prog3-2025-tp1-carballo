"use client";

import { useState, useEffect } from "react"; // son hooks de react
import data from "@/data/recipes";
import axios from "axios";

const RecipeContainer = ({ id }) => {
  const [data1, setData1] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`https://dummyjson.com/recipes/${id}`);
        const responseData = response.data;
        setData1(responseData);
        setLoading(false);
      } catch (error) {
        console.log("mi error fue", error);
        setError(true);
      }
    };

    getData();
  }, []);

  return (
  <div className="receta">
    {loading && "Loading..."}
    {error && "hubo un error"}
    {!loading && data1 && (
      <div>
        <img src="/assets/foodiegoodieAgenda.png" alt="blocknote" className="blocknote" />
        <img src={data1.image} alt={data1.name} />
        <h1>{data1.name}</h1>
        <p><span className="bold">Tiempo de preparación: </span>{data1.prepTimeMinutes} min</p>
        <p><span className="bold">Tiempo de cocción: </span>{data1.cookTimeMinutes} min</p>
        <p><span className="bold">Porciones: </span>{data1.servings}</p>
        <h3>Ingredientes:</h3>
        <ul>
          {data1.ingredients.map((ing, i) => (
            <li key={i}>{ing}</li>
          ))}
        </ul>
        <h3>Instrucciones:</h3>
        <ol>
          {data1.instructions.map((inst, i) => (
            <li key={i}>{inst}</li>
          ))}
        </ol>
        <a href="/" className="back-button">Back</a>
      </div>
    )}
  </div>
);
};

export default RecipeContainer;
