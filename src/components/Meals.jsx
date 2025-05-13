import { useState, useEffect } from "react";
import MealsItems from "./MealsItems.jsx";

export default function Meals (){
    
    const [localMeals, setLocalMeals] =  useState([])
    useEffect(()=>{
        async function fetchMeals(){
            const responce = await fetch('http://localhost:3000/meals');
            if(!responce.ok){
        ///////
            }
          const meals = await responce.json();
           setLocalMeals(meals);
            }
    fetchMeals();
    },[])
  
  
    return <ul id="meals">
        {localMeals.map((meal)=>(
           <MealsItems meal={meal} key={meal.id}/>
        ))}
    </ul>
}