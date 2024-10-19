export default function ProjectsSidebar({onAddProjectClick,projects,projectClicked}){
    return(
        <aside className="px-8 py-16 bg-slate-950 h-screen">
            <h2 className="mb-8 ml-3 font-bold uppercase">YOUR PROJECTS</h2>
            <div>
                <button className="text-center px-1 py-1 text-stone-200 font-bold ml-3 bg-stone-700 hover:bg-stone-300 hover:text-stone-100 w-36" onClick={onAddProjectClick}>+Add Project</button>
            </div>
            <ul className="mt-10">
                {projects.map(project=>{
                    return(
                        <li  key={project.TITLE}>
                            <button onClick={()=>{
                                projectClicked(project.ID)
                            }} 
                            className="w-full text-left px-2 py-1 mt-3 rounded-sm bg-stone-500 text-stone-50 font-bold hover:bg-slate-50 hover:text-black">
                            {project.TITLE}
                            </button>
                        </li>
                    )
                })}
            </ul>
        </aside>
    )
}