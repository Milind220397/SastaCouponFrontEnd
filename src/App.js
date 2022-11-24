
import './App.css';
<<<<<<< HEAD
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Profile from "./components/Profile/Profile"
import LandingPage from './components/LandingPage/LandingPage';
import UploadCoupon from './components/UploadCoupon/UploadCoupon'
=======
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
>>>>>>> cf2399267f5ace76a73d58c5c3ef7563e1a4f740
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import RouterSwitch from './Router/RouterSwitch';
<<<<<<< HEAD
import { BrowserRouter, HashRouter } from 'react-router-dom';
=======
import { HashRouter } from 'react-router-dom';
>>>>>>> cf2399267f5ace76a73d58c5c3ef7563e1a4f740
import {AuthProvider} from './Context/AuthProvider';

function App() {
  return (
    <div className="App">
      <AuthProvider>
<<<<<<< HEAD
        <HashRouter  >
=======
        <HashRouter>
>>>>>>> cf2399267f5ace76a73d58c5c3ef7563e1a4f740
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Header/>
              <RouterSwitch/>
            <Footer/>
          </LocalizationProvider>
        </HashRouter>
      </AuthProvider>
    </div>
    
  );
}

export default App;
