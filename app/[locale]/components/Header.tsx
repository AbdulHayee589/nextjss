"use client";
import React, { useState } from 'react'
import { TbMoonStars } from "react-icons/tb";
import useMediaQuery from '@mui/material/useMediaQuery';
import { FaRegUserCircle } from "react-icons/fa";
import Button from '@mui/joy/Button';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

interface HeaderProps {
  setPage: React.Dispatch<React.SetStateAction<string>>;
}

const Header = ({ setPage }: HeaderProps) => {
    const isNonMobile=useMediaQuery("(min-width:767px)")
      const [selectedOption, setSelectedOption] = React.useState('Select Options');
      const [showDropdown, setShowDropdown] = useState(false);
   
    
  return (
    <div className={`flex justify-between mt-5 bg-white border border-light rounded-md shadow-md p-2  ${isNonMobile && "min-w-[70vw]"} `} >
<div className='flex items-center justify-center'> 
  <TbMoonStars className="h-6 w-6" />
</div>

    <div className='flex  items-center justify-center'>
    <div>
        
        <FormControl>
      <InputLabel id="select-label" className='bg-white'>Ceg</InputLabel>
      <Select
        labelId="select-label"
        id="select"
        value={selectedOption}
        onChange={(e)=>setSelectedOption(e.target.value)}
      >
        <MenuItem value={10} style={{ border: '1px solid #ccc', padding: '8px' }}>
          10
        </MenuItem>
        <MenuItem value={20} style={{ border: '1px solid #ccc', padding: '8px' }}>
          20
        </MenuItem>
        <MenuItem value={30} style={{ border: '1px solid #ccc', padding: '8px' }}>
        30
        </MenuItem>
      </Select>
    </FormControl>

    </div>
    <div style={{ position: 'relative' }}>
      <FaRegUserCircle
        className='h-6 w-6 mx-3 cursor-pointer'
        onClick={() => setShowDropdown(!showDropdown)}
      />
      {showDropdown && (
        <div
          style={{
            position: 'absolute',
            top: '100%', // Position the dropdown below the icon
            left: '0',
            zIndex: 2,
            background: 'white', // Customize the dropdown style as needed
            boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)', // Optional: add box shadow
          }}
        ><div>
          <Button  variant="solid" style={{color:"black"}} onClick={() => {setPage("Mycompanies")
          setShowDropdown(false);
        }} className='m-1 text-center mx-auto'>My Companies</Button></div>
          <div className='flex justify-center'>  <Button  variant="solid" style={{color:"black"}} onClick={() => console.log("Logout")} className='m-1 text-center mx-auto'>Logout</Button></div>
        </div>
      )}
    </div>
    </div>
  </div>
  )
}

export default Header