import { useState } from "react"
let inputValues_={
    TITLE:"No TITLE",
    DESCRIPTION:"NO Description",
    DUEDATE:"No Due Date"
}

function InputField({label,type}){
    const [inputValues,setInputValues]=useState({
        TITLE:"No TITLE",
        DESCRIPTION:"NO Description",
        DUEDATE:"No Due Date"
    })
    function OnInputFieldChange(event,arg){
        if(arg==0){
            inputValues_.TITLE=event.target.value
            setInputValues(prevState=>{
                return({
                    ...prevState,
                    TITLE:event.target.value,
                    
                })
            })
        }
        else if(arg==1){
            inputValues_.DESCRIPTION=event.target.value
            setInputValues(prevState=>{
                return({
                    ...prevState,
                    DESCRIPTION:event.target.value,
                    
                })
            })
        }
        
        else if(arg==2){
            inputValues_.DUEDATE=event.target.value
            setInputValues(prevState=>{
                return({
                    ...prevState,
                    DUEDATE:event.target.value,
                    
                })
            })
        }
        
        
    }

    if(type=="input"){
        return(
            <p className="ml-4 pr-2">
                <label className="text-stone-950 block font-bold">{label}</label>
                <input className="w-full text-stone-950 font-semibold focus:bg-slate-100" onChange={(e)=>{OnInputFieldChange(e,0)}}></input>
            </p>
        )
    }
    else if(type=="textarea"){
        return(
            <p className="ml-4 pr-2">
                <label className="text-stone-950 block font-bold">{label}</label>
                <textarea className="w-full overflow-auto text-slate-950 h-24 cursor-text focus:bg-slate-100" onChange={(e)=>{OnInputFieldChange(e,1)}}></textarea>
            </p>
        )
    }
    else{
        return(
            <p className="ml-4 pr-2">
                <label className="text-stone-950 block font-bold ">{label}</label>
                <input className="w-full text-stone-950 font-semibold focus:bg-slate-100" onChange={(e)=>{OnInputFieldChange(e,2)}}></input>
            </p>
        )
    }
   
}
export default function NewProjectInputFields(props){
    
    return(
        <div className="bg-slate-200 w-1/2">
            <menu className='mt-8 flex items-center ml-5 gap-1 justify-end pr-2'>
                <li className="text-stone-950 ml-4">
                    <button className="text-stone-950 font-bold rounded-l py-2 px-4 hover:bg-slate-700 hover:text-stone-50" onClick={props.CancelClickedOnInputSection}>CANCEL</button>
                </li>
                <li className=" ml-4">
                    <button className="text-stone-100 font-bold bg-slate-900 rounded-l py-2 px-4 hover:bg-slate-700" onClick={props.SaveClicked}>SAVE</button>
                </li>
            </menu>
            <div>
                <InputField label="TITLE" type="input"></InputField>
                <InputField label="DESCRIPTION" type="textarea" ></InputField>
                <InputField label="DUE DATE" type="DUEDATE" ></InputField>
            </div>
        </div>
    )
}

export {inputValues_}