import React from "react";
import { CiLocationOn } from "react-icons/ci";
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Button from '@mui/material/Button';
import useStore from '../store/store';





function valuetext(value) {
    return `${value}°C`;
  }    
  

function Filter() {
    const [value, setValue] = React.useState([20, 37]);
    const jobs = useStore((state) => state.jobs);
    const setJobs = useStore((state) => state.setJobs);


  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
    return (
        <div className= "font-inter mt-5 ml-5 rounded-xl border-gray border-2 bg-white h-[550px] w-[30%]">
            <div className="text-center font-bold mt-2 text-[16px]">Filter</div>
            <div className="text-start ml-2 mb-2">
                <div className="mb-1 leading-[24.2px] text-[18px] font-[300] font-inter">
                    <p>Date Posted</p>
                </div>
                <select className="font-light text-[14px] border-2 border-gray-200 rounded-[6px] w-[93%] h-[35px]" name="" id="">
                    <option value="">Last 24 Hours</option>
                </select>
            </div>
            
            <div className="p-1">
                <div className="ml-2 font-[350]"><p>Job Type</p></div>
                <div className="m-2  border-gray border-2 rounded-[5px] flex flex-col text-[14px] font-[250] w-[93%]">
                    <div className="ml-2 flex gap-2">
                        <input type="checkbox" name="" id="" />
                        <p>Full-time</p>
                    </div>
                    <div className="ml-2 flex gap-2">
                        <input type="checkbox" name="" id="" />
                        <p>Part-timer</p>
                    </div>
                    <div className="ml-2 flex gap-2">
                        <input type="checkbox" name="" id="" />
                        <p>Internship</p>
                    </div>
                    <div className="ml-2 flex gap-2">
                        <input type="checkbox" name="" id="" />
                        <p>Contract</p>
                    </div>
                    <div className="ml-2 flex gap-2">
                        <input type="checkbox" name="" id="" />
                        <p>Volunteer</p>
                    </div>
                </div>
            </div>
            <div className="ml-2 mb-2">
                <p>Location</p>
                <div className="h-[34px] flex items-center justify-center  border-gray-200 border-2 rounded-[5px] w-[93%]">
                    <CiLocationOn />
                    <input placeholder="Enter your location" className="h-full w-full ml-1  appearance-none bg-transparent border-none w-full focus:outline-none text-[12px]" type="text" />
                </div>
            </div>
            <div className="text-start ml-2 mb-2">
                <div className="mb-1 leading-[24.2px] text-[15px] font-[400] font-inter">
                    <p>Experience Level</p>
                </div>
                <select className="font-light text-[14px] border-2 border-gray-200 rounded-[6px] w-[93%] h-[35px] " name="" id="">
                    <option value="">Intermediate</option> 
                </select>
            </div>
            <div className = "ml-2 mb-2 w-[93%]"> 
                <p className="mb-1 leading-[24.2px] text-[15px] font-[400] font-inter">Experience Level</p>
                <Box  sx={{ width: 235   }}>
                    <Slider 
                        getAriaLabel={() => 'Temperature range'}
                        value={value}       
                        onChange={handleChange}
                        valueLabelDisplay="auto"
                        getAriaValueText={valuetext}
                    />
               </Box>
            </div>
            <div className="text-center">
            <Button  variant="contained" disableElevation>Reset all filter</Button>
            </div>
        </div>
    );
}

export default Filter;