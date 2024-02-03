import React, { useState,useEffect } from 'react';
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
} from '@mui/material';
import { useModal } from '../../../ModalContext';

const EnrollmentModal = () => {
  const [formData, setFormData] = useState({
    name: '',
    contactNumber: '',
    dob: '',
    age: '',
    gender: '',
    nationality: '',
    educationDetails: '',
    address: '',
    photo: null,
    idProof: null,
    courses: [],
    working: '',
    signPic: null,
    agreeTerms: false,
  });

  const [termsModalOpen, setTermsModalOpen] = useState(false);
  const [enrollmentModalOpen, setEnrollmentModalOpen,closeEnrollmentModal ] = useModal();

  useEffect(() => {
    if (!enrollmentModalOpen) {
      closeEnrollmentModal();
    }
  }, [enrollmentModalOpen, closeEnrollmentModal]);



  const handleInputChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : type === 'file' ? files[0] : value,
    }));
  };

  const handleTermsClick = () => {
    setTermsModalOpen(true);
  };

  const handleEnrollClick = () => {
    setEnrollmentModalOpen(true);
  };

  const handleSubmit = () => {
    // Implement your form submission logic here
    // Example: console.log(formData);
  };

  const handleCloseTermsModal = () => {
    setTermsModalOpen(false);
  };

  const handleCloseEnrollmentModal = () => {
    setEnrollmentModalOpen(false);
  };

  return (
    <div>
       
      {/* Terms and Conditions Modal */}
      <Dialog open={termsModalOpen} onClose={handleCloseTermsModal}>
        <DialogTitle>Terms and Conditions</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Your terms and conditions content goes here.
          </DialogContentText>
          <DialogActions>
            <Button onClick={handleCloseTermsModal} color="primary">
              Close
            </Button>
          </DialogActions>
        </DialogContent>
      </Dialog>

      {/* Enrollment Modal */}
      <Dialog open={enrollmentModalOpen} onClose={handleCloseEnrollmentModal}>
        <DialogTitle>Enroll for Course</DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit}>
            {/* Your form fields here */}
            <TextField
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              fullWidth
              required
            />
            {/* Other form fields go here */}

            {/* Courses Selection */}
            <FormControl fullWidth required>
              <InputLabel>Courses</InputLabel>
              <Select
                multiple
                name="courses"
                value={formData.courses}
                onChange={handleInputChange}
                renderValue={(selected) => selected.join(', ')}
              >
                {/* Replace with your course options */}
                <MenuItem value="Course1">Course 1</MenuItem>
                <MenuItem value="Course2">Course 2</MenuItem>
                <MenuItem value="Course3">Course 3</MenuItem>
              </Select>
            </FormControl>

            {/* Working Field */}
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

            {/* Signature Picture Upload */}
            <TextField
              type="file"
              label="Signature Picture"
              name="signPic"
              onChange={handleInputChange}
              fullWidth
              required
            />

            {/* Terms and Conditions */}
            <FormControlLabel
              control={
                <Checkbox
                  name="agreeTerms"
                  checked={formData.agreeTerms}
                  onChange={handleInputChange}
                />
              }
              label={
                <span>
                  I agree to the{' '}
                  <Typography
                    component="a"
                    variant="inherit"
                    color="primary"
                    onClick={handleTermsClick}
                  >
                    Terms and Conditions
                  </Typography>
                </span>
              }
            />

            {/* Payment Button */}
            <Button
              type="submit"
              variant="contained"
              disabled={!formData.agreeTerms}
            >
              Pay Now
            </Button>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseEnrollmentModal} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default EnrollmentModal;
