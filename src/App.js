
import './App.css';
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import LandingPageComponent from './components/LandingPage/LandingPageComponent';
import UploadCoupon from './components/UploadCoupon/UploadCoupon'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import LogIn from './components/LogIn/LogIn'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

function App() {
  return (
    <div className="App">
     
      <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Header/>
      <UploadCoupon/>
      <Footer/>
      </LocalizationProvider>
      
    </div>
    
  );
}

export default App;
