import React from 'react'
import checkImg from "../assets/images/icon-list.svg"
const Checkbox = ({items}) => {
  return (
    <div>
        {items.map((item)=>{
            return(
                <main className='mt-2 d-flex align-items-center' key={item.id}>
                <img src={checkImg} alt='checking img d-block'></img>
                <label 
                className='ms-2 ms-md-3'>
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