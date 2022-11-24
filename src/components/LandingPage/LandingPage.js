import './LandingPageStyle.css'
import Box from '@mui/material/Box';
import LandingPageCard from "./LandingPageCard/LandingPageCard";
import Button from '@mui/material/Button';
import bannerImage from './banner_image.png'
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function LandingPage() {

    const [coupons, setCoupons] = useState([]);

    useEffect(() => {
        const fetchCoupons = async () => {
            await axios.get('http://localhost:1347/recent-coupon').then(res => {
                if(res.status === 200) {
                    setCoupons(JSON.parse(res.data));
                }
            })
        }

        fetchCoupons();
    }, [])

    
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
                    <LandingPageCard couponId={coupon.ID} couponName={coupon.NAME} couponImage={coupon.URL} couponPrice={coupon.PRICE}/>
                )}
            </Box>
        </Box>
        <Button variant="outlined" className="primary-button">View More</Button>
        <Box className='vector-box'>
            <Button size="large" variant="outlined" className="primary-button sell">Sell your coupon</Button>
        </Box>
    </Box></>
}