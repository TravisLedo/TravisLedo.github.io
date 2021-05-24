import React, { Component, useState } from "react";
import { Carousel, Card, Button, Modal } from "react-bootstrap";

import "./projectcard.css";

const ProjectCard = (props) => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const description = props.description.map((d, index) => <p key={index}>{d}</p>);

  const videos = props.videos.map((v, index) => (
    <div key={index} className="iframe-container mb-5">
      <iframe src={"//www.youtube.com/embed/" + v} allowfullscreen></iframe>
    </div>
  ));

  const images = props.images.map((s, index) => (
    <Carousel.Item key={index}>
      <img className=" item-image d-block" src={s.src} 
 alt={s.text} />
      <Carousel.Caption>
        <h3>{s.text}</h3>
      </Carousel.Caption>
    </Carousel.Item>
  ));

  const links = props.links.map((l, index) => (
    <button
    key={index}
      type="button"
      className="btn btn-secondary btn-lg"
      onClick={() => window.open(l.url)}
    >
      {l.name}
    </button>
  ));

  const tags = props.tags.map((t, index) => <div key={index} className="boxed">{t}</div>);

  return (
    <div className="px-0 mx-0 row">
      <Card
        className="bg-dark text-white project-card darkened-card rounded-0"
        onClick={handleShow}
      >

 <Card.Img
          className="project-image hidden-image zoom"
          src={""+props.thumbnail}
          alt={props.name}
        /> {props.thumbnail}
        <Card.ImgOverlay className="hidden-text">
          <Card.Title>{props.name}</Card.Title>
        </Card.ImgOverlay>
      </Card>

      <Modal show={show} onHide={handleClose} centered size="xl" scrollable>
        <Modal.Header closeButton>
          <Modal.Title>{props.name}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div className="mb-5">{description}</div>
          <div className="row d-flex align-items-center justify-content-center">
            {tags}
          </div>
          <div className="mt-5">{videos}</div>

          <Carousel interval={null}>{images}</Carousel>
        </Modal.Body>

        <Modal.Footer>{links}</Modal.Footer>
      </Modal>
    </div>
  );
};

export default ProjectCard;
