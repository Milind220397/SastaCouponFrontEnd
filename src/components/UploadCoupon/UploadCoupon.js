import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

import image1 from './1.png';
import image2 from './2.png';
import image3 from './3.png';

import "./UploadCoupon.css"

export default function UploadCoupon(props) {

    return <Box className='upload-coupon'>
        <p>Upload your coupon</p>
        <TextField sx={{width: '40%', minWidth: 300}} margin="normal" id="outlined-basic" label="Enter Coupon Name" variant="outlined" />
        <TextField sx={{width: '40%', minWidth: 300}} margin="normal" multiline id="outlined-basic" rows={4} label="Enter discription" variant="outlined" />
        <TextField sx={{width: '40%', minWidth: 300}} margin="normal" id="outlined-basic" label="Enter Coupon Code" variant="outlined" />
        <FormControl sx={{width: '40%', minWidth: 300}} margin="normal">
            <InputLabel id="select-label">Choose a image for your coupon</InputLabel>
            <Select
                labelId="select-label"
                id="demo-simple-select"
                //value={age}
                label="coupon image"
                //onChange={handleChange}
            >
                <MenuItem value={10}>Food</MenuItem>
                <MenuItem value={20}>Travel</MenuItem>
                <MenuItem value={30}>Medical</MenuItem>
                <MenuItem value={30}>Entertainment</MenuItem>
            </Select>
        </FormControl>
        <Box className="image-list" sx={{margin: '20px 0px'}}>
            <Box><img src={image1} alt="coupon"/></Box>
            <Box><img src={image2} alt="coupon"/></Box>
            <Box><img src={image3} alt="coupon"/></Box>
        </Box>
        <span>SELECT A DENOMINATION FOR YOUR COUPON</span>
        <Box className='denomination'>
            <Button variant="outlined" size="large">10 Credits</Button>
            <Button variant="outlined" size="large">20 Credits</Button>
            <Button variant="outlined" size="large">30 Credits</Button>
            <TextField id="outlined-basic" label="Enter Credit Amount" variant="outlined" size="small" />
        </Box>
        <span>SELECT EXPIRY DATE OF THE COUPON</span>
        <DesktopDatePicker

          label="Date desktop"
          inputFormat="MM/DD/YYYY"
          ///value={value}
          onChange={'test'}
          renderInput={(params) => <TextField {...params} />}
        />

        <Button sx={{backgroundColor: '#3C286D', margin: '30px 0px'}} size='large' variant="contained">Upload</Button>
    </Box>
}