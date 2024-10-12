export default function SelecteProjectPanel({project, deleteclicked}){
    return(
        <div className="bg-zinc-200 w-screen pl-60 pr-96">
            <div className="flex w-full h-fit align-middle justify-between mt-2 pb-3  bg-black">
                <div className="">
                    <h1 className="font-bold text-white ml-2 text-5xl uppercase">{project.TITLE}</h1>
                </div>
                <div className="w-fit h-fit pt-1">
                    <button className="text-gray-200 text-3xl  h-full bg-zinc-800 rounded-md px-1 py-1 hover:bg-gray-50 hover:text-black hover:font-bold" onClick={deleteclicked}>Delete</button>
                </div>
            </div>
            <div className="h-screen bg-slate-50 pt-3 pl-5 pr-5">
                <div className="text-black font-semibold">
                    {`DUEDATE: ${project.DUEDATE}`}
                </div>
                <div className="text-black font-semibold border-b-blue-700 border-b-2 w-full pb-2 pt-2">
                    {`DESCRIPTION: ${project.DESCRIPTION}`}
                </div>
                <div className="text-black pt-3 text-3xl font-semibold">
                    TASKS
                </div>
            </div>
            
        </div>
    )
}