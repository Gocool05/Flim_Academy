import React,{useState} from 'react'
import Back from '../common/back/Back';
import "./Gallery.css"
import Slider from 'react-slick';
import Modal from 'react-modal';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Gallery.css';
import { color } from '@mui/system';



const Gallery = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalImages, setModalImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openModal = (images, index) => {
    setModalImages(images);
    setCurrentImageIndex(index);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const slickSettings = {
    dots: true,
    infinite: true,
    speed:1,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const events = [
    {
      title: 'Flim Production',
      images: [
        { original: `https://res.cloudinary.com/dx78kzenz/image/upload/v1706010884/flimBG3_khnuqs.webp`, thumbnail: `https://res.cloudinary.com/dx78kzenz/image/upload/v1706010884/flimBG3_khnuqs.webp` },
        { original: `https://res.cloudinary.com/dx78kzenz/image/upload/v1706010884/flimBG3_khnuqs.webp`, thumbnail: `https://res.cloudinary.com/dx78kzenz/image/upload/v1706010884/flimBG3_khnuqs.webp` },
        { original: `https://res.cloudinary.com/dx78kzenz/image/upload/v1706010884/flimBG3_khnuqs.webp`, thumbnail: `https://res.cloudinary.com/dx78kzenz/image/upload/v1706010884/flimBG3_khnuqs.webp` },
   
      ],
    },
    {
      title: 'Art and Story',
      images: [
        { original: `https://res.cloudinary.com/dx78kzenz/image/upload/v1706010884/flimBG3_khnuqs.webp`, thumbnail: `https://res.cloudinary.com/dx78kzenz/image/upload/v1706010884/flimBG3_khnuqs.webp` },
        { original: `https://res.cloudinary.com/dx78kzenz/image/upload/v1706010884/flimBG3_khnuqs.webp`, thumbnail: `https://res.cloudinary.com/dx78kzenz/image/upload/v1706010884/flimBG3_khnuqs.webp` },
        { original: `https://res.cloudinary.com/dx78kzenz/image/upload/v1706010884/flimBG3_khnuqs.webp`, thumbnail: `https://res.cloudinary.com/dx78kzenz/image/upload/v1706010884/flimBG3_khnuqs.webp` },
  
      ],
    },
    {
      title: 'Direction',
      images: [
        { original: `https://res.cloudinary.com/dx78kzenz/image/upload/v1706010884/flimBG3_khnuqs.webp`, thumbnail: `https://res.cloudinary.com/dx78kzenz/image/upload/v1706010884/flimBG3_khnuqs.webp` },
        { original: `https://res.cloudinary.com/dx78kzenz/image/upload/v1706010884/flimBG3_khnuqs.webp`, thumbnail: `https://res.cloudinary.com/dx78kzenz/image/upload/v1706010884/flimBG3_khnuqs.webp` },
        { original: `https://res.cloudinary.com/dx78kzenz/image/upload/v1706010884/flimBG3_khnuqs.webp`, thumbnail: `https://res.cloudinary.com/dx78kzenz/image/upload/v1706010884/flimBG3_khnuqs.webp` },
        
      ],
    },
    {
      title: 'Cine Production',
      images: [
        { original: `https://res.cloudinary.com/dx78kzenz/image/upload/v1706010884/flimBG3_khnuqs.webp`, thumbnail: `https://res.cloudinary.com/dx78kzenz/image/upload/v1706010884/flimBG3_khnuqs.webp` },
        { original: `https://res.cloudinary.com/dx78kzenz/image/upload/v1706010884/flimBG3_khnuqs.webp`, thumbnail: `https://res.cloudinary.com/dx78kzenz/image/upload/v1706010884/flimBG3_khnuqs.webp` },
        { original: `https://res.cloudinary.com/dx78kzenz/image/upload/v1706010884/flimBG3_khnuqs.webp`, thumbnail: `https://res.cloudinary.com/dx78kzenz/image/upload/v1706010884/flimBG3_khnuqs.webp` },
      ],
    },
    {
      title: 'Cine Editing',
      images: [
        { original: `https://res.cloudinary.com/dx78kzenz/image/upload/v1706010884/flimBG3_khnuqs.webp`, thumbnail: `https://res.cloudinary.com/dx78kzenz/image/upload/v1706010884/flimBG3_khnuqs.webp` },
        { original: `https://res.cloudinary.com/dx78kzenz/image/upload/v1706010884/flimBG3_khnuqs.webp`, thumbnail: `https://res.cloudinary.com/dx78kzenz/image/upload/v1706010884/flimBG3_khnuqs.webp` },
        { original: `https://res.cloudinary.com/dx78kzenz/image/upload/v1706010884/flimBG3_khnuqs.webp`, thumbnail: `https://res.cloudinary.com/dx78kzenz/image/upload/v1706010884/flimBG3_khnuqs.webp` },
        
      ],
    },
    {
      title: 'Cine Casting',
      images: [
        { original: `https://res.cloudinary.com/dx78kzenz/image/upload/v1706010884/flimBG3_khnuqs.webp`, thumbnail: `https://res.cloudinary.com/dx78kzenz/image/upload/v1706010884/flimBG3_khnuqs.webp` },
        { original: `https://res.cloudinary.com/dx78kzenz/image/upload/v1706010884/flimBG3_khnuqs.webp`, thumbnail: `https://res.cloudinary.com/dx78kzenz/image/upload/v1706010884/flimBG3_khnuqs.webp` },
        { original: `https://res.cloudinary.com/dx78kzenz/image/upload/v1706010884/flimBG3_khnuqs.webp`, thumbnail: `https://res.cloudinary.com/dx78kzenz/image/upload/v1706010884/flimBG3_khnuqs.webp` },
        
      ],
    },
    {
      title: 'Direction',
      images: [
        { original: `https://res.cloudinary.com/dx78kzenz/image/upload/v1706010884/flimBG3_khnuqs.webp`, thumbnail: `https://res.cloudinary.com/dx78kzenz/image/upload/v1706010884/flimBG3_khnuqs.webp` },
        { original: `https://res.cloudinary.com/dx78kzenz/image/upload/v1706010884/flimBG3_khnuqs.webp`, thumbnail: `https://res.cloudinary.com/dx78kzenz/image/upload/v1706010884/flimBG3_khnuqs.webp` },
        { original: `https://res.cloudinary.com/dx78kzenz/image/upload/v1706010884/flimBG3_khnuqs.webp`, thumbnail: `https://res.cloudinary.com/dx78kzenz/image/upload/v1706010884/flimBG3_khnuqs.webp` },
        
      ],
    },
    {
      title: 'Production',
      images: [
        { original: `https://res.cloudinary.com/dx78kzenz/image/upload/v1706010884/flimBG3_khnuqs.webp`, thumbnail: `https://res.cloudinary.com/dx78kzenz/image/upload/v1706010884/flimBG3_khnuqs.webp` },
        { original: `https://res.cloudinary.com/dx78kzenz/image/upload/v1706010884/flimBG3_khnuqs.webp`, thumbnail: `https://res.cloudinary.com/dx78kzenz/image/upload/v1706010884/flimBG3_khnuqs.webp` },
        { original: `https://res.cloudinary.com/dx78kzenz/image/upload/v1706010884/flimBG3_khnuqs.webp`, thumbnail: `https://res.cloudinary.com/dx78kzenz/image/upload/v1706010884/flimBG3_khnuqs.webp` },
        
      ],
    },
    {
      title: 'Music Composition', 
      images: [
        { original: `https://res.cloudinary.com/dx78kzenz/image/upload/v1706010884/flimBG3_khnuqs.webp`, thumbnail: `https://res.cloudinary.com/dx78kzenz/image/upload/v1706010884/flimBG3_khnuqs.webp` },
        { original: `https://res.cloudinary.com/dx78kzenz/image/upload/v1706010884/flimBG3_khnuqs.webp`, thumbnail: `https://res.cloudinary.com/dx78kzenz/image/upload/v1706010884/flimBG3_khnuqs.webp` },
        { original: `https://res.cloudinary.com/dx78kzenz/image/upload/v1706010884/flimBG3_khnuqs.webp`, thumbnail: `https://res.cloudinary.com/dx78kzenz/image/upload/v1706010884/flimBG3_khnuqs.webp` },
        
      ],
    },
    
    // Add more events here as needed
  
  ];


  return (
    <>
    <Back title='Showcasing BFFTA' />
    <section className="gallery">
    <div class="container">  
    <div id="gallery" >
      <div className="section-title" style={{marginTop: "40px"}}>
          <h2 style={{textAlign: "center", marginBottom: "20px"}} >Moments of Bright Future</h2>
          {/* <p style={{textAlign: "center"}}>Moments of Bright Future</p> */}
        </div>
    <div className="main-gallery-container" style={{marginBottom: "50px"}} >
  {events.map((event, index) => (
    <div key={`flexbox-item-${index}`} className="flexbox-item">
      <div className="card" onClick={() => openModal(event.images, 0)}>
        <img src={event.images[0].thumbnail} alt={event.title} className="card-image" />
        <div className="card-title">{event.title}</div>
      </div>
    </div>
  ))}
</div>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Image Modal"
          className="modal-container"
          overlayClassName="modal-overlay"
        >
          <IconButton className="close-button" onClick={closeModal}>
            <CloseIcon />
          </IconButton>
          <ImageGallery items={modalImages} startIndex={currentImageIndex} />
        </Modal>
      
    </div>
    </div>
    </section>
    </>
  )
}


export default Gallery;