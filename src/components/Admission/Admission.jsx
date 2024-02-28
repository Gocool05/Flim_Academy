import React,{useState,useEffect} from 'react'
import Back from '../common/back/Back';
import './Admission.css'
import { Container, Typography, Paper, Table, TableContainer, TableHead, TableRow, TableCell, TableBody, Button, TextField, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Checkbox,
  FormControlLabel,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';



const useStyles = makeStyles((theme) => ({
  tableContainer: {
    marginTop: theme.spacing(2),
  },
  tableHeaderCell: {
    fontWeight: 'bold',
    background: '#45A29E',
    color: theme.palette.common.white,
  },
  tableRow: {
    backgroundColor: '#C5C6C7',
    '&:hover': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}));

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



const Admission = () => {
  const [open, setOpen] = React.useState(false);
  const[response,SetResponse]=useState('')
  const [isOpen, setIsOpen] = useState(false);
  const classes = useStyles();
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

  return (
    <>
    <Back title='Admission 2024' />
    <div className='container'>
    <Container style={{ marginTop: 20, marginBottom: 40 }}>
      <Typography variant="h3" style={{ color: '#66FCF1', textAlign: 'center' }} gutterBottom>
        ADMISSION PROCEDURE
      </Typography>
      
      {/* Admission Details */}
      <Paper className='Admission-paper' elevation={3} style={{ padding: 20, marginTop: 20, marginBottom: 20, background: '#C5C6C7', color: '#1F2833' }}>
        <Typography  gutterBottom className='admission-heading' style={{fontWeight: 'bold',fontSize: 30}}>
          Admission Details
        </Typography>
        <ul>
          <li>For each course only 20 students will be admitted for training and examination.</li>
          <br/>
          <li>The applicant is required to appear for a written test, group discussion and personal interview before the final selection. Admission will be based on merit and subjected to verification of mark sheet, community, age and transfer certificate by Tamilnadu Music and Fine Arts University.</li>
          <br/>
          <li>Once the candidate is selected for one specialization, no changes in the course will be permitted after admission, candidates will be allowed to pursue one course only during their whole academic year.</li>
          
        </ul>
      </Paper>

      {/* Admission Form */}
      {/* <Grid  spacing={2}  >
      <Grid item xs={12} md={6} lg={6} > */}
      <Paper className='Admission-paper' elevation={3} style={{ padding: 20, marginBottom: 20 ,background: '#C5C6C7', color: '#1F2833' }}>
        <Typography  gutterBottom className='admission-heading' style={{fontWeight: 'bold',fontSize: 30}}>
          What do you need for your Admission
        </Typography>
        <ul>
          <li><i class="fas fa-film" style={{color: '#45A29E', marginRight: 10}}></i>Community Certificate</li>
          <br/>
          <li><i class="fas fa-film" style={{color: '#45A29E', marginRight: 10}}></i>SSLC Certificate</li>
          <br/>
          <li><i class="fas fa-film" style={{color: '#45A29E', marginRight: 10}}></i>HSC Certificate</li>
          <br/>
          <li><i class="fas fa-film" style={{color: '#45A29E', marginRight: 10}}></i>Degree / Diploma Certificate</li>
          <br/>
          <li><i class="fas fa-film" style={{color: '#45A29E', marginRight: 10}}></i>Migration Certificate( other state students only)</li>
          <br/>
          <li><i class="fas fa-film" style={{color: '#45A29E', marginRight: 10}}></i>Transfer Certificate</li>
          <br/>
          <li><i class="fas fa-film" style={{color: '#45A29E', marginRight: 10}}></i>Two references</li>
          <br/>
          <li><i class="fas fa-film" style={{color: '#45A29E', marginRight: 10}}></i>Passport-size photographs</li>
          <br/>
          <li><i class="fas fa-film" style={{color: '#45A29E', marginRight: 10}}></i>Photocopy of Address Proof</li>
          <br/>
        </ul>
      </Paper>
    {/* </Grid> */}
    {/* <Grid item xs={12} md={6} lg={6} > */}
         <Paper className='Admission-paper' elevation={3} style={{ padding: 20, marginBottom: 20 ,background: '#C5C6C7', color: '#1F2833' }}>
        <Typography  gutterBottom className='admission-heading' style={{fontWeight: 'bold',fontSize: 30}}>
        ELIGIBILITY
        </Typography>
        <Typography variant="h6" gutterBottom >
        Applicants should normally have at least one of the following
        </Typography>
        <ul>
          <li><i class="fas fa-film" style={{color: '#45A29E', marginRight: 10}}></i>Minimum SSLC / HSC pass or</li>
          <br/>
          <li><i class="fas fa-film" style={{color: '#45A29E', marginRight: 10}}></i>A Bachelor’s degree or</li>
          <br/>
          <li><i class="fas fa-film" style={{color: '#45A29E', marginRight: 10}}></i>HSC Certificate</li>
          <br/>
          <li><i class="fas fa-film" style={{color: '#45A29E', marginRight: 10}}></i>An equivalent (international) or higher qualification or</li>
          <br/>
          <li><i class="fas fa-film" style={{color: '#45A29E', marginRight: 10}}></i>An equivalent professional qualification or</li>
          <br/>
          <li><i class="fas fa-film" style={{color: '#45A29E', marginRight: 10}}></i>Substantial professional experience in film or a related area.</li>
          <br/>
          <br/>
          <li>You are welcome to apply even if you haven't made films, but feel you have the ability to and meet our minimum entry requirements.</li>
          <br/>
          <li>We believe that film making talent shows itself in many different ways and we are interested in applications who have a passion for film, but a background or portfolio of work in, for example: theatre, journalism, still photography, graphic design or another creative discipline.</li>
          <br/>
          <br/>
        </ul>
      </Paper>
      {/* </Grid>
      </Grid> */}



      <Paper elevation={3} style={{ padding: 20, marginTop: 20, marginBottom: 20 ,background: '#C5C6C7', color: '#1F2833' }}>
        <Typography  gutterBottom className='admission-heading' style={{fontWeight: 'bold',fontSize: 30}}>
        MEDIUM
        </Typography>
        <Typography variant="h6" gutterBottom>
        Candidates must be able to read, write and communicate effectively in English and Tamil. The medium of instruction is English and Tamil.
        </Typography>
      </Paper>
      <Paper elevation={3} style={{ padding: 20, marginTop: 20, marginBottom: 20 ,background: '#C5C6C7', color: '#1F2833' }}>
        <Typography  gutterBottom className='admission-heading' style={{fontWeight: 'bold',fontSize: 30}}>
        ATTENDANCE
        </Typography>
        <Typography variant="h6" gutterBottom>
        Each course consists practical and theory classes from Monday to Friday(excluding holidays). Each student should have 90% attendance. Each course will carry individual theory and practical exams. If students fail in any one, he/she has to repeat the theory and practical in the forth coming year/session.
        </Typography>
      </Paper>


      {/* Eligibility, Medium, Attendance, and Highlights Table */}
      <TableContainer component={Paper} className={classes.tableContainer}>
        <Table>
          <TableHead>
            <TableRow >
              <TableCell className={classes.tableHeaderCell} >Highlights</TableCell>
              <TableCell className={classes.tableHeaderCell} >Details</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow className={classes.tableRow}>
              <TableCell>Course Level</TableCell>
              <TableCell>Certificate, Undergraduate, Postgraduate</TableCell>
            </TableRow>
            <TableRow className={classes.tableRow}>
              <TableCell>Eligibility</TableCell>
              <TableCell>
                <ul>
                  <li>Certificate: Class 12</li>
                  <li>UG: Class 12 along with entrance examination</li>
                  <li>PG: Graduation in any discipline or Theatre or Drama</li>
                </ul>
              </TableCell>
            </TableRow>
            <TableRow className={classes.tableRow}>
              <TableCell>Duration</TableCell>
              <TableCell>
                <ul>
                  <li>Certificate: 6 months - 1 year</li>
                  <li>UG: 3 - 4 years</li>
                  <li>PG: 2 years</li>
                </ul>
              </TableCell>
            </TableRow>
            <TableRow className={classes.tableRow}>
              <TableCell>Examination Type</TableCell>
              <TableCell>Semester-wise</TableCell>
            </TableRow>
            <TableRow className={classes.tableRow}>
              <TableCell>Fee Range</TableCell>
              <TableCell>Not Disclosed</TableCell>
            </TableRow>
            <TableRow className={classes.tableRow}>
              <TableCell>Average Starting Salary</TableCell>
              <TableCell>INR 4 LPA - INR 8 LPA</TableCell>
            </TableRow>
            <TableRow className={classes.tableRow}>
              <TableCell>Job Scope</TableCell>
              <TableCell>Cinematographer, Videographer, Video Editor, Director, Director of Photography</TableCell>
            </TableRow>
            <TableRow className={classes.tableRow}>
              <TableCell>Top Recruiters</TableCell>
              <TableCell>Prime Focus, Casting Chhabra, Excel Entertainment, Saregama India, Iris Media, T-Series</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <button className='button-37' onClick={handleEnrollClick} style={{width:'100%', marginTop: 20}}>Enroll Now</button>
    </Container>
      </div>

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
          <Typography component="a" variant="inherit" style={{color: '#45A29E'}} onClick={handleTermsClick}>
            Terms and Conditions
          </Typography>
        </span>
      }
    />

    {/* Row 9 */}
    <div style={{ display: 'grid', gap: '16px', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))' }}>
    <Button  onClick={handleCloseEnrollmentModal} color="success" > Close</Button>
    <button type="submit" variant="contained" className="button-36" onClick={handlePayment} disabled={!formData.agreeTerms}>
      Pay Now
    </button>
    </div>

  </form>
</DialogContent>
      </Dialog>
      </ThemeProvider>
    </>

  )
}

export default Admission;