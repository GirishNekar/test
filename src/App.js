
import AnimalShow from "./AnimalShow";
import { useState } from "react";
import "./app.css";

function getRandomAnimal(){
  const animals = ["horse","dog","gator","cow","cat","bird"];
    return animals[Math.floor(Math.random() * animals.length)];
}

export default function App(){
  const [Animal,setAnimal] = useState([]);
  //this is a callback fiunction or event handler  
  const handleClick =()=>{
     setAnimal([...Animal,getRandomAnimal()]);
  };

  const renderedAnimals = Animal.map((animals,index)=>{
    return <AnimalShow type={animals}  key = {index}/>;

  });

  return(
    <div className="app">
      <button onClick={handleClick} >Add Animal</button>
      
      <div className="animal-list">{renderedAnimals}</div>
      
    </div>
  );
}

