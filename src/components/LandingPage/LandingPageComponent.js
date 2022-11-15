import './LandingPageStyle.css'
import Box from '@mui/material/Box';
import LandingPageCard from "./LandingPageCard/LandingPageCard";
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import zomato from "./zomato.png"
import amazon from "./amazon.png"
import indigo from "./indigo.png"
import swiggy from "./swiggy.png"
import coupon from "./coupon.png"
import bannerImage from './banner_image.png'

export default function LandingPageComponent() {

    let coupons = [{
        couponName: 'Zomato Coupon',
        couponImage: zomato,
        couponPrice: '10 Credits'
    }, {
        couponName: 'Swiggy Coupon',
        couponImage: swiggy,
        couponPrice: '10 Credits'
    }, {
        couponName: 'Amazon Coupon',
        couponImage: amazon,
        couponPrice: '10 Credits'
    }, {
        couponName: 'Indigo Coupon',
        couponImage: indigo,
        couponPrice: '10 Credits'
    },{
        couponName: 'Indigo Coupon',
        couponImage: coupon,
        couponPrice: '10 Credits'
    }, {
        couponName: 'Indigo Coupon',
        couponImage: coupon,
        couponPrice: '10 Credits'
    }, {
        couponName: 'Indigo Coupon',
        couponImage: coupon,
        couponPrice: '10 Credits'
    }, {
        couponName: 'Indigo Coupon',
        couponImage: coupon,
        couponPrice: '10 Credits'
    }];

    
    return <>
    <Box className="banner-container">
            <Box className="banner-text">
                <p>Your Coupon, Your Choice</p>
                <p>Buy coupon codes from multiple brands</p>
                <Button size= 'medium' className="primary-button">Buy Now</Button>
            </Box>
            <Box className="banner-image">
                <img src={bannerImage} alt="banner"/>
            </Box>
    </Box>
    <Box className="featured-coupons-container">
        <p>Coupon codes you’ll love</p>
        <Box className="feature-coupons-parent">
            <Box className="featured-coupons">
                {coupons.map((coupon) => 
                    <LandingPageCard couponName={coupon.couponName} couponImage={coupon.couponImage} couponPrice={coupon.couponPrice}/>
                )}
            </Box>
        </Box>
        <Button variant="outlined" className="primary-button">View More</Button>
        <Box className='vector-box'>
            <Button size="large" variant="outlined" className="primary-button sell">Sell your coupon</Button>
        </Box>
    </Box></>
}