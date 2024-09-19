import { useState } from "react"
import ComponentImage1 from "../src/assets/components.png"
import ComponentImage2 from "../src/assets/config.png"
import ComponentImage3 from "../src/assets/jsx-ui.png"
import ComponentImage4 from "../src/assets/react-core-concepts.png"

const reactDescriptions=["Fundamental","Core","Key"]
function generateRandomint(max){
  return Math.floor(Math.random()*(max+1))
}
function Header(){
  return(
    <header>
      <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {reactDescriptions[generateRandomint(2)]} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  )
}
function CoreConcept(props){
  return(
    <li>
      <img src={props.img}></img>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  )
}
function TabButton(props){
  return(
    <li>
      <button className={props.isSelected ? 'active' : undefined} onClick={props.Clicked}>{props.children}</button>
    </li>
  )
}
function App() {
  const [selectedTopic,setSelectedTopic]=useState("Please Click a Button")
  const dict={
    'Components':'Components is Selected',
    'JSX':'JSX is selected',
    'Props':'Props is selected',
    'State':'State is selected'
  }

  function handleSelect(selectedButton){
    setSelectedTopic(selectedButton)  
  }
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept
            title="Components"
            description="Core UI Building Block"
            img={ComponentImage1}
            />
            <CoreConcept 
            title="Props"
            description="Core UI Building Block"
            img={ComponentImage2}
            />
            <CoreConcept 
            title="JSX"
            description="Core UI Building Block"
            img={ComponentImage3}
            />
            <CoreConcept 
            title="State"
            description="Core UI Building Block"
            img={ComponentImage4}
            />
          </ul>
        </section>
        <section id="examples">
          <h2>
            Examples
          </h2>
          <menu>
            <TabButton isSelected={selectedTopic==="Components"} Clicked={()=>handleSelect("Components")}>Components</TabButton>
            <TabButton isSelected={selectedTopic==="JSX"} Clicked={()=>handleSelect("JSX")}>JSX</TabButton>
            <TabButton isSelected={selectedTopic==="Props"} Clicked={()=>handleSelect("Props")}>Props</TabButton>
            <TabButton isSelected={selectedTopic==="State"} Clicked={()=>handleSelect("State")}>State</TabButton>
          </menu>
          {dict[selectedTopic]}
        </section>
      </main>
    </div>
  );
}

export default App;
