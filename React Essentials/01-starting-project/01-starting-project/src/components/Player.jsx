import { useState,useRef } from "react"
export default function Player() {
  const [playerName,setPlayerName]= useState('')
  const [submitted,setSubmitted]= useState(false)
  function onchange(event){
    setPlayerName(event.target.value)
  }
  function submitClicked(event){
    setSubmitted(true)
  }
  return (
    <section id="player">
      <h2>{`Welcome ${submitted ? playerName:'Undefined Player'}`}</h2>
      <p>
        <input type="text" onChange={onchange}/>
        <button onClick={submitClicked}>Set Name</button>
      </p>
    </section>
  );
}
