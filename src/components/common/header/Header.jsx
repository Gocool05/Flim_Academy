import React, { useState } from "react"
import { Link } from "react-router-dom"
import Head from "./Head"
import "./header.css"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
import ButtonGroup from '@mui/material-next/ButtonGroup';
import { Button } from "@mui/material-next"


const Header = () => {
  const [click, setClick] = useState(false)
  const history = useHistory();
  const handleClick = () => {
    history.push('/contest');
  };
  const handleClicks = () => {
    history.push('/Admission');
  };

  return (
    <>
      <Head />
      <header>
        <nav className='flexSB' style={{margin: "0px 0px 0px 30px"}}>
          <ul className={click ? "mobile-nav" : "flexSB "} onClick={() => setClick(false)}>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/courses'>All Courses</Link>
            </li>
            <li>
              <Link to='/team'>Team</Link>
            </li>
            <li>
              <Link to='/faq'>FAQ's</Link>
            </li>
            <li>
              <Link to='/Gallery'>Gallery</Link>
            </li>
            <li>
              <Link to='/contact'>Contact</Link>
            </li>
          </ul>
          <div className="Start1" >
            {/* <div className='button' onClick={handleClick} >Contest</div>
            <div className='button' onClick={handleClick} >Contest</div> */}
            <ButtonGroup variant="filled"  className='start' aria-label="loading button group">
            <Button className="button2" color="" onClick={handleClicks}>ADMISSION</Button>
            <Button ClassName="button2" color="" onClick={handleClick}>CONTEST</Button>
            </ButtonGroup> 
          </div>
          <button className='toggle' onClick={() => setClick(!click)}>
            {click ? <i className='fa fa-times'> </i> : <i className='fa fa-bars'></i>}
          </button>
        </nav>
      </header>
    </>
  )
}

export default Header
