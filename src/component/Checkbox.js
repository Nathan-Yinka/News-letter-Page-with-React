import React from 'react'
import {FaCheck} from "react-icons/fa"
const Checkbox = ({items,setItems}) => {
    const handleCheck = (id)=>{
        const updatedItem =items.map((item)=>{
            if(item.id === id){
                item.checked =!item.checked
            }
            return item
        })
        setItems(updatedItem)
    }
  return (
    <div>
        {items.map((item)=>{
            return(
                <main className='mt-2 d-flex align-items-center' key={item.id}>
                <FaCheck 
                onClick={()=>{handleCheck(item.id)}}></FaCheck>
                <input 
                className='custom-checkbox'
                type="checkbox" 
                checked={item.checked} 
                onChange={()=>{handleCheck(item.id)}}>
                </input>
                <label 
                onClick={()=>{handleCheck(item.id)}}
                className='ms-3'>
                    {item.text}
                </label>
                <br/>
                </main>
            )
        })}
    </div>
  )
}

export default Checkbox