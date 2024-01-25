import React from 'react'
import Back from '../common/back/Back';
import './Admission.css'
import { Container, Typography, Paper, Table, TableContainer, TableHead, TableRow, TableCell, TableBody, Button, TextField, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

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
const Admission = () => {
  const classes = useStyles();

  return (
    <>
    <Back title='Admission 2024' />
    <div className='container'>
    <Container style={{ marginTop: 20, marginBottom: 40 }}>
      <Typography variant="h3" style={{ color: '#66FCF1', textAlign: 'center' }} gutterBottom>
        ADMISSION
      </Typography>
      
      {/* Admission Details */}
      <Paper className='Admission-paper' elevation={3} style={{ padding: 20, marginTop: 20, marginBottom: 20, background: '#C5C6C7', color: '#1F2833' }}>
        <Typography  gutterBottom className='admission-heading'>
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
      <Paper elevation={3} style={{ padding: 20, marginBottom: 20 ,background: '#C5C6C7', color: '#1F2833' }}>
        <Typography  gutterBottom className='admission-heading'>
          What do you need for your Admission
        </Typography>
        <ul>
          <li>Community Certificate</li>
          <br/>
          <li>SSLC Certificate</li>
          <br/>
          <li>HSC Certificate</li>
          <br/>
          <li>Degree / Diploma Certificate</li>
          <br/>
          <li>Migration Certificate( other state students only)</li>
          <br/>
          <li>Transfer Certificate</li>
          <br/>
          <li>Two references</li>
          <br/>
          <li>Passport-size photographs</li>
          <br/>
          <li>Photocopy of Address Proof</li>
          <br/>
        </ul>
      </Paper>
      <Paper elevation={3} style={{ padding: 20, marginBottom: 20 ,background: '#C5C6C7', color: '#1F2833' }}>
        <Typography  gutterBottom className='admission-heading'>
        ELIGIBILITY
        </Typography>
        <Typography variant="h6" gutterBottom>
        Applicants should normally have at least one of the following
        </Typography>
        <ul>
          <li>Minimum SSLC / HSC pass or</li>
          <br/>
          <li>A Bachelor’s degree or</li>
          <br/>
          <li>HSC Certificate</li>
          <br/>
          <li>An equivalent (international) or higher qualification or</li>
          <br/>
          <li>An equivalent professional qualification or</li>
          <br/>
          <li>Substantial professional experience in film or a related area.</li>
          <br/>
          <br/>
          <li>You are welcome to apply even if you haven't made films, but feel you have the ability to and meet our minimum entry requirements.</li>
          <br/>
          <li>We believe that film making talent shows itself in many different ways and we are interested in applications who have a passion for film, but a background or portfolio of work in, for example: theatre, journalism, still photography, graphic design or another creative discipline.</li>
          <br/>
          <br/>
        </ul>
      </Paper>
      <Paper elevation={3} style={{ padding: 20, marginTop: 20, marginBottom: 20 ,background: '#C5C6C7', color: '#1F2833' }}>
        <Typography  gutterBottom className='admission-heading'>
        MEDIUM
        </Typography>
        <Typography variant="h6" gutterBottom>
        Candidates must be able to read, write and communicate effectively in English and Tamil. The medium of instruction is English and Tamil.
        </Typography>
      </Paper>
      <Paper elevation={3} style={{ padding: 20, marginTop: 20, marginBottom: 20 ,background: '#C5C6C7', color: '#1F2833' }}>
        <Typography  gutterBottom className='admission-heading'>
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
      <button className='button-37'>Enquire now</button>
    </Container>
      </div>
    </>

  )
}

export default Admission;