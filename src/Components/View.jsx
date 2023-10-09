import React, { useState } from 'react'
import { Card } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';

function VideoCard({displayData}) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
           { displayData && 
           <Card className='mb-3' style={{ width: '18rem' }}>
                <Card.Img onClick={handleShow} style={{height:'200px',width:"100%"}}  variant="top" src={displayData?.url} />
                <Card.Body>
                    <Card.Title className='d-flex justify-content-between align-items-center'>
                        <h6>{displayData?.caption}</h6>
                        <button className='btn'><i class="fa-solid fa-trash" style={{color:" #ff0000",marginRight:"50px"}}></i></button>

                    </Card.Title>
                </Card.Body>
            </Card>}
            
            <Modal show={show} 
            onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{displayData?.caption}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <iframe width="100%" height="400px" src={`${displayData?.embedlink}?autoplay=1`} title={displayData?.caption}  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullscreen></iframe> 
                </Modal.Body>

            </Modal>
        </>
    )
}

export default VideoCard