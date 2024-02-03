import React from "react"

const Head = () => {
  return (
    <>
      <section className='head'>
        <div className='container flexSB'>
          <div className='logo'>
            <h1>Bright Future</h1>
            <span>Flim Tech Academy</span>
            {/* <img src='https://res.cloudinary.com/dx78kzenz/image/upload/v1706786022/BrightFuture_Logo_kcm7oo.jpg' alt='' /> */}
          </div>

          <div className='social'>
            <i className='fab fa-facebook-f icon'></i>
            <i className='fab fa-instagram icon'></i>
            <i className='fab fa-twitter icon'></i>
            <i className='fab fa-youtube icon'></i>
          </div>
        </div>
      </section>
    </>
  )
}

export default Head
