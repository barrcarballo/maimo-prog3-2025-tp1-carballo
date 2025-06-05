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
    {loading && <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><radialGradient id="a12" cx=".66" fx=".66" cy=".3125" fy=".3125" gradientTransform="scale(1.5)"><stop offset="0" stopColor="#000000"></stop><stop offset=".3" stopColor="#000000" stopOpacity=".9"></stop><stop offset=".6" stopColor="#000000" stopOpacity=".6"></stop><stop offset=".8" stopColor="#000000" stopOpacity=".3"></stop><stop offset="1" stopColor="#000000" stopOpacity="0"></stop></radialGradient><circle transformOrigin="center" fill="none" stroke="url(#a12)" strokeWidth="15" strokeLinecap="round" strokeDasharray="200 1000" strokeDashoffset="0" cx="100" cy="100" r="70"><animateTransform type="rotate" attributeName="transform" calcMode="spline" dur="2" values="360;0" keyTimes="0;1" keySplines="0 0 1 1" repeatCount="indefinite"></animateTransform></circle><circle transformOrigin="center" fill="none" opacity=".2" stroke="#000000" strokeWidth="15" strokeLinecap="round" cx="100" cy="100" r="70"></circle></svg>}
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
        <h3><span className="bold">Instrucciones:</span></h3>
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
