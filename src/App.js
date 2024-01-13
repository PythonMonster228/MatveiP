import Button from 'react-bootstrap/Button';
import logo from './logo.svg';
import './App.css';
import LoginPage from './components/LoginPage';
import { useState } from "react";

function App() {
  const [currentSection, setCurrentSection] = useState('catalog');
  const handleClick = (section) => {
    setCurrentSection(section);
  }
  return (
    <div className="App">
      <Button onClick={() => handleClick('LoginPage')} >Добавить пользователя</Button>
      {currentSection === 'LoginPage' && <LoginPage />}
    </div>
  );
}

export default App;
