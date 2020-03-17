import React from 'react';
import "./Toolbar.css";


const DEFAULT_IMG =
  "https://i.pinimg.com/originals/55/77/ce/5577ce7d687b207626b3475584595daf.png";


// const choices = {
//     rock:"https://opengameart.org/sites/default/files/forum-attachments/very%20simple%20rock_0.png",
//     paper: "http://pngimagesfree.com/Paper/Thumb/blank-note-paper-free-clipa.png",
//     scissors: "http://www.pngmart.com/files/1/Scissors-PNG-Pic.png"
//   };
  // choice object doesnt have imgURL as a key 
  // and choices is not props , its not from app.js, its the variable you define inside of this file

export default function ChoiceCard(props) {
    console.log("Props:", props);

    const won = props.title === props.previousWinner;
    let className;
    const hasPreviousGame =
    props.previousWinner === "Computer" || props.previousWinner === "You";
    if (hasPreviousGame) {className = won ? "winner" : "loser";}

    let prompt;
    if (won) {prompt = "You won! GGs"; className = won ? "winner" : "loser";} 
    else if (props.previousWinner === "Tie") 
    {prompt = "Tie... Not bad";} 
    else if (props.previousWinner === null) 
    {prompt = "Start";} 
    else {prompt = "You lost! >__<";}





    return (
        <div className={`choice-card ${className}`}>
              <h1>{props.title}</h1>  
              <img className="cardimg" src= {props.imgURL || DEFAULT_IMG} alt={props.title}/>
              <h3>{prompt}</h3>
        </div>
    )
}



































































// import React from 'react';

// function Box(props) {
//     return (
//         <div>
//             {props.contents}
//             <h3></h3>
//             <h2></h2>
//             <h3>{props.win ? "Won" : "Loss"}</h3>
//         </div>
//     )
// };

// function Box2() {
//     return (
//         <div>BOX 2</div>
//     )
// };


//  function Box3() {
//     return (
//         <div>BOX 3</div>
//     )
// };




// export { Box, Box2, Box3 };

// import React, { Component } from 'react'
// class Box extends Component {
// render(){return(<div className={}>{this.props.name}</div>)}
// }
// export default Box;