
import './App.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Profile from "./components/Profile/Profile"
import LandingPage from './components/LandingPage/LandingPage';
import UploadCoupon from './components/UploadCoupon/UploadCoupon'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import LogIn from './components/LogIn/LogIn'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import NotFoundPage from './components/ErrorPage/NotFoundPage';
import RouterSwitch from './Router/RouterSwitch';
import { BrowserRouter } from 'react-router-dom';
import {AuthProvider} from './Context/AuthProvider';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Header/>
              <RouterSwitch/>
            <Footer/>
          </LocalizationProvider>
        </BrowserRouter>
      </AuthProvider>
    </div>
    
  );
}

export default App;
