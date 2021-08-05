import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Carousel } from "react-bootstrap";

export default function Top() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">MOVIE REVIEWS</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Support</Nav.Link>
          </Nav>
        </Container>
      </Navbar>


      {/* Carousel */}
      <div>
      <Carousel>
        <Carousel.Item className="Item">
          <img
            className="d-block w-100"
            src="https://th.bing.com/th/id/OIP.KXKYEutYHiLt9sh7UYbwBwHaK-?pid=ImgDet&rs=1"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Get Your Movie reviews Here</h3>
            <p>More</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="Item">
          <img
            className="d-block w-100"
            src="https://picfiles.alphacoders.com/840/thumb-1920-84051.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>SGet Your Movie reviews Here</h3>
            <p>More</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="Item">
          <img
            className="d-block w-100"
            src="https://thewallpaper.co/wp-content/uploads/2020/09/entertainment-photos-hd-wallpapers-movie-images-characters-power-cool-backgrounds-movie-desktop-images-amazing-2262x1504-1.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Get Your Movie reviews Here</h3>
            <p>More</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </div>
    </div>
  );
}
