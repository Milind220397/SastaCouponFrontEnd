import React from 'react'
import "./couponHistory.css";
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import axios from "axios";
import { useState, useEffect } from 'react';

const baseURL = process.env.REACT_APP_NODE_BACKEND_URL;
const path = '/couponhistory';
const fullUrl = baseURL.concat(path);

function CouponHistory() {
    let data;
    const [couponhistory, setCouponsHistory] = useState([]);

    const location = useLocation();
    useEffect(() => {
        console.log("Inside CouponHistory Useeefeect" + fullUrl);
        let id1;
        const fetch_history = async () => {

            if (location.state == null) {
                id1 = '1';
            } else {
                id1 = location.state.id
            }

            await axios
                .get(fullUrl, {
                    params: { id: id1 },
                })
                .then(
                    res => {
console.log(res)
                        const arr = res.data;
                        console.log(arr)
                        setCouponsHistory(JSON.parse(arr));
                        console.log("History")
                        console.log(couponhistory);
                    }
                )
        }

        fetch_history();

    }, []);
    return (
        <div>
         
         <ul class='nav-list1 '>
           <li>Coupon Id</li>
            <li>Coupon</li>
            <li>Bought/Sold</li>
            <li>Date </li>
            </ul>
            {/* <div class='test'> {JSON.stringify(couponhistory)} </div> */}

           {couponhistory.map((coupons) => <ul class='nav-list2 '>
           
          
           <li>{coupons.COUPON_ID} </li>
            <li><img className='image' src='https://i.postimg.cc/QMQLHZzv/travel-2.png' ></img></li>
            <li>{coupons.TRANSACTION_TYPE} </li>
            <li>{coupons.PAYMENT_TIMESTAMP.slice(0,10)} </li>
            </ul>)}
          


        </div>


    )
}
export default CouponHistory

