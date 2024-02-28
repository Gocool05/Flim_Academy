import React from 'react';
import { Modal, Button, Box } from '@mui/material';
import './imageModal.css';
import { useNavigate } from 'react-router-dom';

export default function ImageModal({ open, onClose }) {
    const navigate = useNavigate();

    const navigateToContest = () => {
        navigate('/Contest');
        onClose();
    };

    return (
        <Modal
            open={open}
            onClose={onClose}
            aria-labelledby="image-modal"
            aria-describedby="image-modal-description"
        >
            <Box className="image-modal-container">
                <img
                    src="https://res.cloudinary.com/dx78kzenz/image/upload/v1708945913/Bright_Future_MODAL_ydl18z.png"
                    alt="Your Image"
                    className='image-modal'
                />
                <Button className="image-modal-button" style={{background: "#FAC213", color: "black" ,fontWeight: "bold"}}  onClick={navigateToContest}>
                    Apply Now
                </Button>
            </Box>
        </Modal>
    );
}
