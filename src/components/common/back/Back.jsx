import React from "react"
import { useLocation } from "react-router-dom"

const Back = ({ title }) => {
  const location = useLocation()

  return (
    <>
      <section className='back'>
    <div className="back-title">
        <h2>Home / {location.pathname.split("/")[1]}</h2>
        <h1 className="backTitle" data-text={title}>{title}</h1>
    </div>

      </section>
      <div className='margin'></div>
    </>
  )
}

export default Back
