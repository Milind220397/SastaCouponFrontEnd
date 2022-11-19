import { Route, Routes } from "react-router-dom";
import LandingPage from '../components/LandingPage/LandingPage';
import NotFoundPage from "../components/ErrorPage/NotFoundPage";
import UploadCoupon from "../components/UploadCoupon/UploadCoupon";

export default function RouterSwitch() {
    return <Routes>
        <Route path="/" element={<LandingPage/>}></Route>
        <Route path="/home" element={<LandingPage/>}></Route>
        <Route path="/upload-coupon" element={<UploadCoupon/>}></Route>
        <Route path="/details">
            <Route path=":name"></Route>
        </Route>
        <Route path='*' element={<NotFoundPage/>}></Route>
    </Routes>
}