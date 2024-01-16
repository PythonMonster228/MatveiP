import Button from 'react-bootstrap/Button';
import logo from './logo.svg';
import './App.css';
import './components/css/footer.css';
import LoginPage from './components/LoginPage';
import MyCard from './components/MyCard';
import { useState } from "react";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container';
import Main from './components/Main';

function App() {
  const [currentSection, setCurrentSection] = useState('LoginPage');
  const handleNavClick = (section) => {
    setCurrentSection(section);
  }
  return (
    <div className="App">
      {/* <Button onClick={() => handleClick('LoginPage')} >Добавить пользователя</Button>
      {currentSection === 'LoginPage' && <LoginPage />} */}
      <Navbar bg="light" expand="lg" className="consulting-navbar consulting-nav">
      <Container fluid>
      <Navbar.Brand>Paroli.io</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav">
      </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="consulting-nav">
            <Nav.Link className="consulting-nav a" href="#LoginPage" onClick={() => handleNavClick('LoginPage')}>Добавить пользователя</Nav.Link>
            <Nav.Link className="consulting-nav a" href="#Main" onClick={() => handleNavClick('Main')}>Карточки</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    {currentSection === 'LoginPage' && <LoginPage />}
    {currentSection === 'Main' && <Main />}
    </div>
  );
}

export default App;