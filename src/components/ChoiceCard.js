import React from 'react'   


const choices = {
    rock:"https://opengameart.org/sites/default/files/forum-attachments/very%20simple%20rock_0.png",
    paper: "http://pngimagesfree.com/Paper/Thumb/blank-note-paper-free-clipa.png",
    scissors: "http://www.pngmart.com/files/1/Scissors-PNG-Pic.png"
  };
  // choice object doesnt have imgURL as a key 
  // and choices is not props , its not from app.js, its the variable you define inside of this file

export default function ChoiceCard(props) {
    console.log("Props:", props);
    return (
        <div className={`choice-card ${props.winner ? 'winner' : 'loser'}`}>
              <h1>{props.title}</h1>
              <img src= {props.winner ? choices.rock : choices.scissors}
            alt={props.title}/>
              <h3>{props.winner ? 'winner' : 'you lost!'}</h3>
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