import React from "react";
import "./ProdDet.css";
import Logo from "./Indigo.png"
import { Box } from "@mui/material";
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from "axios";
import { CountertopsRounded } from "@mui/icons-material";
import { AuthProvider, useAuth } from "../../Context/AuthProvider";
import Profile from "../Profile/Profile";
import { SESSION_STORAGE_KEY } from "../../constants/Constants";
const __DEV__ = document.domain === 'localhost';   // need to change while deploying"

function loadScript(src) {
  return new Promise((resolve) => {
    console.log("Inside Load Razor")
    const script = document.createElement('script')
    script.src = src
    script.onload = () => {
      resolve(true)
    }
    script.onerror = () => {
      resolve(false)
    }
    document.body.appendChild(script)
  })
}



export default function ProdDet(props) {


  const baseURL = process.env.REACT_APP_NODE_BACKEND_URL;
  const path = '/razorpay';
  const path1 = '/proddet'
  const fullUrl = baseURL.concat(path);
  const fullUrl1 = baseURL.concat(path1);

  const location = useLocation();
  const navigate = useNavigate();

  const navigateTosuccess = (obj) => {
    // 👇️ navigate to /contacts
    navigate('/payment-success', {
      state: obj
    })
  };

  const navigateTofail = (obj) => {
    // 👇️ navigate to /contacts
    navigate('/payment-fail', {
      state: obj
    })
  };
  let auth = useAuth();
  const [coupon, setcoupon] = useState({
    ID: '',
    NAME: '',
    DESCRIPTION: '',
    EXPIRY: '',
    PRICE: '',
    SELLER_ID: '',
    BUYER_ID: '',
    COUPON_CODE: '',
    NAME: '',

  });
  //*********************Razorpay Integration********************************* */
  const [name, setName] = useState('Mehul')
  async function displayRazorpay() {
    console.log("Inside Dispaly Razor")
    const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')

    if (!res) {
      alert('Razorpay SDK failed to load. Are you online?')
      return
    }

    let buyer_id;
    console.log(location.state);
    
    if (coupon.BUYER_ID == null) {
      buyer_id =  JSON.parse(localStorage.getItem(SESSION_STORAGE_KEY)).userId;
    } else {
      buyer_id = location.state.user_id;
    }
    const data = await axios
      .post(fullUrl, {
        id: buyer_id,
        amount: coupon.PRICE,
        coupon_id: coupon.ID,
      }).then((t) => {
        console.log(t);
        return t.data;
      }
      )

    console.log(data);

    const options = {
      key: __DEV__ ? 'rzp_test_NpKUjWehxc13rP' : 'PRODUCTION_KEY',              // need to change while deploying"
      currency: data.currency,
      amount: data.amount.toString(),
      order_id: data.id,
      name: 'SastaCoupon',
      description: 'Buy and Sell Coupons',
      image: 'https://i.postimg.cc/Qx7Fm4sm/Logo.png',
      handler: function (response) {

        console.log(response);
        let obj = {
          "transaction_id": response.razorpay_payment_id,
          "order_id": response.razorpay_order_id,
          "signature": response.razorpay_signature,
          "coupon_code": coupon.COUPON_CODE,
        }

        navigateTosuccess(obj);
      },
      prefill: {
        name,
        email: 'sdfdsjfh2@ndsfdf.com',
        phone_number: '9899999999'
      }

    }
    const paymentObject = new window.Razorpay(options)
    paymentObject.open()
    paymentObject.on('payment.failed', function (response) {
      alert(response.error.code);
      alert(response.error.description);
      alert(response.error.source);
      alert(response.error.step);
      alert(response.error.reason);
      alert(response.error.metadata.order_id);
      alert(response.error.metadata.payment_id);
      let obj1 = {
        "transaction_id": response.error.metadata.payment_id,
        "order_id": response.error.metadata.order_id,
        "desc": response.error.description,
      }
      navigateTofail(obj1);

    });
  }
  let value1 = {};
  let coup_id;
  //*********************************Fetching Coupon Details**************************************/
  //console.log(location.state.couponId)
  console.log(location.state)
  if (location.state == null) {
    coup_id = 1247;
  } else {
    coup_id = location.state.couponId;
  }
  useEffect(() => {
    console.log("Inside PRodetais Useeefeect");

    if (auth.getCurrentUser()) {
    } else {
      navigate('/logIn')
    }

    axios
      .get(fullUrl1, {
        params: { id: coup_id },
      })
      .then(
        (res) => {
          coup_id = res.data.ID;
          let year = res.data.EXPIRY.substring(0, 4);
          let month = res.data.EXPIRY.substring(5, 7);
          let day = res.data.EXPIRY.substring(8, 10);
          let date = day.concat("-", month, "-", year);
          value1 = {
            "ID": res.data.ID,
            "NAME": res.data.NAME,
            "DESCRIPTION": res.data.DESCRIPTION,
            "EXPIRY": date,
            "PRICE": res.data.PRICE,
            "SELLER_ID": res.SELLER_ID,
            "BUYER_ID": res.data.BUYER_ID,
            "SELLER_ID": res.data.SELLER_ID,
            "URL": res.data.URL,
            "COUPON_CODE": res.data.COUPON_CODE,
            "NAME": res.data.NAME,
          }

          console.log(value1);
          console.log(res.data.SELLER_ID)

          setcoupon(item1 => ({
            ...item1,
            ...value1
          }));

          console.log(coupon)


        }

      )
  }, []);

  //**************************************************** */
  return (
    <Box className="main1">
      <div className="coupon">
        <img className="coupondesc1" id="logo" src={coupon.URL}></img>
        {/* <div className="coupondesc2"> */}
        <Box className="desc_box" component="div" sx={{ color: 'black' }}>
          <strong color="black">Description:</strong>
        </Box>
        <Box className="desc_box" sx={{ color: 'black' }} >{coupon.DESCRIPTION}</Box>
        <Box component="div" sx={{ fontSize: 13, color: 'black' }} className="desc_box"><strong>Terms and Conditions:</strong>
          <li>By using this card,
            you agree to the Cardholder Agreement at sastacoupon.com. Participating brands may
            have their own card terms, acceptance conditions and be subject to availability.</li>
          <li> Treat this card like cash; no replacement if lost/stolen. Not reloadable;
            no cash redemption exception as required by law.</li>
          <li> Redeem this card at sastacoupon.com for an egift(s) from one or more of the participating
            merchants.</li>
        </Box>
      </div>

      <div className="coupon">
        <div className="couponitem">
          <label className="label">Coupon Id  </label>
          <label className="input">{coupon.ID}  </label>
          {/* <input type="text" className="input" value={coupon.ID}></input> */}
        </div>
        <div className="couponitem">
          <label className="label">Expiry Date</label>
          <label className="input">{coupon.EXPIRY}  </label>
          {/* <input type="text" className="input" value={coupon.EXPIRY}  ></input> */}
        </div>
        <div className="couponitem" >
          <label className="label">Name </label>
          <label className="input">{coupon.NAME}  </label>
          {/* <input type="text" className="input" value={coupon.NAME} ></input> */}
        </div>
        <div className="couponitem">
          <label className="label">Amount </label>
          <label className="input">{coupon.PRICE}  </label>
          {/* <input type="text" className="input" value={coupon.PRICE}></input> */}
        </div>
        <button className="b2" onClick={displayRazorpay}>Buy</button>
      </div>
    </Box>
  );
}