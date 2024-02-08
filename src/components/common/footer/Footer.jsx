import React,{useState,useEffect} from "react"
import { blog } from "../../../dummydata"
import "./footer.css"
import { useHistory } from 'react-router-dom';
import EnrollmentModal from "../EnrollNow/Enroll";

import { createTheme, ThemeProvider } from '@mui/material/styles';

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  Checkbox,
  FormControlLabel,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
  FormLabel,
  Snackbar,
  Alert
} from '@mui/material';


const Footer = () => {

  const [termsModalOpen, setTermsModalOpen] = useState(false);
  const [enrollmentModalOpen, setEnrollmentModalOpen] = useState(false);
  const [Enrollment, setEnrollment] = useState('');
  const history = useHistory();
  const [isOpen, setIsOpen] = useState(false);

  const navigateToAboutUs = () => {
    history.push('/about');
  };
  const navigateToHome = () => {
    history.push('/');
  };
  const navigateToGallery = () => {
    history.push('/Gallery');
  };
  const navigateToCourses = () => {
    history.push('/courses');
  };
  const navigateToFaq = () => {
    history.push('/faq');
  };
  const navigateToAdmission = () => {
    history.push('/Admission');
  };
  const navigateToTeam = () => {
    history.push('/team');
  };

  const navigateToContact = () => {
    history.push('/contact');
  };

  const navigateToContest = () => {
    history.push('/contest');
  };

  
  const handleTermsClick = () => {
    setTermsModalOpen(true);
  };
  const handleCloseTermsModal = () => {
    setTermsModalOpen(false);
  };


  const handleClose = () => {
    setIsOpen(false);
  };
  const theme = createTheme({
    palette: {
      primary: {
        main:'#45A29E',
      },
      secondary:{
       main:'#66FCF1',
      },
      success:{
        main:'#0B0C10',
       },
    },
  });

  return (
    <>
      <section className='newletter'>
      <ThemeProvider theme={theme}>
      <Dialog  open={termsModalOpen} onClose={handleCloseTermsModal}>
        <DialogTitle style={{background: '#1F2833', color: '#66FCF1'}}>Terms and Conditions</DialogTitle>
        <DialogContent>
          <DialogContentText style={{color: '#0B0C10',marginTop:20}}>
            <ul>
              <li>1.No harm to animals is allowed.</li>
              <li>2.Explicit or nude content is strictly prohibited.</li>
              <li>3.Ensure that your videos have not been previously posted on any YouTube channels or digital media platforms. </li>
              <li>4.Any existing instances may result in legal actions, and your short film could be rejected.</li>
              <li>5.Copying others' stories may lead to legal consequences.</li>
              <li>6.Once you have submitted your short film to us, refrain from posting it on any other digital media platforms.</li>
              <li>7.All rights are owned by us; you must submit the content with clear copyright clearance.</li>
              <li>8.The final decision rests with the management/institution.</li>
            </ul>
          </DialogContentText>
          <DialogActions>
            <Button onClick={handleCloseTermsModal} style={{background: '#1F2833', color: '#66FCF1'}} className="button-36">
              Close
            </Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
      </ThemeProvider>
      <div class='container flexSB'>
      <div class='left row'>
       <h1>To learn directly from the Masters of Film Industry is the biggest advantage at BFFTA.</h1>
            <button  onClick={navigateToCourses}> Explore Courses</button>
  </div>
  <div class='right row'>
    <img src="https://res.cloudinary.com/dx78kzenz/image/upload/v1707302381/pngegg_xypwl9.png" id='filmReel' alt="Film Reel" />
  </div>
</div>
      </section>
      <footer>
        <div className='container padding'>
          <div className='box logo'>
          <h3>A Brief About BFFTA </h3>
            <p style={{ textAlign: "left", fontSize: "14px" }}>Bright Future Film Tech Academy (BFFTA) is a distinguished film institute situated in Chennai, dedicated to imparting comprehensive training in the art and skills of Screenplay Writing-Direction, Cinematography, and Film Editing</p>
            <i className='fab fa-facebook-f icon'></i>
            <i className='fab fa-twitter icon'></i>
            <i className='fab fa-instagram icon'></i>
          </div>
          <div className='box link'>
          <h3>Explore</h3>
            <ul>
              <li onClick={navigateToHome} >Home</li>
              <li onClick={navigateToAboutUs}>About Us</li>
              <li onClick={navigateToGallery}>Gallery</li>
              <li onClick={navigateToCourses}>Courses</li>
              <li onClick={navigateToTeam}>Team</li>
            </ul>
          </div>
          <div className='box link'>
            <h3>Quick Links</h3>
            <ul>
              <li onClick={navigateToContact} >Contact Us</li>
              <li onClick={navigateToAdmission} >Admission Details</li>
              <li onClick={handleTermsClick} >Terms & Conditions</li>
              <li onClick={navigateToContest} >Contest</li>
              <li onClick={navigateToFaq} >FAQ</li>
            </ul>
          </div>
          <div className='box link'>
            <h3>Courses Available</h3>
            <ul>
              <li onClick={navigateToCourses} >Acting & Presentation</li>
              <li onClick={navigateToCourses}>Script & Screenplay Writing</li>
              <li onClick={navigateToCourses}>Cinematography & Lighting</li>
              <li onClick={navigateToCourses} >Film Making & Direction</li>
              <li onClick={navigateToCourses}>Filming & Video Editing</li>
              <li onClick={navigateToCourses}>Event Management</li>
              <li onClick={navigateToCourses}>Marketing / Business management</li>
              <li onClick={navigateToCourses}>Makeup / Cosmetology</li>
              <li onClick={navigateToCourses}>Pre & Post Production</li>
            </ul>
          </div>
          <div className='box last'>
            <h3>Contact Info</h3>
            <ul>
              <li>
                <i className='fa fa-map'></i> F1, 2nd FloorLand Marvel Residential Flat Owners Association,
                Ashok Nagar, 
                Chennai-600 083.
                
                </li>
              <li>
                <i className='fa fa-phone-alt'></i>
                +91 93422 54626
              </li>
              <li>
                <i className='fa fa-phone-alt'></i>
                +91 044-35773187
              </li>
              <li>
                <i className='fa fa-paper-plane'></i>
                brightfuturefilmtechacademy@ gmail.com
              </li>
              <li>
                <i className='fa fa-clock'></i>
                Mon - Fri. (10am-5pm) <br/>
                Sat & Sun. (11am-5pm)
             </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className='legal'>
      <img className="footer-logo" src='https://res.cloudinary.com/dx78kzenz/image/upload/v1707112026/bf_logo_plospx.png' alt='' />
        <p>
          Copyright ©2024 And All rights reserved by <a  style={{color: "#66FCF1"}} href='https://www.jgntechnologies.com/'>JGN Technologies</a>
        </p>
      </div>
    </>
  )
}

export default Footer
