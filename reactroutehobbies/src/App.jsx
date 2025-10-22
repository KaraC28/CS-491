import './App.css'
import React, {useState} from 'react';
import { Button, Navbar, Nav, Container, Image } from 'react-bootstrap';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import homeImage from "/images/coolStreet.jpg";
import bikeImage from "/images/bike.jpg";
import gameImage from "/images/gameConsole.jpg";
import artImage from "/images/artStuff.jpg";
import travelImage from "/images/traveler.jpg";
function App() {
  const [showInfo, setShowInfo] = useState(null);
  const Home = () => {
    return (
      <div>
        <h1>Home</h1>
        <h2>Welcome Home!</h2>
        <Image src = {homeImage}/>
      </div>
    )
  }
  const Hobbies = () => {
    const hobbies = [
      {hobby: "Biking", image: bikeImage, info: "I often go biking during the summer."}, 
      {hobby: "Gaming", image: gameImage, info: "My favorite gaming console is the Wii."}, 
      {hobby: "Art", image: artImage, info: "My go-to mediums are colored pencils and markers."}, 
      {hobby: "Traveling", image: travelImage, info: "I'll travel to more countries when I'm less poor."}
    ]
    return (
      <div>
        <h1>Hobbies</h1>
        <div>
        <ul>
          {hobbies.map((item, index) => (
            <li key={index} onClick ={() => setShowInfo(index == showInfo ? null : index)}>
              <div> 
                <h2>{item.hobby}</h2>
                <Image src = {item.image}/>
                {showInfo == index && <div>{item.info}</div>}
              </div>
            </li>
          ))}
        </ul>
        </div>
      </div>
    )
  }
  const About = () => {
    return (
      <div>
        <h1>About</h1>
        <p>
        This assignment is about trying out Navbar, Router, and<br/>
        organizing hobbies. I don't know what else to write here.
         </p>
      </div>
    )
  }


  return (
    <>
      <Router>
        <Navbar bg="light" expand="lg">
          <Container>
              <Nav>
                <Nav.Link as= {Link} to = "/">Home</Nav.Link>
                <Nav.Link as= {Link} to = "/hobbies">Hobbies</Nav.Link>
                <Nav.Link as= {Link} to = "/about">About</Nav.Link>
              </Nav>
          </Container>
        </Navbar>

        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/hobbies" element={<Hobbies/>}/>
          <Route path="/about" element={<About/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
