import { useState } from "react"

import {inputValues_} from './components/SidebarInputFields'
import ProjectsSidebar from './components/ProjectsSidebar'
import NewProjectInputFields from './components/SidebarInputFields'
import NoProjectSelected from "./components/NoProjectSelected"
import SelecteProjectPanel from './components/SelectedProject'

let temp_ID=0;
let projectSelected=""
let temp={};
let count=0;

function App() {
  const [projectState,setProjectState]=useState({
    ID:0,
    projectstate:"noProjectSelected",
    ProjectList:[],
  })
  
  function AddProjectSelected(){
    setProjectState(prevState=>{
      return({
        ...prevState,
        projectstate:"SelectingProject",
        ProjectList:[...prevState.ProjectList],
        }
      )
    }
  )
  }
  function CancelClicked(){
    setProjectState(prevState=>{
      return({
        ...prevState,
        projectstate:"noProjectSelected",
        ProjectList:[...prevState.ProjectList],
        }
      )
    }
    )
  }
  function SaveClicked(){
    inputValues_['ID']=count
    temp=Object.assign({},inputValues_)
    count+=1
    setProjectState(prevState=>{
      return({
        ...prevState,
        projectstate:"noProjectSelected",
        ProjectList:[...prevState.ProjectList, temp],
        }
      )
    }
    )
  }
  function projectClicked(id){
      projectSelected
      setProjectState(prevState=>{
        return({
          ...prevState,
          ID:id,
          projectstate:"ProjectSelected",
      })})
  }
  function deleteclicked_(){
    let GONDA= projectState.ProjectList.filter((project)=>{return(project.ID!==projectState.ID)})
    setProjectState(prevState=>{
      return({
        ID:0,
        projectstate:"noProjectSelected",
        ProjectList:GONDA
      })
    })
  }
  function decideOutputMainPanel(){
    if(projectState.projectstate=="SelectingProject"){
      return(
        <NewProjectInputFields CancelClickedOnInputSection={()=>{CancelClicked()}} SaveClicked={()=>{SaveClicked()}}></NewProjectInputFields>
      )
    }
    else if(projectState.projectstate=="noProjectSelected"){
      return(<NoProjectSelected></NoProjectSelected>)
    }
    else if(projectState.projectstate=="ProjectSelected"){
      return(<SelecteProjectPanel deleteclicked={deleteclicked_} project={projectState.ProjectList.find(project=>{return(project.ID==projectState.ID)})}> </SelecteProjectPanel>)
    } 
  }
  return (
    <>
      <main className=" my-8 h-screen text-stone-50 rounded-r-xl flex">
        <ProjectsSidebar projectClicked={projectClicked} onAddProjectClick={()=>{AddProjectSelected()}} projects={projectState.ProjectList} />
        {decideOutputMainPanel()}
      </main>
    </>
  );
}

export default App;
