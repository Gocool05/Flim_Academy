import React from "react"
import Back from "../common/back/Back"
import "./contact.css"

const Contact = () => {
  const map = 'https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&q=Land+Marvel+Residential+Flat+Owners+Associations+Ashok+Nagar+Chennai+600083" width="300" height="300" frameborder="0" style="border:0;  '
  return (
    <>
      <Back title='Contact us' />
      <section className='contacts padding'>
        <div className='container shadow flexSB'>
          <div className='left row'>
            <iframe src={map}></iframe>
          </div>
          <div className='right row'>
            <h1>Contact us</h1>
            <p>We're open for any suggestion or just to have a chat</p>

            <div className='items grid2'>
              <div className='box'>
                <h4>ADDRESS:</h4>
                <p>F1, 2nd FloorLand Marvel Residential Flat Owners Association, Ashok Nagar, Chennai-600 083.</p>
              </div>
              <div className='box'>
                <h4>EMAIL:</h4>
                <p> brightfuturefilmtechacademy@ gmail.com</p>
              </div>
              <div className='box'>
                <h4>PHONE:</h4>
                <p>+91 93422 54626</p>
                <p>+91 044-35773187</p>
              </div>
            </div>

            <form action=''>
              <div className='flexSB'>
                <input type='text' placeholder='Name' />
                <input type='email' placeholder='Email' />
              </div>
              <input type='text' placeholder='Subject' />
              <textarea cols='30' rows='10'>
                Create a message here...
              </textarea>
              <button className='primary-btn'>SEND MESSAGE</button>
            </form>

            <h3>Follow us here</h3>
            <span >
            <i style={{marginRight:"10px"}} className='fab fa-facebook-f icon'></i>
            <i style={{marginRight:"10px"}}className='fab fa-instagram icon'></i>
            <i style={{marginRight:"10px"}} className='fab fa-twitter icon'></i>
            <i style={{marginRight:"10px"}} className='fab fa-youtube icon'></i>
            </span>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
