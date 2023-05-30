import React from 'react'
import Heading from "../component/Heading";
import Text from "../component/Text";
import Checkbox from "../component/Checkbox";
import Email from "../component/Email";
import desktopImage from "../assets/images/illustration-sign-up-desktop.svg"
import mobileImage from "../assets/images/illustration-sign-up-mobile.svg"

const Home = ({mail,setMail,err,setError,err2,setError2,items,setItems}) => {
  return (
    <div className="news-body">
      <div className="news-inner my-md-5 my-4">
        <Heading title="Stay updated!"/>
        <Text text="Join 60,000+ product managers receiving monthly updates on:"/>
        <Checkbox 
        items={items}
        />
        <Email
        mail = {mail}
        setMail = {setMail}
        err = {err}
        setError = {setError}
        err2 = {err2}
        setError2 = {setError2}
        items = {items}
        setItems = {setItems}
        />
      </div>
      <div className="news-inner">
        <img src={desktopImage} alt="" className="img-fluid w-100 d-none d-md-block"></img>
        <img src={mobileImage} alt="" className='d-md-none img-fluid'/>
      </div>
    </div>
  )
}

export default Home