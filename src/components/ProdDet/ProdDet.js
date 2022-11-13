import React from "react";
import "./ProdDet.css";
import Logo from "./Indigo.png"
export default function ProdDet(props) {
  return (
    <div className="main1">
      <div className="coupon">
      <img className="coupondesc1" id="logo" src={Logo}></img>
      <div className="coupondesc2"><strong color="blue">Description:</strong>By using this card,
       you agree to the Cardholder Agreement at redeem.giftcards.com. Participating brands may 
       have their own card terms, acceptance conditions and be subject to availability. 
       Treat this card like cash; no replacement if lost/stolen. Not reloadable;
       no cash redemption exception as required by law.
       Redeem this card at redeem.giftcards.com for an egift(s) from one or more of the participating
       merchants.
       Treat this card like cash; no replacement if lost/stolen. Not reloadable;
       no cash redemption exception as required by law.
       Redeem this card at redeem.giftcards.com for an egift(s) from one or more of the participating
       merchants.
     </div>
      </div>
      <div className="coupon">
       <div className="couponitem">
         <label className="label">Coupon Id  </label>
         <input className="input" type="text"></input>
       </div>
       <div className="couponitem">
         <label className="label">Expiry Date</label>
         <input className="input" type="text"></input>
       </div>
       <div className="couponitem">
         <label className="label">Sold   by </label>
         <input className="input" type="text"></input>
       </div>
       <div className="couponitem">
         <label className="label">Amount/Credit </label>
         <input className="input" type="text"></input>
       </div>
       <button className="b2">Buy</button>
       
      </div>
    </div>
  );
}