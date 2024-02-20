import React, { useState } from "react"
import { Link } from "react-router-dom"
import Head from "./Head"
import "./header.css"
import { useNavigate } from "react-router-dom"
import ButtonGroup from '@mui/material-next/ButtonGroup';
import { Button } from "@mui/material-next"


const Header = () => {
  const [click, setClick] = useState(false)
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/contest');
  };
  const handleClicks = () => {
    navigate('/Admission');
  };

  return (
    <>
      {/* <Head /> */}
      <header>
        <nav className='flexSB' style={{margin: "0px 0px 0px 30px"}}>
        <div className='logo'>
            <img src='https://res.cloudinary.com/dx78kzenz/image/upload/v1707112026/bf_logo_plospx.png' alt='' />
          </div>
          <ul className={click ? "mobile-nav" : "flexSB "} onClick={() => setClick(false)}>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/courses'>All Courses</Link>
            </li>

            <li>
              <Link to='/Gallery'>Gallery</Link>
            </li>

            <li>
              <Link to='/faq'>FAQ's</Link>
            </li>

            <li>
              <Link to='/team'>Team</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/contact'>Contact</Link>
            </li>
            <div style={{marginRight: "100px"}}></div>
            <li className="Startlist">
            <span className="Start1">
            <ButtonGroup  className='start' aria-label="loading button group">
            <Button className="button2" color="" onClick={handleClicks}>ADMISSION</Button>
            <Button ClassName="button2" color="" onClick={handleClick}>CONTEST</Button>
            </ButtonGroup>
        </span>
            </li>
          </ul>
          <button className='toggle' onClick={() => setClick(!click)}>
            {click ? <i className='fa fa-times'> </i> : <i className='fa fa-bars'></i>}
          </button>
        </nav>
        {/* <span className="Start1">
            <ButtonGroup variant="filled"  className='start' aria-label="loading button group">
            <Button className="button2" color="" onClick={handleClicks}>ADMISSION</Button>
            <Button ClassName="button2" color="" onClick={handleClick}>CONTEST</Button>
            </ButtonGroup>
        </span> */}
      </header>
    </>
  )
}

export default Header
