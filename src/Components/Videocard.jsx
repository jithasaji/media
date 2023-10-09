import React from 'react'
import { useState } from 'react';
import { Card,Modal } from 'react-bootstrap'
import { deleteAVideo } from '../services/allAPI';



function VideoCard({displayData,setDeleteSpecificVideo}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const deleteSingleVideo = async (id)=>{
    console.log(id);
    const response = await deleteAVideo(id)
      console.log(response);
        setDeleteSpecificVideo(true)
        alert(`Video deleted Successfully`)
  }

  return (
    <>
    {
      displayData &&
      <Card className='mb-4'>
      <Card.Img onClick={handleShow} style={{height:'180px',cursor:'pointer'}} className="w-100" variant="top" src={displayData?.url}/>
      <Card.Body>
        <Card.Title className="d-flex justify-content-between align-items-center">
          <h6>{displayData?.caption}</h6>
          <button onClick={()=>deleteSingleVideo(displayData?.id)} className='btn'><i className="fa-solid fa-trash text-danger"></i></button>
        </Card.Title>
      </Card.Body>
    </Card>
  }
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{displayData?.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width={'100%'} height={"400px"} src={`${displayData?.embedlink}?autoplay=1`} title={displayData?.caption} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </Modal.Body>
        
      </Modal>
    </>
  )
}

export default VideoCard
