
import './App.css';
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import LandingPageComponent from './components/LandingPage/LandingPageComponent';
function App() {
  return (
    <div className="App">
     
      <Header message="My content" />
      <LandingPageComponent/>
      <Footer note="Footer Note" />
      
    </div>
    
  );
}

export default App;
