import "./Animal.css";
import { useState } from "react";
import bird from "./bird.svg";
import cat from "./cat.svg";
import cow from "./cow.svg";
import dog from "./dog.svg";
import gator from "./gator.svg";
import horse from "./horse.svg";
import heart from "./heart.svg"

//import heart from "./heart.svg";
 /// creating objects
const svgMap = {
    bird ,cat ,cow , dog ,gator ,horse ,
};


export default function AnimalShow({type}){
    const [clicks ,setClicks] = useState(0);

    const handleClick = () => {
    setClicks(clicks+1);
    };

    return(
        <div  className="animal-show" onClick = {handleClick}>
            <img className="animal"  alt = "Animal " src={svgMap[type]} />
            <img className="heart"
            alt="heart" 
            src={heart}
            style ={{width: 10+10*clicks + "px"}} />
        </div>
    );
}

