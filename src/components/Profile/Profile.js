import { useState, useEffect } from 'react';
import './Profile.css';
import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import axios from "axios";
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import { TextField } from '@mui/material';

function Profile() {
  let id = 1;
  let first_name = 'Milind';
  let last_name;
  let email_id;
  let contact;
  let street;
  let zip_code;
  const [profile, setprofile] = useState({
    ID : '',
    NAME: '',
    EMAIL_ID: '',
    CONTACT: '',
    STREET: '',
    CITY: '',
    STATE: '',
    ZIP_CODE: '',
    COUNTRY: '',
  });
  async function handleSave() {
    console.log(profile);
    axios.post(`http://127.0.0.1:3000/profile?id=${profile.ID}`, {
      id: id,
      name: profile.NAME,
      contact:profile.CONTACT
    })
      .then((response) => {
        alert("Saved Successfully")
        console.log("hello",response);
      });

  }
  useEffect(() => {
    axios
      .get("http://127.0.0.1:3000/profile?id=1")
      .then(
        (res) => {
          first_name = res.data.FIRST_NAME;
          last_name = res.data.LAST_NAME;
          email_id = res.data.EMAIL_ID;
          contact = res.data.CONTACT;
          street = res.data.STREET;
          zip_code = res.data.ZIPCODE;
          let updatedValue = {};
          console.log(res.data);
          console.log(zip_code);
          let fullname = first_name.concat(" ",last_name);
          updatedValue = {
            "ID": res.data.ID,
            "NAME": fullname,
            "EMAIL_ID": email_id,
            "CONTACT":contact,
            "STREET":street,
            "CITY":res.data.CITY,
            "STATE":res.data.STATE,
            "COUNTRY":res.data.COUNTRY,
            "ZIP_CODE":zip_code
          }
          setprofile(item => ({
            ...item,
            ...updatedValue
          }));
        }

      )
  }, []);

  return (
    
    <Box className='mainbox'>
      <div className='main2'>
        <div className='profile1'>

          <div className='photo'>
            
            {/* <input
              type="file"
            /> */}
            <Avatar  alt="Remy Sharp" src="/succ.jpg"
             sx={{ width: 190, height: 200 }} variant="square"/>
          </div>

          <button className='button1'>Order history</button>

        </div>
        <div className='profile2'>
          <label className='perinfo'>Personal Information</label>
          <div className='profile21'>
            <div className='fullname1'>

              <label className='fullname11'>Full Name</label>
              <input className='fullname12' type='text' placeholder='Full Name'
                onChange={e => {
                  setprofile({ ...profile, NAME: e.target.value })
                  console.log(profile)
                }}
                value={profile.NAME}></input>
            </div>
            <div className='fullname1'>

              <label className='fullname11'>Contact Nos</label>
              <input className='fullname12' type='text'
                onChange={e => setprofile({ ...profile, CONTACT: e.target.value })}
                value={profile.CONTACT} placeholder='Contact'></input>
            </div>
            <div className='fullname1'>
              <label className='fullname11'>Email</label>
              <input className='fullname12' type='text' placeholder='Email'
                value={profile.EMAIL_ID}
                onChange={e => setprofile({ ...profile, EMAIL_ID: e.target.value })}></input>
            </div>
          </div>
          <label className='perinfo'>Address</label>
          <div className='profile22'>
            <div className='fullname'>

              <label className='fullname11'>Street</label>
              <input className='fullname12' type='text' placeholder='Street'
                value={profile.STREET}
                onChange={e => setprofile({ ...profile, STREET: e.target.value })}></input>
            </div>
            <div className='fullname'>
              <label className='fullname11'>City</label>
              <input className='fullname12' type='text' placeholder='City'
                value={profile.CITY}
                onChange={e => setprofile({ ...profile, CITY: e.target.value })}></input>

            </div>
            <div className='fullname'>
              <label className='fullname11'>State</label>
              <input className='fullname12' type='text' placeholder='State'
                value={profile.STATE}
                onChange={e => setprofile({ ...profile, STATE: e.target.value })}></input>
            </div>
            <div className='fullname'>
              <label className='fullname11'>Zip Code</label>
              <input className='fullname12' type='text' placeholder='Pin Code'
                value={profile.ZIP_CODE}
                onChange={e => setprofile({ ...profile, ZIP_CODE: e.target.value })}></input>
            </div>
            <div className='fullname'>

              <label className='fullname11'>Country</label>
              <TextField sx={{width: '40%', minWidth: 300}} margin="normal" id="outlined-basic" label="Country" variant="outlined" />
              {/* <input className='fullname12' type='text' placeholder='Country'
                value={profile.COUNTRY}
                onChange={e => setprofile({ ...profile, COUNTRY: e.target.value })}></input> */}
            </div>
          </div>
          <button className='button' onClick={handleSave}>Save</button>
        </div>
      </div>
   
      </Box>

  );
}

export default Profile;