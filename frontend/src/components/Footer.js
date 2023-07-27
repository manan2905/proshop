import React from 'react';
import { Navbar, Nav, Container } from "react-bootstrap";
import { FaInstagram, FaLinkedin, FaGithub, FaRegHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Text>Crafted with  <FaRegHeart color="grey" /> Manan </Navbar.Text>
          <Nav className='ms-auto'>
            <Nav.Link href="https://www.instagram.com/manan.29/"><FaInstagram></FaInstagram></Nav.Link>
            <Nav.Link href="https://www.linkedin.com/in/manan-anand-042305197/"><FaLinkedin></FaLinkedin></Nav.Link>
            <Nav.Link href="https://www.github.com/manan2905"><FaGithub></FaGithub></Nav.Link>
          </Nav>
        </Container>

      </Navbar>
    </footer>
  )
}

export default Footer