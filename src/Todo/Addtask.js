import React, { useState } from 'react'
import "./Todo.css"
const Addtask = ({propss}) => {
    const [value, setValue] = useState("")
    const addItem = () => { 
        if(value==""){
            
        }else{
            propss(value)
            setValue("")

        }
    }

        
    
    return (
        <>
            <div className='R'>
                <div><input type="text"  className='input-task' placeholder='Add your new Task' value={value}
            onChange={(e) => { 
                setValue(e.target.value) }} />
         
               
                <input type="button" id='ad' className='btn btn-success' onClick={addItem}  value="Add" />
                </div>
                </div>
        </>
    )
}

export default Addtask
