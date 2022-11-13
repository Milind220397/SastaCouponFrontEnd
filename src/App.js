
import './App.css';
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import ProdDet from './components/ProdDet/ProdDet';
function App() {
  return (
    <div className="App">
     
      <Header message="My content" />
      <ProdDet/>
      <Footer note="Footer Note" />
      
    </div>
    
  );
}

export default App;
