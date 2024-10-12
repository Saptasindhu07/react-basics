import noProjectImage from "../assets/no-projects.png"
export default function NoProjectSelected(){
    return( 
        <div className="w-screen">
            <img className="block h-40 mx-auto mt-8" src={noProjectImage}></img>
            <h2 className="text-amber-800 font-bold text-xl text-center mt-5">No Project Selected</h2>
            <h3 className="text-amber-800 text-center font-semibold">Select a project or get started with a new one</h3>
        </div>
    )
   
}