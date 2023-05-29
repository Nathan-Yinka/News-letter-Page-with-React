import React from 'react'
import { Link } from 'react-router-dom'

const Email = ({mail,setMail,err,setError,err2,setError2,items}) => {
    

    const handleError = (e) => {
        e.preventDefault();
        setError(`${err} email-error mail-error`)
    }
    const handleError2 = (e) => {
        e.preventDefault();
        setError2(`${err2} d-block`)
    }

    const handleSubmit = (e) => {
      const updatedItem = [mail,items]
      const local =JSON.parse(localStorage.getItem('Users-mails'))
      local? localStorage.setItem('Users-mails', JSON.stringify([...local, updatedItem])):
      localStorage.setItem('Users-mails', JSON.stringify([updatedItem]))
    }
    
  return (
    <form className='mt-5 mb-3 mt-md-4 mb-md-0'>
      {(mail && mail.includes("@") && mail.includes(".com"))?
      <>
      <label className='font-weight-bold  mt-1'>Email address</label>
        <br/>
        <input 
        autoFocus
        className='mt-2'
        type='Email'
        value = {mail}
        required
        placeholder='email@company.com'
        onChange={(e)=>setMail(e.target.value)}
        ></input>
        <Link to='/submit'>
            <button
            onClick={(e)=>{handleSubmit(e)}} 
            type='Submit'
            className='mt-4 email-submit'
            >
              <label>Subscribe to monthly newsletter</label>
              </button>
              </Link> 
      </>
      :
      <>
      <label className='d-flex justify-content-between mt-4'>
      <label className='font-weight-bold'>Email address</label>
      <label className={err2}>valid email required</label>
      </label>
        <input 
        autoFocus
        className={err}
        type='Email'
        value = {mail}
        required
        placeholder='email@company.com'
        onChange={(e)=>setMail(e.target.value)}
        ></input>
        <button 
            type='Submit'
            className='mt-4 email-submit'
            onClick={(e)=>{handleError(e);handleError2(e)}}
            >
              <label onClick={(e)=>{handleError(e);handleError2(e)}}>Subscribe to monthly newsletter</label>
              </button>
      </>
      }
    </form>
  )
}

export default Email