import React,{useState} from 'react';
import "./App.css";
import Home from "./pages/Home.jsx";
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';

const App = () => {
  // const [scrollPosition,setScrollPosition] = useState(0);

  return (
    <>
    <Navbar />
    <Home />
    <Footer/>
    </>
  )
}

export default App