import {React, useState} from "react"
import Back from "../common/back/Back"
import BlogCard from "./BlogCard"
import "./blog.css"
import { TextField, Chip,Button, Select, MenuItem, FormControl, InputLabel, Container, Typography, Box } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from "axios";
import CircularProgress from '@mui/material/CircularProgress';

import {
  Dialog,
  DialogTitle,
  DialogContent,
  LinearProgress,
} from "@mui/material";
const theme = createTheme({
  palette: {
    primary: {
      main:'#66FCF1',
    },
    secondary:{
     main:'#45A29E',
    },
    success:{
      main:'#0B0C10',
     },
  },
});


const Blog = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [movieName, setMovieName] = useState("");
  const [description, setDescription] = useState("");
  const [language, setLanguage] = useState("");
  const [genre, setGenre] = useState("");
  const [actorName, setActorName] = useState("");
  const [directorName, setDirectorName] = useState("");
  const [contentRating, setContentRating] = useState("");
  const [duration, setDuration] = useState("");
  const [videoUpload, setVideoUpload] = useState(null);
  const [imageUpload, setImageUpload] = useState(null);
  const [imageUpload1, setImageUpload1] = useState(null);
  const [fileUploadProgress, setFileUploadProgress] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [activeStep, setActiveStep] = useState(1);
  const [buffer, setBuffer] = useState(20);
  

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "userName":
        setUserName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "mobile":
        setMobile(value);
        break;
      case "movieName":
        setMovieName(value);
        break;
      case "description":
        setDescription(value);
        break;
      case "language":
        setLanguage(value);
        break;
      case "genre":
        setGenre(value);
        break;
      case "actorName":
        setActorName(value);
        break;
      case "directorName":
        setDirectorName(value);
        break;
      case "contentRating":
        setContentRating(value);
        break;
      case "duration":
        setDuration(value);
        break;
      default:
        break;
    }
  };

  const handleVideoUpload = (event) => {
    const file = event.target.files[0];
    setVideoUpload(file);
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setImageUpload(file);
  };
  const handleImageUpload1 = (event) => {
    const file = event.target.files[0];
    setImageUpload1(file);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      // userName &&
      // email &&
      // mobile &&
      // movieName &&
      // description &&
      // language &&
      // genre &&
      // actorName &&
      // directorName &&
      // contentRating &&
      duration
    ) {
      setOpenModal(true);
    try {
      const response = await axios.post('http://localhost:1337/api/forms', {
    data:{
      userName: userName,
      mobileNumber: mobile,
      email: email,
      MovieName: movieName,
      Description: description,
      Language: language,
      Genres: genre,
      Actors: actorName,
      Directors: directorName,
      contentRating: contentRating,
      Duration: duration,
    }
    });
    console.log(response);
    const formId = response.data.data.id;
    console.log(formId);
    localStorage.setItem("formId",formId);
    }
    catch (err) {
      alert("Enter valid credentials", err);
    }
  } else {
    alert("Please fill in all the fields");
  }
  };


  const handleUpload = async () => {
    const formData = new FormData();

    const newFileData = {
      alternativeText: localStorage.getItem("formId"),
      caption: 'video',
    };

    const captionVideo = {
      caption: 'video',
    };
    formData.append('fileInfo', JSON.stringify(newFileData));
    // formData.append('file', JSON.stringify(captionVideo));
    formData.append('files', videoUpload);
    formData.append('refId',localStorage.getItem("formId"))
    formData.append('ref','api::form.form')
    formData.append('field',"VideoFile")

  
    // Handle video upload
    try {
      const videoResponse = await axios.post('http://localhost:1337/api/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
  
      // Handle success or error for video upload
      console.log('Video upload response:', videoResponse);
    } catch (error) {
      console.error('Error uploading video:', error);
      // Handle error, e.g., show a message to the user
    }
  
    // Reset progress before starting image uploads
    setFileUploadProgress(10);
  
    // Handle image uploads (assuming you have two imageUpload variables)
    const imageFormDatas = [imageUpload,imageUpload1];
  
    for (let i = 0; i < imageFormDatas.length; i++) {
      const imageFormData = new FormData();
      imageFormData.append('files', imageFormDatas[i]);
      imageFormData.append('refId',localStorage.getItem("formId"))
      imageFormData.append('ref','api::form.form')

      
      if(i==0){
        imageFormData.append('field',"MoviePoster")
        const newFileData = {
          alternativeText: localStorage.getItem("formId"),
          caption: 'MoviePoster',
        };
        imageFormData.append('fileInfo', JSON.stringify(newFileData));
      }
      else{
        imageFormData.append('field',"MovieThumbnail")
        const newFileData = {
          alternativeText: localStorage.getItem("formId"),
          caption: 'Thumbnail',
        };
        imageFormData.append('fileInfo', JSON.stringify(newFileData));
      }
      // Handle image upload
      try {
        const imageResponse = await axios.post('http://localhost:1337/api/upload', imageFormData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
  
        // Handle success or error for each image upload
        console.log(`Image ${i + 1} upload response:`, imageResponse);
      } catch (error) {
        console.error(`Error uploading image ${i + 1}:`, error);
        // Handle error, e.g., show a message to the user
      }
  
      // Update progress after each image upload
      setFileUploadProgress(((i + 1) / imageFormDatas.length) * 100);
      setBuffer(((i + 1) / imageFormDatas.length) * 100);

    }
  
    // All uploads completed
    console.log('All uploads completed');
    setOpenModal(false);
  };

  const handleNextStep = () => {
    if (activeStep === 1 && videoUpload !== null) {
      setActiveStep((prevStep) => prevStep + 1);
    } else if (activeStep === 2 && imageUpload !== null) {
      setActiveStep((prevStep) => prevStep + 1);
    } else if (activeStep === 3 && imageUpload1 !== null) {
      setActiveStep((prevStep) => prevStep + 1);
    }
  };


  const isNextButtonEnabled = () => {
    switch (activeStep) {
      case 1:
        return videoUpload !== null;
      case 2:
        return imageUpload !== null;
      case 3:
        return imageUpload1 !== null;
      default:
        return false;
    }
  };
  
  return (
    <>
    <ThemeProvider theme={theme}>
      <Back title='Contribute now' />
      <section className='blog padding'>
      <Container sx={{backgroundColor: '#C5C6C7', padding: '20px'}}>
      <Typography  variant="h4" gutterBottom>
        Film Submission Form
      </Typography>
      <form onSubmit={handleSubmit}>
      <TextField
          label="Your Name"
          name="userName"
          value={userName}
          onChange={handleInputChange}
          fullWidth
          color="secondary"
          margin="normal"
          required
        />
          <TextField
          label="Mobile Number"
          name="mobile"
          type="number"
          value={mobile}
          onChange={handleInputChange}
          fullWidth
          color="secondary"
          margin="normal"
          required
        />
          <TextField
          label="Your Email"
          name="email"
          type="email"
          value={email}
          onChange={handleInputChange}
          fullWidth
          color="secondary"
          margin="normal"
          required
        />
        <TextField
          label="Movie Name"
          name="movieName"
          value={movieName}
          onChange={handleInputChange}
          fullWidth
          color="secondary"
          margin="normal"
          required
        />
        <TextField
          label="Description"
          name="description"
          value={description}
          onChange={handleInputChange}
          fullWidth
          color="secondary"
          multiline
          rows={4}
          margin="normal"
          required
        />
        <FormControl fullWidth margin="normal">
          <InputLabel color="secondary" >Language</InputLabel>
          <Select
            name="language"
            color="secondary"
            value={language}
            onChange={handleInputChange}
            required
          >
            {/* Add your language options here */}
            <MenuItem  value="English">English</MenuItem>
            <MenuItem value="Tamil">Tamil</MenuItem>
            <MenuItem value="Hindi">Hindi</MenuItem>
            <MenuItem value="Telugu">Telugu</MenuItem>
            <MenuItem value="Kannada">Kannada</MenuItem>
            <MenuItem value="Malayalam">Malayalam</MenuItem>
            <MenuItem value="Japanese">Japanese</MenuItem>
            <MenuItem value="Korean">Korean</MenuItem>
            <MenuItem value="Russian">Russian</MenuItem>
            <MenuItem value="Arabic">Arabic</MenuItem>
            {/* Add more languages as needed */}
          </Select>
        </FormControl>

       <FormControl fullWidth margin="normal">
          <InputLabel color="secondary">Genre</InputLabel>
          <Select
          color="secondary"
            name="genre"
            value={genre}
            onChange={handleInputChange}
            required
          >
            {/* Add your genre options here */}
            <MenuItem value="Action">Action</MenuItem>
            <MenuItem value="Adventure">Adventure</MenuItem>
            <MenuItem value="Comedy">Comedy</MenuItem>
            <MenuItem value="Drama">Drama</MenuItem>
            <MenuItem value="Fantasy">Fantasy</MenuItem>
            <MenuItem value="Horror">Horror</MenuItem>
            <MenuItem value="Mystery">Mystery</MenuItem>
            <MenuItem value="Romance">Romance</MenuItem>
            <MenuItem value="Science fiction">Science fiction</MenuItem>
            <MenuItem value="Sports">Sports</MenuItem>
            <MenuItem value="Thriller">Thriller</MenuItem>
            {/* Add more genres as needed */}
          </Select>
        </FormControl>
        <TextField
          label="Actor Name"
          name="actorName"
          color="secondary"
          value={actorName}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Director Name"
          name="directorName"
          value={directorName}
          onChange={handleInputChange}
          fullWidth
          color="secondary"
          margin="normal"
          required
        />
        <FormControl fullWidth margin="normal">
          <InputLabel color="secondary">Content Rating</InputLabel>
          <Select
          color="secondary"
            name="contentRating"
            value={contentRating}
            onChange={handleInputChange}
            required
          >
            <MenuItem value="U">U (Universal)</MenuItem>
            <MenuItem value="UA">U/A (Universal with Adult)</MenuItem>
            <MenuItem value="A">A (Adult)</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth margin="normal">
          <TextField
          color="secondary"
            label="Duration"
            name="duration"
            type="time"
            value={duration}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
            required
            InputLabelProps={{
              shrink: true,
              
            }}
            inputProps={{
              step: 1, // seconds
              style: {
                color: '#1F2833',
              }
            }}
          />
        </FormControl>
     

        <button
          type="submit"
          class="button-35"
          role="button"
          onClick={handleSubmit}

        >
          Continue
        </button>
      </form>
    </Container>
      </section>
      </ThemeProvider>

       <ThemeProvider theme={theme}>
       <Dialog className="your-modal-class" open={openModal}>
          <DialogTitle className="dialog-title">Upload Your Content</DialogTitle>
          <DialogContent className="dialog-content">
            {activeStep === 1 && (
              <div className="upload-section">
                <label htmlFor="video-upload" className="video-upload">
                  Upload Video:
                </label>
                <input
                  type="file"
                  id="video-upload"
                  accept="video/*"
                  onChange={handleVideoUpload}
                  className="file-input"
                  required
                />
                {/* Circular progress bar for video upload */}
                {/* <CircularProgress
                  className="dialog-progress"
                  variant="determinate"
                  color="success"
                  value={fileUploadProgress}
                />
                <p>{`${Math.round(fileUploadProgress)}%`}</p> */}
              </div>
            )}

            {activeStep === 2 && (
              <div className="upload-section">
                <label htmlFor="poster-upload">Upload Poster:</label>
                <input
                  type="file"
                  id="poster-upload"
                  accept="image/*"
                  onChange={handleImageUpload}
                  required
                />
                {/* Circular progress bar for poster upload */}
                {/* <CircularProgress
                  className="dialog-progress"
                  variant="determinate"
                  color="success"
                  value={fileUploadProgress}
                />
                <p>{`${Math.round(fileUploadProgress)}%`}</p> */}
              </div>
            )}

            {activeStep === 3 && (
              <div className="upload-section">
                <label htmlFor="thumbnail-upload">Upload Thumbnail:</label>
                <input
                  type="file"
                  id="thumbnail-upload"
                  accept="image/*"
                  onChange={handleImageUpload1}
                  required
                />
                {/* Circular progress bar for thumbnail upload */}
                {/* <CircularProgress
                  className="dialog-progress"
                  variant="determinate"
                  color="success"
                  value={fileUploadProgress}
                />
                <p>{`${Math.round(fileUploadProgress)}%`}</p> */}
              </div>
            )}

            {activeStep < 3 && (
              <Button
                onClick={handleNextStep}
                disabled={!isNextButtonEnabled()}
                color="success"
              >
                Next
              </Button>
            )}

            {activeStep === 3 && (
              <>
                {/* Display a progress bar based on fileUploadProgress */}
                <LinearProgress
                  className="dialog-progress"
                  color="secondary"
                  fourColor
                  variant="buffer"
                  value={fileUploadProgress}
                />

                <Button
                  onClick={handleUpload}
                  color="secondary"
                  className="button-36"
                >
                  Submit
                </Button>
              </>
            )}

            <Button onClick={handleCloseModal} color="success">
              Cancel
            </Button>
          </DialogContent>
        </Dialog>
      </ThemeProvider>


    </>
  )
}

export default Blog
