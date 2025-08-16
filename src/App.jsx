
import "./App.css";
import Home from "./pages/Home.jsx";
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import BlockSearch from './components/BlockSearch.jsx';

const App = () => {
  // const [scrollPosition,setScrollPosition] = useState(0);

  return (
    <>
    <Navbar />
   <BlockSearch/>
    <Home />
    <Footer/>
    </>
  )
}

export default App