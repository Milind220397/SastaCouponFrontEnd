import { Route, Routes } from "react-router-dom";
import LandingPage from '../components/LandingPage/LandingPage';
import NotFoundPage from "../components/ErrorPage/NotFoundPage";
import UploadCoupon from "../components/UploadCoupon/UploadCoupon";
import LogIn from "../components/LogIn/LogIn";
import PrivateRoute from "./PrivateRoute";

export default function RouterSwitch() {
    return <Routes>
        <Route path="/" element={<LandingPage/>}></Route>
        <Route path="/home" element={<LandingPage/>}></Route>
        <Route path="/login" element={<LogIn isLogin={true}/>}></Route>
        <Route path="/signUp" element={<LogIn isLogin={false}/>}></Route>
        <Route path="/upload-coupon" element={<PrivateRoute><UploadCoupon/></PrivateRoute>}></Route>
        <Route path="/details">
            <Route path=":name"></Route>
        </Route>
        <Route path='*' element={<NotFoundPage/>}></Route>
    </Routes>
}