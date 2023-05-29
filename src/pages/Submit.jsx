import React from 'react'
import icon from "../assets/images/icon-success.svg"
import Heading from '../component/Heading'
import { Link } from 'react-router-dom'

const Submit = ({mail,setMail}) => {
  return (
    <div className='submit-body'>
        <div>
        <img src={icon} alt="" />
        </div>
        <Heading title="Thanks for subscribing!" className=""/>
        <p>A confirmation email has been sent to <strong>{mail}</strong>. 
  Please open it and click the button inside to confirm your subscription.
        </p>
        <Link to="/">
        <button type="submit" className='email-submit mt-3' onClick={()=>{setMail("")
        setTimeout(()=>{window.location.reload()},1)
    }}>
        <label htmlFor="">Dismiss message</label>
        </button>
        </Link>
    </div>
  )
}

export default Submit