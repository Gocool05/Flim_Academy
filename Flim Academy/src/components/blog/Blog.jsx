import {React, useState} from "react"
import Back from "../common/back/Back"
import BlogCard from "./BlogCard"
import "./blog.css"
import { TextField, Chip,Button, Select, MenuItem, FormControl, InputLabel, Container, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

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
  const [formData, setFormData] = useState({
    movieName: '',
    description: '',
    moviePoster: null,
    videoFile: null,
    language:'',
    genre:[],
    actorName: '',
    actressName: '',
    directorName: '',
    contentRating: '',
    duration: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleVideoChange = (e) => {
    setFormData({ ...formData, videoFile: e.target.files[0] });
  };
  const handleImgChange = (e) => {
    setFormData({ ...formData, moviePoster: e.target.files[0] });
  };


  const handleGenreChange = (e) => {
    setFormData({ ...formData, genre: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send formData to backend (you can use Axios or fetch)
    console.log('Form submitted:', formData);
    // Add logic to send data to the backend using Strapi
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
          label="Movie Name"
          name="movieName"
          value={formData.movieName}
          onChange={handleChange}
          fullWidth
          color="secondary"
          margin="normal"
          required
        />
        <TextField
          label="Description"
          name="description"
          value={formData.description}
          onChange={handleChange}
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
            value={formData.language}
            onChange={handleChange}
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
            value={formData.genre}
            onChange={handleGenreChange}
            multiple
            renderValue={(selected) => (
              <div>
                {selected.map((value) => (
                  <Chip key={value} label={value} style={{ margin: 2 }} />
                ))}
              </div>
            )}
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
          value={formData.actorName}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />
        {/* <TextField
          label="Actress Name"
          name="actressName"
          value={formData.actressName}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        /> */}
        <TextField
          label="Director Name"
          name="directorName"
          value={formData.directorName}
          onChange={handleChange}
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
            value={formData.contentRating}
            onChange={handleChange}
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
            value={formData.duration}
            onChange={handleChange}
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
        <TextField
          label="Movie Poster"
          name="moviePoster"
          type="file"
          onChange={handleImgChange}
          fullWidth
          color="secondary"
          margin="normal"
          InputLabelProps={{ shrink: true }}
        />
        {formData.moviePoster && (
          <img
            src={URL.createObjectURL(formData.moviePoster)}
            alt="Movie Poster"
            style={{ marginTop: '10px', maxWidth: '100%' }}
          />
        )}

        <TextField
          label="Upload your video"
          name="videoFile"
          type="file"
          onChange={handleVideoChange}
          fullWidth
          color="secondary"
          margin="normal"
          InputLabelProps={{ shrink: true }}
        />
        {formData.videoFile && (
          <Typography variant="body1" gutterBottom>
            Selected Video: {formData.videoFile.name}
          </Typography>
        )}

        <button
          type="submit"
          class="button-35"
          role="button"
        >
          Submit
        </button>
      </form>
    </Container>
      </section>
      </ThemeProvider>
    </>
  )
}

export default Blog
