import { useState } from "react"
import HeaderImage from "../public/game-logo.png"


let player1Score=[]
let player2Score=[]
let player1Clicked=[]
let player2Clicked=[]
let alreadyClicked=[]
let WinningScorelist=[[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]]

function GameContainer(props){
  const [player1Name,setPlayer1Name]=useState('Enter Player Name')
  const [player2Name,setPlayer2Name]=useState('Enter Player Name')
  const [playerTurn,setPlayerTurn]=useState(1)

  function handleChange1(e){
    setPlayer1Name(e.target.value)
  }
  function handleChange2(e){
    setPlayer2Name(e.target.value)
  }
  function Boxes(props){
    let id=props.id
    return(
    <div class='box' id={id} onClick={props.onclick}>
      {props.player1Clicked ? 'X' : undefined}
      {props.player2Clicked ? 'O' : undefined}     
    </div>)
  }
  function BoxClicked(id,id2){
    if(alreadyClicked.includes(id)){
      
    }
    else{
      alreadyClicked.push(id)
      if(playerTurn===1){
        player1Clicked.push(id)
        player1Score.push(id)
      
        setPlayerTurn(2)
      }
      else{
        player2Clicked.push(id)
        player2Score.push(id)
      
        setPlayerTurn(1)
      }
      }
    
  }

  function CheckWinner(){
    for(let i=0;i<WinningScorelist.length;i++){
      if(WinningScorelist[i].every(val => player1Score.includes(val))){
        return("Winner is "+player1Name)
      }
      else if(WinningScorelist[i].every(val => player2Score.includes(val))){
        return("Winner is "+player2Name)
      }
    }
  }
  
  return(
    <section id="game-container">
      <section id="players">
        <div id="player1" class='player'>
          <input class={`${props.EditSelected ? undefined : 'hide'}`} placeholder="Enter Player1 Name" onChange={handleChange1}
          style={{backgroundColor: props.EditSelected? 'orange':'white'}}
          ></input>
          <div class={`player_name ${props.EditSelected ? 'hide' : undefined}`}>
            {player1Name}
          </div>
          <button class={`Edit ${props.EditSelected ? 'hide' : undefined}`} onClick={props.EditButtonClicked}>EDIT</button>
          <button class={`Submit ${props.EditSelected ? undefined : 'hide'} `} onClick={props.SubmitButtonClicked}>SUBMIT</button>
        </div>
        <div id="player2" class='player'>
        <input class={`${props.EditSelected ? undefined : 'hide'}`} placeholder="Enter Player1 Name" onChange={handleChange2}
        style={{backgroundColor: props.EditSelected? 'orange':'white'}}></input>
          <div class={`player_name ${props.EditSelected ? 'hide' : undefined}`}>
            {player2Name}
          </div>
          <button class={`Edit ${props.EditSelected ? 'hide' : undefined}`} onClick={props.EditButtonClicked}>EDIT</button>
          <button class={`Submit ${props.EditSelected ? undefined : 'hide'} `} onClick={props.SubmitButtonClicked}>SUBMIT</button>
        </div>
      </section>
      <section id="maingame">
       <Boxes id='1' player1Clicked={player1Clicked.includes(1) ? true : false} player2Clicked={player2Clicked.includes(1) ? true : false} onclick={()=>BoxClicked(1,1)}></Boxes>
       <Boxes id='2' player1Clicked={player1Clicked.includes(2) ? true : false} player2Clicked={player2Clicked.includes(2) ? true : false} onclick={()=>BoxClicked(2,2)}></Boxes>
       <Boxes id='3' player1Clicked={player1Clicked.includes(3) ? true : false} player2Clicked={player2Clicked.includes(3) ? true : false} onclick={()=>BoxClicked(3,3)}></Boxes>
       <Boxes id='4' player1Clicked={player1Clicked.includes(4) ? true : false} player2Clicked={player2Clicked.includes(4) ? true : false} onclick={()=>BoxClicked(4,11)}></Boxes>
       <Boxes id='5' player1Clicked={player1Clicked.includes(5) ? true : false} player2Clicked={player2Clicked.includes(5) ? true : false} onclick={()=>BoxClicked(5,12)}></Boxes>
       <Boxes id='6' player1Clicked={player1Clicked.includes(6) ? true : false} player2Clicked={player2Clicked.includes(6) ? true : false} onclick={()=>BoxClicked(6,13)}></Boxes>
       <Boxes id='7' player1Clicked={player1Clicked.includes(7) ? true : false} player2Clicked={player2Clicked.includes(7) ? true : false} onclick={()=>BoxClicked(7,21)}></Boxes>
       <Boxes id='8' player1Clicked={player1Clicked.includes(8) ? true : false} player2Clicked={player2Clicked.includes(8) ? true : false} onclick={()=>BoxClicked(8,22)}></Boxes>
       <Boxes id='9' player1Clicked={player1Clicked.includes(9) ? true : false} player2Clicked={player2Clicked.includes(9) ? true : false} onclick={()=>BoxClicked(9,23)}></Boxes>
      </section>
      <section id="WinLoss">
        
        {CheckWinner()}
      </section>
    </section>

  )
}
function App() {
  const [editSelected,setEditSelected]=useState(true)
  function EditButtonClicked(){
    setEditSelected(true)
  }

  function SubmitButtonClicked(){
    setEditSelected(false)
  }
  return (
    <body>
      <header>
        <img src={HeaderImage}></img>
        <h1>React Tic-Tac-Toe</h1>
      </header>
      <GameContainer 
        EditButtonClicked={()=>EditButtonClicked()} 
        EditSelected={editSelected} 
        SubmitButtonClicked={()=>SubmitButtonClicked()}
      >
      </GameContainer>
      
    </body>
  )
}

export default App
