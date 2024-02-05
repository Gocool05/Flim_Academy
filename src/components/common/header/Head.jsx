import React from "react"
import Header from "./Header"
import "./header.css"
const Head = () => {
  return (
    <>
      <section className='head'>
        <div className='container flexSB'>
          <div className='logo'>
            <img src='https://res.cloudinary.com/dx78kzenz/image/upload/v1707112026/bf_logo_plospx.png' alt='' />
          </div>
          <div className='social'>
            <div className='socialicon'>
            <i className='fab fa-facebook-f icon'></i>
            <i className='fab fa-instagram icon'></i>
            <i className='fab fa-twitter icon'></i>
            <i className='fab fa-youtube icon'></i>
            </div>
          </div>
          
        </div>
      </section>
    </>
  )
}

export default Head
