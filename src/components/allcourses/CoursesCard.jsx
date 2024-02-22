import React,{useState,useEffect} from "react"
import "./courses.css"
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { coursesCard } from "../../dummydata"

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


import axios from "axios";
import { Await } from "react-router-dom";
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

const CoursesCard = () => {
  const [open, setOpen] = React.useState(false);
  const[response,SetResponse]=useState('')
  const [isOpen, setIsOpen] = useState(false);
  const [courseList, setCourseList] = useState([]);
  const [formData, setFormData] = useState({
 
    firstname: '',
    lastname: '',
    contactNumber: '',
    email: '',
    age: '',
    gender: [],
    nationality: '',
    qualification: '',
    address: '',
    courses: [],
    working: [],
    agreeTerms: false,
  });
  const [IdProof, setIdProof] = useState(null);
  const [termsModalOpen, setTermsModalOpen] = useState(false);
  const [enrollmentModalOpen, setEnrollmentModalOpen] = useState(false);
  const [Enrollment, setEnrollment] = useState('');

  const handleInputChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : type === 'file' ? files[0] : value,
    }));
  };

  const handleUpload = (event) => {
    const file = event.target.files[0];
    // localStorage.setItem("Image",files);  
    setIdProof(file);
  }

  const handleTermsClick = () => {
    setTermsModalOpen(true);
  };
  
    

  const handleEnrollClick = () => {
    setEnrollmentModalOpen(true);
  };

  const handleCloseTermsModal = () => {
    setTermsModalOpen(false);
  };

  const handleCloseEnrollmentModal = () => {
    setEnrollmentModalOpen(false);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleData = async (Paymentresponse) => {
    const response = await axios.post( 'http://localhost:1337/api/enrollments',
    {
      "data":{
        FirstName:formData.firstname,
        LastName:formData.lastname,
        MobileNumber:formData.contactNumber,
        EmailId:formData.email,
        Age:formData.age,
        gender:formData.gender,
        Nationality:formData.nationality,
        EducationOrGraduation:formData.qualification,
        Address:formData.address,
        Course:formData.courses,
        Working:formData.working,
        payment_id:Paymentresponse.razorpay_payment_id,
      }  
    }
  );
  const enrollmentId = response.data.data.id;
  console.log('hello',enrollmentId);
  setEnrollment(enrollmentId);
  localStorage.setItem("EnrollmentId", enrollmentId);
  
  }
  useEffect(() => {
    if(Enrollment != ''){
      handleEnroll();
    }
  },[Enrollment]);
  const handleEnroll = async() => {
    const formDataa = new FormData();
        formDataa.append('files',IdProof);
        formDataa.append('refId',localStorage.getItem("EnrollmentId"));
        formDataa.append('ref','api::enrollment.enrollment')
        formDataa.append('field',"Image")
        const videoResponse = await axios.post('http://localhost:1337/api/upload', formDataa, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        console.log('Video upload response:', videoResponse);
  }

  const handlePayment = async(e)=>{
    
    e.preventDefault();
     const amount = 800;
    // const result = await loadRazorpay();

    // if (!result) {
    //   alert("Razorpay SDK Failed to load");
    //   return;
    // }

      var options = {
        key: "rzp_test_CqbzQKAn3Mm2Ol",
        key_secret:"G4ueEdy441wU3S039jtx7Rz4",
        amount: amount *100,
        currency:"INR",
        name:"STARTUP_PROJECTS",
        description:"for testing purpose",
        handler:  function (Paymentresponse){
         handleData(Paymentresponse);
        //  handleEnroll();
        
        },
        prefill: {
          name:"GOCOOL",
          email:"GOCOOL@gmail.com",
          contact:"8888888888"
        },
        notes:{
          address:"Razorpay Corporate office"
        },
        theme: {
          color:"#3399cc"
        }
      };
      var pay = new window.Razorpay(options);
      pay.open();
      const loadRazorpay = () => {
        return new Promise((resolve) => {
          const script = document.createElement("script");
          script.src = "https://checkout.razorpay.com/v1/checkout.js";
          // document.body.appendChild(script);
    
          script.onload = () => {
            resolve(true);
          };
          script.onerror = () => {
            resolve(false);
          };
    
          document.body.appendChild(script);
        });
      };
  }

  useEffect(() => {
  const handleCourseList = async() =>{
  try {
    const response = await fetch('http://localhost:1337/api/course-cards');
    // console.log(response);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    console.log('hi',data); 
    setCourseList(data.data);
    console.log('hey',courseList);
  } catch (error) {
    console.error('Error fetching data:', error.message);
  }
 };
//  useEffect(() => {
  handleCourseList();
}, []);


  return (
    <>
      <section className='coursesCard'>
        {/* <div className='container grid2'>
          {courseList.map((val) => (
            <div className='items'>
              <div className='content flex'>
                <div className='left'>
                  <div className='img'>
                    <img src={val.cardImage} alt='' />
                  </div>
                </div>
                <div className='text'>
                  <h1>{val.attributes.CourseName}</h1>
                  <div className='rate'>
                     {Array.from({ length: val.attributes.CourseRating }).map((_, index) => (
                     <i key={index} className='fa fa-star'></i>
                ))}
                <label htmlFor=''>{`(${val.attributes.CourseRating})`}</label>
                  </div>
                  <div className='details'>
                        <div className='box'>
                          <div className='dimg'>
                            <img src={val.attributes.cardImage} alt='' />
                          </div>
                          <div className='para'>
                            <h4>{val.attributes.StaffName}</h4>
                          </div>
                        </div>
                        <span>{val.attributes.CourseDuration}</span>
                  </div>
                </div>
              </div>
              <div className='price'>
                <h3>
                ₹{val.attributes.CourseFee} + GST
                </h3>
              </div>
              <button onClick={handleEnrollClick} className='outline-btn'>ENROLL NOW !</button>
            </div>
          ))}
        </div> */}


<div className='container grid2'>
          {coursesCard.map((val) => (
            <div className='items'>
              <div className='content flex'>
                <div className='left'>
                  <div className='img'>
                    <img src={val.cover} alt='' />
                  </div>
                </div>
                <div className='text'>
                  <h1>{val.coursesName}</h1>
                  <div className='rate'>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <label htmlFor=''>(5.0)</label>
                  </div>
                  <div className='details'>
                    {val.courTeacher.map((details) => (
                      <>
                        <div className='box'>
                          <div className='dimg'>
                            <img src={details.dcover} alt='' />
                          </div>
                          <div className='para'>
                            <h4>{details.name}</h4>
                          </div>
                        </div>
                        <span>{details.totalTime}</span>
                      </>
                    ))}
                  </div>
                </div>
              </div>
              <div className='price'>
                <h3>
                  {val.priceAll} / {val.pricePer}
                </h3>
              </div>
              <button onClick={handleEnrollClick} className='outline-btn'>ENROLL NOW !</button>
            </div>
          ))}
        </div>

        {/* Terms and Conditions Modal */}
        <ThemeProvider theme={theme}>
         <Dialog  open={termsModalOpen} onClose={handleCloseTermsModal}>
        <DialogTitle>Terms and Conditions</DialogTitle>
        <DialogContent>
          <DialogContentText>
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
            <Button onClick={handleCloseTermsModal} color="primary">
              Close
            </Button>
          </DialogActions>
        </DialogContent>
      </Dialog>

      {/* Enrollment Modal */}
      <Dialog  open={enrollmentModalOpen} onClose={handleCloseEnrollmentModal}>
        <DialogTitle style={{backgroundColor: '#C5C6C7',color: '#1F2833',fontWeight: 'bold'}} >ENROLLMENT FORM</DialogTitle>
        <DialogContent style={{backgroundColor: '#C5C6C7'}} color="secondary">
  <form className="form" style={{ display: 'grid', gap: '16px' }}>
    {/* Row 1 */}
    <div style={{ display: 'grid', gap: '16px', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',marginTop:'20px' }}>
      <TextField label="First Name" name="firstname" value={formData.firstname} onChange={handleInputChange}  fullWidth required />
      <TextField label="Last Name" name="lastname" value={formData.lastname} onChange={handleInputChange}  fullWidth required />
    </div>
      <TextField label="Mobile Number" name="contactNumber" value={formData.contactNumber} onChange={handleInputChange}  fullWidth required />
      <TextField
          label="Your Mail Id"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleInputChange}
          fullWidth
          required
        />         

    {/* Row 2 */}
    <div style={{ display: 'grid', gap: '16px', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))' }}>
      <TextField label="Age" name="age" value={formData.age} onChange={handleInputChange}  fullWidth required />
      <TextField label="Qualification" name="qualification" value={formData.qualification} onChange={handleInputChange} fullWidth required />
    </div>  

    {/* Row 3 */}
    <div style={{ display: 'grid', gap: '16px', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))' }}>
      <TextField label="Nationality" name="nationality" value={formData.nationality} onChange={handleInputChange} fullWidth required />
      <TextField label="Address" name="address" value={formData.address} onChange={handleInputChange} fullWidth required />
    </div>

    {/* Other form fields go here */}
    {/* ... */}

    {/* Row 4 */}
    <FormControl fullWidth required>
      <InputLabel>Courses</InputLabel>
      <Select
        name="courses"
        value={formData.courses}
        onChange={handleInputChange}
      >
        {/* Replace with your course options */}
        <MenuItem value="Acting & Presentation">Acting & Presentation</MenuItem>
        <MenuItem value="Script & Screenplay Writing">Script & Screenplay Writing</MenuItem>
        <MenuItem value="Cinematography & Lighting">Cinematography & Lighting</MenuItem>
        <MenuItem value="Film Making & Direction">Film Making & Direction</MenuItem>
        <MenuItem value="Filming & Video Editing">Filming & Video Editing</MenuItem>
        <MenuItem value="Event Management">Event Management</MenuItem>
        <MenuItem value="Marketing / Business management">Marketing / Business management</MenuItem>
        <MenuItem value="Makeup / Cosmetology">Makeup / Cosmetology</MenuItem>
        <MenuItem value="Pre & Post Production">Pre & Post Production</MenuItem>
      </Select>
    </FormControl>

    {/* Row 5 */}
    <div style={{ display: 'grid', gap: '16px', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))' }}>
    <FormControl fullWidth required>
      <InputLabel>Gender</InputLabel>
      <Select
        name="gender"
        value={formData.gender}
        onChange={handleInputChange}
      >
        {/* Replace with your gender options */}
        <MenuItem value="Male">Male</MenuItem>
        <MenuItem value="Female">Female</MenuItem>
        <MenuItem value="prefer not to say">Prefer not to say</MenuItem>
      </Select>
    </FormControl>

    {/* Row 6 */}
    <FormControl fullWidth required>
      <InputLabel>Working</InputLabel>
      <Select
        name="working"
        value={formData.working}
        onChange={handleInputChange}
      >
        <MenuItem value="Yes">Yes</MenuItem>
        <MenuItem value="No">No</MenuItem>
      </Select>
    </FormControl>
    </div>
    {/* Row 7 */}
    <div style={{  gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))' }}>
      <Typography variant="h6" style={{ marginBottom: '8px' }}>Upload ID Proof</Typography>
      <input type="file" name="idproof" onChange={handleUpload} fullWidth required />
      {/* Add other file inputs here */}
    </div>

    {/* Row 8 */}
    <FormControlLabel
      control={<Checkbox name="agreeTerms" checked={formData.agreeTerms} onChange={handleInputChange} />}
      label={
        <span>
          I agree to the{' '}
          <Typography component="a" variant="inherit" color="primary" onClick={handleTermsClick}>
            Terms and Conditions
          </Typography>
        </span>
      }
    />

    {/* Row 9 */}
    <div style={{ display: 'grid', gap: '16px', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))' }}>
    <Button  onClick={handleCloseEnrollmentModal} color="success" > Close</Button>
    <Button type="submit" variant="contained" className="button-36" onClick={handlePayment} disabled={!formData.agreeTerms}>
      Pay Now
    </Button>
    </div>

  </form>
</DialogContent>
      </Dialog>
      </ThemeProvider>
      </section>
    </>
  )
}

export default CoursesCard;